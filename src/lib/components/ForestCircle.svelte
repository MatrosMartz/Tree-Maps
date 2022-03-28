<script lang="ts">
	import TreesIcon from './icons/TreesIcon.svelte';
	let a = [
		1,  2,  3,  4,
		5,  6,  7,  8,
		9,  10, 11, 12,
		13, 14, 15, 16
	];
</script>

<div class="container">
	{#each a as A}
		<div class="trees"><TreesIcon /></div>
	{/each}
</div>

<style>
	.container {
		position: relative;

		width: 70vmin;
		height: 70vmin;
		box-sizing: border-box;
		overflow: hidden;

		border-radius: 50%;
        margin: 1rem auto;

		border: 6px solid var(--sh);
		background-color: var(--nb);
	}
	.trees {
		position: absolute;
		width: 45%;
		height: 45%;
		top: -5%;
		transform: translateX(27%);
		filter: brightness(40%);
	}
	.trees:nth-child(4n + 1) {
		left: -30%;
	}
	.trees:nth-child(4n + 2) {
		left: 0%;
	}
	.trees:nth-child(4n + 3) {
		left: 30%;
	}
	.trees:nth-child(4n) {
		left: 60%;
	}
	.trees:nth-child(n+5) {
		top: 16%;
		transform: translateX(54%);
		filter: brightness(60%);
	}
	.trees:nth-child(n+9) {
		top: 39%;
		transform: translateX(27%);
		filter: brightness(80%);
	}
	.trees:nth-child(n+13) {
		top: 60%;
		transform: translateX(54%);
		filter: brightness(100%);
	}
	.trees > :global(svg) {
		width: 100%;
	}
</style>
