import 'swiper/css';

import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { recipes } from '~/data/recipes';
import { NewRecipeCard } from '~/pages/home-page/sections/new-recipes/new-recipes-list/components/new-recipe-card';
import { Recipe } from '~/types/recipe-types';

export const RecipeSwiper = () => {
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
        <Box w='full'>
            <Swiper
                modules={[Navigation]}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    360: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                    768: {
                        slidesPerView: 4.3,
                        spaceBetween: 12,
                    },
                    1440: {
                        slidesPerView: 3.1,
                        spaceBetween: 12,
                    },
                    1920: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
            >
                {/* {recipes.slice(0, 10).map((recipe) => (
                    <SwiperSlide key={recipe.id}>
                        <NewRecipeCard
                            data={recipe}
                            onClick={() => handleCardClick(recipe)}
                           
                        />
                    </SwiperSlide> */}

                {recipes
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Сортировка по дате в порядке убывания
                    .slice(0, 10) // Ограничение до 10 рецептов
                    .map((recipe) => (
                        <SwiperSlide key={recipe.id}>
                            <NewRecipeCard data={recipe} onClick={() => handleCardClick(recipe)} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Box>
    );
};
