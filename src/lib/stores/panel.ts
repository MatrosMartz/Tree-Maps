import type { Panel } from '../types';

import { writable } from 'svelte/store';
const time = 250;

const { subscribe, set: setSub } = writable(<Panel>'none');

let timeoutID: ReturnType<typeof setTimeout>;

function setToNone() {
	if (timeoutID != undefined) clearTimeout(timeoutID);
	timeoutID = setTimeout(() => {
		setSub('none');
	}, time);
}
function setToMore() {
	if (timeoutID != undefined) clearTimeout(timeoutID);
	timeoutID = setTimeout(() => {
		setSub('more');
	}, time);
}
function setToAdd() {
	if (timeoutID != undefined) clearTimeout(timeoutID);
	timeoutID = setTimeout(() => {
		setSub('add');
	}, time);
}
function setToOpts() {
	if (timeoutID != undefined) clearTimeout(timeoutID);
	timeoutID = setTimeout(() => {
		setSub('opts');
	}, time);
}
function setToProf() {
	if (timeoutID != undefined) clearInterval(timeoutID);
	timeoutID = setInterval(() => {
		setSub('prof');
	}, time);
}

export default {
	subscribe,
	setToNone,
	setToMore,
	setToAdd,
	setToOpts,
	setToProf,
}
