import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router';

export interface MenuItem {
    value: string;
    title: string;
    text: string[];
    icon: string;
}

interface MenuAccordionProps {
    menuItems: MenuItem[];
}

export const MenuAccordion = ({ menuItems }: MenuAccordionProps) => {
    const [activeTextIndex, setActiveTextIndex] = useState<string | null>(null);

    return (
        <Accordion allowMultiple h='100%' overflowY='auto'>
            {menuItems.map((item, index) => (
                <AccordionItem border='none' key={index}>
                    <AccordionButton
                        h='48px'
                        _hover={{ backgroundColor: 'lime.50' }}
                        display='flex'
                        justifyContent='space-between'
                        textAlign='left'
                        alignItems='center'
                        pr={0}
                    >
                        <Image src={item.icon} boxSize={6} mr={3} alt={`${item.title} icon`} />
                        <Text flex='1' textAlign='left' textStyle='menuItems'>
                            <Link
                                to='/vegan-cuisine'
                                data-test-id={
                                    item.title === 'Веганская кухня' ? 'vegan-cuisine' : ''
                                }
                            >
                                {item.title}
                            </Link>
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel px={0} pt={2} pb={2}>
                        <VStack spacing={1} align='stretch'>
                            {item.text.map((subItem, subIndex) => {
                                const indexKey = `${index}-${subIndex}`;
                                const isActive = indexKey === activeTextIndex;
                                return (
                                    <Link
                                        key={subItem}
                                        to='/vegan-cuisine'
                                        onClick={() => setActiveTextIndex(indexKey)}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Box
                                            display='flex'
                                            alignItems='center'
                                            pl='52px'
                                            pr='8px'
                                            h='36px'
                                            cursor='pointer'
                                            _hover={{ bg: 'lime.50' }}
                                        >
                                            <Box
                                                w={isActive ? '8px' : '1px'}
                                                h={isActive ? '28px' : '24px'}
                                                bg={isActive ? 'lime.300' : 'green.100'}
                                                mr='8px'
                                                borderRadius='full'
                                            />
                                            <Text
                                                fontWeight={isActive ? 700 : 500}
                                                fontSize='16px'
                                                lineHeight='150%'
                                            >
                                                {subItem}
                                            </Text>
                                        </Box>
                                    </Link>
                                );
                            })}
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
