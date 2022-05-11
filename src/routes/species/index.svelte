<script lang="ts">
	async function getSpecies() {
		const res = await fetch('/api/species', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return await res.json();
	}
</script>

<svelte:head>
	<title>In the trees</title>
</svelte:head>

{#await getSpecies()}
	cargando...
{:then species}
	{#each species as specie}
		<p>{specie.cientificName}</p>
	{/each}
{/await}

<style>
</style>
