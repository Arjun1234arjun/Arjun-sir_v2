const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/PicsArt_10-17-11.47.57.jpg?size=100";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Arjun*
*owner number wa.me/+994404247164*
*bot setting video : https://youtu.be/_D4ZYuUSXjs
*githublink       https://github.com/Arjun1234arjun/Arjun-sir_v2*
*audio commads    https://github.com/ameer-kallumhttps://github.com/Arjun1234arjun/Arjun-sir_v2.git/tree/master/uploads*
*sticker commads  https://github.com/Arjun1234arjun/Arjun-sir_v2.git/tree/master/uploads*
`}) 

}));
