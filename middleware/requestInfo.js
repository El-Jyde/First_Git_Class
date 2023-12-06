
const express = require ('express');

const requestInfo = (req, res, next) =>{
    req.date = Date()

    console.log(`This API was called on ${req.date}`)

    next()
}

module.exports = requestInfo;







// const requestInfo = (req, res, next) =>(
//     req.reqTime = Date()
//     console.log (`This API was called on ${req.ahead}, 
//      method of ${req.method} , and the URL is ${req.url}`)
//         next()
        
// )
// module.exports = requestInfo
