var Http = require('http');
var Fs = require('fs');

var Server = Http.createServer(function(request, result){
    if(request.url=="/"){
        let data= Fs.readFileSync('Pages/Home.html','utf8');
        result.end(data);
     }     
     else if(request.url=="/About"){   //Read File Sync 
         let data= Fs.readFileSync('Pages/About.html','utf8');
         result.end(data);
     }  
     else if(request.url=="/Product"){   //Read File Asc 
        Fs.readFile('Pages/Product.html',function(error,data){
            result.writeHead(200,{'Content-Type':'text/html'});
            result.write(data);
            result.end(0);
        });        
    }  
    else if(request.url=="/Branch"){   //Read File Asc 
        Fs.readFile('Pages/Branch.html',function(error,data){
            result.writeHead(200,{'Content-Type':'text/html'});
            result.write(data);
            result.end(0);
        });        
    } else{
        let data= Fs.readFileSync('Pages/NotFound.html','utf8');
        result.end(data);
     }
});
Server.listen(4040);
console.log('Server is Running..');