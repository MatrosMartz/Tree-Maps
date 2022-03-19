<script>
    import panel from '../../stores/panel';

    $: active = $panel === 'more' ? 'active' : '';
</script>

<section class="panel-sect right" class:active>
    más
</section>
