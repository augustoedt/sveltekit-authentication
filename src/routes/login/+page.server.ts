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
		const payload = { email, password };
		/*
		 ** Here is where you add your login logic like...
		 **
		 ** const res = fetch.post('https//somewhereapi.com/api/login', payload)
		 **
		 ** Save your response in a cookie to save your login session, it
		 ** will be repeatedly verified if exist on each request on your app
		 ** in your hooks.server.ts
		 **
		 ** There is a mock login validation below, when the credentials
		 ** are correct it automatically redirect you to the profile page.
		 */

		if (password != 'a' || email != 'a@a.com') {
			return invalid(400, { email, incorrect: 'Password or email are incorrect.' });
		}
		/*
		 ** AccessToken for your Authorization header request on your
		 ** protected api routes.
		 */
		const user = {
			email: 'a@a.com',
			name: 'Augusto Eduardo Torres',
			id: 'a',
			role: 'admin',
			accessToken: 'abcde123456'
		};
		const value = btoa(JSON.stringify(user));
		cookies.set('jwt', value, { path: '/' });
		//end of mock login logic

		throw redirect(307, '/profile');
	}
};
