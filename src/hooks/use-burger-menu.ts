// Хук для управления состоянием меню
import { useEffect, useState } from 'react';

export const useBurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return { isMenuOpen, toggleMenu };
};
