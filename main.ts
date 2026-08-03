import { app, BrowserWindow } from 'electron';
import path from 'path';

app.disableHardwareAcceleration();
app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('disable-software-rasterizer');
app.commandLine.appendSwitch('no-sandbox');

function createWindow(): void {
  const win = new BrowserWindow({
    width: 420,
    height: 320,
    minWidth: 320,
    minHeight: 260,
    resizable: true,
    title: 'Electron React 17 Sample',
    webPreferences: {
      nodeIntegration: true
    }
  });

  void win.loadFile(path.resolve(__dirname, '..', 'index.html'));
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
