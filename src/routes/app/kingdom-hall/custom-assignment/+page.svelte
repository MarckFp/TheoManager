<script lang="ts">
  import { _ } from "svelte-i18n"
  import Header from "$lib/components/Header.svelte"
</script>

<!-- Title -->
<Header title={$_("nav.custom-assignments")} path="kingdom-hall" />
