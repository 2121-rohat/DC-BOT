const emotes = require("../config/emojis.json");

exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`ses kanalında değilsin ${emotes.error}`);

    if (!client.player.getQueue(message)) return message.channel.send(`bu sunucuda müzik çalmıyor ${emotes.error}`);

    const repeatMode = client.player.getQueue(message).repeatMode;

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(`döngü modu pasif ${emotes.success}`);
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(`döngü modu aktif ${emotes.success}`);
    };

};
