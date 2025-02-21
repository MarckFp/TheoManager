<script lang="ts">
    import { Icon, Map, PencilSquare, WrenchScrewdriver, Trash } from "svelte-hero-icons"
    import { base } from '$app/paths'
    import { _ } from 'svelte-i18n'
</script>

<!-- Title -->
<div class="p-4">
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl font-semibold">{$_('nav.kingdom-hall')}</div>
</div>

<!-- Menu -->
<div class="grid grid-cols-2 gap-4 p-4 text-center">
    <a href="{base}/app/kingdom-hall/territory" class="btn btn-primary p-18 text-lg">
        <div>{$_('nav.territory')}</div>
        <div><Icon src="{Map}" outline size="26" /></div>
    </a>

    <a href="{base}/app/kingdom-hall/attendance" class="btn btn-accent p-18 text-lg">
        <div>{$_('nav.attendance')}</div>
        <div><Icon src="{PencilSquare}" outline size="26" /></div>
    </a>

    <a href="{base}/app/kingdom-hall/cleaning" class="btn btn-success p-18 text-lg">
        <div>{$_('nav.cleaning')}</div>
        <div><Icon src="{Trash}" outline size="26" /></div>
    </a>

    <a href="{base}/app/kingdom-hall/maintenance" class="btn btn-secondary p-18 text-lg">
        <div>{$_('nav.maintenance')}</div>
        <div><Icon src="{WrenchScrewdriver}" outline size="26" /></div>
    </a>
</div>
