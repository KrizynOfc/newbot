let fs = require('fs')

global.owner = [
  ['6283873891575'],
  ['6283873891575'],
  ['6283873891575', 'Puki', 'contact@puki', true]
] // Put your number here
global.mods = ['6283873891575'] // Moderator
global.prems = ['6283873891575'] // Premium
global.rose = 'Rk-Salsabila';
global.xyro = 'ClaraKeyOfficial';
global.btc = 'Rizalzllk';
global.xzn = 'Composing';
global.lolkey = 'GataDios';
global.yanz = 'iyan123';
global.zein = 'zenzkey_c22460242f6e',
global.APIs = {
    // API Prefix
    // name: 'https://website'
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    neoxr: 'https://api.neoxr.eu',
    xyro: 'https://api.xyroinee.xyz',
    btc: 'https://api.betabotz.org',
    xfarr: 'https://api.xfarr.com',
    dzx: 'https://api.dhamzxploit.my.id',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    popcat: 'https://api.popcat.xyz',
    xzn: 'https://skizo.tech',
    saipul: 'https://saipulanuar.cf',
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': 'zenzkey_c22460242f6e',
    'https://api.xteam.xyz': 'cristian9407',
    'https://api.xyroinee.xyz': 'ClaraKeyOfficial',
    'https://api.neoxr.eu': 'Composing',
    'https://api.xfarr.com': 'Kemii',
    'https://api.zahwazein.xyz': 'Kemii',
    'https://api.betabotz.org': 'Rizalzllk',
    'https://api.lolhuman.xyz': 'GataDios',
    'https://api.itsrose.life': 'Rk-Salsabila',
    'https://skizo.tech': 'Composing',
}
// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
global.kiku = 'application/vnd.android.package-archive'

// Database
global.gcbot = 'https://chat.whatsapp.com/DYUDQL1uSnb1476lDo63y8'
global.instagram = 'https://instagram.com/kemii.learning'
global.namebot = '© Kiku-Wabot v5.0.3 (Public Bot)'
global.thumb = 'https://telegra.ph/file/7b5416e93b4423845762d.jpg'
global.thumbnail = 'https://telegra.ph/file/7b5416e93b4423845762d.jpg'
global.myfile = fs.readFileSync(`./media/xfile.pdf`)
global.qris = 'https://telegra.ph/file/bcb93fafb22f139ff1512.jpg'
global.email = 'kiku.wabot@gmail.com'
global.creator = "6283873891575@s.whatsapp.net"
global.nomorbot = '-'
global.nomorown = '6283873891575'

// Harga Nokos
global.nokosindo = '7000'
global.nokosusa = '8000'
global.nokosmalay = '12000'

// Panel
global.domain = '-' // Domain Web
global.apikey = '-' // Key PTLA
global.c_apikey = '-' // Key PTLC
global.eggs = '15'
global.locs = '1'

// Atlantic Pedia Api
global.atlaapi = ''

// Medan Pedia Api
global.medan = ''
global.medanid = ''

// Email Verification
global.name = '-' // Name Verifikasi 
global.user = '-' // Email Verifikasi
global.pass = '-' // Pass App Google

// Sosial Media
global.sig = '-'
global.syt = '-'
global.sgh = '-'
global.sgc = '-'
global.swa = '-'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

// Watermark
global.packname = 'Puki Bot'
global.author = '-'
global.wm = '© Puki'
global.wm2 = 'Salsa Javanese'
global.titlebot = `${global.wm}`
global.danied = 'A K S E S  K A M U  D I  T O L A K!!'
global.done = '```Success...\nDont forget to donate```'
global.packname = 'Puki - Bot'
global.author = 'Tom'
global.nameown = 'Tom'
global.wait = 'Wait a moment... '

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'

global.multiplier = 1000 // The higher, The harder levelup

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

// Jangan di ubah!!
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  delete require.cache[file]
  require(file)
})//