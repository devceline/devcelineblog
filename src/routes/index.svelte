<script lang="ts">
	import ArticleSummary from '$lib/components/elements/ArticleSummary.svelte';
	import type { BlogData } from '$lib/utils/blogData';

	export let blogs: BlogData[] = [];
</script>

<div class="Main">
	{#each blogs as blog (blog.title)}
		<ArticleSummary title={blog.title} summary={blog.summary} />
	{/each}
</div>

<style lang="scss">
	.Main {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		align-items: flex-start;
		padding: 2rem;
	}

	@media only screen and (min-width: 700px) {
		.Main {
			padding-left: 25%;
		}
	}
</style>
