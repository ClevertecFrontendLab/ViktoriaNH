import { Box } from '@chakra-ui/react';

import { recipes } from '~/data/recipes';

import { BestCard } from './components/best-card';
import { BestCardSmall } from './components/best-small-card';

interface BestCardListProps {
    limit?: number;
}

export const BestCardList: React.FC<BestCardListProps> = ({ limit = 2 }) => (
    <Box
        display='grid'
        gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(1, 1fr)',
            xl: 'repeat(2, 1fr)',
        }}
        gridTemplateRows='auto'
        gap={{
            base: '12px',
            md: '16px',
            lg: '16px',
            xl: '24px',
        }}
        width='100%'
    >
        {recipes.slice(0, limit).map((recipe) => (
            <Box
                key={recipe.id}
                display={{
                    base: 'block',
                    md: 'block',
                    lg: 'none',
                }}
            >
                <BestCardSmall data={recipe} />
            </Box>
        ))}

        {recipes.slice(0, limit).map((recipe) => (
            <Box
                key={recipe.id}
                display={{
                    base: 'none',
                    md: 'none',
                    lg: 'block',
                }}
            >
                <BestCard data={recipe} />
            </Box>
        ))}
    </Box>
);
