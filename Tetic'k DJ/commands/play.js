const emotes = require("../config/emojis.json");

exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`ses kanalında değilsin ${emotes.error}`);

    if (!args[0]) return message.channel.send(`Lütfen bir şarkının adını belirtin ${emotes.error}`);

    client.player.play(message, args.join(" "));

};
