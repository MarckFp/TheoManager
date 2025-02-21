<script lang="ts">
    import { page } from '$app/state';
</script>

<div id="publisher-layout" class="grid grid-cols-1 gap-4">
    <div role="tablist" class="tabs tabs-border grid grid-cols-3">
        <a role="tab" href="/app/publishers" class={page.url.pathname == '/app/publishers' ? "tab tab-active": "tab"}>List</a>
        <a role="tab" href="/app/publishers/reports" class={page.url.pathname == '/app/publishers/reports' ? "tab tab-active": "tab"}>Reports</a>
        <a role="tab" href="/app/publishers/exports" class={page.url.pathname == '/app/publishers/exports' ? "tab tab-active": "tab"}>Exports</a>
    </div>
    <slot />
</div>