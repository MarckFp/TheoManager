<script lang="ts">
  import { Icon, HomeModern, User, Briefcase, Squares2x2, BookOpen } from "svelte-hero-icons"
  import { page } from '$app/state'
  import { base } from '$app/paths'
  import { _ } from 'svelte-i18n'
  import { isMobile } from "$lib/stores/mobile"
</script>

<div class="dock dock-xl text-center" id="dock-menu">
    <a
      href="{base}/app/publishers"
      class={page.url.pathname.startsWith(`${base}/app/publishers`) ? 'dock-active' : ''}>
      <Icon src="{User}" outline size="24" />
      {#if !$isMobile}<span class="dock-label">{$_('nav.publishers')}</span>{/if}
    </a>

    <a
      href="{base}/app/kingdom-hall"
      class={page.url.pathname.startsWith(`${base}/app/kingdom-hall`) ? 'dock-active' : ''}>
      <Icon src="{HomeModern}" outline size="24" />
      {#if !$isMobile}<span class="dock-label">{$_('nav.kingdom-hall')}</span>{/if}
    </a>

    <a
      href="{base}/app"
      class={page.url.pathname === `${base}/app` || page.url.pathname.startsWith(`${base}/app/settings`) ? 'dock-active' : ''}>
      <Icon src="{Squares2x2}" outline size="24" />
      {#if !$isMobile}<span class="dock-label">{$_('nav.home')}</span>{/if}
    </a>

    <a
    href="{base}/app/meetings"
    class={page.url.pathname.startsWith(`${base}/app/meetings`) ? 'dock-active' : ''}>
    <Icon src="{BookOpen}" outline size="24" />
    {#if !$isMobile}<span class="dock-label">{$_('nav.meetings')}</span>{/if}
    </a>

    <a
      href="{base}/app/preaching"
      class={page.url.pathname.startsWith(`${base}/app/preaching`) ? 'dock-active' : ''}>
      <Icon src="{Briefcase}" outline size="24" />
      {#if !$isMobile}<span class="dock-label">{$_('nav.preaching')}</span>{/if}
    </a>
</div>

<style>
  #dock-menu {
    view-transition-name: dock-menu;
  }
</style>
