<script lang="ts">
	export let id: string, checked: boolean;
</script>

<section>
	<slot name="name" />
	<input type="checkbox" name={id} {id} bind:checked />
	<label for={id} class="filter-transition" />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}
	input {
		display: none;
	}
	label {
		display: flex;
		position: relative;
		gap: 3px;

		overflow: hidden;
		user-select: none;
		cursor: pointer;

		width: calc(var(--img-size) * 2);
		height: var(--img-size);

		border-radius: 10px;
		border: 3px solid var(--al);

		background-color: transparent;
	}
	label::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;

		width: 3rem;
		height: 3rem;

		border-radius: 7px;

		background-color: var(--at);

		transform: translate(-97%, -50%) scale(75%);
	}
	:global(#app.animation) label::after {
		transition: transform 200ms ease-in-out, background 100ms;
	}
	input:checked + label::after {
		background-color: var(--sb);

		transform: translate(-3%, -50%) scale(75%);
	}
</style>
