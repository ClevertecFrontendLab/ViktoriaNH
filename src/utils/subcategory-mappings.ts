import { subcategoriesLabels } from '../constants/subcategory-labels';

// Обратный словарь: Русское название → Английский slug
export const subcategoriesRuToEn: Record<string, string> = Object.entries(
    subcategoriesLabels,
).reduce(
    (acc, [en, ru]) => {
        acc[ru.toLowerCase()] = en; // Ключи в нижнем регистре для надёжного сравнения
        return acc;
    },
    {} as Record<string, string>,
);
