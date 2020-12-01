const emotes = require("../config/emojis.json");

exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`Ses kanalında değilsin ${emotes.error}`);

    if (!client.player.getQueue(message)) return message.channel.send(`Bu sunucuda müzik çalınmıyor ${emotes.error}`);

    client.player.setRepeatMode(message, false);
    client.player.stop(message);

    message.channel.send(`Müzik durdu ${emotes.success}`);

};
