<script lang="ts">
    import { Icon, ListBullet, ArrowTopRightOnSquare, MinusCircle, Sparkles, DocumentText } from "svelte-hero-icons"
    import { base } from '$app/paths'
    import { _ } from 'svelte-i18n'
</script>

<!-- Title -->
<div class="p-4">
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl font-semibold">
        {$_("nav.publishers")}
    </div>
</div>

<!-- Menu -->
<div class="grid grid-cols-2 gap-4 p-4 text-center">
    <a href="{base}/app/publishers/list" class="btn btn-primary p-18 text-lg">
        <div>{$_("nav.list")}</div>
        <div><Icon src="{ListBullet}" outline size="26" /></div>
    </a>

    <a href="{base}/app/publishers/reports" class="btn btn-accent p-18 text-lg">
        <div>{$_("nav.reports")}</div>
        <div><Icon src="{DocumentText}" outline size="26" /></div>
    </a>

    <a href="{base}/app/publishers/exports" class="btn btn-success p-18 text-lg">
        <div>{$_("nav.exports")}</div>
        <div><Icon src="{ArrowTopRightOnSquare}" outline size="26" /></div>
    </a>

    <a href="{base}/app/publishers/absences" class="btn btn-secondary p-18 text-lg">
        <div>{$_("nav.absences")}</div>
        <div><Icon src="{MinusCircle}" outline size="26" /></div>
    </a>

    <a href="{base}/app/publishers/privileges" class="btn btn-info p-16 text-lg col-span-2">
        <div>{$_("nav.privileges")}</div>
        <div><Icon src="{Sparkles}" outline size="26" /></div>
    </a>
</div>
