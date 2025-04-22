import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

import { arrowButtonStyles } from './styles';

export const SwiperNavigationNext: React.FC = () => (
    <Box
        className='swiper-button-next'
        position='absolute'
        top='50%'
        right='0'
        transform='translateY(-50%)'
        zIndex={1}
        {...arrowButtonStyles}
    >
        <ArrowForwardIcon />
    </Box>
);
