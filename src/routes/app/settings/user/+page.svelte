<script lang="ts">
  import { _ } from "svelte-i18n"
  import { theme, setTheme, availableThemes } from "$lib/stores/theme"
  import { message } from "$lib/stores/toast"
  import Header from "$lib/components/Header.svelte"

  let newTheme = $theme

  function saveUserConfig() {
    setTheme(newTheme)
    $message = "User settings saved successfully!"
  }
</script>

<!-- Title -->
<Header title={$_("settings.user-settings")} path="settings" />

<!-- Settings -->
<div class="w-full p-4">
  <fieldset
    class="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box"
  >
    <legend class="fieldset-legend">{$_("settings.user-settings")}</legend>

    <label class="fieldset-label" for="theme">Theme:</label>
    <select class="select w-full" id="theme" bind:value={newTheme}>
      {#each availableThemes as theme}
        <option value={theme}
          >{theme.charAt(0).toUpperCase() + theme.slice(1)}</option
        >
      {/each}
    </select>

    <label class="fieldset-label" for="language">Language:</label>
    <select class="select w-full" id="language">
      <option selected>English</option>
      <option>Spanish</option>
    </select>

    <button class="btn btn-primary mt-4" on:click={saveUserConfig}
      >{$_("nav.save")}</button
    >
  </fieldset>
</div>
