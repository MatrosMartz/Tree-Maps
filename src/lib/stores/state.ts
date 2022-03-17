import type { state } from '../types';

import { writable } from 'svelte/store';
const time = 250;

export default (() => {
    const { subscribe, set: setSub } = writable(<state>'none');
	let timeoutID;
    const SetToNone = () => {
    	if (timeoutID !== undefined) clearTimeout(timeoutID);
    	timeoutID = setTimeout(() => {
    		setSub('none');
    	}, time);
    }
    const SetToMore = () => {
    	if (timeoutID !== undefined) clearTimeout(timeoutID);
    	timeoutID = setTimeout(() => {
    		setSub('more');
    	}, time);
    }
    const SetToAdd  = () => {
    	if (timeoutID !== undefined) clearTimeout(timeoutID);
    	timeoutID = setTimeout(() => {
    		setSub('add');
    	}, time);
    }
    const SetToOpts = () => {
    	if (timeoutID !== undefined) clearTimeout(timeoutID);
    	timeoutID = setTimeout(() => {
    		setSub('opts');
    	}, time);
    }
    const SetToProf = () => {
    	if (timeoutID !== undefined) clearInterval(timeoutID);
    	timeoutID = setInterval(() => {
    		setSub('prof');
    	}, time);
    }

    return {
        subscribe,
        SetToNone,
        SetToMore,
        SetToAdd,
        SetToOpts,
        SetToProf,
    }
})();
