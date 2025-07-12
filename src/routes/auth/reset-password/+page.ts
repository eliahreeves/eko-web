import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	// Since hash fragments are not available server-side,
	// we'll handle token validation client-side
	return {
		// Initial state - will be updated client-side
		hasValidToken: null,
		error: null
	};
};
