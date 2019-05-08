'use strict'

const path = require('path')
const {app, ipcMain, Menu, ipcRenderer, BrowserWindow} = require('electron')
const Window = require('./Window')

function main() {
    let mainWindow = new Window({
        file: path.join('renderer', 'index.html')
    })
    let aboutWin

    var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {
                    label: 'About Application',
                    click() {
                        // ipcRenderer.send('about-window')
                        if (!aboutWin) {
                            // create a new add todo window
                            aboutWin = new Window({
                                file: path.join('renderer', 'about.html'),
                                width: 300,
                                height: 250,
                                parent: mainWindow
                            })

                            // cleanup
                            aboutWin.on('closed', () => {
                                aboutWin = null
                            })
                        }
                    }
                },
                {type: 'separator'},
                {
                    label: 'Exit',
                    click() {
                        app.quit()
                    }
                }
            ]
        }
    ])
    Menu.setApplicationMenu(menu);

    //add todo windows

    mainWindow.once('show', () => {
    })

    ipcMain.on('about-window', () => {
        // if addTodoWin does not already exist

    })
}

app.on('ready', main)

app.on('windows-all-closed', function () {
    app.quit()
})
