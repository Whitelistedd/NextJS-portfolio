export type toggleFunction = () => void

export interface MobileMenuProps {
  showMenu: boolean
  toggleMobileMenu: toggleFunction
  t: (string: string) => string
}

export interface NavbarProps {
  toggleTheme: toggleFunction
  SelectedTheme: string
}

export interface ThemeChangerProps {
  toggleTheme: toggleFunction
  SelectedTheme: string
}

export interface LanguageChangerProps {
  className?: string
}
