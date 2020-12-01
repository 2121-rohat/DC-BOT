const config = require("../config/bot.json");

exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: 'Yardım Paneli' },
            footer: { text: 'Bu bot Rohat Akın tarafından kodlanmıştır. Robot Guard ile korunuyor <3' },
            fields: [
                { name: 'Bot', value: '`ping`' },
                { name: 'Music', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`, `filter`, `w-filters`' },
                { name: 'Filters', value: '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`' },
            ],
            timestamp: new Date(),
            description: `Filtreleri kullanmak için, ${config.prefix}filter (the filter). Örnek : ${config.prefix}filter 8D.`,
        },
    });

};
