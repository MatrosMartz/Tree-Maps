<script>
	import { onMount } from 'svelte';

	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import ProfileSect from '$lib/components/profile/ProfileSect.svelte';
	import PreferencesSect from '$lib/components/preferences/PreferencesSect.svelte';
	import MoreSect from '$lib/components/more/MoreSect.svelte';
	import AddSect from '$lib/components/add/AddSect.svelte';
	import Alert from '$lib/components/alert/Alert.svelte';

	import preferences from '$lib/stores/preferences';
	import panel from '$lib/stores/panel';
	import { createClient } from '$lib/stores/auth';

	onMount(createClient);
</script>

<div
	id="app"
	class="{$preferences.theme} {$preferences.color}"
	class:animation={$preferences.animation}
>
	<Header />
	<slot />

	<ProfileSect active={$panel === 'prof'} />
	<PreferencesSect active={$panel === 'opts'} />
	<MoreSect active={$panel === 'more'} />

	<AddSect />

	<Footer />

	<Alert />
</div>
