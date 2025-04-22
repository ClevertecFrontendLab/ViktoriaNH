// import { Box, Text, useBreakpointValue } from '@chakra-ui/react';

// import { NewRecipeList } from './new-recipes-list/new-recipes-list';

// export const NewRecipes = () => {
//     const isMobile = useBreakpointValue({ base: true, lg: false, xl: false });

//     const headingStyles = {
//         mb: { base: 3, lg: 6 },
//         fontSize: { base: '24px', lg: '36px', xl: '48px' },
//         fontWeight: '500',
//         lineHeight: { base: '133%', lg: '111%', xl: '100%' },
//         textStyle: { base: 'body', xl: 'h2' },
//     };

//     const listDisplay = isMobile ? { base: 'flex', lg: 'none' } : { base: 'none', lg: 'flex' };

//     return (
//         <Box as='section' h='auto'>
//             <Text as='h2' {...headingStyles}>
//                 Новые рецепты
//             </Text>

//             <Box display={listDisplay}>
//                 <NewRecipeList />
//             </Box>
//         </Box>
//     );
// };

import { Box, Text } from '@chakra-ui/react';

import { NewRecipeList } from './new-recipes-list/new-recipes-list';

export const NewRecipes = () => {
    const headingStyles = {
        mb: { base: 3, lg: 6 },
        fontSize: { base: '24px', md: '36px', xl: '48px' },
        fontWeight: '500',
        lineHeight: { base: '133%', md: '111%', xl: '100%' },
        textStyle: { base: 'body', xl: 'h2' },
    };

    return (
        <Box as='section' h='auto'>
            <Text as='h2' {...headingStyles}>
                Новые рецепты
            </Text>

            {/* Мобильная версия (от 0 до 1439) */}
            <Box display={{ base: 'flex', lg: 'none' }}>
                <NewRecipeList />
            </Box>

            {/* Десктопная версия (от 1440 и выше) */}
            <Box display={{ base: 'none', lg: 'flex' }}>
                <NewRecipeList />
            </Box>
        </Box>
    );
};
