const Discord = require("discord.js");
var auth = require("./auth.json")
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("I am ready!");
  bot.user.setPresence({ status: 'online', game: { name: '!FNP help' } });
});

bot.on("message", (message) => {
  if (message.content.startsWith("!FNP help")) {
    message.channel.send("A bot to track your fortnite progress over time. ```COMMANDS GO HERE```");
  }
});

bot.login(auth.token);
