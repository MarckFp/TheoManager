<script lang="ts">
  import { Icon, Calendar, Megaphone, UserGroup } from "svelte-hero-icons"
  import { base } from "$app/paths"
  import { _ } from "svelte-i18n"
</script>

<!-- Title -->
<div class="p-4">
  <div
    class="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl font-semibold"
  >
    {$_("nav.preaching")}
  </div>
</div>

<!-- Menu -->
<div class="grid grid-cols-1 gap-4 p-4 text-center">
  <a
    href="{base}/app/preaching/field-service-meetings"
    class="btn btn-primary p-15 text-lg"
  >
    <div>{$_("nav.field-service-meetings")}</div>
    <div><Icon src={Calendar} outline size="26" /></div>
  </a>

  <a
    href="{base}/app/preaching/public-witnessing"
    class="btn btn-accent p-15 text-lg"
  >
    <div>{$_("nav.public-witnessing")}</div>
    <div><Icon src={Megaphone} outline size="26" /></div>
  </a>

  <a
    href="{base}/app/preaching/field-service-groups"
    class="btn btn-success p-15 text-lg"
  >
    <div>{$_("nav.field-service-groups")}</div>
    <div><Icon src={UserGroup} outline size="26" /></div>
  </a>
</div>
