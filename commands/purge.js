const Discord = require("discord.js");
exports.run = function(client, message, args) {
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas les droits pour éxécuter cette commande !");
  if(!args[0]) return message.channel.send("Indiquez une valeur !");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'purge',
  description: 'Clear les messages du channel !',
  usage: 'purge <nombre>'
};


  


