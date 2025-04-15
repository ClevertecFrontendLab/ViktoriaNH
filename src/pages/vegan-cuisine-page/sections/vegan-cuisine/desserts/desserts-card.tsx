import {
    Card,
    CardBody,
    CardFooter,
    Heading,
    HStack,
    Icon,
    Image,
    Tag,
    Text,
} from '@chakra-ui/react';

import { BookmarkIcon } from '../../../../../components/icons/bookmark-icon';
import { LikeIcon } from '../../../../../components/icons/like-icon';
import { menuItems } from '../../../../../data/menu-items';

export interface DessertsCardProps {
    data: {
        id: number;
        title: string;
        description: string;
        category: string;
        bookmarks?: number;
        likes?: number;
    };
}

export const DessertsCard: React.FC<DessertsCardProps> = ({ data }) => {
    const currentCategory = menuItems.find((item) => item.title === data.category);

    return (
        <Card
            borderRadius='8px'
            overflow='hidden'
            w='100%'
            maxW={{
                sm: '328px',
                md: '232px',
                lg: '282.67px',
                xl: '322px',
            }}
            direction='column'
            variant='outline'
            p={{ base: '12px', lg: '16px', xl: '24px' }}
            pt={{ xl: '24px' }}
            pb={{ xl: '20px' }}
            pl={{ xl: '24px' }}
            pr={{ xl: '24px' }}
        >
            <CardBody p={0} h='auto'>
                <Heading
                    as='h2'
                    fontFamily='"Inter", sans-serif'
                    fontSize={{ base: '16px', lg: '20px', xl: '20px' }}
                    fontWeight='500'
                    lineHeight={{ base: '150%', lg: '140%', xl: '140%' }}
                    mb={{ base: '8px', lg: '8px', xl: '8px' }}
                    overflow='hidden'
                    textOverflow='ellipsis'
                    whiteSpace='nowrap'
                >
                    {data.title}
                </Heading>

                <Text
                    textStyle='mainText'
                    style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: 3,
                        maxWidth: '100%',
                        whiteSpace: 'normal',
                    }}
                >
                    {data.description}
                </Text>
            </CardBody>

            <CardFooter
                p={0}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                mt='24px'
            >
                <Tag bg='lime.50' borderRadius='4px' px='8px' py='2px'>
                    <HStack spacing={2}>
                        <Image src={currentCategory?.icon} boxSize='16px' alt={data.category} />
                        <Text textStyle='mainText'>{data.category}</Text>
                    </HStack>
                </Tag>

                <HStack spacing={{ lg: '8px', md: '1px' }}>
                    {data.bookmarks !== undefined && (
                        <HStack width='32px' spacing='4px'>
                            <Icon as={BookmarkIcon} w={3} h={3} />
                            <Text textStyle='numbers'>{data.bookmarks}</Text>
                        </HStack>
                    )}
                    {data.likes !== undefined && (
                        <HStack width='32px' spacing='4px'>
                            <Icon as={LikeIcon} w={3} h={3} />
                            <Text textStyle='numbers'>{data.likes}</Text>
                        </HStack>
                    )}
                </HStack>
            </CardFooter>
        </Card>
    );
};
