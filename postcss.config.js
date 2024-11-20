const nano = require('cssnano')

module.exports = {
    plugins: [
        nano({ preset: 'default' })
    ]
}
