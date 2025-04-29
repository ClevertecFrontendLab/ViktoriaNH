import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Tag,
    TagCloseButton,
    TagLabel,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import { allergensList } from '~/constants/allergens-list';
import { meatTypes, sidedishTypes } from '~/constants/filters';
import { menuItems } from '~/data/menu-items';
import { useAllergenFilter } from '~/hooks/use-allergen-filter';
import { useTagRemove } from '~/hooks/use-tag-remove';

import { AllergenFilter } from '../filters/allergen-filter';

// Данные фильтров (примерные)
const authors = ['Иван Иванов', 'Мария Смирнова', 'Алексей Петров'];

export interface FilterState {
    allergens: string[];
    categories: string[];
    authors: string[];
    meatTypes: string[];
    garnishTypes: string[];
    excludeAllergens: boolean;
}

interface DrawerFiltersProps {
    isOpen: boolean;
    onClose: () => void;
    onApplyFilters: (filters: FilterState) => void;
}

export const DrawerFilters = ({ isOpen, onClose, onApplyFilters }: DrawerFiltersProps) => {
    const {
        isFilterActive,
        toggleFilter,
        selectedAllergens,
        availableAllergens,
        newAllergenInput,
        setNewAllergenInput,
        addCustomAllergen,
        handleAllergenSelectionChange,
    } = useAllergenFilter({ initialAllergens: allergensList }); // <-- исправление тут

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
    const [selectedMeatTypes, setSelectedMeatTypes] = useState<string[]>([]);
    const [selectedGarnishTypes, setSelectedGarnishTypes] = useState<string[]>([]);
    const [excludeAllergens, setExcludeAllergens] = useState(false);

    // Используем хук для удаления тегов
    const { handleTagRemove } = useTagRemove({
        setSelectedCategories,
        setSelectedAuthors,
        setSelectedMeatTypes,
        setSelectedGarnishTypes,
        selectedAllergens, // << ЭТО
        handleAllergenSelectionChange,
    });

    const handleClearFilters = () => {
        setSelectedCategories([]);
        setSelectedAuthors([]);
        setSelectedMeatTypes([]);
        setSelectedGarnishTypes([]);
        setExcludeAllergens(false);
    };

    const handleApplyFilters = () => {
        const filters: FilterState = {
            allergens: selectedAllergens,
            categories: selectedCategories,
            authors: selectedAuthors,
            meatTypes: selectedMeatTypes,
            garnishTypes: selectedGarnishTypes,
            excludeAllergens,
        };
        onApplyFilters(filters);
        onClose();
    };

    const isAnyFilterActive =
        selectedAllergens.length > 0 ||
        selectedCategories.length > 0 ||
        selectedAuthors.length > 0 ||
        selectedMeatTypes.length > 0 ||
        selectedGarnishTypes.length > 0 ||
        excludeAllergens;

    const allCategories = menuItems.map((item) => item.title);

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            // size={{ base: '280px', lg: '456px', xl: '456px' }}
        >
            <DrawerOverlay />
            <DrawerContent data-test-id='filter-drawer'>
                <DrawerCloseButton data-test-id='close-filter-drawer' />
                <DrawerHeader>Фильтры</DrawerHeader>

                <DrawerBody>
                    <VStack spacing={6} align='stretch'>
                        {/* Категории */}
                        <Box>
                            <Text mb={2} fontWeight='bold'>
                                Категории
                            </Text>
                            <Menu closeOnSelect={false}>
                                <MenuButton
                                    as={Button}
                                    data-test-id='filter-menu-button-категория'
                                    rightIcon={<ChevronDownIcon />}
                                    w='full'
                                    textAlign='left'
                                >
                                    {selectedCategories.length > 0
                                        ? selectedCategories.join(', ')
                                        : 'Выберите категории'}
                                </MenuButton>
                                <MenuList maxHeight='300px' overflowY='auto'>
                                    <VStack align='start' spacing={1} p={2}>
                                        {allCategories.map((category) => {
                                            const testId = `checkbox-${category.toLowerCase()}`; // "checkbox-веганская кухня", "checkbox-морепродукты" и т.д.
                                            return (
                                                <MenuItem
                                                    key={category}
                                                    onClick={(e) => e.stopPropagation()}
                                                    _hover={{ bg: 'transparent' }}
                                                    _focus={{ bg: 'transparent' }}
                                                    px={0}
                                                >
                                                    <Checkbox
                                                        data-test-id={testId}
                                                        isChecked={selectedCategories.includes(
                                                            category,
                                                        )}
                                                        onChange={(e) => {
                                                            if (e.target.checked) {
                                                                setSelectedCategories((prev) => [
                                                                    ...prev,
                                                                    category,
                                                                ]);
                                                            } else {
                                                                setSelectedCategories((prev) =>
                                                                    prev.filter(
                                                                        (c) => c !== category,
                                                                    ),
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        {category}
                                                    </Checkbox>
                                                </MenuItem>
                                            );
                                        })}
                                    </VStack>
                                </MenuList>
                            </Menu>
                        </Box>

                        {/* Авторы */}
                        <Box>
                            <Text mb={2} fontWeight='bold'>
                                Авторы
                            </Text>
                            <Menu closeOnSelect={false}>
                                <MenuButton
                                    as={Button}
                                    rightIcon={<ChevronDownIcon />}
                                    w='full'
                                    textAlign='left'
                                >
                                    {selectedAuthors.length > 0
                                        ? selectedAuthors.join(', ')
                                        : 'Выберите авторов'}
                                </MenuButton>
                                <MenuList maxHeight='300px' overflowY='auto'>
                                    <VStack align='start' spacing={1} p={2}>
                                        {authors.map((author) => (
                                            <MenuItem
                                                key={author}
                                                onClick={(e) => e.stopPropagation()}
                                                _hover={{ bg: 'transparent' }}
                                                _focus={{ bg: 'transparent' }}
                                                px={0}
                                            >
                                                <Checkbox
                                                    isChecked={selectedAuthors.includes(author)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedAuthors((prev) => [
                                                                ...prev,
                                                                author,
                                                            ]);
                                                        } else {
                                                            setSelectedAuthors((prev) =>
                                                                prev.filter((a) => a !== author),
                                                            );
                                                        }
                                                    }}
                                                >
                                                    {author}
                                                </Checkbox>
                                            </MenuItem>
                                        ))}
                                    </VStack>
                                </MenuList>
                            </Menu>
                        </Box>

                        {/* Тип мяса */}
                        <Box>
                            <Text mb={2} fontWeight='bold'>
                                Тип мяса
                            </Text>
                            <CheckboxGroup
                                value={selectedMeatTypes}
                                onChange={(values) => setSelectedMeatTypes(values as string[])}
                            >
                                <VStack align='start'>
                                    {meatTypes.map((meat) => (
                                        <Checkbox key={meat} value={meat}>
                                            {meat}
                                        </Checkbox>
                                    ))}
                                </VStack>
                            </CheckboxGroup>
                        </Box>

                        {/* Тип гарнира */}
                        <Box>
                            <Text mb={2} fontWeight='bold'>
                                Тип гарнира
                            </Text>
                            <CheckboxGroup
                                value={selectedGarnishTypes}
                                onChange={(values) => setSelectedGarnishTypes(values as string[])}
                            >
                                <VStack align='start'>
                                    {sidedishTypes.map((garnish) => {
                                        const testId = `checkbox-${garnish.toLowerCase()}`; // "checkbox-картошка" и т.п.
                                        return (
                                            <Checkbox
                                                key={garnish}
                                                value={garnish}
                                                data-test-id={testId}
                                            >
                                                {garnish}
                                            </Checkbox>
                                        );
                                    })}
                                </VStack>
                            </CheckboxGroup>
                        </Box>

                        {/* Блок с аллергенами */}
                        <AllergenFilter
                            isFilterActive={isFilterActive}
                            toggleFilter={toggleFilter}
                            selectedAllergens={selectedAllergens}
                            availableAllergens={availableAllergens}
                            newAllergenInput={newAllergenInput}
                            setNewAllergenInput={setNewAllergenInput}
                            addCustomAllergen={addCustomAllergen}
                            handleAllergenSelectionChange={handleAllergenSelectionChange}
                        />
                    </VStack>
                </DrawerBody>

                {/* Отображение выбранных тегов */}
                <DrawerFooter flexDirection='column' alignItems='flex-start'>
                    <Flex flexWrap='wrap' gap={2} mb={4}>
                        {[
                            ...selectedCategories,
                            ...selectedAuthors,
                            ...selectedAllergens,
                            ...selectedMeatTypes,
                            ...selectedGarnishTypes,
                        ].map((tag) => (
                            <Tag
                                data-test-id='filter-tag'
                                size='md'
                                key={tag}
                                borderRadius='full'
                                variant='solid'
                                colorScheme='green'
                            >
                                <TagLabel>{tag}</TagLabel>
                                <TagCloseButton
                                    onClick={() => {
                                        if (selectedCategories.includes(tag)) {
                                            handleTagRemove(tag, 'category');
                                        }
                                        if (selectedAuthors.includes(tag)) {
                                            handleTagRemove(tag, 'author');
                                        }
                                        if (selectedAllergens.includes(tag)) {
                                            handleTagRemove(tag, 'allergen');
                                        }
                                        if (selectedMeatTypes.includes(tag)) {
                                            handleTagRemove(tag, 'meat');
                                        }
                                        if (selectedGarnishTypes.includes(tag)) {
                                            handleTagRemove(tag, 'garnish');
                                        }
                                    }}
                                />
                            </Tag>
                        ))}
                    </Flex>

                    <Flex w='full' gap={4}>
                        <Button
                            data-test-id='clear-filter-button'
                            variant='outline'
                            mr={3}
                            onClick={handleClearFilters}
                        >
                            Очистить фильтры
                        </Button>
                        <Button
                            colorScheme='green'
                            onClick={handleApplyFilters}
                            isDisabled={!isAnyFilterActive}
                            data-test-id='find-recipe-button'
                            sx={{
                                pointerEvents: !isAnyFilterActive ? 'none' : 'auto',
                            }}
                        >
                            Найти рецепт
                        </Button>
                    </Flex>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
