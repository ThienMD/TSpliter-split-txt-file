**T SPLITER. FILE SPLITER CROSS PLATFORM (BUILD WITH ELECTRON)**

**`Readme`**

**Install**

clone this repository and run npm install

**Run App**

npm start

**Build APP**

___Prequisite___ 

download and install electron package manager

`npm install electron-packager -g
`

**MAC OSX** 

`npm run package-mac`

or

`electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icon.icns --prune=true --out=release-builds
`

**Windows**

`npm run package-win`

or

`electron-packager . electron-tutorial-app --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="T Spliter"
`

**Linux**

`npm run package-linux`

or

`electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icon.png --prune=true --out=release-builds
`


**Other**

If you want to build installer for macosx(dmg), windows (dmg), debian package. Please follow this link. 

_MacOS_

https://www.christianengvall.se/dmg-installer-electron-app/

_Windows_

https://www.christianengvall.se/electron-windows-installer/

_Linux_

https://www.christianengvall.se/electron-installer-debian-package/
