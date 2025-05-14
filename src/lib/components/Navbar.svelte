<script>
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import ArrowLeft from 'carbon-icons-svelte/lib/ArrowLeft.svelte';
	import Menu from "carbon-icons-svelte/lib/Menu.svelte";

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
	class={`flex w-full items-center ${$page.route.id == '/' ? 'justify-end' : 'justify-between'} border-b border-black px-12 py-6 font-montserrat tracking-[0.18em] mobile:justify-between mobile:px-6`}
>
	{#if $page.route.id != '/'}
		<button
			class="text-black/50 transition-all hover:text-black"
			in:fly|global={{ y: 40, duration: 750, delay: 250 }}><ArrowLeft size={24} /></button
		>
	{/if}
	<div class="w-full">
		<div class="mobile:hidden flex justify-end gap-12">
			{#each links as link, i}
				<button
					class={`font-normal uppercase ${$page.route.id?.includes(link.link) ? 'text-black' : 'text-black'} transition-all hover:text-black/50`}
					in:fade|global={{ duration: 250, delay: i * 250 }}>{link.name}</button
				>
			{/each}
		</div>
		<div class="hidden mobile:flex justify-end w-full">
			<Menu size={24} class="text-black" />
		</div>
	</div>
</div>
