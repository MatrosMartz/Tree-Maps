<script lang="ts">
    import panel from '../../stores/panel';
    import options from '../../stores/options';

    function onClick() {
        if ($panel === 'add') {
            panel.setToNone();
        } else {
            panel.setToAdd();
        }
    }
    $: selected = $panel === 'add';
</script>

<button
    class="head-tag filter-transition"
    class:selected
    class:animation={$options.animation}
    on:click={onClick}>
    <slot />
</button>

<style>
    button {
        overflow: hidden;

        padding: 0;
        height: var(--img-size);

        box-shadow: none;
        border-radius: none;

        filter: none;
    }
    .selected {
        filter: var(--p-fl);
    }
    .selected > :global(svg) {
        transform: rotate(135deg);
    }
</style>