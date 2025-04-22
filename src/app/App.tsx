import 'swiper/css';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { theme } from '../theme/theme';
import * as _styles from './app.css';

export const App = () => (
    <ChakraProvider resetCSS theme={theme}>
        <Box as='main'>
            <Outlet />
        </Box>
    </ChakraProvider>
);
