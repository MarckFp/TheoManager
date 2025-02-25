<script lang="ts">
  import { Icon, Clipboard } from "svelte-hero-icons"
  import { _ } from "svelte-i18n"
  import {
    deleteCongregation,
    getCongregation,
    updateCongregation,
    type Congregation,
  } from "$lib/models/congregation"
  import {
    getSettings,
    updateSettings,
    type Settings,
  } from "$lib/models/settings"
  import { onMount } from "svelte"
  import { message, type } from "$lib/stores/toast"
  import Header from "$lib/components/Header.svelte"

  let newPassword = ""
  let settings: Settings | null
  let congregation: Congregation | null

  $: {
    getCongregation()?.then((result) => {
      congregation = result
    })

    getSettings()?.then((result) => {
      settings = result
    })
  }

  async function deleteCong() {
    await deleteCongregation()
  }

  async function saveCongregationConfig() {
    try {
      if (congregation?.name === "") {
        throw new Error("Congregation name is required")
      }
      if (congregation) {
        if (newPassword != "") {
          congregation.password = newPassword
        }
        await updateCongregation(congregation)
      }
      if (settings) {
        await updateSettings(settings)
      }

      $message = "Congregation settings saved successfully!"
    } catch (error) {
      $message = "Failed to save congregation settings"
      $type = "error"
    }
  }

  function copyCongregationID() {
    const congregationID = localStorage.getItem("congregationID")
    if (congregationID) {
      navigator.clipboard.writeText(congregationID)
    }
  }

  onMount(async () => {
    congregation = await getCongregation()
    settings = await getSettings()
  })
</script>

<!-- Title -->
<Header title={$_("settings.congregation-settings")} path="settings" />

<!-- Settings -->
<div class="w-full p-4">
  {#if congregation && settings}
    <fieldset
      class="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box"
    >
      <legend class="fieldset-legend"
        >{$_("settings.congregation-settings")}</legend
      >

      <label class="fieldset-label" for="congregation-id"
        >{$_("settings.congregation-id")}:</label
      >
      <div class="join">
        <input
          type="text"
          class="input w-full truncate"
          id="congregation-id"
          value={localStorage.getItem("congregationID")}
          disabled
        />
        <button class="btn btn-primary join-item" onclick={copyCongregationID}>
          <Icon src={Clipboard} outline size="20" />
        </button>
      </div>

      <label class="fieldset-label" for="congregation-name"
        >{$_("settings.congregation-name")}:</label
      >
      <input
        type="text"
        class="input w-full"
        id="congregation-name"
        placeholder="Congregation Name"
        bind:value={congregation.name}
        required
      />

      <label class="label mt-2" for="congregation-address"
        >{$_("settings.congregation-address")}:</label
      >
      <input
        type="text"
        class="input w-full"
        id="congregation-address"
        placeholder="Address"
        bind:value={congregation.address}
      />

      <label class="label mt-2" for="congregation-city"
        >{$_("settings.congregation-city")}:</label
      >
      <input
        type="text"
        class="input w-full"
        id="congregation-city"
        placeholder="City"
        bind:value={congregation.city}
      />

      <label class="label mt-2" for="congregation-country"
        >{$_("settings.congregation-country")}:</label
      >
      <input
        type="text"
        class="input w-full"
        id="congregation-country"
        placeholder="Country"
        bind:value={congregation.country}
      />

      <label class="label mt-2" for="congregation-zipcode"
        >{$_("settings.congregation-zipcode")}:</label
      >
      <input
        type="text"
        class="input w-full"
        id="congregation-zipcode"
        placeholder="Zipcode"
        bind:value={congregation.zipcode}
      />

      <label class="label mt-2" for="jw-code"
        >{$_("settings.congregation-jw-code")}:</label
      >
      <input
        type="text"
        class="input w-full"
        id="jw-code"
        placeholder="JW Code"
        bind:value={congregation.jw_code}
      />

      <label class="label mt-2" for="congregation-password"
        >{$_("settings.congregation-password")}:</label
      >
      <input
        type="password"
        class="input w-full"
        id="congregation-password"
        placeholder="Password"
        minlength="8"
        pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])."
        bind:value={newPassword}
      />

      <span class="fieldset-label mt-4">{$_("settings.week-order")}:</span>
      <div class="grid grid-cols-2 gap-4">
        <div class="grid grid-cols-2">
          <label class="fieldset-label" for="monday-order"
            >{$_("weekdays.monday")}</label
          >
          <input
            type="radio"
            name="week-order"
            id="monday-order"
            class="radio radio-primary"
            bind:group={settings.week_order}
            value="monday"
          />
        </div>
        <div class="grid grid-cols-2">
          <label class="fieldset-label" for="sunday-order"
            >{$_("weekdays.sunday")}</label
          >
          <input
            type="radio"
            name="week-order"
            id="sunday-order"
            class="radio radio-primary"
            bind:group={settings.week_order}
            value="sunday"
          />
        </div>
      </div>

      <span class="fieldset-label mt-4">{$_("settings.name-order")}:</span>
      <div class="grid grid-cols-2 gap-4">
        <div class="grid grid-cols-2">
          <label class="fieldset-label" for="firstname-order"
            >{$_("person.firstname")}</label
          >
          <input
            type="radio"
            name="name-order"
            id="firstname-order"
            class="radio radio-secondary"
            bind:group={settings.name_order}
            value="firstname"
          />
        </div>
        <div class="grid grid-cols-2">
          <label class="fieldset-label" for="lastname-order"
            >{$_("person.lastname")}</label
          >
          <input
            type="radio"
            name="name-order"
            id="lastname-order"
            class="radio radio-secondary"
            bind:group={settings.name_order}
            value="lastname"
          />
        </div>
      </div>

      <label class="fieldset-label mt-4" for="overseer-name"
        >{$_("settings.circuit-overseer-name")}:</label
      >
      <input
        type="text"
        class="input w-full"
        id="overseer-name"
        placeholder="Circuit Overseer Name"
        bind:value={settings.circuit_overseer_name}
      />

      <button class="btn btn-primary mt-4" onclick={saveCongregationConfig}
        >{$_("nav.save")}</button
      >
    </fieldset>

    <fieldset
      class="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box"
    >
      <legend class="fieldset-legend">Danger Zone</legend>

      <button
        class="btn btn-error"
        onclick={() =>
          (
            document.getElementById("delete_congregation") as HTMLDialogElement
          )?.showModal()}>{$_("nav.delete")}</button
      >
    </fieldset>
  {/if}
</div>

<dialog id="delete_congregation" class="modal modal-center sm:modal-middle">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Are you sure?</p>
    <button class="btn btn-error mt-2 w-full" onclick={deleteCong}
      >{$_("nav.delete")}</button
    >
    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕</button
        >
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
