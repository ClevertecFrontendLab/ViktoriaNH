import { Box, Button, Text } from '@chakra-ui/react';
import { useMemo } from 'react';

import { categoryLabels } from '~/constants/category-labels';
import { subcategoriesLabels } from '~/constants/subcategory-labels';
import { BestCard } from '~/pages/home-page/sections/best-recipes/best-recipes-list/components/best-card';
import { BestCardSmall } from '~/pages/home-page/sections/best-recipes/best-recipes-list/components/best-small-card';
import { getCategoryList, getSubcategoryList } from '~/utils/normilize';

import { Recipe } from '../../../../types/recipe-types';

interface VeganRecipesProps {
    recipes: Recipe[];
    selectedSubcategory: string | null;
    searchText: string; // <--- добавили
}

const formatSubcategory = (subcategory: string): string =>
    subcategoriesLabels[subcategory.toLowerCase()] || subcategory;

const formatCategory = (category: string): string =>
    categoryLabels[category.toLowerCase()] || category;

const normalize = (str: string) => str?.toLowerCase();

export const VeganRecipes = ({ recipes, selectedSubcategory, searchText }: VeganRecipesProps) => {
    console.log('All recipes:', recipes);

    const filteredRecipes = useMemo(() => {
        let updatedRecipes = recipes;

        if (selectedSubcategory) {
            const normalizedSelected = normalize(selectedSubcategory);

            updatedRecipes = updatedRecipes.filter((recipe) => {
                const subcategories = getSubcategoryList(recipe.subcategory);
                const categories = getCategoryList(recipe.category);

                const hasMatchingSubcategory = subcategories.some(
                    (sub) => normalize(formatSubcategory(sub)) === normalizedSelected,
                );

                const hasMatchingCategory = categories.some(
                    (cat) => normalize(formatCategory(cat)) === normalizedSelected,
                );

                return hasMatchingSubcategory || hasMatchingCategory;
            });
        }

        if (searchText?.trim().length >= 3) {
            const normalizedSearch = normalize(searchText);
            updatedRecipes = updatedRecipes.filter((recipe) =>
                normalize(recipe.title).includes(normalizedSearch),
            );
        }

        return updatedRecipes;
    }, [recipes, selectedSubcategory, searchText]);

    const displayedRecipes = filteredRecipes.slice(0, 8);

    return (
        <Box
            as='section'
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap={4}
            w='full'
            mb={10}
        >
            <Box
                display='grid'
                gridTemplateColumns={{
                    base: '1fr',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(1, 1fr)',
                    xl: 'repeat(2, 1fr)',
                }}
                gap={{ base: '8px', md: '12px', lg: '16px', xl: '16px' }}
                w='100%'
                maxW='100%'
                overflowX='hidden'
            >
                {displayedRecipes.map((recipe) => (
                    <Box key={`recipe-${recipe.id}`} maxW='100%' minW='0'>
                        <Box display={{ base: 'block', lg: 'none' }}>
                            <BestCardSmall data={recipe} searchText={searchText} />
                        </Box>
                        <Box display={{ base: 'none', lg: 'block' }}>
                            <BestCard data={recipe} searchText={searchText} />
                        </Box>
                    </Box>
                ))}
            </Box>

            {displayedRecipes.length === 0 ? (
                <Text color='gray.500' mt={4}>
                    Рецептов не найдено.
                </Text>
            ) : (
                <Button
                    w='152px'
                    h='40px'
                    px='16px'
                    borderRadius='6px'
                    gap='8px'
                    bg='lime.400'
                    _hover={{ bg: 'lime.500' }}
                    _active={{ bg: 'lime.600' }}
                    fontSize='16px'
                    fontWeight='600'
                    lineHeight='24px'
                >
                    Загрузить ещё
                </Button>
            )}
        </Box>
    );
};
