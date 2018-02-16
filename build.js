const fsextra = require('fs-extra');
const { exec } = require('child_process');
fsextra.copy('./src/app/ngx-livesearch', './dist-lib', err => {
    if (err) return console.error(err);
    console.log('Copied files');
});

