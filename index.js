const express = require('express');
const app = express();

var BUILD_NO = '1.1.0';

app.get('/getBuildNo',(req, res)=>{
    res.json({'build_no': BUILD_NO});
})

app.get('/getApk',(req,res)=>{
    res.sendFile(__dirname+'/app-release.apk');
})

app.listen(3000);