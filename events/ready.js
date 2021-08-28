const colors = require("colors")
const center = require('center-align');

const info = "[ " + "INFO".purple + " ] - "
const error = "[ " + "ERRO".red + " ] - "
const success = "[ " + "CARREGOU".green + " ] - "

module.exports = (client, message) => {

    let status = [
        { name: ` *`, type: "PLAYING" },
        { name: ``, type: "WATCHING" },
        { name: ``, type: "STREAMING", url: 'https://www.twitch.tv/valorant' },
        { name: ``, type: "LISTENING" },

    ]
    i = 0;
    function setStatus() { //Função para o BOT mudar de Status aleatoriamente
    // let randomStatus = status[Math.floor(Math.random() * status.length)]
     client.user.setPresence(status[i++ % status.length])
    }
    setStatus();
    setInterval(() => setStatus(), 5000)



    //client.user.setActivity("VALORANT", { type: "STREAMING", url: "https://www.twitch.tv/valorant" });
    console.log(" ");
    console.log(" ");
    console.log("≪━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─◈─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━≫");
    console.log(center(`


 ▀█▀ █░░ █░░█ █░░█ █▀▀ █▀▄▀█
 ░█░ █░░ █░░█ █▄▄█ ▀▀█ █░▀░█
 ▄█▄ ▀▀▀ ░▀▀▀ ▄▄▄█ ▀▀▀ ▀░░░▀





SELF BOT ONLINE
  `.green, 70));
    console.log(center(``.green, 70));
	console.log(center(`dozzay`.white, 70));
	console.log(center(`

`.green, 70));
    console.log(" ");
    console.log("≪━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─◈─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━≫");
    console.log(" ");
    console.log("");
    console.log("ONLINE by dozzay")
}
