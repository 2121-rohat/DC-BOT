const emotes = require("../config/emojis.json");

exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`ses kanalında değilsin ${emotes.error}`);

    const queue = client.player.getQueue(message);

    if (!queue) return message.channel.send(`Şu anda çalan şarkı yok ${emotes.error}`);

    message.channel.send(`**Server queue - ${message.guild.name} ${emotes.queue}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`));

};
