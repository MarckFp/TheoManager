import {addMessages, init, getLocaleFromNavigator} from 'svelte-i18n'

import en from './en.json'

addMessages('en', en)

export function initLocale() {
	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	})
}
