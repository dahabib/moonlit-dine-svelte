<script>
    import { page } from '$app/stores';
    import { categories } from '../../../lib/store/store';
    const category = $page.url.pathname.split("/",3)[2];
    const currentCategory = $categories.filter(cat => cat.strCategory === category);
    const { strCategory, strCategoryThumb, strCategoryDescription} = currentCategory[0];
    export let data;
    const {meals} = data;
</script>

<svelte:head>
    <title>Moons Cuisine - {category} category</title>
</svelte:head>

<!-- header section -->
<section class="text-gray-400 bg-gray-900 body-font bg-cover bg-center bg-no-repeat" style="background-image: url({strCategoryThumb})">
    <div class="h-2/3 mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-5xl mb-4 font-bold text-lime-700 bg-slate-100 opacity-75 p-4">{strCategory}</h1>
        <p class="text-center text-2xl text-gray-600 bg-slate-100 opacity-60 p-4">{strCategoryDescription}</p>
      </div>
    </div>
</section>

<!-- breadcrumbs -->
<section class="bg-yellow-700 px-10 text-white">
    <div class="text-base breadcrumbs">
    <ul>
        <li><a href="/" data-sveltekit-preload-data="hover">Home</a></li>
        <li>{strCategory}</li>
    </ul>
    </div>
</section>

<section class="fluid bg-orange-200">
    <div class="container mx-auto">  
        <div class="py-4 text-center sm:text-4xl text-5xl text-lime-700"><span class="text-bold text-pink-600 underline">{meals.length}</span> meals in <span class="text-bold text-pink-600 underline">{category}</span> category.</div>
        <div class="flex flex-wrap justify-center gap-4 py-6">
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