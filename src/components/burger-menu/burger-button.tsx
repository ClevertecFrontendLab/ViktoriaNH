import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

export const BurgerButton = () => (
    <IconButton
        aria-label='Открыть меню'
        icon={<HamburgerIcon boxSize='24px' />}
        variant='ghost'
        size='48px'
        color='black'
        _hover={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            boxShadow: 'none',
        }}
        _active={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}
        padding={0}
        minWidth='48px'
        minHeight='48px'
        display='inline-flex'
    />
);
