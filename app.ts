import express from 'express'
import fs from 'fs'
import path from 'path'
import url from 'url'
import ejs from 'ejs'
const serverStatic = require('node-wangyu-server-static')

const pathStatic = path.resolve(__dirname, 'public')
const publicDirStats = fs.readdirSync(pathStatic)
                         .map((dir) => (
                                {
                                    name: dir, 
                                    isDir: fs.statSync(path.resolve(pathStatic, dir))
                                             .isDirectory()
                                }
                            ))

const app = express()

// app.use(express.static(pathStatic))
//手写的serverStatic中间件取代express.static
app.use(
    serverStatic(pathStatic, {
        maxAge: 60 * 60, //强缓存时间60min
        // gzip: true //开启Gzip压缩
    })
)

app.use('/', async (req, res) => {
    let { pathname } = url.parse(req.url);
    const fileContent = await ejs.renderFile('./template/index.html', {
        dirs: publicDirStats.map((dir) => ({
            name: dir.name,
            url: path.join(pathname!, dir.name),
            isDir: dir.isDir
        }))
    });
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end(fileContent)
})

export default app