// import { recipes } from '~/data/recipes'; // Импорт массива рецептов

// export const filterRecipes = (
//     searchText: string,
//     selectedAllergens: string[],
//     isAllergenFilterActive: boolean,
// ) => {
//     let filteredRecipes = recipes;

//     // Фильтрация по поисковому тексту
//     if (searchText.length >= 3) {
//         const lowerSearch = searchText.toLowerCase();
//         filteredRecipes = filteredRecipes.filter((recipe) =>
//             recipe.title.toLowerCase().includes(lowerSearch),
//         );
//     }

//     // Фильтрация по аллергенам
//     if (isAllergenFilterActive && selectedAllergens.length > 0) {
//         filteredRecipes = filteredRecipes.filter(
//             (recipe) =>
//                 // Проверяем, есть ли пересечение ингредиентов и аллергенов
//                 !recipe.ingredients.some((ingredient) =>
//                     selectedAllergens.some((allergen) =>
//                         ingredient.title.toLowerCase().includes(allergen.toLowerCase())
//                     )
//                 ),
//         );
//     }

//     return filteredRecipes;
// };
