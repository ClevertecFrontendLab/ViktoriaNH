import { Box } from '@chakra-ui/react';

import { users } from '../../data/users';
import { Breadcrumbs } from '../breadcrumbs';
import { BurgerButton } from '../burger-button/burger-button';
import { CardAvatar } from '../card-avatar/card-avatar';
import { Logo } from '../logo/logo';
import { ProfileDataHeader } from '../profile-data/profile-data-header';

export const Header: React.FC = () => (
    <Box
        data-test-id='header'
        as='header'
        height='80px'
        bg='lime.50'
        pl={4}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        zIndex={999}
    >
        <Box display='inline-flex' alignItems='center' gap={32}>
            <Logo />
            <Box display={{ lg: 'flex', base: 'none' }} textStyle='h6'>
                <Breadcrumbs />
            </Box>
        </Box>

        <Box mr='56px' display={{ lg: 'flex', base: 'none' }}>
            <CardAvatar
                name={users.cate.name}
                username={users.cateMain.username}
                src={users.cateMain.src}
                bg={users.cateMain.bg}
            />
        </Box>

        <Box
            display={{
                base: 'flex',
                md: 'flex',
                lg: 'none',
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
            <BurgerButton />
        </Box>
    </Box>
);
