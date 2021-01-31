const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const win = new BrowserWindow({
    // alwaysOnTop: true,
    thickFrame: true,
    frame: false,
  });
  win.loadFile("dist/index.html");
  //   win.webContents.openDevTools();
});
