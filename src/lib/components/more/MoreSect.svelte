<script lang="ts">
	export let active: boolean;

	import LeadersLinks from './LeadersLinks.svelte';
	import ResourcesLinks from './ResourcesLinks.svelte';
	import TreesLinks from './TreesLinks.svelte';

	import { page } from '$app/stores';
	import { isAuth } from '../../stores/auth';
	import panel from '../../stores/panel';

	function onClick(evt: MouseEvent) {
		if (evt.target instanceof HTMLAnchorElement) {
			panel.setToNone();
		}
	}
</script>

<section class="panel-sect right" class:active on:click={onClick}>
	<h5 class="sect-h5">paginas aledañas xd</h5>
	{#if $page.url.pathname === '/'}
		<a href="/">home</a>
	{:else if $page.url.pathname.startsWith('/trees')}
		<TreesLinks auth={$isAuth} />
	{:else if $page.url.pathname.startsWith('/leaders')}
		<LeadersLinks auth={$isAuth} />
	{:else if $page.url.pathname.startsWith('/resources')}
		<ResourcesLinks />
	{:else}
		N / A
	{/if}
</section>

<style>
	section > :global(a) {
		position: relative;
		text-align: center;
		width: 100%;
		height: 1.75em;
	}
	section > :global(a):not(:last-child)::after {
		content: '';
		position: absolute;
		bottom: -20%;
		left: 0;
		right: 0;

		margin-inline: auto;

		border-radius: 2px;

		height: 3px;
		width: 85%;

		background-color: var(--sb);
	}
</style>
