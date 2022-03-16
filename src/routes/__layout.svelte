<script>
    import Header from '$lib/components/header/Header.svelte';
    import Footer from '$lib/components/footer/Footer.svelte';
    import ProfileSect from '$lib/components/profile/ProfileSect.svelte';
    import OptionsSect from '$lib/components/options/OptionsSect.svelte';
    import MoreSect from '$lib/components/more/MoreSect.svelte';
    import AddSect from '$lib/components/add/AddSect.svelte';
</script>

<Header />

<slot />

<ProfileSect />
<OptionsSect />
<MoreSect />
<AddSect />

<Footer />