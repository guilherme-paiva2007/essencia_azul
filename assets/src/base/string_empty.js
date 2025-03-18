/**
 * Verifica se uma string está vazia.
 * @param {string} string 
 */
function emptystr(string) {
    return string.replaceAll("\n","").trim().length == 0;
}

export default emptystr;