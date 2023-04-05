const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Post extends Model {

}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        title: {
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
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = Post;