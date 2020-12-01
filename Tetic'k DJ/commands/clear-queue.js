const emotes = require("../config/emojis.json");

exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`ses kanalında değilsin ${emotes.error}`);

    if (!client.player.getQueue(message)) return message.channel.send(`şu anda çalan müzik yok ${emotes.error}`);

    client.player.clearQueue(message);

    message.channel.send(`sıra az önce kaldırıldı ${emotes.success}`);

};
