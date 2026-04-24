import { Menu, Tray, nativeImage, BrowserWindow } from 'electron'
import path from 'node:path'

const createTray = (mainWindow: BrowserWindow) => {
  const iconPath = path.join('resources', process.platform === 'win32' ? 'icon.ico' : 'icon.png')
  const trayIcon = nativeImage.createFromPath(iconPath)
  const tray = new Tray(trayIcon)

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Gerenciamento de Clientes', enabled: false },
    { type: 'separator' },
    {
      label: 'Abrir',
      click: () => {
        mainWindow.show()
      }
    },
    {
      label: 'Cadastrar Clientes',
      click: () => {
        mainWindow.webContents.send('new-client')

        if (mainWindow.isMinimized()) {
          mainWindow.restore()
        }
        mainWindow.show()
      }
    },
    {
      label: 'Sobre',
      click: () => {
        mainWindow.webContents.send('about')

        if (mainWindow.isMinimized()) {
          mainWindow.restore()
        }
        mainWindow.show()
      }
    },
    {
      label: 'Minimizar',
      click: () => {
        mainWindow.minimize()
      }
    },

    { type: 'separator' },
    {
      label: 'Sair',
      click: () => {
        mainWindow.close()
      }
    }
  ])

  tray.setToolTip('Gerenciamento de Clientes')
  tray.setContextMenu(contextMenu)

  return tray
}

export default createTray
