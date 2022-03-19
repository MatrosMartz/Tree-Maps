<script>
    import panel from '../../stores/panel';
    import options from '../../stores/options';

    $: active = $panel === 'more' ? 'active' : '';
</script>

<section
    class="panel-sect right"
    class:active
    class:animation={$options.animation}>
    más
</section>
