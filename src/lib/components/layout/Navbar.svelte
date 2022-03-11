<script lang="ts">
	import Icon from 'svelte-awesome';
	import { search } from 'svelte-awesome/icons';
	import { goto } from '$app/navigation';
	import Header from '../typography/Header.svelte';

	const handleSearch = () => {};
</script>

<div class="Navbar">
	<div on:click={() => goto('/')} class="Navbar__title">
		<Header level={1}>DevCeline.</Header>
	</div>
	<div class="Navbar__nav">
		<ul>
			<li><a href="/"><Header level={3}>Blog</Header></a></li>
			<li><a href="/aboutme"><Header level={3}>About Me</Header></a></li>
		</ul>
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
		padding-left: 2rem;
		padding-right: 2rem;
		justify-content: space-between;
		border-bottom: 1px solid var(--primary-background-color);
		border-bottom-left-radius: 25%;
		border-bottom-right-radius: 25%;
		border-top-left-radius: 0%;
		border-top-right-radius: 0%;
		background-color: var(--primary-foreground-color);
		color: var(--secondary-background-color);

		&__title {
			cursor: pointer;
		}

		&__search {
			width: 75%;
			background-color: var(--primary-foreground-color);
			color: var(--primary-background-color);
			border-radius: 16px;
			padding: 0 0.25em;

			form {
				display: flex;
				width: 100%;
				gap: 0.5em;
				align-items: center;
				padding: 0.25em;

				input {
					border-radius: 50%;
					width: 100%;
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
					display: inline;
					color: var(--secondary-background-color);
					text-decoration: none;

					&:hover {
						transform: unset;
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
			background-color: var(--secondary-background-color);
			flex-direction: row;
			gap: unset;
			color: var(--primary-foreground-color);

			&__nav ul li a {
				color: var(--primary-foreground-color);
			}

			&__search {
				width: unset;
				form,
				input {
					width: unset;
				}
			}
		}
	}
</style>
