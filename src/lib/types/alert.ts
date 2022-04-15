export enum AlertEnum {
	none = 'none',
	cookies = 'cookies',
	noSession = 'no session',
	invalidPhoto = 'invalid photo',
}

export interface Cookies {
	auth: boolean;
	prfs: boolean;
}
