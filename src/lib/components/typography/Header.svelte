<script lang="ts">
	import cx from 'classnames';
	export let level: 1 | 3 = 1;
</script>

<div>
	{#if level === 1}
		<h1 class={cx('Header--1', 1)}><slot /></h1>
	{:else if level === 3}
		<h3 class={cx('Header--2', 3)}><slot /></h3>
	{/if}
</div>

<style lang="scss">
	.Header {
		&--1 {
			font-weight: 800;
		}

		&--3 {
			font-weight: 500;
		}
	}
</style>
