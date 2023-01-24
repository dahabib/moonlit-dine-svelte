<script>
    import { page } from '$app/stores';
    const category = $page.url.pathname.split("/",3)[2];
    export let data;
    const {meals} = data;
</script>

<svelte:head>
    <title>{category} category - Moons Cuisine</title>
</svelte:head>

<section class="fluid bg-orange-200">
    <div class="container mx-auto mt-16">  
        <div class="my-4 py-4 text-center sm:text-4xl text-5xl text-lime-700"><span class="text-bold text-pink-600 underline">{meals.length}</span> meals in <span class="text-bold text-pink-600 underline">{category}</span> category.</div>
        <div class="flex flex-wrap justify-center gap-4">
            {#each meals as meal}
                <a href={`/meal/${meal.idMeal}`} data-sveltekit-preload-data="hover">
                    <div class="card card-compact w-56 h-full bg-base-100 shadow-xl">
                        <figure><img class="hover:scale-110 duration-700 ease-in-out" src={meal.strMealThumb} alt={meal.strMeal} /></figure>
                        <div class="card-body text-center">
                            <h2 class="card-title h-1/2">{meal.strMeal}</h2>
                            <div class="card-actions justify-center h-1/2">
                                <button class="btn btn-primary">See details</button>
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>