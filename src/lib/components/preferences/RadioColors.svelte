<script lang="ts">
	import { Color } from '../../types/preferences';
	import preferences, { set_color } from '../../stores/preferences';

	let currentColor: Color = $preferences.color;
	let colors = [Color.g, Color.o, Color.r, Color.b];

	function onClick() {
		set_color(currentColor);
	}
</script>

<fieldset>
	<legend>Esquema de colores</legend>
	{#each colors as id}
		<label>
			<p>{id}</p>
			<input
				type="radio"
				name="color"
				class="filter-transition"
				{id}
				bind:group={currentColor}
				value={id}
				on:change={onClick}
			/>
		</label>
	{/each}
</fieldset>

<style>
	fieldset {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		width: 100%;
	}
	label {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 3.5em;
	}
	input {
		appearance: none;
		position: relative;
		box-sizing: border-box;

		margin-block: 0.2em;

		width: var(--img-size);
		height: var(--img-size);

		border-radius: 10px;
		box-shadow: 0 0 2px transparent;
	}
	:global(#app.animation) input {
		transition: filter 200ms ease-in-out, box-shadow 200ms ease-in-out;
	}
	input::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;

		width: calc(1rem * 2);
		height: calc(1rem * 2);

		background-color: currentColor;

		border-radius: 4px;
		transform: translate(-50%, -50%);
		filter: opacity(0);
	}
	input:checked::after {
		filter: opacity(100%);
	}
	input#green {
		color: var(--g-wc);
		background-color: var(--g-wb);
		border: 3px solid currentColor;
	}
	input#orange {
		color: var(--o-wc);
		background-color: var(--o-wb);
		border: 3px solid currentColor;
	}
	input#red {
		color: var(--r-wc);
		background-color: var(--r-wb);
		border: 3px solid currentColor;
	}
	input#blue {
		color: var(--b-wc);
		background-color: var(--b-wb);
		border: 3px solid currentColor;
	}
	input:checked {
		box-shadow: 0 0 4px currentColor;
	}
</style>
