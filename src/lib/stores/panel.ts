import type { Panel } from '../types';

import { writable } from 'svelte/store';
const time = 250;

export default (() => {
    const { subscribe, set: setSub } = writable(<Panel>'none');
	let timeoutID: ReturnType<typeof setTimeout>;
    const setToNone = () => {
    	if (timeoutID !== undefined) clearTimeout(timeoutID);
    	timeoutID = setTimeout(() => {
    		setSub('none');
    	}, time);
    }
    const setToMore = () => {
    	if (timeoutID !== undefined) clearTimeout(timeoutID);
    	timeoutID = setTimeout(() => {
    		setSub('more');
    	}, time);
    }
    const setToAdd  = () => {
    	if (timeoutID !== undefined) clearTimeout(timeoutID);
    	timeoutID = setTimeout(() => {
    		setSub('add');
    	}, time);
    }
    const setToOpts = () => {
    	if (timeoutID !== undefined) clearTimeout(timeoutID);
    	timeoutID = setTimeout(() => {
    		setSub('opts');
    	}, time);
    }
    const setToProf = () => {
    	if (timeoutID !== undefined) clearInterval(timeoutID);
    	timeoutID = setInterval(() => {
    		setSub('prof');
    	}, time);
    }

    return {
        subscribe,
        setToNone,
        setToMore,
        setToAdd,
        setToOpts,
        setToProf,
    }
})();
