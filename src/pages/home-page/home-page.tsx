import { Box, Grid, GridItem } from '@chakra-ui/react';

import { Footer } from '~/components/footer/footer';
import { Header } from '~/components/header/header';
import { Navigation } from '~/components/navigation/navigation';
import { Sidebar } from '~/components/sidebar/sidebar';
import { MainContent } from '~/layouts/main-content/main-home-page';

export const headerHeight = 80;

export const HomePage = () => (
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
            <Header data-test-id='header' />
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
                    >
                        <MainContent />
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
