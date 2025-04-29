import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';

import { MenuCategory } from '~/types/menu-category';

interface MenuCategoryItemProps {
    item: MenuCategory;
    categoryIndex: number;
    activeCategoryIndex: number | null;
    activeSubcategoryIndex: number | null;
    handleCategoryClick: (categoryIndex: number) => void; // Добавляем handleCategoryClick
    handleSubcategoryClick: (categoryIndex: number, subcategoryIndex: number) => void;
}

// export const MenuCategoryItem: React.FC<MenuCategoryItemProps> = ({
//     item,
//     categoryIndex,
//     activeCategoryIndex,
//     activeSubcategoryIndex,
//     handleCategoryClick,
//     handleSubcategoryClick,
// }: MenuCategoryItemProps) => {
//     const isActiveCategory = categoryIndex === activeCategoryIndex;

//     return (
//         <AccordionItem border='none' key={categoryIndex}>
//             <AccordionButton
//                 h='48px'
//                 _hover={{ backgroundColor: 'lime.50' }}
//                 display='flex'
//                 justifyContent='space-between'
//                 textAlign='left'
//                 alignItems='center'
//                 pr={0}
//                 onClick={() => handleCategoryClick(categoryIndex)}
//                 data-test-id={
//                     item.title === 'Веганская кухня'
//                         ? 'vegan-cuisine'
//                         : item.title.toLowerCase().replace(/\s+/g, '-')
//                 } // Добавляем для "Веганской кухни" специальный data-test-id
//             >
//                 <Image src={item.icon} boxSize={6} mr={3} alt={item.title + ' icon'} />
//                 <Text flex='1' textAlign='left' textStyle='menuItems'>
//                     {item.title}
//                 </Text>
//                 <AccordionIcon
//                     transform={isActiveCategory ? 'rotate(90deg)' : 'rotate(0deg)'}
//                     transition='transform 0.3s ease'
//                 />
//             </AccordionButton>

//             {isActiveCategory && (
//                 <AccordionPanel px={0} pt={2} pb={2}>
//                     <VStack spacing={3} align='stretch'>
//                         {item.text.map((subItem, subIndex) => {
//                             const isActive =
//                                 categoryIndex === activeCategoryIndex &&
//                                 subIndex === activeSubcategoryIndex;

//                             return (
//                                 <Box
//                                     key={subIndex}
//                                     display='flex'
//                                     alignItems='center'
//                                     pl='52px'
//                                     pr='8px'
//                                     h='auto'
//                                     cursor='pointer'
//                                     _hover={{ bg: 'lime.50' }}
//                                     onClick={() => handleSubcategoryClick(categoryIndex, subIndex)}
//                                     // data-test-id={isActive
//                                     //     ? `${subcategoryTestId}-active` // Для активной подкатегории
//                                     //     : `tab-${subcategoryTestId}-${subIndex}`} // Для остальных подкатегорий
//                                 >
//                                     <Box
//                                         w={isActive ? '8px' : '1px'}
//                                         h={isActive ? '28px' : '24px'}
//                                         bg={isActive ? 'lime.300' : 'green.100'}
//                                         mr='8px'
//                                         borderRadius='full'
//                                     />
//                                     <Text
//                                         fontWeight={isActive ? 700 : 500}
//                                         fontSize='16px'
//                                         lineHeight='150%'
//                                     >
//                                         {subItem}
//                                     </Text>
//                                 </Box>
//                             );
//                         })}
//                     </VStack>
//                 </AccordionPanel>
//             )}
//         </AccordionItem>
//     );
// };
export const MenuCategoryItem: React.FC<MenuCategoryItemProps> = ({
    item,
    categoryIndex,
    activeCategoryIndex,
    activeSubcategoryIndex,
    handleCategoryClick,
    handleSubcategoryClick,
}: MenuCategoryItemProps) => {
    const isActiveCategory = categoryIndex === activeCategoryIndex;
    const categoryTestId =
        item.title === 'Веганская кухня'
            ? 'vegan-cuisine'
            : item.title.toLowerCase().replace(/\s+/g, '-'); // Обрабатываем название для data-test-id

    return (
        <AccordionItem border='none' key={categoryIndex}>
            <AccordionButton
                h='48px'
                _hover={{ backgroundColor: 'lime.50' }}
                display='flex'
                justifyContent='space-between'
                textAlign='left'
                alignItems='center'
                pr={0}
                onClick={() => handleCategoryClick(categoryIndex)}
                data-test-id={isActiveCategory ? `${categoryTestId}-active` : categoryTestId} // Добавляем активный id для категории
            >
                <Image src={item.icon} boxSize={6} mr={3} alt={item.title + ' icon'} />
                <Text flex='1' textAlign='left' textStyle='menuItems'>
                    {item.title}
                </Text>
                <AccordionIcon
                    transform={isActiveCategory ? 'rotate(90deg)' : 'rotate(0deg)'}
                    transition='transform 0.3s ease'
                />
            </AccordionButton>

            {isActiveCategory && (
                <AccordionPanel px={0} pt={2} pb={2}>
                    <VStack spacing={3} align='stretch'>
                        {item.text.map((subItem, subIndex) => {
                            const isActive =
                                categoryIndex === activeCategoryIndex &&
                                subIndex === activeSubcategoryIndex;

                            const subcategoryTestId = subItem.toLowerCase().replace(/\s+/g, '-'); // Преобразуем название подкатегории для data-test-id

                            return (
                                <Box
                                    key={subIndex}
                                    display='flex'
                                    alignItems='center'
                                    pl='52px'
                                    pr='8px'
                                    h='auto'
                                    cursor='pointer'
                                    _hover={{ bg: 'lime.50' }}
                                    onClick={() => handleSubcategoryClick(categoryIndex, subIndex)}
                                    data-test-id={
                                        isActive
                                            ? `${subcategoryTestId}-active` // Для активной подкатегории
                                            : `tab-${subcategoryTestId}-${subIndex}`
                                    } // Для остальных подкатегорий
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
                            );
                        })}
                    </VStack>
                </AccordionPanel>
            )}
        </AccordionItem>
    );
};
