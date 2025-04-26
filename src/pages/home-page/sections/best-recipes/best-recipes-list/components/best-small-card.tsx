import { Box, Button, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { RecipeStats } from '~/components/recipe-stats/recipe-stats';
import { highlightMatch } from '~/utils/highlight-match';
import { getCategoryList } from '~/utils/normilize';
import { renderCategoryTags } from '~/utils/render-category-tags';

import { BookmarkOutlineIcon } from '../../../../../../components/icons/bookmark-outline';
import { Recipe } from '../../../../../../types/recipe-types';

export const BestCardSmall: React.FC<{ data: Recipe; searchText?: string }> = ({
    data,
    searchText,
}) => {
    const categoryList = getCategoryList(data.category);
    const navigate = useNavigate();

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
                        {highlightMatch(data.title, searchText)}
                    </Text>
                </Box>

                <HStack justify='flex-end' align='center' w='100%' h='24px' spacing='12px'>
                    <Icon as={BookmarkOutlineIcon} boxSize={6} />
                    <Button
                        onClick={() =>
                            navigate(`/${data.category[0]}/${data.subcategory[0]}/${data.id}`)
                        }
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
