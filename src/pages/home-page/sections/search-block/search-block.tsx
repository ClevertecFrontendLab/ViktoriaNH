import { Box, Flex, Text } from '@chakra-ui/react';

import { FilterState } from '~/components/drawer/filter-drawer';
import { SearchIngredientsBlock } from '~/components/search-ingredients-block/search-ingredients-block';

interface SearchBlockProps {
    searchText: string;
    setSearchText: (text: string) => void;
    onApplyFilters: (filters: FilterState) => void;
    onResetFilters: () => void;
}

export const SearchBlock: React.FC<SearchBlockProps> = ({
    searchText,
    setSearchText,
    onApplyFilters,
    onResetFilters,
}) => {
    const handleSearch = (query: string) => {
        setSearchText(query);
    };

    return (
        <Box
            mx='auto'
            mt='80px'
            // pt="32px"
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap={{ base: '16px', lg: '32px' }}
            w={{ sm: 'px', md: '727px', lg: '578px', xl: '898px' }}
            h={{ sm: '80px', md: '80px', lg: '248px', xl: '248px' }}
            mb={{ sm: '52px', md: '52px', lg: '0px', xl: '0px' }}
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
                    whiteSpace='nowrap'
                >
                    Приятного аппетита!
                </Text>
            </Flex>

            <SearchIngredientsBlock
                setSearchText={setSearchText}
                searchText={searchText}
                onSearch={handleSearch}
                onApplyFilters={onApplyFilters}
                onResetFilters={onResetFilters}
            />
        </Box>
    );
};
