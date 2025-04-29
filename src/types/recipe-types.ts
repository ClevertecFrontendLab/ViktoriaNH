export interface Ingredient {
    title: string;
    count: string;
    measureUnit: string;
}

export interface Step {
    stepNumber: number;
    description: string;
    image: string;
}

export interface NutritionValue {
    calories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
}

export interface Recipe {
    id: string | number;
    title: string;
    description: string;
    image: string;
    category: string | string[];
    subcategory: string | string[];
    time?: string;
    portions?: number;
    nutritionValue?: NutritionValue;
    ingredients?: Ingredient[];
    steps?: Step[];
    side?: string;
    likes?: number;
    bookmarks?: number;
    meat?: string;
}
