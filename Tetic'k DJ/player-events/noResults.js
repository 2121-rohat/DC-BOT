module.exports = (client, message, query) => {

    message.channel.send(`${client.emotes.error} - YouTube'da hiçbir sonuç bulunamadı for ${query} !`);

};