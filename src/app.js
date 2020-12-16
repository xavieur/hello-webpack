import sumar, {substraction, multiply, division} from './app-2.js'

import React from 'react'
import ReactDOM from 'react-dom'

console.log('hola desde app.js')
console.log(substraction(2,3))

const Parrafo = () => {
    return <p>¿qué tal?</p>
}

ReactDOM.render(<Parrafo />, document.querySelector('#appRoot'))
