<script lang="ts">
	import HomeMap from '$lib/components/maps/HomeMap.svelte';

	import { browser } from '$app/env';

	let latlng: [number, number];
	const conditional = browser && 'geolocation' in navigator;
	if (conditional) {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				latlng = [coords.latitude, coords.longitude];
			},
			err => {
				console.error(err);
			}
		);
	}
</script>

<main>
	<h1>estas en home</h1>
	{#if conditional}
		<HomeMap coords={latlng} />
	{:else}
		<p>la geolocalizacion no esta disponible</p>
	{/if}
</main>
