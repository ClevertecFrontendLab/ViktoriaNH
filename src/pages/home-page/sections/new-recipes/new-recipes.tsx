import { Box, useBreakpointValue } from '@chakra-ui/react';

import { NewRecipeList } from './new-recipes-list/new-recipes-list';

export const NewRecipes = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    if (isDesktop === undefined) return null;

    return (
        <Box as='section' h='auto' visibility='visible'>
            {isDesktop ? <NewRecipeList /> : <NewRecipeList />}
        </Box>
    );
};
