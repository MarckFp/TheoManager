<script lang="ts">
  import { Icon, Home, Cog6Tooth, User, Briefcase, Squares2x2 } from "svelte-hero-icons"
  import { page } from '$app/state'
  import { afterNavigate, goto } from '$app/navigation';

  let activeMenu = "home";
  function updateActiveMenu() {
    let menu = page.url.pathname.split("/");
    activeMenu = menu[2] ?? "home";
  }

  updateActiveMenu();

  afterNavigate(() => {
    updateActiveMenu();
  });
</script>

<div class="dock dock-xl text-center">
    <a
      href='/app/publishers'
      class={activeMenu === 'publishers' ? 'dock-active' : ''}>
      <Icon src="{User}" outline size="24" />
      <span class="dock-label">Publishers</span>
    </a>
    
    <a
      href='/app/meetings'
      class={activeMenu === 'meetings' ? 'dock-active' : ''}>
      <Icon src="{Briefcase}" outline size="24" />
      <span class="dock-label">Meetings</span>
  </a>

    <a
      href='/app'
      class={activeMenu === 'home' ? 'dock-active' : ''}>
      <Icon src="{Squares2x2}" outline size="24" />
      <span class="dock-label">Home</span>
    </a>

    <a
      href='/app/kingdom-hall'
      class={activeMenu === 'kingdom-hall' ? 'dock-active' : ''}>
      <Icon src="{Home}" outline size="24" />
      <span class="dock-label">Kingdom Hall</span>
    </a>

    <a
      href='/app/settings'
      class={activeMenu === 'settings' ? 'dock-active' : ''}>
      <Icon src="{Cog6Tooth}" outline size="24" />
      <span class="dock-label">Settings</span>
    </a>
</div>
