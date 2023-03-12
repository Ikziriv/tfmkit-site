<script lang="ts">
    import { onMount } from "svelte";

    let scrollY = 0;
    $: innerHeight = 0;
    $: pageHeight = 0;

    onMount(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            const entry = entries.at(0);
            if (entry === undefined) return;
            pageHeight = Math.floor(entry.contentBoxSize[0].blockSize);
        });
        resizeObserver.observe(document.body);
        return () => resizeObserver.unobserve(document.body);
    });
</script>

<svelte:window bind:innerHeight bind:scrollY />

<progress max={pageHeight - innerHeight} value={scrollY} />

<style>
    progress {
        width: 100%;
        height: 2px;
        top: 0;
        border: 0;
        position: fixed;
        z-index: 9999;
    }
    progress::-webkit-progress-bar,
    progress {
        background-color: #606887;
    }
    progress::-moz-progress-bar {
        background: #0f0f0f;
    }
    progress::-webkit-progress-value {
        background: #3876af;
    }
</style>
