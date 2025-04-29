import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { subcategoriesLabels } from '~/constants/subcategory-labels';
import { menuItems } from '~/data/menu-items';
import { createDictionary } from '~/utils/create-dictionary';

const reverseSubcategoriesLabels = createDictionary(subcategoriesLabels);

export const useRecipeTabFilter = (
    initialSubcategory: string | null,
    onSubcategoryChange: (subcategory: string | null) => void,
) => {
    const location = useLocation();
    const navigate = useNavigate();
    const veganSubcategories = useMemo(() => {
        const item = menuItems.find((i) => i.title === 'Веганская кухня');
        return item ? item.text : [];
    }, []);

    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(() =>
        initialSubcategory && veganSubcategories.includes(initialSubcategory)
            ? initialSubcategory
            : veganSubcategories[0] || null,
    );

    useEffect(() => {
        const parts = location.pathname.split('/').filter(Boolean);
        if (parts[0] === 'vegan') {
            const slug = parts[1] || '';
            const rus = subcategoriesLabels[slug] || subcategoriesLabels['snacks'];
            if (rus && veganSubcategories.includes(rus)) {
                setSelectedSubcategory(rus);
            } else {
                setSelectedSubcategory(veganSubcategories[0]); // fallback на первую подкатегорию
            }
        }
    }, [location.pathname, veganSubcategories]);

    // 2. Оповещаем родителя, когда tab меняется
    useEffect(() => {
        onSubcategoryChange(selectedSubcategory);
    }, [selectedSubcategory, onSubcategoryChange]);

    const handleTabChange = useCallback(
        (index: number) => {
            const newSub = veganSubcategories[index];
            setSelectedSubcategory(newSub);
            const slug = reverseSubcategoriesLabels[newSub];
            navigate(`/vegan/${slug}`);
        },
        [veganSubcategories, navigate],
    );

    return { selectedSubcategory, handleTabChange, veganSubcategories };
};
