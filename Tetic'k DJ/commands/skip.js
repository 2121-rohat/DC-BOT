const emotes = require("../config/emojis.json");

exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`Ses kanalında değilsin ${emotes.error}`);

    if (!client.player.getQueue(message)) return message.channel.send(`Şu anda çalan şarkı yok${emotes.error}`);

    client.player.skip(message);

    message.channel.send(`Mevcut müzik az önce ** atlandı ** ${emotes.success}`);

};
