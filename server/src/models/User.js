const bcrypt = require('bcryptjs')

async function hashPassword(user, options) {
  const SALT_FACTOR = 10

  if (!user.changed('password')) {
    return
  }

  const salt = await bcrypt.genSalt(SALT_FACTOR) //whatever number you want
  const hash = await bcrypt.hash(user.password, salt)
  console.log(hash)
  return user.setDataValue('password', hash)
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      displayName: {
        type: DataTypes.STRING
      },
      avatar: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    },
    {
      hooks: {
        beforeSave: hashPassword
      }
    }
  )

  User.prototype.comparePassword = function(password) {
    console.log(password, this.password)
    return bcrypt.compareSync(password, this.password)
  }
  return User
}
