const fs = require('fs')

//Question 2
fs.writeFile('Nodejs_architecture.txt','Node.js is a JavaScript-based platform that is mainly used to create I/O-intensive web applications such as chat apps, multimedia streaming sites, etc. It is built on Google Chrome’s V8 JavaScript engine. A web application is software that runs on a server and is rendered by a client browser that accesses all of the application’s resources through the internet.',function(err){
    if(err){
        console.log('Error:', err);
    }
    else{
        console.log('Saved file');
    }
})

// Question 3
fs.readFile('Nodejs_architecture.txt',function(err,data){
    if(err){
        console.log("Error:", err);
    }
    else{
        console.log('Data: ', data.toString());
    }
})

//Question 4
fs.appendFile('Nodejs_architecture.txt','The Node.js server can efficiently handle a high number of requests by employing the use of Event Queue and Thread Pool.There is no need to establish multiple threads because Event Loop processes all requests one at a time, therefore a single thread is sufficient.The entire process of serving requests to a Node.js server consumes less memory and server resources since the requests are handled one at a time.', function(err){
    if(err){
        console.log('Errror: ', err);
    }
    else{
        console.log("Append file succesfully");
    }
    fs.readFile('Nodejs_architecture.txt',function(err,data){
    if(err){
        console.log('Error:', err);
    }
    else{
        console.log('Data:=> ', data.toString());
    }
   })
})

//Question 5

fs.unlink('Nodejs_architecture.txt',function(err){
    if(err){
        console.log("Error:", err);
    }
    else{
        console.log('File deleted successfully');
    }
})
