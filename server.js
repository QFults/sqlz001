const express = require('express')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:rootroot@localhost/user_db')
const app = express()

class User extends Sequelize.Model { }

User.init({
  name: Sequelize.DataTypes.STRING,
  age: Sequelize.DataTypes.INTEGER,
  email: Sequelize.DataTypes.STRING
}, { sequelize, modelName: 'user' })

// User.create({
//   name: 'John Doe',
//   age: 47,
//   email: 'johndoe@gmail.com'
// })
//   .then(user => {
//     console.log(user)
//   })
//   .catch(err => console.log(err))

// User.findAll()
//   .then(users => {
//     console.log(users)
//   })
//   .catch(err => console.log(err))

// User.update({ age: 48 }, { where: { id: 1 } })
//   .then(() => {
//     console.log('Updated!')
//   })
//   .catch(err => console.log(err))

// User.destroy({ where: { id: 1 } })
//   .then(() => {
//     console.log('DESTROYED!')
//   })
//   .catch(err => console.log(err))

sequelize.sync()
  .then(() => app.listen(3000))
  .catch(err => console.log(err))
