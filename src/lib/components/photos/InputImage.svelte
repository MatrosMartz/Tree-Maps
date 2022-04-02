<script lang="ts">
    import AddImageIcon from "../icons/AddImageIcon.svelte";

	let inputFileThis: HTMLInputElement;

    function onInput(evt: Event) {
        const files = inputFileThis.files;
        const photo = URL.createObjectURL(files[0]);
        console.log(files, inputFileThis.value);
    }
</script>

<div>
	<input type="file" id="img" bind:this={inputFileThis} on:input={onInput} multiple />
    <label for="img">
        <p>Arrasta fotos: </p>
        <AddImageIcon />
        <button type="button">Seleciona fotos</button>
    </label>
</div>

<style>
    div {
        position: relative;
    }
    input {
        position: absolute;
        top: 0;
        left: 0;

        opacity: 0;

        margin: 0;

        width: 100%;
        height: 100%;
    }
    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .75em;

        width: 100%;
        height: 12em;
        box-sizing: border-box;

        border-radius: 7px;
        border: 3px dotted var(--rs);
    }
    button {
        background-color: var(--bd);
        color: var(--lb);
        border-radius: 7px;
    }
</style>
