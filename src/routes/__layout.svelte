<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import ProfileSect from '$lib/components/profile/ProfileSect.svelte';
	import OptionsSect from '$lib/components/options/OptionsSect.svelte';
	import MoreSect from '$lib/components/more/MoreSect.svelte';
	import AddSect from '$lib/components/add/AddSect.svelte';

	import options from '$lib/stores/options';
	import panel from '$lib/stores/panel';
	import { createClient } from '$lib/stores/auth';
	import { session } from '$app/stores';

	onMount(createClient);

</script>

<div id="app" class="{$options.theme} {$options.color}">
	<Header />
	<slot />
	
	<ProfileSect active={$panel === 'prof'} animation={$options.animation} />
	<OptionsSect active={$panel === 'opts'} animation={$options.animation} />
	<MoreSect active={$panel === 'more'} animation={$options.animation} />
	
	<AddSect />
	
	<Footer />
</div>
