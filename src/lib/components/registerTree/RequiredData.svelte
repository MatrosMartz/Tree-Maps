<script>
	import TreeMap from './TreeMap.svelte';

	import { getSpecies } from '../../stores/api';

	import { browser } from '$app/env';

	const { species, fetchSpecies } = getSpecies();

	fetchSpecies();
</script>

<fieldset>
	<legend>Datos Obligatorios</legend>
	<select class="input border-radius" name="species" id="species">
		<option class="border-radius" value="null">--- Selecciona una especie ---</option>
		{#each $species as specie}
			<option class="border-radius" value={specie.cientificName}>{specie.name}</option>
		{:else}
			<option class="border-radius" value="null">--- Cargando especies ---</option>
		{/each}
	</select>
	{#if browser && window?.navigator?.geolocation}
		<TreeMap />
	{/if}
</fieldset>

<style>
	select {
		outline: none;
	}
</style>
