import { Box, Button, Card, CardBody, Image, Text } from '@chakra-ui/react';

import { Recipe } from '~/data/recipes';
import { getCategoryIcon } from '~/utils/get-category-icon';

interface VeganCuisineBlockProps {
    data: Recipe;
}

export const VeganCuisineBlock = ({ data }: VeganCuisineBlockProps) => {
    // Получаем иконку и перевод категории через getRecipeIcon
    const { icon, title } = getCategoryIcon(
        Array.isArray(data.category) ? data.category[0] : data.category,
    );

    return (
        <Card
            w='100%'
            minW={0}
            borderRadius='8px'
            border='1px solid'
            borderColor='blackAlpha.200'
            boxShadow='none'
            p={{ base: '14px 12px', lg: '12px', xl: '14px 24px' }}
            h={{ sm: '52px', md: '48px', lg: '52px', xl: '57.3px' }}
        >
            <CardBody display='flex' alignItems='center' p={0}>
                <Box display='flex' alignItems='center' w='100%' mt='-7px' minW={0}>
                    <Box display='flex' alignItems='center' gap='8px' flex='1 1 auto' minW={0}>
                        {/* Иконка для категории */}
                        {icon && <Image src={icon} boxSize='24px' alt={title} />}
                        {/* Название рецепта */}
                        <Text
                            fontWeight='500'
                            fontSize={{ base: '16px', lg: '18px', xl: '20px' }}
                            lineHeight={{ base: '200%', lg: '233.33%', xl: '233.33%' }}
                            isTruncated
                            whiteSpace='nowrap'
                            overflow='hidden'
                            textOverflow='ellipsis'
                            minW={0}
                        >
                            {data.title}
                        </Text>
                    </Box>

                    {/* Кнопка "Готовить" */}
                    <Button
                        h='32px'
                        flexShrink={0}
                        border='1px solid #2db100'
                        borderRadius='6px'
                        padding={{ base: '8px', lg: '8px', xl: '6px 12px' }}
                        bg='white'
                        fontSize={{ base: '12px', lg: '14px', xl: '14px' }}
                        fontWeight='600'
                        lineHeight={{ base: '133%', lg: '143%', xl: '143%' }}
                        color='lime.600'
                    >
                        Готовить
                    </Button>
                </Box>
            </CardBody>
        </Card>
    );
};
