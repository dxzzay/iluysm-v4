const discord = require('discord.js')

exports.run = async (client, message) => {

    message.delete();
    message.channel
        .send("Ping?")
        .then(m =>
            m.edit(`PING É ${m.createdTimestamp - message.createdTimestamp}ms.`)
        );

}