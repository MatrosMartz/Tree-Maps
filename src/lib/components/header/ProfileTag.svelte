<script>
    import ProfileIcon from '../icons/Profile.svelte';
</script>

<section class="head-tag">
    <ProfileIcon />
    <span>
        <h5>Sin sesión</h5>
        <button class="head-tag">inicar sesión</button>
    </span>
</section>

<style>
    section {
        display: flex;
        border-radius: 7px;

        max-width: 50vw;

        height: 48px;

        padding: .4em .2em;
    }
    h5, p {
        width: calc(50vw + .4em - 48px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    p, button {
        font-size: 10px;
    }
    button {
        box-shadow: none;
        filter: var(--s-fl)
    }
</style>