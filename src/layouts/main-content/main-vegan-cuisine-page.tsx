import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { subcategoriesLabels } from '~/constants/subcategory-labels';
import { recipes } from '~/data/recipes';
import { useFilteredVeganRecipes } from '~/hooks/use-filtred-vegan-recipes';
import { useRecipeSearch } from '~/hooks/use-recipe-search';
import { DessertsList } from '~/pages/vegan-cuisine-page/sections/desserts/desserts-list';
import { VeganRecipes } from '~/pages/vegan-cuisine-page/sections/recipe-collection/vegan-recipes';
import { VeganCuisineSearchBlock } from '~/pages/vegan-cuisine-page/sections/search-block/vegan-cuisine-search-block';

import { RecipeTabs } from '../../components/tabs/recipe-tabs';

export const MainContentVeganCuisinePage = () => {
    const { subcategory } = useParams<{ subcategory?: string }>();
    const slugToRussian = (s?: string) =>
        s && subcategoriesLabels[s] ? subcategoriesLabels[s] : null;
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
        slugToRussian(subcategory),
    );

    useEffect(() => {
        setSelectedSubcategory(slugToRussian(subcategory));
    }, [subcategory]);

    // 4. Слушаем изменения URL и синхронизируем стейт
    useEffect(() => {
        setSelectedSubcategory(slugToRussian(subcategory));
    }, [subcategory]);

    // 5. Берём все веганские рецепты
    const veganRecipes = useFilteredVeganRecipes(recipes);

    // 6. Навешиваем поиск на уже отфильтрованный список
    const {
        searchText,
        filteredRecipes: searchedRecipes,
        handleSearch,
    } = useRecipeSearch(veganRecipes);

    return (
        <Box
            as='main'
            display='flex'
            flexDirection='column'
            mt='80px'
            flex='1'
            maxW={{ base: '100%', lg: '100%', xl: '1360px' }}
            px={{ base: 4, md: 6, lg: 0 }}
            mx='auto'
        >
            {/* Поисковый блок */}
            <VeganCuisineSearchBlock onSearch={handleSearch} />

            {/* Табы подкатегорий */}
            <RecipeTabs
                recipes={veganRecipes}
                initialSubcategory={selectedSubcategory}
                onSubcategoryChange={setSelectedSubcategory}
            />

            {/* Секция с карточками */}
            <VeganRecipes
                recipes={searchedRecipes}
                selectedSubcategory={selectedSubcategory}
                searchText={searchText}
            />

            {/* Дополнительный список десертов */}
            <DessertsList />

            {/* Отступ внизу для мобильных */}
            <Box h={{ base: '102px' }} display={{ base: 'block', xl: 'none', lg: 'none' }} />
        </Box>
    );
};
