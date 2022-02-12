<script lang="ts">
	import Icon from 'svelte-awesome';
	import { search } from 'svelte-awesome/icons';
	import Header from '../typography/Header.svelte';

	const handleSearch = () => {};
</script>

<div class="Navbar">
	<div class="Navbar__title">
		<Header level={1}>DevCeline.</Header>
	</div>
	<div class="Navbar__nav">
		<ul>
			<li><a href="/">Blog</a></li>
			<li><a href="/aboutme">About Me</a></li>
		</ul>
	</div>
	<div class="Navbar__search">
		<form on:submit|preventDefault|stopPropagation={handleSearch}>
			<input type="text" />
			<Icon data={search} />
		</form>
	</div>
</div>

<style lang="scss">
	@import 'global.scss';

	.Navbar {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
		padding: 1rem;
		justify-content: space-between;
		color: var(--primary-foreground-color);
		background-color: var(--secondary-background-color);

		&__search {
			background-color: var(--primary-foreground-color);
			color: var(--primary-background-color);

			form {
				display: flex;
				gap: 0.5em;
				align-items: center;
				padding: 0.25em;
				border-radius: 16px;
				background-color: var(--primary-foreground-color);

				input {
					border-radius: 50%;
					padding: 0.25em;
					border: 0;
					outline: 0;
					background-color: var(--primary-foreground-color);
					color: var(--primary-background-color);
				}
			}
		}

		&__nav {
			ul {
				list-style-type: none;
				display: flex;
				gap: 1em;

				li a {
					color: var(--primary-foreground-color);
					text-decoration: none;
				}
			}
		}
	}

	@media only screen and (min-width: 700px) {
		.Navbar {
			flex-direction: row;
			gap: unset;
		}
	}
</style>
