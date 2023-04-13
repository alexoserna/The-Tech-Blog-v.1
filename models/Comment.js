const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const { data } = require("connect-session-sequelize/lib/model");

class Comment extends Model {

}

Comment.init(
    {
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: "User",
                key: "user_id",
            },
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Post",
                key: "post_id",
            },
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;