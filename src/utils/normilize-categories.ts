import { subcategoriesLabels } from '~/constants/subcategory-labels';

export const normalize = (str: string) => str?.toLowerCase();

export const formatSubcategory = (subcategory: string): string =>
    subcategoriesLabels[subcategory.toLowerCase()] || subcategory;
