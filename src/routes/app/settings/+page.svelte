<script lang="ts">
    import { Icon, ArrowUturnLeft } from "svelte-hero-icons"
    import { base } from '$app/paths'
    import { _ } from 'svelte-i18n'

    let theme: string;

    function changeTheme() {
        const html = document.documentElement;
        html.setAttribute("data-theme", theme.toLowerCase());
    }
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

        <label class="fieldset-label">Theme:</label>
        <select class="select w-full" bind:value={theme} on:change={changeTheme}>
            <option selected>Dark</option>
            <option>Light</option>
            <option>Cupcake</option>
            <option>Bumblebee</option>
            <option>Emerald</option>
            <option>Corporate</option>
            <option>Synthwave</option>
            <option>Retro</option>
            <option>Cyberpunk</option>
            <option>Valentine</option>
            <option>Garden</option>
            <option>Forest</option>
            <option>Aqua</option>
            <option>Lofi</option>
            <option>Pastel</option>
            <option>Fantasy</option>
            <option>Wireframe</option>
            <option>Black</option>
            <option>Acid</option>
            <option>Lemonade</option>
            <option>Night</option>
            <option>Coffe</option>
            <option>Winter</option>
            <option>Dim</option>
            <option>Nord</option>
            <option>Sunset</option>
            <option>Caramellate</option>
            <option>Abyss</option>
            <option>Silk</option>
        </select>

        <label class="fieldset-label">Language:</label>
        <select class="select w-full">
            <option>English</option>
            <option>Spanish</option>
        </select>
        
        <button class="btn btn-primary mt-4">Login</button>
    </fieldset>
</div>