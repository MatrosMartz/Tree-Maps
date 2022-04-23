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
		map = new L.Map('map').setView([51.505, -0.09], 18);

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
</script>

<div id="map" />
<div class="coords">latitud: {coords[0]} y longitud: {coords[1]}</div>

<style>
	#map {
		width: 80vw;
		height: 360px;
		margin: 2em auto;
		z-index: 0;
	}
</style>
