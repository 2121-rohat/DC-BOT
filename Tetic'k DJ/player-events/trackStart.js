module.exports = (client, message, track) => {

    message.channel.send(`${client.emotes.music} - Çalıyor ${track.title} into ${message.member.voice.channel.name} ...`);

};