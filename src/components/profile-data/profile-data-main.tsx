import { Box, Text, VStack } from '@chakra-ui/react';

import { BookmarkIcon } from '../icons/bookmark-icon';
import { LikeIcon } from '../icons/like-icon';
import { UserIcon } from '../icons/user-icon';

export const ProfileDataMain: React.FC = () => {
    const commonBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
    };

    const commonTextStyles = {
        color: 'lime.600',
        fontWeight: 'semibold',
        fontSize: 'xs',
    };

    const iconBoxStyles = {
        boxSize: '16px',
    };

    return (
        <Box
            width='199px'
            py='16px'
            px='56px'
            h='200px'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <VStack spacing='24px'>
                <Box {...commonBoxStyles}>
                    <Box as={BookmarkIcon} {...iconBoxStyles} />
                    <Text {...commonTextStyles}>185</Text>
                </Box>

                <Box {...commonBoxStyles}>
                    <Box as={UserIcon} {...iconBoxStyles} />
                    <Text {...commonTextStyles}>589</Text>
                </Box>

                <Box {...commonBoxStyles}>
                    <Box as={LikeIcon} {...iconBoxStyles} />
                    <Text {...commonTextStyles}>587</Text>
                </Box>
            </VStack>
        </Box>
    );
};
