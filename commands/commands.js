const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Information")
    .setDescription("Thank you for using **Server Pro**!")
    .setColor("#8ca4ff")
    .addField("➜ User Commands", "``!botinfo``,``!coins``,``!commands``,``!help``,``!level``,``!pay``,``!serverinfo``,")
    .addField("➜ Moderation Commands", "``!addrole``,``!ban``,``!clear``,``!prefix``,``!removerole``,``!say``,``!tempmute``,``!warn``,``!warnlevel``")
    .addField("➜ Server Owner Commands", "``!setup``,``!prefix``")
    .setFooter("Created By Cheerbear#7678 | https://discord.gg/avftfVM");

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"commands"
}

