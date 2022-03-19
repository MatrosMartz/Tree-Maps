<script>
    import MoreIcon from '../icons/MoreIcon.svelte';
    import OptionsIcon from '../icons/OptionsIcon.svelte';
    import HeaderBtn from './HeaderBtn.svelte';
    import ProfileTag from './ProfileTag.svelte';
</script>

<header>
    <ProfileTag />
    <section>
        <HeaderBtn panelControler="opts">
            <OptionsIcon />
        </HeaderBtn>
        <HeaderBtn panelControler="more">
            <MoreIcon />
        </HeaderBtn>
    </section>
</header>

<style>
    header {
        position: sticky;

        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        width: 100%;
        padding: .9rem;
        color: var(--t1);
    }
    section {
        display: flex;
        align-items: center;
        gap: .9rem;
    }
</style>