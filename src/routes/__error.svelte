<script>
	import { page } from '$app/stores';
	console.log($page.error);
</script>

<main>
	<h1>{$page.error.name}</h1>
	<p>{$page.error.message}</p>
</main>
