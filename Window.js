/**
 * Created by thienmd on 5/4/19
 */
'user strict'
const {BrowserWindow, Menu, app, ipcRenderer} = require('electron')

const defaultProps = {
    width: 600,
    height: 440,
    resizable: false,
    show: false,

}

class Window extends BrowserWindow {
    constructor({file, ...windowSettings}) {
        windowSettings.nodeintegration = true
        super({...defaultProps, ...windowSettings})
        const webContents = this.webContents
        //load html and devtools
        this.loadFile(file)
        // this.webContents.openDevTools()

        //gracefully show when ready to prevent flickering
        this.once('ready-to-show', () => {
            this.show()
        })

    }
}

module.exports = Window
