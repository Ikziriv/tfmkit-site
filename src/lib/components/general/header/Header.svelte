<script lang="ts">
    import { 
        setMediaScreen, 
        setResolution, 
        campaignType 
    } from '$stores';

	let selected: any;
</script>
<header class="absolute inset-x-0 top-2 md:top-4 flex flex-col md:flex-row justify-center md:justify-between items-center bg-transparent w-full h-auto md:h-20 z-10">
    {#if $setResolution === 'r1' || $setResolution === ''}
    <div class="hidden md:flex flex-row justify-center items-center w-full h-20 md:max-w-xl space-x-4 rounded-lg bg-transparent">
        <button on:click={() => ($setMediaScreen = 'desktop')} class="flex justify-center items-center w-16 h-16 bg-white rounded-md shadow p-4">
            <i class="i-tabler-device-desktop w-6 h-6"></i>
        </button>
        <button on:click={() => ($setMediaScreen = 'tablet')} class="flex justify-center items-center w-16 h-16 bg-white rounded-md shadow p-4">
            <i class="i-tabler-device-tablet w-6 h-6"></i>
        </button>
        <button on:click={() => ($setMediaScreen = 'mobile')} class="flex justify-center items-center w-16 h-16 bg-white rounded-md shadow p-4">
            <i class="i-tabler-device-mobile w-6 h-6"></i>
        </button>
    </div>
    {:else}
    <div class="hidden md:flex flex-row justify-center items-center w-full h-20 max-w-xl space-x-4 rounded-lg bg-transparent">
        <button on:click={() => ($setMediaScreen = 'desktop')} class="flex justify-center items-center w-16 h-16 bg-white rounded-md shadow p-4">
            <i class="i-tabler-device-desktop w-6 h-6"></i>
        </button>
        <button on:click={() => ($setMediaScreen = 'tablet')} class="flex justify-center items-center w-16 h-16 bg-white rounded-md shadow p-4">
            <i class="i-tabler-device-tablet w-6 h-6"></i>
        </button>
    </div>
    {/if}
    
    <div class="flex flex-row justify-center items-center w-full h-20 md:max-w-xl space-x-4 rounded-lg bg-transparent">
        <div class="flex items-center text-gray-500 w-auto md:w-40 {!$setMediaScreen ? 'bg-zinc-500' : 'bg-white'} md:rounded-md">
            <label for="hs-inline-leading-select-zoom" class="sr-only">Assets</label>
            <div class="flex flex-col-reverse md:flex-row rounded-md shadow-sm">
                <select disabled={!$setMediaScreen} bind:value={selected} id="hs-inline-leading-select-zoom" name="hs-inline-leading-select-zoom" class="py-2 text-sm block w-40 rounded-b-md md:rounded-l-md px-2">
                    <option selected disabled>Choose</option>
                    <option value="image">Banner</option>
                    <option value="email">Email</option>
                    <option value="blog">Blog</option>
                    <option value="instagram">Instagram</option>
                </select>
                <span class="px-4 py-2 inline-flex items-center min-w-fit rounded-t-md md:rounded-r-md bg-zinc-900 text-sm text-white font-medium">Campaign</span>
            </div>
        </div>
    </div>
</header>