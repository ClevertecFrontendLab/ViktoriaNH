import { useMemo } from 'react';

import { menuItems } from '~/data/menu-items';
import { Recipe } from '~/types/recipe-types';
import { getCategoryList, getSubcategoryList } from '~/utils/normilize';
import { formatSubcategory, normalize } from '~/utils/normilize-categories';

export const useFilteredVeganRecipes = (recipes: Recipe[]) => {
    // Используем useMemo для мемоизации veganSubcategories
    const veganSubcategories = useMemo(() => {
        const item = menuItems.find((item) => item.title === 'Веганская кухня');
        return item ? item.text.map(normalize) : [];
    }, []); // Зависимость пустая, так как menuItems не меняется

    return useMemo(
        () =>
            recipes.filter((recipe) => {
                const categories = getCategoryList(recipe.category);
                const subcategories = getSubcategoryList(recipe.subcategory);

                const isExplicitlyVegan = categories.includes('vegan');
                const hasVeganSubcategory = subcategories.some((subcat) =>
                    veganSubcategories.includes(normalize(formatSubcategory(subcat))),
                );

                return isExplicitlyVegan || hasVeganSubcategory;
            }),
        [recipes, veganSubcategories], // Теперь зависимость от veganSubcategories есть
    );
};
