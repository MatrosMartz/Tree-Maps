<script lang="ts">
	import RequiredData from '$lib/components/registerTree/RequiredData.svelte';

	import { postJSONData, type FormDataWithentries } from '$lib/utilities/feching';

	function onSumit(evt: SubmitEvent) {
		postJSONData(
			'api/tree',
			<FormDataWithentries>new FormData(<HTMLFormElement>evt.currentTarget)
		);
	}
</script>

<main>
	<h1>agregar un arbol</h1>
	<form on:submit|preventDefault={onSumit} method="post">
		<RequiredData />
		<div>
			<button class="primary-btn" type="submit">enviar</button>
			o
			<button class="quaternary-btn" disabled>sigiente</button>
		</div>
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
		padding-block: 0.75em;

		box-shadow: 0 4px 10px var(--is);
		background-color: var(--nb);
	}
	form :global(fieldset) {
		width: 80vmin;
		margin: 0;
	}
</style>
