<script lang="ts">
  import { Icon, Home, User, Briefcase, Squares2x2, BookOpen } from "svelte-hero-icons"
  import { page } from '$app/state'
  import { base } from '$app/paths'
</script>

<div class="dock dock-xl text-center" id="dock-menu">
    <a
      href="{base}/app/publishers"
      class={page.url.pathname === `${base}/app/publishers` ? 'dock-active' : ''}>
      <Icon src="{User}" outline size="24" />
      <span class="dock-label">Publishers</span>
    </a>
    
    <a
      href="{base}/app/meetings"
      class={page.url.pathname === `${base}/app/meetings` ? 'dock-active' : ''}>
      <Icon src="{BookOpen}" outline size="24" />
      <span class="dock-label">Meetings</span>
  </a>

    <a
      href="{base}/app"
      class={page.url.pathname === `${base}/app` ? 'dock-active' : ''}>
      <Icon src="{Squares2x2}" outline size="24" />
      <span class="dock-label">Home</span>
    </a>

    <a
      href="{base}/app/kingdom-hall"
      class={page.url.pathname === `${base}/app/kingdom-hall` ? 'dock-active' : ''}>
      <Icon src="{Home}" outline size="24" />
      <span class="dock-label">Kingdom Hall</span>
    </a>

    <a
      href="{base}/app/preaching"
      class={page.url.pathname === `${base}/app/preaching` ? 'dock-active' : ''}>
      <Icon src="{Briefcase}" outline size="24" />
      <span class="dock-label">Preaching</span>
    </a>
</div>

<style>
  #dock-menu {
    view-transition-name: dock-menu;
  }
</style>