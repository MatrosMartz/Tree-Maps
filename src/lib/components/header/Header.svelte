<script>
	import MoreIcon from '../icons/MoreIcon.svelte';
	import OptionsIcon from '../icons/OptionsIcon.svelte';
	import HeaderBtn from './HeaderBtn.svelte';
	import ProfileTag from './ProfileTag.svelte';
</script>

<header>
	<ProfileTag />
	<section>
		<HeaderBtn panelControler="opts">
			<OptionsIcon />
		</HeaderBtn>
		<HeaderBtn panelControler="more">
			<MoreIcon />
		</HeaderBtn>
	</section>
</header>

<style>
	header {
		position: sticky;
		top: 0;

		display: flex;
		box-sizing: border-box;
		justify-content: space-between;
		width: 100%;
		padding: 0.5rem 0.9rem;
		color: var(--t1);
		background-color: var(--bb);
		box-shadow: 0 -14px 21px var(--rs);

		z-index: 10;
	}
	section {
		display: flex;
		align-items: center;
		gap: 0.9rem;
	}
</style>
