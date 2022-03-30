<script>
	import ProfileIcon from '../icons/ProfileIcon.svelte';

	import { isAuth, user, login } from '../../stores/auth';

	import panel from '../../stores/panel';
	import options from '../../stores/options';

	function onClick() {
		if ($panel === 'prof') {
			panel.setToNone();
		} else {
			panel.setToProf();
		}
	}

	$: selected = $panel === 'prof';
</script>

<button class="head-tag filter-transition" on:click={$isAuth ? onClick : login()}>
	{#if $isAuth}
		<img src={$user.picture} alt="user" />
		<section class:selected class:animation={$options.animation}>
			<h5>{$user.nickname}</h5>
			<p>{$user.email}</p>
		</section>
	{:else}
		<ProfileIcon />
		<section>
			<h5>inicar sesión</h5>
		</section>
	{/if}
</button>

<style>
	h5,
	p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-inline: 0.5em;
	}
	p {
		font-size: 12px;
	}
	button {
		display: flex;
		align-items: center;

		border-radius: 7px;

		overflow: hidden;

		max-width: 50vw;
		padding: 0;

		height: var(--img-size);
		box-shadow: none;

		filter: none;
	}
	.selected {
		filter: var(--p-fl);
	}
	button > :global(svg) {
		width: var(--img-size);
	}
	img {
		width: 48px;
		height: 48px;
	}
	section {
		overflow: hidden;
	}
</style>
