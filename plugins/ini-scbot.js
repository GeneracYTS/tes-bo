import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let pp = 'https://telegra.ph/file/5d9f59c590b6e7e298bd7.jpg'
let name = await conn.getName(m.sender)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `*SCRIPT*\n\n• Name: ${name.split("@")[0]}\n\nSource Code Ini Pribadi\nIngin Tahu Lebih Lanjut ?\nTekan Tombol Dibawah .`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://xnxx.com/', 'Source Code', null, null, [
['𝙼𝙴𝙽𝚄', '/menu'],
['\n sᴇʙᴇɴᴀʀɴʏᴀ ɢᴡ sᴀɴɢᴇ\nᴊᴅɪ ᴍᴀ ɢᴀ ɴɢᴡᴇ sᴀᴍᴀ ɢᴡ?','tq'],
], m)
}
handler.command = ['sc']

export default handler