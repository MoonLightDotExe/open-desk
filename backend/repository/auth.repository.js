const dotenv = require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const managers = require('../models/managers.models.js')
const employees = require('../models/employees.models.js')

const self = (module.exports = {
  addManager: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!body.email || !body.password || !body.name) {
          reject({
            status: 400,
            message: 'Missing Data!',
          })
        }
        const userExists = await managers.findOne({ email: body.email })

        if (userExists) {
          reject({
            status: 401,
            message: 'Manager already exists!',
          })
        } else {
          const salt = await bcrypt.genSalt(10)
          const hashedPassword = await bcrypt.hash(body.password, salt)
          const manager = await managers.create({
            name: body.name,
            email: body.email,
            password: hashedPassword,
            rank: body.rank,
            employees: body.employees,
            cameras: body.cameras,
          })
          resolve({
            id: manager._id,
            name: manager.name,
            email: manager.email,
            password: manager.password,
            token: self.generateToken(manager._id),
          })
        }
      } catch (err) {
        reject(err)
      }
    })
  },

  removeManager: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(body)
        const { email } = body
        if (!email) {
          reject({
            status: 400,
            message: 'Missing Data',
          })
        }

        const manager = await managers.findOne({ email: body.email })

        if (!manager) {
          reject({
            status: 400,
            message: 'Manager does not exist!',
          })
        } else {
          const deleteManager = await managers.deleteOne({ email })
          resolve({
            status: 200,
            message: 'Manager Deleted Successfully!',
          })
        }
      } catch (err) {
        reject(err)
      }
    })
  },

  addEmployee: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!body.email || !body.password || !body.name) {
          reject({
            status: 400,
            message: 'Missing Data!',
          })
        }
        const userExists = await employees.findOne({ email: body.email })

        if (userExists) {
          reject({
            status: 401,
            message: 'Manager already exists!',
          })
        } else {
          const salt = await bcrypt.genSalt(10)
          const hashedPassword = await bcrypt.hash(body.password, salt)
          const employee = await employees.create({
            name: body.name,
            email: body.email,
            password: hashedPassword,
            clearance: body.clearance,
            biometrics: body.biometrics,
            manager: body.manager,
          })
          resolve({
            id: employee._id,
            name: employee.name,
            email: employee.email,
            password: employee.password,
            token: self.generateToken(employee._id),
          })
        }
      } catch (err) {
        reject(err)
      }
    })
  },

  generateToken: () => {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
  },
})
