<script lang="ts">
    import { page } from '$app/stores';
    import data from '$utils/site-data';
    import { serializeSchema } from '$utils/json-ld';
    import { browser } from '$app/environment';
    import type { Schema } from '$utils/json-ld';

    export let schemas: Schema[];
    export let canonical = '';
    export let title: string;
    // export let isPost = false;
    export let thumbnail = '';
    export let description = '';
    export let ogImage = '';
    export let noindex = false;
    const { siteName, siteUrl, keywords, norobots, type, image, imageTwitter } = data;
    const defaultDesc = data.description;

    const url = $page.url.toString();
</script>
  
  <svelte:head>
    <title>{title} | {siteName}</title>
    <link
      rel="canonical"
      href={canonical ? siteUrl + canonical : siteUrl + ($page.url.pathname ?? '')} />
    <meta name="description" content={description ? description : defaultDesc} />
    <meta name="keywords" content={keywords} />

    {#if norobots}
      <meta name="robots" content={noindex ? 'noindex' : 'all'} />
      <meta name="googlebot" content="index,follow" />
    {/if}
    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title || siteName} />
    <meta property="og:description" content={description ? description : defaultDesc} />
    <meta property="og:image" content={ogImage ? ogImage : siteUrl + image} />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:url" content="{siteUrl}{$page.url.pathname ?? ''}" />
    <meta property="twitter:title" content={title || siteName} />
    <meta property="twitter:description" content={description ? description : defaultDesc} />
    <meta property="twitter:image" content={ogImage ? ogImage : siteUrl + imageTwitter} />
    
    <!-- Social Meta tags   -->
    <meta itemprop="name" content={title || siteName} />
    <meta itemprop="description" content={description ? description : defaultDesc} />
    <meta itemprop="image" content={thumbnail || siteUrl + '/favicon.png'} />
    
	  <meta name="author" content="Ikziriv" />
    <meta name="msapplication-TileImage" content="/assets/site/logo-270x270.png">
    {#if thumbnail !== ''}<meta property="twitter:image" content={thumbnail} />{/if}
    {#if !browser}
  
      <!-- JSON-LD Schema -->
      {#each schemas as schema}
        {@html serializeSchema(schema)}
      {/each}
    {/if}
  </svelte:head>