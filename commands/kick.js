
const discord = require('discord.js')

const info = "[ " + "INFO".red + " ] - "
const error = "[ " + "ERROR".red + " ] - "
const success = "[ " + "SUCCESS".red + " ] - "


exports.run = async (client, message, args) => {
    message.delete();



    const member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    member.kick(reason).then(member => {
    
        let banEmbed = new discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(" Error 704( Kick )")
        .setThumbnail(`https://boocomputerservices.files.wordpress.com/2018/08/ive-got-a-virus.gif`)
        .addField(`Usuário:`, "`"+member.displayName+"`")
        .addField(`Motivo:`, "`"+reason+"`")
        .setAuthor(`Error 704`)
        member.send('Você foi kickado(a)').catch(erro => console.log(error+erro))
        message.channel.send(banEmbed)
        
    }).catch( erro => {
        console.log(error+erro);
    });
}