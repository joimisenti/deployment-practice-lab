// first run npm init -y which will make a package.json file
// then run npm i express to get the express package installed
// then set up a git to track changes by sharing local code with remote server

const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(`public`))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(4000, () => console.log(`server running on 4000`))