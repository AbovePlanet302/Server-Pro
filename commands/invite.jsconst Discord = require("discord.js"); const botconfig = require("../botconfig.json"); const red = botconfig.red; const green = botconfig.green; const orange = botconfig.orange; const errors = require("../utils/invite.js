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
    let qwreason = args.join(" ").slice(0);
    let prefix = args.join(" ").slice(19);
    if(!qwreason) return errors.noReason(message.channel);
    if(!prefix) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription(message.author)
    .setColor("red")
    .addField("Bot ID", qwreason)
    .addField("Bot Prefix", prefix)
    .addField("Owner", ${message.author.id})
    .setFooter("Please say !test <BOT ID> to test the bot.");
    bot.channels.get("618623250154520576").send(reportEmbed);

}

module.exports.help = {
  name: "invite"
}
