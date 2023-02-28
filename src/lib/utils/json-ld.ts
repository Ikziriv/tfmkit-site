import type { 
    Thing, 
    WithContext, 
    Organization, 
    WebSite, 
    Blog, 
    TechArticle,
} from 'schema-dts';

import { uneval } from 'devalue';
import data from './site-data';

export type Schema = Thing | WithContext<Thing>;

export function serializeSchema(thing: Schema): string {
    return `<script type="application/ld+json">${uneval(thing)}</script>`;
}

export const websiteSchema: WithContext<WebSite> = {
'@context': 'https://schema.org',
'@type': 'WebSite',
name: data.siteName,
url: data.siteUrl,
description: data.description,
author: data.author,
sameAs: [data.siteUrl, data.github]
};

export function makeblogSchema({ 
        title, 
        description 
        }: { 
        title: string; 
        description: string 
}) {
    const blogSchema: WithContext<Blog> = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        url: `${data.siteUrl}/blog`,
        name: `Blog | ${data.siteName}`,
        headline: title,
        description: description
    }

    return { blogSchema }
}

export const articleSchema: WithContext<TechArticle> = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url: data.siteUrl,
    name: data.siteName,
    description: data.description
};

export const organizationSchema: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': data.siteUrl,
    url: data.siteUrl,
    name: data.siteName,
    legalName: data.siteName,
    alternateName: data.siteName,
    description: data.description,
    contactPoint: {
        '@type': 'ContactPoint',
        email: data.email,
        contactType: 'customer service'
    },
    sameAs: [data.siteUrl, data.github],
    logo: {
        '@type': 'ImageObject',
        name: 'Freeda Tools Logo',
        url: `${data.siteUrl}/favicon.png`,
        width: '64',
        height: '64'
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tangerang, Indonesia',
        postalCode: '11720',
        streetAddress: 'Karawaci 15810'
    }
};