export const theme: ThemeType = {
  light: {
    background: '#f0f4f9',
    secondaryBackground: 'white',
    tagColor: 'white',
    primaryColor: 'black',
    secondaryColor: '#433E82',
  },
  dark: {
    background: '#121212',
    secondaryBackground: '#3A3A3A',
    primaryColor: 'white',
    tagColor: '#212121',
    secondaryColor: '#433E82',
  },
}

export type ThemeType = {
  [key: string]: {
    [key: string]: string
  }
}
