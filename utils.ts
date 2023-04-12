const fs = require('fs')
const path = require('path')

function toPath(item: string) {
    const stat = fs.statSync(path.resolve(__dirname, 'public', item))
    return stat.isFile() ? `/${item}` : `/${item}/`
}

export function listToHtml(list: Array<string>) {
    list = list.map((item) =>{
        return (
            `<li style="
                width: 20%;
                margin: 4% 0 0 4%; 
                list-style: none; 
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: left;
            ">
                <a href=${toPath(item)}>${toPath(item)}</a>
            </li>`
        )
    })
    let template = (
        `<ul style="
            display: flex; 
            flex-wrap: wrap; 
            margin-top: 60px;
            padding: 0;
        ">
            ${list.join('')}
        </ul>`
    )  
    return template
}