<script lang="ts">
	import type { Specie } from '$lib/types/database/models';

	async function getSpecies(): Promise<Specie[]> {
		const res = await fetch('/api/species', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return <Specie[]>await res.json();
	}
</script>

<svelte:head>
	<title>In the trees</title>
</svelte:head>

{#await getSpecies()}
	cargando...
{:then species}
	{#each species as specie}
		<article class="border-radius">
			<h3>
				<a href="specie/{specie.cientificName}">{specie.cientificName.replace('-', ' ')}</a>
			</h3>
			<p>{specie.description}</p>
		</article>
	{/each}
{/await}

<style>
	article {
		margin: 0.5rem 1rem;
		padding: 0.5rem 1rem;
		background-color: red;
	}
	p {
		max-height: 5em;
		overflow: hidden;
		text-overflow: clip;
	}
</style>
