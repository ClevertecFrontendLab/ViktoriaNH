export interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    likes?: number;
    bookmarks?: number;
}

export const recipes: Recipe[] = [
    {
        id: 1,
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: '/images/new-recipes/saltwart.webp',
        category: 'Первые блюда',
        bookmarks: 1,
    },
    {
        id: 2,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        image: '/images/new-recipes/cutlets.webp',
        category: 'Веганская кухня',
        likes: 1,
        bookmarks: 2,
    },
    {
        id: 3,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        image: '/images/new-recipes/pankakes.webp',
        category: 'Десерты, выпечка',
        likes: 1,
    },
    {
        id: 4,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не салат, а сплошное удовольствие :) Вкусный, необычный, а главное быстрый.',
        image: '/images/new-recipes/salad.webp',
        category: 'Салаты',
        likes: 1,
    },
    {
        id: 5,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не салат, а сплошное удовольствие :) Вкусный, необычный, а главное быстрый.',
        image: '/images/new-recipes/salad.webp',
        category: 'Салаты',
        likes: 1,
    },
];
