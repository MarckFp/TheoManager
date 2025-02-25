<script lang="ts">
  import Dock from "$lib/components/Dock.svelte"
  //    import NavBar from '$lib/components/NavBar.svelte'
  import Toast from "$lib/components/Toast.svelte"
  import { isMobile } from "$lib/stores/mobile"
  import { onNavigate } from "$app/navigation"
  import { onMount } from "svelte"
  import { goto } from "$app/navigation"

  onNavigate((navigation) => {
    if (!document.startViewTransition) return
    if (navigation.from?.url.pathname === navigation.to?.url.pathname) {
      return // Skip animation if same route
    }

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })

  onMount(() => {
    const congregationID = localStorage.getItem("congregationID")
    if (!congregationID) {
      // If there is no congregation, send the user back to the landing page.
      goto("/")
    }
  })
</script>

<main>
  {#if $isMobile}
    <div class="pb-20">
      <slot />
    </div>
    <Dock />
  {:else}
    <div class="pb-20">
      <slot />
    </div>
    <Dock />
    <!-- TODO: Add a view adapted for Desktop -->
    <!--<NavBar />-->
    <!-- <slot /> -->
  {/if}
</main>

<Toast />

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: translateX(30px);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: translateX(-30px);
    }
  }

  :root::view-transition-old(root) {
    animation:
      90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation:
      210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }
</style>
