<script lang="ts">
	import { Photo } from '$lib/types';
	import Camera from '$lib/components/Camera.svelte';

	let photo: Photo = Photo.file;
</script>

<main>
	<h1>agregar un arbol</h1>
	<form method="post">
		<fieldset>
			<legend>foto</legend>
			{#if photo === Photo.file}
				a
			{:else}
				<Camera />
			{/if}
			<input type="radio" name="photo" id={Photo.file} value={Photo.file} bind:group={photo} />
			<input type="radio" name="photo" id={Photo.camera} value={Photo.camera} bind:group={photo} />
		</fieldset>
	</form>
</main>

<style>
	form {
		display: flex;
		align-items: center;
		justify-content: center;

		overflow: hidden;
		border-radius: 7px;
		
		width: 95vw;
		min-height: 60vh;
		
		margin: 1rem auto;
		
		box-shadow: 0 4px 10px var(--rs);
	}
	fieldset {
		width: 90%;
	}
</style>