<script lang="ts">
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';

    import 'uno.css';
    import '@unocss/reset/normalize.css';
    import '@unocss/reset/tailwind.css';
    
	let ReloadPrompt;
	onMount(async () => {
		pwaInfo && (ReloadPrompt = (await import('$widget/ReloadPrompt.svelte')).default);
	})
	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

<slot />

{#if ReloadPrompt}
	<svelte:component this={ReloadPrompt} />
{/if}