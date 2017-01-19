/*Constants*/
const clienttoken = '<enter your amazing token here!>';
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-"
const server = "da Vinci"
const invitelink = "undefined (err)"
const n1 = "weareno1 "
var newUsers = new Discord.Collection();
const fs = require("fs");
/*Askant Awnsers Constants*/
const answers = ["99%", "Maybe.", "Certainly not.", "I hope so.", "Not in your wildest dreams.", "There is a good chance.", "Quite likely.", "I think so.", "I hope not.", "I hope so.", "Never!", "Fuhgeddaboudit.", "Ahaha! Really?!?", "Pfft.", "Sorry, bucko.", "Hell, yes.", "Hell, to the na na.", "The future is bleak.", "The future is uncertain.", "I would rather not say.", "Who cares?", "Possibly.", "Never, ever, ever.", "There is a small chance.", "Yes!", "99%", "I Would bet on it.", "like\nmy\nstyle?"];
/*EventHandlers*/
client.on('message', msg => {
  if (msg.content.startsWith(prefix + 'help'))
    msg.channel.sendMessage(" ", {embed: {
            color: 3398526,
            author: {
                 name: "Help Menu for Discade!",
                icon_url: ""
            },
            description: "Need Help? i got you fam :wink:",
            fields: [
                {
                    inline: true,
                    name: "`-markdownhelp`",
                    value: "Recive Help with Markdowns."
                },
                {
                    inline: true,
                    name: "`-voicehelp`",
                    value: "Recive Help With Voice Channels."
                },
                {
                    inline: true,
                    name: "`-texthelp`",
                    value: "Recive Help With Text Channels."
                },
                {
                    inline: true,
                    name: "`-skinstealer`",
                    value: "Steal Your Friend's Cool Discord Icon!"
                },                           
                {
                    inline: true,
                    name: "`-askant`",
                    value: "Have Fun With Discade's Super Knowledgable ant!!"
                },     
                {
                    inline: true,
                    name: "**More Coming Soon!**",
                    value: "Watch For More Fun"
                }     
            ]
        }});
  if (msg.content.startsWith(prefix + "markdownhelp")) 
    msg.author.sendMessage('Markdowns: ` *Italics* **Bold** ***Italic & Bold*** __Underline__ ~~Strikethrough~~ `');
  if (msg.content.startsWith(prefix + "texthelp")) 
    msg.author.sendMessage('Text Chat help at Discords Website: https://support.discordapp.com/hc/en-us/categories/200404368-Text-Chat');
  if (msg.content.startsWith(prefix + "voicehelp")) 
    msg.author.sendMessage('Voice Chat help at Discords Website: https://support.discordapp.com/hc/en-us/categories/200404367-Voice-Chat');
  if (msg.content.startsWith(prefix + "asl")) {
  let [age, sex, location] = msg.content.split(" ").slice(1);
  msg.reply(`Hello ${msg.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
}
  if (msg.content === prefix + 'skinstealer') {
    msg.channel.sendMessage("`" + prefix + "skinstealer` is currently in development. Please wait for this feature to arrive"/*client.??*/);
}
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
  if (msg.content.startsWith(prefix + 'botstats'))
    msg.channel.sendMessage(" ", {embed: {
            color: 7013413,
            author: {
                 name: "Bot Statistics",
                icon_url: ""
            },
            description: "Bot Statistics... What do You Expect?",
            fields: [
                {
                    inline: true,
                    name: "Ping!",
                    value: Math.round(msg.client.ping) + "ms"
                },
                {
                    inline: true,
                    name: "Uptime!",
                    value: [Math.floor((client.uptime / 1000) / 60)] + "m"
                }

            ]
        }});
  if (msg.content.startsWith(""))
    
  if (msg.content.startsWith(prefix + "mc-user")) {
  let [username] = msg.content.split(" ").slice(1);
    msg.channel.sendMessage(" ", {embed: {
            color: 709360,
            author: {
                 name: "User Info For ${username}.",
                icon_url: "https://mcapi.ca/avatar/${username}"
            },
            description: "User Icon Finder",
        }});
}
  if (msg.content.startsWith(prefix + "ping")) {
    msg.channel.sendMessage("My Current Ping Is " + Math.round(msg.client.ping) + "ms, " + msg.author.username + "!");
  }
  /*AskAnt*/
  if (msg.content.startsWith(prefix + "askant")) 
    msg.reply(`:ant: ${answers[Math.floor(Math.random() * answers.length)]}`)
});
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Please welcome **${member.user.username}** to **${msg.guild.name}**!`);
});
client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Aww.. Player **${member.user.username}** has __Left__ **${msg.guild.name}**!`);
});
client.on('ready', () => {
  client.user.setGame('Say ' + prefix + 'help')
});

/*Points*/
let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
client.on("ready", () => {
  console.log('Points Operational.')
});
client.on("message", message => {
  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;

  if(!points[message.author.id]) points[message.author.id] = {points: 0, level: 0};
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));  
  if(curLevel > userData.points) {
    // Level up!
    userData.level = curLevel;
    message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
  }

  if(message.content.startsWith(prefix + "points")) {
    message.reply(`You Currently Have ${userData.points} points.`);
  }
  fs.writeFile('./points.json', JSON.stringify(points), (err) => {if(err) console.error(err)});
});
/*Permissions:
 *https://eslachance.gitbooks.io/discord-js-bot-guide/content/coding-walkthroughs/understanding_roles.html
 *http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_includes2
 */
client.login(clienttoken)
