const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const stripIndents = require('common-tags').stripIndents;
const fs = require('fs');
const developers = ["462647886035812372"]
const adminprefix = "-";
var moment = require('moment')
const prefix = "-";
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log('By Osama_DK')
  console.log('')  
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});



client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setplaying')) {
    client.user.setGame(argresult);
      message.channel.send(`**Done You Have Been Changed The Playing To ${argresult}**✅ `)
  } else 
     if (message.content === (adminprefix + "speedgenbotleave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setwatching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Done You Have Been Changed The Watching To ${argresult}**✅`)
  } else 
  if (message.content.startsWith(adminprefix + 'setlistening')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Done You Have Been Changed The Listening To ${argresult}**✅`)
  } else 
  if (message.content.startsWith(adminprefix + 'setstreaming')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**Done You Have Been Changed The Streaming To ${argresult}**✅`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**Changing The Name To ..${argresult}** ✅`)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**Changing The Avatar To :${argresult}** ✅`);
}


});


client.on ("guildMemberAdd", member => {

   var role = member.guild.roles.find ("name", "Buyers");
   member.addRole (role);
  
})




client.on('message', message => {
    if (message.content.startsWith("-bc")) {
    if (message.channel.type === 'dm') return ;
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`:x: **| You Don't Have Permission 'ADMINSTRATOR' ليس لديك صلاحية **`)
    if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR'))return message.channel.send(`**:x: | I Don't Have Permission 'ADMINSTRATOR' ليس لدي صلاحية **`)
    let args = message.content.split(' ').slice(1).join(' ')
    if (!args) return message.reply('You Must Write Message To Send Brodcast|يجب وضع رسالة لأرسال البرودكاست');
    message.reply(`**Are You Sure ? | [yes|نعم] | هل انت متاكد ؟**`).then(() => {
        message.channel.awaitMessages(msg => msg.content == 'yes' || msg.content == "نعم", {
            max: 1,
            time: 10000,
            errors: ['time']
        })
            .then(() => {
             message.channel.send('Wait... | ...انتظر قليلا').then(function(m) {
             setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓]1`)
             }, 1000)
             setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓]2%`)
             }, 3000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓]3%`)
             }, 5000)
             setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓]4%`)
             }, 7000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓]15%`)
             }, 9000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓]23%`)
             }, 10000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓]46%`)
             }, 12000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓]59%`)
             }, 14000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓]68%`)
             }, 16000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓]75%`)
             }, 18000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]87%`)
             }, 20000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]95%`)
             }, 21000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]96%`)
             }, 23000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]97%`)
             }, 24000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]98%`)
             }, 25000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]99%`)
             }, 26000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100%`)
             }, 27000)
             setTimeout(function() {
               m.edit(`☑|I Sended The Message To ${message.guild.memberCount} | تم أرسال الرسالة لـ|☑`)
             }, 29000)
              }); 

                //message.guild.members.filter(m=> m.presence.status !== 'offline').forEach(m => {
                message.guild.members.forEach(m => {
						var bc = new Discord.RichEmbed()
						.setColor('RANDOM')
						.addField('Server :', message.guild.name)
						.addField('Sender :', message.author.username)
						.addField('Message : ', args)
						.setThumbnail(message.guild.iconURL)
						.setAuthor(message.author.username, message.author.avatarURL)
						m.send(bc)                

   
                });
            });
    });
}
 });
      


 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });



 client.on('message', message => {
if(message.content.startsWith(prefix +'sug')) {
if(!message.channel.guild) return; 
      const A8tra7Room = message.guild.channels.find("name", "suggestions")
      if(!message.channel.guild) return;
   let a8tra7 = message.content.split(' ').slice(1).join(' ');
   var m8tr7 = message.author.id
if(!message.guild.channels.find("name","suggestions")) return message.channel.send('suggestions انشئ روم باسم')
   var ThxForSug = new Discord.RichEmbed()
   .setTitle(`:white_check_mark: Success!`)
   .setTimestamp()
   .setDescription(`شكراً على اقتراحك `)
.setDescription(`**Your Suggestion** : ${a8tra7}`)
   var Sure = new Discord.RichEmbed()
   .setTimestamp()
   .setTitle(` هل أنت متاكد ؟`)
.setDescription(`Suggestion : **${a8tra7}**`)
		 .setFooter('Speed Store BOT' , client.user.avatarURL)
message.channel.sendEmbed(Sure).then(msg => {
    msg.react('❎')
.then(() => msg.react('✅'))

let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

let Yes = msg.createReactionCollector(YesFilter, { time: 60000 });
let No = msg.createReactionCollector(NoFilter, { time: 60000 });

Yes.on("collect", r => {
   var ala8tra7 = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
   .setTitle(`New Suggestion :bell:`)
   .setDescription(`From : __<@${m8tr7}>__\n\nSuggestion: **${a8tra7}**`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   A8tra7Room.send(ala8tra7).then(msg => {
    msg.react('❎')
.then(() => msg.react('✅'))
})
let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

   message.channel.sendEmbed(ThxForSug).then(message => {message.delete(6000)})
msg.delete();
})
No.on("collect", r => {
message.channel.send('تم الغاء اقتراحك بنجاح :white_check_mark: ').then(message => {message.delete(4000)})
msg.delete();
})
})
}
});   







client.login(process.env.BOT_TOKEN);
