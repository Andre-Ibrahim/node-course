// const fs = require('fs')
// const book = {
//     title: "title",
//     author: "Ryan"
// }

// //const bookJson = JSON.stringify(book);

// //console.log(JSON.parse(bookJson).title);

// const dataBuffer = fs.readFileSync('1-json.json')

// const dataJson = dataBuffer.toString()

// const data = JSON.parse(dataJson)

// console.log(data.title + "\n" + data.author)


const fs = require('fs')

const Jobj = JSON.parse(fs.readFileSync('1-json.json').toString())

Jobj.name = "andre"

Jobj.planet = "mars"

Jobj.age = 32

//fs.writeFileSync('1-json.json', JSON.stringify(Jobj))

console.log(process.argv)


