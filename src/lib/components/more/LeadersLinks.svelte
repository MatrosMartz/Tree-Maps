<script lang="ts">
	export let auth: boolean;
</script>

<a href="/leaders">lideres</a>
{#if auth}
	<a href="/leaders/my-records">mis registros</a>
	<a href="/leaders/my-medals">mis medallas</a>
{/if}
