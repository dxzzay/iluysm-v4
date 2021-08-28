const discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (message.deletable) message.delete();
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 500) return
    message.channel
        .fetchMessages({
            limit: deleteCount
        })
        .then(message => message.forEach(m => m.delete().catch(error => { console.log(error) })));
}