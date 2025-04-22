import { categoryLabels } from '~/constants/category-labels';
import { subcategoriesLabels } from '~/constants/subcategory-labels';
import { menuItems } from '~/data/menu-items';

export const getCategoryIcon = (category: string) => {
    // Пытаемся найти русское название в категории или подкатегории
    const translatedTitle = categoryLabels[category] || subcategoriesLabels[category];

    if (!translatedTitle) {
        // если ключа нет ни в одном из словарей — просто вернуть сам ключ
        return { title: category, icon: '' };
    }

    // Ищем иконку в menuItems по переведённому названию
    const menuItem = menuItems.find(
        (item) => item.title.toLowerCase() === translatedTitle.toLowerCase(),
    );

    return {
        title: translatedTitle,
        icon: menuItem?.icon || '',
    };
};
