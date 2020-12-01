const emotes = require("../config/emojis.json");
const filters = require("../config/filters.json");

exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`ses kanalında değilsin ${emotes.error}`);

    if (!client.player.getQueue(message)) return message.channel.send(`şu anda çalan şarkı yok ${emotes.error}`);

    const filter = args[0];
    if (!filter) return message.channel.send(`Lütfen etkinleştirmek veya devre dışı bırakmak için geçerli bir filtre belirtin ${emotes.error}`);

    const filterToUpdate = Object.values(filters).find((f) => f.toLowerCase() === filter.toLowerCase());

    if (!filterToUpdate) return message.channel.send(`Bu filtre mevcut değil ${emotes.error}`);

    const filterRealName = Object.keys(filters).find((f) => filters[f] === filterToUpdate);

    const queueFilters = client.player.getQueue(message).filters
    const filtersUpdated = {};
    filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
    client.player.setFilters(message, filtersUpdated);

    if (filtersUpdated[filterRealName]) message.channel.send(`Müziğe filtre ** ekliyorum **, lütfen bekleyin ... Not: Müzik ne kadar uzun olursa, bu o kadar uzun sürer ${emotes.music}`);
    else message.channel.send(`Müzikteki filtreyi ** devre dışı bırakıyorum **, lütfen bekleyin ... Not: Müzik ne kadar uzun süre çalarsa, bu o kadar uzun sürer ${emotes.music}`);

};
