const fs = require('fs')

const getNotes = () => {

}
const addNote = (title,body)=> {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title ===title)
    if(duplicateNotes.length === 0) {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("Created a new note")
    } else{
        console.log("Note already created")
    }
    }
const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes))
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return []
    }
}
module.exports = {
    getNotes:getNotes,
    addNote:addNote,
}