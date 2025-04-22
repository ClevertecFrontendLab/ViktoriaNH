import { menuItems } from '~/data/menu-items';

import { categoryLabels } from '../constants/category-labels';
import { subcategoriesLabels } from '../constants/subcategory-labels';
import { Recipe } from '../types/recipe-types';

export const getCategoryIcon = (recipe: Recipe) => {
    const category = Array.isArray(recipe.category) ? recipe.category[0] : recipe.category;
    const subcategory = Array.isArray(recipe.subcategory)
        ? recipe.subcategory[0]
        : recipe.subcategory;

    const translatedCategory = categoryLabels[category];
    const translatedSubcategory = subcategoriesLabels[subcategory];

    // Пытаемся найти совпадение сначала по категории, потом по подкатегории
    const matchTitle = translatedCategory || translatedSubcategory;

    if (!matchTitle) {
        return { icon: '', title: '' }; // нет совпадения
    }

    const foundItem = menuItems.find(
        (item) => item.title === matchTitle || item.text.includes(matchTitle),
    );

    return {
        icon: foundItem?.icon || '',
        title: matchTitle,
    };
};
