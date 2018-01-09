const { BrowserWindow, Menu, Tray, app, shell } = require('electron')
const title = require('../package.json').name

// http://www.irasutoya.com/2017/12/blog-post_410.html
const iconPath = `${__dirname}/../assets/images/money_kasoutsuuka_b.png`

let mainWindow
let tray

if (process.platform !== 'darwin') {
  app.on('window-all-closed', () => app.quit())
}

app.on('ready', async () => {
  mainWindow = new BrowserWindow({
    title,
    icon: iconPath,
    width: 1820,
    height: 680,
    minWidth: 320,
    minHeight: 240,
    acceptFirstMouse: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      backgroundThrottling: false,
    },
  })
    .on('close', event => {
      event.preventDefault()
      mainWindow && mainWindow.hide()
    })
  mainWindow.setMenu(null)
  mainWindow.webContents
    .on('new-window', (event, url) => {
      event.preventDefault()
      setTimeout(() => shell.openExternal(url))
    })


  tray = new Tray(iconPath)
    .on('click', () => tray.popUpContextMenu())
    .on('double-click', () => mainWindow.show())
  tray.setTitle(title)
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: 'Open Window', click: () => mainWindow.show() },
    { label: 'Quit', click: () => mainWindow.destroy() },
  ]))

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.show()
})
