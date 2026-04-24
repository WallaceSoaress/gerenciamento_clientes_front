import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  onNewCustomer: (callback: () => void) => {
    ipcRenderer.on('new-client', callback)
  },
  onAbout: (callback: () => void) => {
    ipcRenderer.on('about', callback)
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  const exposedWindow = window as Window &
    typeof globalThis & {
      electron: typeof electronAPI
      api: typeof api
    }

  exposedWindow.electron = electronAPI
  exposedWindow.api = api
}
