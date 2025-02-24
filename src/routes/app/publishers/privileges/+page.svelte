<script lang="ts">
    import { Icon, ArrowUturnLeft } from "svelte-hero-icons"
    import { base } from '$app/paths'
    import { _ } from 'svelte-i18n'
</script>

<!-- Title -->
<div class="p-4">
    <div class="card bg-base-300 rounded-box items-center h-20 grid grid-cols-3 gap-16">
        <a class="btn btn-circle btn-secondary ml-4" href="{base}/app/publishers">
            <Icon src="{ArrowUturnLeft}" outline size="26" />
        </a>
        <span class="text-2xl justify-center text-center font-semibold">{$_("nav.privileges")}</span>
        <div class="w-10"></div>
    </div>
</div>
