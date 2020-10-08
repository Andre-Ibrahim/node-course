const { Module } = require("module")
const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()


    const duplicateNote =  notes.find((note) => {
        return note.title === title
    })

    
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log("new note added")
    }
    else {
        console.log(duplicateNote)
        console.log("note was note added please enter diffrent title")
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const otherNotes = notes.filter((note) => {
        return note.title !== title
    })

    saveNotes(otherNotes)
    if(notes.length === otherNotes.length){
        console.log(chalk.red.inverse('no note with Title: ' + title + " found"))
    }
    else{
        console.log(chalk.green.inverse('note with Title: ' + title + ' succefully removed'))
    }
    
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {

    try{
        const data = fs.readFileSync('notes.json').toString()

        return JSON.parse(data)
    }
    catch (e){
        return []
    }

}

const listNotes = () => {
    const allNotes = loadNotes()
    let ctr = 0
    allNotes.forEach(element => {
        ctr++
        console.log(ctr+ ". title: " + element.title + " body = " + element.body )        
    });
}

const readNote = (title) => {
    const allNotes = loadNotes()
    
    const note = allNotes.find((e) => title === e.title)
    
    if(!note){
        console.log(chalk.red.inverse("No note found with that title"))
    }
    else{
        console.log(chalk.green.inverse("note found"))
        console.log(note.body)
    }
}


module.exports= {
                addNote: addNote,
                removeNote: removeNote,
                listNotes: listNotes,
                readNote: readNote
                }