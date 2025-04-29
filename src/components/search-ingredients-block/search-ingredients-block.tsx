import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Image as ChakraImage } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { DrawerFilters, FilterState } from '../drawer/filter-drawer';
import { AllergenFilter } from '../filters/allergen-filter';

interface SearchIngredientsBlockProps {
    onSearch: (searchText: string) => void;
    searchText?: string;
    setSearchText?: (value: string) => void;
    onApplyFilters: (filters: FilterState) => void;
    onResetFilters: () => void;
}

export const SearchIngredientsBlock: React.FC<SearchIngredientsBlockProps> = ({
    onSearch,
    searchText,
    setSearchText,
    onApplyFilters,
}) => {
    const [localSearchText, setLocalSearchText] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // контролирование текста
    const inputValue = searchText ?? localSearchText;
    const setInputValue = setSearchText ?? setLocalSearchText;

    // поиск
    const handleSearch = () => {
        if (!isSearchActive) return;
        onSearch(inputValue.trim());
    };
    const handleClearSearch = () => {
        setInputValue('');
        onSearch('');
    };

    // ввод
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSearch();
    };

    // активность
    useEffect(() => {
        setIsSearchActive(inputValue.trim().length >= 3);
    }, [inputValue]);

    // закрыть Drawer
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            {/* 1) Рендерим Drawer отдельно, чтобы он не перекрывал инпут */}
            <DrawerFilters
                isOpen={isDrawerOpen}
                onClose={closeDrawer}
                onApplyFilters={(filters) => {
                    onApplyFilters(filters);
                    closeDrawer();
                }}
            />

            {/* 2) Сам блок поиска */}
            <Flex direction='column' alignItems='center' width='100%'>
                <Flex
                    w={{ sm: '328px', md: '448px', lg: '518px', xl: '518px' }}
                    justifyContent='center'
                    alignItems='center'
                    gap='12px'
                    position='relative'
                    pb='16px'
                    mt={{ base: '-5px', lg: '0' }}
                >
                    {/* Кнопка открытия фильтров */}
                    <IconButton
                        aria-label='Открыть фильтры'
                        data-test-id='filter-button'
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
                        borderColor='blackAlpha.600'
                        onClick={() => setIsDrawerOpen(true)}
                    />

                    {/* Группа ввода */}
                    <InputGroup w='full' position='relative' zIndex={1}>
                        <Input
                            data-test-id='search-input'
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
                            gap='15px'
                            right='8px'
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
                                    p='0'
                                />
                            )}
                            <IconButton
                                data-test-id='search-button'
                                aria-label='Поиск'
                                icon={<SearchIcon boxSize={4} />}
                                variant='ghost'
                                size='sm'
                                onClick={handleSearch}
                                cursor={isSearchActive ? 'pointer' : 'none'}
                                pointerEvents={isSearchActive ? 'auto' : 'none'}
                                opacity={isSearchActive ? 1 : 0.4}
                                _hover={{ background: 'transparent' }}
                                minW='auto'
                                p='0'
                            />
                        </InputRightElement>
                    </InputGroup>
                </Flex>

                {/* Фильтр аллергенов — без изменений */}
                <Flex w='518px' alignItems='center' gap='16px' mt='16px'>
                    <AllergenFilter />
                </Flex>
            </Flex>
        </>
    );
};
