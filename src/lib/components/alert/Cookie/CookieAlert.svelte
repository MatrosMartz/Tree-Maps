<script>
	import { browser } from '$app/env';
	import { fade } from 'svelte/transition';

	import cookie from '../../../stores/cookie';
	import alertStore from '../../../stores/alert';
	import preferences from '../../../stores/preferences';
	import { set_config } from '../../../utilities/preferences';

	import SwitchBtnAlert from './SwitchBtnAlert.svelte';
	import CookieIcon from '$lib/components/icons/CookieIcon.svelte';

	let authCheck = true,
		prfsCheck = false;

	function clickAllow() {
		if (browser) {
			cookie.set({
				auth: authCheck,
				prfs: prfsCheck,
			});
			if (prfsCheck) set_config($preferences);
		}
		alertStore.set_none();
	}
	function clickAccept() {
		if (browser) {
			cookie.set({
				auth: true,
				prfs: true,
			});
			set_config($preferences);
		}
		alertStore.set_none();
	}
	function clickReject() {
		if (browser) {
			cookie.set({
				auth: false,
				prfs: false,
			});
		}
		alertStore.set_none();
	}
</script>

<div class="alert-background" transition:fade>
	<section class="alert border-radius">
		<CookieIcon />
		<h5>cookies</h5>
		<p>
			las cookies este sitio web se usan para personalizar el contenido
			<a href="#theme">más información...</a>
		</p>
		<SwitchBtnAlert id="authCheck" bind:checked={authCheck}>
			<h6 slot="name">autentificación</h6>
		</SwitchBtnAlert>
		<SwitchBtnAlert id="prfsCheck" bind:checked={prfsCheck}>
			<h6 slot="name">preferencias</h6>
		</SwitchBtnAlert>
		<section class="buttons">
			<button on:click={clickAllow} class="primary-btn"> permitir la selección </button>
			<button on:click={clickReject} class="secondary-btn"> rechazar todas </button>
			<button on:click={clickAccept} class="secondary-btn"> aceptar todas </button>
		</section>
	</section>
</div>

<style>
	h5,
	h6 {
		color: var(--lb);
	}
	h6 {
		font-weight: 500;
	}
	p {
		color: inherit;
	}
	a {
		color: inherit;
		filter: var(--s-fl);
	}
	.buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: stretch;
		gap: 0.5em;
		padding-inline: 0.5em;
	}
	.buttons button {
		font-size: calc(1rem * 0.8);
		font-weight: 700;
		flex-grow: 1;
	}
	.buttons :first-child {
		width: 100%;
	}
</style>
