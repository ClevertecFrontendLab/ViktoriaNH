// import {
//     Box,
//     Button,
//     Card,
//     CardBody,
//     CardFooter,
//     Heading,
//     HStack,
//     Image,
//     Text,
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router';

// import { RecipeStats } from '~/components/recipe-stats/recipe-stats';
// import { getCategoryList } from '~/utils/normilize';
// import { renderCategoryTags } from '~/utils/render-category-tags';

// import { BookmarkIcon } from '../../../../../../components/icons/bookmark-icon';
// import { Recipe } from '../../../../../../types/recipe-types';

// interface RecipeCardProps {
//     data: Recipe;
// }

// export const BestCard: React.FC<RecipeCardProps> = ({ data }) => {
//     const categoryList = getCategoryList(data.category);
//     const navigate = useNavigate();

//     return (
//         <Card
//             borderRadius='lg'
//             overflow='hidden'
//             maxW='668px'
//             h='244px'
//             direction='row'
//             variant='outline'
//         >
//             <Image src={data.image} alt={data.title} objectFit='cover' w='346px' h='100%' />

//             <Box
//                 minW='322px'
//                 w='100%'
//                 display='flex'
//                 flexDirection='column'
//                 justifyContent='space-between'
//                 px='24px'
//                 py='20px'
//                 flex='1'
//                 gap='24px'
//             >
//                 <Box display='flex' justifyContent='space-between' w='100%'>
//                     <HStack spacing={2}>{renderCategoryTags(categoryList, 1, 'lime.50')}</HStack>

//                     <RecipeStats bookmarks={data.bookmarks} likes={data.likes} />
//                 </Box>

//                 <CardBody p={0}>
//                     <Box w='100%' overflow='hidden'>
//                         <Heading
//                             as='h2'
//                             fontFamily='"Inter", sans-serif'
//                             fontSize='20px'
//                             fontWeight='500'
//                             lineHeight='140%'
//                             mb={2}
//                             overflow='hidden'
//                             textOverflow='ellipsis'
//                             whiteSpace='nowrap'
//                         >
//                             {data.title}
//                         </Heading>
//                     </Box>
//                     <Text
//                         textStyle='mainText'
//                         style={{
//                             display: '-webkit-box',
//                             WebkitBoxOrient: 'vertical',
//                             overflow: 'hidden',
//                             WebkitLineClamp: 3,
//                             maxWidth: '100%',
//                             whiteSpace: 'normal',
//                         }}
//                     >
//                         {data.description}
//                     </Text>
//                 </CardBody>

//                 <CardFooter
//                     maxW={{ xl: '274px', lg: 'none' }}
//                     w='100%'
//                     p={0}
//                     gap={2}
//                     display='flex'
//                     justifyContent='end'
//                 >
//                     <Button
//                         sx={{
//                             display: 'flex',
//                             gap: '8px',
//                             border: '1px solid rgba(0, 0, 0, 0.48)',
//                             borderRadius: '6px',
//                             padding: '0px 12px',
//                             width: '122px',
//                             height: '32px',
//                             color: 'rgba(0, 0, 0, 0.8)',
//                             background: 'transparent',
//                         }}
//                     >
//                         <Box display='flex' alignItems='center' justifyContent='center'>
//                             <BookmarkIcon boxSize='14px' />
//                         </Box>
//                         <Text textStyle='buttonTitle'>Сохранить</Text>
//                     </Button>
//                     <Button

//                         onClick={() => navigate(`/${data.category[0]}/${data.subcategory[0]}/${data.id}`)}
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             gap: '8px',
//                             border: '1px solid rgba(0, 0, 0, 0.08)',
//                             borderRadius: '6px',
//                             padding: '0px 12px',
//                             width: '87px',
//                             height: '32px',
//                             backgroundColor: 'black',
//                             color: 'white',
//                             fontFamily: '"Inter", sans-serif',
//                             fontSize: '14px',
//                             fontWeight: '600',
//                             lineHeight: '143%',
//                         }}
//                     >
//                         <Text textStyle='buttonTitle'>Готовить</Text>
//                     </Button>
//                 </CardFooter>
//             </Box>
//         </Card>
//     );
// };

// import {
//     Box,
//     Button,
//     Card,
//     CardBody,
//     CardFooter,
//     Heading,
//     HStack,
//     Image,
//     Text,
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router';

// import { RecipeStats } from '~/components/recipe-stats/recipe-stats';
// import { getCategoryList } from '~/utils/normilize';
// import { renderCategoryTags } from '~/utils/render-category-tags';

// import { BookmarkIcon } from '../../../../../../components/icons/bookmark-icon';
// import { Recipe } from '../../../../../../types/recipe-types';

// interface RecipeCardProps {
//     data: Recipe;
// }

// export const BestCard: React.FC<RecipeCardProps> = ({ data }) => {
//     const categoryList = getCategoryList(data.category);
//     const navigate = useNavigate();

//     return (
//         <Card
//             borderRadius='lg'
//             overflow='hidden'
//             maxW='668px'
//             h='244px'
//             direction='row'
//             variant='outline'
//         >
//             <Image src={data.image} alt={data.title} objectFit='cover' w='346px' h='100%' />

//             <Box
//                 minW='322px'
//                 w='100%'
//                 display='flex'
//                 flexDirection='column'
//                 justifyContent='space-between'
//                 px='24px'
//                 py='20px'
//                 flex='1'
//                 gap='24px'
//             >
//                 <Box display='flex' justifyContent='space-between' w='100%'>
//                     <HStack spacing={2}>{renderCategoryTags(categoryList, 1, 'lime.50')}</HStack>

