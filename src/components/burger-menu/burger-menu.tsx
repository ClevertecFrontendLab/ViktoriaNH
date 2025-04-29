import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import { menuItems } from '~/data/menu-items';

import { MenuAccordion } from '../accordion/menu-accordion';
import { Breadcrumbs } from '../breadcrumbs';

interface BurgerMenuProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isMenuOpen, toggleMenu }) => {
    const displayMobile = useBreakpointValue({ base: 'inline-flex', lg: 'none' });

    return (
        <>
            {/* Бургер-кнопка — всегда в DOM, просто скрыта на десктопе */}
            <IconButton
                icon={<HamburgerIcon />}
                aria-label='Открыть меню'
                data-test-id='hamburger-icon'
                variant='ghost'
                onClick={toggleMenu}
                display={isMenuOpen ? 'none' : displayMobile}
            />

            {/* Кнопка закрытия меню */}
            <IconButton
                icon={<CloseIcon />}
                aria-label='Закрыть меню'
                data-test-id='close-icon'
                variant='ghost'
                onClick={toggleMenu}
                display={isMenuOpen ? displayMobile : 'none'}
            />

            {/* Навигационное меню — в DOM только при открытии */}
            {isMenuOpen && (
                <Box
                    data-test-id='nav'
                    display='flex'
                    position='fixed'
                    top='80px'
                    right='0'
                    w='256px'
                    h='calc(100vh - 80px)'
                    bg='white'
                    boxShadow='2xl'
                    zIndex={998}
                    flexDirection='column'
                    pt='16px'
                    pl='16px'
                    pb='32px'
                >
                    <Box color='blackAlpha.800' textStyle='h6' p='10px 20px' w='100%'>
                        <Breadcrumbs />
                    </Box>

                    <Box flex='1' overflowY='auto'>
                        <MenuAccordion menuItems={menuItems} />
                    </Box>

                    <Flex as='footer' flexDirection='column' gap='16px' mt='auto'>
                        <Box display='flex' alignItems='center' gap='6px'>
                            <Image src='/icons/exit.svg' boxSize='12px' alt='Иконка выхода' />
                            <Text textStyle='numbers' color='black'>
                                Выйти
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            )}

            {/* Оверлей — также только при открытом меню */}
            {isMenuOpen && (
                <Box
                    data-test-id='menu-overlay'
                    display='block'
                    position='fixed'
                    top='80px'
                    left='0'
                    w='100%'
                    h='calc(100vh - 80px)'
                    bg='rgba(0, 0, 0, 0.4)'
                    zIndex={997}
                    onClick={toggleMenu}
                />
            )}
        </>
    );
};
