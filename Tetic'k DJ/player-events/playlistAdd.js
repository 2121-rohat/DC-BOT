module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} sıraya ekledim brom (**${playlist.items.length}** songs) !`);

};