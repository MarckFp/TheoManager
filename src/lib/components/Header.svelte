<script lang="ts">
  import { Icon, ArrowUturnLeft } from "svelte-hero-icons"
  import { base } from "$app/paths"
  export let title = ""
  export let path = ""
</script>

<div class="p-4">
  <div
    class="card bg-base-300 rounded-box flex items-center justify-center h-20 px-4 relative"
  >
    <a
      class="btn btn-circle btn-secondary flex-shrink-0 absolute left-4"
      href="{base}/app/{path}"
    >
      <Icon src={ArrowUturnLeft} outline size="26" />
    </a>

    <span
      class="text-2xl text-center px-4 pl-12 whitespace-normal font-semibold"
    >
      {title}
    </span>
  </div>
</div>
