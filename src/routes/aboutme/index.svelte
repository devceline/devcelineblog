<script>
	import Header from '$lib/components/typography/Header.svelte';
</script>

<svelte:head>
	<title>About Celine</title>
</svelte:head>

<div class="AboutMe">
	<header class="AboutMe__header">
		<Header>About Me!</Header>
	</header>
	<main class="AboutMe__content">I'll be filling this in later, I promise.</main>
</div>

<style lang="scss">
	.AboutMe {
		display: flex;
		gap: 1em;
		flex-direction: column;
		align-items: center;
	}
</style>
