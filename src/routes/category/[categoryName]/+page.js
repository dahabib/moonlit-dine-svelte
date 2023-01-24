export const load = ({params, fetch}) => {
    const fetchMeals = async(id) => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
        const meals = await res.json()
        return meals.meals;
    }
    return {
        meals: fetchMeals(params.categoryName)
    }
}