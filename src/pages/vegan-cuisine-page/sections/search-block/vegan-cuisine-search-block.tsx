import { Box, Flex, Text } from '@chakra-ui/react';

import { SearchIngredientsBlock } from '~/components/search-ingredients-block/search-ingredients-block';

interface VeganCuisineSearchBlockProps {
    onSearch: (query: string) => void;
}

export const VeganCuisineSearchBlock = ({ onSearch }: VeganCuisineSearchBlockProps) => (
    <Box
        mx='auto'
        pt='32px'
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap={{ base: '16px', lg: '32px' }}
        w={{ sm: '328px', md: '727px', lg: '578px', xl: '898px' }}
        h={{ sm: '176px', md: '136px', lg: '308px', xl: '308px' }}
        mb={{ base: '32px', lg: '0px', xl: '0px' }}
    >
        <Flex
            direction='column'
            alignItems='center'
            gap={{ base: '16px', lg: '12px', xl: '12px' }}
            alignSelf='stretch'
        >
            <Text
                fontSize={{ base: '24px', lg: '48px', xl: '48px' }}
                fontWeight='700'
                lineHeight={{ base: '32px', lg: '48px', xl: '48px' }}
                textAlign='center'
            >
                Веганская кухня
            </Text>

            <Text
                fontSize={{ base: '14px', lg: '16px', xl: '16px' }}
                fontWeight='500'
                lineHeight={{ base: '20px', lg: '24px', xl: '24px' }}
                color='blackAlpha.600'
                textAlign='center'
            >
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
        </Flex>

        <SearchIngredientsBlock onSearch={onSearch} />
    </Box>
);
