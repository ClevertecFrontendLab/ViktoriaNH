import { Box } from '@chakra-ui/react';

import { users } from '../../data/users';
import { Breadcrumbs } from '../breadcrumbs';
import { BurgerMenu } from '../burger-menu/burger-menu';
import { CardAvatar } from '../card-avatar/card-avatar';
import { Logo } from '../logo/logo';
import { ProfileDataHeader } from '../profile-data/profile-data-header';

interface HeaderProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => (
    <Box
        data-test-id='header'
        as='header'
        height='80px'
        bg='lime.50'
        pl={4}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        w='100vw'
        // zIndex={999}
    >
        {/* Логотип и хлебные крошки */}
        <Box display='inline-flex' alignItems='center' gap={32}>
            <Logo />
            <Box display={{ lg: 'flex', base: 'none' }} textStyle='h6'>
                <Breadcrumbs />
            </Box>
        </Box>

        {/* Прочие элементы */}
        <Box mr='56px' display={{ lg: 'flex', base: 'none' }}>
            <CardAvatar
                name={users.cate.name}
                username={users.cateMain.username}
                src={users.cateMain.src}
                bg={users.cateMain.bg}
            />
        </Box>

        {/* Бургер-меню на мобильных устройствах */}
        <Box
            display={{
                base: 'flex', // Показывается на мобильных устройствах
                lg: 'none', // Скрывается на больших экранах
            }}
            alignItems='center'
            justifyContent='space-between'
            marginRight={{ base: '16px', md: '20px' }}
        >
            <ProfileDataHeader
                name={users.cate.name}
                username={users.cateMain.username}
                src={users.cateMain.src}
                bg={users.cateMain.bg}
            />
            <Box>
                <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </Box>
        </Box>
    </Box>
);
