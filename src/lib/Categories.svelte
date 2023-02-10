<script>
    import { categories, selectedCategory } from "./store/store";
    
    
    const handleSelection = event => {
        $selectedCategory = event;
    }

</script>

<svelte:head>
    <title>Moons Cuisine</title>
</svelte:head>

<section class="fluid bg-yellow-400">
    <div class="container mx-auto py-6">
        <div class="grid grid-rows-2 pt-6 justify-center items-center text-center">
            <div class="flex-row sm:md:text-xl lg:text-2xl font-normal font-sans text-orange-500 mb-3">
                Choose a Category
            </div>
            <div class="flex-row text-2xl sm:md:text-3xl lg:text-5xl text-red-800 font-extrabold mb-6 -mt-1">
                Recipe Categories
            </div>
        </div>

        <div class="carousel carousel-center bg-yellow-200 rounded-box space-x-6 border border-yellow-300 p-4">
            {#each $categories as cat}
                <div class="carousel-item w-32 h-32 hover:opacity-90 hover:rotate-12 transition delay-100 duration-300 ease-in-out cursor-pointer" on:click={ ()=> handleSelection(cat.strCategory)} data-sveltekit-preload-data="hover">
                    <div class="flex items-center justify-center w-full h-full rounded-full bg-white bg-cover bg-center" style="background-image: url({cat.strCategoryThumb})">
                        <p class="text-center font-medium text-lg p-2 rounded overflow-hidden bg-lime-200 text-yellow-700">{cat.strCategory}</p>
                    </div>
                </div> 
            {/each}
        </div>

        
    </div>    
</section>
