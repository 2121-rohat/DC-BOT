module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} - Arasında geçerli bir numara girmelisin **1** and **${tracks.length}** !`);

};