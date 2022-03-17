<script lang="ts">
    export let href: string, page: string;
    $: selected = href === page
</script>

<a {href} class:selected>
    <slot />
</a>

<style>
    a {
        background-color: var(--lb);
        color: inherit;
        filter: none;

        transition: filter 200ms;
    }
    .selected {
        filter: var(--p-fl);
    }
    a > :global(svg) {
        width: var(--img-size);
    }
</style>