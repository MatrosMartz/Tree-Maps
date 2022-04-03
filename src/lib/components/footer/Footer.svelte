<script lang="ts">
	import { page } from '$app/stores';
	import panel from '../../stores/panel';

	import FooterLink from './FooterLink.svelte';
	import FooterBtn from './FooterBtn.svelte';

	import HomeIcon from '../icons/HomeIcon.svelte';
	import TreesIcon from '../icons/TreesIcon.svelte';
	import AddIcon from '../icons/AddIcon.svelte';
	import LeadersIcon from '../icons/LeadersIcon.svelte';
	import ResourcesIcon from '../icons/ResourcesIcon.svelte';

	import { isAuth } from '$lib/stores/auth';

	function onClick(evt: MouseEvent) {
		const path = evt.composedPath();
		if (
			(path[1] instanceof HTMLButtonElement || path[2] instanceof HTMLButtonElement) &&
			$panel !== 'add'
		) {
			if ($isAuth) {
				panel.setToAdd();
			} else {
				alert('no ha inicado sesión');
			}
		} else {
			panel.setToNone();
		}
	}
</script>

<footer on:click={onClick}>
	<FooterLink href="/" page={$page.url.pathname}>
		<HomeIcon />
	</FooterLink>
	<FooterLink href="/trees" page={$page.url.pathname}>
		<TreesIcon />
	</FooterLink>
	<FooterBtn panel={$panel}>
		<AddIcon />
	</FooterBtn>
	<FooterLink href="/leaders" page={$page.url.pathname}>
		<LeadersIcon />
	</FooterLink>
	<FooterLink href="/resources" page={$page.url.pathname}>
		<ResourcesIcon />
	</FooterLink>
</footer>

<style>
	footer {
		position: absolute;
		display: flex;
		justify-content: space-evenly;

		height: var(--img-size);
		width: 100%;

		background-color: var(--lb);

		bottom: 0;
	}
	footer :global(svg) {
		width: var(--img-size);
	}
</style>
