<script lang="ts">
	import InvalidPhotoIcon from '$lib/components/icons/InvalidPhotoIcon.svelte';

	import { invalidTypes } from '../../../stores/alert';

	import { fade } from 'svelte/transition';
</script>

<div class="alert-background" transition:fade>
	<section class="alert border-radius">
		<InvalidPhotoIcon />
		<h5>Ha seleccionado tipos de archivos invalidos</h5>
		<section>
			<h6>Tipos validos</h6>
			<ul>
				<li>PNG</li>
				<li>JPEG</li>
				<li>GIF</li>
				<li>WebP</li>
			</ul>
		</section>
		<section>
			<h5>Tipos invalidos que ha seleccionado</h5>
			<ul>
				{#each $invalidTypes as invalidType}
					<li>{invalidType[0]}: {invalidType[1]}</li>
				{/each}
			</ul>
		</section>
	</section>
</div>
