import { writable } from "svelte/store";

let isMobile = writable(false)

const mediaQuery = window.matchMedia('(width <= 640px)')
mediaQuery.addEventListener('change', ({matches}) => {
    if (matches) {
        isMobile.set(true)
    } else {
        isMobile.set(false)
    }
})
if (mediaQuery.matches) {
    isMobile.set(true)
} else {
    isMobile.set(false)
}

export { isMobile }