import { Box } from '@chakra-ui/react';

import { BestRecipes } from '~/pages/home-page/sections/best-recipes/best-recipes';
import { CulinaryBlog } from '~/pages/home-page/sections/culinary-blog/culinary-blog';
import { NewRecipes } from '~/pages/home-page/sections/new-recipes/new-recipes';
import { SearchBlock } from '~/pages/home-page/sections/search-block/searc-block';
import { VeganCusine } from '~/pages/home-page/sections/vegan-cuisine/vegan-cusine';

export const MainContent = () => (
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
            <Box>
                <SearchBlock />
                <NewRecipes />
            </Box>
            <Box w='100%'>
                <BestRecipes />
            </Box>
            <Box w='100%'>
                <CulinaryBlog />
            </Box>
            <Box w='100%'>
                <VeganCusine />
            </Box>
            <Box h={{ base: '56px' }} display={{ base: 'block', xl: 'none', lg: 'none' }}></Box>
        </Box>
    </Box>
);
