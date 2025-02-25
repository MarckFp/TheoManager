<script lang="ts">
  import { Icon, Cog6Tooth } from "svelte-hero-icons"
  import { base } from "$app/paths"
  import { _ } from "svelte-i18n"
  import { getCongregation } from "$lib/models/congregation"
  import { onMount } from "svelte"

  let congregation = {}

  onMount(async () => {
    const congregationID = localStorage.getItem("congregationID")
    if (congregationID) {
      congregation = await getCongregation(congregationID)
    }
  })
</script>

<div>
  <!-- User -->
  <div class="px-4 pt-4 pb-2">
    <div
      class="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl font-semibold"
    >
      {$_("home.welcome")}
      {congregation?.name}
    </div>
  </div>

  <div class="divider px-4 py-2"></div>

  <!-- Stats -->

  <!-- Menu -->
  <div class="grid grid-cols-2 gap-4 p-4 text-center">
    <a
      href="{base}/app/settings"
      class="btn btn-primary p-8 text-lg col-span-2"
    >
      <div>{$_("nav.settings")}</div>
      <div><Icon src={Cog6Tooth} outline size="26" /></div>
    </a>
  </div>
</div>
