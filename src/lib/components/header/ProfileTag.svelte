<script>
    import ProfileIcon from '../icons/ProfileIcon.svelte';

    import state from '../../stores/state';

    function onClick() {
        if ($state === 'prof') {
            state.setToNone();
        } else {
            state.setToProf();
        }
    }

    $: selected = $state === 'prof' ? 'selected' : '';
</script>

<button class="head-tag {selected}" on:click={onClick}>
    <ProfileIcon />
    <p>inicar sesión</p>
</button>

<style>
    h5, p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-inline: .5em;
    }
    button {
        display: flex;
        align-items: center;

        border-radius: 7px;
        
        overflow: hidden;

        max-width: 50vw;
        padding: 0;

        height: var(--img-size);
        box-shadow: none;

        filter: none;
        transition: filter 200ms;
    }
    .selected {
        filter: var(--p-fl);
    }
    button > :global(svg) {
        width: var(--img-size);
    }
</style>