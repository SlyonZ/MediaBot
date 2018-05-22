const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()

  .setColor('RANDOM')
  .setAuthor('Liste des commandes :')
  .addField(':rotating_light: Administration', '`.purge` `.report`')
  .addField(':video_game: Fun', '`.roll` `.8ball` `.say` `.coin` `.google` `.cat` `.tb`')
  .addField(':newspaper: Infos',' `.ping` `.help` `.profile` `.avatar`')
  .setTimestamp()

              message.channel.send(msg)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Liste des commandes du bot !',
  usage: 'help [command]'
};
