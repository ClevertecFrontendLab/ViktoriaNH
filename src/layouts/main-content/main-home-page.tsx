import { Box } from '@chakra-ui/react';
import { useState } from 'react';

import { FoundRecipesList } from '~/pages/home-page/found-recipes';
import { BestRecipes } from '~/pages/home-page/sections/best-recipes/best-recipes';
import { CulinaryBlog } from '~/pages/home-page/sections/culinary-blog/culinary-blog';
import { NewRecipes } from '~/pages/home-page/sections/new-recipes/new-recipes';
import { SearchBlock } from '~/pages/home-page/sections/search-block/search-block';
import { VeganCusine } from '~/pages/home-page/sections/vegan-cuisine/vegan-cusine';

export const MainContent = () => {
    const [searchText, setSearchText] = useState('');

    const isSearching = searchText.length >= 3;

    return (
        <Box as='main' mx='auto' h='100%' w='100%' px={{ base: 4, md: 6, lg: 0 }}>
            <Box>
                <SearchBlock searchText={searchText} setSearchText={setSearchText} />
                {isSearching ? (
                    <FoundRecipesList searchText={searchText} />
                ) : (
                    <Box display='flex' flexDirection='column' gap={10}>
                        <NewRecipes />
                        <BestRecipes />
                        <CulinaryBlog />
                        <VeganCusine />
                        <Box
                            h={{ base: '56px' }}
                            display={{ base: 'block', xl: 'none', lg: 'none' }}
                        ></Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
