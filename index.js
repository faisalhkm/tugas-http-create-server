const Http = require("http");
const Fs = require("fs");

// const onRequest = (request, response) => {
//     response.writeHead(200, { "Content-Type": 'text/html'})
//     Fs.readFile("index.html", null, (error, data) => {
//         if(error) {
//             response.writeHead(404)
//             response.write("file not found")
//         } else {
//             response.write(data)
//         }
//         response.end()
//     })
// }

// Http.createServer(onRequest).listen(4000)

function onRequest(request, response) {
    response.writeHead(200, { "Content-Type": 'application/json'})
    const data = {
        name: "Faisal Hakim",
        age: "25",
        address: "Bekasi"
       }
        response.end(JSON.stringify(data))
    }

Http.createServer(onRequest).listen(4000)