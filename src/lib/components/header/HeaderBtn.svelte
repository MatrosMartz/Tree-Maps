<script lang="ts">
	export let panelControler: string;

	import panel from '../../stores/panel';

	$: panelCapitalize = panelControler[0].toUpperCase() + panelControler.slice(1);

	function onClick() {
		if ($panel === panelControler) {
			panel.setToNone();
		} else {
			panel[`setTo${panelCapitalize}`]();
		}
	}
	$: selected = $panel === panelControler;
</script>

<button class="head-tag filter-transition" class:selected on:click={onClick}>
	<slot />
</button>

<style>
	button {
		border-radius: 7px;

		overflow: hidden;

		padding: 0;
		height: var(--img-size);

		transform: rotate(0);
		filter: none;
	}
	.selected {
		filter: var(--p-fl);
	}
	.selected > :global(svg) {
		transform: rotate(90deg);
	}
</style>
