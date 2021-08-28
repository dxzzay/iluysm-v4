const discord = require('discord.js')
const config = require("../config.json");

prefix = config.prefix

exports.run = async (client, message, args) => {
    message.delete()

    if (args[0] == "playing") {
        let status = args.slice(1).join(" ");

        client.user.setActivity(status, { type: "PLAYING" });
        message.reply({
            embed: {
                color: 3447003,
                author: 
                {
                name:  client.user.username,
                icon_url: client.user.avatarURL
                },
                description: "Nome\n`"+status+"`\n\nType\n`PLAYING`",
            }
        });
    }
    if (args[0] == "watching") {
        let status = args.slice(1).join(" ");

        client.user.setActivity(status, { type: "WATCHING" });
        message.reply({
            embed: {
                color: 3447003,
                author: 
                {
                name:  client.user.username,
                icon_url: client.user.avatarURL
                },
                description: "Nome\n`"+status+"`\n\nType\n`WATCHING`",
            }
        });
    }
    if (args[0] == "streaming") {
        const status = args[1];
        const link = args[2];

        if (!link)
        return message.reply('\n`.status streaming [nome] [link]`')

        client.user.setActivity(status, { type: "STREAMING", url: link });
        message.reply({
            embed: {
                color: 3447003,
                author: 
                {
                name:  client.user.username,
                icon_url: client.user.avatarURL
                },
                description: "Nome\n`"+status+"`\n\nType\n`STREAMING`\n\nLink\n`"+link+"`",
            }
        });
    }
    if (args[0] == "listening") {


        if (message.deletable) message.delete();
        let status = args.slice(1).join(" ");

        client.user.setActivity(status, { type: "LISTENING" });
        message.reply({
            embed: {
                color: 3447003,
                author: 
                {
                name:  client.user.username,
                icon_url: client.user.avatarURL
                },
                description: "Nome\n`"+status+"`\n\nType\n`LISTENING`",
            }
        });
    }

    if (!args[0]) {
    let statusEmbed = new discord.RichEmbed()
    .setColor("BLACK")
    .setTitle("𝐒𝐓𝐀𝐓𝐔𝐒")
    .setDescription(`≪━─━─━─━─━─━─━─◈━─━─━─━─━─━─━─≫`)
    .addField(prefix + 'status playing', '`𝐀𝐥𝐭𝐞𝐫𝐚 𝐒𝐭𝐚𝐭𝐮𝐬 *𝐏𝐥𝐚𝐲𝐢𝐧𝐠*`', true)
    .addField(prefix + 'status watching', '`𝐀𝐥𝐭𝐞𝐫𝐚 𝐒𝐭𝐚𝐭𝐮𝐬 *𝐖𝐚𝐭𝐜𝐡𝐢𝐧𝐠*`', true)
    .addField(prefix + 'status streaming', '`𝐀𝐥𝐭𝐞𝐫𝐚 𝐒𝐭𝐚𝐭𝐮𝐬 *𝐒𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠*`', true)
    .addField(prefix + 'status listening', '`𝐀𝐥𝐭𝐞𝐫𝐚 𝐒𝐭𝐚𝐭𝐮𝐬 *𝐋𝐢𝐬𝐭𝐞𝐧𝐢𝐧𝐠*`', true)
    .setThumbnail(client.user.avatarURL)
    .setFooter(`root@vithx`);
  message.channel.send(statusEmbed);
    }

}