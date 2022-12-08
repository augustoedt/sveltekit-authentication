import type { NavHeader } from './types';

export const navHeaders: NavHeader[] = [
	{
		label: 'Home',
		url: '/',
		showLogged: true,
		showNotLogged: true
	},
	{
		label: 'Login',
		url: '/login',
		showLogged: false,
		showNotLogged: true
	},
	{
		label: 'Profile',
		url: '/profile',
		showLogged: true,
		showNotLogged: false
	}
];
