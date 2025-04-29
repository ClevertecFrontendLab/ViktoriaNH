import { useEffect, useState } from 'react';

import { Recipe } from '~/types/recipe-types';

interface UseAllergenFilterProps {
    initialAllergens: string[];
}

export const useAllergenFilter = ({ initialAllergens }: UseAllergenFilterProps) => {
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
    const [availableAllergens, setAvailableAllergens] = useState<string[]>(initialAllergens);
    console.log('Initial allergens:', initialAllergens);
    const [newAllergenInput, setNewAllergenInput] = useState('');

    const toggleFilter = () => {
        setIsFilterActive((prev) => !prev);
    };

    // ВНИМАНИЕ: теперь правильно типизировано
    const handleAllergenSelectionChange = (values: string[]) => {
        console.log('handleAllergenSelectionChange received:', values);
        setSelectedAllergens(values);
    };

    const addCustomAllergen = () => {
        const trimmed = newAllergenInput.trim();
        if (trimmed && !availableAllergens.includes(trimmed)) {
            setAvailableAllergens((prev) => [...prev, trimmed]);
            setSelectedAllergens((prev) => [...prev, trimmed]);
            setNewAllergenInput('');
        }
    };

    useEffect(() => {
        if (!isFilterActive) {
            setSelectedAllergens([]);
        }
    }, [isFilterActive]);

    const filterRecipes = (recipes: Recipe[]) => {
        if (!isFilterActive || selectedAllergens.length === 0) {
            return recipes;
        }

        return recipes.filter((recipe) =>
            recipe.ingredients?.every((ingredient) =>
                selectedAllergens.every(
                    (allergen) => !ingredient.title.toLowerCase().includes(allergen.toLowerCase()),
                ),
            ),
        );
    };

    return {
        isFilterActive,
        toggleFilter,
        selectedAllergens,
        availableAllergens,
        newAllergenInput,
        setNewAllergenInput,
        addCustomAllergen,
        handleAllergenSelectionChange,
        filterRecipes,
    };
};

// Из чата взяла
