import 'swiper/css';

import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { recipes } from '~/data/recipes';
import { NewRecipeCard } from '~/pages/home-page/sections/new-recipes/new-recipes-list/components/new-recipe-card';
import { Recipe } from '~/types/recipe-types';

import { SwiperNavigation } from './swiper-navigation/swiper-navigation';

interface RecipeSwiperProps {
    className?: string;
    'data-test-id'?: string;
}

export const RecipeSwiper: React.FC<RecipeSwiperProps> = ({
    className,
    'data-test-id': testId = 'carousel',
}) => {
    const navigate = useNavigate();

    const handleCardClick = (recipe: Recipe) => {
        const category = Array.isArray(recipe.category) ? recipe.category[0] : recipe.category;
        const subcategory = Array.isArray(recipe.subcategory)
            ? recipe.subcategory[0]
            : recipe.subcategory;
        const path = `/${category}/${subcategory}/${recipe.id}`;
        navigate(path);
    };

    return (
        <Box w='full' overflow='visible' position='relative' className={className}>
            <Swiper
                data-test-id={testId}
                modules={[Navigation, Mousewheel, Keyboard]}
                loop={false}
                navigation={{
                    nextEl: '.carousel-forward',
                    prevEl: '.carousel-back',
                }}
                touchEventsTarget='container'
                simulateTouch
                touchStartPreventDefault={false}
                touchMoveStopPropagation={false}
                touchRatio={1}
                touchAngle={45}
                allowTouchMove
                resistance
                breakpoints={{
                    360: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 12,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 12,
                    },
                    1920: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
            >
                {recipes.slice(0, 10).map((recipe, index) => (
                    <SwiperSlide key={recipe.id}>
                        <Box data-test-id={`carousel-card-${index}`}>
                            <NewRecipeCard data={recipe} onClick={() => handleCardClick(recipe)} />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

            <SwiperNavigation />
        </Box>
    );
};
