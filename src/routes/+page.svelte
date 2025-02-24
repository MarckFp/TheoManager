<script lang="ts">
  import { Icon, CurrencyDollar, LockClosed, Wifi, Bolt, DeviceTablet } from "svelte-hero-icons"
  import { _ } from 'svelte-i18n'
  import { base } from '$app/paths'
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { createCongregation } from '$lib/models/congregation'

  let congregationAddress: string,
    congregationPassword: string,
    congregationCity: string,
    congregationCountry: string,
    congregationZipcode: string,
    congregationName: string,
    jwCode: string,
    joinCode: string,
    joinPassword: string,
    stage = 1;

  function create() {
    createCongregation({
      address: congregationAddress,
      city: congregationCity,
      country: congregationCountry,
      zipcode: congregationZipcode,
      name: congregationName,
      jw_code: jwCode,
      password: congregationPassword
    })
  }

  onMount(() => {
    const congregationID = localStorage.getItem('congregationID')
    if (congregationID) {
      goto(`${base}/app`)
    }
  })

</script>

<!-- TODO: Add stage to login/register username before creating congregation -->

<div class="hero bg-base-200 min-h-screen relative">
  <div class="hero-content text-center pb-20">
    <div class="max-w-lg">
      {#if stage === 1}
        <h1 class="text-5xl font-bold">TheoManager</h1>
        <p class="py-6">
          {$_('welcome.description')}
        </p>
      {:else if stage === 2}
        <h1 class="text-5xl font-bold">{$_('welcome.features')}</h1>
        <p class="py-6">
          {$_('welcome.features-text')}
        </p>
        <ul class="list bg-base-100 rounded-box shadow-md mb-4">
          <li class="list-row">
            <div class="size-10 rounded-box"><Icon src={CurrencyDollar}/></div>
            <div>
              <div class="text-xs uppercase font-semibold opacity-60">{$_('welcome.foss')}</div>
              <div>{$_('welcome.foss-text')}</div>
            </div>
          </li>
          <li class="list-row">
            <div class="size-10 rounded-box"><Icon src={LockClosed}/></div>
            <div>
              <div class="text-xs uppercase font-semibold opacity-60">{$_('welcome.secure-private')}</div>
              <div>{$_('welcome.secure-private-text')}</div>
            </div>
          </li>
          <li class="list-row">
            <div class="size-10 rounded-box"><Icon src={Wifi}/></div>
            <div>
              <div class="text-xs uppercase font-semibold opacity-60">{$_('welcome.offline')}</div>
              <div>{$_('welcome.offline-text')}</div>
            </div>
          </li>
          <li class="list-row">
            <div class="size-10 rounded-box"><Icon src={Bolt}/></div>
            <div>
              <div class="text-xs uppercase font-semibold opacity-60">{$_('welcome.fast')}</div>
              <div>{$_('welcome.fast-text')}</div>
            </div>
          </li>
          <li class="list-row">
            <div class="size-10 rounded-box"><Icon src={DeviceTablet}/></div>
            <div>
              <div class="text-xs uppercase font-semibold opacity-60">{$_('welcome.cross-platform')}</div>
              <div>{$_('welcome.cross-platform-text')}</div>
            </div>
          </li>
        </ul>

      {:else if stage === 3}
        <h1 class="text-5xl font-bold">{$_('welcome.create-join-title')}</h1>
        <div class="grid grid-cols-1 gap-4 py-6">
          <button class="btn btn-accent p-10" onclick={() => (document.getElementById('congregation_join') as HTMLDialogElement)?.showModal()}>{$_('nav.join')}</button>
          <button class="btn btn-primary p-10" onclick={() => (document.getElementById('congregation_create') as HTMLDialogElement)?.showModal()}>{$_('nav.create')}</button>
        </div>
      {/if}
      {#if stage > 1}
        <button class="btn btn-secondary" onclick={() => stage--}>{$_('nav.back')}</button>
      {/if}
      {#if stage < 3}
        <button class="btn btn-primary" onclick={() => stage++}>{$_('nav.next')}</button>
      {/if}
    </div>
  </div>
  <div class="absolute bottom-4 left-1/2 w-screen flex justify-center gap-2 transform -translate-x-1/2">
    <ul class="steps">
      <li class={stage >= 1 ? 'step step-primary' : 'step'}>{$_('welcome.welcome')}</li>
      <li class={stage >= 2 ? 'step step-primary' : 'step'}>{$_('welcome.features')}</li>
      <li class={stage >= 3 ? 'step step-primary' : 'step'}>{$_('welcome.create-join')}</li>
    </ul>
  </div>
</div>


<!-- Create Congregation -->
<dialog id="congregation_create" class="modal modal-center sm:modal-middle">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Create new Congregation</h3>
    
    <label class="label mt-2" for="congregation-name">Congregation Name:</label>
    <input type="text" class="input w-full" id="congregation-name" placeholder="New World - North" required bind:value={congregationName}/>

    <label class="label mt-2" for="congregation-address">Congregation Address:</label>
    <input type="text" class="input w-full" id="congregation-address" placeholder="Address" required bind:value={congregationAddress}/>

    <label class="label mt-2" for="congregation-city">Congregation City:</label>
    <input type="text" class="input w-full" id="congregation-city" placeholder="City" required bind:value={congregationCity}/>

    <label class="label mt-2" for="congregation-country">Congregation Country:</label>
    <input type="text" class="input w-full" id="congregation-country" placeholder="Country" required bind:value={congregationCountry}/>

    <label class="label mt-2" for="congregation-zipcode">Congregation Zipcode:</label>
    <input type="text" class="input w-full" id="congregation-zipcode" placeholder="Zipcode" required bind:value={congregationZipcode}/>

    <label class="label mt-2" for="jw-code">Congregation JW Code:</label>
    <input type="text" class="input w-full" id="jw-code" placeholder="JW Code" bind:value={jwCode}/>

    <label class="label mt-2" for="congregation-password">Congregation Password:</label>
    <input type="password" class="input validator w-full" id="congregation-password" placeholder="Password" required minlength="8" pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])." bind:value={congregationPassword}/>
    <p class="validator-hint">
      Must be more than 8 characters, including
      <br/>At least one number
      <br/>At least one lowercase letter
      <br/>At least one uppercase letter
    </p>

    <a class="btn btn-primary mt-2 w-full" href="{base}/app" onclick={create}>{$_('nav.create')}</a>

    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <button class="btn btn-secondary">{$_('nav.close')}</button>
      </form>
    </div>
  </div>
</dialog>

<!-- Join Congregation -->
<dialog id="congregation_join" class="modal modal-center sm:modal-middle">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Join a congregation</h3>

    <label class="label mt-2" for="join-code">Congregation Code:</label>
    <input type="text" class="input w-full" id="join-code" placeholder="Code" required bind:value={joinCode}/>

    <label class="label mt-2" for="join-password">Congregation Password:</label>
    <input type="password" class="input w-full" id="join-password" placeholder="Password" required bind:value={joinPassword}/>

    <a class="btn btn-primary mt-2 w-full" href="{base}/app">{$_('nav.join')}</a>

    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <button class="btn btn-secondary w-full">{$_('nav.close')}</button>
      </form>
    </div>
  </div>
</dialog>
