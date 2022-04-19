<script lang="ts">
	let coords: [number, number] = [51.505, -0.09];

	import 'leaflet/dist/leaflet.css';

	navigator.geolocation.getCurrentPosition(
		pos => {
			coords[0] = pos.coords.latitude;
			coords[1] = pos.coords.longitude;
		},
		err => {
			console.log(err);
		}
	);

	import { onMount } from 'svelte';
	import L from 'leaflet';

	import options from '../../maps/layerOptions';

	let map: L.Map;
	onMount(() => {
		map = new L.Map('map').setView([51.505, -0.09], 18);
		L.tileLayer(
			'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
			options
		).addTo(map);
	});
	$: if (coords != null && map != null) {
		map.setView(coords);
	}
</script>

<div id="map" />

<style>
	#map {
		width: 80vw;
		height: 360px;
		margin: 2em auto;
		z-index: 0;
	}
</style>
