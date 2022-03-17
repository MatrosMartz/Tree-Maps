<script>
    import store from '../../stores/state';
    import AnimationIcon from '../icons/AnimationIcon.svelte';
    import DarkmodeIcon from '../icons/DarkmodeIcon.svelte';
    import LightmodeIcon from '../icons/LightmodeIcon.svelte';
    import NonAnimationIcon from '../icons/NonAnimationIcon.svelte';
    import RadioColors from './RadioColors.svelte';
    import SwitchBtn from './SwitchBtn.svelte';

    $: active = $store === 'opts' ? 'active' : '';
</script>

<section class="state-sect left {active}">
    <h5>Opciones</h5>
    <SwitchBtn id="theme">
        <legend slot="name">tema</legend>
        <DarkmodeIcon slot="first"/>
        <LightmodeIcon slot="last"/>
    </SwitchBtn>

    <SwitchBtn id="animations">
        <legend slot="name">animaciones</legend>
        <AnimationIcon slot="first"/>
        <NonAnimationIcon slot="last"/>
    </SwitchBtn>

    <RadioColors />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        gap: 1em;
    }
</style>
