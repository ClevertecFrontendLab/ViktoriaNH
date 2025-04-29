import { Box, Tab, TabList, Tabs } from '@chakra-ui/react';

import { useRecipeTabFilter } from '~/hooks/use-recipe-tab-filter';
import { Recipe } from '~/types/recipe-types';

interface RecipeTabsProps {
    recipes: Recipe[];
    initialSubcategory: string | null;
    onSubcategoryChange: (subcategory: string | null) => void;
}

export const RecipeTabs = ({ initialSubcategory, onSubcategoryChange }: RecipeTabsProps) => {
    const { selectedSubcategory, handleTabChange, veganSubcategories } = useRecipeTabFilter(
        initialSubcategory,
        onSubcategoryChange,
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
            {/* Преобразуем название подкатегории для data-test-id */}

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
                    {veganSubcategories.map((subcat, i) => (
                        <Tab
                            key={subcat}
                            data-test-id={`tab-${subcat.toLowerCase()}-${i}`}
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
