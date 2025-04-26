import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';

// import React, { useState } from 'react';
import { menuItems } from '~/data/menu-items';

import { MenuAccordion } from '../accordion/menu-accordion'; // Ваш компонент для меню
import { Breadcrumbs } from '../breadcrumbs'; // Ваш компонент для хлебных крошек
import { Logo } from '../logo/logo'; // Ваш компонент логотипа

interface BurgerMenuProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isMenuOpen, toggleMenu }) => (
    <>
        {/* Кнопка бургер-меню */}
        <IconButton
            icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            variant='ghost'
            onClick={toggleMenu}
            display={{ base: 'flex', lg: 'none' }}
        />

        {/* Скрытое меню при открытии */}
        <Box
            display={{ base: isMenuOpen ? 'flex' : 'none', lg: 'none' }}
            position='fixed'
            top='80px'
            right='0'
            left='auto' // важно!
            // bg='white'
            w='256px'
            h='calc(100vh - 80px)'
            boxShadow='2xl'
            zIndex={998}
            flexDirection='column'
            pt='16px'
            pl='16px'
            pb='32px'
        >
            <Box
            // mb='24px'
            >
                <Logo />
            </Box>

            {/* Хлебные крошки внутри меню */}

            {/* Меню */}
            <Box
                display={{ base: isMenuOpen ? 'flex' : 'none', lg: 'none' }}
                position='fixed'
                width='344px'
                top='80px' // ниже Header'а
                right='0'
                bg='white'
                h='calc(100vh - 80px)'
                zIndex={998}
                flexDirection='column'
                pt='16px'
                pb='102px'
            >
                <Box
                    color='blackAlpha.800'
                    textStyle='h6'
                    p='10px 20px'
                    bg='red'
                    gap='8px'
                    width='100%'
                >
                    {/* <Box display="inline-flex" flexWrap="wrap" gap="8px" width="100%" overflow="hidden"> */}

                    <Breadcrumbs />
                    {/* </Box> */}
                </Box>
                <MenuAccordion menuItems={menuItems} />
            </Box>

            {/* Кнопка выхода или другие элементы */}
            <Flex as='footer' flexDirection='column' gap='16px'>
                <Box display='flex' alignItems='center' gap='6px'>
                    <Image src='/icons/exit.svg' boxSize='12px' alt='Иконка выхода' />
                    <Text textStyle='numbers' color='black'>
                        Выйти
                    </Text>
                </Box>
            </Flex>
        </Box>

        {/* Оверлей для закрытия меню при клике вне */}
        {isMenuOpen && (
            <Box
                position='fixed'
                top='80px'
                left='0'
                width='100%'
                height='calc(100vh - 80px)'
                bg='rgba(0, 0, 0, 0.4)'
                zIndex={997}
                onClick={toggleMenu}
            />
        )}
    </>
);
