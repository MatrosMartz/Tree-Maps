<script lang="ts">
	import 'leaflet/dist/leaflet.css';

	import { onMount } from 'svelte';
	import L from 'leaflet';

	import options from '../../maps/layerOptions';

	interface leafletClickEvent extends L.LeafletEvent {
		latlng: L.LatLng;
	}

	let coords: [number, number] = [51.505, -0.09];
	let iconMarker = L.icon({
		iconUrl: '/icons/brute/treeMarker.svg',
		iconSize: [44, 44],
	});
	let marker = L.marker(coords, {
		icon: iconMarker,
	});

	navigator.geolocation.getCurrentPosition(
		pos => {
			coords = [pos.coords.latitude, pos.coords.longitude];
			marker.setLatLng(coords);
		},
		err => {
			console.log(err);
		}
	);

	let map: L.Map;

	onMount(() => {
		map = new L.Map('map').setView([51.505, -0.09], 20);

		L.tileLayer(
			'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
			options
		).addTo(map);

		marker.addTo(map);

		map.addEventListener('click', (e: leafletClickEvent) => {
			coords = [e.latlng.lat, e.latlng.lng];
			marker.setLatLng([e.latlng.lat, e.latlng.lng]);
		});
	});
	$: if (coords != null && map != null) {
		map.setView(coords);
	}

	$: marker.setLatLng(coords);
</script>

<div id="map" />

<label for="lat"> Latidud: </label>
<input name="lat" id="lat" type="number" bind:value={coords[0]} />
<label for="lng"> Longitud: </label>
<input name="lng" id="lng" type="number" bind:value={coords[1]} />

<style>
	#map {
		margin: 0;
		width: 80vw;
		height: 17rem;
		z-index: 0;
	}
</style>
