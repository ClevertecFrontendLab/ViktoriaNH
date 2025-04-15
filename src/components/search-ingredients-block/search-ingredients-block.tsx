import { SearchIcon } from '@chakra-ui/icons';
import {
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Switch,
    Text,
} from '@chakra-ui/react';
import { Image as ChakraImage } from '@chakra-ui/react';

import { SelectList } from '../select-list/select-list';

export const SearchIngredientsBlock = () => (
    <Flex
        direction='column'
        alignItems='center'
        alignSelf='stretch'
        mt={{ base: '-5px', lg: '0px', xl: '0px' }}
    >
        <Flex
            w={{ sm: '328px', md: '448px', lg: '518px', xl: '518px' }}
            justifyContent='center'
            alignItems='center'
            gap='12px'
            position='relative'
            pb='16px'
        >
            <IconButton
                aria-label='left icon'
                icon={
                    <ChakraImage
                        src='/icons/select.svg'
                        alt='Выбрать ингридиенты'
                        boxSize={{ base: '32px', lg: '48px', xl: '48px' }}
                    />
                }
                variant='unstyled'
                w='48px'
                h='48px'
                border='1px solid var(--blackAlpha.600)'
                display='flex'
                justifyContent='center'
                alignItems='center'
            />
            <InputGroup w='full'>
                <Input
                    placeholder='Название или ингридиент...'
                    border='1px solid'
                    borderColor='blackAlpha.600'
                    fontFamily='Inter'
                    h={{ base: '32px', lg: '48px', xl: '48px' }}
                    _placeholder={{
                        color: 'lime.800',
                        fontSize: { base: '14px', lg: '18px', xl: '18px' },
                        fontWeight: '400',
                        fontFamily: 'Inter',
                        lineHeight: '24px',
                        alignSelf: 'stretch',
                    }}
                />
                <InputRightElement
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    gap='10px'
                    right='0px'
                    position='absolute'
                >
                    <SearchIcon color='black' />
                </InputRightElement>
            </InputGroup>
        </Flex>

        <Flex
            w='518px'
            alignItems='center'
            gap='16px'
            display={{ base: 'none', lg: 'flex', xl: 'flex' }}
        >
            <Flex
                bg='white'
                alignItems='center'
                gap='12px'
                w='268px'
                h='36px'
                pl='8px'
                pr='0'
                py='6px'
            >
                <Text fontSize='16px'>Исключить мои аллергены</Text>
                <Switch
                    size='sm'
                    colorScheme='green'
                    sx={{
                        width: '34px',
                        height: '20px',
                        padding: '2px',
                        borderRadius: '9999px',
                        display: 'flex',
                        alignItems: 'center',
                        background: 'rgba(0, 0, 0, 0.16)',
                    }}
                />
            </Flex>

            <SelectList />
        </Flex>
    </Flex>
);
