<!-- <script context="module" lang="ts">
	export async function load(req) {
		console.log(
			req.session.prfs,
		);
		return {};
	}
</script> -->
<script>
	import TreeMap from '$lib/components/registerTree/TreeMap.svelte';
	import DetailsTree from '$lib/components/registerTree/DetailsTree.svelte';
	import InputImage from '$lib/components/registerTree/InputImage.svelte';
	import Slider from '$lib/components/registerTree/Slider.svelte';

	import { browser } from '$app/env';
</script>

<main>
	<h1>agregar un arbol</h1>
	<form method="post">
		<fieldset>
			<legend>datos basicos</legend>
			<DetailsTree />
		</fieldset>
		<InputImage />
		<Slider />
		<fieldset>
			<legend>seleccionar ubicación del arbol</legend>
			{#if browser && window?.navigator?.geolocation}
				<TreeMap />
			{/if}
		</fieldset>
	</form>
</main>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		overflow: hidden visible;
		border-radius: 7px;

		width: 92vw;

		margin: 1rem auto;
		padding-block: 0.5em;

		box-shadow: 0 4px 10px var(--is);
		background-color: var(--nb);
	}
	form :global(fieldset) {
		width: 80vmin;
		margin: 0;
	}
</style>
