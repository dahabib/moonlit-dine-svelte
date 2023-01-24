import { derived } from "svelte/store";
import { selectedCategory } from "./store";

export const selectedCategoryArray = derived(selectedCategory, async function($selectedCategory){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${$selectedCategory}`)
    const data = await res.json();
    return data.meals;
});