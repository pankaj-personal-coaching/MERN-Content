const http = require("http");
const fs = require("fs");
const port = 3000;
const host = "127.0.0.1";
const server = http.createServer((request, response) => {
  console.log("Server is Working fine!");

  // To serve string we have to specify MIME type to text.
  // response.writeHead(200, { "Content-Type": "text/plain" });
  // In this way We can send Strings as a response.
  // response.end("Server working successfully");
  // We need a JSON data to serve as a response. Lets create one
  // let responseData = {
  //   status: 200,
  //   message: "Success",
  //   data: {
  //     _id: "66a268c7806fb1c9327a58b8",
  //     index: 1,
  //     guid: "1853d5c0-3f6a-430d-a6a6-d7dae578ce3e",
  //     isActive: false,
  //     age: 30,
  //     name: "Peck Reed",
  //     gender: "male",
  //     company: "INQUALA",
  //     email: "peckreed@inquala.com",
  //     phone: "+1 (818) 468-2259",
  //     address: {
  //       addressLine: 190,
  //       street: "Harbor Court",
  //       city: "Gorst",
  //       state: "District Of Columbia",
  //       pin: 895,
  //       latitude: -11.653246,
  //       longitude: -71.758953,
  //     },
  //     greeting: "Hello, Peck Reed! You have 8 unread messages.",
  //     favoriteFruit: "banana",
  //     isDeleted: false,
  //   },
  //   error: null,
  // };
  // response.writeHead(200, { "Content-Type": "application/json" });
  // response.end(JSON.stringify(responseData));
  // let errorData = {
  //   status: 500,
  //   message: "Success",
  //   data: null,
  //   error: new Error("Internal server error!"),
  // };
  // // Change the MIME type to application/json
  // response.writeHead(500, { "Content-Type": "application/json" });
  // response.end(JSON.stringify(errorData));

  // Send HTML file as a response.
  // Change the MIME to html
  // response.writeHead(200, { "Content-Type": "text/html" });
  // fs.readFile("index.html", (err, data) => {
  //   if (err) {
  //     response.end(err.message);
  //   }
  //   response.end(data.toString());
  // });

  // Send pdf file as a response:
  // Change MIME type to pdf
  response.writeHead(200, { "Content-Type": "application/pdf" });
  fs.readFile("JS Questions and Answers.pdf", (err, data) => {
    if (err) {
      response.end(err.message);
    }
    response.write(data);
    response.end();
  });
});

server.listen(port, host, (error) => {
  if (error) {
    console.log("Error occured while starting the server!");
  }
  console.log(`Server is running http://${host}:${port}`);
});
