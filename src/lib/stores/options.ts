import type { Options, Color } from '../types';

import { browser } from '$app/env';
import { writable } from 'svelte/store';

const opts: Options = {
    theme: 'darkmode',
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
    if (animation === 'true' || animation === 'false') opts.animation = animation === 'true';
    if (lang === 'es' || lang === 'en') opts.lang = lang;
    if (
        color === 'green' || color === 'orange' ||
        color === 'red'   || color === 'blue'
    ) opts.color = color;
}

export default (() => {
    const { subscribe, update } = writable(opts);

    const set_theme = (val: boolean) => {
        const theme = val ? 'lightmode' : 'darkmode';
        if (browser) localStorage.setItem('theme', theme);
        update(d => {
            return {
                ...d,
                theme,
            }
        });
    };
    const set_animation = (val: boolean) => {
        if (browser) localStorage.setItem('animation', val+'');
        update(d => {
            return {
                ...d,
                animation: val,
            }
        });
    };
    const set_lang = (val: boolean) => {
        const lang = val ? 'en' : 'es';
        if (browser) localStorage.setItem('lang', lang);
        update(d => {
            return {
                ...d,
                lang,
            }
        });
    };
    const set_color = (val: Color) => {
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

    return {
        subscribe,
        set_animation,
        set_theme,
        set_lang,
        set_color,
    }
})();