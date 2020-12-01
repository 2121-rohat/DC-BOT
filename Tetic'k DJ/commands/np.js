const emotes = require("../config/emojis.json");

exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`ses kanalında değilsin ${emotes.error}`);

    if (!client.player.getQueue(message)) return message.channel.send(`bu sunucuda müzik çalmıyor ${emotes.error}`);

    const track = await client.player.nowPlaying(message);

    message.channel.send({
        embed: {
            color: 'Random',
            author: { name: track.title },
            footer: { text: 'Bu bot Rohat Akın tarafından kodlanmıştır.' },
            fields: [
                { name: 'Kanal', value: track.author, inline: true },
                { name: 'Çaldıran', value: track.requestedBy.username, inline: true },
                { name: 'Playlistdemi', value: track.fromPlaylist ? 'Evet' : 'Hayır', inline: true },
                { name: 'Saniye barı', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};
