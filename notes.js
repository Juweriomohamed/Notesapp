const fs = require('fs')
const chalk = require('chalk')
const addnotes = (title,body)=>{
    const notes = loadnote()
    const duplicatenote = notes.filter((note) => note.title == title)
    debugger
    if(duplicatenote.length == 0)
    {
        notes.push({
            title:title,
            body:body
        })
        savenotes(notes)
        console.log("new node added");
    }
    else{
        console.log("note has already taken");
    }

    
}

const removeNote = (title)=>{
const remove = loadnote()
const removedup = remove.filter((move) => move.title !== title)
if(remove.length > removedup.length)
{
    console.log(chalk.green.inverse("removed"));
    savenotes(removedup)
}
else{
    console.log(chalk.red.inverse("no note found"));
}
}
const listnote = ()=>{
    const lists = loadnote()
    console.log(chalk.blue.inverse("your notes"));
    lists.forEach((list)=>{
         console.log(chalk.yellow(list.title));
     })
}

const readNote = (title) =>{
    const reading = loadnote()
    const readSimilar = reading.find((read)=> read.title == title)
    if(readSimilar)
    {
        
            console.log(chalk.blue(readSimilar.title));
            console.log(readSimilar.body)
      
    }
    else{
        console.log(chalk.red("no note found"));
    }

}



    






const loadnote = () =>
{
    try{
   const databuffer = fs.readFileSync("notes.json")
   const datajson = databuffer.toString()
   return JSON.parse(datajson)
    }
    catch{
    return []
    }
}

const savenotes = (notes)=>{
const dataobject = JSON.stringify(notes)
fs.writeFileSync("notes.json",dataobject)

}

module.exports = {
    addnotes:addnotes,
    removeNote:removeNote,
    listnote:listnote,
    readNote:readNote
}
