import { Box } from '@chakra-ui/react';

import { BestRecipesCollection } from '~/pages/best-recipes-page/sections/best-recipes/best-recipes-collection';
import { SearchBestRecipes } from '~/pages/best-recipes-page/sections/best-recipes/search-best-recipes';
import { VeganCuisineList } from '~/pages/home-page/sections/vegan-cuisine/vegan-cusine-list/vegan-cusine-list';

export const MainContentBestRecipesPage = () => (
    <Box
        mx='auto'
        h='100%'
        w='100%'
        maxW={{ base: '100%', lg: '100%', xl: '1360px' }}
        px={{ base: 4, md: 6, lg: 0 }}
    >
        <Box
            display='flex'
            flexDirection='column'
            mt='80px'
            flex='1'
            mx='auto'
            w='100%'
            maxW='1360px'
            minW='0'
        >
            <Box mb={{ base: '32px', lg: '0px', xl: '0px' }}>
                <SearchBestRecipes />
            </Box>

            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                alignSelf='stretch'
                mb='40px'
            >
                <BestRecipesCollection />
            </Box>

            <Box w='100%'>
                <VeganCuisineList />
            </Box>

            <Box h={{ base: '102px' }} display={{ base: 'block', xl: 'none', lg: 'none' }}></Box>
        </Box>
    </Box>
);
