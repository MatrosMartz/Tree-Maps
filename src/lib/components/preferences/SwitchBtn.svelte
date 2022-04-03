<script lang="ts">
	export let id: string;

	import preferences, * as setter from '../../stores/preferences';

	let checked: boolean;
	if (id === 'theme') checked = $preferences.theme === 'lightmode';
	else if (id === 'animation') checked = $preferences.animation;

	function onInput() {
		setter[`set_${id}`](checked);
	}
</script>

<fieldset>
	<slot name="name" />
	<input type="checkbox" name={id} {id} bind:checked on:input={onInput} />
	<label for={id} class="filter-transition" class:animation={$preferences.animation}>
		<slot name="first" />
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
		gap: 3px;

		overflow: hidden;
		user-select: none;
		cursor: pointer;

		width: calc((var(--img-size) * 2) + 3px);

		border-radius: 12px;
		border: 3px solid var(--sh);

		background-color: var(--lb);
	}
	label::before {
		content: '';
		position: absolute;

		border-radius: 2px;

		top: 50%;
		left: 50%;

		width: 3px;
		height: calc(1rem * 2.2);

		background-color: var(--sh);

		transform: translate(-50%, -50%);
	}
	label::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;

		width: 3rem;
		height: 3rem;

		border-radius: 7px;

		color: var(--sh);
		background-color: var(--sh);
		box-shadow: 0 0 2px var(--sh);

		transform: translate(-100%, -50%) scale(72%);
	}
	label.animation::after {
		transition: transform 200ms ease-in-out;
	}
	input:checked + label::after {
		transform: translate(0%, -50%) scale(72%);
	}
	label > :global(svg) {
		z-index: 10;
	}
</style>
