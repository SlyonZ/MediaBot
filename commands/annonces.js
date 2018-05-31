const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let roleAnnonces = message.guild.roles.find("name", "annonces");

  if(!message.member.roles.find("name", "annonces")){
    message.member.addRole(roleAnnonces);
    message.member.send(':white_check_mark: Rôle annonces ajouté !');
  } else {
    message.member.removeRole(roleAnnonces);
    message.member.send(':white_check_mark: Rôle annonces retiré !');
  }

  }


    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'annonces',
      description: 'Vous met le rôle annonces et vous informe',
      usage: 'annonces'
    };
