const emotes = require("../config/emojis.json");

exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`Ses kanalında değilsin ${emotes.error}`);

    if (!client.player.getQueue(message)) return message.channel.send(`Bu sunucuda müzik çalınmıyor ${emotes.error}`);

    client.player.shuffle(message);

    return message.channel.send(`Sıra karıştırıldı **${client.player.getQueue(message).tracks.length}** song(s) ${emotes.success}`);

};
