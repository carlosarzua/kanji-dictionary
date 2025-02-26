const readings = [
    {
        "kanji": "亜",
        "onyomi": "ア",
        "kunyomi": "つ-ぐ",
        "english": "Asia"
    },
    {
        "kanji": "唖",
        "onyomi": "ア, アク",
        "kunyomi": "おし",
        "english": "mute"
    },
    {
        "kanji": "娃",
        "onyomi": "ア, アイ, ワ",
        "kunyomi": "うつく-しい",
        "english": "beautiful"
    },
    {
        "kanji": "阿",
        "onyomi": "ア, オ",
        "kunyomi": "おもね-る, くま",
        "english": "Africa"
    },
    {
        "kanji": "哀",
        "onyomi": "アイ",
        "kunyomi": "あわ-れ, あわ-れむ, かな-しい",
        "english": "pathetic"
    },
    {
        "kanji": "愛",
        "onyomi": "アイ",
        "kunyomi": "いと-しい, かな-しい, め-でる, お-しむ, まな",
        "english": "love"
    },
    {
        "kanji": "挨",
        "onyomi": "アイ",
        "kunyomi": "ひら-く",
        "english": "approach"
    },
    {
        "kanji": "姶",
        "onyomi": "オウ, アイ",
        "kunyomi": "あい",
        "english": "good-looking"
    },
    {
        "kanji": "逢",
        "onyomi": "ホウ",
        "kunyomi": "あ-う, むか-える",
        "english": "meeting"
    },
    {
        "kanji": "葵",
        "onyomi": "キ",
        "kunyomi": "あおい",
        "english": "hollyhock"
    },
    {
        "kanji": "茜",
        "onyomi": "セン",
        "kunyomi": "あかね",
        "english": "madder"
    },
    {
        "kanji": "穐",
        "onyomi": "シュウ",
        "kunyomi": "あき, とき",
        "english": "autumn"
    },
    {
        "kanji": "悪",
        "onyomi": "アク, オ",
        "kunyomi": "わる-い, わる-, あ-し, にく-い, -にく-い, ああ, いずくに, いずくんぞ, にく-む",
        "english": "bad"
    },
    {
        "kanji": "握",
        "onyomi": "アク",
        "kunyomi": "にぎ-る",
        "english": "grip"
    },
    {
        "kanji": "渥",
        "onyomi": "アク",
        "kunyomi": "あつ-い, うるお-う",
        "english": "kindness"
    },
    {
        "kanji": "旭",
        "onyomi": "キョク",
        "kunyomi": "あさひ",
        "english": "rising sun"
    },
    {
        "kanji": "葦",
        "onyomi": "イ",
        "kunyomi": "あし, よし, しお-れる, しな-びる, しぼ-む, な-える",
        "english": "reed"
    },
    {
        "kanji": "芦",
        "onyomi": "ロ",
        "kunyomi": "あし, よし",
        "english": "reed"
    },
    {
        "kanji": "鯵",
        "onyomi": "ソウ",
        "kunyomi": "あじ",
        "english": "horse mackerel"
    },
    {
        "kanji": "梓",
        "onyomi": "シ",
        "kunyomi": "あずさ",
        "english": "catalpa tree"
    },
    {
        "kanji": "圧",
        "onyomi": "アツ, エン, オウ",
        "kunyomi": "お-す, へ-す, おさ-える, お-さえる",
        "english": "pressure"
    },
    {
        "kanji": "斡",
        "onyomi": "アツ, カン, ワツ",
        "kunyomi": "めぐ-る, めぐ-らす",
        "english": "go around"
    },
    {
        "kanji": "扱",
        "onyomi": "ソウ, キュウ",
        "kunyomi": "あつか-い, あつか-う, あつか-る, こ-く",
        "english": "handle"
    },
    {
        "kanji": "宛",
        "onyomi": "エン",
        "kunyomi": "あ-てる, -あて, -づつ, あたか-も",
        "english": "address"
    },
    {
        "kanji": "姐",
        "onyomi": "ソ, シャ",
        "kunyomi": "あね, ねえさん",
        "english": "elder sister"
    },
    {
        "kanji": "虻",
        "onyomi": "ボウ",
        "kunyomi": "あぶ",
        "english": "gadfly"
    },
    {
        "kanji": "飴",
        "onyomi": "イ, シ",
        "kunyomi": "あめ, やしな-う",
        "english": "rice jelly"
    },
    {
        "kanji": "絢",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "brilliant fabric design"
    },
    {
        "kanji": "綾",
        "onyomi": "リン",
        "kunyomi": "あや",
        "english": "design"
    },
    {
        "kanji": "鮎",
        "onyomi": "デン, ネン",
        "kunyomi": "あゆ, なまず",
        "english": "freshwater trout"
    },
    {
        "kanji": "或",
        "onyomi": "ワク, コク, イキ",
        "kunyomi": "あ-る, あるい, あるいは",
        "english": "some"
    },
    {
        "kanji": "粟",
        "onyomi": "ゾク, ショク, ソク",
        "kunyomi": "あわ, もみ",
        "english": "millet"
    },
    {
        "kanji": "袷",
        "onyomi": "コウ, キョウ",
        "kunyomi": "あわせ",
        "english": "lined (kimono)"
    },
    {
        "kanji": "安",
        "onyomi": "アン",
        "kunyomi": "やす-い, やす-まる, やす, やす-らか",
        "english": "relax"
    },
    {
        "kanji": "庵",
        "onyomi": "アン",
        "kunyomi": "いおり, いお",
        "english": "hermitage"
    },
    {
        "kanji": "按",
        "onyomi": "アン",
        "kunyomi": "おさ-える, しら-べる",
        "english": "hold"
    },
    {
        "kanji": "暗",
        "onyomi": "アン",
        "kunyomi": "くら-い, くら-む, くれ-る",
        "english": "darkness"
    },
    {
        "kanji": "案",
        "onyomi": "アン",
        "kunyomi": "つくえ",
        "english": "plan"
    },
    {
        "kanji": "闇",
        "onyomi": "アン, オン",
        "kunyomi": "やみ, くら-い",
        "english": "get dark"
    },
    {
        "kanji": "鞍",
        "onyomi": "アン",
        "kunyomi": "くら",
        "english": "saddle"
    },
    {
        "kanji": "杏",
        "onyomi": "キョウ, アン, コウ",
        "kunyomi": "あんず",
        "english": "apricot"
    },
    {
        "kanji": "以",
        "onyomi": "イ",
        "kunyomi": "もっ-て",
        "english": "by means of"
    },
    {
        "kanji": "伊",
        "onyomi": "イ",
        "kunyomi": "かれ",
        "english": "Italy"
    },
    {
        "kanji": "位",
        "onyomi": "イ",
        "kunyomi": "くらい, ぐらい",
        "english": "rank"
    },
    {
        "kanji": "依",
        "onyomi": "イ, エ",
        "kunyomi": "よ-る",
        "english": "reliant"
    },
    {
        "kanji": "偉",
        "onyomi": "イ",
        "kunyomi": "えら-い",
        "english": "admirable"
    },
    {
        "kanji": "囲",
        "onyomi": "イ",
        "kunyomi": "かこ-む, かこ-う, かこ-い",
        "english": "surround"
    },
    {
        "kanji": "夷",
        "onyomi": "イ",
        "kunyomi": "えびす, えみし, ころ-す, たい-らげる",
        "english": "barbarian"
    },
    {
        "kanji": "委",
        "onyomi": "イ",
        "kunyomi": "ゆだ-ねる",
        "english": "committee"
    },
    {
        "kanji": "威",
        "onyomi": "イ",
        "kunyomi": "おど-す, おど-し, おど-かす",
        "english": "intimidate"
    },
    {
        "kanji": "尉",
        "onyomi": "イ, ジョウ",
        "kunyomi": "",
        "english": "military officer"
    },
    {
        "kanji": "惟",
        "onyomi": "イ, ユイ",
        "kunyomi": "おも-んみる, これ, おも-うに",
        "english": "consider"
    },
    {
        "kanji": "意",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "idea"
    },
    {
        "kanji": "慰",
        "onyomi": "イ",
        "kunyomi": "なぐさ-める, なぐさ-む",
        "english": "consolation"
    },
    {
        "kanji": "易",
        "onyomi": "エキ, イ",
        "kunyomi": "やさ-しい, やす-い",
        "english": "easy"
    },
    {
        "kanji": "椅",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "chair"
    },
    {
        "kanji": "為",
        "onyomi": "イ",
        "kunyomi": "ため, な-る, な-す, す-る, たり, つく-る, なり",
        "english": "do"
    },
    {
        "kanji": "畏",
        "onyomi": "イ",
        "kunyomi": "おそ-れる, かしこま-る, かしこ, かしこ-し",
        "english": "fear"
    },
    {
        "kanji": "異",
        "onyomi": "イ",
        "kunyomi": "こと, こと-なる, け",
        "english": "uncommon"
    },
    {
        "kanji": "移",
        "onyomi": "イ",
        "kunyomi": "うつ-る, うつ-す",
        "english": "shift"
    },
    {
        "kanji": "維",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "fiber"
    },
    {
        "kanji": "緯",
        "onyomi": "イ",
        "kunyomi": "よこいと, ぬき",
        "english": "horizontal"
    },
    {
        "kanji": "胃",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "stomach"
    },
    {
        "kanji": "萎",
        "onyomi": "イ",
        "kunyomi": "な, しお-れる, しな-びる, しぼ-む, な-える",
        "english": "wither"
    },
    {
        "kanji": "衣",
        "onyomi": "イ, エ",
        "kunyomi": "ころも, きぬ, -ぎ",
        "english": "garment"
    },
    {
        "kanji": "謂",
        "onyomi": "イ",
        "kunyomi": "い-う, いい, おも-う, いわゆる",
        "english": "reason"
    },
    {
        "kanji": "違",
        "onyomi": "イ",
        "kunyomi": "ちが-う, ちが-い, ちが-える, -ちが-える, たが-う, たが-える",
        "english": "difference"
    },
    {
        "kanji": "遺",
        "onyomi": "イ, ユイ",
        "kunyomi": "のこ-す",
        "english": "bequeath"
    },
    {
        "kanji": "医",
        "onyomi": "イ",
        "kunyomi": "い-やす, い-する, くすし",
        "english": "doctor"
    },
    {
        "kanji": "井",
        "onyomi": "セイ, ショウ",
        "kunyomi": "い",
        "english": "well"
    },
    {
        "kanji": "亥",
        "onyomi": "ガイ, カイ",
        "kunyomi": "い",
        "english": "sign of the hog"
    },
    {
        "kanji": "域",
        "onyomi": "イキ",
        "kunyomi": "",
        "english": "range"
    },
    {
        "kanji": "育",
        "onyomi": "イク",
        "kunyomi": "そだ-つ, そだ-ち, そだ-てる, はぐく-む",
        "english": "bring up"
    },
    {
        "kanji": "郁",
        "onyomi": "イク",
        "kunyomi": "",
        "english": "cultural progress"
    },
    {
        "kanji": "磯",
        "onyomi": "キ",
        "kunyomi": "いそ",
        "english": "seashore"
    },
    {
        "kanji": "一",
        "onyomi": "イチ, イツ",
        "kunyomi": "ひと-, ひと-つ",
        "english": "one"
    },
    {
        "kanji": "壱",
        "onyomi": "イチ, イツ",
        "kunyomi": "ひとつ",
        "english": "one (in documents)"
    },
    {
        "kanji": "溢",
        "onyomi": "イツ",
        "kunyomi": "こぼ-れる, あふ-れる, み-ちる",
        "english": "overflow"
    },
    {
        "kanji": "逸",
        "onyomi": "イツ",
        "kunyomi": "そ-れる, そ-らす, はぐ-れる",
        "english": "deviate"
    },
    {
        "kanji": "稲",
        "onyomi": "トウ, テ",
        "kunyomi": "いね, いな-",
        "english": "rice plant"
    },
    {
        "kanji": "茨",
        "onyomi": "シ, ジ",
        "kunyomi": "いばら, かや, くさぶき",
        "english": "briar"
    },
    {
        "kanji": "芋",
        "onyomi": "ウ",
        "kunyomi": "いも",
        "english": "potato"
    },
    {
        "kanji": "鰯",
        "onyomi": "",
        "kunyomi": "いわし",
        "english": "sardine"
    },
    {
        "kanji": "允",
        "onyomi": "イン",
        "kunyomi": "じょう, まこと-に, ゆるす",
        "english": "license"
    },
    {
        "kanji": "印",
        "onyomi": "イン",
        "kunyomi": "しるし, -じるし, しる-す",
        "english": "stamp"
    },
    {
        "kanji": "咽",
        "onyomi": "イン, エン, エツ",
        "kunyomi": "むせ-ぶ, むせ-る, のど, の-む",
        "english": "throat"
    },
    {
        "kanji": "員",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "employee"
    },
    {
        "kanji": "因",
        "onyomi": "イン",
        "kunyomi": "よ-る, ちな-む",
        "english": "cause"
    },
    {
        "kanji": "姻",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "matrimony"
    },
    {
        "kanji": "引",
        "onyomi": "イン",
        "kunyomi": "ひ-く, ひ-ける",
        "english": "pull"
    },
    {
        "kanji": "飲",
        "onyomi": "イン, オン",
        "kunyomi": "の-む, -の-み",
        "english": "drink"
    },
    {
        "kanji": "淫",
        "onyomi": "イン",
        "kunyomi": "ひた-す, ほしいまま, みだ-ら, みだ-れる, みだり",
        "english": "lewdness"
    },
    {
        "kanji": "胤",
        "onyomi": "イン",
        "kunyomi": "たね",
        "english": "descendent"
    },
    {
        "kanji": "蔭",
        "onyomi": "イン, オン",
        "kunyomi": "かげ",
        "english": "shade"
    },
    {
        "kanji": "院",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "Inst."
    },
    {
        "kanji": "陰",
        "onyomi": "イン",
        "kunyomi": "かげ, かげ-る",
        "english": "shade"
    },
    {
        "kanji": "隠",
        "onyomi": "イン, オン",
        "kunyomi": "かく-す, かく-し, かく-れる, よ-る",
        "english": "conceal"
    },
    {
        "kanji": "韻",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "rhyme"
    },
    {
        "kanji": "吋",
        "onyomi": "トウ, ドウ, スン",
        "kunyomi": "インチ",
        "english": "inch"
    },
    {
        "kanji": "右",
        "onyomi": "ウ, ユウ",
        "kunyomi": "みぎ",
        "english": "right"
    },
    {
        "kanji": "宇",
        "onyomi": "ウ",
        "kunyomi": "",
        "english": "eaves"
    },
    {
        "kanji": "烏",
        "onyomi": "ウ, オ",
        "kunyomi": "からす, いずくんぞ, なんぞ",
        "english": "crow"
    },
    {
        "kanji": "羽",
        "onyomi": "ウ",
        "kunyomi": "は, わ, はね",
        "english": "feathers"
    },
    {
        "kanji": "迂",
        "onyomi": "ウ",
        "kunyomi": "",
        "english": "roundabout way"
    },
    {
        "kanji": "雨",
        "onyomi": "ウ",
        "kunyomi": "あめ, あま-, -さめ",
        "english": "rain"
    },
    {
        "kanji": "卯",
        "onyomi": "ボウ, モウ",
        "kunyomi": "う",
        "english": "sign of the hare or rabbit"
    },
    {
        "kanji": "鵜",
        "onyomi": "テイ, ダイ",
        "kunyomi": "う",
        "english": "cormorant"
    },
    {
        "kanji": "窺",
        "onyomi": "キ",
        "kunyomi": "うかが-う, のぞく",
        "english": "lie in wait"
    },
    {
        "kanji": "丑",
        "onyomi": "チュウ",
        "kunyomi": "うし",
        "english": "sign of the ox or cow"
    },
    {
        "kanji": "碓",
        "onyomi": "カク, タイ",
        "kunyomi": "たし-か, かく-たる",
        "english": "pestle"
    },
    {
        "kanji": "臼",
        "onyomi": "キュウ, グ",
        "kunyomi": "うす, うすづ-く",
        "english": "mortar"
    },
    {
        "kanji": "渦",
        "onyomi": "カ",
        "kunyomi": "うず",
        "english": "whirlpool"
    },
    {
        "kanji": "嘘",
        "onyomi": "キョ, コ",
        "kunyomi": "うそ, ふ-く",
        "english": "lie"
    },
    {
        "kanji": "唄",
        "onyomi": "バイ",
        "kunyomi": "うた, うた-う",
        "english": "song"
    },
    {
        "kanji": "欝",
        "onyomi": "ウツ, ウン",
        "kunyomi": "うっ-する, ふさ-ぐ, しげ-る",
        "english": "gloom"
    },
    {
        "kanji": "蔚",
        "onyomi": "ウツ, イ",
        "kunyomi": "うち, おとこよもぎ",
        "english": "dense growth"
    },
    {
        "kanji": "鰻",
        "onyomi": "マン, バン",
        "kunyomi": "うなぎ",
        "english": "eel"
    },
    {
        "kanji": "姥",
        "onyomi": "ボ, モ",
        "kunyomi": "うば",
        "english": "old woman"
    },
    {
        "kanji": "厩",
        "onyomi": "キュウ",
        "kunyomi": "うまや",
        "english": "barn"
    },
    {
        "kanji": "浦",
        "onyomi": "ホ",
        "kunyomi": "うら",
        "english": "bay"
    },
    {
        "kanji": "瓜",
        "onyomi": "カ, ケ",
        "kunyomi": "うり",
        "english": "melon"
    },
    {
        "kanji": "閏",
        "onyomi": "ジュン",
        "kunyomi": "うるう",
        "english": "intercalation"
    },
    {
        "kanji": "噂",
        "onyomi": "ソン",
        "kunyomi": "うわさ",
        "english": "rumor"
    },
    {
        "kanji": "云",
        "onyomi": "ウン",
        "kunyomi": "い-う, ここに",
        "english": "say"
    },
    {
        "kanji": "運",
        "onyomi": "ウン",
        "kunyomi": "はこ-ぶ",
        "english": "carry"
    },
    {
        "kanji": "雲",
        "onyomi": "ウン",
        "kunyomi": "くも, -ぐも",
        "english": "cloud"
    },
    {
        "kanji": "荏",
        "onyomi": "ジン, ニン",
        "kunyomi": "",
        "english": "bean"
    },
    {
        "kanji": "餌",
        "onyomi": "ジ, ニ",
        "kunyomi": "え, えば, えさ, もち",
        "english": "food"
    },
    {
        "kanji": "叡",
        "onyomi": "エイ",
        "kunyomi": "あき-らか",
        "english": "intelligence"
    },
    {
        "kanji": "営",
        "onyomi": "エイ",
        "kunyomi": "いとな-む, いとな-み",
        "english": "camp"
    },
    {
        "kanji": "嬰",
        "onyomi": "エイ",
        "kunyomi": "ふ-れる, みどりご, あかご",
        "english": "sharp (music)"
    },
    {
        "kanji": "影",
        "onyomi": "エイ",
        "kunyomi": "かげ",
        "english": "shadow"
    },
    {
        "kanji": "映",
        "onyomi": "エイ",
        "kunyomi": "うつ-る, うつ-す, は-える, -ば-え",
        "english": "reflect"
    },
    {
        "kanji": "曳",
        "onyomi": "エイ",
        "kunyomi": "ひ-く",
        "english": "pull"
    },
    {
        "kanji": "栄",
        "onyomi": "エイ, ヨウ",
        "kunyomi": "さか-える, は-え, -ば-え, は-える, え",
        "english": "flourish"
    },
    {
        "kanji": "永",
        "onyomi": "エイ",
        "kunyomi": "なが-い",
        "english": "eternity"
    },
    {
        "kanji": "泳",
        "onyomi": "エイ",
        "kunyomi": "およ-ぐ",
        "english": "swim"
    },
    {
        "kanji": "洩",
        "onyomi": "エイ, セツ",
        "kunyomi": "も-らす, の-びる, も-れる",
        "english": "leak"
    },
    {
        "kanji": "瑛",
        "onyomi": "エイ",
        "kunyomi": "",
        "english": "sparkle of jewelry"
    },
    {
        "kanji": "盈",
        "onyomi": "エイ",
        "kunyomi": "み-たす, み-ちる",
        "english": "fullness"
    },
    {
        "kanji": "穎",
        "onyomi": "エイ",
        "kunyomi": "ほさき, のぎ",
        "english": "heads of grain"
    },
    {
        "kanji": "頴",
        "onyomi": "エイ",
        "kunyomi": "ほさき, のぎ",
        "english": "heads of grain"
    },
    {
        "kanji": "英",
        "onyomi": "エイ",
        "kunyomi": "はなぶさ",
        "english": "England"
    },
    {
        "kanji": "衛",
        "onyomi": "エイ, エ",
        "kunyomi": "",
        "english": "defense"
    },
    {
        "kanji": "詠",
        "onyomi": "エイ",
        "kunyomi": "よ-む, うた-う",
        "english": "recitation"
    },
    {
        "kanji": "鋭",
        "onyomi": "エイ",
        "kunyomi": "するど-い",
        "english": "pointed"
    },
    {
        "kanji": "液",
        "onyomi": "エキ",
        "kunyomi": "",
        "english": "fluid"
    },
    {
        "kanji": "疫",
        "onyomi": "エキ, ヤク",
        "kunyomi": "",
        "english": "epidemic"
    },
    {
        "kanji": "益",
        "onyomi": "エキ, ヤク",
        "kunyomi": "ま-す",
        "english": "benefit"
    },
    {
        "kanji": "駅",
        "onyomi": "エキ",
        "kunyomi": "",
        "english": "station"
    },
    {
        "kanji": "悦",
        "onyomi": "エツ",
        "kunyomi": "よろこ-ぶ, よろこ-ばす",
        "english": "ecstasy"
    },
    {
        "kanji": "謁",
        "onyomi": "エツ",
        "kunyomi": "",
        "english": "audience"
    },
    {
        "kanji": "越",
        "onyomi": "エツ, オツ",
        "kunyomi": "こ-す, -こ-す, -ご-し, こ-える, -ご-え",
        "english": "surpass"
    },
    {
        "kanji": "閲",
        "onyomi": "エツ",
        "kunyomi": "けみ-する",
        "english": "review"
    },
    {
        "kanji": "榎",
        "onyomi": "カ",
        "kunyomi": "えのき",
        "english": "lotus tree"
    },
    {
        "kanji": "厭",
        "onyomi": "エン, オン, アン, オウ, ユウ, ヨウ",
        "kunyomi": "いや, あ-きる, いと-う, おさ-える",
        "english": "get tired of"
    },
    {
        "kanji": "円",
        "onyomi": "エン",
        "kunyomi": "まる-い, まる, まど, まど-か, まろ-やか",
        "english": "circle"
    },
    {
        "kanji": "園",
        "onyomi": "エン",
        "kunyomi": "その",
        "english": "park"
    },
    {
        "kanji": "堰",
        "onyomi": "エン",
        "kunyomi": "せき, せ-く",
        "english": "dam"
    },
    {
        "kanji": "奄",
        "onyomi": "エン",
        "kunyomi": "おお-う, たちまち",
        "english": "cover"
    },
    {
        "kanji": "宴",
        "onyomi": "エン",
        "kunyomi": "うたげ",
        "english": "banquet"
    },
    {
        "kanji": "延",
        "onyomi": "エン",
        "kunyomi": "の-びる, の-べる, の-べ, の-ばす",
        "english": "prolong"
    },
    {
        "kanji": "怨",
        "onyomi": "エン, オン, ウン",
        "kunyomi": "うら-む, うらみ, うら-めしい",
        "english": "grudge"
    },
    {
        "kanji": "掩",
        "onyomi": "エン",
        "kunyomi": "おお-う",
        "english": "cover"
    },
    {
        "kanji": "援",
        "onyomi": "エン",
        "kunyomi": "",
        "english": "abet"
    },
    {
        "kanji": "沿",
        "onyomi": "エン",
        "kunyomi": "そ-う, -ぞ-い",
        "english": "run alongside"
    },
    {
        "kanji": "演",
        "onyomi": "エン",
        "kunyomi": "",
        "english": "performance"
    },
    {
        "kanji": "炎",
        "onyomi": "エン",
        "kunyomi": "ほのお",
        "english": "inflammation"
    },
    {
        "kanji": "焔",
        "onyomi": "エン",
        "kunyomi": "ほのお",
        "english": "flame"
    },
    {
        "kanji": "煙",
        "onyomi": "エン",
        "kunyomi": "けむ-る, けむり, けむ-い",
        "english": "smoke"
    },
    {
        "kanji": "燕",
        "onyomi": "エン",
        "kunyomi": "つばめ, つばくら, つばくろ",
        "english": "swallow (bird)"
    },
    {
        "kanji": "猿",
        "onyomi": "エン",
        "kunyomi": "さる",
        "english": "monkey"
    },
    {
        "kanji": "縁",
        "onyomi": "エン, -ネン",
        "kunyomi": "ふち, ふち-どる, ゆかり, よすが, へり, えにし",
        "english": "affinity"
    },
    {
        "kanji": "艶",
        "onyomi": "エン",
        "kunyomi": "つや, なま-めかしい, あで-やか, つや-めく, なま-めく",
        "english": "glossy"
    },
    {
        "kanji": "苑",
        "onyomi": "エン, オン",
        "kunyomi": "その, う-つ",
        "english": "garden"
    },
    {
        "kanji": "薗",
        "onyomi": "エン, オン",
        "kunyomi": "その",
        "english": "garden"
    },
    {
        "kanji": "遠",
        "onyomi": "エン, オン",
        "kunyomi": "とお-い",
        "english": "distant"
    },
    {
        "kanji": "鉛",
        "onyomi": "エン",
        "kunyomi": "なまり",
        "english": "lead"
    },
    {
        "kanji": "鴛",
        "onyomi": "エン, オン",
        "kunyomi": "おし, おしどり",
        "english": "male mandarin duck"
    },
    {
        "kanji": "塩",
        "onyomi": "エン",
        "kunyomi": "しお",
        "english": "salt"
    },
    {
        "kanji": "於",
        "onyomi": "オ, ヨ",
        "kunyomi": "おい-て, お-ける, ああ, より",
        "english": "at"
    },
    {
        "kanji": "汚",
        "onyomi": "オ",
        "kunyomi": "けが-す, けが-れる, けが-らわしい, よご-す, よご-れる, きたな-い",
        "english": "dirty"
    },
    {
        "kanji": "甥",
        "onyomi": "セイ, ソウ, ショウ",
        "kunyomi": "おい, むこ",
        "english": "nephew"
    },
    {
        "kanji": "凹",
        "onyomi": "オウ",
        "kunyomi": "くぼ-む, へこ-む, ぼこ",
        "english": "concave"
    },
    {
        "kanji": "央",
        "onyomi": "オウ",
        "kunyomi": "",
        "english": "center"
    },
    {
        "kanji": "奥",
        "onyomi": "オウ",
        "kunyomi": "おく, おく-まる, くま",
        "english": "heart"
    },
    {
        "kanji": "往",
        "onyomi": "オウ",
        "kunyomi": "い-く, いにしえ, さき-に, ゆ-く",
        "english": "journey"
    },
    {
        "kanji": "応",
        "onyomi": "オウ, ヨウ, -ノウ",
        "kunyomi": "あた-る, まさに, こた-える",
        "english": "apply"
    },
    {
        "kanji": "押",
        "onyomi": "オウ",
        "kunyomi": "お-す, お-し-, お-っ-, お-さえる, おさ-える",
        "english": "push"
    },
    {
        "kanji": "旺",
        "onyomi": "オウ, キョウ, ゴウ",
        "kunyomi": "かがや-き, うつくし-い, さかん",
        "english": "flourishing"
    },
    {
        "kanji": "横",
        "onyomi": "オウ",
        "kunyomi": "よこ",
        "english": "sideways"
    },
    {
        "kanji": "欧",
        "onyomi": "オウ",
        "kunyomi": "うた-う, は-く",
        "english": "Europe"
    },
    {
        "kanji": "殴",
        "onyomi": "オウ",
        "kunyomi": "なぐ-る",
        "english": "assault"
    },
    {
        "kanji": "王",
        "onyomi": "オウ, -ノウ",
        "kunyomi": "",
        "english": "king"
    },
    {
        "kanji": "翁",
        "onyomi": "オウ",
        "kunyomi": "おきな",
        "english": "venerable old man"
    },
    {
        "kanji": "襖",
        "onyomi": "オウ",
        "kunyomi": "ふすま, あお",
        "english": "opaque sliding door"
    },
    {
        "kanji": "鴬",
        "onyomi": "オウ",
        "kunyomi": "うぐいす",
        "english": "nightingale"
    },
    {
        "kanji": "鴎",
        "onyomi": "オウ",
        "kunyomi": "かもめ",
        "english": "seagull"
    },
    {
        "kanji": "黄",
        "onyomi": "コウ, オウ",
        "kunyomi": "き, こ-",
        "english": "yellow"
    },
    {
        "kanji": "岡",
        "onyomi": "コウ",
        "kunyomi": "おか",
        "english": "mount"
    },
    {
        "kanji": "沖",
        "onyomi": "チュウ",
        "kunyomi": "おき, おきつ, ちゅう-する, わく",
        "english": "open sea"
    },
    {
        "kanji": "荻",
        "onyomi": "テキ",
        "kunyomi": "おぎ",
        "english": "reed"
    },
    {
        "kanji": "億",
        "onyomi": "オク",
        "kunyomi": "",
        "english": "hundred million"
    },
    {
        "kanji": "屋",
        "onyomi": "オク",
        "kunyomi": "や",
        "english": "roof"
    },
    {
        "kanji": "憶",
        "onyomi": "オク",
        "kunyomi": "",
        "english": "recollection"
    },
    {
        "kanji": "臆",
        "onyomi": "オク, ヨク",
        "kunyomi": "むね, おくする",
        "english": "timidity"
    },
    {
        "kanji": "桶",
        "onyomi": "ヨウ, トウ",
        "kunyomi": "おけ",
        "english": "tub"
    },
    {
        "kanji": "牡",
        "onyomi": "ボ, ボウ",
        "kunyomi": "おす, お-, おん-",
        "english": "male"
    },
    {
        "kanji": "乙",
        "onyomi": "オツ, イツ",
        "kunyomi": "おと-, きのと",
        "english": "the latter"
    },
    {
        "kanji": "俺",
        "onyomi": "エン",
        "kunyomi": "おれ, われ",
        "english": "I"
    },
    {
        "kanji": "卸",
        "onyomi": "シャ",
        "kunyomi": "おろ-す, おろし, おろ-し",
        "english": "wholesale"
    },
    {
        "kanji": "恩",
        "onyomi": "オン",
        "kunyomi": "",
        "english": "grace"
    },
    {
        "kanji": "温",
        "onyomi": "オン",
        "kunyomi": "あたた-か, あたた-かい, あたた-まる, あたた-める, ぬく",
        "english": "warm"
    },
    {
        "kanji": "穏",
        "onyomi": "オン",
        "kunyomi": "おだ-やか",
        "english": "calm"
    },
    {
        "kanji": "音",
        "onyomi": "オン, イン, -ノン",
        "kunyomi": "おと, ね",
        "english": "sound"
    },
    {
        "kanji": "下",
        "onyomi": "カ, ゲ",
        "kunyomi": "した, しも, もと, さ-げる, さ-がる, くだ-る, くだ-り, くだ-す, -くだ-す, くだ-さる, お-ろす, お-りる",
        "english": "below"
    },
    {
        "kanji": "化",
        "onyomi": "カ, ケ",
        "kunyomi": "ば-ける, ば-かす, ふ-ける, け-する",
        "english": "change"
    },
    {
        "kanji": "仮",
        "onyomi": "カ, ケ",
        "kunyomi": "かり, かり-",
        "english": "sham"
    },
    {
        "kanji": "何",
        "onyomi": "カ",
        "kunyomi": "なに, なん, なに-, なん-",
        "english": "what"
    },
    {
        "kanji": "伽",
        "onyomi": "カ, ガ, キャ, ギャ",
        "kunyomi": "とぎ",
        "english": "nursing"
    },
    {
        "kanji": "価",
        "onyomi": "カ, ケ",
        "kunyomi": "あたい",
        "english": "value"
    },
    {
        "kanji": "佳",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "excellent"
    },
    {
        "kanji": "加",
        "onyomi": "カ",
        "kunyomi": "くわ-える, くわ-わる",
        "english": "add"
    },
    {
        "kanji": "可",
        "onyomi": "カ, コク",
        "kunyomi": "-べ-き, -べ-し",
        "english": "can"
    },
    {
        "kanji": "嘉",
        "onyomi": "カ",
        "kunyomi": "よみ-する, よい",
        "english": "applaud"
    },
    {
        "kanji": "夏",
        "onyomi": "カ, ガ, ゲ",
        "kunyomi": "なつ",
        "english": "summer"
    },
    {
        "kanji": "嫁",
        "onyomi": "カ",
        "kunyomi": "よめ, とつ-ぐ, い-く, ゆ-く",
        "english": "marry into"
    },
    {
        "kanji": "家",
        "onyomi": "カ, ケ",
        "kunyomi": "いえ, や, うち",
        "english": "house"
    },
    {
        "kanji": "寡",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "widow"
    },
    {
        "kanji": "科",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "department"
    },
    {
        "kanji": "暇",
        "onyomi": "カ",
        "kunyomi": "ひま, いとま",
        "english": "spare time"
    },
    {
        "kanji": "果",
        "onyomi": "カ",
        "kunyomi": "は-たす, はた-す, -は-たす, は-てる, -は-てる, は-て",
        "english": "fruit"
    },
    {
        "kanji": "架",
        "onyomi": "カ",
        "kunyomi": "か-ける, か-かる",
        "english": "erect"
    },
    {
        "kanji": "歌",
        "onyomi": "カ",
        "kunyomi": "うた, うた-う",
        "english": "song"
    },
    {
        "kanji": "河",
        "onyomi": "カ",
        "kunyomi": "かわ",
        "english": "river"
    },
    {
        "kanji": "火",
        "onyomi": "カ",
        "kunyomi": "ひ, -び, ほ-",
        "english": "fire"
    },
    {
        "kanji": "珂",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "jewel"
    },
    {
        "kanji": "禍",
        "onyomi": "カ",
        "kunyomi": "わざわい",
        "english": "calamity"
    },
    {
        "kanji": "禾",
        "onyomi": "カ",
        "kunyomi": "いね",
        "english": "two-branch tree radical (no. 115)"
    },
    {
        "kanji": "稼",
        "onyomi": "カ",
        "kunyomi": "かせ-ぐ",
        "english": "earnings"
    },
    {
        "kanji": "箇",
        "onyomi": "カ, コ",
        "kunyomi": "",
        "english": "counter for articles"
    },
    {
        "kanji": "花",
        "onyomi": "カ, ケ",
        "kunyomi": "はな",
        "english": "flower"
    },
    {
        "kanji": "苛",
        "onyomi": "カ",
        "kunyomi": "いじ-める, さいな-む, いらだ-つ, からい, こまかい",
        "english": "torment"
    },
    {
        "kanji": "茄",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "eggplant"
    },
    {
        "kanji": "荷",
        "onyomi": "カ",
        "kunyomi": "に",
        "english": "baggage"
    },
    {
        "kanji": "華",
        "onyomi": "カ, ケ",
        "kunyomi": "はな",
        "english": "splendor"
    },
    {
        "kanji": "菓",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "candy"
    },
    {
        "kanji": "蝦",
        "onyomi": "カ, ゲ",
        "kunyomi": "えび",
        "english": "shrimp"
    },
    {
        "kanji": "課",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "chapter"
    },
    {
        "kanji": "嘩",
        "onyomi": "カ, ケ",
        "kunyomi": "かまびす-しい",
        "english": "noisy"
    },
    {
        "kanji": "貨",
        "onyomi": "カ",
        "kunyomi": "たから",
        "english": "freight"
    },
    {
        "kanji": "迦",
        "onyomi": "カ, ケ",
        "kunyomi": "",
        "english": "(used phonetically)"
    },
    {
        "kanji": "過",
        "onyomi": "カ",
        "kunyomi": "す-ぎる, す-ごす, あやま-ち, あやま-つ, よぎ-る, よ-ぎる",
        "english": "overdo"
    },
    {
        "kanji": "霞",
        "onyomi": "カ, ゲ",
        "kunyomi": "かすみ, かす-む",
        "english": "be hazy"
    },
    {
        "kanji": "蚊",
        "onyomi": "ブン",
        "kunyomi": "か",
        "english": "mosquito"
    },
    {
        "kanji": "俄",
        "onyomi": "ガ",
        "kunyomi": "にわか",
        "english": "sudden"
    },
    {
        "kanji": "峨",
        "onyomi": "ガ",
        "kunyomi": "けわ-しい",
        "english": "high mountain"
    },
    {
        "kanji": "我",
        "onyomi": "ガ",
        "kunyomi": "われ, わ, わ-が-, わが-",
        "english": "ego"
    },
    {
        "kanji": "牙",
        "onyomi": "ガ, ゲ",
        "kunyomi": "きば, は",
        "english": "tusk"
    },
    {
        "kanji": "画",
        "onyomi": "ガ, カク, エ, カイ",
        "kunyomi": "えが-く, かく-する, かぎ-る, はかりごと, はか-る",
        "english": "brush-stroke"
    },
    {
        "kanji": "臥",
        "onyomi": "ガ",
        "kunyomi": "ふせ-る, ふ-せる, ふ-す",
        "english": "bend down"
    },
    {
        "kanji": "芽",
        "onyomi": "ガ",
        "kunyomi": "め",
        "english": "bud"
    },
    {
        "kanji": "蛾",
        "onyomi": "ギ, ガ",
        "kunyomi": "ひむし",
        "english": "moth"
    },
    {
        "kanji": "賀",
        "onyomi": "ガ",
        "kunyomi": "",
        "english": "congratulations"
    },
    {
        "kanji": "雅",
        "onyomi": "ガ",
        "kunyomi": "みや-び",
        "english": "gracious"
    },
    {
        "kanji": "餓",
        "onyomi": "ガ",
        "kunyomi": "う-える",
        "english": "starve"
    },
    {
        "kanji": "駕",
        "onyomi": "カ, ガ",
        "kunyomi": "かご, が-する, しのぐ, のる",
        "english": "vehicle"
    },
    {
        "kanji": "介",
        "onyomi": "カイ",
        "kunyomi": "",
        "english": "jammed in"
    },
    {
        "kanji": "会",
        "onyomi": "カイ, エ",
        "kunyomi": "あ-う, あ-わせる, あつ-まる",
        "english": "meeting"
    },
    {
        "kanji": "解",
        "onyomi": "カイ, ゲ",
        "kunyomi": "と-く, と-かす, と-ける, ほど-く, ほぐ-す, わか-る, さと-る",
        "english": "unravel"
    },
    {
        "kanji": "回",
        "onyomi": "カイ, エ",
        "kunyomi": "まわ-る, -まわ-る, -まわ-り, まわ-す, -まわ-す, まわ-し-, -まわ-し, もとお-る, か-える",
        "english": "-times"
    },
    {
        "kanji": "塊",
        "onyomi": "カイ, ケ",
        "kunyomi": "かたまり, つちくれ",
        "english": "clod"
    },
    {
        "kanji": "壊",
        "onyomi": "カイ, エ",
        "kunyomi": "こわ-す, こわ-れる, やぶ-る",
        "english": "demolition"
    },
    {
        "kanji": "廻",
        "onyomi": "カイ, エ",
        "kunyomi": "まわ-る, まわ-す, もとお-る, めぐ-る, めぐ-らす",
        "english": "round"
    },
    {
        "kanji": "快",
        "onyomi": "カイ",
        "kunyomi": "こころよ-い",
        "english": "cheerful"
    },
    {
        "kanji": "怪",
        "onyomi": "カイ, ケ",
        "kunyomi": "あや-しい, あや-しむ",
        "english": "suspicious"
    },
    {
        "kanji": "悔",
        "onyomi": "カイ",
        "kunyomi": "く-いる, く-やむ, くや-しい",
        "english": "repent"
    },
    {
        "kanji": "恢",
        "onyomi": "カイ, ケ",
        "kunyomi": "ひろ-い",
        "english": "wide"
    },
    {
        "kanji": "懐",
        "onyomi": "カイ, エ",
        "kunyomi": "ふところ, なつ-かしい, なつ-かしむ, なつ-く, なつ-ける, なず-ける, いだ-く, おも-う",
        "english": "feelings"
    },
    {
        "kanji": "戒",
        "onyomi": "カイ",
        "kunyomi": "いまし-める",
        "english": "commandment"
    },
    {
        "kanji": "拐",
        "onyomi": "カイ",
        "kunyomi": "",
        "english": "kidnap"
    },
    {
        "kanji": "改",
        "onyomi": "カイ",
        "kunyomi": "あらた-める, あらた-まる",
        "english": "reformation"
    },
    {
        "kanji": "魁",
        "onyomi": "カイ",
        "kunyomi": "さきがけ, かしら",
        "english": "charging ahead of others"
    },
    {
        "kanji": "晦",
        "onyomi": "カイ",
        "kunyomi": "つごもり, くら-い, みそか, くら-む",
        "english": "dark"
    },
    {
        "kanji": "械",
        "onyomi": "カイ",
        "kunyomi": "かせ",
        "english": "contraption"
    },
    {
        "kanji": "海",
        "onyomi": "カイ",
        "kunyomi": "うみ",
        "english": "sea"
    },
    {
        "kanji": "灰",
        "onyomi": "カイ",
        "kunyomi": "はい",
        "english": "ashes"
    },
    {
        "kanji": "界",
        "onyomi": "カイ",
        "kunyomi": "",
        "english": "world"
    },
    {
        "kanji": "皆",
        "onyomi": "カイ",
        "kunyomi": "みな, みんな",
        "english": "all"
    },
    {
        "kanji": "絵",
        "onyomi": "カイ, エ",
        "kunyomi": "",
        "english": "picture"
    },
    {
        "kanji": "芥",
        "onyomi": "カイ, ケ",
        "kunyomi": "からし, ごみ, あくた",
        "english": "mustard"
    },
    {
        "kanji": "蟹",
        "onyomi": "カイ",
        "kunyomi": "かに",
        "english": "crab"
    },
    {
        "kanji": "開",
        "onyomi": "カイ",
        "kunyomi": "ひら-く, ひら-き, -びら-き, ひら-ける, あ-く, あ-ける",
        "english": "open"
    },
    {
        "kanji": "階",
        "onyomi": "カイ",
        "kunyomi": "きざはし",
        "english": "storey"
    },
    {
        "kanji": "貝",
        "onyomi": "バイ",
        "kunyomi": "かい",
        "english": "shellfish"
    },
    {
        "kanji": "凱",
        "onyomi": "ガイ, カイ",
        "kunyomi": "かちどき, やわらぐ",
        "english": "victory song"
    },
    {
        "kanji": "劾",
        "onyomi": "ガイ",
        "kunyomi": "",
        "english": "censure"
    },
    {
        "kanji": "外",
        "onyomi": "ガイ, ゲ",
        "kunyomi": "そと, ほか, はず-す, はず-れる, と-",
        "english": "outside"
    },
    {
        "kanji": "咳",
        "onyomi": "カイ, ガイ",
        "kunyomi": "せ-く, しわぶ-く, せき, しわぶき",
        "english": "cough"
    },
    {
        "kanji": "害",
        "onyomi": "ガイ",
        "kunyomi": "",
        "english": "harm"
    },
    {
        "kanji": "崖",
        "onyomi": "ガイ, ゲ, ギ",
        "kunyomi": "がけ, きし, はて",
        "english": "cliff"
    },
    {
        "kanji": "慨",
        "onyomi": "ガイ",
        "kunyomi": "なげ-く",
        "english": "rue"
    },
    {
        "kanji": "概",
        "onyomi": "ガイ",
        "kunyomi": "おおむ-ね",
        "english": "outline"
    },
    {
        "kanji": "涯",
        "onyomi": "ガイ",
        "kunyomi": "はて",
        "english": "horizon"
    },
    {
        "kanji": "碍",
        "onyomi": "ガイ, ゲ",
        "kunyomi": "さまた-げる",
        "english": "obstacle"
    },
    {
        "kanji": "蓋",
        "onyomi": "ガイ, カイ, コウ",
        "kunyomi": "ふた, けだ-し, おお-う, かさ, かこう",
        "english": "cover"
    },
    {
        "kanji": "街",
        "onyomi": "ガイ, カイ",
        "kunyomi": "まち",
        "english": "boulevard"
    },
    {
        "kanji": "該",
        "onyomi": "ガイ",
        "kunyomi": "",
        "english": "above-stated"
    },
    {
        "kanji": "鎧",
        "onyomi": "カイ, ガイ",
        "kunyomi": "よろ-う, よろい",
        "english": "put on armor"
    },
    {
        "kanji": "骸",
        "onyomi": "ガイ, カイ",
        "kunyomi": "むくろ",
        "english": "bone"
    },
    {
        "kanji": "浬",
        "onyomi": "リ",
        "kunyomi": "かいり, のっと",
        "english": "knot"
    },
    {
        "kanji": "馨",
        "onyomi": "ケイ, キョウ",
        "kunyomi": "かお-る, かおり",
        "english": "fragrant"
    },
    {
        "kanji": "蛙",
        "onyomi": "ア, ワ",
        "kunyomi": "かえる, かわず",
        "english": "frog"
    },
    {
        "kanji": "垣",
        "onyomi": "エン",
        "kunyomi": "かき",
        "english": "hedge"
    },
    {
        "kanji": "柿",
        "onyomi": "シ",
        "kunyomi": "かき",
        "english": "persimmon"
    },
    {
        "kanji": "蛎",
        "onyomi": "レイ",
        "kunyomi": "かき",
        "english": "oyster"
    },
    {
        "kanji": "鈎",
        "onyomi": "コウ, ク",
        "kunyomi": "かぎ",
        "english": "hook"
    },
    {
        "kanji": "劃",
        "onyomi": "カク",
        "kunyomi": "わ-かつ, かぎ-る",
        "english": "divide"
    },
    {
        "kanji": "嚇",
        "onyomi": "カク",
        "kunyomi": "おど-す",
        "english": "menacing"
    },
    {
        "kanji": "各",
        "onyomi": "カク",
        "kunyomi": "おのおの",
        "english": "each"
    },
    {
        "kanji": "廓",
        "onyomi": "カク",
        "kunyomi": "くるわ, とりで",
        "english": "enclosure"
    },
    {
        "kanji": "拡",
        "onyomi": "カク, コウ",
        "kunyomi": "ひろ-がる, ひろ-げる, ひろ-める",
        "english": "broaden"
    },
    {
        "kanji": "撹",
        "onyomi": "カク, コウ",
        "kunyomi": "みだ-す",
        "english": "disturb"
    },
    {
        "kanji": "格",
        "onyomi": "カク, コウ, キャク, ゴウ",
        "kunyomi": "",
        "english": "status"
    },
    {
        "kanji": "核",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "nucleus"
    },
    {
        "kanji": "殻",
        "onyomi": "カク, コク, バイ",
        "kunyomi": "から, がら",
        "english": "husk"
    },
    {
        "kanji": "獲",
        "onyomi": "カク",
        "kunyomi": "え-る",
        "english": "seize"
    },
    {
        "kanji": "確",
        "onyomi": "カク, コウ",
        "kunyomi": "たし-か, たし-かめる",
        "english": "assurance"
    },
    {
        "kanji": "穫",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "harvest"
    },
    {
        "kanji": "覚",
        "onyomi": "カク",
        "kunyomi": "おぼ-える, さ-ます, さ-める, さと-る",
        "english": "memorize"
    },
    {
        "kanji": "角",
        "onyomi": "カク",
        "kunyomi": "かど, つの",
        "english": "angle"
    },
    {
        "kanji": "赫",
        "onyomi": "カク",
        "kunyomi": "あかい, あか, かがや-く",
        "english": "suddenly"
    },
    {
        "kanji": "較",
        "onyomi": "カク, コウ",
        "kunyomi": "くら-べる",
        "english": "contrast"
    },
    {
        "kanji": "郭",
        "onyomi": "カク",
        "kunyomi": "くるわ",
        "english": "enclosure"
    },
    {
        "kanji": "閣",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "tower"
    },
    {
        "kanji": "隔",
        "onyomi": "カク",
        "kunyomi": "へだ-てる, へだ-たる",
        "english": "isolate"
    },
    {
        "kanji": "革",
        "onyomi": "カク",
        "kunyomi": "かわ",
        "english": "leather"
    },
    {
        "kanji": "学",
        "onyomi": "ガク",
        "kunyomi": "まな-ぶ",
        "english": "study"
    },
    {
        "kanji": "岳",
        "onyomi": "ガク",
        "kunyomi": "たけ",
        "english": "point"
    },
    {
        "kanji": "楽",
        "onyomi": "ガク, ラク, ゴウ",
        "kunyomi": "たの-しい, たの-しむ, この-む",
        "english": "music"
    },
    {
        "kanji": "額",
        "onyomi": "ガク",
        "kunyomi": "ひたい",
        "english": "forehead"
    },
    {
        "kanji": "顎",
        "onyomi": "ガク",
        "kunyomi": "あご, あぎと",
        "english": "jaw"
    },
    {
        "kanji": "掛",
        "onyomi": "カイ, ケイ",
        "kunyomi": "か-ける, -か-ける, か-け, -か-け, -が-け, か-かる, -か-かる, -が-かる, か-かり, -が-かり, かかり, -がかり",
        "english": "hang"
    },
    {
        "kanji": "笠",
        "onyomi": "リュウ",
        "kunyomi": "かさ",
        "english": "bamboo hat"
    },
    {
        "kanji": "樫",
        "onyomi": "",
        "kunyomi": "かし",
        "english": "evergreen oak"
    },
    {
        "kanji": "橿",
        "onyomi": "キョウ",
        "kunyomi": "かし, もちのき",
        "english": "oak"
    },
    {
        "kanji": "梶",
        "onyomi": "ビ",
        "kunyomi": "かじ, こずえ",
        "english": "sculling oar"
    },
    {
        "kanji": "鰍",
        "onyomi": "シュウ, シュ",
        "kunyomi": "かじか, いなだ, どじょう",
        "english": "bullhead"
    },
    {
        "kanji": "潟",
        "onyomi": "セキ",
        "kunyomi": "かた, -がた",
        "english": "lagoon"
    },
    {
        "kanji": "割",
        "onyomi": "カツ",
        "kunyomi": "わ-る, わり, わ-り, わ-れる, さ-く",
        "english": "proportion"
    },
    {
        "kanji": "喝",
        "onyomi": "カツ",
        "kunyomi": "",
        "english": "hoarse"
    },
    {
        "kanji": "恰",
        "onyomi": "コウ, カッ, チョウ, キョウ",
        "kunyomi": "あたか-も",
        "english": "just as"
    },
    {
        "kanji": "括",
        "onyomi": "カツ",
        "kunyomi": "くく-る",
        "english": "fasten"
    },
    {
        "kanji": "活",
        "onyomi": "カツ",
        "kunyomi": "い-きる, い-かす, い-ける",
        "english": "lively"
    },
    {
        "kanji": "渇",
        "onyomi": "カツ",
        "kunyomi": "かわ-く",
        "english": "thirst"
    },
    {
        "kanji": "滑",
        "onyomi": "カツ, コツ",
        "kunyomi": "すべ-る, なめ-らか",
        "english": "slippery"
    },
    {
        "kanji": "葛",
        "onyomi": "カツ, カチ",
        "kunyomi": "つづら, くず",
        "english": "arrowroot"
    },
    {
        "kanji": "褐",
        "onyomi": "カツ",
        "kunyomi": "",
        "english": "brown"
    },
    {
        "kanji": "轄",
        "onyomi": "カツ",
        "kunyomi": "くさび",
        "english": "control"
    },
    {
        "kanji": "且",
        "onyomi": "ショ, ソ, ショウ",
        "kunyomi": "か-つ",
        "english": "moreover"
    },
    {
        "kanji": "鰹",
        "onyomi": "ケン",
        "kunyomi": "かつお",
        "english": "bonito"
    },
    {
        "kanji": "叶",
        "onyomi": "キョウ",
        "kunyomi": "かな-える, かな-う",
        "english": "grant"
    },
    {
        "kanji": "椛",
        "onyomi": "",
        "kunyomi": "かば, もみじ",
        "english": "autumn foliage"
    },
    {
        "kanji": "樺",
        "onyomi": "カ",
        "kunyomi": "かば, かんば",
        "english": "birch"
    },
    {
        "kanji": "鞄",
        "onyomi": "ハク, ホウ, ビョウ",
        "kunyomi": "かばん",
        "english": "suitcase"
    },
    {
        "kanji": "株",
        "onyomi": "シュ",
        "kunyomi": "かぶ",
        "english": "stocks"
    },
    {
        "kanji": "兜",
        "onyomi": "トウ, ト",
        "kunyomi": "かぶと",
        "english": "helmet"
    },
    {
        "kanji": "竃",
        "onyomi": "ソウ",
        "kunyomi": "かまど, かま, へっつい",
        "english": "kitchen stove"
    },
    {
        "kanji": "蒲",
        "onyomi": "ホ, ボ, フ, ブ",
        "kunyomi": "がま, かば, かま",
        "english": "bullrush"
    },
    {
        "kanji": "釜",
        "onyomi": "フ",
        "kunyomi": "かま",
        "english": "kettle"
    },
    {
        "kanji": "鎌",
        "onyomi": "レン, ケン",
        "kunyomi": "かま",
        "english": "sickle"
    },
    {
        "kanji": "噛",
        "onyomi": "コウ, ゴウ",
        "kunyomi": "か-む, か-じる",
        "english": "chew"
    },
    {
        "kanji": "鴨",
        "onyomi": "オウ",
        "kunyomi": "かも, あひる",
        "english": "wild duck"
    },
    {
        "kanji": "栢",
        "onyomi": "ハク, ヒャク",
        "kunyomi": "かしわ",
        "english": "oak"
    },
    {
        "kanji": "茅",
        "onyomi": "ボウ, ミョウ",
        "kunyomi": "かや, ちがや",
        "english": "miscanthus reed"
    },
    {
        "kanji": "萱",
        "onyomi": "ケン",
        "kunyomi": "かや, かんぞう",
        "english": "miscanthus reed"
    },
    {
        "kanji": "粥",
        "onyomi": "イク, シュク, ジュク",
        "kunyomi": "かゆ, かい, ひさ-ぐ",
        "english": "rice gruel"
    },
    {
        "kanji": "刈",
        "onyomi": "ガイ, カイ",
        "kunyomi": "か-る",
        "english": "reap"
    },
    {
        "kanji": "苅",
        "onyomi": "ガイ, カイ",
        "kunyomi": "か-る",
        "english": "cutting (grass)"
    },
    {
        "kanji": "瓦",
        "onyomi": "ガ",
        "kunyomi": "かわら, ぐらむ",
        "english": "tile"
    },
    {
        "kanji": "乾",
        "onyomi": "カン, ケン",
        "kunyomi": "かわ-く, かわ-かす, ほ-す, ひ-る, いぬい",
        "english": "drought"
    },
    {
        "kanji": "侃",
        "onyomi": "カン",
        "kunyomi": "つよ-い",
        "english": "strong"
    },
    {
        "kanji": "冠",
        "onyomi": "カン",
        "kunyomi": "かんむり",
        "english": "crown"
    },
    {
        "kanji": "寒",
        "onyomi": "カン",
        "kunyomi": "さむ-い",
        "english": "cold"
    },
    {
        "kanji": "刊",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "publish"
    },
    {
        "kanji": "勘",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "intuition"
    },
    {
        "kanji": "勧",
        "onyomi": "カン, ケン",
        "kunyomi": "すす-める",
        "english": "persuade"
    },
    {
        "kanji": "巻",
        "onyomi": "カン, ケン",
        "kunyomi": "ま-く, まき, ま-き",
        "english": "scroll"
    },
    {
        "kanji": "喚",
        "onyomi": "カン",
        "kunyomi": "わめ-く",
        "english": "yell"
    },
    {
        "kanji": "堪",
        "onyomi": "カン, タン",
        "kunyomi": "た-える, たま-る, こら-える, こた-える",
        "english": "withstand"
    },
    {
        "kanji": "姦",
        "onyomi": "カン, ケン",
        "kunyomi": "かん-する, かしま-しい, みだら",
        "english": "wicked"
    },
    {
        "kanji": "完",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "perfect"
    },
    {
        "kanji": "官",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "bureaucrat"
    },
    {
        "kanji": "寛",
        "onyomi": "カン",
        "kunyomi": "くつろ-ぐ, ひろ-い, ゆる-やか",
        "english": "tolerant"
    },
    {
        "kanji": "干",
        "onyomi": "カン",
        "kunyomi": "ほ-す, ほ-し-, -ぼ-し, ひ-る",
        "english": "dry"
    },
    {
        "kanji": "幹",
        "onyomi": "カン",
        "kunyomi": "みき",
        "english": "tree trunk"
    },
    {
        "kanji": "患",
        "onyomi": "カン",
        "kunyomi": "わずら-う",
        "english": "afflicted"
    },
    {
        "kanji": "感",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "emotion"
    },
    {
        "kanji": "慣",
        "onyomi": "カン",
        "kunyomi": "な-れる, な-らす",
        "english": "accustomed"
    },
    {
        "kanji": "憾",
        "onyomi": "カン",
        "kunyomi": "うら-む",
        "english": "remorse"
    },
    {
        "kanji": "換",
        "onyomi": "カン",
        "kunyomi": "か-える, -か-える, か-わる",
        "english": "interchange"
    },
    {
        "kanji": "敢",
        "onyomi": "カン",
        "kunyomi": "あ-えて, あ-えない, あ-えず",
        "english": "daring"
    },
    {
        "kanji": "柑",
        "onyomi": "コン, カン",
        "kunyomi": "",
        "english": "citrus"
    },
    {
        "kanji": "桓",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "marking post"
    },
    {
        "kanji": "棺",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "coffin"
    },
    {
        "kanji": "款",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "goodwill"
    },
    {
        "kanji": "歓",
        "onyomi": "カン",
        "kunyomi": "よろこ-ぶ",
        "english": "delight"
    },
    {
        "kanji": "汗",
        "onyomi": "カン",
        "kunyomi": "あせ",
        "english": "sweat"
    },
    {
        "kanji": "漢",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "Sino-"
    },
    {
        "kanji": "澗",
        "onyomi": "カン, ケン",
        "kunyomi": "たに, たにみず",
        "english": "valley river"
    },
    {
        "kanji": "潅",
        "onyomi": "カン",
        "kunyomi": "そそ-ぐ",
        "english": "pour into"
    },
    {
        "kanji": "環",
        "onyomi": "カン",
        "kunyomi": "わ",
        "english": "ring"
    },
    {
        "kanji": "甘",
        "onyomi": "カン",
        "kunyomi": "あま-い, あま-える, あま-やかす, うま-い",
        "english": "sweet"
    },
    {
        "kanji": "監",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "oversee"
    },
    {
        "kanji": "看",
        "onyomi": "カン",
        "kunyomi": "み-る",
        "english": "watch over"
    },
    {
        "kanji": "竿",
        "onyomi": "カン",
        "kunyomi": "さお",
        "english": "pole"
    },
    {
        "kanji": "管",
        "onyomi": "カン",
        "kunyomi": "くだ",
        "english": "pipe"
    },
    {
        "kanji": "簡",
        "onyomi": "カン, ケン",
        "kunyomi": "えら-ぶ, ふだ",
        "english": "simplicity"
    },
    {
        "kanji": "緩",
        "onyomi": "カン",
        "kunyomi": "ゆる-い, ゆる-やか, ゆる-む, ゆる-める",
        "english": "slacken"
    },
    {
        "kanji": "缶",
        "onyomi": "カン",
        "kunyomi": "かま",
        "english": "tin can"
    },
    {
        "kanji": "翰",
        "onyomi": "カン",
        "kunyomi": "はね, ふで, やまどり, ふみ",
        "english": "letter"
    },
    {
        "kanji": "肝",
        "onyomi": "カン",
        "kunyomi": "きも",
        "english": "liver"
    },
    {
        "kanji": "艦",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "warship"
    },
    {
        "kanji": "莞",
        "onyomi": "カン",
        "kunyomi": "い",
        "english": "smiling"
    },
    {
        "kanji": "観",
        "onyomi": "カン",
        "kunyomi": "み-る, しめ-す",
        "english": "outlook"
    },
    {
        "kanji": "諌",
        "onyomi": "カン",
        "kunyomi": "いさ-め, いさ-める",
        "english": "admonish"
    },
    {
        "kanji": "貫",
        "onyomi": "カン",
        "kunyomi": "つらぬ-く, ぬ-く, ぬき",
        "english": "pierce"
    },
    {
        "kanji": "還",
        "onyomi": "カン",
        "kunyomi": "かえ-る",
        "english": "send back"
    },
    {
        "kanji": "鑑",
        "onyomi": "カン",
        "kunyomi": "かんが-みる, かがみ",
        "english": "specimen"
    },
    {
        "kanji": "間",
        "onyomi": "カン, ケン",
        "kunyomi": "あいだ, ま, あい",
        "english": "interval"
    },
    {
        "kanji": "閑",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "leisure"
    },
    {
        "kanji": "関",
        "onyomi": "カン",
        "kunyomi": "せき, -ぜき, かか-わる, からくり, かんぬき",
        "english": "connection"
    },
    {
        "kanji": "陥",
        "onyomi": "カン",
        "kunyomi": "おちい-る, おとしい-れる",
        "english": "collapse"
    },
    {
        "kanji": "韓",
        "onyomi": "カン",
        "kunyomi": "から, いげた",
        "english": "Korea"
    },
    {
        "kanji": "館",
        "onyomi": "カン",
        "kunyomi": "やかた, たて",
        "english": "building"
    },
    {
        "kanji": "舘",
        "onyomi": "カン",
        "kunyomi": "やかた, たて",
        "english": "mansion"
    },
    {
        "kanji": "丸",
        "onyomi": "ガン",
        "kunyomi": "まる, まる-める, まる-い",
        "english": "round"
    },
    {
        "kanji": "含",
        "onyomi": "ガン",
        "kunyomi": "ふく-む, ふく-める",
        "english": "contain"
    },
    {
        "kanji": "岸",
        "onyomi": "ガン",
        "kunyomi": "きし",
        "english": "beach"
    },
    {
        "kanji": "巌",
        "onyomi": "ガン",
        "kunyomi": "いわ, いわお, けわ-しい",
        "english": "rock"
    },
    {
        "kanji": "玩",
        "onyomi": "ガン",
        "kunyomi": "もちあそ-ぶ, もてあそ-ぶ",
        "english": "play"
    },
    {
        "kanji": "癌",
        "onyomi": "ガン",
        "kunyomi": "",
        "english": "cancer"
    },
    {
        "kanji": "眼",
        "onyomi": "ガン, ゲン",
        "kunyomi": "まなこ, め",
        "english": "eyeball"
    },
    {
        "kanji": "岩",
        "onyomi": "ガン",
        "kunyomi": "いわ",
        "english": "boulder"
    },
    {
        "kanji": "翫",
        "onyomi": "ガン",
        "kunyomi": "もてあそ-ぶ",
        "english": "take pleasure in"
    },
    {
        "kanji": "贋",
        "onyomi": "ガン",
        "kunyomi": "にせ",
        "english": "counterfeit"
    },
    {
        "kanji": "雁",
        "onyomi": "ガン",
        "kunyomi": "かり, かりがね",
        "english": "wild goose"
    },
    {
        "kanji": "頑",
        "onyomi": "ガン",
        "kunyomi": "かたく-な",
        "english": "stubborn"
    },
    {
        "kanji": "顔",
        "onyomi": "ガン",
        "kunyomi": "かお",
        "english": "face"
    },
    {
        "kanji": "願",
        "onyomi": "ガン",
        "kunyomi": "ねが-う, -ねがい",
        "english": "petition"
    },
    {
        "kanji": "企",
        "onyomi": "キ",
        "kunyomi": "くわだ-てる, たくら-む",
        "english": "undertake"
    },
    {
        "kanji": "伎",
        "onyomi": "ギ, キ",
        "kunyomi": "わざ, わざおぎ",
        "english": "deed"
    },
    {
        "kanji": "危",
        "onyomi": "キ",
        "kunyomi": "あぶ-ない, あや-うい, あや-ぶむ",
        "english": "dangerous"
    },
    {
        "kanji": "喜",
        "onyomi": "キ",
        "kunyomi": "よろこ-ぶ, よろこ-ばす",
        "english": "rejoice"
    },
    {
        "kanji": "器",
        "onyomi": "キ",
        "kunyomi": "うつわ",
        "english": "utensil"
    },
    {
        "kanji": "基",
        "onyomi": "キ",
        "kunyomi": "もと, もとい",
        "english": "fundamentals"
    },
    {
        "kanji": "奇",
        "onyomi": "キ",
        "kunyomi": "く-しき, あや-しい, くし, めずら-しい",
        "english": "strange"
    },
    {
        "kanji": "嬉",
        "onyomi": "キ",
        "kunyomi": "うれ-しい, たの-しむ",
        "english": "glad"
    },
    {
        "kanji": "寄",
        "onyomi": "キ",
        "kunyomi": "よ-る, -よ-り, よ-せる",
        "english": "draw near"
    },
    {
        "kanji": "岐",
        "onyomi": "キ, ギ",
        "kunyomi": "",
        "english": "branch off"
    },
    {
        "kanji": "希",
        "onyomi": "キ, ケ",
        "kunyomi": "まれ, こいねが-う",
        "english": "hope"
    },
    {
        "kanji": "幾",
        "onyomi": "キ",
        "kunyomi": "いく-, いく-つ, いく-ら",
        "english": "how many"
    },
    {
        "kanji": "忌",
        "onyomi": "キ",
        "kunyomi": "い-む, い-み, い-まわしい",
        "english": "mourning"
    },
    {
        "kanji": "揮",
        "onyomi": "キ",
        "kunyomi": "ふる-う",
        "english": "brandish"
    },
    {
        "kanji": "机",
        "onyomi": "キ",
        "kunyomi": "つくえ",
        "english": "desk"
    },
    {
        "kanji": "旗",
        "onyomi": "キ",
        "kunyomi": "はた",
        "english": "national flag"
    },
    {
        "kanji": "既",
        "onyomi": "キ",
        "kunyomi": "すで-に",
        "english": "previously"
    },
    {
        "kanji": "期",
        "onyomi": "キ, ゴ",
        "kunyomi": "",
        "english": "period"
    },
    {
        "kanji": "棋",
        "onyomi": "キ",
        "kunyomi": "ご",
        "english": "chess piece"
    },
    {
        "kanji": "棄",
        "onyomi": "キ",
        "kunyomi": "す-てる",
        "english": "abandon"
    },
    {
        "kanji": "機",
        "onyomi": "キ",
        "kunyomi": "はた",
        "english": "loom"
    },
    {
        "kanji": "帰",
        "onyomi": "キ",
        "kunyomi": "かえ-る, かえ-す, おく-る, とつ-ぐ",
        "english": "homecoming"
    },
    {
        "kanji": "毅",
        "onyomi": "キ, ギ",
        "kunyomi": "つよ-い",
        "english": "strong"
    },
    {
        "kanji": "気",
        "onyomi": "キ, ケ",
        "kunyomi": "き",
        "english": "spirit"
    },
    {
        "kanji": "汽",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "vapor"
    },
    {
        "kanji": "畿",
        "onyomi": "キ",
        "kunyomi": "みやこ",
        "english": "capital"
    },
    {
        "kanji": "祈",
        "onyomi": "キ",
        "kunyomi": "いの-る",
        "english": "pray"
    },
    {
        "kanji": "季",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "seasons"
    },
    {
        "kanji": "稀",
        "onyomi": "キ, ケ",
        "kunyomi": "まれ, まばら",
        "english": "rare"
    },
    {
        "kanji": "紀",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "chronicle"
    },
    {
        "kanji": "徽",
        "onyomi": "キ",
        "kunyomi": "しるし",
        "english": "good"
    },
    {
        "kanji": "規",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "standard"
    },
    {
        "kanji": "記",
        "onyomi": "キ",
        "kunyomi": "しる-す",
        "english": "scribe"
    },
    {
        "kanji": "貴",
        "onyomi": "キ",
        "kunyomi": "たっと-い, とうと-い, たっと-ぶ, とうと-ぶ",
        "english": "precious"
    },
    {
        "kanji": "起",
        "onyomi": "キ",
        "kunyomi": "お-きる, お-こる, お-こす, おこ-す, た-つ",
        "english": "rouse"
    },
    {
        "kanji": "軌",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "rut"
    },
    {
        "kanji": "輝",
        "onyomi": "キ",
        "kunyomi": "かがや-く",
        "english": "radiance"
    },
    {
        "kanji": "飢",
        "onyomi": "キ",
        "kunyomi": "う-える",
        "english": "hungry"
    },
    {
        "kanji": "騎",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "equestrian"
    },
    {
        "kanji": "鬼",
        "onyomi": "キ",
        "kunyomi": "おに, おに-",
        "english": "ghost"
    },
    {
        "kanji": "亀",
        "onyomi": "キ, キュウ, キン",
        "kunyomi": "かめ",
        "english": "tortoise"
    },
    {
        "kanji": "偽",
        "onyomi": "ギ, カ",
        "kunyomi": "いつわ-る, にせ, いつわ-り",
        "english": "falsehood"
    },
    {
        "kanji": "儀",
        "onyomi": "ギ",
        "kunyomi": "",
        "english": "ceremony"
    },
    {
        "kanji": "妓",
        "onyomi": "ギ, キ",
        "kunyomi": "わざおぎ, うたいめ",
        "english": "stretch"
    },
    {
        "kanji": "宜",
        "onyomi": "ギ",
        "kunyomi": "よろ-しい, よろ-しく",
        "english": "best regards"
    },
    {
        "kanji": "戯",
        "onyomi": "ギ, ゲ",
        "kunyomi": "たわむ-れる, ざ-れる, じゃ-れる",
        "english": "frolic"
    },
    {
        "kanji": "技",
        "onyomi": "ギ",
        "kunyomi": "わざ",
        "english": "skill"
    },
    {
        "kanji": "擬",
        "onyomi": "ギ",
        "kunyomi": "まが-い, もど-き",
        "english": "mimic"
    },
    {
        "kanji": "欺",
        "onyomi": "ギ",
        "kunyomi": "あざむ-く",
        "english": "deceit"
    },
    {
        "kanji": "犠",
        "onyomi": "ギ, キ",
        "kunyomi": "いけにえ",
        "english": "sacrifice"
    },
    {
        "kanji": "疑",
        "onyomi": "ギ",
        "kunyomi": "うたが-う",
        "english": "doubt"
    },
    {
        "kanji": "祇",
        "onyomi": "ギ, キ, シ",
        "kunyomi": "くにつかみ, ただ, まさに",
        "english": "national or local god"
    },
    {
        "kanji": "義",
        "onyomi": "ギ",
        "kunyomi": "",
        "english": "righteousness"
    },
    {
        "kanji": "蟻",
        "onyomi": "ギ",
        "kunyomi": "あり",
        "english": "ant"
    },
    {
        "kanji": "誼",
        "onyomi": "ギ",
        "kunyomi": "よしみ, よい",
        "english": "friendship"
    },
    {
        "kanji": "議",
        "onyomi": "ギ",
        "kunyomi": "",
        "english": "deliberation"
    },
    {
        "kanji": "掬",
        "onyomi": "キク, コク",
        "kunyomi": "きく-す, むす-ぶ, すく-う, たなごころ",
        "english": "scoop up water with the hand"
    },
    {
        "kanji": "菊",
        "onyomi": "キク",
        "kunyomi": "",
        "english": "chrysanthemum"
    },
    {
        "kanji": "鞠",
        "onyomi": "キク, キュウ",
        "kunyomi": "まり",
        "english": "ball"
    },
    {
        "kanji": "吉",
        "onyomi": "キチ, キツ",
        "kunyomi": "よし",
        "english": "good luck"
    },
    {
        "kanji": "吃",
        "onyomi": "キツ",
        "kunyomi": "ども-る",
        "english": "stammer"
    },
    {
        "kanji": "喫",
        "onyomi": "キツ",
        "kunyomi": "の-む",
        "english": "consume"
    },
    {
        "kanji": "桔",
        "onyomi": "キツ, ケツ",
        "kunyomi": "",
        "english": "used in plant names"
    },
    {
        "kanji": "橘",
        "onyomi": "キツ",
        "kunyomi": "たちばな",
        "english": "mandarin orange"
    },
    {
        "kanji": "詰",
        "onyomi": "キツ, キチ",
        "kunyomi": "つ-める, つ-め, -づ-め, つ-まる, つ-む",
        "english": "packed"
    },
    {
        "kanji": "砧",
        "onyomi": "チン",
        "kunyomi": "きぬた",
        "english": "fulling block"
    },
    {
        "kanji": "杵",
        "onyomi": "ショ, ソ",
        "kunyomi": "きね",
        "english": "wooden pestle"
    },
    {
        "kanji": "黍",
        "onyomi": "ショ",
        "kunyomi": "きび",
        "english": "millet"
    },
    {
        "kanji": "却",
        "onyomi": "キャク",
        "kunyomi": "かえ-って, しりぞ-く, しりぞ-ける",
        "english": "instead"
    },
    {
        "kanji": "客",
        "onyomi": "キャク, カク",
        "kunyomi": "",
        "english": "guest"
    },
    {
        "kanji": "脚",
        "onyomi": "キャク, キャ, カク",
        "kunyomi": "あし",
        "english": "skids"
    },
    {
        "kanji": "虐",
        "onyomi": "ギャク",
        "kunyomi": "しいた-げる",
        "english": "tyrannize"
    },
    {
        "kanji": "逆",
        "onyomi": "ギャク, ゲキ",
        "kunyomi": "さか, さか-さ, さか-らう",
        "english": "inverted"
    },
    {
        "kanji": "丘",
        "onyomi": "キュウ",
        "kunyomi": "おか",
        "english": "hill"
    },
    {
        "kanji": "久",
        "onyomi": "キュウ, ク",
        "kunyomi": "ひさ-しい",
        "english": "long time"
    },
    {
        "kanji": "仇",
        "onyomi": "キュウ, グ",
        "kunyomi": "あだ, あた, かたき, つれあい",
        "english": "foe"
    },
    {
        "kanji": "休",
        "onyomi": "キュウ",
        "kunyomi": "やす-む, やす-まる, やす-める",
        "english": "rest"
    },
    {
        "kanji": "及",
        "onyomi": "キュウ",
        "kunyomi": "およ-ぶ, およ-び, および, およ-ぼす",
        "english": "reach out"
    },
    {
        "kanji": "吸",
        "onyomi": "キュウ",
        "kunyomi": "す-う",
        "english": "suck"
    },
    {
        "kanji": "宮",
        "onyomi": "キュウ, グウ, ク, クウ",
        "kunyomi": "みや",
        "english": "Shinto shrine"
    },
    {
        "kanji": "弓",
        "onyomi": "キュウ",
        "kunyomi": "ゆみ",
        "english": "bow"
    },
    {
        "kanji": "急",
        "onyomi": "キュウ",
        "kunyomi": "いそ-ぐ, いそ-ぎ, せ-く",
        "english": "hurry"
    },
    {
        "kanji": "救",
        "onyomi": "キュウ",
        "kunyomi": "すく-う",
        "english": "salvation"
    },
    {
        "kanji": "朽",
        "onyomi": "キュウ",
        "kunyomi": "く-ちる",
        "english": "decay"
    },
    {
        "kanji": "求",
        "onyomi": "キュウ, グ",
        "kunyomi": "もと-める",
        "english": "request"
    },
    {
        "kanji": "汲",
        "onyomi": "キュウ",
        "kunyomi": "く-む",
        "english": "draw (water)"
    },
    {
        "kanji": "泣",
        "onyomi": "キュウ",
        "kunyomi": "な-く",
        "english": "cry"
    },
    {
        "kanji": "灸",
        "onyomi": "キュウ, ク",
        "kunyomi": "やいと",
        "english": "moxa cautery"
    },
    {
        "kanji": "球",
        "onyomi": "キュウ",
        "kunyomi": "たま",
        "english": "ball"
    },
    {
        "kanji": "究",
        "onyomi": "キュウ, ク",
        "kunyomi": "きわ-める",
        "english": "research"
    },
    {
        "kanji": "窮",
        "onyomi": "キュウ, キョウ",
        "kunyomi": "きわ-める, きわ-まる, きわ-まり, きわ-み",
        "english": "hard up"
    },
    {
        "kanji": "笈",
        "onyomi": "キュウ",
        "kunyomi": "",
        "english": "backpack bookcase"
    },
    {
        "kanji": "級",
        "onyomi": "キュウ",
        "kunyomi": "",
        "english": "class"
    },
    {
        "kanji": "糾",
        "onyomi": "キュウ",
        "kunyomi": "ただ-す",
        "english": "twist"
    },
    {
        "kanji": "給",
        "onyomi": "キュウ",
        "kunyomi": "たま-う, たも-う, -たま-え",
        "english": "salary"
    },
    {
        "kanji": "旧",
        "onyomi": "キュウ",
        "kunyomi": "ふる-い, もと",
        "english": "old times"
    },
    {
        "kanji": "牛",
        "onyomi": "ギュウ",
        "kunyomi": "うし",
        "english": "cow"
    },
    {
        "kanji": "去",
        "onyomi": "キョ, コ",
        "kunyomi": "さ-る, -さ-る",
        "english": "gone"
    },
    {
        "kanji": "居",
        "onyomi": "キョ, コ",
        "kunyomi": "い-る, -い, お-る",
        "english": "reside"
    },
    {
        "kanji": "巨",
        "onyomi": "キョ",
        "kunyomi": "",
        "english": "gigantic"
    },
    {
        "kanji": "拒",
        "onyomi": "キョ, ゴ",
        "kunyomi": "こば-む",
        "english": "repel"
    },
    {
        "kanji": "拠",
        "onyomi": "キョ, コ",
        "kunyomi": "よ-る",
        "english": "foothold"
    },
    {
        "kanji": "挙",
        "onyomi": "キョ",
        "kunyomi": "あ-げる, あ-がる, こぞ-る",
        "english": "raise"
    },
    {
        "kanji": "渠",
        "onyomi": "キョ",
        "kunyomi": "かれ, なんぞ, なに, みぞ, いずくんぞ",
        "english": "ditch"
    },
    {
        "kanji": "虚",
        "onyomi": "キョ, コ",
        "kunyomi": "むな-しい, うつ-ろ",
        "english": "void"
    },
    {
        "kanji": "許",
        "onyomi": "キョ",
        "kunyomi": "ゆる-す, もと",
        "english": "permit"
    },
    {
        "kanji": "距",
        "onyomi": "キョ",
        "kunyomi": "へだ-たる, けづめ",
        "english": "long-distance"
    },
    {
        "kanji": "鋸",
        "onyomi": "キョ, コ",
        "kunyomi": "のこ, のこぎり",
        "english": "saw (cuts wood)"
    },
    {
        "kanji": "漁",
        "onyomi": "ギョ, リョウ",
        "kunyomi": "あさ-る",
        "english": "fishing"
    },
    {
        "kanji": "禦",
        "onyomi": "ギョ, ゴ",
        "kunyomi": "ふせ-ぐ",
        "english": "defend"
    },
    {
        "kanji": "魚",
        "onyomi": "ギョ",
        "kunyomi": "うお, さかな, -ざかな",
        "english": "fish"
    },
    {
        "kanji": "亨",
        "onyomi": "コウ, キョウ, ホウ",
        "kunyomi": "とお-る",
        "english": "pass through"
    },
    {
        "kanji": "享",
        "onyomi": "キョウ, コウ",
        "kunyomi": "う-ける",
        "english": "enjoy"
    },
    {
        "kanji": "京",
        "onyomi": "キョウ, ケイ, キン",
        "kunyomi": "みやこ",
        "english": "capital"
    },
    {
        "kanji": "供",
        "onyomi": "キョウ, ク, クウ, グ",
        "kunyomi": "そな-える, とも, -ども",
        "english": "submit"
    },
    {
        "kanji": "侠",
        "onyomi": "キョウ",
        "kunyomi": "きゃん, おとこだて",
        "english": "tomboy"
    },
    {
        "kanji": "僑",
        "onyomi": "キョウ",
        "kunyomi": "",
        "english": "expatriate"
    },
    {
        "kanji": "兇",
        "onyomi": "キョウ",
        "kunyomi": "おそ-れる, わる-い",
        "english": "wickedness"
    },
    {
        "kanji": "競",
        "onyomi": "キョウ, ケイ",
        "kunyomi": "きそ-う, せ-る, くら-べる",
        "english": "emulate"
    },
    {
        "kanji": "共",
        "onyomi": "キョウ",
        "kunyomi": "とも, とも-に, -ども",
        "english": "together"
    },
    {
        "kanji": "凶",
        "onyomi": "キョウ",
        "kunyomi": "",
        "english": "villain"
    },
    {
        "kanji": "協",
        "onyomi": "キョウ",
        "kunyomi": "",
        "english": "co-"
    },
    {
        "kanji": "匡",
        "onyomi": "キョウ, オウ",
        "kunyomi": "すく-う, ただ-す",
        "english": "correct"
    },
    {
        "kanji": "卿",
        "onyomi": "ケイ, キョウ",
        "kunyomi": "きみ",
        "english": "you"
    },
    {
        "kanji": "叫",
        "onyomi": "キョウ",
        "kunyomi": "さけ-ぶ",
        "english": "shout"
    },
    {
        "kanji": "喬",
        "onyomi": "キョウ",
        "kunyomi": "たか-い",
        "english": "high"
    },
    {
        "kanji": "境",
        "onyomi": "キョウ, ケイ",
        "kunyomi": "さかい",
        "english": "boundary"
    },
    {
        "kanji": "峡",
        "onyomi": "キョウ, コウ",
        "kunyomi": "はざま",
        "english": "gorge"
    },
    {
        "kanji": "強",
        "onyomi": "キョウ, ゴウ",
        "kunyomi": "つよ-い, つよ-まる, つよ-める, し-いる, こわ-い",
        "english": "strong"
    },
    {
        "kanji": "彊",
        "onyomi": "キョウ, ゴウ",
        "kunyomi": "つよ-い",
        "english": "strong"
    },
    {
        "kanji": "怯",
        "onyomi": "キョウ, コウ",
        "kunyomi": "ひる-む, おびえ-る, おじる, おび-える, おそ-れる",
        "english": "cowardice"
    },
    {
        "kanji": "恐",
        "onyomi": "キョウ",
        "kunyomi": "おそ-れる, おそ-る, おそ-ろしい, こわ-い, こわ-がる",
        "english": "fear"
    },
    {
        "kanji": "恭",
        "onyomi": "キョウ",
        "kunyomi": "うやうや-しい",
        "english": "respect"
    },
    {
        "kanji": "挟",
        "onyomi": "キョウ, ショウ",
        "kunyomi": "はさ-む, はさ-まる, わきばさ-む, さしはさ-む",
        "english": "pinch"
    },
    {
        "kanji": "教",
        "onyomi": "キョウ",
        "kunyomi": "おし-える, おそ-わる",
        "english": "teach"
    },
    {
        "kanji": "橋",
        "onyomi": "キョウ",
        "kunyomi": "はし",
        "english": "bridge"
    },
    {
        "kanji": "況",
        "onyomi": "キョウ",
        "kunyomi": "まし-て, いわ-んや, おもむき",
        "english": "condition"
    },
    {
        "kanji": "狂",
        "onyomi": "キョウ",
        "kunyomi": "くる-う, くる-おしい, くるお-しい",
        "english": "lunatic"
    },
    {
        "kanji": "狭",
        "onyomi": "キョウ, コウ",
        "kunyomi": "せま-い, せば-める, せば-まる, さ",
        "english": "cramped"
    },
    {
        "kanji": "矯",
        "onyomi": "キョウ",
        "kunyomi": "た-める",
        "english": "rectify"
    },
    {
        "kanji": "胸",
        "onyomi": "キョウ",
        "kunyomi": "むね, むな-",
        "english": "bosom"
    },
    {
        "kanji": "脅",
        "onyomi": "キョウ",
        "kunyomi": "おびや-かす, おど-す, おど-かす",
        "english": "threaten"
    },
    {
        "kanji": "興",
        "onyomi": "コウ, キョウ",
        "kunyomi": "おこ-る, おこ-す",
        "english": "entertain"
    },
    {
        "kanji": "蕎",
        "onyomi": "キョウ",
        "kunyomi": "そば",
        "english": "buckwheat"
    },
    {
        "kanji": "郷",
        "onyomi": "キョウ, ゴウ",
        "kunyomi": "さと",
        "english": "home town"
    },
    {
        "kanji": "鏡",
        "onyomi": "キョウ, ケイ",
        "kunyomi": "かがみ",
        "english": "mirror"
    },
    {
        "kanji": "響",
        "onyomi": "キョウ",
        "kunyomi": "ひび-く",
        "english": "echo"
    },
    {
        "kanji": "饗",
        "onyomi": "キョウ",
        "kunyomi": "う-ける, もてな-す",
        "english": "banquet"
    },
    {
        "kanji": "驚",
        "onyomi": "キョウ",
        "kunyomi": "おどろ-く, おどろ-かす",
        "english": "wonder"
    },
    {
        "kanji": "仰",
        "onyomi": "ギョウ, コウ",
        "kunyomi": "あお-ぐ, おお-せ, お-っしゃる, おっしゃ-る",
        "english": "face-up"
    },
    {
        "kanji": "凝",
        "onyomi": "ギョウ",
        "kunyomi": "こ-る, こ-らす, こご-らす, こご-らせる, こご-る",
        "english": "congeal"
    },
    {
        "kanji": "尭",
        "onyomi": "ギョウ",
        "kunyomi": "たか-い",
        "english": "high"
    },
    {
        "kanji": "暁",
        "onyomi": "ギョウ, キョウ",
        "kunyomi": "あかつき, さと-る",
        "english": "daybreak"
    },
    {
        "kanji": "業",
        "onyomi": "ギョウ, ゴウ",
        "kunyomi": "わざ",
        "english": "business"
    },
    {
        "kanji": "局",
        "onyomi": "キョク",
        "kunyomi": "つぼね",
        "english": "bureau"
    },
    {
        "kanji": "曲",
        "onyomi": "キョク",
        "kunyomi": "ま-がる, ま-げる, くま",
        "english": "bend"
    },
    {
        "kanji": "極",
        "onyomi": "キョク, ゴク",
        "kunyomi": "きわ-める, きわ-まる, きわ-まり, きわ-み, き-める, -ぎ-め, き-まる",
        "english": "poles"
    },
    {
        "kanji": "玉",
        "onyomi": "ギョク",
        "kunyomi": "たま, たま-, -だま",
        "english": "jewel"
    },
    {
        "kanji": "桐",
        "onyomi": "トウ, ドウ",
        "kunyomi": "きり",
        "english": "paulownia"
    },
    {
        "kanji": "粁",
        "onyomi": "",
        "kunyomi": "キロメートル",
        "english": "kilometer"
    },
    {
        "kanji": "僅",
        "onyomi": "キン, ゴン",
        "kunyomi": "わず-か",
        "english": "a wee bit"
    },
    {
        "kanji": "勤",
        "onyomi": "キン, ゴン",
        "kunyomi": "つと-める, -づと-め, つと-まる, いそ-しむ",
        "english": "diligence"
    },
    {
        "kanji": "均",
        "onyomi": "キン",
        "kunyomi": "なら-す",
        "english": "level"
    },
    {
        "kanji": "巾",
        "onyomi": "キン, フク",
        "kunyomi": "おお-い, ちきり, きれ",
        "english": "towel"
    },
    {
        "kanji": "錦",
        "onyomi": "キン",
        "kunyomi": "にしき",
        "english": "brocade"
    },
    {
        "kanji": "斤",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "axe"
    },
    {
        "kanji": "欣",
        "onyomi": "キン, ゴン, コン",
        "kunyomi": "よろこ-ぶ, よろこ-び",
        "english": "take pleasure in"
    },
    {
        "kanji": "欽",
        "onyomi": "キン, コン",
        "kunyomi": "つつし-む",
        "english": "respect"
    },
    {
        "kanji": "琴",
        "onyomi": "キン, ゴン",
        "kunyomi": "こと",
        "english": "harp"
    },
    {
        "kanji": "禁",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "prohibition"
    },
    {
        "kanji": "禽",
        "onyomi": "キン",
        "kunyomi": "とり, とりこ",
        "english": "bird"
    },
    {
        "kanji": "筋",
        "onyomi": "キン",
        "kunyomi": "すじ",
        "english": "muscle"
    },
    {
        "kanji": "緊",
        "onyomi": "キン",
        "kunyomi": "し-める, し-まる",
        "english": "tense"
    },
    {
        "kanji": "芹",
        "onyomi": "キン",
        "kunyomi": "せり",
        "english": "parsley"
    },
    {
        "kanji": "菌",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "germ"
    },
    {
        "kanji": "衿",
        "onyomi": "キン, コン",
        "kunyomi": "えり",
        "english": "neck"
    },
    {
        "kanji": "襟",
        "onyomi": "キン",
        "kunyomi": "えり",
        "english": "collar"
    },
    {
        "kanji": "謹",
        "onyomi": "キン",
        "kunyomi": "つつし-む",
        "english": "discreet"
    },
    {
        "kanji": "近",
        "onyomi": "キン, コン",
        "kunyomi": "ちか-い",
        "english": "near"
    },
    {
        "kanji": "金",
        "onyomi": "キン, コン, ゴン",
        "kunyomi": "かね, かな-, -がね",
        "english": "gold"
    },
    {
        "kanji": "吟",
        "onyomi": "ギン",
        "kunyomi": "",
        "english": "versify"
    },
    {
        "kanji": "銀",
        "onyomi": "ギン",
        "kunyomi": "しろがね",
        "english": "silver"
    },
    {
        "kanji": "九",
        "onyomi": "キュウ, ク",
        "kunyomi": "ここの, ここの-つ",
        "english": "nine"
    },
    {
        "kanji": "倶",
        "onyomi": "グ, ク",
        "kunyomi": "とも-に",
        "english": "both"
    },
    {
        "kanji": "句",
        "onyomi": "ク",
        "kunyomi": "",
        "english": "phrase"
    },
    {
        "kanji": "区",
        "onyomi": "ク, オウ, コウ",
        "kunyomi": "",
        "english": "ward"
    },
    {
        "kanji": "狗",
        "onyomi": "ク, コウ",
        "kunyomi": "いぬ",
        "english": "puppy"
    },
    {
        "kanji": "玖",
        "onyomi": "キュウ, ク",
        "kunyomi": "",
        "english": "beautiful black jewel"
    },
    {
        "kanji": "矩",
        "onyomi": "ク",
        "kunyomi": "かね, かねざし, さしがね",
        "english": "ruler"
    },
    {
        "kanji": "苦",
        "onyomi": "ク",
        "kunyomi": "くる-しい, -ぐる-しい, くる-しむ, くる-しめる, にが-い, にが-る",
        "english": "suffering"
    },
    {
        "kanji": "躯",
        "onyomi": "ク",
        "kunyomi": "むくろ, からだ",
        "english": "body"
    },
    {
        "kanji": "駆",
        "onyomi": "ク",
        "kunyomi": "か-ける, か-る",
        "english": "drive"
    },
    {
        "kanji": "駈",
        "onyomi": "ク",
        "kunyomi": "か-ける, か-る",
        "english": "run"
    },
    {
        "kanji": "駒",
        "onyomi": "ク",
        "kunyomi": "こま",
        "english": "pony"
    },
    {
        "kanji": "具",
        "onyomi": "グ",
        "kunyomi": "そな-える, つぶさ-に",
        "english": "tool"
    },
    {
        "kanji": "愚",
        "onyomi": "グ",
        "kunyomi": "おろ-か",
        "english": "foolish"
    },
    {
        "kanji": "虞",
        "onyomi": "グ",
        "kunyomi": "おそれ, おもんぱか-る, はか-る, うれ-える, あざむ-く, あやま-る, のぞ-む, たの-しむ",
        "english": "fear"
    },
    {
        "kanji": "喰",
        "onyomi": "",
        "kunyomi": "く-う, く-らう",
        "english": "eat"
    },
    {
        "kanji": "空",
        "onyomi": "クウ",
        "kunyomi": "そら, あ-く, あ-き, あ-ける, から, す-く, す-かす, むな-しい",
        "english": "empty"
    },
    {
        "kanji": "偶",
        "onyomi": "グウ",
        "kunyomi": "たま",
        "english": "accidentally"
    },
    {
        "kanji": "寓",
        "onyomi": "グウ, グ, ドウ",
        "kunyomi": "ぐう-する, かこつ-ける, よ-せる, よ-る, かりずまい",
        "english": "temporary abode"
    },
    {
        "kanji": "遇",
        "onyomi": "グウ",
        "kunyomi": "あ-う",
        "english": "meet"
    },
    {
        "kanji": "隅",
        "onyomi": "グウ",
        "kunyomi": "すみ",
        "english": "corner"
    },
    {
        "kanji": "串",
        "onyomi": "カン, ケン, セン",
        "kunyomi": "くし, つらぬ-く",
        "english": "spit"
    },
    {
        "kanji": "櫛",
        "onyomi": "シツ",
        "kunyomi": "くし, くしけず-る",
        "english": "comb"
    },
    {
        "kanji": "釧",
        "onyomi": "セン",
        "kunyomi": "くしろ, うでわ",
        "english": "bracelet"
    },
    {
        "kanji": "屑",
        "onyomi": "セツ",
        "kunyomi": "くず, いさぎよ-い",
        "english": "rubbish"
    },
    {
        "kanji": "屈",
        "onyomi": "クツ",
        "kunyomi": "かが-む, かが-める",
        "english": "yield"
    },
    {
        "kanji": "掘",
        "onyomi": "クツ",
        "kunyomi": "ほ-る",
        "english": "dig"
    },
    {
        "kanji": "窟",
        "onyomi": "クツ, コツ",
        "kunyomi": "いわや, いはや, あな",
        "english": "cavern"
    },
    {
        "kanji": "沓",
        "onyomi": "トウ",
        "kunyomi": "くつ",
        "english": "shoes"
    },
    {
        "kanji": "靴",
        "onyomi": "カ",
        "kunyomi": "くつ",
        "english": "shoes"
    },
    {
        "kanji": "轡",
        "onyomi": "ヒ",
        "kunyomi": "くつわ, たづな",
        "english": "bit (horse)"
    },
    {
        "kanji": "窪",
        "onyomi": "ワ, ア",
        "kunyomi": "くぼ-む, くぼ-み, くぼ-まる, くぼ",
        "english": "depression"
    },
    {
        "kanji": "熊",
        "onyomi": "ユウ",
        "kunyomi": "くま",
        "english": "bear"
    },
    {
        "kanji": "隈",
        "onyomi": "ワイ, エ",
        "kunyomi": "くま, すみ",
        "english": "corner"
    },
    {
        "kanji": "粂",
        "onyomi": "",
        "kunyomi": "くめ",
        "english": "used in proper names"
    },
    {
        "kanji": "栗",
        "onyomi": "リツ, リ",
        "kunyomi": "くり, おののく",
        "english": "chestnut"
    },
    {
        "kanji": "繰",
        "onyomi": "ソウ",
        "kunyomi": "く-る",
        "english": "winding"
    },
    {
        "kanji": "桑",
        "onyomi": "ソウ",
        "kunyomi": "くわ",
        "english": "mulberry"
    },
    {
        "kanji": "鍬",
        "onyomi": "ショウ, シュウ",
        "kunyomi": "くわ, すき",
        "english": "hoe with long blade at acute angle"
    },
    {
        "kanji": "勲",
        "onyomi": "クン",
        "kunyomi": "いさお",
        "english": "meritorious deed"
    },
    {
        "kanji": "君",
        "onyomi": "クン",
        "kunyomi": "きみ, -ぎみ",
        "english": "mister"
    },
    {
        "kanji": "薫",
        "onyomi": "クン",
        "kunyomi": "かお-る",
        "english": "send forth fragrance"
    },
    {
        "kanji": "訓",
        "onyomi": "クン, キン",
        "kunyomi": "おし-える, よ-む, くん-ずる",
        "english": "instruction"
    },
    {
        "kanji": "群",
        "onyomi": "グン",
        "kunyomi": "む-れる, む-れ, むら, むら-がる",
        "english": "flock"
    },
    {
        "kanji": "軍",
        "onyomi": "グン",
        "kunyomi": "いくさ",
        "english": "army"
    },
    {
        "kanji": "郡",
        "onyomi": "グン",
        "kunyomi": "こおり",
        "english": "county"
    },
    {
        "kanji": "卦",
        "onyomi": "カ, カイ, ケ",
        "kunyomi": "うらかた",
        "english": "a divination sign"
    },
    {
        "kanji": "袈",
        "onyomi": "ケ, カ",
        "kunyomi": "",
        "english": "a coarse camlet"
    },
    {
        "kanji": "祁",
        "onyomi": "キ, ケ",
        "kunyomi": "",
        "english": "intense"
    },
    {
        "kanji": "係",
        "onyomi": "ケイ",
        "kunyomi": "かか-る, かかり, -がかり, かか-わる",
        "english": "person in charge"
    },
    {
        "kanji": "傾",
        "onyomi": "ケイ",
        "kunyomi": "かたむ-く, かたむ-ける, かたぶ-く, かた-げる, かし-げる",
        "english": "lean"
    },
    {
        "kanji": "刑",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "punish"
    },
    {
        "kanji": "兄",
        "onyomi": "ケイ, キョウ",
        "kunyomi": "あに",
        "english": "elder brother"
    },
    {
        "kanji": "啓",
        "onyomi": "ケイ",
        "kunyomi": "ひら-く, さと-す",
        "english": "disclose"
    },
    {
        "kanji": "圭",
        "onyomi": "ケイ, ケ",
        "kunyomi": "",
        "english": "square jewel"
    },
    {
        "kanji": "珪",
        "onyomi": "ケイ",
        "kunyomi": "たま",
        "english": "jade scepter or tablet (authority symbol)"
    },
    {
        "kanji": "型",
        "onyomi": "ケイ",
        "kunyomi": "かた, -がた",
        "english": "mould"
    },
    {
        "kanji": "契",
        "onyomi": "ケイ",
        "kunyomi": "ちぎ-る",
        "english": "pledge"
    },
    {
        "kanji": "形",
        "onyomi": "ケイ, ギョウ",
        "kunyomi": "かた, -がた, かたち, なり",
        "english": "shape"
    },
    {
        "kanji": "径",
        "onyomi": "ケイ",
        "kunyomi": "みち, こみち, さしわたし, ただちに",
        "english": "diameter"
    },
    {
        "kanji": "恵",
        "onyomi": "ケイ, エ",
        "kunyomi": "めぐ-む, めぐ-み",
        "english": "favor"
    },
    {
        "kanji": "慶",
        "onyomi": "ケイ",
        "kunyomi": "よろこ-び",
        "english": "jubilation"
    },
    {
        "kanji": "慧",
        "onyomi": "ケイ, エ",
        "kunyomi": "さとい",
        "english": "wise"
    },
    {
        "kanji": "憩",
        "onyomi": "ケイ",
        "kunyomi": "いこ-い, いこ-う",
        "english": "recess"
    },
    {
        "kanji": "掲",
        "onyomi": "ケイ",
        "kunyomi": "かか-げる",
        "english": "put up (a notice)"
    },
    {
        "kanji": "携",
        "onyomi": "ケイ",
        "kunyomi": "たずさ-える, たずさ-わる",
        "english": "portable"
    },
    {
        "kanji": "敬",
        "onyomi": "ケイ, キョウ",
        "kunyomi": "うやま-う",
        "english": "awe"
    },
    {
        "kanji": "景",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "scenery"
    },
    {
        "kanji": "桂",
        "onyomi": "ケイ",
        "kunyomi": "かつら",
        "english": "Japanese Judas-tree"
    },
    {
        "kanji": "渓",
        "onyomi": "ケイ",
        "kunyomi": "たに, たにがわ",
        "english": "mountain stream"
    },
    {
        "kanji": "畦",
        "onyomi": "ケイ",
        "kunyomi": "あぜ, うね",
        "english": "rice paddy ridge"
    },
    {
        "kanji": "稽",
        "onyomi": "ケイ",
        "kunyomi": "かんが-える, とど-める",
        "english": "think"
    },
    {
        "kanji": "系",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "lineage"
    },
    {
        "kanji": "経",
        "onyomi": "ケイ, キョウ, キン",
        "kunyomi": "へ-る, た-つ, たていと, はか-る, のり",
        "english": "sutra"
    },
    {
        "kanji": "継",
        "onyomi": "ケイ",
        "kunyomi": "つ-ぐ, まま-",
        "english": "inherit"
    },
    {
        "kanji": "繋",
        "onyomi": "ケイ",
        "kunyomi": "つな-ぐ, かか-る, か-ける",
        "english": "tie"
    },
    {
        "kanji": "罫",
        "onyomi": "ケイ, カイ, ケ",
        "kunyomi": "",
        "english": "ruled line"
    },
    {
        "kanji": "茎",
        "onyomi": "ケイ, キョウ",
        "kunyomi": "くき",
        "english": "stalk"
    },
    {
        "kanji": "荊",
        "onyomi": "ケイ",
        "kunyomi": "いばら",
        "english": "thorn"
    },
    {
        "kanji": "蛍",
        "onyomi": "ケイ",
        "kunyomi": "ほたる",
        "english": "lightning-bug"
    },
    {
        "kanji": "計",
        "onyomi": "ケイ",
        "kunyomi": "はか-る, はか-らう",
        "english": "plot"
    },
    {
        "kanji": "詣",
        "onyomi": "ケイ, ゲイ",
        "kunyomi": "けい-する, まい-る, いた-る, もう-でる",
        "english": "visit a temple"
    },
    {
        "kanji": "警",
        "onyomi": "ケイ",
        "kunyomi": "いまし-める",
        "english": "admonish"
    },
    {
        "kanji": "軽",
        "onyomi": "ケイ, キョウ, キン",
        "kunyomi": "かる-い, かろ-やか, かろ-んじる",
        "english": "lightly"
    },
    {
        "kanji": "頚",
        "onyomi": "ケイ",
        "kunyomi": "くび",
        "english": "neck"
    },
    {
        "kanji": "鶏",
        "onyomi": "ケイ",
        "kunyomi": "にわとり, とり",
        "english": "chicken"
    },
    {
        "kanji": "芸",
        "onyomi": "ゲイ, ウン",
        "kunyomi": "う-える, のり, わざ",
        "english": "technique"
    },
    {
        "kanji": "迎",
        "onyomi": "ゲイ",
        "kunyomi": "むか-える",
        "english": "welcome"
    },
    {
        "kanji": "鯨",
        "onyomi": "ゲイ",
        "kunyomi": "くじら",
        "english": "whale"
    },
    {
        "kanji": "劇",
        "onyomi": "ゲキ",
        "kunyomi": "",
        "english": "drama"
    },
    {
        "kanji": "戟",
        "onyomi": "ゲキ",
        "kunyomi": "ほこ",
        "english": "halbert"
    },
    {
        "kanji": "撃",
        "onyomi": "ゲキ",
        "kunyomi": "う-つ",
        "english": "beat"
    },
    {
        "kanji": "激",
        "onyomi": "ゲキ",
        "kunyomi": "はげ-しい",
        "english": "violent"
    },
    {
        "kanji": "隙",
        "onyomi": "ゲキ, キャク, ケキ",
        "kunyomi": "すき, す-く, す-かす, ひま",
        "english": "crevice"
    },
    {
        "kanji": "桁",
        "onyomi": "コウ",
        "kunyomi": "けた",
        "english": "beam"
    },
    {
        "kanji": "傑",
        "onyomi": "ケツ",
        "kunyomi": "すぐ-れる",
        "english": "greatness"
    },
    {
        "kanji": "欠",
        "onyomi": "ケツ, ケン",
        "kunyomi": "か-ける, か-く",
        "english": "lack"
    },
    {
        "kanji": "決",
        "onyomi": "ケツ",
        "kunyomi": "き-める, -ぎ-め, き-まる, さ-く",
        "english": "decide"
    },
    {
        "kanji": "潔",
        "onyomi": "ケツ",
        "kunyomi": "いさぎよ-い",
        "english": "undefiled"
    },
    {
        "kanji": "穴",
        "onyomi": "ケツ",
        "kunyomi": "あな",
        "english": "hole"
    },
    {
        "kanji": "結",
        "onyomi": "ケツ, ケチ",
        "kunyomi": "むす-ぶ, ゆ-う, ゆ-わえる",
        "english": "tie"
    },
    {
        "kanji": "血",
        "onyomi": "ケツ",
        "kunyomi": "ち",
        "english": "blood"
    },
    {
        "kanji": "訣",
        "onyomi": "ケツ",
        "kunyomi": "わかれ, わかれ-る",
        "english": "separation"
    },
    {
        "kanji": "月",
        "onyomi": "ゲツ, ガツ",
        "kunyomi": "つき",
        "english": "month"
    },
    {
        "kanji": "件",
        "onyomi": "ケン",
        "kunyomi": "くだん",
        "english": "affair"
    },
    {
        "kanji": "倹",
        "onyomi": "ケン",
        "kunyomi": "つま-しい, つづまやか",
        "english": "frugal"
    },
    {
        "kanji": "倦",
        "onyomi": "ケン",
        "kunyomi": "あき-る, あぐ-む, あぐ-ねる, う-む, つか-れる",
        "english": "lose interest in"
    },
    {
        "kanji": "健",
        "onyomi": "ケン",
        "kunyomi": "すこ-やか",
        "english": "healthy"
    },
    {
        "kanji": "兼",
        "onyomi": "ケン",
        "kunyomi": "か-ねる, -か-ねる",
        "english": "concurrently"
    },
    {
        "kanji": "券",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "ticket"
    },
    {
        "kanji": "剣",
        "onyomi": "ケン",
        "kunyomi": "つるぎ",
        "english": "sabre"
    },
    {
        "kanji": "喧",
        "onyomi": "ケン",
        "kunyomi": "やかま-しい, かまびす-しい",
        "english": "noisy"
    },
    {
        "kanji": "圏",
        "onyomi": "ケン",
        "kunyomi": "かこ-い",
        "english": "sphere"
    },
    {
        "kanji": "堅",
        "onyomi": "ケン",
        "kunyomi": "かた-い, -がた-い",
        "english": "strict"
    },
    {
        "kanji": "嫌",
        "onyomi": "ケン, ゲン",
        "kunyomi": "きら-う, きら-い, いや",
        "english": "dislike"
    },
    {
        "kanji": "建",
        "onyomi": "ケン, コン",
        "kunyomi": "た-てる, た-て, -だ-て, た-つ",
        "english": "build"
    },
    {
        "kanji": "憲",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "constitution"
    },
    {
        "kanji": "懸",
        "onyomi": "ケン, ケ",
        "kunyomi": "か-ける, か-かる",
        "english": "state of suspension"
    },
    {
        "kanji": "拳",
        "onyomi": "ケン, ゲン",
        "kunyomi": "こぶし",
        "english": "fist"
    },
    {
        "kanji": "捲",
        "onyomi": "ケン",
        "kunyomi": "ま-く, ま-くる, まく-る, めく-る, まく-れる",
        "english": "roll"
    },
    {
        "kanji": "検",
        "onyomi": "ケン",
        "kunyomi": "しら-べる",
        "english": "examination"
    },
    {
        "kanji": "権",
        "onyomi": "ケン, ゴン",
        "kunyomi": "おもり, かり, はか-る",
        "english": "authority"
    },
    {
        "kanji": "牽",
        "onyomi": "ケン",
        "kunyomi": "ひ-く",
        "english": "pull"
    },
    {
        "kanji": "犬",
        "onyomi": "ケン",
        "kunyomi": "いぬ, いぬ-",
        "english": "dog"
    },
    {
        "kanji": "献",
        "onyomi": "ケン, コン",
        "kunyomi": "たてまつ-る",
        "english": "offering"
    },
    {
        "kanji": "研",
        "onyomi": "ケン",
        "kunyomi": "と-ぐ",
        "english": "polish"
    },
    {
        "kanji": "硯",
        "onyomi": "ケン, ゲン",
        "kunyomi": "すずり",
        "english": "inkstone"
    },
    {
        "kanji": "絹",
        "onyomi": "ケン",
        "kunyomi": "きぬ",
        "english": "silk"
    },
    {
        "kanji": "県",
        "onyomi": "ケン",
        "kunyomi": "か-ける",
        "english": "prefecture"
    },
    {
        "kanji": "肩",
        "onyomi": "ケン",
        "kunyomi": "かた",
        "english": "shoulder"
    },
    {
        "kanji": "見",
        "onyomi": "ケン",
        "kunyomi": "み-る, み-える, み-せる",
        "english": "see"
    },
    {
        "kanji": "謙",
        "onyomi": "ケン",
        "kunyomi": "へりくだ-る",
        "english": "self-effacing"
    },
    {
        "kanji": "賢",
        "onyomi": "ケン",
        "kunyomi": "かしこ-い",
        "english": "intelligent"
    },
    {
        "kanji": "軒",
        "onyomi": "ケン",
        "kunyomi": "のき",
        "english": "flats"
    },
    {
        "kanji": "遣",
        "onyomi": "ケン",
        "kunyomi": "つか-う, -つか-い, -づか-い, つか-わす, や-る",
        "english": "dispatch"
    },
    {
        "kanji": "鍵",
        "onyomi": "ケン",
        "kunyomi": "かぎ",
        "english": "key"
    },
    {
        "kanji": "険",
        "onyomi": "ケン",
        "kunyomi": "けわ-しい",
        "english": "precipitous"
    },
    {
        "kanji": "顕",
        "onyomi": "ケン",
        "kunyomi": "あきらか, あらわ-れる",
        "english": "appear"
    },
    {
        "kanji": "験",
        "onyomi": "ケン, ゲン",
        "kunyomi": "あかし, しるし, ため-す, ためし",
        "english": "verification"
    },
    {
        "kanji": "鹸",
        "onyomi": "ケン, カン, セン",
        "kunyomi": "あ-く",
        "english": "saltiness"
    },
    {
        "kanji": "元",
        "onyomi": "ゲン, ガン",
        "kunyomi": "もと",
        "english": "beginning"
    },
    {
        "kanji": "原",
        "onyomi": "ゲン",
        "kunyomi": "はら",
        "english": "meadow"
    },
    {
        "kanji": "厳",
        "onyomi": "ゲン, ゴン",
        "kunyomi": "おごそ-か, きび-しい, いか-めしい, いつくし",
        "english": "stern"
    },
    {
        "kanji": "幻",
        "onyomi": "ゲン",
        "kunyomi": "まぼろし",
        "english": "phantasm"
    },
    {
        "kanji": "弦",
        "onyomi": "ゲン",
        "kunyomi": "つる",
        "english": "bowstring"
    },
    {
        "kanji": "減",
        "onyomi": "ゲン",
        "kunyomi": "へ-る, へ-らす",
        "english": "dwindle"
    },
    {
        "kanji": "源",
        "onyomi": "ゲン",
        "kunyomi": "みなもと",
        "english": "source"
    },
    {
        "kanji": "玄",
        "onyomi": "ゲン",
        "kunyomi": "くろ, くろ-い",
        "english": "mysterious"
    },
    {
        "kanji": "現",
        "onyomi": "ゲン",
        "kunyomi": "あらわ-れる, あらわ-す, うつつ, うつ-つ",
        "english": "present"
    },
    {
        "kanji": "絃",
        "onyomi": "ゲン",
        "kunyomi": "いと",
        "english": "string"
    },
    {
        "kanji": "舷",
        "onyomi": "ゲン",
        "kunyomi": "ふなばた, ふなべり",
        "english": "gunwale"
    },
    {
        "kanji": "言",
        "onyomi": "ゲン, ゴン",
        "kunyomi": "い-う, こと",
        "english": "say"
    },
    {
        "kanji": "諺",
        "onyomi": "ゲン",
        "kunyomi": "ことわざ",
        "english": "proverb"
    },
    {
        "kanji": "限",
        "onyomi": "ゲン",
        "kunyomi": "かぎ-る, かぎ-り, -かぎ-り",
        "english": "limit"
    },
    {
        "kanji": "乎",
        "onyomi": "コ, オ",
        "kunyomi": "か, ああ, かな, や, よ, を",
        "english": "question mark"
    },
    {
        "kanji": "個",
        "onyomi": "コ, カ",
        "kunyomi": "",
        "english": "individual"
    },
    {
        "kanji": "古",
        "onyomi": "コ",
        "kunyomi": "ふる-い, ふる-, -ふる-す",
        "english": "old"
    },
    {
        "kanji": "呼",
        "onyomi": "コ",
        "kunyomi": "よ-ぶ",
        "english": "call"
    },
    {
        "kanji": "固",
        "onyomi": "コ",
        "kunyomi": "かた-める, かた-まる, かた-まり, かた-い",
        "english": "harden"
    },
    {
        "kanji": "姑",
        "onyomi": "コ",
        "kunyomi": "しゅうとめ, しゅうと, おば, しばらく",
        "english": "mother-in-law"
    },
    {
        "kanji": "孤",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "orphan"
    },
    {
        "kanji": "己",
        "onyomi": "コ, キ",
        "kunyomi": "おのれ, つちのと, な",
        "english": "self"
    },
    {
        "kanji": "庫",
        "onyomi": "コ, ク",
        "kunyomi": "くら",
        "english": "warehouse"
    },
    {
        "kanji": "弧",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "arc"
    },
    {
        "kanji": "戸",
        "onyomi": "コ",
        "kunyomi": "と",
        "english": "door"
    },
    {
        "kanji": "故",
        "onyomi": "コ",
        "kunyomi": "ゆえ, ふる-い, もと",
        "english": "happenstance"
    },
    {
        "kanji": "枯",
        "onyomi": "コ",
        "kunyomi": "か-れる, か-らす",
        "english": "wither"
    },
    {
        "kanji": "湖",
        "onyomi": "コ",
        "kunyomi": "みずうみ",
        "english": "lake"
    },
    {
        "kanji": "狐",
        "onyomi": "コ",
        "kunyomi": "きつね",
        "english": "fox"
    },
    {
        "kanji": "糊",
        "onyomi": "コ, ゴ, コツ",
        "kunyomi": "のり",
        "english": "paste"
    },
    {
        "kanji": "袴",
        "onyomi": "コ, ク",
        "kunyomi": "はかま, ずぼん",
        "english": "men's formal divided skirt"
    },
    {
        "kanji": "股",
        "onyomi": "コ",
        "kunyomi": "また, もも",
        "english": "thigh"
    },
    {
        "kanji": "胡",
        "onyomi": "ウ, コ, ゴ",
        "kunyomi": "なんぞ",
        "english": "barbarian"
    },
    {
        "kanji": "菰",
        "onyomi": "コ",
        "kunyomi": "こも, まこも",
        "english": "reed used for matting"
    },
    {
        "kanji": "虎",
        "onyomi": "コ",
        "kunyomi": "とら",
        "english": "tiger"
    },
    {
        "kanji": "誇",
        "onyomi": "コ",
        "kunyomi": "ほこ-る",
        "english": "boast"
    },
    {
        "kanji": "跨",
        "onyomi": "コ, カ",
        "kunyomi": "また-がる, またが-る, また-ぐ",
        "english": "be"
    },
    {
        "kanji": "鈷",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "cobalt"
    },
    {
        "kanji": "雇",
        "onyomi": "コ",
        "kunyomi": "やと-う",
        "english": "employ"
    },
    {
        "kanji": "顧",
        "onyomi": "コ",
        "kunyomi": "かえり-みる",
        "english": "look back"
    },
    {
        "kanji": "鼓",
        "onyomi": "コ",
        "kunyomi": "つづみ",
        "english": "drum"
    },
    {
        "kanji": "五",
        "onyomi": "ゴ",
        "kunyomi": "いつ, いつ-つ",
        "english": "five"
    },
    {
        "kanji": "互",
        "onyomi": "ゴ",
        "kunyomi": "たが-い, かたみ-に",
        "english": "mutually"
    },
    {
        "kanji": "伍",
        "onyomi": "ゴ",
        "kunyomi": "いつつ",
        "english": "five"
    },
    {
        "kanji": "午",
        "onyomi": "ゴ",
        "kunyomi": "うま",
        "english": "noon"
    },
    {
        "kanji": "呉",
        "onyomi": "ゴ",
        "kunyomi": "く-れる, くれ",
        "english": "give"
    },
    {
        "kanji": "吾",
        "onyomi": "ゴ",
        "kunyomi": "われ, わが-, あ-",
        "english": "I"
    },
    {
        "kanji": "娯",
        "onyomi": "ゴ",
        "kunyomi": "",
        "english": "recreation"
    },
    {
        "kanji": "後",
        "onyomi": "ゴ, コウ",
        "kunyomi": "のち, うし-ろ, うしろ, あと, おく-れる",
        "english": "behind"
    },
    {
        "kanji": "御",
        "onyomi": "ギョ, ゴ",
        "kunyomi": "おん-, お-, み-",
        "english": "honorable"
    },
    {
        "kanji": "悟",
        "onyomi": "ゴ",
        "kunyomi": "さと-る",
        "english": "enlightenment"
    },
    {
        "kanji": "梧",
        "onyomi": "ゴ",
        "kunyomi": "あおぎり",
        "english": "Chinese parasol tree"
    },
    {
        "kanji": "檎",
        "onyomi": "キン, ゴン, ゴ",
        "kunyomi": "",
        "english": "apple"
    },
    {
        "kanji": "瑚",
        "onyomi": "コ, ゴ",
        "kunyomi": "",
        "english": "ancestral offering receptacle"
    },
    {
        "kanji": "碁",
        "onyomi": "ゴ",
        "kunyomi": "",
        "english": "Go"
    },
    {
        "kanji": "語",
        "onyomi": "ゴ",
        "kunyomi": "かた-る, かた-らう",
        "english": "word"
    },
    {
        "kanji": "誤",
        "onyomi": "ゴ",
        "kunyomi": "あやま-る, -あやま-る",
        "english": "mistake"
    },
    {
        "kanji": "護",
        "onyomi": "ゴ",
        "kunyomi": "まも-る",
        "english": "safeguard"
    },
    {
        "kanji": "醐",
        "onyomi": "ゴ, コ",
        "kunyomi": "",
        "english": "boiled butter"
    },
    {
        "kanji": "乞",
        "onyomi": "コツ, キツ, キ, キケ, コチ",
        "kunyomi": "こ-う",
        "english": "beg"
    },
    {
        "kanji": "鯉",
        "onyomi": "リ",
        "kunyomi": "こい",
        "english": "carp"
    },
    {
        "kanji": "交",
        "onyomi": "コウ",
        "kunyomi": "まじ-わる, まじ-える, ま-じる, まじ-る, ま-ざる, ま-ぜる, -か-う, か-わす, かわ-す, こもごも",
        "english": "mingle"
    },
    {
        "kanji": "佼",
        "onyomi": "キョウ, コウ",
        "kunyomi": "こう-す, うつく-しい",
        "english": "beautiful"
    },
    {
        "kanji": "侯",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "marquis"
    },
    {
        "kanji": "候",
        "onyomi": "コウ",
        "kunyomi": "そうろう",
        "english": "climate"
    },
    {
        "kanji": "倖",
        "onyomi": "コウ",
        "kunyomi": "しあわ-せ, さいわ-い",
        "english": "happiness"
    },
    {
        "kanji": "光",
        "onyomi": "コウ",
        "kunyomi": "ひか-る, ひかり",
        "english": "ray"
    },
    {
        "kanji": "公",
        "onyomi": "コウ, ク",
        "kunyomi": "おおやけ",
        "english": "public"
    },
    {
        "kanji": "功",
        "onyomi": "コウ, ク",
        "kunyomi": "いさお",
        "english": "achievement"
    },
    {
        "kanji": "効",
        "onyomi": "コウ",
        "kunyomi": "き-く, ききめ, なら-う",
        "english": "merit"
    },
    {
        "kanji": "勾",
        "onyomi": "コウ, ク",
        "kunyomi": "かぎ, ま-がる",
        "english": "be bent"
    },
    {
        "kanji": "厚",
        "onyomi": "コウ",
        "kunyomi": "あつ-い, あか",
        "english": "thick"
    },
    {
        "kanji": "口",
        "onyomi": "コウ, ク",
        "kunyomi": "くち",
        "english": "mouth"
    },
    {
        "kanji": "向",
        "onyomi": "コウ",
        "kunyomi": "む-く, む-い, -む-き, む-ける, -む-け, む-かう, む-かい, む-こう, む-こう-, むこ, むか-い",
        "english": "yonder"
    },
    {
        "kanji": "后",
        "onyomi": "コウ, ゴ",
        "kunyomi": "きさき",
        "english": "empress"
    },
    {
        "kanji": "喉",
        "onyomi": "コウ",
        "kunyomi": "のど",
        "english": "throat"
    },
    {
        "kanji": "坑",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "pit"
    },
    {
        "kanji": "垢",
        "onyomi": "コウ, ク",
        "kunyomi": "あか, はじ",
        "english": "dirt"
    },
    {
        "kanji": "好",
        "onyomi": "コウ",
        "kunyomi": "この-む, す-く, よ-い, い-い",
        "english": "fond"
    },
    {
        "kanji": "孔",
        "onyomi": "コウ, ク",
        "kunyomi": "あな",
        "english": "cavity"
    },
    {
        "kanji": "孝",
        "onyomi": "コウ, キョウ",
        "kunyomi": "",
        "english": "filial piety"
    },
    {
        "kanji": "宏",
        "onyomi": "コウ",
        "kunyomi": "ひろ-い",
        "english": "wide"
    },
    {
        "kanji": "工",
        "onyomi": "コウ, ク, グ",
        "kunyomi": "",
        "english": "craft"
    },
    {
        "kanji": "巧",
        "onyomi": "コウ",
        "kunyomi": "たく-み, たく-む, うま-い",
        "english": "adroit"
    },
    {
        "kanji": "巷",
        "onyomi": "コウ",
        "kunyomi": "ちまた",
        "english": "fork in road"
    },
    {
        "kanji": "幸",
        "onyomi": "コウ",
        "kunyomi": "さいわ-い, さち, しあわ-せ",
        "english": "happiness"
    },
    {
        "kanji": "広",
        "onyomi": "コウ",
        "kunyomi": "ひろ-い, ひろ-まる, ひろ-める, ひろ-がる, ひろ-げる",
        "english": "wide"
    },
    {
        "kanji": "庚",
        "onyomi": "コウ",
        "kunyomi": "かのえ",
        "english": "7th"
    },
    {
        "kanji": "康",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "ease"
    },
    {
        "kanji": "弘",
        "onyomi": "コウ, グ",
        "kunyomi": "ひろ-い",
        "english": "vast"
    },
    {
        "kanji": "恒",
        "onyomi": "コウ",
        "kunyomi": "つね, つねに",
        "english": "constancy"
    },
    {
        "kanji": "慌",
        "onyomi": "コウ",
        "kunyomi": "あわ-てる, あわ-ただしい",
        "english": "disconcerted"
    },
    {
        "kanji": "抗",
        "onyomi": "コウ",
        "kunyomi": "あらが-う",
        "english": "confront"
    },
    {
        "kanji": "拘",
        "onyomi": "コウ",
        "kunyomi": "かか-わる",
        "english": "arrest"
    },
    {
        "kanji": "控",
        "onyomi": "コウ",
        "kunyomi": "ひか-える, ひか-え",
        "english": "withdraw"
    },
    {
        "kanji": "攻",
        "onyomi": "コウ",
        "kunyomi": "せ-める",
        "english": "aggression"
    },
    {
        "kanji": "昂",
        "onyomi": "コウ, ゴウ",
        "kunyomi": "あ-がる, たか-い, たか-ぶる",
        "english": "rise"
    },
    {
        "kanji": "晃",
        "onyomi": "コウ",
        "kunyomi": "あきらか",
        "english": "clear"
    },
    {
        "kanji": "更",
        "onyomi": "コウ",
        "kunyomi": "さら, さら-に, ふ-ける, ふ-かす",
        "english": "grow late"
    },
    {
        "kanji": "杭",
        "onyomi": "コウ",
        "kunyomi": "くい",
        "english": "stake"
    },
    {
        "kanji": "校",
        "onyomi": "コウ, キョウ",
        "kunyomi": "",
        "english": "exam"
    },
    {
        "kanji": "梗",
        "onyomi": "コウ, キョウ",
        "kunyomi": "ふさぐ, やまにれ, おおむね",
        "english": "for the most part"
    },
    {
        "kanji": "構",
        "onyomi": "コウ",
        "kunyomi": "かま-える, かま-う",
        "english": "posture"
    },
    {
        "kanji": "江",
        "onyomi": "コウ",
        "kunyomi": "え",
        "english": "creek"
    },
    {
        "kanji": "洪",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "deluge"
    },
    {
        "kanji": "浩",
        "onyomi": "コウ",
        "kunyomi": "おおき-い, ひろ-い",
        "english": "wide expanse"
    },
    {
        "kanji": "港",
        "onyomi": "コウ",
        "kunyomi": "みなと",
        "english": "harbor"
    },
    {
        "kanji": "溝",
        "onyomi": "コウ",
        "kunyomi": "みぞ",
        "english": "gutter"
    },
    {
        "kanji": "甲",
        "onyomi": "コウ, カン",
        "kunyomi": "きのえ",
        "english": "armor"
    },
    {
        "kanji": "皇",
        "onyomi": "コウ, オウ",
        "kunyomi": "",
        "english": "emperor"
    },
    {
        "kanji": "硬",
        "onyomi": "コウ",
        "kunyomi": "かた-い",
        "english": "stiff"
    },
    {
        "kanji": "稿",
        "onyomi": "コウ",
        "kunyomi": "わら, したがき",
        "english": "draft"
    },
    {
        "kanji": "糠",
        "onyomi": "コウ",
        "kunyomi": "ぬか",
        "english": "rice bran"
    },
    {
        "kanji": "紅",
        "onyomi": "コウ, ク",
        "kunyomi": "べに, くれない, あか-い",
        "english": "crimson"
    },
    {
        "kanji": "紘",
        "onyomi": "コウ",
        "kunyomi": "おおづな, つな, つなぐ",
        "english": "large"
    },
    {
        "kanji": "絞",
        "onyomi": "コウ",
        "kunyomi": "しぼ-る, し-める, し-まる",
        "english": "strangle"
    },
    {
        "kanji": "綱",
        "onyomi": "コウ",
        "kunyomi": "つな",
        "english": "hawser"
    },
    {
        "kanji": "耕",
        "onyomi": "コウ",
        "kunyomi": "たがや-す",
        "english": "till"
    },
    {
        "kanji": "考",
        "onyomi": "コウ",
        "kunyomi": "かんが-える, かんが-え",
        "english": "consider"
    },
    {
        "kanji": "肯",
        "onyomi": "コウ",
        "kunyomi": "がえんじ-る",
        "english": "agreement"
    },
    {
        "kanji": "肱",
        "onyomi": "コウ",
        "kunyomi": "かいな, ひじ, まるい",
        "english": "ability"
    },
    {
        "kanji": "腔",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "body cavity"
    },
    {
        "kanji": "膏",
        "onyomi": "コウ",
        "kunyomi": "あぶら",
        "english": "fat"
    },
    {
        "kanji": "航",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "navigate"
    },
    {
        "kanji": "荒",
        "onyomi": "コウ",
        "kunyomi": "あ-らす, あ-れる, あら-い, すさ-ぶ, すさ-む, あ-らし",
        "english": "laid waste"
    },
    {
        "kanji": "行",
        "onyomi": "コウ, ギョウ, アン",
        "kunyomi": "い-く, ゆ-く, -ゆ-き, -ゆき, -い-き, -いき, おこな-う, おこ-なう",
        "english": "going"
    },
    {
        "kanji": "衡",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "equilibrium"
    },
    {
        "kanji": "講",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "lecture"
    },
    {
        "kanji": "貢",
        "onyomi": "コウ, ク",
        "kunyomi": "みつ-ぐ",
        "english": "tribute"
    },
    {
        "kanji": "購",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "subscription"
    },
    {
        "kanji": "郊",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "outskirts"
    },
    {
        "kanji": "酵",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "fermentation"
    },
    {
        "kanji": "鉱",
        "onyomi": "コウ",
        "kunyomi": "あらがね",
        "english": "mineral"
    },
    {
        "kanji": "砿",
        "onyomi": "コウ",
        "kunyomi": "あらがね",
        "english": "ore"
    },
    {
        "kanji": "鋼",
        "onyomi": "コウ",
        "kunyomi": "はがね",
        "english": "steel"
    },
    {
        "kanji": "閤",
        "onyomi": "コウ",
        "kunyomi": "くぐりど",
        "english": "small side gate"
    },
    {
        "kanji": "降",
        "onyomi": "コウ, ゴ",
        "kunyomi": "お-りる, お-ろす, ふ-る, ふ-り, くだ-る, くだ-す",
        "english": "descend"
    },
    {
        "kanji": "項",
        "onyomi": "コウ",
        "kunyomi": "うなじ",
        "english": "paragraph"
    },
    {
        "kanji": "香",
        "onyomi": "コウ, キョウ",
        "kunyomi": "か, かお-り, かお-る",
        "english": "incense"
    },
    {
        "kanji": "高",
        "onyomi": "コウ",
        "kunyomi": "たか-い, たか, -だか, たか-まる, たか-める",
        "english": "tall"
    },
    {
        "kanji": "鴻",
        "onyomi": "コウ, ゴウ",
        "kunyomi": "おおとり, ひしくい, おおがり",
        "english": "large bird"
    },
    {
        "kanji": "剛",
        "onyomi": "ゴウ",
        "kunyomi": "",
        "english": "sturdy"
    },
    {
        "kanji": "劫",
        "onyomi": "コウ, ゴウ, キョウ",
        "kunyomi": "おびや-かす",
        "english": "threat"
    },
    {
        "kanji": "号",
        "onyomi": "ゴウ",
        "kunyomi": "さけ-ぶ, よびな",
        "english": "nickname"
    },
    {
        "kanji": "合",
        "onyomi": "ゴウ, ガッ, カッ",
        "kunyomi": "あ-う, -あ-う, あ-い, あい-, -あ-い, -あい, あ-わす, あ-わせる, -あ-わせる",
        "english": "fit"
    },
    {
        "kanji": "壕",
        "onyomi": "コウ, ゴウ",
        "kunyomi": "ほり",
        "english": "trench"
    },
    {
        "kanji": "拷",
        "onyomi": "ゴウ",
        "kunyomi": "",
        "english": "torture"
    },
    {
        "kanji": "濠",
        "onyomi": "ゴウ, コウ",
        "kunyomi": "ほり",
        "english": "moat"
    },
    {
        "kanji": "豪",
        "onyomi": "ゴウ",
        "kunyomi": "えら-い",
        "english": "overpowering"
    },
    {
        "kanji": "轟",
        "onyomi": "ゴウ, コウ",
        "kunyomi": "とどろ-かす, とどろ-く",
        "english": "roar"
    },
    {
        "kanji": "麹",
        "onyomi": "キク",
        "kunyomi": "こうじ",
        "english": "malt"
    },
    {
        "kanji": "克",
        "onyomi": "コク",
        "kunyomi": "か-つ",
        "english": "overcome"
    },
    {
        "kanji": "刻",
        "onyomi": "コク",
        "kunyomi": "きざ-む, きざ-み",
        "english": "engrave"
    },
    {
        "kanji": "告",
        "onyomi": "コク",
        "kunyomi": "つ-げる",
        "english": "revelation"
    },
    {
        "kanji": "国",
        "onyomi": "コク",
        "kunyomi": "くに",
        "english": "country"
    },
    {
        "kanji": "穀",
        "onyomi": "コク",
        "kunyomi": "",
        "english": "cereals"
    },
    {
        "kanji": "酷",
        "onyomi": "コク",
        "kunyomi": "ひど-い",
        "english": "cruel"
    },
    {
        "kanji": "鵠",
        "onyomi": "コク, コウ",
        "kunyomi": "くぐい, まと",
        "english": "swan"
    },
    {
        "kanji": "黒",
        "onyomi": "コク",
        "kunyomi": "くろ, くろ-ずむ, くろ-い",
        "english": "black"
    },
    {
        "kanji": "獄",
        "onyomi": "ゴク",
        "kunyomi": "",
        "english": "prison"
    },
    {
        "kanji": "漉",
        "onyomi": "ロク",
        "kunyomi": "こ-し, こ-す, す-く",
        "english": "manufacture paper"
    },
    {
        "kanji": "腰",
        "onyomi": "ヨウ",
        "kunyomi": "こし",
        "english": "loins"
    },
    {
        "kanji": "甑",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "こしき",
        "english": "rice-steaming pot"
    },
    {
        "kanji": "忽",
        "onyomi": "コツ",
        "kunyomi": "たちま-ち, ゆるが-せ",
        "english": "in a moment"
    },
    {
        "kanji": "惚",
        "onyomi": "コツ",
        "kunyomi": "ほけ-る, ぼ-ける, ほ-れる",
        "english": "fall in love with"
    },
    {
        "kanji": "骨",
        "onyomi": "コツ",
        "kunyomi": "ほね",
        "english": "skeleton"
    },
    {
        "kanji": "狛",
        "onyomi": "ハク",
        "kunyomi": "こま",
        "english": "archaic part of Korea"
    },
    {
        "kanji": "込",
        "onyomi": "",
        "kunyomi": "-こ-む, こ-む, こ-み, -こ-み, こ-める",
        "english": "crowded"
    },
    {
        "kanji": "此",
        "onyomi": "シ",
        "kunyomi": "これ, この, ここ",
        "english": "this"
    },
    {
        "kanji": "頃",
        "onyomi": "ケイ, キョウ",
        "kunyomi": "ころ, ごろ, しばら-く",
        "english": "time"
    },
    {
        "kanji": "今",
        "onyomi": "コン, キン",
        "kunyomi": "いま",
        "english": "now"
    },
    {
        "kanji": "困",
        "onyomi": "コン",
        "kunyomi": "こま-る",
        "english": "quandary"
    },
    {
        "kanji": "坤",
        "onyomi": "コン",
        "kunyomi": "つち, ひつじさる",
        "english": "divination sign"
    },
    {
        "kanji": "墾",
        "onyomi": "コン",
        "kunyomi": "は-る, ひら-く",
        "english": "ground-breaking"
    },
    {
        "kanji": "婚",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "marriage"
    },
    {
        "kanji": "恨",
        "onyomi": "コン",
        "kunyomi": "うら-む, うら-めしい",
        "english": "regret"
    },
    {
        "kanji": "懇",
        "onyomi": "コン",
        "kunyomi": "ねんご-ろ",
        "english": "sociable"
    },
    {
        "kanji": "昏",
        "onyomi": "コン",
        "kunyomi": "くら-い, くれ",
        "english": "dark"
    },
    {
        "kanji": "昆",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "descendants"
    },
    {
        "kanji": "根",
        "onyomi": "コン",
        "kunyomi": "ね, -ね",
        "english": "root"
    },
    {
        "kanji": "梱",
        "onyomi": "コン",
        "kunyomi": "こう-る, こうり, こり, しきみ",
        "english": "pack"
    },
    {
        "kanji": "混",
        "onyomi": "コン",
        "kunyomi": "ま-じる, -ま-じり, ま-ざる, ま-ぜる, こ-む",
        "english": "mix"
    },
    {
        "kanji": "痕",
        "onyomi": "コン",
        "kunyomi": "あと",
        "english": "mark"
    },
    {
        "kanji": "紺",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "dark blue"
    },
    {
        "kanji": "艮",
        "onyomi": "コン, ゴン",
        "kunyomi": "うしとら",
        "english": "northeast (Oriental zodiac)"
    },
    {
        "kanji": "魂",
        "onyomi": "コン",
        "kunyomi": "たましい, たま",
        "english": "soul"
    },
    {
        "kanji": "些",
        "onyomi": "サ, シャ",
        "kunyomi": "ち-と, ち-っと, いささか",
        "english": "a little bit"
    },
    {
        "kanji": "佐",
        "onyomi": "サ",
        "kunyomi": "",
        "english": "assistant"
    },
    {
        "kanji": "叉",
        "onyomi": "サ, シャ, サイ",
        "kunyomi": "また",
        "english": "fork in road"
    },
    {
        "kanji": "唆",
        "onyomi": "サ",
        "kunyomi": "そそ-る, そそのか-す",
        "english": "tempt"
    },
    {
        "kanji": "嵯",
        "onyomi": "サ, シ",
        "kunyomi": "",
        "english": "steep"
    },
    {
        "kanji": "左",
        "onyomi": "サ, シャ",
        "kunyomi": "ひだり",
        "english": "left"
    },
    {
        "kanji": "差",
        "onyomi": "サ",
        "kunyomi": "さ-す, さ-し",
        "english": "distinction"
    },
    {
        "kanji": "査",
        "onyomi": "サ",
        "kunyomi": "",
        "english": "investigate"
    },
    {
        "kanji": "沙",
        "onyomi": "サ, シャ",
        "kunyomi": "すな, よなげる",
        "english": "sand"
    },
    {
        "kanji": "瑳",
        "onyomi": "サ",
        "kunyomi": "みが-く",
        "english": "polish"
    },
    {
        "kanji": "砂",
        "onyomi": "サ, シャ",
        "kunyomi": "すな",
        "english": "sand"
    },
    {
        "kanji": "詐",
        "onyomi": "サ",
        "kunyomi": "いつわ-る",
        "english": "lie"
    },
    {
        "kanji": "鎖",
        "onyomi": "サ",
        "kunyomi": "くさり, とざ-す",
        "english": "chain"
    },
    {
        "kanji": "裟",
        "onyomi": "サ, シャ",
        "kunyomi": "",
        "english": "Buddhist surplice"
    },
    {
        "kanji": "坐",
        "onyomi": "ザ, サ",
        "kunyomi": "すわ-る, おわす, そぞろに, まします",
        "english": "sit"
    },
    {
        "kanji": "座",
        "onyomi": "ザ",
        "kunyomi": "すわ-る",
        "english": "squat"
    },
    {
        "kanji": "挫",
        "onyomi": "ザ, サ",
        "kunyomi": "くじ-く, くじ-ける",
        "english": "crush"
    },
    {
        "kanji": "債",
        "onyomi": "サイ",
        "kunyomi": "",
        "english": "bond"
    },
    {
        "kanji": "催",
        "onyomi": "サイ",
        "kunyomi": "もよう-す, もよお-す",
        "english": "sponsor"
    },
    {
        "kanji": "再",
        "onyomi": "サイ, サ",
        "kunyomi": "ふたた-び",
        "english": "again"
    },
    {
        "kanji": "最",
        "onyomi": "サイ, シュ",
        "kunyomi": "もっと-も, つま",
        "english": "utmost"
    },
    {
        "kanji": "哉",
        "onyomi": "サイ",
        "kunyomi": "かな, や",
        "english": "how"
    },
    {
        "kanji": "塞",
        "onyomi": "ソク, サイ",
        "kunyomi": "ふさ-ぐ, とりで, み-ちる",
        "english": "close"
    },
    {
        "kanji": "妻",
        "onyomi": "サイ",
        "kunyomi": "つま",
        "english": "wife"
    },
    {
        "kanji": "宰",
        "onyomi": "サイ",
        "kunyomi": "",
        "english": "superintend"
    },
    {
        "kanji": "彩",
        "onyomi": "サイ",
        "kunyomi": "いろど-る",
        "english": "coloring"
    },
    {
        "kanji": "才",
        "onyomi": "サイ",
        "kunyomi": "",
        "english": "genius"
    },
    {
        "kanji": "採",
        "onyomi": "サイ",
        "kunyomi": "と-る",
        "english": "pick"
    },
    {
        "kanji": "栽",
        "onyomi": "サイ",
        "kunyomi": "",
        "english": "plantation"
    },
    {
        "kanji": "歳",
        "onyomi": "サイ, セイ",
        "kunyomi": "とし, とせ, よわい",
        "english": "year-end"
    },
    {
        "kanji": "済",
        "onyomi": "サイ, セイ",
        "kunyomi": "す-む, -ず-み, -ずみ, す-まない, す-ます, -す-ます, すく-う, な-す, わたし, わた-る",
        "english": "settle (debt, etc.)"
    },
    {
        "kanji": "災",
        "onyomi": "サイ",
        "kunyomi": "わざわ-い",
        "english": "disaster"
    },
    {
        "kanji": "采",
        "onyomi": "サイ",
        "kunyomi": "と-る, いろどり",
        "english": "dice"
    },
    {
        "kanji": "犀",
        "onyomi": "サイ, セイ",
        "kunyomi": "",
        "english": "rhinoceros"
    },
    {
        "kanji": "砕",
        "onyomi": "サイ",
        "kunyomi": "くだ-く, くだ-ける",
        "english": "smash"
    },
    {
        "kanji": "砦",
        "onyomi": "サイ",
        "kunyomi": "とりで",
        "english": "fort"
    },
    {
        "kanji": "祭",
        "onyomi": "サイ",
        "kunyomi": "まつ-る, まつ-り, まつり",
        "english": "ritual"
    },
    {
        "kanji": "斎",
        "onyomi": "サイ",
        "kunyomi": "とき, つつし-む, ものいみ, い-む, いわ-う, いつ-く",
        "english": "purification"
    },
    {
        "kanji": "細",
        "onyomi": "サイ",
        "kunyomi": "ほそ-い, ほそ-る, こま-か, こま-かい",
        "english": "dainty"
    },
    {
        "kanji": "菜",
        "onyomi": "サイ",
        "kunyomi": "な",
        "english": "vegetable"
    },
    {
        "kanji": "裁",
        "onyomi": "サイ",
        "kunyomi": "た-つ, さば-く",
        "english": "tailor"
    },
    {
        "kanji": "載",
        "onyomi": "サイ",
        "kunyomi": "の-せる, の-る",
        "english": "ride"
    },
    {
        "kanji": "際",
        "onyomi": "サイ",
        "kunyomi": "きわ, -ぎわ",
        "english": "occasion"
    },
    {
        "kanji": "剤",
        "onyomi": "ザイ, スイ, セイ",
        "kunyomi": "かる, けず-る",
        "english": "dose"
    },
    {
        "kanji": "在",
        "onyomi": "ザイ",
        "kunyomi": "あ-る",
        "english": "exist"
    },
    {
        "kanji": "材",
        "onyomi": "ザイ",
        "kunyomi": "",
        "english": "lumber"
    },
    {
        "kanji": "罪",
        "onyomi": "ザイ",
        "kunyomi": "つみ",
        "english": "guilt"
    },
    {
        "kanji": "財",
        "onyomi": "ザイ, サイ, ゾク",
        "kunyomi": "たから",
        "english": "property"
    },
    {
        "kanji": "冴",
        "onyomi": "ゴ, コ",
        "kunyomi": "さ-える, こお-る, ひ-える",
        "english": "be clear"
    },
    {
        "kanji": "坂",
        "onyomi": "ハン",
        "kunyomi": "さか",
        "english": "slope"
    },
    {
        "kanji": "阪",
        "onyomi": "ハン",
        "kunyomi": "さか",
        "english": "heights"
    },
    {
        "kanji": "堺",
        "onyomi": "カイ",
        "kunyomi": "さかい",
        "english": "world"
    },
    {
        "kanji": "榊",
        "onyomi": "",
        "kunyomi": "さかき",
        "english": "sacred Shinto tree"
    },
    {
        "kanji": "肴",
        "onyomi": "コウ",
        "kunyomi": "さかな",
        "english": "accompaniment for drinks"
    },
    {
        "kanji": "咲",
        "onyomi": "ショウ",
        "kunyomi": "さ-く, -ざき",
        "english": "blossom"
    },
    {
        "kanji": "崎",
        "onyomi": "キ",
        "kunyomi": "さき, さい, みさき",
        "english": "promontory"
    },
    {
        "kanji": "埼",
        "onyomi": "キ",
        "kunyomi": "さき, さい, みさき",
        "english": "cape"
    },
    {
        "kanji": "碕",
        "onyomi": "キ",
        "kunyomi": "さき, さい, みさき",
        "english": "cape"
    },
    {
        "kanji": "鷺",
        "onyomi": "ロ",
        "kunyomi": "さぎ",
        "english": "heron"
    },
    {
        "kanji": "作",
        "onyomi": "サク, サ",
        "kunyomi": "つく-る, つく-り, -づく-り",
        "english": "make"
    },
    {
        "kanji": "削",
        "onyomi": "サク",
        "kunyomi": "けず-る, はつ-る, そ-ぐ",
        "english": "plane"
    },
    {
        "kanji": "咋",
        "onyomi": "サク, サ",
        "kunyomi": "か-む, く-う, くら-う",
        "english": "shout"
    },
    {
        "kanji": "搾",
        "onyomi": "サク",
        "kunyomi": "しぼ-る",
        "english": "squeeze"
    },
    {
        "kanji": "昨",
        "onyomi": "サク",
        "kunyomi": "",
        "english": "yesterday"
    },
    {
        "kanji": "朔",
        "onyomi": "サク",
        "kunyomi": "ついたち",
        "english": "conjunction (astronomy)"
    },
    {
        "kanji": "柵",
        "onyomi": "サク, サン",
        "kunyomi": "しがら-む, しがらみ, とりで, やらい",
        "english": "stockade"
    },
    {
        "kanji": "窄",
        "onyomi": "サク",
        "kunyomi": "すぼ-める, つぼ-める, せま-い",
        "english": "narrow"
    },
    {
        "kanji": "策",
        "onyomi": "サク",
        "kunyomi": "",
        "english": "scheme"
    },
    {
        "kanji": "索",
        "onyomi": "サク",
        "kunyomi": "",
        "english": "cord"
    },
    {
        "kanji": "錯",
        "onyomi": "サク, シャク",
        "kunyomi": "",
        "english": "confused"
    },
    {
        "kanji": "桜",
        "onyomi": "オウ, ヨウ",
        "kunyomi": "さくら",
        "english": "cherry"
    },
    {
        "kanji": "鮭",
        "onyomi": "カイ, ケイ",
        "kunyomi": "さけ, しゃけ, ふぐ",
        "english": "salmon"
    },
    {
        "kanji": "笹",
        "onyomi": "",
        "kunyomi": "ささ",
        "english": "bamboo grass"
    },
    {
        "kanji": "匙",
        "onyomi": "シ",
        "kunyomi": "さじ",
        "english": "spoon"
    },
    {
        "kanji": "冊",
        "onyomi": "サツ, サク",
        "kunyomi": "ふみ",
        "english": "tome"
    },
    {
        "kanji": "刷",
        "onyomi": "サツ",
        "kunyomi": "す-る, -ず-り, -ずり, は-く",
        "english": "printing"
    },
    {
        "kanji": "察",
        "onyomi": "サツ",
        "kunyomi": "",
        "english": "guess"
    },
    {
        "kanji": "拶",
        "onyomi": "サツ",
        "kunyomi": "せま-る",
        "english": "be imminent"
    },
    {
        "kanji": "撮",
        "onyomi": "サツ",
        "kunyomi": "と-る, つま-む, -ど-り",
        "english": "snapshot"
    },
    {
        "kanji": "擦",
        "onyomi": "サツ",
        "kunyomi": "す-る, す-れる, -ず-れ, こす-る, こす-れる",
        "english": "grate"
    },
    {
        "kanji": "札",
        "onyomi": "サツ",
        "kunyomi": "ふだ",
        "english": "tag"
    },
    {
        "kanji": "殺",
        "onyomi": "サツ, サイ, セツ",
        "kunyomi": "ころ-す, -ごろ-し, そ-ぐ, あや-める",
        "english": "kill"
    },
    {
        "kanji": "薩",
        "onyomi": "サツ, サチ",
        "kunyomi": "",
        "english": "salvation"
    },
    {
        "kanji": "雑",
        "onyomi": "ザツ, ゾウ",
        "kunyomi": "まじ-える, まじ-る",
        "english": "miscellaneous"
    },
    {
        "kanji": "皐",
        "onyomi": "コウ",
        "kunyomi": "さつき",
        "english": "swamp"
    },
    {
        "kanji": "鯖",
        "onyomi": "セイ, ショウ",
        "kunyomi": "さば",
        "english": "mackerel"
    },
    {
        "kanji": "捌",
        "onyomi": "ハツ, ハチ, ベツ",
        "kunyomi": "さば-く, さば-ける, は-け",
        "english": "handle"
    },
    {
        "kanji": "錆",
        "onyomi": "ショウ, セイ",
        "kunyomi": "さび, くわ-しい",
        "english": "rust"
    },
    {
        "kanji": "鮫",
        "onyomi": "コウ",
        "kunyomi": "さめ, みずち",
        "english": "shark"
    },
    {
        "kanji": "皿",
        "onyomi": "ベイ",
        "kunyomi": "さら",
        "english": "dish"
    },
    {
        "kanji": "晒",
        "onyomi": "サイ, シ",
        "kunyomi": "さら-す, さらし",
        "english": "bleach"
    },
    {
        "kanji": "三",
        "onyomi": "サン, ゾウ",
        "kunyomi": "み, み-つ, みっ-つ",
        "english": "three"
    },
    {
        "kanji": "傘",
        "onyomi": "サン",
        "kunyomi": "かさ",
        "english": "umbrella"
    },
    {
        "kanji": "参",
        "onyomi": "サン, シン",
        "kunyomi": "まい-る, まい-, まじわる, みつ",
        "english": "nonplussed"
    },
    {
        "kanji": "山",
        "onyomi": "サン, セン",
        "kunyomi": "やま",
        "english": "mountain"
    },
    {
        "kanji": "惨",
        "onyomi": "サン, ザン",
        "kunyomi": "みじ-め, いた-む, むご-い",
        "english": "wretched"
    },
    {
        "kanji": "撒",
        "onyomi": "サン, サツ",
        "kunyomi": "ま-く",
        "english": "scatter"
    },
    {
        "kanji": "散",
        "onyomi": "サン",
        "kunyomi": "ち-る, ち-らす, -ち-らす, ち-らかす, ち-らかる, ち-らばる, ばら, ばら-ける",
        "english": "scatter"
    },
    {
        "kanji": "桟",
        "onyomi": "サン, セン",
        "kunyomi": "かけはし",
        "english": "scaffold"
    },
    {
        "kanji": "燦",
        "onyomi": "サン",
        "kunyomi": "さん-たる, あき-らか, きらめ-く, きら-めく",
        "english": "brilliant"
    },
    {
        "kanji": "珊",
        "onyomi": "サン",
        "kunyomi": "センチ, さんち",
        "english": "coral"
    },
    {
        "kanji": "産",
        "onyomi": "サン",
        "kunyomi": "う-む, う-まれる, うぶ-, む-す",
        "english": "products"
    },
    {
        "kanji": "算",
        "onyomi": "サン",
        "kunyomi": "そろ",
        "english": "calculate"
    },
    {
        "kanji": "纂",
        "onyomi": "サン",
        "kunyomi": "あつ-める",
        "english": "editing"
    },
    {
        "kanji": "蚕",
        "onyomi": "サン, テン",
        "kunyomi": "かいこ, こ",
        "english": "silkworm"
    },
    {
        "kanji": "讃",
        "onyomi": "サン",
        "kunyomi": "ほ-める, たた-える",
        "english": "praise"
    },
    {
        "kanji": "賛",
        "onyomi": "サン",
        "kunyomi": "たす-ける, たた-える",
        "english": "approve"
    },
    {
        "kanji": "酸",
        "onyomi": "サン",
        "kunyomi": "す-い",
        "english": "acid"
    },
    {
        "kanji": "餐",
        "onyomi": "サン, ソン",
        "kunyomi": "の-む, くら-う",
        "english": "eat"
    },
    {
        "kanji": "斬",
        "onyomi": "ザン, サン, セン, ゼン",
        "kunyomi": "き-る",
        "english": "beheading"
    },
    {
        "kanji": "暫",
        "onyomi": "ザン",
        "kunyomi": "しばら-く",
        "english": "temporarily"
    },
    {
        "kanji": "残",
        "onyomi": "ザン, サン",
        "kunyomi": "のこ-る, のこ-す, そこな-う, のこ-り",
        "english": "remainder"
    },
    {
        "kanji": "仕",
        "onyomi": "シ, ジ",
        "kunyomi": "つか-える",
        "english": "attend"
    },
    {
        "kanji": "仔",
        "onyomi": "シ",
        "kunyomi": "こ, た-える",
        "english": "offspring (animal)"
    },
    {
        "kanji": "伺",
        "onyomi": "シ",
        "kunyomi": "うかが-う",
        "english": "pay respects"
    },
    {
        "kanji": "使",
        "onyomi": "シ",
        "kunyomi": "つか-う, つか-い, -つか-い, -づか-い",
        "english": "use"
    },
    {
        "kanji": "刺",
        "onyomi": "シ",
        "kunyomi": "さ-す, さ-さる, さ-し, さし, とげ",
        "english": "thorn"
    },
    {
        "kanji": "司",
        "onyomi": "シ",
        "kunyomi": "つかさど-る",
        "english": "director"
    },
    {
        "kanji": "史",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "history"
    },
    {
        "kanji": "嗣",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "heir"
    },
    {
        "kanji": "四",
        "onyomi": "シ",
        "kunyomi": "よ, よ-つ, よっ-つ, よん",
        "english": "four"
    },
    {
        "kanji": "士",
        "onyomi": "シ",
        "kunyomi": "さむらい",
        "english": "gentleman"
    },
    {
        "kanji": "始",
        "onyomi": "シ",
        "kunyomi": "はじ-める, -はじ-める, はじ-まる",
        "english": "commence"
    },
    {
        "kanji": "姉",
        "onyomi": "シ",
        "kunyomi": "あね, はは",
        "english": "elder sister"
    },
    {
        "kanji": "姿",
        "onyomi": "シ",
        "kunyomi": "すがた",
        "english": "figure"
    },
    {
        "kanji": "子",
        "onyomi": "シ, ス, ツ",
        "kunyomi": "こ, -こ, ね",
        "english": "child"
    },
    {
        "kanji": "屍",
        "onyomi": "シ",
        "kunyomi": "しかばね",
        "english": "corpse"
    },
    {
        "kanji": "市",
        "onyomi": "シ",
        "kunyomi": "いち",
        "english": "market"
    },
    {
        "kanji": "師",
        "onyomi": "シ",
        "kunyomi": "いくさ",
        "english": "expert"
    },
    {
        "kanji": "志",
        "onyomi": "シ",
        "kunyomi": "シリング, こころざ-す, こころざし",
        "english": "intention"
    },
    {
        "kanji": "思",
        "onyomi": "シ",
        "kunyomi": "おも-う, おもえら-く, おぼ-す",
        "english": "think"
    },
    {
        "kanji": "指",
        "onyomi": "シ",
        "kunyomi": "ゆび, さ-す, -さ-し",
        "english": "finger"
    },
    {
        "kanji": "支",
        "onyomi": "シ",
        "kunyomi": "ささ-える, つか-える, か-う",
        "english": "branch"
    },
    {
        "kanji": "孜",
        "onyomi": "シ",
        "kunyomi": "つと-める",
        "english": "industriousness"
    },
    {
        "kanji": "斯",
        "onyomi": "シ",
        "kunyomi": "か, こう, か-く, この, これ, ここに",
        "english": "this"
    },
    {
        "kanji": "施",
        "onyomi": "シ, セ",
        "kunyomi": "ほどこ-す",
        "english": "give"
    },
    {
        "kanji": "旨",
        "onyomi": "シ",
        "kunyomi": "むね, うま-い",
        "english": "delicious"
    },
    {
        "kanji": "枝",
        "onyomi": "シ",
        "kunyomi": "えだ",
        "english": "bough"
    },
    {
        "kanji": "止",
        "onyomi": "シ",
        "kunyomi": "と-まる, -ど-まり, と-める, -と-める, -ど-め, とど-める, とど-め, とど-まる, や-める, や-む, -や-む, よ-す, -さ-す, -さ-し",
        "english": "stop"
    },
    {
        "kanji": "死",
        "onyomi": "シ",
        "kunyomi": "し-ぬ, し-に-",
        "english": "death"
    },
    {
        "kanji": "氏",
        "onyomi": "シ",
        "kunyomi": "うじ, -うじ",
        "english": "family name"
    },
    {
        "kanji": "獅",
        "onyomi": "シ",
        "kunyomi": "しし",
        "english": "lion"
    },
    {
        "kanji": "祉",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "welfare"
    },
    {
        "kanji": "私",
        "onyomi": "シ",
        "kunyomi": "わたくし, わたし",
        "english": "private"
    },
    {
        "kanji": "糸",
        "onyomi": "シ",
        "kunyomi": "いと",
        "english": "thread"
    },
    {
        "kanji": "紙",
        "onyomi": "シ",
        "kunyomi": "かみ",
        "english": "paper"
    },
    {
        "kanji": "紫",
        "onyomi": "シ",
        "kunyomi": "むらさき",
        "english": "purple"
    },
    {
        "kanji": "肢",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "limb"
    },
    {
        "kanji": "脂",
        "onyomi": "シ",
        "kunyomi": "あぶら",
        "english": "fat"
    },
    {
        "kanji": "至",
        "onyomi": "シ",
        "kunyomi": "いた-る",
        "english": "climax"
    },
    {
        "kanji": "視",
        "onyomi": "シ",
        "kunyomi": "み-る",
        "english": "inspection"
    },
    {
        "kanji": "詞",
        "onyomi": "シ",
        "kunyomi": "ことば",
        "english": "part of speech"
    },
    {
        "kanji": "詩",
        "onyomi": "シ",
        "kunyomi": "うた",
        "english": "poem"
    },
    {
        "kanji": "試",
        "onyomi": "シ",
        "kunyomi": "こころ-みる, ため-す",
        "english": "test"
    },
    {
        "kanji": "誌",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "document"
    },
    {
        "kanji": "諮",
        "onyomi": "シ",
        "kunyomi": "はか-る",
        "english": "consult with"
    },
    {
        "kanji": "資",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "assets"
    },
    {
        "kanji": "賜",
        "onyomi": "シ",
        "kunyomi": "たまわ-る, たま-う, たも-う",
        "english": "grant"
    },
    {
        "kanji": "雌",
        "onyomi": "シ",
        "kunyomi": "め-, めす, めん",
        "english": "feminine"
    },
    {
        "kanji": "飼",
        "onyomi": "シ",
        "kunyomi": "か-う",
        "english": "domesticate"
    },
    {
        "kanji": "歯",
        "onyomi": "シ",
        "kunyomi": "よわい, は, よわ-い, よわい-する",
        "english": "tooth"
    },
    {
        "kanji": "事",
        "onyomi": "ジ, ズ",
        "kunyomi": "こと, つか-う, つか-える",
        "english": "matter"
    },
    {
        "kanji": "似",
        "onyomi": "ジ",
        "kunyomi": "に-る, ひ-る",
        "english": "becoming"
    },
    {
        "kanji": "侍",
        "onyomi": "ジ, シ",
        "kunyomi": "さむらい, はべ-る",
        "english": "waiter"
    },
    {
        "kanji": "児",
        "onyomi": "ジ, ニ, ゲイ",
        "kunyomi": "こ, -こ, -っこ",
        "english": "newborn babe"
    },
    {
        "kanji": "字",
        "onyomi": "ジ",
        "kunyomi": "あざ, あざな, -な",
        "english": "character"
    },
    {
        "kanji": "寺",
        "onyomi": "ジ",
        "kunyomi": "てら",
        "english": "Buddhist temple"
    },
    {
        "kanji": "慈",
        "onyomi": "ジ",
        "kunyomi": "いつく-しむ",
        "english": "mercy"
    },
    {
        "kanji": "持",
        "onyomi": "ジ",
        "kunyomi": "も-つ, -も-ち, も-てる",
        "english": "hold"
    },
    {
        "kanji": "時",
        "onyomi": "ジ",
        "kunyomi": "とき, -どき",
        "english": "time"
    },
    {
        "kanji": "次",
        "onyomi": "ジ, シ",
        "kunyomi": "つ-ぐ, つぎ",
        "english": "next"
    },
    {
        "kanji": "滋",
        "onyomi": "ジ, シ",
        "kunyomi": "",
        "english": "nourishing"
    },
    {
        "kanji": "治",
        "onyomi": "ジ, チ",
        "kunyomi": "おさ-める, おさ-まる, なお-る, なお-す",
        "english": "reign"
    },
    {
        "kanji": "爾",
        "onyomi": "ジ, ニ",
        "kunyomi": "なんじ, しかり, その, のみ, おれ, しか",
        "english": "you"
    },
    {
        "kanji": "璽",
        "onyomi": "ジ",
        "kunyomi": "",
        "english": "emperor's seal"
    },
    {
        "kanji": "痔",
        "onyomi": "ヂ, ジ",
        "kunyomi": "しもがさ",
        "english": "piles"
    },
    {
        "kanji": "磁",
        "onyomi": "ジ",
        "kunyomi": "",
        "english": "magnet"
    },
    {
        "kanji": "示",
        "onyomi": "ジ, シ",
        "kunyomi": "しめ-す",
        "english": "show"
    },
    {
        "kanji": "而",
        "onyomi": "ジ, ニ",
        "kunyomi": "しこ-うして, しか-して, しか-も, しか-れども, すなわち, なんじ, しかるに",
        "english": "and yet"
    },
    {
        "kanji": "耳",
        "onyomi": "ジ",
        "kunyomi": "みみ",
        "english": "ear"
    },
    {
        "kanji": "自",
        "onyomi": "ジ, シ",
        "kunyomi": "みずか-ら, おの-ずから, おの-ずと",
        "english": "oneself"
    },
    {
        "kanji": "蒔",
        "onyomi": "シ, ジ",
        "kunyomi": "う-える, ま-く",
        "english": "sow (seeds)"
    },
    {
        "kanji": "辞",
        "onyomi": "ジ",
        "kunyomi": "や-める, いな-む",
        "english": "resign"
    },
    {
        "kanji": "汐",
        "onyomi": "セキ",
        "kunyomi": "しお, うしお, せい",
        "english": "eventide"
    },
    {
        "kanji": "鹿",
        "onyomi": "ロク",
        "kunyomi": "しか, か",
        "english": "deer"
    },
    {
        "kanji": "式",
        "onyomi": "シキ",
        "kunyomi": "",
        "english": "style"
    },
    {
        "kanji": "識",
        "onyomi": "シキ",
        "kunyomi": "し-る, しる-す",
        "english": "discriminating"
    },
    {
        "kanji": "鴫",
        "onyomi": "",
        "kunyomi": "しぎ",
        "english": "snipe"
    },
    {
        "kanji": "竺",
        "onyomi": "ジク, チク, トク",
        "kunyomi": "",
        "english": "bamboo"
    },
    {
        "kanji": "軸",
        "onyomi": "ジク",
        "kunyomi": "",
        "english": "axis"
    },
    {
        "kanji": "宍",
        "onyomi": "ニク, ジク",
        "kunyomi": "しし",
        "english": "muscles"
    },
    {
        "kanji": "雫",
        "onyomi": "ダ",
        "kunyomi": "しずく",
        "english": "drop"
    },
    {
        "kanji": "七",
        "onyomi": "シチ",
        "kunyomi": "なな, なな-つ, なの",
        "english": "seven"
    },
    {
        "kanji": "叱",
        "onyomi": "シツ, シチ, カ",
        "kunyomi": "しか-る",
        "english": "scold"
    },
    {
        "kanji": "執",
        "onyomi": "シツ, シュウ",
        "kunyomi": "と-る",
        "english": "tenacious"
    },
    {
        "kanji": "失",
        "onyomi": "シツ",
        "kunyomi": "うしな-う, う-せる",
        "english": "lose"
    },
    {
        "kanji": "嫉",
        "onyomi": "シツ",
        "kunyomi": "そね-む, ねた-む, にく-む",
        "english": "jealous"
    },
    {
        "kanji": "室",
        "onyomi": "シツ",
        "kunyomi": "むろ",
        "english": "room"
    },
    {
        "kanji": "悉",
        "onyomi": "シツ, シチ",
        "kunyomi": "つ-きる, ことごと, ことごと-く, つ-くす, つぶさ-に",
        "english": "all"
    },
    {
        "kanji": "湿",
        "onyomi": "シツ, シュウ",
        "kunyomi": "しめ-る, しめ-す, うるお-う, うるお-す",
        "english": "damp"
    },
    {
        "kanji": "漆",
        "onyomi": "シツ",
        "kunyomi": "うるし",
        "english": "lacquer"
    },
    {
        "kanji": "疾",
        "onyomi": "シツ",
        "kunyomi": "はや-い",
        "english": "rapidly"
    },
    {
        "kanji": "質",
        "onyomi": "シツ, シチ, チ",
        "kunyomi": "たち, ただ-す, もと, わりふ",
        "english": "substance"
    },
    {
        "kanji": "実",
        "onyomi": "ジツ, シツ",
        "kunyomi": "み, みの-る, まこと, みの, みち-る",
        "english": "reality"
    },
    {
        "kanji": "蔀",
        "onyomi": "ホウ, ダ, ダン, ブ",
        "kunyomi": "しとみ",
        "english": "latticed shutters"
    },
    {
        "kanji": "篠",
        "onyomi": "ゾウ, ショウ",
        "kunyomi": "しの, ささ, すず",
        "english": "bamboo grass"
    },
    {
        "kanji": "偲",
        "onyomi": "サイ, シ",
        "kunyomi": "しの-ぶ",
        "english": "recollect"
    },
    {
        "kanji": "柴",
        "onyomi": "サイ, シ",
        "kunyomi": "しば",
        "english": "brush"
    },
    {
        "kanji": "芝",
        "onyomi": "シ",
        "kunyomi": "しば",
        "english": "turf"
    },
    {
        "kanji": "屡",
        "onyomi": "ル",
        "kunyomi": "しばしば",
        "english": "often"
    },
    {
        "kanji": "蕊",
        "onyomi": "ズイ",
        "kunyomi": "しべ",
        "english": "pistil"
    },
    {
        "kanji": "縞",
        "onyomi": "コウ",
        "kunyomi": "しま, しろぎぬ",
        "english": "stripe"
    },
    {
        "kanji": "舎",
        "onyomi": "シャ, セキ",
        "kunyomi": "やど-る",
        "english": "cottage"
    },
    {
        "kanji": "写",
        "onyomi": "シャ, ジャ",
        "kunyomi": "うつ-す, うつ-る, うつ-, うつ-し",
        "english": "copy"
    },
    {
        "kanji": "射",
        "onyomi": "シャ",
        "kunyomi": "い-る, さ-す, う-つ",
        "english": "shoot"
    },
    {
        "kanji": "捨",
        "onyomi": "シャ",
        "kunyomi": "す-てる",
        "english": "discard"
    },
    {
        "kanji": "赦",
        "onyomi": "シャ",
        "kunyomi": "ゆる-す",
        "english": "pardon"
    },
    {
        "kanji": "斜",
        "onyomi": "シャ",
        "kunyomi": "なな-め, はす",
        "english": "diagonal"
    },
    {
        "kanji": "煮",
        "onyomi": "シャ",
        "kunyomi": "に-る, -に, に-える, に-やす",
        "english": "boil"
    },
    {
        "kanji": "社",
        "onyomi": "シャ",
        "kunyomi": "やしろ",
        "english": "company"
    },
    {
        "kanji": "紗",
        "onyomi": "サ, シャ",
        "kunyomi": "うすぎぬ",
        "english": "gauze"
    },
    {
        "kanji": "者",
        "onyomi": "シャ",
        "kunyomi": "もの",
        "english": "someone"
    },
    {
        "kanji": "謝",
        "onyomi": "シャ",
        "kunyomi": "あやま-る",
        "english": "apologize"
    },
    {
        "kanji": "車",
        "onyomi": "シャ",
        "kunyomi": "くるま",
        "english": "car"
    },
    {
        "kanji": "遮",
        "onyomi": "シャ",
        "kunyomi": "さえぎ-る",
        "english": "intercept"
    },
    {
        "kanji": "蛇",
        "onyomi": "ジャ, ダ, イ, ヤ",
        "kunyomi": "へび",
        "english": "snake"
    },
    {
        "kanji": "邪",
        "onyomi": "ジャ",
        "kunyomi": "よこし-ま",
        "english": "wicked"
    },
    {
        "kanji": "借",
        "onyomi": "シャク",
        "kunyomi": "か-りる",
        "english": "borrow"
    },
    {
        "kanji": "勺",
        "onyomi": "シャク",
        "kunyomi": "",
        "english": "ladle"
    },
    {
        "kanji": "尺",
        "onyomi": "シャク, セキ",
        "kunyomi": "さし",
        "english": "shaku"
    },
    {
        "kanji": "杓",
        "onyomi": "シャク, チョウ, テキ, ヒョウ",
        "kunyomi": "ひしゃく",
        "english": "ladle"
    },
    {
        "kanji": "灼",
        "onyomi": "シャク",
        "kunyomi": "あらた, やく",
        "english": "miraculous"
    },
    {
        "kanji": "爵",
        "onyomi": "シャク",
        "kunyomi": "",
        "english": "baron"
    },
    {
        "kanji": "酌",
        "onyomi": "シャク",
        "kunyomi": "く-む",
        "english": "bar-tending"
    },
    {
        "kanji": "釈",
        "onyomi": "シャク, セキ",
        "kunyomi": "とく, す-てる, ゆる-す",
        "english": "explanation"
    },
    {
        "kanji": "錫",
        "onyomi": "セキ, シャク",
        "kunyomi": "すず, たま-う",
        "english": "copper"
    },
    {
        "kanji": "若",
        "onyomi": "ジャク, ニャク, ニャ",
        "kunyomi": "わか-い, わか-, も-しくわ, も-し, も-しくは, ごと-し",
        "english": "young"
    },
    {
        "kanji": "寂",
        "onyomi": "ジャク, セキ",
        "kunyomi": "さび, さび-しい, さび-れる, さみ-しい",
        "english": "loneliness"
    },
    {
        "kanji": "弱",
        "onyomi": "ジャク",
        "kunyomi": "よわ-い, よわ-る, よわ-まる, よわ-める",
        "english": "weak"
    },
    {
        "kanji": "惹",
        "onyomi": "ジャク, ジャ",
        "kunyomi": "ひ-く",
        "english": "attract"
    },
    {
        "kanji": "主",
        "onyomi": "シュ, ス, シュウ",
        "kunyomi": "ぬし, おも, あるじ",
        "english": "lord"
    },
    {
        "kanji": "取",
        "onyomi": "シュ",
        "kunyomi": "と-る, と-り, と-り-, とり, -ど-り",
        "english": "take"
    },
    {
        "kanji": "守",
        "onyomi": "シュ, ス",
        "kunyomi": "まも-る, まも-り, もり, -もり, かみ",
        "english": "guard"
    },
    {
        "kanji": "手",
        "onyomi": "シュ, ズ",
        "kunyomi": "て, て-, -て, た-",
        "english": "hand"
    },
    {
        "kanji": "朱",
        "onyomi": "シュ",
        "kunyomi": "あけ",
        "english": "vermilion"
    },
    {
        "kanji": "殊",
        "onyomi": "シュ",
        "kunyomi": "こと",
        "english": "particularly"
    },
    {
        "kanji": "狩",
        "onyomi": "シュ",
        "kunyomi": "か-る, か-り, -が-り",
        "english": "hunt"
    },
    {
        "kanji": "珠",
        "onyomi": "シュ",
        "kunyomi": "たま",
        "english": "pearl"
    },
    {
        "kanji": "種",
        "onyomi": "シュ",
        "kunyomi": "たね, -ぐさ",
        "english": "species"
    },
    {
        "kanji": "腫",
        "onyomi": "シュ, ショウ",
        "kunyomi": "は-れる, は-れ, は-らす, はれもの",
        "english": "tumor"
    },
    {
        "kanji": "趣",
        "onyomi": "シュ",
        "kunyomi": "おもむき, おもむ-く",
        "english": "purport"
    },
    {
        "kanji": "酒",
        "onyomi": "シュ",
        "kunyomi": "さけ, さか-",
        "english": "sake"
    },
    {
        "kanji": "首",
        "onyomi": "シュ",
        "kunyomi": "くび",
        "english": "neck"
    },
    {
        "kanji": "儒",
        "onyomi": "ジュ",
        "kunyomi": "",
        "english": "Confucian"
    },
    {
        "kanji": "受",
        "onyomi": "ジュ",
        "kunyomi": "う-ける, -う-け, う-かる",
        "english": "accept"
    },
    {
        "kanji": "呪",
        "onyomi": "ジュ, シュ, シュウ, ズ",
        "kunyomi": "まじな-う, のろ-い, まじな-い, のろ-う",
        "english": "spell"
    },
    {
        "kanji": "寿",
        "onyomi": "ジュ, ス, シュウ",
        "kunyomi": "ことぶき, ことぶ-く, ことほ-ぐ",
        "english": "longevity"
    },
    {
        "kanji": "授",
        "onyomi": "ジュ",
        "kunyomi": "さず-ける, さず-かる",
        "english": "impart"
    },
    {
        "kanji": "樹",
        "onyomi": "ジュ",
        "kunyomi": "き",
        "english": "timber"
    },
    {
        "kanji": "綬",
        "onyomi": "ジュ",
        "kunyomi": "ひも",
        "english": "ribbon"
    },
    {
        "kanji": "需",
        "onyomi": "ジュ",
        "kunyomi": "",
        "english": "demand"
    },
    {
        "kanji": "囚",
        "onyomi": "シュウ",
        "kunyomi": "とら-われる",
        "english": "captured"
    },
    {
        "kanji": "収",
        "onyomi": "シュウ",
        "kunyomi": "おさ-める, おさ-まる",
        "english": "income"
    },
    {
        "kanji": "周",
        "onyomi": "シュウ",
        "kunyomi": "まわ-り",
        "english": "circumference"
    },
    {
        "kanji": "宗",
        "onyomi": "シュウ, ソウ",
        "kunyomi": "むね",
        "english": "religion"
    },
    {
        "kanji": "就",
        "onyomi": "シュウ, ジュ",
        "kunyomi": "つ-く, つ-ける",
        "english": "concerning"
    },
    {
        "kanji": "州",
        "onyomi": "シュウ, ス",
        "kunyomi": "す",
        "english": "state"
    },
    {
        "kanji": "修",
        "onyomi": "シュウ, シュ",
        "kunyomi": "おさ-める, おさ-まる",
        "english": "discipline"
    },
    {
        "kanji": "愁",
        "onyomi": "シュウ",
        "kunyomi": "うれ-える, うれ-い",
        "english": "distress"
    },
    {
        "kanji": "拾",
        "onyomi": "シュウ, ジュウ",
        "kunyomi": "ひろ-う",
        "english": "pick up"
    },
    {
        "kanji": "洲",
        "onyomi": "シュウ, ス",
        "kunyomi": "しま",
        "english": "continent"
    },
    {
        "kanji": "秀",
        "onyomi": "シュウ",
        "kunyomi": "ひい-でる",
        "english": "excel"
    },
    {
        "kanji": "秋",
        "onyomi": "シュウ",
        "kunyomi": "あき, とき",
        "english": "autumn"
    },
    {
        "kanji": "終",
        "onyomi": "シュウ",
        "kunyomi": "お-わる, -お-わる, おわ-る, お-える, つい, つい-に",
        "english": "end"
    },
    {
        "kanji": "繍",
        "onyomi": "シュウ",
        "kunyomi": "ぬいとり",
        "english": "sew"
    },
    {
        "kanji": "習",
        "onyomi": "シュウ, ジュ",
        "kunyomi": "なら-う, なら-い",
        "english": "learn"
    },
    {
        "kanji": "臭",
        "onyomi": "シュウ",
        "kunyomi": "くさ-い, -くさ-い, にお-う, にお-い",
        "english": "stinking"
    },
    {
        "kanji": "舟",
        "onyomi": "シュウ",
        "kunyomi": "ふね, ふな-, -ぶね",
        "english": "boat"
    },
    {
        "kanji": "蒐",
        "onyomi": "シュウ",
        "kunyomi": "あかね, あつ-まる, あつ-める",
        "english": "gather"
    },
    {
        "kanji": "衆",
        "onyomi": "シュウ, シュ",
        "kunyomi": "おお-い",
        "english": "masses"
    },
    {
        "kanji": "襲",
        "onyomi": "シュウ",
        "kunyomi": "おそ-う, かさ-ね",
        "english": "attack"
    },
    {
        "kanji": "讐",
        "onyomi": "シュウ",
        "kunyomi": "あだ, むく-いる, あ-たる",
        "english": "enemy"
    },
    {
        "kanji": "蹴",
        "onyomi": "シュク, シュウ",
        "kunyomi": "け-る",
        "english": "kick"
    },
    {
        "kanji": "輯",
        "onyomi": "シュウ",
        "kunyomi": "あつ-める, やわ-らぐ",
        "english": "gather"
    },
    {
        "kanji": "週",
        "onyomi": "シュウ",
        "kunyomi": "",
        "english": "week"
    },
    {
        "kanji": "酋",
        "onyomi": "シュウ, ジュ",
        "kunyomi": "おさ, ふるざけ, さけのつかさ",
        "english": "chieftain"
    },
    {
        "kanji": "酬",
        "onyomi": "シュウ, シュ, トウ",
        "kunyomi": "むく-いる",
        "english": "repay"
    },
    {
        "kanji": "集",
        "onyomi": "シュウ",
        "kunyomi": "あつ-まる, あつ-める, つど-う",
        "english": "gather"
    },
    {
        "kanji": "醜",
        "onyomi": "シュウ",
        "kunyomi": "みにく-い, しこ",
        "english": "ugly"
    },
    {
        "kanji": "什",
        "onyomi": "ジュウ, シュウ",
        "kunyomi": "",
        "english": "utensil"
    },
    {
        "kanji": "住",
        "onyomi": "ジュウ, ヂュウ, チュウ",
        "kunyomi": "す-む, す-まう, -ず-まい",
        "english": "dwell"
    },
    {
        "kanji": "充",
        "onyomi": "ジュウ",
        "kunyomi": "あ-てる, み-たす",
        "english": "allot"
    },
    {
        "kanji": "十",
        "onyomi": "ジュウ, ジッ, ジュッ",
        "kunyomi": "とお, と, そ",
        "english": "ten"
    },
    {
        "kanji": "従",
        "onyomi": "ジュウ, ショウ, ジュ",
        "kunyomi": "したが-う, したが-える, より",
        "english": "accompany"
    },
    {
        "kanji": "戎",
        "onyomi": "ジュウ",
        "kunyomi": "えびす, つわもの",
        "english": "warrior"
    },
    {
        "kanji": "柔",
        "onyomi": "ジュウ, ニュウ",
        "kunyomi": "やわ-らか, やわ-らかい, やわ, やわ-ら",
        "english": "tender"
    },
    {
        "kanji": "汁",
        "onyomi": "ジュウ",
        "kunyomi": "しる, -しる, つゆ",
        "english": "soup"
    },
    {
        "kanji": "渋",
        "onyomi": "ジュウ, シュウ",
        "kunyomi": "しぶ, しぶ-い, しぶ-る",
        "english": "astringent"
    },
    {
        "kanji": "獣",
        "onyomi": "ジュウ",
        "kunyomi": "けもの, けだもの",
        "english": "animal"
    },
    {
        "kanji": "縦",
        "onyomi": "ジュウ",
        "kunyomi": "たて",
        "english": "vertical"
    },
    {
        "kanji": "重",
        "onyomi": "ジュウ, チョウ",
        "kunyomi": "え, おも-い, おも-り, おも-なう, かさ-ねる, かさ-なる, おも",
        "english": "heavy"
    },
    {
        "kanji": "銃",
        "onyomi": "ジュウ",
        "kunyomi": "つつ",
        "english": "gun"
    },
    {
        "kanji": "叔",
        "onyomi": "シュク",
        "kunyomi": "",
        "english": "uncle"
    },
    {
        "kanji": "夙",
        "onyomi": "シュク",
        "kunyomi": "つとに, はやい",
        "english": "bright and early"
    },
    {
        "kanji": "宿",
        "onyomi": "シュク",
        "kunyomi": "やど, やど-る, やど-す",
        "english": "inn"
    },
    {
        "kanji": "淑",
        "onyomi": "シュク",
        "kunyomi": "しと-やか",
        "english": "graceful"
    },
    {
        "kanji": "祝",
        "onyomi": "シュク, シュウ",
        "kunyomi": "いわ-う",
        "english": "celebrate"
    },
    {
        "kanji": "縮",
        "onyomi": "シュク",
        "kunyomi": "ちぢ-む, ちぢ-まる, ちぢ-める, ちぢ-れる, ちぢ-らす",
        "english": "shrink"
    },
    {
        "kanji": "粛",
        "onyomi": "シュク, スク",
        "kunyomi": "つつし-む",
        "english": "solemn"
    },
    {
        "kanji": "塾",
        "onyomi": "ジュク",
        "kunyomi": "",
        "english": "cram school"
    },
    {
        "kanji": "熟",
        "onyomi": "ジュク",
        "kunyomi": "う-れる",
        "english": "mellow"
    },
    {
        "kanji": "出",
        "onyomi": "シュツ, スイ",
        "kunyomi": "で-る, -で, だ-す, -だ-す, い-でる, い-だす",
        "english": "exit"
    },
    {
        "kanji": "術",
        "onyomi": "ジュツ",
        "kunyomi": "すべ",
        "english": "art"
    },
    {
        "kanji": "述",
        "onyomi": "ジュツ",
        "kunyomi": "の-べる",
        "english": "mention"
    },
    {
        "kanji": "俊",
        "onyomi": "シュン",
        "kunyomi": "",
        "english": "sagacious"
    },
    {
        "kanji": "峻",
        "onyomi": "シュン",
        "kunyomi": "けわ-しい, たか-い",
        "english": "high"
    },
    {
        "kanji": "春",
        "onyomi": "シュン",
        "kunyomi": "はる",
        "english": "springtime"
    },
    {
        "kanji": "瞬",
        "onyomi": "シュン",
        "kunyomi": "またた-く, まじろ-ぐ",
        "english": "wink"
    },
    {
        "kanji": "竣",
        "onyomi": "ドウ, シュン",
        "kunyomi": "わらわ, わらべ, おわ-る",
        "english": "end"
    },
    {
        "kanji": "舜",
        "onyomi": "シュン",
        "kunyomi": "",
        "english": "type of morning glory"
    },
    {
        "kanji": "駿",
        "onyomi": "シュン, スン",
        "kunyomi": "すぐ-れる",
        "english": "a good horse"
    },
    {
        "kanji": "准",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "quasi-"
    },
    {
        "kanji": "循",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "sequential"
    },
    {
        "kanji": "旬",
        "onyomi": "ジュン, シュン",
        "kunyomi": "",
        "english": "decameron"
    },
    {
        "kanji": "楯",
        "onyomi": "ジュン",
        "kunyomi": "たて",
        "english": "shield"
    },
    {
        "kanji": "殉",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "martyrdom"
    },
    {
        "kanji": "淳",
        "onyomi": "ジュン, シュン",
        "kunyomi": "あつ-い",
        "english": "pure"
    },
    {
        "kanji": "準",
        "onyomi": "ジュン",
        "kunyomi": "じゅん-じる, じゅん-ずる, なぞら-える, のり, ひと-しい, みずもり",
        "english": "semi-"
    },
    {
        "kanji": "潤",
        "onyomi": "ジュン",
        "kunyomi": "うるお-う, うるお-す, うる-む",
        "english": "wet"
    },
    {
        "kanji": "盾",
        "onyomi": "ジュン",
        "kunyomi": "たて",
        "english": "shield"
    },
    {
        "kanji": "純",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "genuine"
    },
    {
        "kanji": "巡",
        "onyomi": "ジュン",
        "kunyomi": "めぐ-る, めぐ-り",
        "english": "patrol"
    },
    {
        "kanji": "遵",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "abide by"
    },
    {
        "kanji": "醇",
        "onyomi": "ジュン, シュン",
        "kunyomi": "もっぱら, こい, あつい",
        "english": "pure sake"
    },
    {
        "kanji": "順",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "obey"
    },
    {
        "kanji": "処",
        "onyomi": "ショ",
        "kunyomi": "ところ, -こ, お-る",
        "english": "dispose"
    },
    {
        "kanji": "初",
        "onyomi": "ショ",
        "kunyomi": "はじ-め, はじ-めて, はつ, はつ-, うい-, -そ-める, -ぞ-め",
        "english": "first time"
    },
    {
        "kanji": "所",
        "onyomi": "ショ",
        "kunyomi": "ところ, -ところ, どころ, とこ",
        "english": "place"
    },
    {
        "kanji": "暑",
        "onyomi": "ショ",
        "kunyomi": "あつ-い",
        "english": "sultry"
    },
    {
        "kanji": "曙",
        "onyomi": "ショ",
        "kunyomi": "あけぼの",
        "english": "dawn"
    },
    {
        "kanji": "渚",
        "onyomi": "ショ",
        "kunyomi": "なぎさ",
        "english": "strand"
    },
    {
        "kanji": "庶",
        "onyomi": "ショ",
        "kunyomi": "",
        "english": "commoner"
    },
    {
        "kanji": "緒",
        "onyomi": "ショ, チョ",
        "kunyomi": "お, いとぐち",
        "english": "thong"
    },
    {
        "kanji": "署",
        "onyomi": "ショ",
        "kunyomi": "",
        "english": "signature"
    },
    {
        "kanji": "書",
        "onyomi": "ショ",
        "kunyomi": "か-く, -が-き, -がき",
        "english": "write"
    },
    {
        "kanji": "薯",
        "onyomi": "ショ",
        "kunyomi": "いも",
        "english": "potato"
    },
    {
        "kanji": "藷",
        "onyomi": "ショ, ジョ",
        "kunyomi": "いも",
        "english": "potato"
    },
    {
        "kanji": "諸",
        "onyomi": "ショ",
        "kunyomi": "もろ",
        "english": "various"
    },
    {
        "kanji": "助",
        "onyomi": "ジョ",
        "kunyomi": "たす-ける, たす-かる, す-ける, すけ",
        "english": "help"
    },
    {
        "kanji": "叙",
        "onyomi": "ジョ",
        "kunyomi": "つい-ず, ついで",
        "english": "confer"
    },
    {
        "kanji": "女",
        "onyomi": "ジョ, ニョ, ニョウ",
        "kunyomi": "おんな, め",
        "english": "woman"
    },
    {
        "kanji": "序",
        "onyomi": "ジョ",
        "kunyomi": "つい-で, ついで",
        "english": "preface"
    },
    {
        "kanji": "徐",
        "onyomi": "ジョ",
        "kunyomi": "おもむ-ろに",
        "english": "gradually"
    },
    {
        "kanji": "恕",
        "onyomi": "ジョ, ショ",
        "kunyomi": "ゆる-す",
        "english": "excuse"
    },
    {
        "kanji": "鋤",
        "onyomi": "ジョ, ショ, ソ",
        "kunyomi": "す-く, すき, くわ",
        "english": "spade up"
    },
    {
        "kanji": "除",
        "onyomi": "ジョ, ジ",
        "kunyomi": "のぞ-く, -よ-け",
        "english": "exclude"
    },
    {
        "kanji": "傷",
        "onyomi": "ショウ",
        "kunyomi": "きず, いた-む, いた-める",
        "english": "wound"
    },
    {
        "kanji": "償",
        "onyomi": "ショウ",
        "kunyomi": "つぐな-う",
        "english": "reparation"
    },
    {
        "kanji": "勝",
        "onyomi": "ショウ",
        "kunyomi": "か-つ, -が-ち, まさ-る, すぐ-れる, かつ",
        "english": "victory"
    },
    {
        "kanji": "匠",
        "onyomi": "ショウ",
        "kunyomi": "たくみ",
        "english": "artisan"
    },
    {
        "kanji": "升",
        "onyomi": "ショウ",
        "kunyomi": "ます",
        "english": "measuring box"
    },
    {
        "kanji": "召",
        "onyomi": "ショウ",
        "kunyomi": "め-す",
        "english": "seduce"
    },
    {
        "kanji": "哨",
        "onyomi": "ショウ",
        "kunyomi": "みはり",
        "english": "scout"
    },
    {
        "kanji": "商",
        "onyomi": "ショウ",
        "kunyomi": "あきな-う",
        "english": "make a deal"
    },
    {
        "kanji": "唱",
        "onyomi": "ショウ",
        "kunyomi": "とな-える",
        "english": "chant"
    },
    {
        "kanji": "嘗",
        "onyomi": "ショウ, ジョウ",
        "kunyomi": "かつ-て, こころ-みる, な-める",
        "english": "once"
    },
    {
        "kanji": "奨",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "すす-める",
        "english": "exhort"
    },
    {
        "kanji": "妾",
        "onyomi": "ショウ",
        "kunyomi": "めかけ, そばめ, わらわ",
        "english": "concubine"
    },
    {
        "kanji": "娼",
        "onyomi": "ショウ",
        "kunyomi": "あそびめ",
        "english": "prostitute"
    },
    {
        "kanji": "宵",
        "onyomi": "ショウ",
        "kunyomi": "よい",
        "english": "wee hours"
    },
    {
        "kanji": "将",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "まさ-に, はた, まさ, ひきい-る, もって",
        "english": "leader"
    },
    {
        "kanji": "小",
        "onyomi": "ショウ",
        "kunyomi": "ちい-さい, こ-, お-, さ-",
        "english": "little"
    },
    {
        "kanji": "少",
        "onyomi": "ショウ",
        "kunyomi": "すく-ない, すこ-し",
        "english": "few"
    },
    {
        "kanji": "尚",
        "onyomi": "ショウ",
        "kunyomi": "なお",
        "english": "esteem"
    },
    {
        "kanji": "庄",
        "onyomi": "ショウ, ソ, ソウ, ホウ",
        "kunyomi": "",
        "english": "level"
    },
    {
        "kanji": "床",
        "onyomi": "ショウ",
        "kunyomi": "とこ, ゆか",
        "english": "bed"
    },
    {
        "kanji": "廠",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "workshop"
    },
    {
        "kanji": "彰",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "patent"
    },
    {
        "kanji": "承",
        "onyomi": "ショウ, ジョウ",
        "kunyomi": "うけたまわ-る, う-ける",
        "english": "acquiesce"
    },
    {
        "kanji": "抄",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "extract"
    },
    {
        "kanji": "招",
        "onyomi": "ショウ",
        "kunyomi": "まね-く",
        "english": "beckon"
    },
    {
        "kanji": "掌",
        "onyomi": "ショウ",
        "kunyomi": "てのひら, たなごころ",
        "english": "manipulate"
    },
    {
        "kanji": "捷",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "はや-い",
        "english": "victory"
    },
    {
        "kanji": "昇",
        "onyomi": "ショウ",
        "kunyomi": "のぼ-る",
        "english": "rise up"
    },
    {
        "kanji": "昌",
        "onyomi": "ショウ",
        "kunyomi": "さかん",
        "english": "prosperous"
    },
    {
        "kanji": "昭",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "shining"
    },
    {
        "kanji": "晶",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "sparkle"
    },
    {
        "kanji": "松",
        "onyomi": "ショウ",
        "kunyomi": "まつ",
        "english": "pine tree"
    },
    {
        "kanji": "梢",
        "onyomi": "ショウ",
        "kunyomi": "こずえ, くすのき",
        "english": "treetops"
    },
    {
        "kanji": "樟",
        "onyomi": "ショウ",
        "kunyomi": "くす",
        "english": "camphor"
    },
    {
        "kanji": "樵",
        "onyomi": "ショウ",
        "kunyomi": "きこ-る, こ-る, きこり",
        "english": "woodcutting"
    },
    {
        "kanji": "沼",
        "onyomi": "ショウ",
        "kunyomi": "ぬま",
        "english": "marsh"
    },
    {
        "kanji": "消",
        "onyomi": "ショウ",
        "kunyomi": "き-える, け-す",
        "english": "extinguish"
    },
    {
        "kanji": "渉",
        "onyomi": "ショウ",
        "kunyomi": "わた-る",
        "english": "ford"
    },
    {
        "kanji": "湘",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "name of Chinese river"
    },
    {
        "kanji": "焼",
        "onyomi": "ショウ",
        "kunyomi": "や-く, や-き, や-き-, -や-き, や-ける",
        "english": "bake"
    },
    {
        "kanji": "焦",
        "onyomi": "ショウ",
        "kunyomi": "こ-げる, こ-がす, こ-がれる, あせ-る, じ-れる, じ-らす",
        "english": "char"
    },
    {
        "kanji": "照",
        "onyomi": "ショウ",
        "kunyomi": "て-る, て-らす, て-れる",
        "english": "illuminate"
    },
    {
        "kanji": "症",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "symptoms"
    },
    {
        "kanji": "省",
        "onyomi": "セイ, ショウ",
        "kunyomi": "かえり-みる, はぶ-く",
        "english": "government ministry"
    },
    {
        "kanji": "硝",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "nitrate"
    },
    {
        "kanji": "礁",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "reef"
    },
    {
        "kanji": "祥",
        "onyomi": "ショウ",
        "kunyomi": "さいわ-い, きざ-し, よ-い, つまび-らか",
        "english": "auspicious"
    },
    {
        "kanji": "称",
        "onyomi": "ショウ",
        "kunyomi": "たた-える, とな-える, あ-げる, かな-う, はか-り, はか-る, ほめ-る",
        "english": "appellation"
    },
    {
        "kanji": "章",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "badge"
    },
    {
        "kanji": "笑",
        "onyomi": "ショウ",
        "kunyomi": "わら-う, え-む",
        "english": "laugh"
    },
    {
        "kanji": "粧",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "cosmetics"
    },
    {
        "kanji": "紹",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "introduce"
    },
    {
        "kanji": "肖",
        "onyomi": "ショウ",
        "kunyomi": "あやか-る",
        "english": "resemblance"
    },
    {
        "kanji": "菖",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "iris"
    },
    {
        "kanji": "蒋",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "まこも, はげ-ます",
        "english": "reed"
    },
    {
        "kanji": "蕉",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "banana"
    },
    {
        "kanji": "衝",
        "onyomi": "ショウ",
        "kunyomi": "つ-く",
        "english": "collide"
    },
    {
        "kanji": "裳",
        "onyomi": "ショウ",
        "kunyomi": "も, もすそ",
        "english": "skirt"
    },
    {
        "kanji": "訟",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "sue"
    },
    {
        "kanji": "証",
        "onyomi": "ショウ",
        "kunyomi": "あかし",
        "english": "evidence"
    },
    {
        "kanji": "詔",
        "onyomi": "ショウ",
        "kunyomi": "みことのり",
        "english": "imperial edict"
    },
    {
        "kanji": "詳",
        "onyomi": "ショウ",
        "kunyomi": "くわ-しい, つまび-らか",
        "english": "detailed"
    },
    {
        "kanji": "象",
        "onyomi": "ショウ, ゾウ",
        "kunyomi": "かたど-る",
        "english": "elephant"
    },
    {
        "kanji": "賞",
        "onyomi": "ショウ",
        "kunyomi": "ほ-める",
        "english": "prize"
    },
    {
        "kanji": "醤",
        "onyomi": "ショウ",
        "kunyomi": "ひしお",
        "english": "a kind of miso"
    },
    {
        "kanji": "鉦",
        "onyomi": "セイ, ショウ",
        "kunyomi": "かね",
        "english": "bell"
    },
    {
        "kanji": "鍾",
        "onyomi": "ショウ, シュ",
        "kunyomi": "あつ-める, さかずき, かね",
        "english": "spindle"
    },
    {
        "kanji": "鐘",
        "onyomi": "ショウ",
        "kunyomi": "かね",
        "english": "bell"
    },
    {
        "kanji": "障",
        "onyomi": "ショウ",
        "kunyomi": "さわ-る",
        "english": "hinder"
    },
    {
        "kanji": "鞘",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "さや",
        "english": "sheath"
    },
    {
        "kanji": "上",
        "onyomi": "ジョウ, ショウ, シャン",
        "kunyomi": "うえ, -うえ, うわ-, かみ, あ-げる, -あ-げる, あ-がる, -あ-がる, あ-がり, -あ-がり, のぼ-る, のぼ-り, のぼ-せる, のぼ-す, たてまつ-る",
        "english": "above"
    },
    {
        "kanji": "丈",
        "onyomi": "ジョウ",
        "kunyomi": "たけ, だけ",
        "english": "length"
    },
    {
        "kanji": "丞",
        "onyomi": "ジョウ, ショウ",
        "kunyomi": "すく-う, たす-ける",
        "english": "help"
    },
    {
        "kanji": "乗",
        "onyomi": "ジョウ, ショウ",
        "kunyomi": "の-る, -の-り, の-せる",
        "english": "ride"
    },
    {
        "kanji": "冗",
        "onyomi": "ジョウ",
        "kunyomi": "",
        "english": "superfluous"
    },
    {
        "kanji": "剰",
        "onyomi": "ジョウ",
        "kunyomi": "あまつさえ, あま-り, あま-る",
        "english": "surplus"
    },
    {
        "kanji": "城",
        "onyomi": "ジョウ, セイ",
        "kunyomi": "しろ",
        "english": "castle"
    },
    {
        "kanji": "場",
        "onyomi": "ジョウ, チョウ",
        "kunyomi": "ば",
        "english": "location"
    },
    {
        "kanji": "壌",
        "onyomi": "ジョウ",
        "kunyomi": "つち",
        "english": "lot"
    },
    {
        "kanji": "嬢",
        "onyomi": "ジョウ",
        "kunyomi": "むすめ",
        "english": "lass"
    },
    {
        "kanji": "常",
        "onyomi": "ジョウ",
        "kunyomi": "つね, とこ-",
        "english": "usual"
    },
    {
        "kanji": "情",
        "onyomi": "ジョウ, セイ",
        "kunyomi": "なさ-け",
        "english": "feelings"
    },
    {
        "kanji": "擾",
        "onyomi": "ジョウ",
        "kunyomi": "みだ-れる, みだ-す, わずら-わしい",
        "english": "disturb"
    },
    {
        "kanji": "条",
        "onyomi": "ジョウ, チョウ, デキ",
        "kunyomi": "えだ, すじ",
        "english": "article"
    },
    {
        "kanji": "杖",
        "onyomi": "ジョウ",
        "kunyomi": "つえ",
        "english": "staff"
    },
    {
        "kanji": "浄",
        "onyomi": "ジョウ, セイ",
        "kunyomi": "きよ-める, きよ-い",
        "english": "clean"
    },
    {
        "kanji": "状",
        "onyomi": "ジョウ",
        "kunyomi": "",
        "english": "status quo"
    },
    {
        "kanji": "畳",
        "onyomi": "ジョウ, チョウ",
        "kunyomi": "たた-む, たたみ, かさ-なる",
        "english": "tatami mat"
    },
    {
        "kanji": "穣",
        "onyomi": "ジョウ",
        "kunyomi": "わら, ゆたか",
        "english": "good crops"
    },
    {
        "kanji": "蒸",
        "onyomi": "ジョウ, セイ",
        "kunyomi": "む-す, む-れる, む-らす",
        "english": "steam"
    },
    {
        "kanji": "譲",
        "onyomi": "ジョウ",
        "kunyomi": "ゆず-る",
        "english": "defer"
    },
    {
        "kanji": "醸",
        "onyomi": "ジョウ",
        "kunyomi": "かも-す",
        "english": "brew"
    },
    {
        "kanji": "錠",
        "onyomi": "ジョウ",
        "kunyomi": "",
        "english": "lock"
    },
    {
        "kanji": "嘱",
        "onyomi": "ショク",
        "kunyomi": "しょく-する, たの-む",
        "english": "entrust"
    },
    {
        "kanji": "埴",
        "onyomi": "ショク",
        "kunyomi": "はに, へな",
        "english": "clay"
    },
    {
        "kanji": "飾",
        "onyomi": "ショク",
        "kunyomi": "かざ-る, かざ-り",
        "english": "decorate"
    },
    {
        "kanji": "拭",
        "onyomi": "ショク, シキ",
        "kunyomi": "ぬぐ-う, ふ-く",
        "english": "wipe"
    },
    {
        "kanji": "植",
        "onyomi": "ショク",
        "kunyomi": "う-える, う-わる",
        "english": "plant"
    },
    {
        "kanji": "殖",
        "onyomi": "ショク",
        "kunyomi": "ふ-える, ふ-やす",
        "english": "augment"
    },
    {
        "kanji": "燭",
        "onyomi": "ソク, ショク",
        "kunyomi": "ともしび",
        "english": "light"
    },
    {
        "kanji": "織",
        "onyomi": "ショク, シキ",
        "kunyomi": "お-る, お-り, おり, -おり, -お-り",
        "english": "weave"
    },
    {
        "kanji": "職",
        "onyomi": "ショク, ソク",
        "kunyomi": "",
        "english": "post"
    },
    {
        "kanji": "色",
        "onyomi": "ショク, シキ",
        "kunyomi": "いろ",
        "english": "color"
    },
    {
        "kanji": "触",
        "onyomi": "ショク",
        "kunyomi": "ふ-れる, さわ-る, さわ",
        "english": "contact"
    },
    {
        "kanji": "食",
        "onyomi": "ショク, ジキ",
        "kunyomi": "く-う, く-らう, た-べる, は-む",
        "english": "eat"
    },
    {
        "kanji": "蝕",
        "onyomi": "ショク",
        "kunyomi": "むしば-む",
        "english": "eclipse"
    },
    {
        "kanji": "辱",
        "onyomi": "ジョク",
        "kunyomi": "はずかし-める",
        "english": "embarrass"
    },
    {
        "kanji": "尻",
        "onyomi": "コウ",
        "kunyomi": "しり",
        "english": "buttocks"
    },
    {
        "kanji": "伸",
        "onyomi": "シン",
        "kunyomi": "の-びる, の-ばす, の-べる, の-す",
        "english": "expand"
    },
    {
        "kanji": "信",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "faith"
    },
    {
        "kanji": "侵",
        "onyomi": "シン",
        "kunyomi": "おか-す",
        "english": "encroach"
    },
    {
        "kanji": "唇",
        "onyomi": "シン",
        "kunyomi": "くちびる",
        "english": "lips"
    },
    {
        "kanji": "娠",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "with child"
    },
    {
        "kanji": "寝",
        "onyomi": "シン",
        "kunyomi": "ね-る, ね-かす, い-ぬ, みたまや, や-める",
        "english": "lie down"
    },
    {
        "kanji": "審",
        "onyomi": "シン",
        "kunyomi": "つまび-らか, つぶさ-に",
        "english": "hearing"
    },
    {
        "kanji": "心",
        "onyomi": "シン",
        "kunyomi": "こころ, -ごころ",
        "english": "heart"
    },
    {
        "kanji": "慎",
        "onyomi": "シン",
        "kunyomi": "つつし-む, つつ-ましい, つつし, つつし-み",
        "english": "humility"
    },
    {
        "kanji": "振",
        "onyomi": "シン",
        "kunyomi": "ふ-る, ふ-れる, ふ-るう",
        "english": "shake"
    },
    {
        "kanji": "新",
        "onyomi": "シン",
        "kunyomi": "あたら-しい, あら-た, あら-, にい-",
        "english": "new"
    },
    {
        "kanji": "晋",
        "onyomi": "シン",
        "kunyomi": "すす-む",
        "english": "advance"
    },
    {
        "kanji": "森",
        "onyomi": "シン",
        "kunyomi": "もり",
        "english": "forest"
    },
    {
        "kanji": "榛",
        "onyomi": "シン, ハン",
        "kunyomi": "はしばみ, はり",
        "english": "hazelnut"
    },
    {
        "kanji": "浸",
        "onyomi": "シン",
        "kunyomi": "ひた-す, ひた-る, つ-かる",
        "english": "immersed"
    },
    {
        "kanji": "深",
        "onyomi": "シン",
        "kunyomi": "ふか-い, -ぶか-い, ふか-まる, ふか-める, み-",
        "english": "deep"
    },
    {
        "kanji": "申",
        "onyomi": "シン",
        "kunyomi": "もう-す, もう-し-, さる",
        "english": "have the honor to"
    },
    {
        "kanji": "疹",
        "onyomi": "シン, チン",
        "kunyomi": "はしか",
        "english": "measles"
    },
    {
        "kanji": "真",
        "onyomi": "シン",
        "kunyomi": "ま, ま-, まこと",
        "english": "true"
    },
    {
        "kanji": "神",
        "onyomi": "シン, ジン",
        "kunyomi": "かみ, かん-, こう-",
        "english": "gods"
    },
    {
        "kanji": "秦",
        "onyomi": "シン",
        "kunyomi": "はた",
        "english": "Manchu dynasty"
    },
    {
        "kanji": "紳",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "sire"
    },
    {
        "kanji": "臣",
        "onyomi": "シン, ジン",
        "kunyomi": "",
        "english": "retainer"
    },
    {
        "kanji": "芯",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "wick"
    },
    {
        "kanji": "薪",
        "onyomi": "シン",
        "kunyomi": "たきぎ, まき",
        "english": "fuel"
    },
    {
        "kanji": "親",
        "onyomi": "シン",
        "kunyomi": "おや, おや-, した-しい, した-しむ",
        "english": "parent"
    },
    {
        "kanji": "診",
        "onyomi": "シン",
        "kunyomi": "み-る",
        "english": "checkup"
    },
    {
        "kanji": "身",
        "onyomi": "シン",
        "kunyomi": "み",
        "english": "somebody"
    },
    {
        "kanji": "辛",
        "onyomi": "シン",
        "kunyomi": "から-い, つら-い, -づら-い, かのと",
        "english": "spicy"
    },
    {
        "kanji": "進",
        "onyomi": "シン",
        "kunyomi": "すす-む, すす-める",
        "english": "advance"
    },
    {
        "kanji": "針",
        "onyomi": "シン",
        "kunyomi": "はり",
        "english": "needle"
    },
    {
        "kanji": "震",
        "onyomi": "シン",
        "kunyomi": "ふる-う, ふる-える, ふる-わせる, ふる-わす",
        "english": "quake"
    },
    {
        "kanji": "人",
        "onyomi": "ジン, ニン",
        "kunyomi": "ひと, -り, -と",
        "english": "person"
    },
    {
        "kanji": "仁",
        "onyomi": "ジン, ニ, ニン",
        "kunyomi": "",
        "english": "humanity"
    },
    {
        "kanji": "刃",
        "onyomi": "ジン, ニン",
        "kunyomi": "は, やいば, き-る",
        "english": "blade"
    },
    {
        "kanji": "塵",
        "onyomi": "チン, ジン",
        "kunyomi": "ちり, ごみ",
        "english": "dust"
    },
    {
        "kanji": "壬",
        "onyomi": "ニン, ジン, イ",
        "kunyomi": "みずのえ",
        "english": "9th calendar sign"
    },
    {
        "kanji": "尋",
        "onyomi": "ジン",
        "kunyomi": "たず-ねる, ひろ",
        "english": "inquire"
    },
    {
        "kanji": "甚",
        "onyomi": "ジン",
        "kunyomi": "はなは-だ, はなは-だしい",
        "english": "tremendously"
    },
    {
        "kanji": "尽",
        "onyomi": "ジン, サン",
        "kunyomi": "つ-きる, つ-くす, つ-かす, -づ-く, -ず-く, ことごと-く",
        "english": "exhaust"
    },
    {
        "kanji": "腎",
        "onyomi": "ジン",
        "kunyomi": "",
        "english": "kidney"
    },
    {
        "kanji": "訊",
        "onyomi": "ジン, シュン, シン",
        "kunyomi": "き-く, と-う, たず-ねる",
        "english": "request"
    },
    {
        "kanji": "迅",
        "onyomi": "ジン",
        "kunyomi": "",
        "english": "swift"
    },
    {
        "kanji": "陣",
        "onyomi": "ジン",
        "kunyomi": "",
        "english": "camp"
    },
    {
        "kanji": "靭",
        "onyomi": "ジン, ニン, サ, サイ, サツ",
        "kunyomi": "うつぼ, しな-やか, ゆぎ",
        "english": "soft"
    },
    {
        "kanji": "笥",
        "onyomi": "ス, シ",
        "kunyomi": "け, はこ",
        "english": "lunch box"
    },
    {
        "kanji": "諏",
        "onyomi": "シュ, ス",
        "kunyomi": "そう, はか-る",
        "english": "consult"
    },
    {
        "kanji": "須",
        "onyomi": "ス, シュ",
        "kunyomi": "すべから-く, すべし, ひげ, まつ, もち-いる, もと-める",
        "english": "ought"
    },
    {
        "kanji": "酢",
        "onyomi": "サク",
        "kunyomi": "す",
        "english": "vinegar"
    },
    {
        "kanji": "図",
        "onyomi": "ズ, ト",
        "kunyomi": "え, はか-る",
        "english": "map"
    },
    {
        "kanji": "厨",
        "onyomi": "シュウ, ズ, チュ, チュウ",
        "kunyomi": "くりや",
        "english": "kitchen"
    },
    {
        "kanji": "逗",
        "onyomi": "トウ, ズ",
        "kunyomi": "とど-まる",
        "english": "stop"
    },
    {
        "kanji": "吹",
        "onyomi": "スイ",
        "kunyomi": "ふ-く",
        "english": "blow"
    },
    {
        "kanji": "垂",
        "onyomi": "スイ",
        "kunyomi": "た-れる, た-らす, た-れ, -た-れ, なんなんと-す",
        "english": "droop"
    },
    {
        "kanji": "帥",
        "onyomi": "スイ",
        "kunyomi": "",
        "english": "commander"
    },
    {
        "kanji": "推",
        "onyomi": "スイ",
        "kunyomi": "お-す",
        "english": "conjecture"
    },
    {
        "kanji": "水",
        "onyomi": "スイ",
        "kunyomi": "みず, みず-",
        "english": "water"
    },
    {
        "kanji": "炊",
        "onyomi": "スイ",
        "kunyomi": "た-く, -だ-き",
        "english": "cook"
    },
    {
        "kanji": "睡",
        "onyomi": "スイ",
        "kunyomi": "ねむ-る, ねむ-い",
        "english": "drowsy"
    },
    {
        "kanji": "粋",
        "onyomi": "スイ",
        "kunyomi": "いき",
        "english": "chic"
    },
    {
        "kanji": "翠",
        "onyomi": "スイ",
        "kunyomi": "かわせみ, みどり",
        "english": "green"
    },
    {
        "kanji": "衰",
        "onyomi": "スイ",
        "kunyomi": "おとろ-える",
        "english": "decline"
    },
    {
        "kanji": "遂",
        "onyomi": "スイ",
        "kunyomi": "と-げる, つい-に",
        "english": "consummate"
    },
    {
        "kanji": "酔",
        "onyomi": "スイ",
        "kunyomi": "よ-う, よ-い, よ",
        "english": "drunk"
    },
    {
        "kanji": "錐",
        "onyomi": "スイ",
        "kunyomi": "きり",
        "english": "auger"
    },
    {
        "kanji": "錘",
        "onyomi": "スイ",
        "kunyomi": "つむ, おもり",
        "english": "weight"
    },
    {
        "kanji": "随",
        "onyomi": "ズイ",
        "kunyomi": "まにま-に, したが-う",
        "english": "follow"
    },
    {
        "kanji": "瑞",
        "onyomi": "ズイ, スイ",
        "kunyomi": "みず-, しるし",
        "english": "congratulations"
    },
    {
        "kanji": "髄",
        "onyomi": "ズイ",
        "kunyomi": "",
        "english": "marrow"
    },
    {
        "kanji": "崇",
        "onyomi": "スウ",
        "kunyomi": "あが-める",
        "english": "adore"
    },
    {
        "kanji": "嵩",
        "onyomi": "スウ, シュウ",
        "kunyomi": "かさ, かさ-む, たか-い",
        "english": "be aggravated"
    },
    {
        "kanji": "数",
        "onyomi": "スウ, ス, サク, ソク, シュ",
        "kunyomi": "かず, かぞ-える, しばしば, せ-める, わずらわ-しい",
        "english": "number"
    },
    {
        "kanji": "枢",
        "onyomi": "スウ, シュ",
        "kunyomi": "とぼそ, からくり",
        "english": "hinge"
    },
    {
        "kanji": "趨",
        "onyomi": "スウ, ソク",
        "kunyomi": "しゅ, おもむ-く, はし-る",
        "english": "run"
    },
    {
        "kanji": "雛",
        "onyomi": "スウ, ス, ジュ",
        "kunyomi": "ひな, ひよこ",
        "english": "chick"
    },
    {
        "kanji": "据",
        "onyomi": "キョ",
        "kunyomi": "す-える, す-わる",
        "english": "set"
    },
    {
        "kanji": "杉",
        "onyomi": "サン",
        "kunyomi": "すぎ",
        "english": "cedar"
    },
    {
        "kanji": "椙",
        "onyomi": "",
        "kunyomi": "すぎ",
        "english": "Japanese cedar"
    },
    {
        "kanji": "菅",
        "onyomi": "カン, ケン",
        "kunyomi": "すげ",
        "english": "sedge"
    },
    {
        "kanji": "頗",
        "onyomi": "ハ",
        "kunyomi": "すこぶ-る, かたよ-る",
        "english": "prejudiced"
    },
    {
        "kanji": "雀",
        "onyomi": "ジャク, ジャン, サク, シャク",
        "kunyomi": "すずめ",
        "english": "sparrow"
    },
    {
        "kanji": "裾",
        "onyomi": "キョ, コ",
        "kunyomi": "すそ",
        "english": "cuff"
    },
    {
        "kanji": "澄",
        "onyomi": "チョウ",
        "kunyomi": "す-む, す-ます, -す-ます",
        "english": "lucidity"
    },
    {
        "kanji": "摺",
        "onyomi": "ショウ, シュウ, ロウ",
        "kunyomi": "す-る, ひだ",
        "english": "rub"
    },
    {
        "kanji": "寸",
        "onyomi": "スン",
        "kunyomi": "",
        "english": "measurement"
    },
    {
        "kanji": "世",
        "onyomi": "セイ, セ, ソウ",
        "kunyomi": "よ",
        "english": "generation"
    },
    {
        "kanji": "瀬",
        "onyomi": "ライ",
        "kunyomi": "せ",
        "english": "rapids"
    },
    {
        "kanji": "畝",
        "onyomi": "ボウ, ホ, モ, ム",
        "kunyomi": "せ, うね",
        "english": "furrow"
    },
    {
        "kanji": "是",
        "onyomi": "ゼ, シ",
        "kunyomi": "これ, この, ここ",
        "english": "just so"
    },
    {
        "kanji": "凄",
        "onyomi": "セイ, サイ",
        "kunyomi": "さむ-い, すご-い, すさ-まじい",
        "english": "uncanny"
    },
    {
        "kanji": "制",
        "onyomi": "セイ",
        "kunyomi": "",
        "english": "system"
    },
    {
        "kanji": "勢",
        "onyomi": "セイ, ゼイ",
        "kunyomi": "いきお-い, はずみ",
        "english": "forces"
    },
    {
        "kanji": "姓",
        "onyomi": "セイ, ショウ",
        "kunyomi": "",
        "english": "surname"
    },
    {
        "kanji": "征",
        "onyomi": "セイ",
        "kunyomi": "",
        "english": "subjugate"
    },
    {
        "kanji": "性",
        "onyomi": "セイ, ショウ",
        "kunyomi": "さが",
        "english": "sex"
    },
    {
        "kanji": "成",
        "onyomi": "セイ, ジョウ",
        "kunyomi": "な-る, な-す, -な-す",
        "english": "turn into"
    },
    {
        "kanji": "政",
        "onyomi": "セイ, ショウ",
        "kunyomi": "まつりごと, まん",
        "english": "politics"
    },
    {
        "kanji": "整",
        "onyomi": "セイ",
        "kunyomi": "ととの-える, ととの-う",
        "english": "organize"
    },
    {
        "kanji": "星",
        "onyomi": "セイ, ショウ",
        "kunyomi": "ほし, -ぼし",
        "english": "star"
    },
    {
        "kanji": "晴",
        "onyomi": "セイ",
        "kunyomi": "は-れる, は-れ, は-れ-, -ば-れ, は-らす",
        "english": "clear up"
    },
    {
        "kanji": "棲",
        "onyomi": "セイ",
        "kunyomi": "す-む",
        "english": "live"
    },
    {
        "kanji": "栖",
        "onyomi": "セイ",
        "kunyomi": "す-む",
        "english": "nest"
    },
    {
        "kanji": "正",
        "onyomi": "セイ, ショウ",
        "kunyomi": "ただ-しい, ただ-す, まさ, まさ-に",
        "english": "correct"
    },
    {
        "kanji": "清",
        "onyomi": "セイ, ショウ, シン",
        "kunyomi": "きよ-い, きよ-まる, きよ-める",
        "english": "pure"
    },
    {
        "kanji": "牲",
        "onyomi": "セイ",
        "kunyomi": "",
        "english": "animal sacrifice"
    },
    {
        "kanji": "生",
        "onyomi": "セイ, ショウ",
        "kunyomi": "い-きる, い-かす, い-ける, う-まれる, うま-れる, う-まれ, うまれ, う-む, お-う, は-える, は-やす, き, なま, なま-, な-る, な-す, む-す, -う",
        "english": "life"
    },
    {
        "kanji": "盛",
        "onyomi": "セイ, ジョウ",
        "kunyomi": "も-る, さか-る, さか-ん",
        "english": "boom"
    },
    {
        "kanji": "精",
        "onyomi": "セイ, ショウ",
        "kunyomi": "しら-げる, くわ-しい",
        "english": "refined"
    },
    {
        "kanji": "聖",
        "onyomi": "セイ, ショウ",
        "kunyomi": "ひじり",
        "english": "holy"
    },
    {
        "kanji": "声",
        "onyomi": "セイ, ショウ",
        "kunyomi": "こえ, こわ-",
        "english": "voice"
    },
    {
        "kanji": "製",
        "onyomi": "セイ",
        "kunyomi": "",
        "english": "made in..."
    },
    {
        "kanji": "西",
        "onyomi": "セイ, サイ, ス",
        "kunyomi": "にし",
        "english": "west"
    },
    {
        "kanji": "誠",
        "onyomi": "セイ",
        "kunyomi": "まこと",
        "english": "sincerity"
    },
    {
        "kanji": "誓",
        "onyomi": "セイ",
        "kunyomi": "ちか-う",
        "english": "vow"
    },
    {
        "kanji": "請",
        "onyomi": "セイ, シン, ショウ",
        "kunyomi": "こ-う, う-ける",
        "english": "solicit"
    },
    {
        "kanji": "逝",
        "onyomi": "セイ",
        "kunyomi": "ゆ-く, い-く",
        "english": "departed"
    },
    {
        "kanji": "醒",
        "onyomi": "セイ",
        "kunyomi": "さ-ます, さ-める",
        "english": "awake"
    },
    {
        "kanji": "青",
        "onyomi": "セイ, ショウ",
        "kunyomi": "あお, あお-, あお-い",
        "english": "blue"
    },
    {
        "kanji": "静",
        "onyomi": "セイ, ジョウ",
        "kunyomi": "しず-, しず-か, しず-まる, しず-める",
        "english": "quiet"
    },
    {
        "kanji": "斉",
        "onyomi": "セイ, サイ",
        "kunyomi": "そろ-う, ひと-しい, ひと-しく, あたる, はやい",
        "english": "adjusted"
    },
    {
        "kanji": "税",
        "onyomi": "ゼイ",
        "kunyomi": "",
        "english": "tax"
    },
    {
        "kanji": "脆",
        "onyomi": "ゼイ, セイ, セツ",
        "kunyomi": "もろ-い, よわい",
        "english": "brittle"
    },
    {
        "kanji": "隻",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "vessels"
    },
    {
        "kanji": "席",
        "onyomi": "セキ",
        "kunyomi": "むしろ",
        "english": "seat"
    },
    {
        "kanji": "惜",
        "onyomi": "セキ",
        "kunyomi": "お-しい, お-しむ",
        "english": "pity"
    },
    {
        "kanji": "戚",
        "onyomi": "ソク, セキ",
        "kunyomi": "いた-む, うれ-える, みうち",
        "english": "grieve"
    },
    {
        "kanji": "斥",
        "onyomi": "セキ",
        "kunyomi": "しりぞ-ける",
        "english": "reject"
    },
    {
        "kanji": "昔",
        "onyomi": "セキ, シャク",
        "kunyomi": "むかし",
        "english": "once upon a time"
    },
    {
        "kanji": "析",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "chop"
    },
    {
        "kanji": "石",
        "onyomi": "セキ, シャク, コク",
        "kunyomi": "いし",
        "english": "stone"
    },
    {
        "kanji": "積",
        "onyomi": "セキ",
        "kunyomi": "つ-む, -づ-み, つ-もる, つ-もり",
        "english": "volume"
    },
    {
        "kanji": "籍",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "enroll"
    },
    {
        "kanji": "績",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "exploits"
    },
    {
        "kanji": "脊",
        "onyomi": "セキ",
        "kunyomi": "せ, せい",
        "english": "stature"
    },
    {
        "kanji": "責",
        "onyomi": "セキ",
        "kunyomi": "せ-める",
        "english": "blame"
    },
    {
        "kanji": "赤",
        "onyomi": "セキ, シャク",
        "kunyomi": "あか, あか-, あか-い, あか-らむ, あか-らめる",
        "english": "red"
    },
    {
        "kanji": "跡",
        "onyomi": "セキ",
        "kunyomi": "あと",
        "english": "tracks"
    },
    {
        "kanji": "蹟",
        "onyomi": "セキ, シャク",
        "kunyomi": "あと",
        "english": "remains"
    },
    {
        "kanji": "碩",
        "onyomi": "セキ",
        "kunyomi": "おお-きい",
        "english": "large"
    },
    {
        "kanji": "切",
        "onyomi": "セツ, サイ",
        "kunyomi": "き-る, -き-る, き-り, -き-り, -ぎ-り, き-れる, -き-れる, き-れ, -き-れ, -ぎ-れ",
        "english": "cut"
    },
    {
        "kanji": "拙",
        "onyomi": "セツ",
        "kunyomi": "つたな-い",
        "english": "bungling"
    },
    {
        "kanji": "接",
        "onyomi": "セツ, ショウ",
        "kunyomi": "つ-ぐ",
        "english": "touch"
    },
    {
        "kanji": "摂",
        "onyomi": "セツ, ショウ",
        "kunyomi": "おさ-める, かね-る, と-る",
        "english": "vicarious"
    },
    {
        "kanji": "折",
        "onyomi": "セツ, シャク",
        "kunyomi": "お-る, おり, お-り, -お-り, お-れる",
        "english": "fold"
    },
    {
        "kanji": "設",
        "onyomi": "セツ",
        "kunyomi": "もう-ける",
        "english": "establishment"
    },
    {
        "kanji": "窃",
        "onyomi": "セツ",
        "kunyomi": "ぬす-む, ひそ-か",
        "english": "stealth"
    },
    {
        "kanji": "節",
        "onyomi": "セツ, セチ",
        "kunyomi": "ふし, -ぶし, のっと",
        "english": "node"
    },
    {
        "kanji": "説",
        "onyomi": "セツ, ゼイ",
        "kunyomi": "と-く",
        "english": "opinion"
    },
    {
        "kanji": "雪",
        "onyomi": "セツ",
        "kunyomi": "ゆき",
        "english": "snow"
    },
    {
        "kanji": "絶",
        "onyomi": "ゼツ",
        "kunyomi": "た-える, た-やす, た-つ",
        "english": "discontinue"
    },
    {
        "kanji": "舌",
        "onyomi": "ゼツ",
        "kunyomi": "した",
        "english": "tongue"
    },
    {
        "kanji": "蝉",
        "onyomi": "セン, ゼン",
        "kunyomi": "せみ",
        "english": "cicada"
    },
    {
        "kanji": "仙",
        "onyomi": "セン, セント",
        "kunyomi": "",
        "english": "hermit"
    },
    {
        "kanji": "先",
        "onyomi": "セン",
        "kunyomi": "さき, ま-ず",
        "english": "before"
    },
    {
        "kanji": "千",
        "onyomi": "セン",
        "kunyomi": "ち",
        "english": "thousand"
    },
    {
        "kanji": "占",
        "onyomi": "セン",
        "kunyomi": "し-める, うらな-う",
        "english": "fortune-telling"
    },
    {
        "kanji": "宣",
        "onyomi": "セン",
        "kunyomi": "のたま-う",
        "english": "proclaim"
    },
    {
        "kanji": "専",
        "onyomi": "セン",
        "kunyomi": "もっぱ-ら",
        "english": "specialty"
    },
    {
        "kanji": "尖",
        "onyomi": "セン",
        "kunyomi": "とが-る, さき, するど-い",
        "english": "be pointed"
    },
    {
        "kanji": "川",
        "onyomi": "セン",
        "kunyomi": "かわ",
        "english": "stream"
    },
    {
        "kanji": "戦",
        "onyomi": "セン",
        "kunyomi": "いくさ, たたか-う, おのの-く, そよ-ぐ, わなな-く",
        "english": "war"
    },
    {
        "kanji": "扇",
        "onyomi": "セン",
        "kunyomi": "おうぎ",
        "english": "fan"
    },
    {
        "kanji": "撰",
        "onyomi": "サン, セン",
        "kunyomi": "せん-する, えら-む, えら-ぶ",
        "english": "composing"
    },
    {
        "kanji": "栓",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "plug"
    },
    {
        "kanji": "栴",
        "onyomi": "セイ, セン",
        "kunyomi": "もみじ",
        "english": "maple tree"
    },
    {
        "kanji": "泉",
        "onyomi": "セン",
        "kunyomi": "いずみ",
        "english": "spring"
    },
    {
        "kanji": "浅",
        "onyomi": "セン",
        "kunyomi": "あさ-い",
        "english": "shallow"
    },
    {
        "kanji": "洗",
        "onyomi": "セン",
        "kunyomi": "あら-う",
        "english": "wash"
    },
    {
        "kanji": "染",
        "onyomi": "セン",
        "kunyomi": "そ-める, そ-まる, し-みる, し-み",
        "english": "dye"
    },
    {
        "kanji": "潜",
        "onyomi": "セン",
        "kunyomi": "ひそ-む, もぐ-る, かく-れる, くぐ-る, ひそ-める",
        "english": "submerge"
    },
    {
        "kanji": "煎",
        "onyomi": "セン",
        "kunyomi": "せん-じる, い-る, に-る",
        "english": "broil"
    },
    {
        "kanji": "煽",
        "onyomi": "セン",
        "kunyomi": "あお-る, おだ-てる, おこ-る",
        "english": "fan"
    },
    {
        "kanji": "旋",
        "onyomi": "セン",
        "kunyomi": "め-ぐる, いばり",
        "english": "rotation"
    },
    {
        "kanji": "穿",
        "onyomi": "セン",
        "kunyomi": "うが-つ, は-く",
        "english": "put on (to the feet)"
    },
    {
        "kanji": "箭",
        "onyomi": "セン",
        "kunyomi": "や",
        "english": "arrow"
    },
    {
        "kanji": "線",
        "onyomi": "セン",
        "kunyomi": "すじ",
        "english": "line"
    },
    {
        "kanji": "繊",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "slender"
    },
    {
        "kanji": "羨",
        "onyomi": "セン, エン",
        "kunyomi": "うらや-む, あまり",
        "english": "envious"
    },
    {
        "kanji": "腺",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "gland"
    },
    {
        "kanji": "舛",
        "onyomi": "ブ, セン",
        "kunyomi": "まい, そむ-く",
        "english": "dancing radical (no. 136)"
    },
    {
        "kanji": "船",
        "onyomi": "セン",
        "kunyomi": "ふね, ふな-",
        "english": "ship"
    },
    {
        "kanji": "薦",
        "onyomi": "セン",
        "kunyomi": "すす-める",
        "english": "recommend"
    },
    {
        "kanji": "詮",
        "onyomi": "セン",
        "kunyomi": "せん-ずる, かい, あき-らか",
        "english": "discussion"
    },
    {
        "kanji": "賎",
        "onyomi": "セン, ゼン",
        "kunyomi": "いや-しい, いや-しむ, いや-しめる, しず, やす-い",
        "english": "despise"
    },
    {
        "kanji": "践",
        "onyomi": "セン",
        "kunyomi": "ふ-む",
        "english": "tread"
    },
    {
        "kanji": "選",
        "onyomi": "セン",
        "kunyomi": "えら-ぶ, え-る, よ-る",
        "english": "elect"
    },
    {
        "kanji": "遷",
        "onyomi": "セン",
        "kunyomi": "うつ-る, うつ-す, みやこがえ",
        "english": "transition"
    },
    {
        "kanji": "銭",
        "onyomi": "セン, ゼン",
        "kunyomi": "ぜに, すき",
        "english": "coin"
    },
    {
        "kanji": "銑",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "pig iron"
    },
    {
        "kanji": "閃",
        "onyomi": "セン",
        "kunyomi": "ひらめ-く, ひらめ-き, うかが-う",
        "english": "flash"
    },
    {
        "kanji": "鮮",
        "onyomi": "セン",
        "kunyomi": "あざ-やか",
        "english": "fresh"
    },
    {
        "kanji": "前",
        "onyomi": "ゼン",
        "kunyomi": "まえ, -まえ",
        "english": "in front"
    },
    {
        "kanji": "善",
        "onyomi": "ゼン",
        "kunyomi": "よ-い, い-い, よ-く, よし-とする",
        "english": "virtuous"
    },
    {
        "kanji": "漸",
        "onyomi": "ゼン",
        "kunyomi": "ようや-く, やや, ようよ-う, すす-む",
        "english": "steadily"
    },
    {
        "kanji": "然",
        "onyomi": "ゼン, ネン",
        "kunyomi": "しか, しか-り, しか-し, さ",
        "english": "sort of thing"
    },
    {
        "kanji": "全",
        "onyomi": "ゼン",
        "kunyomi": "まった-く, すべ-て",
        "english": "whole"
    },
    {
        "kanji": "禅",
        "onyomi": "ゼン, セン",
        "kunyomi": "しずか, ゆず-る",
        "english": "Zen"
    },
    {
        "kanji": "繕",
        "onyomi": "ゼン",
        "kunyomi": "つくろ-う",
        "english": "darning"
    },
    {
        "kanji": "膳",
        "onyomi": "ゼン, セン",
        "kunyomi": "かしわ, すす-める, そな-える",
        "english": "small low table"
    },
    {
        "kanji": "糎",
        "onyomi": "",
        "kunyomi": "センチ, センチメートル",
        "english": "centimeter"
    },
    {
        "kanji": "噌",
        "onyomi": "ソウ, ショウ, ソ",
        "kunyomi": "かまびす-しい",
        "english": "boisterous"
    },
    {
        "kanji": "塑",
        "onyomi": "ソ",
        "kunyomi": "でく",
        "english": "model"
    },
    {
        "kanji": "岨",
        "onyomi": "ソ, ショ",
        "kunyomi": "いしやま, そば",
        "english": "a rocky mountain"
    },
    {
        "kanji": "措",
        "onyomi": "ソ",
        "kunyomi": "お-く",
        "english": "set aside"
    },
    {
        "kanji": "曾",
        "onyomi": "ソウ, ソ, ゾウ",
        "kunyomi": "かつ-て, か-って, すなわち",
        "english": "once"
    },
    {
        "kanji": "曽",
        "onyomi": "ソウ, ソ, ゾウ",
        "kunyomi": "かつ, かつて, すなわち",
        "english": "formerly"
    },
    {
        "kanji": "楚",
        "onyomi": "ソ, ショ",
        "kunyomi": "いばら, しもと, すわえ",
        "english": "whip"
    },
    {
        "kanji": "狙",
        "onyomi": "ソ, ショ",
        "kunyomi": "ねら-う, ねら-い",
        "english": "aim at"
    },
    {
        "kanji": "疏",
        "onyomi": "ソ, ショ",
        "kunyomi": "あら-い, うと-い, うと-む, とお-る, とお-す, まばら",
        "english": "pass through"
    },
    {
        "kanji": "疎",
        "onyomi": "ソ, ショ",
        "kunyomi": "うと-い, うと-む, まば-ら",
        "english": "alienate"
    },
    {
        "kanji": "礎",
        "onyomi": "ソ",
        "kunyomi": "いしずえ",
        "english": "cornerstone"
    },
    {
        "kanji": "祖",
        "onyomi": "ソ",
        "kunyomi": "",
        "english": "ancestor"
    },
    {
        "kanji": "租",
        "onyomi": "ソ",
        "kunyomi": "",
        "english": "tariff"
    },
    {
        "kanji": "粗",
        "onyomi": "ソ",
        "kunyomi": "あら-い, あら-",
        "english": "coarse"
    },
    {
        "kanji": "素",
        "onyomi": "ソ, ス",
        "kunyomi": "もと",
        "english": "elementary"
    },
    {
        "kanji": "組",
        "onyomi": "ソ",
        "kunyomi": "く-む, くみ, -ぐみ",
        "english": "association"
    },
    {
        "kanji": "蘇",
        "onyomi": "ソ, ス",
        "kunyomi": "よみがえ-る",
        "english": "be resuscitated"
    },
    {
        "kanji": "訴",
        "onyomi": "ソ",
        "kunyomi": "うった-える",
        "english": "accusation"
    },
    {
        "kanji": "阻",
        "onyomi": "ソ",
        "kunyomi": "はば-む",
        "english": "thwart"
    },
    {
        "kanji": "遡",
        "onyomi": "ソ, サク",
        "kunyomi": "さかのぼ-る",
        "english": "go upstream"
    },
    {
        "kanji": "鼠",
        "onyomi": "ソ, ショ",
        "kunyomi": "ねずみ, ねず",
        "english": "rat"
    },
    {
        "kanji": "僧",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "Buddhist priest"
    },
    {
        "kanji": "創",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "つく-る, はじ-める, きず, けず-しける",
        "english": "genesis"
    },
    {
        "kanji": "双",
        "onyomi": "ソウ",
        "kunyomi": "ふた, たぐい, ならぶ, ふたつ",
        "english": "pair"
    },
    {
        "kanji": "叢",
        "onyomi": "ソウ, ス",
        "kunyomi": "くさむら, むら-がる, むら",
        "english": "plexus"
    },
    {
        "kanji": "倉",
        "onyomi": "ソウ",
        "kunyomi": "くら",
        "english": "godown"
    },
    {
        "kanji": "喪",
        "onyomi": "ソウ",
        "kunyomi": "も",
        "english": "miss"
    },
    {
        "kanji": "壮",
        "onyomi": "ソウ",
        "kunyomi": "さかん",
        "english": "robust"
    },
    {
        "kanji": "奏",
        "onyomi": "ソウ",
        "kunyomi": "かな-でる",
        "english": "play music"
    },
    {
        "kanji": "爽",
        "onyomi": "ソウ",
        "kunyomi": "あき-らか, さわ-やか, たがう",
        "english": "refreshing"
    },
    {
        "kanji": "宋",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "dwell"
    },
    {
        "kanji": "層",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "stratum"
    },
    {
        "kanji": "匝",
        "onyomi": "キョウ, ソウ",
        "kunyomi": "めぐ-る",
        "english": "go around"
    },
    {
        "kanji": "惣",
        "onyomi": "ソウ",
        "kunyomi": "すべ-て",
        "english": "all"
    },
    {
        "kanji": "想",
        "onyomi": "ソウ, ソ",
        "kunyomi": "おも-う",
        "english": "idea"
    },
    {
        "kanji": "捜",
        "onyomi": "ソウ, シュ, シュウ",
        "kunyomi": "さが-す",
        "english": "search"
    },
    {
        "kanji": "掃",
        "onyomi": "ソウ, シュ",
        "kunyomi": "は-く",
        "english": "sweep"
    },
    {
        "kanji": "挿",
        "onyomi": "ソウ",
        "kunyomi": "さ-す, はさ-む",
        "english": "insert"
    },
    {
        "kanji": "掻",
        "onyomi": "ソウ",
        "kunyomi": "か-く",
        "english": "scratch"
    },
    {
        "kanji": "操",
        "onyomi": "ソウ, サン",
        "kunyomi": "みさお, あやつ-る",
        "english": "maneuver"
    },
    {
        "kanji": "早",
        "onyomi": "ソウ, サッ",
        "kunyomi": "はや-い, はや, はや-, はや-まる, はや-める, さ-",
        "english": "early"
    },
    {
        "kanji": "曹",
        "onyomi": "ソウ, ゾウ",
        "kunyomi": "",
        "english": "office"
    },
    {
        "kanji": "巣",
        "onyomi": "ソウ",
        "kunyomi": "す, す-くう",
        "english": "nest"
    },
    {
        "kanji": "槍",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "やり",
        "english": "spear"
    },
    {
        "kanji": "槽",
        "onyomi": "ソウ",
        "kunyomi": "ふね",
        "english": "vat"
    },
    {
        "kanji": "漕",
        "onyomi": "ソウ",
        "kunyomi": "こ-ぐ, はこ-ぶ",
        "english": "rowing"
    },
    {
        "kanji": "燥",
        "onyomi": "ソウ",
        "kunyomi": "はしゃ-ぐ",
        "english": "parch"
    },
    {
        "kanji": "争",
        "onyomi": "ソウ",
        "kunyomi": "あらそ-う, いか-でか",
        "english": "contend"
    },
    {
        "kanji": "痩",
        "onyomi": "ソウ, チュウ, シュウ, シュ",
        "kunyomi": "や-せる",
        "english": "get thin"
    },
    {
        "kanji": "相",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "あい-",
        "english": "inter-"
    },
    {
        "kanji": "窓",
        "onyomi": "ソウ, ス",
        "kunyomi": "まど, てんまど, けむだし",
        "english": "window"
    },
    {
        "kanji": "糟",
        "onyomi": "コウ, ソウ",
        "kunyomi": "ぬか",
        "english": "dregs"
    },
    {
        "kanji": "総",
        "onyomi": "ソウ",
        "kunyomi": "す-べて, すべ-て, ふさ",
        "english": "general"
    },
    {
        "kanji": "綜",
        "onyomi": "ソウ",
        "kunyomi": "おさ-める, す-べる",
        "english": "rule"
    },
    {
        "kanji": "聡",
        "onyomi": "ソウ",
        "kunyomi": "さと-い, みみざと-い",
        "english": "wise"
    },
    {
        "kanji": "草",
        "onyomi": "ソウ",
        "kunyomi": "くさ, くさ-, -ぐさ",
        "english": "grass"
    },
    {
        "kanji": "荘",
        "onyomi": "ソウ, ショウ, チャン",
        "kunyomi": "ほうき, おごそ-か",
        "english": "villa"
    },
    {
        "kanji": "葬",
        "onyomi": "ソウ",
        "kunyomi": "ほうむ-る",
        "english": "interment"
    },
    {
        "kanji": "蒼",
        "onyomi": "ソウ",
        "kunyomi": "あお-い",
        "english": "blue"
    },
    {
        "kanji": "藻",
        "onyomi": "ソウ",
        "kunyomi": "も",
        "english": "seaweed"
    },
    {
        "kanji": "装",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "よそお-う, よそお-い",
        "english": "attire"
    },
    {
        "kanji": "走",
        "onyomi": "ソウ",
        "kunyomi": "はし-る",
        "english": "run"
    },
    {
        "kanji": "送",
        "onyomi": "ソウ",
        "kunyomi": "おく-る",
        "english": "escort"
    },
    {
        "kanji": "遭",
        "onyomi": "ソウ",
        "kunyomi": "あ-う, あ-わせる",
        "english": "encounter"
    },
    {
        "kanji": "鎗",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "やり",
        "english": "spear"
    },
    {
        "kanji": "霜",
        "onyomi": "ソウ",
        "kunyomi": "しも",
        "english": "frost"
    },
    {
        "kanji": "騒",
        "onyomi": "ソウ",
        "kunyomi": "さわ-ぐ, うれい, さわ-がしい",
        "english": "boisterous"
    },
    {
        "kanji": "像",
        "onyomi": "ゾウ",
        "kunyomi": "",
        "english": "statue"
    },
    {
        "kanji": "増",
        "onyomi": "ゾウ",
        "kunyomi": "ま-す, ま-し, ふ-える, ふ-やす",
        "english": "increase"
    },
    {
        "kanji": "憎",
        "onyomi": "ゾウ",
        "kunyomi": "にく-む, にく-い, にく-らしい, にく-しみ",
        "english": "hate"
    },
    {
        "kanji": "臓",
        "onyomi": "ゾウ",
        "kunyomi": "はらわた",
        "english": "entrails"
    },
    {
        "kanji": "蔵",
        "onyomi": "ゾウ, ソウ",
        "kunyomi": "くら, おさ-める, かく-れる",
        "english": "storehouse"
    },
    {
        "kanji": "贈",
        "onyomi": "ゾウ, ソウ",
        "kunyomi": "おく-る",
        "english": "presents"
    },
    {
        "kanji": "造",
        "onyomi": "ゾウ",
        "kunyomi": "つく-る, つく-り, -づく-り",
        "english": "create"
    },
    {
        "kanji": "促",
        "onyomi": "ソク",
        "kunyomi": "うなが-す",
        "english": "stimulate"
    },
    {
        "kanji": "側",
        "onyomi": "ソク",
        "kunyomi": "かわ, がわ, そば",
        "english": "side"
    },
    {
        "kanji": "則",
        "onyomi": "ソク",
        "kunyomi": "のっと-る, のり, すなわち",
        "english": "rule"
    },
    {
        "kanji": "即",
        "onyomi": "ソク",
        "kunyomi": "つ-く, つ-ける, すなわ-ち",
        "english": "instant"
    },
    {
        "kanji": "息",
        "onyomi": "ソク",
        "kunyomi": "いき",
        "english": "breath"
    },
    {
        "kanji": "捉",
        "onyomi": "ソク, サク",
        "kunyomi": "とら-える",
        "english": "catch"
    },
    {
        "kanji": "束",
        "onyomi": "ソク",
        "kunyomi": "たば, たば-ねる, つか, つか-ねる",
        "english": "bundle"
    },
    {
        "kanji": "測",
        "onyomi": "ソク",
        "kunyomi": "はか-る",
        "english": "fathom"
    },
    {
        "kanji": "足",
        "onyomi": "ソク",
        "kunyomi": "あし, た-りる, た-る, た-す",
        "english": "leg"
    },
    {
        "kanji": "速",
        "onyomi": "ソク",
        "kunyomi": "はや-い, はや-, はや-める, すみ-やか",
        "english": "quick"
    },
    {
        "kanji": "俗",
        "onyomi": "ゾク",
        "kunyomi": "",
        "english": "vulgar"
    },
    {
        "kanji": "属",
        "onyomi": "ゾク, ショク",
        "kunyomi": "さかん, つく, やから",
        "english": "belong"
    },
    {
        "kanji": "賊",
        "onyomi": "ゾク",
        "kunyomi": "",
        "english": "burglar"
    },
    {
        "kanji": "族",
        "onyomi": "ゾク",
        "kunyomi": "",
        "english": "tribe"
    },
    {
        "kanji": "続",
        "onyomi": "ゾク, ショク, コウ, キョウ",
        "kunyomi": "つづ-く, つづ-ける, つぐ-ない",
        "english": "continue"
    },
    {
        "kanji": "卒",
        "onyomi": "ソツ, シュツ",
        "kunyomi": "そっ-する, お-える, お-わる, ついに, にわか",
        "english": "graduate"
    },
    {
        "kanji": "袖",
        "onyomi": "シュウ",
        "kunyomi": "そで",
        "english": "sleeve"
    },
    {
        "kanji": "其",
        "onyomi": "キ, ギ, ゴ",
        "kunyomi": "それ, その",
        "english": "that"
    },
    {
        "kanji": "揃",
        "onyomi": "セン",
        "kunyomi": "そろ-える, そろ-う, そろ-い, き-る",
        "english": "be complete"
    },
    {
        "kanji": "存",
        "onyomi": "ソン, ゾン",
        "kunyomi": "ながら-える, あ-る, たも-つ, と-う",
        "english": "exist"
    },
    {
        "kanji": "孫",
        "onyomi": "ソン",
        "kunyomi": "まご",
        "english": "grandchild"
    },
    {
        "kanji": "尊",
        "onyomi": "ソン",
        "kunyomi": "たっと-い, とうと-い, たっと-ぶ, とうと-ぶ",
        "english": "revered"
    },
    {
        "kanji": "損",
        "onyomi": "ソン",
        "kunyomi": "そこ-なう, そこな-う, -そこ-なう, そこ-ねる, -そこ-ねる",
        "english": "damage"
    },
    {
        "kanji": "村",
        "onyomi": "ソン",
        "kunyomi": "むら",
        "english": "village"
    },
    {
        "kanji": "遜",
        "onyomi": "ソン",
        "kunyomi": "したが-う, へりくだ-る, ゆず-る",
        "english": "humble"
    },
    {
        "kanji": "他",
        "onyomi": "タ",
        "kunyomi": "ほか",
        "english": "other"
    },
    {
        "kanji": "多",
        "onyomi": "タ",
        "kunyomi": "おお-い, まさ-に, まさ-る",
        "english": "many"
    },
    {
        "kanji": "太",
        "onyomi": "タイ, タ",
        "kunyomi": "ふと-い, ふと-る",
        "english": "plump"
    },
    {
        "kanji": "汰",
        "onyomi": "タ, タイ",
        "kunyomi": "おご-る, にご-る, よな-げる",
        "english": "washing"
    },
    {
        "kanji": "詑",
        "onyomi": "イ, タ, ダ",
        "kunyomi": "わ-びる, わ-び, あざむ-く",
        "english": "deceive"
    },
    {
        "kanji": "唾",
        "onyomi": "ダ, タ",
        "kunyomi": "つば, つばき",
        "english": "saliva"
    },
    {
        "kanji": "堕",
        "onyomi": "ダ",
        "kunyomi": "お-ちる, くず-す, くず-れる",
        "english": "degenerate"
    },
    {
        "kanji": "妥",
        "onyomi": "ダ",
        "kunyomi": "",
        "english": "gentle"
    },
    {
        "kanji": "惰",
        "onyomi": "ダ",
        "kunyomi": "",
        "english": "lazy"
    },
    {
        "kanji": "打",
        "onyomi": "ダ, ダース",
        "kunyomi": "う-つ, う-ち-, ぶ-つ",
        "english": "strike"
    },
    {
        "kanji": "柁",
        "onyomi": "ダ, タ",
        "kunyomi": "かじ",
        "english": "rudder"
    },
    {
        "kanji": "舵",
        "onyomi": "ダ, タ",
        "kunyomi": "かじ",
        "english": "rudder"
    },
    {
        "kanji": "楕",
        "onyomi": "ダ, タ",
        "kunyomi": "",
        "english": "ellipse"
    },
    {
        "kanji": "陀",
        "onyomi": "タ, ダ, イ, チ, ジ",
        "kunyomi": "けわ-しい, ななめ",
        "english": "steep"
    },
    {
        "kanji": "駄",
        "onyomi": "ダ, タ",
        "kunyomi": "",
        "english": "burdensome"
    },
    {
        "kanji": "騨",
        "onyomi": "タン, ダン, タ, ダ, テン",
        "kunyomi": "",
        "english": "dappled grey horse"
    },
    {
        "kanji": "体",
        "onyomi": "タイ, テイ",
        "kunyomi": "からだ, かたち",
        "english": "body"
    },
    {
        "kanji": "堆",
        "onyomi": "タイ, ツイ",
        "kunyomi": "うずたか-い",
        "english": "piled high"
    },
    {
        "kanji": "対",
        "onyomi": "タイ, ツイ",
        "kunyomi": "あいて, こた-える, そろ-い, つれあ-い, なら-ぶ, むか-う",
        "english": "vis-a-vis"
    },
    {
        "kanji": "耐",
        "onyomi": "タイ",
        "kunyomi": "た-える",
        "english": "-proof"
    },
    {
        "kanji": "岱",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "old name for a Chinese mountain"
    },
    {
        "kanji": "帯",
        "onyomi": "タイ",
        "kunyomi": "お-びる, おび",
        "english": "sash"
    },
    {
        "kanji": "待",
        "onyomi": "タイ",
        "kunyomi": "ま-つ, -ま-ち",
        "english": "wait"
    },
    {
        "kanji": "怠",
        "onyomi": "タイ",
        "kunyomi": "おこた-る, なま-ける",
        "english": "neglect"
    },
    {
        "kanji": "態",
        "onyomi": "タイ",
        "kunyomi": "わざ-と",
        "english": "attitude"
    },
    {
        "kanji": "戴",
        "onyomi": "タイ",
        "kunyomi": "いただ-く",
        "english": "be crowned with"
    },
    {
        "kanji": "替",
        "onyomi": "タイ",
        "kunyomi": "か-える, か-え-, か-わる",
        "english": "exchange"
    },
    {
        "kanji": "泰",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "peaceful"
    },
    {
        "kanji": "滞",
        "onyomi": "タイ, テイ",
        "kunyomi": "とどこお-る",
        "english": "stagnate"
    },
    {
        "kanji": "胎",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "womb"
    },
    {
        "kanji": "腿",
        "onyomi": "タイ",
        "kunyomi": "もも",
        "english": "thigh"
    },
    {
        "kanji": "苔",
        "onyomi": "タイ",
        "kunyomi": "こけ, こけら",
        "english": "moss"
    },
    {
        "kanji": "袋",
        "onyomi": "タイ, ダイ",
        "kunyomi": "ふくろ",
        "english": "sack"
    },
    {
        "kanji": "貸",
        "onyomi": "タイ",
        "kunyomi": "か-す, か-し-, かし-",
        "english": "lend"
    },
    {
        "kanji": "退",
        "onyomi": "タイ",
        "kunyomi": "しりぞ-く, しりぞ-ける, ひ-く, の-く, の-ける, ど-く",
        "english": "retreat"
    },
    {
        "kanji": "逮",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "apprehend"
    },
    {
        "kanji": "隊",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "regiment"
    },
    {
        "kanji": "黛",
        "onyomi": "タイ",
        "kunyomi": "まゆずみ",
        "english": "blackened eyebrows"
    },
    {
        "kanji": "鯛",
        "onyomi": "チョウ",
        "kunyomi": "たい",
        "english": "sea bream"
    },
    {
        "kanji": "代",
        "onyomi": "ダイ, タイ",
        "kunyomi": "か-わる, かわ-る, かわ-り, か-わり, -がわ-り, -が-わり, か-える, よ, しろ",
        "english": "substitute"
    },
    {
        "kanji": "台",
        "onyomi": "ダイ, タイ",
        "kunyomi": "うてな, われ, つかさ",
        "english": "pedestal"
    },
    {
        "kanji": "大",
        "onyomi": "ダイ, タイ",
        "kunyomi": "おお-, おお-きい, -おお-いに",
        "english": "large"
    },
    {
        "kanji": "第",
        "onyomi": "ダイ, テイ",
        "kunyomi": "",
        "english": "No."
    },
    {
        "kanji": "醍",
        "onyomi": "ダイ, タイ, テイ",
        "kunyomi": "",
        "english": "whey"
    },
    {
        "kanji": "題",
        "onyomi": "ダイ",
        "kunyomi": "",
        "english": "topic"
    },
    {
        "kanji": "鷹",
        "onyomi": "ヨウ, オウ",
        "kunyomi": "たか",
        "english": "hawk"
    },
    {
        "kanji": "滝",
        "onyomi": "ロウ, ソウ",
        "kunyomi": "たき",
        "english": "waterfall"
    },
    {
        "kanji": "瀧",
        "onyomi": "ロウ, ソウ",
        "kunyomi": "たき",
        "english": "waterfall"
    },
    {
        "kanji": "卓",
        "onyomi": "タク",
        "kunyomi": "",
        "english": "eminent"
    },
    {
        "kanji": "啄",
        "onyomi": "タク, ツク, トク",
        "kunyomi": "ついば-む, つつ-く",
        "english": "peck"
    },
    {
        "kanji": "宅",
        "onyomi": "タク",
        "kunyomi": "",
        "english": "home"
    },
    {
        "kanji": "托",
        "onyomi": "タク",
        "kunyomi": "たく-する, たの-む",
        "english": "requesting"
    },
    {
        "kanji": "択",
        "onyomi": "タク",
        "kunyomi": "えら-ぶ",
        "english": "choose"
    },
    {
        "kanji": "拓",
        "onyomi": "タク",
        "kunyomi": "ひら-く",
        "english": "clear (the land)"
    },
    {
        "kanji": "沢",
        "onyomi": "タク",
        "kunyomi": "さわ, うるお-い, うるお-す, つや",
        "english": "swamp"
    },
    {
        "kanji": "濯",
        "onyomi": "タク",
        "kunyomi": "すす-ぐ, ゆす-ぐ",
        "english": "laundry"
    },
    {
        "kanji": "琢",
        "onyomi": "タク",
        "kunyomi": "みが-く",
        "english": "polish"
    },
    {
        "kanji": "託",
        "onyomi": "タク",
        "kunyomi": "かこつ-ける, かこ-つ, かこ-つける",
        "english": "consign"
    },
    {
        "kanji": "鐸",
        "onyomi": "タク",
        "kunyomi": "",
        "english": "large hand bell"
    },
    {
        "kanji": "濁",
        "onyomi": "ダク, ジョク",
        "kunyomi": "にご-る, にご-す",
        "english": "voiced"
    },
    {
        "kanji": "諾",
        "onyomi": "ダク",
        "kunyomi": "",
        "english": "consent"
    },
    {
        "kanji": "茸",
        "onyomi": "ジョウ, ニュ",
        "kunyomi": "きのこ, たけ, しげ-る",
        "english": "mushroom"
    },
    {
        "kanji": "凧",
        "onyomi": "",
        "kunyomi": "いかのぼり, たこ",
        "english": "kite"
    },
    {
        "kanji": "蛸",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "たこ",
        "english": "octopus"
    },
    {
        "kanji": "只",
        "onyomi": "シ",
        "kunyomi": "ただ",
        "english": "only"
    },
    {
        "kanji": "叩",
        "onyomi": "コウ",
        "kunyomi": "たた-く, はた-く, すぎ",
        "english": "strike"
    },
    {
        "kanji": "但",
        "onyomi": "タン",
        "kunyomi": "ただ-し",
        "english": "however"
    },
    {
        "kanji": "達",
        "onyomi": "タツ, ダ",
        "kunyomi": "-たち",
        "english": "accomplished"
    },
    {
        "kanji": "辰",
        "onyomi": "シン, ジン",
        "kunyomi": "たつ",
        "english": "sign of the dragon"
    },
    {
        "kanji": "奪",
        "onyomi": "ダツ",
        "kunyomi": "うば-う",
        "english": "rob"
    },
    {
        "kanji": "脱",
        "onyomi": "ダツ",
        "kunyomi": "ぬ-ぐ, ぬ-げる",
        "english": "undress"
    },
    {
        "kanji": "巽",
        "onyomi": "ソン",
        "kunyomi": "たつみ",
        "english": "southeast"
    },
    {
        "kanji": "竪",
        "onyomi": "ジュ",
        "kunyomi": "たて, た-てる, こども",
        "english": "length"
    },
    {
        "kanji": "辿",
        "onyomi": "テン",
        "kunyomi": "たど-る, たどり",
        "english": "follow (road)"
    },
    {
        "kanji": "棚",
        "onyomi": "ホウ",
        "kunyomi": "たな, -だな",
        "english": "shelf"
    },
    {
        "kanji": "谷",
        "onyomi": "コク",
        "kunyomi": "たに, きわ-まる",
        "english": "valley"
    },
    {
        "kanji": "狸",
        "onyomi": "リ, ライ",
        "kunyomi": "たぬき",
        "english": "tanuki"
    },
    {
        "kanji": "鱈",
        "onyomi": "セツ",
        "kunyomi": "たら",
        "english": "codfish"
    },
    {
        "kanji": "樽",
        "onyomi": "ソン",
        "kunyomi": "たる",
        "english": "barrel"
    },
    {
        "kanji": "誰",
        "onyomi": "スイ",
        "kunyomi": "だれ, たれ, た",
        "english": "who"
    },
    {
        "kanji": "丹",
        "onyomi": "タン",
        "kunyomi": "に",
        "english": "rust-colored"
    },
    {
        "kanji": "単",
        "onyomi": "タン",
        "kunyomi": "ひとえ",
        "english": "simple"
    },
    {
        "kanji": "嘆",
        "onyomi": "タン",
        "kunyomi": "なげ-く, なげ-かわしい",
        "english": "sigh"
    },
    {
        "kanji": "坦",
        "onyomi": "タン",
        "kunyomi": "たいら",
        "english": "level"
    },
    {
        "kanji": "担",
        "onyomi": "タン",
        "kunyomi": "かつ-ぐ, にな-う",
        "english": "shouldering"
    },
    {
        "kanji": "探",
        "onyomi": "タン",
        "kunyomi": "さぐ-る, さが-す",
        "english": "grope"
    },
    {
        "kanji": "旦",
        "onyomi": "タン, ダン",
        "kunyomi": "あき-らか, あきら, ただし, あさ, あした",
        "english": "daybreak"
    },
    {
        "kanji": "歎",
        "onyomi": "タン",
        "kunyomi": "なげ-く, なげ-き",
        "english": "grief"
    },
    {
        "kanji": "淡",
        "onyomi": "タン",
        "kunyomi": "あわ-い",
        "english": "thin"
    },
    {
        "kanji": "湛",
        "onyomi": "タン, チン, ジン, セン",
        "kunyomi": "しず-む, たた-える",
        "english": "fill"
    },
    {
        "kanji": "炭",
        "onyomi": "タン",
        "kunyomi": "すみ",
        "english": "charcoal"
    },
    {
        "kanji": "短",
        "onyomi": "タン",
        "kunyomi": "みじか-い",
        "english": "short"
    },
    {
        "kanji": "端",
        "onyomi": "タン",
        "kunyomi": "はし, は, はた, -ばた, はな",
        "english": "edge"
    },
    {
        "kanji": "箪",
        "onyomi": "タン",
        "kunyomi": "はこ",
        "english": "bamboo rice basket"
    },
    {
        "kanji": "綻",
        "onyomi": "タン",
        "kunyomi": "ほころ-びる",
        "english": "be rent"
    },
    {
        "kanji": "耽",
        "onyomi": "タン",
        "kunyomi": "ふけ-る",
        "english": "addicted"
    },
    {
        "kanji": "胆",
        "onyomi": "タン",
        "kunyomi": "きも",
        "english": "gall bladder"
    },
    {
        "kanji": "蛋",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "barbarian"
    },
    {
        "kanji": "誕",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "nativity"
    },
    {
        "kanji": "鍛",
        "onyomi": "タン",
        "kunyomi": "きた-える",
        "english": "forge"
    },
    {
        "kanji": "団",
        "onyomi": "ダン, トン",
        "kunyomi": "かたまり, まる-い",
        "english": "group"
    },
    {
        "kanji": "壇",
        "onyomi": "ダン, タン",
        "kunyomi": "",
        "english": "podium"
    },
    {
        "kanji": "弾",
        "onyomi": "ダン, タン",
        "kunyomi": "ひ-く, -ひ-き, はず-む, たま, はじ-く, はじ-ける, ただ-す, はじ-きゆみ",
        "english": "bullet"
    },
    {
        "kanji": "断",
        "onyomi": "ダン",
        "kunyomi": "た-つ, ことわ-る, さだ-める",
        "english": "severance"
    },
    {
        "kanji": "暖",
        "onyomi": "ダン, ノン",
        "kunyomi": "あたた-か, あたた-かい, あたた-まる, あたた-める",
        "english": "warmth"
    },
    {
        "kanji": "檀",
        "onyomi": "ダン, タン",
        "kunyomi": "まゆみ",
        "english": "cedar"
    },
    {
        "kanji": "段",
        "onyomi": "ダン, タン",
        "kunyomi": "",
        "english": "grade"
    },
    {
        "kanji": "男",
        "onyomi": "ダン, ナン",
        "kunyomi": "おとこ, お",
        "english": "male"
    },
    {
        "kanji": "談",
        "onyomi": "ダン",
        "kunyomi": "",
        "english": "discuss"
    },
    {
        "kanji": "値",
        "onyomi": "チ",
        "kunyomi": "ね, あたい",
        "english": "price"
    },
    {
        "kanji": "知",
        "onyomi": "チ",
        "kunyomi": "し-る, し-らせる",
        "english": "know"
    },
    {
        "kanji": "地",
        "onyomi": "チ, ジ",
        "kunyomi": "",
        "english": "ground"
    },
    {
        "kanji": "弛",
        "onyomi": "チ, シ",
        "kunyomi": "たる-む, たる-める, たゆ-む, ゆる-む, ゆる-み",
        "english": "slacken"
    },
    {
        "kanji": "恥",
        "onyomi": "チ",
        "kunyomi": "は-じる, はじ, は-じらう, は-ずかしい",
        "english": "shame"
    },
    {
        "kanji": "智",
        "onyomi": "チ",
        "kunyomi": "",
        "english": "wisdom"
    },
    {
        "kanji": "池",
        "onyomi": "チ",
        "kunyomi": "いけ",
        "english": "pond"
    },
    {
        "kanji": "痴",
        "onyomi": "チ",
        "kunyomi": "し-れる, おろか",
        "english": "stupid"
    },
    {
        "kanji": "稚",
        "onyomi": "チ, ジ",
        "kunyomi": "いとけない, おさない, おくて, おでる",
        "english": "immature"
    },
    {
        "kanji": "置",
        "onyomi": "チ",
        "kunyomi": "お-く, -お-き",
        "english": "placement"
    },
    {
        "kanji": "致",
        "onyomi": "チ",
        "kunyomi": "いた-す",
        "english": "doth"
    },
    {
        "kanji": "蜘",
        "onyomi": "チ",
        "kunyomi": "くも",
        "english": "spider"
    },
    {
        "kanji": "遅",
        "onyomi": "チ",
        "kunyomi": "おく-れる, おく-らす, おそ-い",
        "english": "slow"
    },
    {
        "kanji": "馳",
        "onyomi": "チ, ジ",
        "kunyomi": "は-せる",
        "english": "run"
    },
    {
        "kanji": "築",
        "onyomi": "チク",
        "kunyomi": "きず-く",
        "english": "fabricate"
    },
    {
        "kanji": "畜",
        "onyomi": "チク",
        "kunyomi": "",
        "english": "livestock"
    },
    {
        "kanji": "竹",
        "onyomi": "チク",
        "kunyomi": "たけ",
        "english": "bamboo"
    },
    {
        "kanji": "筑",
        "onyomi": "チク",
        "kunyomi": "",
        "english": "an ancient musical instrument"
    },
    {
        "kanji": "蓄",
        "onyomi": "チク",
        "kunyomi": "たくわ-える",
        "english": "amass"
    },
    {
        "kanji": "逐",
        "onyomi": "チク",
        "kunyomi": "",
        "english": "pursue"
    },
    {
        "kanji": "秩",
        "onyomi": "チツ",
        "kunyomi": "",
        "english": "regularity"
    },
    {
        "kanji": "窒",
        "onyomi": "チツ",
        "kunyomi": "",
        "english": "plug up"
    },
    {
        "kanji": "茶",
        "onyomi": "チャ, サ",
        "kunyomi": "",
        "english": "tea"
    },
    {
        "kanji": "嫡",
        "onyomi": "チャク, テキ",
        "kunyomi": "",
        "english": "legitimate wife"
    },
    {
        "kanji": "着",
        "onyomi": "チャク, ジャク",
        "kunyomi": "き-る, き-せる, つ-く, つ-ける",
        "english": "don"
    },
    {
        "kanji": "中",
        "onyomi": "チュウ",
        "kunyomi": "なか, うち, あた-る",
        "english": "in"
    },
    {
        "kanji": "仲",
        "onyomi": "チュウ",
        "kunyomi": "なか",
        "english": "go-between"
    },
    {
        "kanji": "宙",
        "onyomi": "チュウ",
        "kunyomi": "",
        "english": "mid-air"
    },
    {
        "kanji": "忠",
        "onyomi": "チュウ",
        "kunyomi": "",
        "english": "loyalty"
    },
    {
        "kanji": "抽",
        "onyomi": "チュウ",
        "kunyomi": "ひき-",
        "english": "pluck"
    },
    {
        "kanji": "昼",
        "onyomi": "チュウ",
        "kunyomi": "ひる",
        "english": "daytime"
    },
    {
        "kanji": "柱",
        "onyomi": "チュウ",
        "kunyomi": "はしら",
        "english": "pillar"
    },
    {
        "kanji": "注",
        "onyomi": "チュウ",
        "kunyomi": "そそ-ぐ, さ-す, つ-ぐ",
        "english": "pour"
    },
    {
        "kanji": "虫",
        "onyomi": "チュウ, キ",
        "kunyomi": "むし",
        "english": "insect"
    },
    {
        "kanji": "衷",
        "onyomi": "チュウ",
        "kunyomi": "",
        "english": "inmost"
    },
    {
        "kanji": "註",
        "onyomi": "チュウ",
        "kunyomi": "",
        "english": "notes"
    },
    {
        "kanji": "酎",
        "onyomi": "チュウ, チュ",
        "kunyomi": "かも-す",
        "english": "sake"
    },
    {
        "kanji": "鋳",
        "onyomi": "チュウ, イ, シュ, シュウ",
        "kunyomi": "い-る",
        "english": "casting"
    },
    {
        "kanji": "駐",
        "onyomi": "チュウ",
        "kunyomi": "",
        "english": "stop-over"
    },
    {
        "kanji": "樗",
        "onyomi": "チョ",
        "kunyomi": "おおち, おうち",
        "english": "Japanese bead tree"
    },
    {
        "kanji": "瀦",
        "onyomi": "チョ",
        "kunyomi": "",
        "english": "pool"
    },
    {
        "kanji": "猪",
        "onyomi": "チョ",
        "kunyomi": "い, いのしし",
        "english": "boar"
    },
    {
        "kanji": "苧",
        "onyomi": "チョ",
        "kunyomi": "お, からんし, からむし",
        "english": "hemp"
    },
    {
        "kanji": "著",
        "onyomi": "チョ, チャク",
        "kunyomi": "あらわ-す, いちじる-しい",
        "english": "renowned"
    },
    {
        "kanji": "貯",
        "onyomi": "チョ",
        "kunyomi": "た-める, たくわ-える",
        "english": "savings"
    },
    {
        "kanji": "丁",
        "onyomi": "チョウ, テイ, チン, トウ, チ",
        "kunyomi": "ひのと",
        "english": "street"
    },
    {
        "kanji": "兆",
        "onyomi": "チョウ",
        "kunyomi": "きざ-す, きざ-し",
        "english": "portent"
    },
    {
        "kanji": "凋",
        "onyomi": "チョウ",
        "kunyomi": "しぼ-む",
        "english": "wither"
    },
    {
        "kanji": "喋",
        "onyomi": "チョウ, トウ",
        "kunyomi": "しゃべ-る, ついば-む",
        "english": "talk"
    },
    {
        "kanji": "寵",
        "onyomi": "チョウ",
        "kunyomi": "めぐ-み, めぐ-む",
        "english": "affection"
    },
    {
        "kanji": "帖",
        "onyomi": "チョウ, ジョウ",
        "kunyomi": "かきもの",
        "english": "quire (of paper)"
    },
    {
        "kanji": "帳",
        "onyomi": "チョウ",
        "kunyomi": "とばり",
        "english": "notebook"
    },
    {
        "kanji": "庁",
        "onyomi": "チョウ, テイ",
        "kunyomi": "やくしょ",
        "english": "government office"
    },
    {
        "kanji": "弔",
        "onyomi": "チョウ",
        "kunyomi": "とむら-う, とぶら-う",
        "english": "condolences"
    },
    {
        "kanji": "張",
        "onyomi": "チョウ",
        "kunyomi": "は-る, -は-り, -ば-り",
        "english": "counter for bows & stringed instruments"
    },
    {
        "kanji": "彫",
        "onyomi": "チョウ",
        "kunyomi": "ほ-る, -ぼ-り",
        "english": "carve"
    },
    {
        "kanji": "徴",
        "onyomi": "チョウ, チ",
        "kunyomi": "しるし",
        "english": "indications"
    },
    {
        "kanji": "懲",
        "onyomi": "チョウ",
        "kunyomi": "こ-りる, こ-らす, こ-らしめる",
        "english": "penal"
    },
    {
        "kanji": "挑",
        "onyomi": "チョウ",
        "kunyomi": "いど-む",
        "english": "challenge"
    },
    {
        "kanji": "暢",
        "onyomi": "チョウ",
        "kunyomi": "のび-る",
        "english": "stretch"
    },
    {
        "kanji": "朝",
        "onyomi": "チョウ",
        "kunyomi": "あさ",
        "english": "morning"
    },
    {
        "kanji": "潮",
        "onyomi": "チョウ",
        "kunyomi": "しお, うしお",
        "english": "tide"
    },
    {
        "kanji": "牒",
        "onyomi": "チョウ, ジョウ",
        "kunyomi": "ふだ",
        "english": "label"
    },
    {
        "kanji": "町",
        "onyomi": "チョウ",
        "kunyomi": "まち",
        "english": "town"
    },
    {
        "kanji": "眺",
        "onyomi": "チョウ",
        "kunyomi": "なが-める",
        "english": "stare"
    },
    {
        "kanji": "聴",
        "onyomi": "チョウ, テイ",
        "kunyomi": "き-く, ゆる-す",
        "english": "listen"
    },
    {
        "kanji": "脹",
        "onyomi": "チョウ",
        "kunyomi": "は-れる, ふく-らむ, ふく-れる",
        "english": "dilate"
    },
    {
        "kanji": "腸",
        "onyomi": "チョウ",
        "kunyomi": "はらわた, わた",
        "english": "intestines"
    },
    {
        "kanji": "蝶",
        "onyomi": "チョウ",
        "kunyomi": "",
        "english": "butterfly"
    },
    {
        "kanji": "調",
        "onyomi": "チョウ",
        "kunyomi": "しら-べる, しら-べ, ととの-う, ととの-える",
        "english": "tune"
    },
    {
        "kanji": "諜",
        "onyomi": "チョウ",
        "kunyomi": "ちょう-ずる, うかが-う, しめ-す",
        "english": "spy out"
    },
    {
        "kanji": "超",
        "onyomi": "チョウ",
        "kunyomi": "こ-える, こ-す",
        "english": "transcend"
    },
    {
        "kanji": "跳",
        "onyomi": "チョウ",
        "kunyomi": "は-ねる, と-ぶ, -と-び",
        "english": "hop"
    },
    {
        "kanji": "銚",
        "onyomi": "チョウ, ヨウ",
        "kunyomi": "なべ",
        "english": "sake bottle"
    },
    {
        "kanji": "長",
        "onyomi": "チョウ",
        "kunyomi": "なが-い, おさ",
        "english": "long"
    },
    {
        "kanji": "頂",
        "onyomi": "チョウ",
        "kunyomi": "いただ-く, いただき",
        "english": "place on the head"
    },
    {
        "kanji": "鳥",
        "onyomi": "チョウ",
        "kunyomi": "とり",
        "english": "bird"
    },
    {
        "kanji": "勅",
        "onyomi": "チョク",
        "kunyomi": "いまし-める, みことのり",
        "english": "imperial order"
    },
    {
        "kanji": "捗",
        "onyomi": "チョク, ホ",
        "kunyomi": "はかど-る",
        "english": "make progress"
    },
    {
        "kanji": "直",
        "onyomi": "チョク, ジキ, ジカ",
        "kunyomi": "ただ-ちに, なお-す, -なお-す, なお-る, なお-き, す-ぐ",
        "english": "straightaway"
    },
    {
        "kanji": "朕",
        "onyomi": "チン",
        "kunyomi": "",
        "english": "majestic plural"
    },
    {
        "kanji": "沈",
        "onyomi": "チン, ジン",
        "kunyomi": "しず-む, しず-める",
        "english": "sink"
    },
    {
        "kanji": "珍",
        "onyomi": "チン",
        "kunyomi": "めずら-しい, たから",
        "english": "rare"
    },
    {
        "kanji": "賃",
        "onyomi": "チン",
        "kunyomi": "",
        "english": "fare"
    },
    {
        "kanji": "鎮",
        "onyomi": "チン",
        "kunyomi": "しず-める, しず-まる, おさえ",
        "english": "tranquilize"
    },
    {
        "kanji": "陳",
        "onyomi": "チン",
        "kunyomi": "ひ-ねる",
        "english": "exhibit"
    },
    {
        "kanji": "津",
        "onyomi": "シン",
        "kunyomi": "つ",
        "english": "haven"
    },
    {
        "kanji": "墜",
        "onyomi": "ツイ",
        "kunyomi": "お-ちる, お-つ",
        "english": "crash"
    },
    {
        "kanji": "椎",
        "onyomi": "ツイ, スイ",
        "kunyomi": "つち, う-つ",
        "english": "chinquapin"
    },
    {
        "kanji": "槌",
        "onyomi": "ツイ",
        "kunyomi": "つち",
        "english": "hammer"
    },
    {
        "kanji": "追",
        "onyomi": "ツイ",
        "kunyomi": "お-う",
        "english": "chase"
    },
    {
        "kanji": "鎚",
        "onyomi": "ツイ, タイ",
        "kunyomi": "つち",
        "english": "hammer"
    },
    {
        "kanji": "痛",
        "onyomi": "ツウ",
        "kunyomi": "いた-い, いた-む, いた-ましい, いた-める",
        "english": "pain"
    },
    {
        "kanji": "通",
        "onyomi": "ツウ, ツ",
        "kunyomi": "とお-る, とお-り, -とお-り, -どお-り, とお-す, とお-し, -どお-し, かよ-う",
        "english": "traffic"
    },
    {
        "kanji": "塚",
        "onyomi": "チョウ",
        "kunyomi": "つか, -づか",
        "english": "hillock"
    },
    {
        "kanji": "栂",
        "onyomi": "",
        "kunyomi": "つが, とが",
        "english": "hemlock"
    },
    {
        "kanji": "掴",
        "onyomi": "カク",
        "kunyomi": "つか-む, つか-まえる, つか-まる",
        "english": "catch"
    },
    {
        "kanji": "槻",
        "onyomi": "キ",
        "kunyomi": "つき",
        "english": "Zelkova tree"
    },
    {
        "kanji": "佃",
        "onyomi": "テン, デン",
        "kunyomi": "つくだ",
        "english": "cultivated rice field"
    },
    {
        "kanji": "漬",
        "onyomi": "シ",
        "kunyomi": "つ-ける, つ-かる, -づ-け, -づけ",
        "english": "pickling"
    },
    {
        "kanji": "柘",
        "onyomi": "シャ, ジャク",
        "kunyomi": "そ, つげ, やまぐわ",
        "english": "wild mulberry"
    },
    {
        "kanji": "辻",
        "onyomi": "",
        "kunyomi": "つじ",
        "english": "crossing"
    },
    {
        "kanji": "蔦",
        "onyomi": "チョウ",
        "kunyomi": "つた",
        "english": "vine"
    },
    {
        "kanji": "綴",
        "onyomi": "テイ, テツ, テチ, ゲツ",
        "kunyomi": "と-じる, つづ-る, つづり, すみ-やか",
        "english": "compose"
    },
    {
        "kanji": "鍔",
        "onyomi": "ガク",
        "kunyomi": "つば",
        "english": "sword guard"
    },
    {
        "kanji": "椿",
        "onyomi": "チン, チュン",
        "kunyomi": "つばき",
        "english": "camellia"
    },
    {
        "kanji": "潰",
        "onyomi": "カイ, エ",
        "kunyomi": "つぶ-す, つぶ-れる, つい-える",
        "english": "crush"
    },
    {
        "kanji": "坪",
        "onyomi": "ヘイ",
        "kunyomi": "つぼ",
        "english": "two-mat area"
    },
    {
        "kanji": "壷",
        "onyomi": "コ",
        "kunyomi": "つぼ",
        "english": "jar"
    },
    {
        "kanji": "嬬",
        "onyomi": "ジュ",
        "kunyomi": "よわ-い",
        "english": "mistress"
    },
    {
        "kanji": "紬",
        "onyomi": "チュウ",
        "kunyomi": "つむぎ, つむ-ぐ",
        "english": "pongee (a knotted silk cloth)"
    },
    {
        "kanji": "爪",
        "onyomi": "ソウ",
        "kunyomi": "つめ, つま-",
        "english": "claw"
    },
    {
        "kanji": "吊",
        "onyomi": "チョウ",
        "kunyomi": "つ-る, つる-す",
        "english": "suspend"
    },
    {
        "kanji": "釣",
        "onyomi": "チョウ",
        "kunyomi": "つ-る, つ-り, つ-り-",
        "english": "angling"
    },
    {
        "kanji": "鶴",
        "onyomi": "カク",
        "kunyomi": "つる",
        "english": "crane"
    },
    {
        "kanji": "亭",
        "onyomi": "テイ, チン",
        "kunyomi": "",
        "english": "pavilion"
    },
    {
        "kanji": "低",
        "onyomi": "テイ",
        "kunyomi": "ひく-い, ひく-める, ひく-まる",
        "english": "lower"
    },
    {
        "kanji": "停",
        "onyomi": "テイ",
        "kunyomi": "と-める, と-まる",
        "english": "halt"
    },
    {
        "kanji": "偵",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "spy"
    },
    {
        "kanji": "剃",
        "onyomi": "テイ",
        "kunyomi": "まい, そ-る, す-る",
        "english": "shave"
    },
    {
        "kanji": "貞",
        "onyomi": "テイ, ジョウ",
        "kunyomi": "ただし-い, さだ",
        "english": "upright"
    },
    {
        "kanji": "呈",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "display"
    },
    {
        "kanji": "堤",
        "onyomi": "テイ",
        "kunyomi": "つつみ",
        "english": "dike"
    },
    {
        "kanji": "定",
        "onyomi": "テイ, ジョウ",
        "kunyomi": "さだ-める, さだ-まる, さだ-か",
        "english": "determine"
    },
    {
        "kanji": "帝",
        "onyomi": "テイ",
        "kunyomi": "みかど",
        "english": "sovereign"
    },
    {
        "kanji": "底",
        "onyomi": "テイ",
        "kunyomi": "そこ",
        "english": "bottom"
    },
    {
        "kanji": "庭",
        "onyomi": "テイ",
        "kunyomi": "にわ",
        "english": "courtyard"
    },
    {
        "kanji": "廷",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "courts"
    },
    {
        "kanji": "弟",
        "onyomi": "テイ, ダイ, デ",
        "kunyomi": "おとうと",
        "english": "younger brother"
    },
    {
        "kanji": "悌",
        "onyomi": "テイ, ダイ",
        "kunyomi": "",
        "english": "serving our elders"
    },
    {
        "kanji": "抵",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "resist"
    },
    {
        "kanji": "挺",
        "onyomi": "チョウ, テイ",
        "kunyomi": "ぬ-く",
        "english": "bravely volunteer"
    },
    {
        "kanji": "提",
        "onyomi": "テイ, チョウ, ダイ",
        "kunyomi": "さ-げる",
        "english": "propose"
    },
    {
        "kanji": "梯",
        "onyomi": "テイ, タイ",
        "kunyomi": "はしご",
        "english": "ladder"
    },
    {
        "kanji": "汀",
        "onyomi": "テイ",
        "kunyomi": "みぎわ, なぎさ",
        "english": "water's edge"
    },
    {
        "kanji": "碇",
        "onyomi": "テイ",
        "kunyomi": "いかり",
        "english": "anchor"
    },
    {
        "kanji": "禎",
        "onyomi": "テイ",
        "kunyomi": "さいわ-い",
        "english": "happiness"
    },
    {
        "kanji": "程",
        "onyomi": "テイ",
        "kunyomi": "ほど, -ほど",
        "english": "extent"
    },
    {
        "kanji": "締",
        "onyomi": "テイ",
        "kunyomi": "し-まる, し-まり, し-める, -し-め, -じ-め",
        "english": "tighten"
    },
    {
        "kanji": "艇",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "rowboat"
    },
    {
        "kanji": "訂",
        "onyomi": "テイ",
        "kunyomi": "ただ-す",
        "english": "revise"
    },
    {
        "kanji": "諦",
        "onyomi": "テイ, タイ",
        "kunyomi": "あきら-める, つまびらか, まこと",
        "english": "truth"
    },
    {
        "kanji": "蹄",
        "onyomi": "テイ",
        "kunyomi": "ひづめ",
        "english": "hoof"
    },
    {
        "kanji": "逓",
        "onyomi": "テイ",
        "kunyomi": "かわ-る, たがいに",
        "english": "relay"
    },
    {
        "kanji": "邸",
        "onyomi": "テイ",
        "kunyomi": "やしき",
        "english": "residence"
    },
    {
        "kanji": "鄭",
        "onyomi": "テイ, ジョウ",
        "kunyomi": "",
        "english": "an ancient Chinese province"
    },
    {
        "kanji": "釘",
        "onyomi": "テイ, チョウ",
        "kunyomi": "くぎ",
        "english": "nail"
    },
    {
        "kanji": "鼎",
        "onyomi": "テイ",
        "kunyomi": "かなえ",
        "english": "three legged kettle"
    },
    {
        "kanji": "泥",
        "onyomi": "デイ, ナイ, デ, ニ",
        "kunyomi": "どろ, なず-む",
        "english": "mud"
    },
    {
        "kanji": "摘",
        "onyomi": "テキ",
        "kunyomi": "つ-む",
        "english": "pinch"
    },
    {
        "kanji": "擢",
        "onyomi": "テキ, タク",
        "kunyomi": "ぬ-く, ぬき-んでる",
        "english": "excel in"
    },
    {
        "kanji": "敵",
        "onyomi": "テキ",
        "kunyomi": "かたき, あだ, かな-う",
        "english": "enemy"
    },
    {
        "kanji": "滴",
        "onyomi": "テキ",
        "kunyomi": "しずく, したた-る",
        "english": "drip"
    },
    {
        "kanji": "的",
        "onyomi": "テキ",
        "kunyomi": "まと",
        "english": "bull's eye"
    },
    {
        "kanji": "笛",
        "onyomi": "テキ",
        "kunyomi": "ふえ",
        "english": "flute"
    },
    {
        "kanji": "適",
        "onyomi": "テキ",
        "kunyomi": "かな-う",
        "english": "suitable"
    },
    {
        "kanji": "鏑",
        "onyomi": "テキ",
        "kunyomi": "かぶら, かぶらや, やじり",
        "english": "arrowhead"
    },
    {
        "kanji": "溺",
        "onyomi": "デキ, ジョウ, ニョウ",
        "kunyomi": "いばり, おぼ-れる",
        "english": "drown"
    },
    {
        "kanji": "哲",
        "onyomi": "テツ",
        "kunyomi": "さとい, あきらか",
        "english": "philosophy"
    },
    {
        "kanji": "徹",
        "onyomi": "テツ",
        "kunyomi": "",
        "english": "penetrate"
    },
    {
        "kanji": "撤",
        "onyomi": "テツ",
        "kunyomi": "",
        "english": "remove"
    },
    {
        "kanji": "轍",
        "onyomi": "テツ",
        "kunyomi": "わだちい, わだち",
        "english": "rut"
    },
    {
        "kanji": "迭",
        "onyomi": "テツ",
        "kunyomi": "",
        "english": "transfer"
    },
    {
        "kanji": "鉄",
        "onyomi": "テツ",
        "kunyomi": "くろがね",
        "english": "iron"
    },
    {
        "kanji": "典",
        "onyomi": "テン, デン",
        "kunyomi": "ふみ, のり",
        "english": "code"
    },
    {
        "kanji": "填",
        "onyomi": "テン, チン",
        "kunyomi": "は-まる, は-める, うず-める, しず-める, ふさ-ぐ",
        "english": "fill in"
    },
    {
        "kanji": "天",
        "onyomi": "テン",
        "kunyomi": "あまつ, あめ, あま-",
        "english": "heavens"
    },
    {
        "kanji": "展",
        "onyomi": "テン",
        "kunyomi": "",
        "english": "unfold"
    },
    {
        "kanji": "店",
        "onyomi": "テン",
        "kunyomi": "みせ, たな",
        "english": "store"
    },
    {
        "kanji": "添",
        "onyomi": "テン",
        "kunyomi": "そ-える, そ-う",
        "english": "annexed"
    },
    {
        "kanji": "纏",
        "onyomi": "テン, デン",
        "kunyomi": "まつ-わる, まと-う, まと-める, まと-まる, まと-い",
        "english": "wear"
    },
    {
        "kanji": "甜",
        "onyomi": "テン",
        "kunyomi": "うま-い, あま-い",
        "english": "sweet"
    },
    {
        "kanji": "貼",
        "onyomi": "テン, チョウ",
        "kunyomi": "は-る, つ-く",
        "english": "stick"
    },
    {
        "kanji": "転",
        "onyomi": "テン",
        "kunyomi": "ころ-がる, ころ-げる, ころ-がす, ころ-ぶ, まろ-ぶ, うたた, うつ-る, くる-めく",
        "english": "revolve"
    },
    {
        "kanji": "顛",
        "onyomi": "テン",
        "kunyomi": "いただき, たお-れる",
        "english": "overturn"
    },
    {
        "kanji": "点",
        "onyomi": "テン",
        "kunyomi": "つ-ける, つ-く, た-てる, さ-す, とぼ-す, とも-す, ぼち",
        "english": "spot"
    },
    {
        "kanji": "伝",
        "onyomi": "デン, テン",
        "kunyomi": "つた-わる, つた-える, つた-う, つだ-う, -づた-い, つて",
        "english": "transmit"
    },
    {
        "kanji": "殿",
        "onyomi": "デン, テン",
        "kunyomi": "との, -どの",
        "english": "Mr."
    },
    {
        "kanji": "澱",
        "onyomi": "デン, テン",
        "kunyomi": "おり, ど-ろ, よど-み, よど-む",
        "english": "sediment"
    },
    {
        "kanji": "田",
        "onyomi": "デン",
        "kunyomi": "た",
        "english": "rice field"
    },
    {
        "kanji": "電",
        "onyomi": "デン",
        "kunyomi": "",
        "english": "electricity"
    },
    {
        "kanji": "兎",
        "onyomi": "ト, ツ",
        "kunyomi": "うさぎ",
        "english": "rabbit"
    },
    {
        "kanji": "吐",
        "onyomi": "ト",
        "kunyomi": "は-く, つ-く",
        "english": "spit"
    },
    {
        "kanji": "堵",
        "onyomi": "ト",
        "kunyomi": "かき",
        "english": "fence"
    },
    {
        "kanji": "塗",
        "onyomi": "ト",
        "kunyomi": "ぬ-る, ぬ-り, まみ-れる",
        "english": "paint"
    },
    {
        "kanji": "妬",
        "onyomi": "ト, ツ",
        "kunyomi": "ねた-む, そね-む, つも-る, ふさ-ぐ",
        "english": "jealous"
    },
    {
        "kanji": "屠",
        "onyomi": "ト, チョ",
        "kunyomi": "ほふ-る",
        "english": "slaughter"
    },
    {
        "kanji": "徒",
        "onyomi": "ト",
        "kunyomi": "いたずら, あだ",
        "english": "on foot"
    },
    {
        "kanji": "斗",
        "onyomi": "ト, トウ",
        "kunyomi": "",
        "english": "Big Dipper"
    },
    {
        "kanji": "杜",
        "onyomi": "ト, トウ, ズ",
        "kunyomi": "もり, ふさ-ぐ, やまなし",
        "english": "woods"
    },
    {
        "kanji": "渡",
        "onyomi": "ト",
        "kunyomi": "わた-る, -わた-る, わた-す",
        "english": "transit"
    },
    {
        "kanji": "登",
        "onyomi": "トウ, ト, ドウ, ショウ, チョウ",
        "kunyomi": "のぼ-る, あ-がる",
        "english": "ascend"
    },
    {
        "kanji": "菟",
        "onyomi": "ト, ツ",
        "kunyomi": "うさぎ",
        "english": "dodder (plant)"
    },
    {
        "kanji": "賭",
        "onyomi": "ト",
        "kunyomi": "か-ける, かけ",
        "english": "gamble"
    },
    {
        "kanji": "途",
        "onyomi": "ト",
        "kunyomi": "みち",
        "english": "route"
    },
    {
        "kanji": "都",
        "onyomi": "ト, ツ",
        "kunyomi": "みやこ",
        "english": "metropolis"
    },
    {
        "kanji": "鍍",
        "onyomi": "ト",
        "kunyomi": "めっき",
        "english": "plating"
    },
    {
        "kanji": "砥",
        "onyomi": "シ, テイ, キイ, チ",
        "kunyomi": "と, といし, と-ぐ, みが-く",
        "english": "whetstone"
    },
    {
        "kanji": "砺",
        "onyomi": "レイ",
        "kunyomi": "あらと, みが-く",
        "english": "whetstone"
    },
    {
        "kanji": "努",
        "onyomi": "ド",
        "kunyomi": "つと-める",
        "english": "toil"
    },
    {
        "kanji": "度",
        "onyomi": "ド, ト, タク",
        "kunyomi": "たび, -た-い",
        "english": "degrees"
    },
    {
        "kanji": "土",
        "onyomi": "ド, ト",
        "kunyomi": "つち",
        "english": "soil"
    },
    {
        "kanji": "奴",
        "onyomi": "ド",
        "kunyomi": "やつ, やっこ",
        "english": "guy"
    },
    {
        "kanji": "怒",
        "onyomi": "ド, ヌ",
        "kunyomi": "いか-る, おこ-る",
        "english": "angry"
    },
    {
        "kanji": "倒",
        "onyomi": "トウ",
        "kunyomi": "たお-れる, -だお-れ, たお-す, さかさま, さかさ, さかしま",
        "english": "overthrow"
    },
    {
        "kanji": "党",
        "onyomi": "トウ",
        "kunyomi": "なかま, むら",
        "english": "party"
    },
    {
        "kanji": "冬",
        "onyomi": "トウ",
        "kunyomi": "ふゆ",
        "english": "winter"
    },
    {
        "kanji": "凍",
        "onyomi": "トウ",
        "kunyomi": "こお-る, こご-える, こご-る, い-てる, し-みる",
        "english": "frozen"
    },
    {
        "kanji": "刀",
        "onyomi": "トウ",
        "kunyomi": "かたな, そり",
        "english": "sword"
    },
    {
        "kanji": "唐",
        "onyomi": "トウ",
        "kunyomi": "から",
        "english": "T'ang"
    },
    {
        "kanji": "塔",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "pagoda"
    },
    {
        "kanji": "塘",
        "onyomi": "トウ",
        "kunyomi": "つつみ",
        "english": "dike"
    },
    {
        "kanji": "套",
        "onyomi": "トウ",
        "kunyomi": "かさ-ねる",
        "english": "accumulate"
    },
    {
        "kanji": "宕",
        "onyomi": "トウ",
        "kunyomi": "すぎる",
        "english": "cave"
    },
    {
        "kanji": "島",
        "onyomi": "トウ",
        "kunyomi": "しま",
        "english": "island"
    },
    {
        "kanji": "嶋",
        "onyomi": "トウ",
        "kunyomi": "しま",
        "english": "island"
    },
    {
        "kanji": "悼",
        "onyomi": "トウ",
        "kunyomi": "いた-む",
        "english": "lament"
    },
    {
        "kanji": "投",
        "onyomi": "トウ",
        "kunyomi": "な-げる, -な-げ",
        "english": "throw"
    },
    {
        "kanji": "搭",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "board"
    },
    {
        "kanji": "東",
        "onyomi": "トウ",
        "kunyomi": "ひがし",
        "english": "east"
    },
    {
        "kanji": "桃",
        "onyomi": "トウ",
        "kunyomi": "もも",
        "english": "peach"
    },
    {
        "kanji": "梼",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "block of wood"
    },
    {
        "kanji": "棟",
        "onyomi": "トウ",
        "kunyomi": "むね, むな-",
        "english": "ridgepole"
    },
    {
        "kanji": "盗",
        "onyomi": "トウ",
        "kunyomi": "ぬす-む, ぬす-み",
        "english": "steal"
    },
    {
        "kanji": "淘",
        "onyomi": "トウ",
        "kunyomi": "よな-げる",
        "english": "select"
    },
    {
        "kanji": "湯",
        "onyomi": "トウ",
        "kunyomi": "ゆ",
        "english": "hot water"
    },
    {
        "kanji": "涛",
        "onyomi": "トウ",
        "kunyomi": "なみ",
        "english": "waves"
    },
    {
        "kanji": "灯",
        "onyomi": "トウ",
        "kunyomi": "ひ, ほ-, ともしび, とも-す, あかり",
        "english": "lamp"
    },
    {
        "kanji": "燈",
        "onyomi": "トウ",
        "kunyomi": "ひ, ほ-, ともしび, とも-す, あかり",
        "english": "lamp"
    },
    {
        "kanji": "当",
        "onyomi": "トウ",
        "kunyomi": "あ-たる, あ-たり, あ-てる, あ-て, まさ-に, まさ-にべし",
        "english": "hit"
    },
    {
        "kanji": "痘",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "pox"
    },
    {
        "kanji": "祷",
        "onyomi": "トウ",
        "kunyomi": "いの-る, いの-り, まつ-る",
        "english": "pray"
    },
    {
        "kanji": "等",
        "onyomi": "トウ",
        "kunyomi": "ひと-しい, など, -ら",
        "english": "etc."
    },
    {
        "kanji": "答",
        "onyomi": "トウ",
        "kunyomi": "こた-える, こた-え",
        "english": "solution"
    },
    {
        "kanji": "筒",
        "onyomi": "トウ",
        "kunyomi": "つつ",
        "english": "cylinder"
    },
    {
        "kanji": "糖",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "sugar"
    },
    {
        "kanji": "統",
        "onyomi": "トウ",
        "kunyomi": "す-べる",
        "english": "overall"
    },
    {
        "kanji": "到",
        "onyomi": "トウ",
        "kunyomi": "いた-る",
        "english": "arrival"
    },
    {
        "kanji": "董",
        "onyomi": "トウ",
        "kunyomi": "ただ-す",
        "english": "correct"
    },
    {
        "kanji": "蕩",
        "onyomi": "トウ",
        "kunyomi": "とろ-かす, とろ-ける, うご-く",
        "english": "melt"
    },
    {
        "kanji": "藤",
        "onyomi": "トウ, ドウ",
        "kunyomi": "ふじ",
        "english": "wisteria"
    },
    {
        "kanji": "討",
        "onyomi": "トウ",
        "kunyomi": "う-つ",
        "english": "chastise"
    },
    {
        "kanji": "謄",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "mimeograph"
    },
    {
        "kanji": "豆",
        "onyomi": "トウ, ズ",
        "kunyomi": "まめ, まめ-",
        "english": "beans"
    },
    {
        "kanji": "踏",
        "onyomi": "トウ",
        "kunyomi": "ふ-む, ふ-まえる",
        "english": "step"
    },
    {
        "kanji": "逃",
        "onyomi": "トウ",
        "kunyomi": "に-げる, に-がす, のが-す, のが-れる",
        "english": "escape"
    },
    {
        "kanji": "透",
        "onyomi": "トウ",
        "kunyomi": "す-く, す-かす, す-ける, とう-る, とう-す",
        "english": "transparent"
    },
    {
        "kanji": "鐙",
        "onyomi": "トウ",
        "kunyomi": "あぶみ, たかつき, ひともし",
        "english": "stirrup"
    },
    {
        "kanji": "陶",
        "onyomi": "トウ",
        "kunyomi": "すえ",
        "english": "pottery"
    },
    {
        "kanji": "頭",
        "onyomi": "トウ, ズ, ト",
        "kunyomi": "あたま, かしら, -がしら, かぶり",
        "english": "head"
    },
    {
        "kanji": "騰",
        "onyomi": "トウ",
        "kunyomi": "あが-る, のぼ-る",
        "english": "leaping up"
    },
    {
        "kanji": "闘",
        "onyomi": "トウ",
        "kunyomi": "たたか-う, あらそ-う",
        "english": "fight"
    },
    {
        "kanji": "働",
        "onyomi": "ドウ",
        "kunyomi": "はたら-く",
        "english": "work"
    },
    {
        "kanji": "動",
        "onyomi": "ドウ",
        "kunyomi": "うご-く, うご-かす",
        "english": "move"
    },
    {
        "kanji": "同",
        "onyomi": "ドウ",
        "kunyomi": "おな-じ",
        "english": "same"
    },
    {
        "kanji": "堂",
        "onyomi": "ドウ",
        "kunyomi": "",
        "english": "public chamber"
    },
    {
        "kanji": "導",
        "onyomi": "ドウ",
        "kunyomi": "みちび-く",
        "english": "guidance"
    },
    {
        "kanji": "憧",
        "onyomi": "ショウ, トウ, ドウ",
        "kunyomi": "あこが-れる",
        "english": "yearn after"
    },
    {
        "kanji": "撞",
        "onyomi": "ドウ, トウ, シュ",
        "kunyomi": "つ-く",
        "english": "thrust"
    },
    {
        "kanji": "洞",
        "onyomi": "ドウ",
        "kunyomi": "ほら",
        "english": "den"
    },
    {
        "kanji": "瞳",
        "onyomi": "ドウ, トウ",
        "kunyomi": "ひとみ",
        "english": "pupil (of eye)"
    },
    {
        "kanji": "童",
        "onyomi": "ドウ",
        "kunyomi": "わらべ",
        "english": "juvenile"
    },
    {
        "kanji": "胴",
        "onyomi": "ドウ",
        "kunyomi": "",
        "english": "trunk"
    },
    {
        "kanji": "萄",
        "onyomi": "ドウ, トウ",
        "kunyomi": "",
        "english": "grape vine"
    },
    {
        "kanji": "道",
        "onyomi": "ドウ, トウ",
        "kunyomi": "みち, いう",
        "english": "road-way"
    },
    {
        "kanji": "銅",
        "onyomi": "ドウ",
        "kunyomi": "あかがね",
        "english": "copper"
    },
    {
        "kanji": "峠",
        "onyomi": "",
        "kunyomi": "とうげ",
        "english": "mountain peak"
    },
    {
        "kanji": "鴇",
        "onyomi": "ホウ",
        "kunyomi": "とき, のがん",
        "english": "wild goose"
    },
    {
        "kanji": "匿",
        "onyomi": "トク",
        "kunyomi": "かくま-う",
        "english": "hide"
    },
    {
        "kanji": "得",
        "onyomi": "トク",
        "kunyomi": "え-る, う-る",
        "english": "gain"
    },
    {
        "kanji": "徳",
        "onyomi": "トク",
        "kunyomi": "",
        "english": "benevolence"
    },
    {
        "kanji": "涜",
        "onyomi": "トク, トウ",
        "kunyomi": "けが-す, けが-れ, みぞ",
        "english": "defile"
    },
    {
        "kanji": "特",
        "onyomi": "トク",
        "kunyomi": "",
        "english": "special"
    },
    {
        "kanji": "督",
        "onyomi": "トク",
        "kunyomi": "",
        "english": "coach"
    },
    {
        "kanji": "禿",
        "onyomi": "トク",
        "kunyomi": "ちび-る, かむろ, は-げる, はげ",
        "english": "become bald"
    },
    {
        "kanji": "篤",
        "onyomi": "トク",
        "kunyomi": "あつ-い",
        "english": "fervent"
    },
    {
        "kanji": "毒",
        "onyomi": "ドク",
        "kunyomi": "",
        "english": "poison"
    },
    {
        "kanji": "独",
        "onyomi": "ドク, トク",
        "kunyomi": "ひと-り",
        "english": "single"
    },
    {
        "kanji": "読",
        "onyomi": "ドク, トク, トウ",
        "kunyomi": "よ-む, -よ-み",
        "english": "read"
    },
    {
        "kanji": "栃",
        "onyomi": "",
        "kunyomi": "とち",
        "english": "horse chestnut"
    },
    {
        "kanji": "橡",
        "onyomi": "ショウ, ゾウ",
        "kunyomi": "とち, くぬぎ",
        "english": "horse chestnut"
    },
    {
        "kanji": "凸",
        "onyomi": "トツ",
        "kunyomi": "でこ",
        "english": "convex"
    },
    {
        "kanji": "突",
        "onyomi": "トツ, カ",
        "kunyomi": "つ-く",
        "english": "stab"
    },
    {
        "kanji": "椴",
        "onyomi": "タン, ダン, トド",
        "kunyomi": "むくげ",
        "english": "fir"
    },
    {
        "kanji": "届",
        "onyomi": "カイ",
        "kunyomi": "とど-ける, -とど-け, とど-く",
        "english": "deliver"
    },
    {
        "kanji": "鳶",
        "onyomi": "エン",
        "kunyomi": "とび, とんび",
        "english": "black kite"
    },
    {
        "kanji": "苫",
        "onyomi": "セン",
        "kunyomi": "とま",
        "english": "rush matting"
    },
    {
        "kanji": "寅",
        "onyomi": "イン",
        "kunyomi": "とら",
        "english": "sign of the tiger"
    },
    {
        "kanji": "酉",
        "onyomi": "ユウ",
        "kunyomi": "とり",
        "english": "west"
    },
    {
        "kanji": "瀞",
        "onyomi": "セイ, ショウ, ジュウ",
        "kunyomi": "とろ, きよ-い",
        "english": "pure water"
    },
    {
        "kanji": "噸",
        "onyomi": "トン",
        "kunyomi": "",
        "english": "tonnage"
    },
    {
        "kanji": "屯",
        "onyomi": "トン",
        "kunyomi": "たむろ",
        "english": "barracks"
    },
    {
        "kanji": "惇",
        "onyomi": "シュン, ジュン, トン",
        "kunyomi": "あつ-い",
        "english": "sincere"
    },
    {
        "kanji": "敦",
        "onyomi": "トン, タイ, ダン, チョウ",
        "kunyomi": "あつ-い",
        "english": "industry"
    },
    {
        "kanji": "沌",
        "onyomi": "トン",
        "kunyomi": "くら-い",
        "english": "primeval chaos"
    },
    {
        "kanji": "豚",
        "onyomi": "トン",
        "kunyomi": "ぶた",
        "english": "pork"
    },
    {
        "kanji": "遁",
        "onyomi": "トン, シュン",
        "kunyomi": "のが-れる",
        "english": "flee"
    },
    {
        "kanji": "頓",
        "onyomi": "トン, トツ",
        "kunyomi": "にわか-に, とん-と, つまず-く, とみ-に, ぬかずく",
        "english": "suddenly"
    },
    {
        "kanji": "呑",
        "onyomi": "トン, ドン",
        "kunyomi": "の-む",
        "english": "drink"
    },
    {
        "kanji": "曇",
        "onyomi": "ドン",
        "kunyomi": "くも-る",
        "english": "cloudy weather"
    },
    {
        "kanji": "鈍",
        "onyomi": "ドン",
        "kunyomi": "にぶ-い, にぶ-る, にぶ-, なま-る, なまく-ら",
        "english": "dull"
    },
    {
        "kanji": "奈",
        "onyomi": "ナ, ナイ, ダイ",
        "kunyomi": "いかん, からなし",
        "english": "Nara"
    },
    {
        "kanji": "那",
        "onyomi": "ナ, ダ",
        "kunyomi": "なに, なんぞ, いかん",
        "english": "what?"
    },
    {
        "kanji": "内",
        "onyomi": "ナイ, ダイ",
        "kunyomi": "うち",
        "english": "inside"
    },
    {
        "kanji": "乍",
        "onyomi": "サ, サク",
        "kunyomi": "-なが-ら, たちま-ち",
        "english": "though"
    },
    {
        "kanji": "凪",
        "onyomi": "",
        "kunyomi": "なぎ, な-ぐ",
        "english": "lull"
    },
    {
        "kanji": "薙",
        "onyomi": "テイ, チ",
        "kunyomi": "な-ぐ, なぎ, か-る",
        "english": "mow down (the enemy)"
    },
    {
        "kanji": "謎",
        "onyomi": "メイ, ベイ",
        "kunyomi": "なぞ",
        "english": "riddle"
    },
    {
        "kanji": "灘",
        "onyomi": "タン, ダン",
        "kunyomi": "なだ, せ",
        "english": "open sea"
    },
    {
        "kanji": "捺",
        "onyomi": "ナツ, ダツ",
        "kunyomi": "さ-す, お-す",
        "english": "press"
    },
    {
        "kanji": "鍋",
        "onyomi": "カ",
        "kunyomi": "なべ",
        "english": "pot"
    },
    {
        "kanji": "楢",
        "onyomi": "シュウ, ユウ",
        "kunyomi": "なら",
        "english": "oak"
    },
    {
        "kanji": "馴",
        "onyomi": "ジュン, シュン, クン",
        "kunyomi": "な-れる, な-らす, したが-う",
        "english": "get used to"
    },
    {
        "kanji": "縄",
        "onyomi": "ジョウ",
        "kunyomi": "なわ, ただ-す",
        "english": "straw rope"
    },
    {
        "kanji": "畷",
        "onyomi": "テツ, テイ, セイ",
        "kunyomi": "なわて",
        "english": "rice field ridge path"
    },
    {
        "kanji": "南",
        "onyomi": "ナン, ナ",
        "kunyomi": "みなみ",
        "english": "south"
    },
    {
        "kanji": "楠",
        "onyomi": "ナン, ダン, ゼン, ネン",
        "kunyomi": "くす, くすのき",
        "english": "camphor tree"
    },
    {
        "kanji": "軟",
        "onyomi": "ナン",
        "kunyomi": "やわ-らか, やわ-らかい",
        "english": "soft"
    },
    {
        "kanji": "難",
        "onyomi": "ナン",
        "kunyomi": "かた-い, -がた-い, むずか-しい, むづか-しい, むつか-しい, -にく-い",
        "english": "difficult"
    },
    {
        "kanji": "汝",
        "onyomi": "ジョ",
        "kunyomi": "なんじ, なれ, い, うぬ, いまし, し, しゃ, な, なむち, まし, みまし",
        "english": "you"
    },
    {
        "kanji": "二",
        "onyomi": "ニ, ジ",
        "kunyomi": "ふた, ふた-つ, ふたたび",
        "english": "two"
    },
    {
        "kanji": "尼",
        "onyomi": "ニ",
        "kunyomi": "あま",
        "english": "nun"
    },
    {
        "kanji": "弐",
        "onyomi": "ニ, ジ",
        "kunyomi": "ふた-つ, そえ",
        "english": "II"
    },
    {
        "kanji": "迩",
        "onyomi": "ジ, ニ",
        "kunyomi": "ちか-い",
        "english": "approach"
    },
    {
        "kanji": "匂",
        "onyomi": "",
        "kunyomi": "にお-う, にお-い, にお-わせる",
        "english": "fragrant"
    },
    {
        "kanji": "賑",
        "onyomi": "シン",
        "kunyomi": "にぎ-わい, にぎ-やか, にぎ-わす, にぎ-わう",
        "english": "flourish"
    },
    {
        "kanji": "肉",
        "onyomi": "ニク",
        "kunyomi": "しし",
        "english": "meat"
    },
    {
        "kanji": "虹",
        "onyomi": "コウ",
        "kunyomi": "にじ",
        "english": "rainbow"
    },
    {
        "kanji": "廿",
        "onyomi": "ジュウ, ニュウ",
        "kunyomi": "にじゅう",
        "english": "twenty"
    },
    {
        "kanji": "日",
        "onyomi": "ニチ, ジツ",
        "kunyomi": "ひ, -び, -か",
        "english": "day"
    },
    {
        "kanji": "乳",
        "onyomi": "ニュウ",
        "kunyomi": "ちち, ち",
        "english": "milk"
    },
    {
        "kanji": "入",
        "onyomi": "ニュウ, ジュ",
        "kunyomi": "い-る, -い-る, -い-り, い-れる, -い-れ, はい-る",
        "english": "enter"
    },
    {
        "kanji": "如",
        "onyomi": "ジョ, ニョ",
        "kunyomi": "ごと-し",
        "english": "likeness"
    },
    {
        "kanji": "尿",
        "onyomi": "ニョウ",
        "kunyomi": "ゆばり, いばり, しと",
        "english": "urine"
    },
    {
        "kanji": "韮",
        "onyomi": "キュウ, ク",
        "kunyomi": "にら",
        "english": "leek"
    },
    {
        "kanji": "任",
        "onyomi": "ニン",
        "kunyomi": "まか-せる, まか-す",
        "english": "responsibility"
    },
    {
        "kanji": "妊",
        "onyomi": "ニン, ジン",
        "kunyomi": "はら-む, みごも-る",
        "english": "pregnancy"
    },
    {
        "kanji": "忍",
        "onyomi": "ニン",
        "kunyomi": "しの-ぶ, しの-ばせる",
        "english": "endure"
    },
    {
        "kanji": "認",
        "onyomi": "ニン",
        "kunyomi": "みと-める, したた-める",
        "english": "acknowledge"
    },
    {
        "kanji": "濡",
        "onyomi": "ジュ, ニュ",
        "kunyomi": "ぬれ-る, ぬら-す, ぬ-れる, ぬ-らす, うるお-い, うるお-う, うるお-す",
        "english": "get wet"
    },
    {
        "kanji": "禰",
        "onyomi": "ネ, デイ, ナイ",
        "kunyomi": "",
        "english": "ancestral shrine"
    },
    {
        "kanji": "祢",
        "onyomi": "ネ, デイ, ナイ",
        "kunyomi": "",
        "english": "ancestral shrine"
    },
    {
        "kanji": "寧",
        "onyomi": "ネイ",
        "kunyomi": "むし-ろ",
        "english": "rather"
    },
    {
        "kanji": "葱",
        "onyomi": "ソウ",
        "kunyomi": "ねぎ",
        "english": "stone leek"
    },
    {
        "kanji": "猫",
        "onyomi": "ビョウ",
        "kunyomi": "ねこ",
        "english": "cat"
    },
    {
        "kanji": "熱",
        "onyomi": "ネツ",
        "kunyomi": "あつ-い",
        "english": "heat"
    },
    {
        "kanji": "年",
        "onyomi": "ネン",
        "kunyomi": "とし",
        "english": "year"
    },
    {
        "kanji": "念",
        "onyomi": "ネン",
        "kunyomi": "",
        "english": "wish"
    },
    {
        "kanji": "捻",
        "onyomi": "ネン, ジョウ",
        "kunyomi": "ね-じる, ねじ-る, ひね-くる, ひね-る",
        "english": "twirl"
    },
    {
        "kanji": "撚",
        "onyomi": "ネン",
        "kunyomi": "よ-る, よ-れる, より, ひね-る",
        "english": "twist"
    },
    {
        "kanji": "燃",
        "onyomi": "ネン",
        "kunyomi": "も-える, も-やす, も-す",
        "english": "burn"
    },
    {
        "kanji": "粘",
        "onyomi": "ネン",
        "kunyomi": "ねば-る",
        "english": "sticky"
    },
    {
        "kanji": "乃",
        "onyomi": "ナイ, ダイ, ノ, アイ",
        "kunyomi": "の, すなわ-ち, なんじ",
        "english": "from"
    },
    {
        "kanji": "廼",
        "onyomi": "ナイ, ダイ, ノ, アイ",
        "kunyomi": "すなわ-ち, なんじ",
        "english": "in other words"
    },
    {
        "kanji": "之",
        "onyomi": "シ",
        "kunyomi": "の, これ, ゆく, この",
        "english": "of"
    },
    {
        "kanji": "埜",
        "onyomi": "ヤ, ショ",
        "kunyomi": "の",
        "english": "open country"
    },
    {
        "kanji": "嚢",
        "onyomi": "ノウ, ドウ",
        "kunyomi": "ふくろ",
        "english": "pouch"
    },
    {
        "kanji": "悩",
        "onyomi": "ノウ",
        "kunyomi": "なや-む, なや-ます, なや-ましい, なやみ",
        "english": "trouble"
    },
    {
        "kanji": "濃",
        "onyomi": "ノウ",
        "kunyomi": "こ-い",
        "english": "concentrated"
    },
    {
        "kanji": "納",
        "onyomi": "ノウ, ナッ, ナ, ナン, トウ",
        "kunyomi": "おさ-める, -おさ-める, おさ-まる",
        "english": "settlement"
    },
    {
        "kanji": "能",
        "onyomi": "ノウ",
        "kunyomi": "よ-く, あた-う",
        "english": "ability"
    },
    {
        "kanji": "脳",
        "onyomi": "ノウ, ドウ",
        "kunyomi": "のうずる",
        "english": "brain"
    },
    {
        "kanji": "膿",
        "onyomi": "ノウ, ドウ",
        "kunyomi": "う-む, うみ",
        "english": "pus"
    },
    {
        "kanji": "農",
        "onyomi": "ノウ",
        "kunyomi": "",
        "english": "agriculture"
    },
    {
        "kanji": "覗",
        "onyomi": "シ",
        "kunyomi": "のぞ-く, うかが-う",
        "english": "peep"
    },
    {
        "kanji": "蚤",
        "onyomi": "ソウ",
        "kunyomi": "のみ, はやい",
        "english": "flea"
    },
    {
        "kanji": "巴",
        "onyomi": "ハ",
        "kunyomi": "ともえ, うずまき",
        "english": "comma-design"
    },
    {
        "kanji": "把",
        "onyomi": "ハ, ワ",
        "kunyomi": "",
        "english": "grasp"
    },
    {
        "kanji": "播",
        "onyomi": "ハ, バン, ハン",
        "kunyomi": "ま-く",
        "english": "plant"
    },
    {
        "kanji": "覇",
        "onyomi": "ハ, ハク",
        "kunyomi": "はたがしら",
        "english": "hegemony"
    },
    {
        "kanji": "杷",
        "onyomi": "ハ",
        "kunyomi": "つか",
        "english": "kind of rake"
    },
    {
        "kanji": "波",
        "onyomi": "ハ",
        "kunyomi": "なみ",
        "english": "waves"
    },
    {
        "kanji": "派",
        "onyomi": "ハ",
        "kunyomi": "",
        "english": "faction"
    },
    {
        "kanji": "琶",
        "onyomi": "ハ, ベ, ワ",
        "kunyomi": "",
        "english": "lute"
    },
    {
        "kanji": "破",
        "onyomi": "ハ",
        "kunyomi": "やぶ-る, やぶ-れる, わ-れる",
        "english": "rend"
    },
    {
        "kanji": "婆",
        "onyomi": "バ",
        "kunyomi": "ばば, ばあ",
        "english": "old woman"
    },
    {
        "kanji": "罵",
        "onyomi": "バ",
        "kunyomi": "ののし-る",
        "english": "abuse"
    },
    {
        "kanji": "芭",
        "onyomi": "バ, ハ",
        "kunyomi": "",
        "english": "banana"
    },
    {
        "kanji": "馬",
        "onyomi": "バ",
        "kunyomi": "うま, うま-, ま",
        "english": "horse"
    },
    {
        "kanji": "俳",
        "onyomi": "ハイ",
        "kunyomi": "",
        "english": "haiku"
    },
    {
        "kanji": "廃",
        "onyomi": "ハイ",
        "kunyomi": "すた-れる, すた-る",
        "english": "abolish"
    },
    {
        "kanji": "拝",
        "onyomi": "ハイ",
        "kunyomi": "おが-む, おろが-む",
        "english": "worship"
    },
    {
        "kanji": "排",
        "onyomi": "ハイ",
        "kunyomi": "",
        "english": "repudiate"
    },
    {
        "kanji": "敗",
        "onyomi": "ハイ",
        "kunyomi": "やぶ-れる",
        "english": "failure"
    },
    {
        "kanji": "杯",
        "onyomi": "ハイ",
        "kunyomi": "さかずき",
        "english": "counter for cupfuls"
    },
    {
        "kanji": "盃",
        "onyomi": "ハイ",
        "kunyomi": "さかずき",
        "english": "glass"
    },
    {
        "kanji": "牌",
        "onyomi": "ハイ",
        "kunyomi": "ぱい, ふだ",
        "english": "label"
    },
    {
        "kanji": "背",
        "onyomi": "ハイ",
        "kunyomi": "せ, せい, そむ-く, そむ-ける",
        "english": "stature"
    },
    {
        "kanji": "肺",
        "onyomi": "ハイ",
        "kunyomi": "",
        "english": "lungs"
    },
    {
        "kanji": "輩",
        "onyomi": "ハイ",
        "kunyomi": "-ばら, やから, やかい, ともがら",
        "english": "comrade"
    },
    {
        "kanji": "配",
        "onyomi": "ハイ",
        "kunyomi": "くば-る",
        "english": "distribute"
    },
    {
        "kanji": "倍",
        "onyomi": "バイ",
        "kunyomi": "",
        "english": "double"
    },
    {
        "kanji": "培",
        "onyomi": "バイ",
        "kunyomi": "つちか-う",
        "english": "cultivate"
    },
    {
        "kanji": "媒",
        "onyomi": "バイ",
        "kunyomi": "なこうど",
        "english": "mediator"
    },
    {
        "kanji": "梅",
        "onyomi": "バイ",
        "kunyomi": "うめ",
        "english": "plum"
    },
    {
        "kanji": "楳",
        "onyomi": "バイ",
        "kunyomi": "うめ",
        "english": "plum"
    },
    {
        "kanji": "煤",
        "onyomi": "バイ, マイ",
        "kunyomi": "すす",
        "english": "soot"
    },
    {
        "kanji": "狽",
        "onyomi": "ケン, バイ, ハイ",
        "kunyomi": "",
        "english": "wolf"
    },
    {
        "kanji": "買",
        "onyomi": "バイ",
        "kunyomi": "か-う",
        "english": "buy"
    },
    {
        "kanji": "売",
        "onyomi": "バイ",
        "kunyomi": "う-る, う-れる",
        "english": "sell"
    },
    {
        "kanji": "賠",
        "onyomi": "バイ",
        "kunyomi": "",
        "english": "compensation"
    },
    {
        "kanji": "陪",
        "onyomi": "バイ",
        "kunyomi": "",
        "english": "obeisance"
    },
    {
        "kanji": "這",
        "onyomi": "シャ, ゲン",
        "kunyomi": "は-う, は-い, むか-える, この",
        "english": "crawl"
    },
    {
        "kanji": "蝿",
        "onyomi": "ヨウ",
        "kunyomi": "はえ, はい",
        "english": "fly"
    },
    {
        "kanji": "秤",
        "onyomi": "ショウ, ヒン, ビン",
        "kunyomi": "はかり",
        "english": "balances"
    },
    {
        "kanji": "矧",
        "onyomi": "シン",
        "kunyomi": "は-ぐ, いわ-んや, はぐき, はぎ",
        "english": "feather (arrow)"
    },
    {
        "kanji": "萩",
        "onyomi": "シュウ",
        "kunyomi": "はぎ",
        "english": "bush clover"
    },
    {
        "kanji": "伯",
        "onyomi": "ハク",
        "kunyomi": "",
        "english": "chief"
    },
    {
        "kanji": "剥",
        "onyomi": "ハク, ホク",
        "kunyomi": "へ-ぐ, へず-る, む-く, む-ける, は-がれる, は-ぐ, は-げる, は-がす",
        "english": "come off"
    },
    {
        "kanji": "博",
        "onyomi": "ハク, バク",
        "kunyomi": "",
        "english": "Dr."
    },
    {
        "kanji": "拍",
        "onyomi": "ハク, ヒョウ",
        "kunyomi": "",
        "english": "clap"
    },
    {
        "kanji": "柏",
        "onyomi": "ハク, ヒャク, ビャク",
        "kunyomi": "かしわ",
        "english": "oak"
    },
    {
        "kanji": "泊",
        "onyomi": "ハク",
        "kunyomi": "と-まる, と-める",
        "english": "overnight stay"
    },
    {
        "kanji": "白",
        "onyomi": "ハク, ビャク",
        "kunyomi": "しろ, しら-, しろ-い",
        "english": "white"
    },
    {
        "kanji": "箔",
        "onyomi": "ハク",
        "kunyomi": "すだれ",
        "english": "foil"
    },
    {
        "kanji": "粕",
        "onyomi": "ハク",
        "kunyomi": "かす",
        "english": "scrap"
    },
    {
        "kanji": "舶",
        "onyomi": "ハク",
        "kunyomi": "",
        "english": "liner"
    },
    {
        "kanji": "薄",
        "onyomi": "ハク",
        "kunyomi": "うす-い, うす-, -うす, うす-める, うす-まる, うす-らぐ, うす-ら-, うす-れる, すすき",
        "english": "dilute"
    },
    {
        "kanji": "迫",
        "onyomi": "ハク",
        "kunyomi": "せま-る",
        "english": "urge"
    },
    {
        "kanji": "曝",
        "onyomi": "バク, ホク, ボク",
        "kunyomi": "さら-す",
        "english": "bleach"
    },
    {
        "kanji": "漠",
        "onyomi": "バク",
        "kunyomi": "",
        "english": "vague"
    },
    {
        "kanji": "爆",
        "onyomi": "バク",
        "kunyomi": "は-ぜる",
        "english": "bomb"
    },
    {
        "kanji": "縛",
        "onyomi": "バク",
        "kunyomi": "しば-る",
        "english": "truss"
    },
    {
        "kanji": "莫",
        "onyomi": "バク, ボ, マク, モ, ナイ",
        "kunyomi": "くれ, なか-れ, なし",
        "english": "must not"
    },
    {
        "kanji": "駁",
        "onyomi": "ハク, バク",
        "kunyomi": "ぶち, まじ-る, まだら",
        "english": "refutation"
    },
    {
        "kanji": "麦",
        "onyomi": "バク",
        "kunyomi": "むぎ",
        "english": "barley"
    },
    {
        "kanji": "函",
        "onyomi": "カン",
        "kunyomi": "はこ, い-れる",
        "english": "box (archaic)"
    },
    {
        "kanji": "箱",
        "onyomi": "ソウ",
        "kunyomi": "はこ",
        "english": "box"
    },
    {
        "kanji": "硲",
        "onyomi": "",
        "kunyomi": "はざま",
        "english": "ravine"
    },
    {
        "kanji": "箸",
        "onyomi": "チョ, チャク",
        "kunyomi": "はし",
        "english": "chopsticks"
    },
    {
        "kanji": "肇",
        "onyomi": "チョウ, ジョウ, トウ",
        "kunyomi": "はじ-める, はじめ",
        "english": "beginning"
    },
    {
        "kanji": "筈",
        "onyomi": "カツ",
        "kunyomi": "はず, やはず",
        "english": "notch of an arrow"
    },
    {
        "kanji": "櫨",
        "onyomi": "ロ",
        "kunyomi": "はぜ",
        "english": "wax tree"
    },
    {
        "kanji": "幡",
        "onyomi": "マン, ハン, バン, ホン",
        "kunyomi": "はた",
        "english": "flag"
    },
    {
        "kanji": "肌",
        "onyomi": "キ",
        "kunyomi": "はだ",
        "english": "texture"
    },
    {
        "kanji": "畑",
        "onyomi": "",
        "kunyomi": "はた, はたけ, -ばたけ",
        "english": "farm"
    },
    {
        "kanji": "畠",
        "onyomi": "",
        "kunyomi": "はたけ, はた",
        "english": "field"
    },
    {
        "kanji": "八",
        "onyomi": "ハチ, ハツ",
        "kunyomi": "や, や-つ, やっ-つ, よう",
        "english": "eight"
    },
    {
        "kanji": "鉢",
        "onyomi": "ハチ, ハツ",
        "kunyomi": "",
        "english": "bowl"
    },
    {
        "kanji": "溌",
        "onyomi": "ハツ",
        "kunyomi": "も-る, とびち-る, そそ-ぐ",
        "english": "sprinkle"
    },
    {
        "kanji": "発",
        "onyomi": "ハツ, ホツ",
        "kunyomi": "た-つ, あば-く, おこ-る, つか-わす, はな-つ",
        "english": "departure"
    },
    {
        "kanji": "醗",
        "onyomi": "ハツ",
        "kunyomi": "かも-す",
        "english": "fermentation"
    },
    {
        "kanji": "髪",
        "onyomi": "ハツ",
        "kunyomi": "かみ",
        "english": "hair of the head"
    },
    {
        "kanji": "伐",
        "onyomi": "バツ, ハツ, カ, ボチ",
        "kunyomi": "き-る, そむ-く, う-つ",
        "english": "fell"
    },
    {
        "kanji": "罰",
        "onyomi": "バツ, バチ, ハツ",
        "kunyomi": "ばっ-する",
        "english": "penalty"
    },
    {
        "kanji": "抜",
        "onyomi": "バツ, ハツ, ハイ",
        "kunyomi": "ぬ-く, -ぬ-く, ぬ-き, ぬ-ける, ぬ-かす, ぬ-かる",
        "english": "slip out"
    },
    {
        "kanji": "筏",
        "onyomi": "バツ, ハツ, ボチ",
        "kunyomi": "いかだ",
        "english": "raft"
    },
    {
        "kanji": "閥",
        "onyomi": "バツ",
        "kunyomi": "",
        "english": "clique"
    },
    {
        "kanji": "鳩",
        "onyomi": "キュウ, ク",
        "kunyomi": "はと, あつ-める",
        "english": "pigeon"
    },
    {
        "kanji": "噺",
        "onyomi": "",
        "kunyomi": "はなし",
        "english": "talk"
    },
    {
        "kanji": "塙",
        "onyomi": "カク, コウ",
        "kunyomi": "はなわ, かた-い",
        "english": "projecting tableland or mountain"
    },
    {
        "kanji": "蛤",
        "onyomi": "コウ",
        "kunyomi": "はまぐり",
        "english": "clam"
    },
    {
        "kanji": "隼",
        "onyomi": "シュン, ジュン",
        "kunyomi": "はやぶさ",
        "english": "falcon"
    },
    {
        "kanji": "伴",
        "onyomi": "ハン, バン",
        "kunyomi": "ともな-う",
        "english": "consort"
    },
    {
        "kanji": "判",
        "onyomi": "ハン, バン",
        "kunyomi": "わか-る",
        "english": "judgement"
    },
    {
        "kanji": "半",
        "onyomi": "ハン",
        "kunyomi": "なか-ば",
        "english": "half"
    },
    {
        "kanji": "反",
        "onyomi": "ハン, ホン, タン, ホ",
        "kunyomi": "そ-る, そ-らす, かえ-す, かえ-る, -かえ-る",
        "english": "anti-"
    },
    {
        "kanji": "叛",
        "onyomi": "ハン, ホン",
        "kunyomi": "そむ-く",
        "english": "disobey"
    },
    {
        "kanji": "帆",
        "onyomi": "ハン",
        "kunyomi": "ほ",
        "english": "sail"
    },
    {
        "kanji": "搬",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "conveyor"
    },
    {
        "kanji": "斑",
        "onyomi": "ハン",
        "kunyomi": "ふ, まだら",
        "english": "spot"
    },
    {
        "kanji": "板",
        "onyomi": "ハン, バン",
        "kunyomi": "いた",
        "english": "plank"
    },
    {
        "kanji": "氾",
        "onyomi": "ハン",
        "kunyomi": "ひろ-がる",
        "english": "spread out"
    },
    {
        "kanji": "汎",
        "onyomi": "ハン, ブ, フウ, ホウ, ホン",
        "kunyomi": "ただよ-う, ひろ-い",
        "english": "pan-"
    },
    {
        "kanji": "版",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "printing block"
    },
    {
        "kanji": "犯",
        "onyomi": "ハン, ボン",
        "kunyomi": "おか-す",
        "english": "crime"
    },
    {
        "kanji": "班",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "squad"
    },
    {
        "kanji": "畔",
        "onyomi": "ハン",
        "kunyomi": "あぜ, くろ, ほとり",
        "english": "paddy ridge"
    },
    {
        "kanji": "繁",
        "onyomi": "ハン",
        "kunyomi": "しげ-る, しげ-く",
        "english": "luxuriant"
    },
    {
        "kanji": "般",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "carrier"
    },
    {
        "kanji": "藩",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "clan"
    },
    {
        "kanji": "販",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "marketing"
    },
    {
        "kanji": "範",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "pattern"
    },
    {
        "kanji": "釆",
        "onyomi": "ハン, ベン, サイ",
        "kunyomi": "と-る, いろどり, のごめ",
        "english": "separate"
    },
    {
        "kanji": "煩",
        "onyomi": "ハン, ボン",
        "kunyomi": "わずら-う, わずら-わす, うるさ-がる, うるさ-い",
        "english": "anxiety"
    },
    {
        "kanji": "頒",
        "onyomi": "ハン",
        "kunyomi": "わ-かつ, わ-ける",
        "english": "distribute"
    },
    {
        "kanji": "飯",
        "onyomi": "ハン",
        "kunyomi": "めし",
        "english": "meal"
    },
    {
        "kanji": "挽",
        "onyomi": "バン",
        "kunyomi": "ひ-く",
        "english": "saw"
    },
    {
        "kanji": "晩",
        "onyomi": "バン",
        "kunyomi": "",
        "english": "nightfall"
    },
    {
        "kanji": "番",
        "onyomi": "バン",
        "kunyomi": "つが-い",
        "english": "turn"
    },
    {
        "kanji": "盤",
        "onyomi": "バン",
        "kunyomi": "",
        "english": "tray"
    },
    {
        "kanji": "磐",
        "onyomi": "バン, ハン",
        "kunyomi": "いわ",
        "english": "rock"
    },
    {
        "kanji": "蕃",
        "onyomi": "バン, ハン",
        "kunyomi": "",
        "english": "grow luxuriously"
    },
    {
        "kanji": "蛮",
        "onyomi": "バン",
        "kunyomi": "えびす",
        "english": "barbarian"
    },
    {
        "kanji": "匪",
        "onyomi": "ヒ",
        "kunyomi": "あら-ず, かたみ",
        "english": "negation"
    },
    {
        "kanji": "卑",
        "onyomi": "ヒ",
        "kunyomi": "いや-しい, いや-しむ, いや-しめる",
        "english": "lowly"
    },
    {
        "kanji": "否",
        "onyomi": "ヒ",
        "kunyomi": "いな, いや",
        "english": "negate"
    },
    {
        "kanji": "妃",
        "onyomi": "ヒ",
        "kunyomi": "きさき",
        "english": "queen"
    },
    {
        "kanji": "庇",
        "onyomi": "ヒ",
        "kunyomi": "ひさし, おお-う, かば-う",
        "english": "protect"
    },
    {
        "kanji": "彼",
        "onyomi": "ヒ",
        "kunyomi": "かれ, かの, か-の",
        "english": "he"
    },
    {
        "kanji": "悲",
        "onyomi": "ヒ",
        "kunyomi": "かな-しい, かな-しむ",
        "english": "grieve"
    },
    {
        "kanji": "扉",
        "onyomi": "ヒ",
        "kunyomi": "とびら",
        "english": "front door"
    },
    {
        "kanji": "批",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "criticism"
    },
    {
        "kanji": "披",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "expose"
    },
    {
        "kanji": "斐",
        "onyomi": "ヒ, イ",
        "kunyomi": "",
        "english": "beautiful"
    },
    {
        "kanji": "比",
        "onyomi": "ヒ",
        "kunyomi": "くら-べる",
        "english": "compare"
    },
    {
        "kanji": "泌",
        "onyomi": "ヒツ, ヒ",
        "kunyomi": "",
        "english": "ooze"
    },
    {
        "kanji": "疲",
        "onyomi": "ヒ",
        "kunyomi": "つか-れる, -づか-れ, つか-らす",
        "english": "exhausted"
    },
    {
        "kanji": "皮",
        "onyomi": "ヒ",
        "kunyomi": "かわ",
        "english": "pelt"
    },
    {
        "kanji": "碑",
        "onyomi": "ヒ",
        "kunyomi": "いしぶみ",
        "english": "tombstone"
    },
    {
        "kanji": "秘",
        "onyomi": "ヒ",
        "kunyomi": "ひ-める, ひそ-か, かく-す",
        "english": "secret"
    },
    {
        "kanji": "緋",
        "onyomi": "ヒ",
        "kunyomi": "あけ, あか",
        "english": "scarlet"
    },
    {
        "kanji": "罷",
        "onyomi": "ヒ",
        "kunyomi": "まか-り-, や-める",
        "english": "quit"
    },
    {
        "kanji": "肥",
        "onyomi": "ヒ",
        "kunyomi": "こ-える, こえ, こ-やす, こ-やし, ふと-る",
        "english": "fertilizer"
    },
    {
        "kanji": "被",
        "onyomi": "ヒ",
        "kunyomi": "こうむ-る, おお-う, かぶ-る, かぶ-せる",
        "english": "incur"
    },
    {
        "kanji": "誹",
        "onyomi": "ヒ, ハイ",
        "kunyomi": "そし-る",
        "english": "ridicule"
    },
    {
        "kanji": "費",
        "onyomi": "ヒ",
        "kunyomi": "つい-やす, つい-える",
        "english": "expense"
    },
    {
        "kanji": "避",
        "onyomi": "ヒ",
        "kunyomi": "さ-ける, よ-ける",
        "english": "evade"
    },
    {
        "kanji": "非",
        "onyomi": "ヒ",
        "kunyomi": "あら-ず",
        "english": "un-"
    },
    {
        "kanji": "飛",
        "onyomi": "ヒ",
        "kunyomi": "と-ぶ, と-ばす, -と-ばす",
        "english": "fly"
    },
    {
        "kanji": "樋",
        "onyomi": "トウ",
        "kunyomi": "ひ, とい",
        "english": "water pipe"
    },
    {
        "kanji": "簸",
        "onyomi": "ハ",
        "kunyomi": "ひ-る",
        "english": "winnow"
    },
    {
        "kanji": "備",
        "onyomi": "ビ",
        "kunyomi": "そな-える, そな-わる, つぶさ-に",
        "english": "equip"
    },
    {
        "kanji": "尾",
        "onyomi": "ビ",
        "kunyomi": "お",
        "english": "tail"
    },
    {
        "kanji": "微",
        "onyomi": "ビ",
        "kunyomi": "かす-か",
        "english": "delicate"
    },
    {
        "kanji": "枇",
        "onyomi": "ビ, ヒ",
        "kunyomi": "",
        "english": "loquat"
    },
    {
        "kanji": "毘",
        "onyomi": "ヒ, ビ",
        "kunyomi": "たす-ける",
        "english": "help"
    },
    {
        "kanji": "琵",
        "onyomi": "ビ, ヒ",
        "kunyomi": "",
        "english": "glissando on strings"
    },
    {
        "kanji": "眉",
        "onyomi": "ビ, ミ",
        "kunyomi": "まゆ",
        "english": "eyebrow"
    },
    {
        "kanji": "美",
        "onyomi": "ビ, ミ",
        "kunyomi": "うつく-しい",
        "english": "beauty"
    },
    {
        "kanji": "鼻",
        "onyomi": "ビ",
        "kunyomi": "はな",
        "english": "nose"
    },
    {
        "kanji": "柊",
        "onyomi": "シュ, シュウ",
        "kunyomi": "ひいらぎ",
        "english": "holly"
    },
    {
        "kanji": "稗",
        "onyomi": "ハイ, ヒ",
        "kunyomi": "ひえ",
        "english": "humble"
    },
    {
        "kanji": "匹",
        "onyomi": "ヒツ",
        "kunyomi": "ひき",
        "english": "equal"
    },
    {
        "kanji": "疋",
        "onyomi": "ヒキ, ショ, ソ, ヒツ",
        "kunyomi": "あし",
        "english": "head"
    },
    {
        "kanji": "髭",
        "onyomi": "シ",
        "kunyomi": "ひげ, くちひげ",
        "english": "beard"
    },
    {
        "kanji": "彦",
        "onyomi": "ゲン",
        "kunyomi": "ひこ",
        "english": "lad"
    },
    {
        "kanji": "膝",
        "onyomi": "シツ",
        "kunyomi": "ひざ",
        "english": "knee"
    },
    {
        "kanji": "菱",
        "onyomi": "リョウ",
        "kunyomi": "ひし",
        "english": "diamond (shape)"
    },
    {
        "kanji": "肘",
        "onyomi": "チュウ",
        "kunyomi": "ひじ",
        "english": "elbow"
    },
    {
        "kanji": "弼",
        "onyomi": "ヒツ",
        "kunyomi": "たす-ける, ゆだめ",
        "english": "help"
    },
    {
        "kanji": "必",
        "onyomi": "ヒツ",
        "kunyomi": "かなら-ず",
        "english": "invariably"
    },
    {
        "kanji": "畢",
        "onyomi": "ヒツ",
        "kunyomi": "おわ-る, あみ, おわ-り, ことごとく",
        "english": "the end"
    },
    {
        "kanji": "筆",
        "onyomi": "ヒツ",
        "kunyomi": "ふで",
        "english": "writing brush"
    },
    {
        "kanji": "逼",
        "onyomi": "フク, ヒツ, ヒョク, ヒキ",
        "kunyomi": "せま-る, むかばき",
        "english": "urge"
    },
    {
        "kanji": "桧",
        "onyomi": "カイ",
        "kunyomi": "ひのき, ひ",
        "english": "Japanese cypress"
    },
    {
        "kanji": "姫",
        "onyomi": "キ",
        "kunyomi": "ひめ, ひめ-",
        "english": "princess"
    },
    {
        "kanji": "媛",
        "onyomi": "エン",
        "kunyomi": "ひめ",
        "english": "beautiful woman"
    },
    {
        "kanji": "紐",
        "onyomi": "チュウ, ジュウ",
        "kunyomi": "ひも",
        "english": "string"
    },
    {
        "kanji": "百",
        "onyomi": "ヒャク, ビャク",
        "kunyomi": "もも",
        "english": "hundred"
    },
    {
        "kanji": "謬",
        "onyomi": "ビュウ, ビョウ, ミュウ",
        "kunyomi": "あやま-る",
        "english": "mistake"
    },
    {
        "kanji": "俵",
        "onyomi": "ヒョウ",
        "kunyomi": "たわら",
        "english": "bag"
    },
    {
        "kanji": "彪",
        "onyomi": "ヒョウ, ヒュウ",
        "kunyomi": "あや",
        "english": "spotted"
    },
    {
        "kanji": "標",
        "onyomi": "ヒョウ",
        "kunyomi": "しるべ, しるし",
        "english": "signpost"
    },
    {
        "kanji": "氷",
        "onyomi": "ヒョウ",
        "kunyomi": "こおり, ひ, こお-る",
        "english": "icicle"
    },
    {
        "kanji": "漂",
        "onyomi": "ヒョウ",
        "kunyomi": "ただよ-う",
        "english": "drift"
    },
    {
        "kanji": "瓢",
        "onyomi": "ヒョウ",
        "kunyomi": "ひさご, ふくべ",
        "english": "gourd"
    },
    {
        "kanji": "票",
        "onyomi": "ヒョウ",
        "kunyomi": "",
        "english": "ballot"
    },
    {
        "kanji": "表",
        "onyomi": "ヒョウ",
        "kunyomi": "おもて, -おもて, あらわ-す, あらわ-れる, あら-わす",
        "english": "surface"
    },
    {
        "kanji": "評",
        "onyomi": "ヒョウ",
        "kunyomi": "",
        "english": "evaluate"
    },
    {
        "kanji": "豹",
        "onyomi": "ヒョウ, ホウ",
        "kunyomi": "",
        "english": "leopard"
    },
    {
        "kanji": "廟",
        "onyomi": "ビョウ, ミョウ",
        "kunyomi": "たまや, みたまや, やしろ",
        "english": "mausoleum"
    },
    {
        "kanji": "描",
        "onyomi": "ビョウ",
        "kunyomi": "えが-く, か-く",
        "english": "sketch"
    },
    {
        "kanji": "病",
        "onyomi": "ビョウ, ヘイ",
        "kunyomi": "や-む, -や-み, やまい",
        "english": "ill"
    },
    {
        "kanji": "秒",
        "onyomi": "ビョウ",
        "kunyomi": "",
        "english": "second (1/60 minute)"
    },
    {
        "kanji": "苗",
        "onyomi": "ビョウ, ミョウ",
        "kunyomi": "なえ, なわ-",
        "english": "seedling"
    },
    {
        "kanji": "錨",
        "onyomi": "ビョウ, ミョウ",
        "kunyomi": "いかり",
        "english": "anchor"
    },
    {
        "kanji": "鋲",
        "onyomi": "",
        "kunyomi": "びょう",
        "english": "rivet"
    },
    {
        "kanji": "蒜",
        "onyomi": "サン",
        "kunyomi": "にんにく, ひる, のびる",
        "english": "garlic"
    },
    {
        "kanji": "蛭",
        "onyomi": "シツ, チツ",
        "kunyomi": "ひる",
        "english": "leech"
    },
    {
        "kanji": "鰭",
        "onyomi": "キ, ギ",
        "kunyomi": "ひれ",
        "english": "fin"
    },
    {
        "kanji": "品",
        "onyomi": "ヒン, ホン",
        "kunyomi": "しな",
        "english": "goods"
    },
    {
        "kanji": "彬",
        "onyomi": "ヒン, フン",
        "kunyomi": "うるわ-しい, あき-らか",
        "english": "refined"
    },
    {
        "kanji": "斌",
        "onyomi": "ヒン, フン",
        "kunyomi": "うるわ-しい, あき-らか",
        "english": "beautiful"
    },
    {
        "kanji": "浜",
        "onyomi": "ヒン",
        "kunyomi": "はま",
        "english": "seacoast"
    },
    {
        "kanji": "瀕",
        "onyomi": "ヒン",
        "kunyomi": "ほとり",
        "english": "shore"
    },
    {
        "kanji": "貧",
        "onyomi": "ヒン, ビン",
        "kunyomi": "まず-しい",
        "english": "poverty"
    },
    {
        "kanji": "賓",
        "onyomi": "ヒン",
        "kunyomi": "まろうど, したがう",
        "english": "V.I.P."
    },
    {
        "kanji": "頻",
        "onyomi": "ヒン",
        "kunyomi": "しき-りに",
        "english": "repeatedly"
    },
    {
        "kanji": "敏",
        "onyomi": "ビン",
        "kunyomi": "さとい",
        "english": "cleverness"
    },
    {
        "kanji": "瓶",
        "onyomi": "ビン",
        "kunyomi": "かめ, へい",
        "english": "bottle"
    },
    {
        "kanji": "不",
        "onyomi": "フ, ブ",
        "kunyomi": "",
        "english": "negative"
    },
    {
        "kanji": "付",
        "onyomi": "フ",
        "kunyomi": "つ-ける, -つ-ける, -づ-ける, つ-け, つ-け-, -つ-け, -づ-け, -づけ, つ-く, -づ-く, つ-き, -つ-き, -つき, -づ-き, -づき",
        "english": "adhere"
    },
    {
        "kanji": "埠",
        "onyomi": "フ, ホ",
        "kunyomi": "つか, はとば",
        "english": "wharf"
    },
    {
        "kanji": "夫",
        "onyomi": "フ, フウ, ブ",
        "kunyomi": "おっと, それ",
        "english": "husband"
    },
    {
        "kanji": "婦",
        "onyomi": "フ",
        "kunyomi": "よめ",
        "english": "lady"
    },
    {
        "kanji": "富",
        "onyomi": "フ, フウ",
        "kunyomi": "と-む, とみ",
        "english": "wealth"
    },
    {
        "kanji": "冨",
        "onyomi": "フ, フウ",
        "kunyomi": "と-む, とみ",
        "english": "enrich"
    },
    {
        "kanji": "布",
        "onyomi": "フ, ホ",
        "kunyomi": "ぬの, し-く, きれ",
        "english": "linen"
    },
    {
        "kanji": "府",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "borough"
    },
    {
        "kanji": "怖",
        "onyomi": "フ, ホ",
        "kunyomi": "こわ-い, こわ-がる, お-じる, おそ-れる",
        "english": "dreadful"
    },
    {
        "kanji": "扶",
        "onyomi": "フ",
        "kunyomi": "たす-ける",
        "english": "aid"
    },
    {
        "kanji": "敷",
        "onyomi": "フ",
        "kunyomi": "し-く, -し-き",
        "english": "spread"
    },
    {
        "kanji": "斧",
        "onyomi": "フ",
        "kunyomi": "おの",
        "english": "ax"
    },
    {
        "kanji": "普",
        "onyomi": "フ",
        "kunyomi": "あまね-く, あまねし",
        "english": "universal"
    },
    {
        "kanji": "浮",
        "onyomi": "フ",
        "kunyomi": "う-く, う-かれる, う-かぶ, う-かべる",
        "english": "floating"
    },
    {
        "kanji": "父",
        "onyomi": "フ",
        "kunyomi": "ちち",
        "english": "father"
    },
    {
        "kanji": "符",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "token"
    },
    {
        "kanji": "腐",
        "onyomi": "フ",
        "kunyomi": "くさ-る, -くさ-る, くさ-れる, くさ-れ, くさ-らす, くさ-す",
        "english": "rot"
    },
    {
        "kanji": "膚",
        "onyomi": "フ",
        "kunyomi": "はだ",
        "english": "skin"
    },
    {
        "kanji": "芙",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "lotus"
    },
    {
        "kanji": "譜",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "musical score"
    },
    {
        "kanji": "負",
        "onyomi": "フ",
        "kunyomi": "ま-ける, ま-かす, お-う",
        "english": "defeat"
    },
    {
        "kanji": "賦",
        "onyomi": "フ, ブ",
        "kunyomi": "",
        "english": "levy"
    },
    {
        "kanji": "赴",
        "onyomi": "フ",
        "kunyomi": "おもむ-く",
        "english": "proceed"
    },
    {
        "kanji": "阜",
        "onyomi": "フ, フウ",
        "kunyomi": "",
        "english": "hill"
    },
    {
        "kanji": "附",
        "onyomi": "フ",
        "kunyomi": "つ-ける, つ-く",
        "english": "affixed"
    },
    {
        "kanji": "侮",
        "onyomi": "ブ",
        "kunyomi": "あなど-る, あなず-る",
        "english": "scorn"
    },
    {
        "kanji": "撫",
        "onyomi": "ブ, フ",
        "kunyomi": "な-でる",
        "english": "stroke"
    },
    {
        "kanji": "武",
        "onyomi": "ブ, ム",
        "kunyomi": "たけ, たけ-し",
        "english": "warrior"
    },
    {
        "kanji": "舞",
        "onyomi": "ブ",
        "kunyomi": "ま-う, -ま-う, まい",
        "english": "dance"
    },
    {
        "kanji": "葡",
        "onyomi": "ブ, ホ",
        "kunyomi": "",
        "english": "wild grape"
    },
    {
        "kanji": "蕪",
        "onyomi": "ブ, ム",
        "kunyomi": "かぶ, かぶら, あれる",
        "english": "turnip"
    },
    {
        "kanji": "部",
        "onyomi": "ブ",
        "kunyomi": "-べ",
        "english": "section"
    },
    {
        "kanji": "封",
        "onyomi": "フウ, ホウ",
        "kunyomi": "",
        "english": "seal"
    },
    {
        "kanji": "楓",
        "onyomi": "フウ",
        "kunyomi": "かえで",
        "english": "maple"
    },
    {
        "kanji": "風",
        "onyomi": "フウ, フ",
        "kunyomi": "かぜ, かざ-",
        "english": "wind"
    },
    {
        "kanji": "葺",
        "onyomi": "シュウ",
        "kunyomi": "あし, ふ-く, ふき",
        "english": "thatch"
    },
    {
        "kanji": "蕗",
        "onyomi": "ロ, ル",
        "kunyomi": "ふき",
        "english": "butterbur"
    },
    {
        "kanji": "伏",
        "onyomi": "フク",
        "kunyomi": "ふ-せる, ふ-す",
        "english": "prostrated"
    },
    {
        "kanji": "副",
        "onyomi": "フク",
        "kunyomi": "",
        "english": "vice-"
    },
    {
        "kanji": "復",
        "onyomi": "フク",
        "kunyomi": "また",
        "english": "restore"
    },
    {
        "kanji": "幅",
        "onyomi": "フク",
        "kunyomi": "はば",
        "english": "hanging scroll"
    },
    {
        "kanji": "服",
        "onyomi": "フク",
        "kunyomi": "",
        "english": "clothing"
    },
    {
        "kanji": "福",
        "onyomi": "フク",
        "kunyomi": "",
        "english": "blessing"
    },
    {
        "kanji": "腹",
        "onyomi": "フク",
        "kunyomi": "はら",
        "english": "abdomen"
    },
    {
        "kanji": "複",
        "onyomi": "フク",
        "kunyomi": "",
        "english": "duplicate"
    },
    {
        "kanji": "覆",
        "onyomi": "フク",
        "kunyomi": "おお-う, くつがえ-す, くつがえ-る",
        "english": "capsize"
    },
    {
        "kanji": "淵",
        "onyomi": "エン, カク, コウ",
        "kunyomi": "ふち, かた-い, はなわ",
        "english": "abyss"
    },
    {
        "kanji": "弗",
        "onyomi": "フツ, ホチ",
        "kunyomi": "どる, ず",
        "english": "dollar"
    },
    {
        "kanji": "払",
        "onyomi": "フツ, ヒツ, ホツ",
        "kunyomi": "はら-う, -はら-い, -ばら-い",
        "english": "pay"
    },
    {
        "kanji": "沸",
        "onyomi": "フツ",
        "kunyomi": "わ-く, わ-かす",
        "english": "seethe"
    },
    {
        "kanji": "仏",
        "onyomi": "ブツ, フツ",
        "kunyomi": "ほとけ",
        "english": "Buddha"
    },
    {
        "kanji": "物",
        "onyomi": "ブツ, モツ",
        "kunyomi": "もの, もの-",
        "english": "thing"
    },
    {
        "kanji": "鮒",
        "onyomi": "ホ, フ, ブ",
        "kunyomi": "ふな",
        "english": "carp"
    },
    {
        "kanji": "分",
        "onyomi": "ブン, フン, ブ",
        "kunyomi": "わ-ける, わ-け, わ-かれる, わ-かる, わ-かつ",
        "english": "part"
    },
    {
        "kanji": "吻",
        "onyomi": "フン, ブン",
        "kunyomi": "くちわき, くちさき",
        "english": "proboscis"
    },
    {
        "kanji": "噴",
        "onyomi": "フン",
        "kunyomi": "ふ-く",
        "english": "erupt"
    },
    {
        "kanji": "墳",
        "onyomi": "フン",
        "kunyomi": "",
        "english": "tomb"
    },
    {
        "kanji": "憤",
        "onyomi": "フン",
        "kunyomi": "いきどお-る",
        "english": "aroused"
    },
    {
        "kanji": "扮",
        "onyomi": "フン, ハン, ヘン",
        "kunyomi": "ふん-する, やつ-す, よそお-う",
        "english": "impersonate"
    },
    {
        "kanji": "焚",
        "onyomi": "フン, ホン, ハン",
        "kunyomi": "た-く, や-く, やきがり",
        "english": "burn"
    },
    {
        "kanji": "奮",
        "onyomi": "フン",
        "kunyomi": "ふる-う",
        "english": "stirred up"
    },
    {
        "kanji": "粉",
        "onyomi": "フン",
        "kunyomi": "デシメートル, こ, こな",
        "english": "flour"
    },
    {
        "kanji": "糞",
        "onyomi": "フン",
        "kunyomi": "くそ",
        "english": "shit"
    },
    {
        "kanji": "紛",
        "onyomi": "フン",
        "kunyomi": "まぎ-れる, -まぎ-れ, まぎ-らす, まぎ-らわす, まぎ-らわしい",
        "english": "distract"
    },
    {
        "kanji": "雰",
        "onyomi": "フン",
        "kunyomi": "",
        "english": "atmosphere"
    },
    {
        "kanji": "文",
        "onyomi": "ブン, モン",
        "kunyomi": "ふみ, あや",
        "english": "sentence"
    },
    {
        "kanji": "聞",
        "onyomi": "ブン, モン",
        "kunyomi": "き-く, き-こえる",
        "english": "hear"
    },
    {
        "kanji": "丙",
        "onyomi": "ヘイ",
        "kunyomi": "ひのえ",
        "english": "third class"
    },
    {
        "kanji": "併",
        "onyomi": "ヘイ",
        "kunyomi": "あわ-せる",
        "english": "join"
    },
    {
        "kanji": "兵",
        "onyomi": "ヘイ, ヒョウ",
        "kunyomi": "つわもの",
        "english": "soldier"
    },
    {
        "kanji": "塀",
        "onyomi": "ヘイ, ベイ",
        "kunyomi": "",
        "english": "fence"
    },
    {
        "kanji": "幣",
        "onyomi": "ヘイ",
        "kunyomi": "ぬさ",
        "english": "cash"
    },
    {
        "kanji": "平",
        "onyomi": "ヘイ, ビョウ, ヒョウ",
        "kunyomi": "たい-ら, たい-らげる, ひら",
        "english": "even"
    },
    {
        "kanji": "弊",
        "onyomi": "ヘイ",
        "kunyomi": "",
        "english": "abuse"
    },
    {
        "kanji": "柄",
        "onyomi": "ヘイ",
        "kunyomi": "がら, え, つか",
        "english": "design"
    },
    {
        "kanji": "並",
        "onyomi": "ヘイ, ホウ",
        "kunyomi": "な-み, なみ, なら-べる, なら-ぶ, なら-びに",
        "english": "row"
    },
    {
        "kanji": "蔽",
        "onyomi": "ヘイ, ヘツ, フツ",
        "kunyomi": "おお-う, おお-い",
        "english": "cover"
    },
    {
        "kanji": "閉",
        "onyomi": "ヘイ",
        "kunyomi": "と-じる, と-ざす, し-める, し-まる, た-てる",
        "english": "closed"
    },
    {
        "kanji": "陛",
        "onyomi": "ヘイ",
        "kunyomi": "",
        "english": "highness"
    },
    {
        "kanji": "米",
        "onyomi": "ベイ, マイ, メエトル",
        "kunyomi": "こめ, よね",
        "english": "rice"
    },
    {
        "kanji": "頁",
        "onyomi": "ケツ",
        "kunyomi": "ぺえじ, おおがい, かしら",
        "english": "page"
    },
    {
        "kanji": "僻",
        "onyomi": "ヘキ, ヒ, ヘイ",
        "kunyomi": "へき-する, ひが-む",
        "english": "prejudice"
    },
    {
        "kanji": "壁",
        "onyomi": "ヘキ",
        "kunyomi": "かべ",
        "english": "wall"
    },
    {
        "kanji": "癖",
        "onyomi": "ヘキ",
        "kunyomi": "くせ, くせ-に",
        "english": "mannerism"
    },
    {
        "kanji": "碧",
        "onyomi": "ヘキ, ヒャク",
        "kunyomi": "",
        "english": "blue"
    },
    {
        "kanji": "別",
        "onyomi": "ベツ",
        "kunyomi": "わか-れる, わ-ける",
        "english": "separate"
    },
    {
        "kanji": "瞥",
        "onyomi": "ベツ, ヘツ",
        "kunyomi": "",
        "english": "glance at"
    },
    {
        "kanji": "蔑",
        "onyomi": "ベツ",
        "kunyomi": "ないがしろ, なみ-する, くらい, さげす-む",
        "english": "ignore"
    },
    {
        "kanji": "箆",
        "onyomi": "ヘイ, ハイ",
        "kunyomi": "へら, の, くし",
        "english": "spatula"
    },
    {
        "kanji": "偏",
        "onyomi": "ヘン",
        "kunyomi": "かたよ-る",
        "english": "partial"
    },
    {
        "kanji": "変",
        "onyomi": "ヘン",
        "kunyomi": "か-わる, か-わり, か-える",
        "english": "unusual"
    },
    {
        "kanji": "片",
        "onyomi": "ヘン",
        "kunyomi": "かた-, かた",
        "english": "one-sided"
    },
    {
        "kanji": "篇",
        "onyomi": "ヘン",
        "kunyomi": "",
        "english": "volume"
    },
    {
        "kanji": "編",
        "onyomi": "ヘン",
        "kunyomi": "あ-む, -あ-み",
        "english": "compilation"
    },
    {
        "kanji": "辺",
        "onyomi": "ヘン",
        "kunyomi": "あた-り, ほと-り, -べ",
        "english": "environs"
    },
    {
        "kanji": "返",
        "onyomi": "ヘン",
        "kunyomi": "かえ-す, -かえ-す, かえ-る, -かえ-る",
        "english": "return"
    },
    {
        "kanji": "遍",
        "onyomi": "ヘン",
        "kunyomi": "あまね-く",
        "english": "everywhere"
    },
    {
        "kanji": "便",
        "onyomi": "ベン, ビン",
        "kunyomi": "たよ-り",
        "english": "convenience"
    },
    {
        "kanji": "勉",
        "onyomi": "ベン",
        "kunyomi": "つと-める",
        "english": "exertion"
    },
    {
        "kanji": "娩",
        "onyomi": "ベン",
        "kunyomi": "",
        "english": "bear (children)"
    },
    {
        "kanji": "弁",
        "onyomi": "ベン, ヘン",
        "kunyomi": "かんむり, わきま-える, わ-ける, はなびら, あらそ-う",
        "english": "valve"
    },
    {
        "kanji": "鞭",
        "onyomi": "ベン, ヘン",
        "kunyomi": "むち, むちうつ",
        "english": "whip"
    },
    {
        "kanji": "保",
        "onyomi": "ホ, ホウ",
        "kunyomi": "たも-つ",
        "english": "protect"
    },
    {
        "kanji": "舗",
        "onyomi": "ホ",
        "kunyomi": "",
        "english": "shop"
    },
    {
        "kanji": "鋪",
        "onyomi": "ホ, フ",
        "kunyomi": "しく, みせ",
        "english": "shop"
    },
    {
        "kanji": "圃",
        "onyomi": "ホ, フ",
        "kunyomi": "はたけ, にわ",
        "english": "garden"
    },
    {
        "kanji": "捕",
        "onyomi": "ホ",
        "kunyomi": "と-らえる, と-らわれる, と-る, とら-える, とら-われる, つか-まえる, つか-まる",
        "english": "catch"
    },
    {
        "kanji": "歩",
        "onyomi": "ホ, ブ, フ",
        "kunyomi": "ある-く, あゆ-む",
        "english": "walk"
    },
    {
        "kanji": "甫",
        "onyomi": "ホ, フ",
        "kunyomi": "はじ-めて",
        "english": "for the first time"
    },
    {
        "kanji": "補",
        "onyomi": "ホ",
        "kunyomi": "おぎな-う",
        "english": "supplement"
    },
    {
        "kanji": "輔",
        "onyomi": "ホ, フ",
        "kunyomi": "たす-ける",
        "english": "help"
    },
    {
        "kanji": "穂",
        "onyomi": "スイ",
        "kunyomi": "ほ",
        "english": "ear"
    },
    {
        "kanji": "募",
        "onyomi": "ボ",
        "kunyomi": "つの-る",
        "english": "recruit"
    },
    {
        "kanji": "墓",
        "onyomi": "ボ",
        "kunyomi": "はか",
        "english": "grave"
    },
    {
        "kanji": "慕",
        "onyomi": "ボ",
        "kunyomi": "した-う",
        "english": "pining"
    },
    {
        "kanji": "戊",
        "onyomi": "ボ, ボウ",
        "kunyomi": "つちのえ",
        "english": "5th calendar sign"
    },
    {
        "kanji": "暮",
        "onyomi": "ボ",
        "kunyomi": "く-れる, く-らす",
        "english": "evening"
    },
    {
        "kanji": "母",
        "onyomi": "ボ",
        "kunyomi": "はは, も",
        "english": "mother"
    },
    {
        "kanji": "簿",
        "onyomi": "ボ",
        "kunyomi": "",
        "english": "register"
    },
    {
        "kanji": "菩",
        "onyomi": "ボ",
        "kunyomi": "",
        "english": "kind of grass"
    },
    {
        "kanji": "倣",
        "onyomi": "ホウ",
        "kunyomi": "なら-う",
        "english": "emulate"
    },
    {
        "kanji": "俸",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "stipend"
    },
    {
        "kanji": "包",
        "onyomi": "ホウ",
        "kunyomi": "つつ-む, くる-む",
        "english": "wrap"
    },
    {
        "kanji": "呆",
        "onyomi": "ホウ",
        "kunyomi": "ほけ-る, ぼ-ける, あき-れる, おろか",
        "english": "be amazed"
    },
    {
        "kanji": "報",
        "onyomi": "ホウ",
        "kunyomi": "むく-いる",
        "english": "report"
    },
    {
        "kanji": "奉",
        "onyomi": "ホウ, ブ",
        "kunyomi": "たてまつ-る, まつ-る, ほう-ずる",
        "english": "observance"
    },
    {
        "kanji": "宝",
        "onyomi": "ホウ",
        "kunyomi": "たから",
        "english": "treasure"
    },
    {
        "kanji": "峰",
        "onyomi": "ホウ",
        "kunyomi": "みね, ね",
        "english": "summit"
    },
    {
        "kanji": "峯",
        "onyomi": "ホウ",
        "kunyomi": "みね, ね",
        "english": "peak"
    },
    {
        "kanji": "崩",
        "onyomi": "ホウ",
        "kunyomi": "くず-れる, -くず-れ, くず-す",
        "english": "crumble"
    },
    {
        "kanji": "庖",
        "onyomi": "ホウ",
        "kunyomi": "くりや",
        "english": "kitchen"
    },
    {
        "kanji": "抱",
        "onyomi": "ホウ",
        "kunyomi": "だ-く, いだ-く, かか-える",
        "english": "embrace"
    },
    {
        "kanji": "捧",
        "onyomi": "ホウ",
        "kunyomi": "ささ-げる",
        "english": "lift up"
    },
    {
        "kanji": "放",
        "onyomi": "ホウ",
        "kunyomi": "はな-す, -っぱな-し, はな-つ, はな-れる, こ-く, ほう-る",
        "english": "set free"
    },
    {
        "kanji": "方",
        "onyomi": "ホウ",
        "kunyomi": "かた, -かた, -がた",
        "english": "direction"
    },
    {
        "kanji": "朋",
        "onyomi": "ホウ",
        "kunyomi": "とも",
        "english": "companion"
    },
    {
        "kanji": "法",
        "onyomi": "ホウ, ハッ, ホッ, フラン",
        "kunyomi": "のり",
        "english": "method"
    },
    {
        "kanji": "泡",
        "onyomi": "ホウ",
        "kunyomi": "あわ",
        "english": "bubbles"
    },
    {
        "kanji": "烹",
        "onyomi": "ホウ",
        "kunyomi": "に-る",
        "english": "boil"
    },
    {
        "kanji": "砲",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "cannon"
    },
    {
        "kanji": "縫",
        "onyomi": "ホウ",
        "kunyomi": "ぬ-う",
        "english": "sew"
    },
    {
        "kanji": "胞",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "placenta"
    },
    {
        "kanji": "芳",
        "onyomi": "ホウ",
        "kunyomi": "かんば-しい",
        "english": "perfume"
    },
    {
        "kanji": "萌",
        "onyomi": "ホウ",
        "kunyomi": "も-える, きざ-す, めばえ, きざ-し",
        "english": "show symptoms of"
    },
    {
        "kanji": "蓬",
        "onyomi": "ホウ, ブ",
        "kunyomi": "よもぎ",
        "english": "sagebrush"
    },
    {
        "kanji": "蜂",
        "onyomi": "ホウ",
        "kunyomi": "はち",
        "english": "bee"
    },
    {
        "kanji": "褒",
        "onyomi": "ホウ",
        "kunyomi": "ほ-める",
        "english": "praise"
    },
    {
        "kanji": "訪",
        "onyomi": "ホウ",
        "kunyomi": "おとず-れる, たず-ねる, と-う",
        "english": "call on"
    },
    {
        "kanji": "豊",
        "onyomi": "ホウ, ブ",
        "kunyomi": "ゆた-か, とよ",
        "english": "bountiful"
    },
    {
        "kanji": "邦",
        "onyomi": "ホウ",
        "kunyomi": "くに",
        "english": "home country"
    },
    {
        "kanji": "鋒",
        "onyomi": "ホウ",
        "kunyomi": "きっさき, とかり, ほこさき",
        "english": "dagger"
    },
    {
        "kanji": "飽",
        "onyomi": "ホウ",
        "kunyomi": "あ-きる, あ-かす, あ-く",
        "english": "sated"
    },
    {
        "kanji": "鳳",
        "onyomi": "ホウ, フウ",
        "kunyomi": "",
        "english": "male mythical bird"
    },
    {
        "kanji": "鵬",
        "onyomi": "ホウ",
        "kunyomi": "おおとり",
        "english": "phoenix"
    },
    {
        "kanji": "乏",
        "onyomi": "ボウ",
        "kunyomi": "とぼ-しい, とも-しい",
        "english": "destitution"
    },
    {
        "kanji": "亡",
        "onyomi": "ボウ, モウ",
        "kunyomi": "な-い, な-き-, ほろ-びる, ほろ-ぶ, ほろ-ぼす",
        "english": "deceased"
    },
    {
        "kanji": "傍",
        "onyomi": "ボウ",
        "kunyomi": "かたわ-ら, わき, おか-, はた, そば",
        "english": "bystander"
    },
    {
        "kanji": "剖",
        "onyomi": "ボウ",
        "kunyomi": "",
        "english": "divide"
    },
    {
        "kanji": "坊",
        "onyomi": "ボウ, ボッ",
        "kunyomi": "",
        "english": "boy"
    },
    {
        "kanji": "妨",
        "onyomi": "ボウ",
        "kunyomi": "さまた-げる",
        "english": "disturb"
    },
    {
        "kanji": "帽",
        "onyomi": "ボウ, モウ",
        "kunyomi": "ずきん, おお-う",
        "english": "cap"
    },
    {
        "kanji": "忘",
        "onyomi": "ボウ",
        "kunyomi": "わす-れる",
        "english": "forget"
    },
    {
        "kanji": "忙",
        "onyomi": "ボウ, モウ",
        "kunyomi": "いそが-しい, せわ-しい, おそ-れる, うれえるさま",
        "english": "busy"
    },
    {
        "kanji": "房",
        "onyomi": "ボウ",
        "kunyomi": "ふさ",
        "english": "tassel"
    },
    {
        "kanji": "暴",
        "onyomi": "ボウ, バク",
        "kunyomi": "あば-く, あば-れる",
        "english": "outburst"
    },
    {
        "kanji": "望",
        "onyomi": "ボウ, モウ",
        "kunyomi": "のぞ-む, もち",
        "english": "ambition"
    },
    {
        "kanji": "某",
        "onyomi": "ボウ",
        "kunyomi": "それがし, なにがし",
        "english": "so-and-so"
    },
    {
        "kanji": "棒",
        "onyomi": "ボウ",
        "kunyomi": "",
        "english": "rod"
    },
    {
        "kanji": "冒",
        "onyomi": "ボウ",
        "kunyomi": "おか-す",
        "english": "risk"
    },
    {
        "kanji": "紡",
        "onyomi": "ボウ",
        "kunyomi": "つむ-ぐ",
        "english": "spinning"
    },
    {
        "kanji": "肪",
        "onyomi": "ボウ",
        "kunyomi": "",
        "english": "obese"
    },
    {
        "kanji": "膨",
        "onyomi": "ボウ",
        "kunyomi": "ふく-らむ, ふく-れる",
        "english": "swell"
    },
    {
        "kanji": "謀",
        "onyomi": "ボウ, ム",
        "kunyomi": "はか-る, たばか-る, はかりごと",
        "english": "conspire"
    },
    {
        "kanji": "貌",
        "onyomi": "ボウ, バク",
        "kunyomi": "かたち, かたどる",
        "english": "form"
    },
    {
        "kanji": "貿",
        "onyomi": "ボウ",
        "kunyomi": "",
        "english": "trade"
    },
    {
        "kanji": "鉾",
        "onyomi": "ボウ, ム",
        "kunyomi": "ほこ",
        "english": "halberd"
    },
    {
        "kanji": "防",
        "onyomi": "ボウ",
        "kunyomi": "ふせ-ぐ",
        "english": "ward off"
    },
    {
        "kanji": "吠",
        "onyomi": "ハイ, ベイ",
        "kunyomi": "ほえ-る, ほ-える",
        "english": "bark"
    },
    {
        "kanji": "頬",
        "onyomi": "キョウ",
        "kunyomi": "ほお, ほほ",
        "english": "cheeks"
    },
    {
        "kanji": "北",
        "onyomi": "ホク",
        "kunyomi": "きた",
        "english": "north"
    },
    {
        "kanji": "僕",
        "onyomi": "ボク",
        "kunyomi": "しもべ",
        "english": "me"
    },
    {
        "kanji": "卜",
        "onyomi": "ボク",
        "kunyomi": "うらな-う, うらない",
        "english": "divining"
    },
    {
        "kanji": "墨",
        "onyomi": "ボク",
        "kunyomi": "すみ",
        "english": "black ink"
    },
    {
        "kanji": "撲",
        "onyomi": "ボク",
        "kunyomi": "",
        "english": "slap"
    },
    {
        "kanji": "朴",
        "onyomi": "ボク",
        "kunyomi": "ほう, ほお, えのき",
        "english": "crude"
    },
    {
        "kanji": "牧",
        "onyomi": "ボク",
        "kunyomi": "まき",
        "english": "breed"
    },
    {
        "kanji": "睦",
        "onyomi": "ボク, モク",
        "kunyomi": "むつ-まじい, むつ-む, むつ-ぶ",
        "english": "intimate"
    },
    {
        "kanji": "穆",
        "onyomi": "ボク, モク",
        "kunyomi": "やわ-らぐ",
        "english": "respectful"
    },
    {
        "kanji": "釦",
        "onyomi": "コウ, ク",
        "kunyomi": "ぼたん",
        "english": "button"
    },
    {
        "kanji": "勃",
        "onyomi": "ボツ, ホツ",
        "kunyomi": "おこ-る, にわかに",
        "english": "suddenness"
    },
    {
        "kanji": "没",
        "onyomi": "ボツ, モツ",
        "kunyomi": "おぼ-れる, しず-む, ない",
        "english": "drown"
    },
    {
        "kanji": "殆",
        "onyomi": "タイ, サイ",
        "kunyomi": "ほとほと, ほとん-ど, あやうい",
        "english": "almost"
    },
    {
        "kanji": "堀",
        "onyomi": "クツ",
        "kunyomi": "ほり",
        "english": "ditch"
    },
    {
        "kanji": "幌",
        "onyomi": "コウ",
        "kunyomi": "ほろ, とばり",
        "english": "canopy"
    },
    {
        "kanji": "奔",
        "onyomi": "ホン",
        "kunyomi": "はし-る",
        "english": "run"
    },
    {
        "kanji": "本",
        "onyomi": "ホン",
        "kunyomi": "もと",
        "english": "book"
    },
    {
        "kanji": "翻",
        "onyomi": "ホン, ハン",
        "kunyomi": "ひるがえ-る, ひるがえ-す",
        "english": "flip"
    },
    {
        "kanji": "凡",
        "onyomi": "ボン, ハン",
        "kunyomi": "およ-そ, おうよ-そ, すべ-て",
        "english": "commonplace"
    },
    {
        "kanji": "盆",
        "onyomi": "ボン",
        "kunyomi": "",
        "english": "basin"
    },
    {
        "kanji": "摩",
        "onyomi": "マ",
        "kunyomi": "ま-する, さす-る, す-る",
        "english": "chafe"
    },
    {
        "kanji": "磨",
        "onyomi": "マ",
        "kunyomi": "みが-く, す-る",
        "english": "grind"
    },
    {
        "kanji": "魔",
        "onyomi": "マ",
        "kunyomi": "",
        "english": "witch"
    },
    {
        "kanji": "麻",
        "onyomi": "マ, マア",
        "kunyomi": "あさ",
        "english": "hemp"
    },
    {
        "kanji": "埋",
        "onyomi": "マイ",
        "kunyomi": "う-める, う-まる, う-もれる, うず-める, うず-まる, い-ける",
        "english": "bury"
    },
    {
        "kanji": "妹",
        "onyomi": "マイ",
        "kunyomi": "いもうと",
        "english": "younger sister"
    },
    {
        "kanji": "昧",
        "onyomi": "マイ, バイ",
        "kunyomi": "くら-い, むさぼ-る",
        "english": "dark"
    },
    {
        "kanji": "枚",
        "onyomi": "マイ, バイ",
        "kunyomi": "",
        "english": "sheet of..."
    },
    {
        "kanji": "毎",
        "onyomi": "マイ",
        "kunyomi": "ごと, -ごと-に",
        "english": "every"
    },
    {
        "kanji": "哩",
        "onyomi": "リ",
        "kunyomi": "まいる",
        "english": "mile"
    },
    {
        "kanji": "槙",
        "onyomi": "テン, シン",
        "kunyomi": "まき, こずえ",
        "english": "twig"
    },
    {
        "kanji": "幕",
        "onyomi": "マク, バク",
        "kunyomi": "とばり",
        "english": "curtain"
    },
    {
        "kanji": "膜",
        "onyomi": "マク",
        "kunyomi": "",
        "english": "membrane"
    },
    {
        "kanji": "枕",
        "onyomi": "チン, シン",
        "kunyomi": "まくら",
        "english": "pillow"
    },
    {
        "kanji": "鮪",
        "onyomi": "キ, ユウ, イ",
        "kunyomi": "まぐろ, しび",
        "english": "tuna"
    },
    {
        "kanji": "柾",
        "onyomi": "",
        "kunyomi": "まさ, まさめ, まさき",
        "english": "straight grain"
    },
    {
        "kanji": "鱒",
        "onyomi": "ソン, セン, ザン",
        "kunyomi": "ます",
        "english": "salmon trout"
    },
    {
        "kanji": "桝",
        "onyomi": "",
        "kunyomi": "ます",
        "english": "measuring box"
    },
    {
        "kanji": "亦",
        "onyomi": "エキ, ヤク",
        "kunyomi": "また",
        "english": "also"
    },
    {
        "kanji": "俣",
        "onyomi": "",
        "kunyomi": "また",
        "english": "crotch"
    },
    {
        "kanji": "又",
        "onyomi": "ユウ",
        "kunyomi": "また, また-, また-の-",
        "english": "or again"
    },
    {
        "kanji": "抹",
        "onyomi": "マツ",
        "kunyomi": "",
        "english": "rub"
    },
    {
        "kanji": "末",
        "onyomi": "マツ, バツ",
        "kunyomi": "すえ, うら, うれ",
        "english": "end"
    },
    {
        "kanji": "沫",
        "onyomi": "マツ, バツ",
        "kunyomi": "あわ, しぶき, つばき",
        "english": "splash"
    },
    {
        "kanji": "迄",
        "onyomi": "キツ",
        "kunyomi": "まで, およ-ぶ",
        "english": "until"
    },
    {
        "kanji": "侭",
        "onyomi": "ジン",
        "kunyomi": "まま, ことごとく",
        "english": "as it is"
    },
    {
        "kanji": "繭",
        "onyomi": "ケン",
        "kunyomi": "まゆ, きぬ",
        "english": "cocoon"
    },
    {
        "kanji": "麿",
        "onyomi": "",
        "kunyomi": "まろ",
        "english": "I"
    },
    {
        "kanji": "万",
        "onyomi": "マン, バン",
        "kunyomi": "よろず",
        "english": "ten thousand"
    },
    {
        "kanji": "慢",
        "onyomi": "マン",
        "kunyomi": "",
        "english": "ridicule"
    },
    {
        "kanji": "満",
        "onyomi": "マン, バン",
        "kunyomi": "み-ちる, み-つ, み-たす",
        "english": "full"
    },
    {
        "kanji": "漫",
        "onyomi": "マン",
        "kunyomi": "みだり-に, そぞ-ろ",
        "english": "cartoon"
    },
    {
        "kanji": "蔓",
        "onyomi": "マン, バン",
        "kunyomi": "はびこ-る, つる",
        "english": "vine"
    },
    {
        "kanji": "味",
        "onyomi": "ミ",
        "kunyomi": "あじ, あじ-わう",
        "english": "flavor"
    },
    {
        "kanji": "未",
        "onyomi": "ミ, ビ",
        "kunyomi": "いま-だ, ま-だ, ひつじ",
        "english": "un-"
    },
    {
        "kanji": "魅",
        "onyomi": "ミ",
        "kunyomi": "",
        "english": "fascination"
    },
    {
        "kanji": "巳",
        "onyomi": "シ",
        "kunyomi": "み",
        "english": "sign of the snake or serpent"
    },
    {
        "kanji": "箕",
        "onyomi": "キ",
        "kunyomi": "み",
        "english": "winnowing"
    },
    {
        "kanji": "岬",
        "onyomi": "コウ",
        "kunyomi": "みさき",
        "english": "headland"
    },
    {
        "kanji": "密",
        "onyomi": "ミツ",
        "kunyomi": "ひそ-か",
        "english": "secrecy"
    },
    {
        "kanji": "蜜",
        "onyomi": "ミツ, ビツ",
        "kunyomi": "",
        "english": "honey"
    },
    {
        "kanji": "湊",
        "onyomi": "ソウ",
        "kunyomi": "みなと, あつ-まる",
        "english": "port"
    },
    {
        "kanji": "蓑",
        "onyomi": "サ, サイ",
        "kunyomi": "みの",
        "english": "straw raincoat"
    },
    {
        "kanji": "稔",
        "onyomi": "ネン, ジン, ニン",
        "kunyomi": "みの-る, みのり",
        "english": "harvest"
    },
    {
        "kanji": "脈",
        "onyomi": "ミャク",
        "kunyomi": "すじ",
        "english": "vein"
    },
    {
        "kanji": "妙",
        "onyomi": "ミョウ, ビョウ",
        "kunyomi": "たえ",
        "english": "exquisite"
    },
    {
        "kanji": "粍",
        "onyomi": "",
        "kunyomi": "ミリ, ミリメートル",
        "english": "millimeter"
    },
    {
        "kanji": "民",
        "onyomi": "ミン",
        "kunyomi": "たみ",
        "english": "people"
    },
    {
        "kanji": "眠",
        "onyomi": "ミン",
        "kunyomi": "ねむ-る, ねむ-い",
        "english": "sleep"
    },
    {
        "kanji": "務",
        "onyomi": "ム",
        "kunyomi": "つと-める",
        "english": "task"
    },
    {
        "kanji": "夢",
        "onyomi": "ム, ボウ",
        "kunyomi": "ゆめ, ゆめ-みる, くら-い",
        "english": "dream"
    },
    {
        "kanji": "無",
        "onyomi": "ム, ブ",
        "kunyomi": "な-い",
        "english": "nothingness"
    },
    {
        "kanji": "牟",
        "onyomi": "ボウ, ム",
        "kunyomi": "",
        "english": "pupil (eye)"
    },
    {
        "kanji": "矛",
        "onyomi": "ム, ボウ",
        "kunyomi": "ほこ",
        "english": "halberd"
    },
    {
        "kanji": "霧",
        "onyomi": "ム, ボウ, ブ",
        "kunyomi": "きり",
        "english": "fog"
    },
    {
        "kanji": "鵡",
        "onyomi": "ブ, ム",
        "kunyomi": "",
        "english": "cockatoo"
    },
    {
        "kanji": "椋",
        "onyomi": "リョウ",
        "kunyomi": "むく",
        "english": "type of deciduous tree"
    },
    {
        "kanji": "婿",
        "onyomi": "セイ",
        "kunyomi": "むこ",
        "english": "bridegroom"
    },
    {
        "kanji": "娘",
        "onyomi": "ジョウ",
        "kunyomi": "むすめ, こ",
        "english": "daughter"
    },
    {
        "kanji": "冥",
        "onyomi": "メイ, ミョウ",
        "kunyomi": "くら-い",
        "english": "dark"
    },
    {
        "kanji": "名",
        "onyomi": "メイ, ミョウ",
        "kunyomi": "な, -な",
        "english": "name"
    },
    {
        "kanji": "命",
        "onyomi": "メイ, ミョウ",
        "kunyomi": "いのち",
        "english": "fate"
    },
    {
        "kanji": "明",
        "onyomi": "メイ, ミョウ, ミン",
        "kunyomi": "あ-かり, あか-るい, あか-るむ, あか-らむ, あき-らか, あ-ける, -あ-け, あ-く, あ-くる, あ-かす",
        "english": "bright"
    },
    {
        "kanji": "盟",
        "onyomi": "メイ",
        "kunyomi": "",
        "english": "alliance"
    },
    {
        "kanji": "迷",
        "onyomi": "メイ",
        "kunyomi": "まよ-う",
        "english": "astray"
    },
    {
        "kanji": "銘",
        "onyomi": "メイ",
        "kunyomi": "",
        "english": "inscription"
    },
    {
        "kanji": "鳴",
        "onyomi": "メイ",
        "kunyomi": "な-く, な-る, な-らす",
        "english": "chirp"
    },
    {
        "kanji": "姪",
        "onyomi": "テツ, チツ, ジチ, イツ, イチ",
        "kunyomi": "めい, おい",
        "english": "niece"
    },
    {
        "kanji": "牝",
        "onyomi": "ヒン",
        "kunyomi": "めす, め-, めん",
        "english": "female"
    },
    {
        "kanji": "滅",
        "onyomi": "メツ",
        "kunyomi": "ほろ-びる, ほろ-ぶ, ほろ-ぼす",
        "english": "destroy"
    },
    {
        "kanji": "免",
        "onyomi": "メン",
        "kunyomi": "まぬか-れる, まぬが-れる",
        "english": "excuse"
    },
    {
        "kanji": "棉",
        "onyomi": "メン",
        "kunyomi": "わた",
        "english": "cotton"
    },
    {
        "kanji": "綿",
        "onyomi": "メン",
        "kunyomi": "わた",
        "english": "cotton"
    },
    {
        "kanji": "緬",
        "onyomi": "メン, ベン",
        "kunyomi": "",
        "english": "fine thread"
    },
    {
        "kanji": "面",
        "onyomi": "メン, ベン",
        "kunyomi": "おも, おもて, つら",
        "english": "mask"
    },
    {
        "kanji": "麺",
        "onyomi": "メン, ベン",
        "kunyomi": "むぎこ",
        "english": "noodles"
    },
    {
        "kanji": "摸",
        "onyomi": "モ, モウ, バク, ボ, マク",
        "kunyomi": "",
        "english": "search"
    },
    {
        "kanji": "模",
        "onyomi": "モ, ボ",
        "kunyomi": "",
        "english": "imitation"
    },
    {
        "kanji": "茂",
        "onyomi": "モ",
        "kunyomi": "しげ-る",
        "english": "overgrown"
    },
    {
        "kanji": "妄",
        "onyomi": "モウ, ボウ",
        "kunyomi": "みだ-りに",
        "english": "delusion"
    },
    {
        "kanji": "孟",
        "onyomi": "モウ, ボウ, ミョウ",
        "kunyomi": "かしら",
        "english": "chief"
    },
    {
        "kanji": "毛",
        "onyomi": "モウ",
        "kunyomi": "け",
        "english": "fur"
    },
    {
        "kanji": "猛",
        "onyomi": "モウ",
        "kunyomi": "",
        "english": "fierce"
    },
    {
        "kanji": "盲",
        "onyomi": "モウ",
        "kunyomi": "めくら",
        "english": "blind"
    },
    {
        "kanji": "網",
        "onyomi": "モウ",
        "kunyomi": "あみ",
        "english": "netting"
    },
    {
        "kanji": "耗",
        "onyomi": "モウ, コウ",
        "kunyomi": "",
        "english": "decrease"
    },
    {
        "kanji": "蒙",
        "onyomi": "モウ, ボウ",
        "kunyomi": "こうむ-る, おお-う, くら-い",
        "english": "ignorance"
    },
    {
        "kanji": "儲",
        "onyomi": "チョ",
        "kunyomi": "もう-ける, もう-かる, もうけ, たくわ-える",
        "english": "be profitable"
    },
    {
        "kanji": "木",
        "onyomi": "ボク, モク",
        "kunyomi": "き, こ-",
        "english": "tree"
    },
    {
        "kanji": "黙",
        "onyomi": "モク, ボク",
        "kunyomi": "だま-る, もだ-す",
        "english": "silence"
    },
    {
        "kanji": "目",
        "onyomi": "モク, ボク",
        "kunyomi": "め, -め, ま-",
        "english": "eye"
    },
    {
        "kanji": "杢",
        "onyomi": "",
        "kunyomi": "もく",
        "english": "woodworker"
    },
    {
        "kanji": "勿",
        "onyomi": "モチ, ブツ, ボツ",
        "kunyomi": "なか-れ, なし",
        "english": "not"
    },
    {
        "kanji": "餅",
        "onyomi": "ヘイ, ヒョウ",
        "kunyomi": "もち, もちい",
        "english": "mochi rice cake"
    },
    {
        "kanji": "尤",
        "onyomi": "ユウ",
        "kunyomi": "もっと-も, とが-める",
        "english": "reasonable"
    },
    {
        "kanji": "戻",
        "onyomi": "レイ",
        "kunyomi": "もど-す, もど-る",
        "english": "re-"
    },
    {
        "kanji": "籾",
        "onyomi": "",
        "kunyomi": "もみ",
        "english": "unhulled rice"
    },
    {
        "kanji": "貰",
        "onyomi": "セイ, シャ",
        "kunyomi": "もら-う",
        "english": "get"
    },
    {
        "kanji": "問",
        "onyomi": "モン",
        "kunyomi": "と-う, と-い, とん",
        "english": "question"
    },
    {
        "kanji": "悶",
        "onyomi": "モン",
        "kunyomi": "もだ-える, もだえ-る",
        "english": "be in agony"
    },
    {
        "kanji": "紋",
        "onyomi": "モン",
        "kunyomi": "",
        "english": "family crest"
    },
    {
        "kanji": "門",
        "onyomi": "モン",
        "kunyomi": "かど, と",
        "english": "gate"
    },
    {
        "kanji": "匁",
        "onyomi": "",
        "kunyomi": "もんめ, め",
        "english": "monme"
    },
    {
        "kanji": "也",
        "onyomi": "ヤ, エ",
        "kunyomi": "なり, か, また",
        "english": "to be (classical)"
    },
    {
        "kanji": "冶",
        "onyomi": "ヤ",
        "kunyomi": "い-る",
        "english": "melting"
    },
    {
        "kanji": "夜",
        "onyomi": "ヤ",
        "kunyomi": "よ, よる",
        "english": "night"
    },
    {
        "kanji": "爺",
        "onyomi": "ヤ",
        "kunyomi": "じい, じじい, おやじ, じじ, ちち",
        "english": "old man"
    },
    {
        "kanji": "耶",
        "onyomi": "ヤ, ジャ",
        "kunyomi": "か",
        "english": "question mark"
    },
    {
        "kanji": "野",
        "onyomi": "ヤ, ショ",
        "kunyomi": "の, の-",
        "english": "plains"
    },
    {
        "kanji": "弥",
        "onyomi": "ミ, ビ",
        "kunyomi": "や, いや, いよ-いよ, わた-る",
        "english": "all the more"
    },
    {
        "kanji": "矢",
        "onyomi": "シ",
        "kunyomi": "や",
        "english": "dart"
    },
    {
        "kanji": "厄",
        "onyomi": "ヤク",
        "kunyomi": "",
        "english": "unlucky"
    },
    {
        "kanji": "役",
        "onyomi": "ヤク, エキ",
        "kunyomi": "",
        "english": "duty"
    },
    {
        "kanji": "約",
        "onyomi": "ヤク",
        "kunyomi": "つづ-まる, つづ-める, つづま-やか",
        "english": "promise"
    },
    {
        "kanji": "薬",
        "onyomi": "ヤク",
        "kunyomi": "くすり",
        "english": "medicine"
    },
    {
        "kanji": "訳",
        "onyomi": "ヤク",
        "kunyomi": "わけ",
        "english": "translate"
    },
    {
        "kanji": "躍",
        "onyomi": "ヤク",
        "kunyomi": "おど-る",
        "english": "leap"
    },
    {
        "kanji": "靖",
        "onyomi": "セイ, ジョウ",
        "kunyomi": "やす-んじる",
        "english": "peaceful"
    },
    {
        "kanji": "柳",
        "onyomi": "リュウ",
        "kunyomi": "やなぎ",
        "english": "willow"
    },
    {
        "kanji": "薮",
        "onyomi": "ソウ",
        "kunyomi": "やぶ",
        "english": "thicket"
    },
    {
        "kanji": "鑓",
        "onyomi": "",
        "kunyomi": "やり",
        "english": "spear"
    },
    {
        "kanji": "愉",
        "onyomi": "ユ",
        "kunyomi": "たの-しい, たの-しむ",
        "english": "pleasure"
    },
    {
        "kanji": "愈",
        "onyomi": "ユ",
        "kunyomi": "いよいよ, まさ-る",
        "english": "be superior"
    },
    {
        "kanji": "油",
        "onyomi": "ユ, ユウ",
        "kunyomi": "あぶら",
        "english": "oil"
    },
    {
        "kanji": "癒",
        "onyomi": "ユ",
        "kunyomi": "い-える, いや-す, い-やす",
        "english": "healing"
    },
    {
        "kanji": "諭",
        "onyomi": "ユ",
        "kunyomi": "さと-す",
        "english": "rebuke"
    },
    {
        "kanji": "輸",
        "onyomi": "ユ, シュ",
        "kunyomi": "",
        "english": "transport"
    },
    {
        "kanji": "唯",
        "onyomi": "ユイ, イ",
        "kunyomi": "ただ",
        "english": "solely"
    },
    {
        "kanji": "佑",
        "onyomi": "ユウ, ウ",
        "kunyomi": "たす-ける",
        "english": "help"
    },
    {
        "kanji": "優",
        "onyomi": "ユウ, ウ",
        "kunyomi": "やさ-しい, すぐ-れる, まさ-る",
        "english": "tenderness"
    },
    {
        "kanji": "勇",
        "onyomi": "ユウ",
        "kunyomi": "いさ-む",
        "english": "courage"
    },
    {
        "kanji": "友",
        "onyomi": "ユウ",
        "kunyomi": "とも",
        "english": "friend"
    },
    {
        "kanji": "宥",
        "onyomi": "ユウ",
        "kunyomi": "なだ-める, ゆる-す",
        "english": "soothe"
    },
    {
        "kanji": "幽",
        "onyomi": "ユウ",
        "kunyomi": "ふか-い, かす-か, くら-い, しろ-い",
        "english": "seclude"
    },
    {
        "kanji": "悠",
        "onyomi": "ユウ",
        "kunyomi": "",
        "english": "permanence"
    },
    {
        "kanji": "憂",
        "onyomi": "ユウ",
        "kunyomi": "うれ-える, うれ-い, う-い, う-き",
        "english": "melancholy"
    },
    {
        "kanji": "揖",
        "onyomi": "イツ, ユ, シュウ, ユウ",
        "kunyomi": "",
        "english": "bow with arms folded"
    },
    {
        "kanji": "有",
        "onyomi": "ユウ, ウ",
        "kunyomi": "あ-る",
        "english": "possess"
    },
    {
        "kanji": "柚",
        "onyomi": "ユ, ユウ, ジク",
        "kunyomi": "ゆず",
        "english": "citron"
    },
    {
        "kanji": "湧",
        "onyomi": "ユウ, ヨウ, ユ",
        "kunyomi": "わ-く",
        "english": "boil"
    },
    {
        "kanji": "涌",
        "onyomi": "ユウ, ヨウ, ユ",
        "kunyomi": "わ-く",
        "english": "boil"
    },
    {
        "kanji": "猶",
        "onyomi": "ユウ, ユ",
        "kunyomi": "なお",
        "english": "furthermore"
    },
    {
        "kanji": "猷",
        "onyomi": "ユウ, ヨウ",
        "kunyomi": "はかりごと, はか-る",
        "english": "plan"
    },
    {
        "kanji": "由",
        "onyomi": "ユ, ユウ, ユイ",
        "kunyomi": "よし, よ-る",
        "english": "wherefore"
    },
    {
        "kanji": "祐",
        "onyomi": "ユウ, ウ",
        "kunyomi": "たす-ける",
        "english": "help"
    },
    {
        "kanji": "裕",
        "onyomi": "ユウ",
        "kunyomi": "",
        "english": "abundant"
    },
    {
        "kanji": "誘",
        "onyomi": "ユウ",
        "kunyomi": "さそ-う, いざな-う",
        "english": "entice"
    },
    {
        "kanji": "遊",
        "onyomi": "ユウ, ユ",
        "kunyomi": "あそ-ぶ, あそ-ばす",
        "english": "play"
    },
    {
        "kanji": "邑",
        "onyomi": "ユウ",
        "kunyomi": "むら",
        "english": "village"
    },
    {
        "kanji": "郵",
        "onyomi": "ユウ",
        "kunyomi": "",
        "english": "mail"
    },
    {
        "kanji": "雄",
        "onyomi": "ユウ",
        "kunyomi": "お-, おす, おん",
        "english": "masculine"
    },
    {
        "kanji": "融",
        "onyomi": "ユウ",
        "kunyomi": "と-ける, と-かす",
        "english": "dissolve"
    },
    {
        "kanji": "夕",
        "onyomi": "セキ",
        "kunyomi": "ゆう",
        "english": "evening"
    },
    {
        "kanji": "予",
        "onyomi": "ヨ, シャ",
        "kunyomi": "あらかじ-め",
        "english": "beforehand"
    },
    {
        "kanji": "余",
        "onyomi": "ヨ",
        "kunyomi": "あま-る, あま-り, あま-す, あんま-り",
        "english": "too much"
    },
    {
        "kanji": "与",
        "onyomi": "ヨ",
        "kunyomi": "あた-える, あずか-る, くみ-する, ともに",
        "english": "bestow"
    },
    {
        "kanji": "誉",
        "onyomi": "ヨ",
        "kunyomi": "ほま-れ, ほ-める",
        "english": "reputation"
    },
    {
        "kanji": "輿",
        "onyomi": "ヨ",
        "kunyomi": "かご, こし",
        "english": "palanquin"
    },
    {
        "kanji": "預",
        "onyomi": "ヨ",
        "kunyomi": "あず-ける, あず-かる",
        "english": "deposit"
    },
    {
        "kanji": "傭",
        "onyomi": "ヨウ, チョウ",
        "kunyomi": "やと-う, あた-い, ひと-しい",
        "english": "employ"
    },
    {
        "kanji": "幼",
        "onyomi": "ヨウ",
        "kunyomi": "おさな-い",
        "english": "infancy"
    },
    {
        "kanji": "妖",
        "onyomi": "ヨウ",
        "kunyomi": "あや-しい, なま-めく, わざわ-い",
        "english": "attractive"
    },
    {
        "kanji": "容",
        "onyomi": "ヨウ",
        "kunyomi": "い-れる",
        "english": "contain"
    },
    {
        "kanji": "庸",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "commonplace"
    },
    {
        "kanji": "揚",
        "onyomi": "ヨウ",
        "kunyomi": "あ-げる, -あ-げ, あ-がる",
        "english": "raise"
    },
    {
        "kanji": "揺",
        "onyomi": "ヨウ",
        "kunyomi": "ゆ-れる, ゆ-る, ゆ-らぐ, ゆ-るぐ, ゆ-する, ゆ-さぶる, ゆ-すぶる, うご-く",
        "english": "swing"
    },
    {
        "kanji": "擁",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "hug"
    },
    {
        "kanji": "曜",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "weekday"
    },
    {
        "kanji": "楊",
        "onyomi": "ヨウ",
        "kunyomi": "やなぎ",
        "english": "willow"
    },
    {
        "kanji": "様",
        "onyomi": "ヨウ, ショウ",
        "kunyomi": "さま, さん",
        "english": "Esq."
    },
    {
        "kanji": "洋",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "ocean"
    },
    {
        "kanji": "溶",
        "onyomi": "ヨウ",
        "kunyomi": "と-ける, と-かす, と-く",
        "english": "melt"
    },
    {
        "kanji": "熔",
        "onyomi": "ヨウ",
        "kunyomi": "と-ける, と-かす, いがた",
        "english": "fuse"
    },
    {
        "kanji": "用",
        "onyomi": "ヨウ",
        "kunyomi": "もち-いる",
        "english": "utilize"
    },
    {
        "kanji": "窯",
        "onyomi": "ヨウ",
        "kunyomi": "かま",
        "english": "kiln"
    },
    {
        "kanji": "羊",
        "onyomi": "ヨウ",
        "kunyomi": "ひつじ",
        "english": "sheep"
    },
    {
        "kanji": "耀",
        "onyomi": "ヨウ",
        "kunyomi": "かがや-く, ひかり",
        "english": "shine"
    },
    {
        "kanji": "葉",
        "onyomi": "ヨウ",
        "kunyomi": "は",
        "english": "leaf"
    },
    {
        "kanji": "蓉",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "lotus"
    },
    {
        "kanji": "要",
        "onyomi": "ヨウ",
        "kunyomi": "い-る, かなめ",
        "english": "need"
    },
    {
        "kanji": "謡",
        "onyomi": "ヨウ",
        "kunyomi": "うた-い, うた-う",
        "english": "song"
    },
    {
        "kanji": "踊",
        "onyomi": "ヨウ",
        "kunyomi": "おど-る",
        "english": "jump"
    },
    {
        "kanji": "遥",
        "onyomi": "ヨウ",
        "kunyomi": "はる-か",
        "english": "far off"
    },
    {
        "kanji": "陽",
        "onyomi": "ヨウ",
        "kunyomi": "ひ",
        "english": "sunshine"
    },
    {
        "kanji": "養",
        "onyomi": "ヨウ, リョウ",
        "kunyomi": "やしな-う",
        "english": "foster"
    },
    {
        "kanji": "慾",
        "onyomi": "ヨク",
        "kunyomi": "",
        "english": "covetousness"
    },
    {
        "kanji": "抑",
        "onyomi": "ヨク",
        "kunyomi": "おさ-える",
        "english": "repress"
    },
    {
        "kanji": "欲",
        "onyomi": "ヨク",
        "kunyomi": "ほっ-する, ほ-しい",
        "english": "longing"
    },
    {
        "kanji": "沃",
        "onyomi": "ヨウ, ヨク, オク",
        "kunyomi": "そそ-ぐ",
        "english": "fertility"
    },
    {
        "kanji": "浴",
        "onyomi": "ヨク",
        "kunyomi": "あ-びる, あ-びせる",
        "english": "bathe"
    },
    {
        "kanji": "翌",
        "onyomi": "ヨク",
        "kunyomi": "",
        "english": "the following"
    },
    {
        "kanji": "翼",
        "onyomi": "ヨク",
        "kunyomi": "つばさ",
        "english": "wing"
    },
    {
        "kanji": "淀",
        "onyomi": "テン, デン",
        "kunyomi": "よど-む",
        "english": "pool"
    },
    {
        "kanji": "羅",
        "onyomi": "ラ",
        "kunyomi": "うすもの",
        "english": "gauze"
    },
    {
        "kanji": "螺",
        "onyomi": "ラ",
        "kunyomi": "にし, にな",
        "english": "small, edible, helical fresh-water mollusk"
    },
    {
        "kanji": "裸",
        "onyomi": "ラ",
        "kunyomi": "はだか",
        "english": "naked"
    },
    {
        "kanji": "来",
        "onyomi": "ライ, タイ",
        "kunyomi": "く-る, きた-る, きた-す, き-たす, き-たる, き, こ",
        "english": "come"
    },
    {
        "kanji": "莱",
        "onyomi": "ライ, リ",
        "kunyomi": "あかざ, あわち, こうがい",
        "english": "goosefoot"
    },
    {
        "kanji": "頼",
        "onyomi": "ライ",
        "kunyomi": "たの-む, たの-もしい, たよ-る",
        "english": "trust"
    },
    {
        "kanji": "雷",
        "onyomi": "ライ",
        "kunyomi": "かみなり, いかずち, いかづち",
        "english": "thunder"
    },
    {
        "kanji": "洛",
        "onyomi": "ラク",
        "kunyomi": "",
        "english": "Kyoto"
    },
    {
        "kanji": "絡",
        "onyomi": "ラク",
        "kunyomi": "から-む, から-まる",
        "english": "entwine"
    },
    {
        "kanji": "落",
        "onyomi": "ラク",
        "kunyomi": "お-ちる, お-ち, お-とす",
        "english": "fall"
    },
    {
        "kanji": "酪",
        "onyomi": "ラク",
        "kunyomi": "",
        "english": "dairy products"
    },
    {
        "kanji": "乱",
        "onyomi": "ラン, ロン",
        "kunyomi": "みだ-れる, みだ-る, みだ-す, みだ, おさ-める, わた-る",
        "english": "riot"
    },
    {
        "kanji": "卵",
        "onyomi": "ラン",
        "kunyomi": "たまご",
        "english": "egg"
    },
    {
        "kanji": "嵐",
        "onyomi": "ラン",
        "kunyomi": "あらし",
        "english": "storm"
    },
    {
        "kanji": "欄",
        "onyomi": "ラン",
        "kunyomi": "てすり",
        "english": "column"
    },
    {
        "kanji": "濫",
        "onyomi": "ラン",
        "kunyomi": "みだ-りに, みだ-りがましい",
        "english": "excessive"
    },
    {
        "kanji": "藍",
        "onyomi": "ラン",
        "kunyomi": "あい",
        "english": "indigo"
    },
    {
        "kanji": "蘭",
        "onyomi": "ラン, ラ",
        "kunyomi": "",
        "english": "orchid"
    },
    {
        "kanji": "覧",
        "onyomi": "ラン",
        "kunyomi": "み-る",
        "english": "perusal"
    },
    {
        "kanji": "利",
        "onyomi": "リ",
        "kunyomi": "き-く",
        "english": "profit"
    },
    {
        "kanji": "吏",
        "onyomi": "リ",
        "kunyomi": "",
        "english": "officer"
    },
    {
        "kanji": "履",
        "onyomi": "リ",
        "kunyomi": "は-く",
        "english": "perform"
    },
    {
        "kanji": "李",
        "onyomi": "リ",
        "kunyomi": "すもも",
        "english": "plum"
    },
    {
        "kanji": "梨",
        "onyomi": "リ",
        "kunyomi": "なし",
        "english": "pear tree"
    },
    {
        "kanji": "理",
        "onyomi": "リ",
        "kunyomi": "ことわり",
        "english": "logic"
    },
    {
        "kanji": "璃",
        "onyomi": "リ",
        "kunyomi": "",
        "english": "glassy"
    },
    {
        "kanji": "痢",
        "onyomi": "リ",
        "kunyomi": "",
        "english": "diarrhea"
    },
    {
        "kanji": "裏",
        "onyomi": "リ",
        "kunyomi": "うら",
        "english": "back"
    },
    {
        "kanji": "裡",
        "onyomi": "リ",
        "kunyomi": "うち, うら",
        "english": "reverse"
    },
    {
        "kanji": "里",
        "onyomi": "リ",
        "kunyomi": "さと",
        "english": "ri"
    },
    {
        "kanji": "離",
        "onyomi": "リ",
        "kunyomi": "はな-れる, はな-す",
        "english": "detach"
    },
    {
        "kanji": "陸",
        "onyomi": "リク, ロク",
        "kunyomi": "おか",
        "english": "land"
    },
    {
        "kanji": "律",
        "onyomi": "リツ, リチ, レツ",
        "kunyomi": "",
        "english": "rhythm"
    },
    {
        "kanji": "率",
        "onyomi": "ソツ, リツ, シュツ",
        "kunyomi": "ひき-いる",
        "english": "ratio"
    },
    {
        "kanji": "立",
        "onyomi": "リツ, リュウ, リットル",
        "kunyomi": "た-つ, -た-つ, た-ち-, た-てる, -た-てる, た-て-, たて-, -た-て, -だ-て, -だ-てる",
        "english": "stand up"
    },
    {
        "kanji": "葎",
        "onyomi": "リツ",
        "kunyomi": "むぐら",
        "english": "creepers"
    },
    {
        "kanji": "掠",
        "onyomi": "リャク, リョウ",
        "kunyomi": "かす-める, かす-る, かす-れる",
        "english": "pillage"
    },
    {
        "kanji": "略",
        "onyomi": "リャク",
        "kunyomi": "ほぼ, はぶ-く, おか-す, おさ-める, はかりごと, はか-る",
        "english": "abbreviation"
    },
    {
        "kanji": "劉",
        "onyomi": "リュウ, ル",
        "kunyomi": "ころ-す",
        "english": "weapon of war"
    },
    {
        "kanji": "流",
        "onyomi": "リュウ, ル",
        "kunyomi": "なが-れる, なが-れ, なが-す, -なが-す",
        "english": "current"
    },
    {
        "kanji": "溜",
        "onyomi": "リュウ",
        "kunyomi": "た-まる, たま-る, た-める, したた-る, たまり, ため",
        "english": "collect"
    },
    {
        "kanji": "琉",
        "onyomi": "リュウ, ル",
        "kunyomi": "",
        "english": "precious stone"
    },
    {
        "kanji": "留",
        "onyomi": "リュウ, ル",
        "kunyomi": "と-める, と-まる, とど-める, とど-まる, るうぶる",
        "english": "detain"
    },
    {
        "kanji": "硫",
        "onyomi": "リュウ",
        "kunyomi": "",
        "english": "sulphur"
    },
    {
        "kanji": "粒",
        "onyomi": "リュウ",
        "kunyomi": "つぶ",
        "english": "grains"
    },
    {
        "kanji": "隆",
        "onyomi": "リュウ",
        "kunyomi": "",
        "english": "hump"
    },
    {
        "kanji": "竜",
        "onyomi": "リュウ, リョウ, ロウ",
        "kunyomi": "たつ, いせ",
        "english": "dragon"
    },
    {
        "kanji": "龍",
        "onyomi": "リュウ, リョウ, ロウ",
        "kunyomi": "たつ",
        "english": "dragon"
    },
    {
        "kanji": "侶",
        "onyomi": "リョ, ロ",
        "kunyomi": "とも",
        "english": "companion"
    },
    {
        "kanji": "慮",
        "onyomi": "リョ",
        "kunyomi": "おもんぱく-る, おもんぱか-る",
        "english": "prudence"
    },
    {
        "kanji": "旅",
        "onyomi": "リョ",
        "kunyomi": "たび",
        "english": "trip"
    },
    {
        "kanji": "虜",
        "onyomi": "リョ, ロ",
        "kunyomi": "とりこ, とりく",
        "english": "captive"
    },
    {
        "kanji": "了",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "complete"
    },
    {
        "kanji": "亮",
        "onyomi": "リョウ",
        "kunyomi": "あきらか",
        "english": "clear"
    },
    {
        "kanji": "僚",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "colleague"
    },
    {
        "kanji": "両",
        "onyomi": "リョウ",
        "kunyomi": "てる, ふたつ",
        "english": "both"
    },
    {
        "kanji": "凌",
        "onyomi": "リョウ",
        "kunyomi": "しの-ぐ",
        "english": "endure"
    },
    {
        "kanji": "寮",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "dormitory"
    },
    {
        "kanji": "料",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "fee"
    },
    {
        "kanji": "梁",
        "onyomi": "リョウ",
        "kunyomi": "はり, うつばり, うちばり, やな, はし",
        "english": "weir"
    },
    {
        "kanji": "涼",
        "onyomi": "リョウ",
        "kunyomi": "すず-しい, すず-む, すず-やか, うす-い, ひや-す, まことに",
        "english": "refreshing"
    },
    {
        "kanji": "猟",
        "onyomi": "リョウ",
        "kunyomi": "かり, か-る",
        "english": "game-hunting"
    },
    {
        "kanji": "療",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "heal"
    },
    {
        "kanji": "瞭",
        "onyomi": "リョウ",
        "kunyomi": "あきらか",
        "english": "clear"
    },
    {
        "kanji": "稜",
        "onyomi": "リョウ, ロウ",
        "kunyomi": "いつ, かど",
        "english": "angle"
    },
    {
        "kanji": "糧",
        "onyomi": "リョウ, ロウ",
        "kunyomi": "かて",
        "english": "provisions"
    },
    {
        "kanji": "良",
        "onyomi": "リョウ",
        "kunyomi": "よ-い, -よ-い, い-い, -い-い",
        "english": "good"
    },
    {
        "kanji": "諒",
        "onyomi": "リョウ",
        "kunyomi": "あきら-か, まことに",
        "english": "fact"
    },
    {
        "kanji": "遼",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "distant"
    },
    {
        "kanji": "量",
        "onyomi": "リョウ",
        "kunyomi": "はか-る",
        "english": "quantity"
    },
    {
        "kanji": "陵",
        "onyomi": "リョウ",
        "kunyomi": "みささぎ",
        "english": "mausoleum"
    },
    {
        "kanji": "領",
        "onyomi": "リョウ",
        "kunyomi": "えり",
        "english": "jurisdiction"
    },
    {
        "kanji": "力",
        "onyomi": "リョク, リキ, リイ",
        "kunyomi": "ちから",
        "english": "power"
    },
    {
        "kanji": "緑",
        "onyomi": "リョク, ロク",
        "kunyomi": "みどり",
        "english": "green"
    },
    {
        "kanji": "倫",
        "onyomi": "リン",
        "kunyomi": "",
        "english": "ethics"
    },
    {
        "kanji": "厘",
        "onyomi": "リン",
        "kunyomi": "",
        "english": "rin"
    },
    {
        "kanji": "林",
        "onyomi": "リン",
        "kunyomi": "はやし",
        "english": "grove"
    },
    {
        "kanji": "淋",
        "onyomi": "リン",
        "kunyomi": "さび-しい, さみ-しい",
        "english": "lonely"
    },
    {
        "kanji": "燐",
        "onyomi": "リン",
        "kunyomi": "",
        "english": "phosphorus"
    },
    {
        "kanji": "琳",
        "onyomi": "リン",
        "kunyomi": "",
        "english": "jewel"
    },
    {
        "kanji": "臨",
        "onyomi": "リン",
        "kunyomi": "のぞ-む",
        "english": "look to"
    },
    {
        "kanji": "輪",
        "onyomi": "リン",
        "kunyomi": "わ",
        "english": "wheel"
    },
    {
        "kanji": "隣",
        "onyomi": "リン",
        "kunyomi": "とな-る, となり",
        "english": "neighboring"
    },
    {
        "kanji": "鱗",
        "onyomi": "リン",
        "kunyomi": "うろこ, こけ, こけら",
        "english": "scales (fish)"
    },
    {
        "kanji": "麟",
        "onyomi": "リン",
        "kunyomi": "",
        "english": "Chinese unicorn"
    },
    {
        "kanji": "瑠",
        "onyomi": "ル, リュウ",
        "kunyomi": "",
        "english": "lapis lazuli"
    },
    {
        "kanji": "塁",
        "onyomi": "ルイ, ライ, スイ",
        "kunyomi": "とりで",
        "english": "bases"
    },
    {
        "kanji": "涙",
        "onyomi": "ルイ, レイ",
        "kunyomi": "なみだ",
        "english": "tears"
    },
    {
        "kanji": "累",
        "onyomi": "ルイ",
        "kunyomi": "",
        "english": "accumulate"
    },
    {
        "kanji": "類",
        "onyomi": "ルイ",
        "kunyomi": "たぐ-い",
        "english": "sort"
    },
    {
        "kanji": "令",
        "onyomi": "レイ",
        "kunyomi": "",
        "english": "orders"
    },
    {
        "kanji": "伶",
        "onyomi": "レイ, リョウ",
        "kunyomi": "わざおぎ",
        "english": "actor"
    },
    {
        "kanji": "例",
        "onyomi": "レイ",
        "kunyomi": "たと-える",
        "english": "example"
    },
    {
        "kanji": "冷",
        "onyomi": "レイ",
        "kunyomi": "つめ-たい, ひ-える, ひ-や, ひ-ややか, ひ-やす, ひ-やかす, さ-める, さ-ます",
        "english": "cool"
    },
    {
        "kanji": "励",
        "onyomi": "レイ",
        "kunyomi": "はげ-む, はげ-ます",
        "english": "encourage"
    },
    {
        "kanji": "嶺",
        "onyomi": "レイ, リョウ",
        "kunyomi": "みね",
        "english": "peak"
    },
    {
        "kanji": "怜",
        "onyomi": "レイ, レン, リョウ",
        "kunyomi": "あわ-れむ, さと-い",
        "english": "wise"
    },
    {
        "kanji": "玲",
        "onyomi": "レイ",
        "kunyomi": "",
        "english": "sound of jewels"
    },
    {
        "kanji": "礼",
        "onyomi": "レイ, ライ",
        "kunyomi": "",
        "english": "salute"
    },
    {
        "kanji": "苓",
        "onyomi": "レイ, リョウ",
        "kunyomi": "みみなぐさ",
        "english": "plant"
    },
    {
        "kanji": "鈴",
        "onyomi": "レイ, リン",
        "kunyomi": "すず",
        "english": "small bell"
    },
    {
        "kanji": "隷",
        "onyomi": "レイ",
        "kunyomi": "したが-う, しもべ",
        "english": "slave"
    },
    {
        "kanji": "零",
        "onyomi": "レイ",
        "kunyomi": "ぜろ, こぼ-す, こぼ-れる",
        "english": "zero"
    },
    {
        "kanji": "霊",
        "onyomi": "レイ, リョウ",
        "kunyomi": "たま",
        "english": "spirits"
    },
    {
        "kanji": "麗",
        "onyomi": "レイ",
        "kunyomi": "うるわ-しい, うら-らか",
        "english": "lovely"
    },
    {
        "kanji": "齢",
        "onyomi": "レイ",
        "kunyomi": "よわい, とし",
        "english": "age"
    },
    {
        "kanji": "暦",
        "onyomi": "レキ, リャク",
        "kunyomi": "こよみ",
        "english": "calendar"
    },
    {
        "kanji": "歴",
        "onyomi": "レキ, レッキ",
        "kunyomi": "",
        "english": "curriculum"
    },
    {
        "kanji": "列",
        "onyomi": "レツ, レ",
        "kunyomi": "",
        "english": "file"
    },
    {
        "kanji": "劣",
        "onyomi": "レツ",
        "kunyomi": "おと-る",
        "english": "inferiority"
    },
    {
        "kanji": "烈",
        "onyomi": "レツ",
        "kunyomi": "はげ-しい",
        "english": "ardent"
    },
    {
        "kanji": "裂",
        "onyomi": "レツ",
        "kunyomi": "さ-く, さ-ける, -ぎ-れ",
        "english": "split"
    },
    {
        "kanji": "廉",
        "onyomi": "レン",
        "kunyomi": "",
        "english": "bargain"
    },
    {
        "kanji": "恋",
        "onyomi": "レン",
        "kunyomi": "こ-う, こい, こい-しい",
        "english": "romance"
    },
    {
        "kanji": "憐",
        "onyomi": "レン",
        "kunyomi": "あわ-れむ, あわ-れ",
        "english": "pity"
    },
    {
        "kanji": "漣",
        "onyomi": "レン, ラン",
        "kunyomi": "さざなみ",
        "english": "ripples"
    },
    {
        "kanji": "煉",
        "onyomi": "レン",
        "kunyomi": "ね-る",
        "english": "refine metals"
    },
    {
        "kanji": "簾",
        "onyomi": "レン",
        "kunyomi": "すだれ, す",
        "english": "bamboo screen"
    },
    {
        "kanji": "練",
        "onyomi": "レン",
        "kunyomi": "ね-る, ね-り",
        "english": "practice"
    },
    {
        "kanji": "聯",
        "onyomi": "レン",
        "kunyomi": "つら-なる, つら-ねる",
        "english": "party"
    },
    {
        "kanji": "蓮",
        "onyomi": "レン",
        "kunyomi": "はす, はちす",
        "english": "lotus"
    },
    {
        "kanji": "連",
        "onyomi": "レン",
        "kunyomi": "つら-なる, つら-ねる, つ-れる, -づ-れ",
        "english": "take along"
    },
    {
        "kanji": "錬",
        "onyomi": "レン",
        "kunyomi": "ね-る",
        "english": "tempering"
    },
    {
        "kanji": "呂",
        "onyomi": "ロ, リョ",
        "kunyomi": "せぼね",
        "english": "spine"
    },
    {
        "kanji": "魯",
        "onyomi": "ロ",
        "kunyomi": "おろか",
        "english": "foolish"
    },
    {
        "kanji": "櫓",
        "onyomi": "ロ",
        "kunyomi": "やぐら, おおだて",
        "english": "oar"
    },
    {
        "kanji": "炉",
        "onyomi": "ロ",
        "kunyomi": "いろり",
        "english": "hearth"
    },
    {
        "kanji": "賂",
        "onyomi": "ロ",
        "kunyomi": "まいな-い, まいな-う",
        "english": "bribe"
    },
    {
        "kanji": "路",
        "onyomi": "ロ, ル",
        "kunyomi": "-じ, みち",
        "english": "path"
    },
    {
        "kanji": "露",
        "onyomi": "ロ, ロウ",
        "kunyomi": "つゆ",
        "english": "dew"
    },
    {
        "kanji": "労",
        "onyomi": "ロウ",
        "kunyomi": "ろう-する, いたわ-る, いた-ずき, ねぎら, つか-れる, ねぎら-う",
        "english": "labor"
    },
    {
        "kanji": "婁",
        "onyomi": "ル, ロウ",
        "kunyomi": "つな-ぐ, ひ-く",
        "english": "frequently"
    },
    {
        "kanji": "廊",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "corridor"
    },
    {
        "kanji": "弄",
        "onyomi": "ロウ, ル",
        "kunyomi": "いじく-る, ろう-する, いじ-る, ひねく-る, たわむ-れる, もてあそ-ぶ",
        "english": "play with"
    },
    {
        "kanji": "朗",
        "onyomi": "ロウ",
        "kunyomi": "ほが-らか, あき-らか",
        "english": "melodious"
    },
    {
        "kanji": "楼",
        "onyomi": "ロウ",
        "kunyomi": "たかどの",
        "english": "watchtower"
    },
    {
        "kanji": "榔",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "betel palm tree"
    },
    {
        "kanji": "浪",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "wandering"
    },
    {
        "kanji": "漏",
        "onyomi": "ロウ",
        "kunyomi": "も-る, も-れる, も-らす",
        "english": "leak"
    },
    {
        "kanji": "牢",
        "onyomi": "ロウ",
        "kunyomi": "かた-い, ひとや",
        "english": "prison"
    },
    {
        "kanji": "狼",
        "onyomi": "ロウ",
        "kunyomi": "おおかみ",
        "english": "wolf"
    },
    {
        "kanji": "篭",
        "onyomi": "ロウ, ル",
        "kunyomi": "かご, こ-める, こも-る, こ-む",
        "english": "seclude oneself"
    },
    {
        "kanji": "老",
        "onyomi": "ロウ",
        "kunyomi": "お-いる, ふ-ける",
        "english": "old man"
    },
    {
        "kanji": "聾",
        "onyomi": "ロウ",
        "kunyomi": "ろう-する, つんぼ, みみしい",
        "english": "deafness"
    },
    {
        "kanji": "蝋",
        "onyomi": "ロウ",
        "kunyomi": "みつろう, ろうそく",
        "english": "wax"
    },
    {
        "kanji": "郎",
        "onyomi": "ロウ, リョウ",
        "kunyomi": "おとこ",
        "english": "son"
    },
    {
        "kanji": "六",
        "onyomi": "ロク, リク",
        "kunyomi": "む, む-つ, むっ-つ, むい",
        "english": "six"
    },
    {
        "kanji": "麓",
        "onyomi": "ロク",
        "kunyomi": "ふもと",
        "english": "foot of a mountain"
    },
    {
        "kanji": "禄",
        "onyomi": "ロク",
        "kunyomi": "さいわ-い, ふち",
        "english": "fief"
    },
    {
        "kanji": "肋",
        "onyomi": "ロク",
        "kunyomi": "あばら",
        "english": "rib"
    },
    {
        "kanji": "録",
        "onyomi": "ロク",
        "kunyomi": "しる-す, と-る",
        "english": "record"
    },
    {
        "kanji": "論",
        "onyomi": "ロン",
        "kunyomi": "あげつら-う",
        "english": "argument"
    },
    {
        "kanji": "倭",
        "onyomi": "ワ, イ",
        "kunyomi": "やまと, したが-う",
        "english": "Yamato"
    },
    {
        "kanji": "和",
        "onyomi": "ワ, オ, カ",
        "kunyomi": "やわ-らぐ, やわ-らげる, なご-む, なご-やか, あ-える",
        "english": "harmony"
    },
    {
        "kanji": "話",
        "onyomi": "ワ",
        "kunyomi": "はな-す, はなし",
        "english": "tale"
    },
    {
        "kanji": "歪",
        "onyomi": "ワイ, エ",
        "kunyomi": "いが-む, いびつ, ひず-む, ゆが-む",
        "english": "warp"
    },
    {
        "kanji": "賄",
        "onyomi": "ワイ",
        "kunyomi": "まかな-う",
        "english": "bribe"
    },
    {
        "kanji": "脇",
        "onyomi": "キョウ",
        "kunyomi": "わき, わけ",
        "english": "armpit"
    },
    {
        "kanji": "惑",
        "onyomi": "ワク",
        "kunyomi": "まど-う",
        "english": "beguile"
    },
    {
        "kanji": "枠",
        "onyomi": "",
        "kunyomi": "わく",
        "english": "frame"
    },
    {
        "kanji": "鷲",
        "onyomi": "シュウ, ジュ",
        "kunyomi": "わし",
        "english": "eagle"
    },
    {
        "kanji": "亙",
        "onyomi": "コウ, カン",
        "kunyomi": "わた-る, もと-める",
        "english": "range"
    },
    {
        "kanji": "亘",
        "onyomi": "コウ, カン, セン",
        "kunyomi": "わた-る, もと-める",
        "english": "span"
    },
    {
        "kanji": "鰐",
        "onyomi": "ガク",
        "kunyomi": "わに",
        "english": "alligator"
    },
    {
        "kanji": "詫",
        "onyomi": "タ",
        "kunyomi": "わび, わび-しい, かこつ, わ-びる, わび-る",
        "english": "apologize"
    },
    {
        "kanji": "藁",
        "onyomi": "コウ",
        "kunyomi": "わら",
        "english": "straw"
    },
    {
        "kanji": "蕨",
        "onyomi": "ケツ",
        "kunyomi": "わらび",
        "english": "bracken"
    },
    {
        "kanji": "椀",
        "onyomi": "ワン",
        "kunyomi": "はち",
        "english": "wooden or lacquered bowl"
    },
    {
        "kanji": "湾",
        "onyomi": "ワン",
        "kunyomi": "いりえ",
        "english": "gulf"
    },
    {
        "kanji": "碗",
        "onyomi": "ワン",
        "kunyomi": "こばち",
        "english": "porcelain bowl"
    },
    {
        "kanji": "腕",
        "onyomi": "ワン",
        "kunyomi": "うで",
        "english": "arm"
    },
    {
        "kanji": "弌",
        "onyomi": "イチ, イツ",
        "kunyomi": "ひと-, ひと-つ",
        "english": "one"
    },
    {
        "kanji": "丐",
        "onyomi": "カイ",
        "kunyomi": "こ-う",
        "english": "beggar"
    },
    {
        "kanji": "丕",
        "onyomi": "ヒ",
        "kunyomi": "おお-きい",
        "english": "large"
    },
    {
        "kanji": "个",
        "onyomi": "カ, コ",
        "kunyomi": "",
        "english": "counter for articles"
    },
    {
        "kanji": "丱",
        "onyomi": "カン, ケン",
        "kunyomi": "",
        "english": "saguaro-like kanji"
    },
    {
        "kanji": "丶",
        "onyomi": "チュ",
        "kunyomi": "",
        "english": "dot"
    },
    {
        "kanji": "丼",
        "onyomi": "トン, タン, ショウ, セイ",
        "kunyomi": "どんぶり",
        "english": "bowl"
    },
    {
        "kanji": "丿",
        "onyomi": "ヘツ",
        "kunyomi": "えい, よう",
        "english": "katakana no radical (no. 4)"
    },
    {
        "kanji": "乂",
        "onyomi": "ガイ, カイ, ゲ",
        "kunyomi": "おさ-める, か-る",
        "english": "mow"
    },
    {
        "kanji": "乖",
        "onyomi": "カイ",
        "kunyomi": "そむ-く, もとる",
        "english": "oppose"
    },
    {
        "kanji": "乘",
        "onyomi": "ジョウ",
        "kunyomi": "の-る, の-せる",
        "english": "power"
    },
    {
        "kanji": "亂",
        "onyomi": "ラン, ロン",
        "kunyomi": "みだ-れる, みだ-る, みだ-す, みだ-れ, おさ-める, わた-る",
        "english": "war"
    },
    {
        "kanji": "亅",
        "onyomi": "ケツ",
        "kunyomi": "かぎ",
        "english": "feathered stick"
    },
    {
        "kanji": "豫",
        "onyomi": "ヨ, シャ",
        "kunyomi": "あらかじ-め",
        "english": "relaxed"
    },
    {
        "kanji": "亊",
        "onyomi": "ジ, シ, ズ",
        "kunyomi": "こと, つか-う, つか-える",
        "english": "affair"
    },
    {
        "kanji": "舒",
        "onyomi": "ジョ, ショ",
        "kunyomi": "の-べる",
        "english": "stretch"
    },
    {
        "kanji": "弍",
        "onyomi": "ニ, ジ",
        "kunyomi": "ふた-, ふた-つ, ふたた-び",
        "english": "two"
    },
    {
        "kanji": "于",
        "onyomi": "ウ, ク",
        "kunyomi": "ここに, ああ, おいて, に, より, を",
        "english": "going"
    },
    {
        "kanji": "亞",
        "onyomi": "ア",
        "kunyomi": "つ-ぐ",
        "english": "rank"
    },
    {
        "kanji": "亟",
        "onyomi": "キョク, キ, ケ",
        "kunyomi": "しばしば, すみやか",
        "english": "fast"
    },
    {
        "kanji": "亠",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "kettle lid radical (no. 8)"
    },
    {
        "kanji": "亢",
        "onyomi": "コウ",
        "kunyomi": "たかぶる",
        "english": "high spirits"
    },
    {
        "kanji": "亰",
        "onyomi": "キョウ, ケイ, キン",
        "kunyomi": "みやこ",
        "english": "capital city"
    },
    {
        "kanji": "亳",
        "onyomi": "ハク",
        "kunyomi": "",
        "english": "an ancient Chinese capital"
    },
    {
        "kanji": "亶",
        "onyomi": "タン, セン",
        "kunyomi": "あつ-い, ほしいまま",
        "english": "truly"
    },
    {
        "kanji": "从",
        "onyomi": "ショウ, ジュウ, ジュ",
        "kunyomi": "したが-う, したが-える, より",
        "english": "two people"
    },
    {
        "kanji": "仍",
        "onyomi": "ジョウ, ニョウ",
        "kunyomi": "よ-って, しきりに, なお, よる",
        "english": "therefore"
    },
    {
        "kanji": "仄",
        "onyomi": "ソク",
        "kunyomi": "ほの-か, ほの-, ほの-めかす, ほの-めく, かたむ-く",
        "english": "be seen dimly"
    },
    {
        "kanji": "仆",
        "onyomi": "フ",
        "kunyomi": "たお-れる",
        "english": "fall"
    },
    {
        "kanji": "仂",
        "onyomi": "ドウ, リュク, リキ, ロク, リョク",
        "kunyomi": "はたら-く",
        "english": "surplus or excess"
    },
    {
        "kanji": "仗",
        "onyomi": "ジョウ, チョウ",
        "kunyomi": "つえ, つわもの, まわり, よる",
        "english": "cane"
    },
    {
        "kanji": "仞",
        "onyomi": "ジン",
        "kunyomi": "はか-る",
        "english": "fathom"
    },
    {
        "kanji": "仭",
        "onyomi": "ジン",
        "kunyomi": "はか-る",
        "english": "fathom"
    },
    {
        "kanji": "仟",
        "onyomi": "セン",
        "kunyomi": "ち, かしら",
        "english": "thousand"
    },
    {
        "kanji": "价",
        "onyomi": "カイ",
        "kunyomi": "",
        "english": "man with shellfish kanji"
    },
    {
        "kanji": "伉",
        "onyomi": "コウ",
        "kunyomi": "たぐ-い, なら-ぶ",
        "english": "same kind"
    },
    {
        "kanji": "佚",
        "onyomi": "イツ, テツ",
        "kunyomi": "たのし-む, のが-れる",
        "english": "lost"
    },
    {
        "kanji": "估",
        "onyomi": "コ",
        "kunyomi": "あきな-う, あた-い",
        "english": "price"
    },
    {
        "kanji": "佛",
        "onyomi": "ブツ, フツ",
        "kunyomi": "ほとけ",
        "english": "France"
    },
    {
        "kanji": "佝",
        "onyomi": "コウ, ク",
        "kunyomi": "せむし",
        "english": "foolish"
    },
    {
        "kanji": "佗",
        "onyomi": "タ, イ",
        "kunyomi": "わび-しい, わび, ほか, わ-びる",
        "english": "proud"
    },
    {
        "kanji": "佇",
        "onyomi": "チョ",
        "kunyomi": "たたず-む",
        "english": "stop"
    },
    {
        "kanji": "佶",
        "onyomi": "キツ, キチ",
        "kunyomi": "",
        "english": "healthy"
    },
    {
        "kanji": "侈",
        "onyomi": "シ",
        "kunyomi": "おご-る",
        "english": "luxury"
    },
    {
        "kanji": "侏",
        "onyomi": "シュ",
        "kunyomi": "",
        "english": "actor"
    },
    {
        "kanji": "侘",
        "onyomi": "タ",
        "kunyomi": "わび-しい, ほこ-る, わ-びる",
        "english": "proud"
    },
    {
        "kanji": "佻",
        "onyomi": "チョウ, ジョウ, ヨウ",
        "kunyomi": "かる-い",
        "english": "frivolity"
    },
    {
        "kanji": "佩",
        "onyomi": "ハイ",
        "kunyomi": "は-く, お-びる, おびだま",
        "english": "wear"
    },
    {
        "kanji": "佰",
        "onyomi": "ヒャク, ハク",
        "kunyomi": "おさ",
        "english": "hundred"
    },
    {
        "kanji": "侑",
        "onyomi": "ユウ, ウ",
        "kunyomi": "すす-める, たす-ける",
        "english": "urge to eat"
    },
    {
        "kanji": "佯",
        "onyomi": "ヨウ",
        "kunyomi": "いつわ-る",
        "english": "pretend"
    },
    {
        "kanji": "來",
        "onyomi": "ライ, タイ",
        "kunyomi": "く-る, きた-る, きた-す, き-たす, き-たる",
        "english": "come"
    },
    {
        "kanji": "侖",
        "onyomi": "リン, ロン",
        "kunyomi": "おも-う",
        "english": "think"
    },
    {
        "kanji": "儘",
        "onyomi": "ジン",
        "kunyomi": "まま, ことごとく",
        "english": "as it is"
    },
    {
        "kanji": "俔",
        "onyomi": "ケン",
        "kunyomi": "たと-える, うかが-う",
        "english": "compare"
    },
    {
        "kanji": "俟",
        "onyomi": "シ",
        "kunyomi": "ま-つ",
        "english": "wait"
    },
    {
        "kanji": "俎",
        "onyomi": "ソ, ショ",
        "kunyomi": "いた, まないた",
        "english": "altar of sacrifice"
    },
    {
        "kanji": "俘",
        "onyomi": "フ",
        "kunyomi": "とりこ",
        "english": "captive"
    },
    {
        "kanji": "俛",
        "onyomi": "フ, ベン, メン",
        "kunyomi": "ふ-せる",
        "english": "look down"
    },
    {
        "kanji": "俑",
        "onyomi": "ヨウ, トウ, ユウ",
        "kunyomi": "",
        "english": "effigy"
    },
    {
        "kanji": "俚",
        "onyomi": "リ",
        "kunyomi": "いや-しい",
        "english": "rustic"
    },
    {
        "kanji": "俐",
        "onyomi": "リ",
        "kunyomi": "かしこ-い",
        "english": "clever"
    },
    {
        "kanji": "俤",
        "onyomi": "",
        "kunyomi": "おもかげ",
        "english": "visage"
    },
    {
        "kanji": "俥",
        "onyomi": "",
        "kunyomi": "くるま",
        "english": "jinricksha"
    },
    {
        "kanji": "倚",
        "onyomi": "イ, キ",
        "kunyomi": "よ-る, たの-む",
        "english": "lean on"
    },
    {
        "kanji": "倨",
        "onyomi": "キョ, コ",
        "kunyomi": "おご-る",
        "english": "pride"
    },
    {
        "kanji": "倔",
        "onyomi": "クツ",
        "kunyomi": "つよ-い",
        "english": "stubborn"
    },
    {
        "kanji": "倪",
        "onyomi": "ゲイ, ガイ",
        "kunyomi": "きわ",
        "english": "stare"
    },
    {
        "kanji": "倥",
        "onyomi": "コウ",
        "kunyomi": "ぬか-る",
        "english": "boorish"
    },
    {
        "kanji": "倅",
        "onyomi": "サイ, ソツ, ソチ",
        "kunyomi": "せがれ",
        "english": "son"
    },
    {
        "kanji": "伜",
        "onyomi": "サイ, ソツ, ソチ",
        "kunyomi": "せがれ",
        "english": "son"
    },
    {
        "kanji": "俶",
        "onyomi": "シュク, テキ",
        "kunyomi": "はじめ, よい",
        "english": "beginning"
    },
    {
        "kanji": "倡",
        "onyomi": "ショウ",
        "kunyomi": "とな-える, わざおぎ",
        "english": "prostitute"
    },
    {
        "kanji": "倩",
        "onyomi": "セン, セイ",
        "kunyomi": "つらつら, うつく-しい",
        "english": "carefully"
    },
    {
        "kanji": "倬",
        "onyomi": "タク",
        "kunyomi": "",
        "english": "large"
    },
    {
        "kanji": "俾",
        "onyomi": "フ, ヒ, ヘイ",
        "kunyomi": "かしずく, しむ",
        "english": "tutor"
    },
    {
        "kanji": "俯",
        "onyomi": "フ",
        "kunyomi": "ふ-す, うつむ-く, ふ-せる",
        "english": "bend down"
    },
    {
        "kanji": "們",
        "onyomi": "モン",
        "kunyomi": "ともがら",
        "english": "plural suffix"
    },
    {
        "kanji": "倆",
        "onyomi": "リョウ",
        "kunyomi": "たくみ",
        "english": "skill"
    },
    {
        "kanji": "偃",
        "onyomi": "エン",
        "kunyomi": "ふ-せる",
        "english": "dam"
    },
    {
        "kanji": "假",
        "onyomi": "カ, ケ",
        "kunyomi": "かり, かり-る",
        "english": "temporary"
    },
    {
        "kanji": "會",
        "onyomi": "カイ, エ",
        "kunyomi": "あ-う, あ-わせる, あつ-まる",
        "english": "meet"
    },
    {
        "kanji": "偕",
        "onyomi": "カイ",
        "kunyomi": "ともに",
        "english": "together"
    },
    {
        "kanji": "偐",
        "onyomi": "ゲン, ガン",
        "kunyomi": "",
        "english": "fake"
    },
    {
        "kanji": "偈",
        "onyomi": "ゲ, ケツ, ケイ",
        "kunyomi": "いこ-う",
        "english": "verse in praise of Buddha"
    },
    {
        "kanji": "做",
        "onyomi": "サ, サク, ソ",
        "kunyomi": "な-す, つく-る",
        "english": "make"
    },
    {
        "kanji": "偖",
        "onyomi": "シャ",
        "kunyomi": "さて",
        "english": "well"
    },
    {
        "kanji": "偬",
        "onyomi": "ソウ",
        "kunyomi": "くる-しむ",
        "english": "feel pain"
    },
    {
        "kanji": "偸",
        "onyomi": "ツ, トウ, チュウ",
        "kunyomi": "ぬす-む",
        "english": "steal"
    },
    {
        "kanji": "傀",
        "onyomi": "カイ",
        "kunyomi": "おおき-い",
        "english": "large"
    },
    {
        "kanji": "傚",
        "onyomi": "コウ",
        "kunyomi": "なら-う",
        "english": "imitate"
    },
    {
        "kanji": "傅",
        "onyomi": "フ",
        "kunyomi": "かしず-く, つく, もり",
        "english": "tutor"
    },
    {
        "kanji": "傴",
        "onyomi": "ク, ウ",
        "kunyomi": "かが-む, せむし",
        "english": "bend over"
    },
    {
        "kanji": "傲",
        "onyomi": "ゴウ",
        "kunyomi": "おご-る, あなど-る",
        "english": "be proud"
    },
    {
        "kanji": "僉",
        "onyomi": "セン",
        "kunyomi": "みな",
        "english": "all"
    },
    {
        "kanji": "僊",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "hermit"
    },
    {
        "kanji": "傳",
        "onyomi": "テン, デン",
        "kunyomi": "つた-わる, つた-える, つた-う, つて",
        "english": "summon"
    },
    {
        "kanji": "僂",
        "onyomi": "ロウ, ル",
        "kunyomi": "かが-む",
        "english": "bend over"
    },
    {
        "kanji": "僖",
        "onyomi": "キ",
        "kunyomi": "よろこ-ぶ",
        "english": "enjoyment"
    },
    {
        "kanji": "僞",
        "onyomi": "ギ, カ",
        "kunyomi": "いつわ-る, いつわ-り, にせ",
        "english": "lie"
    },
    {
        "kanji": "僥",
        "onyomi": "ギョウ, キョウ",
        "kunyomi": "",
        "english": "luck"
    },
    {
        "kanji": "僭",
        "onyomi": "シン, セン",
        "kunyomi": "せん-する, おご-る",
        "english": "boastfully usurp"
    },
    {
        "kanji": "僣",
        "onyomi": "シン, セン",
        "kunyomi": "せん-する, おご-る",
        "english": "boastfully usurp"
    },
    {
        "kanji": "僮",
        "onyomi": "トウ, ドウ",
        "kunyomi": "しもべ, わらべ",
        "english": "child"
    },
    {
        "kanji": "價",
        "onyomi": "カ, ケ",
        "kunyomi": "あたい",
        "english": "price"
    },
    {
        "kanji": "僵",
        "onyomi": "キョウ",
        "kunyomi": "たお-れる",
        "english": "fall down"
    },
    {
        "kanji": "儉",
        "onyomi": "ケン",
        "kunyomi": "つま-しい, つづまやか",
        "english": "economy"
    },
    {
        "kanji": "儁",
        "onyomi": "シュン",
        "kunyomi": "すぐ-れる",
        "english": "excellence"
    },
    {
        "kanji": "儂",
        "onyomi": "ドウ, ノウ",
        "kunyomi": "わし, かれ",
        "english": "I"
    },
    {
        "kanji": "儖",
        "onyomi": "ラン",
        "kunyomi": "",
        "english": "ugly"
    },
    {
        "kanji": "儕",
        "onyomi": "セイ, サイ",
        "kunyomi": "ともがら",
        "english": "companion"
    },
    {
        "kanji": "儔",
        "onyomi": "チュウ, ジュ",
        "kunyomi": "ともがら",
        "english": "companion"
    },
    {
        "kanji": "儚",
        "onyomi": "ボウ, モウ",
        "kunyomi": "はかな-い, くら-い",
        "english": "fleeting"
    },
    {
        "kanji": "儡",
        "onyomi": "ライ",
        "kunyomi": "",
        "english": "defeat"
    },
    {
        "kanji": "儺",
        "onyomi": "ナ, ダ",
        "kunyomi": "おにやらい",
        "english": "exorcism"
    },
    {
        "kanji": "儷",
        "onyomi": "レイ",
        "kunyomi": "つれあい, ならぶ",
        "english": "companion"
    },
    {
        "kanji": "儼",
        "onyomi": "ゲン",
        "kunyomi": "いかめ-しい, おごそか",
        "english": "serious"
    },
    {
        "kanji": "儻",
        "onyomi": "トウ",
        "kunyomi": "あるいは, すぐ-れる, もし",
        "english": "excel"
    },
    {
        "kanji": "儿",
        "onyomi": "ジン, ニン",
        "kunyomi": "がい",
        "english": "legs radical (no. 10)"
    },
    {
        "kanji": "兀",
        "onyomi": "コツ",
        "kunyomi": "",
        "english": "high & level"
    },
    {
        "kanji": "兒",
        "onyomi": "ジ, ニ, ゲイ",
        "kunyomi": "こ",
        "english": "child"
    },
    {
        "kanji": "兌",
        "onyomi": "ダ, エイ, エツ, タイ",
        "kunyomi": "よろこ-ぶ",
        "english": "exchange"
    },
    {
        "kanji": "兔",
        "onyomi": "ト, ツ",
        "kunyomi": "うさぎ",
        "english": "rabbit"
    },
    {
        "kanji": "兢",
        "onyomi": "キョウ",
        "kunyomi": "おそ-れる, つつ-しむ",
        "english": "discreet"
    },
    {
        "kanji": "竸",
        "onyomi": "キョウ, ケイ",
        "kunyomi": "きそ-う, せ-る, くら-べる",
        "english": "contest"
    },
    {
        "kanji": "兩",
        "onyomi": "リョウ",
        "kunyomi": "ふたつ",
        "english": "old Japanese coin"
    },
    {
        "kanji": "兪",
        "onyomi": "ユ",
        "kunyomi": "しかり",
        "english": "affirmative response"
    },
    {
        "kanji": "兮",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "auxiliary word for euphony or emphasis"
    },
    {
        "kanji": "冀",
        "onyomi": "キ",
        "kunyomi": "こいねが-う, こいねが-わくは",
        "english": "hope for"
    },
    {
        "kanji": "冂",
        "onyomi": "キョウ, ケイ",
        "kunyomi": "",
        "english": "upside-down box radical (no. 13)"
    },
    {
        "kanji": "囘",
        "onyomi": "カイ, エ",
        "kunyomi": "まわ-る, まわ-す, もとお-る, か-える",
        "english": "round"
    },
    {
        "kanji": "册",
        "onyomi": "サツ, サク",
        "kunyomi": "ふみ",
        "english": "counter for books"
    },
    {
        "kanji": "冉",
        "onyomi": "ゼン, ネン",
        "kunyomi": "あや-うい",
        "english": "red"
    },
    {
        "kanji": "冏",
        "onyomi": "ケイ, キョウ, ソウ",
        "kunyomi": "あきらか",
        "english": "light"
    },
    {
        "kanji": "冑",
        "onyomi": "チュウ",
        "kunyomi": "かぶと, よろい",
        "english": "helmet"
    },
    {
        "kanji": "冓",
        "onyomi": "コウ",
        "kunyomi": "かま-える",
        "english": "put together"
    },
    {
        "kanji": "冕",
        "onyomi": "ベン, メン",
        "kunyomi": "かんむり",
        "english": "crown"
    },
    {
        "kanji": "冖",
        "onyomi": "ベキ",
        "kunyomi": "",
        "english": "wa-shaped crown radical (no. 14)"
    },
    {
        "kanji": "冤",
        "onyomi": "エン",
        "kunyomi": "",
        "english": "false charge"
    },
    {
        "kanji": "冦",
        "onyomi": "コウ",
        "kunyomi": "あだ-する",
        "english": "foe"
    },
    {
        "kanji": "冢",
        "onyomi": "チョウ",
        "kunyomi": "つか, おお-う",
        "english": "mound"
    },
    {
        "kanji": "冩",
        "onyomi": "シャ",
        "kunyomi": "うつ-す, うつ-る",
        "english": "write"
    },
    {
        "kanji": "冪",
        "onyomi": "ベキ",
        "kunyomi": "",
        "english": "power"
    },
    {
        "kanji": "冫",
        "onyomi": "ヒョウ",
        "kunyomi": "こおり",
        "english": "two-stroke water radical or ice radical (no. 15)"
    },
    {
        "kanji": "决",
        "onyomi": "ケチ, ケツ",
        "kunyomi": "き-める, き-まる, さ-く",
        "english": "decide"
    },
    {
        "kanji": "冱",
        "onyomi": "ゴ, コ",
        "kunyomi": "さ-える, こお-る, ひ-える",
        "english": "freeze"
    },
    {
        "kanji": "冲",
        "onyomi": "チュウ",
        "kunyomi": "おき, おきつ, ちゅう-する, わく",
        "english": "offing"
    },
    {
        "kanji": "冰",
        "onyomi": "ヒョウ",
        "kunyomi": "こおり, ひ, こお-る",
        "english": "ice"
    },
    {
        "kanji": "况",
        "onyomi": "キョウ",
        "kunyomi": "まし-て, いわ-んや, おもむき",
        "english": "still more"
    },
    {
        "kanji": "冽",
        "onyomi": "レツ, レイ",
        "kunyomi": "きよ-い",
        "english": "cold"
    },
    {
        "kanji": "凅",
        "onyomi": "コ, カク",
        "kunyomi": "か-れる, か-らす, こお-る",
        "english": "wither"
    },
    {
        "kanji": "凉",
        "onyomi": "リョウ",
        "kunyomi": "すず-しい, すず-む, すず-やか, うす-い, ひや-す, まことに",
        "english": "nice and cool"
    },
    {
        "kanji": "凛",
        "onyomi": "リン",
        "kunyomi": "きびし-い",
        "english": "cold"
    },
    {
        "kanji": "几",
        "onyomi": "キ",
        "kunyomi": "きにょう",
        "english": "table"
    },
    {
        "kanji": "處",
        "onyomi": "ショ",
        "kunyomi": "ところ, -こ, お-る",
        "english": "place"
    },
    {
        "kanji": "凩",
        "onyomi": "",
        "kunyomi": "こがらし",
        "english": "wintry wind"
    },
    {
        "kanji": "凭",
        "onyomi": "ヒョウ, ヘイ",
        "kunyomi": "もた-れる, よ-る",
        "english": "lean on"
    },
    {
        "kanji": "凰",
        "onyomi": "コウ, オウ",
        "kunyomi": "おおとり",
        "english": "female phoenix bird"
    },
    {
        "kanji": "凵",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "open box enclosure"
    },
    {
        "kanji": "凾",
        "onyomi": "カン",
        "kunyomi": "はこ, い-れる",
        "english": "box"
    },
    {
        "kanji": "刄",
        "onyomi": "ジン, ニン",
        "kunyomi": "は, やいば, き-る",
        "english": "blade"
    },
    {
        "kanji": "刋",
        "onyomi": "カン, セン",
        "kunyomi": "き-る, けず-る",
        "english": "cut"
    },
    {
        "kanji": "刔",
        "onyomi": "ケツ",
        "kunyomi": "えぐ-る",
        "english": "scoop out"
    },
    {
        "kanji": "刎",
        "onyomi": "フン",
        "kunyomi": "は-ねる, くびは-ねる",
        "english": "decapitate"
    },
    {
        "kanji": "刧",
        "onyomi": "コウ, ゴウ, キョウ",
        "kunyomi": "おびや-かす",
        "english": "threat"
    },
    {
        "kanji": "刪",
        "onyomi": "サン",
        "kunyomi": "けず-る",
        "english": "cut down"
    },
    {
        "kanji": "刮",
        "onyomi": "カツ",
        "kunyomi": "こそ-げる, けず-る",
        "english": "scrape off"
    },
    {
        "kanji": "刳",
        "onyomi": "コ",
        "kunyomi": "く-る, えぐ-る",
        "english": "clear"
    },
    {
        "kanji": "刹",
        "onyomi": "セチ, セツ, サツ",
        "kunyomi": "",
        "english": "temple"
    },
    {
        "kanji": "剏",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "はじ-める",
        "english": "begin"
    },
    {
        "kanji": "剄",
        "onyomi": "ケイ",
        "kunyomi": "くびき-る",
        "english": "beheading"
    },
    {
        "kanji": "剋",
        "onyomi": "コク",
        "kunyomi": "かつ",
        "english": "victory"
    },
    {
        "kanji": "剌",
        "onyomi": "ラツ",
        "kunyomi": "もと-る",
        "english": "opposed"
    },
    {
        "kanji": "剞",
        "onyomi": "キ",
        "kunyomi": "きざ-む",
        "english": "carve"
    },
    {
        "kanji": "剔",
        "onyomi": "テキ, テイ",
        "kunyomi": "えぐ-る, そ-る",
        "english": "cutting"
    },
    {
        "kanji": "剪",
        "onyomi": "セン",
        "kunyomi": "き-る, つ-む",
        "english": "clip"
    },
    {
        "kanji": "剴",
        "onyomi": "ガイ, カイ",
        "kunyomi": "",
        "english": "scythe"
    },
    {
        "kanji": "剩",
        "onyomi": "ジョウ",
        "kunyomi": "あまつさえ, あま-り, あま-る",
        "english": "leftovers"
    },
    {
        "kanji": "剳",
        "onyomi": "トウ, サツ, チョウ",
        "kunyomi": "さ-す",
        "english": "sickle"
    },
    {
        "kanji": "剿",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "",
        "english": "destroy"
    },
    {
        "kanji": "剽",
        "onyomi": "ヒョウ",
        "kunyomi": "おびや-かす, さす",
        "english": "threat"
    },
    {
        "kanji": "劍",
        "onyomi": "ケン",
        "kunyomi": "つるぎ",
        "english": "sword"
    },
    {
        "kanji": "劔",
        "onyomi": "ケン",
        "kunyomi": "つるぎ",
        "english": "sword"
    },
    {
        "kanji": "劒",
        "onyomi": "ケン",
        "kunyomi": "つるぎ",
        "english": "sword"
    },
    {
        "kanji": "剱",
        "onyomi": "ケン",
        "kunyomi": "つるぎ",
        "english": "sword"
    },
    {
        "kanji": "劈",
        "onyomi": "ヘキ, ヒャク",
        "kunyomi": "つんざ-く, さく",
        "english": "break"
    },
    {
        "kanji": "劑",
        "onyomi": "ザイ, スイ, セイ",
        "kunyomi": "かる, けず-る",
        "english": "medicine"
    },
    {
        "kanji": "辨",
        "onyomi": "ベン, ヘン",
        "kunyomi": "わきま-える, わ-ける, はなびら, あらそ-う",
        "english": "discrimination"
    },
    {
        "kanji": "辧",
        "onyomi": "ベン, ヘン",
        "kunyomi": "わきま-える, わ-ける, はなびら, あらそ-う",
        "english": "manage"
    },
    {
        "kanji": "劬",
        "onyomi": "ク",
        "kunyomi": "つか-れる",
        "english": "become tired"
    },
    {
        "kanji": "劭",
        "onyomi": "ショウ",
        "kunyomi": "つと-める",
        "english": "recommend"
    },
    {
        "kanji": "劼",
        "onyomi": "カツ, ケチ",
        "kunyomi": "",
        "english": "be careful"
    },
    {
        "kanji": "劵",
        "onyomi": "ケン",
        "kunyomi": "てがた, わりふ",
        "english": "become fatigued"
    },
    {
        "kanji": "勁",
        "onyomi": "ケイ",
        "kunyomi": "つよ-い",
        "english": "strong"
    },
    {
        "kanji": "勍",
        "onyomi": "ケイ",
        "kunyomi": "つよ-い",
        "english": "strong"
    },
    {
        "kanji": "勗",
        "onyomi": "キョク, ボウ",
        "kunyomi": "つと-める",
        "english": "be diligent"
    },
    {
        "kanji": "勞",
        "onyomi": "ロウ",
        "kunyomi": "ろう-する, いたわ-る, いた-ずき, ねぎら-う, つか-れる, ねぎら-い",
        "english": "thank for"
    },
    {
        "kanji": "勣",
        "onyomi": "セキ, シャク",
        "kunyomi": "いさお, つむ-ぐ",
        "english": "merit"
    },
    {
        "kanji": "勦",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "",
        "english": "destroy"
    },
    {
        "kanji": "飭",
        "onyomi": "チョク, チキ",
        "kunyomi": "いまし-める, ただ-す",
        "english": "correct"
    },
    {
        "kanji": "勠",
        "onyomi": "リク",
        "kunyomi": "あわ-せる",
        "english": "combine"
    },
    {
        "kanji": "勳",
        "onyomi": "クン",
        "kunyomi": "いさお",
        "english": "meritorious deed"
    },
    {
        "kanji": "勵",
        "onyomi": "レイ",
        "kunyomi": "はげ-む, はげ-ます",
        "english": "strive"
    },
    {
        "kanji": "勸",
        "onyomi": "カン, ケン",
        "kunyomi": "すす-める",
        "english": "persuade"
    },
    {
        "kanji": "勹",
        "onyomi": "ホウ",
        "kunyomi": "つつ-む",
        "english": "wrapping enclosure"
    },
    {
        "kanji": "匆",
        "onyomi": "ソウ",
        "kunyomi": "いそが-しい",
        "english": "rush"
    },
    {
        "kanji": "匈",
        "onyomi": "キョウ",
        "kunyomi": "",
        "english": "turmoil"
    },
    {
        "kanji": "甸",
        "onyomi": "デン, テン",
        "kunyomi": "かり",
        "english": "region around the imperial capital"
    },
    {
        "kanji": "匍",
        "onyomi": "ホ",
        "kunyomi": "は-う",
        "english": "crawl"
    },
    {
        "kanji": "匐",
        "onyomi": "ホク, フク",
        "kunyomi": "",
        "english": "crawl"
    },
    {
        "kanji": "匏",
        "onyomi": "ホ, ホウ",
        "kunyomi": "ひさご",
        "english": "gourd"
    },
    {
        "kanji": "匕",
        "onyomi": "ヒ",
        "kunyomi": "さじ",
        "english": "spoon"
    },
    {
        "kanji": "匚",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "box-on-side enclosure radical (no. 22)"
    },
    {
        "kanji": "匣",
        "onyomi": "コウ",
        "kunyomi": "はこ",
        "english": "box"
    },
    {
        "kanji": "匯",
        "onyomi": "キ, エ, カイ, ワイ",
        "kunyomi": "がい, めぐ-る",
        "english": "whirl"
    },
    {
        "kanji": "匱",
        "onyomi": "キ",
        "kunyomi": "ひつ",
        "english": "chest"
    },
    {
        "kanji": "匳",
        "onyomi": "レン",
        "kunyomi": "くしげ, はこ",
        "english": "cosmetics box"
    },
    {
        "kanji": "匸",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "hiding enclosure radical (no. 23)"
    },
    {
        "kanji": "區",
        "onyomi": "ク, オウ, コウ",
        "kunyomi": "",
        "english": "ward"
    },
    {
        "kanji": "卆",
        "onyomi": "ソツ, シュツ",
        "kunyomi": "そっ-する, お-える, お-わる, ついに, にわか",
        "english": "soldier"
    },
    {
        "kanji": "卅",
        "onyomi": "ソウ",
        "kunyomi": "さんじゅう",
        "english": "thirty"
    },
    {
        "kanji": "丗",
        "onyomi": "セイ, セ, ソウ",
        "kunyomi": "よ, さんじゅう",
        "english": "thirty"
    },
    {
        "kanji": "卉",
        "onyomi": "キ, ケ",
        "kunyomi": "くさ",
        "english": "grass"
    },
    {
        "kanji": "卍",
        "onyomi": "バン, マン",
        "kunyomi": "まんじ",
        "english": "swastika"
    },
    {
        "kanji": "凖",
        "onyomi": "ジュン",
        "kunyomi": "じゅん-じる, じゅん-ずる, なぞら-える, のり, ひと-しい, みずもり",
        "english": "correspond to"
    },
    {
        "kanji": "卞",
        "onyomi": "ベン, ヘン, ハン",
        "kunyomi": "",
        "english": "law"
    },
    {
        "kanji": "卩",
        "onyomi": "セツ",
        "kunyomi": "わりふ",
        "english": "seal radical (no. 26)"
    },
    {
        "kanji": "卮",
        "onyomi": "シ",
        "kunyomi": "さかずき",
        "english": "large goblet"
    },
    {
        "kanji": "夘",
        "onyomi": "ボウ, モウ",
        "kunyomi": "う",
        "english": "sign of the hare or rabbit"
    },
    {
        "kanji": "卻",
        "onyomi": "キャク",
        "kunyomi": "かえ-って, しりぞ-く, しりぞ-ける",
        "english": "instead"
    },
    {
        "kanji": "卷",
        "onyomi": "カン, ケン",
        "kunyomi": "ま-く, まき",
        "english": "volume"
    },
    {
        "kanji": "厂",
        "onyomi": "カン",
        "kunyomi": "かりがね",
        "english": "wild goose"
    },
    {
        "kanji": "厖",
        "onyomi": "ボウ",
        "kunyomi": "おおき-い",
        "english": "large"
    },
    {
        "kanji": "厠",
        "onyomi": "シ, ショク",
        "kunyomi": "かわや",
        "english": "privy"
    },
    {
        "kanji": "厦",
        "onyomi": "カ, サ",
        "kunyomi": "いえ",
        "english": "house"
    },
    {
        "kanji": "厥",
        "onyomi": "ケツ, クツ",
        "kunyomi": "その, それ",
        "english": "that"
    },
    {
        "kanji": "厮",
        "onyomi": "シ",
        "kunyomi": "こもの",
        "english": "cut"
    },
    {
        "kanji": "厰",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "workshop"
    },
    {
        "kanji": "厶",
        "onyomi": "シ, ボウ, ム",
        "kunyomi": "わたくし, ござ-る",
        "english": "I"
    },
    {
        "kanji": "參",
        "onyomi": "サン, シン",
        "kunyomi": "まい-る, まじわる, みつ",
        "english": "three"
    },
    {
        "kanji": "簒",
        "onyomi": "サン, セン",
        "kunyomi": "うば-う",
        "english": "rob"
    },
    {
        "kanji": "雙",
        "onyomi": "ソウ",
        "kunyomi": "たぐい, ならぶ, ふたつ, ふた-",
        "english": "pair"
    },
    {
        "kanji": "叟",
        "onyomi": "ソウ, シュウ",
        "kunyomi": "おきな",
        "english": "old person"
    },
    {
        "kanji": "曼",
        "onyomi": "マン, バン",
        "kunyomi": "なが-い",
        "english": "wide"
    },
    {
        "kanji": "燮",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "moderate"
    },
    {
        "kanji": "叮",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "courtesy"
    },
    {
        "kanji": "叨",
        "onyomi": "トウ",
        "kunyomi": "みだりに",
        "english": "truly"
    },
    {
        "kanji": "叭",
        "onyomi": "ハツ",
        "kunyomi": "",
        "english": "open"
    },
    {
        "kanji": "叺",
        "onyomi": "",
        "kunyomi": "かます",
        "english": "straw bag"
    },
    {
        "kanji": "吁",
        "onyomi": "ク, ウ",
        "kunyomi": "ああ",
        "english": "exclamation"
    },
    {
        "kanji": "吽",
        "onyomi": "コウ, ウン, イン, オン, グ",
        "kunyomi": "ほえ-る",
        "english": "bark"
    },
    {
        "kanji": "呀",
        "onyomi": "ガ, カ",
        "kunyomi": "あ",
        "english": "open one's mouth"
    },
    {
        "kanji": "听",
        "onyomi": "キン",
        "kunyomi": "ポンド, わら-う",
        "english": "open-mouthed laughter"
    },
    {
        "kanji": "吭",
        "onyomi": "コウ",
        "kunyomi": "のど",
        "english": "throat"
    },
    {
        "kanji": "吼",
        "onyomi": "コウ, ク",
        "kunyomi": "ほ-える",
        "english": "bark"
    },
    {
        "kanji": "吮",
        "onyomi": "セン, シュン",
        "kunyomi": "す-う",
        "english": "suck"
    },
    {
        "kanji": "吶",
        "onyomi": "トツ",
        "kunyomi": "ども-る",
        "english": "stutter"
    },
    {
        "kanji": "吩",
        "onyomi": "フン",
        "kunyomi": "ふ-く",
        "english": "give an order"
    },
    {
        "kanji": "吝",
        "onyomi": "リン",
        "kunyomi": "しわ-い, やぶさ-か, おし-む",
        "english": "miserly"
    },
    {
        "kanji": "呎",
        "onyomi": "シャク",
        "kunyomi": "ふいいと",
        "english": "foot"
    },
    {
        "kanji": "咏",
        "onyomi": "エイ",
        "kunyomi": "よ-む, うた-う",
        "english": "recitation"
    },
    {
        "kanji": "呵",
        "onyomi": "カ",
        "kunyomi": "か-す, しか-る, わら-う",
        "english": "scold"
    },
    {
        "kanji": "咎",
        "onyomi": "キュウ, コウ",
        "kunyomi": "とが-める, とが",
        "english": "blame"
    },
    {
        "kanji": "呟",
        "onyomi": "ゲン",
        "kunyomi": "つぶや-く",
        "english": "mutter"
    },
    {
        "kanji": "呱",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "cry"
    },
    {
        "kanji": "呷",
        "onyomi": "コウ",
        "kunyomi": "あお-る, す-う",
        "english": "sip"
    },
    {
        "kanji": "呰",
        "onyomi": "シ, サ",
        "kunyomi": "",
        "english": "blame"
    },
    {
        "kanji": "咒",
        "onyomi": "ジュ, シュ, シュウ",
        "kunyomi": "まじな-う, のろ-い, まじない, のろ-う",
        "english": "spell"
    },
    {
        "kanji": "呻",
        "onyomi": "シン",
        "kunyomi": "うめ-く, うめき",
        "english": "moan"
    },
    {
        "kanji": "咀",
        "onyomi": "ソ, ショ",
        "kunyomi": "か-む",
        "english": "bite"
    },
    {
        "kanji": "呶",
        "onyomi": "ド, ドウ",
        "kunyomi": "かまびす-しい",
        "english": "noisy"
    },
    {
        "kanji": "咄",
        "onyomi": "トツ",
        "kunyomi": "はなし, しか-る",
        "english": "exclamation of surprise"
    },
    {
        "kanji": "咐",
        "onyomi": "フ, ホ",
        "kunyomi": "",
        "english": "blow"
    },
    {
        "kanji": "咆",
        "onyomi": "ホウ",
        "kunyomi": "ほ-える",
        "english": "bark"
    },
    {
        "kanji": "哇",
        "onyomi": "ア, アイ, エ, ワ",
        "kunyomi": "かい, けい",
        "english": "fawning child's voice"
    },
    {
        "kanji": "咢",
        "onyomi": "ガク",
        "kunyomi": "おどろく",
        "english": "outspokenly"
    },
    {
        "kanji": "咸",
        "onyomi": "カン, ゲン",
        "kunyomi": "",
        "english": "all"
    },
    {
        "kanji": "咥",
        "onyomi": "テツ, キ",
        "kunyomi": "か-む, くわ-える",
        "english": "laugh"
    },
    {
        "kanji": "咬",
        "onyomi": "コウ, ヨウ",
        "kunyomi": "か-む",
        "english": "bite"
    },
    {
        "kanji": "哄",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "resound"
    },
    {
        "kanji": "哈",
        "onyomi": "ゴウ, ハ, ソウ",
        "kunyomi": "",
        "english": "school of fish"
    },
    {
        "kanji": "咨",
        "onyomi": "シ",
        "kunyomi": "ああ, はか-る",
        "english": "investigate"
    },
    {
        "kanji": "咫",
        "onyomi": "シ",
        "kunyomi": "た",
        "english": "short"
    },
    {
        "kanji": "哂",
        "onyomi": "シン",
        "kunyomi": "わら-う",
        "english": "derisive laugh"
    },
    {
        "kanji": "咤",
        "onyomi": "タ, ト",
        "kunyomi": "しか-る",
        "english": "clicking (with tongue)"
    },
    {
        "kanji": "咾",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "voice"
    },
    {
        "kanji": "咼",
        "onyomi": "カイ, ケ, クウ, カ",
        "kunyomi": "よこしま, くちがゆがむ, ゆが-む",
        "english": "crooked mouth"
    },
    {
        "kanji": "哘",
        "onyomi": "",
        "kunyomi": "さそ-う",
        "english": "invite"
    },
    {
        "kanji": "哥",
        "onyomi": "カ, コ",
        "kunyomi": "あに, うた",
        "english": "big brother"
    },
    {
        "kanji": "哦",
        "onyomi": "ガ",
        "kunyomi": "",
        "english": "sing"
    },
    {
        "kanji": "唏",
        "onyomi": "キ",
        "kunyomi": "なげ-く",
        "english": "lament"
    },
    {
        "kanji": "唔",
        "onyomi": "ゴ",
        "kunyomi": "",
        "english": "reading voice"
    },
    {
        "kanji": "哽",
        "onyomi": "コウ",
        "kunyomi": "むせ-ぶ",
        "english": "sob"
    },
    {
        "kanji": "哮",
        "onyomi": "コウ",
        "kunyomi": "た-ける, ほ-える",
        "english": "roar"
    },
    {
        "kanji": "哭",
        "onyomi": "コク",
        "kunyomi": "なげ-く, な-く",
        "english": "weep"
    },
    {
        "kanji": "哺",
        "onyomi": "ホ",
        "kunyomi": "はぐく-む, ふく-む",
        "english": "nurse"
    },
    {
        "kanji": "哢",
        "onyomi": "ロウ",
        "kunyomi": "さえず-る",
        "english": "chirp"
    },
    {
        "kanji": "唹",
        "onyomi": "オ",
        "kunyomi": "",
        "english": "laugh"
    },
    {
        "kanji": "啀",
        "onyomi": "ガイ",
        "kunyomi": "いがむ",
        "english": "wrangle"
    },
    {
        "kanji": "啣",
        "onyomi": "カン",
        "kunyomi": "くわ-える, くつわ",
        "english": "hold in mouth or between teeth"
    },
    {
        "kanji": "啌",
        "onyomi": "クウ, コウ",
        "kunyomi": "",
        "english": "angry voice"
    },
    {
        "kanji": "售",
        "onyomi": "シュウ",
        "kunyomi": "う-る",
        "english": "sell"
    },
    {
        "kanji": "啜",
        "onyomi": "セツ, テツ",
        "kunyomi": "すす-る",
        "english": "suck"
    },
    {
        "kanji": "啅",
        "onyomi": "タク, トウ",
        "kunyomi": "",
        "english": "noisy"
    },
    {
        "kanji": "啖",
        "onyomi": "タン",
        "kunyomi": "く-う, くらわ-す",
        "english": "eat"
    },
    {
        "kanji": "啗",
        "onyomi": "タン",
        "kunyomi": "く-らわす, く-う, く-らう",
        "english": "allure"
    },
    {
        "kanji": "唸",
        "onyomi": "テン",
        "kunyomi": "うな-る, うなり",
        "english": "groan"
    },
    {
        "kanji": "唳",
        "onyomi": "レイ",
        "kunyomi": "れつ",
        "english": "cry"
    },
    {
        "kanji": "啝",
        "onyomi": "ワ",
        "kunyomi": "したが-う",
        "english": "follow"
    },
    {
        "kanji": "喙",
        "onyomi": "カイ",
        "kunyomi": "がい, くちばし",
        "english": "beak"
    },
    {
        "kanji": "喀",
        "onyomi": "カク",
        "kunyomi": "は-く",
        "english": "vomit"
    },
    {
        "kanji": "咯",
        "onyomi": "カク",
        "kunyomi": "は-く",
        "english": "quarrel"
    },
    {
        "kanji": "喊",
        "onyomi": "カン, ヤク",
        "kunyomi": "さけ-ぶ",
        "english": "cry"
    },
    {
        "kanji": "喟",
        "onyomi": "キ, カイ",
        "kunyomi": "なげ-く",
        "english": "moan"
    },
    {
        "kanji": "啻",
        "onyomi": "シ",
        "kunyomi": "ただ-ならぬ, ただ-に",
        "english": "incomparable"
    },
    {
        "kanji": "啾",
        "onyomi": "シュウ",
        "kunyomi": "な-く",
        "english": "cry"
    },
    {
        "kanji": "喘",
        "onyomi": "ゼン, セン",
        "kunyomi": "あえ-ぐ, せき",
        "english": "pant"
    },
    {
        "kanji": "喞",
        "onyomi": "ショク, ソク",
        "kunyomi": "かこ-つ",
        "english": "speak resentfully"
    },
    {
        "kanji": "單",
        "onyomi": "タン",
        "kunyomi": "ひとえ",
        "english": "one"
    },
    {
        "kanji": "啼",
        "onyomi": "テイ",
        "kunyomi": "な-く",
        "english": "bark"
    },
    {
        "kanji": "喃",
        "onyomi": "ナン",
        "kunyomi": "の-う",
        "english": "chatter"
    },
    {
        "kanji": "喩",
        "onyomi": "ユ",
        "kunyomi": "たと-える, さと-す",
        "english": "metaphor"
    },
    {
        "kanji": "喇",
        "onyomi": "ラツ, ラ",
        "kunyomi": "",
        "english": "chatter"
    },
    {
        "kanji": "喨",
        "onyomi": "リョウ, ロウ",
        "kunyomi": "",
        "english": "clear voice"
    },
    {
        "kanji": "嗚",
        "onyomi": "ウ, オ",
        "kunyomi": "ああ",
        "english": "weep"
    },
    {
        "kanji": "嗅",
        "onyomi": "キュウ",
        "kunyomi": "か-ぐ",
        "english": "smell"
    },
    {
        "kanji": "嗟",
        "onyomi": "サ, シャ",
        "kunyomi": "あ, ああ, なげ-く",
        "english": "lament"
    },
    {
        "kanji": "嗄",
        "onyomi": "サ",
        "kunyomi": "か-らす, か-れる, しゃが-れる",
        "english": "hoarse"
    },
    {
        "kanji": "嗜",
        "onyomi": "シ",
        "kunyomi": "たしな-む, たしな-み, この-む, この-み",
        "english": "like"
    },
    {
        "kanji": "嗤",
        "onyomi": "シ",
        "kunyomi": "わら-う",
        "english": "laugh"
    },
    {
        "kanji": "嗔",
        "onyomi": "シン",
        "kunyomi": "いか-る",
        "english": "be angry"
    },
    {
        "kanji": "嘔",
        "onyomi": "オウ, ク",
        "kunyomi": "は-く, むかつ-く, うた-う",
        "english": "vomit"
    },
    {
        "kanji": "嗷",
        "onyomi": "ゴウ",
        "kunyomi": "かまびす-しい",
        "english": "noisy"
    },
    {
        "kanji": "嘖",
        "onyomi": "サク",
        "kunyomi": "さいな-む, さけ-ぶ",
        "english": "scold"
    },
    {
        "kanji": "嗾",
        "onyomi": "ゾク, ソク, ソウ",
        "kunyomi": "けしか-ける, そそのか-す",
        "english": "sic'em"
    },
    {
        "kanji": "嗽",
        "onyomi": "ソウ, シュウ, ソク",
        "kunyomi": "すす-ぐ, ゆす-ぐ, くちすす-ぐ, うがい",
        "english": "rinse"
    },
    {
        "kanji": "嘛",
        "onyomi": "マ",
        "kunyomi": "",
        "english": "wheat"
    },
    {
        "kanji": "嗹",
        "onyomi": "レン",
        "kunyomi": "おしゃべり",
        "english": "voluble"
    },
    {
        "kanji": "噎",
        "onyomi": "イツ, エツ",
        "kunyomi": "む-せる, むせ-ぶ",
        "english": "choke"
    },
    {
        "kanji": "噐",
        "onyomi": "キ",
        "kunyomi": "うつわ",
        "english": "vessel"
    },
    {
        "kanji": "營",
        "onyomi": "エイ",
        "kunyomi": "いとな-む, いとな-み",
        "english": "camp"
    },
    {
        "kanji": "嘴",
        "onyomi": "シ",
        "kunyomi": "くちばし, はし",
        "english": "beak"
    },
    {
        "kanji": "嘶",
        "onyomi": "セイ",
        "kunyomi": "いなな-く",
        "english": "neigh"
    },
    {
        "kanji": "嘲",
        "onyomi": "チョウ, トウ",
        "kunyomi": "あざけ-る",
        "english": "ridicule"
    },
    {
        "kanji": "嘸",
        "onyomi": "ブ, ム",
        "kunyomi": "さぞ, さぞや, さぞかし",
        "english": "how"
    },
    {
        "kanji": "噫",
        "onyomi": "イ, アイ, オク",
        "kunyomi": "ああ, おくび",
        "english": "exclamation"
    },
    {
        "kanji": "噤",
        "onyomi": "キン",
        "kunyomi": "つぐ-む",
        "english": "shut up"
    },
    {
        "kanji": "嘯",
        "onyomi": "ショウ, シツ",
        "kunyomi": "うそぶ-く",
        "english": "roar"
    },
    {
        "kanji": "噬",
        "onyomi": "ゼイ",
        "kunyomi": "か-む",
        "english": "bite"
    },
    {
        "kanji": "噪",
        "onyomi": "ソウ",
        "kunyomi": "さわ-ぐ",
        "english": "be noisy"
    },
    {
        "kanji": "嚆",
        "onyomi": "コウ",
        "kunyomi": "さけ-ぶ",
        "english": "call"
    },
    {
        "kanji": "嚀",
        "onyomi": "ネイ, ニョウ",
        "kunyomi": "",
        "english": "kindness"
    },
    {
        "kanji": "嚊",
        "onyomi": "ヒ",
        "kunyomi": "かかめ, かかあ, はないき",
        "english": "breathing through the nose"
    },
    {
        "kanji": "嚠",
        "onyomi": "リュウ, ル",
        "kunyomi": "",
        "english": "a clear sound"
    },
    {
        "kanji": "嚔",
        "onyomi": "テイ",
        "kunyomi": "くしゃみ, くさめ, くさみ, はな-ひる, ひ-る",
        "english": "sneeze"
    },
    {
        "kanji": "嚏",
        "onyomi": "テイ",
        "kunyomi": "くしゃみ, くさめ, くさみ, はな-ひる, ひ-る",
        "english": "sneeze"
    },
    {
        "kanji": "嚥",
        "onyomi": "エン",
        "kunyomi": "の-む",
        "english": "swallow"
    },
    {
        "kanji": "嚮",
        "onyomi": "コウ, キョウ",
        "kunyomi": "さきに, むか-う",
        "english": "guide"
    },
    {
        "kanji": "嚶",
        "onyomi": "オウ",
        "kunyomi": "な-く",
        "english": "chirping"
    },
    {
        "kanji": "嚴",
        "onyomi": "ゲン, ゴン",
        "kunyomi": "おごそ-か, きび-しい, いか-めしい, いつくし",
        "english": "strictness"
    },
    {
        "kanji": "囂",
        "onyomi": "ゴウ, キョウ",
        "kunyomi": "かしま-しい, かまびす-しい",
        "english": "noisy"
    },
    {
        "kanji": "嚼",
        "onyomi": "シャク",
        "kunyomi": "か-む",
        "english": "bite"
    },
    {
        "kanji": "囁",
        "onyomi": "ショウ",
        "kunyomi": "ささや-く",
        "english": "whisper"
    },
    {
        "kanji": "囃",
        "onyomi": "サツ, ソウ",
        "kunyomi": "はや-す, はやし",
        "english": "play (music)"
    },
    {
        "kanji": "囀",
        "onyomi": "テン",
        "kunyomi": "さえず-る",
        "english": "sing"
    },
    {
        "kanji": "囈",
        "onyomi": "ゲイ",
        "kunyomi": "",
        "english": "foolish talk"
    },
    {
        "kanji": "囎",
        "onyomi": "ソ",
        "kunyomi": "しょう",
        "english": "used in place names"
    },
    {
        "kanji": "囑",
        "onyomi": "ショク",
        "kunyomi": "しょく-する, たの-む",
        "english": "request"
    },
    {
        "kanji": "囓",
        "onyomi": "ゲツ, ケツ",
        "kunyomi": "かじ-る, か-む",
        "english": "gnaw"
    },
    {
        "kanji": "囗",
        "onyomi": "イ, コク",
        "kunyomi": "",
        "english": "box"
    },
    {
        "kanji": "囮",
        "onyomi": "カ, ユウ",
        "kunyomi": "おとり",
        "english": "decoy"
    },
    {
        "kanji": "囹",
        "onyomi": "レイ",
        "kunyomi": "",
        "english": "prison"
    },
    {
        "kanji": "圀",
        "onyomi": "コク",
        "kunyomi": "くに",
        "english": "country"
    },
    {
        "kanji": "囿",
        "onyomi": "ユウ",
        "kunyomi": "その",
        "english": "game preserve"
    },
    {
        "kanji": "圄",
        "onyomi": "ゴ, ギョ",
        "kunyomi": "ひとや",
        "english": "prison"
    },
    {
        "kanji": "圉",
        "onyomi": "ギョ, ゴ",
        "kunyomi": "うまか-い, ひとや",
        "english": "prison"
    },
    {
        "kanji": "圈",
        "onyomi": "ケン",
        "kunyomi": "かこ-い",
        "english": "sphere"
    },
    {
        "kanji": "國",
        "onyomi": "コク",
        "kunyomi": "くに",
        "english": "country"
    },
    {
        "kanji": "圍",
        "onyomi": "イ",
        "kunyomi": "かこ-む, かこ-う, かこ-い",
        "english": "enclose"
    },
    {
        "kanji": "圓",
        "onyomi": "エン",
        "kunyomi": "まる-い, まる, まど, まど-か, まろ-やか",
        "english": "yen"
    },
    {
        "kanji": "團",
        "onyomi": "ダン, トン",
        "kunyomi": "かたまり, まる-い",
        "english": "association"
    },
    {
        "kanji": "圖",
        "onyomi": "ズ, ト",
        "kunyomi": "え, はか-る",
        "english": "drawing"
    },
    {
        "kanji": "嗇",
        "onyomi": "ショク",
        "kunyomi": "やぶさ-か, おし-む",
        "english": "miserly"
    },
    {
        "kanji": "圜",
        "onyomi": "カン, エン",
        "kunyomi": "まる-い, めぐ-る",
        "english": "round"
    },
    {
        "kanji": "圦",
        "onyomi": "",
        "kunyomi": "いり",
        "english": "sluice"
    },
    {
        "kanji": "圷",
        "onyomi": "",
        "kunyomi": "あくつ",
        "english": "low-lying land"
    },
    {
        "kanji": "圸",
        "onyomi": "",
        "kunyomi": "まま",
        "english": "steep slope"
    },
    {
        "kanji": "坎",
        "onyomi": "カン",
        "kunyomi": "あな",
        "english": "pitfall"
    },
    {
        "kanji": "圻",
        "onyomi": "キ, ギン",
        "kunyomi": "さか-い",
        "english": "region surrounding the capital"
    },
    {
        "kanji": "址",
        "onyomi": "シ",
        "kunyomi": "あと",
        "english": "ruins"
    },
    {
        "kanji": "坏",
        "onyomi": "ハイ",
        "kunyomi": "つき, おか",
        "english": "bowl"
    },
    {
        "kanji": "坩",
        "onyomi": "カン",
        "kunyomi": "つぼ",
        "english": "jar"
    },
    {
        "kanji": "埀",
        "onyomi": "スイ",
        "kunyomi": "た-れる, た-らす, なんなんと-す",
        "english": "let down"
    },
    {
        "kanji": "垈",
        "onyomi": "タイ, ダイ",
        "kunyomi": "ぬた",
        "english": "swamp"
    },
    {
        "kanji": "坡",
        "onyomi": "ハ, ヒ",
        "kunyomi": "つつ-み",
        "english": "dike"
    },
    {
        "kanji": "坿",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "slope"
    },
    {
        "kanji": "垉",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "collapse"
    },
    {
        "kanji": "垓",
        "onyomi": "ガイ, カイ",
        "kunyomi": "はて",
        "english": "border"
    },
    {
        "kanji": "垠",
        "onyomi": "ギン, ゴン",
        "kunyomi": "きし, さか-い",
        "english": "limit"
    },
    {
        "kanji": "垳",
        "onyomi": "",
        "kunyomi": "がけ, いげ, いけ",
        "english": "cliff"
    },
    {
        "kanji": "垤",
        "onyomi": "テツ",
        "kunyomi": "ありづか",
        "english": "anthill"
    },
    {
        "kanji": "垪",
        "onyomi": "ハ",
        "kunyomi": "",
        "english": "used in proper names"
    },
    {
        "kanji": "垰",
        "onyomi": "",
        "kunyomi": "たわ, とうげ, たお, あくつ",
        "english": "mountain pass"
    },
    {
        "kanji": "埃",
        "onyomi": "アイ",
        "kunyomi": "ほこり, ちり",
        "english": "dust"
    },
    {
        "kanji": "埆",
        "onyomi": "カク",
        "kunyomi": "きそ-う",
        "english": "barren land"
    },
    {
        "kanji": "埔",
        "onyomi": "ホ",
        "kunyomi": "",
        "english": "used in Chinese place names"
    },
    {
        "kanji": "埒",
        "onyomi": "レツ, ラツ, ラチ",
        "kunyomi": "らち-があく, かこ-い",
        "english": "picket"
    },
    {
        "kanji": "埓",
        "onyomi": "レツ, ラツ, ラチ",
        "kunyomi": "らち-があく, かこ-い",
        "english": "pale"
    },
    {
        "kanji": "堊",
        "onyomi": "アク, ア, オ",
        "kunyomi": "いろつち, しろつち",
        "english": "whitewash"
    },
    {
        "kanji": "埖",
        "onyomi": "",
        "kunyomi": "ごみ",
        "english": "garbage"
    },
    {
        "kanji": "埣",
        "onyomi": "ソツ",
        "kunyomi": "",
        "english": "barren land"
    },
    {
        "kanji": "堋",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "bury"
    },
    {
        "kanji": "堙",
        "onyomi": "イン",
        "kunyomi": "ふさ-ぐ",
        "english": "close up"
    },
    {
        "kanji": "堝",
        "onyomi": "カ",
        "kunyomi": "るつぼ",
        "english": "crucible"
    },
    {
        "kanji": "塲",
        "onyomi": "ジョウ, チョウ",
        "kunyomi": "ば",
        "english": "open space"
    },
    {
        "kanji": "堡",
        "onyomi": "ホ, ホウ",
        "kunyomi": "とりで",
        "english": "fort"
    },
    {
        "kanji": "塢",
        "onyomi": "オ, ウ",
        "kunyomi": "",
        "english": "fortress embankment"
    },
    {
        "kanji": "塋",
        "onyomi": "エイ",
        "kunyomi": "はか",
        "english": "cemetery"
    },
    {
        "kanji": "塰",
        "onyomi": "",
        "kunyomi": "あま",
        "english": "title of a Noh play"
    },
    {
        "kanji": "毀",
        "onyomi": "キ",
        "kunyomi": "こぼ-つ, こわ-す, こぼ-れる, こわ-れる, そし-る, やぶ-る",
        "english": "break"
    },
    {
        "kanji": "塒",
        "onyomi": "シ, ジ",
        "kunyomi": "ねぐら, とや, とぐろ",
        "english": "roost"
    },
    {
        "kanji": "堽",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "mound"
    },
    {
        "kanji": "塹",
        "onyomi": "ザン, セン",
        "kunyomi": "ほり, あな",
        "english": "moat"
    },
    {
        "kanji": "墅",
        "onyomi": "ショ, ヤ",
        "kunyomi": "しもやしき",
        "english": "shed"
    },
    {
        "kanji": "墹",
        "onyomi": "",
        "kunyomi": "まま",
        "english": "steep slope"
    },
    {
        "kanji": "墟",
        "onyomi": "キョ",
        "kunyomi": "あと",
        "english": "ruins"
    },
    {
        "kanji": "墫",
        "onyomi": "シュン",
        "kunyomi": "",
        "english": "cup"
    },
    {
        "kanji": "墺",
        "onyomi": "オウ, イク",
        "kunyomi": "きし",
        "english": "land"
    },
    {
        "kanji": "壞",
        "onyomi": "カイ, エ",
        "kunyomi": "こわ-す, こわ-れる, やぶ-る",
        "english": "demolition"
    },
    {
        "kanji": "墻",
        "onyomi": "ショウ",
        "kunyomi": "かき",
        "english": "fence"
    },
    {
        "kanji": "墸",
        "onyomi": "チョ",
        "kunyomi": "",
        "english": "hesitate"
    },
    {
        "kanji": "墮",
        "onyomi": "ダ",
        "kunyomi": "おち-る, くず-す, くず-れる",
        "english": "descend to"
    },
    {
        "kanji": "壅",
        "onyomi": "ヨウ",
        "kunyomi": "ふさ-ぐ",
        "english": "plug up"
    },
    {
        "kanji": "壓",
        "onyomi": "アツ, エン, オウ",
        "kunyomi": "お-す, へ-す, おさ-える",
        "english": "pressure"
    },
    {
        "kanji": "壑",
        "onyomi": "ガク, カク",
        "kunyomi": "たに",
        "english": "valley"
    },
    {
        "kanji": "壗",
        "onyomi": "",
        "kunyomi": "まま",
        "english": "steep slope"
    },
    {
        "kanji": "壙",
        "onyomi": "コウ",
        "kunyomi": "あな",
        "english": "hole"
    },
    {
        "kanji": "壘",
        "onyomi": "ルイ, ライ, スイ",
        "kunyomi": "とりで",
        "english": "fort"
    },
    {
        "kanji": "壥",
        "onyomi": "テン",
        "kunyomi": "",
        "english": "fine residence"
    },
    {
        "kanji": "壜",
        "onyomi": "ドン, タン",
        "kunyomi": "びん",
        "english": "bottle"
    },
    {
        "kanji": "壤",
        "onyomi": "ジョウ",
        "kunyomi": "つち",
        "english": "soil"
    },
    {
        "kanji": "壟",
        "onyomi": "ロウ, リョウ",
        "kunyomi": "おか, うね, つか",
        "english": "mound"
    },
    {
        "kanji": "壯",
        "onyomi": "ソウ",
        "kunyomi": "さかん",
        "english": "big"
    },
    {
        "kanji": "壺",
        "onyomi": "コ",
        "kunyomi": "つぼ",
        "english": "jar"
    },
    {
        "kanji": "壹",
        "onyomi": "イチ, イツ",
        "kunyomi": "ひとつ",
        "english": "number one"
    },
    {
        "kanji": "壻",
        "onyomi": "セイ",
        "kunyomi": "むこ",
        "english": "son-in-law"
    },
    {
        "kanji": "壼",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "palace corridor or passageway"
    },
    {
        "kanji": "壽",
        "onyomi": "ジュ, ス, シュウ",
        "kunyomi": "ことぶき, ことぶ-く, ことほ-ぐ",
        "english": "longevity"
    },
    {
        "kanji": "夂",
        "onyomi": "チ",
        "kunyomi": "しゅう",
        "english": "late"
    },
    {
        "kanji": "夊",
        "onyomi": "スイ",
        "kunyomi": "ゆき",
        "english": "winter variant radical (no. 34)"
    },
    {
        "kanji": "夐",
        "onyomi": "ケイ, ケン",
        "kunyomi": "はるか",
        "english": "far"
    },
    {
        "kanji": "夛",
        "onyomi": "タ",
        "kunyomi": "おお-い, まさ-に, まさ-る",
        "english": "much"
    },
    {
        "kanji": "梦",
        "onyomi": "ム, ボウ",
        "kunyomi": "ゆめ, ゆめ-みる, くら-い",
        "english": "dream"
    },
    {
        "kanji": "夥",
        "onyomi": "カ, ワ",
        "kunyomi": "おびただ-しい",
        "english": "immense"
    },
    {
        "kanji": "夬",
        "onyomi": "カイ, ケツ, ケチ",
        "kunyomi": "わ-ける",
        "english": "decide"
    },
    {
        "kanji": "夭",
        "onyomi": "ヨウ, オウ, カ",
        "kunyomi": "わか-い, わかじに, わざわい",
        "english": "early death"
    },
    {
        "kanji": "夲",
        "onyomi": "ホン",
        "kunyomi": "もと",
        "english": "advance quickly"
    },
    {
        "kanji": "夸",
        "onyomi": "コ, カ",
        "kunyomi": "ほご-る",
        "english": "boast"
    },
    {
        "kanji": "夾",
        "onyomi": "キョウ, コウ",
        "kunyomi": "はさ-む",
        "english": "insert between"
    },
    {
        "kanji": "竒",
        "onyomi": "キ",
        "kunyomi": "く-しき, あや-しい, くし-くも, めずら-しい",
        "english": "strange"
    },
    {
        "kanji": "奕",
        "onyomi": "エキ, ヤク",
        "kunyomi": "",
        "english": "large"
    },
    {
        "kanji": "奐",
        "onyomi": "カン",
        "kunyomi": "あき-らか",
        "english": "clear"
    },
    {
        "kanji": "奎",
        "onyomi": "ケイ, キ",
        "kunyomi": "",
        "english": "star"
    },
    {
        "kanji": "奚",
        "onyomi": "ケイ",
        "kunyomi": "なんぞ",
        "english": "servant"
    },
    {
        "kanji": "奘",
        "onyomi": "ジョウ, ソウ",
        "kunyomi": "さかん",
        "english": "large"
    },
    {
        "kanji": "奢",
        "onyomi": "シャ",
        "kunyomi": "おご-る, おご-り",
        "english": "extravagance"
    },
    {
        "kanji": "奠",
        "onyomi": "テン, デン, テイ",
        "kunyomi": "さだ-める, まつ-る",
        "english": "decision"
    },
    {
        "kanji": "奧",
        "onyomi": "オウ, オク",
        "kunyomi": "おく-まる, くま",
        "english": "heart"
    },
    {
        "kanji": "奬",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "すす-める",
        "english": "prize"
    },
    {
        "kanji": "奩",
        "onyomi": "レン",
        "kunyomi": "くしげ, はこ",
        "english": "lady's vanity case"
    },
    {
        "kanji": "奸",
        "onyomi": "カン",
        "kunyomi": "おか-す",
        "english": "wickedness"
    },
    {
        "kanji": "妁",
        "onyomi": "シャク",
        "kunyomi": "なこうど",
        "english": "go-between"
    },
    {
        "kanji": "妝",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "よそお-う",
        "english": "dress up"
    },
    {
        "kanji": "佞",
        "onyomi": "ネイ",
        "kunyomi": "おもね-る, よこしま",
        "english": "flattery"
    },
    {
        "kanji": "侫",
        "onyomi": "ネイ",
        "kunyomi": "おもね-る, よこしま",
        "english": "flattery"
    },
    {
        "kanji": "妣",
        "onyomi": "ヒ",
        "kunyomi": "なきはは",
        "english": "mother"
    },
    {
        "kanji": "妲",
        "onyomi": "ダツ",
        "kunyomi": "",
        "english": "female proper name"
    },
    {
        "kanji": "姆",
        "onyomi": "ボ, モ",
        "kunyomi": "うば",
        "english": "wet nurse"
    },
    {
        "kanji": "姨",
        "onyomi": "テイ, イ",
        "kunyomi": "いもと, いもうと, おば",
        "english": "younger sister"
    },
    {
        "kanji": "姜",
        "onyomi": "キョウ, ガ",
        "kunyomi": "こう",
        "english": "Chinese surname"
    },
    {
        "kanji": "妍",
        "onyomi": "ケン",
        "kunyomi": "うつく-しい",
        "english": "beauty"
    },
    {
        "kanji": "姙",
        "onyomi": "ニン, ジン",
        "kunyomi": "はら-む, みごも-る",
        "english": "be(come) pregnant"
    },
    {
        "kanji": "姚",
        "onyomi": "ヨウ, チョウ",
        "kunyomi": "うつく-しい",
        "english": "beautiful"
    },
    {
        "kanji": "娥",
        "onyomi": "ガ",
        "kunyomi": "みめよ-い",
        "english": "beautiful"
    },
    {
        "kanji": "娟",
        "onyomi": "エン, ケン",
        "kunyomi": "",
        "english": "beauty of face"
    },
    {
        "kanji": "娑",
        "onyomi": "シャ, サ",
        "kunyomi": "",
        "english": "old woman"
    },
    {
        "kanji": "娜",
        "onyomi": "ダ, ナ",
        "kunyomi": "",
        "english": "graceful"
    },
    {
        "kanji": "娉",
        "onyomi": "ヘイ, ホウ",
        "kunyomi": "ほ",
        "english": "ask after a woman's name"
    },
    {
        "kanji": "娚",
        "onyomi": "ナン, ノウ, ドウ",
        "kunyomi": "めおと, たわむ-れる",
        "english": "loud talking"
    },
    {
        "kanji": "婀",
        "onyomi": "ア",
        "kunyomi": "あだ, あだ-っぽい, たおやか",
        "english": "charm"
    },
    {
        "kanji": "婬",
        "onyomi": "イン",
        "kunyomi": "みだれ-, ひた-す, ほしいまま, みだ-ら, みだ-れる",
        "english": "lewdness"
    },
    {
        "kanji": "婉",
        "onyomi": "エン",
        "kunyomi": "うつく-しい, したが-う",
        "english": "graceful"
    },
    {
        "kanji": "娵",
        "onyomi": "シュ, シュウ, ス, ソウ",
        "kunyomi": "よめ",
        "english": "marry"
    },
    {
        "kanji": "娶",
        "onyomi": "シュ",
        "kunyomi": "めと-る, めあわ-せる",
        "english": "marry"
    },
    {
        "kanji": "婢",
        "onyomi": "ヒ",
        "kunyomi": "はしため",
        "english": "maidservant"
    },
    {
        "kanji": "婪",
        "onyomi": "ラン",
        "kunyomi": "むさぼ-る",
        "english": "covet"
    },
    {
        "kanji": "媚",
        "onyomi": "ビ",
        "kunyomi": "こ-びる",
        "english": "flatter"
    },
    {
        "kanji": "媼",
        "onyomi": "オウ",
        "kunyomi": "おうな",
        "english": "mother"
    },
    {
        "kanji": "媾",
        "onyomi": "コウ",
        "kunyomi": "よしみ",
        "english": "association"
    },
    {
        "kanji": "嫋",
        "onyomi": "ジョウ, ジャク, デキ",
        "kunyomi": "なよ-やかな, しなや-か, たお-やか",
        "english": "supple"
    },
    {
        "kanji": "嫂",
        "onyomi": "ソウ",
        "kunyomi": "あによめ",
        "english": "elder brother's wife"
    },
    {
        "kanji": "媽",
        "onyomi": "ボ, モ",
        "kunyomi": "はは",
        "english": "mother"
    },
    {
        "kanji": "嫣",
        "onyomi": "エン",
        "kunyomi": "",
        "english": "beauty"
    },
    {
        "kanji": "嫗",
        "onyomi": "ウ, オウ",
        "kunyomi": "あたた-める, おうな",
        "english": "old woman"
    },
    {
        "kanji": "嫦",
        "onyomi": "コウ, ジョウ",
        "kunyomi": "",
        "english": "proper name"
    },
    {
        "kanji": "嫩",
        "onyomi": "ドン, ノン",
        "kunyomi": "わか-い",
        "english": "young"
    },
    {
        "kanji": "嫖",
        "onyomi": "ヒョウ",
        "kunyomi": "かる-い",
        "english": "wanton"
    },
    {
        "kanji": "嫺",
        "onyomi": "カン",
        "kunyomi": "なら-う, みやびやか",
        "english": "refined"
    },
    {
        "kanji": "嫻",
        "onyomi": "カン",
        "kunyomi": "なら-う, みやびやか",
        "english": "elegant"
    },
    {
        "kanji": "嬌",
        "onyomi": "キョウ",
        "kunyomi": "なまめか-しい",
        "english": "attractive"
    },
    {
        "kanji": "嬋",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "beautiful"
    },
    {
        "kanji": "嬖",
        "onyomi": "ヘイ",
        "kunyomi": "きにいり",
        "english": "agreeable person"
    },
    {
        "kanji": "嬲",
        "onyomi": "ドウ, ジョウ",
        "kunyomi": "なぶ-る",
        "english": "sport with"
    },
    {
        "kanji": "嫐",
        "onyomi": "ドウ, ジョウ",
        "kunyomi": "なぶ-る",
        "english": "frolic"
    },
    {
        "kanji": "嬪",
        "onyomi": "ヒン",
        "kunyomi": "ひめ",
        "english": "bride"
    },
    {
        "kanji": "嬶",
        "onyomi": "",
        "kunyomi": "かか, かかあ",
        "english": "wife (vulg)"
    },
    {
        "kanji": "嬾",
        "onyomi": "ラン",
        "kunyomi": "おこた-る, ものうい",
        "english": "lazy"
    },
    {
        "kanji": "孃",
        "onyomi": "ジョウ",
        "kunyomi": "むすめ",
        "english": "girl"
    },
    {
        "kanji": "孅",
        "onyomi": "セン",
        "kunyomi": "かよわ-い",
        "english": "delicate"
    },
    {
        "kanji": "孀",
        "onyomi": "ソウ",
        "kunyomi": "やもめ",
        "english": "widow"
    },
    {
        "kanji": "孑",
        "onyomi": "ケツ",
        "kunyomi": "ひとり",
        "english": "mosquito wriggler"
    },
    {
        "kanji": "孕",
        "onyomi": "ヨウ",
        "kunyomi": "はら-む",
        "english": "become pregnant"
    },
    {
        "kanji": "孚",
        "onyomi": "フ",
        "kunyomi": "たまご, はぐく-む",
        "english": "sincere"
    },
    {
        "kanji": "孛",
        "onyomi": "ハイ, ブツ, ボツ",
        "kunyomi": "",
        "english": "comet"
    },
    {
        "kanji": "孥",
        "onyomi": "ド, ヌ",
        "kunyomi": "つまこ",
        "english": "child"
    },
    {
        "kanji": "孩",
        "onyomi": "ガイ, カイ",
        "kunyomi": "ちのみご",
        "english": "baby"
    },
    {
        "kanji": "孰",
        "onyomi": "ジュク",
        "kunyomi": "いずれ, たれ",
        "english": "which"
    },
    {
        "kanji": "孳",
        "onyomi": "ジ, シ",
        "kunyomi": "う-む, しげ-る",
        "english": "increase"
    },
    {
        "kanji": "孵",
        "onyomi": "フ",
        "kunyomi": "かえ-す",
        "english": "hatch"
    },
    {
        "kanji": "學",
        "onyomi": "ガク",
        "kunyomi": "まな-ぶ",
        "english": "learning"
    },
    {
        "kanji": "斈",
        "onyomi": "ガク",
        "kunyomi": "まな-ぶ",
        "english": "learning"
    },
    {
        "kanji": "孺",
        "onyomi": "ジュ",
        "kunyomi": "おさない, ちのみご",
        "english": "child"
    },
    {
        "kanji": "宀",
        "onyomi": "ベン, メン",
        "kunyomi": "",
        "english": "shaped crown"
    },
    {
        "kanji": "它",
        "onyomi": "タ",
        "kunyomi": "へび",
        "english": "other"
    },
    {
        "kanji": "宦",
        "onyomi": "カン",
        "kunyomi": "つかさ",
        "english": "official"
    },
    {
        "kanji": "宸",
        "onyomi": "シン",
        "kunyomi": "のき",
        "english": "eaves"
    },
    {
        "kanji": "寃",
        "onyomi": "エン",
        "kunyomi": "",
        "english": "grievance"
    },
    {
        "kanji": "寇",
        "onyomi": "コウ",
        "kunyomi": "あだ-する",
        "english": "bandits"
    },
    {
        "kanji": "寉",
        "onyomi": "",
        "kunyomi": "つる",
        "english": "crane (bird)"
    },
    {
        "kanji": "寔",
        "onyomi": "ショク",
        "kunyomi": "これ, じき, まことに",
        "english": "real"
    },
    {
        "kanji": "寐",
        "onyomi": "ビ",
        "kunyomi": "ね-る",
        "english": "sleep"
    },
    {
        "kanji": "寤",
        "onyomi": "ゴ",
        "kunyomi": "さ-める",
        "english": "awake"
    },
    {
        "kanji": "實",
        "onyomi": "ジツ, シツ",
        "kunyomi": "み, みの-る, まこと-に, みの-り, みち-る",
        "english": "truth"
    },
    {
        "kanji": "寢",
        "onyomi": "シン",
        "kunyomi": "ね-る, ね-かす, い-ぬ, みたまや, や-める",
        "english": "sleep"
    },
    {
        "kanji": "寞",
        "onyomi": "バク, マク",
        "kunyomi": "さび-しい",
        "english": "lonely"
    },
    {
        "kanji": "寥",
        "onyomi": "リョウ",
        "kunyomi": "さび-しい",
        "english": "lonely"
    },
    {
        "kanji": "寫",
        "onyomi": "シャ",
        "kunyomi": "うつ-す, うつ-る",
        "english": "be photographed"
    },
    {
        "kanji": "寰",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "imperial domain"
    },
    {
        "kanji": "寶",
        "onyomi": "ホウ",
        "kunyomi": "たから",
        "english": "treasure"
    },
    {
        "kanji": "寳",
        "onyomi": "ホウ",
        "kunyomi": "たから",
        "english": "treasure"
    },
    {
        "kanji": "尅",
        "onyomi": "コク",
        "kunyomi": "かつ",
        "english": "subdue"
    },
    {
        "kanji": "將",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "まさ-に, はた, ひきい-る, もって",
        "english": "commander"
    },
    {
        "kanji": "專",
        "onyomi": "セン",
        "kunyomi": "もっぱ-ら",
        "english": "specialty"
    },
    {
        "kanji": "對",
        "onyomi": "タイ, ツイ",
        "kunyomi": "あいて, こた-える, そろ-い, つれあ-い, なら-ぶ, むか-う",
        "english": "correct"
    },
    {
        "kanji": "尓",
        "onyomi": "ジ, ニ",
        "kunyomi": "なんじ, しかり, その, のみ",
        "english": "you"
    },
    {
        "kanji": "尠",
        "onyomi": "セン, セウ",
        "kunyomi": "すくな-い",
        "english": "at least"
    },
    {
        "kanji": "尢",
        "onyomi": "オウ",
        "kunyomi": "",
        "english": "crooked-big radical (no. 43)"
    },
    {
        "kanji": "尨",
        "onyomi": "ボウ",
        "kunyomi": "むくいぬ",
        "english": "shaggy hair or dog"
    },
    {
        "kanji": "尸",
        "onyomi": "シ",
        "kunyomi": "かたしろ",
        "english": "corpse"
    },
    {
        "kanji": "尹",
        "onyomi": "イン",
        "kunyomi": "おさ, ただ-す",
        "english": "an official rank"
    },
    {
        "kanji": "屁",
        "onyomi": "ヒ",
        "kunyomi": "へ",
        "english": "fart"
    },
    {
        "kanji": "屆",
        "onyomi": "カイ",
        "kunyomi": "とど-ける, とど-く",
        "english": "reach"
    },
    {
        "kanji": "屎",
        "onyomi": "シ, キ",
        "kunyomi": "くそ",
        "english": "shit"
    },
    {
        "kanji": "屓",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "exerting strength"
    },
    {
        "kanji": "屐",
        "onyomi": "ゲキ, ケキ",
        "kunyomi": "はきもの",
        "english": "clog"
    },
    {
        "kanji": "屏",
        "onyomi": "ヘイ, ビョウ",
        "kunyomi": "おお-う, しりぞ-く, びょう-ぶ",
        "english": "wall"
    },
    {
        "kanji": "孱",
        "onyomi": "セン, サン",
        "kunyomi": "よわ-い",
        "english": "weak"
    },
    {
        "kanji": "屬",
        "onyomi": "ゾク, ショク",
        "kunyomi": "さかん, つく, やから",
        "english": "genus"
    },
    {
        "kanji": "屮",
        "onyomi": "テツ, サ",
        "kunyomi": "ひだりて",
        "english": "left hand"
    },
    {
        "kanji": "乢",
        "onyomi": "ガイ",
        "kunyomi": "たわ, たお",
        "english": "mountain saddle"
    },
    {
        "kanji": "屶",
        "onyomi": "",
        "kunyomi": "なた, たな",
        "english": "used in proper names"
    },
    {
        "kanji": "屹",
        "onyomi": "キツ",
        "kunyomi": "そばだ-つ",
        "english": "towering mountains"
    },
    {
        "kanji": "岌",
        "onyomi": "キュウ",
        "kunyomi": "たか-い",
        "english": "high"
    },
    {
        "kanji": "岑",
        "onyomi": "シン, ギン",
        "kunyomi": "みね",
        "english": "peak"
    },
    {
        "kanji": "岔",
        "onyomi": "タ",
        "kunyomi": "",
        "english": "fork in a road"
    },
    {
        "kanji": "妛",
        "onyomi": "シ",
        "kunyomi": "あなど-る, おろか, みにく-い, みだる",
        "english": "despise"
    },
    {
        "kanji": "岫",
        "onyomi": "コウ, シュウ, ユウ",
        "kunyomi": "みさき, くき, みね",
        "english": "gorge"
    },
    {
        "kanji": "岻",
        "onyomi": "ジ, ニ",
        "kunyomi": "",
        "english": "name of a mountain"
    },
    {
        "kanji": "岶",
        "onyomi": "ハク",
        "kunyomi": "",
        "english": "dense mountain vegetation"
    },
    {
        "kanji": "岼",
        "onyomi": "",
        "kunyomi": "ゆり",
        "english": "level spot part-way up a mountain"
    },
    {
        "kanji": "岷",
        "onyomi": "ビン, ミン",
        "kunyomi": "",
        "english": "name of a Chinese river"
    },
    {
        "kanji": "峅",
        "onyomi": "",
        "kunyomi": "くら",
        "english": "shrine in the mountains"
    },
    {
        "kanji": "岾",
        "onyomi": "",
        "kunyomi": "やま, はけ",
        "english": "mountain"
    },
    {
        "kanji": "峇",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "mountain cave"
    },
    {
        "kanji": "峙",
        "onyomi": "ジ",
        "kunyomi": "そばだ-つ",
        "english": "tower"
    },
    {
        "kanji": "峩",
        "onyomi": "ガ",
        "kunyomi": "けわ-しい",
        "english": "lofty"
    },
    {
        "kanji": "峽",
        "onyomi": "キョウ, コウ",
        "kunyomi": "はざま",
        "english": "gorge"
    },
    {
        "kanji": "峺",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "obstruct"
    },
    {
        "kanji": "峭",
        "onyomi": "ショウ",
        "kunyomi": "きび-しい, けわ-しい",
        "english": "high & steep"
    },
    {
        "kanji": "嶌",
        "onyomi": "トウ",
        "kunyomi": "しま",
        "english": "island"
    },
    {
        "kanji": "峪",
        "onyomi": "ヨク",
        "kunyomi": "たに",
        "english": "ravine"
    },
    {
        "kanji": "崋",
        "onyomi": "カ, ク",
        "kunyomi": "",
        "english": "name of mountain"
    },
    {
        "kanji": "崕",
        "onyomi": "ガイ",
        "kunyomi": "がけ",
        "english": "cliff"
    },
    {
        "kanji": "崗",
        "onyomi": "コウ",
        "kunyomi": "おか",
        "english": "hill"
    },
    {
        "kanji": "嵜",
        "onyomi": "キ",
        "kunyomi": "さき, さい, みさき",
        "english": "steep"
    },
    {
        "kanji": "崟",
        "onyomi": "ギン",
        "kunyomi": "みね",
        "english": "peak"
    },
    {
        "kanji": "崛",
        "onyomi": "クツ",
        "kunyomi": "そばだ-つ, たか-い",
        "english": "high & lofty (mountains)"
    },
    {
        "kanji": "崑",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "place name"
    },
    {
        "kanji": "崔",
        "onyomi": "ガイ, サイ, スイ",
        "kunyomi": "がけ",
        "english": "cliff"
    },
    {
        "kanji": "崢",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "high"
    },
    {
        "kanji": "崚",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "mountains towering in a row"
    },
    {
        "kanji": "崙",
        "onyomi": "ロン",
        "kunyomi": "",
        "english": "place name"
    },
    {
        "kanji": "崘",
        "onyomi": "ロン",
        "kunyomi": "",
        "english": "Kunlun mountains in Jiangsu"
    },
    {
        "kanji": "嵌",
        "onyomi": "カン",
        "kunyomi": "は-める, は-まる, あな",
        "english": "go into"
    },
    {
        "kanji": "嵒",
        "onyomi": "ガン",
        "kunyomi": "いわ, けわ-しい",
        "english": "rock"
    },
    {
        "kanji": "嵎",
        "onyomi": "グウ, グ",
        "kunyomi": "くま",
        "english": "mountain recesses"
    },
    {
        "kanji": "嵋",
        "onyomi": "ビ",
        "kunyomi": "",
        "english": "place name"
    },
    {
        "kanji": "嵬",
        "onyomi": "カイ, ギ",
        "kunyomi": "",
        "english": "high and flat"
    },
    {
        "kanji": "嵳",
        "onyomi": "サ",
        "kunyomi": "",
        "english": "high"
    },
    {
        "kanji": "嵶",
        "onyomi": "",
        "kunyomi": "たお-やか, たわ-む",
        "english": "mountain pass"
    },
    {
        "kanji": "嶇",
        "onyomi": "ク",
        "kunyomi": "けわ-しい",
        "english": "steep"
    },
    {
        "kanji": "嶄",
        "onyomi": "ザン, サン",
        "kunyomi": "",
        "english": "steep or high mountain"
    },
    {
        "kanji": "嶂",
        "onyomi": "ショウ",
        "kunyomi": "みね",
        "english": "steep"
    },
    {
        "kanji": "嶢",
        "onyomi": "ギョウ",
        "kunyomi": "けわ-しい",
        "english": "high"
    },
    {
        "kanji": "嶝",
        "onyomi": "トウ",
        "kunyomi": "さかみち",
        "english": "hill"
    },
    {
        "kanji": "嶬",
        "onyomi": "ギ",
        "kunyomi": "",
        "english": "high"
    },
    {
        "kanji": "嶮",
        "onyomi": "ケン",
        "kunyomi": "けわ-しい",
        "english": "inaccessible place"
    },
    {
        "kanji": "嶽",
        "onyomi": "ガク",
        "kunyomi": "たけ",
        "english": "peak"
    },
    {
        "kanji": "嶐",
        "onyomi": "リュ",
        "kunyomi": "やまのかたち",
        "english": "shape of a mountain"
    },
    {
        "kanji": "嶷",
        "onyomi": "ギョク, ギ",
        "kunyomi": "さと-い",
        "english": "wise"
    },
    {
        "kanji": "嶼",
        "onyomi": "ショ",
        "kunyomi": "しま",
        "english": "island"
    },
    {
        "kanji": "巉",
        "onyomi": "ザン, サン",
        "kunyomi": "",
        "english": "rising precipitously"
    },
    {
        "kanji": "巍",
        "onyomi": "ギ",
        "kunyomi": "たか-い",
        "english": "high"
    },
    {
        "kanji": "巓",
        "onyomi": "テン",
        "kunyomi": "いただき",
        "english": "summit"
    },
    {
        "kanji": "巒",
        "onyomi": "ラン",
        "kunyomi": "みね",
        "english": "small peak"
    },
    {
        "kanji": "巖",
        "onyomi": "ガン",
        "kunyomi": "いわ, いわお, けわ-しい",
        "english": "rock"
    },
    {
        "kanji": "巛",
        "onyomi": "セン",
        "kunyomi": "かわ",
        "english": "curving river radical (no.47)"
    },
    {
        "kanji": "巫",
        "onyomi": "フ",
        "kunyomi": "みこ, かんなぎ",
        "english": "sorcerer"
    },
    {
        "kanji": "已",
        "onyomi": "イ",
        "kunyomi": "や-む, すで-に, のみ, はなはだ",
        "english": "stop"
    },
    {
        "kanji": "巵",
        "onyomi": "シ",
        "kunyomi": "さかずき",
        "english": "large winecup"
    },
    {
        "kanji": "帋",
        "onyomi": "シ",
        "kunyomi": "かみ",
        "english": "paper"
    },
    {
        "kanji": "帚",
        "onyomi": "ソウ, シュウ",
        "kunyomi": "ほうき",
        "english": "broom"
    },
    {
        "kanji": "帙",
        "onyomi": "チツ",
        "kunyomi": "ふまき",
        "english": "Japanese book cover"
    },
    {
        "kanji": "帑",
        "onyomi": "トウ, ド",
        "kunyomi": "かねぐら",
        "english": "money repository"
    },
    {
        "kanji": "帛",
        "onyomi": "ハク",
        "kunyomi": "きぬ",
        "english": "cloth"
    },
    {
        "kanji": "帶",
        "onyomi": "タイ",
        "kunyomi": "お-びる, おび",
        "english": "belt"
    },
    {
        "kanji": "帷",
        "onyomi": "イ",
        "kunyomi": "とばり",
        "english": "curtain"
    },
    {
        "kanji": "幄",
        "onyomi": "アク",
        "kunyomi": "とばり",
        "english": "curtain"
    },
    {
        "kanji": "幃",
        "onyomi": "イ, キ",
        "kunyomi": "とばり",
        "english": "bag"
    },
    {
        "kanji": "幀",
        "onyomi": "テイ, チョウ, トウ",
        "kunyomi": "",
        "english": "making books or scrolls"
    },
    {
        "kanji": "幎",
        "onyomi": "ベキ",
        "kunyomi": "とばり",
        "english": "cloth covering"
    },
    {
        "kanji": "幗",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "woman's head covering"
    },
    {
        "kanji": "幔",
        "onyomi": "マン, バン",
        "kunyomi": "まく",
        "english": "curtain"
    },
    {
        "kanji": "幟",
        "onyomi": "シ",
        "kunyomi": "のぼり",
        "english": "flag"
    },
    {
        "kanji": "幢",
        "onyomi": "トウ",
        "kunyomi": "はた",
        "english": "flag"
    },
    {
        "kanji": "幤",
        "onyomi": "ヘイ",
        "kunyomi": "ぬさ",
        "english": "Shinto zigzag paper offerings"
    },
    {
        "kanji": "幇",
        "onyomi": "ホウ",
        "kunyomi": "たす-ける",
        "english": "help"
    },
    {
        "kanji": "幵",
        "onyomi": "ヘイ",
        "kunyomi": "",
        "english": "put together"
    },
    {
        "kanji": "并",
        "onyomi": "ヘイ, ヒョウ",
        "kunyomi": "あわ-せる, なら-ぶ",
        "english": "put together"
    },
    {
        "kanji": "幺",
        "onyomi": "ヨウ",
        "kunyomi": "ちいさい",
        "english": "short thread radical (no. 52)"
    },
    {
        "kanji": "麼",
        "onyomi": "ビ, ミ, バ, マ, モ",
        "kunyomi": "",
        "english": "rope"
    },
    {
        "kanji": "广",
        "onyomi": "ゲン",
        "kunyomi": "",
        "english": "dotted cliff radical (no. 53)"
    },
    {
        "kanji": "庠",
        "onyomi": "ショウ",
        "kunyomi": "まなびや",
        "english": "school"
    },
    {
        "kanji": "廁",
        "onyomi": "シ, ショク",
        "kunyomi": "かわや",
        "english": "toilet"
    },
    {
        "kanji": "廂",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "ひさし",
        "english": "eaves"
    },
    {
        "kanji": "廈",
        "onyomi": "カ, サ",
        "kunyomi": "いえ",
        "english": "house"
    },
    {
        "kanji": "廐",
        "onyomi": "キュウ",
        "kunyomi": "うまや",
        "english": "barn"
    },
    {
        "kanji": "廏",
        "onyomi": "キュウ",
        "kunyomi": "うまや",
        "english": "barn"
    },
    {
        "kanji": "廖",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "empty"
    },
    {
        "kanji": "廣",
        "onyomi": "コウ",
        "kunyomi": "ひろ-い, ひろ-まる, ひろ-める, ひろ-がる, ひろ-げる",
        "english": "broad"
    },
    {
        "kanji": "廝",
        "onyomi": "シ",
        "kunyomi": "こもの",
        "english": "servant"
    },
    {
        "kanji": "廚",
        "onyomi": "シュウ, ズ, チュ, チュウ",
        "kunyomi": "くりや",
        "english": "kitchen"
    },
    {
        "kanji": "廛",
        "onyomi": "テン",
        "kunyomi": "みせ, やしき, たな",
        "english": "fine residence"
    },
    {
        "kanji": "廢",
        "onyomi": "ハイ",
        "kunyomi": "すた-れる, すた-る",
        "english": "abrogate"
    },
    {
        "kanji": "廡",
        "onyomi": "ブ",
        "kunyomi": "しげ-る, ひさし",
        "english": "walking under the eaves"
    },
    {
        "kanji": "廨",
        "onyomi": "カイ, ケ",
        "kunyomi": "やくしょ",
        "english": "government office"
    },
    {
        "kanji": "廩",
        "onyomi": "リン",
        "kunyomi": "くら",
        "english": "rice storehouse"
    },
    {
        "kanji": "廬",
        "onyomi": "ロ, リョ",
        "kunyomi": "いお, いおり, いえ",
        "english": "hermitage"
    },
    {
        "kanji": "廱",
        "onyomi": "ヨウ",
        "kunyomi": "やわらぐ",
        "english": "mild"
    },
    {
        "kanji": "廳",
        "onyomi": "チョウ, テイ",
        "kunyomi": "やくしょ",
        "english": "hall"
    },
    {
        "kanji": "廰",
        "onyomi": "チョウ, テイ",
        "kunyomi": "やくしょ",
        "english": "government office"
    },
    {
        "kanji": "廴",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "long stride or stretching radical (no. 54)"
    },
    {
        "kanji": "廸",
        "onyomi": "テキ",
        "kunyomi": "みち, みちび-く, すす-む, いた-る",
        "english": "path"
    },
    {
        "kanji": "廾",
        "onyomi": "キョウ, ク",
        "kunyomi": "にじゅう",
        "english": "twenty"
    },
    {
        "kanji": "弃",
        "onyomi": "キ",
        "kunyomi": "すて-る",
        "english": "reject"
    },
    {
        "kanji": "弉",
        "onyomi": "ジョウ, ソウ",
        "kunyomi": "さかん",
        "english": "large"
    },
    {
        "kanji": "彝",
        "onyomi": "イ",
        "kunyomi": "つね",
        "english": "moral principle"
    },
    {
        "kanji": "彜",
        "onyomi": "イ",
        "kunyomi": "つね",
        "english": "moral principle"
    },
    {
        "kanji": "弋",
        "onyomi": "ヨク",
        "kunyomi": "いぐるみ",
        "english": "piling"
    },
    {
        "kanji": "弑",
        "onyomi": "シ, シイ",
        "kunyomi": "しい-する",
        "english": "murder one's lord or father"
    },
    {
        "kanji": "弖",
        "onyomi": "テ",
        "kunyomi": "",
        "english": "phoneme only"
    },
    {
        "kanji": "弩",
        "onyomi": "ド",
        "kunyomi": "おおゆみ, いしゆみ",
        "english": "bow (arrow)"
    },
    {
        "kanji": "弭",
        "onyomi": "ビ, ミ",
        "kunyomi": "や-める, や-む, ゆはず",
        "english": "stop"
    },
    {
        "kanji": "弸",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "strong bow"
    },
    {
        "kanji": "彁",
        "onyomi": "カ, セイ",
        "kunyomi": "",
        "english": "(ghost kanji)"
    },
    {
        "kanji": "彈",
        "onyomi": "ダン, タン",
        "kunyomi": "ひ-く, はず-む, たま, はじ-く, はじ-ける, ただ-す",
        "english": "bullet"
    },
    {
        "kanji": "彌",
        "onyomi": "ミ, ビ",
        "kunyomi": "いや, や, あまねし, いよいよ, とおい, ひさし, ひさ-しい, わた-る",
        "english": "extensive"
    },
    {
        "kanji": "彎",
        "onyomi": "ワン",
        "kunyomi": "ひ-く",
        "english": "curve"
    },
    {
        "kanji": "弯",
        "onyomi": "ワン",
        "kunyomi": "ひ-く",
        "english": "curve"
    },
    {
        "kanji": "彑",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "pig's head radical variant (no. 58)"
    },
    {
        "kanji": "彖",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "divination"
    },
    {
        "kanji": "彗",
        "onyomi": "スイ, エ, ケイ, セイ",
        "kunyomi": "ほうき",
        "english": "comet"
    },
    {
        "kanji": "彙",
        "onyomi": "イ",
        "kunyomi": "はりねずみ",
        "english": "same kind"
    },
    {
        "kanji": "彡",
        "onyomi": "サン, セン",
        "kunyomi": "",
        "english": "three"
    },
    {
        "kanji": "彭",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "swelling"
    },
    {
        "kanji": "彳",
        "onyomi": "テキ",
        "kunyomi": "たたず-む",
        "english": "stop"
    },
    {
        "kanji": "彷",
        "onyomi": "ホウ",
        "kunyomi": "さまよ-う",
        "english": "stray"
    },
    {
        "kanji": "徃",
        "onyomi": "オウ",
        "kunyomi": "い-く, いにしえ, さき-に, ゆ-く",
        "english": "journey"
    },
    {
        "kanji": "徂",
        "onyomi": "ソ",
        "kunyomi": "ゆ-く",
        "english": "go"
    },
    {
        "kanji": "彿",
        "onyomi": "フツ",
        "kunyomi": "",
        "english": "dimly"
    },
    {
        "kanji": "徊",
        "onyomi": "カイ, クワイ, エ",
        "kunyomi": "さまよ-う",
        "english": "wandering"
    },
    {
        "kanji": "很",
        "onyomi": "コン, コウ, ギン",
        "kunyomi": "もと-る",
        "english": "disobey"
    },
    {
        "kanji": "徑",
        "onyomi": "ケイ",
        "kunyomi": "みち, こみち, さしわたし, ただちに",
        "english": "path"
    },
    {
        "kanji": "徇",
        "onyomi": "ジュン, シュン",
        "kunyomi": "あまねし, したが-う, とな-える",
        "english": "herald"
    },
    {
        "kanji": "從",
        "onyomi": "ジュウ, ショウ, ジュ",
        "kunyomi": "したが-う, したが-える, より",
        "english": "from"
    },
    {
        "kanji": "徙",
        "onyomi": "シ",
        "kunyomi": "うつ-る, うつ-す",
        "english": "move"
    },
    {
        "kanji": "徘",
        "onyomi": "ハイ",
        "kunyomi": "さまよ-う",
        "english": "wander"
    },
    {
        "kanji": "徠",
        "onyomi": "ライ",
        "kunyomi": "きた-す, きた-る, く-る",
        "english": "induce"
    },
    {
        "kanji": "徨",
        "onyomi": "コウ",
        "kunyomi": "さまよ-う",
        "english": "wandering"
    },
    {
        "kanji": "徭",
        "onyomi": "ヨウ, エウ",
        "kunyomi": "えだち, ふぞろ-い, つかい",
        "english": "compulsory service to the state"
    },
    {
        "kanji": "徼",
        "onyomi": "キョウ, ヨウ",
        "kunyomi": "めぐ-る",
        "english": "seek"
    },
    {
        "kanji": "忖",
        "onyomi": "ソン",
        "kunyomi": "はか-る",
        "english": "conjecture"
    },
    {
        "kanji": "忻",
        "onyomi": "キン",
        "kunyomi": "よろこ-ぶ",
        "english": "rejoice"
    },
    {
        "kanji": "忤",
        "onyomi": "ゴ",
        "kunyomi": "さから-う, もと-る",
        "english": "insubordinate"
    },
    {
        "kanji": "忸",
        "onyomi": "ジク, ジュウ",
        "kunyomi": "はじ-る",
        "english": "shame"
    },
    {
        "kanji": "忱",
        "onyomi": "シン",
        "kunyomi": "まこと",
        "english": "sincere"
    },
    {
        "kanji": "忝",
        "onyomi": "テン",
        "kunyomi": "かたじけな-い",
        "english": "grateful"
    },
    {
        "kanji": "悳",
        "onyomi": "トク",
        "kunyomi": "",
        "english": "ethics"
    },
    {
        "kanji": "忿",
        "onyomi": "フン",
        "kunyomi": "いか-る, いかり",
        "english": "be angry"
    },
    {
        "kanji": "怡",
        "onyomi": "イ",
        "kunyomi": "よろこ-ぶ",
        "english": "rejoice"
    },
    {
        "kanji": "恠",
        "onyomi": "カイ, ケ",
        "kunyomi": "あや-しい, あや-しむ",
        "english": "suspicious"
    },
    {
        "kanji": "怙",
        "onyomi": "コ",
        "kunyomi": "たの-む",
        "english": "depend"
    },
    {
        "kanji": "怐",
        "onyomi": "ク",
        "kunyomi": "",
        "english": "foolish"
    },
    {
        "kanji": "怩",
        "onyomi": "ジ",
        "kunyomi": "",
        "english": "shame"
    },
    {
        "kanji": "怎",
        "onyomi": "シン, ソ",
        "kunyomi": "いかで, なんぞ",
        "english": "why"
    },
    {
        "kanji": "怱",
        "onyomi": "ソウ",
        "kunyomi": "にわか, あわ-てる",
        "english": "rush"
    },
    {
        "kanji": "怛",
        "onyomi": "ダツ, タン, タツ",
        "kunyomi": "いた-む",
        "english": "be sad"
    },
    {
        "kanji": "怕",
        "onyomi": "ハク, ヒャク, ハ",
        "kunyomi": "おそ-れる",
        "english": "fear"
    },
    {
        "kanji": "怫",
        "onyomi": "フツ, ハイ, ヒ",
        "kunyomi": "",
        "english": "anger"
    },
    {
        "kanji": "怦",
        "onyomi": "ホウ, ヒョウ",
        "kunyomi": "",
        "english": "in a hurry"
    },
    {
        "kanji": "怏",
        "onyomi": "オウ, ヨウ",
        "kunyomi": "うら-む",
        "english": "dissatisfaction"
    },
    {
        "kanji": "怺",
        "onyomi": "",
        "kunyomi": "こら-える",
        "english": "endure"
    },
    {
        "kanji": "恚",
        "onyomi": "イ",
        "kunyomi": "いか-る",
        "english": "anger"
    },
    {
        "kanji": "恁",
        "onyomi": "イン, ジン, ニン",
        "kunyomi": "",
        "english": "like this"
    },
    {
        "kanji": "恪",
        "onyomi": "カク",
        "kunyomi": "つつし-む",
        "english": "carefulness"
    },
    {
        "kanji": "恷",
        "onyomi": "キュウ, ク",
        "kunyomi": "",
        "english": "be contrary to"
    },
    {
        "kanji": "恟",
        "onyomi": "キョウ",
        "kunyomi": "おそ-れる",
        "english": "fear"
    },
    {
        "kanji": "恊",
        "onyomi": "キョウ",
        "kunyomi": "あわ-せる, かな-う",
        "english": "threaten"
    },
    {
        "kanji": "恆",
        "onyomi": "コウ",
        "kunyomi": "つね-に",
        "english": "constant"
    },
    {
        "kanji": "恍",
        "onyomi": "コウ",
        "kunyomi": "とぼ-ける, ほ-れる",
        "english": "unclear"
    },
    {
        "kanji": "恣",
        "onyomi": "シ",
        "kunyomi": "ほしいまま",
        "english": "selfish"
    },
    {
        "kanji": "恃",
        "onyomi": "ジ, シ",
        "kunyomi": "たの-む",
        "english": "depend on"
    },
    {
        "kanji": "恤",
        "onyomi": "ジュツ, シュツ",
        "kunyomi": "めぐ-む, あわ-れむ, うれ-える",
        "english": "relieve"
    },
    {
        "kanji": "恂",
        "onyomi": "ジュン, シュン",
        "kunyomi": "まこと",
        "english": "sincere"
    },
    {
        "kanji": "恬",
        "onyomi": "テン",
        "kunyomi": "やすら-く, やす-い",
        "english": "composure"
    },
    {
        "kanji": "恫",
        "onyomi": "ドウ, トウ",
        "kunyomi": "いた-む",
        "english": "painful"
    },
    {
        "kanji": "恙",
        "onyomi": "ヨウ",
        "kunyomi": "つつが-ない",
        "english": "illness"
    },
    {
        "kanji": "悁",
        "onyomi": "エン, ケン",
        "kunyomi": "",
        "english": "anger"
    },
    {
        "kanji": "悍",
        "onyomi": "カン",
        "kunyomi": "たけし, あらし",
        "english": "rough"
    },
    {
        "kanji": "惧",
        "onyomi": "ク, グ",
        "kunyomi": "おそ-れる",
        "english": "fear"
    },
    {
        "kanji": "悃",
        "onyomi": "コン",
        "kunyomi": "まごころ",
        "english": "sincerity"
    },
    {
        "kanji": "悚",
        "onyomi": "ショウ",
        "kunyomi": "おそ-れる",
        "english": "fear"
    },
    {
        "kanji": "悄",
        "onyomi": "ショウ",
        "kunyomi": "うれ-える",
        "english": "anxiety"
    },
    {
        "kanji": "悛",
        "onyomi": "シュン, セン",
        "kunyomi": "あらた-める",
        "english": "amend"
    },
    {
        "kanji": "悖",
        "onyomi": "ハイ, ボツ",
        "kunyomi": "もと-る",
        "english": "be contrary"
    },
    {
        "kanji": "悗",
        "onyomi": "バン, マン",
        "kunyomi": "",
        "english": "be perplexed"
    },
    {
        "kanji": "悒",
        "onyomi": "ユウ",
        "kunyomi": "ふさ-ぐ, うれ-える",
        "english": "be depressed"
    },
    {
        "kanji": "悧",
        "onyomi": "リ",
        "kunyomi": "",
        "english": "clever"
    },
    {
        "kanji": "悋",
        "onyomi": "リン",
        "kunyomi": "ねた-む, やぶさか, お-しむ",
        "english": "stingy"
    },
    {
        "kanji": "惡",
        "onyomi": "アク, オ",
        "kunyomi": "わる-い, あ-し, にく-い, ああ, いずくに, いずくんぞ, にく-む",
        "english": "bad"
    },
    {
        "kanji": "悸",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "pulsate"
    },
    {
        "kanji": "惠",
        "onyomi": "ケイ, エ",
        "kunyomi": "めぐ-む, めぐ-み",
        "english": "blessing"
    },
    {
        "kanji": "惓",
        "onyomi": "ケン",
        "kunyomi": "うむ",
        "english": "be respectful"
    },
    {
        "kanji": "悴",
        "onyomi": "スイ",
        "kunyomi": "せがれ, やつ-れる",
        "english": "becoming emaciated"
    },
    {
        "kanji": "忰",
        "onyomi": "スイ",
        "kunyomi": "せがれ, やつ-れる",
        "english": "suffer"
    },
    {
        "kanji": "悽",
        "onyomi": "セイ",
        "kunyomi": "いたむ",
        "english": "be sad"
    },
    {
        "kanji": "惆",
        "onyomi": "チュウ",
        "kunyomi": "うら-む",
        "english": "grieve over"
    },
    {
        "kanji": "悵",
        "onyomi": "チョウ",
        "kunyomi": "いた-む, うら-む",
        "english": "be sad"
    },
    {
        "kanji": "惘",
        "onyomi": "ボウ, モウ",
        "kunyomi": "あき-れる",
        "english": "unclear"
    },
    {
        "kanji": "慍",
        "onyomi": "ウン, オン",
        "kunyomi": "いか-る, いか-り, うら-む",
        "english": "be angry (excited)"
    },
    {
        "kanji": "愕",
        "onyomi": "ガク",
        "kunyomi": "おどろ-く",
        "english": "surprised"
    },
    {
        "kanji": "愆",
        "onyomi": "ケン",
        "kunyomi": "あや-まる",
        "english": "mistake"
    },
    {
        "kanji": "惶",
        "onyomi": "コウ",
        "kunyomi": "おそ-れる",
        "english": "fear"
    },
    {
        "kanji": "惷",
        "onyomi": "シュン",
        "kunyomi": "",
        "english": "confusion"
    },
    {
        "kanji": "愀",
        "onyomi": "シュウ, ショウ",
        "kunyomi": "",
        "english": "respect"
    },
    {
        "kanji": "惴",
        "onyomi": "ズイ, スイ",
        "kunyomi": "おそ-れる",
        "english": "fear"
    },
    {
        "kanji": "惺",
        "onyomi": "セイ",
        "kunyomi": "さと-る",
        "english": "realize"
    },
    {
        "kanji": "愃",
        "onyomi": "ケン, カン",
        "kunyomi": "",
        "english": "abundant"
    },
    {
        "kanji": "愡",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "meaningless"
    },
    {
        "kanji": "惻",
        "onyomi": "ソク, ショク",
        "kunyomi": "いた-む",
        "english": "be sad"
    },
    {
        "kanji": "惱",
        "onyomi": "ノウ",
        "kunyomi": "なや-む, なや-ます, なや-ましい, なやみ",
        "english": "angered"
    },
    {
        "kanji": "愍",
        "onyomi": "ビン, ミン",
        "kunyomi": "あわ-れむ",
        "english": "pity"
    },
    {
        "kanji": "愎",
        "onyomi": "フク, ヒョク",
        "kunyomi": "もと-る",
        "english": "go against"
    },
    {
        "kanji": "慇",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "courtesy"
    },
    {
        "kanji": "愾",
        "onyomi": "ガイ, キ, ケ, キツ",
        "kunyomi": "ためいき",
        "english": "anger"
    },
    {
        "kanji": "愨",
        "onyomi": "カク",
        "kunyomi": "つつし-む, まこと",
        "english": "respectful"
    },
    {
        "kanji": "愧",
        "onyomi": "キ",
        "kunyomi": "はじ-る, はじ-らう, はずかし-める, とが-める",
        "english": "feel ashamed"
    },
    {
        "kanji": "慊",
        "onyomi": "ケン, キョウ",
        "kunyomi": "あきたりる, うら-む",
        "english": "satisfaction"
    },
    {
        "kanji": "愿",
        "onyomi": "ゲン",
        "kunyomi": "つつし-む",
        "english": "respectful"
    },
    {
        "kanji": "愼",
        "onyomi": "シン",
        "kunyomi": "つつし-む, つつし-み",
        "english": "care"
    },
    {
        "kanji": "愬",
        "onyomi": "ソ, サク",
        "kunyomi": "うった-える",
        "english": "complain of"
    },
    {
        "kanji": "愴",
        "onyomi": "ソウ",
        "kunyomi": "いたま-しい, いた-む",
        "english": "sad"
    },
    {
        "kanji": "愽",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "grieving"
    },
    {
        "kanji": "慂",
        "onyomi": "ヨウ",
        "kunyomi": "すす-む, すす-める",
        "english": "direct"
    },
    {
        "kanji": "慄",
        "onyomi": "リツ",
        "kunyomi": "ふる-える, おそ-れる, おのの-く",
        "english": "fear"
    },
    {
        "kanji": "慳",
        "onyomi": "ケン, カン",
        "kunyomi": "おし-む",
        "english": "regret"
    },
    {
        "kanji": "慷",
        "onyomi": "コウ",
        "kunyomi": "なげ-く",
        "english": "weep"
    },
    {
        "kanji": "慘",
        "onyomi": "サン",
        "kunyomi": "みじ-め, いた-む, むご-い",
        "english": "sad"
    },
    {
        "kanji": "慙",
        "onyomi": "ザン",
        "kunyomi": "はじ, はじ-る",
        "english": "ashamed"
    },
    {
        "kanji": "慚",
        "onyomi": "ザン",
        "kunyomi": "はじ, はじ-る",
        "english": "feel ashamed"
    },
    {
        "kanji": "慫",
        "onyomi": "ショウ",
        "kunyomi": "すす-める",
        "english": "advise"
    },
    {
        "kanji": "慴",
        "onyomi": "シュウ, ショウ",
        "kunyomi": "おそ-れる",
        "english": "fear"
    },
    {
        "kanji": "慯",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "be sad"
    },
    {
        "kanji": "慥",
        "onyomi": "ゾウ",
        "kunyomi": "たし-かに",
        "english": "certainly"
    },
    {
        "kanji": "慱",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "grieving"
    },
    {
        "kanji": "慟",
        "onyomi": "ドウ, トウ",
        "kunyomi": "なげ-く",
        "english": "be sad"
    },
    {
        "kanji": "慝",
        "onyomi": "トク",
        "kunyomi": "わる-い",
        "english": "bad"
    },
    {
        "kanji": "慓",
        "onyomi": "ヒョウ",
        "kunyomi": "",
        "english": "fast"
    },
    {
        "kanji": "慵",
        "onyomi": "ヨウ, ショウ",
        "kunyomi": "ものうい",
        "english": "languid"
    },
    {
        "kanji": "憙",
        "onyomi": "キ",
        "kunyomi": "よろこ-ぶ, ああ, この-む",
        "english": "rejoice"
    },
    {
        "kanji": "憖",
        "onyomi": "ギン, キン",
        "kunyomi": "なまじ-い",
        "english": "thoughtlessly"
    },
    {
        "kanji": "憇",
        "onyomi": "ケイ",
        "kunyomi": "いこ-い, いこ-う",
        "english": "rest"
    },
    {
        "kanji": "憬",
        "onyomi": "ケイ",
        "kunyomi": "あこが-れる",
        "english": "yearn for"
    },
    {
        "kanji": "憔",
        "onyomi": "ショウ, セウ, ソウ",
        "kunyomi": "やつ-れる, やせ-る",
        "english": "get thin"
    },
    {
        "kanji": "憚",
        "onyomi": "タン, タ",
        "kunyomi": "はばか-る",
        "english": "hesitate"
    },
    {
        "kanji": "憊",
        "onyomi": "ハイ, ヘイ",
        "kunyomi": "つか-れる",
        "english": "fatigue"
    },
    {
        "kanji": "憑",
        "onyomi": "ヒョウ",
        "kunyomi": "つ-く, つか-れる, よ-る, たの-む",
        "english": "depend"
    },
    {
        "kanji": "憫",
        "onyomi": "ビン, ミン",
        "kunyomi": "あわれ-む, うれ-える",
        "english": "anxiety"
    },
    {
        "kanji": "憮",
        "onyomi": "ブ, コ",
        "kunyomi": "いつくし-む",
        "english": "disappointment"
    },
    {
        "kanji": "懌",
        "onyomi": "エキ",
        "kunyomi": "よろこ-ぶ",
        "english": "rejoice"
    },
    {
        "kanji": "懊",
        "onyomi": "オウ",
        "kunyomi": "じれった-い, なや-む",
        "english": "in distress"
    },
    {
        "kanji": "應",
        "onyomi": "オウ, ヨウ",
        "kunyomi": "あた-る, まさに, こた-える",
        "english": "answer"
    },
    {
        "kanji": "懷",
        "onyomi": "カイ, エ",
        "kunyomi": "ふところ, なつ-かしい, なつ-かしむ, なつ-く, なつ-ける, いだ-く, おも-う",
        "english": "pocket"
    },
    {
        "kanji": "懈",
        "onyomi": "ケ, カイ",
        "kunyomi": "たわ-い, おこた-る",
        "english": "laziness"
    },
    {
        "kanji": "懃",
        "onyomi": "キン, ゴン",
        "kunyomi": "ねんごろ",
        "english": "courtesy"
    },
    {
        "kanji": "懆",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "unease"
    },
    {
        "kanji": "憺",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "calm"
    },
    {
        "kanji": "懋",
        "onyomi": "ボウ",
        "kunyomi": "し-げる, つと-める",
        "english": "strive"
    },
    {
        "kanji": "罹",
        "onyomi": "リ, ラ",
        "kunyomi": "かか-る",
        "english": "catch"
    },
    {
        "kanji": "懍",
        "onyomi": "リン, ラン",
        "kunyomi": "",
        "english": "fear"
    },
    {
        "kanji": "懦",
        "onyomi": "ダ, ジュ, ゼン",
        "kunyomi": "よわ-い",
        "english": "weakness"
    },
    {
        "kanji": "懣",
        "onyomi": "マン, モン",
        "kunyomi": "もだ-える",
        "english": "worry"
    },
    {
        "kanji": "懶",
        "onyomi": "ラン, ライ",
        "kunyomi": "ものうい, おこたる",
        "english": "languid"
    },
    {
        "kanji": "懺",
        "onyomi": "ザン, サン",
        "kunyomi": "くい-る",
        "english": "regret"
    },
    {
        "kanji": "懴",
        "onyomi": "ザン, サン",
        "kunyomi": "くい-る",
        "english": "remorse"
    },
    {
        "kanji": "懿",
        "onyomi": "イ",
        "kunyomi": "よい",
        "english": "beautiful"
    },
    {
        "kanji": "懽",
        "onyomi": "カン",
        "kunyomi": "よろこ-ぶ",
        "english": "rejoice"
    },
    {
        "kanji": "懼",
        "onyomi": "ク",
        "kunyomi": "おそ-れる",
        "english": "fear"
    },
    {
        "kanji": "懾",
        "onyomi": "ショウ",
        "kunyomi": "おそ-れる",
        "english": "fear"
    },
    {
        "kanji": "戀",
        "onyomi": "レン",
        "kunyomi": "こ-う, こい, こい-しい",
        "english": "in love"
    },
    {
        "kanji": "戈",
        "onyomi": "カ",
        "kunyomi": "ほこ, ほこづくり",
        "english": "halberd"
    },
    {
        "kanji": "戉",
        "onyomi": "ジュウ, エツ",
        "kunyomi": "えびす, まさかり",
        "english": "warrior"
    },
    {
        "kanji": "戍",
        "onyomi": "ジュ, シュ",
        "kunyomi": "まもり, まも-る",
        "english": "protection"
    },
    {
        "kanji": "戌",
        "onyomi": "ジュツ",
        "kunyomi": "いぬ",
        "english": "sign of the dog"
    },
    {
        "kanji": "戔",
        "onyomi": "セン, サン",
        "kunyomi": "",
        "english": "damage"
    },
    {
        "kanji": "戛",
        "onyomi": "カツ",
        "kunyomi": "ほこ",
        "english": "halberd"
    },
    {
        "kanji": "戞",
        "onyomi": "カツ",
        "kunyomi": "ほこ",
        "english": "lance"
    },
    {
        "kanji": "戡",
        "onyomi": "カン, チン",
        "kunyomi": "かつ, さす",
        "english": "victory"
    },
    {
        "kanji": "截",
        "onyomi": "セツ, サイ",
        "kunyomi": "き-る, た-つ",
        "english": "cut off"
    },
    {
        "kanji": "戮",
        "onyomi": "リク, リュウ, ロク, キョウ, ク",
        "kunyomi": "ころ-す, けず-る",
        "english": "kill"
    },
    {
        "kanji": "戰",
        "onyomi": "セン",
        "kunyomi": "いくさ, たたか-う, おのの-く, そよぐ",
        "english": "war"
    },
    {
        "kanji": "戲",
        "onyomi": "ギ, ゲ",
        "kunyomi": "たわむ-れる, たわむ-れ",
        "english": "play"
    },
    {
        "kanji": "戳",
        "onyomi": "タク",
        "kunyomi": "",
        "english": "poke"
    },
    {
        "kanji": "扁",
        "onyomi": "ヘン",
        "kunyomi": "ひらたい",
        "english": "level"
    },
    {
        "kanji": "扎",
        "onyomi": "サツ, アツ",
        "kunyomi": "",
        "english": "pull"
    },
    {
        "kanji": "扞",
        "onyomi": "カン",
        "kunyomi": "ふせ-ぐ",
        "english": "restrain"
    },
    {
        "kanji": "扣",
        "onyomi": "コウ",
        "kunyomi": "たた-く, ひか-える",
        "english": "knock"
    },
    {
        "kanji": "扛",
        "onyomi": "コウ",
        "kunyomi": "あ-げる",
        "english": "raise"
    },
    {
        "kanji": "扠",
        "onyomi": "サ",
        "kunyomi": "さて, さ-す",
        "english": "well"
    },
    {
        "kanji": "扨",
        "onyomi": "サ",
        "kunyomi": "さて, さ-す",
        "english": "well"
    },
    {
        "kanji": "扼",
        "onyomi": "ヤク, アク",
        "kunyomi": "おさ-える",
        "english": "command"
    },
    {
        "kanji": "抂",
        "onyomi": "キョウ, ゴウ",
        "kunyomi": "",
        "english": "disorder"
    },
    {
        "kanji": "抉",
        "onyomi": "ケツ",
        "kunyomi": "えぐ-る, こじ-る, くじ-る",
        "english": "gouge"
    },
    {
        "kanji": "找",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "look for"
    },
    {
        "kanji": "抒",
        "onyomi": "ジョ, ショ",
        "kunyomi": "く-む, の-べる",
        "english": "tell"
    },
    {
        "kanji": "抓",
        "onyomi": "ソウ",
        "kunyomi": "つ-ねる, つ-める, つね-る, つま-む",
        "english": "pick"
    },
    {
        "kanji": "抖",
        "onyomi": "ト, トウ",
        "kunyomi": "",
        "english": "shake"
    },
    {
        "kanji": "拔",
        "onyomi": "バツ, ハイ",
        "kunyomi": "ぬ-く, ぬ-ける, ぬ-かす, ぬ-かる",
        "english": "extract"
    },
    {
        "kanji": "抃",
        "onyomi": "ベン",
        "kunyomi": "う-つ",
        "english": "strike with hand"
    },
    {
        "kanji": "抔",
        "onyomi": "ホウ, ハイ",
        "kunyomi": "など, すく-う",
        "english": "and so forth"
    },
    {
        "kanji": "拗",
        "onyomi": "オウ, ヨウ, イク, ユウ",
        "kunyomi": "ねじ-れる, こじ-れる, す-ねる, ねじ-ける",
        "english": "crooked"
    },
    {
        "kanji": "拑",
        "onyomi": "カン, ケン",
        "kunyomi": "つぐ-む",
        "english": "shut one's mouth"
    },
    {
        "kanji": "抻",
        "onyomi": "シン, チン",
        "kunyomi": "",
        "english": "stretch"
    },
    {
        "kanji": "拏",
        "onyomi": "ダ, ナ",
        "kunyomi": "つか-む, ひ-く",
        "english": "catch"
    },
    {
        "kanji": "拿",
        "onyomi": "ダ, ナ",
        "kunyomi": "つか-む, ひ-く",
        "english": "catch"
    },
    {
        "kanji": "拆",
        "onyomi": "タク, セキ",
        "kunyomi": "さく, ひらく",
        "english": "to split apart"
    },
    {
        "kanji": "擔",
        "onyomi": "タン",
        "kunyomi": "かつ-ぐ, にな-う",
        "english": "carry"
    },
    {
        "kanji": "拈",
        "onyomi": "ネン, セン, デン",
        "kunyomi": "ひね-る",
        "english": "twirl"
    },
    {
        "kanji": "拜",
        "onyomi": "ハイ",
        "kunyomi": "おが-む, おろが-む",
        "english": "worship"
    },
    {
        "kanji": "拌",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "stir and mix"
    },
    {
        "kanji": "拊",
        "onyomi": "フ",
        "kunyomi": "は-る, うつ, な-でる",
        "english": "slap"
    },
    {
        "kanji": "拂",
        "onyomi": "ヒツ, フツ, ホツ",
        "kunyomi": "はら-う",
        "english": "clear out"
    },
    {
        "kanji": "拇",
        "onyomi": "ボ",
        "kunyomi": "おやゆび",
        "english": "thumb"
    },
    {
        "kanji": "抛",
        "onyomi": "ホウ",
        "kunyomi": "なげう-つ",
        "english": "hurl"
    },
    {
        "kanji": "拉",
        "onyomi": "ラツ, ラ, ロウ",
        "kunyomi": "らっ-する, ひし-ぐ, くだ-く",
        "english": "Latin"
    },
    {
        "kanji": "挌",
        "onyomi": "カク",
        "kunyomi": "う-つ",
        "english": "strike"
    },
    {
        "kanji": "拮",
        "onyomi": "カツ, ケツ, キツ",
        "kunyomi": "はたら-く",
        "english": "be imminent"
    },
    {
        "kanji": "拱",
        "onyomi": "キョウ, コウ",
        "kunyomi": "こまぬ-く, こまね-く",
        "english": "arch"
    },
    {
        "kanji": "挧",
        "onyomi": "ウ",
        "kunyomi": "とち",
        "english": "Japanese horse chestnut"
    },
    {
        "kanji": "挂",
        "onyomi": "ケイ, カイ, ケ",
        "kunyomi": "か-ける",
        "english": "hang"
    },
    {
        "kanji": "挈",
        "onyomi": "ケイ, ケツ",
        "kunyomi": "ひっさ-げる",
        "english": "carry by hand"
    },
    {
        "kanji": "拯",
        "onyomi": "ショウ, ジョウ",
        "kunyomi": "すく-う",
        "english": "help"
    },
    {
        "kanji": "拵",
        "onyomi": "ソン",
        "kunyomi": "こしら-える",
        "english": "make"
    },
    {
        "kanji": "捐",
        "onyomi": "エン",
        "kunyomi": "す-てる",
        "english": "throw away"
    },
    {
        "kanji": "挾",
        "onyomi": "キョウ, ショウ",
        "kunyomi": "はさ-む, はさ-まる, わきばさ-む, さしはさ-む",
        "english": "put between"
    },
    {
        "kanji": "捍",
        "onyomi": "カン",
        "kunyomi": "ふせ-ぐ",
        "english": "defend"
    },
    {
        "kanji": "搜",
        "onyomi": "ソウ, シュ, シュウ",
        "kunyomi": "さが-す",
        "english": "search"
    },
    {
        "kanji": "捏",
        "onyomi": "ネツ, テツ, ネチ",
        "kunyomi": "こ-ねる, ね-る, つく-ねる",
        "english": "knead"
    },
    {
        "kanji": "掖",
        "onyomi": "エキ",
        "kunyomi": "たす-ける, わきばさ-む",
        "english": "side (of body)"
    },
    {
        "kanji": "掎",
        "onyomi": "キ",
        "kunyomi": "ひ-く",
        "english": "pull"
    },
    {
        "kanji": "掀",
        "onyomi": "キン, ケン",
        "kunyomi": "",
        "english": "raise"
    },
    {
        "kanji": "掫",
        "onyomi": "ソウ, シュウ",
        "kunyomi": "まも-る, たきぎ, う-つ",
        "english": "night watch"
    },
    {
        "kanji": "捶",
        "onyomi": "スイ",
        "kunyomi": "むちう-つ",
        "english": "strike"
    },
    {
        "kanji": "掣",
        "onyomi": "セイ, セツ",
        "kunyomi": "ひ-く",
        "english": "pull back"
    },
    {
        "kanji": "掏",
        "onyomi": "トウ",
        "kunyomi": "す-る, えら-ぶ",
        "english": "pickpocket"
    },
    {
        "kanji": "掉",
        "onyomi": "トウ, チョウ",
        "kunyomi": "ふる-う",
        "english": "shake & move"
    },
    {
        "kanji": "掟",
        "onyomi": "トウ, チョウ, ジョウ, テイ",
        "kunyomi": "おきて",
        "english": "law"
    },
    {
        "kanji": "掵",
        "onyomi": "ハバ",
        "kunyomi": "",
        "english": "alluvial terraced land"
    },
    {
        "kanji": "捫",
        "onyomi": "モン",
        "kunyomi": "な-でる",
        "english": "to stroke"
    },
    {
        "kanji": "捩",
        "onyomi": "レイ, レツ",
        "kunyomi": "よじ-る, ね-じる, ねじ-れる, もじ-る",
        "english": "screw"
    },
    {
        "kanji": "掾",
        "onyomi": "エン, テン",
        "kunyomi": "じょう",
        "english": "help"
    },
    {
        "kanji": "揩",
        "onyomi": "カイ, カツ",
        "kunyomi": "ぬぐ-う",
        "english": "wipe"
    },
    {
        "kanji": "揀",
        "onyomi": "カン, ケン",
        "kunyomi": "えら-ぶ",
        "english": "select"
    },
    {
        "kanji": "揆",
        "onyomi": "キ",
        "kunyomi": "はかりごと, はか-る",
        "english": "category"
    },
    {
        "kanji": "揣",
        "onyomi": "シ, スイ, タン",
        "kunyomi": "はか-る",
        "english": "conjecture"
    },
    {
        "kanji": "揉",
        "onyomi": "ジュウ",
        "kunyomi": "も-む, も-める",
        "english": "rub"
    },
    {
        "kanji": "插",
        "onyomi": "ソウ",
        "kunyomi": "さ-す, はさ-む",
        "english": "insert"
    },
    {
        "kanji": "揶",
        "onyomi": "ヤ",
        "kunyomi": "からか-う",
        "english": "tease"
    },
    {
        "kanji": "揄",
        "onyomi": "ヨウ, ユウ, ユ",
        "kunyomi": "",
        "english": "pull"
    },
    {
        "kanji": "搖",
        "onyomi": "ヨウ",
        "kunyomi": "ゆ-れる, ゆ-らぐ, ゆ-るぐ, ゆ-する, ゆ-さぶる, ゆ-すぶる, うご-く",
        "english": "wag"
    },
    {
        "kanji": "搴",
        "onyomi": "ケン",
        "kunyomi": "と-る, ぬ-く",
        "english": "take"
    },
    {
        "kanji": "搆",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "pull"
    },
    {
        "kanji": "搓",
        "onyomi": "サ, サイ",
        "kunyomi": "よ-る",
        "english": "braid"
    },
    {
        "kanji": "搦",
        "onyomi": "ジャク, ジョク, ダク, ニャク",
        "kunyomi": "から-める, -がら-み",
        "english": "bind"
    },
    {
        "kanji": "搶",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "つ-く",
        "english": "thrust"
    },
    {
        "kanji": "攝",
        "onyomi": "セツ, ショウ",
        "kunyomi": "おさ-める, かね-る, と-る",
        "english": "surrogate"
    },
    {
        "kanji": "搗",
        "onyomi": "トウ",
        "kunyomi": "つ-く, か-つ",
        "english": "pound"
    },
    {
        "kanji": "搨",
        "onyomi": "トウ",
        "kunyomi": "う-つ, す-る",
        "english": "trace"
    },
    {
        "kanji": "搏",
        "onyomi": "ハク",
        "kunyomi": "う-つ, と-る",
        "english": "seize"
    },
    {
        "kanji": "摧",
        "onyomi": "サイ, サ",
        "kunyomi": "くだ-く",
        "english": "break"
    },
    {
        "kanji": "摯",
        "onyomi": "シ",
        "kunyomi": "いた-る, つか-む, にえ",
        "english": "gift"
    },
    {
        "kanji": "摶",
        "onyomi": "タン, セン",
        "kunyomi": "まる-い",
        "english": "roll into a ball"
    },
    {
        "kanji": "摎",
        "onyomi": "ク, キュウ",
        "kunyomi": "",
        "english": "tie into a bundle"
    },
    {
        "kanji": "攪",
        "onyomi": "カク, コウ",
        "kunyomi": "みだ-す",
        "english": "disturb"
    },
    {
        "kanji": "撕",
        "onyomi": "セイ, シ",
        "kunyomi": "",
        "english": "warn against"
    },
    {
        "kanji": "撓",
        "onyomi": "トウ, キョウ, コウ, ジョウ",
        "kunyomi": "たわ-む, しな-う, しお-る, たわ-める, みだ-す, みだ-れる",
        "english": "bend"
    },
    {
        "kanji": "撥",
        "onyomi": "ハツ, バチ",
        "kunyomi": "は-ねる, おさ-める",
        "english": "brush up"
    },
    {
        "kanji": "撩",
        "onyomi": "リョウ, ロウ",
        "kunyomi": "",
        "english": "disorder"
    },
    {
        "kanji": "撈",
        "onyomi": "ロウ, リョウ",
        "kunyomi": "",
        "english": "catch fish"
    },
    {
        "kanji": "撼",
        "onyomi": "カン",
        "kunyomi": "うごか-す",
        "english": "move"
    },
    {
        "kanji": "據",
        "onyomi": "キョ, コ",
        "kunyomi": "よ-る",
        "english": "to occupy"
    },
    {
        "kanji": "擒",
        "onyomi": "キン",
        "kunyomi": "とら-える, とりこ",
        "english": "capture"
    },
    {
        "kanji": "擅",
        "onyomi": "セン",
        "kunyomi": "ほしいまま",
        "english": "self-indulgent"
    },
    {
        "kanji": "擇",
        "onyomi": "タク",
        "kunyomi": "えら-ぶ",
        "english": "select"
    },
    {
        "kanji": "撻",
        "onyomi": "タツ",
        "kunyomi": "むちうつ",
        "english": "whip"
    },
    {
        "kanji": "擘",
        "onyomi": "ハク, ヒャク, ヘキ",
        "kunyomi": "さ-く",
        "english": "tear up"
    },
    {
        "kanji": "擂",
        "onyomi": "ライ",
        "kunyomi": "す-る",
        "english": "grind"
    },
    {
        "kanji": "擱",
        "onyomi": "カク",
        "kunyomi": "お-く",
        "english": "lay down"
    },
    {
        "kanji": "擧",
        "onyomi": "キョ",
        "kunyomi": "あ-げる, あ-がる, こぞ-る",
        "english": "raise"
    },
    {
        "kanji": "舉",
        "onyomi": "キョ",
        "kunyomi": "あ-げる, あ-がる, こぞ-る",
        "english": "raise"
    },
    {
        "kanji": "擠",
        "onyomi": "セイ, サイ",
        "kunyomi": "お-す",
        "english": "push aside"
    },
    {
        "kanji": "擡",
        "onyomi": "タイ",
        "kunyomi": "もた-げる",
        "english": "lift"
    },
    {
        "kanji": "抬",
        "onyomi": "タイ",
        "kunyomi": "もた-げる",
        "english": "lift"
    },
    {
        "kanji": "擣",
        "onyomi": "トウ",
        "kunyomi": "う-つ, つ-く",
        "english": "pound"
    },
    {
        "kanji": "擯",
        "onyomi": "ヒン",
        "kunyomi": "しりぞ-ける",
        "english": "push (people) back"
    },
    {
        "kanji": "攬",
        "onyomi": "ラン",
        "kunyomi": "と-る",
        "english": "hold (in hand)"
    },
    {
        "kanji": "擶",
        "onyomi": "セン",
        "kunyomi": "ただす",
        "english": "straighten (an arrow)"
    },
    {
        "kanji": "擴",
        "onyomi": "カク, コウ",
        "kunyomi": "ひろ-がる, ひろ-げる, ひろ-める",
        "english": "broaden"
    },
    {
        "kanji": "擲",
        "onyomi": "テキ, チャク, ジャク",
        "kunyomi": "なぐ-る, なげう-つ",
        "english": "hit"
    },
    {
        "kanji": "擺",
        "onyomi": "ハイ",
        "kunyomi": "ひら-く",
        "english": "push open"
    },
    {
        "kanji": "攀",
        "onyomi": "ハン",
        "kunyomi": "よ-じる",
        "english": "climb"
    },
    {
        "kanji": "擽",
        "onyomi": "リャク, ラク, レキ, フキ",
        "kunyomi": "くすぐ-る, う-つ",
        "english": "tickle"
    },
    {
        "kanji": "攘",
        "onyomi": "ジョウ",
        "kunyomi": "ぬす-む, はら-う",
        "english": "chase away"
    },
    {
        "kanji": "攜",
        "onyomi": "ケイ",
        "kunyomi": "たずさ-える, たずさ-わる",
        "english": "carry (in hand)"
    },
    {
        "kanji": "攅",
        "onyomi": "サン",
        "kunyomi": "あつ-まる",
        "english": "gather"
    },
    {
        "kanji": "攤",
        "onyomi": "タン",
        "kunyomi": "ひら-く",
        "english": "open"
    },
    {
        "kanji": "攣",
        "onyomi": "レン",
        "kunyomi": "つ-る, ひ-く",
        "english": "crooked"
    },
    {
        "kanji": "攫",
        "onyomi": "カク",
        "kunyomi": "さら-う, つか-む",
        "english": "abduct"
    },
    {
        "kanji": "攴",
        "onyomi": "ホク",
        "kunyomi": "",
        "english": "strike"
    },
    {
        "kanji": "攵",
        "onyomi": "ホク",
        "kunyomi": "",
        "english": "strike"
    },
    {
        "kanji": "攷",
        "onyomi": "コウ",
        "kunyomi": "かんが-える",
        "english": "examine"
    },
    {
        "kanji": "收",
        "onyomi": "シュウ",
        "kunyomi": "おさ-める, おさ-まる",
        "english": "income"
    },
    {
        "kanji": "攸",
        "onyomi": "ユウ",
        "kunyomi": "ところ",
        "english": "relaxed"
    },
    {
        "kanji": "畋",
        "onyomi": "デン, テン",
        "kunyomi": "かり",
        "english": "till"
    },
    {
        "kanji": "效",
        "onyomi": "コウ",
        "kunyomi": "き-く, ききめ, なら-う",
        "english": "result"
    },
    {
        "kanji": "敖",
        "onyomi": "ゴウ",
        "kunyomi": "あそ-ぶ, おご-る",
        "english": "play"
    },
    {
        "kanji": "敕",
        "onyomi": "チョク",
        "kunyomi": "いまし-める, みことのり",
        "english": "an imperial order or decree"
    },
    {
        "kanji": "敍",
        "onyomi": "ジョ",
        "kunyomi": "つい-ず, ついで",
        "english": "express"
    },
    {
        "kanji": "敘",
        "onyomi": "ジョ",
        "kunyomi": "つい-ず, ついで",
        "english": "express"
    },
    {
        "kanji": "敞",
        "onyomi": "ショウ",
        "kunyomi": "たか-い, ほが-らか, ひろ-い",
        "english": "high and flat"
    },
    {
        "kanji": "敝",
        "onyomi": "ヘイ",
        "kunyomi": "やぶ-れる",
        "english": "be worn-out"
    },
    {
        "kanji": "敲",
        "onyomi": "コウ",
        "kunyomi": "たた-く",
        "english": "strike"
    },
    {
        "kanji": "數",
        "onyomi": "スウ, ス, サク, ソク, シュ",
        "kunyomi": "かず, かぞ-える, しばしば, せ-める, わずらわ-しい",
        "english": "number"
    },
    {
        "kanji": "斂",
        "onyomi": "レン",
        "kunyomi": "おさ-める",
        "english": "tighten"
    },
    {
        "kanji": "斃",
        "onyomi": "ヘイ",
        "kunyomi": "たお-れる, たお-す",
        "english": "kill"
    },
    {
        "kanji": "變",
        "onyomi": "ヘン",
        "kunyomi": "か-わる, か-える",
        "english": "change"
    },
    {
        "kanji": "斛",
        "onyomi": "コク",
        "kunyomi": "と",
        "english": "measure"
    },
    {
        "kanji": "斟",
        "onyomi": "シン",
        "kunyomi": "く-む",
        "english": "dip water"
    },
    {
        "kanji": "斫",
        "onyomi": "シャク",
        "kunyomi": "き-る",
        "english": "cut with a sword"
    },
    {
        "kanji": "斷",
        "onyomi": "ダン",
        "kunyomi": "た-つ, ことわ-る, さだ-める",
        "english": "sever"
    },
    {
        "kanji": "旃",
        "onyomi": "セン",
        "kunyomi": "はた",
        "english": "woollen cloth"
    },
    {
        "kanji": "旆",
        "onyomi": "ハイ",
        "kunyomi": "はた",
        "english": "flag"
    },
    {
        "kanji": "旁",
        "onyomi": "ボウ, ホウ",
        "kunyomi": "つくり, かたがた, かたわら",
        "english": "RHS of character"
    },
    {
        "kanji": "旄",
        "onyomi": "ボウ, モウ",
        "kunyomi": "",
        "english": "tassel on a flag"
    },
    {
        "kanji": "旌",
        "onyomi": "セイ, ショウ",
        "kunyomi": "あら-わす, はた",
        "english": "flag"
    },
    {
        "kanji": "旒",
        "onyomi": "リュウ",
        "kunyomi": "はたあし",
        "english": "counter for flags"
    },
    {
        "kanji": "旛",
        "onyomi": "ヘン, ハン",
        "kunyomi": "はた",
        "english": "flag"
    },
    {
        "kanji": "旙",
        "onyomi": "ヘン, ハン",
        "kunyomi": "はた",
        "english": "a pennant"
    },
    {
        "kanji": "无",
        "onyomi": "ブ, ム",
        "kunyomi": "なし, ない",
        "english": "nothing"
    },
    {
        "kanji": "旡",
        "onyomi": "キ, ケ",
        "kunyomi": "む, なし",
        "english": "sob"
    },
    {
        "kanji": "旱",
        "onyomi": "カン",
        "kunyomi": "ひでり",
        "english": "drought"
    },
    {
        "kanji": "杲",
        "onyomi": "コウ",
        "kunyomi": "あきらか, たか-い",
        "english": "clear"
    },
    {
        "kanji": "昊",
        "onyomi": "コウ",
        "kunyomi": "そら",
        "english": "sky"
    },
    {
        "kanji": "昃",
        "onyomi": "ショク, ソク",
        "kunyomi": "かたむ-く",
        "english": "decline"
    },
    {
        "kanji": "旻",
        "onyomi": "ビン, ミン",
        "kunyomi": "あきぞら",
        "english": "the autumn sky"
    },
    {
        "kanji": "杳",
        "onyomi": "ヨウ",
        "kunyomi": "くら-い, はるか",
        "english": "darkness"
    },
    {
        "kanji": "昵",
        "onyomi": "ジツ, ショク",
        "kunyomi": "ちかづ-く",
        "english": "reconcile"
    },
    {
        "kanji": "昶",
        "onyomi": "チョウ",
        "kunyomi": "",
        "english": "long day"
    },
    {
        "kanji": "昴",
        "onyomi": "コウ, ボウ",
        "kunyomi": "すばる",
        "english": "the Pleiades"
    },
    {
        "kanji": "昜",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "open"
    },
    {
        "kanji": "晏",
        "onyomi": "アン",
        "kunyomi": "おそ-い",
        "english": "late"
    },
    {
        "kanji": "晄",
        "onyomi": "コウ",
        "kunyomi": "あきらか",
        "english": "clear"
    },
    {
        "kanji": "晉",
        "onyomi": "シン",
        "kunyomi": "すす-む",
        "english": "advance"
    },
    {
        "kanji": "晁",
        "onyomi": "チョウ",
        "kunyomi": "あさ",
        "english": "proper name"
    },
    {
        "kanji": "晞",
        "onyomi": "キ",
        "kunyomi": "かわ-く",
        "english": "dry out"
    },
    {
        "kanji": "晝",
        "onyomi": "チュウ",
        "kunyomi": "ひる",
        "english": "daytime"
    },
    {
        "kanji": "晤",
        "onyomi": "ゴ",
        "kunyomi": "あきらか",
        "english": "clear"
    },
    {
        "kanji": "晧",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "bright"
    },
    {
        "kanji": "晨",
        "onyomi": "シン",
        "kunyomi": "あした, とき, あさ",
        "english": "morning"
    },
    {
        "kanji": "晟",
        "onyomi": "セイ, ジョウ",
        "kunyomi": "あきらか",
        "english": "clear"
    },
    {
        "kanji": "晢",
        "onyomi": "セイ, セツ",
        "kunyomi": "あきらか",
        "english": "light of stars"
    },
    {
        "kanji": "晰",
        "onyomi": "シャク, セキ",
        "kunyomi": "あきらか",
        "english": "clear"
    },
    {
        "kanji": "暃",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "be separated"
    },
    {
        "kanji": "暈",
        "onyomi": "ウン",
        "kunyomi": "ぼか-す, ぼけ-る, かさ, くま, ぼかし, めまい",
        "english": "halo"
    },
    {
        "kanji": "暎",
        "onyomi": "エイ, ヨウ",
        "kunyomi": "うつ-す, うつ-る, は-える",
        "english": "sun beginning decline"
    },
    {
        "kanji": "暉",
        "onyomi": "キ",
        "kunyomi": "かが-やく",
        "english": "shine"
    },
    {
        "kanji": "暄",
        "onyomi": "ケン",
        "kunyomi": "あたたか-い",
        "english": "warm weather"
    },
    {
        "kanji": "暘",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "sunrise"
    },
    {
        "kanji": "暝",
        "onyomi": "メイ, ミョウ",
        "kunyomi": "くら-い",
        "english": "dark"
    },
    {
        "kanji": "曁",
        "onyomi": "キ",
        "kunyomi": "およ-ぶ",
        "english": "and"
    },
    {
        "kanji": "暹",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "sunrise"
    },
    {
        "kanji": "曉",
        "onyomi": "キョウ, ギョウ",
        "kunyomi": "あかつき, さと-る",
        "english": "dawn"
    },
    {
        "kanji": "暾",
        "onyomi": "トン",
        "kunyomi": "あさひ",
        "english": "sunrise"
    },
    {
        "kanji": "暼",
        "onyomi": "ヘツ, ヘチ",
        "kunyomi": "",
        "english": "setting sun"
    },
    {
        "kanji": "曄",
        "onyomi": "ヨウ",
        "kunyomi": "かが-やく",
        "english": "shine"
    },
    {
        "kanji": "暸",
        "onyomi": "リョウ",
        "kunyomi": "あきらか",
        "english": "clear"
    },
    {
        "kanji": "曖",
        "onyomi": "アイ",
        "kunyomi": "くら-い",
        "english": "dark"
    },
    {
        "kanji": "曚",
        "onyomi": "モウ, ボウ",
        "kunyomi": "くら-い",
        "english": "darkness"
    },
    {
        "kanji": "曠",
        "onyomi": "コウ",
        "kunyomi": "あきらか, むな-しい",
        "english": "wide"
    },
    {
        "kanji": "昿",
        "onyomi": "コウ",
        "kunyomi": "あきらか, むな-しい",
        "english": "extensive"
    },
    {
        "kanji": "曦",
        "onyomi": "ギ, キ",
        "kunyomi": "",
        "english": "the sun"
    },
    {
        "kanji": "曩",
        "onyomi": "ノウ, ドウ",
        "kunyomi": "さき-に",
        "english": "before"
    },
    {
        "kanji": "曰",
        "onyomi": "エツ",
        "kunyomi": "いわ-く, のたま-う, のたま-わく, ここに",
        "english": "say"
    },
    {
        "kanji": "曵",
        "onyomi": "エイ",
        "kunyomi": "ひ-く",
        "english": "trail"
    },
    {
        "kanji": "曷",
        "onyomi": "カツ",
        "kunyomi": "なんぞ, いつ, いずくんぞ, なに",
        "english": "why"
    },
    {
        "kanji": "朏",
        "onyomi": "ヒ, ハイ",
        "kunyomi": "",
        "english": "new moon"
    },
    {
        "kanji": "朖",
        "onyomi": "ロウ",
        "kunyomi": "ほが-らか, あき-らか",
        "english": "clear"
    },
    {
        "kanji": "朞",
        "onyomi": "キ, ゴ",
        "kunyomi": "",
        "english": "one period"
    },
    {
        "kanji": "朦",
        "onyomi": "モウ, ボウ",
        "kunyomi": "おぼろ",
        "english": "dim"
    },
    {
        "kanji": "朧",
        "onyomi": "ロウ",
        "kunyomi": "おぼろ",
        "english": "haziness"
    },
    {
        "kanji": "霸",
        "onyomi": "ハ, ハク",
        "kunyomi": "はたがしら",
        "english": "supremacy"
    },
    {
        "kanji": "朮",
        "onyomi": "ジュツ, シュツ, チュツ",
        "kunyomi": "もちあわ, おけら",
        "english": "a type of millet"
    },
    {
        "kanji": "朿",
        "onyomi": "シ",
        "kunyomi": "とげ",
        "english": "thorn"
    },
    {
        "kanji": "朶",
        "onyomi": "ダ, タ",
        "kunyomi": "えだ",
        "english": "branch"
    },
    {
        "kanji": "杁",
        "onyomi": "",
        "kunyomi": "いり",
        "english": "sluice"
    },
    {
        "kanji": "朸",
        "onyomi": "リョク",
        "kunyomi": "おおご, おうご",
        "english": "carrying pole"
    },
    {
        "kanji": "朷",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "type of tree"
    },
    {
        "kanji": "杆",
        "onyomi": "カン",
        "kunyomi": "てこ",
        "english": "shield"
    },
    {
        "kanji": "杞",
        "onyomi": "コ, キ",
        "kunyomi": "",
        "english": "river willow"
    },
    {
        "kanji": "杠",
        "onyomi": "コウ",
        "kunyomi": "ちぎり, てこ",
        "english": "lever"
    },
    {
        "kanji": "杙",
        "onyomi": "ヨク",
        "kunyomi": "くい",
        "english": "stake"
    },
    {
        "kanji": "杣",
        "onyomi": "",
        "kunyomi": "そま",
        "english": "timber"
    },
    {
        "kanji": "杤",
        "onyomi": "",
        "kunyomi": "とち",
        "english": "type of oak"
    },
    {
        "kanji": "枉",
        "onyomi": "オウ",
        "kunyomi": "ま-げる, ま-がる, ま-げて",
        "english": "bend"
    },
    {
        "kanji": "杰",
        "onyomi": "ケツ, ゲチ",
        "kunyomi": "すぐ-れる",
        "english": "hero"
    },
    {
        "kanji": "枩",
        "onyomi": "ショウ",
        "kunyomi": "まつ",
        "english": "pine tree"
    },
    {
        "kanji": "杼",
        "onyomi": "チョ, ショ",
        "kunyomi": "ひ, どんぐり",
        "english": "shuttle"
    },
    {
        "kanji": "杪",
        "onyomi": "ビョウ, ショウ",
        "kunyomi": "こずえ",
        "english": "twig"
    },
    {
        "kanji": "枌",
        "onyomi": "ショウ, フン",
        "kunyomi": "まつ, そぎ",
        "english": "pine tree"
    },
    {
        "kanji": "枋",
        "onyomi": "ホウ, ヘイ",
        "kunyomi": "ほ",
        "english": "raft"
    },
    {
        "kanji": "枦",
        "onyomi": "ロ",
        "kunyomi": "はぜ",
        "english": "wax tree"
    },
    {
        "kanji": "枡",
        "onyomi": "",
        "kunyomi": "ます",
        "english": "measuring box"
    },
    {
        "kanji": "枅",
        "onyomi": "ケイ",
        "kunyomi": "ひじき",
        "english": "rafter"
    },
    {
        "kanji": "枷",
        "onyomi": "カ",
        "kunyomi": "かせ, からざお",
        "english": "shackles"
    },
    {
        "kanji": "柯",
        "onyomi": "カ",
        "kunyomi": "え, ふる",
        "english": "handle"
    },
    {
        "kanji": "枴",
        "onyomi": "カイ",
        "kunyomi": "つえ",
        "english": "cane"
    },
    {
        "kanji": "柬",
        "onyomi": "カン, ケン",
        "kunyomi": "えら-ぶ",
        "english": "select"
    },
    {
        "kanji": "枳",
        "onyomi": "キ, シ",
        "kunyomi": "からたち",
        "english": "trifoliate orange tree"
    },
    {
        "kanji": "柩",
        "onyomi": "キュウ, グ",
        "kunyomi": "ひちぎ, ひつぎ",
        "english": "bier"
    },
    {
        "kanji": "枸",
        "onyomi": "ク, コウ",
        "kunyomi": "",
        "english": "quince tree"
    },
    {
        "kanji": "柤",
        "onyomi": "サ",
        "kunyomi": "そ",
        "english": "railing"
    },
    {
        "kanji": "柞",
        "onyomi": "サク",
        "kunyomi": "ははそ",
        "english": "type of oak"
    },
    {
        "kanji": "柝",
        "onyomi": "タク",
        "kunyomi": "ひょうしぎ",
        "english": "sounding sticks"
    },
    {
        "kanji": "柢",
        "onyomi": "テイ",
        "kunyomi": "ね",
        "english": "root"
    },
    {
        "kanji": "柮",
        "onyomi": "トツ",
        "kunyomi": "",
        "english": "to cut"
    },
    {
        "kanji": "枹",
        "onyomi": "フ, ホウ",
        "kunyomi": "ほ, ばち, もみじ, ならのき",
        "english": "gong stick"
    },
    {
        "kanji": "柎",
        "onyomi": "フ",
        "kunyomi": "うてな",
        "english": "raft"
    },
    {
        "kanji": "柆",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "bent tree"
    },
    {
        "kanji": "柧",
        "onyomi": "コ, カ",
        "kunyomi": "く",
        "english": "corner"
    },
    {
        "kanji": "檜",
        "onyomi": "カイ",
        "kunyomi": "ひのき, ひ",
        "english": "Japanese cypress"
    },
    {
        "kanji": "栞",
        "onyomi": "カン",
        "kunyomi": "しおり",
        "english": "bookmark"
    },
    {
        "kanji": "框",
        "onyomi": "キョウ",
        "kunyomi": "かまち",
        "english": "framework"
    },
    {
        "kanji": "栩",
        "onyomi": "ク",
        "kunyomi": "くぬぎ",
        "english": "type of oak"
    },
    {
        "kanji": "桀",
        "onyomi": "ケツ",
        "kunyomi": "ます, はりつけ",
        "english": "measuring box"
    },
    {
        "kanji": "桍",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "type of tree"
    },
    {
        "kanji": "栲",
        "onyomi": "コウ",
        "kunyomi": "かえ, たえ",
        "english": "sumac"
    },
    {
        "kanji": "桎",
        "onyomi": "シツ",
        "kunyomi": "あしかせ",
        "english": "fetters"
    },
    {
        "kanji": "梳",
        "onyomi": "ソ",
        "kunyomi": "と-く, と-かす, す-く, けず-る, くしけず-る",
        "english": "comb (hair)"
    },
    {
        "kanji": "栫",
        "onyomi": "セン, ソン",
        "kunyomi": "",
        "english": "weir"
    },
    {
        "kanji": "桙",
        "onyomi": "ウ",
        "kunyomi": "ほこ",
        "english": "halberd"
    },
    {
        "kanji": "档",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "bookshelf"
    },
    {
        "kanji": "桷",
        "onyomi": "カク",
        "kunyomi": "たるき",
        "english": "rafter"
    },
    {
        "kanji": "桿",
        "onyomi": "カン",
        "kunyomi": "てこ",
        "english": "shield"
    },
    {
        "kanji": "梟",
        "onyomi": "キョウ",
        "kunyomi": "ふくろう",
        "english": "owl"
    },
    {
        "kanji": "梏",
        "onyomi": "コク, カク",
        "kunyomi": "てかせ",
        "english": "manacles"
    },
    {
        "kanji": "梭",
        "onyomi": "サ",
        "kunyomi": "ひ",
        "english": "shuttle"
    },
    {
        "kanji": "梔",
        "onyomi": "シ",
        "kunyomi": "くちなし",
        "english": "gardenia"
    },
    {
        "kanji": "條",
        "onyomi": "ジョウ, チョウ, デキ",
        "kunyomi": "えだ, すじ",
        "english": "article"
    },
    {
        "kanji": "梛",
        "onyomi": "ダ, ナ",
        "kunyomi": "なぎ",
        "english": "type of tall evergreen tree"
    },
    {
        "kanji": "梃",
        "onyomi": "チョウ, テイ",
        "kunyomi": "てこ, つえ",
        "english": "lever"
    },
    {
        "kanji": "檮",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "stump"
    },
    {
        "kanji": "梹",
        "onyomi": "ヒン",
        "kunyomi": "",
        "english": "areca nut"
    },
    {
        "kanji": "桴",
        "onyomi": "フ",
        "kunyomi": "ばち, いかだ",
        "english": "drumstick"
    },
    {
        "kanji": "梵",
        "onyomi": "ボン, フウ",
        "kunyomi": "",
        "english": "Sanskrit"
    },
    {
        "kanji": "梠",
        "onyomi": "ロ, リョ",
        "kunyomi": "ひさし",
        "english": "a kind of quince"
    },
    {
        "kanji": "梺",
        "onyomi": "",
        "kunyomi": "ふむと, ふもと",
        "english": "base of a mountain"
    },
    {
        "kanji": "椏",
        "onyomi": "",
        "kunyomi": "また",
        "english": "crotch of a tree"
    },
    {
        "kanji": "梍",
        "onyomi": "ユウ",
        "kunyomi": "",
        "english": "sickle handle"
    },
    {
        "kanji": "桾",
        "onyomi": "クン",
        "kunyomi": "",
        "english": "type of fruit tree"
    },
    {
        "kanji": "椁",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "outer box for a coffin"
    },
    {
        "kanji": "棊",
        "onyomi": "キ",
        "kunyomi": "ご",
        "english": "Japanese chess"
    },
    {
        "kanji": "椈",
        "onyomi": "キク",
        "kunyomi": "",
        "english": "oak"
    },
    {
        "kanji": "棘",
        "onyomi": "キョク",
        "kunyomi": "いばら, とげ",
        "english": "thorn"
    },
    {
        "kanji": "椢",
        "onyomi": "カイ",
        "kunyomi": "そこ, はこ, くぬぎ",
        "english": "bottom"
    },
    {
        "kanji": "椦",
        "onyomi": "ケン",
        "kunyomi": "まげもの",
        "english": "wickerwork"
    },
    {
        "kanji": "棡",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "mast crossbeam"
    },
    {
        "kanji": "椌",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "type of ancient musical instrument"
    },
    {
        "kanji": "棍",
        "onyomi": "コン",
        "kunyomi": "つえ",
        "english": "a cane"
    },
    {
        "kanji": "棔",
        "onyomi": "コン",
        "kunyomi": "ねむのき",
        "english": "silk tree"
    },
    {
        "kanji": "棧",
        "onyomi": "サン, セン",
        "kunyomi": "かけはし",
        "english": "crosspiece"
    },
    {
        "kanji": "棕",
        "onyomi": "シュ, ソウ",
        "kunyomi": "",
        "english": "hemp palm"
    },
    {
        "kanji": "椶",
        "onyomi": "シュ, ソウ",
        "kunyomi": "",
        "english": "hemp palm"
    },
    {
        "kanji": "椒",
        "onyomi": "ショウ",
        "kunyomi": "はじかみ",
        "english": "Japanese pepper tree"
    },
    {
        "kanji": "椄",
        "onyomi": "セツ, ショウ",
        "kunyomi": "つ-ぐ",
        "english": "graft"
    },
    {
        "kanji": "棗",
        "onyomi": "ソウ",
        "kunyomi": "なつめ",
        "english": "jujube"
    },
    {
        "kanji": "棣",
        "onyomi": "テイ, タイ",
        "kunyomi": "にわざくら",
        "english": "flowering almond"
    },
    {
        "kanji": "椥",
        "onyomi": "",
        "kunyomi": "なぎ",
        "english": "type of evergreen tree"
    },
    {
        "kanji": "棹",
        "onyomi": "トウ, タク",
        "kunyomi": "さお, こ-ぐ",
        "english": "pole a boat"
    },
    {
        "kanji": "棠",
        "onyomi": "トウ",
        "kunyomi": "やまなし",
        "english": "wild pear tree"
    },
    {
        "kanji": "棯",
        "onyomi": "ネン",
        "kunyomi": "",
        "english": "type of fruit tree"
    },
    {
        "kanji": "椨",
        "onyomi": "",
        "kunyomi": "たぶ, たふ",
        "english": "type of evergreen camphor tree"
    },
    {
        "kanji": "椪",
        "onyomi": "ポン",
        "kunyomi": "",
        "english": "name of a place in India"
    },
    {
        "kanji": "椚",
        "onyomi": "",
        "kunyomi": "くぬぎ",
        "english": "oak used for charcoal"
    },
    {
        "kanji": "椣",
        "onyomi": "",
        "kunyomi": "しで",
        "english": "type of deciduous birch tree"
    },
    {
        "kanji": "椡",
        "onyomi": "",
        "kunyomi": "くぬぎ",
        "english": "type of oak"
    },
    {
        "kanji": "棆",
        "onyomi": "リン",
        "kunyomi": "",
        "english": "camphor tree"
    },
    {
        "kanji": "楹",
        "onyomi": "エイ",
        "kunyomi": "はしら",
        "english": "pillar"
    },
    {
        "kanji": "楷",
        "onyomi": "カイ",
        "kunyomi": "",
        "english": "square character style"
    },
    {
        "kanji": "楜",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "pepper"
    },
    {
        "kanji": "楸",
        "onyomi": "シュウ",
        "kunyomi": "きささげ, ひさぎ",
        "english": "Japanese catalpa"
    },
    {
        "kanji": "楫",
        "onyomi": "シュウ, ショウ",
        "kunyomi": "かじ, かい",
        "english": "sculling oar"
    },
    {
        "kanji": "楔",
        "onyomi": "ケツ, セツ",
        "kunyomi": "くさび, ほうだて",
        "english": "wedge"
    },
    {
        "kanji": "楾",
        "onyomi": "",
        "kunyomi": "はんぞう",
        "english": "container for pouring water"
    },
    {
        "kanji": "楮",
        "onyomi": "チョ",
        "kunyomi": "こうぞ",
        "english": "paper mulberry"
    },
    {
        "kanji": "椹",
        "onyomi": "ジン, チン, シン",
        "kunyomi": "さわら, あてぎ, くわのみ",
        "english": "type of cypress"
    },
    {
        "kanji": "楴",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "ornamental hairpin"
    },
    {
        "kanji": "椽",
        "onyomi": "テン",
        "kunyomi": "えん, たるき",
        "english": "rafter"
    },
    {
        "kanji": "楙",
        "onyomi": "ボウ",
        "kunyomi": "しげる",
        "english": "name of plant"
    },
    {
        "kanji": "椰",
        "onyomi": "ヤ",
        "kunyomi": "やし",
        "english": "coconut tree"
    },
    {
        "kanji": "楡",
        "onyomi": "ユ",
        "kunyomi": "にれ",
        "english": "elm"
    },
    {
        "kanji": "楞",
        "onyomi": "リョウ, ロウ",
        "kunyomi": "かど",
        "english": "corner"
    },
    {
        "kanji": "楝",
        "onyomi": "レン",
        "kunyomi": "おおち, おうち",
        "english": "Japanese bead tree"
    },
    {
        "kanji": "榁",
        "onyomi": "",
        "kunyomi": "むろ",
        "english": "needle juniper"
    },
    {
        "kanji": "楪",
        "onyomi": "チャ",
        "kunyomi": "",
        "english": "lacquered dish"
    },
    {
        "kanji": "榲",
        "onyomi": "オツ",
        "kunyomi": "",
        "english": "quince"
    },
    {
        "kanji": "榮",
        "onyomi": "エイ, ヨウ",
        "kunyomi": "さか-える, は-える, え",
        "english": "flourish"
    },
    {
        "kanji": "槐",
        "onyomi": "カイ",
        "kunyomi": "えんじゅ",
        "english": "type of Japanese pagoda tree"
    },
    {
        "kanji": "榿",
        "onyomi": "ガイ, カイ",
        "kunyomi": "",
        "english": "alder"
    },
    {
        "kanji": "槁",
        "onyomi": "コウ",
        "kunyomi": "か-れる",
        "english": "die (vegetation)"
    },
    {
        "kanji": "槓",
        "onyomi": "コウ",
        "kunyomi": "てこ",
        "english": "lever"
    },
    {
        "kanji": "榾",
        "onyomi": "コツ",
        "kunyomi": "ほた",
        "english": "chip (of wood)"
    },
    {
        "kanji": "槎",
        "onyomi": "サ",
        "kunyomi": "いかだ, き-る",
        "english": "raft"
    },
    {
        "kanji": "寨",
        "onyomi": "サイ",
        "kunyomi": "とりで",
        "english": "fort"
    },
    {
        "kanji": "槊",
        "onyomi": "サク",
        "kunyomi": "ほこ",
        "english": "halberd"
    },
    {
        "kanji": "槝",
        "onyomi": "",
        "kunyomi": "かし",
        "english": "oak"
    },
    {
        "kanji": "榻",
        "onyomi": "トウ",
        "kunyomi": "こしかけ, しじ",
        "english": "chair"
    },
    {
        "kanji": "槃",
        "onyomi": "ハン",
        "kunyomi": "たら-い",
        "english": "tub"
    },
    {
        "kanji": "榧",
        "onyomi": "ヒ",
        "kunyomi": "かや",
        "english": "Japanese nutmeg"
    },
    {
        "kanji": "樮",
        "onyomi": "",
        "kunyomi": "ほくそ",
        "english": "a type of tree"
    },
    {
        "kanji": "榑",
        "onyomi": "フ",
        "kunyomi": "くれ",
        "english": "unbarked lumber"
    },
    {
        "kanji": "榠",
        "onyomi": "ベイ",
        "kunyomi": "",
        "english": "type of tree"
    },
    {
        "kanji": "榜",
        "onyomi": "ボウ, ホウ",
        "kunyomi": "かじ, たてふだ, ふだ",
        "english": "rudder"
    },
    {
        "kanji": "榕",
        "onyomi": "ヨウ",
        "kunyomi": "あこう",
        "english": "evergreen mulberry"
    },
    {
        "kanji": "榴",
        "onyomi": "ル, リュウ, リョウ",
        "kunyomi": "ざくろ",
        "english": "pomegranate"
    },
    {
        "kanji": "槞",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "cage"
    },
    {
        "kanji": "槨",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "outer box for a coffin"
    },
    {
        "kanji": "樂",
        "onyomi": "ガク, ラク, ゴウ",
        "kunyomi": "たの-しい, たの-しむ, この-む",
        "english": "music"
    },
    {
        "kanji": "樛",
        "onyomi": "キュウ",
        "kunyomi": "つが, まと-う",
        "english": "bend"
    },
    {
        "kanji": "槿",
        "onyomi": "キン",
        "kunyomi": "むくげ",
        "english": "rose of Sharon"
    },
    {
        "kanji": "權",
        "onyomi": "ケン, ゴン",
        "kunyomi": "おもり, かり, はか-る",
        "english": "authority"
    },
    {
        "kanji": "槹",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "well sweep"
    },
    {
        "kanji": "槲",
        "onyomi": "コク",
        "kunyomi": "かしわ",
        "english": "oak"
    },
    {
        "kanji": "槧",
        "onyomi": "ザン, セン, サン",
        "kunyomi": "ふだ",
        "english": "printed book"
    },
    {
        "kanji": "樅",
        "onyomi": "ショウ",
        "kunyomi": "もみ",
        "english": "fir"
    },
    {
        "kanji": "榱",
        "onyomi": "スイ",
        "kunyomi": "たるき",
        "english": "rafter"
    },
    {
        "kanji": "樞",
        "onyomi": "スウ, シュ",
        "kunyomi": "とぼそ, からくり",
        "english": "pivot"
    },
    {
        "kanji": "槭",
        "onyomi": "セキ, シュク",
        "kunyomi": "かえで",
        "english": "maple tree"
    },
    {
        "kanji": "樔",
        "onyomi": "ソウ",
        "kunyomi": "す, すく-う, た-える",
        "english": "nest"
    },
    {
        "kanji": "槫",
        "onyomi": "タン, セン",
        "kunyomi": "",
        "english": "hearse"
    },
    {
        "kanji": "樊",
        "onyomi": "ハン",
        "kunyomi": "まがき",
        "english": "cage"
    },
    {
        "kanji": "樒",
        "onyomi": "ミツ",
        "kunyomi": "しきみ, じんこう",
        "english": "tree whose branches are placed on Buddhist graves"
    },
    {
        "kanji": "櫁",
        "onyomi": "ミツ",
        "kunyomi": "しきみ, じんこう",
        "english": "Japanese star anise"
    },
    {
        "kanji": "樣",
        "onyomi": "ヨウ, ショウ",
        "kunyomi": "さま",
        "english": "Esq."
    },
    {
        "kanji": "樓",
        "onyomi": "ロウ",
        "kunyomi": "たかどの",
        "english": "tower"
    },
    {
        "kanji": "橄",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "olive"
    },
    {
        "kanji": "樌",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "grove"
    },
    {
        "kanji": "橲",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "Japanese storax"
    },
    {
        "kanji": "樶",
        "onyomi": "サイ",
        "kunyomi": "ふし",
        "english": "knot in wood"
    },
    {
        "kanji": "橸",
        "onyomi": "",
        "kunyomi": "まさ",
        "english": "straight grain"
    },
    {
        "kanji": "橇",
        "onyomi": "キョウ, ゼイ, セイ",
        "kunyomi": "そり, かんじき",
        "english": "sled"
    },
    {
        "kanji": "橢",
        "onyomi": "ダ",
        "kunyomi": "",
        "english": "ellipse"
    },
    {
        "kanji": "橙",
        "onyomi": "トウ",
        "kunyomi": "だいだい",
        "english": "bitter orange"
    },
    {
        "kanji": "橦",
        "onyomi": "シュ, ショウ, トウ",
        "kunyomi": "",
        "english": "pole"
    },
    {
        "kanji": "橈",
        "onyomi": "ドウ, ジョウ, ニョウ",
        "kunyomi": "かい, かじ, たわ-む, たわ-める",
        "english": "oar"
    },
    {
        "kanji": "樸",
        "onyomi": "ボク, ハク, ホク",
        "kunyomi": "こはだ, きじ",
        "english": "bark of a tree"
    },
    {
        "kanji": "樢",
        "onyomi": "ト, チョウ",
        "kunyomi": "つた",
        "english": "type of bird"
    },
    {
        "kanji": "檐",
        "onyomi": "エン, タン",
        "kunyomi": "のき, ひさし",
        "english": "eaves"
    },
    {
        "kanji": "檍",
        "onyomi": "オク",
        "kunyomi": "い",
        "english": "ilex"
    },
    {
        "kanji": "檠",
        "onyomi": "ケイ",
        "kunyomi": "ゆだめ",
        "english": "straighten a bow"
    },
    {
        "kanji": "檄",
        "onyomi": "ケキ",
        "kunyomi": "げき-する, ふれぶみ",
        "english": "written appeal"
    },
    {
        "kanji": "檢",
        "onyomi": "ケン",
        "kunyomi": "しら-べる",
        "english": "check"
    },
    {
        "kanji": "檣",
        "onyomi": "ショウ",
        "kunyomi": "ほばしら",
        "english": "mast"
    },
    {
        "kanji": "檗",
        "onyomi": "ハク, ビャク",
        "kunyomi": "きはだ, きわだ",
        "english": "Amur or Chinese cork tree"
    },
    {
        "kanji": "蘗",
        "onyomi": "ハク, ビャク",
        "kunyomi": "きはだ, きわだ",
        "english": "stump"
    },
    {
        "kanji": "檻",
        "onyomi": "カン",
        "kunyomi": "おり, おばしま, てすり",
        "english": "pen"
    },
    {
        "kanji": "櫃",
        "onyomi": "キ",
        "kunyomi": "ひつ",
        "english": "chest"
    },
    {
        "kanji": "櫂",
        "onyomi": "トウ, タク",
        "kunyomi": "かい, かじ",
        "english": "oar"
    },
    {
        "kanji": "檸",
        "onyomi": "ネイ, ドウ",
        "kunyomi": "",
        "english": "lemon tree"
    },
    {
        "kanji": "檳",
        "onyomi": "ビン, ヒン",
        "kunyomi": "",
        "english": "betel-nut palm"
    },
    {
        "kanji": "檬",
        "onyomi": "モウ",
        "kunyomi": "",
        "english": "lemon tree"
    },
    {
        "kanji": "櫞",
        "onyomi": "エン",
        "kunyomi": "",
        "english": "kind of lemon tree"
    },
    {
        "kanji": "櫑",
        "onyomi": "ライ",
        "kunyomi": "さかだる",
        "english": "decorated wine cask"
    },
    {
        "kanji": "櫟",
        "onyomi": "レキ, ヤク, ロウ",
        "kunyomi": "くぬぎ",
        "english": "oak for charcoal"
    },
    {
        "kanji": "檪",
        "onyomi": "レキ, ヤク, ロウ",
        "kunyomi": "くぬぎ",
        "english": "oak used for charcoal"
    },
    {
        "kanji": "櫚",
        "onyomi": "ロ, リョ",
        "kunyomi": "",
        "english": "kind of quince"
    },
    {
        "kanji": "櫪",
        "onyomi": "レキ",
        "kunyomi": "かいばおけ, くぬぎ",
        "english": "manger"
    },
    {
        "kanji": "櫻",
        "onyomi": "オウ, ヨウ",
        "kunyomi": "さくら",
        "english": "cherry"
    },
    {
        "kanji": "欅",
        "onyomi": "キョ",
        "kunyomi": "けやき",
        "english": "keyaki"
    },
    {
        "kanji": "蘖",
        "onyomi": "ゲツ",
        "kunyomi": "ひこばえ",
        "english": "sprout"
    },
    {
        "kanji": "櫺",
        "onyomi": "レイ, リョウ",
        "kunyomi": "れんじ",
        "english": "latticework"
    },
    {
        "kanji": "欒",
        "onyomi": "ラン",
        "kunyomi": "おうち, ひじき, まどか, まるい",
        "english": "chinaberry tree"
    },
    {
        "kanji": "欖",
        "onyomi": "ラン",
        "kunyomi": "",
        "english": "Chinese olive tree"
    },
    {
        "kanji": "鬱",
        "onyomi": "ウツ",
        "kunyomi": "うっ-する, ふさ-ぐ, しげ-る",
        "english": "gloom"
    },
    {
        "kanji": "欟",
        "onyomi": "",
        "kunyomi": "つき",
        "english": "keyaki"
    },
    {
        "kanji": "欸",
        "onyomi": "アイ, カイ",
        "kunyomi": "",
        "english": "exclamation"
    },
    {
        "kanji": "欷",
        "onyomi": "キ",
        "kunyomi": "なげく",
        "english": "cry"
    },
    {
        "kanji": "盜",
        "onyomi": "トウ",
        "kunyomi": "ぬす-む",
        "english": "thief"
    },
    {
        "kanji": "欹",
        "onyomi": "イ, キ",
        "kunyomi": "そばだ-てる, そばだ-つ",
        "english": "prick up (one's ears)"
    },
    {
        "kanji": "飮",
        "onyomi": "イン, オン",
        "kunyomi": "の-む",
        "english": "drink"
    },
    {
        "kanji": "歇",
        "onyomi": "ケツ, カイ, カツ",
        "kunyomi": "や-める",
        "english": "exhausted"
    },
    {
        "kanji": "歃",
        "onyomi": "ソウ, コウ, ショウ",
        "kunyomi": "すす-る",
        "english": "sip"
    },
    {
        "kanji": "歉",
        "onyomi": "ケン, カン",
        "kunyomi": "あきたりない",
        "english": "insufficiency"
    },
    {
        "kanji": "歐",
        "onyomi": "オウ",
        "kunyomi": "うた-う, は-く",
        "english": "Europe"
    },
    {
        "kanji": "歙",
        "onyomi": "キュウ, キョウ, ショウ",
        "kunyomi": "す-う",
        "english": "come together"
    },
    {
        "kanji": "歔",
        "onyomi": "キョ",
        "kunyomi": "すすりな-く",
        "english": "cry"
    },
    {
        "kanji": "歛",
        "onyomi": "レン",
        "kunyomi": "",
        "english": "tighten"
    },
    {
        "kanji": "歟",
        "onyomi": "ヨ",
        "kunyomi": "や, か",
        "english": "interrogative particle"
    },
    {
        "kanji": "歡",
        "onyomi": "カン",
        "kunyomi": "よろこ-ぶ",
        "english": "delight"
    },
    {
        "kanji": "歸",
        "onyomi": "キ",
        "kunyomi": "かえ-る, かえ-す, おく-る, とつ-ぐ",
        "english": "homecoming"
    },
    {
        "kanji": "歹",
        "onyomi": "ガツ, ガチ, タイ",
        "kunyomi": "",
        "english": "bare bone"
    },
    {
        "kanji": "歿",
        "onyomi": "ボツ",
        "kunyomi": "しぬ",
        "english": "die"
    },
    {
        "kanji": "殀",
        "onyomi": "ヨウ",
        "kunyomi": "わかじに",
        "english": "dying young"
    },
    {
        "kanji": "殄",
        "onyomi": "テン",
        "kunyomi": "た-つ, つき-る, つく-す",
        "english": "all"
    },
    {
        "kanji": "殃",
        "onyomi": "オウ, ヨウ",
        "kunyomi": "わざわい",
        "english": "misfortune"
    },
    {
        "kanji": "殍",
        "onyomi": "ヒョウ, フ",
        "kunyomi": "うえじに",
        "english": "dying of starvation"
    },
    {
        "kanji": "殘",
        "onyomi": "ザン",
        "kunyomi": "のこ-る, のこ-す, そこな-う, のこ-り",
        "english": "leftover"
    },
    {
        "kanji": "殕",
        "onyomi": "フ",
        "kunyomi": "ね-る",
        "english": "grow mouldy"
    },
    {
        "kanji": "殞",
        "onyomi": "イン, ウン",
        "kunyomi": "おち-る, し-ぬ",
        "english": "fall"
    },
    {
        "kanji": "殤",
        "onyomi": "ショウ",
        "kunyomi": "わかじに",
        "english": "dying at a young age"
    },
    {
        "kanji": "殪",
        "onyomi": "エイ",
        "kunyomi": "たお-す",
        "english": "die"
    },
    {
        "kanji": "殫",
        "onyomi": "タン",
        "kunyomi": "つき-る",
        "english": "become exhausted"
    },
    {
        "kanji": "殯",
        "onyomi": "ヒン",
        "kunyomi": "かりもがり",
        "english": "lying in state"
    },
    {
        "kanji": "殲",
        "onyomi": "セン",
        "kunyomi": "つく-す, ほろぼ-す",
        "english": "massacre"
    },
    {
        "kanji": "殱",
        "onyomi": "セン",
        "kunyomi": "つく-す, ほろぼ-す",
        "english": "massacre"
    },
    {
        "kanji": "殳",
        "onyomi": "シュ",
        "kunyomi": "また, ほこ",
        "english": "pike"
    },
    {
        "kanji": "殷",
        "onyomi": "イン, アン",
        "kunyomi": "さかん",
        "english": "flourishing"
    },
    {
        "kanji": "殼",
        "onyomi": "カク, コク, バイ",
        "kunyomi": "から",
        "english": "husk"
    },
    {
        "kanji": "毆",
        "onyomi": "オウ, ク",
        "kunyomi": "なぐ-る, たた-く",
        "english": "beat"
    },
    {
        "kanji": "毋",
        "onyomi": "ブ, ム",
        "kunyomi": "はは, ぼ, ない, なか-れ",
        "english": "do not"
    },
    {
        "kanji": "毓",
        "onyomi": "イク",
        "kunyomi": "そだ-つ, そだ-てる, はぐく-む",
        "english": "bring up"
    },
    {
        "kanji": "毟",
        "onyomi": "",
        "kunyomi": "むし-る",
        "english": "pluck"
    },
    {
        "kanji": "毬",
        "onyomi": "キュウ",
        "kunyomi": "いが, まり",
        "english": "burr"
    },
    {
        "kanji": "毫",
        "onyomi": "ゴウ, コウ",
        "kunyomi": "ごう-も, すこし",
        "english": "fine hair"
    },
    {
        "kanji": "毳",
        "onyomi": "ゼイ, セイ, セツ",
        "kunyomi": "けば, むくげ",
        "english": "nap"
    },
    {
        "kanji": "毯",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "wool rug"
    },
    {
        "kanji": "麾",
        "onyomi": "キ",
        "kunyomi": "さしまね-く, さしずばた",
        "english": "beckon to"
    },
    {
        "kanji": "氈",
        "onyomi": "セン",
        "kunyomi": "もうせん",
        "english": "woollen cloth or rug"
    },
    {
        "kanji": "氓",
        "onyomi": "ボウ",
        "kunyomi": "たみ",
        "english": "people"
    },
    {
        "kanji": "气",
        "onyomi": "キ, ケ",
        "kunyomi": "いき",
        "english": "spirit"
    },
    {
        "kanji": "氛",
        "onyomi": "フン",
        "kunyomi": "",
        "english": "air"
    },
    {
        "kanji": "氤",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "spirited"
    },
    {
        "kanji": "氣",
        "onyomi": "キ, ケ",
        "kunyomi": "いき",
        "english": "spirit"
    },
    {
        "kanji": "汞",
        "onyomi": "コウ",
        "kunyomi": "みずがね",
        "english": "mercury"
    },
    {
        "kanji": "汕",
        "onyomi": "サン",
        "kunyomi": "",
        "english": "fish swimming"
    },
    {
        "kanji": "汢",
        "onyomi": "",
        "kunyomi": "ねた",
        "english": "wetland"
    },
    {
        "kanji": "汪",
        "onyomi": "オウ",
        "kunyomi": "",
        "english": "flowing full"
    },
    {
        "kanji": "沂",
        "onyomi": "ギ, キ, ギン",
        "kunyomi": "",
        "english": "name of a Chinese river"
    },
    {
        "kanji": "沍",
        "onyomi": "ゴ, コ",
        "kunyomi": "さ-える, こお-る, ひ-える",
        "english": "close up"
    },
    {
        "kanji": "沚",
        "onyomi": "シ",
        "kunyomi": "なぎさ",
        "english": "shore"
    },
    {
        "kanji": "沁",
        "onyomi": "シン",
        "kunyomi": "し-みる",
        "english": "penetrate"
    },
    {
        "kanji": "沛",
        "onyomi": "ハイ",
        "kunyomi": "",
        "english": "big rain"
    },
    {
        "kanji": "汾",
        "onyomi": "フン",
        "kunyomi": "",
        "english": "name of a Chinese river"
    },
    {
        "kanji": "汨",
        "onyomi": "コツ, イツ, ベキ",
        "kunyomi": "しず-む",
        "english": "to sink"
    },
    {
        "kanji": "汳",
        "onyomi": "ヘン, ベン",
        "kunyomi": "",
        "english": "proper name"
    },
    {
        "kanji": "沒",
        "onyomi": "ボツ, モツ",
        "kunyomi": "おぼ-れる, しず-む, ない",
        "english": "not"
    },
    {
        "kanji": "沐",
        "onyomi": "モク",
        "kunyomi": "もく-する, あら-う",
        "english": "wash"
    },
    {
        "kanji": "泄",
        "onyomi": "セツ, エイ",
        "kunyomi": "も-れる",
        "english": "leak"
    },
    {
        "kanji": "泱",
        "onyomi": "オウ",
        "kunyomi": "",
        "english": "billowy clouds"
    },
    {
        "kanji": "泓",
        "onyomi": "オウ",
        "kunyomi": "ふか-い",
        "english": "deep clear water"
    },
    {
        "kanji": "沽",
        "onyomi": "コ",
        "kunyomi": "あた-い, あら-い, う-る",
        "english": "price"
    },
    {
        "kanji": "泗",
        "onyomi": "シ",
        "kunyomi": "なみだ",
        "english": "name of a Chinese river"
    },
    {
        "kanji": "泅",
        "onyomi": "シュウ",
        "kunyomi": "およぐ",
        "english": "swim"
    },
    {
        "kanji": "泝",
        "onyomi": "ソ",
        "kunyomi": "さかのぼる",
        "english": "go upstream"
    },
    {
        "kanji": "沮",
        "onyomi": "ソ, ショ",
        "kunyomi": "はば-む",
        "english": "stop"
    },
    {
        "kanji": "沱",
        "onyomi": "タ, ダ",
        "kunyomi": "",
        "english": "flowing of tears"
    },
    {
        "kanji": "沾",
        "onyomi": "セン, チョウ, テン",
        "kunyomi": "うるお-う, うるお-す",
        "english": "moisten"
    },
    {
        "kanji": "沺",
        "onyomi": "デン",
        "kunyomi": "",
        "english": "vast surging waters"
    },
    {
        "kanji": "泛",
        "onyomi": "ハン, ホウ",
        "kunyomi": "うか-ぶ",
        "english": "to drift"
    },
    {
        "kanji": "泯",
        "onyomi": "ビン, ベン, ミン, メン",
        "kunyomi": "ほろ-びる",
        "english": "die out"
    },
    {
        "kanji": "泙",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "surging water"
    },
    {
        "kanji": "泪",
        "onyomi": "ルイ, レイ",
        "kunyomi": "なみだ",
        "english": "tears"
    },
    {
        "kanji": "洟",
        "onyomi": "イ, テイ",
        "kunyomi": "はなしる, はなじる",
        "english": "tear"
    },
    {
        "kanji": "衍",
        "onyomi": "エン",
        "kunyomi": "あまり, しく, はびこ-る",
        "english": "overflowing"
    },
    {
        "kanji": "洶",
        "onyomi": "キョウ",
        "kunyomi": "わ-く",
        "english": "gush forth"
    },
    {
        "kanji": "洫",
        "onyomi": "キョク",
        "kunyomi": "みぞ",
        "english": "ditch"
    },
    {
        "kanji": "洽",
        "onyomi": "コウ",
        "kunyomi": "あまねし, うるお-す",
        "english": "far and wide"
    },
    {
        "kanji": "洸",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "sparkling water"
    },
    {
        "kanji": "洙",
        "onyomi": "シュ",
        "kunyomi": "",
        "english": "name of a Chinese river"
    },
    {
        "kanji": "洵",
        "onyomi": "ジュン, シュン",
        "kunyomi": "の-ぶ, まこと-に",
        "english": "alike"
    },
    {
        "kanji": "洳",
        "onyomi": "ジュ",
        "kunyomi": "",
        "english": "wet"
    },
    {
        "kanji": "洒",
        "onyomi": "シャ, ソン, サイ, セン, セイ",
        "kunyomi": "すす-ぐ, あら-う",
        "english": "wash"
    },
    {
        "kanji": "洌",
        "onyomi": "レツ, レイ",
        "kunyomi": "きよ-い",
        "english": "pure"
    },
    {
        "kanji": "浣",
        "onyomi": "カン",
        "kunyomi": "あら-う",
        "english": "wash"
    },
    {
        "kanji": "涓",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "drop"
    },
    {
        "kanji": "浤",
        "onyomi": "コウ",
        "kunyomi": "ふか-い",
        "english": "rising waters"
    },
    {
        "kanji": "浚",
        "onyomi": "シュン",
        "kunyomi": "さら-える, さら-う",
        "english": "dredge"
    },
    {
        "kanji": "浹",
        "onyomi": "ショウ",
        "kunyomi": "あまねし",
        "english": "far and wide"
    },
    {
        "kanji": "浙",
        "onyomi": "セツ",
        "kunyomi": "",
        "english": "name of a Chinese river"
    },
    {
        "kanji": "涎",
        "onyomi": "セン, エン",
        "kunyomi": "よだれ",
        "english": "saliva"
    },
    {
        "kanji": "涕",
        "onyomi": "テイ",
        "kunyomi": "なみだ, な-く",
        "english": "tears"
    },
    {
        "kanji": "濤",
        "onyomi": "トウ",
        "kunyomi": "なみ",
        "english": "waves"
    },
    {
        "kanji": "涅",
        "onyomi": "ネツ, デツ",
        "kunyomi": "そ-める",
        "english": "black soil"
    },
    {
        "kanji": "淹",
        "onyomi": "エン",
        "kunyomi": "い-れる",
        "english": "dip"
    },
    {
        "kanji": "渕",
        "onyomi": "エン, カク, コウ",
        "kunyomi": "ふち, かた-い, はなわ",
        "english": "edge"
    },
    {
        "kanji": "渊",
        "onyomi": "エン, カク, コウ",
        "kunyomi": "ふち, かた-い, はなわ",
        "english": "edge"
    },
    {
        "kanji": "涵",
        "onyomi": "カン",
        "kunyomi": "ひた-す",
        "english": "immerse"
    },
    {
        "kanji": "淇",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "name of a Chinese river"
    },
    {
        "kanji": "淦",
        "onyomi": "カン, コン",
        "kunyomi": "あか",
        "english": "bilge water"
    },
    {
        "kanji": "涸",
        "onyomi": "コ, カク",
        "kunyomi": "か-れる, か-らす, こお-る",
        "english": "dry up"
    },
    {
        "kanji": "淆",
        "onyomi": "コウ",
        "kunyomi": "ま-じる",
        "english": "turbidity"
    },
    {
        "kanji": "淬",
        "onyomi": "サイ",
        "kunyomi": "にらぐ",
        "english": "anneal"
    },
    {
        "kanji": "淞",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "name of a Chinese river"
    },
    {
        "kanji": "淌",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "flow"
    },
    {
        "kanji": "淨",
        "onyomi": "ジョウ, セイ",
        "kunyomi": "きよ-める, きよ-い",
        "english": "pure"
    },
    {
        "kanji": "淒",
        "onyomi": "セイ, サイ",
        "kunyomi": "すご-む, さむ-い, すご-い, すさ-まじい",
        "english": "bitter cold"
    },
    {
        "kanji": "淅",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "wash rice"
    },
    {
        "kanji": "淺",
        "onyomi": "セン",
        "kunyomi": "あさ-い",
        "english": "shallow"
    },
    {
        "kanji": "淙",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "sound of running water"
    },
    {
        "kanji": "淤",
        "onyomi": "オ, ヨ",
        "kunyomi": "どろ",
        "english": "mud"
    },
    {
        "kanji": "淕",
        "onyomi": "リク, ロク",
        "kunyomi": "",
        "english": "sleet"
    },
    {
        "kanji": "淪",
        "onyomi": "リン, ロン",
        "kunyomi": "しず-む",
        "english": "sink"
    },
    {
        "kanji": "淮",
        "onyomi": "ワイ, エ, カイ",
        "kunyomi": "",
        "english": "name of a Chinese river"
    },
    {
        "kanji": "渭",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "name of Chinese river"
    },
    {
        "kanji": "湮",
        "onyomi": "イン, エン",
        "kunyomi": "しず-む, ふさ-ぐ",
        "english": "sink"
    },
    {
        "kanji": "渮",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "name of Chinese river"
    },
    {
        "kanji": "渙",
        "onyomi": "カン",
        "kunyomi": "あきらか",
        "english": "scatter"
    },
    {
        "kanji": "湲",
        "onyomi": "エン, カン",
        "kunyomi": "",
        "english": "flowing water"
    },
    {
        "kanji": "湟",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "moat"
    },
    {
        "kanji": "渾",
        "onyomi": "コン",
        "kunyomi": "すべ-て, にご-る",
        "english": "all"
    },
    {
        "kanji": "渣",
        "onyomi": "サ",
        "kunyomi": "",
        "english": "dregs"
    },
    {
        "kanji": "湫",
        "onyomi": "シュウ, ショウ",
        "kunyomi": "くて, くで",
        "english": "wetlands"
    },
    {
        "kanji": "渫",
        "onyomi": "セツ, チョウ",
        "kunyomi": "さら-う",
        "english": "dredging"
    },
    {
        "kanji": "湶",
        "onyomi": "セン",
        "kunyomi": "いずみ, ぜに",
        "english": "spring"
    },
    {
        "kanji": "湍",
        "onyomi": "タン",
        "kunyomi": "はや-い, はやせ",
        "english": "rapids"
    },
    {
        "kanji": "渟",
        "onyomi": "テイ",
        "kunyomi": "とど-まる",
        "english": "stop"
    },
    {
        "kanji": "湃",
        "onyomi": "ハイ",
        "kunyomi": "",
        "english": "sound of waves"
    },
    {
        "kanji": "渺",
        "onyomi": "ビョウ",
        "kunyomi": "びょう-たる",
        "english": "tiny"
    },
    {
        "kanji": "湎",
        "onyomi": "メン, ベン",
        "kunyomi": "おぼ-れる, しず-む",
        "english": "drown"
    },
    {
        "kanji": "渤",
        "onyomi": "ボツ, ホツ",
        "kunyomi": "",
        "english": "place name"
    },
    {
        "kanji": "滿",
        "onyomi": "マン, バン",
        "kunyomi": "み-ちる, み-つ, み-たす",
        "english": "fill"
    },
    {
        "kanji": "渝",
        "onyomi": "ユ",
        "kunyomi": "かわ-る",
        "english": "change"
    },
    {
        "kanji": "游",
        "onyomi": "ユウ, リュウ",
        "kunyomi": "あそ-び, あそ-ぶ, およ-ぐ",
        "english": "float"
    },
    {
        "kanji": "溂",
        "onyomi": "ラツ",
        "kunyomi": "",
        "english": "opposed"
    },
    {
        "kanji": "溪",
        "onyomi": "ケイ",
        "kunyomi": "たに, たにがわ",
        "english": "valley"
    },
    {
        "kanji": "溘",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "sudden"
    },
    {
        "kanji": "滉",
        "onyomi": "コウ",
        "kunyomi": "ひろ-い",
        "english": "deep and broad (water)"
    },
    {
        "kanji": "溷",
        "onyomi": "コン",
        "kunyomi": "かわや, けが-れる, にご-る, みだ-れる",
        "english": "get muddy"
    },
    {
        "kanji": "滓",
        "onyomi": "シ, サイ",
        "kunyomi": "おり, かす",
        "english": "dregs"
    },
    {
        "kanji": "溽",
        "onyomi": "ヒョク, ジョク",
        "kunyomi": "むしあつ-い",
        "english": "humid"
    },
    {
        "kanji": "溯",
        "onyomi": "ソ, サク",
        "kunyomi": "さかのぼ-る",
        "english": "go upstream"
    },
    {
        "kanji": "滄",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "ocean"
    },
    {
        "kanji": "溲",
        "onyomi": "シュ, シュウ, ソウ",
        "kunyomi": "いばり, ひた-す",
        "english": "urine"
    },
    {
        "kanji": "滔",
        "onyomi": "トウ",
        "kunyomi": "はびこ-る",
        "english": "overflowing"
    },
    {
        "kanji": "滕",
        "onyomi": "トウ",
        "kunyomi": "わ-く",
        "english": "rising water"
    },
    {
        "kanji": "溏",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "mud"
    },
    {
        "kanji": "溥",
        "onyomi": "フ, ハク",
        "kunyomi": "あまねし",
        "english": "far and wide"
    },
    {
        "kanji": "滂",
        "onyomi": "ホウ, ボウ",
        "kunyomi": "",
        "english": "flowing"
    },
    {
        "kanji": "溟",
        "onyomi": "メイ",
        "kunyomi": "うみ, くら-い",
        "english": "dark"
    },
    {
        "kanji": "潁",
        "onyomi": "エイ",
        "kunyomi": "",
        "english": "name of a Chinese river"
    },
    {
        "kanji": "漑",
        "onyomi": "ガイ, カイ",
        "kunyomi": "そそ-ぐ",
        "english": "pour"
    },
    {
        "kanji": "灌",
        "onyomi": "カン",
        "kunyomi": "そそ-ぐ",
        "english": "pour"
    },
    {
        "kanji": "滬",
        "onyomi": "コウ, コ",
        "kunyomi": "",
        "english": "weir"
    },
    {
        "kanji": "滸",
        "onyomi": "コ",
        "kunyomi": "ほとり",
        "english": "vicinity"
    },
    {
        "kanji": "滾",
        "onyomi": "コン",
        "kunyomi": "たぎ-る, たぎ-らかす",
        "english": "flow"
    },
    {
        "kanji": "漿",
        "onyomi": "ショウ",
        "kunyomi": "こんず",
        "english": "a drink"
    },
    {
        "kanji": "滲",
        "onyomi": "シン",
        "kunyomi": "し-みる, にじ-む",
        "english": "imbued with"
    },
    {
        "kanji": "漱",
        "onyomi": "ソウ, シュウ, ス",
        "kunyomi": "くちすす-ぐ, くちそそ-ぐ, うがい, すす-ぐ",
        "english": "gargle"
    },
    {
        "kanji": "滯",
        "onyomi": "タイ, テイ",
        "kunyomi": "とどこお-る",
        "english": "block up"
    },
    {
        "kanji": "漲",
        "onyomi": "チョウ",
        "kunyomi": "みなぎ-る",
        "english": "overflow"
    },
    {
        "kanji": "滌",
        "onyomi": "デキ, テキ, ジョウ",
        "kunyomi": "あら-う",
        "english": "rinse"
    },
    {
        "kanji": "漾",
        "onyomi": "ヨウ",
        "kunyomi": "ただよ-う",
        "english": "drift"
    },
    {
        "kanji": "漓",
        "onyomi": "リ",
        "kunyomi": "うす-い",
        "english": "dropping"
    },
    {
        "kanji": "滷",
        "onyomi": "ロ",
        "kunyomi": "",
        "english": "brine"
    },
    {
        "kanji": "澆",
        "onyomi": "ギョウ",
        "kunyomi": "そそ-ぐ",
        "english": "sprinkle"
    },
    {
        "kanji": "潺",
        "onyomi": "セン, サン",
        "kunyomi": "",
        "english": "sound of flowing water"
    },
    {
        "kanji": "潸",
        "onyomi": "サン",
        "kunyomi": "",
        "english": "flowing of tears"
    },
    {
        "kanji": "澁",
        "onyomi": "ジュウ, シュウ",
        "kunyomi": "しぶ, しぶ-い, しぶ-る",
        "english": "astringent"
    },
    {
        "kanji": "澀",
        "onyomi": "ジュウ, シュウ",
        "kunyomi": "しぶ, しぶ-い, しぶ-る",
        "english": "astringent"
    },
    {
        "kanji": "潯",
        "onyomi": "ジン",
        "kunyomi": "ふち",
        "english": "shore"
    },
    {
        "kanji": "潛",
        "onyomi": "セン",
        "kunyomi": "ひそ-む, もぐ-る, かく-れる, くぐ-る, ひそ-める",
        "english": "conceal"
    },
    {
        "kanji": "濳",
        "onyomi": "セン",
        "kunyomi": "ひそ-む, もぐ-る, かく-れる, くぐ-る, ひそ-める",
        "english": "hide"
    },
    {
        "kanji": "潭",
        "onyomi": "タン, ジン",
        "kunyomi": "ふち, ふか-い",
        "english": "deep water"
    },
    {
        "kanji": "澂",
        "onyomi": "チョウ",
        "kunyomi": "すま-す, す-む",
        "english": "clear and still water"
    },
    {
        "kanji": "潼",
        "onyomi": "ドウ, トウ",
        "kunyomi": "",
        "english": "high"
    },
    {
        "kanji": "潘",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "water in which rice has been washed"
    },
    {
        "kanji": "澎",
        "onyomi": "ホウ, ヒョウ",
        "kunyomi": "",
        "english": "turbulent water"
    },
    {
        "kanji": "澑",
        "onyomi": "リュウ",
        "kunyomi": "た-まる, たま-る, た-める, したた-る, たまり, ため",
        "english": "slide"
    },
    {
        "kanji": "濂",
        "onyomi": "レン",
        "kunyomi": "",
        "english": "name of Chinese river"
    },
    {
        "kanji": "潦",
        "onyomi": "ロウ",
        "kunyomi": "にわたずみ",
        "english": "heavy rainfall"
    },
    {
        "kanji": "澳",
        "onyomi": "オウ, イク, オク",
        "kunyomi": "おき, くま",
        "english": "curving shoreline"
    },
    {
        "kanji": "澣",
        "onyomi": "カン",
        "kunyomi": "あら-う",
        "english": "wash"
    },
    {
        "kanji": "澡",
        "onyomi": "ソウ",
        "kunyomi": "あら-う",
        "english": "wash"
    },
    {
        "kanji": "澤",
        "onyomi": "タク",
        "kunyomi": "さわ, うるお-い, うるお-す, つや",
        "english": "swamp"
    },
    {
        "kanji": "澹",
        "onyomi": "タン, セン",
        "kunyomi": "あわ-い",
        "english": "calm"
    },
    {
        "kanji": "濆",
        "onyomi": "フン, ホン",
        "kunyomi": "ほとり, わ-く",
        "english": "gush forth"
    },
    {
        "kanji": "澪",
        "onyomi": "レイ",
        "kunyomi": "みお",
        "english": "water route"
    },
    {
        "kanji": "濟",
        "onyomi": "サイ, セイ",
        "kunyomi": "す-む, す-ます, すく-う, な-す, わた-す, わた-る",
        "english": "to help"
    },
    {
        "kanji": "濕",
        "onyomi": "シツ, シュウ",
        "kunyomi": "しめ-る, しめ-す, うるお-う, うるお-す",
        "english": "wet"
    },
    {
        "kanji": "濬",
        "onyomi": "シュン",
        "kunyomi": "さら-う",
        "english": "deep"
    },
    {
        "kanji": "濔",
        "onyomi": "ビ",
        "kunyomi": "",
        "english": "much"
    },
    {
        "kanji": "濘",
        "onyomi": "ネイ",
        "kunyomi": "ぬか-る",
        "english": "muddiness"
    },
    {
        "kanji": "濱",
        "onyomi": "ヒン",
        "kunyomi": "はま",
        "english": "beach"
    },
    {
        "kanji": "濮",
        "onyomi": "ボク, ホク",
        "kunyomi": "",
        "english": "name of Chinese river"
    },
    {
        "kanji": "濛",
        "onyomi": "モウ",
        "kunyomi": "こさめ",
        "english": "dark"
    },
    {
        "kanji": "瀉",
        "onyomi": "シャ",
        "kunyomi": "くだ-す, は-く",
        "english": "evacuation"
    },
    {
        "kanji": "瀋",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "juice"
    },
    {
        "kanji": "濺",
        "onyomi": "セン",
        "kunyomi": "そそ-ぐ",
        "english": "sprinkle"
    },
    {
        "kanji": "瀑",
        "onyomi": "バク, ハク, ホウ, ボウ, ホク, ボク",
        "kunyomi": "たき, にわかあめ",
        "english": "waterfall"
    },
    {
        "kanji": "瀁",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "drift"
    },
    {
        "kanji": "瀏",
        "onyomi": "リュウ",
        "kunyomi": "きよ-い",
        "english": "clear"
    },
    {
        "kanji": "濾",
        "onyomi": "ロ, リョ",
        "kunyomi": "こ-す",
        "english": "filter"
    },
    {
        "kanji": "瀛",
        "onyomi": "エイ",
        "kunyomi": "うみ",
        "english": "ocean"
    },
    {
        "kanji": "瀚",
        "onyomi": "カン",
        "kunyomi": "ひろ-い",
        "english": "wide & large"
    },
    {
        "kanji": "潴",
        "onyomi": "チョ",
        "kunyomi": "",
        "english": "pond"
    },
    {
        "kanji": "瀝",
        "onyomi": "レキ",
        "kunyomi": "したた-る",
        "english": "dropping"
    },
    {
        "kanji": "瀘",
        "onyomi": "ロ",
        "kunyomi": "",
        "english": "name of river in China"
    },
    {
        "kanji": "瀟",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "pure"
    },
    {
        "kanji": "瀰",
        "onyomi": "ビ, ミ",
        "kunyomi": "",
        "english": "copious flow"
    },
    {
        "kanji": "瀾",
        "onyomi": "ラン",
        "kunyomi": "なみ",
        "english": "large waves"
    },
    {
        "kanji": "瀲",
        "onyomi": "レン",
        "kunyomi": "なぎさ",
        "english": "brimming"
    },
    {
        "kanji": "灑",
        "onyomi": "シャ, サイ, サ, セ",
        "kunyomi": "そそ-ぐ",
        "english": "sprinkle"
    },
    {
        "kanji": "灣",
        "onyomi": "ワン",
        "kunyomi": "いりえ",
        "english": "gulf"
    },
    {
        "kanji": "炙",
        "onyomi": "シャ, セキ",
        "kunyomi": "あぶ-る",
        "english": "roast"
    },
    {
        "kanji": "炒",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "い-る, いた-める",
        "english": "broil"
    },
    {
        "kanji": "炯",
        "onyomi": "ケイ, キョウ",
        "kunyomi": "あきらか",
        "english": "light"
    },
    {
        "kanji": "烱",
        "onyomi": "ケイ, キョウ",
        "kunyomi": "あきらか",
        "english": "light"
    },
    {
        "kanji": "炬",
        "onyomi": "コ, キョ",
        "kunyomi": "",
        "english": "torch"
    },
    {
        "kanji": "炸",
        "onyomi": "タク, サ, サク",
        "kunyomi": "",
        "english": "frying"
    },
    {
        "kanji": "炳",
        "onyomi": "ヘイ",
        "kunyomi": "あきらか",
        "english": "clear & bright"
    },
    {
        "kanji": "炮",
        "onyomi": "ホウ",
        "kunyomi": "あぶ-る",
        "english": "burn"
    },
    {
        "kanji": "烟",
        "onyomi": "エン",
        "kunyomi": "けむ-る, けむり, けむ-い",
        "english": "smoke"
    },
    {
        "kanji": "烋",
        "onyomi": "コウ, キュウ, キョウ",
        "kunyomi": "",
        "english": "boasting"
    },
    {
        "kanji": "烝",
        "onyomi": "ジョウ, ショウ",
        "kunyomi": "む-す, もろもろ",
        "english": "many"
    },
    {
        "kanji": "烙",
        "onyomi": "ラク, カク",
        "kunyomi": "や-く",
        "english": "burn"
    },
    {
        "kanji": "焉",
        "onyomi": "エン",
        "kunyomi": "いずく-んぞ, ここに, これ",
        "english": "how"
    },
    {
        "kanji": "烽",
        "onyomi": "ホウ",
        "kunyomi": "のろし, とぶひ",
        "english": "signal fire"
    },
    {
        "kanji": "焜",
        "onyomi": "コン",
        "kunyomi": "かがや-く",
        "english": "shine"
    },
    {
        "kanji": "焙",
        "onyomi": "ホウ, ハイ",
        "kunyomi": "ほう-じる, あぶ-る",
        "english": "fire"
    },
    {
        "kanji": "煥",
        "onyomi": "カン",
        "kunyomi": "あきらか",
        "english": "shine"
    },
    {
        "kanji": "煕",
        "onyomi": "キ",
        "kunyomi": "たのし-む, ひか-る, ひろ-い, よろこ-ぶ, かわ-く, あきらか, ひろ-める, ひろ-まる",
        "english": "shine"
    },
    {
        "kanji": "熈",
        "onyomi": "キ",
        "kunyomi": "たのし-む, ひか-る, ひろ-い, よろこ-ぶ, かわ-く, あきらか, ひろ-める, ひろ-まる",
        "english": "shine"
    },
    {
        "kanji": "煦",
        "onyomi": "ク",
        "kunyomi": "あたた-める",
        "english": "warm"
    },
    {
        "kanji": "煢",
        "onyomi": "ケイ",
        "kunyomi": "ひとりもの",
        "english": "all alone"
    },
    {
        "kanji": "煌",
        "onyomi": "コウ",
        "kunyomi": "きらめ-く, きら-めく, かがや-く",
        "english": "glitter"
    },
    {
        "kanji": "煖",
        "onyomi": "ダン, カン, ケン, ナン",
        "kunyomi": "あたた-か, あたた-める",
        "english": "warm"
    },
    {
        "kanji": "煬",
        "onyomi": "ヨウ",
        "kunyomi": "あぶ-る, や-く",
        "english": "roast"
    },
    {
        "kanji": "熏",
        "onyomi": "クン",
        "kunyomi": "くす-べる, ふす-べる, いぶ-す, いぶ-る, くす-ぶる, くゆ-らす",
        "english": "smoke"
    },
    {
        "kanji": "燻",
        "onyomi": "クン",
        "kunyomi": "くす-べる, ふす-べる, いぶ-す, いぶ-る, くす-ぶる, くゆ-らす",
        "english": "smoulder"
    },
    {
        "kanji": "熄",
        "onyomi": "ソク",
        "kunyomi": "き-える, や-む",
        "english": "cessation"
    },
    {
        "kanji": "熕",
        "onyomi": "",
        "kunyomi": "おおづつ",
        "english": "cannon"
    },
    {
        "kanji": "熨",
        "onyomi": "イ, ウツ",
        "kunyomi": "のし, おさ-える, の-す, ひのし",
        "english": "flatiron"
    },
    {
        "kanji": "熬",
        "onyomi": "ゴウ",
        "kunyomi": "い-る",
        "english": "parch"
    },
    {
        "kanji": "燗",
        "onyomi": "ラン, カン",
        "kunyomi": "かん-する",
        "english": "warming sake"
    },
    {
        "kanji": "熹",
        "onyomi": "キ",
        "kunyomi": "あぶ-る, あかるい",
        "english": "burn"
    },
    {
        "kanji": "熾",
        "onyomi": "シ",
        "kunyomi": "おこ-る, おこ-す, さかん",
        "english": "kindling fire"
    },
    {
        "kanji": "燒",
        "onyomi": "ショウ",
        "kunyomi": "や-く, や-ける",
        "english": "burn"
    },
    {
        "kanji": "燉",
        "onyomi": "トン",
        "kunyomi": "",
        "english": "fiery"
    },
    {
        "kanji": "燔",
        "onyomi": "ハン",
        "kunyomi": "や-く",
        "english": "burn"
    },
    {
        "kanji": "燎",
        "onyomi": "リョウ",
        "kunyomi": "かがりび",
        "english": "burn"
    },
    {
        "kanji": "燠",
        "onyomi": "ウ, イク, オウ",
        "kunyomi": "おき, あたたか-い",
        "english": "embers"
    },
    {
        "kanji": "燬",
        "onyomi": "キ",
        "kunyomi": "や-く",
        "english": "blaze"
    },
    {
        "kanji": "燧",
        "onyomi": "スイ",
        "kunyomi": "ひうち, ひきり, のろし",
        "english": "signal fire"
    },
    {
        "kanji": "燵",
        "onyomi": "タツ",
        "kunyomi": "",
        "english": "foot warmer"
    },
    {
        "kanji": "燼",
        "onyomi": "ジン",
        "kunyomi": "もえのこり",
        "english": "embers"
    },
    {
        "kanji": "燹",
        "onyomi": "セン",
        "kunyomi": "のび",
        "english": "prairie fire"
    },
    {
        "kanji": "燿",
        "onyomi": "ヨウ",
        "kunyomi": "かがや-く, ひかり",
        "english": "shine"
    },
    {
        "kanji": "爍",
        "onyomi": "シャク",
        "kunyomi": "とか-す, ひか-る",
        "english": "shine"
    },
    {
        "kanji": "爐",
        "onyomi": "ロ",
        "kunyomi": "いろり",
        "english": "fireplace"
    },
    {
        "kanji": "爛",
        "onyomi": "ラン",
        "kunyomi": "ただ-れる",
        "english": "be sore"
    },
    {
        "kanji": "爨",
        "onyomi": "サン",
        "kunyomi": "かし-ぐ, かまど",
        "english": "cook"
    },
    {
        "kanji": "爭",
        "onyomi": "ソウ",
        "kunyomi": "あらそ-う, いか-でか",
        "english": "to dispute"
    },
    {
        "kanji": "爬",
        "onyomi": "ハ",
        "kunyomi": "か-く, は-う",
        "english": "scratch"
    },
    {
        "kanji": "爰",
        "onyomi": "エン",
        "kunyomi": "ここ-に",
        "english": "lead on to"
    },
    {
        "kanji": "爲",
        "onyomi": "イ",
        "kunyomi": "ため, な-る, な-す, す-る, たり, つく-る, なり",
        "english": "change"
    },
    {
        "kanji": "爻",
        "onyomi": "コウ, ギョウ",
        "kunyomi": "まじ-わる",
        "english": "to mix with"
    },
    {
        "kanji": "爼",
        "onyomi": "ソ, ショ",
        "kunyomi": "まないた",
        "english": "altar of sacrifice"
    },
    {
        "kanji": "爿",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "",
        "english": "left-side kata radical (no. 90)"
    },
    {
        "kanji": "牀",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "ゆか",
        "english": "bed"
    },
    {
        "kanji": "牆",
        "onyomi": "ショウ",
        "kunyomi": "かき",
        "english": "fence"
    },
    {
        "kanji": "牋",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "paper"
    },
    {
        "kanji": "牘",
        "onyomi": "トク",
        "kunyomi": "かきもの, ふだ",
        "english": "letter"
    },
    {
        "kanji": "牴",
        "onyomi": "テイ",
        "kunyomi": "ふ-れる",
        "english": "touch"
    },
    {
        "kanji": "牾",
        "onyomi": "ゴ",
        "kunyomi": "",
        "english": "go against"
    },
    {
        "kanji": "犂",
        "onyomi": "リ, レイ, リュウ",
        "kunyomi": "すき",
        "english": "plow"
    },
    {
        "kanji": "犁",
        "onyomi": "リ, レイ, リュウ",
        "kunyomi": "すき",
        "english": "plow"
    },
    {
        "kanji": "犇",
        "onyomi": "ホン",
        "kunyomi": "ひし-めく, ひしひし, はし-る",
        "english": "clamour"
    },
    {
        "kanji": "犒",
        "onyomi": "コウ",
        "kunyomi": "ねぎら-う",
        "english": "thanks"
    },
    {
        "kanji": "犖",
        "onyomi": "ラク",
        "kunyomi": "まだらうし",
        "english": "brindled cow"
    },
    {
        "kanji": "犢",
        "onyomi": "トク",
        "kunyomi": "こうし",
        "english": "calf"
    },
    {
        "kanji": "犧",
        "onyomi": "ギ, キ",
        "kunyomi": "いけにえ",
        "english": "sacrifice"
    },
    {
        "kanji": "犹",
        "onyomi": "ジョウ, ユウ, ヨウ",
        "kunyomi": "なお",
        "english": "condition"
    },
    {
        "kanji": "犲",
        "onyomi": "サイ",
        "kunyomi": "やまいぬ",
        "english": "wolf"
    },
    {
        "kanji": "狃",
        "onyomi": "ジュウ",
        "kunyomi": "な-れる, なら-う",
        "english": "get used to"
    },
    {
        "kanji": "狆",
        "onyomi": "チュウ",
        "kunyomi": "ちん",
        "english": "Pekinese dog"
    },
    {
        "kanji": "狄",
        "onyomi": "テキ",
        "kunyomi": "えびす",
        "english": "barbarian"
    },
    {
        "kanji": "狎",
        "onyomi": "オウ, コウ",
        "kunyomi": "な-れる, あなど-る",
        "english": "get used to"
    },
    {
        "kanji": "狒",
        "onyomi": "ヒ",
        "kunyomi": "ひひ",
        "english": "baboon"
    },
    {
        "kanji": "狢",
        "onyomi": "カク, ハク, バク",
        "kunyomi": "むじな",
        "english": "badger"
    },
    {
        "kanji": "狠",
        "onyomi": "ガン, ゲン, コン",
        "kunyomi": "もと-る",
        "english": "vicious"
    },
    {
        "kanji": "狡",
        "onyomi": "コウ, キョウ",
        "kunyomi": "ずる-い, こす-い, わるがしこ-い",
        "english": "cunning"
    },
    {
        "kanji": "狹",
        "onyomi": "キョウ, コウ",
        "kunyomi": "せま-い, せば-める, せば-まる, さ",
        "english": "narrow"
    },
    {
        "kanji": "狷",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "short-tempered"
    },
    {
        "kanji": "倏",
        "onyomi": "シュク",
        "kunyomi": "たちまち",
        "english": "quick"
    },
    {
        "kanji": "猗",
        "onyomi": "イ, ア",
        "kunyomi": "ああ",
        "english": "luxuriant growth"
    },
    {
        "kanji": "猊",
        "onyomi": "ゲイ",
        "kunyomi": "",
        "english": "lion"
    },
    {
        "kanji": "猜",
        "onyomi": "サイ",
        "kunyomi": "そね-む",
        "english": "envy"
    },
    {
        "kanji": "猖",
        "onyomi": "ショウ",
        "kunyomi": "くる-う",
        "english": "be insane"
    },
    {
        "kanji": "猝",
        "onyomi": "ソツ",
        "kunyomi": "にわか",
        "english": "sudden"
    },
    {
        "kanji": "猴",
        "onyomi": "コウ",
        "kunyomi": "さる",
        "english": "monkey"
    },
    {
        "kanji": "猯",
        "onyomi": "タン",
        "kunyomi": "いのしし, まみ",
        "english": "wild boar"
    },
    {
        "kanji": "猩",
        "onyomi": "ショウ, セイ, ソウ",
        "kunyomi": "しょうじょう",
        "english": "orangutan"
    },
    {
        "kanji": "猥",
        "onyomi": "ワイ",
        "kunyomi": "みだ-ら, みだり-に",
        "english": "obscene"
    },
    {
        "kanji": "猾",
        "onyomi": "カツ",
        "kunyomi": "わるがしこ-い",
        "english": "crafty"
    },
    {
        "kanji": "獎",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "すす-める",
        "english": "prize"
    },
    {
        "kanji": "獏",
        "onyomi": "バク, ミャク",
        "kunyomi": "",
        "english": "tapir"
    },
    {
        "kanji": "默",
        "onyomi": "ボク, モク",
        "kunyomi": "だ-まる, もだ-す",
        "english": "silent"
    },
    {
        "kanji": "獗",
        "onyomi": "ケツ",
        "kunyomi": "",
        "english": "storm around"
    },
    {
        "kanji": "獪",
        "onyomi": "カイ",
        "kunyomi": "わるがしこ-い",
        "english": "crafty"
    },
    {
        "kanji": "獨",
        "onyomi": "ドク, トク",
        "kunyomi": "ひと-り",
        "english": "alone"
    },
    {
        "kanji": "獰",
        "onyomi": "ドウ, ネイ",
        "kunyomi": "わる-い",
        "english": "bad"
    },
    {
        "kanji": "獸",
        "onyomi": "ジュウ",
        "kunyomi": "けもの, けだもの",
        "english": "beast"
    },
    {
        "kanji": "獵",
        "onyomi": "リョウ, レフ",
        "kunyomi": "かり, か-る",
        "english": "hunt"
    },
    {
        "kanji": "獻",
        "onyomi": "ケン, コン",
        "kunyomi": "たてまつ-る",
        "english": "offer"
    },
    {
        "kanji": "獺",
        "onyomi": "ダツ, タツ",
        "kunyomi": "うそ, かわ, かわうそ",
        "english": "otter"
    },
    {
        "kanji": "珈",
        "onyomi": "カ",
        "kunyomi": "かみかざり",
        "english": "ornamental hairpin"
    },
    {
        "kanji": "玳",
        "onyomi": "タイ",
        "kunyomi": "たいまい",
        "english": "tortoise shell"
    },
    {
        "kanji": "珎",
        "onyomi": "チン",
        "kunyomi": "めずら-しい, たから",
        "english": "precious"
    },
    {
        "kanji": "玻",
        "onyomi": "ハ",
        "kunyomi": "",
        "english": "glass"
    },
    {
        "kanji": "珀",
        "onyomi": "ハク",
        "kunyomi": "",
        "english": "amber"
    },
    {
        "kanji": "珥",
        "onyomi": "ジ",
        "kunyomi": "みみだま",
        "english": "ear bauble"
    },
    {
        "kanji": "珮",
        "onyomi": "ハイ",
        "kunyomi": "おびだま",
        "english": "bauble"
    },
    {
        "kanji": "珞",
        "onyomi": "ラク",
        "kunyomi": "",
        "english": "necklace"
    },
    {
        "kanji": "璢",
        "onyomi": "ル, リュウ",
        "kunyomi": "",
        "english": "precious stone"
    },
    {
        "kanji": "琅",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "a precious stone"
    },
    {
        "kanji": "瑯",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "precious stone"
    },
    {
        "kanji": "琥",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "jewelled utensil"
    },
    {
        "kanji": "珸",
        "onyomi": "ゴ",
        "kunyomi": "",
        "english": "jewel"
    },
    {
        "kanji": "琲",
        "onyomi": "ハイ",
        "kunyomi": "つらぬく",
        "english": "string of many pearls"
    },
    {
        "kanji": "琺",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "enamel"
    },
    {
        "kanji": "瑕",
        "onyomi": "カ",
        "kunyomi": "あら, きず, なんぞ",
        "english": "flaw"
    },
    {
        "kanji": "琿",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "jewel"
    },
    {
        "kanji": "瑟",
        "onyomi": "シツ",
        "kunyomi": "おおごと",
        "english": "large koto"
    },
    {
        "kanji": "瑙",
        "onyomi": "ノウ",
        "kunyomi": "",
        "english": "agate"
    },
    {
        "kanji": "瑁",
        "onyomi": "マイ, バイ, ボウ, モウ",
        "kunyomi": "",
        "english": "ancient Chinese imperial jewels"
    },
    {
        "kanji": "瑜",
        "onyomi": "ユ",
        "kunyomi": "",
        "english": "jewel"
    },
    {
        "kanji": "瑩",
        "onyomi": "エイ",
        "kunyomi": "",
        "english": "clear"
    },
    {
        "kanji": "瑰",
        "onyomi": "カイ",
        "kunyomi": "たま, めずら-しい",
        "english": "strange"
    },
    {
        "kanji": "瑣",
        "onyomi": "サ",
        "kunyomi": "ちいさ-い, くさり",
        "english": "small"
    },
    {
        "kanji": "瑪",
        "onyomi": "メ, バ",
        "kunyomi": "",
        "english": "agate"
    },
    {
        "kanji": "瑶",
        "onyomi": "ヨウ",
        "kunyomi": "たま",
        "english": "beautiful as a jewel"
    },
    {
        "kanji": "瑾",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "jewel"
    },
    {
        "kanji": "璋",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "ceremonial jeweled implement"
    },
    {
        "kanji": "璞",
        "onyomi": "ハク",
        "kunyomi": "あらたま",
        "english": "uncut gem"
    },
    {
        "kanji": "璧",
        "onyomi": "ヘキ",
        "kunyomi": "たま",
        "english": "sphere"
    },
    {
        "kanji": "瓊",
        "onyomi": "ケイ",
        "kunyomi": "たま",
        "english": "red jewel"
    },
    {
        "kanji": "瓏",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "clarity"
    },
    {
        "kanji": "瓔",
        "onyomi": "エイ, ヨウ",
        "kunyomi": "",
        "english": "jewelled necklace"
    },
    {
        "kanji": "珱",
        "onyomi": "エイ, ヨウ",
        "kunyomi": "",
        "english": "a necklace made of precious stones"
    },
    {
        "kanji": "瓠",
        "onyomi": "コ, カク",
        "kunyomi": "ひさご",
        "english": "gourd"
    },
    {
        "kanji": "瓣",
        "onyomi": "ベン, ヘン",
        "kunyomi": "わきま-える, わ-ける, はなびら, あらそ-う",
        "english": "petal"
    },
    {
        "kanji": "瓧",
        "onyomi": "",
        "kunyomi": "デカグラム",
        "english": "ten grams"
    },
    {
        "kanji": "瓩",
        "onyomi": "",
        "kunyomi": "キログラム",
        "english": "kilogram"
    },
    {
        "kanji": "瓮",
        "onyomi": "オウ",
        "kunyomi": "もたい",
        "english": "jar"
    },
    {
        "kanji": "瓲",
        "onyomi": "",
        "kunyomi": "トン",
        "english": "tonne"
    },
    {
        "kanji": "瓰",
        "onyomi": "",
        "kunyomi": "デシグラム",
        "english": "decigram"
    },
    {
        "kanji": "瓱",
        "onyomi": "",
        "kunyomi": "ミリグラム",
        "english": "milligram"
    },
    {
        "kanji": "瓸",
        "onyomi": "",
        "kunyomi": "ヘクトグラム",
        "english": "hectogram"
    },
    {
        "kanji": "瓷",
        "onyomi": "シ",
        "kunyomi": "かめ",
        "english": "high quality porcelain"
    },
    {
        "kanji": "甄",
        "onyomi": "ケン, シン",
        "kunyomi": "すえ",
        "english": "porcelain"
    },
    {
        "kanji": "甃",
        "onyomi": "シュウ",
        "kunyomi": "しきがわら, いしだたみ",
        "english": "floor tile"
    },
    {
        "kanji": "甅",
        "onyomi": "",
        "kunyomi": "センチグラム",
        "english": "centigram"
    },
    {
        "kanji": "甌",
        "onyomi": "オウ",
        "kunyomi": "ほとぎ, はち, かめ",
        "english": "small jar"
    },
    {
        "kanji": "甎",
        "onyomi": "セン",
        "kunyomi": "しきがわら, かわら",
        "english": "floor tiles"
    },
    {
        "kanji": "甍",
        "onyomi": "ボウ, ミョウ",
        "kunyomi": "いらか",
        "english": "roof tile"
    },
    {
        "kanji": "甕",
        "onyomi": "オウ",
        "kunyomi": "かめ, みか",
        "english": "jar"
    },
    {
        "kanji": "甓",
        "onyomi": "ヘキ, ビャク",
        "kunyomi": "かわら",
        "english": "floor tiles"
    },
    {
        "kanji": "甞",
        "onyomi": "ショウ, ジョウ",
        "kunyomi": "かつ-て, な-める",
        "english": "lick"
    },
    {
        "kanji": "甦",
        "onyomi": "ソ, コウ",
        "kunyomi": "よみがえ-る",
        "english": "be resuscitated"
    },
    {
        "kanji": "甬",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "road with walls on both sides"
    },
    {
        "kanji": "甼",
        "onyomi": "チョウ",
        "kunyomi": "まち",
        "english": "town"
    },
    {
        "kanji": "畄",
        "onyomi": "リュウ, ル",
        "kunyomi": "と-める, と-まる, とど-める, とど-まる, るうぶる",
        "english": "fasten"
    },
    {
        "kanji": "畍",
        "onyomi": "カイ",
        "kunyomi": "さかい",
        "english": "circle"
    },
    {
        "kanji": "畊",
        "onyomi": "キョウ, コウ",
        "kunyomi": "たが-やす",
        "english": "plow"
    },
    {
        "kanji": "畉",
        "onyomi": "フ",
        "kunyomi": "たがや-す",
        "english": "till"
    },
    {
        "kanji": "畛",
        "onyomi": "シン",
        "kunyomi": "あぜ",
        "english": "boundary between paddies"
    },
    {
        "kanji": "畆",
        "onyomi": "ボウ, ホ, モ, ム",
        "kunyomi": "せ, うね",
        "english": "Chinese land measure"
    },
    {
        "kanji": "畚",
        "onyomi": "ホン",
        "kunyomi": "もっこ, ふご",
        "english": "basket"
    },
    {
        "kanji": "畩",
        "onyomi": "",
        "kunyomi": "けさ",
        "english": "surplice"
    },
    {
        "kanji": "畤",
        "onyomi": "ジ, シ",
        "kunyomi": "",
        "english": "festival grounds"
    },
    {
        "kanji": "畧",
        "onyomi": "リャク",
        "kunyomi": "ほぼ, おか-す, おさ-める, はかりごと, はか-る, はぶ-く",
        "english": "abbreviation"
    },
    {
        "kanji": "畫",
        "onyomi": "ガ, カク, エ, カイ",
        "kunyomi": "えが-く, かく-する, かぎ-る, はかりごと, はか-る",
        "english": "picture"
    },
    {
        "kanji": "畭",
        "onyomi": "ヨ, シャ",
        "kunyomi": "",
        "english": "new field"
    },
    {
        "kanji": "畸",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "difference"
    },
    {
        "kanji": "當",
        "onyomi": "トウ",
        "kunyomi": "あ-たる, あ-てる, まさ-に",
        "english": "bear"
    },
    {
        "kanji": "疆",
        "onyomi": "キョウ",
        "kunyomi": "さかい",
        "english": "boundary"
    },
    {
        "kanji": "疇",
        "onyomi": "チュウ",
        "kunyomi": "うね, たぐい, ひと-しい",
        "english": "before"
    },
    {
        "kanji": "畴",
        "onyomi": "チュウ",
        "kunyomi": "うね, たぐい, ひと-しい",
        "english": "farmland"
    },
    {
        "kanji": "疊",
        "onyomi": "ジョウ, チョウ",
        "kunyomi": "たた-む, たたみ, かさ-なる, かさ-ねる",
        "english": "tatami"
    },
    {
        "kanji": "疉",
        "onyomi": "ジョウ, チョウ",
        "kunyomi": "たた-む, たたみ, かさ-なる",
        "english": "repeat"
    },
    {
        "kanji": "疂",
        "onyomi": "ジョウ, チョウ",
        "kunyomi": "たた-む, たたみ, かさ-なる, かさ-ねる",
        "english": "counter for tatami mats"
    },
    {
        "kanji": "疔",
        "onyomi": "テイ, チョウ",
        "kunyomi": "",
        "english": "carbuncle"
    },
    {
        "kanji": "疚",
        "onyomi": "キュウ",
        "kunyomi": "やま-しい, や-む",
        "english": "ashamed"
    },
    {
        "kanji": "疝",
        "onyomi": "セン, サン",
        "kunyomi": "",
        "english": "colic"
    },
    {
        "kanji": "疥",
        "onyomi": "カイ",
        "kunyomi": "はたけ",
        "english": "scabby eruption"
    },
    {
        "kanji": "疣",
        "onyomi": "ユ, ユウ",
        "kunyomi": "いぼ",
        "english": "wart"
    },
    {
        "kanji": "痂",
        "onyomi": "カ, ケ",
        "kunyomi": "かさ, かさ-ぶた",
        "english": "scab"
    },
    {
        "kanji": "疳",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "children's diseases"
    },
    {
        "kanji": "痃",
        "onyomi": "ゲン, ケン",
        "kunyomi": "",
        "english": "cramps"
    },
    {
        "kanji": "疵",
        "onyomi": "シ",
        "kunyomi": "きず",
        "english": "crack"
    },
    {
        "kanji": "疽",
        "onyomi": "ソ, ショ",
        "kunyomi": "かさ",
        "english": "carbuncle"
    },
    {
        "kanji": "疸",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "jaundice"
    },
    {
        "kanji": "疼",
        "onyomi": "トウ",
        "kunyomi": "うず-く, いた-む",
        "english": "ache"
    },
    {
        "kanji": "疱",
        "onyomi": "ホウ",
        "kunyomi": "もがさ",
        "english": "smallpox"
    },
    {
        "kanji": "痍",
        "onyomi": "イ",
        "kunyomi": "きず",
        "english": "injury"
    },
    {
        "kanji": "痊",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "heal"
    },
    {
        "kanji": "痒",
        "onyomi": "ヨウ",
        "kunyomi": "かゆ-がる, かさ, かゆ-い",
        "english": "itchy"
    },
    {
        "kanji": "痙",
        "onyomi": "ケイ",
        "kunyomi": "つ-る, ひきつ-る",
        "english": "have a cramp"
    },
    {
        "kanji": "痣",
        "onyomi": "シ",
        "kunyomi": "あざ, ほくろ",
        "english": "birthmark"
    },
    {
        "kanji": "痞",
        "onyomi": "ヒ",
        "kunyomi": "つかえ",
        "english": "constipation"
    },
    {
        "kanji": "痾",
        "onyomi": "ア",
        "kunyomi": "やまい",
        "english": "chronic illness"
    },
    {
        "kanji": "痿",
        "onyomi": "イ",
        "kunyomi": "な-える",
        "english": "atrophy"
    },
    {
        "kanji": "痼",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "chronic illness"
    },
    {
        "kanji": "瘁",
        "onyomi": "スイ",
        "kunyomi": "つか-れる",
        "english": "take sick"
    },
    {
        "kanji": "痰",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "sputum"
    },
    {
        "kanji": "痺",
        "onyomi": "ヒ",
        "kunyomi": "しび-れる",
        "english": "palsy"
    },
    {
        "kanji": "痲",
        "onyomi": "マ, バ",
        "kunyomi": "しび-れる",
        "english": "measles"
    },
    {
        "kanji": "痳",
        "onyomi": "リン",
        "kunyomi": "",
        "english": "gonorrhea"
    },
    {
        "kanji": "瘋",
        "onyomi": "フウ",
        "kunyomi": "",
        "english": "insanity"
    },
    {
        "kanji": "瘍",
        "onyomi": "ヨウ",
        "kunyomi": "かさ",
        "english": "swelling"
    },
    {
        "kanji": "瘉",
        "onyomi": "ユ",
        "kunyomi": "い-える, いや-す",
        "english": "get well"
    },
    {
        "kanji": "瘟",
        "onyomi": "オン",
        "kunyomi": "えやみ",
        "english": "contagious disease"
    },
    {
        "kanji": "瘧",
        "onyomi": "ギャク, ガク",
        "kunyomi": "おこり",
        "english": "ague"
    },
    {
        "kanji": "瘠",
        "onyomi": "セキ, ジャク",
        "kunyomi": "やせ-る",
        "english": "get thin"
    },
    {
        "kanji": "瘡",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "かさ",
        "english": "wound"
    },
    {
        "kanji": "瘢",
        "onyomi": "ハン",
        "kunyomi": "きず",
        "english": "scar"
    },
    {
        "kanji": "瘤",
        "onyomi": "リュウ, ル",
        "kunyomi": "こぶ",
        "english": "lump"
    },
    {
        "kanji": "瘴",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "miasma"
    },
    {
        "kanji": "瘰",
        "onyomi": "ルイ, ラ, ライ",
        "kunyomi": "",
        "english": "swollen neck glands"
    },
    {
        "kanji": "瘻",
        "onyomi": "ル, ロウ",
        "kunyomi": "せむし, かさ, できもの",
        "english": "fistula"
    },
    {
        "kanji": "癇",
        "onyomi": "カン",
        "kunyomi": "ひきつけ",
        "english": "bitter"
    },
    {
        "kanji": "癈",
        "onyomi": "ハイ",
        "kunyomi": "",
        "english": "chronic illness"
    },
    {
        "kanji": "癆",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "rash"
    },
    {
        "kanji": "癜",
        "onyomi": "デン, テン",
        "kunyomi": "なまず",
        "english": "leucoderma"
    },
    {
        "kanji": "癘",
        "onyomi": "レイ, ライ",
        "kunyomi": "えやみ",
        "english": "contagious disease"
    },
    {
        "kanji": "癡",
        "onyomi": "チ",
        "kunyomi": "し-れる, おろか",
        "english": "foolish"
    },
    {
        "kanji": "癢",
        "onyomi": "ヨウ",
        "kunyomi": "かゆ-い",
        "english": "itchy"
    },
    {
        "kanji": "癨",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "heatstroke"
    },
    {
        "kanji": "癩",
        "onyomi": "ライ",
        "kunyomi": "",
        "english": "leprosy"
    },
    {
        "kanji": "癪",
        "onyomi": "",
        "kunyomi": "しゃく",
        "english": "spasms"
    },
    {
        "kanji": "癧",
        "onyomi": "レキ",
        "kunyomi": "",
        "english": "swollen neck glands"
    },
    {
        "kanji": "癬",
        "onyomi": "セン",
        "kunyomi": "たむし",
        "english": "ringworm"
    },
    {
        "kanji": "癰",
        "onyomi": "ヨウ",
        "kunyomi": "はれもの",
        "english": "boil"
    },
    {
        "kanji": "癲",
        "onyomi": "テン",
        "kunyomi": "",
        "english": "insanity"
    },
    {
        "kanji": "癶",
        "onyomi": "ハツ",
        "kunyomi": "",
        "english": "dotted tent radical (no. 105)"
    },
    {
        "kanji": "癸",
        "onyomi": "キ",
        "kunyomi": "みずのと",
        "english": "10th calendar sign"
    },
    {
        "kanji": "發",
        "onyomi": "ハツ, ホツ",
        "kunyomi": "た-つ, あば-く, おこ-る, つか-わす, はな-つ",
        "english": "departure"
    },
    {
        "kanji": "皀",
        "onyomi": "キュウ, ヒョク, キョウ, コウ",
        "kunyomi": "",
        "english": "fragrant"
    },
    {
        "kanji": "皃",
        "onyomi": "ボウ, バク",
        "kunyomi": "かたち, かたどる",
        "english": "countenance"
    },
    {
        "kanji": "皈",
        "onyomi": "キ",
        "kunyomi": "かえ-る, かえ-す, おく-る, とつ-ぐ",
        "english": "homecoming"
    },
    {
        "kanji": "皋",
        "onyomi": "コウ",
        "kunyomi": "さつき",
        "english": "the high land along a river"
    },
    {
        "kanji": "皎",
        "onyomi": "キョウ, コウ",
        "kunyomi": "きよ-い, しろ-い",
        "english": "white"
    },
    {
        "kanji": "皖",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "Venus"
    },
    {
        "kanji": "皓",
        "onyomi": "コウ",
        "kunyomi": "しろ-い, ひか-る",
        "english": "white"
    },
    {
        "kanji": "皙",
        "onyomi": "シャク, セキ",
        "kunyomi": "しろ-い",
        "english": "clear"
    },
    {
        "kanji": "皚",
        "onyomi": "ガイ, ギ, ゲ, カイ",
        "kunyomi": "しろ-い, さむ-い",
        "english": "white"
    },
    {
        "kanji": "皰",
        "onyomi": "ホウ, ビョウ",
        "kunyomi": "にきび",
        "english": "pimple"
    },
    {
        "kanji": "皴",
        "onyomi": "シュン",
        "kunyomi": "ひび, しわ",
        "english": "wrinkles"
    },
    {
        "kanji": "皸",
        "onyomi": "クン, キン",
        "kunyomi": "ひび, あかぎれ",
        "english": "skin cracks or roughness"
    },
    {
        "kanji": "皹",
        "onyomi": "クン, キン",
        "kunyomi": "ひび, あかぎれ",
        "english": "skin cracks or roughness"
    },
    {
        "kanji": "皺",
        "onyomi": "シュウ, スウ",
        "kunyomi": "しわ, しぼ",
        "english": "wrinkles"
    },
    {
        "kanji": "盂",
        "onyomi": "ウ",
        "kunyomi": "はち",
        "english": "bowl"
    },
    {
        "kanji": "盍",
        "onyomi": "コウ",
        "kunyomi": "おお-う, なんぞ",
        "english": "come together"
    },
    {
        "kanji": "盖",
        "onyomi": "ガイ, カイ, コウ",
        "kunyomi": "ふた, けだ-し, おお-う, かさ, かこう",
        "english": "cover"
    },
    {
        "kanji": "盒",
        "onyomi": "コウ",
        "kunyomi": "さら, ふたもの",
        "english": "covered utensil"
    },
    {
        "kanji": "盞",
        "onyomi": "サン, セン",
        "kunyomi": "さかずき",
        "english": "sake cup"
    },
    {
        "kanji": "盡",
        "onyomi": "ジン, サン",
        "kunyomi": "つ-くす, つ-きる, つ-かす, さかづき, ことごと-く",
        "english": "exhaust"
    },
    {
        "kanji": "盥",
        "onyomi": "カン",
        "kunyomi": "たらい, そそ-ぐ",
        "english": "tub"
    },
    {
        "kanji": "盧",
        "onyomi": "ロ",
        "kunyomi": "",
        "english": "hut"
    },
    {
        "kanji": "盪",
        "onyomi": "トウ",
        "kunyomi": "とろ-かす, あら-う, うご-く",
        "english": "melt"
    },
    {
        "kanji": "蘯",
        "onyomi": "トウ",
        "kunyomi": "とろ-かす, あら-う, うご-く",
        "english": "to toss about"
    },
    {
        "kanji": "盻",
        "onyomi": "ケイ",
        "kunyomi": "にら-む",
        "english": "glare at"
    },
    {
        "kanji": "眈",
        "onyomi": "タン",
        "kunyomi": "にら-む",
        "english": "watch intently"
    },
    {
        "kanji": "眇",
        "onyomi": "ビョウ, ミョウ",
        "kunyomi": "びょう-たる, すがめ",
        "english": "minuteness"
    },
    {
        "kanji": "眄",
        "onyomi": "ベン, メン",
        "kunyomi": "かえり-みる",
        "english": "looking askance"
    },
    {
        "kanji": "眩",
        "onyomi": "ゲン, カン",
        "kunyomi": "げん-す, くるめ-く, まぶ-しい, くら-む, まど-う, めま-い, まばゆ-い, くれ-る, ま-う",
        "english": "faint"
    },
    {
        "kanji": "眤",
        "onyomi": "ケイ, ダイ",
        "kunyomi": "てい, い",
        "english": "glance at"
    },
    {
        "kanji": "眞",
        "onyomi": "シン",
        "kunyomi": "ま, まこと",
        "english": "truth"
    },
    {
        "kanji": "眥",
        "onyomi": "セ, イシ, サイ, シ, セイ",
        "kunyomi": "まなじり, めじり",
        "english": "outside the corner of the eye"
    },
    {
        "kanji": "眦",
        "onyomi": "セ, イシ, サイ, シ, セイ",
        "kunyomi": "まなじり, めじり",
        "english": "corner of the eyes"
    },
    {
        "kanji": "眛",
        "onyomi": "マイ, バイ",
        "kunyomi": "くら-い",
        "english": "dark"
    },
    {
        "kanji": "眷",
        "onyomi": "ケン",
        "kunyomi": "かえり-みる",
        "english": "look around"
    },
    {
        "kanji": "眸",
        "onyomi": "ボウ, ム",
        "kunyomi": "ひとみ",
        "english": "pupil of the eye"
    },
    {
        "kanji": "睇",
        "onyomi": "テイ, ダイ",
        "kunyomi": "",
        "english": "looking askance at"
    },
    {
        "kanji": "睚",
        "onyomi": "ガイ",
        "kunyomi": "まなじり",
        "english": "glare"
    },
    {
        "kanji": "睨",
        "onyomi": "ゲイ",
        "kunyomi": "にら-む, にら-み",
        "english": "glaring at"
    },
    {
        "kanji": "睫",
        "onyomi": "ショウ",
        "kunyomi": "まつげ",
        "english": "eyelashes"
    },
    {
        "kanji": "睛",
        "onyomi": "セイ, ショウ",
        "kunyomi": "ひとみ",
        "english": "pupil of the eye"
    },
    {
        "kanji": "睥",
        "onyomi": "ヘイ",
        "kunyomi": "ながしめ, み-る",
        "english": "glare at"
    },
    {
        "kanji": "睿",
        "onyomi": "エイ",
        "kunyomi": "あき-らか",
        "english": "intelligence"
    },
    {
        "kanji": "睾",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "testicles"
    },
    {
        "kanji": "睹",
        "onyomi": "ト",
        "kunyomi": "み-る",
        "english": "look at"
    },
    {
        "kanji": "瞎",
        "onyomi": "カツ",
        "kunyomi": "めくら, かため",
        "english": "blind eye"
    },
    {
        "kanji": "瞋",
        "onyomi": "シン",
        "kunyomi": "い-かる, いか-らす",
        "english": "be angry"
    },
    {
        "kanji": "瞑",
        "onyomi": "メイ, ベン, ミョウ, ミン, メン",
        "kunyomi": "めい-する, つぶ-る, つむ-る, くら-い",
        "english": "sleep"
    },
    {
        "kanji": "瞠",
        "onyomi": "ドウ, トウ",
        "kunyomi": "みは-る",
        "english": "stare intently"
    },
    {
        "kanji": "瞞",
        "onyomi": "マン, モン, バン, ボン",
        "kunyomi": "だま-す",
        "english": "deception"
    },
    {
        "kanji": "瞰",
        "onyomi": "カン",
        "kunyomi": "み-る",
        "english": "look"
    },
    {
        "kanji": "瞶",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "see everything"
    },
    {
        "kanji": "瞹",
        "onyomi": "アイ",
        "kunyomi": "",
        "english": "hidden"
    },
    {
        "kanji": "瞿",
        "onyomi": "ク",
        "kunyomi": "おそ-れる, み-る",
        "english": "surname"
    },
    {
        "kanji": "瞼",
        "onyomi": "ケン",
        "kunyomi": "まぶた",
        "english": "eyelids"
    },
    {
        "kanji": "瞽",
        "onyomi": "コ",
        "kunyomi": "めし-い",
        "english": "blind person"
    },
    {
        "kanji": "瞻",
        "onyomi": "セン",
        "kunyomi": "み-る",
        "english": "look at"
    },
    {
        "kanji": "矇",
        "onyomi": "モウ, ボウ",
        "kunyomi": "くら-い, めし-い",
        "english": "blind"
    },
    {
        "kanji": "矍",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "surprise & confusion"
    },
    {
        "kanji": "矗",
        "onyomi": "チョク, シュク, チク",
        "kunyomi": "なお-い",
        "english": "luxuriance"
    },
    {
        "kanji": "矚",
        "onyomi": "ショク, ソク",
        "kunyomi": "み-る",
        "english": "look intently"
    },
    {
        "kanji": "矜",
        "onyomi": "キン, キョウ, ケイ",
        "kunyomi": "あわ-れむ, つつし-む, ほこ-る",
        "english": "pride"
    },
    {
        "kanji": "矣",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "sentence particle"
    },
    {
        "kanji": "矮",
        "onyomi": "ワイ, アイ",
        "kunyomi": "ひく-い",
        "english": "low"
    },
    {
        "kanji": "矼",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "stepping stone"
    },
    {
        "kanji": "砌",
        "onyomi": "サイ, セイ",
        "kunyomi": "みぎり",
        "english": "time"
    },
    {
        "kanji": "砒",
        "onyomi": "ヒ, ヘイ",
        "kunyomi": "",
        "english": "arsenic"
    },
    {
        "kanji": "礦",
        "onyomi": "コウ",
        "kunyomi": "あらがね",
        "english": "mine"
    },
    {
        "kanji": "砠",
        "onyomi": "ソ, ショ",
        "kunyomi": "",
        "english": "stony hill"
    },
    {
        "kanji": "礪",
        "onyomi": "レイ",
        "kunyomi": "あらと, みが-く",
        "english": "whetstone"
    },
    {
        "kanji": "硅",
        "onyomi": "カク, キャク, ケイ",
        "kunyomi": "やぶ-る",
        "english": "silicon"
    },
    {
        "kanji": "碎",
        "onyomi": "サイ",
        "kunyomi": "くだ-く, くだ-ける",
        "english": "break"
    },
    {
        "kanji": "硴",
        "onyomi": "",
        "kunyomi": "かき",
        "english": "oyster"
    },
    {
        "kanji": "碆",
        "onyomi": "ハ",
        "kunyomi": "",
        "english": "arrowhead"
    },
    {
        "kanji": "硼",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "sound of stones struck together"
    },
    {
        "kanji": "碚",
        "onyomi": "ハイ",
        "kunyomi": "",
        "english": "mound"
    },
    {
        "kanji": "碌",
        "onyomi": "ロク",
        "kunyomi": "ろく-な",
        "english": "satisfactory"
    },
    {
        "kanji": "碣",
        "onyomi": "ケツ",
        "kunyomi": "いしぶみ",
        "english": "round stone"
    },
    {
        "kanji": "碵",
        "onyomi": "",
        "kunyomi": "",
        "english": "cornerstone"
    },
    {
        "kanji": "碪",
        "onyomi": "チン",
        "kunyomi": "きぬた",
        "english": "stone slab used for washing clothes"
    },
    {
        "kanji": "碯",
        "onyomi": "ノウ",
        "kunyomi": "",
        "english": "agate"
    },
    {
        "kanji": "磑",
        "onyomi": "ガイ",
        "kunyomi": "う-す",
        "english": "mortar"
    },
    {
        "kanji": "磆",
        "onyomi": "カツ",
        "kunyomi": "",
        "english": "stone implement"
    },
    {
        "kanji": "磋",
        "onyomi": "サ",
        "kunyomi": "みが-く",
        "english": "polish"
    },
    {
        "kanji": "磔",
        "onyomi": "タク, チャク",
        "kunyomi": "さ-く, はりつけ, ひらく",
        "english": "crucifixion"
    },
    {
        "kanji": "碾",
        "onyomi": "テン",
        "kunyomi": "ひ-く, う-す",
        "english": "mortar"
    },
    {
        "kanji": "碼",
        "onyomi": "バ, メ",
        "kunyomi": "やーど, やある",
        "english": "number"
    },
    {
        "kanji": "磅",
        "onyomi": "ボウ, ホウ",
        "kunyomi": "ぽんど",
        "english": "become obstructed"
    },
    {
        "kanji": "磊",
        "onyomi": "ライ",
        "kunyomi": "",
        "english": "many stones"
    },
    {
        "kanji": "磬",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "upside-V-shaped gong"
    },
    {
        "kanji": "磧",
        "onyomi": "セキ",
        "kunyomi": "かわら",
        "english": "expanse of sand"
    },
    {
        "kanji": "磚",
        "onyomi": "セン",
        "kunyomi": "かわら",
        "english": "tile"
    },
    {
        "kanji": "磽",
        "onyomi": "コウ, キョウ",
        "kunyomi": "",
        "english": "rocky"
    },
    {
        "kanji": "磴",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "stone steps"
    },
    {
        "kanji": "礇",
        "onyomi": "イク",
        "kunyomi": "",
        "english": "jewel"
    },
    {
        "kanji": "礒",
        "onyomi": "ギ, ガ",
        "kunyomi": "いそ, いわお",
        "english": "rock"
    },
    {
        "kanji": "礑",
        "onyomi": "トウ",
        "kunyomi": "はた, はたと",
        "english": "bottom"
    },
    {
        "kanji": "礙",
        "onyomi": "ガイ, ゲ",
        "kunyomi": "さまた-げる",
        "english": "obstruct"
    },
    {
        "kanji": "礬",
        "onyomi": "バン, ハン",
        "kunyomi": "",
        "english": "alum"
    },
    {
        "kanji": "礫",
        "onyomi": "レキ",
        "kunyomi": "つぶて, こいし",
        "english": "small stones"
    },
    {
        "kanji": "祀",
        "onyomi": "シ",
        "kunyomi": "まつ-る, まつり",
        "english": "enshrine"
    },
    {
        "kanji": "祠",
        "onyomi": "シ",
        "kunyomi": "ほこら, まつる",
        "english": "small shrine"
    },
    {
        "kanji": "祗",
        "onyomi": "シ",
        "kunyomi": "つつし-む, まさに",
        "english": "respectful"
    },
    {
        "kanji": "祟",
        "onyomi": "スイ",
        "kunyomi": "たた-る, たた-り",
        "english": "curse"
    },
    {
        "kanji": "祚",
        "onyomi": "ソ",
        "kunyomi": "くら-い, さいわ-い",
        "english": "imperial throne"
    },
    {
        "kanji": "祕",
        "onyomi": "ヒ",
        "kunyomi": "ひ-める, かく-す",
        "english": "mysterious"
    },
    {
        "kanji": "祓",
        "onyomi": "フツ, ハイ",
        "kunyomi": "はら-う",
        "english": "exorcise"
    },
    {
        "kanji": "祺",
        "onyomi": "キ",
        "kunyomi": "さいわ-い, やす-い",
        "english": "fortunate"
    },
    {
        "kanji": "祿",
        "onyomi": "ロク",
        "kunyomi": "さいわ-い, ふち",
        "english": "fief"
    },
    {
        "kanji": "禊",
        "onyomi": "ケイ, カツ",
        "kunyomi": "みそぎ, はら-う",
        "english": "Shinto purification ceremony"
    },
    {
        "kanji": "禝",
        "onyomi": "ショク",
        "kunyomi": "きび",
        "english": "proper name"
    },
    {
        "kanji": "禧",
        "onyomi": "キ",
        "kunyomi": "さいわ-い",
        "english": "fortunate"
    },
    {
        "kanji": "齋",
        "onyomi": "サイ",
        "kunyomi": "つつし-む, とき, ものいみ",
        "english": "Buddhist food"
    },
    {
        "kanji": "禪",
        "onyomi": "ゼン, セン",
        "kunyomi": "しずか, ゆず-る",
        "english": "Zen Buddhism"
    },
    {
        "kanji": "禮",
        "onyomi": "レイ, ライ",
        "kunyomi": "",
        "english": "social custom"
    },
    {
        "kanji": "禳",
        "onyomi": "ジョウ",
        "kunyomi": "はら-う",
        "english": "exorcise"
    },
    {
        "kanji": "禹",
        "onyomi": "ウ",
        "kunyomi": "",
        "english": "name of a Chinese emperor"
    },
    {
        "kanji": "禺",
        "onyomi": "グ, グウ",
        "kunyomi": "おながざる",
        "english": "long-tailed monkey"
    },
    {
        "kanji": "秉",
        "onyomi": "ヘイ",
        "kunyomi": "と-る",
        "english": "take"
    },
    {
        "kanji": "秕",
        "onyomi": "ヒ",
        "kunyomi": "しいな",
        "english": "empty grain or rice husk"
    },
    {
        "kanji": "秧",
        "onyomi": "オウ",
        "kunyomi": "なえ",
        "english": "rice"
    },
    {
        "kanji": "秬",
        "onyomi": "キョ",
        "kunyomi": "くろきび",
        "english": "a type of millet"
    },
    {
        "kanji": "秡",
        "onyomi": "ハツ, バチ",
        "kunyomi": "",
        "english": "damaged grain"
    },
    {
        "kanji": "秣",
        "onyomi": "マツ, バツ",
        "kunyomi": "まぐさ, まぐさかう",
        "english": "fodder"
    },
    {
        "kanji": "稈",
        "onyomi": "カン",
        "kunyomi": "わら",
        "english": "straw"
    },
    {
        "kanji": "稍",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "やや, ようやく",
        "english": "slightly"
    },
    {
        "kanji": "稘",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "straw"
    },
    {
        "kanji": "稙",
        "onyomi": "ショク, チョク",
        "kunyomi": "",
        "english": "early-maturing rice"
    },
    {
        "kanji": "稠",
        "onyomi": "チュウ, チョウ",
        "kunyomi": "おお-い, し-げる",
        "english": "density"
    },
    {
        "kanji": "稟",
        "onyomi": "リン, ヒン",
        "kunyomi": "こめぐら",
        "english": "salary in rice"
    },
    {
        "kanji": "禀",
        "onyomi": "リン, ヒン",
        "kunyomi": "こめぐら",
        "english": "salary in rice"
    },
    {
        "kanji": "稱",
        "onyomi": "ショウ",
        "kunyomi": "たた-える, とな-える, あ-げる, かな-う, はか-る, ほめ-る",
        "english": "call"
    },
    {
        "kanji": "稻",
        "onyomi": "トウ, テ",
        "kunyomi": "いね, いな-",
        "english": "rice plant"
    },
    {
        "kanji": "稾",
        "onyomi": "コウ",
        "kunyomi": "わら, したがき",
        "english": "draft"
    },
    {
        "kanji": "稷",
        "onyomi": "ショク",
        "kunyomi": "きび",
        "english": "millet"
    },
    {
        "kanji": "穃",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "(ghost kanji)"
    },
    {
        "kanji": "穗",
        "onyomi": "スイ",
        "kunyomi": "ほ",
        "english": "ear (of grain)"
    },
    {
        "kanji": "穉",
        "onyomi": "チ, ジ",
        "kunyomi": "いと-けない, おさ-ない, おく-て, おご-る",
        "english": "infancy"
    },
    {
        "kanji": "穡",
        "onyomi": "ショク",
        "kunyomi": "",
        "english": "harvest"
    },
    {
        "kanji": "穢",
        "onyomi": "アイ, エ, ワイ",
        "kunyomi": "けが-す, けが-れ, けが-れる",
        "english": "dirty"
    },
    {
        "kanji": "穩",
        "onyomi": "オン",
        "kunyomi": "おだ-やか",
        "english": "calm"
    },
    {
        "kanji": "龝",
        "onyomi": "シュウ",
        "kunyomi": "あき, とき",
        "english": "autumn"
    },
    {
        "kanji": "穰",
        "onyomi": "ジョウ",
        "kunyomi": "わら, ゆたか",
        "english": "abundance"
    },
    {
        "kanji": "穹",
        "onyomi": "キュウ, キョウ",
        "kunyomi": "あめ, そら",
        "english": "sky"
    },
    {
        "kanji": "穽",
        "onyomi": "セイ",
        "kunyomi": "おとしあな",
        "english": "sunken trap"
    },
    {
        "kanji": "窈",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "quiet"
    },
    {
        "kanji": "窗",
        "onyomi": "ソウ, ス",
        "kunyomi": "まど, てんまど, けむだし",
        "english": "window"
    },
    {
        "kanji": "窕",
        "onyomi": "チョウ, ヨウ",
        "kunyomi": "うつく-しい",
        "english": "quiet"
    },
    {
        "kanji": "窘",
        "onyomi": "キン",
        "kunyomi": "たしな-める, くるし-む",
        "english": "rebuke"
    },
    {
        "kanji": "窖",
        "onyomi": "コウ, キョウ",
        "kunyomi": "あなぐら",
        "english": "cellar"
    },
    {
        "kanji": "窩",
        "onyomi": "カ, ワ",
        "kunyomi": "むろ",
        "english": "cave"
    },
    {
        "kanji": "竈",
        "onyomi": "ソウ",
        "kunyomi": "かまど, かま, へっつい",
        "english": "hearth"
    },
    {
        "kanji": "窰",
        "onyomi": "ヨウ",
        "kunyomi": "かま",
        "english": "brick kiln"
    },
    {
        "kanji": "窶",
        "onyomi": "ロウ, ク, ル",
        "kunyomi": "や-つる, や-つれる",
        "english": "emaciated"
    },
    {
        "kanji": "竅",
        "onyomi": "キョウ",
        "kunyomi": "あな",
        "english": "hole"
    },
    {
        "kanji": "竄",
        "onyomi": "ザン, サン",
        "kunyomi": "かく-れる, のが-れる",
        "english": "flee"
    },
    {
        "kanji": "窿",
        "onyomi": "リュウ",
        "kunyomi": "",
        "english": "vault (of sky)"
    },
    {
        "kanji": "邃",
        "onyomi": "スイ",
        "kunyomi": "おくぶか-い",
        "english": "deep"
    },
    {
        "kanji": "竇",
        "onyomi": "トウ, トク",
        "kunyomi": "あな",
        "english": "hole"
    },
    {
        "kanji": "竊",
        "onyomi": "セツ",
        "kunyomi": "ぬす-む, ひそ-かに",
        "english": "steal"
    },
    {
        "kanji": "竍",
        "onyomi": "",
        "kunyomi": "デカリットル",
        "english": "decalitre"
    },
    {
        "kanji": "竏",
        "onyomi": "",
        "kunyomi": "キロリットル",
        "english": "kilolitre"
    },
    {
        "kanji": "竕",
        "onyomi": "",
        "kunyomi": "デシリットル",
        "english": "decilitre"
    },
    {
        "kanji": "竓",
        "onyomi": "",
        "kunyomi": "ミリリットル",
        "english": "millilitre"
    },
    {
        "kanji": "站",
        "onyomi": "タン",
        "kunyomi": "た-つ, たたず-む, えき",
        "english": "stop"
    },
    {
        "kanji": "竚",
        "onyomi": "チョ",
        "kunyomi": "たたず-む",
        "english": "stop"
    },
    {
        "kanji": "竝",
        "onyomi": "ヘイ, ホウ",
        "kunyomi": "な-み, なら-べる, なら-ぶ, なら-びに",
        "english": "line up"
    },
    {
        "kanji": "竡",
        "onyomi": "",
        "kunyomi": "ヘクトリットル",
        "english": "hectolitre"
    },
    {
        "kanji": "竢",
        "onyomi": "シ",
        "kunyomi": "まつ",
        "english": "wait for"
    },
    {
        "kanji": "竦",
        "onyomi": "ショウ",
        "kunyomi": "すく-む, おそ-れる, つつし-む",
        "english": "crouch"
    },
    {
        "kanji": "竭",
        "onyomi": "ケツ",
        "kunyomi": "つく-す",
        "english": "end"
    },
    {
        "kanji": "竰",
        "onyomi": "",
        "kunyomi": "センチリットル",
        "english": "centilitre"
    },
    {
        "kanji": "笂",
        "onyomi": "",
        "kunyomi": "うつぼ",
        "english": "quiver"
    },
    {
        "kanji": "笏",
        "onyomi": "コツ",
        "kunyomi": "しゃく",
        "english": "mace"
    },
    {
        "kanji": "笊",
        "onyomi": "ソウ",
        "kunyomi": "ざる, す",
        "english": "bamboo basket"
    },
    {
        "kanji": "笆",
        "onyomi": "ハ",
        "kunyomi": "",
        "english": "thorny bamboo"
    },
    {
        "kanji": "笳",
        "onyomi": "カ",
        "kunyomi": "あしぶえ",
        "english": "reed flute"
    },
    {
        "kanji": "笘",
        "onyomi": "セン, チョウ",
        "kunyomi": "",
        "english": "whip"
    },
    {
        "kanji": "笙",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "ふえ",
        "english": "a reed instrument"
    },
    {
        "kanji": "笞",
        "onyomi": "チ",
        "kunyomi": "むち, しもと",
        "english": "whip"
    },
    {
        "kanji": "笵",
        "onyomi": "ハン, ボン",
        "kunyomi": "のり",
        "english": "bamboo frame"
    },
    {
        "kanji": "笨",
        "onyomi": "ホン",
        "kunyomi": "あら-い",
        "english": "coarse"
    },
    {
        "kanji": "笶",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "arrow"
    },
    {
        "kanji": "筐",
        "onyomi": "キョウ",
        "kunyomi": "かたみ, かご, はこ",
        "english": "bamboo basket"
    },
    {
        "kanji": "筺",
        "onyomi": "キョウ",
        "kunyomi": "かたみ, かご, はこ",
        "english": "bamboo basket"
    },
    {
        "kanji": "笄",
        "onyomi": "ケイ",
        "kunyomi": "こうがい",
        "english": "hairpin"
    },
    {
        "kanji": "筍",
        "onyomi": "ジュン, シュン, イン",
        "kunyomi": "たけのこ, たかんな",
        "english": "bamboo shoot"
    },
    {
        "kanji": "笋",
        "onyomi": "ジュン, シュン, イン",
        "kunyomi": "たけのこ, たかんな",
        "english": "bamboo shoot"
    },
    {
        "kanji": "筌",
        "onyomi": "セン",
        "kunyomi": "うけ, うえ",
        "english": "fish trap"
    },
    {
        "kanji": "筅",
        "onyomi": "セン",
        "kunyomi": "ささら",
        "english": "bamboo whisk for tea-making"
    },
    {
        "kanji": "筵",
        "onyomi": "エン",
        "kunyomi": "むしろ",
        "english": "straw mat"
    },
    {
        "kanji": "筥",
        "onyomi": "キョ",
        "kunyomi": "",
        "english": "round basket"
    },
    {
        "kanji": "筴",
        "onyomi": "キョウ, サク",
        "kunyomi": "めどぎ",
        "english": "insert between"
    },
    {
        "kanji": "筧",
        "onyomi": "ケン",
        "kunyomi": "かけひ",
        "english": "waterpipe"
    },
    {
        "kanji": "筰",
        "onyomi": "サク",
        "kunyomi": "しゃく",
        "english": "bamboo rope"
    },
    {
        "kanji": "筱",
        "onyomi": "ゾウ, ショウ",
        "kunyomi": "しの",
        "english": "dwarf bamboo"
    },
    {
        "kanji": "筬",
        "onyomi": "セイ",
        "kunyomi": "おさ",
        "english": "reed"
    },
    {
        "kanji": "筮",
        "onyomi": "ゼイ, セイ",
        "kunyomi": "うらな-う, めどぎ",
        "english": "(water) divining equipment"
    },
    {
        "kanji": "箝",
        "onyomi": "カン, ケン",
        "kunyomi": "す-げる, くびかせ, はさ-む",
        "english": "insert"
    },
    {
        "kanji": "箘",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "a type of bamboo"
    },
    {
        "kanji": "箟",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "a type of bamboo"
    },
    {
        "kanji": "箍",
        "onyomi": "コ",
        "kunyomi": "たが",
        "english": "barrel hoop"
    },
    {
        "kanji": "箜",
        "onyomi": "ク, コウ",
        "kunyomi": "",
        "english": "type of harp"
    },
    {
        "kanji": "箚",
        "onyomi": "トウ, サツ, チョウ",
        "kunyomi": "さ-す",
        "english": "progress report"
    },
    {
        "kanji": "箋",
        "onyomi": "セン",
        "kunyomi": "ふだ",
        "english": "paper"
    },
    {
        "kanji": "箒",
        "onyomi": "ソウ, シュウ",
        "kunyomi": "ほうき",
        "english": "broom"
    },
    {
        "kanji": "箏",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "こと",
        "english": "a koto"
    },
    {
        "kanji": "筝",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "こと",
        "english": "koto"
    },
    {
        "kanji": "箙",
        "onyomi": "フク",
        "kunyomi": "えびら",
        "english": "quiver"
    },
    {
        "kanji": "篋",
        "onyomi": "キョウ",
        "kunyomi": "はこ",
        "english": "box"
    },
    {
        "kanji": "篁",
        "onyomi": "コウ",
        "kunyomi": "たかむら",
        "english": "bamboo grove"
    },
    {
        "kanji": "篌",
        "onyomi": "ゴ, コウ",
        "kunyomi": "",
        "english": "type of harp"
    },
    {
        "kanji": "篏",
        "onyomi": "カン",
        "kunyomi": "は-める, は-まる, あな",
        "english": "inlay"
    },
    {
        "kanji": "箴",
        "onyomi": "シン",
        "kunyomi": "いまし-める, はり",
        "english": "warning"
    },
    {
        "kanji": "篆",
        "onyomi": "テン",
        "kunyomi": "",
        "english": "seal-style characters"
    },
    {
        "kanji": "篝",
        "onyomi": "コウ",
        "kunyomi": "かがりび, かがり, ふせご",
        "english": "campfire"
    },
    {
        "kanji": "篩",
        "onyomi": "シ, サイ",
        "kunyomi": "ふる-う",
        "english": "sieve"
    },
    {
        "kanji": "簑",
        "onyomi": "サ, サイ",
        "kunyomi": "みの",
        "english": "a coat raincoat"
    },
    {
        "kanji": "簔",
        "onyomi": "サ, サイ",
        "kunyomi": "みの",
        "english": "straw raincoat"
    },
    {
        "kanji": "篦",
        "onyomi": "ヘイ, ハイ",
        "kunyomi": "へら, の",
        "english": "spatula"
    },
    {
        "kanji": "篥",
        "onyomi": "リキ, リツ, リチ",
        "kunyomi": "",
        "english": "horn"
    },
    {
        "kanji": "籠",
        "onyomi": "ロウ, ル",
        "kunyomi": "かご, こ-める, こも-る, こ-む",
        "english": "basket"
    },
    {
        "kanji": "簀",
        "onyomi": "サク, ジャク, セキ",
        "kunyomi": "す",
        "english": "rough mat (reeds)"
    },
    {
        "kanji": "簇",
        "onyomi": "ゾク, ソウ, ソク",
        "kunyomi": "むら-がる",
        "english": "group"
    },
    {
        "kanji": "簓",
        "onyomi": "",
        "kunyomi": "ささら",
        "english": "bamboo whisk"
    },
    {
        "kanji": "篳",
        "onyomi": "ヒチ, ヒツ",
        "kunyomi": "まがき",
        "english": "fence"
    },
    {
        "kanji": "篷",
        "onyomi": "ホウ",
        "kunyomi": "とま",
        "english": "woven rush awning"
    },
    {
        "kanji": "簗",
        "onyomi": "リョウ",
        "kunyomi": "やな",
        "english": "weir"
    },
    {
        "kanji": "簍",
        "onyomi": "ル, ロウ",
        "kunyomi": "",
        "english": "bamboo basket"
    },
    {
        "kanji": "篶",
        "onyomi": "エン",
        "kunyomi": "くろだけ, すず",
        "english": "black bamboo"
    },
    {
        "kanji": "簣",
        "onyomi": "キ",
        "kunyomi": "もっこ, あじか",
        "english": "earth-carrying basket"
    },
    {
        "kanji": "簧",
        "onyomi": "コウ",
        "kunyomi": "した",
        "english": "flute reed"
    },
    {
        "kanji": "簪",
        "onyomi": "シン, サン",
        "kunyomi": "かんざし",
        "english": "ornamental hairpin"
    },
    {
        "kanji": "簟",
        "onyomi": "タン, テン",
        "kunyomi": "たかむしろ",
        "english": "a type of bamboo"
    },
    {
        "kanji": "簷",
        "onyomi": "エン",
        "kunyomi": "ひさし",
        "english": "eaves"
    },
    {
        "kanji": "簫",
        "onyomi": "ショウ",
        "kunyomi": "ふえ",
        "english": "pan pipes"
    },
    {
        "kanji": "簽",
        "onyomi": "セン",
        "kunyomi": "かご",
        "english": "label"
    },
    {
        "kanji": "籌",
        "onyomi": "チュウ",
        "kunyomi": "かずとり, はかりごと",
        "english": "plan"
    },
    {
        "kanji": "籃",
        "onyomi": "ラン",
        "kunyomi": "かご",
        "english": "basket"
    },
    {
        "kanji": "籔",
        "onyomi": "ソウ",
        "kunyomi": "やぶ",
        "english": "thicket"
    },
    {
        "kanji": "籏",
        "onyomi": "キ",
        "kunyomi": "はた",
        "english": "flag"
    },
    {
        "kanji": "籀",
        "onyomi": "チュウ, シュウ, ジュ",
        "kunyomi": "よ-む",
        "english": "a style of calligraphy"
    },
    {
        "kanji": "籐",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "rattan"
    },
    {
        "kanji": "籘",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "climbing plants"
    },
    {
        "kanji": "籟",
        "onyomi": "ライ",
        "kunyomi": "ふえ",
        "english": "rattling of the wind"
    },
    {
        "kanji": "籤",
        "onyomi": "セン",
        "kunyomi": "くじ, かずとり",
        "english": "lottery"
    },
    {
        "kanji": "籖",
        "onyomi": "セン",
        "kunyomi": "くじ, かずとり",
        "english": "lottery"
    },
    {
        "kanji": "籥",
        "onyomi": "ヤク",
        "kunyomi": "ふえ",
        "english": "three-holed flute"
    },
    {
        "kanji": "籬",
        "onyomi": "リ",
        "kunyomi": "まがき, かき",
        "english": "rough-woven fence"
    },
    {
        "kanji": "籵",
        "onyomi": "",
        "kunyomi": "デカメートル",
        "english": "dekametre"
    },
    {
        "kanji": "粃",
        "onyomi": "ヒ",
        "kunyomi": "しな, しいな",
        "english": "empty grain husk"
    },
    {
        "kanji": "粐",
        "onyomi": "ロ, コ",
        "kunyomi": "ぬか",
        "english": "rice-bran"
    },
    {
        "kanji": "粤",
        "onyomi": "エツ",
        "kunyomi": "ここに",
        "english": "alas"
    },
    {
        "kanji": "粭",
        "onyomi": "",
        "kunyomi": "すくも",
        "english": "chaff"
    },
    {
        "kanji": "粢",
        "onyomi": "シ",
        "kunyomi": "しとぎ",
        "english": "millet"
    },
    {
        "kanji": "粫",
        "onyomi": "ジ, メン",
        "kunyomi": "うるち",
        "english": "nonglutinous grain"
    },
    {
        "kanji": "粡",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "unpolished rice"
    },
    {
        "kanji": "粨",
        "onyomi": "",
        "kunyomi": "ヘクトメートル",
        "english": "hectometre"
    },
    {
        "kanji": "粳",
        "onyomi": "コウ",
        "kunyomi": "うるち, ぬか",
        "english": "ordinary rice"
    },
    {
        "kanji": "粲",
        "onyomi": "サン",
        "kunyomi": "いい",
        "english": "bright"
    },
    {
        "kanji": "粱",
        "onyomi": "リョウ",
        "kunyomi": "あわ",
        "english": "high quality rice"
    },
    {
        "kanji": "粮",
        "onyomi": "リョウ, ロウ",
        "kunyomi": "かて",
        "english": "food"
    },
    {
        "kanji": "粹",
        "onyomi": "スイ",
        "kunyomi": "いき",
        "english": "pure"
    },
    {
        "kanji": "粽",
        "onyomi": "ソウ",
        "kunyomi": "ちまき",
        "english": "rice dumplings steamed in bamboo leaves"
    },
    {
        "kanji": "糀",
        "onyomi": "",
        "kunyomi": "こうじ",
        "english": "malt"
    },
    {
        "kanji": "糅",
        "onyomi": "ジュウ",
        "kunyomi": "ま-じる",
        "english": "mix"
    },
    {
        "kanji": "糂",
        "onyomi": "ジン",
        "kunyomi": "",
        "english": "mixing rice into soup"
    },
    {
        "kanji": "糘",
        "onyomi": "",
        "kunyomi": "すくも",
        "english": "chaff"
    },
    {
        "kanji": "糒",
        "onyomi": "ビ, ハイ",
        "kunyomi": "ほしい, ほしい-い",
        "english": "dried boiled rice"
    },
    {
        "kanji": "糜",
        "onyomi": "ビ",
        "kunyomi": "ただ-れる",
        "english": "be inflamed"
    },
    {
        "kanji": "糢",
        "onyomi": "ボ, モ",
        "kunyomi": "かた, のっとる",
        "english": "rice snacks"
    },
    {
        "kanji": "鬻",
        "onyomi": "イク, シュク",
        "kunyomi": "かゆ, かい, ひさ-ぐ",
        "english": "sell"
    },
    {
        "kanji": "糯",
        "onyomi": "ダ, ナ",
        "kunyomi": "もちごめ",
        "english": "glutinous rice"
    },
    {
        "kanji": "糲",
        "onyomi": "レイ, ラツ",
        "kunyomi": "あら-い, くろごめ",
        "english": "unpolished rice"
    },
    {
        "kanji": "糴",
        "onyomi": "チョウ, テキ",
        "kunyomi": "う-る, せり, かいよね",
        "english": "sell (grain)"
    },
    {
        "kanji": "糶",
        "onyomi": "チョウ",
        "kunyomi": "せり, うりよね",
        "english": "auction"
    },
    {
        "kanji": "糺",
        "onyomi": "キュウ",
        "kunyomi": "ただ-す, あざな-う",
        "english": "ask"
    },
    {
        "kanji": "紆",
        "onyomi": "ウ",
        "kunyomi": "まが-る, めぐ-る",
        "english": "crouch"
    },
    {
        "kanji": "紂",
        "onyomi": "チュウ",
        "kunyomi": "しりがい",
        "english": "harness strap"
    },
    {
        "kanji": "紜",
        "onyomi": "ウン",
        "kunyomi": "みだ-れる",
        "english": "disorder"
    },
    {
        "kanji": "紕",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "braiding"
    },
    {
        "kanji": "紊",
        "onyomi": "ビン, ブン",
        "kunyomi": "みだ-れる",
        "english": "disturb"
    },
    {
        "kanji": "絅",
        "onyomi": "ケイ",
        "kunyomi": "ひ-く",
        "english": "thin silk"
    },
    {
        "kanji": "絋",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "cotton wadding"
    },
    {
        "kanji": "紮",
        "onyomi": "サツ",
        "kunyomi": "からげる",
        "english": "tie up"
    },
    {
        "kanji": "紲",
        "onyomi": "セツ",
        "kunyomi": "きずな",
        "english": "fetters"
    },
    {
        "kanji": "紿",
        "onyomi": "タイ",
        "kunyomi": "あざむ-く",
        "english": "deceive"
    },
    {
        "kanji": "紵",
        "onyomi": "チョ",
        "kunyomi": "",
        "english": "flax"
    },
    {
        "kanji": "絆",
        "onyomi": "ハン",
        "kunyomi": "きずな, ほだ-す, つな-ぐ",
        "english": "bonds"
    },
    {
        "kanji": "絳",
        "onyomi": "コウ",
        "kunyomi": "あか",
        "english": "red"
    },
    {
        "kanji": "絖",
        "onyomi": "コウ",
        "kunyomi": "ぬめ, わた",
        "english": "white rice"
    },
    {
        "kanji": "絎",
        "onyomi": "コウ",
        "kunyomi": "く-れる, く-ける",
        "english": "blindstitch"
    },
    {
        "kanji": "絲",
        "onyomi": "シ",
        "kunyomi": "いと",
        "english": "thread"
    },
    {
        "kanji": "絨",
        "onyomi": "ジュウ",
        "kunyomi": "",
        "english": "wool cloth"
    },
    {
        "kanji": "絮",
        "onyomi": "ジョ, ショ",
        "kunyomi": "わた",
        "english": "cotton"
    },
    {
        "kanji": "絏",
        "onyomi": "セツ",
        "kunyomi": "",
        "english": "tie"
    },
    {
        "kanji": "絣",
        "onyomi": "ホウ",
        "kunyomi": "かすり",
        "english": "splashed pattern (on cloth)"
    },
    {
        "kanji": "經",
        "onyomi": "ケイ, キョウ",
        "kunyomi": "へ-る, た-つ, たていと, はか-る, のり",
        "english": "classic works"
    },
    {
        "kanji": "綉",
        "onyomi": "シュウ, ツ, トウ",
        "kunyomi": "",
        "english": "embroidery"
    },
    {
        "kanji": "絛",
        "onyomi": "ジュウ, ジョウ, トウ",
        "kunyomi": "さなだ",
        "english": "braid"
    },
    {
        "kanji": "綏",
        "onyomi": "スイ, タ",
        "kunyomi": "やす-い",
        "english": "peaceful"
    },
    {
        "kanji": "絽",
        "onyomi": "ロ, リョ",
        "kunyomi": "",
        "english": "silk gauze"
    },
    {
        "kanji": "綛",
        "onyomi": "",
        "kunyomi": "かせ, かすり",
        "english": "splashed dye pattern"
    },
    {
        "kanji": "綺",
        "onyomi": "キ",
        "kunyomi": "あや",
        "english": "figured cloth"
    },
    {
        "kanji": "綮",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "emblem on banner"
    },
    {
        "kanji": "綣",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "attachment"
    },
    {
        "kanji": "綵",
        "onyomi": "サイ",
        "kunyomi": "あや, あやぎぬ",
        "english": "colorful"
    },
    {
        "kanji": "緇",
        "onyomi": "シ",
        "kunyomi": "くろ",
        "english": "black clothing"
    },
    {
        "kanji": "綽",
        "onyomi": "シャク",
        "kunyomi": "あだ, しな-やか, ゆる-やか",
        "english": "loose"
    },
    {
        "kanji": "綫",
        "onyomi": "セン",
        "kunyomi": "すじ",
        "english": "thread"
    },
    {
        "kanji": "總",
        "onyomi": "ソウ",
        "kunyomi": "す-べて, すべ-て, ふさ",
        "english": "collect"
    },
    {
        "kanji": "綢",
        "onyomi": "チュウ, トウ",
        "kunyomi": "まとう",
        "english": "be clothed in"
    },
    {
        "kanji": "綯",
        "onyomi": "トウ",
        "kunyomi": "な-う, なわ, よ-る",
        "english": "twist"
    },
    {
        "kanji": "緜",
        "onyomi": "メン",
        "kunyomi": "わた, つら-なる",
        "english": "cotton"
    },
    {
        "kanji": "綸",
        "onyomi": "リン, カン",
        "kunyomi": "いと",
        "english": "thread"
    },
    {
        "kanji": "綟",
        "onyomi": "レイ",
        "kunyomi": "もじ",
        "english": "yellowish green"
    },
    {
        "kanji": "綰",
        "onyomi": "ワン",
        "kunyomi": "わが-ねる, たが-ねる, たか-ねる",
        "english": "bend around"
    },
    {
        "kanji": "緘",
        "onyomi": "カン",
        "kunyomi": "かん-する, と-じる",
        "english": "shut"
    },
    {
        "kanji": "緝",
        "onyomi": "シュウ",
        "kunyomi": "つむ-ぐ",
        "english": "spin thread"
    },
    {
        "kanji": "緤",
        "onyomi": "セツ, セチ",
        "kunyomi": "きずな, つな-ぐ",
        "english": "leash"
    },
    {
        "kanji": "緞",
        "onyomi": "ドン, タン",
        "kunyomi": "",
        "english": "damask"
    },
    {
        "kanji": "緻",
        "onyomi": "チ",
        "kunyomi": "こまか-い",
        "english": "fine (i.e. not coarse)"
    },
    {
        "kanji": "緲",
        "onyomi": "ビョウ, ミョウ",
        "kunyomi": "",
        "english": "faint"
    },
    {
        "kanji": "緡",
        "onyomi": "ビン, コン, ミン",
        "kunyomi": "さし, つりいと, なわ, ぜにさし",
        "english": "paper string"
    },
    {
        "kanji": "縅",
        "onyomi": "",
        "kunyomi": "おど-す",
        "english": "the thread/braid (of armour)"
    },
    {
        "kanji": "縊",
        "onyomi": "イ, エイ",
        "kunyomi": "くび-る, くび-れる",
        "english": "strangle"
    },
    {
        "kanji": "縣",
        "onyomi": "ケン",
        "kunyomi": "か-ける",
        "english": "county"
    },
    {
        "kanji": "縡",
        "onyomi": "サイ",
        "kunyomi": "こと",
        "english": "breath"
    },
    {
        "kanji": "縒",
        "onyomi": "シ, サ",
        "kunyomi": "よ-る",
        "english": "twist"
    },
    {
        "kanji": "縱",
        "onyomi": "ジュウ",
        "kunyomi": "たて",
        "english": "indulge in"
    },
    {
        "kanji": "縟",
        "onyomi": "ジョク",
        "kunyomi": "しげし",
        "english": "decoration"
    },
    {
        "kanji": "縉",
        "onyomi": "シン",
        "kunyomi": "さしはさ-む",
        "english": "thin red cloth"
    },
    {
        "kanji": "縋",
        "onyomi": "ツイ",
        "kunyomi": "すが-る",
        "english": "cling"
    },
    {
        "kanji": "縢",
        "onyomi": "トウ",
        "kunyomi": "かが-る, かな, から-げる, むかばき",
        "english": "cross-stitch"
    },
    {
        "kanji": "繆",
        "onyomi": "ビュウ, キュウ, ボク, リョウ",
        "kunyomi": "あやま-る, まと-う",
        "english": "error"
    },
    {
        "kanji": "繦",
        "onyomi": "キョウ",
        "kunyomi": "むつき, ぜにさし",
        "english": "string of coins"
    },
    {
        "kanji": "縻",
        "onyomi": "ビ, ミ",
        "kunyomi": "きずな",
        "english": "rope"
    },
    {
        "kanji": "縵",
        "onyomi": "マン, バン",
        "kunyomi": "",
        "english": "unpatterned silk"
    },
    {
        "kanji": "縹",
        "onyomi": "ヒョウ",
        "kunyomi": "はなだ",
        "english": "light blue"
    },
    {
        "kanji": "繃",
        "onyomi": "ホウ, ヒョウ",
        "kunyomi": "まく, たば-ねる",
        "english": "wrap"
    },
    {
        "kanji": "縷",
        "onyomi": "ル, ロウ",
        "kunyomi": "いと",
        "english": "thread"
    },
    {
        "kanji": "縲",
        "onyomi": "ルイ",
        "kunyomi": "",
        "english": "tie"
    },
    {
        "kanji": "縺",
        "onyomi": "レン",
        "kunyomi": "もつ-れる",
        "english": "tangle"
    },
    {
        "kanji": "繧",
        "onyomi": "ウン",
        "kunyomi": "",
        "english": "a method of dyeing"
    },
    {
        "kanji": "繝",
        "onyomi": "カン, ケン",
        "kunyomi": "",
        "english": "a method of dyeing"
    },
    {
        "kanji": "繖",
        "onyomi": "サン",
        "kunyomi": "",
        "english": "parasol"
    },
    {
        "kanji": "繞",
        "onyomi": "ジョウ, ニョウ",
        "kunyomi": "めぐ-る, まわ-る, もとう-る, まとう",
        "english": "surround"
    },
    {
        "kanji": "繙",
        "onyomi": "ハン, ホン",
        "kunyomi": "ひもと-く",
        "english": "peruse"
    },
    {
        "kanji": "繚",
        "onyomi": "リョウ",
        "kunyomi": "まと-う, めぐ-る",
        "english": "put on"
    },
    {
        "kanji": "繹",
        "onyomi": "エキ, ヤク",
        "kunyomi": "たずね-る, ぬ-く",
        "english": "pull out"
    },
    {
        "kanji": "繪",
        "onyomi": "カイ, エ",
        "kunyomi": "",
        "english": "picture"
    },
    {
        "kanji": "繩",
        "onyomi": "ジョウ",
        "kunyomi": "なわ, ただ-す",
        "english": "rope"
    },
    {
        "kanji": "繼",
        "onyomi": "ケイ",
        "kunyomi": "つ-ぐ, まま-",
        "english": "succeed"
    },
    {
        "kanji": "繻",
        "onyomi": "シュ",
        "kunyomi": "うすぎぬ",
        "english": "satin"
    },
    {
        "kanji": "纃",
        "onyomi": "",
        "kunyomi": "かすり",
        "english": "splashed pattern dyeing or weaving"
    },
    {
        "kanji": "緕",
        "onyomi": "",
        "kunyomi": "かすり",
        "english": "splashed pattern dyeing or weaving"
    },
    {
        "kanji": "繽",
        "onyomi": "ヒン",
        "kunyomi": "おおし",
        "english": "disorder"
    },
    {
        "kanji": "辮",
        "onyomi": "ベン, ヘン",
        "kunyomi": "あ-む",
        "english": "braid"
    },
    {
        "kanji": "繿",
        "onyomi": "ラン",
        "kunyomi": "ぼろ",
        "english": "rags"
    },
    {
        "kanji": "纈",
        "onyomi": "ケツ, ケチ",
        "kunyomi": "しぼり",
        "english": "tie-dyeing"
    },
    {
        "kanji": "纉",
        "onyomi": "サン, サブ",
        "kunyomi": "つ-ぐ",
        "english": "succeed to"
    },
    {
        "kanji": "續",
        "onyomi": "ゾク, ショク, コウ, キョウ",
        "kunyomi": "つづ-く, つづ-ける, つぐ-ない",
        "english": "continue"
    },
    {
        "kanji": "纒",
        "onyomi": "テン",
        "kunyomi": "まつ-わる, まと-う, まと-める, まと-まる",
        "english": "wear"
    },
    {
        "kanji": "纐",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "tie-dyeing"
    },
    {
        "kanji": "纓",
        "onyomi": "エイ, ヨウ",
        "kunyomi": "",
        "english": "crown string"
    },
    {
        "kanji": "纔",
        "onyomi": "サン, ザン, サイ",
        "kunyomi": "わずか, ひたた",
        "english": "a little"
    },
    {
        "kanji": "纖",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "fine"
    },
    {
        "kanji": "纎",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "fine"
    },
    {
        "kanji": "纛",
        "onyomi": "トウ, トク",
        "kunyomi": "はたぼこ, おにがしら",
        "english": "flag"
    },
    {
        "kanji": "纜",
        "onyomi": "ラン",
        "kunyomi": "ともづな",
        "english": "hawser"
    },
    {
        "kanji": "缸",
        "onyomi": "コウ",
        "kunyomi": "かめ",
        "english": "urn"
    },
    {
        "kanji": "缺",
        "onyomi": "ケツ, ケン",
        "kunyomi": "か-ける, か-く",
        "english": "lack"
    },
    {
        "kanji": "罅",
        "onyomi": "カ, ケ",
        "kunyomi": "ひび, すき",
        "english": "fissure"
    },
    {
        "kanji": "罌",
        "onyomi": "オウ, エイ, ヨウ",
        "kunyomi": "もたい, ほとぎ, かめ",
        "english": "vase"
    },
    {
        "kanji": "罍",
        "onyomi": "ライ",
        "kunyomi": "さかだる",
        "english": "liquor jar"
    },
    {
        "kanji": "罎",
        "onyomi": "ドン, タン",
        "kunyomi": "びん",
        "english": "bottle"
    },
    {
        "kanji": "罐",
        "onyomi": "カン",
        "kunyomi": "かま",
        "english": "steam boiler (left side only)"
    },
    {
        "kanji": "网",
        "onyomi": "モウ, ボウ",
        "kunyomi": "あみ",
        "english": "net"
    },
    {
        "kanji": "罕",
        "onyomi": "カン",
        "kunyomi": "まれ",
        "english": "bird-catching net"
    },
    {
        "kanji": "罔",
        "onyomi": "モウ, ボウ",
        "kunyomi": "あみ, しい-る, ない",
        "english": "net"
    },
    {
        "kanji": "罘",
        "onyomi": "フ",
        "kunyomi": "うさぎあみ",
        "english": "rabbit catching net"
    },
    {
        "kanji": "罟",
        "onyomi": "コ",
        "kunyomi": "あみ",
        "english": "net"
    },
    {
        "kanji": "罠",
        "onyomi": "ビン, ミン",
        "kunyomi": "わな, あみ",
        "english": "trap"
    },
    {
        "kanji": "罨",
        "onyomi": "アン, エン",
        "kunyomi": "あみ",
        "english": "cover"
    },
    {
        "kanji": "罩",
        "onyomi": "トウ",
        "kunyomi": "こめ-る",
        "english": "fish basket kept in water"
    },
    {
        "kanji": "罧",
        "onyomi": "リン",
        "kunyomi": "",
        "english": "luring fish with a bonfire"
    },
    {
        "kanji": "罸",
        "onyomi": "バツ, バチ, ハツ",
        "kunyomi": "はっ-する",
        "english": "punishment"
    },
    {
        "kanji": "羂",
        "onyomi": "ケン",
        "kunyomi": "わな",
        "english": "trap"
    },
    {
        "kanji": "羆",
        "onyomi": "ヒ",
        "kunyomi": "ひぐま, しぐま",
        "english": "brown bear"
    },
    {
        "kanji": "羃",
        "onyomi": "ベキ",
        "kunyomi": "",
        "english": "power"
    },
    {
        "kanji": "羈",
        "onyomi": "キ, ハ",
        "kunyomi": "おもが-い, たづな, たび, つな-ぐ",
        "english": "reins"
    },
    {
        "kanji": "羇",
        "onyomi": "キ, ハ",
        "kunyomi": "おもが-い, たづな, たび, つな-ぐ",
        "english": "reins"
    },
    {
        "kanji": "羌",
        "onyomi": "キョウ",
        "kunyomi": "ああ, えびす",
        "english": "barbarian"
    },
    {
        "kanji": "羔",
        "onyomi": "コウ",
        "kunyomi": "こひつじ",
        "english": "lamb"
    },
    {
        "kanji": "羞",
        "onyomi": "シュウ",
        "kunyomi": "はじ-る, すすめ-る, は-ずかしい",
        "english": "feel ashamed"
    },
    {
        "kanji": "羝",
        "onyomi": "ラン, テイ",
        "kunyomi": "おひつじ",
        "english": "male sheep"
    },
    {
        "kanji": "羚",
        "onyomi": "レイ, リョウ",
        "kunyomi": "かもしか",
        "english": "antelope"
    },
    {
        "kanji": "羣",
        "onyomi": "グン",
        "kunyomi": "む-れる, むれ, むら, むら-がる",
        "english": "group"
    },
    {
        "kanji": "羯",
        "onyomi": "カツ, ケツ",
        "kunyomi": "",
        "english": "barbarian"
    },
    {
        "kanji": "羲",
        "onyomi": "ギ, キ",
        "kunyomi": "",
        "english": "used in proper names"
    },
    {
        "kanji": "羹",
        "onyomi": "コウ, カン",
        "kunyomi": "あつもの",
        "english": "hot soup"
    },
    {
        "kanji": "羮",
        "onyomi": "コウ, カン",
        "kunyomi": "あつもの",
        "english": "hot soup"
    },
    {
        "kanji": "羶",
        "onyomi": "セン",
        "kunyomi": "なまぐさ-い",
        "english": "smelling like a sheep"
    },
    {
        "kanji": "羸",
        "onyomi": "ルイ",
        "kunyomi": "つか-れる, よわ-い",
        "english": "thin"
    },
    {
        "kanji": "譱",
        "onyomi": "ゼン",
        "kunyomi": "よ-い, い-い, よ-く",
        "english": "virtuous"
    },
    {
        "kanji": "翅",
        "onyomi": "シ",
        "kunyomi": "はね, つばさ",
        "english": "(insect) wings"
    },
    {
        "kanji": "翆",
        "onyomi": "スイ",
        "kunyomi": "かわせみ, みどり",
        "english": "color green"
    },
    {
        "kanji": "翊",
        "onyomi": "ヨク",
        "kunyomi": "",
        "english": "flying"
    },
    {
        "kanji": "翕",
        "onyomi": "キュウ",
        "kunyomi": "あ-う",
        "english": "gather"
    },
    {
        "kanji": "翔",
        "onyomi": "ショウ",
        "kunyomi": "かけ-る, と-ぶ",
        "english": "soar"
    },
    {
        "kanji": "翡",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "kingfisher"
    },
    {
        "kanji": "翦",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "scissors"
    },
    {
        "kanji": "翩",
        "onyomi": "ヘン",
        "kunyomi": "ひるが-える",
        "english": "fluttering of flag"
    },
    {
        "kanji": "翳",
        "onyomi": "エイ",
        "kunyomi": "かげ, かげ-る, かざ-す, きぬがさ, くも-る, くもり",
        "english": "hold aloft"
    },
    {
        "kanji": "翹",
        "onyomi": "ギョウ",
        "kunyomi": "あ-げる, つまだ-てる",
        "english": "excellence"
    },
    {
        "kanji": "飜",
        "onyomi": "ハン, ホン",
        "kunyomi": "ひるがえ-す, ひるがえ-る",
        "english": "flip over"
    },
    {
        "kanji": "耆",
        "onyomi": "キ, シ",
        "kunyomi": "おい-る",
        "english": "senility"
    },
    {
        "kanji": "耄",
        "onyomi": "ボウ, モウ",
        "kunyomi": "おいぼ-れる",
        "english": "senility"
    },
    {
        "kanji": "耋",
        "onyomi": "テツ",
        "kunyomi": "としより",
        "english": "old"
    },
    {
        "kanji": "耒",
        "onyomi": "ライ, ルイ",
        "kunyomi": "き, く, すき",
        "english": "come"
    },
    {
        "kanji": "耘",
        "onyomi": "ウン",
        "kunyomi": "くさぎ-る",
        "english": "weed"
    },
    {
        "kanji": "耙",
        "onyomi": "ハ",
        "kunyomi": "",
        "english": "forked hoe"
    },
    {
        "kanji": "耜",
        "onyomi": "シ",
        "kunyomi": "すき",
        "english": "plough"
    },
    {
        "kanji": "耡",
        "onyomi": "ジョ",
        "kunyomi": "す-く, すき",
        "english": "plough"
    },
    {
        "kanji": "耨",
        "onyomi": "ドウ, ジョク, ヌ, ジュク",
        "kunyomi": "くさぎ-る, くわ, すき",
        "english": "hoe"
    },
    {
        "kanji": "耿",
        "onyomi": "コウ",
        "kunyomi": "ひかり",
        "english": "light"
    },
    {
        "kanji": "耻",
        "onyomi": "チ",
        "kunyomi": "は-じる, はじ, は-じらう, は-ずかしい",
        "english": "shame"
    },
    {
        "kanji": "聊",
        "onyomi": "リョウ",
        "kunyomi": "いささか",
        "english": "slightly"
    },
    {
        "kanji": "聆",
        "onyomi": "レイ, リョウ",
        "kunyomi": "きく",
        "english": "listening"
    },
    {
        "kanji": "聒",
        "onyomi": "カツ",
        "kunyomi": "かまびす-しい",
        "english": "noisy"
    },
    {
        "kanji": "聘",
        "onyomi": "ヘイ",
        "kunyomi": "へい-する, と-う, め-す",
        "english": "invite"
    },
    {
        "kanji": "聚",
        "onyomi": "シュウ, シュ",
        "kunyomi": "あつ-まる",
        "english": "assemble"
    },
    {
        "kanji": "聟",
        "onyomi": "セイ",
        "kunyomi": "むこ",
        "english": "son-in-law"
    },
    {
        "kanji": "聢",
        "onyomi": "",
        "kunyomi": "しか, しかと",
        "english": "certainly"
    },
    {
        "kanji": "聨",
        "onyomi": "レン",
        "kunyomi": "つら-なる, つら-ねる",
        "english": "party"
    },
    {
        "kanji": "聳",
        "onyomi": "ショウ",
        "kunyomi": "そび-える",
        "english": "rise"
    },
    {
        "kanji": "聲",
        "onyomi": "セイ, ショウ",
        "kunyomi": "こえ, こわ-",
        "english": "sound"
    },
    {
        "kanji": "聰",
        "onyomi": "ソウ",
        "kunyomi": "さと-い, みみざと-い",
        "english": "wise"
    },
    {
        "kanji": "聶",
        "onyomi": "ショウ, ジョウ, ニョウ",
        "kunyomi": "ささや-く",
        "english": "whisper"
    },
    {
        "kanji": "聹",
        "onyomi": "ネイ",
        "kunyomi": "",
        "english": "noisy"
    },
    {
        "kanji": "聽",
        "onyomi": "チョウ",
        "kunyomi": "き-く, ゆる-す",
        "english": "careful enquiry"
    },
    {
        "kanji": "聿",
        "onyomi": "イチ, イツ",
        "kunyomi": "ふで, ここに",
        "english": "brush"
    },
    {
        "kanji": "肄",
        "onyomi": "イ",
        "kunyomi": "なら-う",
        "english": "learn"
    },
    {
        "kanji": "肆",
        "onyomi": "シ",
        "kunyomi": "つら-ねる, ほしいまま, みせ",
        "english": "four"
    },
    {
        "kanji": "肅",
        "onyomi": "シュク, スク",
        "kunyomi": "つつし-む",
        "english": "quietly"
    },
    {
        "kanji": "肛",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "anus"
    },
    {
        "kanji": "肓",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "interior region of the body too deep to be reached by acupuncture"
    },
    {
        "kanji": "肚",
        "onyomi": "ト",
        "kunyomi": "はら",
        "english": "belly"
    },
    {
        "kanji": "肭",
        "onyomi": "トツ, ジク",
        "kunyomi": "",
        "english": "new moon"
    },
    {
        "kanji": "冐",
        "onyomi": "ボウ",
        "kunyomi": "おか-す",
        "english": "risk"
    },
    {
        "kanji": "肬",
        "onyomi": "ユ, ユウ",
        "kunyomi": "いぼ",
        "english": "wart"
    },
    {
        "kanji": "胛",
        "onyomi": "コウ",
        "kunyomi": "かいがらぼね",
        "english": "shoulder blade"
    },
    {
        "kanji": "胥",
        "onyomi": "ショ, ソ",
        "kunyomi": "あい, み-る, みな",
        "english": "together"
    },
    {
        "kanji": "胙",
        "onyomi": "ソ, サク",
        "kunyomi": "ひもろぎ",
        "english": "offerings to gods"
    },
    {
        "kanji": "胝",
        "onyomi": "チ",
        "kunyomi": "あかぎれ",
        "english": "chap"
    },
    {
        "kanji": "胄",
        "onyomi": "チュウ",
        "kunyomi": "かぶと, ちすじ, よつぎ",
        "english": "lineage"
    },
    {
        "kanji": "胚",
        "onyomi": "ハイ",
        "kunyomi": "はらみ, はら-む",
        "english": "embryo"
    },
    {
        "kanji": "胖",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "half a sacrifice"
    },
    {
        "kanji": "脉",
        "onyomi": "ミャク",
        "kunyomi": "すじ",
        "english": "vein (blood, ore)"
    },
    {
        "kanji": "胯",
        "onyomi": "コウ, カ, コ",
        "kunyomi": "また",
        "english": "crotch"
    },
    {
        "kanji": "胱",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "bladder"
    },
    {
        "kanji": "脛",
        "onyomi": "ケイ",
        "kunyomi": "すね, はぎ",
        "english": "leg"
    },
    {
        "kanji": "脩",
        "onyomi": "シュウ",
        "kunyomi": "おさ-める, なが-い, ほじし",
        "english": "dried meat"
    },
    {
        "kanji": "脣",
        "onyomi": "シン",
        "kunyomi": "くちびる",
        "english": "lip"
    },
    {
        "kanji": "脯",
        "onyomi": "フ, ホ",
        "kunyomi": "こじし, ほじし",
        "english": "dried meat"
    },
    {
        "kanji": "腋",
        "onyomi": "エキ, セキ",
        "kunyomi": "わき",
        "english": "armpit"
    },
    {
        "kanji": "隋",
        "onyomi": "ズイ, スイ, タ, ダ",
        "kunyomi": "",
        "english": "name of a Chinese dynasty"
    },
    {
        "kanji": "腆",
        "onyomi": "テン",
        "kunyomi": "あつ-い",
        "english": "much"
    },
    {
        "kanji": "脾",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "spleen"
    },
    {
        "kanji": "腓",
        "onyomi": "ヒ",
        "kunyomi": "ふくらはぎ, こむら, こぶら",
        "english": "calf (of leg)"
    },
    {
        "kanji": "腑",
        "onyomi": "フ",
        "kunyomi": "はらわた",
        "english": "viscera"
    },
    {
        "kanji": "胼",
        "onyomi": "ヘン",
        "kunyomi": "",
        "english": "callus"
    },
    {
        "kanji": "腱",
        "onyomi": "ケン, キン",
        "kunyomi": "",
        "english": "tendon"
    },
    {
        "kanji": "腮",
        "onyomi": "サイ",
        "kunyomi": "あご, えら",
        "english": "jaw"
    },
    {
        "kanji": "腥",
        "onyomi": "セイ, ショウ",
        "kunyomi": "なまぐさ-い",
        "english": "bloody"
    },
    {
        "kanji": "腦",
        "onyomi": "ノウ, ドウ",
        "kunyomi": "のうずる",
        "english": "brain"
    },
    {
        "kanji": "腴",
        "onyomi": "ユ",
        "kunyomi": "あぶら, こえ-る",
        "english": "fat"
    },
    {
        "kanji": "膃",
        "onyomi": "オツ",
        "kunyomi": "",
        "english": "fat"
    },
    {
        "kanji": "膈",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "diaphragm"
    },
    {
        "kanji": "膊",
        "onyomi": "ハク",
        "kunyomi": "ほじし",
        "english": "arm"
    },
    {
        "kanji": "膀",
        "onyomi": "ボウ, ホウ",
        "kunyomi": "",
        "english": "bladder"
    },
    {
        "kanji": "膂",
        "onyomi": "リョ, ロ",
        "kunyomi": "せぼね",
        "english": "backbone"
    },
    {
        "kanji": "膠",
        "onyomi": "コウ, キョウ",
        "kunyomi": "にかわ, にべ",
        "english": "glue"
    },
    {
        "kanji": "膕",
        "onyomi": "カク, コク, キョク",
        "kunyomi": "ひかがみ",
        "english": "hollow of knee"
    },
    {
        "kanji": "膤",
        "onyomi": "セツ",
        "kunyomi": "ゆき, たら, そり",
        "english": "snow"
    },
    {
        "kanji": "膣",
        "onyomi": "チツ",
        "kunyomi": "",
        "english": "vagina"
    },
    {
        "kanji": "腟",
        "onyomi": "チツ",
        "kunyomi": "",
        "english": "vagina"
    },
    {
        "kanji": "膓",
        "onyomi": "チョウ",
        "kunyomi": "はらわた",
        "english": "guts"
    },
    {
        "kanji": "膩",
        "onyomi": "ジ, ニ",
        "kunyomi": "あぶら, あぶらあか",
        "english": "smooth"
    },
    {
        "kanji": "膰",
        "onyomi": "ハン",
        "kunyomi": "ひもごり, ひもろぎ",
        "english": "offerings to gods"
    },
    {
        "kanji": "膵",
        "onyomi": "スイ",
        "kunyomi": "",
        "english": "pancreas"
    },
    {
        "kanji": "膾",
        "onyomi": "カイ, ケ",
        "kunyomi": "なます",
        "english": "raw fish salad"
    },
    {
        "kanji": "膸",
        "onyomi": "ズイ",
        "kunyomi": "",
        "english": "marrow"
    },
    {
        "kanji": "膽",
        "onyomi": "タン",
        "kunyomi": "きも",
        "english": "gall bladder"
    },
    {
        "kanji": "臀",
        "onyomi": "デン, トン",
        "kunyomi": "しり",
        "english": "buttocks"
    },
    {
        "kanji": "臂",
        "onyomi": "ヒ",
        "kunyomi": "ひじ",
        "english": "elbow"
    },
    {
        "kanji": "膺",
        "onyomi": "ヨウ, オウ",
        "kunyomi": "むね",
        "english": "breast"
    },
    {
        "kanji": "臉",
        "onyomi": "ケン, セン, レン",
        "kunyomi": "",
        "english": "area between eye and cheek"
    },
    {
        "kanji": "臍",
        "onyomi": "セイ, サイ",
        "kunyomi": "へそ, ほぞ",
        "english": "navel"
    },
    {
        "kanji": "臑",
        "onyomi": "ジ, ドウ, ジュ, デイ",
        "kunyomi": "すね",
        "english": "leg"
    },
    {
        "kanji": "臙",
        "onyomi": "エン",
        "kunyomi": "のど, べに",
        "english": "rouge"
    },
    {
        "kanji": "臘",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "12th lunar month"
    },
    {
        "kanji": "臈",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "year-end sacrifice"
    },
    {
        "kanji": "臚",
        "onyomi": "ロ, リョ",
        "kunyomi": "",
        "english": "skin"
    },
    {
        "kanji": "臟",
        "onyomi": "ゾウ",
        "kunyomi": "はらわた",
        "english": "viscera"
    },
    {
        "kanji": "臠",
        "onyomi": "レン",
        "kunyomi": "きりみ",
        "english": "witness"
    },
    {
        "kanji": "臧",
        "onyomi": "ゾウ, ソウ",
        "kunyomi": "よい",
        "english": "good"
    },
    {
        "kanji": "臺",
        "onyomi": "ダイ, タイ",
        "kunyomi": "うてな, われ, つかさ",
        "english": "stand"
    },
    {
        "kanji": "臻",
        "onyomi": "シン",
        "kunyomi": "いた-る",
        "english": "arrive"
    },
    {
        "kanji": "臾",
        "onyomi": "ユ, ヨ, ヨウ",
        "kunyomi": "",
        "english": "a little while"
    },
    {
        "kanji": "舁",
        "onyomi": "ヨ",
        "kunyomi": "か-く",
        "english": "bear"
    },
    {
        "kanji": "舂",
        "onyomi": "ショウ",
        "kunyomi": "うすつ-く, うすづ-く, つ-く",
        "english": "pound (mortar)"
    },
    {
        "kanji": "舅",
        "onyomi": "キュウ",
        "kunyomi": "しゅうと",
        "english": "father-in-law"
    },
    {
        "kanji": "與",
        "onyomi": "ヨ",
        "kunyomi": "あた-える, あずか-る, くみ-する, ともに",
        "english": "participate in"
    },
    {
        "kanji": "舊",
        "onyomi": "キュウ",
        "kunyomi": "ふる-い, もと",
        "english": "old things"
    },
    {
        "kanji": "舍",
        "onyomi": "セキ, シャ",
        "kunyomi": "やど-る",
        "english": "inn"
    },
    {
        "kanji": "舐",
        "onyomi": "シ",
        "kunyomi": "ねぶ-る, な-める",
        "english": "lick"
    },
    {
        "kanji": "舖",
        "onyomi": "ホ",
        "kunyomi": "",
        "english": "shop"
    },
    {
        "kanji": "舩",
        "onyomi": "セン",
        "kunyomi": "ふね, ふな-",
        "english": "boat"
    },
    {
        "kanji": "舫",
        "onyomi": "ホウ",
        "kunyomi": "もや-う, もやいぶね",
        "english": "moor"
    },
    {
        "kanji": "舸",
        "onyomi": "カ",
        "kunyomi": "ふね",
        "english": "large boat"
    },
    {
        "kanji": "舳",
        "onyomi": "ジク, チク, チュウ",
        "kunyomi": "へ, へさき",
        "english": "bow"
    },
    {
        "kanji": "艀",
        "onyomi": "フ",
        "kunyomi": "はしけ",
        "english": "sampan"
    },
    {
        "kanji": "艙",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "hold (ship)"
    },
    {
        "kanji": "艘",
        "onyomi": "ショウ, シュウ, ソウ",
        "kunyomi": "ふね",
        "english": "counter for small boats"
    },
    {
        "kanji": "艝",
        "onyomi": "",
        "kunyomi": "そり",
        "english": "sled"
    },
    {
        "kanji": "艚",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "boat"
    },
    {
        "kanji": "艟",
        "onyomi": "ドウ, ショウ, トウ",
        "kunyomi": "いくさぶね",
        "english": "fighting ship"
    },
    {
        "kanji": "艤",
        "onyomi": "ギ",
        "kunyomi": "ふなよそおい",
        "english": "landing a boat"
    },
    {
        "kanji": "艢",
        "onyomi": "ロ, ショウ, ゾウ",
        "kunyomi": "とも, ほばしら",
        "english": "bow"
    },
    {
        "kanji": "艨",
        "onyomi": "モウ, ボウ",
        "kunyomi": "いくさぶね",
        "english": "fighting ship"
    },
    {
        "kanji": "艪",
        "onyomi": "ロ",
        "kunyomi": "やぐら, かい",
        "english": "oar"
    },
    {
        "kanji": "艫",
        "onyomi": "ロ",
        "kunyomi": "とも",
        "english": "stern (of ship)"
    },
    {
        "kanji": "舮",
        "onyomi": "ロ",
        "kunyomi": "とも, へさき",
        "english": "bow or prow of boat"
    },
    {
        "kanji": "艱",
        "onyomi": "カン, ケン",
        "kunyomi": "なや-む, かた-い, なや-み",
        "english": "difficult"
    },
    {
        "kanji": "艷",
        "onyomi": "エン",
        "kunyomi": "つや, なま-めかしい, あで-やか, つや-めく, なま-めく",
        "english": "luster"
    },
    {
        "kanji": "艸",
        "onyomi": "ソウ",
        "kunyomi": "くさ",
        "english": "grass"
    },
    {
        "kanji": "艾",
        "onyomi": "カイ, ゲイ",
        "kunyomi": "もぐさ, よもぎ, おさ-める, か-る",
        "english": "moxa"
    },
    {
        "kanji": "芍",
        "onyomi": "シャク",
        "kunyomi": "",
        "english": "peony"
    },
    {
        "kanji": "芒",
        "onyomi": "ボウ, コウ, モウ",
        "kunyomi": "すすき, のぎ, のげ",
        "english": "pampas grass"
    },
    {
        "kanji": "芫",
        "onyomi": "ゲン, ガン",
        "kunyomi": "",
        "english": "type of vetch"
    },
    {
        "kanji": "芟",
        "onyomi": "セン, サン",
        "kunyomi": "か-る",
        "english": "cut"
    },
    {
        "kanji": "芻",
        "onyomi": "スウ, シュウ, ス",
        "kunyomi": "まぐさ",
        "english": "grass cutting"
    },
    {
        "kanji": "芬",
        "onyomi": "フン",
        "kunyomi": "かおり, こうば-しい",
        "english": "perfume"
    },
    {
        "kanji": "苡",
        "onyomi": "イ, シ, ワ",
        "kunyomi": "くさ",
        "english": "adlay"
    },
    {
        "kanji": "苣",
        "onyomi": "キョ",
        "kunyomi": "ちしゃ",
        "english": "torch"
    },
    {
        "kanji": "苟",
        "onyomi": "コウ, ク",
        "kunyomi": "いやしく-も",
        "english": "any"
    },
    {
        "kanji": "苒",
        "onyomi": "ゼン",
        "kunyomi": "",
        "english": "flourishing"
    },
    {
        "kanji": "苴",
        "onyomi": "ソ, サ, シャ, ショ",
        "kunyomi": "つと, あさ",
        "english": "husk"
    },
    {
        "kanji": "苳",
        "onyomi": "トウ",
        "kunyomi": "ふき",
        "english": "butterbur"
    },
    {
        "kanji": "苺",
        "onyomi": "バイ, マイ",
        "kunyomi": "いちご",
        "english": "strawberry"
    },
    {
        "kanji": "莓",
        "onyomi": "バイ, マイ",
        "kunyomi": "いちご",
        "english": "wild strawberry"
    },
    {
        "kanji": "范",
        "onyomi": "ハン",
        "kunyomi": "いがた",
        "english": "bee"
    },
    {
        "kanji": "苻",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "kudzu-like plant"
    },
    {
        "kanji": "苹",
        "onyomi": "ヘイ, ビョウ, ホウ",
        "kunyomi": "ほ",
        "english": "duckweed"
    },
    {
        "kanji": "苞",
        "onyomi": "ホウ, ヒョウ",
        "kunyomi": "つと",
        "english": "husk"
    },
    {
        "kanji": "茆",
        "onyomi": "エン, ボウ",
        "kunyomi": "その, かや, ぬなわ",
        "english": "garden"
    },
    {
        "kanji": "苜",
        "onyomi": "モク, ボク",
        "kunyomi": "",
        "english": "clover"
    },
    {
        "kanji": "茉",
        "onyomi": "マツ, バツ, マ",
        "kunyomi": "",
        "english": "jasmine"
    },
    {
        "kanji": "苙",
        "onyomi": "リュウ, キュウ",
        "kunyomi": "",
        "english": "type of herb"
    },
    {
        "kanji": "茵",
        "onyomi": "イン",
        "kunyomi": "しとね",
        "english": "cushion"
    },
    {
        "kanji": "茴",
        "onyomi": "ウイ, カイ",
        "kunyomi": "",
        "english": "fennel"
    },
    {
        "kanji": "茖",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "mountain leek"
    },
    {
        "kanji": "茲",
        "onyomi": "シ, ジ",
        "kunyomi": "ここ-に, し-げる",
        "english": "here"
    },
    {
        "kanji": "茱",
        "onyomi": "シュ",
        "kunyomi": "",
        "english": "river ginger tree"
    },
    {
        "kanji": "荀",
        "onyomi": "ジュン, シュン",
        "kunyomi": "",
        "english": "type of plant"
    },
    {
        "kanji": "茹",
        "onyomi": "ジョ, ニョ",
        "kunyomi": "ゆ-でる, う-でる",
        "english": "boil"
    },
    {
        "kanji": "荐",
        "onyomi": "セン",
        "kunyomi": "しきりに",
        "english": "mat"
    },
    {
        "kanji": "荅",
        "onyomi": "トウ",
        "kunyomi": "あずき, こた-える",
        "english": "adzuki beans"
    },
    {
        "kanji": "茯",
        "onyomi": "フク, ブク, ヒ, ビ",
        "kunyomi": "",
        "english": "type of mushroom"
    },
    {
        "kanji": "茫",
        "onyomi": "ボウ",
        "kunyomi": "とお-い",
        "english": "wide"
    },
    {
        "kanji": "茗",
        "onyomi": "ミョウ, メイ",
        "kunyomi": "ちゃ",
        "english": "tea"
    },
    {
        "kanji": "茘",
        "onyomi": "レイ, リ, レン",
        "kunyomi": "おおにら",
        "english": "scallion"
    },
    {
        "kanji": "莅",
        "onyomi": "リ, レイ",
        "kunyomi": "るい, のぞ-む, つ-く",
        "english": "proceed to"
    },
    {
        "kanji": "莚",
        "onyomi": "エン",
        "kunyomi": "むしろ",
        "english": "straw mat"
    },
    {
        "kanji": "莪",
        "onyomi": "ガ",
        "kunyomi": "",
        "english": "type of thistle"
    },
    {
        "kanji": "莟",
        "onyomi": "ガン, カン",
        "kunyomi": "つぼみ",
        "english": "bud (plant)"
    },
    {
        "kanji": "莢",
        "onyomi": "キョウ",
        "kunyomi": "さや",
        "english": "pod"
    },
    {
        "kanji": "莖",
        "onyomi": "ケイ, キョウ",
        "kunyomi": "くき",
        "english": "stem"
    },
    {
        "kanji": "茣",
        "onyomi": "ゴ",
        "kunyomi": "",
        "english": "mat"
    },
    {
        "kanji": "莎",
        "onyomi": "サ, シャ",
        "kunyomi": "はますげ",
        "english": "sedge"
    },
    {
        "kanji": "莇",
        "onyomi": "ジョ",
        "kunyomi": "あさがら",
        "english": "Chinese matrimony vine"
    },
    {
        "kanji": "莊",
        "onyomi": "ソウ, ショウ, チャン",
        "kunyomi": "ほうき, おごそ-か",
        "english": "broom"
    },
    {
        "kanji": "荼",
        "onyomi": "タ, ズ, ト, ダ",
        "kunyomi": "にがな",
        "english": "a weed"
    },
    {
        "kanji": "莵",
        "onyomi": "ト, ツ",
        "kunyomi": "うさぎ",
        "english": "dodder (plant)"
    },
    {
        "kanji": "荳",
        "onyomi": "トウ, ズ",
        "kunyomi": "まめ",
        "english": "bean"
    },
    {
        "kanji": "荵",
        "onyomi": "ニン, ジン",
        "kunyomi": "しのぶ",
        "english": "hare's foot fern"
    },
    {
        "kanji": "莠",
        "onyomi": "ユウ",
        "kunyomi": "はぐさ",
        "english": "appears good but is bad"
    },
    {
        "kanji": "莉",
        "onyomi": "リ, ライ, レイ",
        "kunyomi": "",
        "english": "jasmine"
    },
    {
        "kanji": "莨",
        "onyomi": "ロウ",
        "kunyomi": "たばこ",
        "english": "tobacco"
    },
    {
        "kanji": "菴",
        "onyomi": "アン",
        "kunyomi": "いおり, いお",
        "english": "hermitage"
    },
    {
        "kanji": "萓",
        "onyomi": "ギ",
        "kunyomi": "",
        "english": "day lily"
    },
    {
        "kanji": "菫",
        "onyomi": "キン",
        "kunyomi": "すみれ",
        "english": "the violet"
    },
    {
        "kanji": "菎",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "a kind of fragrant herb"
    },
    {
        "kanji": "菽",
        "onyomi": "シュク",
        "kunyomi": "まめ",
        "english": "beans"
    },
    {
        "kanji": "萃",
        "onyomi": "スイ, サイ",
        "kunyomi": "あつ-まる",
        "english": "collect"
    },
    {
        "kanji": "菘",
        "onyomi": "スウ, シュウ",
        "kunyomi": "",
        "english": "type of rape plant"
    },
    {
        "kanji": "萋",
        "onyomi": "セイ, サイ",
        "kunyomi": "",
        "english": "luxuriant growth"
    },
    {
        "kanji": "菁",
        "onyomi": "セイ, ショウ",
        "kunyomi": "",
        "english": "turnip"
    },
    {
        "kanji": "菷",
        "onyomi": "シュウ, ソウ",
        "kunyomi": "ほうき",
        "english": "broom"
    },
    {
        "kanji": "萇",
        "onyomi": "チョウ",
        "kunyomi": "",
        "english": "type of plant"
    },
    {
        "kanji": "菠",
        "onyomi": "ハ, ホ",
        "kunyomi": "ほうれんそう",
        "english": "spinach"
    },
    {
        "kanji": "菲",
        "onyomi": "ヒ",
        "kunyomi": "うす-い",
        "english": "thin"
    },
    {
        "kanji": "萍",
        "onyomi": "ヘイ, ヒョウ",
        "kunyomi": "うきくさ",
        "english": "floating plants"
    },
    {
        "kanji": "萢",
        "onyomi": "",
        "kunyomi": "やち, やら",
        "english": "bog"
    },
    {
        "kanji": "萠",
        "onyomi": "ホウ",
        "kunyomi": "も-える, きざ-す, めばえ, きざ-し",
        "english": "show symptoms of"
    },
    {
        "kanji": "莽",
        "onyomi": "ボウ, モウ",
        "kunyomi": "くさ",
        "english": "grass"
    },
    {
        "kanji": "萸",
        "onyomi": "ユ",
        "kunyomi": "",
        "english": "oleaster"
    },
    {
        "kanji": "蔆",
        "onyomi": "リョウ",
        "kunyomi": "ひし",
        "english": "water chestnut"
    },
    {
        "kanji": "菻",
        "onyomi": "リン",
        "kunyomi": "",
        "english": "kind of thistle"
    },
    {
        "kanji": "葭",
        "onyomi": "カ",
        "kunyomi": "よし, あし",
        "english": "reed"
    },
    {
        "kanji": "萪",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "type of wisteria"
    },
    {
        "kanji": "萼",
        "onyomi": "ガク",
        "kunyomi": "うてな",
        "english": "calyx"
    },
    {
        "kanji": "蕚",
        "onyomi": "ガク",
        "kunyomi": "うてな",
        "english": "calyx"
    },
    {
        "kanji": "蒄",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "type of plant"
    },
    {
        "kanji": "葷",
        "onyomi": "クン",
        "kunyomi": "",
        "english": "garlic"
    },
    {
        "kanji": "葫",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "garlic"
    },
    {
        "kanji": "蒭",
        "onyomi": "シュウ, ス, スウ",
        "kunyomi": "まぐさ",
        "english": "to cut grass"
    },
    {
        "kanji": "葮",
        "onyomi": "ダン, タン",
        "kunyomi": "むくげ",
        "english": "rose of Sharon"
    },
    {
        "kanji": "蒂",
        "onyomi": "テイ, タイ",
        "kunyomi": "へた",
        "english": "peduncle"
    },
    {
        "kanji": "葩",
        "onyomi": "ハ",
        "kunyomi": "はな",
        "english": "flower"
    },
    {
        "kanji": "葆",
        "onyomi": "ホウ, ホ",
        "kunyomi": "し-げる",
        "english": "dense growth"
    },
    {
        "kanji": "萬",
        "onyomi": "マン, バン",
        "kunyomi": "よろず",
        "english": "ten thousand"
    },
    {
        "kanji": "葯",
        "onyomi": "ヤク",
        "kunyomi": "",
        "english": "pollen pod at tip of stamen"
    },
    {
        "kanji": "葹",
        "onyomi": "シ",
        "kunyomi": "おなもみ",
        "english": "cocklebur"
    },
    {
        "kanji": "萵",
        "onyomi": "ワ",
        "kunyomi": "",
        "english": "lettuce"
    },
    {
        "kanji": "蓊",
        "onyomi": "オウ",
        "kunyomi": "とう",
        "english": "flower stalk"
    },
    {
        "kanji": "葢",
        "onyomi": "ガイ, カイ, コウ",
        "kunyomi": "ふた, けだ-し, おお-う, かさ, かこう",
        "english": "cover"
    },
    {
        "kanji": "蒹",
        "onyomi": "ケン",
        "kunyomi": "おぎ",
        "english": "type of reed"
    },
    {
        "kanji": "蒿",
        "onyomi": "コウ",
        "kunyomi": "よもぎ",
        "english": "mugwort"
    },
    {
        "kanji": "蒟",
        "onyomi": "コン, ク",
        "kunyomi": "",
        "english": "devil's tongue (plant)"
    },
    {
        "kanji": "蓙",
        "onyomi": "ザ",
        "kunyomi": "ござ",
        "english": "mat"
    },
    {
        "kanji": "蓍",
        "onyomi": "シ",
        "kunyomi": "めどぎ",
        "english": "yarrow"
    },
    {
        "kanji": "蒻",
        "onyomi": "ジャク, ニャク",
        "kunyomi": "",
        "english": "a kind of water plant"
    },
    {
        "kanji": "蓚",
        "onyomi": "シュウ",
        "kunyomi": "",
        "english": "(used only in compounds)"
    },
    {
        "kanji": "蓐",
        "onyomi": "ジョク, ニク",
        "kunyomi": "しとね",
        "english": "bed"
    },
    {
        "kanji": "蓁",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "dense growth"
    },
    {
        "kanji": "蓆",
        "onyomi": "セキ",
        "kunyomi": "むしろ",
        "english": "straw mat"
    },
    {
        "kanji": "蓖",
        "onyomi": "ヒ, ヘイ",
        "kunyomi": "",
        "english": "castor-oil plant"
    },
    {
        "kanji": "蒡",
        "onyomi": "ボウ, ホウ",
        "kunyomi": "",
        "english": "burdock"
    },
    {
        "kanji": "蔡",
        "onyomi": "サイ",
        "kunyomi": "",
        "english": "type of tortoise used for divination"
    },
    {
        "kanji": "蓿",
        "onyomi": "シュク",
        "kunyomi": "",
        "english": "clover"
    },
    {
        "kanji": "蓴",
        "onyomi": "シュン",
        "kunyomi": "ぬなわ",
        "english": "type of water plant"
    },
    {
        "kanji": "蔗",
        "onyomi": "シャ, ショ",
        "kunyomi": "さとうきび",
        "english": "sugar cane"
    },
    {
        "kanji": "蔘",
        "onyomi": "シン, サン",
        "kunyomi": "",
        "english": "luxurious growth of grass"
    },
    {
        "kanji": "蔬",
        "onyomi": "ソ, ショ",
        "kunyomi": "あおもの",
        "english": "greens"
    },
    {
        "kanji": "蔟",
        "onyomi": "ゾク, ソウ",
        "kunyomi": "まぶし",
        "english": "gather together"
    },
    {
        "kanji": "蔕",
        "onyomi": "テイ, タイ",
        "kunyomi": "へた",
        "english": "calyx"
    },
    {
        "kanji": "蔔",
        "onyomi": "フク, ホク",
        "kunyomi": "",
        "english": "giant radish"
    },
    {
        "kanji": "蓼",
        "onyomi": "シン, リク, リョウ",
        "kunyomi": "たで",
        "english": "luxurious grass"
    },
    {
        "kanji": "蕀",
        "onyomi": "キョク",
        "kunyomi": "",
        "english": "milwort"
    },
    {
        "kanji": "蕣",
        "onyomi": "シュン",
        "kunyomi": "むくげ, あさがお",
        "english": "rose of Sharon"
    },
    {
        "kanji": "蕘",
        "onyomi": "ジョウ",
        "kunyomi": "たきぎ, きこり",
        "english": "firewood"
    },
    {
        "kanji": "蕈",
        "onyomi": "ジン, シン",
        "kunyomi": "きのこ, たけ",
        "english": "mushroom"
    },
    {
        "kanji": "蕁",
        "onyomi": "ジン, タン",
        "kunyomi": "",
        "english": "a kind of grass"
    },
    {
        "kanji": "蘂",
        "onyomi": "ズイ",
        "kunyomi": "しべ",
        "english": "pistil"
    },
    {
        "kanji": "蕋",
        "onyomi": "ズイ",
        "kunyomi": "しべ",
        "english": "pistil"
    },
    {
        "kanji": "蕕",
        "onyomi": "ユウ, ユ",
        "kunyomi": "",
        "english": "foul-smelling grass"
    },
    {
        "kanji": "薀",
        "onyomi": "ウン, オン",
        "kunyomi": "たくわ-える, つ-む",
        "english": "pile up"
    },
    {
        "kanji": "薤",
        "onyomi": "カイ",
        "kunyomi": "らっきょう, にら",
        "english": "scallion"
    },
    {
        "kanji": "薈",
        "onyomi": "カイ, ワイ",
        "kunyomi": "",
        "english": "luxuriant vegetation"
    },
    {
        "kanji": "薑",
        "onyomi": "キョウ, コウ",
        "kunyomi": "はじかみ",
        "english": "ginger"
    },
    {
        "kanji": "薊",
        "onyomi": "ケイ, キ, カイ, ケ",
        "kunyomi": "あざみ, さく, とげ",
        "english": "thistle"
    },
    {
        "kanji": "薨",
        "onyomi": "コウ",
        "kunyomi": "こう-じる, みまか-る",
        "english": "die"
    },
    {
        "kanji": "蕭",
        "onyomi": "ショウ",
        "kunyomi": "よもぎ",
        "english": "a weed"
    },
    {
        "kanji": "薔",
        "onyomi": "バ, ショウ, ショク, ソウ",
        "kunyomi": "みずたで",
        "english": "water pepper"
    },
    {
        "kanji": "薛",
        "onyomi": "セツ",
        "kunyomi": "",
        "english": "type of mugwort"
    },
    {
        "kanji": "藪",
        "onyomi": "ソウ",
        "kunyomi": "やぶ",
        "english": "thicket"
    },
    {
        "kanji": "薇",
        "onyomi": "ラ, ビ",
        "kunyomi": "ぜんまい",
        "english": "an edible fern"
    },
    {
        "kanji": "薜",
        "onyomi": "ヘイ",
        "kunyomi": "",
        "english": "type of vine"
    },
    {
        "kanji": "蕷",
        "onyomi": "ヨ",
        "kunyomi": "いも",
        "english": "yam"
    },
    {
        "kanji": "蕾",
        "onyomi": "ライ",
        "kunyomi": "つぼみ",
        "english": "bud (plants, mushrooms not yet opened)"
    },
    {
        "kanji": "薐",
        "onyomi": "ロウ",
        "kunyomi": "ほうれんそう",
        "english": "spinach"
    },
    {
        "kanji": "藉",
        "onyomi": "シャ, セキ, ジャク",
        "kunyomi": "かり-る, ふ-む",
        "english": "carpet"
    },
    {
        "kanji": "薺",
        "onyomi": "セイ, ザイ",
        "kunyomi": "ひと, ととの-える, なずな",
        "english": "water-chestnuts"
    },
    {
        "kanji": "藏",
        "onyomi": "ゾウ, ソウ",
        "kunyomi": "くら, おさ-める, かく-れる",
        "english": "hide"
    },
    {
        "kanji": "薹",
        "onyomi": "タイ",
        "kunyomi": "とう, あぶらな",
        "english": "seed pod"
    },
    {
        "kanji": "藐",
        "onyomi": "ビョウ, バク",
        "kunyomi": "かろ-んじる, とお-い",
        "english": "make light of"
    },
    {
        "kanji": "藕",
        "onyomi": "グウ, グ, ゴウ",
        "kunyomi": "はすのね",
        "english": "lotus"
    },
    {
        "kanji": "藝",
        "onyomi": "ゲイ, ウン",
        "kunyomi": "う-える, のり, わざ",
        "english": "art"
    },
    {
        "kanji": "藥",
        "onyomi": "ヤク",
        "kunyomi": "くすり",
        "english": "medicine"
    },
    {
        "kanji": "藜",
        "onyomi": "レイ",
        "kunyomi": "あかざ",
        "english": "goosefoot"
    },
    {
        "kanji": "藹",
        "onyomi": "アイ",
        "kunyomi": "",
        "english": "flourishing"
    },
    {
        "kanji": "蘊",
        "onyomi": "ウン",
        "kunyomi": "つ-む",
        "english": "pile up"
    },
    {
        "kanji": "蘓",
        "onyomi": "ソ, ス",
        "kunyomi": "よみがえ-る",
        "english": "be resurrected"
    },
    {
        "kanji": "蘋",
        "onyomi": "ヒン",
        "kunyomi": "うきくさ",
        "english": "duckweed"
    },
    {
        "kanji": "藾",
        "onyomi": "ライ",
        "kunyomi": "",
        "english": "type of mugwort"
    },
    {
        "kanji": "藺",
        "onyomi": "リン",
        "kunyomi": "い",
        "english": "rush, used for tatami covers"
    },
    {
        "kanji": "蘆",
        "onyomi": "ロ",
        "kunyomi": "あし, よし",
        "english": "reed"
    },
    {
        "kanji": "蘢",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "dragon grass"
    },
    {
        "kanji": "蘚",
        "onyomi": "セン",
        "kunyomi": "こけ",
        "english": "moss"
    },
    {
        "kanji": "蘰",
        "onyomi": "",
        "kunyomi": "かつら",
        "english": "surname"
    },
    {
        "kanji": "蘿",
        "onyomi": "ラ",
        "kunyomi": "つた",
        "english": "ivy"
    },
    {
        "kanji": "虍",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "tiger spots"
    },
    {
        "kanji": "乕",
        "onyomi": "コ",
        "kunyomi": "とら",
        "english": "tiger"
    },
    {
        "kanji": "虔",
        "onyomi": "ケン",
        "kunyomi": "つつし-む",
        "english": "respect"
    },
    {
        "kanji": "號",
        "onyomi": "コウ",
        "kunyomi": "さけ-ぶ, よびな",
        "english": "mark"
    },
    {
        "kanji": "虧",
        "onyomi": "キ",
        "kunyomi": "か-ける",
        "english": "wane (moon)"
    },
    {
        "kanji": "虱",
        "onyomi": "シツ",
        "kunyomi": "しらみ",
        "english": "lice"
    },
    {
        "kanji": "蚓",
        "onyomi": "ズ, イン",
        "kunyomi": "みみず",
        "english": "earthworm"
    },
    {
        "kanji": "蚣",
        "onyomi": "コウ, ショウ",
        "kunyomi": "",
        "english": "centipede"
    },
    {
        "kanji": "蚩",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "fool"
    },
    {
        "kanji": "蚪",
        "onyomi": "ト",
        "kunyomi": "",
        "english": "tadpole"
    },
    {
        "kanji": "蚋",
        "onyomi": "ゼイ, ネイ, ゼツ, ネチ",
        "kunyomi": "ぶゆ, ぶよ, ぶと, か",
        "english": "gnat"
    },
    {
        "kanji": "蚌",
        "onyomi": "ボウ, ホウ, ビョウ",
        "kunyomi": "はまぐり, どぶが-い",
        "english": "clam"
    },
    {
        "kanji": "蚶",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "ark shell"
    },
    {
        "kanji": "蚯",
        "onyomi": "キュウ",
        "kunyomi": "みみず",
        "english": "earthworm"
    },
    {
        "kanji": "蛄",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "mole cricket"
    },
    {
        "kanji": "蛆",
        "onyomi": "ソ, ショ",
        "kunyomi": "うじ",
        "english": "worm"
    },
    {
        "kanji": "蚰",
        "onyomi": "ユウ",
        "kunyomi": "",
        "english": "millipede"
    },
    {
        "kanji": "蛉",
        "onyomi": "レイ",
        "kunyomi": "",
        "english": "dragonfly"
    },
    {
        "kanji": "蠣",
        "onyomi": "レイ",
        "kunyomi": "かき",
        "english": "oyster"
    },
    {
        "kanji": "蚫",
        "onyomi": "ホウ",
        "kunyomi": "あわび",
        "english": "abalone"
    },
    {
        "kanji": "蛔",
        "onyomi": "カイ, ユウ",
        "kunyomi": "かいちゅう, はらのむし",
        "english": "intestinal worms"
    },
    {
        "kanji": "蛞",
        "onyomi": "カツ",
        "kunyomi": "",
        "english": "kind of slug"
    },
    {
        "kanji": "蛩",
        "onyomi": "キョウ",
        "kunyomi": "こおろぎ",
        "english": "cricket"
    },
    {
        "kanji": "蛬",
        "onyomi": "キョウ",
        "kunyomi": "こおろぎ, きりぎりす",
        "english": "cricket"
    },
    {
        "kanji": "蛟",
        "onyomi": "コウ, キョウ",
        "kunyomi": "みずち",
        "english": "dragon"
    },
    {
        "kanji": "蛛",
        "onyomi": "チュ, シュ",
        "kunyomi": "",
        "english": "spider"
    },
    {
        "kanji": "蛯",
        "onyomi": "",
        "kunyomi": "えび, うば",
        "english": "shrimp"
    },
    {
        "kanji": "蜒",
        "onyomi": "エン, タン",
        "kunyomi": "",
        "english": "meandering"
    },
    {
        "kanji": "蜆",
        "onyomi": "ケン",
        "kunyomi": "しじみ",
        "english": "fresh-water clam"
    },
    {
        "kanji": "蜈",
        "onyomi": "ゴ",
        "kunyomi": "",
        "english": "centipede"
    },
    {
        "kanji": "蜀",
        "onyomi": "ショク, ゾク",
        "kunyomi": "いもむし",
        "english": "green caterpillar"
    },
    {
        "kanji": "蜃",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "clam"
    },
    {
        "kanji": "蛻",
        "onyomi": "ゼイ, セイ, タイ",
        "kunyomi": "もぬ-ける, ぬけがら",
        "english": "insect moulting"
    },
    {
        "kanji": "蜑",
        "onyomi": "タン",
        "kunyomi": "あま",
        "english": "egg"
    },
    {
        "kanji": "蜉",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "kind of ant"
    },
    {
        "kanji": "蜍",
        "onyomi": "ショ",
        "kunyomi": "",
        "english": "toad"
    },
    {
        "kanji": "蛹",
        "onyomi": "ヨウ",
        "kunyomi": "さなぎ",
        "english": "chrysalis"
    },
    {
        "kanji": "蜊",
        "onyomi": "リ",
        "kunyomi": "あさり",
        "english": "a kind of bivalve"
    },
    {
        "kanji": "蜴",
        "onyomi": "エキ",
        "kunyomi": "",
        "english": "lizard"
    },
    {
        "kanji": "蜿",
        "onyomi": "エン, ワン",
        "kunyomi": "",
        "english": "meandering"
    },
    {
        "kanji": "蜷",
        "onyomi": "ケン",
        "kunyomi": "にな",
        "english": "an edible river snail"
    },
    {
        "kanji": "蜻",
        "onyomi": "セイ",
        "kunyomi": "",
        "english": "dragonfly"
    },
    {
        "kanji": "蜥",
        "onyomi": "シャク, セキ",
        "kunyomi": "とかげ",
        "english": "a lizard"
    },
    {
        "kanji": "蜩",
        "onyomi": "チョウ",
        "kunyomi": "ひぐらし, せみ",
        "english": "clear-toned cicada"
    },
    {
        "kanji": "蜚",
        "onyomi": "ヒ",
        "kunyomi": "あぶらむし",
        "english": "beetle"
    },
    {
        "kanji": "蝠",
        "onyomi": "フク",
        "kunyomi": "",
        "english": "bat"
    },
    {
        "kanji": "蝟",
        "onyomi": "イ",
        "kunyomi": "はりねずみ",
        "english": "hedgehog"
    },
    {
        "kanji": "蝸",
        "onyomi": "カ",
        "kunyomi": "かたつむり",
        "english": "snail"
    },
    {
        "kanji": "蝌",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "tadpole"
    },
    {
        "kanji": "蝎",
        "onyomi": "カツ",
        "kunyomi": "さそり, すくもむし",
        "english": "scorpion"
    },
    {
        "kanji": "蝴",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "butterfly"
    },
    {
        "kanji": "蝗",
        "onyomi": "コウ",
        "kunyomi": "いなご, ばった",
        "english": "locust"
    },
    {
        "kanji": "蝨",
        "onyomi": "シツ",
        "kunyomi": "しらみ",
        "english": "lice"
    },
    {
        "kanji": "蝮",
        "onyomi": "フク",
        "kunyomi": "まむし",
        "english": "viper"
    },
    {
        "kanji": "蝙",
        "onyomi": "ヘン",
        "kunyomi": "こうもり",
        "english": "bat"
    },
    {
        "kanji": "蝓",
        "onyomi": "ユ",
        "kunyomi": "",
        "english": "slug"
    },
    {
        "kanji": "蝣",
        "onyomi": "ユウ",
        "kunyomi": "",
        "english": "mayfly"
    },
    {
        "kanji": "蝪",
        "onyomi": "エキ",
        "kunyomi": "",
        "english": "lizard"
    },
    {
        "kanji": "蠅",
        "onyomi": "ヨウ",
        "kunyomi": "はえ, はい",
        "english": "fly"
    },
    {
        "kanji": "螢",
        "onyomi": "ケイ",
        "kunyomi": "ほたる",
        "english": "firefly"
    },
    {
        "kanji": "螟",
        "onyomi": "メイ, ミョウ",
        "kunyomi": "ずいむし",
        "english": "injurious parasite"
    },
    {
        "kanji": "螂",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "mantis"
    },
    {
        "kanji": "螯",
        "onyomi": "ゴウ",
        "kunyomi": "はさみ",
        "english": "claws"
    },
    {
        "kanji": "蟋",
        "onyomi": "シツ",
        "kunyomi": "",
        "english": "cricket"
    },
    {
        "kanji": "螽",
        "onyomi": "シュウ",
        "kunyomi": "いなご",
        "english": "grasshopper"
    },
    {
        "kanji": "蟀",
        "onyomi": "シュツ",
        "kunyomi": "",
        "english": "cricket"
    },
    {
        "kanji": "蟐",
        "onyomi": "ジョウ",
        "kunyomi": "もみ",
        "english": "toad"
    },
    {
        "kanji": "雖",
        "onyomi": "スイ",
        "kunyomi": "いえど-も, これ",
        "english": "although"
    },
    {
        "kanji": "螫",
        "onyomi": "セキ, カク",
        "kunyomi": "さ-す",
        "english": "bee sting"
    },
    {
        "kanji": "蟄",
        "onyomi": "チツ, チュウ",
        "kunyomi": "ちっ-する, かく-れる",
        "english": "hibernation of insects"
    },
    {
        "kanji": "螳",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "mantis"
    },
    {
        "kanji": "蟇",
        "onyomi": "バ, マ",
        "kunyomi": "ひき",
        "english": "toad"
    },
    {
        "kanji": "蟆",
        "onyomi": "バ, マ",
        "kunyomi": "ひき",
        "english": "toad"
    },
    {
        "kanji": "螻",
        "onyomi": "ロウ, ル",
        "kunyomi": "けら",
        "english": "mole cricket"
    },
    {
        "kanji": "蟯",
        "onyomi": "ギョウ, ジョウ",
        "kunyomi": "",
        "english": "intestinal worm"
    },
    {
        "kanji": "蟲",
        "onyomi": "チュウ, キ",
        "kunyomi": "むし",
        "english": "insect"
    },
    {
        "kanji": "蟠",
        "onyomi": "ハン",
        "kunyomi": "わだかま-る, わらじむし",
        "english": "coiled up"
    },
    {
        "kanji": "蠏",
        "onyomi": "カイ",
        "kunyomi": "かに",
        "english": "crab"
    },
    {
        "kanji": "蠍",
        "onyomi": "カツ",
        "kunyomi": "さそり",
        "english": "scorpion"
    },
    {
        "kanji": "蟾",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "toad"
    },
    {
        "kanji": "蟶",
        "onyomi": "テイ",
        "kunyomi": "まて",
        "english": "razor clam"
    },
    {
        "kanji": "蟷",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "mantis"
    },
    {
        "kanji": "蠎",
        "onyomi": "ボウ, モウ",
        "kunyomi": "うわばみ, おろち",
        "english": "python"
    },
    {
        "kanji": "蟒",
        "onyomi": "ボウ, モウ",
        "kunyomi": "うわばみ, おろち",
        "english": "boa constrictor"
    },
    {
        "kanji": "蠑",
        "onyomi": "エイ",
        "kunyomi": "",
        "english": "newt"
    },
    {
        "kanji": "蠖",
        "onyomi": "ワク, カク",
        "kunyomi": "",
        "english": "inchworm"
    },
    {
        "kanji": "蠕",
        "onyomi": "ゼン, ダ, ネン, ジュ, ニュ",
        "kunyomi": "うごめ-く",
        "english": "crawling of a worm"
    },
    {
        "kanji": "蠢",
        "onyomi": "シュン",
        "kunyomi": "うご-めく",
        "english": "wriggle"
    },
    {
        "kanji": "蠡",
        "onyomi": "レイ, ライ, リ, ラ",
        "kunyomi": "にな, ひさご",
        "english": "worm-eaten"
    },
    {
        "kanji": "蠱",
        "onyomi": "コ, ヤ",
        "kunyomi": "まじ, まじこ-る",
        "english": "rice worm"
    },
    {
        "kanji": "蠶",
        "onyomi": "サン, テン",
        "kunyomi": "かいこ, こ",
        "english": "silkworms"
    },
    {
        "kanji": "蠹",
        "onyomi": "ト",
        "kunyomi": "きくいむし",
        "english": "moth"
    },
    {
        "kanji": "蠧",
        "onyomi": "ト",
        "kunyomi": "きくいむし",
        "english": "worm-eaten"
    },
    {
        "kanji": "蠻",
        "onyomi": "バン",
        "kunyomi": "えびす",
        "english": "barbarian"
    },
    {
        "kanji": "衄",
        "onyomi": "ジク",
        "kunyomi": "はなぢ",
        "english": "nosebleed"
    },
    {
        "kanji": "衂",
        "onyomi": "ジク",
        "kunyomi": "はなぢ",
        "english": "nosebleed"
    },
    {
        "kanji": "衒",
        "onyomi": "ゲン, ケン",
        "kunyomi": "てら-う",
        "english": "show off"
    },
    {
        "kanji": "衙",
        "onyomi": "ガ, ギョ, ゴ",
        "kunyomi": "",
        "english": "government office"
    },
    {
        "kanji": "衞",
        "onyomi": "エイ, エ",
        "kunyomi": "まも-る",
        "english": "defense"
    },
    {
        "kanji": "衢",
        "onyomi": "ク",
        "kunyomi": "みち",
        "english": "crossroads"
    },
    {
        "kanji": "衫",
        "onyomi": "サン",
        "kunyomi": "",
        "english": "thin kimono"
    },
    {
        "kanji": "袁",
        "onyomi": "エン, オン",
        "kunyomi": "",
        "english": "long kimono"
    },
    {
        "kanji": "衾",
        "onyomi": "キン",
        "kunyomi": "ふすま",
        "english": "quilt"
    },
    {
        "kanji": "袞",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "imperial robes"
    },
    {
        "kanji": "衵",
        "onyomi": "ジツ",
        "kunyomi": "あこめ",
        "english": "everyday clothing"
    },
    {
        "kanji": "衽",
        "onyomi": "ジン, ニン",
        "kunyomi": "こくび, おくみ, しとね",
        "english": "neck of a garment"
    },
    {
        "kanji": "袵",
        "onyomi": "ジン, ニン",
        "kunyomi": "こくび, おくみ, しとね",
        "english": "neck of a garment"
    },
    {
        "kanji": "衲",
        "onyomi": "ドウ, ノウ",
        "kunyomi": "ころも",
        "english": "mend"
    },
    {
        "kanji": "袂",
        "onyomi": "ベイ, ケツ",
        "kunyomi": "たまと, たもと",
        "english": "sleeve"
    },
    {
        "kanji": "袗",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "thin kimono"
    },
    {
        "kanji": "袒",
        "onyomi": "タン",
        "kunyomi": "かたぬ-ぐ",
        "english": "baring the shoulder"
    },
    {
        "kanji": "袮",
        "onyomi": "デイ, ネ, チ",
        "kunyomi": "",
        "english": "ancestral shrine"
    },
    {
        "kanji": "袙",
        "onyomi": "バツ, ハ",
        "kunyomi": "あこめ",
        "english": "warrior's headband"
    },
    {
        "kanji": "袢",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "summer kimono"
    },
    {
        "kanji": "袍",
        "onyomi": "ホウ",
        "kunyomi": "わたいれ",
        "english": "coat"
    },
    {
        "kanji": "袤",
        "onyomi": "ボウ",
        "kunyomi": "ながさ",
        "english": "length"
    },
    {
        "kanji": "袰",
        "onyomi": "",
        "kunyomi": "ほろ",
        "english": "hood"
    },
    {
        "kanji": "袿",
        "onyomi": "ケイ",
        "kunyomi": "うちき, うちかけ, うちぎ",
        "english": "ancient ordinary kimono"
    },
    {
        "kanji": "袱",
        "onyomi": "フク",
        "kunyomi": "",
        "english": "cloth wrapper"
    },
    {
        "kanji": "裃",
        "onyomi": "",
        "kunyomi": "かみしも",
        "english": "old ceremonial garb"
    },
    {
        "kanji": "裄",
        "onyomi": "",
        "kunyomi": "ゆき",
        "english": "sleeve length"
    },
    {
        "kanji": "裔",
        "onyomi": "エイ",
        "kunyomi": "すそ, すえ",
        "english": "descendant"
    },
    {
        "kanji": "裘",
        "onyomi": "キュウ, グ",
        "kunyomi": "かわごろも, けごろも",
        "english": "leather clothing"
    },
    {
        "kanji": "裙",
        "onyomi": "クン",
        "kunyomi": "もすそ",
        "english": "hem"
    },
    {
        "kanji": "裝",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "よそお-う, よそお-い",
        "english": "dress"
    },
    {
        "kanji": "裹",
        "onyomi": "ホウ, カ",
        "kunyomi": "つつ-む",
        "english": "wrap"
    },
    {
        "kanji": "褂",
        "onyomi": "ケイ, カイ, ケ",
        "kunyomi": "うちき, うちかけ",
        "english": "ancient ordinary kimono"
    },
    {
        "kanji": "裼",
        "onyomi": "セキ, テイ",
        "kunyomi": "はだぬ-ぐ",
        "english": "to bare the shoulder"
    },
    {
        "kanji": "裴",
        "onyomi": "ハイ, ヒ, ベ",
        "kunyomi": "たちもとお-る",
        "english": "long robes"
    },
    {
        "kanji": "裨",
        "onyomi": "ヒ",
        "kunyomi": "おぎな-う, たす-ける, ます",
        "english": "help"
    },
    {
        "kanji": "裲",
        "onyomi": "リョウ",
        "kunyomi": "うちかけ",
        "english": "ancient robe"
    },
    {
        "kanji": "褄",
        "onyomi": "",
        "kunyomi": "つま",
        "english": "skirt"
    },
    {
        "kanji": "褌",
        "onyomi": "コン",
        "kunyomi": "ふんどし",
        "english": "loincloth"
    },
    {
        "kanji": "褊",
        "onyomi": "ヘン",
        "kunyomi": "せま-い",
        "english": "narrow"
    },
    {
        "kanji": "褓",
        "onyomi": "ホ, ホウ",
        "kunyomi": "むつき",
        "english": "diaper"
    },
    {
        "kanji": "襃",
        "onyomi": "ホウ",
        "kunyomi": "ほ-める",
        "english": "praise"
    },
    {
        "kanji": "褞",
        "onyomi": "ウン, オン",
        "kunyomi": "ぬのこ",
        "english": "robe"
    },
    {
        "kanji": "褥",
        "onyomi": "ジョク",
        "kunyomi": "しとね",
        "english": "cushion"
    },
    {
        "kanji": "褪",
        "onyomi": "タイ, トン",
        "kunyomi": "あ-せる, ぬ-ぐ",
        "english": "fade"
    },
    {
        "kanji": "褫",
        "onyomi": "チ",
        "kunyomi": "うば-う",
        "english": "rob"
    },
    {
        "kanji": "襁",
        "onyomi": "キョウ",
        "kunyomi": "むつき",
        "english": "diaper"
    },
    {
        "kanji": "襄",
        "onyomi": "ジョウ, ショウ",
        "kunyomi": "はら-う",
        "english": "rise"
    },
    {
        "kanji": "褻",
        "onyomi": "セツ",
        "kunyomi": "けが-れる, な-れる",
        "english": "filthy"
    },
    {
        "kanji": "褶",
        "onyomi": "ショウ, シュウ, チョウ",
        "kunyomi": "かさね-る",
        "english": "pleats"
    },
    {
        "kanji": "褸",
        "onyomi": "ロ, ル, ロウ",
        "kunyomi": "いと",
        "english": "rags"
    },
    {
        "kanji": "襌",
        "onyomi": "タン, ゼン",
        "kunyomi": "ひとえ",
        "english": "thin kimono"
    },
    {
        "kanji": "褝",
        "onyomi": "タン, ゼン",
        "kunyomi": "ひとえ",
        "english": "thin kimono"
    },
    {
        "kanji": "襠",
        "onyomi": "トウ",
        "kunyomi": "ふんどし, まち",
        "english": "gusset"
    },
    {
        "kanji": "襞",
        "onyomi": "ヘキ, ヒャク",
        "kunyomi": "ひだ, しわ",
        "english": "pleat"
    },
    {
        "kanji": "襦",
        "onyomi": "ジュ",
        "kunyomi": "したぎ, はだぎ",
        "english": "underwear"
    },
    {
        "kanji": "襤",
        "onyomi": "ラン",
        "kunyomi": "ぼろ",
        "english": "rags"
    },
    {
        "kanji": "襭",
        "onyomi": "ケツ",
        "kunyomi": "つまばさ-む, はさ-む",
        "english": "tuck into one's obi"
    },
    {
        "kanji": "襪",
        "onyomi": "ベツ, バツ",
        "kunyomi": "",
        "english": "socks"
    },
    {
        "kanji": "襯",
        "onyomi": "シン",
        "kunyomi": "はだぎ",
        "english": "underwear"
    },
    {
        "kanji": "襴",
        "onyomi": "ラン, リン",
        "kunyomi": "",
        "english": "a kind of cloth"
    },
    {
        "kanji": "襷",
        "onyomi": "",
        "kunyomi": "たすき",
        "english": "cord to hold up sleeves"
    },
    {
        "kanji": "襾",
        "onyomi": "ア",
        "kunyomi": "け",
        "english": "cover"
    },
    {
        "kanji": "覃",
        "onyomi": "タン, エン",
        "kunyomi": "",
        "english": "extend"
    },
    {
        "kanji": "覈",
        "onyomi": "カク, ケツ",
        "kunyomi": "しら-べる",
        "english": "investigate"
    },
    {
        "kanji": "覊",
        "onyomi": "キ, ハ",
        "kunyomi": "おもが-い, たづな, たび, つな-ぐ",
        "english": "reins"
    },
    {
        "kanji": "覓",
        "onyomi": "ベキ, エキ, ミャク",
        "kunyomi": "もと-める",
        "english": "seek"
    },
    {
        "kanji": "覘",
        "onyomi": "テン",
        "kunyomi": "のぞ-く, うかが-う",
        "english": "peep"
    },
    {
        "kanji": "覡",
        "onyomi": "ゲキ, ケキ",
        "kunyomi": "かんなぎ, みこ",
        "english": "diviner"
    },
    {
        "kanji": "覩",
        "onyomi": "ト",
        "kunyomi": "み-る",
        "english": "see"
    },
    {
        "kanji": "覦",
        "onyomi": "ユ",
        "kunyomi": "ねが-う",
        "english": "coveting high rank"
    },
    {
        "kanji": "覬",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "coveting high rank"
    },
    {
        "kanji": "覯",
        "onyomi": "コウ",
        "kunyomi": "あ-う",
        "english": "happening to meet"
    },
    {
        "kanji": "覲",
        "onyomi": "キン",
        "kunyomi": "まみ-える",
        "english": "see"
    },
    {
        "kanji": "覺",
        "onyomi": "カク",
        "kunyomi": "おぼ-える, さ-ます, さ-める, さと-る",
        "english": "memorize"
    },
    {
        "kanji": "覽",
        "onyomi": "ラン",
        "kunyomi": "み-る",
        "english": "look at"
    },
    {
        "kanji": "覿",
        "onyomi": "テキ",
        "kunyomi": "あ-う",
        "english": "meet"
    },
    {
        "kanji": "觀",
        "onyomi": "カン",
        "kunyomi": "み-る, しめ-す",
        "english": "outlook"
    },
    {
        "kanji": "觚",
        "onyomi": "コ",
        "kunyomi": "さかずき",
        "english": "cup"
    },
    {
        "kanji": "觜",
        "onyomi": "シ, スイ",
        "kunyomi": "くちばし, はし",
        "english": "beak"
    },
    {
        "kanji": "觝",
        "onyomi": "テイ",
        "kunyomi": "ふ-れる",
        "english": "touch"
    },
    {
        "kanji": "觧",
        "onyomi": "カイ, ゲ",
        "kunyomi": "と-く, と-かす, と-ける, ほど-く, ほど-ける, わか-る, さと-る",
        "english": "notes"
    },
    {
        "kanji": "觴",
        "onyomi": "ショウ",
        "kunyomi": "さかずき",
        "english": "cup"
    },
    {
        "kanji": "觸",
        "onyomi": "ショク",
        "kunyomi": "ふ-れる, さわ-る",
        "english": "touch"
    },
    {
        "kanji": "訃",
        "onyomi": "フ",
        "kunyomi": "しらせ",
        "english": "obituary"
    },
    {
        "kanji": "訖",
        "onyomi": "キツ",
        "kunyomi": "お-える, お-わる, ついに",
        "english": "come to an end"
    },
    {
        "kanji": "訐",
        "onyomi": "ケツ",
        "kunyomi": "あば-く",
        "english": "divulge"
    },
    {
        "kanji": "訌",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "get confused"
    },
    {
        "kanji": "訛",
        "onyomi": "カ",
        "kunyomi": "なま-る, なま-り, あやま-る",
        "english": "accent"
    },
    {
        "kanji": "訝",
        "onyomi": "ガ, ゲ",
        "kunyomi": "いぶか-る",
        "english": "doubt"
    },
    {
        "kanji": "訥",
        "onyomi": "トツ",
        "kunyomi": "ども-る",
        "english": "stutter"
    },
    {
        "kanji": "訶",
        "onyomi": "カ",
        "kunyomi": "しか-る, せ-める",
        "english": "scold"
    },
    {
        "kanji": "詁",
        "onyomi": "コ",
        "kunyomi": "よみ",
        "english": "exegesis"
    },
    {
        "kanji": "詛",
        "onyomi": "ソ, ショ",
        "kunyomi": "のろ-う",
        "english": "curse"
    },
    {
        "kanji": "詒",
        "onyomi": "イ, タイ",
        "kunyomi": "あざむ-く",
        "english": "deceive"
    },
    {
        "kanji": "詆",
        "onyomi": "テイ, タイ",
        "kunyomi": "そし-る, しか-る",
        "english": "vilify"
    },
    {
        "kanji": "詈",
        "onyomi": "リ",
        "kunyomi": "ののし-る",
        "english": "ridicule"
    },
    {
        "kanji": "詼",
        "onyomi": "カイ",
        "kunyomi": "たわむれ",
        "english": "jest"
    },
    {
        "kanji": "詭",
        "onyomi": "キ",
        "kunyomi": "いつわ-る",
        "english": "lie"
    },
    {
        "kanji": "詬",
        "onyomi": "コウ, ク",
        "kunyomi": "ののし-る, はじ, はずかし-める",
        "english": "ridicule"
    },
    {
        "kanji": "詢",
        "onyomi": "ジュン, シュン",
        "kunyomi": "はか-る, まこと",
        "english": "consult with"
    },
    {
        "kanji": "誅",
        "onyomi": "チュウ, チュ",
        "kunyomi": "ちゅう-する, ころ-す, せ-める",
        "english": "death penalty"
    },
    {
        "kanji": "誂",
        "onyomi": "チョウ",
        "kunyomi": "あつら-える, いど-む",
        "english": "order"
    },
    {
        "kanji": "誄",
        "onyomi": "ルイ",
        "kunyomi": "しのびごと",
        "english": "condolence message"
    },
    {
        "kanji": "誨",
        "onyomi": "カイ",
        "kunyomi": "おし-える",
        "english": "instruct"
    },
    {
        "kanji": "誡",
        "onyomi": "カイ",
        "kunyomi": "いまし-める",
        "english": "admonish"
    },
    {
        "kanji": "誑",
        "onyomi": "キョウ",
        "kunyomi": "たばか-る, たぶら-かす, た-らす",
        "english": "cheat"
    },
    {
        "kanji": "誥",
        "onyomi": "コウ",
        "kunyomi": "つ-ぐ",
        "english": "state"
    },
    {
        "kanji": "誦",
        "onyomi": "ショウ, ジュ, ズ",
        "kunyomi": "とな-える, よ-む",
        "english": "recite"
    },
    {
        "kanji": "誚",
        "onyomi": "ショウ",
        "kunyomi": "せ-める",
        "english": "censure"
    },
    {
        "kanji": "誣",
        "onyomi": "フ",
        "kunyomi": "しい-る, し-いる, あざむ-く",
        "english": "slander"
    },
    {
        "kanji": "諄",
        "onyomi": "シュン",
        "kunyomi": "ひちくど-い, くど-い, くどくど, ねんご-ろ",
        "english": "tedious"
    },
    {
        "kanji": "諍",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "いさか-う, あらそ-う, いさ-める, うった-える",
        "english": "quarrel"
    },
    {
        "kanji": "諂",
        "onyomi": "テン",
        "kunyomi": "へつら-う",
        "english": "flatter"
    },
    {
        "kanji": "諚",
        "onyomi": "ジョウ",
        "kunyomi": "",
        "english": "command"
    },
    {
        "kanji": "諫",
        "onyomi": "カン",
        "kunyomi": "いさ-める",
        "english": "admonish"
    },
    {
        "kanji": "諳",
        "onyomi": "アン, オン",
        "kunyomi": "そら-んじる",
        "english": "memorize"
    },
    {
        "kanji": "諧",
        "onyomi": "カイ",
        "kunyomi": "かな-う, やわ-らぐ",
        "english": "harmony"
    },
    {
        "kanji": "諤",
        "onyomi": "ガク",
        "kunyomi": "わめ-く, あご",
        "english": "speaking the truth"
    },
    {
        "kanji": "諱",
        "onyomi": "キ",
        "kunyomi": "いみな, い-む",
        "english": "posthumous (real) name"
    },
    {
        "kanji": "謔",
        "onyomi": "ギャク, キャク",
        "kunyomi": "たわむ-れる",
        "english": "sport with"
    },
    {
        "kanji": "諠",
        "onyomi": "ケン",
        "kunyomi": "かまびす-しい, わす-れる",
        "english": "forget"
    },
    {
        "kanji": "諢",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "joke"
    },
    {
        "kanji": "諷",
        "onyomi": "フウ",
        "kunyomi": "そら-んじる",
        "english": "hint"
    },
    {
        "kanji": "諞",
        "onyomi": "ヘン",
        "kunyomi": "",
        "english": "flattering"
    },
    {
        "kanji": "諛",
        "onyomi": "ユ",
        "kunyomi": "へつら-う, へつら-い",
        "english": "flatter"
    },
    {
        "kanji": "謌",
        "onyomi": "カ",
        "kunyomi": "うた, うた-う",
        "english": "sing"
    },
    {
        "kanji": "謇",
        "onyomi": "ケン",
        "kunyomi": "ども-る",
        "english": "stutter"
    },
    {
        "kanji": "謚",
        "onyomi": "エキ, シ",
        "kunyomi": "おくりな",
        "english": "laughing"
    },
    {
        "kanji": "諡",
        "onyomi": "エキ, シ",
        "kunyomi": "おくりな",
        "english": "posthumous name"
    },
    {
        "kanji": "謖",
        "onyomi": "ショク, シュク",
        "kunyomi": "た-つ",
        "english": "arise"
    },
    {
        "kanji": "謐",
        "onyomi": "ヒツ",
        "kunyomi": "しずか",
        "english": "quiet"
    },
    {
        "kanji": "謗",
        "onyomi": "ボウ, ホウ",
        "kunyomi": "そし-る",
        "english": "slander"
    },
    {
        "kanji": "謠",
        "onyomi": "ヨウ",
        "kunyomi": "うた-う, うた",
        "english": "chant (esp. Noh)"
    },
    {
        "kanji": "謳",
        "onyomi": "オウ, ウ",
        "kunyomi": "うた-う",
        "english": "extol"
    },
    {
        "kanji": "鞫",
        "onyomi": "キク",
        "kunyomi": "",
        "english": "investigate a crime"
    },
    {
        "kanji": "謦",
        "onyomi": "ケイ",
        "kunyomi": "しわぶき",
        "english": "coughing"
    },
    {
        "kanji": "謫",
        "onyomi": "タク, チャク",
        "kunyomi": "せ-める, とが-める",
        "english": "crime"
    },
    {
        "kanji": "謾",
        "onyomi": "マン, バン",
        "kunyomi": "あざむ-く, あなど-る",
        "english": "despise"
    },
    {
        "kanji": "謨",
        "onyomi": "ボ, モ",
        "kunyomi": "はか-る",
        "english": "plan"
    },
    {
        "kanji": "譁",
        "onyomi": "カ, ケ",
        "kunyomi": "かまびす-しい",
        "english": "noisy"
    },
    {
        "kanji": "譌",
        "onyomi": "カ",
        "kunyomi": "なま-る, あやま-る",
        "english": "accent"
    },
    {
        "kanji": "譏",
        "onyomi": "キ",
        "kunyomi": "そし-る",
        "english": "slander"
    },
    {
        "kanji": "譎",
        "onyomi": "ケツ, キツ",
        "kunyomi": "いつわ-る, いつわ-り",
        "english": "deceive"
    },
    {
        "kanji": "證",
        "onyomi": "ショウ",
        "kunyomi": "あかし",
        "english": "proof"
    },
    {
        "kanji": "譖",
        "onyomi": "シン, セン",
        "kunyomi": "そし-る",
        "english": "slander"
    },
    {
        "kanji": "譛",
        "onyomi": "シン, セン",
        "kunyomi": "そし-る",
        "english": "slander"
    },
    {
        "kanji": "譚",
        "onyomi": "タン",
        "kunyomi": "はなし",
        "english": "talk"
    },
    {
        "kanji": "譫",
        "onyomi": "トウ, セン, タン",
        "kunyomi": "うわごと, たわごと, うるさくしゃべ-る",
        "english": "delirious talk"
    },
    {
        "kanji": "譟",
        "onyomi": "ソウ",
        "kunyomi": "さわ-ぐ",
        "english": "shout"
    },
    {
        "kanji": "譬",
        "onyomi": "ヒ",
        "kunyomi": "たと-える, たと-え",
        "english": "illustrate"
    },
    {
        "kanji": "譯",
        "onyomi": "ヤク",
        "kunyomi": "わけ",
        "english": "translate"
    },
    {
        "kanji": "譴",
        "onyomi": "ケン",
        "kunyomi": "せめ-る",
        "english": "reproach"
    },
    {
        "kanji": "譽",
        "onyomi": "ヨ",
        "kunyomi": "ほ-まれ, ほ-める",
        "english": "fame"
    },
    {
        "kanji": "讀",
        "onyomi": "ドク, トク, トウ",
        "kunyomi": "よ-む",
        "english": "read"
    },
    {
        "kanji": "讌",
        "onyomi": "エン",
        "kunyomi": "うたげ",
        "english": "banquet"
    },
    {
        "kanji": "讎",
        "onyomi": "シュウ",
        "kunyomi": "あだ, かたき",
        "english": "enemy"
    },
    {
        "kanji": "讒",
        "onyomi": "ザン, サン",
        "kunyomi": "そし-る",
        "english": "defamation"
    },
    {
        "kanji": "讓",
        "onyomi": "ジョウ",
        "kunyomi": "ゆず-る",
        "english": "allow"
    },
    {
        "kanji": "讖",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "omen"
    },
    {
        "kanji": "讙",
        "onyomi": "カン, ケン",
        "kunyomi": "かまびす-しい",
        "english": "noisy"
    },
    {
        "kanji": "讚",
        "onyomi": "サン",
        "kunyomi": "ほ-める, たた-える",
        "english": "praise"
    },
    {
        "kanji": "谺",
        "onyomi": "コ, カ",
        "kunyomi": "こだま",
        "english": "tree spirit"
    },
    {
        "kanji": "豁",
        "onyomi": "カツ",
        "kunyomi": "ひら-ける, ひろ-い",
        "english": "empty"
    },
    {
        "kanji": "谿",
        "onyomi": "ケイ",
        "kunyomi": "たに, たにがわ",
        "english": "valley"
    },
    {
        "kanji": "豈",
        "onyomi": "カイ, ガイ, キ",
        "kunyomi": "あに",
        "english": "an interjection of surprise"
    },
    {
        "kanji": "豌",
        "onyomi": "エン, ワン",
        "kunyomi": "",
        "english": "pea"
    },
    {
        "kanji": "豎",
        "onyomi": "ジュ",
        "kunyomi": "たて, た-てる, こども",
        "english": "vertical"
    },
    {
        "kanji": "豐",
        "onyomi": "ホウ, ブ",
        "kunyomi": "ゆた-か, とよ",
        "english": "bountiful"
    },
    {
        "kanji": "豕",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "pig"
    },
    {
        "kanji": "豢",
        "onyomi": "ケン, カン",
        "kunyomi": "やしな-う",
        "english": "raising domestic animals"
    },
    {
        "kanji": "豬",
        "onyomi": "チョ",
        "kunyomi": "い, いのしし",
        "english": "pig"
    },
    {
        "kanji": "豸",
        "onyomi": "タイ, チ",
        "kunyomi": "",
        "english": "snake"
    },
    {
        "kanji": "豺",
        "onyomi": "サイ",
        "kunyomi": "やまいぬ",
        "english": "jackal"
    },
    {
        "kanji": "貂",
        "onyomi": "チョウ",
        "kunyomi": "てん",
        "english": "marten"
    },
    {
        "kanji": "貉",
        "onyomi": "カク, ハク",
        "kunyomi": "むじな",
        "english": "badger"
    },
    {
        "kanji": "貅",
        "onyomi": "キュウ",
        "kunyomi": "",
        "english": "brave heraldic beast"
    },
    {
        "kanji": "貊",
        "onyomi": "ハク, ミャク",
        "kunyomi": "えびす",
        "english": "barbarians"
    },
    {
        "kanji": "貍",
        "onyomi": "リ, ライ",
        "kunyomi": "たぬき",
        "english": "a fox-like animal"
    },
    {
        "kanji": "貎",
        "onyomi": "ゲイ",
        "kunyomi": "",
        "english": "lion"
    },
    {
        "kanji": "貔",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "brave heraldic beast"
    },
    {
        "kanji": "豼",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "brave heraldic beast"
    },
    {
        "kanji": "貘",
        "onyomi": "バク, ミャク",
        "kunyomi": "",
        "english": "tapir"
    },
    {
        "kanji": "戝",
        "onyomi": "ザイ, サイ, ゾク",
        "kunyomi": "",
        "english": "pirate"
    },
    {
        "kanji": "貭",
        "onyomi": "シツ, シチ, チ",
        "kunyomi": "たち, ただ-す, もと, わりふ",
        "english": "matter"
    },
    {
        "kanji": "貪",
        "onyomi": "タン, ドン, トン",
        "kunyomi": "むさぼ-る",
        "english": "covet"
    },
    {
        "kanji": "貽",
        "onyomi": "イ",
        "kunyomi": "おく-る",
        "english": "leave behind"
    },
    {
        "kanji": "貲",
        "onyomi": "シ",
        "kunyomi": "たから",
        "english": "treasure"
    },
    {
        "kanji": "貳",
        "onyomi": "ニ, ジ",
        "kunyomi": "ふた-つ, そえ",
        "english": "two"
    },
    {
        "kanji": "貮",
        "onyomi": "ニ, ジ",
        "kunyomi": "ふた-つ, そえ",
        "english": "number two"
    },
    {
        "kanji": "貶",
        "onyomi": "ヘン",
        "kunyomi": "けな-す, おとし-める, おと-す",
        "english": "degrade"
    },
    {
        "kanji": "賈",
        "onyomi": "コ, カ",
        "kunyomi": "あきな-い, あきな-う, う-る, か-う",
        "english": "buy"
    },
    {
        "kanji": "賁",
        "onyomi": "フン, ヒ, ホン",
        "kunyomi": "",
        "english": "decorate"
    },
    {
        "kanji": "賤",
        "onyomi": "セン, ゼン",
        "kunyomi": "いや-しい, いや-しむ, しず, やす-い",
        "english": "despise"
    },
    {
        "kanji": "賣",
        "onyomi": "バイ",
        "kunyomi": "う-る, う-れる",
        "english": "sell"
    },
    {
        "kanji": "賚",
        "onyomi": "ライ",
        "kunyomi": "たま-う, たまもの",
        "english": "gift"
    },
    {
        "kanji": "賽",
        "onyomi": "サイ",
        "kunyomi": "",
        "english": "dice"
    },
    {
        "kanji": "賺",
        "onyomi": "タン, レン",
        "kunyomi": "すか-す",
        "english": "coax"
    },
    {
        "kanji": "賻",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "condolence gift"
    },
    {
        "kanji": "贄",
        "onyomi": "シ",
        "kunyomi": "にえ",
        "english": "offering"
    },
    {
        "kanji": "贅",
        "onyomi": "ゼイ, セイ",
        "kunyomi": "いぼ",
        "english": "luxury"
    },
    {
        "kanji": "贊",
        "onyomi": "サン",
        "kunyomi": "たす-ける, たた-える",
        "english": "help"
    },
    {
        "kanji": "贇",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "beautiful"
    },
    {
        "kanji": "贏",
        "onyomi": "エイ",
        "kunyomi": "あまり",
        "english": "victory"
    },
    {
        "kanji": "贍",
        "onyomi": "セン",
        "kunyomi": "すく-う",
        "english": "have enough of"
    },
    {
        "kanji": "贐",
        "onyomi": "シン",
        "kunyomi": "はなむけ",
        "english": "going away present"
    },
    {
        "kanji": "齎",
        "onyomi": "セイ, サイ, シ",
        "kunyomi": "もたら-す, もた-らす",
        "english": "bring"
    },
    {
        "kanji": "贓",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "bribery"
    },
    {
        "kanji": "賍",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "bribery"
    },
    {
        "kanji": "贔",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "strength"
    },
    {
        "kanji": "贖",
        "onyomi": "ショク",
        "kunyomi": "あがな-う",
        "english": "redeem"
    },
    {
        "kanji": "赧",
        "onyomi": "タン",
        "kunyomi": "あから-める",
        "english": "get red"
    },
    {
        "kanji": "赭",
        "onyomi": "シャ",
        "kunyomi": "あかつち",
        "english": "red"
    },
    {
        "kanji": "赱",
        "onyomi": "ソウ",
        "kunyomi": "はし-る",
        "english": "walk"
    },
    {
        "kanji": "赳",
        "onyomi": "キュウ",
        "kunyomi": "",
        "english": "strong and brave"
    },
    {
        "kanji": "趁",
        "onyomi": "チン",
        "kunyomi": "お-う",
        "english": "go to"
    },
    {
        "kanji": "趙",
        "onyomi": "チョウ, ジョウ, キョウ",
        "kunyomi": "",
        "english": "nimble"
    },
    {
        "kanji": "跂",
        "onyomi": "キ",
        "kunyomi": "つまだ-つ, むつゆび",
        "english": "stand on tiptoes"
    },
    {
        "kanji": "趾",
        "onyomi": "シ",
        "kunyomi": "あと, はや-い",
        "english": "footprint"
    },
    {
        "kanji": "趺",
        "onyomi": "シ, フ",
        "kunyomi": "あし",
        "english": "foot"
    },
    {
        "kanji": "跏",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "sitting in the lotus position"
    },
    {
        "kanji": "跚",
        "onyomi": "サン",
        "kunyomi": "",
        "english": "stagger"
    },
    {
        "kanji": "跖",
        "onyomi": "セキ",
        "kunyomi": "あしのうら",
        "english": "sole of the foot"
    },
    {
        "kanji": "跌",
        "onyomi": "テツ",
        "kunyomi": "あやまつ, つまず-く",
        "english": "stumble"
    },
    {
        "kanji": "跛",
        "onyomi": "ハ, ヒ",
        "kunyomi": "びっこ, ちんば",
        "english": "lame"
    },
    {
        "kanji": "跋",
        "onyomi": "ハツ, バツ",
        "kunyomi": "おくがき, ふ-む",
        "english": "epilogue"
    },
    {
        "kanji": "跪",
        "onyomi": "キ",
        "kunyomi": "ひざまず-く",
        "english": "kneel"
    },
    {
        "kanji": "跫",
        "onyomi": "キョウ",
        "kunyomi": "",
        "english": "sound of footsteps"
    },
    {
        "kanji": "跟",
        "onyomi": "コン",
        "kunyomi": "くび-す",
        "english": "heel"
    },
    {
        "kanji": "跣",
        "onyomi": "セン",
        "kunyomi": "はだし",
        "english": "barefooted"
    },
    {
        "kanji": "跼",
        "onyomi": "キョク",
        "kunyomi": "こご-む, くぐま-る, かが-む, せぐく-まる",
        "english": "bow"
    },
    {
        "kanji": "踈",
        "onyomi": "ソ, ショ",
        "kunyomi": "うと-い, うと-む, まば-ら",
        "english": "neglect"
    },
    {
        "kanji": "踉",
        "onyomi": "ロウ, リョウ",
        "kunyomi": "",
        "english": "stagger"
    },
    {
        "kanji": "跿",
        "onyomi": "ト",
        "kunyomi": "",
        "english": "barefoot"
    },
    {
        "kanji": "踝",
        "onyomi": "カ",
        "kunyomi": "くるぶし",
        "english": "ankle"
    },
    {
        "kanji": "踞",
        "onyomi": "キョ, コ",
        "kunyomi": "うずく-まる",
        "english": "crouch"
    },
    {
        "kanji": "踐",
        "onyomi": "セン",
        "kunyomi": "ふ-む",
        "english": "step on"
    },
    {
        "kanji": "踟",
        "onyomi": "チ",
        "kunyomi": "",
        "english": "hesitate"
    },
    {
        "kanji": "蹂",
        "onyomi": "ジュウ",
        "kunyomi": "ふ-む",
        "english": "step on"
    },
    {
        "kanji": "踵",
        "onyomi": "ショウ",
        "kunyomi": "かかと, くび-す, きび-す, つ-ぐ",
        "english": "heel"
    },
    {
        "kanji": "踰",
        "onyomi": "ユ, ヨウ",
        "kunyomi": "こ-える",
        "english": "go beyond"
    },
    {
        "kanji": "踴",
        "onyomi": "ヨウ",
        "kunyomi": "おど-る",
        "english": "jump"
    },
    {
        "kanji": "蹊",
        "onyomi": "ケイ",
        "kunyomi": "みち, わた-る",
        "english": "path"
    },
    {
        "kanji": "蹇",
        "onyomi": "ケン",
        "kunyomi": "いざ-る, あしなえ, なや-む",
        "english": "cripple"
    },
    {
        "kanji": "蹉",
        "onyomi": "サ",
        "kunyomi": "つまず-く",
        "english": "stumble"
    },
    {
        "kanji": "蹌",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "うご-く, よろ-めく",
        "english": "move"
    },
    {
        "kanji": "蹐",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "stealthy footsteps"
    },
    {
        "kanji": "蹈",
        "onyomi": "トウ",
        "kunyomi": "ふ-む",
        "english": "step on"
    },
    {
        "kanji": "蹙",
        "onyomi": "シュク, セキ",
        "kunyomi": "せ-まる",
        "english": "a tight place"
    },
    {
        "kanji": "蹤",
        "onyomi": "ショウ",
        "kunyomi": "あと",
        "english": "footprints"
    },
    {
        "kanji": "蹠",
        "onyomi": "セキ",
        "kunyomi": "あしうら, あしのうら",
        "english": "sole of foot"
    },
    {
        "kanji": "踪",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "あと",
        "english": "remains"
    },
    {
        "kanji": "蹣",
        "onyomi": "マン, ハン",
        "kunyomi": "よろ-めく",
        "english": "staggering"
    },
    {
        "kanji": "蹕",
        "onyomi": "ヒツ",
        "kunyomi": "さきばらい",
        "english": "one who preceeds king in procession"
    },
    {
        "kanji": "蹶",
        "onyomi": "ケツ, ケイ",
        "kunyomi": "たお-れる, つまず-く",
        "english": "stumble"
    },
    {
        "kanji": "蹲",
        "onyomi": "ソン, シュン",
        "kunyomi": "つくば-う, うずくま-る",
        "english": "crouch"
    },
    {
        "kanji": "蹼",
        "onyomi": "ボク, ホク",
        "kunyomi": "みずかき",
        "english": "webfoot"
    },
    {
        "kanji": "躁",
        "onyomi": "ソウ",
        "kunyomi": "さわ-ぐ",
        "english": "noisy"
    },
    {
        "kanji": "躇",
        "onyomi": "チョ, チャク",
        "kunyomi": "ためら-う",
        "english": "hesitate"
    },
    {
        "kanji": "躅",
        "onyomi": "チョク, タク",
        "kunyomi": "",
        "english": "tap with the feet"
    },
    {
        "kanji": "躄",
        "onyomi": "ヘキ",
        "kunyomi": "いざ-る, いざ-り",
        "english": "crawl"
    },
    {
        "kanji": "躋",
        "onyomi": "セイ, サイ",
        "kunyomi": "のぼ-る",
        "english": "climb"
    },
    {
        "kanji": "躊",
        "onyomi": "チュウ, チュ, シュウ, ジュ",
        "kunyomi": "ためら-う",
        "english": "hesitate"
    },
    {
        "kanji": "躓",
        "onyomi": "チ",
        "kunyomi": "つまず-く",
        "english": "stumble"
    },
    {
        "kanji": "躑",
        "onyomi": "テキ",
        "kunyomi": "しゃが-む, たちもとお-る",
        "english": "squat"
    },
    {
        "kanji": "躔",
        "onyomi": "テン",
        "kunyomi": "ふ-む",
        "english": "movement of the sun/moon through the heavens"
    },
    {
        "kanji": "躙",
        "onyomi": "リン",
        "kunyomi": "にじ-る, ふ-む",
        "english": "edge forward"
    },
    {
        "kanji": "躪",
        "onyomi": "リン",
        "kunyomi": "にじ-る, ふ-む",
        "english": "edge forward"
    },
    {
        "kanji": "躡",
        "onyomi": "ジョウ",
        "kunyomi": "ふ-む",
        "english": "step on"
    },
    {
        "kanji": "躬",
        "onyomi": "キュウ, キョウ",
        "kunyomi": "み",
        "english": "body"
    },
    {
        "kanji": "躰",
        "onyomi": "タイ, テイ",
        "kunyomi": "からだ, かたち",
        "english": "the body"
    },
    {
        "kanji": "軆",
        "onyomi": "タイ, テイ",
        "kunyomi": "からだ, かたち",
        "english": "body"
    },
    {
        "kanji": "躱",
        "onyomi": "タ",
        "kunyomi": "かわ-す",
        "english": "dodge"
    },
    {
        "kanji": "躾",
        "onyomi": "",
        "kunyomi": "しつ-ける, しつけ",
        "english": "training"
    },
    {
        "kanji": "軅",
        "onyomi": "",
        "kunyomi": "やがて",
        "english": "soon after"
    },
    {
        "kanji": "軈",
        "onyomi": "",
        "kunyomi": "やがて",
        "english": "soon after"
    },
    {
        "kanji": "軋",
        "onyomi": "アツ",
        "kunyomi": "きし-る, きし-む",
        "english": "squeak"
    },
    {
        "kanji": "軛",
        "onyomi": "ヤク, アク",
        "kunyomi": "くびき",
        "english": "yoke"
    },
    {
        "kanji": "軣",
        "onyomi": "コウ",
        "kunyomi": "とどろ-かす, とどろ-く",
        "english": "rumble"
    },
    {
        "kanji": "軼",
        "onyomi": "イツ, テツ",
        "kunyomi": "すぎ-る",
        "english": "pass along"
    },
    {
        "kanji": "軻",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "difficult progress"
    },
    {
        "kanji": "軫",
        "onyomi": "シン",
        "kunyomi": "よこぎ",
        "english": "sad"
    },
    {
        "kanji": "軾",
        "onyomi": "ショク, シキ",
        "kunyomi": "しきみ",
        "english": "front railing on a carriage"
    },
    {
        "kanji": "輊",
        "onyomi": "チ",
        "kunyomi": "",
        "english": "low"
    },
    {
        "kanji": "輅",
        "onyomi": "ロ",
        "kunyomi": "くるま",
        "english": "carriage"
    },
    {
        "kanji": "輕",
        "onyomi": "ケイ",
        "kunyomi": "かる-い, かろ-やか, かろ-んじる",
        "english": "light"
    },
    {
        "kanji": "輒",
        "onyomi": "チョウ",
        "kunyomi": "すなわち, わきぎ",
        "english": "promptly"
    },
    {
        "kanji": "輙",
        "onyomi": "チョウ",
        "kunyomi": "すなわち, わきぎ",
        "english": "sides of chariot were weapons"
    },
    {
        "kanji": "輓",
        "onyomi": "バン",
        "kunyomi": "おそ-い, ひ-く",
        "english": "pull"
    },
    {
        "kanji": "輜",
        "onyomi": "シ",
        "kunyomi": "こにだ, ほろぐるま, にぐるま",
        "english": "wagon"
    },
    {
        "kanji": "輟",
        "onyomi": "テツ",
        "kunyomi": "や-める",
        "english": "stop"
    },
    {
        "kanji": "輛",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "counter for large vehicles"
    },
    {
        "kanji": "輌",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "numerary adjunct for vehicles"
    },
    {
        "kanji": "輦",
        "onyomi": "レン",
        "kunyomi": "たごし, てぐるま",
        "english": "palanquin"
    },
    {
        "kanji": "輳",
        "onyomi": "ソウ",
        "kunyomi": "あつ-まる",
        "english": "gather"
    },
    {
        "kanji": "輻",
        "onyomi": "フク",
        "kunyomi": "や",
        "english": "spoke (wheel)"
    },
    {
        "kanji": "輹",
        "onyomi": "フク",
        "kunyomi": "とこしばり",
        "english": "connection between axle and carriage"
    },
    {
        "kanji": "轅",
        "onyomi": "エン",
        "kunyomi": "ながえ",
        "english": "shaft"
    },
    {
        "kanji": "轂",
        "onyomi": "コク",
        "kunyomi": "こしき",
        "english": "hub (of wheel)"
    },
    {
        "kanji": "輾",
        "onyomi": "テン, ネン",
        "kunyomi": "きし-る, めぐ-る",
        "english": "squeak"
    },
    {
        "kanji": "轌",
        "onyomi": "",
        "kunyomi": "そり",
        "english": "sleigh"
    },
    {
        "kanji": "轉",
        "onyomi": "テン",
        "kunyomi": "ころ-がる, ころ-げる, ころ-がす, ころ-ぶ, まろ-ぶ, うたた, うつ-る",
        "english": "shift"
    },
    {
        "kanji": "轆",
        "onyomi": "ロク",
        "kunyomi": "ころ",
        "english": "pulley"
    },
    {
        "kanji": "轎",
        "onyomi": "キョウ",
        "kunyomi": "かご",
        "english": "palanquin"
    },
    {
        "kanji": "轗",
        "onyomi": "カン, コン",
        "kunyomi": "",
        "english": "difficulty"
    },
    {
        "kanji": "轜",
        "onyomi": "ジ",
        "kunyomi": "ひつぎぐるま, じしゃ",
        "english": "hearse"
    },
    {
        "kanji": "轢",
        "onyomi": "レキ",
        "kunyomi": "ひ-く, きし-る",
        "english": "run over"
    },
    {
        "kanji": "轣",
        "onyomi": "レキ",
        "kunyomi": "",
        "english": "creaking sound"
    },
    {
        "kanji": "轤",
        "onyomi": "ロ",
        "kunyomi": "",
        "english": "pulley"
    },
    {
        "kanji": "辜",
        "onyomi": "コ",
        "kunyomi": "つみ",
        "english": "sin"
    },
    {
        "kanji": "辟",
        "onyomi": "ヘキ, ヒ",
        "kunyomi": "きみ, ひら-く, め-す",
        "english": "false"
    },
    {
        "kanji": "辣",
        "onyomi": "ラツ",
        "kunyomi": "から-い",
        "english": "pungent"
    },
    {
        "kanji": "辭",
        "onyomi": "ジ",
        "kunyomi": "や-める",
        "english": "words"
    },
    {
        "kanji": "辯",
        "onyomi": "ベン, ヘン",
        "kunyomi": "わきま-える, わ-ける, はなびら, あらそ-う",
        "english": "speech"
    },
    {
        "kanji": "辷",
        "onyomi": "",
        "kunyomi": "すべ-る, すべ-らす",
        "english": "glide"
    },
    {
        "kanji": "迚",
        "onyomi": "",
        "kunyomi": "とても",
        "english": "some way or other"
    },
    {
        "kanji": "迥",
        "onyomi": "ケイ, ギョウ",
        "kunyomi": "はるか",
        "english": "far"
    },
    {
        "kanji": "迢",
        "onyomi": "チョ, チョウ",
        "kunyomi": "",
        "english": "far off"
    },
    {
        "kanji": "迪",
        "onyomi": "テキ",
        "kunyomi": "みち, みちび-く, すす-む, いた-る",
        "english": "edify"
    },
    {
        "kanji": "迯",
        "onyomi": "トウ",
        "kunyomi": "に-げる, に-がす, のが-す, のが-れる",
        "english": "escape"
    },
    {
        "kanji": "邇",
        "onyomi": "ジ, ニ",
        "kunyomi": "ちか-い",
        "english": "approach"
    },
    {
        "kanji": "迴",
        "onyomi": "カイ, エ",
        "kunyomi": "",
        "english": "go around"
    },
    {
        "kanji": "逅",
        "onyomi": "コウ",
        "kunyomi": "あ-う, まみ-える",
        "english": "meet"
    },
    {
        "kanji": "迹",
        "onyomi": "セキ, シャク",
        "kunyomi": "あと",
        "english": "mark"
    },
    {
        "kanji": "迺",
        "onyomi": "ナイ, ダイ, アイ",
        "kunyomi": "の, すなわ-ち, なんじ",
        "english": "in other words"
    },
    {
        "kanji": "逑",
        "onyomi": "キュウ",
        "kunyomi": "つれあ-い",
        "english": "pair"
    },
    {
        "kanji": "逕",
        "onyomi": "ケイ",
        "kunyomi": "みち, こみち, さしわたし, ただちに",
        "english": "path"
    },
    {
        "kanji": "逡",
        "onyomi": "シュン",
        "kunyomi": "しりぞ-く",
        "english": "saunter"
    },
    {
        "kanji": "逍",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "saunter"
    },
    {
        "kanji": "逞",
        "onyomi": "テイ",
        "kunyomi": "たくま-しい",
        "english": "sturdy"
    },
    {
        "kanji": "逖",
        "onyomi": "テキ",
        "kunyomi": "とお-い",
        "english": "far"
    },
    {
        "kanji": "逋",
        "onyomi": "ホ, フ",
        "kunyomi": "のが-れる",
        "english": "flee"
    },
    {
        "kanji": "逧",
        "onyomi": "",
        "kunyomi": "さこ, せこ",
        "english": "ravine"
    },
    {
        "kanji": "逶",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "long"
    },
    {
        "kanji": "逵",
        "onyomi": "キ",
        "kunyomi": "おおじ",
        "english": "broad road"
    },
    {
        "kanji": "逹",
        "onyomi": "タツ, ダ",
        "kunyomi": "-たち",
        "english": "arrive at"
    },
    {
        "kanji": "迸",
        "onyomi": "ホウ, ヒョウ",
        "kunyomi": "ほとばし-る, はし-る",
        "english": "gush out"
    },
    {
        "kanji": "遏",
        "onyomi": "アツ",
        "kunyomi": "とど-める, と-める",
        "english": "stop"
    },
    {
        "kanji": "遐",
        "onyomi": "カ",
        "kunyomi": "とお-い, なんぞ",
        "english": "distant"
    },
    {
        "kanji": "遑",
        "onyomi": "カン, コウ",
        "kunyomi": "いとま, ひま",
        "english": "leisure"
    },
    {
        "kanji": "遒",
        "onyomi": "シュウ",
        "kunyomi": "せま-る, つよ-い",
        "english": "strong"
    },
    {
        "kanji": "逎",
        "onyomi": "シュウ",
        "kunyomi": "せま-る, つよ-い",
        "english": "strong"
    },
    {
        "kanji": "遉",
        "onyomi": "テイ",
        "kunyomi": "うかが-う, さすが",
        "english": "as might be expected"
    },
    {
        "kanji": "逾",
        "onyomi": "ユ",
        "kunyomi": "いよいよ, こ-える",
        "english": "pass"
    },
    {
        "kanji": "遖",
        "onyomi": "",
        "kunyomi": "あっぱれ",
        "english": "bravo"
    },
    {
        "kanji": "遘",
        "onyomi": "コウ",
        "kunyomi": "あ-う, まみ-える",
        "english": "meet"
    },
    {
        "kanji": "遞",
        "onyomi": "テイ",
        "kunyomi": "かわ-る, たがいに",
        "english": "hand over"
    },
    {
        "kanji": "遨",
        "onyomi": "ゴウ",
        "kunyomi": "あそ-ぶ",
        "english": "play"
    },
    {
        "kanji": "遯",
        "onyomi": "トン",
        "kunyomi": "のが-れる",
        "english": "deceive"
    },
    {
        "kanji": "遶",
        "onyomi": "ニョウ, ジョウ",
        "kunyomi": "めぐ-る",
        "english": "surround"
    },
    {
        "kanji": "隨",
        "onyomi": "ズイ",
        "kunyomi": "まにまに, したが-う",
        "english": "at the mercy of (the waves)"
    },
    {
        "kanji": "遲",
        "onyomi": "チ",
        "kunyomi": "おく-れる, おく-らす, おそ-い",
        "english": "late"
    },
    {
        "kanji": "邂",
        "onyomi": "カイ",
        "kunyomi": "あ-う",
        "english": "meet unexpectedly"
    },
    {
        "kanji": "遽",
        "onyomi": "キョ",
        "kunyomi": "あわ-てる, あわただ-しい, すみやか, にわか",
        "english": "fear"
    },
    {
        "kanji": "邁",
        "onyomi": "マイ, バイ",
        "kunyomi": "ゆ-く",
        "english": "go"
    },
    {
        "kanji": "邀",
        "onyomi": "ヨウ",
        "kunyomi": "むか-える, もと-める",
        "english": "go to meet"
    },
    {
        "kanji": "邊",
        "onyomi": "ヘン",
        "kunyomi": "あた-り, ほと-り, -べ",
        "english": "edge"
    },
    {
        "kanji": "邉",
        "onyomi": "ヘン",
        "kunyomi": "あた-り, ほと-り, -べ",
        "english": "edge"
    },
    {
        "kanji": "邏",
        "onyomi": "ラ",
        "kunyomi": "めぐ-る",
        "english": "go around"
    },
    {
        "kanji": "邨",
        "onyomi": "ソン",
        "kunyomi": "むら",
        "english": "village"
    },
    {
        "kanji": "邯",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "place name"
    },
    {
        "kanji": "邱",
        "onyomi": "キュウ",
        "kunyomi": "おか",
        "english": "hill"
    },
    {
        "kanji": "邵",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "place name"
    },
    {
        "kanji": "郢",
        "onyomi": "エイ",
        "kunyomi": "",
        "english": "place name"
    },
    {
        "kanji": "郤",
        "onyomi": "ゲキ, キャク, ケキ",
        "kunyomi": "",
        "english": "crevice"
    },
    {
        "kanji": "扈",
        "onyomi": "コ",
        "kunyomi": "したが-う",
        "english": "follow"
    },
    {
        "kanji": "郛",
        "onyomi": "フ",
        "kunyomi": "くるわ",
        "english": "earthwork enclosure around a castle"
    },
    {
        "kanji": "鄂",
        "onyomi": "ガク",
        "kunyomi": "",
        "english": "place name"
    },
    {
        "kanji": "鄒",
        "onyomi": "スウ, シュ, シュウ",
        "kunyomi": "",
        "english": "place name"
    },
    {
        "kanji": "鄙",
        "onyomi": "ヒ",
        "kunyomi": "ひな, ひな-びる, いや-しい",
        "english": "lowly"
    },
    {
        "kanji": "鄲",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "place name"
    },
    {
        "kanji": "鄰",
        "onyomi": "リン",
        "kunyomi": "とな-る, となり",
        "english": "neighbor"
    },
    {
        "kanji": "酊",
        "onyomi": "テイ",
        "kunyomi": "よう",
        "english": "intoxication"
    },
    {
        "kanji": "酖",
        "onyomi": "タン, チン",
        "kunyomi": "ふ-ける",
        "english": "addiction"
    },
    {
        "kanji": "酘",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "rebrew"
    },
    {
        "kanji": "酣",
        "onyomi": "カン",
        "kunyomi": "たけなわ",
        "english": "height of"
    },
    {
        "kanji": "酥",
        "onyomi": "ソ",
        "kunyomi": "",
        "english": "milk"
    },
    {
        "kanji": "酩",
        "onyomi": "メイ",
        "kunyomi": "よう",
        "english": "sweet sake"
    },
    {
        "kanji": "酳",
        "onyomi": "シン, イン",
        "kunyomi": "",
        "english": "drunken babbling"
    },
    {
        "kanji": "酲",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "hangover"
    },
    {
        "kanji": "醋",
        "onyomi": "サク",
        "kunyomi": "す",
        "english": "vinegar"
    },
    {
        "kanji": "醉",
        "onyomi": "スイ",
        "kunyomi": "よ-う, よ-い",
        "english": "get drunk"
    },
    {
        "kanji": "醂",
        "onyomi": "ラン, リン",
        "kunyomi": "あわ-す, さわ-す",
        "english": "remove astringency"
    },
    {
        "kanji": "醢",
        "onyomi": "カイ",
        "kunyomi": "ひしお, ししびしお, しおから",
        "english": "salted meat"
    },
    {
        "kanji": "醫",
        "onyomi": "イ",
        "kunyomi": "い-やす, い-する, くすし",
        "english": "medicine"
    },
    {
        "kanji": "醯",
        "onyomi": "ケイ, カイ",
        "kunyomi": "",
        "english": "vinegar"
    },
    {
        "kanji": "醪",
        "onyomi": "ロウ",
        "kunyomi": "もろみ, にごりざけ",
        "english": "unrefined sake or shoyu"
    },
    {
        "kanji": "醵",
        "onyomi": "キョ",
        "kunyomi": "",
        "english": "contribution for a feast (potluck)"
    },
    {
        "kanji": "醴",
        "onyomi": "レイ, ライ",
        "kunyomi": "あまざけ",
        "english": "sweet sake"
    },
    {
        "kanji": "醺",
        "onyomi": "クン",
        "kunyomi": "よう",
        "english": "hunger"
    },
    {
        "kanji": "釀",
        "onyomi": "ジョウ",
        "kunyomi": "かも-す",
        "english": "brew"
    },
    {
        "kanji": "釁",
        "onyomi": "キン",
        "kunyomi": "ちぬ-る, すき, ひま",
        "english": "smear with blood"
    },
    {
        "kanji": "釉",
        "onyomi": "ユウ",
        "kunyomi": "うわぐすり",
        "english": "glaze"
    },
    {
        "kanji": "釋",
        "onyomi": "シャク, セキ",
        "kunyomi": "とく, す-てる, ゆる-す",
        "english": "explain"
    },
    {
        "kanji": "釐",
        "onyomi": "リ",
        "kunyomi": "おさ-める, さいわ-い, りん",
        "english": "few"
    },
    {
        "kanji": "釖",
        "onyomi": "トウ",
        "kunyomi": "かたな, そり",
        "english": "knife"
    },
    {
        "kanji": "釟",
        "onyomi": "ハチ, ハツ",
        "kunyomi": "",
        "english": "forge"
    },
    {
        "kanji": "釡",
        "onyomi": "フ",
        "kunyomi": "かま",
        "english": "kettle"
    },
    {
        "kanji": "釛",
        "onyomi": "コク",
        "kunyomi": "かね",
        "english": "gold"
    },
    {
        "kanji": "釼",
        "onyomi": "ケン",
        "kunyomi": "つるぎ",
        "english": "sword"
    },
    {
        "kanji": "釵",
        "onyomi": "サイ, サ",
        "kunyomi": "かざし, かんざし",
        "english": "ornamental hairpin"
    },
    {
        "kanji": "釶",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "halberd"
    },
    {
        "kanji": "鈞",
        "onyomi": "キン",
        "kunyomi": "ひと-しい",
        "english": "equal"
    },
    {
        "kanji": "釿",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "hatchet"
    },
    {
        "kanji": "鈔",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "selection"
    },
    {
        "kanji": "鈬",
        "onyomi": "タク",
        "kunyomi": "",
        "english": "bell"
    },
    {
        "kanji": "鈕",
        "onyomi": "チュウ, ジュウ",
        "kunyomi": "ぼたん, つまみ",
        "english": "button"
    },
    {
        "kanji": "鈑",
        "onyomi": "バン, ハン",
        "kunyomi": "",
        "english": "sheet metal"
    },
    {
        "kanji": "鉞",
        "onyomi": "エツ",
        "kunyomi": "まさかり",
        "english": "battleaxe"
    },
    {
        "kanji": "鉗",
        "onyomi": "ケン, カン",
        "kunyomi": "つぐ-む, くびかせ",
        "english": "shut up"
    },
    {
        "kanji": "鉅",
        "onyomi": "キョ",
        "kunyomi": "はがね",
        "english": "big"
    },
    {
        "kanji": "鉉",
        "onyomi": "ケン",
        "kunyomi": "つ-る",
        "english": "handle"
    },
    {
        "kanji": "鉤",
        "onyomi": "コウ, ク",
        "kunyomi": "かぎ, はり, ばり",
        "english": "hook"
    },
    {
        "kanji": "鉈",
        "onyomi": "シャ",
        "kunyomi": "なた, ほこ",
        "english": "hatchet"
    },
    {
        "kanji": "銕",
        "onyomi": "テツ",
        "kunyomi": "くろがね",
        "english": "iron"
    },
    {
        "kanji": "鈿",
        "onyomi": "デン, テン",
        "kunyomi": "かんざし",
        "english": "ornamental hairpiece"
    },
    {
        "kanji": "鉋",
        "onyomi": "ホウ, ビョウ",
        "kunyomi": "かんな",
        "english": "carpenter's plane"
    },
    {
        "kanji": "鉐",
        "onyomi": "セキ, ジャク",
        "kunyomi": "",
        "english": "brass"
    },
    {
        "kanji": "銜",
        "onyomi": "カン",
        "kunyomi": "くつわ, くわ-える",
        "english": "horse's bit"
    },
    {
        "kanji": "銖",
        "onyomi": "シュ",
        "kunyomi": "",
        "english": "measuring unit, 1/16 of a ryou"
    },
    {
        "kanji": "銓",
        "onyomi": "セン",
        "kunyomi": "はか-る",
        "english": "measure"
    },
    {
        "kanji": "銛",
        "onyomi": "セン, テン",
        "kunyomi": "もり, すき",
        "english": "harpoon"
    },
    {
        "kanji": "鉚",
        "onyomi": "リュ",
        "kunyomi": "よいかね",
        "english": "gold"
    },
    {
        "kanji": "鋏",
        "onyomi": "キョウ",
        "kunyomi": "はさみ, はさ-む, つるぎ",
        "english": "scissors"
    },
    {
        "kanji": "銹",
        "onyomi": "シュ, シュウ",
        "kunyomi": "さび",
        "english": "rust"
    },
    {
        "kanji": "銷",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "け-す, と-ける, かわ-す, とろ-かす",
        "english": "erase"
    },
    {
        "kanji": "鋩",
        "onyomi": "ボウ",
        "kunyomi": "ほこさき, きっさき, へさき",
        "english": "sword point"
    },
    {
        "kanji": "錏",
        "onyomi": "ア, エ",
        "kunyomi": "しろこ, しころ",
        "english": "armour havelock"
    },
    {
        "kanji": "鋺",
        "onyomi": "エン",
        "kunyomi": "かなまり",
        "english": "metal bowl"
    },
    {
        "kanji": "鍄",
        "onyomi": "リョウ, キョウ",
        "kunyomi": "",
        "english": "kind of percussion instrument"
    },
    {
        "kanji": "錮",
        "onyomi": "コ",
        "kunyomi": "ふさ-ぐ",
        "english": "confinement"
    },
    {
        "kanji": "錙",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "unit of weight"
    },
    {
        "kanji": "錢",
        "onyomi": "セン",
        "kunyomi": "ぜに, すき",
        "english": "100th of yen"
    },
    {
        "kanji": "錚",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "gong"
    },
    {
        "kanji": "錣",
        "onyomi": "テツ, テイ",
        "kunyomi": "しころ",
        "english": "armor neckplates"
    },
    {
        "kanji": "錺",
        "onyomi": "",
        "kunyomi": "かざり",
        "english": "metal jewelry"
    },
    {
        "kanji": "錵",
        "onyomi": "カ",
        "kunyomi": "にえ",
        "english": "holmium"
    },
    {
        "kanji": "錻",
        "onyomi": "ブ",
        "kunyomi": "",
        "english": "tin plate"
    },
    {
        "kanji": "鍜",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "armour neck plates"
    },
    {
        "kanji": "鍠",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "sound of bells and drums"
    },
    {
        "kanji": "鍼",
        "onyomi": "シン",
        "kunyomi": "はり, さ-す",
        "english": "needle"
    },
    {
        "kanji": "鍮",
        "onyomi": "チュウ, トウ",
        "kunyomi": "",
        "english": "brass"
    },
    {
        "kanji": "鍖",
        "onyomi": "チン",
        "kunyomi": "",
        "english": "unsatisfactory"
    },
    {
        "kanji": "鎰",
        "onyomi": "イツ",
        "kunyomi": "かぎ",
        "english": "unit of weight"
    },
    {
        "kanji": "鎬",
        "onyomi": "コウ",
        "kunyomi": "しのぎ, なべ",
        "english": "sword-blade ridges"
    },
    {
        "kanji": "鎭",
        "onyomi": "チン",
        "kunyomi": "しず-める, しず-まる, おさえ",
        "english": "ancient peace-preservation centers"
    },
    {
        "kanji": "鎔",
        "onyomi": "ヨウ",
        "kunyomi": "と-ける, と-かす, いがた",
        "english": "fuse"
    },
    {
        "kanji": "鎹",
        "onyomi": "",
        "kunyomi": "かすがい",
        "english": "clamp"
    },
    {
        "kanji": "鏖",
        "onyomi": "オウ",
        "kunyomi": "みなごろ-し",
        "english": "massacre"
    },
    {
        "kanji": "鏗",
        "onyomi": "コウ",
        "kunyomi": "つく",
        "english": "clinking sound"
    },
    {
        "kanji": "鏨",
        "onyomi": "サン, ザン",
        "kunyomi": "たがね",
        "english": "cold chisel"
    },
    {
        "kanji": "鏥",
        "onyomi": "シュウ",
        "kunyomi": "さび",
        "english": "rust"
    },
    {
        "kanji": "鏘",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "",
        "english": "tinkling of jade or metal pendants"
    },
    {
        "kanji": "鏃",
        "onyomi": "ソク, ゾク",
        "kunyomi": "やじり",
        "english": "arrowhead"
    },
    {
        "kanji": "鏝",
        "onyomi": "マン",
        "kunyomi": "こて",
        "english": "soldering iron"
    },
    {
        "kanji": "鏐",
        "onyomi": "リュウ",
        "kunyomi": "",
        "english": "gold"
    },
    {
        "kanji": "鏈",
        "onyomi": "レン",
        "kunyomi": "くさり",
        "english": "chain"
    },
    {
        "kanji": "鏤",
        "onyomi": "ル, ロウ",
        "kunyomi": "ちりば-める",
        "english": "inlay"
    },
    {
        "kanji": "鐚",
        "onyomi": "ワ, ア",
        "kunyomi": "びた, しころ",
        "english": "coin of smallest value"
    },
    {
        "kanji": "鐔",
        "onyomi": "タン, シン",
        "kunyomi": "つば",
        "english": "sword guard"
    },
    {
        "kanji": "鐓",
        "onyomi": "タイ",
        "kunyomi": "いしづき",
        "english": "ferrule"
    },
    {
        "kanji": "鐃",
        "onyomi": "ドウ, ニョウ",
        "kunyomi": "どら",
        "english": "gong"
    },
    {
        "kanji": "鐇",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "hatchet"
    },
    {
        "kanji": "鐐",
        "onyomi": "リョウ",
        "kunyomi": "あしかせ",
        "english": "silver"
    },
    {
        "kanji": "鐶",
        "onyomi": "カン",
        "kunyomi": "たまき, わ",
        "english": "metal ring"
    },
    {
        "kanji": "鐫",
        "onyomi": "セン",
        "kunyomi": "ほ-る, え-る, き-る, のみ",
        "english": "carve"
    },
    {
        "kanji": "鐵",
        "onyomi": "テツ",
        "kunyomi": "くろがね",
        "english": "iron"
    },
    {
        "kanji": "鐡",
        "onyomi": "テツ",
        "kunyomi": "くろがね",
        "english": "iron"
    },
    {
        "kanji": "鐺",
        "onyomi": "ト, ソウ, トウ",
        "kunyomi": "くさり, こじり, こて, なべ",
        "english": "chain"
    },
    {
        "kanji": "鑁",
        "onyomi": "バン",
        "kunyomi": "",
        "english": "name"
    },
    {
        "kanji": "鑒",
        "onyomi": "カン",
        "kunyomi": "かんが-みる, かがみ",
        "english": "take warning from"
    },
    {
        "kanji": "鑄",
        "onyomi": "チュウ, シュ, シュウ",
        "kunyomi": "い-る",
        "english": "cast"
    },
    {
        "kanji": "鑛",
        "onyomi": "コウ",
        "kunyomi": "あらがね",
        "english": "ore"
    },
    {
        "kanji": "鑠",
        "onyomi": "シャク",
        "kunyomi": "とろ-かす, と-かす",
        "english": "melt"
    },
    {
        "kanji": "鑢",
        "onyomi": "ロ, リョ",
        "kunyomi": "やすり",
        "english": "file"
    },
    {
        "kanji": "鑞",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "solder"
    },
    {
        "kanji": "鑪",
        "onyomi": "ロ",
        "kunyomi": "いろり",
        "english": "hearth"
    },
    {
        "kanji": "鈩",
        "onyomi": "ロ",
        "kunyomi": "いろり",
        "english": "hearth"
    },
    {
        "kanji": "鑰",
        "onyomi": "ヤク",
        "kunyomi": "かぎ",
        "english": "lock"
    },
    {
        "kanji": "鑵",
        "onyomi": "カン",
        "kunyomi": "かま",
        "english": "steam boiler"
    },
    {
        "kanji": "鑷",
        "onyomi": "セツ, ジョウ, ニョウ",
        "kunyomi": "けぬき",
        "english": "pluck hair"
    },
    {
        "kanji": "鑽",
        "onyomi": "サン",
        "kunyomi": "き-る",
        "english": "make fire by rubbing sticks"
    },
    {
        "kanji": "鑚",
        "onyomi": "サン",
        "kunyomi": "き-る",
        "english": "make fire by rubbing sticks"
    },
    {
        "kanji": "鑼",
        "onyomi": "ラ",
        "kunyomi": "どら",
        "english": "gong"
    },
    {
        "kanji": "鑾",
        "onyomi": "ラン",
        "kunyomi": "すず",
        "english": "bells on emperor's carriage"
    },
    {
        "kanji": "钁",
        "onyomi": "カク, キャク",
        "kunyomi": "",
        "english": "hoe"
    },
    {
        "kanji": "鑿",
        "onyomi": "サク",
        "kunyomi": "のみ, うが-つ",
        "english": "chisel"
    },
    {
        "kanji": "閂",
        "onyomi": "サン, セン",
        "kunyomi": "かんぬき",
        "english": "gate bar"
    },
    {
        "kanji": "閇",
        "onyomi": "ヘイ",
        "kunyomi": "と-じる, と-ざす, し-める, し-まる, た-てる",
        "english": "shut"
    },
    {
        "kanji": "閊",
        "onyomi": "",
        "kunyomi": "つか-える",
        "english": "to be obstructed"
    },
    {
        "kanji": "閔",
        "onyomi": "ビン, ミン",
        "kunyomi": "あわ-れむ, うれ-える",
        "english": "grieve"
    },
    {
        "kanji": "閖",
        "onyomi": "",
        "kunyomi": "ゆり, ゆ-る, ゆ-れる",
        "english": "shake while rinsing"
    },
    {
        "kanji": "閘",
        "onyomi": "コウ",
        "kunyomi": "ひのくち",
        "english": "water gate"
    },
    {
        "kanji": "閙",
        "onyomi": "ドウ, トウ",
        "kunyomi": "さわが-しい",
        "english": "noisy"
    },
    {
        "kanji": "閠",
        "onyomi": "ケイ, ギョク, ジュン",
        "kunyomi": "うるう",
        "english": "intercalation"
    },
    {
        "kanji": "閨",
        "onyomi": "ケイ, ケ",
        "kunyomi": "ねや",
        "english": "bedroom"
    },
    {
        "kanji": "閧",
        "onyomi": "コウ",
        "kunyomi": "とき",
        "english": "war cry"
    },
    {
        "kanji": "閭",
        "onyomi": "リョ, ロ",
        "kunyomi": "さと",
        "english": "rural area"
    },
    {
        "kanji": "閼",
        "onyomi": "ア, アツ, エン, ヨ",
        "kunyomi": "とど-める, ふさ-ぐ",
        "english": "obstruct"
    },
    {
        "kanji": "閻",
        "onyomi": "エン",
        "kunyomi": "",
        "english": "town"
    },
    {
        "kanji": "閹",
        "onyomi": "エン, アン",
        "kunyomi": "おお-う",
        "english": "eunuch"
    },
    {
        "kanji": "閾",
        "onyomi": "シキ, イキ, キョク, ヨク",
        "kunyomi": "くぎり, しきい",
        "english": "threshold"
    },
    {
        "kanji": "闊",
        "onyomi": "カツ",
        "kunyomi": "ひろ-い",
        "english": "wide"
    },
    {
        "kanji": "濶",
        "onyomi": "カツ",
        "kunyomi": "ひろ-い",
        "english": "wide"
    },
    {
        "kanji": "闃",
        "onyomi": "ゲキ, ケキ",
        "kunyomi": "しずか, ひっそり",
        "english": "quiet"
    },
    {
        "kanji": "闍",
        "onyomi": "ト, ジャ",
        "kunyomi": "",
        "english": "watchtower"
    },
    {
        "kanji": "闌",
        "onyomi": "ラン",
        "kunyomi": "た-ける, たけなわ, てすり",
        "english": "rise high"
    },
    {
        "kanji": "闕",
        "onyomi": "ケツ",
        "kunyomi": "か-ける",
        "english": "lack"
    },
    {
        "kanji": "闔",
        "onyomi": "コウ",
        "kunyomi": "とびら",
        "english": "doors"
    },
    {
        "kanji": "闖",
        "onyomi": "チン",
        "kunyomi": "うかが-う",
        "english": "inquire about"
    },
    {
        "kanji": "關",
        "onyomi": "カン",
        "kunyomi": "せき, かか-わる, からくり, かんぬき",
        "english": "connection"
    },
    {
        "kanji": "闡",
        "onyomi": "セン",
        "kunyomi": "みち-る",
        "english": "clarify"
    },
    {
        "kanji": "闥",
        "onyomi": "タツ, タチ",
        "kunyomi": "",
        "english": "gate"
    },
    {
        "kanji": "闢",
        "onyomi": "ヘキ, ビャク",
        "kunyomi": "ひら-く",
        "english": "open"
    },
    {
        "kanji": "阡",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "thousand"
    },
    {
        "kanji": "阨",
        "onyomi": "ヤク, アイ, アク",
        "kunyomi": "せま-い, ふさが-る, せま-る",
        "english": "obstruct"
    },
    {
        "kanji": "阮",
        "onyomi": "ゲン",
        "kunyomi": "",
        "english": "place name"
    },
    {
        "kanji": "阯",
        "onyomi": "シ",
        "kunyomi": "あと",
        "english": "foundation"
    },
    {
        "kanji": "陂",
        "onyomi": "ヒ, ハ",
        "kunyomi": "つつみ",
        "english": "levee"
    },
    {
        "kanji": "陌",
        "onyomi": "ハク",
        "kunyomi": "まち, みち",
        "english": "east-west path between paddies"
    },
    {
        "kanji": "陏",
        "onyomi": "ダ",
        "kunyomi": "ずい",
        "english": "melon"
    },
    {
        "kanji": "陋",
        "onyomi": "ロウ",
        "kunyomi": "いや-しい, せま-い",
        "english": "narrowness"
    },
    {
        "kanji": "陷",
        "onyomi": "カン",
        "kunyomi": "おちい-る, おとしい-れる",
        "english": "fall into"
    },
    {
        "kanji": "陜",
        "onyomi": "キョウ, コウ",
        "kunyomi": "せま-い",
        "english": "narrow"
    },
    {
        "kanji": "陞",
        "onyomi": "ショウ",
        "kunyomi": "のぼ-る",
        "english": "go up"
    },
    {
        "kanji": "陝",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "place name"
    },
    {
        "kanji": "陟",
        "onyomi": "チョク, トク",
        "kunyomi": "すす-む, のぼ-る",
        "english": "climb"
    },
    {
        "kanji": "陦",
        "onyomi": "トウ, チョウ",
        "kunyomi": "しま",
        "english": "island"
    },
    {
        "kanji": "陲",
        "onyomi": "スイ",
        "kunyomi": "ほとり",
        "english": "boundary"
    },
    {
        "kanji": "陬",
        "onyomi": "スウ, シュウ",
        "kunyomi": "すみ",
        "english": "corner"
    },
    {
        "kanji": "隍",
        "onyomi": "コウ",
        "kunyomi": "ほり",
        "english": "dry moat"
    },
    {
        "kanji": "隘",
        "onyomi": "アイ, ヤク",
        "kunyomi": "せま-い",
        "english": "narrow"
    },
    {
        "kanji": "隕",
        "onyomi": "イン, エン, ウン",
        "kunyomi": "おち-る",
        "english": "fall"
    },
    {
        "kanji": "隗",
        "onyomi": "カイ",
        "kunyomi": "けわ-しい",
        "english": "high"
    },
    {
        "kanji": "險",
        "onyomi": "ケン",
        "kunyomi": "けわ-しい",
        "english": "inaccessible place"
    },
    {
        "kanji": "隧",
        "onyomi": "スイ, ツイ",
        "kunyomi": "みち",
        "english": "fall"
    },
    {
        "kanji": "隱",
        "onyomi": "イン, オン",
        "kunyomi": "かく-す, かく-れる, よ-る",
        "english": "hide"
    },
    {
        "kanji": "隲",
        "onyomi": "チョク, シツ",
        "kunyomi": "のぼ-る",
        "english": "stallion"
    },
    {
        "kanji": "隰",
        "onyomi": "シツ, シュウ",
        "kunyomi": "さわ",
        "english": "be moist"
    },
    {
        "kanji": "隴",
        "onyomi": "ロウ, リョウ",
        "kunyomi": "おか",
        "english": "hill"
    },
    {
        "kanji": "隶",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "extend"
    },
    {
        "kanji": "隸",
        "onyomi": "レイ",
        "kunyomi": "したが-う, しもべ",
        "english": "servant"
    },
    {
        "kanji": "隹",
        "onyomi": "サイ, スイ",
        "kunyomi": "とり",
        "english": "bird"
    },
    {
        "kanji": "雎",
        "onyomi": "ショ",
        "kunyomi": "",
        "english": "osprey"
    },
    {
        "kanji": "雋",
        "onyomi": "シュン, セン",
        "kunyomi": "すぐ-れる",
        "english": "excel"
    },
    {
        "kanji": "雉",
        "onyomi": "ジ, チ",
        "kunyomi": "きじ",
        "english": "pheasant"
    },
    {
        "kanji": "雍",
        "onyomi": "ヨウ, ユ",
        "kunyomi": "ふさ-ぐ, やわら-ぐ",
        "english": "softening"
    },
    {
        "kanji": "襍",
        "onyomi": "ザツ, ゾウ",
        "kunyomi": "まじ-える, まじ-る",
        "english": "mixed"
    },
    {
        "kanji": "雜",
        "onyomi": "ザツ, ゾウ",
        "kunyomi": "まじ-える, まじ-る",
        "english": "mixed"
    },
    {
        "kanji": "霍",
        "onyomi": "カク",
        "kunyomi": "にわか",
        "english": "quick"
    },
    {
        "kanji": "雕",
        "onyomi": "チョウ",
        "kunyomi": "きざ-む, わし, ほ-る",
        "english": "carving"
    },
    {
        "kanji": "雹",
        "onyomi": "ハク, ヒョク, ボク",
        "kunyomi": "ひょう",
        "english": "hail"
    },
    {
        "kanji": "霄",
        "onyomi": "ショウ",
        "kunyomi": "そら",
        "english": "sky"
    },
    {
        "kanji": "霆",
        "onyomi": "テイ",
        "kunyomi": "いかづち",
        "english": "lightning"
    },
    {
        "kanji": "霈",
        "onyomi": "ハイ",
        "kunyomi": "ひさめ",
        "english": "big rain"
    },
    {
        "kanji": "霓",
        "onyomi": "ゲイ",
        "kunyomi": "にじ",
        "english": "rainbow"
    },
    {
        "kanji": "霎",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "",
        "english": "light rain"
    },
    {
        "kanji": "霑",
        "onyomi": "テン",
        "kunyomi": "うるお-う, うるお-い",
        "english": "moisten"
    },
    {
        "kanji": "霏",
        "onyomi": "ヒ",
        "kunyomi": "もや",
        "english": "falling rain or snow"
    },
    {
        "kanji": "霖",
        "onyomi": "リン",
        "kunyomi": "ながあめ, ながめ",
        "english": "long rainy spell"
    },
    {
        "kanji": "霙",
        "onyomi": "エイ, ヨウ",
        "kunyomi": "みぞれ",
        "english": "sleet"
    },
    {
        "kanji": "霤",
        "onyomi": "リュウ",
        "kunyomi": "あまだれ",
        "english": "raindrops falling from the eaves"
    },
    {
        "kanji": "霪",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "rain lasting at least ten days"
    },
    {
        "kanji": "霰",
        "onyomi": "セン, サン",
        "kunyomi": "あられ",
        "english": "hail"
    },
    {
        "kanji": "霹",
        "onyomi": "ヘキ, ヒャク",
        "kunyomi": "",
        "english": "thunder"
    },
    {
        "kanji": "霽",
        "onyomi": "セイ, サイ",
        "kunyomi": "は-れる, は-らす",
        "english": "clear up"
    },
    {
        "kanji": "霾",
        "onyomi": "バイ",
        "kunyomi": "つちふる",
        "english": "wind-blown dust falling like rain"
    },
    {
        "kanji": "靄",
        "onyomi": "アイ",
        "kunyomi": "もや",
        "english": "mist"
    },
    {
        "kanji": "靆",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "cloud cover"
    },
    {
        "kanji": "靈",
        "onyomi": "レイ, リョウ",
        "kunyomi": "たま",
        "english": "soul"
    },
    {
        "kanji": "靂",
        "onyomi": "レキ",
        "kunyomi": "",
        "english": "violent"
    },
    {
        "kanji": "靉",
        "onyomi": "アイ, イ",
        "kunyomi": "",
        "english": "clouds"
    },
    {
        "kanji": "靜",
        "onyomi": "セイ, ジョウ",
        "kunyomi": "しず-, しず-か, しず-まる, しず-める",
        "english": "quiet"
    },
    {
        "kanji": "靠",
        "onyomi": "コウ",
        "kunyomi": "もた-れる, たが-う, よ-る",
        "english": "lean on"
    },
    {
        "kanji": "靤",
        "onyomi": "ホウ",
        "kunyomi": "にきび",
        "english": "pimple"
    },
    {
        "kanji": "靦",
        "onyomi": "テン",
        "kunyomi": "",
        "english": "unashamed"
    },
    {
        "kanji": "靨",
        "onyomi": "ヨウ",
        "kunyomi": "えくぼ",
        "english": "dimple"
    },
    {
        "kanji": "勒",
        "onyomi": "ロク",
        "kunyomi": "くつわ",
        "english": "halter and bit"
    },
    {
        "kanji": "靫",
        "onyomi": "ジン, ニン, サ, サイ, サツ",
        "kunyomi": "うつぼ, うつお, しな-やか, ゆぎ",
        "english": "quiver"
    },
    {
        "kanji": "靱",
        "onyomi": "ジン, ニン, サ, サイ, サツ",
        "kunyomi": "うつぼ, うつお, しな-やか, ゆぎ",
        "english": "soft"
    },
    {
        "kanji": "靹",
        "onyomi": "ケツ",
        "kunyomi": "",
        "english": "archer's arm protector"
    },
    {
        "kanji": "鞅",
        "onyomi": "オウ, ヨウ",
        "kunyomi": "むながい",
        "english": "martingale"
    },
    {
        "kanji": "靼",
        "onyomi": "タン, タチ, タツ",
        "kunyomi": "なめ-す, なめしがわ",
        "english": "tanned leather"
    },
    {
        "kanji": "鞁",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "reins"
    },
    {
        "kanji": "靺",
        "onyomi": "マツ, バツ",
        "kunyomi": "",
        "english": "leather tabi"
    },
    {
        "kanji": "鞆",
        "onyomi": "",
        "kunyomi": "とも",
        "english": "archer's arm protector"
    },
    {
        "kanji": "鞋",
        "onyomi": "アイ, カイ",
        "kunyomi": "わらじ, くつ",
        "english": "straw sandals"
    },
    {
        "kanji": "鞏",
        "onyomi": "キョウ",
        "kunyomi": "かたい",
        "english": "hard"
    },
    {
        "kanji": "鞐",
        "onyomi": "",
        "kunyomi": "こはぜ",
        "english": "clamp"
    },
    {
        "kanji": "鞜",
        "onyomi": "トウ",
        "kunyomi": "くつ",
        "english": "shoes"
    },
    {
        "kanji": "鞨",
        "onyomi": "カツ, ガチ, セツ, ゼチ",
        "kunyomi": "かわぐつ",
        "english": "leather boots"
    },
    {
        "kanji": "鞦",
        "onyomi": "シュウ",
        "kunyomi": "ふらん-に, しりがい",
        "english": "swing"
    },
    {
        "kanji": "鞣",
        "onyomi": "ジュウ, ニュウ",
        "kunyomi": "なめ-す, なめしがわ",
        "english": "tanned leather"
    },
    {
        "kanji": "鞳",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "rumbling"
    },
    {
        "kanji": "鞴",
        "onyomi": "ヒ, ビ, フク",
        "kunyomi": "ふいご",
        "english": "bellows"
    },
    {
        "kanji": "韃",
        "onyomi": "ダツ, タツ",
        "kunyomi": "",
        "english": "whip"
    },
    {
        "kanji": "韆",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "swing"
    },
    {
        "kanji": "韈",
        "onyomi": "ベツ, モチ, バツ, マチ",
        "kunyomi": "しとうず",
        "english": "tabi"
    },
    {
        "kanji": "韋",
        "onyomi": "イ",
        "kunyomi": "そむ-く",
        "english": "tanned leather radical (no. 178)"
    },
    {
        "kanji": "韜",
        "onyomi": "トウ",
        "kunyomi": "ゆぶくろ, ゆみぶくろ, つつ-む",
        "english": "bag"
    },
    {
        "kanji": "韭",
        "onyomi": "キュウ, ク",
        "kunyomi": "",
        "english": "leek radical (no. 179)"
    },
    {
        "kanji": "齏",
        "onyomi": "セイ, サイ",
        "kunyomi": "あえもの, なます, あ-える",
        "english": "dishes seasoned with vinegar or miso"
    },
    {
        "kanji": "韲",
        "onyomi": "セイ, サイ",
        "kunyomi": "あえもの, なます, あ-える",
        "english": "dress (salad) vegetables"
    },
    {
        "kanji": "竟",
        "onyomi": "キョウ, ケイ",
        "kunyomi": "おわ-る, ついに, わた-る",
        "english": "end"
    },
    {
        "kanji": "韶",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "beautiful"
    },
    {
        "kanji": "韵",
        "onyomi": "イン",
        "kunyomi": "ひびき",
        "english": "rhyme"
    },
    {
        "kanji": "頏",
        "onyomi": "コウ",
        "kunyomi": "のど",
        "english": "alight"
    },
    {
        "kanji": "頌",
        "onyomi": "ショウ, ジュ, ヨウ",
        "kunyomi": "かたち, たた-える, ほめ-る",
        "english": "eulogy"
    },
    {
        "kanji": "頸",
        "onyomi": "ケイ",
        "kunyomi": "くび",
        "english": "neck"
    },
    {
        "kanji": "頤",
        "onyomi": "イ",
        "kunyomi": "おとがい, あご",
        "english": "chin"
    },
    {
        "kanji": "頡",
        "onyomi": "ケツ, キツ, カツ, ケチ",
        "kunyomi": "",
        "english": "take wing"
    },
    {
        "kanji": "頷",
        "onyomi": "ガン, カン",
        "kunyomi": "うなず-く, あご",
        "english": "nod approval"
    },
    {
        "kanji": "頽",
        "onyomi": "タイ",
        "kunyomi": "くず-れる",
        "english": "decline"
    },
    {
        "kanji": "顆",
        "onyomi": "カ",
        "kunyomi": "つ-ぶ",
        "english": "grain (e.g. rice)"
    },
    {
        "kanji": "顏",
        "onyomi": "ガン",
        "kunyomi": "かお",
        "english": "face"
    },
    {
        "kanji": "顋",
        "onyomi": "サイ",
        "kunyomi": "あご, えら",
        "english": "lower part of face"
    },
    {
        "kanji": "顫",
        "onyomi": "セン",
        "kunyomi": "ふる-える",
        "english": "shudder"
    },
    {
        "kanji": "顯",
        "onyomi": "ケン",
        "kunyomi": "あきらか, あらわ-れる",
        "english": "manifest"
    },
    {
        "kanji": "顰",
        "onyomi": "ヒン",
        "kunyomi": "ひそ-める, しか-める",
        "english": "scowl"
    },
    {
        "kanji": "顱",
        "onyomi": "ロ",
        "kunyomi": "かしら, あたま",
        "english": "head"
    },
    {
        "kanji": "顴",
        "onyomi": "ケン, カン",
        "kunyomi": "",
        "english": "cheekbone"
    },
    {
        "kanji": "顳",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "temple (of head)"
    },
    {
        "kanji": "颪",
        "onyomi": "",
        "kunyomi": "おろし",
        "english": "wind from mountains"
    },
    {
        "kanji": "颯",
        "onyomi": "サツ, ソウ",
        "kunyomi": "さっ-と",
        "english": "sudden"
    },
    {
        "kanji": "颱",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "typhoon"
    },
    {
        "kanji": "颶",
        "onyomi": "グ, ク",
        "kunyomi": "",
        "english": "storm"
    },
    {
        "kanji": "飄",
        "onyomi": "ヒョウ",
        "kunyomi": "ひるが-える, つむじかぜ",
        "english": "turn over"
    },
    {
        "kanji": "飃",
        "onyomi": "ヒョウ",
        "kunyomi": "ひるが-える, つむじかぜ",
        "english": "whirlwind"
    },
    {
        "kanji": "飆",
        "onyomi": "ヒョウ",
        "kunyomi": "つむじかぜ",
        "english": "whirlwind"
    },
    {
        "kanji": "飩",
        "onyomi": "ドン, トン",
        "kunyomi": "",
        "english": "Japanese noodles"
    },
    {
        "kanji": "飫",
        "onyomi": "ヨウ, オ, ヨ",
        "kunyomi": "あき-る",
        "english": "satiety"
    },
    {
        "kanji": "餃",
        "onyomi": "ギョウ, キョウ, コウ",
        "kunyomi": "",
        "english": "gyoza"
    },
    {
        "kanji": "餉",
        "onyomi": "ショウ",
        "kunyomi": "け, かれい, かれい-い, べんとう",
        "english": "(dried) boiled rice"
    },
    {
        "kanji": "餒",
        "onyomi": "ダイ, イ",
        "kunyomi": "う-える",
        "english": "hunger"
    },
    {
        "kanji": "餔",
        "onyomi": "ホ, フ",
        "kunyomi": "く-う, ゆうめし",
        "english": "eat"
    },
    {
        "kanji": "餘",
        "onyomi": "ヨ",
        "kunyomi": "あま-る, あま-り, あま-す",
        "english": "surplus"
    },
    {
        "kanji": "餡",
        "onyomi": "アン, カン",
        "kunyomi": "",
        "english": "bean jam"
    },
    {
        "kanji": "餝",
        "onyomi": "コウ, シキ, ショク",
        "kunyomi": "かざり, かざ-る",
        "english": "decorate"
    },
    {
        "kanji": "餞",
        "onyomi": "セン",
        "kunyomi": "はなむけ",
        "english": "farewell gift"
    },
    {
        "kanji": "餤",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "eat"
    },
    {
        "kanji": "餠",
        "onyomi": "ヘイ, ヒョウ",
        "kunyomi": "もち, もちい",
        "english": "rice cake"
    },
    {
        "kanji": "餬",
        "onyomi": "コ",
        "kunyomi": "かゆ",
        "english": "rice broth"
    },
    {
        "kanji": "餮",
        "onyomi": "テツ",
        "kunyomi": "むさぼ-る",
        "english": "voracious"
    },
    {
        "kanji": "餽",
        "onyomi": "キ",
        "kunyomi": "おく-る",
        "english": "give"
    },
    {
        "kanji": "餾",
        "onyomi": "リュウ",
        "kunyomi": "",
        "english": "steaming rice"
    },
    {
        "kanji": "饂",
        "onyomi": "ウン",
        "kunyomi": "うどん",
        "english": "Japanese noodles"
    },
    {
        "kanji": "饉",
        "onyomi": "キン",
        "kunyomi": "う-える",
        "english": "hunger"
    },
    {
        "kanji": "饅",
        "onyomi": "マン",
        "kunyomi": "",
        "english": "bean-jam dumpling"
    },
    {
        "kanji": "饐",
        "onyomi": "イ, エイ, エツ",
        "kunyomi": "す-える, むせ-ぶ",
        "english": "go bad"
    },
    {
        "kanji": "饋",
        "onyomi": "キ",
        "kunyomi": "おく-る",
        "english": "give"
    },
    {
        "kanji": "饑",
        "onyomi": "キ",
        "kunyomi": "う-える",
        "english": "hunger"
    },
    {
        "kanji": "饒",
        "onyomi": "ジョウ, ニョウ",
        "kunyomi": "ゆたか",
        "english": "abundant"
    },
    {
        "kanji": "饌",
        "onyomi": "セン, サン",
        "kunyomi": "そな-える",
        "english": "food"
    },
    {
        "kanji": "饕",
        "onyomi": "トウ",
        "kunyomi": "むさぼ-る",
        "english": "be greedy"
    },
    {
        "kanji": "馗",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "road"
    },
    {
        "kanji": "馘",
        "onyomi": "カク, キョク",
        "kunyomi": "くびき-る, みみき-る",
        "english": "behead"
    },
    {
        "kanji": "馥",
        "onyomi": "クク, ヒョク, フク",
        "kunyomi": "か, かお-る",
        "english": "perfume"
    },
    {
        "kanji": "馭",
        "onyomi": "ギョ",
        "kunyomi": "",
        "english": "driving (horse)"
    },
    {
        "kanji": "馮",
        "onyomi": "ヒョウ, フ, フウ",
        "kunyomi": "たの-む, よ-る",
        "english": "displeasure"
    },
    {
        "kanji": "馼",
        "onyomi": "ブン, モン",
        "kunyomi": "",
        "english": "zebra with yellow eyes and red mane"
    },
    {
        "kanji": "駟",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "four horses"
    },
    {
        "kanji": "駛",
        "onyomi": "シ",
        "kunyomi": "は-せる, はや-い",
        "english": "run fast"
    },
    {
        "kanji": "駝",
        "onyomi": "ダ, タ",
        "kunyomi": "せむし",
        "english": "hunchback"
    },
    {
        "kanji": "駘",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "stupid"
    },
    {
        "kanji": "駑",
        "onyomi": "ド",
        "kunyomi": "にぶ-い",
        "english": "slow horse"
    },
    {
        "kanji": "駭",
        "onyomi": "ガイ, カイ",
        "kunyomi": "おどろ-く, おどろ-かす",
        "english": "be surprised"
    },
    {
        "kanji": "駮",
        "onyomi": "カク, ハク",
        "kunyomi": "ぶち, まだら",
        "english": "spots"
    },
    {
        "kanji": "駱",
        "onyomi": "ラク",
        "kunyomi": "かわらげ",
        "english": "white horse"
    },
    {
        "kanji": "駲",
        "onyomi": "シュウ, ジュン",
        "kunyomi": "",
        "english": "horse's buttocks"
    },
    {
        "kanji": "駻",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "rage"
    },
    {
        "kanji": "駸",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "speed"
    },
    {
        "kanji": "騁",
        "onyomi": "テイ",
        "kunyomi": "はせ-る",
        "english": "run fast"
    },
    {
        "kanji": "騏",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "fast horse"
    },
    {
        "kanji": "騅",
        "onyomi": "スイ",
        "kunyomi": "あしげ",
        "english": "grey horse"
    },
    {
        "kanji": "駢",
        "onyomi": "ヘン",
        "kunyomi": "なら-ぶ",
        "english": "two-horse carriage"
    },
    {
        "kanji": "騙",
        "onyomi": "ヘン",
        "kunyomi": "かた-る, だま-す",
        "english": "deceive"
    },
    {
        "kanji": "騫",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "lift up"
    },
    {
        "kanji": "騷",
        "onyomi": "ソウ",
        "kunyomi": "さわ-ぐ, うれい, さわが-しい",
        "english": "harass"
    },
    {
        "kanji": "驅",
        "onyomi": "ク",
        "kunyomi": "か-ける, か-る",
        "english": "spur a horse on"
    },
    {
        "kanji": "驂",
        "onyomi": "サン",
        "kunyomi": "そえうま",
        "english": "extra driver or horse"
    },
    {
        "kanji": "驀",
        "onyomi": "バク",
        "kunyomi": "",
        "english": "going straight forward"
    },
    {
        "kanji": "驃",
        "onyomi": "ヒョウ",
        "kunyomi": "",
        "english": "white horse"
    },
    {
        "kanji": "騾",
        "onyomi": "ラ",
        "kunyomi": "",
        "english": "mule"
    },
    {
        "kanji": "驕",
        "onyomi": "キョウ",
        "kunyomi": "おご-る",
        "english": "pride"
    },
    {
        "kanji": "驍",
        "onyomi": "ギョウ, キョウ",
        "kunyomi": "たけし, つよ-い",
        "english": "strong"
    },
    {
        "kanji": "驛",
        "onyomi": "エキ",
        "kunyomi": "",
        "english": "station"
    },
    {
        "kanji": "驗",
        "onyomi": "ケン, ゲン",
        "kunyomi": "あかし, しるし, ため-す, ためし",
        "english": "verification"
    },
    {
        "kanji": "驟",
        "onyomi": "シュウ",
        "kunyomi": "にわか, はせ-る",
        "english": "run"
    },
    {
        "kanji": "驢",
        "onyomi": "ロ, リョ",
        "kunyomi": "うさぎうま",
        "english": "donkey"
    },
    {
        "kanji": "驥",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "fast horse"
    },
    {
        "kanji": "驤",
        "onyomi": "ジョウ, ショウ",
        "kunyomi": "あ-がる",
        "english": "lift one's head"
    },
    {
        "kanji": "驩",
        "onyomi": "カン",
        "kunyomi": "よろこ-ぶ",
        "english": "greetings"
    },
    {
        "kanji": "驫",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "many horses"
    },
    {
        "kanji": "驪",
        "onyomi": "リ, レイ",
        "kunyomi": "",
        "english": "black horse"
    },
    {
        "kanji": "骭",
        "onyomi": "カン",
        "kunyomi": "はぎ",
        "english": "leg"
    },
    {
        "kanji": "骰",
        "onyomi": "トウ",
        "kunyomi": "さい",
        "english": "dice"
    },
    {
        "kanji": "骼",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "bleached bones"
    },
    {
        "kanji": "髀",
        "onyomi": "ヒ, ヘイ",
        "kunyomi": "もも",
        "english": "thigh"
    },
    {
        "kanji": "髏",
        "onyomi": "ロ",
        "kunyomi": "",
        "english": "skull"
    },
    {
        "kanji": "髑",
        "onyomi": "ドク, トク",
        "kunyomi": "",
        "english": "skull"
    },
    {
        "kanji": "髓",
        "onyomi": "ズイ",
        "kunyomi": "",
        "english": "marrow"
    },
    {
        "kanji": "體",
        "onyomi": "タイ, テイ",
        "kunyomi": "からだ, かたち",
        "english": "the body"
    },
    {
        "kanji": "髞",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "hurry"
    },
    {
        "kanji": "髟",
        "onyomi": "ヒュウ, ヒョウ",
        "kunyomi": "",
        "english": "hair hanging long"
    },
    {
        "kanji": "髢",
        "onyomi": "テイ, セキ",
        "kunyomi": "かもじ",
        "english": "wig"
    },
    {
        "kanji": "髣",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "dimly"
    },
    {
        "kanji": "髦",
        "onyomi": "ボウ, モウ",
        "kunyomi": "たれがみ",
        "english": "bangs"
    },
    {
        "kanji": "髯",
        "onyomi": "ゼン",
        "kunyomi": "ひげ",
        "english": "beard"
    },
    {
        "kanji": "髫",
        "onyomi": "チョウ",
        "kunyomi": "うな-る, うな-い",
        "english": "children's long hair"
    },
    {
        "kanji": "髮",
        "onyomi": "ハツ",
        "kunyomi": "かみ",
        "english": "hair"
    },
    {
        "kanji": "髴",
        "onyomi": "フツ",
        "kunyomi": "",
        "english": "dimly"
    },
    {
        "kanji": "髱",
        "onyomi": "ホウ",
        "kunyomi": "たぼ",
        "english": "topknot"
    },
    {
        "kanji": "髷",
        "onyomi": "キョク",
        "kunyomi": "まげ, わげ",
        "english": "topknot"
    },
    {
        "kanji": "髻",
        "onyomi": "ケイ, キツ",
        "kunyomi": "たぶさ, みずら, もとどり",
        "english": "samurai topknot"
    },
    {
        "kanji": "鬆",
        "onyomi": "ショウ, ソウ, シュ",
        "kunyomi": "",
        "english": "loose"
    },
    {
        "kanji": "鬘",
        "onyomi": "バン, マン",
        "kunyomi": "かつら",
        "english": "wig"
    },
    {
        "kanji": "鬚",
        "onyomi": "シュ, ス",
        "kunyomi": "ひげ",
        "english": "beard"
    },
    {
        "kanji": "鬟",
        "onyomi": "カン",
        "kunyomi": "わげ, みずら",
        "english": "topknot"
    },
    {
        "kanji": "鬢",
        "onyomi": "ビン, ヒン",
        "kunyomi": "",
        "english": "sideburns"
    },
    {
        "kanji": "鬣",
        "onyomi": "リョウ",
        "kunyomi": "たてがみ",
        "english": "mane"
    },
    {
        "kanji": "鬥",
        "onyomi": "",
        "kunyomi": "",
        "english": "broken gate radical (no. 191)"
    },
    {
        "kanji": "鬧",
        "onyomi": "トウ, ドウ",
        "kunyomi": "さわが-しい",
        "english": "quarrel"
    },
    {
        "kanji": "鬨",
        "onyomi": "コウ, グ",
        "kunyomi": "とき",
        "english": "fight"
    },
    {
        "kanji": "鬩",
        "onyomi": "ケキ, カク, ゲキ",
        "kunyomi": "せめ-ぐ",
        "english": "quarrel"
    },
    {
        "kanji": "鬪",
        "onyomi": "トウ",
        "kunyomi": "たたか-う, あらそ-う",
        "english": "fighting"
    },
    {
        "kanji": "鬮",
        "onyomi": "キュウ",
        "kunyomi": "くじ",
        "english": "lottery"
    },
    {
        "kanji": "鬯",
        "onyomi": "チョウ",
        "kunyomi": "かおりぐさ",
        "english": "fragrant herbs"
    },
    {
        "kanji": "鬲",
        "onyomi": "カク, レキ",
        "kunyomi": "かなえ, へだ-てる",
        "english": "tripod"
    },
    {
        "kanji": "魄",
        "onyomi": "ハク, タク",
        "kunyomi": "たましい",
        "english": "soul"
    },
    {
        "kanji": "魃",
        "onyomi": "ハツ, バツ",
        "kunyomi": "",
        "english": "(god of) drought"
    },
    {
        "kanji": "魏",
        "onyomi": "ギ",
        "kunyomi": "たか-い",
        "english": "high"
    },
    {
        "kanji": "魍",
        "onyomi": "モウ, ボウ",
        "kunyomi": "",
        "english": "spirits of mountains and streams"
    },
    {
        "kanji": "魎",
        "onyomi": "リョウ",
        "kunyomi": "こだま",
        "english": "spirits of trees and rocks"
    },
    {
        "kanji": "魑",
        "onyomi": "チ",
        "kunyomi": "すだま",
        "english": "mountain spirits"
    },
    {
        "kanji": "魘",
        "onyomi": "エン, ヨウ",
        "kunyomi": "うな-される",
        "english": "have a nightmare"
    },
    {
        "kanji": "魴",
        "onyomi": "ホウ",
        "kunyomi": "かがみたい, おしきうお, かがみだい",
        "english": "type of sea bream"
    },
    {
        "kanji": "鮓",
        "onyomi": "サ",
        "kunyomi": "すし",
        "english": "sushi"
    },
    {
        "kanji": "鮃",
        "onyomi": "ヒョウ, ヘイ",
        "kunyomi": "ひらめ",
        "english": "flounder"
    },
    {
        "kanji": "鮑",
        "onyomi": "ホ, ホウ",
        "kunyomi": "あわび",
        "english": "abalone"
    },
    {
        "kanji": "鮖",
        "onyomi": "",
        "kunyomi": "かじか",
        "english": "bullhead"
    },
    {
        "kanji": "鮗",
        "onyomi": "",
        "kunyomi": "このしろ",
        "english": "gizzard shad"
    },
    {
        "kanji": "鮟",
        "onyomi": "アン",
        "kunyomi": "",
        "english": "angler-fish"
    },
    {
        "kanji": "鮠",
        "onyomi": "カイ, ゲ, ガイ",
        "kunyomi": "はえ, はや",
        "english": "dace (carp)"
    },
    {
        "kanji": "鮨",
        "onyomi": "シ, キ",
        "kunyomi": "すし",
        "english": "sushi"
    },
    {
        "kanji": "鮴",
        "onyomi": "",
        "kunyomi": "めばる, まて, こち, ごり",
        "english": "bullhead"
    },
    {
        "kanji": "鯀",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "large mythical fish"
    },
    {
        "kanji": "鯊",
        "onyomi": "サ, シャ",
        "kunyomi": "さめ, はぜ",
        "english": "goby (fish)"
    },
    {
        "kanji": "鮹",
        "onyomi": "ショウ, ソウ",
        "kunyomi": "たこ",
        "english": "octopus"
    },
    {
        "kanji": "鯆",
        "onyomi": "フ, ホ",
        "kunyomi": "いるか",
        "english": "type of herring"
    },
    {
        "kanji": "鯏",
        "onyomi": "",
        "kunyomi": "あさり, うぐい",
        "english": "short necked clam"
    },
    {
        "kanji": "鯑",
        "onyomi": "",
        "kunyomi": "かずのこ",
        "english": "yellow fish (herring) eggs (sushi)"
    },
    {
        "kanji": "鯒",
        "onyomi": "",
        "kunyomi": "こち",
        "english": "flathead (fish)"
    },
    {
        "kanji": "鯣",
        "onyomi": "エキ",
        "kunyomi": "するめ",
        "english": "cuttlefish"
    },
    {
        "kanji": "鯢",
        "onyomi": "ゲイ",
        "kunyomi": "さんしょううお",
        "english": "salamander"
    },
    {
        "kanji": "鯤",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "large mythical fish"
    },
    {
        "kanji": "鯔",
        "onyomi": "シ",
        "kunyomi": "ぼら, とど",
        "english": "mullet (fish)"
    },
    {
        "kanji": "鯡",
        "onyomi": "ヒ",
        "kunyomi": "にしん, はららご",
        "english": "herring"
    },
    {
        "kanji": "鰺",
        "onyomi": "ソウ",
        "kunyomi": "あじ",
        "english": "horse mackerel"
    },
    {
        "kanji": "鯲",
        "onyomi": "",
        "kunyomi": "どじょう",
        "english": "loach"
    },
    {
        "kanji": "鯱",
        "onyomi": "",
        "kunyomi": "しゃちほこ, しゃち",
        "english": "fabulous dolphin-like fish"
    },
    {
        "kanji": "鯰",
        "onyomi": "ネン",
        "kunyomi": "なまず",
        "english": "fresh-water catfish"
    },
    {
        "kanji": "鰕",
        "onyomi": "カ",
        "kunyomi": "えび",
        "english": "shrimp"
    },
    {
        "kanji": "鰔",
        "onyomi": "カン",
        "kunyomi": "かれい, たら",
        "english": "flatfish"
    },
    {
        "kanji": "鰉",
        "onyomi": "コウ",
        "kunyomi": "ちょうざめ, ひがい",
        "english": "sturgeon"
    },
    {
        "kanji": "鰓",
        "onyomi": "サイ, シ",
        "kunyomi": "えら",
        "english": "gills"
    },
    {
        "kanji": "鰌",
        "onyomi": "シュ, シュウ",
        "kunyomi": "どじょう",
        "english": "loach (fish)"
    },
    {
        "kanji": "鰆",
        "onyomi": "シュン",
        "kunyomi": "さわら",
        "english": "Spanish mackerel"
    },
    {
        "kanji": "鰈",
        "onyomi": "チョウ, トウ",
        "kunyomi": "かれい",
        "english": "sole"
    },
    {
        "kanji": "鰒",
        "onyomi": "フク",
        "kunyomi": "あわび, ふぐ",
        "english": "abalone"
    },
    {
        "kanji": "鰊",
        "onyomi": "レン",
        "kunyomi": "にしん",
        "english": "herring"
    },
    {
        "kanji": "鰄",
        "onyomi": "イ",
        "kunyomi": "かいらぎ",
        "english": "a type of fish"
    },
    {
        "kanji": "鰮",
        "onyomi": "オン",
        "kunyomi": "いわし",
        "english": "sardine"
    },
    {
        "kanji": "鰛",
        "onyomi": "オン",
        "kunyomi": "いわし",
        "english": "sardine"
    },
    {
        "kanji": "鰥",
        "onyomi": "カン, コン",
        "kunyomi": "やもめ, やもお",
        "english": "widower"
    },
    {
        "kanji": "鰤",
        "onyomi": "シ, ソウ",
        "kunyomi": "ぶり, はまち, かます",
        "english": "yellowtail"
    },
    {
        "kanji": "鰡",
        "onyomi": "リュウ, ル",
        "kunyomi": "ぼら",
        "english": "type of fish"
    },
    {
        "kanji": "鰰",
        "onyomi": "",
        "kunyomi": "はたはた",
        "english": "sandfish"
    },
    {
        "kanji": "鱇",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "anglerfish"
    },
    {
        "kanji": "鰲",
        "onyomi": "ゴウ",
        "kunyomi": "おおがめ",
        "english": "huge sea turtle"
    },
    {
        "kanji": "鱆",
        "onyomi": "ショウ",
        "kunyomi": "たこ",
        "english": "octopus"
    },
    {
        "kanji": "鰾",
        "onyomi": "ヒョウ",
        "kunyomi": "ふえ, うきぶくろ",
        "english": "fish bladder"
    },
    {
        "kanji": "鱚",
        "onyomi": "",
        "kunyomi": "きす",
        "english": "sillaginoid"
    },
    {
        "kanji": "鱠",
        "onyomi": "カイ, ケ",
        "kunyomi": "えそ, なます",
        "english": "lizard fish"
    },
    {
        "kanji": "鱧",
        "onyomi": "レイ",
        "kunyomi": "はも",
        "english": "conger"
    },
    {
        "kanji": "鱶",
        "onyomi": "ショウ, ヨウ",
        "kunyomi": "ふか, ひもの",
        "english": "shark"
    },
    {
        "kanji": "鱸",
        "onyomi": "ロ",
        "kunyomi": "すずき",
        "english": "sea bass"
    },
    {
        "kanji": "鳧",
        "onyomi": "フ",
        "kunyomi": "けり, かも",
        "english": "wild duck"
    },
    {
        "kanji": "鳬",
        "onyomi": "フ",
        "kunyomi": "けり, かも",
        "english": "wild duck"
    },
    {
        "kanji": "鳰",
        "onyomi": "",
        "kunyomi": "にお",
        "english": "grebe"
    },
    {
        "kanji": "鴉",
        "onyomi": "ア",
        "kunyomi": "からす",
        "english": "crow"
    },
    {
        "kanji": "鴈",
        "onyomi": "ガン",
        "kunyomi": "かり, かりがね",
        "english": "wild goose"
    },
    {
        "kanji": "鳫",
        "onyomi": "ガン",
        "kunyomi": "かり, かりがね",
        "english": "wild goose"
    },
    {
        "kanji": "鴃",
        "onyomi": "ケイ, ゲキ, ケキ, ケツ",
        "kunyomi": "もず",
        "english": "shrike"
    },
    {
        "kanji": "鴆",
        "onyomi": "チン",
        "kunyomi": "",
        "english": "a poisonous Chinese bird"
    },
    {
        "kanji": "鴪",
        "onyomi": "イツ",
        "kunyomi": "",
        "english": "flying fast"
    },
    {
        "kanji": "鴦",
        "onyomi": "オウ",
        "kunyomi": "",
        "english": "female mandarin duck"
    },
    {
        "kanji": "鶯",
        "onyomi": "オウ",
        "kunyomi": "うぐいす",
        "english": "nightingale"
    },
    {
        "kanji": "鴣",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "partridge"
    },
    {
        "kanji": "鴟",
        "onyomi": "シ",
        "kunyomi": "とび",
        "english": "kite"
    },
    {
        "kanji": "鵄",
        "onyomi": "シ",
        "kunyomi": "とび",
        "english": "kite"
    },
    {
        "kanji": "鴕",
        "onyomi": "ダ, タ",
        "kunyomi": "",
        "english": "Chinese ostrich"
    },
    {
        "kanji": "鴒",
        "onyomi": "レイ",
        "kunyomi": "",
        "english": "wagtail"
    },
    {
        "kanji": "鵁",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "night heron"
    },
    {
        "kanji": "鴿",
        "onyomi": "コウ",
        "kunyomi": "はと, どばと",
        "english": "dove"
    },
    {
        "kanji": "鴾",
        "onyomi": "ボウ",
        "kunyomi": "とき",
        "english": "crested ibis"
    },
    {
        "kanji": "鵆",
        "onyomi": "",
        "kunyomi": "ちどり",
        "english": "plover"
    },
    {
        "kanji": "鵈",
        "onyomi": "",
        "kunyomi": "とび",
        "english": "kite (bird)"
    },
    {
        "kanji": "鵝",
        "onyomi": "ガ",
        "kunyomi": "",
        "english": "goose"
    },
    {
        "kanji": "鵞",
        "onyomi": "ガ",
        "kunyomi": "",
        "english": "goose"
    },
    {
        "kanji": "鵤",
        "onyomi": "",
        "kunyomi": "いかる, いかるが",
        "english": "grosbeak"
    },
    {
        "kanji": "鵑",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "cuckoo"
    },
    {
        "kanji": "鵐",
        "onyomi": "ブ, ム",
        "kunyomi": "",
        "english": "unmottled quail"
    },
    {
        "kanji": "鵙",
        "onyomi": "ケキ, ゲキ",
        "kunyomi": "もず",
        "english": "shrike"
    },
    {
        "kanji": "鵲",
        "onyomi": "シャク, ジャク",
        "kunyomi": "かささぎ",
        "english": "magpie"
    },
    {
        "kanji": "鶉",
        "onyomi": "ジュン, シュン",
        "kunyomi": "うずら",
        "english": "quail"
    },
    {
        "kanji": "鶇",
        "onyomi": "トウ, ツ",
        "kunyomi": "つぐみ",
        "english": "thrush"
    },
    {
        "kanji": "鶫",
        "onyomi": "トウ, ツ",
        "kunyomi": "つぐみ",
        "english": "thrush"
    },
    {
        "kanji": "鵯",
        "onyomi": "ヒ, ヒツ",
        "kunyomi": "ひよどり",
        "english": "brown eared bulbul"
    },
    {
        "kanji": "鵺",
        "onyomi": "コウ, ヤ",
        "kunyomi": "ぬえ",
        "english": "fabulous night bird"
    },
    {
        "kanji": "鶚",
        "onyomi": "ガク",
        "kunyomi": "みさご",
        "english": "osprey"
    },
    {
        "kanji": "鶤",
        "onyomi": "ウン, コン",
        "kunyomi": "とうまる, しゃも",
        "english": "type of black songbird"
    },
    {
        "kanji": "鶩",
        "onyomi": "ボク, ブ, ム",
        "kunyomi": "あひる",
        "english": "domestic duck"
    },
    {
        "kanji": "鶲",
        "onyomi": "",
        "kunyomi": "ひたき",
        "english": "crested flycatcher"
    },
    {
        "kanji": "鷄",
        "onyomi": "ケイ",
        "kunyomi": "にわとり, とり",
        "english": "chicken"
    },
    {
        "kanji": "鷁",
        "onyomi": "ゲキ",
        "kunyomi": "",
        "english": "waterfowl which flies high but not against the wind"
    },
    {
        "kanji": "鶻",
        "onyomi": "コツ, カツ",
        "kunyomi": "はやぶさ",
        "english": "falcon"
    },
    {
        "kanji": "鶸",
        "onyomi": "ジャク",
        "kunyomi": "ひわ",
        "english": "siskin"
    },
    {
        "kanji": "鶺",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "wagtail"
    },
    {
        "kanji": "鷆",
        "onyomi": "テン, シン",
        "kunyomi": "かすい",
        "english": "yellow-white mottled songbird"
    },
    {
        "kanji": "鷏",
        "onyomi": "テン, シン",
        "kunyomi": "かすい",
        "english": "yellow-white mottled songbird"
    },
    {
        "kanji": "鷂",
        "onyomi": "ヨウ",
        "kunyomi": "はいたか",
        "english": "sparrow hawk"
    },
    {
        "kanji": "鷙",
        "onyomi": "ゴウ, シ, チツ",
        "kunyomi": "",
        "english": "bird of prey"
    },
    {
        "kanji": "鷓",
        "onyomi": "シャ",
        "kunyomi": "",
        "english": "partridge"
    },
    {
        "kanji": "鷸",
        "onyomi": "イツ",
        "kunyomi": "しぎ",
        "english": "kingfisher"
    },
    {
        "kanji": "鷦",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "wren"
    },
    {
        "kanji": "鷭",
        "onyomi": "ハン, バ",
        "kunyomi": "ばん",
        "english": "water hen"
    },
    {
        "kanji": "鷯",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "wren"
    },
    {
        "kanji": "鷽",
        "onyomi": "カク, アク",
        "kunyomi": "うそ",
        "english": "long-tailed bird"
    },
    {
        "kanji": "鸚",
        "onyomi": "イン, オウ, ヨウ",
        "kunyomi": "",
        "english": "parrot"
    },
    {
        "kanji": "鸛",
        "onyomi": "カン",
        "kunyomi": "こうのとり",
        "english": "Japanese stork"
    },
    {
        "kanji": "鸞",
        "onyomi": "ラン",
        "kunyomi": "",
        "english": "fabulous mythical bird"
    },
    {
        "kanji": "鹵",
        "onyomi": "ロ",
        "kunyomi": "しお, しおち, たて",
        "english": "salt"
    },
    {
        "kanji": "鹹",
        "onyomi": "カン, ダイ",
        "kunyomi": "から-い, しおからい, しおけ, せいしゅ",
        "english": "salty"
    },
    {
        "kanji": "鹽",
        "onyomi": "エン",
        "kunyomi": "しお",
        "english": "salt"
    },
    {
        "kanji": "麁",
        "onyomi": "ソ",
        "kunyomi": "あら-い",
        "english": "rough"
    },
    {
        "kanji": "麈",
        "onyomi": "シュ, ス",
        "kunyomi": "おおじか",
        "english": "moose"
    },
    {
        "kanji": "麋",
        "onyomi": "ビ",
        "kunyomi": "なれしか",
        "english": "reindeer"
    },
    {
        "kanji": "麌",
        "onyomi": "グ, ゴ",
        "kunyomi": "おじか",
        "english": "stag"
    },
    {
        "kanji": "麒",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "Chinese unicorn"
    },
    {
        "kanji": "麕",
        "onyomi": "キン, クン",
        "kunyomi": "のろ",
        "english": "roe deer"
    },
    {
        "kanji": "麑",
        "onyomi": "ゲイ, ベイ",
        "kunyomi": "こじか, かのこ",
        "english": "fawn"
    },
    {
        "kanji": "麝",
        "onyomi": "ジャ, シャ",
        "kunyomi": "",
        "english": "musk deer"
    },
    {
        "kanji": "麥",
        "onyomi": "バク",
        "kunyomi": "むぎ",
        "english": "wheat"
    },
    {
        "kanji": "麩",
        "onyomi": "フ",
        "kunyomi": "ふすま",
        "english": "light wheat-gluten bread"
    },
    {
        "kanji": "麸",
        "onyomi": "フ",
        "kunyomi": "ふすま",
        "english": "light wheat-gluten bread"
    },
    {
        "kanji": "麪",
        "onyomi": "メン, ベン",
        "kunyomi": "むぎこ",
        "english": "noodles"
    },
    {
        "kanji": "麭",
        "onyomi": "ホウ",
        "kunyomi": "こなもち",
        "english": "sticky rice ball"
    },
    {
        "kanji": "靡",
        "onyomi": "ヒ, ビ, ミ",
        "kunyomi": "なび-く, ない, わ-ける",
        "english": "flutter"
    },
    {
        "kanji": "黌",
        "onyomi": "コウ, オウ",
        "kunyomi": "",
        "english": "school"
    },
    {
        "kanji": "黎",
        "onyomi": "レイ, リ",
        "kunyomi": "くろ-い",
        "english": "dark"
    },
    {
        "kanji": "黏",
        "onyomi": "ネン",
        "kunyomi": "ねば-り, ねば-る",
        "english": "stick to"
    },
    {
        "kanji": "黐",
        "onyomi": "チ, リ",
        "kunyomi": "もち",
        "english": "bird-lime"
    },
    {
        "kanji": "黔",
        "onyomi": "ケン, キン",
        "kunyomi": "くろ-い",
        "english": "black"
    },
    {
        "kanji": "黜",
        "onyomi": "チュツ",
        "kunyomi": "しりぞ-ける",
        "english": "draw back"
    },
    {
        "kanji": "點",
        "onyomi": "テン",
        "kunyomi": "つ-ける, つ-く, た-てる, さ-す, とぼ-す, とも-す, ぼち",
        "english": "point"
    },
    {
        "kanji": "黝",
        "onyomi": "ユウ",
        "kunyomi": "あおぐろ",
        "english": "black"
    },
    {
        "kanji": "黠",
        "onyomi": "カツ",
        "kunyomi": "さと-い, わるがしこ-い",
        "english": "crafty"
    },
    {
        "kanji": "黥",
        "onyomi": "ケイ, ゲイ",
        "kunyomi": "いれずみ",
        "english": "tatooing"
    },
    {
        "kanji": "黨",
        "onyomi": "トウ",
        "kunyomi": "なかま, むら",
        "english": "party"
    },
    {
        "kanji": "黯",
        "onyomi": "アン",
        "kunyomi": "くら-い",
        "english": "black"
    },
    {
        "kanji": "黴",
        "onyomi": "バイ, ビ, マイ, ミ",
        "kunyomi": "かび, かび-る, か-びる",
        "english": "mold"
    },
    {
        "kanji": "黶",
        "onyomi": "アン, エン",
        "kunyomi": "ほくろ",
        "english": "mole"
    },
    {
        "kanji": "黷",
        "onyomi": "トク",
        "kunyomi": "けが-す, けが-れる",
        "english": "make dirty"
    },
    {
        "kanji": "黹",
        "onyomi": "チ",
        "kunyomi": "ぬう, ぬいとり",
        "english": "sewing radical (no. 204)"
    },
    {
        "kanji": "黻",
        "onyomi": "フツ",
        "kunyomi": "あや",
        "english": "lap robe"
    },
    {
        "kanji": "黼",
        "onyomi": "フ, ホ",
        "kunyomi": "あや",
        "english": "embroidery"
    },
    {
        "kanji": "黽",
        "onyomi": "ボウ, ビン, ベン, ミン, メン",
        "kunyomi": "あおがえる, つと-める",
        "english": "green frog"
    },
    {
        "kanji": "鼇",
        "onyomi": "ゴウ",
        "kunyomi": "",
        "english": "great sea turtle"
    },
    {
        "kanji": "鼈",
        "onyomi": "ベツ, ヘツ",
        "kunyomi": "すっぽん",
        "english": "snapping turtle"
    },
    {
        "kanji": "皷",
        "onyomi": "コ",
        "kunyomi": "つづみ",
        "english": "drum"
    },
    {
        "kanji": "鼕",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "beating of drums"
    },
    {
        "kanji": "鼡",
        "onyomi": "ソ, ショ",
        "kunyomi": "ねずみ, ねず",
        "english": "rat"
    },
    {
        "kanji": "鼬",
        "onyomi": "ユウ, ユ",
        "kunyomi": "いたち",
        "english": "weasel"
    },
    {
        "kanji": "鼾",
        "onyomi": "カン",
        "kunyomi": "いびき",
        "english": "snoring"
    },
    {
        "kanji": "齊",
        "onyomi": "セイ, サイ",
        "kunyomi": "そろ-う, ひと-しい, ひと-しく, あたる, はやい",
        "english": "alike"
    },
    {
        "kanji": "齒",
        "onyomi": "シ",
        "kunyomi": "よわい, は, よわ-い, よわい-する",
        "english": "tooth"
    },
    {
        "kanji": "齔",
        "onyomi": "シン, ソン, トン",
        "kunyomi": "かけば",
        "english": "losing baby teeth"
    },
    {
        "kanji": "齣",
        "onyomi": "シャク, シュツ, セキ",
        "kunyomi": "こま",
        "english": "a paragraph"
    },
    {
        "kanji": "齟",
        "onyomi": "ソ, サ, ショ",
        "kunyomi": "かむ",
        "english": "uneven"
    },
    {
        "kanji": "齠",
        "onyomi": "チョウ",
        "kunyomi": "",
        "english": "baby teeth"
    },
    {
        "kanji": "齡",
        "onyomi": "レイ",
        "kunyomi": "よわ-い, とし",
        "english": "age"
    },
    {
        "kanji": "齦",
        "onyomi": "ギン, コン",
        "kunyomi": "はぐき",
        "english": "gums"
    },
    {
        "kanji": "齧",
        "onyomi": "ゲツ, ケツ",
        "kunyomi": "かじ-る, か-む",
        "english": "gnaw"
    },
    {
        "kanji": "齬",
        "onyomi": "ゴ",
        "kunyomi": "",
        "english": "irregular teeth"
    },
    {
        "kanji": "齪",
        "onyomi": "サク, ソク, セク, シュク, シュウ",
        "kunyomi": "せま-る",
        "english": "grating the teeth"
    },
    {
        "kanji": "齷",
        "onyomi": "アク",
        "kunyomi": "",
        "english": "grating the teeth"
    },
    {
        "kanji": "齲",
        "onyomi": "ク, ウ",
        "kunyomi": "むしば",
        "english": "decayed tooth"
    },
    {
        "kanji": "齶",
        "onyomi": "ガク",
        "kunyomi": "あご, はぐき",
        "english": "jaw"
    },
    {
        "kanji": "龕",
        "onyomi": "カン, ガン",
        "kunyomi": "れい",
        "english": "alcove for an image"
    },
    {
        "kanji": "龜",
        "onyomi": "キ, キュウ, キン",
        "kunyomi": "かめ",
        "english": "turtle"
    },
    {
        "kanji": "龠",
        "onyomi": "ヤク",
        "kunyomi": "ふえ",
        "english": "flute"
    },
    {
        "kanji": "堯",
        "onyomi": "ギョウ",
        "kunyomi": "たか-い",
        "english": "high"
    },
    {
        "kanji": "槇",
        "onyomi": "テン, シン",
        "kunyomi": "まき, こずえ",
        "english": "twig"
    },
    {
        "kanji": "遙",
        "onyomi": "ヨウ",
        "kunyomi": "はる-か",
        "english": "far off"
    },
    {
        "kanji": "瑤",
        "onyomi": "ヨウ",
        "kunyomi": "たま",
        "english": "beautiful (as a jewel)"
    },
    {
        "kanji": "凜",
        "onyomi": "リン",
        "kunyomi": "きびし-い",
        "english": "cold"
    },
    {
        "kanji": "熙",
        "onyomi": "キ",
        "kunyomi": "たのし-む, ひか-る, ひろ-い, よろこ-ぶ, かわ-く, あきらか, ひろ-める, ひろ-まる",
        "english": "bright"
    }
];
