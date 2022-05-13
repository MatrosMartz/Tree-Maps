<script lang="ts">
	import { getSpecies } from '$lib/stores/api';

	let name = '';

	const { species, fetchSpecies, searchSpecies } = getSpecies();

	fetchSpecies();

	$: searchSpecies(name);
</script>

<svelte:head>
	<title>In the trees</title>
</svelte:head>

<input
	class="border-radius input"
	type="text"
	bind:value={name}
	placeholder="buscar especie en especifico"
/>

{#each $species as specie}
	<article class="border-radius">
		<h3>
			<a href="specie/{specie.cientificName}">{specie.cientificName}</a>
		</h3>
		<p>{specie.description}</p>
	</article>
{:else}
	<p>espere...</p>
{/each}

<style>
	input {
		width: calc(100% - 2rem);
		margin: 0 1rem;
	}
	article {
		margin: 0.5rem 1rem;
		padding: 0.5rem 1rem;
		background-color: var(--lb-2);
	}
	p {
		max-height: 5em;
		overflow: hidden;
		text-overflow: clip;
	}
</style>
