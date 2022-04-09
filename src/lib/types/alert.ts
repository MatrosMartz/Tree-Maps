export enum Alert {
	none = 'none',
	cookies = 'cookies',
	noSession = 'no session',
	inalidPhoto = 'invalid photo',
}

export interface Cookies {
	auth: boolean;
	prfs: boolean;
}
