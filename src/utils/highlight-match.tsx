import { Box } from '@chakra-ui/react';

export const highlightMatch = (title: string, searchText?: string) => {
    if (!searchText || searchText.trim().length < 1) {
        return title;
    }

    const regex = new RegExp(`(${searchText})`, 'gi');
    const parts = title.split(regex);

    return parts.map((part, index) =>
        regex.test(part) ? (
            <Box as='span' key={index} color='lime.600'>
                {part}
            </Box>
        ) : (
            part
        ),
    );
};
