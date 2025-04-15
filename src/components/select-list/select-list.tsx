import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';

export const SelectList = () => (
    <Menu>
        <MenuButton as={InputGroup} w='234px'>
            <InputLeftElement pointerEvents='none'></InputLeftElement>

            <Input
                placeholder='Выберите из списка...'
                _placeholder={{ color: 'blackAlpha.700', fontSize: 'xs' }}
            />

            <InputRightElement>
                <ChevronDownIcon />
            </InputRightElement>
        </MenuButton>

        <MenuList>
            <MenuItem>Что-то 1</MenuItem>
            <MenuItem>Что-то 2</MenuItem>
            <MenuItem>Что-то 3</MenuItem>
        </MenuList>
    </Menu>
);
