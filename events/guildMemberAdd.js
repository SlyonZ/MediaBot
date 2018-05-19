module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Bienvenue à ${member.user.username} sur la OKA Media Family , va faire un petit tour dans #acceuil !`);
};
