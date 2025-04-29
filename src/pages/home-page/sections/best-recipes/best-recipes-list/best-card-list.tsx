import { Box, useBreakpointValue } from '@chakra-ui/react';

import { recipes } from '~/data/recipes';

import { BestCard } from './components/best-card';
import { BestCardSmall } from './components/best-small-card';

interface BestCardListProps {
    limit?: number;
}

export const BestCardList: React.FC<BestCardListProps> = ({ limit = 2 }) => {
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    return (
        <Box
            display='grid'
            gridTemplateColumns={{
                base: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(1, 1fr)',
                xl: 'repeat(2, 1fr)',
            }}
            gridTemplateRows='auto'
            gap={{ base: '12px', md: '16px', lg: '16px', xl: '24px' }}
            width='100%'
        >
            {recipes.slice(0, limit).map((recipe, index) => (
                <Box key={recipe.id} data-test-id={`card-link-${index}`}>
                    {isDesktop ? <BestCard data={recipe} /> : <BestCardSmall data={recipe} />}
                </Box>
            ))}
        </Box>
    );
};
