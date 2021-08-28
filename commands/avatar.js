const discord = require('discord.js')

exports.run = async (client, message, args) => {
const user = message.mentions.users.first() || message.author;
let avatarEmbed = new discord.RichEmbed()
      .setTitle("𝐀𝐯Avatar𝐚𝐭𝐚𝐫")
      .setColor("GREEN")
      .setImage(user.avatarURL)
      .setFooter(`Hyle`)
    message.channel.send(avatarEmbed);
}
