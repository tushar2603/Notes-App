const yargs = require('yargs');
const notes = require('./notes.js');
const clc = require("cli-color");

let title = yargs.argv.title;
let body = yargs.argv.body;
let command = yargs.argv._[0];

if(command === "add"){
    notes.addNote(title,body);
}else if(command === "remove"){
    notes.removeNote(title);
}else if(command === "list"){
    console.log(clc.bgBlue("Your notes: "));
    notes.listAll();
}
else if(command === "read"){
    console.log(clc.black.bgWhite("The following note reads as follows: "));
    notes.readNote(title);
}else{
    console.log("Command does not exist!");
}