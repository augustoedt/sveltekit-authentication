import { invalid, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (locals.user) throw redirect(302, '/profile');
};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		if (password != 'a' || email != 'a@a.com') {
			return invalid(400, { email, incorrect: 'Senha ou Email incorretos' });
		}
		const user = {
			email: 'a@a.com',
			name: 'abcd',
			id: 'a'
		};
		const value = btoa(JSON.stringify(user));
		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, '/profile');
	}
};
