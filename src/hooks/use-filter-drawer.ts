import { useState } from 'react';

import { categoryLabels } from '~/constants/category-labels';
import { Recipe } from '~/types/recipe-types';

import { FilterState } from '../components/drawer/filter-drawer';

export const useRecipeFilters = (initialRecipes: Recipe[]) => {
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(initialRecipes);

    const applyFilters = (filters: FilterState) => {
        const result = filterRecipes(initialRecipes, filters);
        setFilteredRecipes(result);
    };

    const resetFilters = () => {
        setFilteredRecipes(initialRecipes);
    };

    return { filteredRecipes, applyFilters, resetFilters };
};

function filterRecipes(recipes: Recipe[], filters: FilterState): Recipe[] {
    // если нет фильтров — вернуть всё
    if (!filters) return recipes;

    return recipes.filter((recipe) => {
        // ---- категории ----
        if (filters.categories.length > 0) {
            // приводим к массиву строк
            const categories: string[] = Array.isArray(recipe.category)
                ? recipe.category
                : [recipe.category];

            // переводим на русский и фильтруем пустые
            const recipeCategoriesInRussian = categories
                .map((c: string) => categoryLabels[c])
                .filter((label): label is string => Boolean(label));

            const matchesCategory = filters.categories.some((sel) =>
                recipeCategoriesInRussian.includes(sel),
            );
            if (!matchesCategory) return false;
        }

        // ---- авторы ----
        if (filters.authors.length > 0) {
            // если у Recipe появится поле author: string
            // if (!recipe.author || !filters.authors.includes(recipe.author)) return false;
        }

        // ---- аллергены ----
        if (filters.allergens.length > 0) {
            const ingredients = recipe.ingredients ?? [];
            const ingredientTitles = ingredients.map((ing) => ing.title.toLowerCase());

            const hasAllergens = filters.allergens.some((al) =>
                ingredientTitles.includes(al.toLowerCase()),
            );

            if (filters.excludeAllergens) {
                // исключаем те, у кого есть хотя бы один аллерген
                if (hasAllergens) return false;
            } else {
                // ищем только те, у кого есть хотя бы один аллерген
                if (!hasAllergens) return false;
            }
        }

        // ---- тип мяса ----
        if (filters.meatTypes.length > 0) {
            // recipe.meat может быть '' или string
            if (!recipe.meat || !filters.meatTypes.includes(recipe.meat)) {
                return false;
            }
        }

        // ---- тип гарнира ----
        if (filters.garnishTypes.length > 0) {
            if (!recipe.side || !filters.garnishTypes.includes(recipe.side)) {
                return false;
            }
        }

        return true;
    });
}
