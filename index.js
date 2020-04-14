#!/usr/bin/env node
var fs = require("fs-extra");
const fileName = process.argv.slice(2).join("_");
const CURR_DIR = process.cwd();
const templatePath = `${__dirname}/react-template`;
const location = `${CURR_DIR}/${fileName}`;
const { exec } = require("child_process");

if (fs.existsSync(location)) {
    console.log(`Folder already exsisting in the path`)
    process.exit(0)
}else{
    fs.mkdirSync(location);
}

fs.copy(templatePath, location, function (err) {
  if (err) {
    console.log("An error occured while creating the template.");
    console.error(err);
    process.exit(0);
  }
  console.log("Template Created Successfully!\n");
  console.log("Dependencies are being installed...");
  exec(`cd ${location} && npm install`, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err);
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  });
});
