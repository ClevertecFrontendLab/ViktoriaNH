import { Box, Button, Card, CardBody, Image, Text } from '@chakra-ui/react';

import { menuItems } from '../../../../../data/menu-items';

export interface VeganCuisineBlockProps {
    data: {
        id: number;
        title: string;
        category: string;
    };
}

export const VeganCuisineBlock = ({ data }: VeganCuisineBlockProps) => {
    const currentCategory = menuItems.find((item) => item.title === data.category);

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
            <CardBody display='flex' alignItems='end' p={0}>
                <Box display='flex' alignItems='center' w='100%' mt='-7px' minW={0}>
                    <Box display='flex' alignItems='center' gap='8px' flex='1 1 auto' minW={0}>
                        <Image src={currentCategory?.icon} boxSize='24px' alt={data.category} />
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
                        {' '}
                        Готовить
                    </Button>
                </Box>
            </CardBody>
        </Card>
    );
};
