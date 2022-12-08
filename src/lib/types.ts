export type User = {
	email: string;
	name: string;
	id: string;
	accessToken: string;
};

export type NavHeader = {
	label: string;
	url: string;
	showLogged: boolean;
	showNotLogged: boolean;
};
