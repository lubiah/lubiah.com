import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

export const prerender = true;
injectAnalytics({ mode: dev ? 'development' : 'production' });
