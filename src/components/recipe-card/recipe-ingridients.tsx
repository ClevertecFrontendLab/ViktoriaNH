import { Box, Flex, Select, Text, VStack } from '@chakra-ui/react';
import { FC, useState } from 'react';

type Ingredient = {
    title: string;
    count: string;
    measureUnit: string;
};

type RecipeIngredientsProps = {
    ingredients: Ingredient[];
    basePortions: number;
};

export const RecipeIngredients: FC<RecipeIngredientsProps> = ({ ingredients, basePortions }) => {
    const [selectedPortions, setSelectedPortions] = useState(basePortions);

    const handlePortionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPortions(Number(e.target.value));
    };

    const calculateCount = (countStr: string) => {
        const numeric = parseFloat(countStr);
        if (isNaN(numeric)) return countStr; // "по вкусу", "щепотка", и т.д.
        const scaled = (numeric * selectedPortions) / basePortions;
        return scaled % 1 === 0 ? scaled.toString() : scaled.toFixed(1);
    };

    return (
        <Box w='100%' maxW='668px' mx='auto'>
            <Flex justify='space-between' align='center' mb={4}>
                <Text as='h3' textStyle='numbers' textTransform='uppercase'>
                    Ингредиенты
                </Text>
                <Box display='flex' gap={2} alignItems='center'>
                    <Text textStyle='numbers' textTransform='uppercase'>
                        порц{selectedPortions === 1 ? 'ия' : selectedPortions < 5 ? 'ии' : 'ий'}
                    </Text>
                    <Select
                        value={selectedPortions}
                        onChange={handlePortionChange}
                        width='auto'
                        size='sm'
                    >
                        {[...Array(10)].map((_, i) => {
                            const portion = i + 1;
                            return (
                                <option key={portion} value={portion}>
                                    {portion}
                                </option>
                            );
                        })}
                    </Select>
                </Box>
            </Flex>

            <VStack align='stretch' spacing={0}>
                {ingredients.map(({ title, count, measureUnit }, index) => (
                    <Flex
                        key={title}
                        justify='space-between'
                        bg={index % 2 === 0 ? ' blackAlpha.100' : 'transparent'} // меняем цвет фона каждой второй строки
                        px={6} // добавим немного отступов, чтобы было красивее
                        py={{ base: 2.5, lg: 4 }}
                    >
                        <Text textStyle='mainTextBold' color='blackAlpha.900'>
                            {title}
                        </Text>
                        <Text textStyle='mainText' color='blackAlpha.900'>
                            {calculateCount(count)} {measureUnit}
                        </Text>
                    </Flex>
                ))}
            </VStack>
        </Box>
    );
};
