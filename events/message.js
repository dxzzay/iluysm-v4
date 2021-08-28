const discord = require('discord.js')
const config = require("../config.json");
const colors = require("colors")


const info = "[ " + "INFO".red + " ] - "


module.exports = (client, message) => {


    

    //if (message.author.id !== client.user.id) return;
    if (message.content.indexOf(config.prefix) !== 0) return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    const cmd = client.commands.get(command)
    if (!cmd) return
    cmd.run(client, message, args)
    console.log(info + `O comando ['${command}'] foi executado por ['${message.author.username}']`)
    
};