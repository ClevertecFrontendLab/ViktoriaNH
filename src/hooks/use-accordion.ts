import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { subcategoriesLabels } from '~/constants/subcategory-labels';
import { recipes } from '~/data/recipes';
import { MenuCategory } from '~/types/menu-category';
import { createDictionary } from '~/utils/create-dictionary';
import { getCategoryList, getSubcategoryList } from '~/utils/normilize';

const reverseSubcategoriesLabels = createDictionary(subcategoriesLabels);

// ЭТО ОЧЕНЬ ВАЖНЫЙ КОД, с ними все работает в веганской кухне и слайдере, но не работает остальное меню
// Создаем перевернутый словарь для перевода с русского на английский

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
                    setActiveCategoryIndex(null);
                    setActiveSubcategoryIndex(null);
                } else {
                    setActiveCategoryIndex(categoryIndex);
                    setActiveSubcategoryIndex(0);
                    navigate('/vegan-cuisine/snacks');
                }
            } else {
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
                const subcategoryValueEnglish = reverseSubcategoriesLabels[subcategoryValue];
                navigate(`/vegan-cuisine/${subcategoryValueEnglish}`);
            }
        },
        [menuItems, navigate],
    );

    useEffect(() => {
        const isVeganPage = location.pathname.startsWith('/vegan-cuisine');
        if (isVeganPage) {
            const veganCategoryIndex = menuItems.findIndex(
                (item) => item.title === 'Веганская кухня',
            );

            if (veganCategoryIndex !== -1) {
                setActiveCategoryIndex(veganCategoryIndex);

                const subcategoryInUrl = location.pathname.split('/').pop();
                const subcategoryIndex = menuItems[veganCategoryIndex]?.text.findIndex(
                    (sub) => reverseSubcategoriesLabels[sub] === subcategoryInUrl,
                );

                setActiveSubcategoryIndex(subcategoryIndex !== -1 ? subcategoryIndex : 0);
            }
        }
    }, [location.pathname, menuItems]);

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
