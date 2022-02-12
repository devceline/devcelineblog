<script lang="ts">
	import Header from '../typography/Header.svelte';

	export let title: string;
	export let summary: string;
</script>

<div class="ArticleSummary">
	<div class="ArticleSummary__title">
		<Header level={3}>{title}</Header>
	</div>

	<div class="ArticleSummary__summary">
		{summary}
	</div>
</div>

<style lang="scss">
	.ArticleSummary {
		display: flex;
		flex-direction: column;
	}
</style>
