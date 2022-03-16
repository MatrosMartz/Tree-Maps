import type { state } from '../types';

import { writable } from 'svelte/store';

export default (() => {
    const { subscribe, set } = writable(<state>'none');

    const SetToNone = () => set('none');
    const SetToMore = () => set('more');
    const SetToAdd  = () => set('add');
    const SetToOpts = () => set('opts');
    const SetToProf = () => set('prof');

    return {
        subscribe,
        SetToNone,
        SetToMore,
        SetToAdd,
        SetToOpts,
        SetToProf,
    }
})();