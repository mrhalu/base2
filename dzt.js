
require('./setup/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { color, bgcolor } = require("./lib/color")
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, reSize} = require('./lib/myfunc')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
const fke = '```'

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = dzt = async (dzt, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "ᴀɴᴏɴʏᴍᴜs"
        const botNumber = await dzt.decodeJid(dzt.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
     
	 
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: 'ᴳᵒᵈ᭄ʙᴇᴇʙᴏᴛ - ᴍᴅ', orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: 'ᴳᵒᵈ᭄ʙᴇᴇʙᴏᴛ - ᴍᴅ',jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":'ᴳᵒᵈ᭄ʙᴇᴇʙᴏᴛ - ᴍᴅ', "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': 'ᴳᵒᵈ᭄ʙᴇᴇʙᴏᴛ - ᴍᴅ', 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6281233959206-1616169743@g.us","inviteCode": "m","groupName": "YT dzt", "caption": 'ᴳᵒᵈ᭄ʙᴇᴇʙᴏᴛ - ᴍᴅ', 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'ᴍᴀᴢʟᴀɴᴀ ᴅᴇᴠ',jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': 'ᴍᴀᴢʟᴀɴᴀ ᴅᴇᴠ', 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ᴍᴀᴢʟᴀɴᴀ ᴅᴇᴠ,;;;\nFN:ᴍᴀᴢʟᴀɴᴀ ᴅᴇᴠ\nitem1.TEL;waid=6281233959206:6281233959206\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": 'ᴳᵒᵈ᭄ʙᴇᴇʙᴏᴛ - ᴍᴅ',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./image/naze.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const ads = (teks) => { dzt.sendMessage(m.chat, {text:teks}, {quoted:fkontak})
}
		
		
const time2 = moment().tz('Asia/Jakarta').format('HH:mm')
if(time2 < "23:59:00"){
var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ'
var imageWaktu = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi44HfIHeWiqqL2eZ2xpPQJbugAQBeMiDagg&usqp=CAU'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
var imageWaktu = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkH8BiINnVMEMw9mP-KHUZD-72P5sciAQag&usqp=CAU'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ sᴏʀᴇ'
var imageWaktu = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkH8BiINnVMEMw9mP-KHUZD-72P5sciAQag&usqp=CAU'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ'
var imageWaktu = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnVXwTJ933yYhD6Q5VeB5u6SUyZcLuNG0d7X7T-HJ8tq13yIn59nfKd24&s=10'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
var imageWaktu = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94HwSNhl49TccNoQAudruXhxOvvuCSj9qejxWRLb_ZX9nW6o1L26aRvU&s=10'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
var imageWaktu = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94HwSNhl49TccNoQAudruXhxOvvuCSj9qejxWRLb_ZX9nW6o1L26aRvU&s=10'
                                         }
                                         
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['ᴍɪɴɢɢᴜ', 'sᴇɴɪɴ', 'sᴇʟᴀsᴀ', 'ʀᴀʙᴜ', 'ᴋᴀᴍɪs', 'ᴊᴜᴍᴀᴛ', 'sᴀʙᴛᴜ'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const tanggalku = (hri + '' + buln[bulnh] + '' + syear)
const hariku = (thisDaye)		
		
		
		
        // Group
        const groupMetadata = m.isGroup ? await dzt.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!dzt.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            dzt.readMessages([m.key])
        }

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await dzt.setStatus(`${global.botname} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        ads(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
        if (!isBotAdmins) return ads(`*Bot aja bukan admin anj*`)
        let gclink = (`https://chat.whatsapp.com/`+await dzt.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return ads(`*maaf gak jadi, karena kamu ngirim link group ini*`)
        if (isAdmins) return ads(`*maaf kamu admin*`)
        if (isCreator) return ads(`*maaf kamu owner bot ku*`)
        dzt.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: dzt.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, dzt.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        dzt.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            dzt.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dzt.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.botname, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else ads('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ads(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else ads('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dzt.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.botname, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else ads('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dzt.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.botname, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else ads('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dzt.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, global.botname, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else ads('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dzt.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.botname, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else ads('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dzt.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.botname, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else ads('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await dzt.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.botname, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else ads('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // ads(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    ads({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await dzt.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await dzt.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    dzt.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    dzt.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) dzt.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) dzt.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) dzt.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    dzt.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    ads(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) dzt.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    ads(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) dzt.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    dzt.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            ads(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            ads(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        
        
        
if (m.message) {
await dzt.sendPresenceUpdate('composing', m.chat)
dzt.readMessages([m.key])
console.log('⪧ [ ᴍᴇssᴀɢᴇ ]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${budy} [${args.length}]`), 'from', color(m.pushName))
}
        
        
        
        
        
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                ads(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!m.isGroup) throw mess.group
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            ads('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await dzt.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await dzt.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            ads('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            dzt.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            ads(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            ads('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) ads(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return ads(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return ads(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
            this.suit[id] = {
            chat: await dzt.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) dzt.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                dzt.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/74fd634010128be37972c.jpg' }, caption: `*${ucapanWaktu} Kak ${m.pushName}*\n\n *Jika ingin berdonasi silahkan scan gambar diatas*\n\n*Jika ingin sewa bot atau premium*\n*Silahkan Chat Owner*\n\n*Atau klik link dibawah ini*\n_https://saweria.co/dzt_\n\n*Atau Transfer via*\n- *Gopay Dana Ovo Qris ShopeePay*\n Ke nomer berikut : 082113821188\n\n_Terima kasih_` }, { quoted: m })
            }
            break
            case 'sc': {
let gambar = await getBuffer('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOX0miD4B3BlYm64lm-7_TltD9cnQrXSx1A&usqp=CAU')          
let anu = `
🎗️ 𝚂𝚙𝚎𝚌𝚒𝚊𝚕 𝚃𝚑𝚊𝚗𝚔𝚜 🎗️

 ╰≻ 𝙽𝙰𝚉𝙴 𝙳𝙴𝚅
 ╰≻ 𝙳𝙸𝙺𝙰 𝙰𝚁𝙳𝙽𝚃
 ╰≻ 𝚁𝙸𝙼𝚄𝚁𝚄
 ╰≻ 𝙳𝙴𝙵 𝙼𝙳
 ╰≻ 𝙰𝙳𝙸𝚆𝙰𝙹𝚂𝙸𝙽𝙶

🎗️ 𝙾𝚁𝙸𝙶𝙸𝙽𝙰𝙻 𝙱𝙰𝚂𝙴 🎗️

 ⎙ 𝙽𝙰𝚉𝙴
 
 ╰≻ https://github.com/nazedev/naze-md
  
 ⎙ 𝙷𝙸𝚂𝙾𝙺𝙰
 
 ╰≻ https://github.com/DikaArdnt/Hisoka-Morou

🎗️ 𝚁𝙴𝙲𝙾𝙳𝙴 𝙱𝚈 🎗️

 ╰≻ ${global.author}
`
var button = [
{ buttonId: `menu`, buttonText: { displayText: `⌨ ᴍᴇɴᴜ` }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: `㋛︎ ᴏᴡɴᴇʀ` }, type: 1 }
]
await dzt.sendMessage(m.chat, { caption: `${anu}`, location: { jpegThumbnail: await reSize(gambar, 300, 300) }, buttons: button, footer: global.botname, mentions: parseMention(anu) })   
                
            }
            break		 
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    dzt.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    dzt.chatModify({ mute: null }, m.chat, []).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    dzt.chatModify({  archive: true }, m.chat, []).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    dzt.chatModify({ archive: false }, m.chat, []).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
                } else if (args[0] === 'read') {
                    dzt.chatModify({ markRead: true }, m.chat, []).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    dzt.chatModify({ markRead: false }, m.chat, []).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    dzt.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    ads('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await dzt.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            ads(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await dzt.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    dzt.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    dzt.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.botname, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    dzt.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    dzt.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.botname, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    dzt.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    dzt.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.botname, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    dzt.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    dzt.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.botname, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    dzt.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    dzt.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.botname, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    dzt.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    dzt.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.botname, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                dzt.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ads("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            
//Pembatas===============================================
            case 'slot': {
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Keterangan* :\n_Jika Mendapatkan 3Buah Sama_\n_Berarti Kamu Win_\n\n_Contoh : 🍒 : 🍒 : 🍒_ <=====`
            let buttons = [{ buttonId: 'slot', buttonText: { displayText: '🎰MAIN LAGI🎰' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, sloth, global.botname, m)
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await dzt.sendButtonText(m.chat, buttons, jawab, global.botname, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa Donasi🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await dzt.sendButtonText(m.chat, buttons, jawab, global.botname, m, {mentions: menst})
            }
            break
            case 'gbtku': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            case 'bisakah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Bisakah ${text}*\nJawab : ${keh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'sᴀʙᴀʀ 🗿' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, jawab, global.botname, m)
            }
            break
            case 'apakah': {
            	if (!text) throw `Example : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Apakah ${text}*\nJawab : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, jawab, global.botname, m)
            }
            break
            case 'kapan': case 'kapankah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nJawab : ${koh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'sᴀʙᴀʀ 🗿' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, jawab, global.botname, m)
            }
            break
            
           
//PEMBATAS=======================================
            case 'totalfitur': case 'totalfiture': case 'fiture': case 'fitur': {
            	ads('*Total Ada 231 Fitur*\n_Ketik Req Untuk Request Fitur_')
            }
            break
            case 'runtime': {
            	let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑SEWA' }, type: 1 }]
                await dzt.sendButtonText(m.chat, buttons, lowq, global.botname, m, {quoted: fkontak})
            	}
            break
            case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS' }, type: 1 }]
            await dzt.sendButtonText(ownernya, buttons, pjtxt, global.botname, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*\n_Terima Kasih🙏_`
            await dzt.sendButtonText(m.chat, buttons, akhji, global.botname, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                dzt.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                ads(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await dzt.groupAcceptInvite(result).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await dzt.groupLeave(m.chat).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          ads(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await dzt.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await dzt.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await dzt.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await dzt.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await dzt.updateBlockStatus(users, 'block').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await dzt.updateBlockStatus(users, 'unblock').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await dzt.groupUpdateSubject(m.chat, text).then((res) => ads(mess.success)).catch((err) => ads(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await dzt.groupUpdateDescription(m.chat, text).then((res) => ads(mess.success)).catch((err) => ads(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await dzt.downloadAndSaveMediaMessage(quoted)
                await dzt.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                ads(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await dzt.downloadAndSaveMediaMessage(quoted)
                await dzt.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                ads(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                dzt.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            dzt.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return ads(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                ads(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            ads(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: global.botname,
                buttons: buttonsVote,
                headerType: 1
            }
            dzt.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿??𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: global.botname,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            dzt.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: global.botname,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            dzt.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${dzt.user.id}
`
dzt.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            ads('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await dzt.groupSettingUpdate(m.chat, 'announcement').then((res) => ads(`*Sukses Menutup Group*`)).catch((err) => ads(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await dzt.groupSettingUpdate(m.chat, 'not_announcement').then((res) => ads(`*Sukses Membuka Group*`)).catch((err) => ads(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await dzt.sendButtonText(m.chat, buttons, `Mode Group`, global.botname, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await dzt.groupSettingUpdate(m.chat, 'unlocked').then((res) => ads(`*Sukses Membuka Edit Info Group*`)).catch((err) => ads(jsonformat(err)))
             } else if (args[0] === 'close'){
                await dzt.groupSettingUpdate(m.chat, 'locked').then((res) => ads(`*Sukses Menutup Edit Info Group*`)).catch((err) => ads(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await dzt.sendButtonText(m.chat, buttons, `Mode Edit Info`, global.botname, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return ads(`*Sudah Aktif kak Sebelumnya*`)
                db.data.chats[m.chat].antilink = true
                ads(`*Antilink Sekarang Aktif !*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return ads(`*Sudah Tidak Aktif Sebelumnya*`)
                db.data.chats[m.chat].antilink = false
                ads(`*Antilink Sekarang Tidak Aktif !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await dzt.sendButtonText(m.chat, buttons, `Mode Antilink`, global.botname, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return ads(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                ads(`${global.botname} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return ads(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                ads(`${global.botname} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await dzt.sendButtonText(m.chat, buttons, `Mute Bot`, global.botname, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await dzt.groupInviteCode(m.chat)
                dzt.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await dzt.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await dzt.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                dzt.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'lapor': {
            	if (!text) throw `Example : ${prefix + command} Lapor Ada Fitur Yang error`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS LAPORANNYA' }, type: 1 }]
            await dzt.sendButtonText(ownernya, buttons, pjtxt, global.botname, m, {mentions: ments})
            let akhji = `Laporan Telah Terkirim\nKe Owner @${ownernya.split('@')[0]}\n*Terima Kasih Laporannya🙏*\n_Nomermu Akan Terblokir_\n_Jika Laporan Hanya Di Buat Buat_`
            await dzt.sendButtonText(m.chat, buttons, akhji, global.botname, m, {mentions: ments})
            }
            break
            case 'hehehe': {
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                dzt.sendMessage(m.chat, reactionMessage)
            }
            break  
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await dzt.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                ads(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let txt = `「 *Broadcast Group* 」\n\n${text}`
                    let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, txt, global.botname, m)
		}}
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                ads(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(3000)
                      let txt = `「 *Broadcast ᴍᴀᴢʟᴀɴᴀ ᴅᴇᴠ* 」\n\n${text}`
                      let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, txt, global.botname, m)
		}}
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return ads('Reply Pesannya!!')
		let wokwol = await dzt.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return ads('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 dzt.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await dzt.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 dzt.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    dzt.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            ads(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            ads(db)
        }
        break
        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                ads(mess.wait)
                let media = await dzt.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return ads(err)
                let buff = fs.readFileSync(ran)
                dzt.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else ads(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                ads(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                ads(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                ads(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                dzt.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                ads('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
ads(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                dzt.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        ads(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return ads(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		ads(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return ads('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                dzt.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await dzt.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, global.botname, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return ads('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await dzt.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                ads('Ok')
                let other = room.other(m.sender)
                if (other) await dzt.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return ads('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await dzt.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, global.botname, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '↬ sᴋɪᴘ' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await dzt.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.botname, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await dzt.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.botname, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await dzt.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, global.botname, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return ads('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await dzt.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await dzt.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '↬ sᴋɪᴘ' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await dzt.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.botname, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await dzt.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.botname, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await dzt.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, global.botname, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                dzt.public = true
                ads('*Sukse Change To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                dzt.public = false
                ads('*Sukses Change To Self Usage*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                ads(respon)
            }
            break
            case 'speedtest': {
            ads('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py --secure')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) ads(stdout)
        if (stderr.trim()) ads(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                dzt.sendContact(m.chat, global.owner, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                ads(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                ads(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                ads(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                ads(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                dzt.sendListMsg(m.chat, `pilih aja *${pushname}* Setmenu nya!`, global.botname, `*Hello Kak* !`, `Pilih Set Menu`, sections, m)
                }
            }
            break
            
//PEMBATAS=======================================
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
            ads(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await dzt.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return ads('*Maksimal 10 detik!*')
                let media = await quoted.download()
                let encmedia = await dzt.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
            }
            break
         case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await dzt.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await dzt.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await dzt.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'dzt', 'morou', m, {asSticker: true})

         }
         break
         case 'tts': {
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
             dzt.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mpeg', fileName: `${text}.mp3` }, { quoted: fvn })
         	}
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        ads(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/uploader')
            let mee = await dzt.downloadAndSaveMediaMessage(quoted)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await dzt.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(awikwok)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            ads(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                ads(mess.wait)
                let media = await dzt.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    dzt.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                ads(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await dzt.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await dzt.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            ads(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            dzt.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            ads(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            dzt.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${global.botname}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            ads(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            dzt.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                ads(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await dzt.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await dzt.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                ads(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await dzt.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    ads(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    ads(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await dzt.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    ads(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    dzt.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'menfes': case 'menfess': {
		        if (m.isGroup) throw ('fitur tidak dapat digunakan di grup')
            	if (!text) throw `Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${author}`,jpegThumbnail: thumb}}}
               let mq1 = m1 + '@s.whatsapp.net'
               let kawk = ('PESAN RAHASIA')
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
               let pjtxt = `Pesan Dari : ${m2} \nUntuk : @${mq1.split('@')[0]}\n\n${m3}`
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '❤LIKE' }, type: 1 }]
            await dzt.sendButtonText(m1 + '@s.whatsapp.net', buttons, pjtxt, kawk, m, {mentions: ments, quoted: kafloc})
            let akhji = `Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`
            await dzt.sendButtonText(m.chat, buttons, akhji, global.botname, m, {mentions: ments})
            }
            break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                ads(mess.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'ʏᴏᴜᴛᴜʙᴇ sᴇᴀʀᴄʜ\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
let gambar = await getBuffer(search.all[0].thumbnail)
var button = [
{ buttonId: `menu`, buttonText: { displayText: `⏍ ᴍᴇɴᴜ` }, type: 1 }
]
await dzt.sendMessage(m.chat, { caption: `${teks}`, location: { jpegThumbnail: await reSize(gambar, 300, 300) }, buttons: button, footer: global.botname, mentions: parseMention(teks) })                          
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                ads(mess.wait)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                ads(teks)
                })
                }
                break
        case 'gimage': {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
        ads(mess.wait)
        anu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = anu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 4
                }
                dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                ads(mess.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 4
                }
                dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return ads('File Melebihi Batas '+util.format(media))
                dzt.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                dzt.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return ads('File Melebihi Batas '+util.format(media))
                dzt.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return ads('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return ads('File Melebihi Batas '+util.format(media))
                dzt.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                dzt.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return ads('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return ads('File Melebihi Batas '+util.format(media))
                dzt.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                ads(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                dzt.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'waifu': {
            	ads(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `simplemenu`, buttonText: {displayText: '↫ ɢᴏ ʙᴀᴄᴋ'}, type: 1}]
                let buttonMessage = {
                    image: buffer,
                    caption: `Random Waifu`,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 4
                }
                dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couple': {
                ads(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                dzt.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                dzt.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 4
                }
                dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 4
                }
                dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gcsearch': {
              if (!text) throw 'Masukkan Query Title'
                anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)
                n = anu.result
                result = n[Math.floor(Math.random() * n.length)]
                let jwbn = `*Nama : ${result.nama}\n*Link : ${result.link}*`
		let buttons = [{ buttonId: `gcsearch ${text}`, buttonText: { displayText: 'Next' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, jwbn, global.botname, m, {quoted: fgclink})
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 4
                }
                dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tinyurl': case 'isgd': case 'vurl': case 'clp': {
            	if (!text) throw 'Masukkan Query Title'
                let anu = await fetchJson(`https://api.akuari.my.id/short/${command}?link=${text}`)
                let buttons = [
                    {buttonId: `hehehe`, buttonText: {displayText: '🙏THANKS'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.hasil,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 2
                }
                dzt.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            
//Pembatas========================================
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}' \n\nAnime : ${result.anime}\n\n- ${result.up_at}`,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 2
                }
                dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': {
                let anu = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/quotes`)
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.quote,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 2
                }
                dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                ads(mess.wait)
                dzt.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6285822347348`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return ads(anu.message)
                dzt.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example❗:\n${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika,1,2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return ads(anu.message)
                dzt.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            
//PEMBATAS=======================================
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return ads('Limit Harian Anda Telah Habis')
                if (!text) return ads(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return ads(anu.result.message)
                    ads(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return ads(anu.result.message)
                    ads(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return ads(anu.result.message)
                    ads(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return ads(anu.result.message)
                    ads(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return ads(anu.result.message)
                    ads(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return ads(anu.result.message)
                    dzt.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return ads(anu.result.message)
                    ads(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    ads(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
            case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                ads(mess.wait)
                let anu = await fetchJson(`https://anabotofc.herokuapp.com/api/download/tiktok2?url=${text}&apikey=AnaBot`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '📖 ᴍᴇɴᴜ'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ ᴀᴜᴅɪᴏ'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowm },
                    caption: `ᴅᴏᴡɴʟᴏᴀᴅ ғʀᴏᴍ ${text}`,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 5
                }
                dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
           /**case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                ads(mess.wait)
                let anu = await fetchJson(`https://botcahx-rest-api.herokuapp.com/api/dowloader/tikok?url=${text}`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.video_original },
                    caption: `Download From ${text}`,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 5
                }
                dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break**/
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                ads(mess.wait)
                let anu = await fetchJson(`https://anabotofc.herokuapp.com/api/download/tiktok2?url=${text}&apikey=AnaBot`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '📖 ᴍᴇɴᴜ'}, type: 1},
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► ɴᴏ ᴡᴍ'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
                dzt.sendMessage(m.chat, { audio: { url: anu.result.nowm }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                ads(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) dzt.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    dzt.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                ads(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await dzt.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                dzt.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                ads(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await dzt.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                dzt.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                ads(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                ads(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
                dzt.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                ads(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                dzt.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                ads(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                dzt.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: global.botname,
			buttons,
			headerType: 4
		    }
		    dzt.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        dzt.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		dzt.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		dzt.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => ads(oh))
		}
		break
		/**case 'juzamma': {
		if (args[0] === 'pdf') {
		ads(mess.wait)
		dzt.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		ads(mess.wait)
		dzt.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		ads(mess.wait)
		dzt.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		ads(mess.wait)
		dzt.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		ads(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break**/
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		ads(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		ads(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		ads(txt)
		dzt.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		ads(txt)
		}
		break
		
		case 'playstore': {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            ads(teks)
            }
            break
            case 'gsmarena': {
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            dzt.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            dzt.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            dzt.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ Thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            dzt.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            return ads(`ᴍᴏʜᴏɴ ᴍᴀᴀғ ᴋᴀᴋ ғɪᴛᴜʀ *${command}* sᴇᴅᴀɴɢ ᴍᴀɪɴᴛᴀɴᴄᴇ`)
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `⭔ Judul: ${judul}\n`
            capt += `⭔ Dibaca: ${dibaca}\n`
            capt += `⭔ Divote: ${divote}\n`
            capt += `⭔ Bab: ${bab}\n`
            capt += `⭔ Waktu: ${waktu}\n`
            capt += `⭔ Url: ${url}\n`
            capt += `⭔ Deskripsi: ${description}`
            dzt.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Like: ${i.like}\n`
            capt += `⭔ Creator: ${i.creator}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            ads(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            dzt.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break

//PEMBATAS=======================================
            case 'rules': {
rules = `┌──⭓ *Rules BOT*
│
│ *Intinya Jangan Spam❗*
│
└───────⭓`
let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '👑Sewa' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, rules, global.botname, m, {quoted: fkontak})
            }
            break
            case 'sponsor': {
            if (!m.isGroup) throw mess.group
            let qontak = `6285718971848@s.whatsapp.net`
let dana = `6281911500445@s.whatsapp.net`
let shopeeotp = `6285574670796@s.whatsapp.net`
let shopee = `622150996855@s.whatsapp.net`
let tokopedia = `6281197911081@s.whatsapp.net`
let smartfrend = `628881212888@s.whatsapp.net`
let getcontact = `447990653714@s.whatsapp.net`
let facebook = `447710173736@s.whatsapp.net`
let pasarpolis = `6287700178000@s.whatsapp.net`
let kominfo = `628119224545@s.whatsapp.net`
let alfamart = `628111500959@s.whatsapp.net`
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab = `*Bot by ᴍᴀᴢʟᴀɴᴀ ᴅᴇᴠ* 
-Creator :  @${ownernya.split('@')[0]}\n-Lu : @${me.split('@')[0]}\n-Powered  : @${ini_mark.split('@')[0]}\n- :  @${qontak.split('@')[0]}\n- :  @${dana.split('@')[0]}\n- :  @${shopeeotp.split('@')[0]}\n- :  @${shopee.split('@')[0]}\n- :  @${tokopedia.split('@')[0]}\n- :  @${smartfrend.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${facebook.split('@')[0]}\n- :  @${pasarpolis.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${kominfo.split('@')[0]}\n- :  @${alfamart.split('@')[0]}`
            let ments = [ownernya, me, ini_mark, qontak, dana, shopeeotp, shopee, tokopedia, smartfrend, getcontact, facebook, pasarpolis, kominfo, alfamart]
            let buttons = [
                        { buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 }
                    ]
                    await dzt.sendButtonText(m.chat, buttons, jawab, global.botname, m, {mentions: ments})
            }
            break
/*            case 'menubackup': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab = `*${ucapanWaktu}*
╭──❍「 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 」❍
├ *Nama* : ${pushname}
├ *Number* : @${me.split('@')[0]}
├ *Premium* : ${isPremium ? '✅' : `❌`}
├ *Limit* : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╰──❍

╭──❍「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」❍
├ *Nama Bot* : ${pushname}
├ *Powered* : @${ini_mark.split('@')[0]}
├ *Owner* : @${ownernya.split('@')[0]}
├ *Mode* : ${dzt.public ? 'Public' : `Self`}
├ *Prefix* :「 MULTI-PREFIX 」
╰──❍

╭──❍「 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 」❍
├ *Hari Ini* : ${hari}
├ *Wib* : ${time2} WIB
╰──❍`
            let ments = [ownernya, me, ini_mark]
            let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, jawab, global.botname, m, {mentions: ments, quoted: fkontak})
            }
*/            
            break
            case 'simplemenu': case 'list': case 'help': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
            let kukiw = `*${ucapanWaktu}*
╭──❍「 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 」❍
├ *Nama* : ${pushname}
├ *Number* : ${me.split('@')[0]}
├ *Premium* : ${isPremium ? '✅' : `❌`}
├ *Limit* : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╰──❍

╭──❍「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」❍
├ *Nama Bot* : ${pushname}
├ *Mode* : ${dzt.public ? 'Public' : `Self`}
├ *Prefix* :「 MULTI-PREFIX 」
╰──❍

╭──❍「 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 」❍
├ *Hari Ini* : ${hariku}
├ *Wib* : ${time2} WIB
╰──❍`
                let sections = [
                {
                title: global.botname + ' ғᴇᴀᴛᴜʀᴇ ',
                rows: [
                {title: "ɢʀᴏᴜᴘ ", rowId: `mgroup`, description: `👥Group Menu`},
                {title: "Webzone", rowId: `mwebzone`, description: `📹Webzone Menu`},
                {title: "Downloader", rowId: `mdownloader`, description: `📥Downloader Menu`},
                {title: "Search", rowId: `msearch`, description: `🔍Search Menu`},
                {title: "Random", rowId: `mrandom`, description: `❔Random Menu`},
                {title: "Text Pro", rowId: `mtextpro`, description: `❇Text Pro Menu`},
                {title: "Photo Oxy", rowId: `mphotooxy`, description: `♻️Photo Oxy Menu`},
                {title: "Ephoto", rowId: `mephoto`, description: `🗳Ephoto Menu`},
                {title: "Fun", rowId: `mfun`, description: `🔫Fun Menu`},
                {title: "Primbon", rowId: `mprimbon`, description: `😂Primbon Menu`},
                {title: "Convert", rowId: `mconvert`, description: `🛠Convert Menu`},
                {title: "Main", rowId: `mmain`, description: `💾Main Menu`},
                {title: "Database", rowId: `mdatabase`, description: `📁Database Menu`},
                {title: "Anonymous", rowId: `manonymous`, description: `🎭Anonymous Menu`},
                {title: "Islamic", rowId: `mislamic`, description: `🕌Islamic Menu`},
                {title: "Voice", rowId: `mvoice`, description: `🎶Voice Menu`},
                {title: "Owner", rowId: `mowner`, description: `🎟Owner Menu`}
                ]
                },
                ]
                dzt.sendListMsg(m.chat, kukiw, global.botname, `*Hello Kak ${pushname}*!`, `Pilih Menu`, sections, m, {quoted: fkontak})
            }
            break
            case 'mgroup': {
goup = `┌──⭓ *Group Menu*
│
│   ╰≻ ${prefix}linkgroup
│   ╰≻ ${prefix}ephemeral [option]
│   ╰≻ ${prefix}setppgc [image]
│   ╰≻ ${prefix}setname [text]
│   ╰≻ ${prefix}setdesc [text]
│   ╰≻ ${prefix}group [option]
│   ╰≻ ${prefix}editinfo [option]
│   ╰≻ ${prefix}add @user
│   ╰≻ ${prefix}kick @user
│   ╰≻ ${prefix}hidetag [text]
│   ╰≻ ${prefix}tagall [text]
│   ╰≻ ${prefix}antilink [on/off]
│   ╰≻ ${prefix}mute [on/off]
│   ╰≻ ${prefix}promote @user
│   ╰≻ ${prefix}demote @user
│   ╰≻ ${prefix}vote [text]
│   ╰≻ ${prefix}devote
│   ╰≻ ${prefix}upvote
│   ╰≻ ${prefix}cekvote
│   ╰≻ ${prefix}hapusvote
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, goup, global.botname, m, {quoted: fkontak})
            }
            break
      case 'mwebzone': {
wbzone = `┌──⭓ *Webzone Menu*
│
│   ╰≻ ${prefix}playstore
│   ╰≻ ${prefix}gsmarena
│   ╰≻ ${prefix}jadwalbioskop
│   ╰≻ ${prefix}nowplayingbioskop
│   ╰≻ ${prefix}aminio
│   ╰≻ ${prefix}wattpad
│   ╰≻ ${prefix}webtoons
│   ╰≻ ${prefix}drakor
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, wbzone, global.botname, m, {quoted: fkontak})
            }
            break
            case 'mdownloader': {
dwnloader = `┌──⭓ *Downloader Menu*
│
│   ╰≻ ${prefix}tiktoknowm [url]
│   ╰≻ ${prefix}tiktokwm [url]
│   ╰≻ ${prefix}tiktokmp3 [url]
│   ╰≻ ${prefix}instagram [url]
│   ╰≻ ${prefix}twitter [url]
│   ╰≻ ${prefix}twittermp3 [url]
│   ╰≻ ${prefix}facebook [url]
│   ╰≻ ${prefix}pinterestdl [url]
│   ╰≻ ${prefix}ytmp3 [url]
│   ╰≻ ${prefix}ytmp4 [url]
│   ╰≻ ${prefix}getmusic [query]
│   ╰≻ ${prefix}getvideo [query]
│   ╰≻ ${prefix}umma [url]
│   ╰≻ ${prefix}joox [query]
│   ╰≻ ${prefix}soundcloud [url]
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, dwnloader, global.botname, m, {quoted: fkontak})
            }
            break
            case 'msearch': {
sarch = `┌──⭓ *Search Menu*
│
│   ╰≻ ${prefix}play [query]
│   ╰≻ ${prefix}yts [query]
│   ╰≻ ${prefix}google [query]
│   ╰≻ ${prefix}gimage [query]
│   ╰≻ ${prefix}pinterest [query]
│   ╰≻ ${prefix}wallpaper [query]
│   ╰≻ ${prefix}wikimedia [query]
│   ╰≻ ${prefix}ytsearch [query]
│   ╰≻ ${prefix}ringtone [query]
│   ╰≻ ${prefix}stalk [option] [query]
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, sarch, global.botname, m, {quoted: fkontak})
            }
            break
            case 'mrandom': {
rndom = `┌──⭓ *Random Menu*
│
│   ╰≻ ${prefix}gbtku
│   ╰≻ ${prefix}coffe
│   ╰≻ ${prefix}quotesanime
│   ╰≻ ${prefix}motivasi
│   ╰≻ ${prefix}dilanquote
│   ╰≻ ${prefix}bucinquote
│   ╰≻ ${prefix}katasenja
│   ╰≻ ${prefix}puisi
│   ╰≻ ${prefix}couple
│   ╰≻ ${prefix}anime
│   ╰≻ ${prefix}waifu
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, rndom, global.botname, m, {quoted: fkontak})
            }
            break
            case 'mtextpro': {
txtpro = `┌──⭓ *Text Pro Menu*
│
│   ╰≻ ${prefix}3dchristmas
│   ╰≻ ${prefix}3ddeepsea
│   ╰≻ ${prefix}americanflag
│   ╰≻ ${prefix}3dscifi
│   ╰≻ ${prefix}3drainbow
│   ╰≻ ${prefix}3dwaterpipe
│   ╰≻ ${prefix}halloweenskeleton
│   ╰≻ ${prefix}sketch
│   ╰≻ ${prefix}bluecircuit
│   ╰≻ ${prefix}space
│   ╰≻ ${prefix}metallic
│   ╰≻ ${prefix}fiction
│   ╰≻ ${prefix}greenhorror
│   ╰≻ ${prefix}transformer
│   ╰≻ ${prefix}berry
│   ╰≻ ${prefix}thunder
│   ╰≻ ${prefix}magma
│   ╰≻ ${prefix}3dcrackedstone
│   ╰≻ ${prefix}3dneonlight
│   ╰≻ ${prefix}impressiveglitch
│   ╰≻ ${prefix}naturalleaves
│   ╰≻ ${prefix}fireworksparkle
│   ╰≻ ${prefix}matrix
│   ╰≻ ${prefix}dropwater
│   ╰≻ ${prefix}harrypotter
│   ╰≻ ${prefix}foggywindow
│   ╰≻ ${prefix}neondevils
│   ╰≻ ${prefix}christmasholiday
│   ╰≻ ${prefix}3dgradient
│   ╰≻ ${prefix}blackpink
│   ╰≻ ${prefix}gluetext
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, txtpro, global.botname, m, {quoted: fkontak})
            }
            break
            case 'mphotooxy': {
potooxy = `┌──⭓ *Photo Oxy Menu*
│
│   ╰≻ ${prefix}shadow
│   ╰≻ ${prefix}romantic
│   ╰≻ ${prefix}smoke
│   ╰≻ ${prefix}burnpapper
│   ╰≻ ${prefix}naruto
│   ╰≻ ${prefix}lovemsg
│   ╰≻ ${prefix}grassmsg
│   ╰≻ ${prefix}lovetext
│   ╰≻ ${prefix}coffecup
│   ╰≻ ${prefix}butterfly
│   ╰≻ ${prefix}harrypotter
│   ╰≻ ${prefix}retrolol
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, potooxy, global.botname, m, {quoted: fkontak})
            }
            break
            case 'mephoto': {
ehoto = `┌──⭓ *Ephoto Menu*
│
│   ╰≻ ${prefix}ffcover
│   ╰≻ ${prefix}crossfire
│   ╰≻ ${prefix}galaxy
│   ╰≻ ${prefix}glass
│   ╰≻ ${prefix}neon
│   ╰≻ ${prefix}beach
│   ╰≻ ${prefix}blackpink
│   ╰≻ ${prefix}igcertificate
│   ╰≻ ${prefix}ytcertificate
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, ehoto, global.botname, m, {quoted: fkontak})
            }
            break
           case 'mfun': {
mun = `┌──⭓ *Fun Menu*
│
│   ╰≻ ${prefix}simih
│   ╰≻ ${prefix}halah
│   ╰≻ ${prefix}hilih
│   ╰≻ ${prefix}huluh
│   ╰≻ ${prefix}heleh
│   ╰≻ ${prefix}holoh
│   ╰≻ ${prefix}jadian
│   ╰≻ ${prefix}jodohku
│   ╰≻ ${prefix}apakah
│   ╰≻ ${prefix}bisakah
│   ╰≻ ${prefix}kapan
│   ╰≻ ${prefix}slot
│   ╰≻ ${prefix}delttt
│   ╰≻ ${prefix}tictactoe
│   ╰≻ ${prefix}family100
│   ╰≻ ${prefix}tebak [option]
│   ╰≻ ${prefix}math [mode]
│   ╰≻ ${prefix}suitpvp [@tag]
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, mun, global.botname, m, {quoted: fkontak})
            }
            break
            case 'mprimbon': {
pimbon = `┌──⭓ *Primbon Menu*
│
│   ╰≻ ${prefix}nomorhoki
│   ╰≻ ${prefix}artimimpi
│   ╰≻ ${prefix}artinama
│   ╰≻ ${prefix}ramaljodoh
│   ╰≻ ${prefix}ramaljodohbali
│   ╰≻ ${prefix}suamiistri
│   ╰≻ ${prefix}ramalcinta
│   ╰≻ ${prefix}cocoknama
│   ╰≻ ${prefix}pasangan
│   ╰≻ ${prefix}jadiannikah
│   ╰≻ ${prefix}sifatusaha
│   ╰≻ ${prefix}rezeki
│   ╰≻ ${prefix}pekerjaan
│   ╰≻ ${prefix}nasib
│   ╰≻ ${prefix}penyakit
│   ╰≻ ${prefix}tarot
│   ╰≻ ${prefix}fengshui
│   ╰≻ ${prefix}haribaik
│   ╰≻ ${prefix}harisangar
│   ╰≻ ${prefix}harisial
│   ╰≻ ${prefix}nagahari
│   ╰≻ ${prefix}arahrezeki
│   ╰≻ ${prefix}peruntungan
│   ╰≻ ${prefix}weton
│   ╰≻ ${prefix}karakter
│   ╰≻ ${prefix}keberuntungan
│   ╰≻ ${prefix}memancing
│   ╰≻ ${prefix}masasubur
│   ╰≻ ${prefix}zodiak
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, pimbon, global.botname, m, {quoted: fkontak})
            }
            break
            case 'mconvert': {
cnvert = `┌──⭓ *Convert Menu*
│
│   ╰≻ ${prefix}attp
│   ╰≻ ${prefix}ttp
│   ╰≻ ${prefix}toimage
│   ╰≻ ${prefix}removebg
│   ╰≻ ${prefix}sticker
│   ╰≻ ${prefix}emojimix
│   ╰≻ ${prefix}emojimix2
│   ╰≻ ${prefix}tovideo
│   ╰≻ ${prefix}togif
│   ╰≻ ${prefix}tourl
│   ╰≻ ${prefix}tovn
│   ╰≻ ${prefix}tomp3
│   ╰≻ ${prefix}toaudio
│   ╰≻ ${prefix}ebinary
│   ╰≻ ${prefix}dbinary
│   ╰≻ ${prefix}styletext
│   ╰≻ ${prefix}smeme
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, cnvert, global.botname, m, {quoted: fkontak})
            }
            break
            case 'mmain': {
min = `┌──⭓ *Main Menu*
│
│   ╰≻ ${prefix}ping
│   ╰≻ ${prefix}owner
│   ╰≻ ${prefix}report
│   ╰≻ ${prefix}menu / ${prefix}help / ${prefix}?
│   ╰≻ ${prefix}delete
│   ╰≻ ${prefix}infochat
│   ╰≻ ${prefix}quoted
│   ╰≻ ${prefix}listpc
│   ╰≻ ${prefix}listgc
│   ╰≻ ${prefix}listonline
│   ╰≻ ${prefix}speedtest
│   ╰≻ ${prefix}menfes
│   ╰≻ ${prefix}tinyurl
│   ╰≻ ${prefix}isgd
│   ╰≻ ${prefix}vurl
│   ╰≻ ${prefix}clp
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, min, global.botname, m, {quoted: fkontak})
            }
            break
            case 'mdatabase': {
dtbase = `┌──⭓ *Database Menu*
│
│   ╰≻ ${prefix}setcmd
│   ╰≻ ${prefix}listcmd
│   ╰≻ ${prefix}delcmd
│   ╰≻ ${prefix}lockcmd
│   ╰≻ ${prefix}addmsg
│   ╰≻ ${prefix}listmsg
│   ╰≻ ${prefix}getmsg
│   ╰≻ ${prefix}delmsg
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, dtbase, global.botname, m, {quoted: fkontak})
            }
            break
            case 'manonymous': {
aonymous = `┌──⭓ *Anonymous Menu*
│
│   ╰≻ ${prefix}anonymous
│   ╰≻ ${prefix}start
│   ╰≻ ${prefix}next
│   ╰≻ ${prefix}keluar
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, aonymous, global.botname, m, {quoted: fkontak})
            }
            break
            case 'mislamic': {
islmic = `┌──⭓ *Islamic Menu*
│
│   ╰≻ ${prefix}iqra
│   ╰≻ ${prefix}hadist
│   ╰≻ ${prefix}alquran
│   ╰≻ ${prefix}juzamma
│   ╰≻ ${prefix}tafsirsurah
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, islmic, global.botname, m, {quoted: fkontak})
            }
            break
case 'mvoice': {
vice = `┌──⭓ *Voice Changer*
│
│   ╰≻ ${prefix}bass
│   ╰≻ ${prefix}blown
│   ╰≻ ${prefix}deep
│   ╰≻ ${prefix}earrape
│   ╰≻ ${prefix}fast
│   ╰≻ ${prefix}fat
│   ╰≻ ${prefix}nightcore
│   ╰≻ ${prefix}reverse
│   ╰≻ ${prefix}robot
│   ╰≻ ${prefix}slow
│   ╰≻ ${prefix}tupai
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, vice, global.botname, m, {quoted: fkontak})
            }
            break
            case 'mowner': {
oner = `┌──⭓ *Owner Menu*
│
│   ╰≻ ${prefix}react [emoji]
│   ╰≻ ${prefix}chat [option]
│   ╰≻ ${prefix}join [link]
│   ╰≻ ${prefix}leave
│   ╰≻ ${prefix}block @user
│   ╰≻ ${prefix}unblock @user
│   ╰≻ ${prefix}bcgroup [text]
│   ╰≻ ${prefix}bcall [text]
│   ╰≻ ${prefix}setppbot [image]
│   ╰≻ ${prefix}setexif
│   ╰≻ ${prefix}setmenu [option]
│
└───────⭓`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '↫ ɢᴏ ʙᴀᴄᴋ' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖 ᴍᴇɴᴜ' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, oner, global.botname, m, {quoted: fkontak})
            }
            break

case 'menu': {
let gambar = await getBuffer(imageWaktu)
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let ments = [ownernya, me, ini_mark]
anu = `
${fke}Hai ${pushname}, Aku ${global.botname}${fke}
╭──❲ ${fke}${ucapanWaktu}${fke} ❳
│
│❏ ɴᴀᴍᴀ : ${pushname}
│❏ ɴᴏᴍᴏʀ : @${me.split('@')[0]}
│❏ sᴛᴀᴛᴜs : ${isPremium ? 'ᴘʀᴇᴍ' : `ғʀᴇᴇ`}
│❏ ʟɪᴍɪᴛ : ${isPremium ? '~' : `〽️${db.data.users[m.sender].limit}`}
│
│❏ ʙᴏᴛ : ${global.botname}
│❏ ᴘᴏᴡᴇʀᴇᴅ : @${ini_mark.split('@')[0]}
│❏ ᴍᴏᴅᴇ : ${dzt.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
│❏ ᴘʀᴇғɪx : 「 ᴍᴜʟᴛɪ - ᴘʀᴇғɪx 」
│❏ ᴛɪᴍᴇ : ${time2} ᴡɪʙ
│
│
│ *「ɢʀᴏᴜᴘ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}linkgroup
│   ╰≻ ${prefix}ephemeral [option]
│   ╰≻ ${prefix}setppgc [image]
│   ╰≻ ${prefix}setname [text]
│   ╰≻ ${prefix}setdesc [text]
│   ╰≻ ${prefix}group [option]
│   ╰≻ ${prefix}editinfo [option]
│   ╰≻ ${prefix}add @user
│   ╰≻ ${prefix}kick @user
│   ╰≻ ${prefix}hidetag [text]
│   ╰≻ ${prefix}tagall [text]
│   ╰≻ ${prefix}antilink [on/off]
│   ╰≻ ${prefix}mute [on/off]
│   ╰≻ ${prefix}promote @user
│   ╰≻ ${prefix}demote @user
│   ╰≻ ${prefix}vote [text]
│   ╰≻ ${prefix}devote
│   ╰≻ ${prefix}upvote
│   ╰≻ ${prefix}cekvote
│   ╰≻ ${prefix}hapusvote
│
│ *「ᴡᴇʙᴢᴏɴᴇ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}playstore
│   ╰≻ ${prefix}gsmarena
│   ╰≻ ${prefix}jadwalbioskop
│   ╰≻ ${prefix}nowplayingbioskop
│   ╰≻ ${prefix}aminio
│   ╰≻ ${prefix}wattpad
│   ╰≻ ${prefix}webtoons
│   ╰≻ ${prefix}drakor
│
│ *「ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}tiktoknowm [url]
│   ╰≻ ${prefix}tiktokwm [url]
│   ╰≻ ${prefix}tiktokmp3 [url]
│   ╰≻ ${prefix}instagram [url]
│   ╰≻ ${prefix}twitter [url]
│   ╰≻ ${prefix}twittermp3 [url]
│   ╰≻ ${prefix}facebook [url]
│   ╰≻ ${prefix}pinterestdl [url]
│   ╰≻ ${prefix}ytmp3 [url]
│   ╰≻ ${prefix}ytmp4 [url]
│   ╰≻ ${prefix}getmusic [query]
│   ╰≻ ${prefix}getvideo [query]
│   ╰≻ ${prefix}umma [url]
│   ╰≻ ${prefix}joox [query]
│   ╰≻ ${prefix}soundcloud [url]
│
│ *「sᴇᴀʀᴄʜ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}play [query]
│   ╰≻ ${prefix}yts [query]
│   ╰≻ ${prefix}google [query]
│   ╰≻ ${prefix}gimage [query]
│   ╰≻ ${prefix}pinterest [query]
│   ╰≻ ${prefix}wallpaper [query]
│   ╰≻ ${prefix}wikimedia [query]
│   ╰≻ ${prefix}ytsearch [query]
│   ╰≻ ${prefix}ringtone [query]
│   ╰≻ ${prefix}stalk [option] [query]
│
│ *「ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}gbtku
│   ╰≻ ${prefix}coffe
│   ╰≻ ${prefix}quotesanime
│   ╰≻ ${prefix}motivasi
│   ╰≻ ${prefix}dilanquote
│   ╰≻ ${prefix}bucinquote
│   ╰≻ ${prefix}katasenja
│   ╰≻ ${prefix}puisi
│   ╰≻ ${prefix}couple
│   ╰≻ ${prefix}anime
│   ╰≻ ${prefix}waifu
│
│ *「ᴛᴇxᴛ ᴘʀᴏ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}3dchristmas
│   ╰≻ ${prefix}3ddeepsea
│   ╰≻ ${prefix}americanflag
│   ╰≻ ${prefix}3dscifi
│   ╰≻ ${prefix}3drainbow
│   ╰≻ ${prefix}3dwaterpipe
│   ╰≻ ${prefix}halloweenskeleton
│   ╰≻ ${prefix}sketch
│   ╰≻ ${prefix}bluecircuit
│   ╰≻ ${prefix}space
│   ╰≻ ${prefix}metallic
│   ╰≻ ${prefix}fiction
│   ╰≻ ${prefix}greenhorror
│   ╰≻ ${prefix}transformer
│   ╰≻ ${prefix}berry
│   ╰≻ ${prefix}thunder
│   ╰≻ ${prefix}magma
│   ╰≻ ${prefix}3dcrackedstone
│   ╰≻ ${prefix}3dneonlight
│   ╰≻ ${prefix}impressiveglitch
│   ╰≻ ${prefix}naturalleaves
│   ╰≻ ${prefix}fireworksparkle
│   ╰≻ ${prefix}matrix
│   ╰≻ ${prefix}dropwater
│   ╰≻ ${prefix}harrypotter
│   ╰≻ ${prefix}foggywindow
│   ╰≻ ${prefix}neondevils
│   ╰≻ ${prefix}christmasholiday
│   ╰≻ ${prefix}3dgradient
│   ╰≻ ${prefix}blackpink
│   ╰≻ ${prefix}gluetext
│
│ *「ᴘʜᴏᴛᴏ ᴏxʏ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}shadow
│   ╰≻ ${prefix}romantic
│   ╰≻ ${prefix}smoke
│   ╰≻ ${prefix}burnpapper
│   ╰≻ ${prefix}naruto
│   ╰≻ ${prefix}lovemsg
│   ╰≻ ${prefix}grassmsg
│   ╰≻ ${prefix}lovetext
│   ╰≻ ${prefix}coffecup
│   ╰≻ ${prefix}butterfly
│   ╰≻ ${prefix}harrypotter
│   ╰≻ ${prefix}retrolol
│
│ *「ᴇᴘʜᴏᴛᴏ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}ffcover
│   ╰≻ ${prefix}crossfire
│   ╰≻ ${prefix}galaxy
│   ╰≻ ${prefix}glass
│   ╰≻ ${prefix}neon
│   ╰≻ ${prefix}beach
│   ╰≻ ${prefix}blackpink
│   ╰≻ ${prefix}igcertificate
│   ╰≻ ${prefix}ytcertificate
│
│ *「ғᴜɴ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}simih
│   ╰≻ ${prefix}halah
│   ╰≻ ${prefix}hilih
│   ╰≻ ${prefix}huluh
│   ╰≻ ${prefix}heleh
│   ╰≻ ${prefix}holoh
│   ╰≻ ${prefix}jadian
│   ╰≻ ${prefix}jodohku
│   ╰≻ ${prefix}apakah
│   ╰≻ ${prefix}bisakah
│   ╰≻ ${prefix}kapan
│   ╰≻ ${prefix}slot
│   ╰≻ ${prefix}delttt
│   ╰≻ ${prefix}tictactoe
│   ╰≻ ${prefix}family100
│   ╰≻ ${prefix}tebak [option]
│   ╰≻ ${prefix}math [mode]
│   ╰≻ ${prefix}suitpvp [@tag]
│
│ *「ᴘʀɪᴍʙᴏɴ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}nomorhoki
│   ╰≻ ${prefix}artimimpi
│   ╰≻ ${prefix}artinama
│   ╰≻ ${prefix}ramaljodoh
│   ╰≻ ${prefix}ramaljodohbali
│   ╰≻ ${prefix}suamiistri
│   ╰≻ ${prefix}ramalcinta
│   ╰≻ ${prefix}cocoknama
│   ╰≻ ${prefix}pasangan
│   ╰≻ ${prefix}jadiannikah
│   ╰≻ ${prefix}sifatusaha
│   ╰≻ ${prefix}rezeki
│   ╰≻ ${prefix}pekerjaan
│   ╰≻ ${prefix}nasib
│   ╰≻ ${prefix}penyakit
│   ╰≻ ${prefix}tarot
│   ╰≻ ${prefix}fengshui
│   ╰≻ ${prefix}haribaik
│   ╰≻ ${prefix}harisangar
│   ╰≻ ${prefix}harisial
│   ╰≻ ${prefix}nagahari
│   ╰≻ ${prefix}arahrezeki
│   ╰≻ ${prefix}peruntungan
│   ╰≻ ${prefix}weton
│   ╰≻ ${prefix}karakter
│   ╰≻ ${prefix}keberuntungan
│   ╰≻ ${prefix}memancing
│   ╰≻ ${prefix}masasubur
│   ╰≻ ${prefix}zodiak
│
│ *「ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}attp
│   ╰≻ ${prefix}ttp
│   ╰≻ ${prefix}toimage
│   ╰≻ ${prefix}removebg
│   ╰≻ ${prefix}sticker
│   ╰≻ ${prefix}emojimix
│   ╰≻ ${prefix}emojimix2
│   ╰≻ ${prefix}tovideo
│   ╰≻ ${prefix}togif
│   ╰≻ ${prefix}tourl
│   ╰≻ ${prefix}tovn
│   ╰≻ ${prefix}tomp3
│   ╰≻ ${prefix}toaudio
│   ╰≻ ${prefix}ebinary
│   ╰≻ ${prefix}dbinary
│   ╰≻ ${prefix}styletext
│   ╰≻ ${prefix}smeme
│
│ *「ᴅᴇғᴀᴜʟᴛ*
│   ╰≻ ${prefix}ping
│   ╰≻ ${prefix}owner
│   ╰≻ ${prefix}report
│   ╰≻ ${prefix}menu / ${prefix}help / ${prefix}?
│   ╰≻ ${prefix}delete
│   ╰≻ ${prefix}infochat
│   ╰≻ ${prefix}quoted
│   ╰≻ ${prefix}listpc
│   ╰≻ ${prefix}listgc
│   ╰≻ ${prefix}listonline
│   ╰≻ ${prefix}speedtest
│   ╰≻ ${prefix}menfes
│   ╰≻ ${prefix}tinyurl
│   ╰≻ ${prefix}isgd
│   ╰≻ ${prefix}vurl
│   ╰≻ ${prefix}clp
│
│ *「ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}setcmd
│   ╰≻ ${prefix}listcmd
│   ╰≻ ${prefix}delcmd
│   ╰≻ ${prefix}lockcmd
│   ╰≻ ${prefix}addmsg
│   ╰≻ ${prefix}listmsg
│   ╰≻ ${prefix}getmsg
│   ╰≻ ${prefix}delmsg
│
│ *「ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛ*
│   ╰≻ ${prefix}anonymous
│   ╰≻ ${prefix}start
│   ╰≻ ${prefix}next
│   ╰≻ ${prefix}keluar
│
│ *「ɪsʟᴀᴍ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}iqra
│   ╰≻ ${prefix}hadist
│   ╰≻ ${prefix}alquran
│   ╰≻ ${prefix}juzamma
│   ╰≻ ${prefix}tafsirsurah
│
│ *「ᴠᴏɪᴄᴇ ᴄʜᴀɴɢᴇʀ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}bass
│   ╰≻ ${prefix}blown
│   ╰≻ ${prefix}deep
│   ╰≻ ${prefix}earrape
│   ╰≻ ${prefix}fast
│   ╰≻ ${prefix}fat
│   ╰≻ ${prefix}nightcore
│   ╰≻ ${prefix}reverse
│   ╰≻ ${prefix}robot
│   ╰≻ ${prefix}slow
│   ╰≻ ${prefix}tupai
│
│
│  *「ᴏᴡɴᴇʀ ᴍᴇɴᴜ」*
│   ╰≻ ${prefix}react [emoji]
│   ╰≻ ${prefix}chat [option]
│   ╰≻ ${prefix}join [link]
│   ╰≻ ${prefix}leave
│   ╰≻ ${prefix}block @user
│   ╰≻ ${prefix}unblock @user
│   ╰≻ ${prefix}bcgroup [text]
│   ╰≻ ${prefix}bcall [text]
│   ╰≻ ${prefix}setppbot [image]
│   ╰≻ ${prefix}setexif
│   ╰≻ ${prefix}setmenu [option]
│
└───────
${fke}Dont spam me${fke} ☺️`
/*let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '🙏 ᴅᴏɴᴀsɪ' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
            await dzt.sendButtonText(m.chat, buttons, anu, global.botname, m, {mentions: ments, quoted: fkontak})*/
var button = [
{ buttonId: `ping`, buttonText: { displayText: `☁ ︎ᴘɪɴɢ` }, type: 1 },
{ buttonId: `sc`, buttonText: { displayText: `⎙ ︎ᴄʀᴇᴅɪᴛ` }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: `㋛︎ ᴏᴡɴᴇʀ` }, type: 1 }
]
await dzt.sendMessage(m.chat, { caption: `${anu}`, location: { jpegThumbnail: await reSize(gambar, 300, 300) }, buttons: button, footer: `${hariku} / ${tanggalku}`, mentions: parseMention(anu) })            
            
            
            }
            break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
dzt_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await dzt.sendMessage(m.chat, { audio: dzt_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'aji':{
ads('anjay')
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return ads(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return ads(bang)
                    }
                    try {
                        ads(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        ads(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return ads(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await ads(evaled)
                    } catch (err) {
                        await ads(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return ads(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return ads(err)
                        if (stdout) return ads(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    dzt.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
