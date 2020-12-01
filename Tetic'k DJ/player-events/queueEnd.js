module.exports = (client, message, queue) => {

    message.channel.send(`${client.emotes.error} - Sırada müzik olmadığı için müzik durdu!`);

};