// UserModel.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize.js';


const User = sequelize.define('User', {
    idUser: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    }
}, {
    tableName: 'User',
    timestamps: false,
});

export default User;
