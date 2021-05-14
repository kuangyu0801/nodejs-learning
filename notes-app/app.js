//const add = require('./util.js')

// refernce: 
const chalk = require('chalk');

//console.log(add(1, 5))

const validator = require('validator')
const notes = require('./nodes')
const yargs = require('yargs')

const command = process.argv[2]
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new node',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const greenMsg = chalk.green.inverse.bold('Success!')
        console.log(greenMsg)
        notes.addNote(argv.title, argv.body)
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Removing the note')
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Reading the note')
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNote()
        console.log('Listing the note')
    }
})

yargs.parse()
//console.log(yargs.argv)
