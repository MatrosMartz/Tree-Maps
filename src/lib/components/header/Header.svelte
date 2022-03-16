<script>
    import MoreIcon from '../icons/MoreIcon.svelte';
    import OptionsIcon from '../icons/OptionsIcon.svelte';
    import HeaderBtn from './HeaderBtn.svelte';
    import ProfileTag from './ProfileTag.svelte';
</script>

<header>
    <ProfileTag />
    <section>
        <HeaderBtn stateControler="opts">
            <OptionsIcon />
        </HeaderBtn>
        <HeaderBtn stateControler="more">
            <MoreIcon />
        </HeaderBtn>
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