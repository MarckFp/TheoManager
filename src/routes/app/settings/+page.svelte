<script lang="ts">
  import { Icon, UserCircle, UserGroup } from "svelte-hero-icons"
  import { base } from "$app/paths"
  import { _ } from "svelte-i18n"
  import Header from "$lib/components/Header.svelte"
</script>

<!-- Title -->
<Header title={$_("nav.settings")} />

<!-- Settings -->
<div class="grid grid-cols-2 gap-4 p-4 text-center">
  <a
    href="{base}/app/settings/user"
    class="btn btn-primary p-16 text-lg col-span-2"
  >
    <div>{$_("settings.user-settings")}</div>
    <div><Icon src={UserCircle} outline size="26" /></div>
  </a>

  <a
    href="{base}/app/settings/congregation"
    class="btn btn-secondary p-16 text-lg col-span-2"
  >
    <div>{$_("settings.congregation-settings")}</div>
    <div><Icon src={UserGroup} outline size="26" /></div>
  </a>
</div>
