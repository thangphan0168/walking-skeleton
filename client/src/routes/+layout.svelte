<!-- For exercises -->
<script>
  import "../app.css";
  import Header from "$lib/components/layout/Header.svelte";
  let { children } = $props();
</script>

<div class="flex flex-col h-full">
  <Header />

  <main class="container mx-auto max-w-2xl grow">
    {@render children()}
  </main>

  <footer class="p-4 border-t-2 border-gray-300">
    <p class="text-center">My Cool Todo Application</p>
  </footer>
</div>


<!-- For following lessons Books -->
<!-- <script>
  import "../app.css";
  import Header from "$lib/components/layout/Header.svelte";

  let { children } = $props();
</script>

<div class="flex flex-col h-full">
  <Header />

  <main class="container mx-auto max-w-4xl px-4 grow">
    {@render children()}
  </main>
</div> -->
