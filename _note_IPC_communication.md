Electron で、Webアプリのフロントに当たる部分が Renderer？


# フロント
ipcRenderer.invoke("get-user", 123);

# バック
ipcMain.handle("get-user", (event, userId) => {


# note
「ipcRenderer.invoke」と「ipcMain.handle」がセットになっている、という認識でいい？


