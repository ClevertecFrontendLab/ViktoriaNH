import { Card, CardBody, CardFooter, Heading, HStack, Text } from '@chakra-ui/react';

import { RecipeStats } from '~/components/recipe-stats/recipe-stats';
import { Recipe } from '~/data/recipes';
import { getCategoryList } from '~/utils/normilize';
import { renderCategoryTags } from '~/utils/render-category-tags';

export interface VeganCuisineCardProps {
    data: Recipe;
}

export const VeganCuisineCard: React.FC<VeganCuisineCardProps> = ({ data }) => {
    const categoryList = getCategoryList(data.category);

    return (
        <Card
            borderRadius='8px'
            overflow='hidden'
            w='100%'
            maxH='322px'
            maxW={{
                sm: '328px',
                md: '232px',
                lg: '282.67px',
                xl: '322px',
            }}
            direction='column'
            variant='outline'
            p={{ base: '12px', lg: '16px', xl: '24px' }}
            pt={{ xl: '24px' }}
            pb={{ xl: '20px' }}
            pl={{ xl: '24px' }}
            pr={{ xl: '24px' }}
        >
            <CardBody p={0} h='auto'>
                <Heading
                    as='h2'
                    fontFamily='"Inter", sans-serif'
                    fontSize={{ base: '16px', lg: '20px', xl: '20px' }}
                    fontWeight='500'
                    lineHeight={{ base: '150%', lg: '140%', xl: '140%' }}
                    mb={{ base: '8px', lg: '8px', xl: '8px' }}
                    overflow='hidden'
                    textOverflow='ellipsis'
                    whiteSpace='nowrap'
                >
                    {data.title}
                </Heading>

                <Text
                    textStyle='mainText'
                    style={{
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
            </CardBody>

            <CardFooter
                p={0}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                mt='24px'
            >
                <HStack spacing={2}>{renderCategoryTags(categoryList, 1)}</HStack>
                <RecipeStats bookmarks={data.bookmarks} likes={data.likes} />
            </CardFooter>
        </Card>
    );
};
