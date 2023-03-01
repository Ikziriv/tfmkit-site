<script lang="ts">
    import { onMount } from 'svelte';

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    function toggleMinScreen() {
        document.exitFullscreen();
    }

    onMount(() => {
        // Load
    })
</script>
<footer class="absolute inset-x-0 bottom-2 md:bottom-4 flex flex-row justify-start items-center bg-transparent w-full h-20 z-10">
    <div class="flex flex-row justify-center items-center w-full h-20 max-w-xl space-x-4 rounded-lg bg-transparent">
        <button on:click={toggleFullScreen} class="flex justify-center items-center w-16 h-16 bg-white shadow border p-4">
            <i class="i-tabler-arrows-maximize w-6 h-6"></i>
        </button>
        <button on:click={toggleMinScreen} class="flex justify-center items-center w-16 h-16 bg-white shadow border p-4">
            <i class="i-tabler-arrows-minimize w-6 h-6"></i>
        </button>
    </div>
</footer>