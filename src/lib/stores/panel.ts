import { Panel } from '../types';

import { writable } from 'svelte/store';
const time = 250;

const { subscribe, set: setSub } = writable(<Panel>'none');

let timeoutID: ReturnType<typeof setTimeout>;

function setToNone() {
	if (timeoutID != undefined) clearTimeout(timeoutID);
	timeoutID = setTimeout(() => {
		setSub(Panel.none);
	}, time);
}
function setToMore() {
	if (timeoutID != undefined) clearTimeout(timeoutID);
	timeoutID = setTimeout(() => {
		setSub(Panel.more);
	}, time);
}
function setToAdd() {
	if (timeoutID != undefined) clearTimeout(timeoutID);
	timeoutID = setTimeout(() => {
		setSub(Panel.add);
	}, time);
}
function setToOpts() {
	if (timeoutID != undefined) clearTimeout(timeoutID);
	timeoutID = setTimeout(() => {
		setSub(Panel.opts);
	}, time);
}
function setToProf() {
	if (timeoutID != undefined) clearInterval(timeoutID);
	timeoutID = setInterval(() => {
		setSub(Panel.prof);
	}, time);
}

export default {
	subscribe,
	setToNone,
	setToMore,
	setToAdd,
	setToOpts,
	setToProf,
};
