const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/fruit.txt`

// fs.writeFileSync(filePath, 'hi, it is fruit') //for create a file
// fs.readFile(filePath, 'utf8',(err, item)=>{ // for read a file
//     console.log(item)
// })

// fs.appendFile(filePath,' and file name is app.txt',(err)=>{  // for update the content of file
//     if(!err) console.log('file is updated')
// })
//  fs.rename(filePath,`${dirPath}/fruit2.txt`, (err)=>{ //for rename the file name
//     if(!err) console.log('File name is updated')
//  })
fs.unlinkSync(`${dirPath}/fruit2.txt`)