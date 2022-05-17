import type { TimeoutID } from '$lib/types';

import type { Specie } from '$lib/types/database/models';

import { browser } from '$app/env';

import { writable } from 'svelte/store';

export function getSpecies() {
	let timeoutSearch: TimeoutID;

	const species = writable<Specie[]>([]);
	let anySpecies: Specie[] = [];

	async function fetchSpecies() {
		if (browser) {
			try {
				const res = await fetch('/api/species', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});

				anySpecies = <Specie[]>await res.json();

				species.set(anySpecies);
			} catch (err) {
				console.error(err);
			}
		}
	}

	function searchSpecies(value: string) {
		clearTimeout(timeoutSearch);
		timeoutSearch = setTimeout(() => {
			species.set(
				anySpecies?.filter(s =>
					s.cientificName.toLowerCase().replace('-', ' ').includes(value)
				)
			);
		}, 500);
	}

	return {
		species,
		fetchSpecies,
		searchSpecies,
	};
}

export function getSpeciesNames() {
	let timeoutSearch: TimeoutID;

	const species = writable<{ name: string; cientificName: string; visible: boolean }[]>([]);
	let anySpecies: { name: string; cientificName: string }[] = [];

	async function fetchSpecies() {
		if (browser) {
			try {
				const res = await fetch('/api/species', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});

				anySpecies = (<Specie[]>await res.json()).map(({ name, cientificName }) => {
					return { name, cientificName };
				});

				species.set(
					anySpecies.map(ss => {
						return { ...ss, visible: false };
					})
				);
			} catch (err) {
				console.error(err);
			}
		}
	}

	function searchSpecies(value: string) {
		clearTimeout(timeoutSearch);
		timeoutSearch = setTimeout(() => {
			species.update(ss => {
				return ss.map(s => {
					return {
						...s,
						visible: (
							s.cientificName.toLowerCase().replace('-', ' ') + s.name.toLowerCase()
						).includes(value),
					};
				});
			});
		}, 500);
	}

	return {
		species,
		fetchSpecies,
		searchSpecies,
	};
}
