<script>
	import { fade } from 'svelte/transition';
	import { navigateStore } from '$lib/stores/navigateStore';
	import { page } from '$app/stores';

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
	class="flex w-full items-center justify-center gap-12 py-8 font-montserrat tracking-[0.2em] mobile:justify-between mobile:px-6"
>
	{#each links as link, i}
		<button
			on:click={() => {
				$navigateStore.navigating = true;
				$navigateStore.navigateTo = link.link;
			}}
			class={`font-light uppercase ${$page.route.id?.includes(link.link) ? "text-white" : "text-white/50"} transition-all hover:text-white`}
			in:fade|global={{ duration: 250, delay: i * 250 }}>{link.name}</button
		>
	{/each}
</div>
