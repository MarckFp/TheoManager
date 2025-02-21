<script lang="ts">
  import { Icon, CurrencyDollar, LockClosed, Wifi, Bolt, DeviceTablet } from "svelte-hero-icons"

  let congregationCode: string,
    congregationPassword: string,
    congregationData: string,
    congregationName: string,
    jwCode: string,
    joinCode: string,
    joinPassword: string;
  let stage = 1;

</script>

<div class="hero bg-base-200 min-h-screen relative">
  <div class="hero-content text-center pb-20">
    <div class="max-w-lg">
      {#if stage === 1}
        <h1 class="text-5xl font-bold">TheoManager</h1>
        <p class="py-6">
          TheoManager is an app to manage all things related with your congregation. From meetings to preaching and kingdom hall matter everything in one place.
        </p>
      {:else if stage === 2}
        <h1 class="text-5xl font-bold">Features</h1>
        <p class="py-6">
          TheoManager is designed with love and care to help you in any matter, designed to be:
        </p>
        <ul class="list bg-base-100 rounded-box shadow-md mb-4">
          <li class="list-row">
            <div class="size-10 rounded-box"><Icon src={CurrencyDollar}/></div>
            <div>
              <div class="text-xs uppercase font-semibold opacity-60">Free and Open Source</div>
              <div>TheoManager is designed to be free so everyone can benefit from it</div>
            </div>
          </li>
          <li class="list-row">
            <div class="size-10 rounded-box"><Icon src={LockClosed}/></div>
            <div>
              <div class="text-xs uppercase font-semibold opacity-60">Secure and Private</div>
              <div>The app works in a secure and private way, all data is inside your device and your congregation colleagues.</div>
            </div>
          </li>
          <li class="list-row">
            <div class="size-10 rounded-box"><Icon src={Wifi}/></div>
            <div>
              <div class="text-xs uppercase font-semibold opacity-60">Offline</div>
              <div>You can manage your data even without having a network!</div>
            </div>
          </li>
          <li class="list-row">
            <div class="size-10 rounded-box"><Icon src={Bolt}/></div>
            <div>
              <div class="text-xs uppercase font-semibold opacity-60">Fast</div>
              <div>Designed to be fast, reliable and performant</div>
            </div>
          </li>
          <li class="list-row">
            <div class="size-10 rounded-box"><Icon src={DeviceTablet}/></div>
            <div>
              <div class="text-xs uppercase font-semibold opacity-60">Cross Platform</div>
              <div>You can use it everywhere! From a Mobile device to a Desktop one</div>
            </div>
          </li>
        </ul>

      {:else if stage === 3}
        <h1 class="text-5xl font-bold">Create or Join a Congregation</h1>
        <div class="grid grid-cols-1 gap-4 py-6">
          <button class="btn btn-accent" onclick={() => (document.getElementById('congregation_join') as HTMLDialogElement)?.showModal()}>Join</button>
          <button class="btn btn-primary" onclick={() => (document.getElementById('congregation_create') as HTMLDialogElement)?.showModal()}>Create</button>
        </div>
      {/if}
      {#if stage > 1}
        <button class="btn btn-secondary" onclick={() => stage--}>Back</button>
      {/if}
      {#if stage < 3}
        <button class="btn btn-primary" onclick={() => stage++}>Next</button>
      {/if}
    </div>
  </div>
  <ul class="steps w-auto flex justify-center gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
    <li class={stage >= 1 ? 'step step-primary' : 'step'}>Welcome</li>
    <li class={stage >= 2 ? 'step step-primary' : 'step'}>Features</li>
    <li class={stage >= 3 ? 'step step-primary' : 'step'}>Create/Join a Congregation</li>
  </ul>
</div>


<!-- Create Congregation -->
<dialog id="congregation_create" class="modal modal-center sm:modal-middle">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Create new Congregation</h3>
    
    <label class="label mt-2" for="congregation-name">Congregation Name:</label>
    <input type="text" class="input w-full" id="congregation-name" placeholder="New World - North" required bind:value={congregationName}/>

    <label class="label mt-2" for="congregation-code">Congregation Code:</label>
    <input type="text" class="input w-full" id="congregation-code" placeholder="Code" required bind:value={congregationCode}/>

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

    <button class="btn btn-primary mt-2 w-full">Create congregation</button>

    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <button class="btn btn-secondary">Close</button>
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

    <button class="btn btn-primary mt-2 w-full">Join congregation</button>

    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <button class="btn btn-secondary w-full">Close</button>
      </form>
    </div>
  </div>
</dialog>
