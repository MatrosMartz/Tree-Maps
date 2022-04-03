<script lang="ts">
	export let href: string, page: string;

	import prefences from '../../stores/preferences';

	$: selected = href === page;
</script>

<a {href} class="filter-transition" class:selected class:animation={$prefences.animation}>
	<slot />
</a>

<style>
	a {
		background-color: var(--lb);
		color: inherit;
		filter: none;
	}
	.selected {
		filter: var(--p-fl);
	}
	a > :global(svg) {
		width: var(--img-size);
	}
</style>
