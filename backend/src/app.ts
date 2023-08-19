const x:string = `nimbus`

for (let i:number = 1; i <= 10; i++){
    console.log(i + `. ` + x)
}

import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('kontol')
})

app.listen(3000)
