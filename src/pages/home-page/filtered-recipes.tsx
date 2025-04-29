import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Recipe } from '~/types/recipe-types';

import { BestCard } from './sections/best-recipes/best-recipes-list/components/best-card';
import { BestCardSmall } from './sections/best-recipes/best-recipes-list/components/best-small-card';

interface FilteredRecipesProps {
    recipes: Recipe[];
    selectedAllergens: string[];
    filterRecipesByAllergens: (recipes: Recipe[], selectedAllergens: string[]) => Recipe[];
}

export const FilteredRecipes: React.FC<FilteredRecipesProps> = ({
    recipes,
    selectedAllergens,
    filterRecipesByAllergens,
}) => {
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

    // Обновляем отфильтрованные рецепты при изменении выбранных аллергенов
    useEffect(() => {
        const updatedFilteredRecipes = filterRecipesByAllergens(recipes, selectedAllergens);
        setFilteredRecipes(updatedFilteredRecipes);
    }, [recipes, selectedAllergens, filterRecipesByAllergens]);

    return (
        <Box
            display='grid'
            gridTemplateColumns={{
                base: '1fr',
                md: 'repeat(2, 1fr)',
                lg: '1fr',
                xl: 'repeat(2, 1fr)',
            }}
            gap={{
                base: '12px',
                md: '16px',
                lg: '16px',
                xl: '24px',
            }}
            width='100%'
            mt='24px'
        >
            {filteredRecipes.map((data) => (
                <Box key={data.id}>
                    {/* Маленькая карточка на мобиле и планшете */}
                    <Box
                        display={{
                            base: 'block',
                            md: 'block',
                            lg: 'none',
                            xl: 'none',
                        }}
                    >
                        <BestCardSmall data={data} />
                    </Box>

                    {/* Большая карточка на десктопе */}
                    <Box
                        display={{
                            base: 'none',
                            md: 'none',
                            lg: 'block',
                        }}
                    >
                        <BestCard data={data} />
                    </Box>
                </Box>
            ))}
        </Box>
    );
};
