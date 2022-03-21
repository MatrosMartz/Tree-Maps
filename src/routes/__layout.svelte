<script>
	import { onMount } from 'svelte';

	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import ProfileSect from '$lib/components/profile/ProfileSect.svelte';
	import OptionsSect from '$lib/components/options/OptionsSect.svelte';
	import MoreSect from '$lib/components/more/MoreSect.svelte';
	import AddSect from '$lib/components/add/AddSect.svelte';

	import options from '$lib/stores/options';
	import panel from '$lib/stores/panel';
	import { createClient } from '$lib/stores/auth';

	import { browser } from '$app/env';

	onMount(createClient);

	$: {
		if (browser) {
			const root = document.documentElement;
			root.classList.remove('darkmode', 'lightmode');
			root.classList.add($options.theme);
			root.classList.remove('green', 'orange', 'red', 'blue');
			root.classList.add($options.color);
		}
	}
</script>

<Header />

<slot />

<ProfileSect active={$panel === 'prof'} animation={$options.animation} />
<OptionsSect active={$panel === 'opts'} animation={$options.animation} />
<MoreSect active={$panel === 'more'} animation={$options.animation} />
<AddSect />

<Footer />
