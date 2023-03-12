const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('social_network', 'root', 'yahz', {
  host: 'localhost',
  dialect: 'mysql2'
});

const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING
  },
  photo_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gender: {
    type: DataTypes.ENUM(['male', 'female']),
    allowNull: true,
    defaultValue: 0
  },
  balance: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
}, {
  // Other model options go here
  tableName: 'users',
  timestamps: false
});

console.log(User === sequelize.models.User);

;(async () => {
try {
    await User.sync({
        alter: true,
        force: false
    });

    // const user = await User.create({ 
    // first_name: "Jane",
    // last_name: "Doe",
    // email: 'svsdv@ssvsdsd.ru',
    // password: 'svjnksdv'

    // });

    // console.log("Jane's auto-generated ID:", user.id);

    // const user = await User.findOne({
    //     where: {
    //         country: 'РФ'
    //     }
    // });
    // user.first_name = 'Алексей';
    // user.save();
    // console.log(user);

    const user = await User.findByPk(1);
    user.destroy()
  } catch (error) {
    console.error(error);
  }
})();