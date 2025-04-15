import { Box, IconButton, Text } from '@chakra-ui/react';

import { ProfileDataMain } from '../profile-data/profile-data-main';

export const Sidebar = () => (
    <Box
        bg='green.100'
        h='100%'
        position='fixed'
        top='0'
        right='0'
        visibility={{ lg: 'visible', base: 'hidden' }}
    >
        <Box position='absolute' top='80px' right='0px'>
            <ProfileDataMain />
        </Box>

        <Box
            position='absolute'
            bottom='0px'
            right='0px'
            display='flex'
            flexDirection='column'
            alignItems='center'
            height='208px'
            zIndex={999}
        >
            <IconButton
                icon={<img src='images/write.webp' alt='Записать рецепт' />}
                aria-label='Записать рецепт'
                variant='link'
                width='208px'
                height='208px'
            />
            <Box position='relative' bottom='52px'>
                <Text fontSize='xxxs' color='blackAlpha.700' fontWeight='400' lineHeight='143%'>
                    Записать рецепт
                </Text>
            </Box>
        </Box>
    </Box>
);
