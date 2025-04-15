import { Box, Flex, Text } from '@chakra-ui/react';

import { VeganCuisineList } from './vegan-cusine-list/vegan-cusine-list';

export const VeganCusine = () => (
    <Box
        as='section'
        maxW='1360px'
        borderTop='1px solid rgba(0, 0, 0, 0.08)'
        pt={{ base: '8px', md: '8px', lg: '24px', xl: '24px' }}
        display='flex'
        flexDirection='column'
        gap={{ base: '16px', md: '16px', lg: '24px', xl: '24px' }}
        bg='lime.150'
    >
        <Flex
            direction={{ base: 'column', md: 'column', lg: 'row' }}
            justify='space-between'
            align='flex-start'
            gap={{ base: '12px', md: '12px', lg: '24px' }}
            maxW='100%'
            overflow='hidden'
        >
            <Text
                as='h2'
                fontWeight='500'
                fontSize={{ base: '24px', md: '24px', lg: '36px', xl: '48px' }}
                lineHeight={{ base: '133%', md: '133%', lg: '111%', xl: '100%' }}
                flexShrink={0}
                whiteSpace='normal'
                maxW={{ lg: '300px', xl: 'none' }}
            >
                Веганская кухня
            </Text>

            <Text
                fontWeight='500'
                fontSize={{ base: '14px', lg: '16px', xl: '16px' }}
                lineHeight={{ base: '143%', lg: '150%', xl: '150%' }}
                color='blackAlpha.700'
                w={{ lg: '598px', xl: '668px' }}
            >
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
        </Flex>

        <VeganCuisineList />
    </Box>
);
