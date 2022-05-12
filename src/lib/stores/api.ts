import type { Specie } from '$lib/types/database/models';

import { browser } from '$app/env';

import { writable } from 'svelte/store';

export function getSpecies() {
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
		species.set(anySpecies?.filter(s => s.cientificName.toLowerCase().includes(value)));
	}

	return {
		species,
		fetchSpecies,
		searchSpecies,
	};
}
