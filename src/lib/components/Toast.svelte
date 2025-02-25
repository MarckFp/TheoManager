<script lang="ts">
    import { message, type, duration } from '$lib/stores/toast';
    import { fade } from 'svelte/transition';

    let isVisible = false;

    // Function to show the toast
    const showToast = () => {
        isVisible = true;
        setTimeout(() => {
            isVisible = false;
            $message = '';
        }, $duration);
    };
    
    $: if ($message) {
        showToast(); // Automatically show toast when message changes
    }
</script>

{#if isVisible}
    <div class="toast toast-top toast-end" in:fade={{ duration: 300 }} out:fade={{ duration: 500 }}>
        <div class={`alert alert-${$type}`}>
            <span>{$message}</span>
        </div>
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