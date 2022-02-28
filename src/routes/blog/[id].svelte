<script context="module" lang="ts">
	export async function load({ page, fetch }) {
		const url = `/blog/${page?.params?.id}-data`;
		const blog = await fetch(url)
			.then((v) => v.json())
			.then((v) => v.blog);

		return {
			status: 200,
			props: {
				blog
			}
		};
	}
</script>

<script lang="ts">
	import Header from '$lib/components/typography/Header.svelte';
	import type { BlogData } from '$lib/types/blogTypes';
	import { marked } from 'marked';

	export let blog: BlogData;
</script>

<svelte:head>
	<title>{blog.title}</title>
</svelte:head>

<div class="Blog">
	<header class="Blog__title">
		<Header>
			{blog.title}
		</Header>
	</header>
	<main class="Blog__content">
		{@html marked(blog.markdownContent.replaceAll('\\n', '\n'))}
	</main>
</div>

<style lang="scss">
	.Blog {
		display: flex;
		flex-direction: column;
		padding: 3rem;
		gap: 3rem;

		&__title {
			font-weight: 700;
			text-transform: uppercase;
		}
	}
</style>
