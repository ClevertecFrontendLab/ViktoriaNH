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

interface NewRecipeCardSmallProps {
    data: Recipe;
}

export const NewRecipeCardSmall: React.FC<NewRecipeCardSmallProps> = ({ data }) => {
    const currentCategory = menuItems.find((item) => item.title === data.category);

    return (
        <Card
            minW='158px'
            height='220px'
            borderRadius='8px'
            border='1px solid rgba(0, 0, 0, 0.08)'
            backgroundColor='white'
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            alignSelf='stretch'
            overflow='hidden'
            position='relative'
        >
            {/* Тег категории */}
            <Tag
                position='absolute'
                left='8px'
                top='8px'
                height='24px'
                padding='2px 4px'
                borderRadius='4px'
                backgroundColor='lime.150'
                display='flex'
                alignItems='center'
                gap='2px'
                overflow='visible'
                minWidth='fit-content'
            >
                {currentCategory?.icon && (
                    <Image src={currentCategory?.icon} boxSize='16px' alt={data.category} />
                )}
                <Text
                    textStyle='mainText'
                    whiteSpace='nowrap'
                    overflow='visible'
                    textOverflow='ellipsis'
                >
                    {data.category}
                </Text>
            </Tag>

            <Image
                src={data.image}
                alt={data.title}
                width='100%'
                height='128px'
                objectFit='cover'
            />

            <CardBody
                width='158px'
                height='92px'
                padding='8px 8px 4px 8px'
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
                gap='8px'
                alignSelf='stretch'
            >
                <Heading
                    as='h3'
                    fontSize='16px'
                    fontWeight='500'
                    lineHeight='150%'
                    noOfLines={2}
                    maxWidth='100%'
                >
                    {data.title}
                </Heading>

                <CardFooter
                    p={0}
                    display='flex'
                    justifyContent='flex-start'
                    alignItems='center'
                    gap='4px'
                    width='100%'
                    mt='auto'
                >
                    <HStack
                        spacing='8px'
                        alignItems='center'
                        justifyContent='flex-start'
                        width='100%'
                    >
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
            </CardBody>
        </Card>
    );
};
