import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { subcategoriesLabels } from '~/constants/subcategory-labels'; // импортируем словарь
import { recipes } from '~/data/recipes';
import { MenuCategory } from '~/types/menu-category';
import { getCategoryList, getSubcategoryList } from '~/utils/normilize';

// Функция для перевода с русского на английский
// Функция для перевода с русского на английский
const createReverseDictionary = (labels: Record<string, string>) => {
    const reverseLabels: Record<string, string> = {};
    Object.entries(labels).forEach(([key, value]) => {
        reverseLabels[value] = key; // Переводим русский на английский
    });
    return reverseLabels;
};

// Создаем перевернутый словарь для перевода с русского на английский
const reverseSubcategoriesLabels = createReverseDictionary(subcategoriesLabels);

export const useAccordion = (menuItems: MenuCategory[]) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
    const [activeSubcategoryIndex, setActiveSubcategoryIndex] = useState<number | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Обработчик клика по категории
    const handleCategoryClick = useCallback(
        (categoryIndex: number) => {
            const category = menuItems[categoryIndex];
            const isVegan = category.title === 'Веганская кухня';
            const isAlreadyActive = activeCategoryIndex === categoryIndex;

            if (isVegan) {
                if (isAlreadyActive) {
                    // При повторном клике сворачиваем
                    setActiveCategoryIndex(null);
                    setActiveSubcategoryIndex(null);
                } else {
                    // Переход и открытие подкатегорий
                    setActiveCategoryIndex(categoryIndex);
                    setActiveSubcategoryIndex(0);
                    navigate('/vegan-cuisine'); // Переход на главную страницу Веганской кухни
                }
            } else {
                // Обычное поведение для других категорий
                setActiveCategoryIndex(isAlreadyActive ? null : categoryIndex);
                setActiveSubcategoryIndex(0);
            }
        },
        [activeCategoryIndex, menuItems, navigate],
    );

    // Обработчик клика по подкатегории
    const handleSubcategoryClick = useCallback(
        (categoryIndex: number, subcategoryIndex: number) => {
            setActiveCategoryIndex(categoryIndex);
            setActiveSubcategoryIndex(subcategoryIndex);

            const category = menuItems[categoryIndex];
            if (category.title === 'Веганская кухня') {
                const subcategoryValue = category.text[subcategoryIndex];
                const subcategoryValueEnglish = reverseSubcategoriesLabels[subcategoryValue]; // Переводим с русского на английский
                navigate(`/vegan-cuisine/${subcategoryValueEnglish}`); // Обновляем URL с подкатегорией
            }
        },
        [menuItems, navigate],
    );

    // Автоматическое открытие "Веганской кухни", если мы на соответствующей странице
    useEffect(() => {
        const isVeganPage = location.pathname.startsWith('/vegan-cuisine');
        if (isVeganPage) {
            const veganCategoryIndex = menuItems.findIndex(
                (item) => item.title === 'Веганская кухня',
            );

            if (veganCategoryIndex !== -1) {
                setActiveCategoryIndex(veganCategoryIndex);

                // Извлекаем подкатегорию из URL и устанавливаем активный индекс
                const subcategoryInUrl = location.pathname.split('/').pop();
                const subcategoryIndex = menuItems[veganCategoryIndex]?.text.findIndex(
                    (sub) => reverseSubcategoriesLabels[sub] === subcategoryInUrl,
                );

                setActiveSubcategoryIndex(subcategoryIndex !== -1 ? subcategoryIndex : 0); // По умолчанию первая подкатегория
            }
        }
    }, [location.pathname, menuItems]);

    // Фильтрация рецептов
    const filteredRecipes = recipes.filter((recipe) => {
        if (activeCategoryIndex === null || activeSubcategoryIndex === null) return false;

        const currentCategory = menuItems[activeCategoryIndex]?.value;
        const currentSubcategory = menuItems[activeCategoryIndex]?.text[activeSubcategoryIndex];

        if (!currentCategory || !currentSubcategory) return false;

        const recipeCategories = getCategoryList(recipe.category);
        const recipeSubcategories = getSubcategoryList(recipe.subcategory);

        return (
            recipeCategories.includes(currentCategory) &&
            recipeSubcategories.includes(currentSubcategory)
        );
    });

    return {
        activeCategoryIndex,
        activeSubcategoryIndex,
        handleCategoryClick,
        handleSubcategoryClick,
        filteredRecipes,
    };
};
