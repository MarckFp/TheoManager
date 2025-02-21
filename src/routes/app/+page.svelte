<script lang="ts">
    import { Icon, Cog6Tooth } from "svelte-hero-icons"
    import { _ } from 'svelte-i18n'
</script>

<div>
    <!-- User -->
    <div class="px-4 pt-4 pb-2">
        <div class="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl">{$_('home.welcome')} New World - North</div>
    </div>

    <div class="divider px-4 py-2"></div>

    <!-- Stats -->
    <div class="px-4 pt-2 pb-4">
        <a class="btn btn-md btn-block" href="/app/settings">
            {$_('nav.settings')}
            <Icon src="{Cog6Tooth}" size="24" />
        </a>
    </div>
</div>
