import { writable } from "svelte/store";

export let message = writable("")
export let type = writable("success")
export let duration = writable(3000)
