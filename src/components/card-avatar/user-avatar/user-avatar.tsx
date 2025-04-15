import { Avatar } from '@chakra-ui/react';

interface UserAvatarProps {
    name: string;
    src: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string;
    bg?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
    name,
    src,
    size = '3rem',
    bg = 'lime.50',
}) => <Avatar name={name} src={src} size={size} bg={bg} />;
