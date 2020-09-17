const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "%";

    
client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "hola") {
    message.reply('Hola!...Solo soy un bot que saluda hasta el momento! Próximamente haré más cosas :)');
  } 
    else if (command === 'chau') {
    message.reply('Hasta luego! Bueno... también me despido!');
  } 
    else if (command === 'to do') {
       
    }

  

  
});

client.login(config.BOT_TOKEN);