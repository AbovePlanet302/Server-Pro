const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: !report <user> <reason>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Support Request")
    .setColor("#2c2f33")
    .addField("User", `${rUser}`)
    .addField("Problem", rreason)
    .addField("Type", "Support")

    let reportschannel = message.guild.channels.find(`name`, "support");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "support"
}
