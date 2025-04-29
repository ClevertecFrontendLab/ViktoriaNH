import {
    Badge,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Text,
    Wrap,
} from '@chakra-ui/react';

import { Recipe } from '~/types/recipe-types';
import { getCategoryList } from '~/utils/normilize';
import { renderCategoryTags } from '~/utils/render-category-tags';

import { BookmarkIcon } from '../icons/bookmark-icon';
import { ClockIcon } from '../icons/clock-icon';
import { LikeIcon } from '../icons/like-icon';
// import { ClockIcon } from '../icons/clock-icon';
// import { LikeIcon } from '../icons/like-icon';
import { RecipeStats } from '../recipe-stats/recipe-stats';

interface RecipeDetailsCardProps {
    data: Recipe;
}

export const RecipeDetailsCard: React.FC<RecipeDetailsCardProps> = ({ data }) => {
    const categoryList = getCategoryList(data.category);

    return (
        <Card
            as='section'
            maxW='100%'
            h={{
                sm: '584px',
                // base: '584px',
                md: '224px',
                lg: '410px',
                xl: '410px',
            }}
            direction={{ sm: 'column', md: 'row' }}
            gap={3}
        >
            <Image
                src={data.image}
                alt={data.title}
                objectFit='cover'
                w={{
                    // base: '100%', // изображение на всю ширину на 360px
                    // sm: '328px',
                    md: '232px',
                    lg: '353px',
                    xl: '553px',
                }}
                h={{ sm: '224px', md: '100%' }}
                borderRadius='lg'
            />

            <Box
                minW={{ base: 'auto', sm: '322px' }}
                w='100%'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                px='15px'
                py={{ base: '12px', sm: '0' }}
                flex='1'
                gap='15px'
            >
                {/* Теги и статистика */}
                <Box
                    display='flex'
                    justifyContent='space-between'
                    w='100%'
                    flexWrap='wrap'
                    gap='10px'
                >
                    <Wrap spacing='4px' align='flex-start' flex='1' minW='0'>
                        {renderCategoryTags(categoryList, 4, 'lime.50')}
                    </Wrap>
                    <Box alignSelf='center'>
                        <RecipeStats bookmarks={data.bookmarks} likes={data.likes} />
                    </Box>
                </Box>

                <CardBody p={0} overflow='hidden' flex='1' display='flex' flexDirection='column'>
                    <Box overflowY='auto' pr='4px' h={{ sm: '150px', md: '100%' }}>
                        <Heading
                            as='h1'
                            fontWeight='700'
                            fontSize={{ base: '24px', lg: '36px', xl: '48px' }}
                            lineHeight={{ base: '32px', lg: '48px', xl: '48px' }}
                            mb={2}
                            whiteSpace='normal'
                            wordBreak='break-word'
                        >
                            {data.title}
                        </Heading>

                        <Text textStyle='mainText' whiteSpace='normal' wordBreak='break-word'>
                            {data.description}
                        </Text>
                    </Box>
                </CardBody>

                <CardFooter
                    w='100%'
                    p={0}
                    display='flex'
                    flexDirection={{ sm: 'column', md: 'row' }}
                    gap='12px'
                    justifyContent='space-between'
                >
                    <Badge
                        w='fit-content'
                        px='8px'
                        py={{ sm: '4px', md: '2px', lg: '2px' }}
                        background='blackAlpha.100'
                        borderRadius='4px'
                        display='flex'
                        alignItems='center'
                        gap='6px'
                    >
                        <ClockIcon boxSize='16px' />
                        <Text fontSize='14px' lineHeight='1.2' m='0' textStyle='buttonTitle'>
                            {data.time || 'Не указано'}
                        </Text>
                    </Badge>

                    <Box
                        display='flex'
                        gap={3}
                        flexDirection={{ base: 'column', sm: 'row' }}
                        w={{ base: '100%', sm: 'auto' }}
                    >
                        <Button
                            h='auto'
                            minH='unset'
                            px={{ base: '5px', xl: '14px' }}
                            py={{ base: '4px', lg: '10px' }}
                            background='transparent'
                            border='1px solid rgba(0, 0, 0, 0.48)'
                            borderRadius='6px'
                            display='flex'
                            alignItems='center'
                            gap='6px'
                            w={{ base: '100%', sm: 'auto' }}
                        >
                            <LikeIcon boxSize={{ base: '12px', lg: '14px', xl: '16px' }} />
                            <Text
                                fontSize={{ base: '12px', lg: '14px', xl: '16px' }}
                                lineHeight='1.2'
                                m='0'
                                color='blackAlpha.800'
                            >
                                Оценить рецепт
                            </Text>
                        </Button>

                        <Button
                            h='auto'
                            minH='unset'
                            px={{ base: '5px', xl: '14px' }}
                            py={{ base: '4px', lg: '10px' }}
                            backgroundColor='lime.400'
                            border='1px solid rgba(0, 0, 0, 0.08)'
                            borderRadius='6px'
                            display='flex'
                            alignItems='center'
                            gap='6px'
                            w={{ base: '100%', sm: 'auto' }}
                        >
                            <BookmarkIcon boxSize={{ base: '12px', lg: '14px', xl: '16px' }} />
                            <Text
                                fontSize={{ base: '12px', lg: '14px', xl: '16px' }}
                                lineHeight='1.2'
                                m='0'
                                color='black'
                            >
                                Сохранить в закладки
                            </Text>
                        </Button>
                    </Box>
                </CardFooter>
            </Box>
        </Card>
    );
};
