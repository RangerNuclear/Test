const sequelize = require('../DB');
const { DataTypes } = require('sequelize');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'posts'
});

module.exports = Post;