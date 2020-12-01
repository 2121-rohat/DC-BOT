const emotes = require("../config/emojis.json");

exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`ses kanalında değilsin ${emotes.error}`);

    if (!client.player.getQueue(message)) return message.channel.send(`Bu sunucuda müzik çalınmıyor ${emotes.error}`);

    client.player.pause(message);

    message.channel.send(`Song ${client.player.getQueue(message).playing.title} **durdu** ${emotes.success}`);

};
