import { Box, Flex, Text } from '@chakra-ui/react';

import { CardAvatar } from '../../../../../components/card-avatar/card-avatar';
import { users } from '../../../../../data/users';

export const CulinaryBlogList = () => {
    const userList = [users.helen, users.alex, users.cate];

    return (
        <Flex
            minH='152px'
            justifyContent={{ base: 'flex-start', lg: 'space-between', xl: 'space-between' }}
            flexDirection={{ sm: 'column', md: 'row', lg: 'row', xl: 'row' }}
            gap={{ base: '12px', lg: '16px', xl: '16px' }}
        >
            {userList.map((user) => (
                <Box
                    key={user.username}
                    display='flex'
                    flexDirection='column'
                    alignItems='flex-start'
                    flex='1 0 0'
                    minH='152px'
                    borderRadius='8px'
                    borderWidth='1px'
                    borderColor='blackAlpha.200'
                    overflow='hidden'
                    bg='white'
                >
                    <Box
                        w='100%'
                        maxH='88px'
                        padding={{
                            base: '16px 16px 8px 16px',
                            xl: '24px 24px 16px 24px',
                        }}
                    >
                        <CardAvatar
                            name={user.name}
                            username={user.username}
                            src={user.src}
                            bg={user.bg}
                        />
                    </Box>

                    <Box
                        w='100%'
                        maxH='96px'
                        display='flex'
                        flexDirection='column'
                        alignItems='flex-start'
                        alignSelf='stretch'
                        padding={{
                            base: '8px 16px 16px 16px',
                            xl: '12px 24px 20px 24px',
                        }}
                    >
                        <Text
                            textStyle='mainText'
                            noOfLines={3}
                            textOverflow='ellipsis'
                            overflow='hidden'
                        >
                            Как раз после праздников, когда мясные продукты еще остались, но никто
                            их уже не хочет, время варить солянку.
                        </Text>
                    </Box>
                </Box>
            ))}
        </Flex>
    );
};
