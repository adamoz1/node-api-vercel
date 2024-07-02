const express = require('express');
const app = express();

var BUILD_NO = 0.01;

app.get('/getBuildNo',(req, res)=>{
    res.json({'build_no': BUILD_NO});
})

app.listen(3000);