<script lang="ts">
    export let active: boolean, animation: boolean;

    import { onMount } from 'svelte';

    import {
        isAuth,
        user,
        createClient,
        login,
        logout,
    } from '../../stores/auth';

    onMount(createClient);
</script>

<section
    class="panel-sect left"
    class:active
    class:animation>
    {#if $isAuth}
        <h5>{$user.name}</h5>
        <span>{$user.email}</span>
        <button on:click={logout()}>salir de la sesión</button> 
    {:else}
        <h5>inicie sesión</h5>
        <button on:click={login()}>iniciar sesión</button>
    {/if}
</section>
