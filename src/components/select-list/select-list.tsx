import { useSelectList } from '~/hooks/use-select-list';

import { SelectAllergens } from './select-allergens';

export interface SelectListProps {
    allergens: string[];
    selectedAllergens: string[];
    handleSelectAllergen: (value: (string | number)[]) => void;
    isFilterActive: boolean;
    newAllergen: string;
    setNewAllergen: (value: string) => void;
    handleAddCustomAllergen: () => void;
}

export const SelectList: React.FC<SelectListProps> = ({
    allergens,
    selectedAllergens,
    handleSelectAllergen,
    isFilterActive,
    newAllergen,
    setNewAllergen,
    handleAddCustomAllergen,
}) => {
    const { isMenuOpen, toggleMenu, handleKeyPress } = useSelectList(isFilterActive);

    const wrappedKeyPress = (e: React.KeyboardEvent) =>
        handleKeyPress(e, newAllergen, handleAddCustomAllergen);

    return (
        <SelectAllergens
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            allergens={allergens}
            selectedAllergens={selectedAllergens}
            handleSelectAllergen={handleSelectAllergen}
            isFilterActive={isFilterActive}
            newAllergen={newAllergen}
            setNewAllergen={setNewAllergen}
            handleAddCustomAllergen={handleAddCustomAllergen}
            handleKeyPress={wrappedKeyPress}
        />
    );
};
