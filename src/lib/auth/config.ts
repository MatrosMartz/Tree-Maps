import type { Auth0ClientOptions } from '@auth0/auth0-spa-js';

export default <Auth0ClientOptions>{
	domain: import.meta.env.VITE_AUTH0_DOMAIN,
	client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
};
