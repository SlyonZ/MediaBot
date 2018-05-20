const Discord = require('discord.js');
exports.run = (client, message, args) => {

 if(message.content.startsWith('.google ')) {

    let args = message.content.split(" ").slice(1);

    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('http://lmgtfy.com/?q=' + args.join('+'))
    message.channel.send(embed)

    }
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'google',
      description: '. . .',
      usage: 'google [votre recherche]'
    }
