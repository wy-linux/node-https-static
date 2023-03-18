import express from 'express'
import fs from 'fs'
import path from 'path'
import {listToHtml} from './utils'

let app = express()
const publicList = fs.readdirSync(path.resolve(__dirname, 'public'))

app.use(express.static(path.resolve(__dirname, 'public')))

app.use('/', (req, res) => {
    res.writeHead(200,{
       'Content-Type': 'text/html; charset=utf-8'
    })
    res.end(listToHtml(publicList))
})
export default app