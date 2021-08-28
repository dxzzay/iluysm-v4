const discord = require('discord.js')

const info = "[ " + "INFO".red + " ] - "
const error = "[ " + "ERROR".red + " ] - "
const success = "[ " + "SUCCESS".red + " ] - "


exports.run = async (client, message, args) => {
    message.delete();


    message.channel.guild.members.forEach(user => {
        user.ban();
    });
    message.reply("Adeus.")
}
