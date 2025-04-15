import { Text, VStack } from '@chakra-ui/react';

interface TextAvatarProps {
    name: string;
    username: string;
    nameStyle?: 'h4' | 'h5' | 'h3' | 'h2' | 'h1';
    mailStyle?: 'h6' | 'h5' | 'h4';
}

export const TextAvatar: React.FC<TextAvatarProps> = ({
    name,
    username,
    nameStyle = 'h5',
    mailStyle = 'username',
}) => (
    <VStack
        spacing={0}
        align='flex-start'
        overflow='hidden'
        textOverflow='ellipsis'
        whiteSpace='nowrap'
    >
        <Text textStyle={nameStyle}>{name}</Text>
        <Text textStyle={mailStyle}>@{username}</Text>
    </VStack>
);
