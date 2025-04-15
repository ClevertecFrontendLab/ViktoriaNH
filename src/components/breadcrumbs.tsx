import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);

    const breadcrumbLabels: Record<string, string> = {
        '': 'Главная',
        'vegan-cuisine': 'Веганская кухня',
        'best-recipes': 'Самое сочное',
    };

    return (
        <Breadcrumb fontSize='16px' spacing='4px' separator={<ChevronRightIcon />}>
            <BreadcrumbItem isCurrentPage={location.pathname === '/'}>
                <BreadcrumbLink
                    as={Link}
                    to='/'
                    color={location.pathname === '/' ? 'black' : 'blackAlpha.700'}
                >
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const label =
                    breadcrumbLabels[value] ||
                    value.charAt(0).toUpperCase() + value.slice(1).replace('-', ' ');

                const isLast = index === pathnames.length - 1;
                return (
                    <BreadcrumbItem key={to} isCurrentPage={isLast}>
                        <BreadcrumbLink
                            as={Link}
                            to={to}
                            color={isLast ? 'black' : 'blackAlfa.700'}
                        >
                            {label}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
