import { Recipe } from '~/types/recipe-types';

export const filterBySearch = (recipes: Recipe[], query: string): Recipe[] => {
    if (!query.trim()) return recipes; // Если поиск пустой, возвращаем переданные рецепты без изменений

    const lowerCaseQuery = query.trim().toLowerCase();
    return recipes.filter((recipe) => recipe.title.toLowerCase().includes(lowerCaseQuery));
};
