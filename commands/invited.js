const discord = require('discord.js')
const config = require('../config.json');

exports.run = async (client, message, args) => {
    
    let id = args[0];
    let invite = `https://discord.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=261993005047 `
    let resposta = new discord.RichEmbed()
    .setTitle(`Iluysm - Gerador de Convite [Permissão ALL]`)
    .setDescription(`Convite: [Convite](${invite})`)
    .setFooter(`by dxzzay`)
    .setColor("GREEN")
    message.channel.send(resposta)

}