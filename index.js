const electron = require('electron');
const sizeOf = require('image-size');

const { app, BrowserWindow, ipcMain } = electron;
let mainWindows;

app.on('ready', () => {
  mainWindows = new BrowserWindow({});
  mainWindows.loadURL(`file://${__dirname}/index.html`);

  ipcMain.on('obterDimensoesDaImagem', (event, path) => {
    sizeOf(path, (_err, dimensions) => {
      mainWindows.webContents.send('dimensoesDaImagem', dimensions);
    });
  });
});
