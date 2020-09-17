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
<<<<<<< HEAD
    message.reply('Hola!...Solo soy un bot que saluda hasta el momento! Próximamente haré más cosas :)');
  } 
    else if (command === 'chau') {
    message.reply('Hasta luego! Bueno... también me despido!');
  } 
    else if (command === 'to do') {
       
    }

  
=======
    message.reply('Hola!...Solo soy un bot que saluda hasta el momento! Proximamente haré mas cosas :)');
  } else if (command === 'chau') {
    message.reply('Hasta luego!');
  } else if (command === `server`) {
    message.reply(`This server's name is: ${message.guild.name}`);
  }
>>>>>>> 215e83bf897f7ac47c71d6405008f01fadc9a242

  
});

client.login(config.BOT_TOKEN);