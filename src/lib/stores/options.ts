import type { Options } from '../types';
import { Color, Lang, Theme } from '../types';

import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const opts: Options = {
	theme: isDarkmode(localStorage?.getItem('theme')) ? Theme.dark : Theme.light,
	animation: isNotReducedMotion(localStorage?.getItem('animation')),
	lang: isLangNotSpanish(localStorage?.getItem('lang')) ?? Lang.spanish,
	color: isColorNotGreen(localStorage?.getItem('color')) ?? Color.g,
};

const { subscribe, update } = writable(opts);

function set_theme(val: boolean) {
	const theme = val ? Theme.light : Theme.dark;
	if (browser) localStorage.setItem('theme', theme);
	update(d => {
		return {
			...d,
			theme,
		};
	});
}
function set_animation(val: boolean) {
	if (browser) localStorage.setItem('animation', val + '');
	update(d => {
		return {
			...d,
			animation: val,
		};
	});
}
function set_lang(val: boolean) {
	const lang = val ? Lang.english : Lang.spanish;
	if (browser) localStorage.setItem('lang', lang);
	update(d => {
		return {
			...d,
			lang,
		};
	});
}
function set_color(val: Color) {
	if (browser) localStorage.setItem('color', val);
	if (val !== undefined) {
		update(d => {
			return {
				...d,
				color: val,
			};
		});
	}
}

function isDarkmode(t: string | undefined) {
	return t === Theme.dark || matchMedia('(prefers-color-scheme: dark)').matches;
}
function isNotReducedMotion(m: string | undefined) {
	return !(m === 'false' || matchMedia('(prefers-reduced-motion)').matches);
}

function isLangNotSpanish(l: string | undefined) {
	return l === Lang.english ? l : null;
}

function isColorNotGreen(c: string | undefined) {
	return c === Color.o || c === Color.r || c === Color.b ? c : null;
}

export default {
	subscribe,
	set_animation,
	set_theme,
	set_lang,
	set_color,
};
