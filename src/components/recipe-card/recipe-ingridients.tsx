import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Text, VStack } from '@chakra-ui/react';
import { useMemo, useState } from 'react';

type Ingredient = {
    title: string;
    count: string;
    measureUnit: string;
};

// type RecipeIngredientsProps = {
//     ingredients: Ingredient[];
//     basePortions: number;
// };

// export const RecipeIngredients: FC<RecipeIngredientsProps> = ({ ingredients, basePortions }) => {
//     const [selectedPortions, setSelectedPortions] = useState(basePortions);

//     // Функция для расчета количества ингредиентов
//     const calculateCount = (countStr: string) => {
//         const numeric = parseFloat(countStr);
//         if (isNaN(numeric)) return countStr; // "по вкусу", "щепотка", и т.д.
//         const scaled = (numeric * selectedPortions) / basePortions;
//         return scaled % 1 === 0 ? scaled.toString() : scaled.toFixed(1);
//     };

//     return (
//         <Box w='100%' maxW='668px' mx='auto'>
//             <Flex justify='space-between' align='center' mb={4}>
//                 <Text as='h3' textStyle='numbers' textTransform='uppercase'>
//                     Ингредиенты
//                 </Text>
//                 <Box display='flex' gap={2} alignItems='center'>
//                     <Text textStyle='numbers' textTransform='uppercase'>
//                         порц{selectedPortions === 1 ? 'ия' : selectedPortions < 5 ? 'ии' : 'ий'}
//                     </Text>

//                     {/* Контейнер с кнопками для изменения порций */}
//                     <Box display='flex' flexDirection='column' alignItems='center' gap={2}>
//                         {/* Кнопка увеличения */}
//                         <Box zIndex={1001} data-test-id='increment-stepper'>
//                             <IconButton
//                                 aria-label='Увеличить порции'
//                                 icon={<ChevronUpIcon />}
//                                 size='m'
//                                 onClick={() => setSelectedPortions((prev) => prev + 1)} // Без ограничений
//                             />
//                         </Box>
//                         {/* Отображение текущего количества порций */}
//                         <Box zIndex={1001}>
//                             <Text width='30px' textAlign='center'>
//                                 {selectedPortions}
//                             </Text>
//                         </Box>
//                         {/* Кнопка уменьшения */}
//                         <Box zIndex={1001} data-test-id='decrement-stepper'>
//                             <IconButton
//                                 aria-label='Уменьшить порции'
//                                 icon={<ChevronDownIcon />}
//                                 size='m'
//                                 onClick={() => setSelectedPortions((prev) => Math.max(1, prev - 1))} // Не даём уменьшить ниже 1
//                             />
//                         </Box>
//                     </Box>
//                 </Box>
//             </Flex>

//             <VStack align='stretch' spacing={0}>
//                 {ingredients.map(({ title, count, measureUnit }, index) => (
//                     <Flex
//                         key={title}
//                         justify='space-between'
//                         bg={index % 2 === 0 ? 'blackAlpha.100' : 'transparent'}
//                         px={6}
//                         py={{ base: 2.5, lg: 4 }}
//                     >
//                         <Text textStyle='mainTextBold' color='blackAlpha.900'>
//                             {title}
//                         </Text>
//                         <Text
//                             textStyle='mainText'
//                             color='blackAlpha.900'
//                             data-test-id={`ingredient-quantity-${index}`}
//                         >
//                             {calculateCount(count)} {measureUnit}
//                         </Text>
//                     </Flex>
//                 ))}
//             </VStack>
//         </Box>
//     );
// };

export const RecipeIngredients = ({
    ingredients,
    basePortions,
}: {
    ingredients: Ingredient[];
    basePortions: number;
}) => {
    const [selectedPortions, setSelectedPortions] = useState(basePortions);

    // Пересчитываем ингредиенты заранее, всегда актуальные данные
    const recalculatedIngredients = useMemo(
        () =>
            ingredients.map(({ title, count, measureUnit }) => ({
                title,
                count: Math.round((Number(count) / basePortions) * selectedPortions),
                measureUnit,
            })),
        [ingredients, basePortions, selectedPortions],
    );

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

                    {/* Кнопки управления */}
                    <Box display='flex' flexDirection='column' alignItems='center' gap={2}>
                        <Box zIndex={1001} data-test-id='increment-stepper'>
                            <IconButton
                                aria-label='Увеличить порции'
                                icon={<ChevronUpIcon />}
                                size='m'
                                onClick={() => setSelectedPortions((prev) => prev + 1)}
                            />
                        </Box>
                        <Box zIndex={1001}>
                            <Text width='30px' textAlign='center'>
                                {selectedPortions}
                            </Text>
                        </Box>
                        <Box zIndex={1001} data-test-id='decrement-stepper'>
                            <IconButton
                                aria-label='Уменьшить порции'
                                icon={<ChevronDownIcon />}
                                size='m'
                                onClick={() => setSelectedPortions((prev) => Math.max(1, prev - 1))}
                            />
                        </Box>
                    </Box>
                </Box>
            </Flex>

            <VStack align='stretch' spacing={0}>
                {recalculatedIngredients.map(({ title, count, measureUnit }, index) => (
                    <Flex
                        key={title}
                        justify='space-between'
                        bg={index % 2 === 0 ? 'blackAlpha.100' : 'transparent'}
                        px={6}
                        py={{ base: 2.5, lg: 4 }}
                    >
                        <Text textStyle='mainTextBold' color='blackAlpha.900'>
                            {title}
                        </Text>
                        <Text
                            textStyle='mainText'
                            color='blackAlpha.900'
                            data-test-id={`ingredient-quantity-${index}`}
                        >
                            {count} {measureUnit}
                        </Text>
                    </Flex>
                ))}
            </VStack>
        </Box>
    );
};
