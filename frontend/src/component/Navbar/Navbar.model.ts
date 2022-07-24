export type toggleFunction = () => void

export interface MobileMenuProps {
  showMenu: boolean
  toggleMobileMenu: toggleFunction
}

export interface NavbarProps {
  toggleTheme: toggleFunction
  SelectedTheme: string
}

export interface ThemeChangerProps {
  toggleTheme: toggleFunction
  SelectedTheme: string
}
