const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname, 'files')
// fs.writeFileSync(dirPath+'/khan.txt', 'hello zeeshan how are you')
// for(i=0; i<5; i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "hello")
// }
fs.readdir(dirPath, (err, files)=>{
    files.forEach((item)=>{
    console.log(item)
})
})