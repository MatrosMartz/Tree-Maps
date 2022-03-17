<script lang="ts">
    import { page } from '$app/stores';

    import FooterLink from './FooterLink.svelte';
    import FooterBtn from './FooterBtn.svelte';

	import HomeIcon from '../icons/HomeIcon.svelte';
	import TreesIcon from '../icons/TreesIcon.svelte';
	import AddIcon from '../icons/AddIcon.svelte';
	import LeadersIcon from '../icons/LeadersIcon.svelte';
	import UtilitiesIcon from '../icons/UtilitiesIcon.svelte';
</script>

<footer>
    <FooterLink href="/" page={$page.url.pathname}>
        <HomeIcon />
    </FooterLink>
    <FooterLink href="/trees" page={$page.url.pathname}>
        <TreesIcon />
    </FooterLink>
    <FooterBtn>
        <AddIcon />
    </FooterBtn>
    <FooterLink href="/leaders" page={$page.url.pathname}>
        <LeadersIcon />
    </FooterLink>
    <FooterLink href="/utilities" page={$page.url.pathname}>
        <UtilitiesIcon />
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
