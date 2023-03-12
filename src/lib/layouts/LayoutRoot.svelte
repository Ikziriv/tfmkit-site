<script lang="ts">
  import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

  import { 
    HeaderRoot,
    FooterNotif,
    FooterRoot
  } from '$general';

  import { 
    ProgressScroll
  } from '$shared';
  
  onMount(() => {
      // Load
  });
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
</svelte:head>

<main class={`flex flex-col justify-center items-center w-full h-auto bg-white relative`}>
    <ProgressScroll />
    <HeaderRoot />
    <div transition:fade class={`w-full h-auto`}>
        <slot />
    </div>
    <FooterNotif />
    <FooterRoot />
</main>