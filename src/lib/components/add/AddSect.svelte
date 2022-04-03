<script>
	import HistoringTreeIcon from '../icons/HistoringTreeIcon.svelte';
	import MapingTreeIcon from '../icons/MapingTreeIcon.svelte';
	import TreesIcon from '../icons/TreesIcon.svelte';

	import panel from '../../stores/panel';
	import preferences from '../../stores/preferences';

	function onClick() {
		panel.setToNone();
	}

	$: active = $panel === 'add';
</script>

<section class:active class:animation={$preferences.animation} on:click={onClick}>
	<a href="#_">
		<TreesIcon />
	</a>
	<a href="#_">
		<HistoringTreeIcon />
	</a>
	<a href="add/trees">
		<MapingTreeIcon />
	</a>
</section>

<style>
	section {
		position: absolute;
		bottom: -8%;
		left: 50%;

		width: 160px;
		height: 160px;

		transform-origin: center;
		transform: translate(-50%, 0) scale(5%) rotate(-90deg);
	}
	.animation {
		transition: transform 400ms cubic-bezier(0.5, -0.3, 0.5, 1.3);
	}
	.active {
		transform-origin: center;
		transform: translate(-50%, -40%) scale(100%) rotate(0);
	}
	a {
		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;

		width: var(--img-size);
		height: var(--img-size);

		border-radius: 50%;

		background-color: var(--nb);
		box-shadow: 2px 4px 7px var(--is);
	}
	a {
		top: 50%;
		transform: translateY(-50%);
	}
	a:first-child {
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}
	a:nth-child(2) {
		left: 0;
	}
	a:nth-child(3) {
		right: 0;
	}
</style>
