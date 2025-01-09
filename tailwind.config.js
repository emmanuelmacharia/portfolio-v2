/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,js}'],
  // content: ['./src/**/*.{html, ts, js}'], './src/**/*.{html,ts}', './src/**/*'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {},
    fontFamily: {
      Poppins: ['Poppins'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
      },
      colors: {
        // night shade
        night_shade_primary: 'var(--night-shade-primary)',
        night_shade_secondary: 'var(--night-shade-secondary)',

        // amy crisp
        any_crisp_primary: 'var(--amy-crisp-primary)',
        amy_crisp_secondary: 'var(--amy-crisp-secondary)',

        // dense water
        dense_water_primary: 'var(--dense-water-primary)',
        dense_water_secondary: 'var(--dense-water-secondary)',
        dense_water_accent: 'var(--dense-water-accent)',

        // lawrencium
        lawrencium_primary: 'var( --lawrencium-primary)',
        lawrencium_secondary: 'var(--lawrencium-secondary)',
        lawrencium_accent: 'var(--lawrencium-accent)',

        //frost
        frost_primary: 'var(--frost-primary)',
        frost_secondary: 'var(--frost-secondary)',

        // royal
        royal_primary: 'var(--royal-primary)',
        royal_secondary: 'var(--royal-secondary)',

        // atlas
        atlas_primary: 'var(--atlas-primary)',
        atlas_secondary: 'var(--atlas-secondary)',
        atlas_accent: 'var(--atlas-accent)',

        // angular
        bright_blue: 'var(--bright-blue)',
        electric_violet: 'var(--electric-violet)',
        french_violet: 'var(--french-violet)',
        vivid_pink: 'var(--vivid-pink)',
        hot_red: 'var(--hot-red)',
        orange_red: 'var(--orange-red)',

        color_primary: 'var(--color-primary)',
        color_secondary: 'var(--color-secondary)',
        color_white: 'var(--white)',
      },
      backgroundImage: theme => ({
        // night shade

        'gradient-night-shade': `linear-gradient(to top, ${theme('colors.night_shade_primary')} 0%, ${theme('colors.night_shade_secondary')} 100%)`,
        'gradient-amy-crisp': ` linear-gradient(120deg, ${theme('colors.any_crisp_primary')} 0%, ${theme('colors.amy_crisp_secondary')} 100%)`,
        'gradient-dense-water': `linear-gradient(to right, ${theme('colors.dense_water_primary')} 0%,${theme('colors.dense_water_secondary')} 31%, ${theme('colors.dense_water_accent')} 100%)`,
        'gradient-lawrencium': ` linear-gradient(to right, ${theme('colors.lawrencium_primary')}, ${theme('colors.lawrencium_secondary')}, ${theme('colors.lawrencium_accent')})`,
        'gradient-frost': `linear-gradient(to right, ${theme('colors.frost_secondary')}, ${theme('colors.frost_primary')})`,
        'gradient-royal': `linear-gradient(to right, ${theme('colors.royal_secondary')}, ${theme('colors.royal_primary')})`,
        'gradient-atlas': `linear-gradient(to right, ${theme('colors.atlas_accent')}, ${theme('colors.atlas_secondary')}, ${theme('colors.atlas_primary')})`,
        'gradient-angular': `linear-gradient(90deg, ${theme('colors.orange_red')} 0%, ${theme('colors.vivid_pink')} 50%, ${theme('colors.electric_violet')} 100%)`,
      }),
    },
  },
  plugins: [],
  darkMode: 'selector',
};
