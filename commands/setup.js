const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Setup Guide")
    .setDescription("Thank you for using **Server Pro**!")
    .setColor("#8ca4ff")
    .addField("➜ Channels", "Please make these listed channels. ``reports``, ``mod-logs``")
    .addField("➜ Command testing", "Please test the listed commands. ``!report``, ``!kick``")
    .setFooter("Created By Cheerbear#7678 | https://discord.gg/avftfVM");

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"setup"
}

