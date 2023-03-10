<script lang="ts">
    import { onMount } from 'svelte';
    import { 
        setMediaScreen
    } from '$stores';

    // export let value: number;
    // export let element;
    let zoomArr = [0.5,0.75,0.85,0.9,1,1.2,1.5];
    let indexofArr = 4;
	let selected: any;

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

    // function toggleZoomIn() {
    //     console.log('value of index  zoom out is',indexofArr);
    //     if(indexofArr < zoomArr.length-1){
    //         indexofArr += 1;
    //         value = zoomArr[indexofArr];
    //         selected = value;
    //         element.style['transform'] = `scale(${value})`;
    //     }
    // }

    // function toggleZoomOut() {
    //     console.log('value of index  zoom out is',indexofArr);
    //     if(indexofArr >0){
    //         indexofArr -= 1;
    //         value = zoomArr[indexofArr];
    //         selected = value;
    //     element.style['transform'] = `scale(${value})`;
    //     }
    // }

    onMount(() => {
        // Load
    })
</script>
<footer class="absolute inset-x-0 bottom-2 md:bottom-4 flex flex-row justify-start items-center bg-transparent w-full md:max-w-xl h-auto md:h-20 z-10">
    <div class="flex flex-row justify-center md:justify-start items-center w-full md:w-auto h-auto items-center space-x-2 px-4 md:px-8">
        <div class="flex flex-row justify-between md:justify-start items-center md:space-x-2 rounded-md w-full md:w-auto px-0 md:px-2">
            <div class="flex flex-row md:space-x-2 w-full md:w-auto h-auto">
                <a href="/" class="hidden md:flex justify-center items-center w-10 h-10 bg-black rounded-md shadow">
                    <i class="i-tabler-x w-4 h-4 text-red-500"></i>
                </a>
                <button class="flex justify-center items-center w-10 h-10 bg-white rounded-md shadow">
                    <i class="i-tabler-question-circle w-4 h-4"></i>
                </button>
                <button disabled={!$setMediaScreen} class="w-auto h-10 py-2 px-2 flex justify-center items-center font-medium {!$setMediaScreen ? 'bg-zinc-500' : 'bg-white'} rounded-md shadow">
                    <i class="i-tabler-zoom-in w-4 h-4"></i>
                </button>
                <div class="flex items-center text-gray-500 w-40 {!$setMediaScreen ? 'bg-zinc-500' : 'bg-white'} rounded-md">
                    <label for="hs-inline-leading-select-zoom" class="sr-only">Zoom</label>
                    <select disabled={!$setMediaScreen} bind:value={selected} id="hs-inline-leading-select-zoom" name="hs-inline-leading-select-zoom" class="py-2 text-sm block w-full rounded-md focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 px-2">
                        <option value=0.5>50%</option>
                        <option value=0.75>75%</option>
                        <option value=0.85>85%</option>
                        <option value=0.9>90%</option>
                        <option value=1 selected>100%</option>
                        <option value=1.2>120%</option>
                        <option value=1.5>150%</option>
                        <option value=1>Reset</option>
                    </select>
                </div>
                <button disabled={!$setMediaScreen} class="w-auto h-10 py-2 px-2 flex justify-center items-center font-medium {!$setMediaScreen ? 'bg-zinc-500' : 'bg-white'} rounded-md shadow">
                    <i class="i-tabler-zoom-out w-4 h-4"></i>
                </button>
            </div>
            <div class="flex flex-row justify-center md:space-x-2 w-full md:w-auto h-auto">
                <button on:click={toggleFullScreen} class="flex justify-center items-center w-10 h-10 bg-white rounded-md shadow border">
                    <i class="i-tabler-arrows-maximize w-4 h-4"></i>
                </button>
                <button on:click={toggleMinScreen} class="flex justify-center items-center w-10 h-10 bg-white rounded-md shadow border">
                    <i class="i-tabler-arrows-minimize w-4 h-4"></i>
                </button>
            </div>
        </div>
    </div>
</footer>