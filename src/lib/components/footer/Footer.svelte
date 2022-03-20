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

    function onClick(evt: MouseEvent) {
        if ((evt.target instanceof HTMLButtonElement) && ($panel !== 'add')) {
            panel.setToAdd();
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
        position: fixed;
		display: flex;
		justify-content: space-evenly;
        
		height: var(--img-size);
		width: 100vw;
        
		background-color: var(--lb);
        
		bottom: 0;
	}
    footer :global(svg) {
        width: var(--img-size);
    }
</style>
