import "../app.css";
import { initLocale } from '$lib/i18n/i18n'
import { getCongregation } from '$lib/models/congregation'

export const prerender = true;
export const ssr = false;

initLocale()