//                     <RecipeStats bookmarks={data.bookmarks} likes={data.likes} />
//                 </Box>

//                 <CardBody p={0}>
//                     <Box w='100%' overflow='hidden'>
//                         <Heading
//                             as='h2'
//                             fontFamily='"Inter", sans-serif'
//                             fontSize='20px'
//                             fontWeight='500'
//                             lineHeight='140%'
//                             mb={2}
//                             overflow='hidden'
//                             textOverflow='ellipsis'
//                             whiteSpace='nowrap'
//                         >
//                             {data.title}
//                         </Heading>
//                     </Box>
//                     <Text
//                         textStyle='mainText'
//                         style={{
//                             display: '-webkit-box',
//                             WebkitBoxOrient: 'vertical',
//                             overflow: 'hidden',
//                             WebkitLineClamp: 3,
//                             maxWidth: '100%',
//                             whiteSpace: 'normal',
//                         }}
//                     >
//                         {data.description}
//                     </Text>
//                 </CardBody>

//                 <CardFooter
//                     maxW={{ xl: '274px', lg: 'none' }}
//                     w='100%'
//                     p={0}
//                     gap={2}
//                     display='flex'
//                     justifyContent='end'
//                 >
//                     <Button
//                         sx={{
//                             display: 'flex',
//                             gap: '8px',
//                             border: '1px solid rgba(0, 0, 0, 0.48)',
//                             borderRadius: '6px',
//                             padding: '0px 12px',
//                             width: '122px',
//                             height: '32px',
//                             color: 'rgba(0, 0, 0, 0.8)',
//                             background: 'transparent',
//                         }}
//                     >
//                         <Box display='flex' alignItems='center' justifyContent='center'>
//                             <BookmarkIcon boxSize='14px' />
//                         </Box>
//                         <Text textStyle='buttonTitle'>Сохранить</Text>
//                     </Button>
//                     <Button

//                         onClick={() => navigate(`/${data.category[0]}/${data.subcategory[0]}/${data.id}`)}
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             gap: '8px',
//                             border: '1px solid rgba(0, 0, 0, 0.08)',
//                             borderRadius: '6px',
//                             padding: '0px 12px',
//                             width: '87px',
//                             height: '32px',
//                             backgroundColor: 'black',
//                             color: 'white',
//                             fontFamily: '"Inter", sans-serif',
//                             fontSize: '14px',
//                             fontWeight: '600',
//                             lineHeight: '143%',
//                         }}
//                     >
//                         <Text textStyle='buttonTitle'>Готовить</Text>
//                     </Button>
//                 </CardFooter>
//             </Box>
//         </Card>
//     );
// };

import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    HStack,
    Image,
    Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { BookmarkIcon } from '~/components/icons/bookmark-icon';
import { RecipeStats } from '~/components/recipe-stats/recipe-stats';
import { Recipe } from '~/types/recipe-types';
import { highlightMatch } from '~/utils/highlight-match';
import { getCategoryList } from '~/utils/normilize';
import { renderCategoryTags } from '~/utils/render-category-tags';

interface RecipeCardProps {
    data: Recipe;
    searchText?: string;
}

export const BestCard: React.FC<RecipeCardProps> = ({ data, searchText }) => {
    const categoryList = getCategoryList(data.category);
    const navigate = useNavigate();

    return (
        <Card
            borderRadius='lg'
            overflow='hidden'
            maxW='668px'
            h='244px'
            direction='row'
            variant='outline'
            mx='auto'
        >
            <Image src={data.image} alt={data.title} objectFit='cover' w='346px' h='100%' />

            <Box
                minW='322px'
                w='100%'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                px='24px'
                py='20px'
                flex='1'
                gap='24px'
            >
                <Box display='flex' justifyContent='space-between' w='100%'>
                    <HStack spacing={2}>{renderCategoryTags(categoryList, 1, 'lime.50')}</HStack>

                    <RecipeStats bookmarks={data.bookmarks} likes={data.likes} />
                </Box>

                <CardBody p={0}>
                    <Box w='100%' overflow='hidden'>
                        <Heading
                            as='h2'
                            fontFamily='"Inter", sans-serif'
                            fontSize='20px'
                            fontWeight='500'
                            lineHeight='140%'
                            mb={2}
                            overflow='hidden'
                            textOverflow='ellipsis'
                            whiteSpace='nowrap'
                        >
                            {highlightMatch(data.title, searchText)}
                        </Heading>
                    </Box>
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
                    maxW={{ xl: '274px', lg: 'none' }}
                    w='100%'
                    p={0}
                    gap={2}
                    display='flex'
                    justifyContent='end'
                >
                    <Button
                        sx={{
                            display: 'flex',
                            gap: '8px',
                            border: '1px solid rgba(0, 0, 0, 0.48)',
                            borderRadius: '6px',
                            padding: '0px 12px',
                            width: '122px',
                            height: '32px',
                            color: 'rgba(0, 0, 0, 0.8)',
                            background: 'transparent',
                        }}
                    >
                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <BookmarkIcon boxSize='14px' />
                        </Box>
                        <Text textStyle='buttonTitle'>Сохранить</Text>
                    </Button>
                    <Button
                        onClick={() =>
                            navigate(`/${data.category[0]}/${data.subcategory[0]}/${data.id}`)
                        }
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            borderRadius: '6px',
                            padding: '0px 12px',
                            width: '87px',
                            height: '32px',
                            backgroundColor: 'black',
                            color: 'white',
                            fontFamily: '"Inter", sans-serif',
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '143%',
                        }}
                    >
                        <Text textStyle='buttonTitle'>Готовить</Text>
                    </Button>
                </CardFooter>
            </Box>
        </Card>
    );
};
