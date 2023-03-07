<script lang="ts">
  let headText: string = '';
  let imgUrl: string = '';
  let typography: string = '';
	let selected: { value: string; };
  
	let colors = [
		{ id: 1, text: `White`, value: `text-white` },
		{ id: 2, text: `Black`, value: `text-black` },
		{ id: 3, text: `Red`, value: `text-red-500` },
		{ id: 4, text: `Blue`, value: `text-blue-500` },
		{ id: 5, text: `Purple`, value: `text-purple-500` },
		{ id: 6, text: `Orange`, value: `text-orange-500` },
		{ id: 7, text: `Amber`, value: `text-amber-500` }
	];
</script>

<div class="flex flex-col md:flex-row justify-center items-start w-full h-auto md:h-auto max-w-6xl bg-black rounded-b-2xl px-8 md:px-8 py-8 md:py-20">
    <h1 class="font-black text-white text-5xl md:text-4xl pb-8 md:pb-0"> How to Use </h1>
    <div class="grid grid-cols-12 gap-4 md:gap-0 w-full h-auto">
      <div class="col-span-full md:col-span-8 w-full h-full rounded-xl">
        {#if imgUrl}
        <div class="flex flex-col justify-start items-center w-full h-screen p-4 rounded-xl shadow-xl bg-white overflow-hidden relative">
          <div class="flex flex-col w-full h-full p-4 md:p-8 text-left z-10">
            <div class="flex flex-row space-x-2">
              <i class="i-tabler-photo w-10 h-10"></i>
              <div class="flex flex-col -space-y-2 w-auto h-auto">
                <span class="font-black">TFMKIT</span>
                <span class="font-thin">Tools</span>
              </div>
            </div>
            <h1 class="font-black {selected ? selected.value : ''} text-8xl leading-none tracking-tighter">{headText}</h1>
            <p class="font-thin leading-none">{typography}</p>
          </div>
          <div class="absolute inset-0 w-full h-screen bg-center z-0">
            <img class="w-full h-full object-cover object-left md:object-center" src={imgUrl} alt={headText}>
          </div>
        </div>
        {:else}
        <div class="flex flex-col justify-start items-center w-full h-screen p-4 rounded-xl shadow-xl bg-white relative">
          <div class="flex flex-col w-full h-full p-4 md:p-8 text-left">
            <i class="i-tabler-photo w-10 h-10"></i>
            <h1 class="font-black text-2xl">Image Sample</h1>
            <p class="font-medium leading-none">Fill the form on the right side</p>
          </div>
        </div>
        {/if}
      </div>
      
      <div class="col-span-full md:col-span-4 w-full h-auto rounded-xl">
        <div class="flex flex-col justify-start items-center w-full md:w-80 h-auto p-4 rounded-xl shadow-xl bg-white relative">
          <div class="flex flex-col w-auto h-auto px-4 md:px-8 text-left">
            <i class="i-tabler-forms w-10 h-10"></i>
            <h1 class="font-black text-2xl">Form Tools</h1>
            <p class="font-medium leading-none">Magic form for your campaign</p>
          </div>
          <div class="flex flex-col space-y-2 w-full h-auto p-4 md:p-8">
            <div class="relative flex items-center mt-0">
                <span class="absolute pl-1 border-r">
                  <i class="i-tabler-photo w-4 h-4 mx-2"></i>
                </span>
                <input bind:value={imgUrl} name="image" type="text" placeholder="Image URL" class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div class="relative flex items-center mt-0">
                <span class="absolute pl-1 border-r">
                  <i class="i-tabler-heading w-4 h-4 mx-2"></i>
                </span>
                <input bind:value={headText} name="head" type="text" placeholder="Title Content" class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div class="relative flex items-center mt-0">
                <span class="absolute pl-1 border-r">
                  <i class="i-tabler-typography w-4 h-4 mx-2"></i>
                </span>
                <textarea bind:value={typography}  name="content" id="" cols="30" rows="10" class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"></textarea>
            </div>
            <select bind:value={selected} class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg px-3 pr-9 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
              <option selected disabled>Choose Color</option>
              {#each colors as color}
                <option value={color.value}>{color.text}</option>
              {/each}
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>