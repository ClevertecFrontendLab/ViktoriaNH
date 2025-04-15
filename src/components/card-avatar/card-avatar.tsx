import { Box, Flex } from '@chakra-ui/react';

import { TextAvatar } from './text-avatar/text-avatar';
import { UserAvatar } from './user-avatar/user-avatar';

interface CardAvatarProps {
    name: string;
    username: string;
    src: string;
    bg: string;
    size?: string;
}

export const CardAvatar: React.FC<CardAvatarProps> = ({
    name,
    username,
    src,
    bg,
    size = '3rem',
}) => (
    <Box>
        <Flex align='center' gap={3}>
            <UserAvatar name={name} src={src} size={size} bg={bg} />
            <TextAvatar name={name} username={username} />
        </Flex>
    </Box>
);
