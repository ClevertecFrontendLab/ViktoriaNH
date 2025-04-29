import { Box, Button } from '@chakra-ui/react';

import { recipes } from '~/data/recipes';
import { BestCard } from '~/pages/home-page/sections/best-recipes/best-recipes-list/components/best-card';
import { BestCardSmall } from '~/pages/home-page/sections/best-recipes/best-recipes-list/components/best-small-card';

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
        <Box
            display='grid'
            gridTemplateColumns={{
                base: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(1, 1fr)',
                xl: 'repeat(2, 1fr)',
            }}
            gridTemplateRows='auto'
            gap={{
                base: '8px',
                md: '12px',
                lg: '16px',
                xl: '16px',
            }}
            width='100%'
            maxW='100%'
            overflowX='hidden'
        >
            {recipes.map((recipe) => (
                <Box
                    key={`small-${recipe.id}-${Math.random()}`}
                    display={{
                        base: 'block',
                        md: 'block',
                        lg: 'none',
                    }}
                    maxW='100%'
                    minW='0'
                >
                    <BestCardSmall data={recipe} />
                </Box>
            ))}

            {recipes.map((recipe) => (
                <Box
                    key={`big-${recipe.id}-${Math.random()}`}
                    display={{
                        base: 'none',
                        md: 'none',
                        lg: 'block',
                    }}
                    maxW='100%'
                    minW='0'
                >
                    <BestCard data={recipe} />
                </Box>
            ))}
        </Box>
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
