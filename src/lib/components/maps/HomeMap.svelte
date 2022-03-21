<script lang="ts">
	export let coords: [number, number];

	import 'leaflet/dist/leaflet.css';

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
	}
</style>
