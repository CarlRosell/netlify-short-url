const fs = require("fs");
const { urls } = require("./urls.json");

const redirectContent = urls.map(a => `/${a.code} ${a.url}`).join("\n");

fs.writeFile("public/_redirects", redirectContent, err => {
  // If an error occurred, show it and return
  if (err) return console.error(err);
  // Successfully wrote contents to the file!
});
