const discord = require('discord.js')

exports.run = async (client, message, args) => {
const user = message.mentions.users.first() || message.author;
let avatarEmbed = new discord.RichEmbed()
      .setTitle("ππ―Avatarππ­ππ«")
      .setColor("GREEN")
      .setImage(user.avatarURL)
      .setFooter(`Hyle`)
    message.channel.send(avatarEmbed);
}
