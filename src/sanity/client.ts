// sanity/client.ts
import { createClient } from '@sanity/client';
import type { SanityClient } from '@sanity/client';

const config = {
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID, // Use environment variables
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    apiVersion: '2024-02-28', // Use a dated API version (very important!)
    useCdn: import.meta.env.DEV, // Use the CDN in production, for faster responses
};

export const client: SanityClient = createClient(config);