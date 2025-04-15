import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { App } from './app/app';
import { ScrollToTop } from './components/scroll-to-top';
import { BestRecipesPage } from './pages/best-recipes-page/best-recipe-page';
import { HomePage } from './pages/home-page/home-page';
import { VeganCuisinePage } from './pages/vegan-cuisine-page/vegan-cuisine-page';

export const Root = () => (
    <ChakraProvider>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} handle={{ breadcrumb: 'Главная' }} />
                    <Route
                        path='vegan-cuisine'
                        element={<VeganCuisinePage />}
                        handle={{ breadcrumb: 'Веганская кухня' }}
                    />
                    <Route
                        path='best-recipes'
                        element={<BestRecipesPage />}
                        handle={{ breadcrumb: 'Самое сочное' }}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
