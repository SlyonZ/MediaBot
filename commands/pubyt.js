const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tu n'as pas les droits pour éxécuter cette commande !");
  let roleAnnonces = message.guild.roles.find("name", "annonces");

  const embed = new Discord.RichEmbed()
  .setAuthor("Un nouveau Best Of Sardoche est sorti !", "https://imgur.com/Pem0gkd.png")

  .setColor(0xFF0000)
  .setFooter("Bon visionnage ! ", "https://imgur.com/rDyK8BU.png")
  .setImage("https://i.imgur.com/kam74fM.png")

  .setTimestamp()

  .addField("Lien de la vidéo :", "https://www.youtube.com/watch?v=0LmgfTTmgm8", true);

  message.delete()
  message.channel.send({embed});
  message.channel.send("@everyone");
  }


    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'pubyt',
      description: 'Lance une annonce quand un nouveau bos sort',
      usage: 'pubyt'
    };
