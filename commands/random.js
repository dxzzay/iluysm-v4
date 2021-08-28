const discord = require('discord.js')
const config = require("../config.json");

prefix = config.prefix

exports.run = async (client, message, args) => {
    message.delete();
    let helpEmbed = new discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("")
      .setDescription(`

        ${prefix}avatar <@mencao> - **Mostra Avatar**
        ${prefix}div <mensagem> - **Faz divulgação em DM**




        `)

      .setThumbnail("https://i.gifer.com/8wdJ.gif")
      .setFooter(`Slxw7`);
    message.channel.sendMessage(helpEmbed);
}
