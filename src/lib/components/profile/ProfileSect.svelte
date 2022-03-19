<script>
    import panel from '../../stores/panel';
    import options from '../../stores/options';

    $: active = $panel === 'prof' ? 'active' : '';
</script>

<section
    class="panel-sect left"
    class:active
    class:animation={$options.animation}>
    perfil
</section>
