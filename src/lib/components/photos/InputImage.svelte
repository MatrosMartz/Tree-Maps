<script lang="ts">
	import AddImageIcon from '../icons/AddImageIcon.svelte';
	import { filterImages } from '../../utilities/imagesFiles';
	import filesStore from '../../stores/images';

	let inputFileThis: HTMLInputElement;
	let draging = false;

	function onInput(evt: Event) {
		evt.preventDefault();
		const files = filterImages(Array.from(inputFileThis.files));
		filesStore.add(files.allowedFiles);
		console.log(files);
	}
	function onDragLeave(evt: DragEvent) {
		evt.preventDefault();
		draging = false;
	}
	function onDrag(evt: DragEvent) {
		evt.preventDefault();
		draging = true;
	}
	function onDrop(evt: DragEvent) {
		evt.preventDefault();
		const files = filterImages(Array.from(evt.dataTransfer.files));
		filesStore.add(files.allowedFiles);
		console.log(files);
		draging = false;
	}
	function onClick() {
		inputFileThis.click();
	}
</script>

<div>
	<input bind:this={inputFileThis} type="file" id="img" multiple on:input={onInput} />
	<label
		for="img"
		class:draging
		on:drag={onDrag}
		on:dragover={onDrag}
		on:dragleave={onDragLeave}
		on:drop={onDrop}
	>
		<p>Arrasta fotos:</p>
		<AddImageIcon />
		<button type="button" on:click={onClick}>Seleciona fotos</button>
	</label>
</div>

<style>
	div {
		position: relative;
	}
	input {
		display: none;
	}
	label {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75em;
		z-index: 100;

		width: 100%;
		height: 12em;
		box-sizing: border-box;

		border-radius: 7px;
		border: 3px dotted var(--rs);
		background-color: var(--lb);
		filter: brightness(100%);

		transition: filter 200ms ease-in-out;
	}
	button {
		background-color: var(--bd);
		color: var(--lb);
		border-radius: 7px;
	}
	.draging {
		filter: var(--p-fl);
	}
</style>
