<script>
	import { fade } from 'svelte/transition';

	const links = [
		{
			link: '/committees',
			name: 'Committees'
		},
		{
			link: '/register',
			name: 'Register'
		}
	];
</script>

<div
	transition:fade={{ duration: 5 }}
	class="flex w-full items-center justify-center gap-12 py-8 font-montserrat font-light uppercase tracking-[0.2em] text-white/50"
>
	{#each links as link, i}
		<a
			href={link.link}
			class="transition-all hover:text-white"
			in:fade|global={{ duration: 250, delay: i * 250 }}>{link.name}</a
		>
	{/each}
</div>
