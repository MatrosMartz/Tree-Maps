import type { Options, Color } from '../types';

import { browser } from '$app/env';
import { writable } from 'svelte/store';

const opts: Options = {
    theme: 'lightmode',
    animation: true,
    lang: 'es',
    color: 'green',
}

if (browser) {
    const theme = localStorage.getItem('theme');
    const animation = localStorage.getItem('animation');
    const lang = localStorage.getItem('lang');
    const color = localStorage.getItem('color');

    if (theme === 'darkmode' || theme === 'lightmode') opts.theme = theme;
    else if (matchMedia('(prefers-color-scheme: dark)').matches) opts.theme = 'darkmode';

    if (animation === 'true' || animation === 'false') opts.animation = animation === 'true';
    else if (matchMedia('(prefers-reduced-motion)').matches) opts.animation = false;

    if (lang === 'es' || lang === 'en') opts.lang = lang;

    if (
        color === 'green' || color === 'orange' ||
        color === 'red'   || color === 'blue'
    ) opts.color = color;
}

const { subscribe, update } = writable(opts);

function set_theme(val: boolean) {
    const theme = val ? 'lightmode' : 'darkmode';
    if (browser) localStorage.setItem('theme', theme);
    update(d => {
        return {
            ...d,
            theme,
        }
    });
};
function set_animation(val: boolean) {
    if (browser) localStorage.setItem('animation', val+'');
    update(d => {
        return {
            ...d,
            animation: val,
        }
    });
};
function set_lang(val: boolean) {
    const lang = val ? 'en' : 'es';
    if (browser) localStorage.setItem('lang', lang);
    update(d => {
        return {
            ...d,
            lang,
        }
    });
};
function set_color(val: Color) {
    if (browser) localStorage.setItem('color', val);
    if (val !== undefined) {
        update(d => {
            return {
                ...d,
                color: val,
            }
        });
    }
};

export default {
    subscribe,
    set_animation,
    set_theme,
    set_lang,
    set_color,
}
