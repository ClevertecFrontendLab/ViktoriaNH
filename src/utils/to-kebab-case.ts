import { subcategoriesLabels } from '~/constants/subcategory-labels';

export const toKebabCase = (str: string) =>
    str
        .toLowerCase() // Преобразуем в нижний регистр
        .replace(/[\s_]+/g, '-') // Заменяем пробелы и подчеркивания на дефисы
        .replace(/[^\w-]+/g, '') // Убираем все, что не является буквами, цифрами или дефисами
        .replace(/^-+|-+$/g, ''); // Убираем дефисы в начале и в конце

export const translateToEnglish = (categoryName: string) => {
    const translated = Object.keys(subcategoriesLabels).find(
        (key) => subcategoriesLabels[key].toLowerCase() === categoryName.toLowerCase(),
    );
    return translated ? toKebabCase(translated) : toKebabCase(categoryName); // Если нашли перевод, то переводим, если нет - оставляем в кебаб-кейсе
};
