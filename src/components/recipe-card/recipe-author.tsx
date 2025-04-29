import { Avatar, Button, Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react';

import { User } from '~/types/users-types';

import { UserIcon } from '../icons/user-icon';

type RecipeAuthorCardProps = {
    data: Record<string, User>;
};

export const RecipeAuthorCard = ({ data }: RecipeAuthorCardProps) => {
    const user = data.serge;

    return (
        <Flex
            as='article'
            mx='auto'
            w='100%'
            maxW='668px'
            bg='lime.300' // лаймовый фон
            borderRadius='8px'
            p={{ sm: 3, md: 6 }}
            align='center'
            justify='space-between'
            flexWrap='nowrap'
            gap={{ sm: 2, md: 4 }}
        >
            {/* Левая часть: Аватар + имя */}
            <Flex gap={4} align='center'>
                <Avatar boxSize='96px' name={user.name} src={user.src} />
                <VStack spacing={3} align='start'>
                    <Text textStyle='recipeAuthor'>{user.name}</Text>
                    <Text textStyle='username'>@{user.username}</Text>

                    <Button
                        leftIcon={<UserIcon />}
                        bg='blackAlpha.900'
                        _hover={{ bg: 'gray.700' }}
                        borderRadius='6px'
                        p='0px 8px'
                        color='white'
                    >
                        <Text textStyle='numbers' color='white'>
                            Подписаться
                        </Text>
                    </Button>
                </VStack>
            </Flex>

            {/* Правая часть: Подпись и кнопки */}
            <Flex direction='column' align='flex-end' gap={14} ml='auto'>
                <Text textStyle='mainText'>Автор рецепта</Text>

                <HStack spacing={3}>
                    <HStack spacing={1}>
                        <Icon as={UserIcon} boxSize={3} />
                        <Text textStyle='numbers'>128</Text>
                    </HStack>
                </HStack>
            </Flex>
        </Flex>
    );
};
