// import { normalize } from 'path';
// import { useMemo } from 'react';

// import { getCategoryList, getSubcategoryList } from '~/utils/normilize';

// import { Recipe } from '../types/recipe-types';

// export const useFilteredRecipes = (recipes: Recipe[], selectedSubcategory: string | null) =>
//     useMemo(() => {
//         if (!selectedSubcategory) return recipes;

//         const normalizedSelected = normalize(selectedSubcategory);

//         return recipes.filter((recipe) => {
//             const subcategories = getSubcategoryList(recipe.subcategory);
//             const categories = getCategoryList(recipe.category);

//             const hasMatchingSubcategory = subcategories.some(
//                 (sub) => normalize(formatSubcategory(sub)) === normalizedSelected,
//             );

//             const hasMatchingCategory = categories.some(
//                 (cat) => normalize(formatCategory(cat)) === normalizedSelected,
//             );

//             return hasMatchingSubcategory || hasMatchingCategory;
//         });
//     }, [recipes, selectedSubcategory]);
