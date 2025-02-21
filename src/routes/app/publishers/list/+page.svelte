<script lang="ts">
    import { Icon, Plus, Pencil, Trash, MagnifyingGlass } from "svelte-hero-icons"
</script>

<!-- Title -->
<div class="p-4">
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl">Publisher List</div>
</div>


<div class="grid grid-cols-1 gap-4 p-2">
    <!-- Filters -->
    <div class="collapse collapse-arrow w-full bg-base-200 border border-base-300 p-1 rounded-box">
        <div class="collapse-title font-semibold">Filters:</div>
        <input type="checkbox" />

        <fieldset class="fieldset collapse-content">
            <label class="fieldset-label" for="appointment">Appointment</label>
            <div class="filter">
                <input class="btn filter-reset" type="radio" id="appointment" aria-label="All"/>
                <input class="btn" type="radio" id="appointment" aria-label="Elder"/>
                <input class="btn" type="radio" id="appointment" aria-label="Ministerial servant"/>
                <input class="btn" type="radio" id="appointment" aria-label="Not appointed"/>
            </div>

            <label class="fieldset-label" for="publisher-type">Publisher Type</label>
            <div class="filter">
                <input class="btn filter-reset" type="radio" id="publisher-type" aria-label="All"/>
                <input class="btn" type="radio" id="publisher-type" aria-label="Baptized"/>
                <input class="btn" type="radio" id="publisher-type" aria-label="Continuous Auxiliary Pioneer"/>
                <input class="btn" type="radio" id="publisher-type" aria-label="Regular Pioneer"/>
                <input class="btn" type="radio" id="publisher-type" aria-label="Special Pioneer"/>
                <input class="btn" type="radio" id="publisher-type" aria-label="Unbaptized"/>
            </div>

            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label class="fieldset-label" for="gender">Gender</label>
                    <div class="filter">
                        <input class="btn filter-reset" type="radio" id="gender" aria-label="All"/>
                        <input class="btn" type="radio" id="gender" aria-label="Male"/>
                        <input class="btn" type="radio" id="gender" aria-label="Female"/>
                    </div>
                </div>
                <div>
                    <label class="fieldset-label" for="field-service-group">Field Service Group</label>
                    <select class="select" id="field-service-group">
                        <option disabled selected>Pick a Service Group</option>
                        <option>Group 1</option>
                        <option>Group 2</option>
                        <option>Group 3</option>
                    </select>
                </div>
            </div>
        </fieldset>
    </div>

    <label class="input w-full">
        <Icon src="{MagnifyingGlass}" size="24" />
        <input type="search" required placeholder="Search"/>
    </label>

    <!-- List -->
    <ul class="list bg-base-100 rounded-box shadow-md">

        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Publisher List</li>

        <li class="list-row">
          <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
          <div>
            <div>Dio Lupa</div>
            <div class="text-xs font-semibold opacity-60">
                <div class="badge badge-outline badge-primary badge-xs">Male</div>
                <div class="badge badge-outline badge-success badge-xs">Elder</div>
            </div>
          </div>
          <button class="btn btn-square btn-primary btn-md">
            <Icon src="{Pencil}" size="18" />
          </button>
          <button class="btn btn-square btn-secondary btn-md">
            <Icon src="{Trash}" size="18" />
          </button>
        </li>

        <li class="list-row">
          <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
          <div>
            <div>Ellie Beilish</div>
            <div class="text-xs font-semibold opacity-60">
                <div class="badge badge-outline badge-secondary badge-xs">Female</div>
            </div>
          </div>
          <button class="btn btn-square btn-primary btn-md">
            <Icon src="{Pencil}" size="18" />
          </button>
          <button class="btn btn-square btn-secondary btn-md">
            <Icon src="{Trash}" size="18" />
          </button>
        </li>

        <li class="list-row">
          <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
          <div>
            <div>Sabrino Gardener</div>
            <div class="text-xs font-semibold opacity-60">
                <div class="badge badge-outline badge-primary badge-xs">Male</div>
                <div class="badge badge-outline badge-warning badge-xs">Ministerial servant</div>
            </div>
          </div>
          <button class="btn btn-square btn-primary btn-md">
            <Icon src="{Pencil}" size="18" />
          </button>
          <button class="btn btn-square btn-secondary btn-md">
            <Icon src="{Trash}" size="18" />
          </button>
        </li>
    </ul>
