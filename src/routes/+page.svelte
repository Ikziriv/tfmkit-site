<script lang="ts">
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { setMediaScreen, setResolution } from '$stores';

    $: console.log($setMediaScreen);
</script>


<SEO 
    title="Digital Assets Tools" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<div class={`flex justify-center md:justify-end items-center w-full h-screen p-0 md:p-4 
  ${$setMediaScreen === 'tablet' ? 'sm:pr-0 md:pr-56 lg:pr-56 xl:pr-56' : ''}
  ${$setMediaScreen === 'mobile' ? 'sm:pr-0 md:pr-96 lg:pr-56 xl:pr-56' : ''}
`}>
  {#if $setMediaScreen === 'desktop'}
  <div class="flex flex-col justify-center items-center w-full h-screen bg-zinc-200 border-2 border-zinc-100 shadow-xl bg-transparent overflow-hidden relative">
    <div class={`flex justify-center items-center rounded-lg bg-zinc-50 shadow-xl p-8
      ${$setResolution === 'r1' ? 'w-[300px] h-[300px]' : ''}
      ${$setResolution === 'r2' ? 'w-[600px] h-[600px]' : ''}
      ${$setResolution === 'r3' ? 'w-[768px] h-[1024px]' : ''}
      ${$setResolution === 'r4' ? 'w-[1200px] h-[800px]' : ''}
    `}>
      <div class="flex flex-col w-auto h-auto text-center md:text-left">
        <span class="font-black uppercase leading-tight text-xl tracking-widest">tfmkit</span>
        <small class="font-thin uppercase leading-tight text-xs tracking-widest">Digital Assets Tools</small>
      </div>
    </div>
  </div>
  {:else if $setMediaScreen === 'tablet'}
  <div class="flex flex-col justify-center items-center w-[820px] h-screen bg-zinc-200 border-2 border-zinc-100 shadow-xl bg-transparent overflow-hidden relative">
    <div class={`flex justify-center items-center rounded-lg bg-zinc-50 shadow-xl p-8
      ${$setResolution === 'r1' ? 'w-[300px] h-[300px]' : ''}
      ${$setResolution === 'r2' ? 'w-[600px] h-[600px]' : ''}
      ${$setResolution === 'r3' ? 'w-[768px] h-[1024px]' : ''}
      ${$setResolution === 'r4' ? 'w-[1200px] h-[800px]' : ''}
    `}>
      <div class="flex flex-col w-auto h-auto text-center md:text-left">
        <span class="font-black uppercase leading-tight text-xl tracking-widest">tfmkit</span>
        <small class="font-thin uppercase leading-tight text-xs tracking-widest">Digital Assets Tools</small>
      </div>
    </div>
  </div>
  {:else if $setMediaScreen === 'mobile'}
  <div class="flex flex-col justify-center items-center w-[375px] h-[667px] bg-zinc-200 border-2 border-zinc-100 shadow-xl bg-transparent overflow-hidden relative">
    <div class={`flex justify-center items-center rounded-lg bg-zinc-50 shadow-xl p-8
      ${$setResolution === 'r1' ? 'w-[300px] h-[300px]' : ''}
      ${$setResolution === 'r2' ? 'w-[600px] h-[600px]' : ''}
      ${$setResolution === 'r3' ? 'w-[768px] h-[1024px]' : ''}
      ${$setResolution === 'r4' ? 'w-[1200px] h-[800px]' : ''}
    `}>
      <div class="flex flex-col w-auto h-auto text-center md:text-left">
        <span class="font-black uppercase leading-tight text-xl tracking-widest">tfmkit</span>
        <small class="font-thin uppercase leading-tight text-xs tracking-widest">Digital Assets Tools</small>
      </div>
    </div>
  </div>
  {:else}
  <div class="flex flex-col justify-center items-center w-full h-screen bg-zinc-900 border-2 border-zinc-900 shadow-xl bg-transparent overflow-hidden relative">
    <div class={`flex justify-center items-center rounded-lg bg-zinc-50 shadow-xl p-8
      ${$setResolution === 'r1' ? 'w-[300px] h-[300px]' : ''}
      ${$setResolution === 'r2' ? 'w-[600px] h-[600px]' : ''}
      ${$setResolution === 'r3' ? 'w-[768px] h-[1024px]' : ''}
      ${$setResolution === 'r4' ? 'w-[1200px] h-[800px]' : ''}
    `}>
      <div class="flex flex-col w-auto h-auto text-center md:text-left">
        <span class="font-black uppercase leading-tight text-xl tracking-widest">tfmkit</span>
        <small class="font-thin uppercase leading-tight text-xs tracking-widest">Digital Assets Tools</small>
      </div>
    </div>
  </div>
  {/if}
</div>

<style>
</style>