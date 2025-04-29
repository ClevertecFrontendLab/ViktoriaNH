import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Flex,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Tag,
    TagLabel,
    Text,
} from '@chakra-ui/react';

export interface SelectAllergensProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    allergens: string[];
    selectedAllergens: string[];
    handleSelectAllergen: (value: (string | number)[]) => void;
    isFilterActive: boolean;
    newAllergen: string;
    handleAddCustomAllergen: () => void;
    handleKeyPress: (e: React.KeyboardEvent) => void;
    setNewAllergen: (value: string) => void;
}

export const SelectAllergens: React.FC<SelectAllergensProps> = ({
    isMenuOpen,
    toggleMenu,
    allergens,
    selectedAllergens,
    handleSelectAllergen,
    isFilterActive,
    newAllergen,
    handleAddCustomAllergen,
    handleKeyPress,
    setNewAllergen,
}) => (
    <Box zIndex={999}>
        <Menu isOpen={isMenuOpen} closeOnSelect={false}>
            <MenuButton
                w='234px'
                onClick={toggleMenu}
                border='1px solid'
                borderColor='gray.300'
                borderRadius='md'
                padding='6px 8px'
                _focus={{ borderColor: 'lime.150' }}
                _hover={{ borderColor: 'lime.300' }}
                disabled={!isFilterActive}
                style={{ cursor: isFilterActive ? 'pointer' : 'not-allowed' }}
                data-test-id='allergens-menu-button-filter'
            >
                <Flex align='center' flexWrap='wrap' gap='4px' minH='36px'>
                    {selectedAllergens.length > 0 ? (
                        selectedAllergens.map((allergen) => (
                            <Tag
                                key={allergen}
                                size='sm'
                                variant='solid'
                                borderColor='lime.150'
                                data-test-id='filter-tag'
                            >
                                <TagLabel>{allergen}</TagLabel>
                            </Tag>
                        ))
                    ) : (
                        <Text color='blackAlpha.500' fontSize='xs'>
                            Выберите из списка...
                        </Text>
                    )}
                    <Box ml='auto'>
                        <ChevronDownIcon />
                    </Box>
                </Flex>
            </MenuButton>

            <MenuList maxH='200px' overflowY='auto' data-test-id='allergens-menu'>
                <Flex p='2' direction='column'>
                    <CheckboxGroup value={selectedAllergens} onChange={handleSelectAllergen}>
                        {allergens.map((allergen, index) => (
                            <MenuItem key={allergen} closeOnSelect={false}>
                                <Checkbox
                                    value={allergen}
                                    isChecked={selectedAllergens.includes(allergen)}
                                    isDisabled={!isFilterActive}
                                    data-test-id={`allergen-${index}`}
                                >
                                    {allergen}
                                </Checkbox>
                            </MenuItem>
                        ))}
                    </CheckboxGroup>

                    <MenuItem closeOnSelect={false}>
                        <Flex gap='8px' align='center' w='100%'>
                            <Input
                                value={newAllergen}
                                onChange={(e) => setNewAllergen(e.target.value)}
                                placeholder='Введите свой аллерген'
                                onKeyDown={handleKeyPress}
                                onClick={(e) => e.stopPropagation()}
                                isDisabled={!isFilterActive}
                                size='sm'
                                maxW='170px'
                                data-test-id='add-other-allergen'
                            />
                            <Button
                                onClick={handleAddCustomAllergen}
                                colorScheme='green'
                                borderRadius='full'
                                w='30px'
                                h='30px'
                                padding='0'
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                isDisabled={!isFilterActive || !newAllergen.trim()}
                                data-test-id='add-allergen-button'
                            >
                                <Text color='white' fontSize='20px'>
                                    +
                                </Text>
                            </Button>
                        </Flex>
                    </MenuItem>
                </Flex>
            </MenuList>
        </Menu>
    </Box>
);
