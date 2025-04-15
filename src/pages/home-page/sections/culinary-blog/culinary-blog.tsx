import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { CulinaryBlogList } from './culinary-blog-list/culinary-blog-list';

export const CulinaryBlog = () => (
    <Box
        as='section'
        bg='lime.300'
        borderRadius='16px'
        display='flex'
        flexDirection='column'
        gap={{ base: '12px', lg: '16px', xl: '24px' }}
        p={{ base: '12px', lg: '24px' }}
    >
        <Flex
            display={{ base: 'none', lg: 'flex' }}
            direction='row'
            justify='space-between'
            align='center'
        >
            <Text
                as='h3'
                fontFamily='"Inter", sans-serif'
                fontSize={{ base: '24px', lg: '30px', xl: '36px' }}
                fontWeight={{ base: '500', lg: '500', xl: '400' }}
                lineHeight={{ base: '133%', lg: '120%', xl: '111%' }}
            >
                Кулинарные блоги
            </Text>

            <Button
                bg='lime.300'
                borderRadius='6px'
                px={{ base: '16px', xl: '24px' }}
                py='0px'
                w={{ base: '149px', lg: '176px', xl: '176px' }}
                h={{ base: '40px', lg: '48px', xl: '48px' }}
                fontFamily='"Inter", sans-serif'
                fontSize={{ base: '16px', lg: '18px', xl: '18px' }}
                fontWeight='600'
                lineHeight={{ base: '150%', lg: '156%' }}
            >
                <Flex align='center'>
                    <Box as='span'>Все авторы</Box>
                    <Box
                        as='span'
                        ml='8px'
                        fontSize='20px'
                        lineHeight='1'
                        position='relative'
                        top='-1px'
                    >
                        <ArrowForwardIcon />
                    </Box>
                </Flex>
            </Button>
        </Flex>

        <Box display={{ base: 'block', lg: 'none' }}>
            <Text
                as='h3'
                fontFamily='"Inter", sans-serif'
                fontSize='24px'
                fontWeight='500'
                lineHeight='133%'
            >
                Кулинарные блоги
            </Text>
        </Box>

        <CulinaryBlogList />

        <Box display={{ base: 'flex', lg: 'none' }} justifyContent='center'>
            <Button
                bg='lime.300'
                borderRadius='6px'
                px={{ base: '16px', xl: '24px' }}
                py='0px'
                w={{ base: '149px', xl: '176px' }}
                h={{ base: '40px', xl: '48px' }}
                fontFamily='"Inter", sans-serif'
                fontSize={{ base: '16px', xl: '18px' }}
                fontWeight='600'
                lineHeight={{ base: '150%', xl: '156%' }}
            >
                <Flex align='center'>
                    <Box as='span'>Все авторы</Box>
                    <Box
                        as='span'
                        ml='8px'
                        fontSize='20px'
                        lineHeight='1'
                        position='relative'
                        top='-1px'
                    >
                        <ArrowForwardIcon />
                    </Box>
                </Flex>
            </Button>
        </Box>
    </Box>
);
