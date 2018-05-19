
module.exports = (guild, user) => {
  member.guild.channels.find("name", "général").sendMessage('Bienvenue sur la OKA Media Family' + member.toString() + '! Va faire un tour dans #accueil pour voir les règles du server !' );

	member.addRole(member.guild.roles.find("name", "BÉBÉS"));

}
