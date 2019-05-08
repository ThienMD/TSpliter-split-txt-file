/**
 * Created by thienmd on 5/4/19
 */
var appVersion = require('electron').remote.app.getVersion();

txtVersion = document.getElementById('txtVersion')
txtVersion.textContent = appVersion
