<script lang="ts">
	import { getSpecies } from '../../stores/api';

	const { species, fetchSpecies, searchSpecies } = getSpecies();

	let searchValue: string;

	fetchSpecies();

	$: searchSpecies(searchValue);
</script>

<div>
	<input
		bind:value={searchValue}
		class="input border-radius"
		type="search"
		name="search-register"
		id="search-register"
		placeholder="busca especie especifica"
	/>
	{#each $species as specie}
		<label
			>{specie.cientificName}<input
				type="radio"
				name="species"
				id="species"
				value={specie.cientificName}
			/></label
		>
	{/each}
</div>

<!-- <select autocomplete="name" class="input border-radius" name="species" id="species">
    <option value="null" selected>--- Selecciona una especie ---</option>
    {#each $species as specie}
        <option value={specie.cientificName}>{specie.name}</option>
    {:else}
        <option value="null">--- Cargando especies ---</option>
    {/each}
</select> -->
<style>
</style>