</div>

<!-- Create Modal -->
<dialog id="create_publisher" class="modal modal-middle">
    <div class="modal-box">
        <h3 class="text-lg font-bold">Create new Publisher</h3>
        <fieldset class="fieldset">

            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label class="label" for="firstname">Firstname:</label>
                    <input class="input w-full" type="text" id="firstname" placeholder="John" />
                </div>
                <div>
                    <label class="label" for="lastname">Lastname:</label>
                    <input class="input w-full" type="text" id="lastname" placeholder="Doe" />
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label class="label" for="gender">Gender:</label>
                    <select class="select w-full" id="gender">
                        <option disabled selected value="">Pick Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label class="label" for="birthday">Birthday:</label>
                    <input class="input w-full" type="date" id="birthday" />
                </div>
            </div>

            <label class="label" for="email">Email:</label>
            <input class="input w-full" type="email" id="email" placeholder="john.doe@example.org" />

            <label class="label" for="phone">Phone:</label>
            <input class="input w-full" type="tel" id="phone" placeholder="+1234567890" />

            <label class="label" for="address">Address:</label>
            <input class="input w-full" type="text" id="address" placeholder="1234 Main St" />

            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label class="label" for="city">City:</label>
                    <input class="input w-full" type="text" id="city" placeholder="City" />
                </div>
                <div>
                    <label class="label" for="zipcode">Zipcode:</label>
                    <input class="input w-full" type="text" id="zipcode" placeholder="ABC123" />
                </div>
            </div>

            <div class="divider"></div>

            <label class="label" for="service-field-group">Service Field Group:</label>
            <select class="select w-full" id="service-field-group">
                <option disabled selected value="">Pick a Field Service Group</option>
                <option value="group1">Group 1</option>
                <option value="group2">Group 2</option>
                <option value="group3">Group 3</option>
            </select>

            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label class="label" for="publisher-type">Publisher Type:</label>
                    <select class="select w-full" id="publisher-type">
                        <option disabled selected value="">Pick a publisher type</option>
                        <option value="baptized">Baptized</option>
                        <option value="continuous_auxiliary_pioneer">Continuous Auxiliary Pioneer</option>
                        <option value="regular_pioneer">Regular Pioneer</option>
                        <option value="special_pioneer">Special Pioneer</option>
                        <option value="unbaptized">Unbaptized</option>
                    </select>
                </div>
                <div>
                    <label class="label" for="appointment">Appointment:</label>
                    <select class="select w-full" id="appointment">
                        <option disabled selected value="">Pick Appointment</option>
                        <option value="elder">Elder</option>
                        <option value="ministerial_servant">Ministerial Servant</option>
                        <option value="unappointed">Not Appointed</option>
                    </select>
                </div>
            </div>

            <!-- TODO: Make this invisible until publisher type is selected -->
            <label class="label" for="baptism">Baptism:</label>
            <input class="input w-full" type="date" id="baptism" />
        </fieldset>
        <div class="modal-action">
            <button class="btn btn-primary">Create</button>
            <form method="dialog">
                <button class="btn btn-secondary">Close</button>
            </form>
        </div>
    </div>
</dialog>

<!--{#if isMobile()}-->
    <button class="btn btn-circle float-btn btn-xl" on:click={() => (document.getElementById('create_publisher') as HTMLDialogElement)?.showModal()}>
        <Icon src="{Plus}" size="24" />
    </button>

    <style>
        .float-btn {
            position: fixed;
            right: 2rem;
            bottom: 8rem;
            z-index: 999;
        }
    </style>
<!--{/if}-->
