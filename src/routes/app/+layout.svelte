<script lang="ts">
    import Dock from '$lib/components/Dock.svelte';
//    import NavBar from '$lib/components/NavBar.svelte';
    import { isMobile } from '$lib/utils/mobile';
</script>

<main>
    {#if $isMobile}
        <Dock />
    {:else}
        <Dock />
        <!-- TODO: Add a view adapted for Desktop -->
        <!--<NavBar />-->
    {/if}
    <slot />
</main>