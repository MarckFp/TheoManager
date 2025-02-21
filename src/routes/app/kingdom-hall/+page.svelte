<script lang="ts">
    import { Icon, Map, PencilSquare, WrenchScrewdriver, Trash } from "svelte-hero-icons"
    import { base } from '$app/paths'
</script>

<!-- Title -->
<div class="p-4">
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl">Kingdom Hall</div>
</div>

<!-- Menu -->
<div class="grid grid-cols-2 gap-4 p-4 text-center">
    <a href="{base}/app/kingdom-hall/territory" class="btn p-20 text-lg">
        <div>Territory</div>
        <div><Icon src="{Map}" outline size="26" /></div>
    </a>

    <a href="{base}/app/kingdom-hall/attendance" class="btn p-20 text-lg">
        <div>Attendance</div>
        <div><Icon src="{PencilSquare}" outline size="26" /></div>
    </a>

    <a href="{base}/app/kingdom-hall/cleaning" class="btn p-20 text-lg">
        <div>Cleaning</div>
        <div><Icon src="{Trash}" outline size="26" /></div>
    </a>

    <a href="{base}/app/kingdom-hall/maintenance" class="btn p-20 text-lg">
        <div>Maintenance</div>
        <div><Icon src="{WrenchScrewdriver}" outline size="26" /></div>
    </a>
</div>
