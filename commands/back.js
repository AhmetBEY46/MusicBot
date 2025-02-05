module.exports = {
name: "back",
description: "Önceki müziği tekrar çalar.",
permissions: "0x0000000000000800",
options: [],
run: async (client, interaction) => {

const queue = client.player.getQueue(interaction.guild.id);

if (!queue || !queue.playing) return interaction.reply({ content: `No music currently playing! ❌`, ephemeral: true }).catch(e => { })

if (!queue.previousTracks[1]) return interaction.reply({ content: `There was no music playing before ❌`, ephemeral: true }).catch(e => { })

await queue.back();

interaction.reply({ content: `Önceki müzik çalmaya başladı... ✅` }).catch(e => { })
},
};
