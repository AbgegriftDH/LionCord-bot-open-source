https://discord.gg/6ngwpKYUDM

client.on('message', async message => {
if(message.content === '!start-rainbow') {
  message.reply("rainbow role startet...")
  console.log(`[ Client ] ${bot.user.tag} viel spaß mit der rainbow role`);

    let guild = bot.guilds.cache.get(serverID) 
    if(!guild) throw `[ Error ] die Server ID: ${serverID} wurde nicht gefunden` 

    let role = guild.roles.cache.find(u => u.id === roleID) 
    if(!role) throw `[ Error ] role nicht gefunden ${guild.name}` 
    
    if(interval < 10000) console.log(`\n[!!!] Oh, I'd be careful!`) 

    setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => console.log(`[ Error ]bot hat keine berechtigung`));
    }, interval)


}
});
