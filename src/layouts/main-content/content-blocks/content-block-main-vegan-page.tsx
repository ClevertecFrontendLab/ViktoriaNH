import { Box } from '@chakra-ui/react';

import { RecipeTabs } from '~/components/tabs/recipe-tabs';
import { DessertsList } from '~/pages/vegan-cuisine-page/sections/desserts/desserts-list';
import { VeganRecipes } from '~/pages/vegan-cuisine-page/sections/recipe-collection/vegan-recipes';
import { VeganCuisineSearchBlock } from '~/pages/vegan-cuisine-page/sections/search-block/vegan-cuisine-search-block';
import { Recipe } from '~/types/recipe-types';

export const ContentBlockMainVehanPage = ({
    filteredRecipes,
    selectedSubcategory,
    onSubcategoryChange,
    handleSearch,
    searchText,
}: {
    filteredRecipes: Recipe[];
    selectedSubcategory: string | null;
    onSubcategoryChange: (subcategory: string | null) => void;
    handleSearch: (query: string) => void;
    searchText: string;
}) => (
    <Box
        as='main'
        display='flex'
        flexDirection='column'
        mt='80px'
        flex='1'
        maxW={{ base: '100%', lg: '100%', xl: '1360px' }}
        px={{ base: 4, md: 6, lg: 0 }}
        mx='auto'
    >
        <VeganCuisineSearchBlock onSearch={handleSearch} />

        <RecipeTabs
            recipes={filteredRecipes}
            initialSubcategory={selectedSubcategory}
            onSubcategoryChange={onSubcategoryChange}
        />

        <VeganRecipes
            recipes={filteredRecipes}
            selectedSubcategory={selectedSubcategory}
            searchText={searchText}
        />

        <DessertsList />

        <Box h={{ base: '102px' }} display={{ base: 'block', xl: 'none', lg: 'none' }} />
    </Box>
);
