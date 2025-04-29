import { HStack, Image, Tag, Text } from '@chakra-ui/react';

import { getCategoryIcon } from './get-category-icon';

export const renderCategoryTags = (
    list: string | string[],
    limit?: number, // Добавляем необязательный параметр limit
    tagBg?: string,
) => {
    const categoryList = Array.isArray(list) ? list : [list];

    const limitedList = typeof limit === 'number' ? categoryList.slice(0, limit) : categoryList;

    return limitedList.map((key) => {
        const { icon, title } = getCategoryIcon(key);
        return (
            <Tag
                key={key}
                bg={tagBg ?? 'lime.150'}
                borderRadius='4px'
                px={{ base: '4px', lg: '8px', xl: '8px' }}
                py={1}
            >
                <HStack spacing={1}>
                    {icon && <Image src={icon} boxSize='16px' alt={title} />}
                    <Text textStyle='mainText' isTruncated>
                        {title}
                    </Text>
                </HStack>
            </Tag>
        );
    });
};
