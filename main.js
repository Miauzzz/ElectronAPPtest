const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: 1400,
    height: 800,
    minWidth: 1400,
    minHeight: 800,
    frame: true,
    resizable: false,
    autoHideMenuBar: true,
    x: (width - 1400) / 2, // Calculate horizontal position for centering
    y: (height - 800) / 2, // Calculate vertical position for centering
  });

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
