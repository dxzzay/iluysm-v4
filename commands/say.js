const discord = require('discord.js')

exports.run = async (client, message, args) => {
  let sayMessage = args.slice(1).join(" ");

  message.delete();
  let sayEmbed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(sayMessage)
  //.setThumbnail('https://i.imgur.com/gZ5ALFp.png')
  message.channel.sendMessage(sayEmbed);
}
