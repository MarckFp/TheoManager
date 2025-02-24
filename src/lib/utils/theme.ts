import { writable } from "svelte/store";

export const availableThemes = ["dark", "light", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "acid", "lemonade", "night", "coffe", "winter", "dim", "nord", "sunset", "caramellate", "abyss", "silk"]

// Load from localStorage or default to 'dark'
const initialTheme = localStorage.getItem('theme') || 'dark'
export const theme = writable(initialTheme)

export function setTheme(newTheme: string) {
    if (!availableThemes.includes(newTheme)) return; // Prevent invalid themes
    theme.set(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Ensure theme is applied when the store initializes
theme.subscribe((value) => {
    document.documentElement.setAttribute('data-theme', value);
})
