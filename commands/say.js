const Discord = require('discord.js');
exports.run = (client, message, args) => {

 if(message.content.startsWith('.say ')) {

    let args = message.content.split(" ").slice(1);
    message.delete()
    message.channel.send(args.join(" "))

    let sayEmbed = new Discord.RichEmbed()
              .setDescription(":rotating_light: Commande Say utilisé :rotating_light:")
              .setColor("#FFFF00")
              .addField("Utilisateur :", `${message.author} avec l'ID: ${message.author.id}`)
              .addField("Dans le channel :", message.channel)
              .addField("Contenu :", args.join(" "));

              let logschannel = message.guild.channels.find(`name`, "bot_logs");
          if(!logschannel) return message.channel.send("Channel logs inexistant");

           logschannel.send(sayEmbed);

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
      description: 'Le bot redit ce que vous dites !',
      usage: 'say [message]'
    }
