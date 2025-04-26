import { Recipe } from '~/types/recipe-types';

import { translateToEnglish } from './to-kebab-case';

export const getRecipePath = (recipe: Recipe): string => {
    const category = Array.isArray(recipe.category) ? recipe.category[0] : recipe.category;
    const subcategory = Array.isArray(recipe.subcategory)
        ? recipe.subcategory[0]
        : recipe.subcategory;

    const categorySlug = translateToEnglish(category);
    const subcategorySlug = translateToEnglish(subcategory);

    return `/${categorySlug}/${subcategorySlug}/${recipe.id}`;
};
