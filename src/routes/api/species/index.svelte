<script lang="ts">
	export let species;
</script>

<svelte:head>
	<title>In the trees</title>
</svelte:head>

{#each species as specie}
	<p>{specie.cientificName}</p>
{/each}

<style>
</style>
