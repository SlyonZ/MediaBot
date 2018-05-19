const Discord = require('discord.js');
exports.run = (client, message, args) => {

 if(message.content.startsWith('.say ')) {

    let args = message.content.split(" ").slice(1);
    message.delete()
    message.channel.send(args.join(" "))

    }
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'say',
      description: 'Le bot redit ce que vous ditez !',
      usage: 'say [message]'
    }
