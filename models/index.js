const User = require('./User.js')
const Pet = require('./Pet.js')

User.hasMany(Pet)
Pet.belongsTo(User)

module.exports = { User, Pet }
