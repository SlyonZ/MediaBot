const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let text = message.content.split(" ").slice(1);

  let roleAnnonces = message.guild.roles.find("name", "annonces");

  const embed = new Discord.RichEmbed()
  .setAuthor("Okazuma lance un Stream !", "https://imgur.com/YyQivZ7.png")

  .setColor(0x6441A4)
  .setFooter("Bon visionnage !", "https://imgur.com/rDyK8BU.png")

  .setTimestamp()

  .addField("Activité du stream :", args.join(" "), true)

  .addField("Lien du stream :", "https://www.twitch.tv/okazumaa", true);

  message.delete()
  message.channel.send({embed});
  message.channel.send("<@&451258312575549440>");
  }


    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 2
    };

    exports.help = {
      name: 'pubtwitch',
      description: 'Lance une annonce quand un live commence',
      usage: 'pubtwitch [activité]'
    };
