import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { menuItems } from '../../data/menu-items';
import { MenuAccordion } from '../accordion/menu-accordion';

export const Navigation: React.FC = () => (
    <Box
        visibility={{ lg: 'visible', base: 'hidden' }}
        flexDirection='column'
        pt='24px'
        boxShadow='0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)'
        minH='100%'
        zIndex={99}
        position='fixed'
        top='0'
        left='0'
        bg='white'
    >
        <Box
            as='nav'
            flex='1'
            mt='80px'
            overflowY='auto'
            textStyle='menuItems'
            pt='10px'
            pr='16px'
            pb='10px'
            pl='10px'
            maxH='calc(100vh - 80px - 144px)'
            zIndex={9999}
        >
            <MenuAccordion menuItems={menuItems} />
        </Box>

        <Flex
            as='footer'
            px='24px'
            pb='32px'
            flexDirection='column'
            gap='16px'
            height='144px'
            alignItems='flex-start'
        >
            <Box w='208px'>
                <Text
                    textAlign='left'
                    fontFamily='"Inter", sans-serif'
                    fontWeight='500'
                    fontSize='12px'
                    lineHeight='133%'
                    color='blackAlpha.400'
                >
                    Версия программы 03.25
                </Text>
            </Box>
            <Box w='208px'>
                <Text
                    textAlign='left'
                    whiteSpace='pre-line'
                    fontFamily='"Inter", sans-serif'
                    fontWeight='400'
                    fontSize='12px'
                    lineHeight='133%'
                    color='blackAlpha.700'
                >
                    Все права защищены,{'\n'}ученический файл,{'\n'} &copy; Клевер Технолоджи, 2025
                </Text>
            </Box>

            <Box display='flex' alignItems='center' gap='6px'>
                <Image src='/icons/exit.svg' boxSize='12px' alt='Иконка выхода' />
                <Text textStyle='numbers' color='black'>
                    Выйти
                </Text>
            </Box>
        </Flex>
    </Box>
);
