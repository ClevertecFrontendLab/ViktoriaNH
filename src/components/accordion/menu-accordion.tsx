import { Accordion } from '@chakra-ui/react';

import { MenuCategory } from '~/types/menu-category';

import { useAccordion } from '../../hooks/use-accordion';
import { MenuCategoryItem } from './components/menu-category';

interface MenuAccordionProps {
    menuItems: MenuCategory[];
}

export const MenuAccordion: React.FC<MenuAccordionProps> = ({ menuItems }) => {
    const {
        activeCategoryIndex,
        activeSubcategoryIndex,
        handleCategoryClick,
        handleSubcategoryClick,
    } = useAccordion(menuItems);

    return (
        <Accordion
            h='100%'
            overflowY='auto'
            allowToggle
            index={activeCategoryIndex ?? -1} // ← Контролируем открытие панели
        >
            {menuItems.map((item, categoryIndex) => (
                <MenuCategoryItem
                    key={categoryIndex}
                    item={item}
                    categoryIndex={categoryIndex}
                    activeCategoryIndex={activeCategoryIndex}
                    activeSubcategoryIndex={activeSubcategoryIndex}
                    handleCategoryClick={handleCategoryClick}
                    handleSubcategoryClick={handleSubcategoryClick}
                />
            ))}
        </Accordion>
    );
};
