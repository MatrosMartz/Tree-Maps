<script lang="ts">
    export let active: boolean, animation: boolean;

    import {
        isAuth,
        user,
        login,
        logout,
    } from '../../stores/auth';
</script>

<section
    class="panel-sect left"
    class:active
    class:animation>
    {#if $isAuth}
        <h5 class="sect-h5">{$user.name}</h5>
        <span>{$user.email}</span>
        <button on:click={logout()}>salir de la sesión</button> 
    {:else}
        <h5>inicie sesión</h5>
        <button on:click={login()}>iniciar sesión</button>
    {/if}
</section>

<style>
    button {
        border-radius: 7px;

        background-color: var(--at);
        color: var(--nb);
        box-shadow: 0 0 10px var(--rs);
    }
</style>
