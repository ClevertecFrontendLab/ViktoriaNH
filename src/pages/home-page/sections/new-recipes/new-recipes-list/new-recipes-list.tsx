import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';

import { recipes } from '../../../../../data/new-recipes';
import { Recipe } from '../../../../../data/new-recipes';
import { NewRecipeCard } from './components/new-recipe-card';

const arrowButtonStyles = {
    borderRadius: '6px',
    padding: '0px 12px',
    width: '40px',
    height: '40px',
    backgroundColor: 'black',
    color: 'white',
    _hover: { backgroundColor: 'gray.700' },
};

export const RecipeList: React.FC = () => (
    <Box
        maxW='1360px'
        display='flex'
        flexWrap='nowrap'
        overflowX='auto'
        justifyContent='start'
        gap={6}
        position='relative'
    >
        <ArrowBackIcon
            position='absolute'
            top='147px'
            left='0'
            zIndex={1}
            {...arrowButtonStyles}
            display={{ base: 'none', lg: 'block' }}
        />

        {recipes.map((recipe: Recipe) => (
            <NewRecipeCard key={recipe.id} data={recipe} />
        ))}

        <ArrowForwardIcon
            position='absolute'
            top='147px'
            right='0'
            zIndex={1}
            {...arrowButtonStyles}
        />
    </Box>
);
