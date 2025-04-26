import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
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
import { useEffect, useState } from 'react';

import { SelectList } from '../select-list/select-list';

// type SearchIngredientsBlockProps = {
//     onSearch: (query: string) => void;

// };

// export const SearchIngredientsBlock = ({ onSearch }: SearchIngredientsBlockProps) => {
//     const [searchText, setSearchText] = useState('');
//     const [isSearchActive, setIsSearchActive] = useState(false);

//     const handleSearch = () => {
//         if (!isSearchActive) return;
//         onSearch(searchText.trim()); // Передаём поисковый запрос родительскому компоненту
//     };

//     const handleClearSearch = () => {
//         setSearchText('');
//         onSearch(''); // Сбрасываем фильтрацию по названию в родительском компоненте
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchText(e.target.value);
//     };

//     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Enter') {
//             handleSearch();
//         }
//     };

//     useEffect(() => {
//         setIsSearchActive(searchText.trim().length >= 3);
//     }, [searchText]);
//     return (
//         <Flex
//             direction='column'
//             alignItems='center'
//             alignSelf='stretch'
//             mt={{ base: '-5px', lg: '0px', xl: '0px' }}
//         >
//             <Flex
//                 w={{ sm: '328px', md: '448px', lg: '518px', xl: '518px' }}
//                 justifyContent='center'
//                 alignItems='center'
//                 gap='12px'
//                 position='relative'
//                 pb='16px'
//             >
//                 <IconButton
//                     aria-label='left icon'
//                     icon={
//                         <ChakraImage
//                             src='/icons/select.svg'
//                             alt='Выбрать ингредиенты'
//                             boxSize={{ base: '32px', lg: '48px', xl: '48px' }}
//                         />
//                     }
//                     variant='unstyled'
//                     w='48px'
//                     h='48px'
//                     border='1px solid var(--blackAlpha.600)'
//                     display='flex'
//                     justifyContent='center'
//                     alignItems='center'
//                 />
//                 <InputGroup w='full' position='relative'>
//                     <Input
//                         // value={searchText}
//                         // onChange={(e) => setSearchText(e.target.value)}
//                         // onKeyDown={handleKeyDown}
//                         value={searchText}
//                         onChange={handleInputChange}  // Обрабатываем изменение текста
//                         onKeyDown={handleKeyDown}
//                         placeholder='Название или ингредиент...'
//                         border='1px solid'
//                         borderColor={isSearchActive ? 'green.400' : 'blackAlpha.600'}
//                         fontFamily='Inter'
//                         h={{ base: '32px', lg: '48px', xl: '48px' }}
//                         pr='72px' // <-- Делаем правый паддинг больше, чтобы поместились крестик и лупа
//                         _placeholder={{
//                             color: 'lime.800',
//                             fontSize: { base: '14px', lg: '18px', xl: '18px' },
//                             fontWeight: '400',
//                             fontFamily: 'Inter',
//                             lineHeight: '24px',
//                             alignSelf: 'stretch',
//                         }}
//                         _hover={{
//                             borderColor: isSearchActive ? 'lime.500' : 'blackAlpha.800',
//                         }}
//                         _focus={{
//                             borderColor: isSearchActive ? 'lime.800' : 'blackAlpha.800',
//                             boxShadow: isSearchActive
//                                 ? '0 0 0 2px rgba(72, 187, 120, 0.6)'
//                                 : '0 0 0 2px rgba(0,0,0,0.3)',
//                         }}
//                     />
//                     <InputRightElement
//                         display='flex'
//                         alignItems='center'
//                         justifyContent='flex-end'
//                         gap='15px'
//                         right='8px'
//                         height='100%'
//                     >
//                         {searchText.trim().length >= 3 && (
//                             <IconButton
//                                 aria-label='Очистить поиск'
//                                 icon={<CloseIcon boxSize={3} />}
//                                 variant='ghost'
//                                 size='sm'
//                                 onClick={handleClearSearch}
//                                 _hover={{ background: 'transparent' }}
//                                 minW='auto'
//                                 h='auto'
//                                 p='0'
//                             />
//                         )}
//                         <IconButton
//                             aria-label='Поиск'
//                             icon={<SearchIcon boxSize={4} />}
//                             variant='ghost'
//                             size='sm'
//                             onClick={handleSearch}
//                             cursor={isSearchActive ? 'pointer' : 'not-allowed'}
//                             opacity={isSearchActive ? 1 : 0.4}
//                             _hover={{ background: 'transparent' }}
//                             minW='auto'
//                             h='auto'
//                             p='0'
//                         />
//                     </InputRightElement>
//                 </InputGroup>
//             </Flex>

