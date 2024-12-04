<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import SplitText from "$lib/components/SplitText.svelte";
</script>


<div class="flex w-full justify-center h-screen items-center hero">
  <SplitText text="RoMUN 2025" />
</div>
<div class="p-12">
  <Card.Root>
    <Card.Header>
      <Card.Title>Register</Card.Title>
      <Card.Description>Card Description</Card.Description>
    </Card.Header>
    <Card.Content>
      <p>content</p>
    </Card.Content>
  </Card.Root>
</div>

<style>
  @keyframes scale-text-down {
		0% {
			scale: 1;
		}

		100% {
			scale: 0;
      display: none;
		}
	}
  
  .hero {
    animation: scale-text-down 1s forwards;
    animation-delay: 3500ms;
  }
</style>