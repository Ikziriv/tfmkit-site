<script lang="ts">
  import { 
      setBackground,
      setHeadText,
      setTypography,
      setColor
  } from '$stores';

  import { getTextColor800 } from '$utils/colors';

  let imgUrl: string = '';
  let headText: string = '';
  let typography: string = '';
	let selected;
  
  $: image = imgUrl ? imgUrl : $setBackground;
  $: text = headText ? headText : $setHeadText;
  $: typo = typography ? typography : $setTypography;
  
	let colors = [
		{ id: 1, text: `White`, value: `white` },
		{ id: 2, text: `Black`, value: `black` },
		{ id: 3, text: `Red`, value: `red` },
		{ id: 4, text: `Blue`, value: `blue` },
		{ id: 5, text: `Purple`, value: `purple` },
		{ id: 6, text: `Orange`, value: `orange` },
		{ id: 7, text: `Amber`, value: `amber` }
	];

  function setupClick() {
    setBackground.set(imgUrl);
    setHeadText.set(headText);
    setTypography.set(typography);
    setColor.set(selected);

    imgUrl = '';
    headText = '';
    typography = '';
  }

  function resetClick() {
    setBackground.set('');
    setHeadText.set('');
    setTypography.set('');
  }
</script>

<div class="flex flex-col md:flex-row justify-center items-start w-full h-auto md:h-auto max-w-6xl bg-black rounded-b-2xl px-8 md:px-8 py-8 md:py-20">
    <h1 class="font-black text-white text-5xl md:text-4xl pb-8 md:pb-0"> How to Use </h1>
    <div class="grid grid-cols-12 gap-4 md:gap-0 w-full h-auto">
      <div class="col-span-full md:col-span-8 w-full h-full rounded-xl">
        {#if image}
          {#if image}
          <div class="flex flex-col justify-start items-center w-full h-screen p-4 rounded-xl shadow-xl bg-white overflow-hidden relative">
            <div class="flex flex-col w-full h-full p-4 md:p-8 text-left z-10">
              <div class="flex flex-row space-x-2">
                <i class="i-tabler-photo w-10 h-10"></i>
                <div class="flex flex-col -space-y-2 w-auto h-auto">
                  <span class="font-black">TFMKIT</span>
                  <span class="font-thin">Tools</span>
                </div>
              </div>
              <h1 class="font-black {$setColor ? getTextColor800($setColor) : ''} text-8xl leading-none tracking-tighter">{text}</h1>
              <p class="font-thin leading-none {$setColor ? getTextColor800($setColor) : ''}">{typo}</p>
            </div>
            <div class="absolute inset-0 w-full h-screen bg-center z-0">
              <img class="w-full h-full object-cover object-left md:object-center" src={image} alt={text}>
            </div>
          </div>
          {:else}
          <div class="flex flex-col justify-start items-center w-full h-screen p-4 rounded-xl shadow-xl bg-white overflow-hidden relative">
            <div class="flex flex-col w-full h-full p-4 md:p-8 text-left z-10">
              <div class="flex flex-row space-x-2">
                <i class="i-tabler-photo w-10 h-10"></i>
                <div class="flex flex-col -space-y-2 w-auto h-auto">
                  <span class="font-black">TFMKIT</span>
                  <span class="font-thin">Tools</span>
                </div>
              </div>
              <h1 class="font-black {selected ? getTextColor800(selected) : ''} text-8xl leading-none tracking-tighter">{headText}</h1>
              <p class="font-thin leading-none {selected ? getTextColor800(selected) : ''}">{typography}</p>
            </div>
            <div class="absolute inset-0 w-full h-screen bg-center z-0">
              <img class="w-full h-full object-cover object-left md:object-center" src={imgUrl} alt={headText}>
            </div>
          </div>
          {/if}
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
                <input on:input={() => (setBackground.set(imgUrl))} bind:value={imgUrl} name="image" type="text" placeholder="Image URL" class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div class="relative flex items-center mt-0">
                <span class="absolute pl-1 border-r">
                  <i class="i-tabler-heading w-4 h-4 mx-2"></i>
                </span>
                <input on:input={() => (setHeadText.set(headText))} bind:value={headText} name="head" type="text" placeholder="Title Content" class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div class="relative flex items-center mt-0">
                <span class="absolute pl-1 border-r">
                  <i class="i-tabler-typography w-4 h-4 mx-2"></i>
                </span>
                <textarea on:input={() => (setTypography.set(typography))} bind:value={typography}  name="typography" id="" cols="30" rows="10" class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"></textarea>
            </div>
            <select bind:value={selected} class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg px-3 pr-9 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
              {#each colors as color}
                <option value={color.value}>{color.text}</option>
              {/each}
            </select>
            <button on:click={() => (imgUrl && headText  && typography ? setupClick() : resetClick())} class="flex flex-row justify-between items-center rounded-md space-x-4 w-full h-auto px-4 py-2 bg-black shadow-xl hover:bg-red-400">
                <div class="flex flex-col leading-none">
                    {#if $setBackground && $setHeadText  && $setTypography}
                      <span class="block text-xs font-bold text-white">Reset</span>
                    {:else}
                      <span class="block text-xs font-bold text-white">Set Style</span>
                    {/if}
                </div>
                <i class="i-tabler-brush {!$setBackground ? 'text-green-500' : 'text-red-500'} w-4 h-4"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>