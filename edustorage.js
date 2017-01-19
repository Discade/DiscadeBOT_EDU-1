/*Constants*/
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-"
const server = "da Vinci"
const invitelink = "undefined (err)"
const n1 = "weareno1 "
var newUsers = new Discord.Collection();
const fs = require("fs");
/*EventHandlers*/
client.on('message', msg => {
if (msg.content.startsWith(prefix + "calc")) {
  let [what, pro, pro2] = msg.content.split(" ").slice(1);
  if (what === "m")
    msg.channel.sendMessage(Math.floor((pro) * (pro2)) + ", " + msg.author.username + "!");
  if (what === "d")
    msg.channel.sendMessage(Math.floor((pro) / (pro2)) + ", " + msg.author.username + "!");
  if (what === "a")
    msg.channel.sendMessage(Math.floor((pro) + (pro2)) + ", " + msg.author.username + "!");
  if (what === "s")
    msg.channel.sendMessage(Math.floor((pro) - (pro2)) + ", " + msg.author.username + "!");
  if (what === "")
    msg.channel.sendMessage("Please Enter Your Method. (Example: `-calculator m 1 1` `m` for multiplication, 1 1 for `1x1`.)");
}
