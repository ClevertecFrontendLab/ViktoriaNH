import { HStack, Icon, Text } from '@chakra-ui/react';

import { BookmarkIcon } from '~/components/icons/bookmark-icon';
import { LikeIcon } from '~/components/icons/like-icon';

interface RecipeStatsProps {
    bookmarks?: number;
    likes?: number;
}

export const RecipeStats: React.FC<RecipeStatsProps> = ({ bookmarks, likes }) => (
    <HStack spacing='8px' alignItems='center'>
        {bookmarks !== undefined && (
            <HStack spacing={1}>
                <Icon as={BookmarkIcon} w={3} h={3} />
                <Text textStyle='numbers'>{bookmarks}</Text>
            </HStack>
        )}
        {likes !== undefined && (
            <HStack spacing={1}>
                <Icon as={LikeIcon} w={3} h={3} />
                <Text textStyle='numbers'>{likes}</Text>
            </HStack>
        )}
    </HStack>
);
