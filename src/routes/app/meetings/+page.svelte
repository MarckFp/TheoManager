<script lang="ts">
    import { Icon, SpeakerWave, Calendar, CalendarDays } from "svelte-hero-icons"
    import { base } from '$app/paths'
</script>

<!-- Title -->
<div class="p-4">
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl">Meetings</div>
</div>

<!-- Menu -->
<div class="grid grid-cols-2 gap-4 p-4 text-center">
    <a href="{base}/app/meetings/midweek" class="btn p-20 text-lg">
        <div>Midweek</div>
        <div><Icon src="{CalendarDays}" outline size="26" /></div>
    </a>

    <a href="{base}/app/meetings/weekend" class="btn p-20 text-lg">
        <div>Weekend</div>
        <div><Icon src="{Calendar}" outline size="26" /></div>
    </a>

    <a href="{base}/app/meetings/av-attendant" class="btn p-20 text-lg">
        <div>A/V & Attendant</div>
        <div><Icon src="{SpeakerWave}" outline size="26" /></div>
    </a>
</div>
