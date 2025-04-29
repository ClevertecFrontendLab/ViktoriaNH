import { Box } from '@chakra-ui/react';
import { useMemo, useState } from 'react';

import { recipes } from '~/data/recipes';
import { useRecipeFilters } from '~/hooks/use-filter-drawer';
import { FoundRecipesList } from '~/pages/home-page/found-recipes-all';
import { BestRecipes } from '~/pages/home-page/sections/best-recipes/best-recipes';
import { CulinaryBlog } from '~/pages/home-page/sections/culinary-blog/culinary-blog';
import { NewRecipes } from '~/pages/home-page/sections/new-recipes/new-recipes';
import { SearchBlock } from '~/pages/home-page/sections/search-block/search-block';
import { VeganCusine } from '~/pages/home-page/sections/vegan-cuisine/vegan-cusine';
import { Recipe } from '~/types/recipe-types';

interface MainContentProps {
    recipes: Recipe[]; // Типизируем проп recipes
}

export const MainContent: React.FC<MainContentProps> = () => {
    const [searchText, setSearchText] = useState('');
    const isSearching = searchText.length >= 3;

    const { filteredRecipes, applyFilters, resetFilters } = useRecipeFilters(recipes);

    // Фильтрация активна, если количество отфильтрованных !== исходному
    const isFilteringActive = filteredRecipes.length !== recipes.length;

    // Теперь — применяем поиск К filteredRecipes
    const finalRecipes = useMemo(() => {
        if (!isSearching) return filteredRecipes;

        const lower = searchText.toLowerCase();
        return filteredRecipes.filter((recipe) => recipe.title.toLowerCase().includes(lower));
    }, [filteredRecipes, searchText, isSearching]);

    return (
        <Box as='main' mx='auto' h='100%' w='100%' px={{ base: 4, md: 6, lg: 0 }} pt='80px'>
            <Box>
                <SearchBlock
                    searchText={searchText}
                    setSearchText={setSearchText}
                    onApplyFilters={applyFilters}
                    onResetFilters={resetFilters}
                />

                {isSearching || isFilteringActive ? (
                    <FoundRecipesList recipes={finalRecipes} searchText={searchText} />
                ) : (
                    <Box display='flex' flexDirection='column' gap={10}>
                        <NewRecipes />
                        <BestRecipes />
                        <CulinaryBlog />
                        <VeganCusine />
                        <Box
                            h={{ base: '56px' }}
                            display={{ base: 'block', xl: 'none', lg: 'none' }}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
};
