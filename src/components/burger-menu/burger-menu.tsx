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
    const displayMobile = useBreakpointValue({ base: 'inline-flex', lg: 'none' }); // лучше чем useIsMobile

    return (
        <>
            {/* Кнопка открытия/закрытия меню */}
            {isMenuOpen ? (
                <IconButton
                    icon={<CloseIcon />}
                    data-test-id='close-icon'
                    aria-label='Закрыть меню'
                    variant='ghost'
                    onClick={toggleMenu}
                    display={displayMobile}
                />
            ) : (
                <IconButton
                    icon={<HamburgerIcon />}
                    data-test-id='hamburger-icon'
                    aria-label='Открыть меню'
                    variant='ghost'
                    onClick={toggleMenu}
                    display={displayMobile}
                />
            )}

            {/* Модальное меню */}
            {isMenuOpen && (
                <Box
                    data-test-id='nav'
                    position='fixed'
                    top='80px'
                    right='0'
                    w='256px'
                    h='calc(100vh - 80px)'
                    bg='white'
                    boxShadow='2xl'
                    zIndex={998}
                    display='flex'
                    flexDirection='column'
                    pt='16px'
                    pl='16px'
                    pb='32px'
                >
                    <Box
                        color='blackAlpha.800'
                        textStyle='h6'
                        p='10px 20px'
                        gap='8px'
                        w='100%'
                        display='block'
                    >
                        <Breadcrumbs />
                    </Box>

                    <Box
                        display='flex'
                        flexDirection='column'
                        position='fixed'
                        width='344px'
                        top='80px'
                        right='0'
                        bg='white'
                        h='calc(100vh - 80px)'
                        zIndex={998}
                        pt='16px'
                        pb='102px'
                    >
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

            {/* Оверлей */}
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
};
