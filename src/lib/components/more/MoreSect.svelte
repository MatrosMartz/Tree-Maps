<script>
    import store from '../../stores/state';

    $: active = $store === 'more' ? 'active' : '';
</script>

<section class="state-sect right {active}">
    más
</section>
