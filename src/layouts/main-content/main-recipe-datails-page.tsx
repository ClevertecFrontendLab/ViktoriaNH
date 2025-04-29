import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { RecipeDetailsCard } from '~/components/cards/recipe-details-card';
import { NutritionInfo } from '~/components/recipe-card/nutrition-info';
import { RecipeAuthorCard } from '~/components/recipe-card/recipe-author';
import { RecipeIngredients } from '~/components/recipe-card/recipe-ingridients';
import { RecipeSteps } from '~/components/recipe-card/recipe-steps';
import { recipes } from '~/data/recipes';
import { users } from '~/data/users';
import { NewRecipeList } from '~/pages/home-page/sections/new-recipes/new-recipes-list/new-recipes-list';

export const MainRecipeDetailsPage = () => {
    const { id } = useParams();

    const recipe = recipes.find((r) => String(r.id) === String(id));

    if (!recipe) return <Box>Рецепт не найден</Box>;

    return (
        <Box
            as='main'
            mt={{ base: 4, lg: 14 }}
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
                <NutritionInfo data={recipe} />
                {recipe.ingredients && recipe.portions !== undefined ? (
                    <RecipeIngredients
                        ingredients={recipe.ingredients}
                        basePortions={recipe.portions}
                    />
                ) : (
                    <Text textAlign='center' color='gray.500'>
                        Ингредиенты не указаны
                    </Text>
                )}
                <RecipeSteps steps={recipe.steps} />
                <RecipeAuthorCard data={users} />

                <NewRecipeList />

                <Box h={{ base: '56px' }} display={{ base: 'block', xl: 'none', lg: 'none' }}></Box>
            </Box>
        </Box>
    );
};
