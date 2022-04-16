<script lang="ts">
	import InvalidPhotoIcon from '../../icons/InvalidPhotoIcon.svelte';

	import alertStore, { invalidTypes } from '../../../stores/alert';

	function onClick() {
		alertStore.set_none();
	}
</script>

<section class="alert border-radius">
	<InvalidPhotoIcon />
	<h5>Ha seleccionado tipos de archivos invalidos:</h5>
	<section>
		<h6>Tipos validos</h6>
		<ul>
			<li>Image / PNG</li>
			<li>Image / JPEG</li>
			<li>Image / GIF</li>
			<li>Image / WEBP</li>
		</ul>
	</section>
	<section>
		<h6>Usted selecciono:</h6>
		<ul>
			{#each $invalidTypes as invalidType}
				<li>{invalidType[0]} / {invalidType[1]}</li>
			{/each}
		</ul>
	</section>
	<button on:click={onClick} class="primary-btn"> aceptar </button>
</section>

<style>
	.alert section {
		width: 70%;
	}
</style>
