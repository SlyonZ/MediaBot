const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!rUser) return message.channel.send("Utilisateur introuvable");
          let rreason = args.join(" ").slice(22);

          let reportEmbed = new Discord.RichEmbed()
              .setDescription(":rotating_light:Rapport:rotating_light:")
              .setColor("#FFFF00")
              .addField("Utilisateur rapporté :", `${rUser} avec l'ID: ${rUser.id}`)
              .addField("Rapporté par :", `${message.author} avec l'ID: ${message.author.id}`)
              .addField("Dans le channel :", message.channel)
              .addField("Raison :", rreason);

          let reportschannel = message.guild.channels.find(`name`, "reports");
          if(!reportschannel) return message.channel.send("Pas de channel reports");


          message.delete().catch(O_o=>{});
          reportschannel.send(reportEmbed);
          message.author.send(':white_check_mark: Rapport envoyé avec succès!');


              return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'report',
  description: 'Donne un avertissement !',
  usage: 'report [mention] [Raison]'
};
