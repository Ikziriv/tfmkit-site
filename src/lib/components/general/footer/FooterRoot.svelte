<script lang="ts">
  import { 
      setBackground
  } from '$stores';

  import LogoWImage from '$images/logo-w.png';
  import LogoBImage from '$images/logo-b.png';
</script>

<footer class="flex justify-center items-center w-full h-auto max-w-6xl bg-black border-b py-4 px-4 rounded-t-xl">
    <div class="container w-full space-y-8 px-6 py-16 text-gray-600 md:px-12">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
        <div id="flex flex-col w-auto h-auto">
            <a href="/" class="flex flex-row items-center w-auto h-auto mb-2 md:mb-4">
              <img class="object-contain w-8 h-auto mr-4" src={$setBackground ? LogoWImage : LogoBImage} alt="TFMKIT Logo">
              <span class="block font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500">TFMKIT</span>
            </a>  
            <span class="block font-medium text-xs text-white"> © TFMKIT by <a rel="noreferrer nofollow" href="http://ikziriv.com" class="font-black uppercase underline underline-offset-4" target="_blank">Ikziriv</a>.</span>
            <span class="block font-medium text-xs text-white"> Design & Development to all the others.</span>
        </div>
        <div class="flex gap-6">
          <a rel="noreferrer nofollow" href="https://github.com/Ikziriv" target="blank" aria-label="github" class="hover:text-cyan-600">
            <i class="i-tabler-brand-github bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 w-6 h-6"></i>
          </a>
          <a rel="noreferrer nofollow" href="https://www.instagram.com/ikziriv.art/" target="blank" aria-label="instagram" class="hover:text-cyan-600">
            <i class="i-tabler-brand-instagram bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 w-6 h-6"></i>
          </a>
          <a rel="noreferrer nofollow" href="https://www.behance.net/ikziriv" target="blank" aria-label="behance" class="hover:text-cyan-600">
            <i class="i-tabler-brand-behance bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 w-6 h-6"></i>
          </a>
          <a rel="noreferrer nofollow" href="https://dribbble.com/Ikziriv" target="blank" aria-label="dribbble" class="hover:text-cyan-600">
            <i class="i-tabler-brand-dribbble bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 w-6 h-6"></i>
          </a>
          <a rel="noreferrer nofollow" href="https://twitter.com/ikziriv" target="blank" aria-label="twitter" class="hover:text-cyan-600">
            <i class="i-tabler-brand-twitter bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 w-6 h-6"></i>
          </a>
        </div>
      </div>
    </div>
</footer>