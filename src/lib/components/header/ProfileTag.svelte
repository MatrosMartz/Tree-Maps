<script>
    import ProfileIcon from '../icons/Profile.svelte';
</script>

<section class="head-tag">
    <ProfileIcon />
    <button class="head-tag">inicar sesión</button>
</section>

<style>
    section {
        display: flex;
        border-radius: 7px;
        
        overflow: hidden;

        max-width: 40vw;

        height: 48px;
    }
    h5, p {
        width: calc(50vw + .2em - 48px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    button {
        box-shadow: none;
        font-size: 14px;
    }
</style>