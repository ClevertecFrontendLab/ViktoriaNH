import { Box } from '@chakra-ui/react';

import { recipes } from '~/data/recipes';
import { Recipe } from '~/data/recipes';

import { VeganCuisineBlock } from './vegan-cuisine-block';
import { VeganCuisineCard } from './vegan-cuisine-card';

export interface VeganCuisineBlockProps {
    data: Recipe;
}

export const VeganCuisineList = () => {
    const cardsCount = 2;
    const blocksCount = 3;

    // Фильтрация по категории "vegan"
    const veganRecipes = recipes.filter((recipe) =>
        Array.isArray(recipe.category)
            ? recipe.category.includes('vegan')
            : recipe.category === 'vegan',
    );

    const cardRecipes = veganRecipes.slice(0, cardsCount);
    const blockRecipes = veganRecipes.slice(cardsCount, cardsCount + blocksCount);

    return (
        <Box
            display='flex'
            flexDirection={{ base: 'column', md: 'row' }}
            gap={{ base: '12px', lg: '16px', xl: '24px' }}
            w='100%'
            minW={0}
        >
            {/* Блок карточек с изображением */}
            <Box
                display='flex'
                flexWrap='wrap'
                gap={{ base: '12px', lg: '16px', xl: '24px' }}
                flexShrink={0}
                minW={0}
            >
                {cardRecipes.map((recipe) => (
                    <VeganCuisineCard key={recipe.id} data={recipe} />
                ))}
            </Box>

            {/* Карточки с иконками и текстом */}
            <Box
                display='flex'
                flexDirection='column'
                gap='12px'
                flexShrink={0}
                flex={1}
                w={{ base: '100%', md: '208px' }}
            >
                {blockRecipes.map((recipe) => (
                    <VeganCuisineBlock key={recipe.id} data={recipe} />
                ))}
            </Box>
        </Box>
    );
};
