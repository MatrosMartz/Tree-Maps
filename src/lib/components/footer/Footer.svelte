<script>
    import HomeIcon from '../icons/Home.svelte';
    import TreesIcon from '../icons/Trees.svelte';
    import AddIcon from '../icons/Add.svelte';
    import LeadersIcon from '../icons/Leaders.svelte';
    import UtilitiesIcon from '../icons/Utilities.svelte';
</script>

<footer>
    <HomeIcon />
    <TreesIcon />
    <AddIcon />
    <LeadersIcon />
    <UtilitiesIcon />
</footer>

<style>
    :global(svg) {
        width: 48px;
    }
    footer {
        position: fixed;
        display: flex;
        justify-content: space-evenly;

        height: 48px;
        width: 100vw;

        background-color: var(--h-bg);

        bottom: 0;
    }
</style>