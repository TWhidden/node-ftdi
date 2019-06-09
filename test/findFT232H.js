var ftdi = require('bindings')('ftdi.node'),
    FTDIDriver = ftdi.FtdiDriver,
    ftdiApi = require('../index.js');


FTDIDriver.findAll(null, null, (err, devices)=>{
    console.log("\n*******************");
    console.log("Driver Find All");
    console.log("*******************");
    for(var i = 0; i < devices.length; i++){
        var dev = devices[i];
        console.log(`Device ${i}: ${JSON.stringify(dev)}`);
    }
});

// Adafruit FT232H
// Device Json: {"description":"FT232H","serialNumber":"FT8SS4JU","locationId":7764,"index":0,"vendorId":1027,"productId":24596}

const vendorId = 1027;
const productId = 24596;

ftdiApi.find(vendorId, productId, (err, devices)=>{

    console.log("\n*******************");
    console.log("Api find FT232H by vendor/product id");
    console.log("*******************");

    for(var i = 0; i < devices.length; i++){
        var device = devices[i];
        console.log(`Device ${i}: ${JSON.stringify(device)}`);
    }
});

// 0 for vendorId and productId will find all
ftdiApi.find(0, 0, (err, devices)=>{

    console.log("\n*******************");
    console.log("Api find Any");
    console.log("*******************");

    for(var i = 0; i < devices.length; i++){
        var device = devices[i];
        console.log(`Device ${i}: ${JSON.stringify(device)}`);
    }
});

//var dev = new ftdiApi.FtdiDevice(ftdiApi.bitmodes.mpsse);
