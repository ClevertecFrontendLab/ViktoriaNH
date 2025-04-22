import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { RecipeDetailsCard } from '~/components/cards/recipe-details-card';
import { Footer } from '~/components/footer/footer';
import { Header } from '~/components/header/header';
import { Navigation } from '~/components/navigation/navigation';
import { Sidebar } from '~/components/sidebar/sidebar';
import { recipes } from '~/data/recipes';

export const RecipeDetailsPage = () => {
    const { id } = useParams();

    const recipe = recipes.find((r) => String(r.id) === String(id));

    if (!recipe) return <Box>Рецепт не найден</Box>;

    return (
        <Box w='100vw'>
            <Box
                position='fixed'
                top='0'
                left='50%'
                transform='translateX(-50%)'
                w='100%'
                maxW='1920px'
                zIndex='999'
            >
                <Header />
            </Box>

            <Box w='100%' maxW='1920px' mx='auto'>
                <Grid
                    templateColumns={{
                        base: '1fr',
                        lg: '256px 24px 1fr 280px',
                    }}
                    gap={0}
                    minH='100vh'
                >
                    <GridItem
                        display={{ base: 'none', lg: 'block' }}
                        rowStart={1}
                        colStart={1}
                        w='256px'
                    >
                        <Navigation />
                    </GridItem>

                    <GridItem colStart={{ base: 1, lg: 3 }} rowStart={1} minW={0}>
                        <Box
                            w='100%'
                            maxW={{
                                base: '100%',
                                lg: '100%',
                            }}
                            px={{ base: '0px', lg: '0px' }}
                            display='flex'
                            flexDirection='column'
                            bg='pink.150'
                            gap={{ base: '24px', lg: '40px' }}
                        >
                            <RecipeDetailsCard data={recipe} />
                        </Box>
                    </GridItem>

                    <GridItem
                        display={{ base: 'none', lg: 'block' }}
                        rowStart={1}
                        colStart={4}
                        w='280px'
                    >
                        <Sidebar />
                    </GridItem>
                </Grid>
            </Box>

            <Box
                position='fixed'
                bottom='0'
                left='50%'
                transform='translateX(-50%)'
                w='100%'
                zIndex='999'
                display={{ base: 'flex', lg: 'none', xl: 'none' }}
            >
                <Footer />
            </Box>
        </Box>
    );
};
