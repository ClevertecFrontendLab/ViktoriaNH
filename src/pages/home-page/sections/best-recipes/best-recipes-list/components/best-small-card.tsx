import { Box, Button, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react';

import { RecipeStats } from '~/components/recipe-stats/recipe-stats';
//     const currentCategory = menuItems.find((item) => item.title === data.category);
//     return (
//         <Box
//             display='flex'
//             w='100%'
//             maxW='356px'
//             h='128px'
//             borderRadius='8px'
//             border='1px solid rgba(0, 0, 0, 0.08)'
//             bg='white'
//             overflow='hidden'
//         >
//             <Box position='relative' w='158px' h='128px' flexShrink={0}>
//                 <Image src={data.image} alt={data.title} objectFit='cover' w='158px' h='128px' />
//                 <HStack
//                     position='absolute'
//                     top='8px'
//                     left='8px'
//                     borderRadius='4px'
//                     bg='lime.50'
//                     px='4px'
//                     py='2px'
//                     spacing='2px'
//                     h='24px'
//                 >
//                     {currentCategory?.icon && (
//                         <Image src={currentCategory.icon} alt={data.category} boxSize='16px' />
//                     )}
//                     <Text textStyle='mainText'>{data.category}</Text>
//                 </HStack>
//             </Box>
//             <Box
//                 width='100%'
//                 h='128px'
//                 p='8px 8px 4px 8px'
//                 display='flex'
//                 flexDirection='column'
//                 justifyContent='space-between'
//                 alignItems='flex-start'
//                 flex='1 0 0'
//                 alignSelf='stretch'
//             >
//                 <HStack spacing='34px' align='center' w='100%' h='24px'>
//                     {data.bookmarks !== undefined && (
//                         <HStack spacing={1}>
//                             <Icon as={BookmarkIcon} boxSize={3} />
//                             <Text textStyle='numbers'>{data.bookmarks}</Text>
//                         </HStack>
//                     )}
//                     {data.likes !== undefined && (
//                         <HStack spacing={1}>
//                             <Icon as={LikeIcon} boxSize={3} />
//                             <Text textStyle='numbers'>{data.likes}</Text>
//                         </HStack>
//                     )}
//                 </HStack>
//                 <Box
//                     h='68px'
//                     w='100%'
//                     display='flex'
//                     flexDirection='column'
//                     justifyContent='center'
//                 >
//                     <Text
//                         fontWeight='500'
//                         fontSize='16px'
//                         lineHeight='140%'
//                         noOfLines={2}
//                         overflow='hidden'
//                     >
//                         {data.title}
//                     </Text>
//                 </Box>
//                 <HStack justify='flex-end' align='center' w='100%' h='24px' spacing='12px'>
//                     <Icon as={BookmarkOutlineIcon} boxSize={6} />
//                     <Button
//                         variant='solid'
//                         bg='black'
//                         color='white'
//                         h='24px'
//                         px='12px'
//                         fontSize='12px'
//                         fontWeight='600'
//                         borderRadius='6px'
//                         lineHeight='1'
//                         minW='fit-content'
//                     >
//                         Готовить
//                     </Button>
//                 </HStack>
//             </Box>
//         </Box>
//     );
// };
import { Recipe } from '~/data/recipes';
import { getCategoryList } from '~/utils/normilize';
import { renderCategoryTags } from '~/utils/render-category-tags';

import { BookmarkOutlineIcon } from '../../../../../../components/icons/bookmark-outline';

export const BestCardSmall: React.FC<{ data: Recipe }> = ({ data }) => {
    const categoryList = getCategoryList(data.category);

    return (
        <Box
            display='flex'
            w='100%'
            maxW='356px'
            h='128px'
            borderRadius='8px'
            border='1px solid rgba(0, 0, 0, 0.08)'
            bg='white'
            overflow='hidden'
        >
            <Box position='relative' w='158px' h='128px' flexShrink={0}>
                <Image
                    src={data.image}
                    alt={data.title}
                    objectFit='cover'
                    w='158px'
                    h='128px'
                    loading='lazy'
                />
                <Box position='absolute' top='8px' left='8px'>
                    <VStack spacing='4px' align='flex-start'>
                        {renderCategoryTags(categoryList, 3, 'lime.50')}
                    </VStack>
                </Box>
            </Box>

            <Box
                width='100%'
                h='128px'
                p='8px 8px 4px 8px'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                alignItems='flex-start'
                flex='1 0 0'
                alignSelf='stretch'
            >
                <RecipeStats bookmarks={data.bookmarks} likes={data.likes} />

                <Box
                    h='68px'
                    w='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                >
                    <Text
                        fontWeight='500'
                        fontSize='16px'
                        lineHeight='140%'
                        noOfLines={2}
                        overflow='hidden'
                    >
                        {data.title}
                    </Text>
                </Box>

                <HStack justify='flex-end' align='center' w='100%' h='24px' spacing='12px'>
                    <Icon as={BookmarkOutlineIcon} boxSize={6} />
                    <Button
                        variant='solid'
                        bg='black'
                        color='white'
                        h='24px'
                        px='12px'
                        fontSize='12px'
                        fontWeight='600'
                        borderRadius='6px'
                        lineHeight='1'
                        minW='fit-content'
                    >
                        Готовить
                    </Button>
                </HStack>
            </Box>
        </Box>
    );
};
