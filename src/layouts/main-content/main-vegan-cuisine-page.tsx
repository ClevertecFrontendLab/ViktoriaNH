import { Box } from '@chakra-ui/react';

import { RecipeTabs } from '~/components/tabs/recipe-tabs';
import { DessertsList } from '~/pages/vegan-cuisine-page/sections/vegan-cuisine/desserts/desserts-list';
import { VeganRecipes } from '~/pages/vegan-cuisine-page/sections/vegan-cuisine/recipe-collection/vegan-recipes';
import { VeganCuisineSearchBlock } from '~/pages/vegan-cuisine-page/sections/vegan-cuisine/search-block/vegan-cuisine-search-block';

export const MainContentVeganCuisinePage = () => (
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
                <VeganCuisineSearchBlock />
            </Box>

            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                alignSelf='stretch'
                paddingBottom='12px'
                mb='12px'
            >
                <RecipeTabs />
            </Box>
            <Box w='100%' mb='40px'>
                <VeganRecipes />
            </Box>

            <Box w='100%'>
                <DessertsList />
            </Box>

            <Box h={{ base: '102px' }} display={{ base: 'block', xl: 'none', lg: 'none' }}></Box>
        </Box>
    </Box>
);
