<script lang="ts">
	import { getSpeciesNames } from '../../stores/api';

	const { species, fetchSpecies, searchSpecies } = getSpeciesNames();

	let searchValue = '';
	let speciesGroup = '';
	let activeSelect = false;

	fetchSpecies();

	$: searchSpecies(searchValue);

	function onClickSpecie() {
		activeSelect = true;
	}
	function onClickOption() {
		activeSelect = false;
	}
</script>

<div class="search-contain">
	<div on:click={onClickSpecie} class="selected-specie border-radius">{speciesGroup}</div>

	<section class="select border-radius" class:active={activeSelect}>
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
					type="radio"
					name="species"
					value={cientificName}
					bind:group={speciesGroup}
				/>
				<h6>{name}</h6>
				/
				<p>{cientificName}</p>
			</label>
		{/each}
		<div class="label-contain">
			<a href="add/specie" class="link border-radius hoverable">
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
		margin-bottom: 0.3em;
	}
	.select,
	.selected-specie {
		background-color: var(--bb);
		width: 100%;
	}
	.select {
		position: absolute;
		display: none;
		top: 3.2em;
		max-height: 15.5em;
		overflow-y: scroll;
		font-size: 14px;
	}
	.select.active {
		display: contents;
	}
	.select h6 {
		font-size: 14px;
	}
	.label-contain,
	.option,
	.selected-specie {
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
		text-align: start;
	}
	.search-specie,
	.link {
		box-sizing: border-box;
		margin: 0;
		height: 2em;
		width: 100%;
		background-color: var(--bb-2);
		border: 3px solid var(--nb);
	}
	.link {
		background-color: var(--sh);
		border: 3px solid var(--sh);
	}
	.link:hover {
		text-decoration: none;
	}
	.link h6 {
		color: var(--bb);
	}
	.hoverable:hover {
		filter: var(--p-fl);
	}
	.option.selected {
		filter: var(--p-fl);
	}
	p {
		font-style: italic;
	}
</style>
