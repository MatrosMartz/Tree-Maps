import type { Options, Color } from '../types';

import { writable } from 'svelte/store';

const opts: Options = {
    theme: 'darkmode',
    animation: true,
    lang: 'es',
    colorSchema: 'green',
}

export default (() => {
    const { subscribe, update } = writable(opts);

    const setTheme = (val: boolean) => {
        update(d => {
            return {
                ...d,
                theme: val ? 'lightmode' : 'darkmode',
            }
        });
    };
    const setAnimation = (val: boolean) => {
        update(d => {
            return {
                ...d,
                animation: val,
            }
        });
    };
    const setLang = (val: boolean) => {
        update(d => {
            return {
                ...d,
                lang: val ? 'en' : 'es',
            }
        });
    };
    const setColor = (val: Color) => {
        update(d => {
            return {
                ...d,
                colorSchema: val,
            }
        });
    };

    return {
        subscribe,
        setAnimation,
        setTheme,
        setLang,
        setColor,
    }
})();