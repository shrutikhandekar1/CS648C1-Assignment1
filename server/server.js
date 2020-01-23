const express = require('express');

const app = express();
const fileServerMiddleWare = express.static('public');  //reaches 'public' folder for required files

/*
    Meaning of mounting middleware to Express

In this context, "mounts" could be replaced with "registers". "Registers the specified middleware function or functions at the specified path".

The idea is that you have a middleware function and you want to add it to your Express server it so you use app.use() to tell Express about it so that it will add it to the chain of middleware that it will consider for each incoming request.

Internally, Express has an array of middleware functions and an optional path for each one. When a new request comes in, it starts at the beginning of the array and calls the first middleware function whose path matches the incoming request. If that middleware calls next(), then Express looks for the next one to match and calls it and so on...

The "mounts" in your statement is adding a middleware function and optional path to this array so it can be matched against incoming requests.    

*/
app.use('/',fileServerMiddleWare);  

//Setup done now start server

app.listen(3000,function(){
    console.log('App started on port 3000');
})