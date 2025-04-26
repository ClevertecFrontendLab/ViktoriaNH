import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Heading,
    HStack,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { RecipeStats } from '~/components/recipe-stats/recipe-stats';
import { useIsMobile } from '~/hooks/use-is-mobile';
import { renderCategoryTags } from '~/utils/render-category-tags';

import { recipes } from '../../../../../../data/recipes';
import { Recipe } from '../../../../../../types/recipe-types';
import { getCategoryList } from '../../../../../../utils/normilize';

interface NewRecipeCardProps {
    data: Recipe;
    onClick?: () => void;
}

export const NewRecipeCard: React.FC<NewRecipeCardProps> = ({ data, onClick }) => {
    const categoryList = getCategoryList(data.category);
    const isMobile = useIsMobile();
    const navigate = useNavigate();

    const handleCardClick = (recipeId: string | number) => {
        const recipe = recipes.find((r) => r.id === recipeId);
        if (!recipe) return;

        const category = Array.isArray(recipe.category) ? recipe.category[0] : recipe.category;
        const subcategory = Array.isArray(recipe.subcategory)
            ? recipe.subcategory[0]
            : recipe.subcategory;
        const path = `/${category}/${subcategory}/${recipe.id}`;

        navigate(path);
    };

    return (
        <Card
            onClick={onClick || (() => handleCardClick(data.id))}
            flex='0 0 auto'
            bg='white'
            maxW={{ base: '158px', lg: '322px' }}
            h={{ base: '220px', lg: '414px' }}
            minW={{ base: '158px', lg: undefined }}
            borderRadius='8px'
            border='1px solid blackAlpha.200'
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            alignSelf='stretch'
            overflow='hidden'
            position='relative'
            variant='outline'
            cursor='pointer'
        >
            {/* Картинка */}
            <Box position='relative' w='full'>
                <Image
                    src={data.image}
                    alt={data.title}
                    h={{ base: '128px', lg: '230px' }}
                    maxW={{ base: '158px', lg: '322px' }}
                    objectFit='cover'
                    loading='lazy'
                />

                {/* Теги на изображении */}
                {isMobile && (
                    <Box position='absolute' top='8px' left='8px'>
                        <VStack spacing='4px' align='flex-start'>
                            {renderCategoryTags(categoryList, 3)}
                        </VStack>
                    </Box>
                )}
            </Box>

            <CardBody
                padding={{
                    base: '8px 8px 4px 8px',
                    lg: '16px 24px 20px',
                }}
                w='full'
                flex='1'
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
                gap={{ base: '8px', lg: '12px' }}
            >
                <Heading
                    as='h2'
                    fontSize={{ base: '16px', lg: '20px' }}
                    fontWeight='500'
                    lineHeight='150%'
                    noOfLines={{ base: 2, lg: 1 }}
                    maxW='100%'
                >
                    {data.title}
                </Heading>

                {/* description скрывается на мобилке */}
                {!isMobile && (
                    <Text
                        textStyle='mainText'
                        sx={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            WebkitLineClamp: 3,
                            maxWidth: '100%',
                            whiteSpace: 'normal',
                        }}
                    >
                        {data.description}
                    </Text>
                )}

                {/* Иконки внизу на мобилке */}
                {isMobile && (
                    <Box
                        display='flex'
                        alignItems='center'
                        gap='4px'
                        mt='auto'
                        w='100%'
                        justifyContent='space-between'
                    >
                        <RecipeStats bookmarks={data.bookmarks} likes={data.likes} />
                    </Box>
                )}
            </CardBody>

            {/* Footer (только для больших экранов) */}
            {!isMobile && (
                <CardFooter
                    display='flex'
                    justifyContent='space-between'
                    px={{ lg: '12px', xl: '24px' }}
                    pb={{ lg: '12px', xl: '20px' }}
                    pt={0}
                    w='100%'
                >
                    <HStack spacing={2}>{renderCategoryTags(categoryList, 1)}</HStack>
                    <RecipeStats bookmarks={data.bookmarks} likes={data.likes} />
                </CardFooter>
            )}
        </Card>
    );
};
