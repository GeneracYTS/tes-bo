//   โข-- MADE BY --โข
//   | Letta - Sama && Papah-Chan ! ๐๐ฐ
//   โข-------------โข
// CREDITS ! JANGAN DIUBAH, JANGAN DIHAPUS !!
// NOTE : UBAH APIKEY DI CONFIG.JS

//------ FUNCTION & MODULE
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
     }
   
let { MessageType } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'

//---------------------------------
let handler  = async (m, { conn, command, args, usedPrefix, DevMode, isPrems }) => {
	
	// ------- OTHER ------
  if (global.db.data.chats[m.chat].nsfw == true && m.isGroup) return conn.sendButton(m.chat, 'โ ๐จ๐ฉ๐ญ๐ข๐จ๐ง๐ฌ ๐๐๐๐ ๐๐ข ๐๐ก๐๐ญ ๐ข๐ง๐ข ๐๐๐ฅ๐ฎ๐ฆ ๐๐ข ๐ง๐ฒ๐๐ฅ๐๐ค๐๐ง ๐จ๐ฅ๐๐ก ๐๐๐ฆ๐ข๐ง ๐ ๐ซ๐จ๐ฎ๐ฉ',botdate, null, [['แดษดแดสสแด', '.on nsfw']], m)
  
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let ch = db.data.chats[m.chat].premnsfw
  //--------------------------

//---------------------SOURCE

//> Default
let res = 'https://api.lolhuman.xyz/api/random/nsfw/'
let api = '?apikey=e54205a4ca2caa368cc067bb'

//> Lolhuman
let resl = 'https://api.lolhuman.xyz/api/random2/'
let apil = '?apikey=8e66d0934cf741bfd2182c16'

//> Xteam
let xres = 'https://api.xteam.xyz/randomimage/'
let xapi = '?APIKEY=ebb6251cc00f9c63'
//--------------------------------

// โขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโขโข OPTIONS โขโขโขโขโขโขโขโขโขโขโข

// > Example :
// OPTIONS
// โข false = Free
// โข true = premium

let ahegao = true
let anal = true
let ass = true
let blowjob = true
let cums = true
let ecchi = true
let ero = true
let erofeet = true
let erogirl = true
let holoero = true
let erokitsune = true
let eroneko = true
let eroyuri = true
let feet = true
let femdom = true
let futanari = true
let girlsolo = true
let hentai = true
let holo = true
let jahy = true
let kitsune = true
let kuni = true
let loli = true
let manga = true
let milf = true
let mstrb = true
let neko = true
let panties = true
let pussy = true
let oppai = true
let spank = true
let tentacles = true
let thighs = true
let tits = true
let trap = true
let uniform = true
let waifu = true
let yaoi = true
let yuri = true

//-------------------------------------

//---------- TEXT -----------
let next = 'ษด แด x แด'
let fot = botdate
let txtprem = 'โ ๐๐๐๐ ๐ข๐ง๐ข ๐ค๐ก๐ฎ๐ฌ๐ฎ๐ฌ ๐ฎ๐ฌ๐๐ซ ๐ฉ๐ซ๐๐ฆ๐ข๐ฎ๐ฆ\n๐ก๐๐ซ๐๐ฉ ๐ก๐ฎ๐๐ฎ๐ง๐ ๐ข ๐จ๐ฐ๐ง๐๐ซ ๐ฎ๐ง๐ญ๐ฎ๐ค ๐ฆ๐๐ฆ๐๐๐ฅ๐ข ๐ฉ๐ซ๐๐ฆ๐ข๐ฎ! ๐'
let p = '๐ | '
let f = 'โป | '

let tekk = `\`\`\`โฉ Random Image Nsfw ${args[0] ? args[0].capitalize() : true}\`\`\` `
  let teks = `โ ๐ฎ Silahkan Pilih Dibawah!
โโบ Atau ketik ${usedPrefix}nsfw neko
โโโยทยทยทโโ`
//---------------------------

//--------- BUTTON SELECTIONS ----------
const sections = [
   {
	title: 'โคโขโฃโฅโคโขโฃโฅโคโขโฃโฅโคโขโฃโฅโคโขโฃโฅโคโขโฃโฅโคโขโฃโฅโคโขโฃโฅ',
	rows: [
	{title: `${(ch == true ? false : ahegao) == true ? p : f}` + "A โข Ahegao", rowId: ".nsfw ahegao"},
	{title: `${(ch == true ? false : anal) == true ? p:f}` + "A โข Anal", rowId: ".nsfw anal"},
	{title: `${(ch == true ? false : ass) == true ? p:f}` + "A โข Ass", rowId: ".nsfw ass"},
	{title: `${(ch == true ? false : blowjob) == true ? p:f}` + "B โข BlowJob", rowId: ".nsfw blowjob"},
	{title: `${(ch == true ? false : cums) == true ? p:f}` + "C โข Cumsluts", rowId: ".nsfw cums"},
	{title: `${(ch == true ? false : ecchi) == true ? p:f}` + "E โข Ecchi", rowId: ".nsfw ecchi"},
	{title: `${(ch == true ? false : ero) == true ? p:f}` + "E โข Ero", rowId: ".nsfw ero"},
  //{title: `${(ch == true ? false : erofeet) == true ? p:f}` + "E โข Ero Feet", rowId: ".nsfw erofeet"},
	{title: `${(ch == true ? false : erogirl) == true ? p:f}` + "E โข Ero Girl", rowId: ".nsfw erogirl"},
	{title: `${(ch == true ? false : holoero) == true ? p:f}` + "E โข Ero Holo", rowId: ".nsfw holoero"},
  //{title: `${(ch == true ? false : erokitsune) == true ? p:f}` + "E โข Ero Kitsune", rowId: ".nsfw erokitsune"},
  //{title: `${(ch == true ? false : eroneko) == true ? p:f}` + "E โข Ero Neko", rowId: ".nsfw eroneko"},
  //{title: `${(ch == true ? false : eroyuri) == true ? p:f}` + "E โข Ero Yuri", rowId: ".nsfw eroyuri"},
	{title: `${(ch == true ? false : feet) == true ? p:f}` + "F โข Feet", rowId: ".nsfw feet"},
	{title: `${(ch == true ? false : femdom) == true ? p:f}` + "F โข Femdom", rowId: ".nsfw femdom"},
	{title: `${(ch == true ? false : futanari) == true ? p:f}` + "F โข Futanari", rowId: ".nsfw futanari"},
  //{title: `${(ch == true ? false : girlsolo) == true ? p:f}` + "G โข Girl Solo", rowId: ".nsfw girlsolo"},
	{title: `${(ch == true ? false : hentai) == true ? p:f}` + "H โข Hentai", rowId: ".nsfw hentai"},
	{title: `${(ch == true ? false : holo) == true ? p:f}` + "H โข Holo", rowId: ".nsfw holo"},
	{title: `${(ch == true ? false : jahy) == true ? p:f}` + "J โข Jahy", rowId: ".nsfw jahy"},
  //{title: `${(ch == true ? false : kitsune) == true ? p:f}` + "K โข Kitsune", rowId: ".nsfw kitsune"},
  //{title: `${(ch == true ? false : kuni) == true ? p:f}` + "K โข Kuni", rowId: ".nsfw kuni"},
	{title: `${(ch == true ? false : loli) == true ? p:f}` + "L โข Loli", rowId: ".nsfw loli"},
	{title: `${(ch == true ? false : manga) == true ? p:f}` + "M โข Manga", rowId: ".nsfw manga"},
	{title: `${(ch == true ? false : milf) == true ? p:f}` + "M โข Milf", rowId: ".nsfw milf"},
	{title: `${(ch == true ? false : mstrb) == true ? p:f}` + "M โข Mstrb", rowId: ".nsfw mstrb"},
	{title: `${(ch == true ? false : neko) == true ? p:f}` + "N โข Neko", rowId: ".nsfw neko"},
	{title: `${(ch == true ? false : oppai) == true ? p:f}` + "O โข Oppai", rowId: ".nsfw oppai"},
	{title: `${(ch == true ? false : panties) == true ? p:f}` + "P โข Panties", rowId: ".nsfw panties"},
	{title: `${(ch == true ? false : pussy) == true ? p:f}` + "P โข Pussy", rowId: ".nsfw pussy"},
  //{title: `${(ch == true ? false : spank) == true ? p:f}` + "S โข Spank", rowId: ".nsfw spank"},
	{title: `${(ch == true ? false : tentacles) == true ? p:f}` + "T โข Tentacles", rowId: ".nsfw tentacles"},
	{title: `${(ch == true ? false : thighs) == true ? p:f}` + "T โข Thighs", rowId: ".nsfw thighs"},
  //{title: `${(ch == true ? false : tits) == true ? p:f}` + "T โข Tits", rowId: ".nsfw tits"},
	{title: `${(ch == true ? false : trap) == true ? p:f}` + "T โข Trap", rowId: ".nsfw trap"},
	{title: `${(ch == true ? false : uniform) == true ? p:f}` + "U โข Uniform", rowId: ".nsfw uniform"},
	{title: `${(ch == true ? false : waifu) == true ? p:f}` + "W โข Waifu", rowId: ".nsfw waifu"},
	{title: `${(ch == true ? false : yaoi) == true ? p:f}` + "Y โข Yaoi", rowId: ".nsfw yaoi"},
	{title: `${(ch == true ? false : yuri) == true ? p:f}` + "Y โข Yuri", rowId: ".nsfw yuri"},
	]
    },
]

const listMessage = {
  text: teks,
  footer: 'โ- - - - -  INFO - - - - -\nโ ๐ = Premium\nโ โป = Free\nโโข',
  title: `โโโโโ[ *NSFW* ]โโโ`,
  buttonText: "- -NSFW- -",
  sections
}
//--------------------------------


//------------ CASE NSFW ! ------------
  try {
    if (/(nsfw|hentai)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
case 'ahegao':
        if ((ch == true ? false : ahegao) == true) { 
	    if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		}
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'ahegao' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
          break
          
case 'anal':
         if ((ch == true ? false : anal) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
         }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'anal' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
           break
            
case 'ass':
         if ((ch == true ? false : ass) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'ass' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
             
case 'blowjob':
         if ((ch == true ? false : blowjob) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          let bj = await(await fetch(`https://api.waifu.pics/nsfw/blowjob`)).json()
          conn.sendButton(m.chat, tekk, fot, bj.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'cums':
         if ((ch == true ? false : cums) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'cum' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'ecchi':
         if ((ch == true ? false : ecchi) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'ecchi' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'ero':
         if ((ch == true ? false : ero) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'ero' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'erofeet':
         if ((ch == true ? false : eroFeet) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'feet' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'erogirl':
         if ((ch == true ? false : erogirl) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'lewdanimegirls' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'holoero':
         if ((ch == true ? false : holoero) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'holo' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'erokitsune':
         if ((ch == true ? false : erokitsune) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'erok' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'eroneko':
         if ((ch == true ? false : eroneko) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'eron' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'eroyuri':
         if ((ch == true ? false : eroyuri) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'eroYuri' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'feet':
         if ((ch == true ? false : feet) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'feet' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'femdom':
         if ((ch == true ? false : femdom) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'femdom' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'futanari':
         if ((ch == true ? false : futanari ) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'futanari' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'girlsolo':
         if ((ch == true ? false : girlsolo) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'solo' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'hentai':
         if ((ch == true ? false : hentai) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'hentai' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'holo':
         if ((ch == true ? false : holo) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'hololewd' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'jahy':
         if ((ch == true ? false : jahy) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'jahy' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'kitsune':
         if ((ch == true ? false : kitsune) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'kitsune' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'kuni':
         if ((ch == true ? false : kuni) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'kuni' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'loli':
         if ((ch == true ? false : loli) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'loli' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'manga':
         if ((ch == true ? false : manga) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'manga' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'milf':
         if ((ch == true ? false : milf) == true) { 
         if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'milf' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'mstrb':
         if ((ch == true ? false : mstrb) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'mstrb' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'neko':
         if ((ch == true ? false : neko) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'nsfwneko' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'oppai':
         if ((ch == true ? false : oppai) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'sideoppai' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'panties':
         if ((ch == true ? false : panties) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'panties' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'pussy':
         if ((ch == true ? false : pussy) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'pussy' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'spank':
         if ((ch == true ? false : spank) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'spank' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'tentacles':
         if ((ch == true ? false : tentacles) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'tentacles' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'tits':
         if ((ch == true ? false : tits) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'tits' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'thighs':
         if ((ch == true ? false : thighs) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'thighs' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'trap':
         if ((ch == true ? false : trap) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          let tr = await(await fetch(`https://api.waifu.pics/nsfw/trap`)).json()
          conn.sendButton(m.chat, tekk, fot, tr.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'uniform':
         if ((ch == true ? false : uniform) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'uniform' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'waifu':
         if ((ch == true ? false : waifu) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          let wf = await(await fetch(`https://api.waifu.pics/nsfw/waifu`)).json()
          conn.sendButton(m.chat, tekk, fot, wf.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'yaoi':
         if ((ch == true ? false : yaoi) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'yaoi' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'yuri':
         if ((ch == true ? false : yuri) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['สแดส แดสแดแดษชแดแด', '.premium'],['แดแดกษดแดส', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'yuri' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
default:
         return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
        } else if (/hentong/i.test(command)) {
               const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
               switch (_type) {
           case 'A':
               break
           case '':
               break
default:
          return conn.sendButton( m.chat, caption, fot, null, [`โฎโฐ Menu`, `.menu`], m)
         }
        }
       } catch (err) {
                      m.reply("Error\n\n\n" + err.stack)
      }
//-----------------------------

}

handler.help = ['nsfw <type>', 'hentai <type>']
handler.tags = ['nsfw', 'premium']
handler.command = /^(nsfw1|hentai2)/i

export default handler