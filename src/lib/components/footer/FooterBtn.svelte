<script lang="ts">
    import state from '../../stores/state';

    function onClick() {
        if ($state === 'add') {
            state.setToNone();
        } else {
            state.setToAdd();
        }
    }
    $: selected = $state === 'add' ? 'selected' : '';
</script>

<button class="head-tag {selected}" on:click={onClick}>
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