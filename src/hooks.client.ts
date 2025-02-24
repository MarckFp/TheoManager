import { theme } from '$lib/stores/theme';

export const handleClientHooks = () => {
    theme.subscribe((value) => {
        document.documentElement.setAttribute('data-theme', value);
    });
};

handleClientHooks();
