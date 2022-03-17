<script>
    import store from '../../stores/state';

    $: active = $store === 'prof' ? 'active' : '';
</script>

<section class="state-sect left {active}">
    perfil
</section>
