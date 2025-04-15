import { Image, ImageProps } from '@chakra-ui/react';
import React from 'react';

interface LogoImageProps extends ImageProps {
    src: string;
    alt: string;
}

export const LogoImage: React.FC<LogoImageProps> = ({ src, alt, ...rest }) => (
    <Image src={src} alt={alt} objectFit='contain' {...rest} />
);
