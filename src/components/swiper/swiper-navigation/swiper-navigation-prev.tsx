import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

import { arrowButtonStyles } from './styles';

export const SwiperNavigationPrev: React.FC = () => (
    <Box
        className='swiper-button-prev'
        position='absolute'
        top='50%'
        left='0'
        transform='translateY(-65%)'
        zIndex={1}
        {...arrowButtonStyles}
    >
        <ArrowBackIcon />
    </Box>
);
