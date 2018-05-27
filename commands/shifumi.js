const Discord = require("discord.js");
exports.run = (client, message, args) => {
   let choice = args.join(' ').toLowerCase();
      const choices = ['papier', 'pierre', 'ciseaux', choice, 'ciseaux', 'pierre', 'papier', 'pierre', 'ciseaux', 'papier'];
        const response = choices[Math.floor(Math.random() * choices.length)];
         if (choice === 'pierre') {
            if (response === 'pierre') return message.reply('Pierre ! Et toi aussi :/ \n égalité !');
            else if (response === 'papier') return message.reply('Papier ! Et tu as choisi pierre \n Je gagne !');
            else return message.reply('Ciseaux ! Et tu as choisi pierre \n Tu as gagné !');
        } else if (choice === 'papier') {
            if (response === 'pierre') return message.reply('Pierre ! Et tu as choisi papier \n Tu as gagné !');
            else if (response === 'papier') return message.reply('Papier ! Et toi aussi :/ \n égalité !');
            else return message.reply('Ciseaux ! Et tu as choisi papier \n Je gagne !');
        } else if (choice === 'ciseaux') {
            if (response === 'pierre') return message.reply('Pierre ! Et tu as choisi ciseaux \n Je gagne !');
            else if (response === 'papier') return message.reply('Papier ! Et tu as choisi ciseaux \n Tu as gagné !');
            else return message.reply('Ciseaux ! Et toi aussi :/ \n égalité !');
    
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'shifumi',
  description: 'PIERRE PAPIER CISEAUX',
  usage: 'shifumi [pierre|papier|ciseaux]'
};
