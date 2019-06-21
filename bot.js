const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("591487055368945677")
setInterval(function() {
channel.send(سوي سبام اجيب كردتس ايزي مرا يابروت بوت);
}, 30)
})

client.login(process.env.BOT_TOKEN);