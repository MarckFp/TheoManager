import { theme } from '$lib/utils/theme';

export const handleClientHooks = () => {
    theme.subscribe((value) => {
        document.documentElement.setAttribute('data-theme', value);
    });
};

handleClientHooks();
