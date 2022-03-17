<script lang="ts">
    export let stateControler: string;

    import state from '../../stores/state';
    $: stateCapitalize = stateControler[0].toUpperCase() + stateControler.slice(1);

    function onClick() {
        if ($state === stateControler) {
            state.SetToNone();
        } else {
            state[`SetTo${stateCapitalize}`]();
        }
    }
    $: selected = $state === stateControler ? 'selected' : '';
</script>


<button class="head-tag {selected}" on:click={onClick}>
    <slot />
</button>

<style>
    button {
        border-radius: 7px;

        overflow: hidden;

        padding: 0;
        height: var(--img-size);

        transform: rotate(0);
        filter: none;
        transition: filter 200ms;
    }
    .selected {
        filter: var(--p-fl);
    }
    .selected > :global(svg) {
        transform: rotate(90deg);
    }
</style>