<script lang="ts">
	import ArticleSummary from '$lib/components/elements/ArticleSummary.svelte';
	import type { BlogData } from '$lib/types/blogTypes';
	import { onMount } from 'svelte';

	export let blogs: BlogData[] = [];

	const getBlogs = () => {
		console.log('aa');
		fetch('/blogs')
			.then((v) => v.json())
			.then((v) => {
				blogs = v.blogs;
			});
	};

	onMount(() => getBlogs());
</script>

<div on:click={() => getBlogs()} class="Main">
	{#each blogs as blog (blog.title)}
		<ArticleSummary id={blog.id} title={blog.title} summary={blog.summary} />
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
