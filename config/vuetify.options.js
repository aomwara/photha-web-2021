import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

const palette = {
  smart: {
    primary: colors.cyan.base, // primary main
    primarylight: colors.cyan.lighten4, // primary light
    primarydark: colors.cyan.darken3, // primary dark
    secondary: colors.amber.darken2, // secondary main
    secondarylight: colors.amber.lighten4, // secondary light
    secondarydark: colors.amber.darken4, // secondary dark
    anchor: colors.blue.base // link
  }
}

export const theme = {
  ...palette.smart
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
