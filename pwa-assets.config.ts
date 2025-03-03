import {
    createAppleSplashScreens,
    defineConfig,
    minimal2023Preset,
} from '@vite-pwa/assets-generator/config'

  const IMAGE = 'static/android-chrome-512x512.png'

export default defineConfig({
    headLinkOptions: {
        preset: '2023',
    },
    preset: {
        ...minimal2023Preset,
        appleSplashScreens: createAppleSplashScreens({
        padding: 0.3,
        resizeOptions: { fit: 'contain', background: 'white' },
        darkResizeOptions: { fit: 'contain', background: 'black' },
        linkMediaOptions: {
            log: true,
            addMediaScreen: true,
            xhtml: true,
        },
        }, ['iPad Air 9.7"']),
    },
    images: IMAGE,
})
