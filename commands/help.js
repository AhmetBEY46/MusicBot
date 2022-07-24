const { EmbedBuilder } = require('discord.js')
module.exports = {
name: "help",
description: "It helps you to get information about bot and commands.",
permissions: "0x0000000000000800",
options: [],
showHelp: false,
run: async (client, interaction) => {

const commands = client.commands.filter(x => x.showHelp !== false);

const embed = new EmbedBuilder()
.setColor('007fff')
.setTitle(client.user.username)
.setThumbnail(client.user.displayAvatarURL())
.setDescription("Tamamen ücretsiz ve gelişmiş bir arayüz ile discord sunucunuzda müzik dinlemenin tam zamanı. Sunucunuzu özel hissettirecek birçok platformda müzik çalmayı destekleyen müzik botu.")
.addFields([
    { name: `Bot Commands`, value: commands.map(x => `\`/${x.name}\``).join(' | ') }
])
.setTimestamp()
.setFooter({text: `AhmetBEY ❤️` })
interaction.reply({ embeds: [embed] }).catch(e => { })
},
};
