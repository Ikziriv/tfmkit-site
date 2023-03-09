<script lang="ts">
    import { LayoutApp } from '$layouts';
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { getTextColor800 } from '$utils/colors';

    import { 
      setMediaScreen, 
      setResolution,
      
      setBackground,
      setHeadText,
      setTypography,
      setColor
    } from '$stores';
</script>


<SEO 
    title="Digital Assets Tools" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<LayoutApp>
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
      overflow-hidden relative
    `}>
      {#if $setBackground}
      <div class="flex flex-col justify-start items-center w-full h-full p-4 rounded-xl shadow-xl bg-white relative">
        <div class="flex flex-col justify-center items-center w-full h-full p-4 md:p-8 text-left z-10">
          <div class="flex flex-row space-x-2">
            <i class="i-tabler-photo w-10 h-10"></i>
            <div class="flex flex-col -space-y-2 w-auto h-auto">
              <span class="font-black">TFMKIT</span>
              <span class="font-thin">Tools</span>
            </div>
          </div>
          <h1 class="font-black {$setColor ? getTextColor800($setColor) : ''} text-8xl leading-none tracking-tighter">{$setHeadText}</h1>
          <p class="font-thin leading-none {$setColor ? getTextColor800($setColor) : ''}">{$setTypography}</p>
        </div>
        <div class="absolute inset-0 w-full h-full bg-center z-0">
          <img class="w-full h-full object-cover object-left md:object-center" src={$setBackground} alt={$setHeadText}>
        </div>
      </div>
      {:else}
      <div class="flex flex-col justify-start items-center w-full h-full p-4 rounded-xl shadow-xl bg-white relative">
        <div class="flex flex-col justify-center items-center w-full h-full p-4 md:p-8 text-left">
          <div class="flex flex-col items-center w-auto h-auto bg-white rounded-xl text-xs shadow p-4">
            <i class="i-tabler-photo w-10 h-10 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></i>
            <small class="font-bold uppercase leading-none mt-2">URL Image</small>
          </div>
        </div>
      </div>
      {/if}
    </div>
  </div>
  {:else if $setMediaScreen === 'tablet'}
  <div class="flex flex-col justify-center items-center w-[820px] h-screen bg-zinc-200 border-2 border-zinc-100 shadow-xl bg-transparent overflow-hidden relative">
    <div class={`flex justify-center items-center rounded-lg bg-zinc-50 shadow-xl p-8
      ${$setResolution === 'r1' ? 'w-[300px] h-[300px]' : ''}
      ${$setResolution === 'r2' ? 'w-[600px] h-[600px]' : ''}
      ${$setResolution === 'r3' ? 'w-[768px] h-[1024px]' : ''}
      ${$setResolution === 'r4' ? 'w-[1200px] h-[800px]' : ''}
      overflow-hidden relative
    `}>
      {#if $setBackground}
      <div class="flex flex-col justify-start items-center w-full h-full p-4 rounded-xl shadow-xl bg-white relative">
        <div class="flex flex-col justify-center items-center w-full h-full p-4 md:p-8 text-left z-10">
          <div class="flex flex-row space-x-2">
            <i class="i-tabler-photo w-10 h-10"></i>
            <div class="flex flex-col -space-y-2 w-auto h-auto">
              <span class="font-black">TFMKIT</span>
              <span class="font-thin">Tools</span>
            </div>
          </div>
          <h1 class="font-black {$setColor ? getTextColor800($setColor) : ''} text-8xl leading-none tracking-tighter">{$setHeadText}</h1>
          <p class="font-thin leading-none {$setColor ? getTextColor800($setColor) : ''}">{$setTypography}</p>
        </div>
        <div class="absolute inset-0 w-full h-full bg-center z-0">
          <img class="w-full h-full object-cover object-left md:object-center" src={$setBackground} alt={$setHeadText}>
        </div>
      </div>
      {:else}
      <div class="flex flex-col justify-start items-center w-full h-full p-4 rounded-xl shadow-xl bg-white relative">
        <div class="flex flex-col justify-center items-center w-full h-full p-4 md:p-8 text-left">
          <div class="flex flex-col items-center w-auto h-auto bg-white rounded-xl text-xs shadow p-4">
            <i class="i-tabler-photo w-10 h-10 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></i>
            <small class="font-bold uppercase leading-none mt-2">URL Image</small>
          </div>
        </div>
      </div>
      {/if}
    </div>
  </div>
  {:else if $setMediaScreen === 'mobile'}
  <div class="flex flex-col justify-center items-center w-[375px] h-[667px] bg-zinc-200 border-2 border-zinc-100 shadow-xl bg-transparent overflow-hidden relative">
    <div class={`flex justify-center items-center rounded-lg bg-zinc-50 shadow-xl p-8
      ${$setResolution === 'r1' ? 'w-[300px] h-[300px]' : ''}
      ${$setResolution === 'r2' ? 'w-[600px] h-[600px]' : ''}
      ${$setResolution === 'r3' ? 'w-[768px] h-[1024px]' : ''}
      ${$setResolution === 'r4' ? 'w-[1200px] h-[800px]' : ''}
      overflow-hidden relative
    `}>
      {#if $setBackground}
      <div class="flex flex-col justify-start items-center w-full h-full p-4 rounded-xl shadow-xl bg-white relative">
        <div class="flex flex-col justify-center items-center w-full h-full p-4 md:p-8 text-left z-10">
          <div class="flex flex-row space-x-2">
            <i class="i-tabler-photo w-10 h-10"></i>
            <div class="flex flex-col -space-y-2 w-auto h-auto">
              <span class="font-black">TFMKIT</span>
              <span class="font-thin">Tools</span>
            </div>
          </div>
          <h1 class="font-black {$setColor ? getTextColor800($setColor) : ''} text-8xl leading-none tracking-tighter">{$setHeadText}</h1>
          <p class="font-thin leading-none {$setColor ? getTextColor800($setColor) : ''}">{$setTypography}</p>
        </div>
        <div class="absolute inset-0 w-full h-full bg-center z-0">
          <img class="w-full h-full object-cover object-left md:object-center" src={$setBackground} alt={$setHeadText}>
        </div>
      </div>
      {:else}
      <div class="flex flex-col justify-start items-center w-full h-full p-4 rounded-xl shadow-xl bg-white relative">
        <div class="flex flex-col justify-center items-center w-full h-full p-4 md:p-8 text-left">
          <div class="flex flex-col items-center w-auto h-auto bg-white rounded-xl text-xs shadow p-4">
            <i class="i-tabler-photo w-10 h-10 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></i>
            <small class="font-bold uppercase leading-none mt-2">URL Image</small>
          </div>
        </div>
      </div>
      {/if}
    </div>
  </div>
  {:else}
  <div class="flex flex-col justify-center items-center w-full h-screen bg-zinc-900 border-2 border-zinc-900 rounded-lg shadow-xl bg-transparent overflow-hidden relative">
    <div class={`flex justify-center items-center rounded-lg bg-zinc-200 shadow-xl p-8 w-full h-screen overflow-hidden relative`}>
      {#if $setBackground}
      <div class="flex flex-col justify-start items-center w-full h-full p-4 rounded-xl shadow-xl bg-white relative">
        <div class="flex flex-col justify-center items-center w-full h-full p-4 md:p-8 text-left z-10">
          <div class="flex flex-row space-x-2">
            <i class="i-tabler-photo w-10 h-10"></i>
            <div class="flex flex-col -space-y-2 w-auto h-auto">
              <span class="font-black">TFMKIT</span>
              <span class="font-thin">Tools</span>
            </div>
          </div>
          <h1 class="font-black {$setColor ? getTextColor800($setColor) : ''} text-8xl leading-none tracking-tighter">{$setHeadText}</h1>
          <p class="font-thin leading-none {$setColor ? getTextColor800($setColor) : ''}">{$setTypography}</p>
        </div>
        <div class="absolute inset-0 w-full h-full bg-center z-0">
          <img class="w-full h-full object-cover object-left md:object-center" src={$setBackground} alt={$setHeadText}>
        </div>
      </div>
      {:else}
      <div class="flex flex-col justify-start items-center w-full h-full p-4 rounded-xl shadow-xl bg-zinc-500 relative">
        <div class="flex flex-col justify-center items-center w-full h-full p-4 md:p-8 text-left">
          <div class="flex flex-col items-center w-auto h-auto bg-white rounded-xl text-xs shadow p-4">
            <i class="i-tabler-photo w-10 h-10 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></i>
            <small class="font-bold uppercase leading-none mt-2">URL Image</small>
          </div>
        </div>
      </div>
      {/if}
    </div>
  </div>
  {/if}
</div>
</LayoutApp>