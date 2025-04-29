import { useMediaQuery } from '@chakra-ui/react';

// возвращаем true, если ширина экрана от 0 до 768 пикселей включительно

export const useIsMobile = (): boolean => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');
    return isMobile;
};
