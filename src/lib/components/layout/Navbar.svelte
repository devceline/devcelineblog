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
			<li><a href="/"><Header level={3}>Blog</Header></a></li>
			<li><a href="/aboutme"><Header level={3}>About Me</Header></a></li>
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

	* {
		transition: all 300ms ease-in-out;
	}

	.Navbar {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
		padding: 1rem;
		justify-content: space-between;
		color: var(--primary-foreground-color);
		background-color: var(--secondary-background-color);
		border-bottom: 1px solid var(--primary-background-color);
		border-bottom-left-radius: 25%;
		border-bottom-right-radius: 25%;
		border-top-left-radius: 0%;
		border-top-right-radius: 0%;

		&__search {
			background-color: var(--primary-foreground-color);
			color: var(--primary-background-color);
			border-radius: 16px;
			padding: 0 0.25em;

			form {
				display: flex;
				gap: 0.5em;
				align-items: center;
				padding: 0.25em;

				input {
					border-radius: 50%;
					padding: 0.25em;
					border: 0;
					outline: 0;
					background-color: transparent;
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

					&:hover {
						border-bottom: 1px solid var(--primary-background-color);
						background-color: var(--primary-background-color);
					}
				}
			}
		}

		&:hover {
			background-color: var(--primary-foreground-color);
			color: var(--secondary-background-color);
			box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.25);

			.Navbar__search {
				color: var(--primary-foreground-color);
				background-color: var(--primary-background-color);
			}

			.Navbar__nav ul li a {
				color: var(--primary-background-color);
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
