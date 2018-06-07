const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tu n'as pas les droits pour éxécuter cette commande !");
  const user = message.author.username
    let vote = args.slice(0).join(" ");

    const msg = new Discord.RichEmbed()

  .setColor('RANDOM')
  .setAuthor('Nouveau vote Chouchou :')
  .setTimestamp()
  .addField("Utilisateur : ", vote)
  .setFooter("Votez avec les réactions ci-dessous !", "https://imgur.com/rDyK8BU.png")

              message.channel.send(msg)

    .then(function (message) {
      message.react("✅")
      message.react("⛔")
    })

  }


    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'vote',
      description: 'établit un vote pour le role chouchou',
      usage: 'vote'
    };
