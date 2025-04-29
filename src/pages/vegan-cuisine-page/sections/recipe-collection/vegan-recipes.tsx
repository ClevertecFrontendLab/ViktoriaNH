import { Box, Button, Text } from '@chakra-ui/react';
import { useMemo } from 'react';

import { BestCard } from '~/pages/home-page/sections/best-recipes/best-recipes-list/components/best-card';
import { BestCardSmall } from '~/pages/home-page/sections/best-recipes/best-recipes-list/components/best-small-card';
import { Recipe } from '~/types/recipe-types';
import { getCategoryList, getSubcategoryList } from '~/utils/normilize';
import { formatSubcategory, normalize } from '~/utils/normilize-categories';

interface VeganRecipesProps {
    recipes: Recipe[];
    selectedSubcategory: string | null;
    searchText: string; // <--- добавили
}

export const VeganRecipes = ({ recipes, selectedSubcategory, searchText }: VeganRecipesProps) => {
    // Фильтрация по подкатегории и по поиску
    const displayedRecipes = useMemo(() => {
        let result = recipes;

        // 1) По подкатегории (если есть)
        if (selectedSubcategory) {
            const normSel = normalize(selectedSubcategory);
            result = result.filter((r) => {
                const subs = getSubcategoryList(r.subcategory);
                const cats = getCategoryList(r.category);

                return (
                    subs.some((sub) => normalize(formatSubcategory(sub)) === normSel) ||
                    cats.some((cat) => normalize(formatSubcategory(cat)) === normSel)
                );
            });
        }

        // 2) По поисковому запросу (>=3 символов)
        if (searchText.trim().length >= 3) {
            const normSearch = normalize(searchText);
            result = result.filter((r) => normalize(r.title).includes(normSearch));
        }

        return result;
    }, [recipes, selectedSubcategory, searchText]);

    // Показываем сначала 8
    const visibleSlice = displayedRecipes.slice(0, 8);

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
                // w='100%'
                // maxW='100%'
                // overflowX='hidden'
            >
                <Box as='section' h='auto'>
                    {visibleSlice.length > 0 ? (
                        visibleSlice.map((recipe, index) => (
                            <Box
                                key={recipe.id}
                                data-test-id={`food-card-${recipe.id}-${index}`}
                                maxW='100%'
                                // minW='0'
                            >
                                <Box display={{ base: 'block', lg: 'none' }}>
                                    <BestCardSmall data={recipe} searchText={searchText} />
                                </Box>
                                <Box display={{ base: 'none', lg: 'block' }}>
                                    <BestCard data={recipe} searchText={searchText} />
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <Text color='gray.500' mt={4}>
                            Рецептов не найдено.
                        </Text>
                    )}
                </Box>
            </Box>

            {displayedRecipes.length > 8 && (
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
