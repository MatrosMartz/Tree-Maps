<script>
    import ProfileIcon from '../icons/Profile.svelte';
</script>

<section>
    <ProfileIcon />
    <span>
        <h5>Lorem, ipsum dolor.</h5>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
    </span>
</section>

<style>
    :global(svg) {
        width: 48px;
    }
    section {
        display: flex;
    }
</style>