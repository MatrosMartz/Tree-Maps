<script>
    import { goto } from '$app/navigation';
    import { isAuth } from '$lib/stores/auth';
    import { onMount } from 'svelte';

    onMount(() => {
        if (!($isAuth)) {
            goto('/trees');
        }
    });
</script>

<main>
    <h1>estas en explored</h1>
    <p>hola</p>
</main>