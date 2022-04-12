<script>
	import alertstore from '$lib/stores/alert';

	import { fade } from 'svelte/transition';

	function onClick() {
		alertstore.set_none();
	}
</script>

<div class="alert-background" transition:fade>
	<section class="alert border-radius">
		<h5>No ha inicado sesión</h5>
		<p>Debe iniciar sesión para aceder a esto</p>
		<button on:click={onClick} class="primary-btn"> aceptar </button>
	</section>
</div>

<style>
	h5 {
		color: var(--lb);
	}
	p {
		color: inherit;
	}
</style>
