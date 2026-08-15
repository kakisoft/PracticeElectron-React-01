import { app, BrowserWindow } from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

app.disableHardwareAcceleration();
app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('disable-software-rasterizer');
app.commandLine.appendSwitch('no-sandbox');

function createWindow(): void {
  const win = new BrowserWindow({
    width: 480,
    height: 460,
    minWidth: 400,
    minHeight: 380,
    resizable: true,
    title: 'Electron React 17 Sample',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  void win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  if (!app.isPackaged) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
