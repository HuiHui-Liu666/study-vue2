// 引入electron
const { app, BrowserWindow } = require('electron');
let win;

function createWindow() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 800,
    height: 400,
    webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true
    },
  });
    win.webContents.closeDevTools();

  // 加载index.html文件
//   win.loadFile('../html/index.html');
win.loadURL('http://localhost:8080');
  // 自动打开开发者工具
  win.webContents.closeDevTools();

  // 当 window 被关闭，这个事件会被触发
  win.on('closed', () => {
    win = null;
  });
}
// win.webContents.openDevTools()
// Electron 会在初始化后并准备，创建浏览器窗口时，调用这个函数
app.on('ready', createWindow);
// 当全部窗口关闭时退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});