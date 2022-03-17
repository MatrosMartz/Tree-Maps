<script lang="ts">
    let group: string;
    let colors: string[] = [
        'green',
        'orange',
        'red',
        'blue',
    ];
</script>

<fieldset>
    <legend>Esquema de colores</legend>
    {#each colors as id}
    <label>
        <p>{id}</p>
        <input type="radio" name="color" {id} bind:group>
    </label>
    {/each}
</fieldset>

<style>
    fieldset {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 4em;
    }
    input {
        appearance: none;
        position: relative;
        box-sizing: border-box;

        margin-block: .2em;

        width: var(--img-size);
        height: var(--img-size);

        border-radius: 7px;
        box-shadow: 0 0 4px transparent;

        transition: filter 200ms, box-shadow 200ms, border-radius 200ms ease-in-out;
    }
    input::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;

        width: calc(1rem * 2.2);
        height: calc(1rem * 2.2);

        background-color: currentColor;

        border-radius: 4px;
        transform: translate(-50%,-50%);
    }
    input#green {
        color: var(--g-sh);
        background-color: var(--g-lb);
        border: 3px solid currentColor;
    }
    input#orange {
        color: var(--o-sh);
        background-color: var(--o-lb);
        border: 3px solid currentColor;
    }
    input#red {
        color: var(--r-sh);
        background-color: var(--r-lb);
        border: 3px solid currentColor;
    }
    input#blue {
        color: var(--b-sh);
        background-color: var(--b-lb);
        border: 3px solid currentColor;
    }
    input:checked {
        border-radius: 10px;
        filter: var(--p-fl);
        box-shadow: 0 0 4px currentColor;
    }
</style>