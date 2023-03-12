<script lang="ts">
	import { useRegisterSW } from "virtual:pwa-register/svelte";
	const { needRefresh, updateServiceWorker, offlineReady } = useRegisterSW({
	  onRegistered(r) {
		// uncomment following code if you want check for updates
		// r && setInterval(() => {
		//    console.log('Checking for sw update')
		//    r.update()
		// }, 20000 /* 20s for testing purposes */)
		console.log(`Reload SW Registered: ${r}`);
	  },
	  onRegisterError(error) {
		console.log("SW registration error", error);
	  },
	});
	const close = () => {
	  offlineReady.set(false);
	  needRefresh.set(false);
	};
	$: toast = $offlineReady || $needRefresh;
  </script>
  
  {#if toast}
	<div class="pwa-toast shadow-xl" role="alert">
		<div class="message">
			{#if $offlineReady}
				<span class="text-sm font-normal"> App ready to work offline </span>
			{:else}
				<span class="text-sm font-normal"> New content available, click on reload button to update. </span>
			{/if}
		</div>
		{#if $needRefresh}
			<button on:click={() => updateServiceWorker(true)}> Reload </button>
		{/if}
	  	<button class="bg-blue-600 py-2 px-4 rounded-full" on:click={close}> 
			<span class="text-sm font-bold">Close</span>
		</button>
	</div>
  {/if}
  
  <style>
	.pwa-toast {
	  position: fixed;
	  right: 0;
	  bottom: 0;
	  margin: 16px;
	  padding: 12px;
	  border: 1px solid #8885;
	  border-radius: 4px;
	  z-index: 9999;
	  text-align: left;
	  background-color: var(--mainColor2);
	}
	.pwa-toast .message {
	  margin-bottom: 8px;
	}
	.pwa-toast button {
	  border: 1px solid var(--accentColor);
	  color: var(--TextColor);
	  background-color: var(--accentColor);
	  outline: none;
	  margin-right: 5px;
	  border-radius: 2px;
	  padding: 3px 10px;
	}
  </style>