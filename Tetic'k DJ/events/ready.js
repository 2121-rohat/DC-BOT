const config = require("../config/bot.json");

module.exports = async (client) => {

    console.log(`Hazır ${client.guilds.cache.size} abim, değerler: ${client.users.cache.size} kullanıcı`);

    client.user.setActivity(config.game)

};
