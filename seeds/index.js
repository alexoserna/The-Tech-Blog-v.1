const sequelize = require("../config/config");

const userSeedData = require("./userData");
const postSeedData = require("./postData");
const commentSeedData = require("./commentData");

const seedDatabase = async () => {
    await sequelize.sync({force: true});

    await userSeedData();

    await postSeedData();

    await commentSeedData();

    process.exit(0);
};

seedDatabase();