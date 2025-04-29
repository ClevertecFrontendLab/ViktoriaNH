import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

import { arrowButtonStyles } from './styles';

interface SwiperNavigationProps {
    classNamePrev?: string;
    classNameNext?: string;
    zIndex?: string | number;
}

export const SwiperNavigation: React.FC<SwiperNavigationProps> = ({
    classNamePrev = 'carousel-back',
    classNameNext = 'carousel-forward',
    zIndex = 1,
}) => (
    <>
        <Box
            className={`swiper-button-prev ${classNamePrev}`}
            data-test-id='carousel-back'
            position='absolute'
            top='50%'
            left='0'
            transform='translateY(-65%)'
            zIndex={zIndex}
            {...arrowButtonStyles}
        >
            <ArrowBackIcon />
        </Box>
        <Box
            className={`swiper-button-next ${classNameNext}`}
            data-test-id='carousel-forward'
            position='absolute'
            top='50%'
            right='0'
            transform='translateY(-50%)'
            zIndex={zIndex}
            {...arrowButtonStyles}
        >
            <ArrowForwardIcon />
        </Box>
    </>
);
