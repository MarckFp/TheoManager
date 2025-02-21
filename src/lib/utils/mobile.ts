import { writable } from "svelte/store";

let ismobile = writable(false)

const mediaQuery = window.matchMedia('(width <= 640px)')
mediaQuery.addEventListener('change', ({matches}) => {
    if (matches) {
        ismobile.set(true)
    } else {
        ismobile.set(false)
    }
})
if (mediaQuery.matches) {
    ismobile.set(true)
} else {
    ismobile.set(false)
}

