import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    HStack,
    Icon,
    Image,
    Tag,
    Text,
} from '@chakra-ui/react';

import { BookmarkIcon } from '../../../../../../components/icons/bookmark-icon';
import { LikeIcon } from '../../../../../../components/icons/like-icon';
import { menuItems } from '../../../../../../data/menu-items';
import { Recipe } from '../../../../../../data/new-recipes';

interface RecipeCardProps {
    data: Recipe;
}

export const BestCard: React.FC<RecipeCardProps> = ({ data }) => {
    const currentCategory = menuItems.find((item) => item.title === data.category);

    return (
        <Card
            borderRadius='lg'
            overflow='hidden'
            w='100%'
            h='244px'
            direction='row'
            variant='outline'
        >
            <Image src={data.image} alt={data.title} objectFit='cover' w='346px' h='100%' />

            <Box
                minW='322px'
                w='100%'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                px='24px'
                py='20px'
                flex='1'
                gap='24px'
            >
                <Box display='flex' justifyContent='space-between' w='100%'>
                    <Tag bg='lime.50' borderRadius='4px' px={2} py={1}>
                        <HStack spacing={1}>
                            <Image src={currentCategory?.icon} boxSize='16px' alt={data.category} />
                            <Text textStyle='mainText'>{data.category}</Text>
                        </HStack>
                    </Tag>

                    <HStack spacing='8px'>
                        {data.bookmarks !== undefined && (
                            <HStack spacing={1}>
                                <Icon as={BookmarkIcon} w={3} h={3} />
                                <Text textStyle='numbers'>{data.bookmarks}</Text>
                            </HStack>
                        )}
                        {data.likes !== undefined && (
                            <HStack spacing={1}>
                                <Icon as={LikeIcon} w={3} h={3} />
                                <Text textStyle='numbers'>{data.likes}</Text>
                            </HStack>
                        )}
                    </HStack>
                </Box>

                <CardBody p={0}>
                    <Box w='100%' overflow='hidden'>
                        <Heading
                            as='h2'
                            fontFamily='"Inter", sans-serif'
                            fontSize='20px'
                            fontWeight='500'
                            lineHeight='140%'
                            mb={2}
                            overflow='hidden'
                            textOverflow='ellipsis'
                            whiteSpace='nowrap'
                        >
                            {data.title}
                        </Heading>
                    </Box>
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
                    maxW={{ xl: '274px', lg: 'none' }}
                    w='100%'
                    p={0}
                    gap={2}
                    display='flex'
                    justifyContent='end'
                >
                    <Button
                        sx={{
                            display: 'flex',
                            gap: '8px',
                            border: '1px solid rgba(0, 0, 0, 0.48)',
                            borderRadius: '6px',
                            padding: '0px 12px',
                            width: '122px',
                            height: '32px',
                            color: 'rgba(0, 0, 0, 0.8)',
                            background: 'transparent',
                        }}
                    >
                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <BookmarkIcon boxSize='14px' />
                        </Box>
                        <Text textStyle='buttonTitle'>Сохранить</Text>
                    </Button>
                    <Button
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            borderRadius: '6px',
                            padding: '0px 12px',
                            width: '87px',
                            height: '32px',
                            backgroundColor: 'black',
                            color: 'white',
                            fontFamily: '"Inter", sans-serif',
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '143%',
                        }}
                    >
                        <Text textStyle='buttonTitle'>Готовить</Text>
                    </Button>
                </CardFooter>
            </Box>
        </Card>
    );
};
