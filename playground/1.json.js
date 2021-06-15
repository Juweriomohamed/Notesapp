 const fs = require('fs')
// const book = {
//     title:'the enemy',
//     author:'ford'
// }

// Covert JavaScript object into JSON string
// const bookjson = JSON.stringify(book)
// fs.writeFileSync("1.json.json",bookjson)
const databuffer = fs.readFileSync("1.json.json")
const data = databuffer.toString()
// Covert JSON string into object
const jsonobject = JSON.parse(data)
jsonobject.name ="ali"
jsonobject.age = 50  
const stringjson = JSON.stringify(jsonobject)
fs.writeFileSync("1.json.json",stringjson)

