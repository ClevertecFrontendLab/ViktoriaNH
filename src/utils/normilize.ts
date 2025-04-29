// Эти функции принимают либо строку, либо массив строк, и всегда возвращают массив строк

export const getCategoryList = (category: string | string[] = []): string[] =>
    Array.isArray(category) ? category : [category];

export const getSubcategoryList = (subcategory: string | string[] = []): string[] =>
    Array.isArray(subcategory) ? subcategory : [subcategory];
