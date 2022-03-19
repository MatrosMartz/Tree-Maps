<script lang="ts">
    import panel from '../../stores/panel';

    function onClick() {
        if ($panel === 'add') {
            panel.setToNone();
        } else {
            panel.setToAdd();
        }
    }
    $: selected = $panel === 'add' ? 'selected' : '';
</script>

<button class="head-tag" class:selected on:click={onClick}>
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
        transition: filter 200ms;
    }
    .selected {
        filter: var(--p-fl);
    }
    .selected > :global(svg) {
        transform: rotate(135deg);
    }
</style>