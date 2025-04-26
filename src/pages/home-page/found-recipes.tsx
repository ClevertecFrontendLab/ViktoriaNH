import { Box } from '@chakra-ui/react';
import { useMemo } from 'react';

import { useAllRecipes } from '../../hooks/use-all-recipes'; // твой хук получения всех рецептов
import { BestCard } from '../home-page/sections/best-recipes/best-recipes-list/components/best-card'; // карточка рецепта
import { BestCardSmall } from './sections/best-recipes/best-recipes-list/components/best-small-card';

interface FoundRecipesListProps {
    searchText: string;
}
export const FoundRecipesList: React.FC<FoundRecipesListProps> = ({ searchText }) => {
    const allRecipes = useAllRecipes(); // Получаем все рецепты из стора или моков

    const filteredRecipes = useMemo(() => {
        if (!allRecipes) return []; // Если нет рецептов, возвращаем пустой массив
        const normalizedSearch = searchText.toLowerCase();
        return allRecipes.filter((recipe) => recipe.title.toLowerCase().includes(normalizedSearch));
    }, [allRecipes, searchText]);

    if (filteredRecipes.length === 0) {
        return (
            <Box textAlign='center' mt='40px'>
                Ничего не найдено
            </Box>
        );
    }

    // return (
    //     <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt='24px'>
    //         {filteredRecipes.map((recipe) => (
    //             <BestCard key={recipe.id} data={recipe} searchText={searchText} />
    //         ))}
    //     </SimpleGrid>
    // );

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
            {filteredRecipes.map((recipe) => (
                <Box
                    key={`small-${recipe.id}`}
                    display={{
                        base: 'block',
                        md: 'block',
                        lg: 'none',
                    }}
                >
                    <BestCardSmall data={recipe} searchText={searchText} />
                </Box>
            ))}

            {filteredRecipes.map((recipe) => (
                <Box
                    key={`big-${recipe.id}`}
                    display={{
                        base: 'none',
                        md: 'none',
                        lg: 'block',
                    }}
                >
                    <BestCard data={recipe} searchText={searchText} />
                </Box>
            ))}
        </Box>
    );
};
