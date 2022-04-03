export enum Color {
	g = 'green',
	o = 'orange',
	r = 'red',
	b = 'blue',
}

export enum Theme {
	dark = 'darkmode',
	light = 'lightmode',
}

export enum Lang {
	english = 'en',
	spanish = 'es',
}

export interface Preferences {
	theme: Theme;
	animation: boolean;
	lang: Lang;
	color: Color;
}
