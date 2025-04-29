import { Recipe } from '~/types/recipe-types';

// export const filterRecipesByAllergens = (
//     recipes: Recipe[],
//     selectedAllergens: string[],
// ): Recipe[] => {
//     if (selectedAllergens.length === 0) {
//         return recipes; // Если нет выбранных аллергенов, просто возвращаем все рецепты
//     }

//     return recipes.filter(
//         (recipe) =>
//             // Проверка ингредиентов каждого рецепта
//             !recipe.ingredients?.some((ingredient) =>
//                 selectedAllergens.some(
//                     (allergen) => ingredient.title.toLowerCase().includes(allergen.toLowerCase()), // Сравнение без учета регистра
//                 ),
//             ),
//     );
// };
export const filterRecipesByAllergens = (
    recipes: Recipe[],
    selectedAllergens: string[],
): Recipe[] => {
    if (selectedAllergens.length === 0) {
        return recipes;
    }

    return recipes.filter((recipe) => {
        // Проверяем, есть ли ингредиенты, которые содержат выбранные аллергены
        const isAllergenFree = !recipe.ingredients?.some((ingredient) =>
            selectedAllergens.some((allergen) =>
                ingredient.title.toLowerCase().includes(allergen.toLowerCase()),
            ),
        );
        return isAllergenFree;
    });
};
