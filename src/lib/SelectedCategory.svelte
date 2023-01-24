<script>
    import {selectedCategoryArray} from "./store/selectedCategory";
    import {selectedCategory} from "./store/store";
    import Spinner from "./Spinner.svelte";
    
</script>

<section class="fluid bg-lime-200">
    <div class="container mx-auto px-2">  
        {#if $selectedCategory}
            <div class="py-4 bg-slate-400 text-center text-xl md:lg:text-4xl text-lime-700"><span class="text-bold text-pink-600 underline">{$selectedCategory}</span> category have these meals.</div>
        {:else}
            <div class="py-6 text-center text-xl md:lg:xl:text-4xl text-lime-700">Please select a category to see meals.</div>
        {/if}
        <div class="mx-auto container justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 py-6 gap-2 ">
            {#await $selectedCategoryArray}
                {#if $selectedCategoryArray.length > 0}
                    <Spinner />
                {/if}
            {:then meals} 
                {#each meals as meal}
                    <a href={`/meal/${meal.idMeal}`} data-sveltekit-preload-data="hover">
                        <div class="card card-compact w-full h-full bg-base-100 shadow-xl">
                            <figure><img class="hover:scale-110 duration-700 ease-in-out" src={meal.strMealThumb} alt={meal.strMeal} /></figure>
                            <div class="card-body text-center">
                                <h2 class="card-title h-1/2">{meal.strMeal}</h2>
                                <div class="card-actions justify-center h-1/2">
                                    <button class="btn btn-primary w-full">See details</button>
                                </div>
                            </div>
                        </div>
                    </a>
                {/each}
            {/await}        
        </div>
    </div>
</section>