//             <Flex
//                 w='518px'
//                 alignItems='center'
//                 gap='16px'
//                 display={{ base: 'none', lg: 'flex', xl: 'flex' }}
//             >
//                 <Flex
//                     bg='white'
//                     alignItems='center'
//                     gap='12px'
//                     w='268px'
//                     h='36px'
//                     pl='8px'
//                     pr='0'
//                     py='6px'
//                 >
//                     <Text fontSize='16px'>Исключить мои аллергены</Text>
//                     <Switch
//                         size='sm'
//                         colorScheme='green'
//                         sx={{
//                             width: '34px',
//                             height: '20px',
//                             padding: '2px',
//                             borderRadius: '9999px',
//                             display: 'flex',
//                             alignItems: 'center',
//                             background: 'rgba(0, 0, 0, 0.16)',
//                         }}
//                     />
//                 </Flex>

//                 <SelectList />
//             </Flex>
//         </Flex>
//     );
// };

type SearchIngredientsBlockProps = {
    onSearch: (query: string) => void;
    searchText?: string;
    setSearchText?: (text: string) => void;
};
export const SearchIngredientsBlock = ({
    onSearch,
    searchText,
    setSearchText,
}: SearchIngredientsBlockProps) => {
    const [localSearchText, setLocalSearchText] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);

    const inputValue = searchText !== undefined ? searchText : localSearchText;
    const setInputValue = setSearchText !== undefined ? setSearchText : setLocalSearchText;

    const handleSearch = () => {
        if (!isSearchActive) return;
        onSearch(inputValue.trim());
    };

    const handleClearSearch = () => {
        setInputValue('');
        onSearch('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        setIsSearchActive(inputValue.trim().length >= 3);
    }, [inputValue]);

    return (
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
                            alt='Выбрать ингредиенты'
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
                <InputGroup w='full' position='relative'>
                    <Input
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder='Название или ингредиент...'
                        border='1px solid'
                        borderColor={isSearchActive ? 'green.400' : 'blackAlpha.600'}
                        fontFamily='Inter'
                        h={{ base: '32px', lg: '48px', xl: '48px' }}
                        pr='72px'
                        _placeholder={{
                            color: 'lime.800',
                            fontSize: { base: '14px', lg: '18px', xl: '18px' },
                            fontWeight: '400',
                            fontFamily: 'Inter',
                            lineHeight: '24px',
                            alignSelf: 'stretch',
                        }}
                        _hover={{
                            borderColor: isSearchActive ? 'lime.500' : 'blackAlpha.800',
                        }}
                        _focus={{
                            borderColor: isSearchActive ? 'lime.800' : 'blackAlpha.800',
                            boxShadow: isSearchActive
                                ? '0 0 0 2px rgba(72, 187, 120, 0.6)'
                                : '0 0 0 2px rgba(0,0,0,0.3)',
                        }}
                    />
                    <InputRightElement
                        display='flex'
                        alignItems='center'
                        justifyContent='flex-end'
                        gap='15px'
                        right='8px'
                        height='100%'
                    >
                        {inputValue.trim().length >= 3 && (
                            <IconButton
                                aria-label='Очистить поиск'
                                icon={<CloseIcon boxSize={3} />}
                                variant='ghost'
                                size='sm'
                                onClick={handleClearSearch}
                                _hover={{ background: 'transparent' }}
                                minW='auto'
                                h='auto'
                                p='0'
                            />
                        )}
                        <IconButton
                            aria-label='Поиск'
                            icon={<SearchIcon boxSize={4} />}
                            variant='ghost'
                            size='sm'
                            onClick={handleSearch}
                            cursor={isSearchActive ? 'pointer' : 'not-allowed'}
                            opacity={isSearchActive ? 1 : 0.4}
                            _hover={{ background: 'transparent' }}
                            minW='auto'
                            h='auto'
                            p='0'
                        />
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
};
