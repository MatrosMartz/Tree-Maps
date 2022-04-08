<script lang="ts">
	export let active: boolean;

	import { isAuth, user, login, logout } from '../../stores/auth';
</script>

<section class="panel-sect left" class:active>
	{#if $isAuth}
		<h5 class="sect-h5">{$user.name}</h5>
		<span>{$user.email}</span>
		<button class="primary-btn" on:click={logout()}> salir de la sesión </button>
	{:else}
		<h5>inicie sesión</h5>
		<button class="primary-btn" on:click={login()}> iniciar sesión </button>
	{/if}
</section>
