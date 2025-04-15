import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

import { BestCardList } from './best-recipes-list/best-card-list';
import { MobileButton } from './best-recipes-list/components/mobile-button';

export const BestRecipes: React.FC = () => (
    <Box as='section' display='flex' flexDirection='column' gap={4}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Text
                as='h2'
                fontSize={{
                    base: '24px',
                    lg: '36px',
                    xl: '48px',
                }}
                fontStyle='normal'
                fontWeight='500'
                lineHeight={{
                    base: '32px',
                    lg: '40px',
                    xl: '48px',
                }}
                textStyle={{
                    base: 'body',
                    lg: 'h2',
                }}
            >
                Самое сочное
            </Text>
            <Button
                data-test-id='juiciest-link'
                sx={{
                    display: { base: 'none', lg: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    borderRadius: '6px',
                    padding: '0px 16px',
                    width: '167px',
                    height: '40px',
                    backgroundColor: 'lime.400',
                    color: 'black',
                }}
            >
                <Text textStyle='buttonTitle' as={Link} to='/best-recipes'>
                    Вся подборка
                </Text>
                <ArrowForwardIcon boxSize='16px' />
            </Button>
        </Box>

        <BestCardList />
        <MobileButton />
    </Box>
);
