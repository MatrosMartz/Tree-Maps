<script lang="ts">
	import SearchSpecie from './SearchSpecie.svelte';

	import TreeMap from './TreeMap.svelte';

	import { browser } from '$app/env';
</script>

<fieldset>
	<legend>Datos Obligatorios</legend>
	<SearchSpecie />
	{#if browser}
		<TreeMap />
	{/if}
</fieldset>

<style>
	fieldset {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
</style>
