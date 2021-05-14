const fs = require('fs')
const chalk = require('chalk')
const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title == title)
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New note added!")
    } else {
        console.log("Note title taken!")
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    console.log("Loading Notes")
    
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        console.log(dataJSON)
        return JSON.parse(dataJSON)
    } catch (e) {
        // return empty JSON
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeeep = notes.filter(function(note){
        return note.title !== title
    })
    if (notesToKeeep.length === notes.length) {
        console.log(chalk.red.inverse("No Notes is removed"))
    } else {
        console.log(chalk.green.inverse("Notes is removed"))
    }
    saveNotes(notesToKeeep)

}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach((element) => {
        console.log(element.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find((note) => note.title === title)

    if (foundNote) {
        console.log(chalk.inverse(foundNote.title))
        console.log(foundNote.body)
    } else {
        console.log(chalk.red.inverse("Title not found"))
    }
}
// exporting object of function
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}