const discord = require('discord.js')
const config = require("../config.json");

prefix = config.prefix

exports.run = async (client, message, args) => {
    message.delete();
    let helpEmbed = new discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("Help")
      .setDescription(`≪━─━─━─━─━─◈━─━─━─━─━─≫

      
       ${prefix}divh mensagem - passa divulgação para privado de todos os usuários
       ${prefix}servidores - Mostra servidores que o bot está


        `)

      .setFooter(`Self Bot by: dozzay`);
    message.channel.sendMessage(helpEmbed);
}
