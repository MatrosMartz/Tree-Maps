import type { SessionStore } from '../types';

import { Color, Lang, Theme, type Options } from '../types/options';

import { browser } from '$app/env';
import { session } from '$app/stores';

import { derived, get } from 'svelte/store';

import { set_config, parseOptions, isOptions } from '../utilities/options';



export function set_theme(t: boolean) {
    if (browser) {
        const newOptions: Options = {...get(options), theme: t ? Theme.dark : Theme.light };
        const newSesstion = { opts: JSON.stringify(newOptions) };
        set_config(newOptions);
        session.update(() => newSesstion);
    }
}
export function set_lang(l: boolean) {
    if (browser) {
        const newOptions: Options = {...get(options), lang: l ? Lang.english : Lang.spanish };
        const newSesstion = { opts: JSON.stringify(newOptions) };
        set_config(newOptions);
        session.update(() => newSesstion);
    }
}

export function set_animation(animation: boolean) {
    if (browser) {
        const newOptions: Options = {...get(options), animation };
        const newSesstion = { opts: JSON.stringify(newOptions) };
        set_config(newOptions);
        session.update(() => newSesstion);
    }
}
export function set_color(color: Color) {
    if (browser) {
        const newOptions: Options = {...get(options), color };
        const newSesstion = { opts: JSON.stringify(newOptions) };
        set_config(newOptions);
        session.update(() => newSesstion);
    }
}

const options = derived<SessionStore, Options>(<SessionStore>session, ($session, set) => {
    const optsOfSession = parseOptions($session.opts);
    if (isOptions(optsOfSession)) {
        set(optsOfSession);
    } else if (browser) {
        const opts = {
            theme:  matchMedia('(prefers-color-scheme: dark)').matches ? Theme.dark : Theme.light,
            animation: !(matchMedia('(prefers-reduced-motion)').matches),
            lang: Lang.spanish,
            color: Color.g,
        }
        set(opts);
        set_config(opts);
    } else {
        set({
            theme: Theme.light,
            animation: true,
            lang: Lang.spanish,
            color: Color.g,
        });

    }
});

export default options;