const discord = require('discord.js')

exports.run = async (client, message, args) => {

    let arg = args.slice(0).join(" ");
    message.delete();
    message.guild.setIcon(arg).catch(error => {});

}