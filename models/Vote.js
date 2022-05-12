const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init (
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: { //lists the primary key of the user that voted
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            mode: 'user',
            key: 'id'
        }
    },
    post_id: { //primary key of the post they voted on
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vote'
}
);

module.exports = Vote;