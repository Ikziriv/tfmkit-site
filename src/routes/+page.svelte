<script lang="ts">
  import { LayoutRoot } from '$layouts';

  import { 
    Hero,
    CanUsed,
    Device 
  } from '$section/site/index';

  import { SEO } from '$general/index';
  import { websiteSchema, organizationSchema } from '$utils/json-ld';
  import { setMediaScreen } from '$stores';

  $: console.log($setMediaScreen);
</script>


<SEO 
    title="Digital Assets Tools" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<LayoutRoot>
  <div class="flex flex-col justify-center items-center w-full h-auto">
    <Hero />
    <CanUsed />
    <Device />
  </div>
</LayoutRoot>