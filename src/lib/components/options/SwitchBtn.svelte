<script lang="ts">
    export let id: string;

    import options from '../../stores/options';

    let checked: boolean;
    if (id === 'theme') checked = $options.theme === 'lightmode';
    else if (id === 'animation') checked = $options.animation;
    
    $: options[`set_${id}`](checked);
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
        box-sizing: border-box;

        overflow: hidden;
        user-select: none;
        cursor: pointer;

        width: calc(var(--img-size) * 2);
        
        border-radius: 12px;
        border: 3px solid var(--sh);

        background-color: var(--lb);
    }
    label::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 25%;
        
        width: calc(1rem * 2.2);
        height: calc(1rem * 2.2);
        
        border-radius: 7px;
        
        color: var(--sh);
        background-color: var(--sh);

        transform: translate(-50%, -50%);
        transition: transform 200ms ease-in-out;
    }
    input:checked + label::after {
        transform: translate(75%, -50%);
    }
    label > :global(svg) {
        z-index: 10;
    }
</style>