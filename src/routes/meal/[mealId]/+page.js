export const load = ({params, fetch}) => {
    const fetchMeal = async(id) => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const meal = await res.json()
        return meal.meals[0];
    }
    return {
        meal: fetchMeal(params.mealId)
    }
}