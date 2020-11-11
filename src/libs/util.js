// 文本域中的换行替换为html中的换行
export const fnHtmlLineBreak = (str = '') => {
    let result
    if (str) {
        result = str.toString().replace(/\n|\r\n/g, '<br>')
    } else {
        result = ''
    }
    return result
}