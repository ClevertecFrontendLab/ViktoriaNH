import alex from '/icons/avatars/alex-cook.webp';
import cate from '/icons/avatars/cate-const.webp';
import helen from '/icons/avatars/helen-vys.webp';
import mainCate from '/icons/avatars/main-cate-const.webp';

export const users = {
    cateMain: {
        name: 'Екатерина Константинопольская',
        username: 'bake_and_pie',
        src: mainCate,
        bg: 'lime.50',
    },
    helen: {
        name: 'Елена Высоцкая',
        username: 'elenapovar',
        src: helen,
        bg: 'white',
    },
    alex: {
        name: 'Alex Cook',
        username: 'funtasticooking',
        src: alex,
        bg: 'white',
    },
    cate: {
        name: 'Екатерина Константинопольская',
        username: 'bake_and_pie',
        src: cate,
        bg: 'white',
    },
    serge: {
        name: 'Сергей Разумов',
        username: 'serge25',
        src: '/public/icons/avatars/serge.webp',
        bg: 'transparent',
    },
} as const;

// Оптимизировать объекты cate и cateMain
