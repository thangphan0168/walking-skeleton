<!-- For exercises -->
<!-- <script>
  import { authFetch } from "$lib/utils/fetchUtils.js";
  import { useAuthState } from "$lib/states/authState.svelte.js";
  import { PUBLIC_API_URL } from "$env/static/public";

  // let message = $state("Hello anonymous!");

  const authState = useAuthState();

  // const fetchData = async () => {
  //   try {
  //     const response = await authFetch(`${PUBLIC_API_URL}/api/secret`);
  //     const data = await response.json();
  //     message = data.message;
  //   } catch (error) {
  //     message = error.message;
  //   }
  // };
</script>

{#if authState.user}
  <a href="/todos">Go to your todos</a>
{:else}
  <p>Hello anonymous!</p>
{/if} -->

<!-- <form class="mx-auto w-full max-w-md space-y-4">
  <h2 class="h2">Add a book</h2>

  <label class="label">
    <span class="label-text">Title</span>
    <input
      id="title"
      name="title"
      type="text"
      placeholder="Book title"
      class="input"
    />
  </label>

  <label class="label">
    <span class="label-text">Description</span>
    <textarea
      id="description"
      name="description"
      placeholder="Enter book description"
      class="textarea"
    ></textarea>
  </label>

  <label class="label">
    <span class="label-text">Published at</span>
    <input id="published_at" name="published_at" type="date" class="input" />
  </label>

  <label class="label">
    <span class="label-text">Page count</span>
    <input id="page_count" name="page_count" type="number" class="input" />
  </label>

  <input type="submit" value="Add Book" class="btn preset-filled-primary-500" />
</form> -->

<!-- For following lessons -->
<h1 class="p-1 text-xl md:text-2xl lg:text-4xl">Hello world!</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-primary-100 p-4">Card 1</div>
  <div class="bg-primary-100 p-4">Card 2</div>
  <div class="bg-primary-100 p-4">Card 3</div>
  <div class="bg-primary-100 p-4">Card 4</div>
  <div class="bg-primary-100 p-4">Card 5</div>
  <div class="bg-primary-100 p-4">Card 6</div>
</div>

<!-- <script>
  let isOpen = $state(false);
  let modalElement = $state(null);
  let previouslyFocused = $state(null);

  const openModal = () => {
    previouslyFocused = document.activeElement;
    isOpen = true;
  };

  const closeModal = () => {
    isOpen = false;
    previouslyFocused?.focus();
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }

  $effect(() => {
    if (isOpen && modalElement) {
      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusableElements[0]?.focus();
    }
  });
</script>

<button onclick={openModal}>Open Modal</button>

{#if isOpen}
  <div class="overlay" onclick={closeModal}>
    <div
      bind:this={modalElement}
      class="modal"
      role="dialog"
      aria-modal="true"
      onkeydown={handleKeydown}
      onclick={(e) => e.stopPropagation()}
    >
      <p>Try tabbing through the elements.</p>
      <input type="text" placeholder="Tab-tabiti-tab-tab-tab" />
      <div class="buttons">
        <button>Action</button>
        <button onclick={closeModal}>Close (or press Escape)</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    background: white;
  }
</style> -->
