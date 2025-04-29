import { Flex, Switch, Text } from '@chakra-ui/react';

import { allergensList } from '~/constants/allergens-list';
import { useAllergenFilter } from '~/hooks/use-allergen-filter';

import { SelectList } from '../select-list/select-list';

export const AllergenFilter: React.FC = () => {
    const {
        isFilterActive: isAllergenFilterActive,
        toggleFilter: handleSwitchChange,
        selectedAllergens,
        handleAllergenSelectionChange,
        newAllergenInput: newAllergen,
        setNewAllergenInput: setNewAllergen,
        addCustomAllergen: handleAddCustomAllergen,
        availableAllergens,
    } = useAllergenFilter({ initialAllergens: allergensList });

    return (
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
                py='6px'
                data-test-id='allergens-switcher'
            >
                <Text fontSize='16px'>Исключить мои аллергены</Text>
                <Switch
                    size='md'
                    colorScheme='green'
                    isChecked={isAllergenFilterActive}
                    onChange={handleSwitchChange}
                    data-test-id='allergens-switcher-filter'
                />
            </Flex>

            <SelectList
                allergens={availableAllergens}
                selectedAllergens={selectedAllergens}
                handleSelectAllergen={handleAllergenSelectionChange}
                isFilterActive={isAllergenFilterActive}
                newAllergen={newAllergen}
                setNewAllergen={setNewAllergen}
                handleAddCustomAllergen={handleAddCustomAllergen}
            />
        </Flex>
    );
};
