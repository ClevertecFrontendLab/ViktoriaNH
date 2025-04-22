// Эти функции принимают либо строку, либо массив строк, и всегда возвращают массив строк

export const getCategoryList = (category: string | string[] = []): string[] =>
    Array.isArray(category) ? category : [category];

export const getSubcategoryList = (subcategory: string | string[] = []): string[] =>
    Array.isArray(subcategory) ? subcategory : [subcategory];

// export const ruToEn = (title: string): string =>
//   subcategoriesRuToEn[title.toLowerCase()] || title;

// export const enToRu = (slug: string): string =>
//    subcategoriesEnToRu[slug] || slug;

export const toKebabCase = (str: string): string =>
    str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-zа-яё0-9-]/gi, '');
