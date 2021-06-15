
const commnad = process.argv[2];
const yargs = require('yargs')

// if(commnad === 'add')
// {
//     return console.log("adding note....");
// }
// else if (commnad === "remove")
// {return console.log("removing  note....");}

// else{
//     console.log("command not found");
// }

yargs.command({
    command : 'add',
    describe:"adding notes",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"note body",
            demandOption:true,
            type:"string"
        }
    
    },
    handler: function(argv)
    {
        if(argv.title ==="")
        {
           return  console.log("please missing the title");
        }
        else if(argv.body ==="")
        {
            return console.log("please missing the body");
        }
        else{
        console.log("Title:"+argv.title+" Body:"+argv.body);}
    }
    
})


//console.log(commnad);
//console.log(yargs.argv);
yargs.parse()
