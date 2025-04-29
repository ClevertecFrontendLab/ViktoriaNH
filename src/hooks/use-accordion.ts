import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { subcategoriesLabels } from '~/constants/subcategory-labels';
import { MenuCategory } from '~/types/menu-category';
import { createDictionary } from '~/utils/create-dictionary';

const reverseSubcategoriesLabels = createDictionary(subcategoriesLabels);

export const useAccordion = (menuItems: MenuCategory[]) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
    const [activeSubcategoryIndex, setActiveSubcategoryIndex] = useState<number | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    // индекс категории “Веганская кухня”
    const veganCategoryIndex = menuItems.findIndex((item) => item.title === 'Веганская кухня');

    // 1. Клик по категории
    const handleCategoryClick = useCallback(
        (categoryIndex: number) => {
            const isVegan = categoryIndex === veganCategoryIndex;

            // если кликнули на уже открытую — закрываем
            const newCat = activeCategoryIndex === categoryIndex ? null : categoryIndex;
            setActiveCategoryIndex(newCat);

            // всегда ставим первую подкатегорию активной (или сбрасываем)
            const newSub = newCat === null ? null : 0;
            setActiveSubcategoryIndex(newSub);

            // навигация — только для Vegan
            if (newCat !== null && isVegan) {
                const firstSub = menuItems[newCat].text[0];
                const subSlug = reverseSubcategoriesLabels[firstSub];
                navigate(`/vegan/${subSlug}`);
            }
        },
        [activeCategoryIndex, menuItems, navigate, veganCategoryIndex],
    );

    // 2. Клик по подкатегории
    const handleSubcategoryClick = useCallback(
        (categoryIndex: number, subcategoryIndex: number) => {
            setActiveCategoryIndex(categoryIndex);
            setActiveSubcategoryIndex(subcategoryIndex);

            // навигация — только для Vegan
            if (categoryIndex === veganCategoryIndex) {
                const sub = menuItems[categoryIndex].text[subcategoryIndex];
                const subSlug = reverseSubcategoriesLabels[sub];
                navigate(`/vegan/${subSlug}`);
            }
        },
        [menuItems, navigate, veganCategoryIndex],
    );

    // 3. Синхронизация состояния из URL (только для Vegan)
    useEffect(() => {
        const parts = location.pathname.split('/').filter(Boolean);

        if (parts[0] === 'vegan' && veganCategoryIndex !== -1) {
            setActiveCategoryIndex(veganCategoryIndex);

            const slug = parts[1] || '';
            const rus = subcategoriesLabels[slug];
            const idx =
                rus != null ? menuItems[veganCategoryIndex].text.findIndex((t) => t === rus) : -1;
            setActiveSubcategoryIndex(idx >= 0 ? idx : 0);
            return;
        }

        // если url не /vegan/... — сбросить выделение
        setActiveCategoryIndex(null);
        setActiveSubcategoryIndex(null);
    }, [location.pathname, menuItems, veganCategoryIndex]);

    return {
        activeCategoryIndex,
        activeSubcategoryIndex,
        handleCategoryClick,
        handleSubcategoryClick,
    };
};
