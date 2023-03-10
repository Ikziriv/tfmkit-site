<script lang="ts">
  import { 
      setBackground
  } from '$stores';

  import LogoWImage from '$images/logo-w.png';
  import LogoBImage from '$images/logo-b.png';
</script>
<div class="fixed top-0 flex justify-between items-center w-full h-auto max-w-6xl {$setBackground ? 'bg-black' : 'bg-white border'} shadow-md rounded-b-xl py-4 px-4 md:px-8 z-40">
    <a href="/" class="flex flex-row items-center w-auto h-auto">
        <img class="object-contain w-10 h-auto mr-4" src={$setBackground ? LogoBImage : LogoWImage} alt="TFMKIT Logo">
        <span class="font-black text-xl text-transparent bg-clip-text {$setBackground ? 'bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500' : 'bg-gradient-to-r from-gray-700 via-black to-gray-700'}">TFMKIT</span>
    </a>

    
    <button class="flex md:hidden justify-center items-center w-12 h-12 bg-white rounded-md shadow p-2">
        <i class="i-tabler-menu w-6 h-6"></i>
    </button>
    <ul class="hidden md:flex flex-row space-x-4">
        <li class="text-md font-medium">
            <a href="/tools" class={`${$setBackground ? 'text-white' : 'text-black'}`}>Templates</a>
        </li>
        <li class="text-md font-medium">
            <a href="/tools" class={`${$setBackground ? 'text-white' : 'text-black'}`}>Tools</a>
        </li>
        <li class="text-md font-medium">
            <a rel="noreferrer nofollow" href="https://github.com/Ikziriv/tfmkit-site" target="blank" class="w-12 h-12 p-2 {$setBackground ? 'bg-white' : 'bg-black'} hover:bg-cyan-500 rounded-xl border">
                <i class="i-tabler-brand-github w-6 h-6 {$setBackground ? 'text-black' : 'text-white'}"></i>
            </a>
        </li>
    </ul>
</div>