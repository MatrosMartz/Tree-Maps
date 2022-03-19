<script lang="ts">
    import AnimationIcon from '../icons/AnimationIcon.svelte';
    import DarkmodeIcon from '../icons/DarkmodeIcon.svelte';
    import LightmodeIcon from '../icons/LightmodeIcon.svelte';
    import NonAnimationIcon from '../icons/NonAnimationIcon.svelte';

    import RadioColors from './RadioColors.svelte';
    import SwitchBtn from './SwitchBtn.svelte';

    export let active: boolean, animation: boolean;
</script>

<section
    class="panel-sect right"
    class:active
    class:animation>
    <h5>Opciones</h5>
    <SwitchBtn id="theme">
        <legend slot="name">tema</legend>
        <DarkmodeIcon slot="first"/>
        <LightmodeIcon slot="last"/>
    </SwitchBtn>

    <SwitchBtn id="animation">
        <legend slot="name">animaciones</legend>
        <NonAnimationIcon slot="first"/>
        <AnimationIcon slot="last"/>
    </SwitchBtn>

    <RadioColors />
</section>
