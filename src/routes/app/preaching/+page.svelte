<script lang="ts">
    import { Icon, Calendar, Megaphone, UserGroup } from "svelte-hero-icons"
    import { base } from '$app/paths'
</script>

<!-- Title -->
<div class="p-4">
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl">Preaching</div>
</div>

<!-- Menu -->
<div class="grid grid-cols-1 gap-4 p-4 text-center">
    <a href="{base}/app/preaching/field-service-meetings" class="btn p-15 text-lg">
        <div>Field Service Meetings</div>
        <div><Icon src="{Calendar}" outline size="26" /></div>
    </a>

    <a href="{base}/app/preaching/public-witnessing" class="btn p-15 text-lg">
        <div>Public Witnessing</div>
        <div><Icon src="{Megaphone}" outline size="26" /></div>
    </a>

    <a href="{base}/app/preaching/field-service-groups" class="btn p-15 text-lg">
        <div>Field Service Groups</div>
        <div><Icon src="{UserGroup}" outline size="26" /></div>
    </a>
</div>
