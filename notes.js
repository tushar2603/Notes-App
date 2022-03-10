const fs = require("fs");
const clc = require("cli-color");

let fetchNotes = () =>{
    try {
       return JSON.parse(fs.readFileSync('notes.txt'));
    } catch (error) {
        return [];
    }
}

let addNote = (title, body) =>{
    let notes = fetchNotes();

    let note = {
        title,
        body
    };

    let duplicate = notes.filter((note) => note.title === title);

    if (duplicate.length === 0){
        console.log(clc.black.bgGreen("New note created!"));
        notes.push(note)
        fs.writeFileSync("notes.txt", JSON.stringify(notes));
    }else{
        console.log(clc.red("Title already taken!"));
    }

    
}

let removeNote = (title) =>{
    let notes = fetchNotes();

    let found = notes.filter((note) => note.title === title);

    if(found.length === 1){
        console.log(clc.black.bgYellow("Note removed!"));
        let filteredNotes = notes.filter((note) =>
        note.title !== title
    );

    fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
    }else{
        console.log(clc.red("Note not found!"));
    }

}


let listAll = () =>{
    let notes = fetchNotes();

    notes.forEach((note)=>console.log(note.title));
}

let readNote = (title) =>{
    let notes = fetchNotes();

    let filteredNotes = notes.filter((note) =>
        note.title !== title
    );

    console.log(`Title: ${filteredNotes[0].title} \nBody: ${filteredNotes[0].body}`);
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    listAll
}

