<script lang="ts">
    export let href: string, page: string;
    $: selected = href === page ? 'selected' : '';
</script>

<a {href} class={selected}>
    <slot />
</a>

<style>
    a {
        background-color: var(--h-bg);
        color: inherit;
        filter: none;

        transition: filter 200ms;
    }
    .selected {
        filter: var(--p-fl);
    }
    a > :global(svg) {
        width: 48px;
    }
</style>