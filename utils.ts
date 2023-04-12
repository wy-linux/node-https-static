const fs = require('fs')
const path = require('path')

function toPath(item: string) {
    const stat = fs.statSync(path.resolve(__dirname, 'public', item))
    return stat.isFile() ? `/${item}` : `/${item}/`
}
export function listToHtml(list: Array<string>) {
    list = list.map((item) =>{
       
        return (`<li style="margin-top: 30px; list-style: none; width: 230px;">
            <a href=${toPath(item)}>${toPath(item)}</a>
         </li>`)
    })
    return (
        `<ul style="display: flex; flex-wrap: wrap; margin-top: 60px">
            ${list.join(' ')}
         </ul>`
    )
}