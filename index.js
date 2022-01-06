const {Client, MessageEmbed} = require("discord.js");
const client = new Client();
const Discord = require("discord.js")
const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["command", "events"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});
client.on("ready", ()  =>{
  console.log("Bot ONLINE!");
})
client.login("OTI3MTQ3MDU4Njg5ODg0MTgw.YdF-_A.23rO1oWNbKav0u05UFAs0x1W-z4");