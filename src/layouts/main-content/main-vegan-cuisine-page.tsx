import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router';

import { subcategoriesLabels } from '~/constants/subcategory-labels';
import { menuItems } from '~/data/menu-items';
import { recipes } from '~/data/recipes';
import { DessertsList } from '~/pages/vegan-cuisine-page/sections/desserts/desserts-list';
import { VeganRecipes } from '~/pages/vegan-cuisine-page/sections/recipe-collection/vegan-recipes';
import { VeganCuisineSearchBlock } from '~/pages/vegan-cuisine-page/sections/search-block/vegan-cuisine-search-block';
import { Recipe } from '~/types/recipe-types';
import { getCategoryList, getSubcategoryList } from '~/utils/normilize';

import { RecipeTabs } from '../../components/tabs/recipe-tabs';

const normalize = (str: string) => str?.toLowerCase();

const formatSubcategory = (subcategory: string): string =>
    subcategoriesLabels[subcategory.toLowerCase()] || subcategory;

export const MainContentVeganCuisinePage = () => {
    const { subcategory } = useParams<{ subcategory?: string }>();

    const veganSubcategories =
        menuItems.find((item) => item.title === 'Веганская кухня')?.text.map(normalize) ?? [];

    const veganRecipes = recipes.filter((recipe) => {
        const categories = getCategoryList(recipe.category);
        const subcategories = getSubcategoryList(recipe.subcategory);

        const isExplicitlyVegan = categories.includes('vegan');
        const hasVeganSubcategory = subcategories.some((subcat) =>
            veganSubcategories.includes(normalize(formatSubcategory(subcat))),
        );

        return isExplicitlyVegan || hasVeganSubcategory;
    });

    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
        subcategory ?? null,
    );
    const [searchText, setSearchText] = useState('');

    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(veganRecipes);

    const handleSearch = (query: string) => {
        const lowerCaseQuery = query.trim().toLowerCase();

        // Если строка поиска пуста, показываем все рецепты по текущей категории/подкатегории
        if (lowerCaseQuery === '') {
            setFilteredRecipes(veganRecipes); // Показываем все рецепты по выбранной категории/подкатегории
        } else {
            // Если текст в поиске есть, фильтруем по названию
            const filteredByName = veganRecipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(lowerCaseQuery),
            );
            setFilteredRecipes(filteredByName);
        }
        setSearchText(query); // Обновляем строку поиска
    };

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
            <VeganCuisineSearchBlock onSearch={handleSearch} />

            <RecipeTabs
                recipes={filteredRecipes} // Используем отфильтрованные рецепты
                initialSubcategory={selectedSubcategory}
                onSubcategoryChange={setSelectedSubcategory}
            />

            <VeganRecipes
                recipes={filteredRecipes} // Используем отфильтрованные рецепты
                selectedSubcategory={selectedSubcategory}
                searchText={searchText}
            />

            <DessertsList />

            <Box h={{ base: '102px' }} display={{ base: 'block', xl: 'none', lg: 'none' }} />
        </Box>
    );
};
