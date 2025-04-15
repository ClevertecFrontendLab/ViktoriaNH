import { Box, Text } from '@chakra-ui/react';

import { BookmarkIcon } from '../icons/bookmark-icon';
import { LikeIcon } from '../icons/like-icon';
import { UserIcon } from '../icons/user-icon';

export interface ProfileDataHeaderProps {
    name: string;
    username: string;
    src: string;
    bg: string;
}

export const ProfileDataHeader: React.FC<ProfileDataHeaderProps> = ({
    name: _name,
    username: _username,
    src: _src,
    bg: _bg,
}) => {
    const commonBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
    };

    const commonTextStyles = {
        color: 'lime.600',
        fontWeight: 'semibold',
        fontSize: 'xxxs',
    };

    const iconBoxStyles = {
        boxSize: '12px',
    };

    return (
        <Box width='203px' height='24px' display='flex' justifyContent='center' alignItems='center'>
            <Box display='flex' justifyContent='center' alignItems='center' gap='16px'>
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
            </Box>
        </Box>
    );
};
