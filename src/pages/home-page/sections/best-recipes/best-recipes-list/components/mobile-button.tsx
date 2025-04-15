import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

export const MobileButton = () => (
    <Box display={{ base: 'flex', lg: 'none', xl: 'none' }} justifyContent='center'>
        <Button
            data-test-id='juiciest-link-mobile'
            sx={{
                borderRadius: '6px',
                padding: '0px 16px',
                width: '167px',
                height: '40px',
                backgroundColor: 'lime.400',
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
            }}
        >
            <Text textStyle='buttonTitle' as={Link} to='/best-recipes'>
                Вся подборка
            </Text>
            <ArrowForwardIcon boxSize='16px' />
        </Button>
    </Box>
);
