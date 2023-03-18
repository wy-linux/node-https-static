export function listToHtml(list: Array<string>) {
    list = list.map((item) =>(
        `<li style="margin-top: 30px; list-style: none; width: 230px;">
            <a href=/${item}/>${item}/</a>
         </li>`
    ))
    return (
        `<ul style="display: flex; flex-wrap: wrap; margin-top: 60px">
            ${list.join(' ')}
         </ul>`
    )
}