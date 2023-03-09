<script lang="ts">
  import { fade } from 'svelte/transition';

  import { 
      setBackground
  } from '$stores';

  let imgUrl: string = '';
  $: image = imgUrl ? imgUrl : $setBackground;

  function setupClick() {
    setBackground.set(imgUrl);
    imgUrl = '';
  }
</script>
<div class="flex justify-center items-center w-full h-auto bg-white">
    <div class="grid grid-cols-12 gap-2 w-full h-auto px-4 md:px-0 w-full h-auto md:h-screen max-w-6xl">
      <div class="col-span-full md:col-span-6 flex justify-center pb-16 md:pb-0 items-end md:items-center w-full h-screen max-w-6xl">
        <div class="flex flex-col w-auto h-auto max-w-lg">
          <div class="flex flex-col -space-y-3 md:-space-y-4 w-auto h-auto">
            <h1 class="font-black text-5xl md:text-7xl leading-none tracking-loose uppercase">
              Reusable
            </h1>
            <h1 class="font-black text-5xl md:text-7xl leading-none tracking-loose uppercase">
              Tools for
            </h1>
            <h1 class="font-black text-5xl md:text-7xl leading-none tracking-loose uppercase">
              Campaign
            </h1>
          </div>
          <p class="mt-4 leading-none tracking-loose font-medium text-lg md:text-xl pr-4 md:pr-8">
            Create the prefect campaign or find and get the most unique collections campaign template.
          </p>
          <div class="w-full mt-8 bg-transparent border shadow-xl rounded-md md:rounded-full lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
            <form class="flex flex-col md:flex-row">
              <input on:input={() => (setBackground.set(imgUrl))} bind:value={imgUrl} name="image" type="text" placeholder="Enter URL Image" class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

              <button on:click={setupClick} class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-zinc-900 rounded-md md:rounded-full hover:bg-zinc-800">
                Start Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-span-full md:col-span-6 flex justify-end text-right items-center w-full h-screen max-w-6xl overflow-hidden">
        <div class="flex justify-center items-center w-full h-screen {$setBackground ? 'bg-zinc-100' : 'bg-zinc-50'} relative">
          <div class="absolute left-20 md:left-40 flex flex-col w-[300px] h-[400px] bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-0.5 shadow-xl rounded-xl overflow-hidden z-0">
            {#if image}
            <div transition:fade class="flex justify-center w-full h-full bg-white rounded-xl">
              <img class="w-full h-full rounded-xl object-cover object-left md:object-center" src={image} alt={'SampleImage'}>
            </div>
            {:else}
            <div transition:fade class="flex justify-center w-full h-full bg-white rounded-xl">
            </div>
            {/if}
          </div>
          <div class="absolute right-32 md:right-64 flex flex-col justify-center items-center w-[248px] h-[248px] bg-white shadow-xl rounded-xl overflow-hidden z-10">
            <div class="flex flex-col justify-start items-start p-4">
              <div class="p-2">
                <i class="i-tabler-typography w-10 h-10 mx-2"></i>
              </div>
              <div class="flex flex-col w-auto h-auto mt-4 p-4">
                <p class="w-24 h-2 bg-gray-300 rounded-lg dark:bg-gray-600"></p>
                <p class="w-32 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p class="w-32 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p class="w-40 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>
            </div>
          </div>
          <div class="absolute mt-96 md:mt-64 right-8 md:right-16 flex flex-col justify-center items-center w-[100px] h-[100px] bg-white shadow-xl rounded-xl overflow-hidden z-10">
            <i class="i-tabler-heading w-10 h-10 mx-2"></i>
          </div>
          <div class="absolute -mt-96 md:-mt-64 right-8 md:right-16 flex flex-col justify-center items-center w-[100px] h-[100px] bg-white shadow-xl rounded-full overflow-hidden z-10">
            <i class="i-tabler-photo w-10 h-10 mx-2"></i>
          </div>
        </div>
      </div>
    </div>
  </div>