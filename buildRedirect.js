const fs = require("fs");
const { urls } = require("./urls.json");

const redirectContent = urls.map(a => `/${a.code} ${a.url}`).join("\n");

fs.writeFile("public/_redirects", redirectContent, function(err) {
  // If an error occurred, show it and return
  if (err) return console.error(err);
  // Successfully wrote binary contents to the file!
});
