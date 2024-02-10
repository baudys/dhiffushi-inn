import { create } from 'zustand'

interface MenuStore {
  isMenuOpen: boolean
  openMenu: () => void
  closeMenu: () => void
}

export const useMenu = create<MenuStore>(set => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
}))
