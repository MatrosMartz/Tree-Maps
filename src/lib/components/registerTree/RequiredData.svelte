<script>
    import TreeMap from './TreeMap.svelte';

	import { browser } from '$app/env';
</script>

<fieldset>
    <legend>Datos Obligatorios</legend>
    <select name="species" id="species">
        <option value="null">--- Selecciona una especie ---</option>
        <option value="abeto">Abeto</option>
        <option value="roble">Roble</option>
    </select>
    {#if browser && window?.navigator?.geolocation}
        <TreeMap />
    {/if}
</fieldset>