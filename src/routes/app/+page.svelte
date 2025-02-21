<script lang="ts">
    import { Icon, Cog6Tooth } from "svelte-hero-icons"
    import { base } from '$app/paths'
    import { _ } from 'svelte-i18n'
</script>

<div>
    <!-- User -->
    <div class="px-4 pt-4 pb-2">
        <div class="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl">{$_('home.welcome')} New World - North</div>
    </div>

    <div class="divider px-4 py-2"></div>

    <!-- Stats -->

    <!-- Menu -->
    <div class="grid grid-cols-2 gap-4 p-4 text-center">
        <a href="{base}/app/publishers/list" class="btn p-8 text-lg col-span-2">
            <div>{$_("nav.settings")}</div>
            <div><Icon src="{Cog6Tooth}" outline size="26" /></div>
        </a>
    </div>
</div>
