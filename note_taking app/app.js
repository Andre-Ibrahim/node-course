const chalk = require('chalk')
const yargs = require('yargs')
const { listNotes } = require('./notes.js')
const notes = require('./notes.js')



// add, remove, read, list

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }

})

yargs.command({
    command: 'remove',
    describe: 'removing a new note',

    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },


    handler(argv){
        notes.removeNote(argv.title)}

})

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler(){
        console.log(chalk.green("listing all notes"))
        notes.listNotes()
    }

})

yargs.command({
    command: 'read',
    describe: 'read all notes',
    handler(argv){
        notes.readNote(argv.title)
    }

})



yargs.parse()


