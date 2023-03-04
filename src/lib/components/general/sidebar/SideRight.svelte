<script lang="ts">
    import { 
        setMediaScreen
    } from '$stores';
</script>
<aside class="absolute inset-y-0 right-2 md:right-4 flex flex-col justify-center items-center bg-transparent w-auto md:w-20 h-screen z-10">
    <div class="flex flex-col justify-center items-center w-auto md:w-full h-20 max-w-xl space-y-4 rounded-lg bg-transparent">
        <button disabled={!$setMediaScreen} class="flex justify-center items-center w-12 md:w-16 h-12 md:h-16 {!$setMediaScreen ? 'bg-zinc-500' : 'bg-white'} rounded-md shadow p-4">
            <i class="i-tabler-share-2 w-6 h-6"></i>
        </button>
        <button disabled={!$setMediaScreen} class="flex justify-center items-center w-12 md:w-16 h-12 md:h-16 {!$setMediaScreen ? 'bg-zinc-500' : 'bg-white'} rounded-md shadow p-4">
            <i class="i-tabler-download w-6 h-6"></i>
        </button>
    </div>
</aside>