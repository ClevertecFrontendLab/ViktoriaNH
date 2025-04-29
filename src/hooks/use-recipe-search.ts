import { useState } from 'react';

import { Recipe } from '~/types/recipe-types';

export const useRecipeSearch = (recipes: Recipe[]) => {
    const [searchText, setSearchText] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

    const handleSearch = (query: string) => {
        const lowerCaseQuery = query.trim().toLowerCase();

        if (lowerCaseQuery === '') {
            setFilteredRecipes(recipes); // Показываем все рецепты
        } else {
            const filteredByName = recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(lowerCaseQuery),
            );
            setFilteredRecipes(filteredByName);
        }
        setSearchText(query); // Обновляем строку поиска
    };

    return {
        searchText,
        filteredRecipes,
        handleSearch,
    };
};
