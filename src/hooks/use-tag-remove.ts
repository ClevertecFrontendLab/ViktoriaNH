export type FilterType = 'category' | 'author' | 'allergen' | 'meat' | 'garnish';

interface RemoveTagProps {
    // Для категорий, авторов, мяса и гарниров — стандартные сеттеры useState
    setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
    setSelectedAuthors: React.Dispatch<React.SetStateAction<string[]>>;
    setSelectedMeatTypes: React.Dispatch<React.SetStateAction<string[]>>;
    setSelectedGarnishTypes: React.Dispatch<React.SetStateAction<string[]>>;

    // Для аллергенов — прокидываем текущий массив + коллбэк
    selectedAllergens: string[];
    handleAllergenSelectionChange: (newAllergens: string[]) => void;
}

// 2) Реализация хука
export const useTagRemove = ({
    setSelectedCategories,
    setSelectedAuthors,
    setSelectedMeatTypes,
    setSelectedGarnishTypes,
    selectedAllergens, // ← ДОБАВИТЬ ЭТО
    handleAllergenSelectionChange,
}: RemoveTagProps) => {
    const handleTagRemove = (tag: string, type: FilterType) => {
        switch (type) {
            case 'category':
                setSelectedCategories((prev) => prev.filter((c) => c !== tag));
                break;
            case 'author':
                setSelectedAuthors((prev) => prev.filter((a) => a !== tag));
                break;
            case 'allergen': {
                const next = selectedAllergens.filter((a) => a !== tag);
                handleAllergenSelectionChange(next);
                break;
            }
            case 'meat':
                setSelectedMeatTypes((prev) => prev.filter((m) => m !== tag));
                break;
            case 'garnish':
                setSelectedGarnishTypes((prev) => prev.filter((g) => g !== tag));
                break;
            default:
                break;
        }
    };

    return { handleTagRemove };
};
