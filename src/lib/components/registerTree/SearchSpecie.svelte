<script lang="ts">
	import { getSpeciesNames } from '../../stores/api';

	const { species, fetchSpecies, searchSpecies } = getSpeciesNames();

	let searchValue = '';
	let speciesGroup = '';
	let activeSelect = false;

	fetchSpecies();

	$: searchSpecies(searchValue);

	function onClickSpecie() {
		activeSelect = !activeSelect;
	}
	function onClickOption() {
		activeSelect = false;
	}
</script>

<div class:active={activeSelect} class="search-contain">
	<div class="select-contain" on:click={onClickSpecie}>
		<p class="start">Especie:</p>
		<div class="selected-specie border-radius">{speciesGroup}</div>
	</div>

	<section class="select border-radius">
		<label class="label-contain">
			<input
				type="search"
				name="search-specie"
				id="search-specie"
				class="search-specie border-radius"
				bind:value={searchValue}
			/>
		</label>
		{#each $species as { cientificName, name, visible }}
			<label
				on:click={onClickOption}
				class="option hoverable"
				class:visible
				class:selected={cientificName === speciesGroup}
			>
				<input
					required
					type="radio"
					name="species"
					value={cientificName}
					bind:group={speciesGroup}
				/>
				<h6 class="start">{name}</h6>
				/
				<p class="start">{cientificName}</p>
			</label>
		{/each}
		<div class="label-contain">
			<a href="add/specie" class="link border-radius hoverable quaternary-btn">
				<h6>agrega una nueva especie</h6>
			</a>
		</div>
	</section>
</div>

<style>
	input[type='radio'] {
		display: none;
	}
	.search-contain {
		position: relative;
		z-index: 4;
	}
	.selected-specie {
		box-sizing: border-box;
		border: 3px solid var(--lb);
	}
	.select,
	.selected-specie {
		background-color: var(--bb);
		width: 100%;
	}
	.select {
		position: absolute;
		display: none;
		top: 4.7em;
		max-height: 15.5em;
		overflow-y: scroll;
		font-size: 14px;
	}
	.active .select {
		display: block;
	}
	.select h6 {
		font-size: 14px;
	}
	.label-contain,
	.option,
	.selected-specie {
		position: relative;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: start;
		height: 2.5em;
		padding-inline: 0.5em;
		gap: 0.5em;
		background-color: var(--bb);
		cursor: pointer;
		z-index: 10;
	}
	.selected-specie::after {
		content: '';
		position: absolute;
		background-color: var(--lb);
		right: 0.5em;
		width: 1.5em;
		height: 2em;
		clip-path: polygon(10% 50%, 85% 0%, 85% 85%);
		transform: rotate(0);
		transition: transform 200ms;
	}
	.active .selected-specie::after {
		transform: rotate(-90deg);
	}

	.label-contain {
		position: sticky;
		height: 3em;
		cursor: auto;
		top: 0;
	}
	.option {
		display: none;
		z-index: 0;
	}
	.option.visible {
		display: flex;
	}
	.option h6,
	.option p {
		display: contents;
	}
	.search-specie {
		background-color: var(--bb-2);
		border: 3px solid var(--nb);
	}
	.search-specie,
	.link {
		box-sizing: border-box;
		margin: 0;
		height: 2em;
		width: 100%;
	}
	.link:hover {
		text-decoration: none;
	}
	.link h6 {
		color: inherit;
	}
	.hoverable:hover {
		filter: var(--p-fl);
	}
	.option.selected {
		filter: var(--p-fl);
	}
	.option p {
		font-style: italic;
	}
</style>
