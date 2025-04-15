import { Box, Button } from '@chakra-ui/react';

import { VeganRecipesList } from '~/pages/vegan-cuisine-page/sections/vegan-cuisine/recipe-collection/vegan-recipes-list';

export const BestRecipesCollection = () => (
    <Box
        as='section'
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap={4}
        w='full'
        maxW='100%'
        overflowX='hidden'
    >
        <VeganRecipesList />
        <Button
            w='152px'
            h='40px'
            px='16px'
            borderRadius='6px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            gap='8px'
            bg='lime.400'
            _hover={{ bg: 'lime.500' }}
            _active={{ bg: 'lime.600' }}
            color='black'
            fontFamily='Inter'
            fontSize='16px'
            fontStyle='normal'
            fontWeight='600'
            lineHeight='24px'
        >
            Загрузить еще
        </Button>
    </Box>
);
