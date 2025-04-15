import { Box, HStack } from '@chakra-ui/react';
import React from 'react';

import { LogoImage } from './components/logo-image';

export const Logo: React.FC = () => (
    <Box as='a' href='/' aria-label='Главная страница'>
        <HStack spacing='7px'>
            <LogoImage src='/icons/logo.svg' alt='Логотип иконка' width='33px' height='32px' />

            <LogoImage
                src='/icons/logo_text.svg'
                alt='Логотип текст'
                width='97px'
                height='25px'
                display={{ base: 'none', lg: 'block', xl: 'block' }}
            />
        </HStack>
    </Box>
);
