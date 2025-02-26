<script lang="ts">
  import { message, type, duration } from "$lib/stores/toast"
  import { fade } from "svelte/transition"

  let isVisible = false

  // Function to show the toast
  const showToast = () => {
    isVisible = true
    setTimeout(() => {
      isVisible = false
      $message = ""
    }, $duration)
  }

  $: if ($message) {
    showToast() // Automatically show toast when message changes
  }
</script>

{#if isVisible}
  <div
    class="toast toast-top toast-end"
    in:fade={{ duration: 300 }}
    out:fade={{ duration: 500 }}
  >
  {#if $type === 'success'}
    <div class="alert alert-success">
      <span>{$message}</span>
    </div>
  {:else if $type === 'warning'}
    <div class="alert alert-warning">
      <span>{$message}</span>
    </div>
  {:else if $type === 'error'}
    <div class="alert alert-error">
      <span>{$message}</span>
    </div>
  {/if}
  </div>
{/if}

<style>
  .toast {
    position: fixed;
    top: 10px;
    right: 10px;
    transition: opacity 0.5s ease;
    view-transition-name: toast-menu;
  }
</style>
