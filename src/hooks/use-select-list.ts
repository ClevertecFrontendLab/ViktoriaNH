import { useEffect, useState } from 'react';

export const useSelectList = (isFilterActive: boolean) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        // открываем/закрываем меню только если фильтр активен
        if (isFilterActive) {
            setIsMenuOpen((prev) => !prev);
        }
    };

    // если фильтр выключили — сразу закрываем меню
    useEffect(() => {
        if (!isFilterActive) {
            setIsMenuOpen(false);
        }
    }, [isFilterActive]);

    const handleKeyPress = (
        e: React.KeyboardEvent,
        newAllergen: string,
        handleAddCustomAllergen: () => void,
    ) => {
        if (e.key === 'Enter' && newAllergen.trim()) {
            e.preventDefault();
            handleAddCustomAllergen();
        }
    };

    return { isMenuOpen, toggleMenu, handleKeyPress };
};
