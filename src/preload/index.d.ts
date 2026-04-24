import type { ElectronAPI } from '@electron-toolkit/preload'

export interface AppAPI {
  onNewCustomer: (callback: () => void) => void
  onAbout: (callback: () => void) => void
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: AppAPI
  }
}

export {}
