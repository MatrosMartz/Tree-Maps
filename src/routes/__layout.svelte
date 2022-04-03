<script>
	import { onMount } from 'svelte';

	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import ProfileSect from '$lib/components/profile/ProfileSect.svelte';
	import OptionsSect from '$lib/components/preferences/PreferencesSect.svelte';
	import MoreSect from '$lib/components/more/MoreSect.svelte';
	import AddSect from '$lib/components/add/AddSect.svelte';

	import preferences from '$lib/stores/preferences';
	import panel from '$lib/stores/panel';
	import { createClient } from '$lib/stores/auth';

	onMount(createClient);

	let animation = $preferences.animation;
</script>

<div id="app" class="{$preferences.theme} {$preferences.color}">
	<Header />
	<slot />

	<ProfileSect active={$panel === 'prof'} {animation} />
	<OptionsSect active={$panel === 'opts'} {animation} />
	<MoreSect active={$panel === 'more'} {animation} />

	<AddSect />

	<Footer />
</div>
