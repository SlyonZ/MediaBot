exports.run = (client, message) => {
  message.channel.sendMessage('Ping?')
    .then(msg => {


        if (msg.createdTimestamp - message.createdTimestamp < 200)
      msg.edit('Pong! ( :ping_pong:  : ' + (msg.createdTimestamp - message.createdTimestamp) + 'ms)');

  if (msg.createdTimestamp - message.createdTimestamp >= 200)
      msg.edit('Pong! ( :ping_pong:  : ' + (msg.createdTimestamp - message.createdTimestamp) + 'ms)');


    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Affiche le ping du bot !',
  usage: 'ping'
};
