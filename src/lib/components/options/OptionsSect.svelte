<script>
    import store from '../../stores/state';
    import AnimationIcon from '../icons/AnimationIcon.svelte';
    import DarkmodeIcon from '../icons/DarkmodeIcon.svelte';
    import LightmodeIcon from '../icons/LightmodeIcon.svelte';
    import NonAnimationIcon from '../icons/NonAnimationIcon.svelte';
    import SwitchBtn from './SwitchBtn.svelte';

    $: active = $store === 'opts' ? 'active' : '';
</script>

<section class="state-sect left {active}">
    <SwitchBtn id="theme">
        <h5 slot="name">tema</h5>
        <DarkmodeIcon slot="first"/>
        <LightmodeIcon slot="last"/>
    </SwitchBtn>
    <SwitchBtn id="animations">
        <h5 slot="name">animaciones</h5>
        <AnimationIcon slot="first"/>
        <NonAnimationIcon slot="last"/>
    </SwitchBtn>
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
