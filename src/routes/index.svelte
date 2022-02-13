<script lang="ts">
	import ArticleSummary from '$lib/components/elements/ArticleSummary.svelte';
</script>

<div class="Main">
	<ArticleSummary
		title="Test title"
		summary="Test summary lorem lorem summary lorem lorem summary lorem lorem summary lorem lorem summary lorem lorem  "
	/>
	<ArticleSummary
		title="Test title"
		summary="Test summary lorem lorem summary lorem lorem summary lorem lorem summary lorem lorem summary lorem lorem  "
	/>
	<ArticleSummary
		title="Test title"
		summary="Test summary lorem lorem summary lorem lorem summary lorem lorem summary lorem lorem summary lorem lorem  "
	/>
</div>

<style lang="scss">
	.Main {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		align-items: center;
		padding: 2rem;
	}
</style>
