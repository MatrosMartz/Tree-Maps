<script lang="ts">
	import AnimationIcon from '../icons/AnimationIcon.svelte';
	import DarkmodeIcon from '../icons/DarkmodeIcon.svelte';
	import LightmodeIcon from '../icons/LightmodeIcon.svelte';
	import NonAnimationIcon from '../icons/NonAnimationIcon.svelte';

	import RadioColors from './RadioColors.svelte';
	import SwitchBtn from './SwitchBtn.svelte';

	export let active: boolean;
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
</section>
