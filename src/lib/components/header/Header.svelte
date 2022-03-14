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
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        width: 100%;
        padding: .5em;
    }
    section {
        display: flex;
        align-items: center;
        gap: 1em;
    }
</style>