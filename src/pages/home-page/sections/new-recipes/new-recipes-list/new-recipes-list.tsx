import { Box } from '@chakra-ui/react';

import { RecipeSwiper } from '~/components/swiper/recipe-swiper';
import { SwiperNavigationNext } from '~/components/swiper/swiper-navigation/arrow-navigation-next';
import { SwiperNavigationPrev } from '~/components/swiper/swiper-navigation/swiper-navigation-prev';

export const NewRecipeList: React.FC = () => (
    <Box maxW='1360px' position='relative' overflow='hidden' flexWrap='nowrap'>
        <RecipeSwiper />
        <>
            <SwiperNavigationPrev />
            <SwiperNavigationNext />
        </>
    </Box>
);
