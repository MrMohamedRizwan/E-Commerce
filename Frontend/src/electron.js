// main.js

// import { app, BrowserWindow } from 'electron';

// Instead of this:
// import { app, BrowserWindow } from 'electron';

// Use this:
import * as electron from 'electron';
const { app, BrowserWindow } = electron;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile('dist/index.html'); // Assuming Vite build output is in 'dist' directory

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
