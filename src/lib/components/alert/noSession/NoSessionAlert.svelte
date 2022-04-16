<script>
	import AuthAlertIcon from '../../icons/AuthAlertIcon.svelte';
	import alertstore from '../../../stores/alert';

	function onClick() {
		alertstore.set_none();
	}
</script>

<section class="alert border-radius">
	<AuthAlertIcon />
	<h5>No ha inicado sesión</h5>
	<p>Debe iniciar sesión para aceder a esta funcionalidad.</p>
	<button on:click={onClick} class="primary-btn"> aceptar </button>
</section>
