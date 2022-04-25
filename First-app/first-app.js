const fileSystem = require("fs");
const path = require("path");

// args - path, content of the file
fileSystem.writeFileSync("firstfile.txt", "Hello from node.js");
