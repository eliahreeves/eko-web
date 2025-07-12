import { supabase } from '$lib/supabase.js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const accessToken = url.searchParams.get('access_token');
	const refreshToken = url.searchParams.get('refresh_token');
	const type = url.searchParams.get('type');
	
	// Check if this is a password reset flow
	if (type !== 'recovery' || !accessToken) {
		return {
			hasValidToken: false,
			error: 'Invalid or missing reset token. Please request a new password reset link.'
		};
	}
	
	try {
		// Set the session using the tokens from the URL
		const { data, error } = await supabase.auth.setSession({
			access_token: accessToken,
			refresh_token: refreshToken || ''
		});
		
		if (error) {
			console.error('Session error:', error);
			return {
				hasValidToken: false,
				error: 'Invalid or expired reset token. Please request a new password reset link.'
			};
		}
		
		return {
			hasValidToken: true,
			session: data.session
		};
	} catch (err) {
		console.error('Unexpected error:', err);
		return {
			hasValidToken: false,
			error: 'An unexpected error occurred. Please try again.'
		};
	}
};
