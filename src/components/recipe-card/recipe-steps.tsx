import { Box, Flex, Image, Text } from '@chakra-ui/react';

export const RecipeSteps = ({
    steps,
}: {
    steps?: Array<{ stepNumber: number; description: string; image: string }>;
}) => {
    if (!steps || steps.length === 0) {
        return null; // Если нет данных, компонент не рендерится
    }

    return (
        <Box w='100%' maxW='668px' mx='auto'>
            <Text as='h2' textStyle='titleRecipeCard' mb={5}>
                Шаги приготовления
            </Text>

            {steps?.map((step) => (
                <Flex
                    key={step.stepNumber}
                    justify='space-between'
                    align='flex-start'
                    borderRadius='8px'
                    border='1px solid'
                    borderColor='blackAlpha.200'
                    mb={5}
                    p={4}
                >
                    {step.image ? (
                        <Image
                            src={step.image}
                            alt={`Шаг ${step.stepNumber}`}
                            w={{
                                base: '158px',
                                lg: '346px',
                            }}
                            minH={{
                                base: '128px',
                                lg: '244px',
                            }}
                            objectFit='cover'
                            borderRadius='8px'
                            mb={{ base: 4, md: 0 }}
                        />
                    ) : null}

                    <Box flex='1' ml={1}>
                        <Text
                            textStyle='mainText'
                            bg='blackAlpha.100'
                            borderRadius='8px'
                            padding='2px 8px'
                            mb={{ base: 3, lg: 4 }}
                            textAlign='center'
                            w='fit-content'
                        >
                            Шаг {step.stepNumber}
                        </Text>
                        <Text textStyle='mainText'>{step.description}</Text>
                    </Box>
                </Flex>
            ))}
        </Box>
    );
};
