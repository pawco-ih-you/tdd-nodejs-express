'use strict'

const db = require('./database')

const tableName = 'users'

function up() {
    return db.schema.createTableIfNotExists(tableName, (table) => {
        table.increments()
        table.string('name')
        table.timestamps()
    })
}
function fetch() {
    return new Promise(res => res())
}

module.exports = {
    up,
    fetch
}
