module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: `Bi göz at hangisi? ${query}` },
            footer: { text: 'Bu bot Rohat Akın tarafından kodlanmıştır. <3' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};