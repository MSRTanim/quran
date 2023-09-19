module.exports.config = {
    name: "quran",
    version: "1.0.0",
    hasPermision: 0,
    credit: "MSRTanim",
    description: "Random Quran Ayat",
    commandCategory: "random-img",
    cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/a/t5NUy1P.jpeg","https://i.imgur.com/E4Gznnq.jpeg", "https://i.imgur.com/9fkqZWG.jpeg", "https://i.imgur.com/BCBq7IG.jpeg", "https://i.imgur.com/lVlr0H8.jpeg"];
var quran = [`Ash-Sharh 96:06

" اِنَّ مَعَ الۡعُسۡرِ یُسۡرًا ؕ﴿۶﴾

নিশ্চয়ই কষ্টের সাথে রয়েছে স্বস্তি

Indeed, with hardship [will be] ease."`,

`Al-Furkan 25:70
" اِلَّا مَنۡ تَابَ وَ اٰمَنَ وَ عَمِلَ عَمَلًا صَالِحًا فَاُولٰٓئِکَ یُبَدِّلُ اللّٰهُ سَیِّاٰتِهِمۡ حَسَنٰتٍ ؕ وَ کَانَ اللّٰهُ غَفُوۡرًا رَّحِیۡمًا ﴿۷۰﴾

যারা তওবা করে, বিশ্বাস ও সৎকাজ করে[1] আল্লাহ তাদের পাপকর্মগুলিকে পুণ্য দ্বারা পরিবর্তন করে দেবেন।[2] আর আল্লাহ চরম ক্ষমাশীল, পরম দয়ালু।

Except for those who repent, believe and do righteous work. For them Allah will replace their evil deeds with good. And ever is Allah Forgiving and Merciful."`,

`Al-Fatuha 1:2

"اَلۡحَمۡدُ لِلّٰهِ رَبِّ الۡعٰلَمِیۡنَ ۙ﴿۲﴾

সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সৃষ্টিকুলের রব

[All] praise is [due] to Allah, Lord of the worlds"`,

`An-Nahl 16:105

"اِنَّمَا یَفۡتَرِی الۡکَذِبَ الَّذِیۡنَ لَا یُؤۡمِنُوۡنَ بِاٰیٰتِ اللّٰهِ ۚ وَ اُولٰٓئِکَ هُمُ الۡکٰذِبُوۡنَ ﴿۱۰۵﴾

যারা আল্লাহর নিদর্শনে বিশ্বাস করে না, তারাই শুধু মিথ্যা উদ্ভাবন করে এবং তারাই মিথ্যাবাদী।

They only invent falsehood who do not believe in the verses of Allah, and it is those who are the liars."`,

`Yunus 10:109

"وَ اتَّبِعۡ مَا یُوۡحٰۤی اِلَیۡکَ وَ اصۡبِرۡ حَتّٰی یَحۡکُمَ اللّٰهُ ۚۖ وَ هُوَ خَیۡرُ الۡحٰکِمِیۡنَ ﴿۱۰۹﴾

আর তোমার নিকট যে ওহী পাঠানো হচ্ছে, তুমি তার অনুসরণ কর এবং সবর কর, যতক্ষণ না আল্লাহ ফয়সালা করেন। আর তিনিই উত্তম ফয়সালাকারী। 

And follow what is revealed to you, [O Muhammad], and be patient until Allah will judge. And He is the best of judges."`,

`Maryam 19:04

"قَالَ رَبِّ اِنِّیۡ وَهَنَ الۡعَظۡمُ مِنِّیۡ وَ اشۡتَعَلَ الرَّاۡسُ شَیۡبًا وَّ لَمۡ اَکُنۡۢ بِدُعَآئِکَ رَبِّ شَقِیًّا ﴿۴﴾

সে বলেছিল, ‘হে আমার রব! আমার হাড়গুলো দুর্বল হয়ে গেছে এবং বার্ধক্যবশতঃ আমার মাথার চুলগুলো সাদা হয়ে গেছে। হে আমার রব, আপনার নিকট দো‘আ করে আমি কখনো ব্যর্থ হইনি

He said, "My Lord, indeed my bones have weakened, and my head has filled with white, and never have I been in my supplication to You, my Lord, unhappy."`,

`Al-Baqara 2:155

"وَ لَنَبۡلُوَنَّکُمۡ بِشَیۡءٍ مِّنَ الۡخَوۡفِ وَ الۡجُوۡعِ وَ نَقۡصٍ مِّنَ الۡاَمۡوَالِ وَ الۡاَنۡفُسِ وَ الثَّمَرٰتِ ؕ وَ بَشِّرِ الصّٰبِرِیۡنَ ﴿۱۵۵﴾ۙ

আর আমি অবশ্যই তোমাদেরকে পরীক্ষা করব কিছু ভয়, ক্ষুধা এবং জান-মাল ও ফল-ফলাদির স্বল্পতার মাধ্যমে। আর তুমি ধৈর্যশীলদের সুসংবাদ দাও।

And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient"`,

`Al-Haqqa 69:27

" یٰلَیۡتَهَا کَانَتِ الۡقَاضِیَۃَ ﴿ۚ۲۷﴾

‘হায়, মৃত্যুই যদি আমার চূড়ান্ত ফয়সালা হত’!

I wish my death had been the decisive one."`,

`Az-Zukhruf 43:67

"اَلۡاَخِلَّآءُ یَوۡمَئِذٍۭ بَعۡضُهُمۡ لِبَعۡضٍ عَدُوٌّ اِلَّا الۡمُتَّقِیۡنَ ﴿ؕ۶۷﴾

সেদিন বন্ধুরা একে অন্যের শত্রু হবে, মুত্তাকীরা ছাড়া।

Close friends, that Day, will be enemies to each other, except for the righteous."`,

`Al-Qasas 28:16

"قَالَ رَبِّ اِنِّیۡ ظَلَمۡتُ نَفۡسِیۡ فَاغۡفِرۡ لِیۡ فَغَفَرَ لَهٗ ؕ اِنَّهٗ هُوَ الۡغَفُوۡرُ الرَّحِیۡمُ ﴿۱۶﴾

সে বলল, ‘হে আমার রব, নিশ্চয় আমি আমার নফসের প্রতি যুলম করেছি, সুতরাং আপনি আমাকে ক্ষমা করে দিন’। অতঃপর তিনি তাকে ক্ষমা করলেন। নিশ্চয় তিনি অতি ক্ষমাশীল, পরম দয়ালু।

He said, "My Lord, indeed I have wronged myself, so forgive me," and He forgave him. Indeed, He is the Forgiving, the Merciful."`,

`At-Takathur 102:1

" اَلۡهٰکُمُ التَّکَاثُرُ ۙ﴿۱﴾

প্রাচুর্যের প্রতিযোগিতা তোমাদেরকে ভুলিয়ে রেখেছে। 

Competition in [worldly] increase diverts you."`,

`Al-i-Imran 3:25

" فَکَیۡفَ اِذَا جَمَعۡنٰهُمۡ لِیَوۡمٍ لَّا رَیۡبَ فِیۡهِ ۟ وَ وُفِّیَتۡ کُلُّ نَفۡسٍ مَّا کَسَبَتۡ وَ هُمۡ لَا یُظۡلَمُوۡنَ ﴿۲۵﴾

সুতরাং কী অবস্থা হবে? যখন আমি তাদেরকে এমন দিনে সমবেত করব, যাতে কোন সন্দেহ নেই। আর প্রত্যেককে তার কৃতকর্মের প্রতিদান পূর্ণভাবে দেয়া হবে এবং তাদেরকে যুলম করা হবে না।

So how will it be when We assemble them for a Day about which there is no doubt? And each soul will be compensated [in full for] what it earned, and they will not be wronged."`,

`An-Najm 53:42

"وَ اَنَّ اِلٰی رَبِّکَ الۡمُنۡتَهٰی ﴿ۙ۴۲﴾

আর নিশ্চয় তোমার রবের নিকটই হলো শেষ গন্তব্য।

And that to your Lord is the finality."`,

`Ghafir 40:19

"یَعۡلَمُ خَآئِنَۃَ الۡاَعۡیُنِ وَ مَا تُخۡفِی الصُّدُوۡرُ ﴿۱۹﴾

চক্ষুসমূহের খেয়ানত এবং অন্তরসমূহ যা গোপন রাখে তিনি তা জানেন।

He knows that which deceives the eyes and what the breasts conceal."`,

`As-Sajda 32:17

"فَلَا تَعۡلَمُ نَفۡسٌ مَّاۤ اُخۡفِیَ لَهُمۡ مِّنۡ قُرَّۃِ اَعۡیُنٍ ۚ جَزَآءًۢ بِمَا کَانُوۡا یَعۡمَلُوۡنَ ﴿۱۷﴾

অতঃপর কোন ব্যক্তি জানে না তাদের জন্য চোখ জুড়ানো কী জিনিস লুকিয়ে রাখা হয়েছে, তারা যা করত, তার বিনিময়স্বরূপ।

And no soul knows what has been hidden for them of comfort for eyes as reward for what they used to do."`];
  var juswa1 = quran[Math.floor(Math.random() * quran.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.jpg")).on("close",() => callback());
   };
