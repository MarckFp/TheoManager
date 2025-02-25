<script lang="ts">
  import {
    Icon,
    SpeakerWave,
    Calendar,
    CalendarDays,
    PencilSquare,
    Ticket,
  } from "svelte-hero-icons"
  import { base } from "$app/paths"
  import { _ } from "svelte-i18n"
</script>

<!-- Title -->
<div class="p-4">
  <div
    class="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl font-semibold"
  >
    {$_("nav.meetings")}
  </div>
</div>

<!-- Menu -->
<div class="grid grid-cols-2 gap-4 p-4 text-center">
  <a href="{base}/app/meetings/midweek" class="btn btn-primary p-18 text-lg">
    <div>{$_("nav.midweek")}</div>
    <div><Icon src={CalendarDays} outline size="26" /></div>
  </a>

  <a href="{base}/app/meetings/weekend" class="btn btn-accent p-18 text-lg">
    <div>{$_("nav.weekend")}</div>
    <div><Icon src={Calendar} outline size="26" /></div>
  </a>

  <a href="{base}/app/meetings/attendance" class="btn btn-success p-18 text-lg">
    <div>{$_("nav.attendance")}</div>
    <div><Icon src={PencilSquare} outline size="26" /></div>
  </a>

  <a
    href="{base}/app/meetings/audio-video"
    class="btn btn-secondary p-18 text-lg"
  >
    <div>{$_("nav.audio-video")}</div>
    <div><Icon src={SpeakerWave} outline size="26" /></div>
  </a>

  <a
    href="{base}/app/meetings/attendant"
    class="btn btn-info p-16 text-lg col-span-2"
  >
    <div>{$_("nav.attendants")}</div>
    <div><Icon src={Ticket} outline size="26" /></div>
  </a>
</div>
