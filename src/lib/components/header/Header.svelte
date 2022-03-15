<script>
    import ProfileTag from './ProfileTag.svelte';
    import OptsBtn from './OptsBtn.svelte';
    import MoreBtn from './MoreBtn.svelte';
</script>

<header>
    <ProfileTag />
    <section>
        <OptsBtn />
        <MoreBtn />
    </section>
</header>

<style>
    header {
        position: fixed;

        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        width: 100%;
        padding: .7em;
        color: var(--h-fg);
    }
    section {
        display: flex;
        align-items: center;
        gap: .7em;
    }
</style>