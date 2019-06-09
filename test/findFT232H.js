var ftdi = require('bindings')('ftdi.node'),
    FTDIDriver = ftdi.FtdiDriver,
    ftdiApi = require('../index.js');

FTDIDriver.findAll(null, null, (err, devices)=>{
    for(var i = 0; i < devices.length; i++){
        var dev = devices[i];
        console.log(`Test: ${JSON.stringify(dev)}`);
    }
    
});

