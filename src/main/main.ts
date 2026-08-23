import { app, BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

app.disableHardwareAcceleration();
app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('disable-software-rasterizer');
app.commandLine.appendSwitch('no-sandbox');

function createWindow(): void {
  const win = new BrowserWindow({
    width: 760,
    height: 540,
    minWidth: 640,
    minHeight: 460,
    resizable: true,
    title: 'Electron React 17 Sample',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  if (!app.isPackaged) {
    win.webContents.once('did-finish-load', () => {
      win.webContents.openDevTools({ mode: 'detach' });
    });
  }

  void win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
}

async function startApplication(): Promise<void> {
  await app.whenReady();

  if (!app.isPackaged) {
    try {
      const extension = await installExtension(REACT_DEVELOPER_TOOLS, {
        loadExtensionOptions: { allowFileAccess: true }
      });
      console.log(`DevTools extension loaded: ${extension.name}`);
    } catch (error) {
      console.warn('React DevTools could not be loaded.', error);
    }
  }

  createWindow();
}

void startApplication();

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
