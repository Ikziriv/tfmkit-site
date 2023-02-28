<script lang="ts">
    import { 
        Header,
        Footer
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

<main class="flex flex-col justify-start w-full h-screen relative">
    <Header />
        <div transition:fade class="w-full h-auto {$currentUser ? 'py-4 md:py-8' : ''} bg-zinc-50 overflow-y-auto relative z-10">
            <slot />
        </div>
    <Footer />
    <Toaster />
</main>