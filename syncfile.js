const fs = require("fs");

fs.writeFileSync("read.txt","Hey this is Vansh Jindal");
// fs.writeFileSync("read.txt","Hey this is Vansh Jindal");
fs.appendFileSync("read.txt"," and its a great life ");
 const buf_data=fs.readFileSync("read.txt");
 console.log(buf_data);


//  <Buffer 48 65 79 20 74 68 69 73 20 69 73 20 56 61 6e 73 68 20 4a 69 6e 64 61 6c 20 61 6e 64 20 69 20 61 6d 20 6c 65 61 72 6e 69 6e 67 20 6e 6f 64 65 20 6a 73 ... 18 more bytes>
//     //thisis the packets that are converted from the main file 

// org_data = buf_data.toString();
// console.log(org_data);
