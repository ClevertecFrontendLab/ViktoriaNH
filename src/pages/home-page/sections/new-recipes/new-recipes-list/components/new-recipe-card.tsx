import {
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
import React from 'react';

import { BookmarkIcon } from '../../../../../../components/icons/bookmark-icon';
import { LikeIcon } from '../../../../../../components/icons/like-icon';
import { menuItems } from '../../../../../../data/menu-items';
import { Recipe } from '../../../../../../data/new-recipes';

interface RecipeCardProps {
    data: Recipe;
}

export const NewRecipeCard: React.FC<RecipeCardProps> = ({ data }) => {
    const currentCategory = menuItems.find((item) => item.title === data.category);

    return (
        <Card
            flex='0 0 auto'
            width='322px'
            minW='322px'
            borderRadius='lg'
            overflow='hidden'
            h='414px'
            direction='column'
            variant='outline'
            position='relative'
        >
            <Heading p={0}>
                <Image src={data.image} alt={data.title} h='230px' w='100%' objectFit='cover' />
            </Heading>

            <CardBody>
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
                mx={6}
                mb={5}
            >
                <Tag bg='lime.150' borderRadius='4px' px={2} py={1}>
                    <HStack spacing={1}>
                        <Image src={currentCategory?.icon} boxSize='16px' alt={data.category} />
                        <Text textStyle='mainText'>{data.category}</Text>
                    </HStack>
                </Tag>

                <HStack spacing='8px' alignItems='center'>
                    {data.bookmarks !== undefined && (
                        <HStack spacing={1} fontStyle='numbers'>
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
            </CardFooter>
        </Card>
    );
};
