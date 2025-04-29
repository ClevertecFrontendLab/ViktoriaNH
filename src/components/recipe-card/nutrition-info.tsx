import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

type NutritionProps = {
    data: {
        nutritionValue?: {
            calories?: number;
            proteins?: number;
            fats?: number;
            carbohydrates?: number;
        };
    };
};

export const NutritionInfo: FC<NutritionProps> = ({ data }) => {
    const { calories, proteins, fats, carbohydrates } = data.nutritionValue || {};

    const infoItems = [
        { label: 'калорийность', value: calories, unit: 'ккал' },
        { label: 'белки', value: proteins, unit: 'грамм' },
        { label: 'жиры', value: fats, unit: 'грамм' },
        { label: 'углеводы', value: carbohydrates, unit: 'грамм' },
    ];

    return (
        <Box w='100%' maxW='668px' mx='auto' as='article'>
            <Text textStyle='mainTextSmall' color='blackAlpha.800' mb={5}>
                *Калорийность на 1 порцию
            </Text>

            <Flex
                direction={{ sm: 'column', md: 'row' }}
                gap={{ base: '12px', xl: '24px' }}
                align='stretch'
            >
                {infoItems.map(({ label, value, unit }) => (
                    <Flex
                        key={label}
                        direction={{ sm: 'row', md: 'column' }}
                        flex='1'
                        borderRadius='2xl'
                        p={4}
                        border='1px solid'
                        borderColor='blackAlpha.200'
                        align='center'
                        justify='space-between'
                        gap={3}
                    >
                        <Text textStyle='mainTextSmall' color='blackAlpha.600'>
                            {label}
                        </Text>

                        <Text
                            textStyle='nutritionValue'
                            fontSize={value !== undefined ? undefined : '14px'}
                        >
                            {value !== undefined ? value : 'не указано'}
                        </Text>

                        <Text
                            textStyle='buttonTitle'
                            color='blackAlpha.900'
                            textTransform='uppercase'
                        >
                            {value !== undefined ? unit : ''}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};
