import type { TimeoutID } from '../types';
import type { Options } from '../types/options';

let timeoutID : TimeoutID;
const timeOfTimeout = 500;

export function parseOptions(val: string) {
    try {
        return JSON.parse(val);
    } catch (err) {
        if (err.name === 'SyntaxError') return undefined;
        console.log(err);
    }
}

export function isOptions(val: Record<string, string | boolean>) {
    return val != null && val.theme != null && val.animation != null && val.lang != null && val.color != null;
}

export function set_config(opts: Options) {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(async () => {
        await fetch('options', {
            method: 'PUT',
            headers: {
                'set-cookie': JSON.stringify(opts),
            }
        });
    }, timeOfTimeout);
}