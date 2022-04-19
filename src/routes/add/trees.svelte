<script>
	import HomeMap from '$lib/components/maps/HomeMap.svelte';
	import DetailsTree from '$lib/components/photos/DetailsTree.svelte';
	import InputImage from '$lib/components/photos/InputImage.svelte';
	import Slider from '$lib/components/photos/Slider.svelte';

	import { browser } from '$app/env';
</script>

<main>
	<h1>agregar un arbol</h1>
	<form method="post">
		<DetailsTree />
		<InputImage />
		<Slider />
		{#if browser}
			<HomeMap />
		{/if}
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
	}
</style>
