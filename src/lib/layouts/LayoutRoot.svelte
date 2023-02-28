<script lang="ts">
    import { 
        Header,
        Footer,
        SideLeft,
        SideRight
    } from '$general';
    import { Toaster } from 'svelte-french-toast';
    import { currentUser } from '$config/pocketbase';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
</svelte:head>

<main class="flex flex-col justify-center w-full h-screen bg-zinc-200 relative">
    <Header />
    <SideLeft />
        <div transition:fade class="w-full h-auto bg-zinc-200 overflow-y-auto relative z-0">
            <slot />
        </div>
    <SideRight />
    <Footer />
    <Toaster />
</main>