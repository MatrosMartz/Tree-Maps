<script lang="ts">
	import { browser } from '$app/env';

	import Camera from '$lib/components/photos/Camera.svelte';
	import InputImage from '$lib/components/photos/InputImage.svelte';

	import { Photo } from '$lib/types';
	import { media } from '$lib/utilities/camera';

	import files from '$lib/stores/images';
	import { stringify } from 'uuid';

	let typePhoto: Photo = Photo.file;

	$: photos = $files.map(files => URL.createObjectURL(files));
</script>

<main>
	<h1>agregar un arbol</h1>
	<form method="post">
		<fieldset>
			<legend>foto</legend>
			{#if typePhoto === Photo.file}
				<InputImage />
			{:else}
				{#await media()}
					esperando...
				{:then res}
					<Camera {...res} />
				{:catch error}
					{error}
				{/await}
			{/if}
			<div>
				<input
					type="radio"
					name="photo"
					id={Photo.file}
					value={Photo.file}
					bind:group={typePhoto}
				/>
				<input
					type="radio"
					name="photo"
					id={Photo.camera}
					value={Photo.camera}
					bind:group={typePhoto}
					disabled={!(browser && navigator.mediaDevices)}
				/>
			</div>
		</fieldset>
	</form>
	<section class="images">
		{#each photos as photo}
			<img src={photo} alt="arbol :D" />
		{:else}
			<p>no hay fotos D:</p>
		{/each}
	</section>
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
	fieldset {
		width: 90%;
	}
	.images {
		position: relative;
		display: flex;
		gap: 0.5em;
		overflow: scroll hidden;
		width: 92vw;
		margin-inline: auto;
		background-color: var(--lb);
		border-radius: 7px;
	}
	img {
		width: 20%;
		border-radius: 7px;
		margin-block: auto;
	}
</style>
