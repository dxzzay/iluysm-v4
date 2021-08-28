const discord = require('discord.js')
const config = require("../config.json");

prefix = config.prefix

exports.run = async (client, message, args) => {
    message.delete();
    let helpEmbed = new discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("Help")
      .setDescription(`≪━─━─━─━─━─◈━─━─━─━─━─≫

      
        ${prefix}help - Mostra comandos
        ${prefix}destruir - Mostra Comandos de Destruição
        ${prefix}div - Mostra comandos de divulgação
        ${prefix}invite - Cria um convite do seu bot.


        `)

      .setFooter(`Self Bot by: dozzay`);
    message.channel.sendMessage(helpEmbed);
}
