import { Avatar } from '@chakra-ui/react';

interface UserCateProps {
    name?: string;
    src?: string;
    size?: string;
    bg?: string;
}

export const UserCate: React.FC<UserCateProps> = ({
    name = 'Екатерина Константинопольская',
    src = '/icons/avatars/main-cate-const.webp',
    size = '3rem',
    bg = 'lime.50',
}) => <Avatar name={name} src={src} size={size} bg={bg} />;
