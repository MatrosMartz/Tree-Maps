<script lang="ts">
    export let auth: boolean;
</script>

<a href="/trees">arboles</a>
{#if auth}
    <a href="/trees/explored">explorados</a>
    <a href="/trees/registered">registrados</a>
    <a href="/trees/supervised">supervisados</a>
    <a href="/trees/cared">cuidados</a>
{/if}
