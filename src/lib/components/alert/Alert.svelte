<script>
	import { browser } from '$app/env';

	import cookie from '$lib/stores/cookie';

	import SwitchBtnAlert from './SwitchBtnAlert.svelte';

	let authCheck = true,
		prfsCheck = false;

	$: console.log(authCheck, prfsCheck);

	function clickAllow() {
		if (browser) localStorage.setItem('cookies-accepted', JSON.stringify());
	}
	function clickAccept() {}
	function clickReject() {}
</script>

<div class="alert-background">
	<section class="alert border-radius">
		<h5>cookies</h5>
		<span>
			<p>
				las cookies este sitio web se usan para personalizar el contenido
				<a href="#theme">más información...</a>
			</p>
		</span>
		<SwitchBtnAlert id="authCheck" bind:checked={authCheck}>
			<h6 slot="name">autentificación :3</h6>
		</SwitchBtnAlert>
		<SwitchBtnAlert id="prfsCheck" bind:checked={prfsCheck}>
			<h6 slot="name">preferencias :3</h6>
		</SwitchBtnAlert>
		<section class="buttons">
			<button on:click={clickAllow} class="primary-btn"> permitir la selección </button>
			<button on:click={clickAccept} class="secondary-btn"> aceptar todas </button>
			<button on:click={clickReject} class="secondary-btn"> rechazar todas </button>
		</section>
	</section>
</div>

<style>
	.alert-background {
		position: absolute;
		top: 0;
		left: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100vh;

		backdrop-filter: grayscale(0.75) blur(5px);
	}
	.alert {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;

		width: 90vw;
		height: 80vh;

		background-color: var(--t2);
		color: var(--sb);
	}
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
