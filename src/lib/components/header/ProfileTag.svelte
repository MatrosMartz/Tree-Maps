<script>
    import ProfileIcon from '../icons/ProfileIcon.svelte';

    import panel from '../../stores/panel';
    import options from '../../stores/options';

    function onClick() {
        if ($panel === 'prof') {
            panel.setToNone();
        } else {
            panel.setToProf();
        }
    }

    $: selected = $panel === 'prof' ? 'selected' : '';
</script>

<button
    class="head-tag filter-transition"
    class:selected
    class:animation={$options.animation}
    on:click={onClick}>
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
    }
    .selected {
        filter: var(--p-fl);
    }
    button > :global(svg) {
        width: var(--img-size);
    }
</style>