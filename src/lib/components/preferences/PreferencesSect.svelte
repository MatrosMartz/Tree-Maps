<script lang="ts">
	import AnimationIcon from '../icons/AnimationIcon.svelte';
	import DarkmodeIcon from '../icons/DarkmodeIcon.svelte';
	import LightmodeIcon from '../icons/LightmodeIcon.svelte';
	import NonAnimationIcon from '../icons/NonAnimationIcon.svelte';

	import RadioColors from './RadioColors.svelte';
	import SwitchBtn from './SwitchBtn.svelte';

	import panelStore from '../../stores/panel';
	import alertStore from '../../stores/alert';

	export let active: boolean;

	function onClick() {
		panelStore.setToNone();
		alertStore.set_cookies();
	}
</script>

<section class="panel-sect right" class:active>
	<h5 class="sect-h5">Preferencias</h5>

	<SwitchBtn id="theme">
		<legend slot="name">tema</legend>
		<LightmodeIcon slot="first" />
		<DarkmodeIcon slot="last" />
	</SwitchBtn>

	<SwitchBtn id="animation">
		<legend slot="name">animaciones</legend>
		<NonAnimationIcon slot="first" />
		<AnimationIcon slot="last" />
	</SwitchBtn>

	<RadioColors />

	<button type="button" class="terciary-btn" on:click={onClick}>modificar las cookies</button>
</section>

<style>
	.terciary-btn {
		font-weight: 500;
	}
</style>
