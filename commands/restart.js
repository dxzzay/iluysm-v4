const discord = require('discord.js')
const config = require("../config.json");

exports.run = async (client, message) => {
    /*const embed = new discord.RichEmbed()
    .setDescription(`Restarted in: **${Math.floor(client.ping)}**ms`);
    const NotAllowedEmbed = new discord.RichEmbed()
    .setDescription(`You Cannot Restart ${client.user.tag}!`);
    message.channel.send(NotAllowedEmbed);
    
    message.channel.send(embed)
    .then(() => client.destroy())
    .then(() => client.login(config.token));*/
message.channel.send('ATIVADA')
    

}