var auth = require("./auth.json")

const Discord = require("discord.js");
const bot = new Discord.Client();
const Fortnite = require("fortnite-api");

let fortniteAPI = new Fortnite(
    [
        auth.fortnite.email,
        auth.fortnite.password,
        auth.fortnite.launcher_token,
        auth.fortnite.client_token
    ],
    {
        debug: true
    }
);

fortniteAPI.login().then(() => {
    //TODO: https://www.npmjs.com/package/fortnite-api
    // Must first add launcher and client token. See link for details
});

bot.on("ready", () => {
  console.log("I am ready!");
  bot.user.setPresence({ status: 'online', game: { name: '!FNP help' } });
});

bot.on("message", (message) => {
  if (message.content.startsWith("!FNP help")) {
    message.channel.send("A bot to track your fortnite progress over time. ```COMMANDS GO HERE```");
  }
  if (message.content.startsWith("!FNP "))
});

bot.login(auth.token);
