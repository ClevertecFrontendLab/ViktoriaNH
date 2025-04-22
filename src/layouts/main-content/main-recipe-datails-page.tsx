import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { RecipeDetailsCard } from '~/components/cards/recipe-details-card';
import { recipes } from '~/data/recipes';

export const MainRecipeDetailsPage = () => {
    const { id } = useParams();

    const recipe = recipes.find((r) => String(r.id) === String(id));

    if (!recipe) return <Box>Рецепт не найден</Box>;

    return (
        <Box
            as='main'
            mx='auto'
            h='100%'
            w='100%'
            maxW={{ base: '100%', lg: '100%', xl: '1360px' }}
            px={{ base: 4, md: 6, lg: 0 }}
        >
            <Box
                display='flex'
                flexDirection='column'
                gap={10}
                mt='80px'
                flex='1'
                mx='auto'
                w='100%'
                maxW='1360px'
                minW='0'
            >
                <RecipeDetailsCard data={recipe} />

                <Box h={{ base: '56px' }} display={{ base: 'block', xl: 'none', lg: 'none' }}></Box>
            </Box>
        </Box>
    );
};
