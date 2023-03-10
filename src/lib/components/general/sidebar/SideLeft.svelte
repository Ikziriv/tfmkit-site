<script lang="ts">
    import { 
        fullScreenOn,
        minScreenOn,
        textPositionLayout,
        imagePositionLayout,
        colorLayout,
        setResolution,
        setMediaScreen,
        setBackground,
    } from '$stores';

    function resetClick() {
        fullScreenOn.set(false);
        minScreenOn.set(false);
        textPositionLayout.set('');
        imagePositionLayout.set('');
        colorLayout.set('');
        setResolution.set('');
        setMediaScreen.set('');
        // Assets
        setBackground.set('');
    }
</script>
<aside class="absolute inset-y-0 left-2 md:left-4 hidden md:flex flex-col justify-center items-center bg-transparent w-36 h-screen z-10">
    <div class="flex flex-col justify-center items-center w-full h-20 max-h-xl space-y-2 rounded-lg bg-transparent mb-4 md:mb-8">
        <button disabled={!$setMediaScreen} on:click={() => (setResolution.set('r1'))} class="flex flex-row items-center rounded-md space-x-4 w-36 md:w-40 h-auto px-4 {!$setMediaScreen ? 'bg-zinc-600' : ''} {$setResolution === 'r1' ? 'bg-zinc-300 border' : 'bg-zinc-100'} hover:bg-white">
            <div class="flex justify-center items-center w-8 h-8 {!$setMediaScreen ? 'bg-zinc-500' : 'bg-white'} shadow">
                <i class="i-tabler-maximize w-4 h-4"></i>
            </div>
            <div class="flex flex-col leading-none">
                <span class="block text-xs font-bold">300 x 300</span>
            </div>
        </button>
        <button disabled={!$setMediaScreen} on:click={() => (setResolution.set('r2'))} class="flex flex-row items-center rounded-md space-x-4 w-36 md:w-40 h-auto px-4 {!$setMediaScreen ? 'bg-zinc-600' : ''} {$setResolution === 'r2' ? 'bg-zinc-300 border' : 'bg-zinc-100'} hover:bg-white">
            <div class="flex justify-center items-center w-8 h-8 {!$setMediaScreen ? 'bg-zinc-500' : 'bg-white'} shadow">
                <i class="i-tabler-maximize w-4 h-4"></i>
            </div>
            <div class="flex flex-col leading-none">
                <span class="block text-xs font-bold">600 x 600</span>
            </div>
        </button>
        <button disabled={!$setMediaScreen} on:click={() => (setResolution.set('r3'))} class="flex flex-row items-center rounded-md space-x-4 w-36 md:w-40 h-auto px-4 {!$setMediaScreen ? 'bg-zinc-600' : ''} {$setResolution === 'r3' ? 'bg-zinc-300 border' : 'bg-zinc-100'} hover:bg-white">
            <div class="flex justify-center items-center w-8 h-8 {!$setMediaScreen ? 'bg-zinc-500' : 'bg-white'} shadow">
                <i class="i-tabler-maximize w-4 h-4"></i>
            </div>
            <div class="flex flex-col leading-none">
                <span class="block text-xs font-bold">768 x 1024</span>
            </div>
        </button>
        <button disabled={!$setMediaScreen} on:click={() => (setResolution.set('r4'))} class="flex flex-row items-center rounded-md space-x-4 w-36 md:w-40 h-auto px-4 {!$setMediaScreen ? 'bg-zinc-600' : ''} {$setResolution === 'r4' ? 'bg-zinc-300 border' : 'bg-zinc-100'} hover:bg-white">
            <div class="flex justify-center items-center w-8 h-8 {!$setMediaScreen ? 'bg-zinc-500' : 'bg-white'} shadow">
                <i class="i-tabler-maximize w-4 h-4"></i>
            </div>
            <div class="flex flex-col leading-none">
                <span class="block text-xs font-bold">1200 x 800</span>
            </div>
        </button>
    </div>
    <div class="flex flex-col justify-center items-center w-full h-20 max-h-xl space-y-2 rounded-lg bg-transparent">
        <button on:click={() => (!$setMediaScreen ? $setMediaScreen = 'desktop' : resetClick())} class="flex flex-row justify-between items-center rounded-md space-x-4 w-36 md:w-40 h-auto px-4 py-2 bg-black shadow-xl hover:bg-red-400">
            <div class="flex flex-col leading-none">
                {#if !$setMediaScreen}
                <span class="block text-xs font-bold text-white">Turn On</span>
                {:else}
                <span class="block text-xs font-bold text-white">Turn Off</span>
                {/if}
            </div>
            <i class="i-tabler-power {!$setMediaScreen ? 'text-green-500' : 'text-red-500'} w-4 h-4"></i>
        </button>
    </div>
</aside>