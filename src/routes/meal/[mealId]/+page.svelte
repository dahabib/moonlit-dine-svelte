<script>
    import Youtube from "svelte-youtube-embed";
    export let data;
    const {meal} = data;

    const instructions = meal.strInstructions.split(". ");
    const videoId = meal.strYoutube.split("=", 2)[1]; 

    console.log(videoId);

    const ing = Object.values(Object.fromEntries(Object.entries(meal).filter(([key]) => key.includes("strIngredient")).filter(([_, value]) => value != null && value != "" )));
    const msr = Object.values(Object.fromEntries(Object.entries(meal).filter(([key]) => key.includes("strMeasure")).filter(([_, value]) => value != null && value != "" )));
    const ingredientsList = ing.map(function(x,i){
        return {'name': x, 'value': msr[i]}
    });

</script>

<svelte:head>
    <title>{meal.strMeal} - Moons Cuisine</title>
</svelte:head>

<!-- header section -->
<section class="text-gray-400 bg-gray-900 body-font bg-cover bg-center bg-no-repeat" style="background-image: url({meal.strMealThumb})">
    <div class="h-2/3 mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-5xl mb-4 font-bold text-lime-700 bg-slate-100 opacity-75 p-4">{meal.strMeal}</h1>
        
        <div class="flex justify-between">
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <div class="flex text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-2 stroke-orange-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg> 
                    <!-- <div class="divider divider-horizontal"></div> -->
                    <a href={`/category/${meal.strCategory}`} data-sveltekit-preload-data="hover"><p>{meal.strCategory}</p></a>
                </div>
            </button>
            <button class="ml-4 text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                <div class="flex text-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-2 stroke-lime-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg> 
                    <!-- <div class="divider divider-horizontal"></div> -->
                    <a href={`/area/${meal.strArea}`} data-sveltekit-preload-data="hover"><p class="text-lg">{meal.strArea}</p></a>
                </div>
            </button>
        </div>
      </div>
    </div>
</section>

<!-- breadcrumbs -->
<section class="bg-yellow-700 px-10 text-white">
    <div class="text-sm breadcrumbs">
    <ul>
        <li><a href="/" data-sveltekit-preload-data="hover">Home</a></li> 
        <li><a href={`/category/${meal.strCategory}`} data-sveltekit-preload-data="hover">{meal.strCategory}</a></li> 
        <li>{meal.strMeal}</li>
    </ul>
    </div>
</section>

<!-- instructions and ingredients table -->
<section class="text-gray-600 body-font bg-lime-100">
    <div class="container px-5 py-16 mx-auto flex flex-wrap">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 md:w-1/2 md:pr-10">
            <div class="p-4 text-gray-200 font-bold rounded-md text-center text-2xl mb-2 bg-gradient-to-r from-cyan-500 to-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-2 inline-flex pr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg> Cooking Instructions
            </div>
            {#each instructions as instruction}
                <div class="flex relative h-fit py-1 items-center hover:bg-lime-200 delay-200">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    <div class="flex-grow pl-4">
                        <p class="leading-relaxed">{instruction}.</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="w-full lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 overflow-x-auto mx-auto">    
            <div class="p-4 text-gray-200 font-bold rounded-md text-center text-2xl mb-2 bg-gradient-to-r from-cyan-500 to-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-2 inline-flex pr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg> Ingredients Table
            </div>
            <div class="">
                <table class="table w-full">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th></th>
                            <th>Ingredient</th>
                            <th>Measurement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each ingredientsList as item, index}
                            <tr class="hover">
                                <th>{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.value}</td>
                            </tr>
                        {/each}
                        
                    </tbody>
                </table>
                </div>
        </div>

      </div>
    </div>
</section>

<!-- video section -->
{#if videoId }
    <section class="text-gray-600 body-font bg-purple-200">
        <div class="px-5 py-12 mx-auto flex flex-col justify-center items-center">
            <div class="p-4 text-gray-200 font-bold rounded-md text-center text-2xl mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg> 
                <div class="divider divider-horizontal"></div>
                <p class="text-base font-bold md:lg:text-2xl xl:text-4xl w-full">Confused? see how to cook.</p>
            </div>
            <div class="w-full p-1 rounded-lg">
                <Youtube id={videoId} altThumb={true} />
            </div>
        </div>
    </section>
{/if}
