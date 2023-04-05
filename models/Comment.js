const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Comment extends Model {

}

Comment.init(
    {
       id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "User",
                key: "user_id",
            },
        },
        date: {
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports= Comment;