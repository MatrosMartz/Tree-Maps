import { writable } from 'svelte/store';

const { subscribe, update } = writable<File[]>([]);

export function add(newFiles: File[]) {
	update(files => [...files, ...newFiles]);
}

export default {
	subscribe,
	add,
};
