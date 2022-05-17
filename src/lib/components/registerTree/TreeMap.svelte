<script lang="ts">
	import 'leaflet/dist/leaflet.css';

	import type { leafletClickEvent } from '$lib/types/maps';

	import { browser } from '$app/env';

	import options from '../../maps/layerOptions';

	import type { Icon, Marker, Map } from 'leaflet';

	const originCoords: [number, number] = [51.505, -0.09];

	let coords: [number, number] = [...originCoords];
	let localCoords: [number, number] = [...originCoords];
	let map: Map;

	let iconMarker: Icon, markerMap: Marker;

	if (browser)
		(async () => {
			const { icon, marker, Map, tileLayer } = await import('leaflet');
			iconMarker = icon({
				iconUrl: '/icons/treeMarker.svg',
				iconSize: [40, 40],
			});
			markerMap = marker(coords, {
				icon: iconMarker,
			});

			map = new Map('map').setView(originCoords, 20);

			tileLayer(
				'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
				options
			).addTo(map);

			markerMap.addTo(map);

			map.addEventListener('click', (e: leafletClickEvent) => {
				coords = [e.latlng.lat, e.latlng.lng];

				markerMap.setLatLng([e.latlng.lat, e.latlng.lng]);
			});
			navigator.geolocation.getCurrentPosition(
				pos => {
					localCoords = [pos.coords.latitude, pos.coords.longitude];
					coords = [...localCoords];
					markerMap.setLatLng(coords);
				},
				err => {
					console.log(err);
				}
			);
		})();

	function onClick() {
		console.log('hola');
		if (localCoords != null) {
			coords = [...localCoords];
		} else {
			coords = [...originCoords];
		}
	}

	$: if (coords != null && map != null && markerMap != null) {
		map.setView(coords);
		markerMap.setLatLng(coords);
	}
</script>

<div class="border-radius" id="map" />

<button class="reset input border-radius" on:click={onClick} type="button">reset</button>

<label for="lat"> Latidud: </label>
<input
	class="input border-radius"
	name="lat"
	id="lat"
	type="number"
	bind:value={coords[0]}
	min="-90"
	max="90"
/>
<label for="lng"> Longitud: </label>
<input
	class="input border-radius"
	name="lng"
	id="lng"
	type="number"
	bind:value={coords[1]}
	min="-180"
	max="180"
/>

<style>
	.reset {
		width: 75%;
		margin: 0 auto;
	}
	#map {
		margin: 0 auto;
		width: 75vw;
		height: 15rem;
		z-index: 0;
	}
</style>
