console.log('hola desde app-2.js')

const add = (a,b) => {
    return a+b
}

export const substraction = (a,b) => {
    return a-b
}

export const multiply = (a,b) => {
    return a*b
}

export const division = (a,b) => {
    return a/b
}

export default add

/* 
export {add as default, substraction, multiply, division} 
*/
