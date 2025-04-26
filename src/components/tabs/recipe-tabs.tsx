import { Box, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { subcategoriesLabels } from '~/constants/subcategory-labels';
import { menuItems } from '~/data/menu-items';
import { Recipe } from '~/types/recipe-types';
import { createDictionary } from '~/utils/create-dictionary';

const reverseSubcategoriesLabels = createDictionary(subcategoriesLabels);

interface RecipeTabsProps {
    recipes: Recipe[];
    initialSubcategory: string | null;
    onSubcategoryChange: (subcategory: string | null) => void;
}

export const RecipeTabs = ({ initialSubcategory, onSubcategoryChange }: RecipeTabsProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const veganSubcategories = useMemo(() => {
        const item = menuItems.find((item) => item.title === 'Веганская кухня');
        return item ? item.text : [];
    }, []);

    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(() => {
        if (initialSubcategory && veganSubcategories.includes(initialSubcategory)) {
            return initialSubcategory;
        }
        return veganSubcategories[0] || null;
    });

    // Устанавливаем активную подкатегорию из URL
    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const subcategoryFromUrl = pathParts[pathParts.length - 1];

        if (subcategoryFromUrl) {
            const russianTitle = subcategoriesLabels[subcategoryFromUrl];
            if (russianTitle && veganSubcategories.includes(russianTitle)) {
                setSelectedSubcategory(russianTitle);
            }
        }
    }, [location.pathname, veganSubcategories]);

    // Обновляем родительский компонент при смене подкатегории
    useEffect(() => {
        onSubcategoryChange(selectedSubcategory);
    }, [selectedSubcategory, onSubcategoryChange]);

    const handleTabChange = useCallback(
        (index: number) => {
            const newSubcategory = veganSubcategories[index];
            setSelectedSubcategory(newSubcategory);

            const engSubcategory = reverseSubcategoriesLabels[newSubcategory];
            if (engSubcategory) {
                navigate(`/vegan-cuisine/${engSubcategory}`); // Обновляем URL с подкатегорией
            }
        },
        [veganSubcategories, navigate],
    );

    return (
        <Box
            w='full'
            display='flex'
            justifyContent='center'
            alignItems='center'
            mt={{ sm: '30px', md: '35px', lg: '0px', xl: '0px' }}
            mb={6}
            overflowX='auto'
        >
            <Tabs
                variant='unstyled'
                isLazy
                index={veganSubcategories.findIndex((sub) => sub === selectedSubcategory)}
                onChange={handleTabChange}
                width='auto'
                height='full'
            >
                <TabList
                    display='flex'
                    gap='0'
                    height='full'
                    minW='max-content'
                    justifyContent='center'
                    borderBottom='1px solid'
                    borderColor='blackAlpha.200'
                >
                    {veganSubcategories.map((subcat) => (
                        <Tab
                            key={subcat}
                            px={{ base: '16px', lg: '16px' }}
                            py={{ base: '4px', lg: '8px' }}
                            fontSize={{ base: '14px', lg: '16px', xl: '16px' }}
                            fontWeight='500'
                            lineHeight='24px'
                            textAlign='center'
                            fontFamily='Inter'
                            color='lime.800'
                            whiteSpace='nowrap'
                            _selected={{
                                borderBottom: '2px solid var(--chakra-colors-lime-600)',
                                color: 'lime.600',
                            }}
                            _focus={{ boxShadow: 'none' }}
                            display='inline-flex'
                            alignItems='center'
                            justifyContent='center'
                            w='auto'
                            h={{ base: '28px', lg: '42px' }}
                            flexShrink={0}
                        >
                            {subcat}
                        </Tab>
                    ))}
                </TabList>
            </Tabs>
        </Box>
    );
};
