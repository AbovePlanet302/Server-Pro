const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("New Updates")
    .setDescription("Thank you for using **Server Pro**!")
    .setColor("#8ca4ff")
    .addField("Everything is brand new<:New:559129746986762264>","We've redesined!")
    .setFooter("Created By Cheerbear#7678 | https://discord.gg/avftfVM");

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"help"
}

