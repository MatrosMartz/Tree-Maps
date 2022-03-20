<script lang="ts">
    export let panelControler: string;

    import panel from '../../stores/panel';
    import options from '../../stores/options';

    $: panelCapitalize = panelControler[0].toUpperCase() + panelControler.slice(1);

    function onClick() {
        if ($panel === panelControler) {
            panel.setToNone();
        } else {
            panel[`setTo${panelCapitalize}`]();
        }
    }
    $: selected = $panel === panelControler;
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
        border-radius: 7px;

        overflow: hidden;

        padding: 0;
        height: var(--img-size);

        transform: rotate(0);
        filter: none;
    }
    .selected {
        filter: var(--p-fl);
    }
    .selected > :global(svg) {
        transform: rotate(90deg);
    }
</style>