const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path') 

let win  

function createWindow() { 
    win = new BrowserWindow({
        title: 'SLIGAM Game Manager',
        icon: 'icon.ico',
        width: 800, 
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    }) 
    win.loadFile('index.html');
    //win.webContents.openDevTools()
}  

app.on('ready', createWindow) 