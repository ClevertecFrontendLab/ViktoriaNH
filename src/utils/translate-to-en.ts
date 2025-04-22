import { subcategoriesLabels } from '~/constants/subcategory-labels';

export const translateToEnglish = (categoryName: string) => {
    const translated = Object.keys(subcategoriesLabels).find(
        (key) => subcategoriesLabels[key].toLowerCase() === categoryName.toLowerCase(),
    );
    return translated || categoryName.toLowerCase();
};
