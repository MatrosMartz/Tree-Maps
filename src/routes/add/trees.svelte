<script>
	import DetailsTree from '$lib/components/registerTree/DetailsTree.svelte';
	import InputImage from '$lib/components/registerTree/InputImage.svelte';
	import Slider from '$lib/components/registerTree/Slider.svelte';
	import RequiredData from '$lib/components/registerTree/RequiredData.svelte';
</script>

<main>
	<h1>agregar un arbol</h1>
	<form method="post">
		<RequiredData />
		<!-- <fieldset>
			<legend>datos basicos</legend>
			<DetailsTree />
		</fieldset>
		<InputImage />
		<Slider /> -->
		<button class="primary-btn" type="submit">enviar</button>
	</form>
</main>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 0.5em;

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
