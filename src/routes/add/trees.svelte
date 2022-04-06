<script>
	import InputImage from '$lib/components/photos/InputImage.svelte';
	import Slider from '$lib/components/photos/Slider.svelte';
</script>

<main>
	<h1>agregar un arbol</h1>
	<form method="post">
		<InputImage />
		<Slider />
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
		background-color: var(--lb);
	}
	form :global(fieldset) {
		width: 80vmin;
	}
</style>
