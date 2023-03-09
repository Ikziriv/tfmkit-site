<script lang="ts">
    import { 
        setBackground,
        setHeadText,
        setTypography
    } from '$stores';

    import { 
        slide 
    } from 'svelte/transition';

    function resetClick() {
        setBackground.set('');
        setHeadText.set('');
        setTypography.set('');
    }
</script>
{#if $setBackground}
<div transition:slide class="fixed bottom-0 flex justify-between items-center w-full h-auto max-w-4xl bg-black hover:bg-black/80 shadow-xl shadow-rose-500 rounded-t-xl py-2 px-4 md:px-8 z-40">
    <a href="/tools" class="flex justify-center items-center w-auto h-auto bg-black hover:bg-black/80 rounded-full py-2 px-4 md:px-6">
        <span class="font-black text-md text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500">
            TOOLS
        </span>
    </a>
    <button class="flex justify-center items-center w-auto h-auto bg-black hover:bg-black/80 rounded-full py-2 px-4 md:px-6" on:click={() => (resetClick())}>
        <span class="font-black text-md text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red to-orange-800">
            RESET
        </span>
    </button>
</div>
{/if}