<script lang="ts">
    export let href: string, page: string;

    import options from '../../stores/options';

    $: selected = href === page;
</script>

<a
    {href}
    class="filter-transition"
    class:selected
    class:animation={$options.animation}>
    <slot />
</a>

<style>
    a {
        background-color: var(--lb);
        color: inherit;
        filter: none;
    }
    .selected {
        filter: var(--p-fl);
    }
    a > :global(svg) {
        width: var(--img-size);
    }
</style>