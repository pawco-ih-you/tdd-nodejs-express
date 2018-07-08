'use strict'

const User = require('./User')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

const db = require('./database')

chai.use(chaiAsPromised)
const expect = chai.expect

describe('User module', () => {
    describe('"up"', () => {
        async function cleanUp() {
            await db.schema.dropTableIfExists('users')
        }
        before(cleanUp)
        after(cleanUp)
        it('should export a function', () => {
            expect(User.up).to.be.a('function')
        })
        it('should return a Promise', () => {
            const usersUpResult = User.up()
            expect(usersUpResult.then).to.be.a('Function')
            expect(usersUpResult.catch).to.be.a('Function')
        })
        it('should create a table named "users"', async () => {
            await User.up()
            const hasUsersTable = await db.schema.hasTable('users')
            expect(hasUsersTable).to.be.true
        })
    })
    describe('fetch', () => {

    })
})
