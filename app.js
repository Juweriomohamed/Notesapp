const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes')
const log = console.log
yargs.command({
    command:'add',
    describe:"adding new note",
    builder:{
        title:{
            describe:"title note",
            demandOption:true,
            type:"string"
        },
       body: {
           describe: "body note",
           demandOption:true,
           type:"string"
        }

    },
    handler(argv){
    if(argv.title ==="")
    {
        console.log("please title missing!");
    }
    else if(argv.body === "")
    {
        console.log("please body misisng!");
    } 
    else{
     notes.addnotes(argv.title,argv.body)
    }

    }
})
yargs.command({
    command:'read',
    describe:'reading new note',
    builder:{
        title:{
            describe:"read note",
            demandOption:true,
            type:"string"

        }
    },
    handler(argv){
    notes.readNote(argv.title)
    }
})

yargs.command({
    command:'remove',
    describe:'removing new note',
    builder:{
        title:{
            describe:"removing note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
  notes.removeNote(argv.title);   
    }
})

yargs.command({
    command:'List',
    describe:'listing new note',
    handler(){
       notes.listnote()
    }
})
//console.log(yargs.argv)
yargs.parse();




// log(chalk.grey.bold("juwerio mohamed"))
// console.log(chalk.green("success"))
//console.log(chalk.blue.bold("hello world"));
const book = {
    title:"the enemy",
    author:"rober"
}
// Covert JavaScript object into JSON string
const bookjson = JSON.stringify(book);
//console.log(bookjson);
// Covert JSON string into object
const bookobject = JSON.parse(bookjson)
// console.log(bookobject);
// console.log(bookobject.title);