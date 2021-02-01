const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const win = new BrowserWindow({
    // alwaysOnTop: true,
    thickFrame: true,
    frame: false,
  });
  // win.loadFile('www/index.html');
  win.loadURL("http://localhost:1234");
  win.webContents.openDevTools();
});
