<script>
    import store from '../../stores/state';

    $: active = $store === 'opts' ? 'active' : '';
</script>

<section class="state-sect left {active}">
    hola UwU
</section>