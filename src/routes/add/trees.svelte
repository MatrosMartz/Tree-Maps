<script lang="ts">
	import { browser } from '$app/env';

	import Camera from '$lib/components/photos/Camera.svelte';
	import InputImage from '$lib/components/photos/InputImage.svelte';

	import { Photo } from '$lib/types';

	let photo: Photo = Photo.file;
</script>

<main>
	<h1>agregar un arbol</h1>
	<form method="post">
		<fieldset>
			<legend>foto</legend>
			{#if photo === Photo.file}
				<InputImage />
			{:else}
				<Camera />
			{/if}
			<input
				type="radio"
				name="photo"
				id={Photo.file}
				value={Photo.file}
				bind:group={photo}
			/>
			<input
				type="radio"
				name="photo"
				id={Photo.camera}
				value={Photo.camera}
				bind:group={photo}
				disabled={!(browser && navigator.mediaDevices)}
			/>
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
		min-height: 60vh;

		margin: 1rem auto;

		box-shadow: 0 4px 10px var(--is);
		background-color: var(--lb);
	}
	fieldset {
		width: 90%;
	}
</style>
