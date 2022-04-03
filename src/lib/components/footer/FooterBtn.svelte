<script lang="ts">
	export let panel: string;

	import preferences from '../../stores/preferences';

	$: selected = panel === 'add';
</script>

<button class="head-tag filter-transition" class:selected class:animation={$preferences.animation}>
	<slot />
</button>

<style>
	button {
		overflow: hidden;

		padding: 0;
		height: var(--img-size);

		box-shadow: none;
		border-radius: none;

		filter: none;
	}
	.selected {
		filter: var(--p-fl);
	}
	.selected > :global(svg) {
		transform: rotate(135deg);
	}
</style>
