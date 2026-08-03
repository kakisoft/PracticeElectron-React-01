"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
electron_1.app.disableHardwareAcceleration();
electron_1.app.commandLine.appendSwitch('disable-gpu');
electron_1.app.commandLine.appendSwitch('disable-software-rasterizer');
electron_1.app.commandLine.appendSwitch('no-sandbox');
function createWindow() {
    const win = new electron_1.BrowserWindow({
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
    void win.loadFile(path_1.default.resolve(__dirname, '..', 'index.html'));
}
electron_1.app.whenReady().then(createWindow);
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
