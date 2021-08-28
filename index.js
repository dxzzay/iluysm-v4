const discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const config = require("./config.json");
const edit = require("./edit.json");
const client = new discord.Client();
client.commands = new Enmap();
const colors = require("colors")

const info = "[ " + "INFO".red + " ] - "
const error = "[ " + "ERROR".red + " ] - "
const success = "[ " + "SUCCESS".red + " ] - "
    //10000 = 10Ms = 10 segundos

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(success + `Evento ['${eventName}'] carregado..`);
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(success + `Comando ['${commandName}'] carregado..`);
    client.commands.set(commandName, props);
  });
});


var lista = [];
client.on("message", message => {
  if (edit.check === false) return;
  if (message.channel.type === "dm") {
    if (message.author.id === client.user.id) return;
    if (lista.includes(`${message.author.id}`)) return;
    lista.push(`${message.author.id}`);
    message.channel.send(edit.uMessage)
    console.log(info + `O membro ['${message.author.tag}'] acabou de ser respondido.`);
  }
})
client.login(config.token)
