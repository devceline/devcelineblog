<script>
	import Navbar from '$lib/components/layout/Navbar.svelte';
</script>

<div class="Layout">
	<div class="Layout__navbar">
		<Navbar />
	</div>
	<div class="Layout__content">
		<slot />
	</div>
</div>

<style lang="scss">
	@import 'global.scss';

	@import 'https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300;400;500;600;700&display=swap';

	:global(*) {
		padding: 0;
		margin: 0;
		font-family: map-get($fonts, 'main');
	}

	:global(body) {
		position: relative;
		padding: 0 !important;
		margin: 0 !important;
		width: 100vw;
		height: 100vh;
		color: var(--primary-foreground-color);
		background: var(--secondary-background-color);
		font-family: map-get($fonts, 'main');
	}

	.Layout {
		display: grid;
		height: 100vh;
		grid-template-areas:
			'navbar'
			'content';
		grid-template-rows: 1fr 5fr;
		grid-template-columns: 1fr;

		&__navbar {
			grid-area: navbar;
		}

		&__content {
			grid-area: content;
		}
	}
</style>
