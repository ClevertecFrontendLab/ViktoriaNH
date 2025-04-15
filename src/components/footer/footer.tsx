import { Box, Image, Text } from '@chakra-ui/react';

export const Footer = () => (
    <Box
        data-test-id='footer'
        bg='lime.50'
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        height='84px'
    >
        {[
            {
                icon: '/icons/footer/home.svg',
                label: 'Главная',
                fontWeight: '500',
                boxSize: '40px',
                isActive: true,
            },
            {
                icon: '/icons/footer/search.svg',
                label: 'Поиск',
                boxSize: '48px',
                isActive: false,
            },
            {
                icon: '/icons/footer/write.svg',
                label: 'Записать',
                boxSize: '48px',
                isActive: false,
            },
            {
                icon: '/icons/avatars/main-cate-const.webp',
                label: 'Мой профиль',
                boxSize: '40px',
                isActive: false,
            },
        ].map((item, index) => (
            <Box
                key={index}
                padding='10px 0px'
                display='flex'
                flexDirection='column'
                justifyContent='flex-end'
                alignItems='center'
                flex='1 0 0'
                textAlign='center'
                cursor='pointer'
            >
                <Image
                    src={item.icon}
                    alt={item.label}
                    boxSize={item.boxSize}
                    objectFit='cover'
                    mb='4px'
                />
                <Text
                    fontFamily='Inter'
                    fontSize='12px'
                    fontWeight={item.fontWeight || '400'}
                    lineHeight='16px'
                    textOverflow='ellipsis'
                    whiteSpace='nowrap'
                    overflow='hidden'
                    color={item.isActive ? 'black' : 'blackAlpha.700'}
                >
                    {item.label}
                </Text>
            </Box>
        ))}
    </Box>
);
