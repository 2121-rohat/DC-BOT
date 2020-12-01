const fs = require("fs");
const discord = require("discord.js");
const settings = require("./config/bot.json");

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require("discord-player")

const player = new Player(client)
client.player = player;
client.emotes = require('./config/emojis.json');
client.commands = new discord.Collection();

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading event ${eventName}`);
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./player-events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player-events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading player event ${eventName}`);
        client.player.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading command ${commandName}`);
        client.commands.set(commandName, props);
    });
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'özgür kim') {
    msg.channel.send('yıkık bir orospu evladı');
  }
    
      if (msg.content.toLowerCase() === 'yıkık bir orospu evladı kim') {
    msg.channel.send('Özgür');
  }
    
          if (msg.content.toLowerCase().toLowerCase() === 'rohat kim') {
    msg.channel.send('Reisimiz, cumhurbaşkanımız, allahımız, paşamız, hükümdarımız, taşşaklımız, scofieldımız, developerımız, guardımız.');
  }
    
              if (msg.content.toLowerCase().toLowerCase().toLowerCase() === 'yiğitcan kim') {
    msg.channel.send('Rx 590 şahı, xfx global ceosu, supreme.');
  }
    
                  if (msg.content.toLowerCase().toLowerCase().toLowerCase().toLowerCase() === 'Bilaaer kime denir') {
    msg.channel.send('Bağdatlı ardaya denir bilaaaaer.');
  }
    
                      if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('aleyküm seleyk kardişim.');
  }
    
                          if (msg.content.toLowerCase() === '$botaktif') {
    msg.channel.send('Bot aktif kullanmaya devam edebilirsiniz.');
  }
    
                              if (msg.content.toLowerCase() === 'bu sunucu ne ile korunuyor') {
    msg.channel.send('www.robotguard.com by.Rohat Akın');
  }
    
                                  if (msg.content.toLowerCase() === 'Bu botun sahibi kim') {
    msg.channel.send('VICTOR_IA--Rohat Akın');
  }
    
                                      if (msg.content.toLowerCase() === '$botisdeactif') {
    msg.channel.send('bot çevrimdışı moda geçiyor');
  }
    
                                          if (msg.content.toLowerCase() === 'kimin anasını sikeyim') {
    msg.channel.send('özgürün');
  }
    
                                              if (msg.content.toLowerCase() === '.') {
    msg.channel.send('beyler sesli gelin sahibim çağırıyor');
  }
    
    
                                                  if (msg.content.toLowerCase() === 'hangi özgür') {
    msg.channel.send('orospu çocuğu olan');
  }
    
      if (msg.content.toLowerCase() === 'aga neden bu hayat böyle') {
          msg.channel.send('yazılım öğren abim');
      }                                              
   
    
});


client.login(settings.token_bot);
