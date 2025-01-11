<script>
	import { fade } from 'svelte/transition';
	import { navigateStore } from '$lib/stores/navigateStore';

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
	class="flex w-full items-center justify-center gap-12 py-8 font-montserrat tracking-[0.2em] mobile:px-6 mobile:justify-between"
>
	{#each links as link, i}
		<button
			on:click={() => {
				$navigateStore.navigating = true
				$navigateStore.navigateTo = link.link
			}}
			class="transition-all hover:text-white uppercase font-light text-white/50"
			in:fade|global={{ duration: 250, delay: i * 250 }}>{link.name}</button
		>
	{/each}
</div>
