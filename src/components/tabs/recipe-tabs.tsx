import { Box, Tab, TabList, Tabs } from '@chakra-ui/react';

const tabLabels = [
    'Закуски',
    'Первые блюда',
    'Вторые блюда',
    'Гарниры',
    'Десерты',
    'Выпечка',
    'Сыроедческие блюда',
    'Напитки',
];

export const RecipeTabs = () => (
    <Box
        w={{ base: '100%', lg: '1006px' }}
        h={{ base: '28px', lg: '42px' }}
        display='flex'
        alignItems='flex-start'
        borderBottom='1px solid'
        borderColor='blackAlpha.200'
        sx={{
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
        }}
        mt={{ sm: '30px', md: '35px', lg: '0px', xl: '0px' }}
    >
        <Tabs variant='unstyled' isLazy width='full' height='full'>
            <TabList
                display='flex'
                gap='0'
                height='full'
                minW='max-content'
                justifyContent='center'
            >
                {tabLabels.map((label, index) => (
                    <Tab
                        key={index}
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
                    >
                        {label}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    </Box>
);
