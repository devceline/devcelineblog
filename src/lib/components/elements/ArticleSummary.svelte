<script lang="ts">
	import Header from '../typography/Header.svelte';
	import { goto } from '$app/navigation';

	export let id: string;
	export let title: string;
	export let summary: string;
</script>

<div on:click={() => goto(`/blog/${id}`)} class="ArticleSummary">
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
		gap: 1em;
		padding: 0.5em;
		width: 100%;
		cursor: pointer;

		&:hover {
			border-radius: 16px;
			outline: solid 2px var(--primary-foreground-color);
		}
	}
</style>
