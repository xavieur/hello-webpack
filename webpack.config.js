const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public','js'),
        filename: 'bundle.js'
    }
}