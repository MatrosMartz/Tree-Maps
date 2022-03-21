<script lang="ts">
	export let panel: string;

	import options from '../../stores/options';

	$: selected = panel === 'add';
</script>

<button class="head-tag filter-transition" class:selected class:animation={$options.animation}>
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
