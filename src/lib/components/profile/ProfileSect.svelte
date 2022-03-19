<script>
    import panel from '../../stores/panel';

    $: active = $panel === 'prof' ? 'active' : '';
</script>

<section class="panel-sect left" class:active>
    perfil
</section>
