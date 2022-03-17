<script lang="ts">
    export let id: string;
    let checked: boolean;
</script>

<fieldset>
    <slot name="name" />
    <input type="checkbox" name={id} {id} bind:checked />
    <label for={id}>
        <slot name="first"/>
        <slot name="last" />
    </label>
</fieldset>

<style>
    fieldset {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    input {
        position: absolute;
        top: 50%;
        left: 50%;
    }
    label {
        display: flex;
        position: relative;

        overflow: hidden;
        user-select: none;
        cursor: pointer;

        width: calc(var(--img-size) * 2);
        
        border-radius: 7px;

        background-color: var(--sb);
    }
    label::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        
        width: var(--img-size);
        height: var(--img-size);
        
        border-radius: 7px;
        
        color: var(--sh);
        background-color: var(--sh);
        box-shadow: 0 0 15px currentColor;

        transform: translateX(0);
        transition: transform 200ms ease-in-out;
    }
    input:checked + label::after {
        transform: translateX(100%);
    }
    label > :global(svg) {
        z-index: 10;
    }
</style>