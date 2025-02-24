<script lang="ts">
    import { Icon, ArrowUturnLeft } from "svelte-hero-icons"
    import { base } from '$app/paths'
    import { _ } from 'svelte-i18n'
    import { theme, setTheme, availableThemes } from '$lib/stores/theme'
    import { getCongregation } from '$lib/models/congregation'
    import { onMount } from "svelte"

    let newTheme = $theme

    function saveUserConfig() {
        setTheme(newTheme)
    }

    let congregation = {}

    onMount(async () => {
        const congregationID = localStorage.getItem('congregationID')
        if (congregationID) {
            congregation = await getCongregation(congregationID)
        }
    })
</script>

<!-- Title -->
<div class="p-4">
    <div class="card bg-base-300 rounded-box items-center h-20 grid grid-cols-3 gap-16">
        <a class="btn btn-circle btn-secondary ml-4" href="{base}/app">
            <Icon src="{ArrowUturnLeft}" outline size="26" />
        </a>
        <span class="text-2xl justify-center text-center">{$_("nav.settings")}</span>
        <div class="w-10"></div>
    </div>
</div>

<!-- Settings -->
<div class="w-full p-4">
    <fieldset class="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box">
        <legend class="fieldset-legend">User Settings</legend>

        <label class="fieldset-label" for="theme">Theme:</label>
        <select class="select w-full" id="theme" bind:value={newTheme}>
            {#each availableThemes as theme}
                <option value={theme}>{theme.charAt(0).toUpperCase() + theme.slice(1)}</option>
            {/each}
        </select>

        <label class="fieldset-label" for="language">Language:</label>
        <select class="select w-full" id="language">
            <option selected>English</option>
            <option>Spanish</option>
        </select>

        <button class="btn btn-primary mt-4" on:click={saveUserConfig}>{$_('nav.save')}</button>
    </fieldset>

    <fieldset class="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box">
        <legend class="fieldset-legend">Congregation Settings</legend>

        <label class="fieldset-label" for="congregation-name">Congregation Name:</label>
        <input type="text" class="input w-full" id="congregation-name" placeholder="Congregation Name" bind:value={congregation.name}/>

        <span class="fieldset-label mt-4">Week Order:</span>
        <div class="grid grid-cols-2 gap-4">
            <div class="grid grid-cols-2">
                <label class="fieldset-label" for="monday-order">Monday</label>
                <input type="radio" name="week-order" id="monday-order" class="radio radio-primary" checked />
            </div>
            <div class="grid grid-cols-2">
                <label class="fieldset-label" for="sunday-order">Sunday</label>
                <input type="radio" name="week-order" id="sunday-order" class="radio radio-primary" />
            </div>
        </div>

        <span class="fieldset-label mt-4">Name Order:</span>
        <div class="grid grid-cols-2 gap-4">
            <div class="grid grid-cols-2">
                <label class="fieldset-label" for="firstname-order">Firstname</label>
                <input type="radio" name="name-order" id="firstname-order" class="radio radio-secondary" checked />
            </div>
            <div class="grid grid-cols-2">
                <label class="fieldset-label" for="lastname-order">Lastname</label>
                <input type="radio" name="name-order" id="lastname-order" class="radio radio-secondary" />
            </div>
        </div>

        <label class="fieldset-label mt-4" for="overseer-name">Circuit Overseer name:</label>
        <input type="text" class="input w-full" id="overseer-name" placeholder="Circuit Overseer Name" />

        <button class="btn btn-primary mt-4">{$_('nav.save')}</button>
    </fieldset>
</div>
