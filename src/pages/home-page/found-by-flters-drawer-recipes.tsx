// import { Box, Text, useBreakpointValue } from '@chakra-ui/react';

// import { Recipe } from '~/types/recipe-types';

// import { BestCard } from './sections/best-recipes/best-recipes-list/components/best-card';
// import { BestCardSmall } from './sections/best-recipes/best-recipes-list/components/best-small-card';

// interface FoundByFiltersDrawerRecipesListProps {
//     recipes: Recipe[];
// }

// export const FoundByFiltersDrawerRecipesList: React.FC<FoundByFiltersDrawerRecipesListProps> = ({
//     recipes,
// }) => {
//     const isLargeScreen = useBreakpointValue({ base: false, lg: true });

//     if (recipes.length === 0) {
//         return (
//             <Box mt='24px' textAlign='center'>
//                 <Text fontSize='lg'>Ничего не найдено по фильтрам</Text>
//             </Box>
//         );
//     }

//     return (
//         <Box
//             display='grid'
//             gridTemplateColumns={{
//                 base: '1fr',
//                 md: 'repeat(2, 1fr)',
//                 lg: '1fr',
//                 xl: 'repeat(2, 1fr)',
//             }}
//             gap={{
//                 base: '12px',
//                 md: '16px',
//                 lg: '16px',
//                 xl: '24px',
//             }}
//             width='100%'
//             mt='24px'
//         >
//             {recipes.map((recipe, index) => (
//                 <Box key={recipe.id} data-test-id={`food-card-${index}`}>
//                     {isLargeScreen ? <BestCard data={recipe} /> : <BestCardSmall data={recipe} />}
//                 </Box>
//             ))}
//         </Box>
//     );
// };
