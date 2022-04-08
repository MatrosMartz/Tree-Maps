<div class="alert-background">
	<section class="alert border-radius">
		<h5>cookies</h5>
		<span>
			<p>las cookies este sitio web se usan para personalizar el contenido</p>
		</span>
		<section class="buttons">
			<button class="primary-btn"> permitir la selección </button>
			<button class="primary-btn"> denegar todas </button>
			<button class="primary-btn"> aceptar todas </button>
		</section>
	</section>
</div>

<style>
	.alert-background {
		position: absolute;
		top: 0;
		left: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100vh;

		backdrop-filter: grayscale(0.75) blur(5px);
	}
	.alert {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 90vw;
		height: 80vh;

		background-color: var(--t2);
		color: var(--bd);
	}
	h5 {
		color: var(--lb);
	}
	p {
		color: inherit;
	}
	.buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: stretch;
		gap: 0.5em;
		padding-inline: 0.5em;
	}
	.buttons button {
		font-size: calc(1rem * 0.8);
		flex-grow: 1;
	}
	.buttons :first-child {
		width: 100%;
	}
</style>
