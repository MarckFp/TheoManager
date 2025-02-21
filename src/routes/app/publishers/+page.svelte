<script lang="ts">
    import { Icon, ListBullet, ArrowTopRightOnSquare, ArrowRightOnRectangle, MinusCircle, ArrowUturnLeft } from "svelte-hero-icons"
    import { base } from '$app/paths'
    import { _ } from 'svelte-i18n'
</script>

<!-- Title -->
<div class="p-4">
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl">
        {$_("nav.publishers")}
    </div>
</div>

<!-- Menu -->
<div class="grid grid-cols-2 gap-4 p-4 text-center">
    <a href="{base}/app/publishers/list" class="btn p-20 text-lg">
        <div>{$_("nav.list")}</div>
        <div><Icon src="{ListBullet}" outline size="26" /></div>
    </a>

    <a href="{base}/app/publishers/reports" class="btn p-20 text-lg">
        <div>{$_("nav.reports")}</div>
        <div><Icon src="{ArrowRightOnRectangle}" outline size="26" /></div>
    </a>

    <a href="{base}/app/publishers/exports" class="btn p-20 text-lg">
        <div>{$_("nav.exports")}</div>
        <div><Icon src="{ArrowTopRightOnSquare}" outline size="26" /></div>
    </a>

    <a href="{base}/app/publishers/absences" class="btn p-20 text-lg">
        <div>{$_("nav.absences")}</div>
        <div><Icon src="{MinusCircle}" outline size="26" /></div>
    </a>
</div>
