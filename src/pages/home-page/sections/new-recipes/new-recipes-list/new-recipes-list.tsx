import { Box, Text } from '@chakra-ui/react';

import { RecipeSwiper } from '~/components/swiper/recipe-swiper';
import { SwiperNavigationNext } from '~/components/swiper/swiper-navigation/arrow-navigation-next';
import { SwiperNavigationPrev } from '~/components/swiper/swiper-navigation/swiper-navigation-prev';

export const NewRecipeList: React.FC = () => {
    const headingStyles = {
        mb: { base: 3, lg: 6 },
        fontSize: { base: '24px', md: '36px', xl: '48px' },
        fontWeight: '500',
        lineHeight: { base: '133%', md: '111%', xl: '100%' },
        textStyle: { base: 'body', xl: 'h2' },
    };
    return (
        <Box maxW='1360px' position='relative' overflow='hidden' flexWrap='nowrap'>
            <Text as='h2' {...headingStyles}>
                Новые рецепты
            </Text>
            <RecipeSwiper />
            <>
                <SwiperNavigationPrev />
                <SwiperNavigationNext />
            </>
        </Box>
    );
};
