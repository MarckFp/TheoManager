<script lang="ts">
  import { Icon, Home, User, Briefcase, Squares2x2, BookOpen } from "svelte-hero-icons"
  import { page } from '$app/state'
</script>

<div class="dock dock-xl text-center" id="dock-menu">
    <a
      href='/app/publishers'
      class={page.url.pathname === '/app/publishers' ? 'dock-active' : ''}>
      <Icon src="{User}" outline size="24" />
      <span class="dock-label">Publishers</span>
    </a>
    
    <a
      href='/app/meetings'
      class={page.url.pathname === '/app/meetings' ? 'dock-active' : ''}>
      <Icon src="{BookOpen}" outline size="24" />
      <span class="dock-label">Meetings</span>
  </a>

    <a
      href='/app'
      class={page.url.pathname === '/app' ? 'dock-active' : ''}>
      <Icon src="{Squares2x2}" outline size="24" />
      <span class="dock-label">Home</span>
    </a>

    <a
      href='/app/kingdom-hall'
      class={page.url.pathname === '/app/kingdom-hall' ? 'dock-active' : ''}>
      <Icon src="{Home}" outline size="24" />
      <span class="dock-label">Kingdom Hall</span>
    </a>

    <a
      href='/app/preaching'
      class={page.url.pathname === '/app/preaching' ? 'dock-active' : ''}>
      <Icon src="{Briefcase}" outline size="24" />
      <span class="dock-label">Preaching</span>
    </a>
</div>

<style>
  #dock-menu {
    view-transition-name: dock-menu;
  }
</style>