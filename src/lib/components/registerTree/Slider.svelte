<script>
	import files from '$lib/stores/images';

	$: photos = $files.map(files => URL.createObjectURL(files));
</script>

<section class="slides border-radius">
	{#each photos as photo}
		<button class="slide border-radius">
			<img src={photo} alt="arbol :D" />
		</button>
	{:else}
		<p>no hay fotos D:&lt;</p>
	{/each}
</section>

<style>
	.slides {
		display: flex;
		align-items: center;
		gap: 2em;
		overflow: scroll hidden;
		scroll-behavior: smooth;
		scroll-snap-type: x mandatory;
		width: 80vmin;
		height: 4em;
		margin-inline: auto;
		padding-block: 0.5em;
		background-color: var(--nb);
	}
	.slide {
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		scroll-snap-align: center;
		min-width: 40%;
		max-width: 40%;
		height: 4em;
		padding: 0;
	}
	img {
		width: 100%;
		margin-block: auto;
	}
</style>
