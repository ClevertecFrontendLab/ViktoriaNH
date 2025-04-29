import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export const useActiveMenu = (
    menuItems: { value: string; title: string; text: string[]; icon: string }[],
) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
    const [activeSubcategoryIndex, setActiveSubcategoryIndex] = useState<number | null>(null);
    const location = useLocation();

    useEffect(() => {
        const pathnames = location.pathname.split('/').filter(Boolean);
        if (pathnames.length >= 2) {
            const categoryIndex = menuItems.findIndex((item) => item.value === pathnames[0]);
            const subcategoryIndex = menuItems[categoryIndex]?.text.findIndex(
                (sub) => sub === pathnames[1],
            );
            setActiveCategoryIndex(categoryIndex);
            setActiveSubcategoryIndex(subcategoryIndex);
        }
    }, [location, menuItems]);

    return {
        activeCategoryIndex,
        activeSubcategoryIndex,
        setActiveCategoryIndex,
        setActiveSubcategoryIndex,
    };
};
