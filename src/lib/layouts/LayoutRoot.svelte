<script lang="ts">
    import { 
        Header,
        Footer,
        SideLeft,
        SideRight
    } from '$general';
    import { Toaster } from 'svelte-french-toast';
	import { fade } from 'svelte/transition';
    import { setMediaScreen } from '$stores';
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
</svelte:head>

<main class={`flex flex-col justify-center w-full h-screen ${$setMediaScreen === 'desktop' || 'tablet' || 'mobile' ? 'bg-zinc-600' : 'bg-zinc-200'} relative`}>
    <Header />
    <SideLeft />
        <div transition:fade class={`w-full h-auto ${$setMediaScreen === 'desktop' || 'tablet' || 'mobile' ? 'bg-zinc-600' : 'bg-zinc-200'} overflow-y-auto relative z-0`}>
            <slot />
        </div>
    <SideRight />
    <Footer />
    <Toaster />
</main>