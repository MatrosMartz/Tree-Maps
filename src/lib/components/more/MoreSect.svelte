<script lang="ts">  
    export let active: boolean, animation: boolean;

    import { page } from '$app/stores';
</script>

<section
    class="panel-sect right"
    class:active
    class:animation>
    <h5>paginas aledañas xd</h5>
    {#if $page.url.pathname === '/'}
        <a href="/">home</a>
        {:else if  $page.url.pathname === '/trees'}
        <a href="/trees">arboles</a>
        <a href="/trees/explored">explorados</a>
        <a href="/trees/registered">registrados</a>
        <a href="/trees/supervised">supervisados</a>
        <a href="/trees/cared">cuidados</a>
    {:else if  $page.url.pathname === '/leaders'}
        <a href="/leaders">leaders</a>
        <a href="/leaders/my-records">mis registros</a>
        <a href="/leaders/my-medals">mis medallas</a>
    {:else if  $page.url.pathname === '/resources'}
        <a href="/resources">recursos</a>
        <a href="/resources/about">sobre nosotros</a>
        <a href="/resources/api">API</a>
        <a href="/resources/doc">doumentacion</a>
    {:else}
        N / A
    {/if}
</section>
