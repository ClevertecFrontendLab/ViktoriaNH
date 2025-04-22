import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { categoryLabels } from '~/constants/category-labels';
import { subcategoriesLabels } from '~/constants/subcategory-labels';
import { recipes } from '~/data/recipes';

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);
    const [category, subcategory, recipeId] = pathnames;
    const recipe = recipeId ? recipes.find((r) => String(r.id) === recipeId) : null;
    const getLabel = (key: string, isCategory: boolean) => {
        if (isCategory) {
            return (
                categoryLabels[key] || key.charAt(0).toUpperCase() + key.slice(1).replace(/-/g, ' ')
            );
        }
        return (
            subcategoriesLabels[key] ||
            key.charAt(0).toUpperCase() + key.slice(1).replace(/-/g, ' ')
        );
    };
    return (
        <Breadcrumb fontSize='16px' spacing='4px' separator={<ChevronRightIcon />}>
            {/* Главная */}
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            {/* Категория */}
            {category && (
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={`/${category}`}>
                        {getLabel(category, true)} {/* true для категории */}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}
            {/* Подкатегория */}
            {subcategory && (
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={`/${category}/${subcategory}`}>
                        {getLabel(subcategory, false)} {/* false для подкатегории */}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}
            {/* Рецепт */}
            {recipe && (
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color='black'>{recipe.title}</BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};
