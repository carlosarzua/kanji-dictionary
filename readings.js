const readings = [
    {
        "kanji": "亜",
        "onyomi": "ア",
        "kunyomi": "",
        "english": "sub-, Asia"
    },
    {
        "kanji": "哀",
        "onyomi": "アイ",
        "kunyomi": "あわ-れ, あわ-れむ",
        "english": "pathetic"
    },
    {
        "kanji": "挨",
        "onyomi": "アイ",
        "kunyomi": "",
        "english": "push open"
    },
    {
        "kanji": "愛",
        "onyomi": "アイ",
        "kunyomi": "",
        "english": "love"
    },
    {
        "kanji": "曖",
        "onyomi": "アイ",
        "kunyomi": "",
        "english": "not clear"
    },
    {
        "kanji": "悪",
        "onyomi": "アク, オ",
        "kunyomi": "わる-い",
        "english": "bad"
    },
    {
        "kanji": "握",
        "onyomi": "アク",
        "kunyomi": "にぎ-る",
        "english": "grip"
    },
    {
        "kanji": "圧",
        "onyomi": "アツ",
        "kunyomi": "",
        "english": "pressure"
    },
    {
        "kanji": "扱",
        "onyomi": "",
        "kunyomi": "あつか-う",
        "english": "handle"
    },
    {
        "kanji": "宛",
        "onyomi": "",
        "kunyomi": "あ-てる",
        "english": "allocate"
    },
    {
        "kanji": "嵐",
        "onyomi": "",
        "kunyomi": "あらし",
        "english": "storm"
    },
    {
        "kanji": "安",
        "onyomi": "アン",
        "kunyomi": "やす-い",
        "english": "cheap"
    },
    {
        "kanji": "案",
        "onyomi": "アン",
        "kunyomi": "",
        "english": "plan"
    },
    {
        "kanji": "暗",
        "onyomi": "アン",
        "kunyomi": "くら-い",
        "english": "dark"
    },
    {
        "kanji": "以",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "by means of"
    },
    {
        "kanji": "衣",
        "onyomi": "イ",
        "kunyomi": "ころも",
        "english": "clothes"
    },
    {
        "kanji": "位",
        "onyomi": "イ",
        "kunyomi": "くらい",
        "english": "rank"
    },
    {
        "kanji": "囲",
        "onyomi": "イ",
        "kunyomi": "かこ-む, かこ-う",
        "english": "surround"
    },
    {
        "kanji": "医",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "doctor"
    },
    {
        "kanji": "依",
        "onyomi": "イ,（エ）",
        "kunyomi": "",
        "english": "reliant"
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
        "kunyomi": "",
        "english": "intimidate"
    },
    {
        "kanji": "為",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "do"
    },
    {
        "kanji": "畏",
        "onyomi": "イ",
        "kunyomi": "おそ-れる",
        "english": "fear"
    },
    {
        "kanji": "胃",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "stomach"
    },
    {
        "kanji": "尉",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "military officer"
    },
    {
        "kanji": "異",
        "onyomi": "イ",
        "kunyomi": "こと",
        "english": "uncommon"
    },
    {
        "kanji": "移",
        "onyomi": "イ",
        "kunyomi": "うつ-る, うつ-す",
        "english": "shift"
    },
    {
        "kanji": "萎",
        "onyomi": "イ",
        "kunyomi": "な-える",
        "english": "wither"
    },
    {
        "kanji": "偉",
        "onyomi": "イ",
        "kunyomi": "えら-い",
        "english": "admirable"
    },
    {
        "kanji": "椅",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "chair"
    },
    {
        "kanji": "彙",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "gather"
    },
    {
        "kanji": "意",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "idea"
    },
    {
        "kanji": "違",
        "onyomi": "イ",
        "kunyomi": "ちが-う, ちが-える",
        "english": "differ"
    },
    {
        "kanji": "維",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "fiber"
    },
    {
        "kanji": "慰",
        "onyomi": "イ",
        "kunyomi": "なぐさ-める, なぐさ-む",
        "english": "consolation"
    },
    {
        "kanji": "遺",
        "onyomi": "イ,（ユイ）",
        "kunyomi": "",
        "english": "bequeath"
    },
    {
        "kanji": "緯",
        "onyomi": "イ",
        "kunyomi": "",
        "english": "horizontal"
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
        "kunyomi": "そだ-つ, そだ-てる, はぐく-む",
        "english": "nurture"
    },
    {
        "kanji": "一",
        "onyomi": "イチ, イツ",
        "kunyomi": "ひと, ひと-つ",
        "english": "one"
    },
    {
        "kanji": "壱",
        "onyomi": "イチ",
        "kunyomi": "",
        "english": "one (falsification prevention)"
    },
    {
        "kanji": "逸",
        "onyomi": "イツ",
        "kunyomi": "",
        "english": "deviate"
    },
    {
        "kanji": "茨",
        "onyomi": "",
        "kunyomi": "（いばら）",
        "english": "thorn"
    },
    {
        "kanji": "芋",
        "onyomi": "",
        "kunyomi": "いも",
        "english": "potato"
    },
    {
        "kanji": "引",
        "onyomi": "イン",
        "kunyomi": "ひ-く, ひ-ける",
        "english": "pull"
    },
    {
        "kanji": "印",
        "onyomi": "イン",
        "kunyomi": "しるし",
        "english": "mark"
    },
    {
        "kanji": "因",
        "onyomi": "イン",
        "kunyomi": "よ-る",
        "english": "cause"
    },
    {
        "kanji": "咽",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "throat"
    },
    {
        "kanji": "姻",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "matrimony"
    },
    {
        "kanji": "員",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "member"
    },
    {
        "kanji": "院",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "institution"
    },
    {
        "kanji": "淫",
        "onyomi": "イン",
        "kunyomi": "みだ-ら",
        "english": "lewd, libido"
    },
    {
        "kanji": "陰",
        "onyomi": "イン",
        "kunyomi": "かげ, かげ-る",
        "english": "shade"
    },
    {
        "kanji": "飲",
        "onyomi": "イン",
        "kunyomi": "の-む",
        "english": "drink"
    },
    {
        "kanji": "隠",
        "onyomi": "イン",
        "kunyomi": "かく-す, かく-れる",
        "english": "conceal"
    },
    {
        "kanji": "韻",
        "onyomi": "イン",
        "kunyomi": "",
        "english": "rhyme"
    },
    {
        "kanji": "右",
        "onyomi": "ウ, ユウ",
        "kunyomi": "みぎ",
        "english": "right (direction)"
    },
    {
        "kanji": "宇",
        "onyomi": "ウ",
        "kunyomi": "",
        "english": "eaves"
    },
    {
        "kanji": "羽",
        "onyomi": "ウ",
        "kunyomi": "は, はね",
        "english": "feather"
    },
    {
        "kanji": "雨",
        "onyomi": "ウ",
        "kunyomi": "あめ, （あま）",
        "english": "rain"
    },
    {
        "kanji": "唄",
        "onyomi": "",
        "kunyomi": "（うた）",
        "english": "songs with samisen"
    },
    {
        "kanji": "鬱",
        "onyomi": "ウツ",
        "kunyomi": "",
        "english": "depression"
    },
    {
        "kanji": "畝",
        "onyomi": "",
        "kunyomi": "うね",
        "english": "furrow"
    },
    {
        "kanji": "浦",
        "onyomi": "",
        "kunyomi": "うら",
        "english": "bay"
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
        "kunyomi": "くも",
        "english": "cloud"
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
        "kanji": "英",
        "onyomi": "エイ",
        "kunyomi": "",
        "english": "England"
    },
    {
        "kanji": "映",
        "onyomi": "エイ",
        "kunyomi": "うつ-る, うつ-す, は-える",
        "english": "reflect"
    },
    {
        "kanji": "栄",
        "onyomi": "エイ",
        "kunyomi": "さか-える, は-え, は-える",
        "english": "prosperity"
    },
    {
        "kanji": "営",
        "onyomi": "エイ",
        "kunyomi": "いとな-む",
        "english": "manage"
    },
    {
        "kanji": "詠",
        "onyomi": "エイ",
        "kunyomi": "よ-む",
        "english": "recitation"
    },
    {
        "kanji": "影",
        "onyomi": "エイ",
        "kunyomi": "かげ",
        "english": "shadow"
    },
    {
        "kanji": "鋭",
        "onyomi": "エイ",
        "kunyomi": "するど-い",
        "english": "pointed"
    },
    {
        "kanji": "衛",
        "onyomi": "エイ",
        "kunyomi": "",
        "english": "defense"
    },
    {
        "kanji": "易",
        "onyomi": "エキ, イ",
        "kunyomi": "やさ-しい",
        "english": "easy"
    },
    {
        "kanji": "疫",
        "onyomi": "エキ,（ヤク）",
        "kunyomi": "",
        "english": "epidemic"
    },
    {
        "kanji": "益",
        "onyomi": "エキ,（ヤク）",
        "kunyomi": "",
        "english": "benefit"
    },
    {
        "kanji": "液",
        "onyomi": "エキ",
        "kunyomi": "",
        "english": "fluid"
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
        "kunyomi": "",
        "english": "ecstasy"
    },
    {
        "kanji": "越",
        "onyomi": "エツ",
        "kunyomi": "こ-す, こ-える",
        "english": "cross over"
    },
    {
        "kanji": "謁",
        "onyomi": "エツ",
        "kunyomi": "",
        "english": "audience"
    },
    {
        "kanji": "閲",
        "onyomi": "エツ",
        "kunyomi": "",
        "english": "review"
    },
    {
        "kanji": "円",
        "onyomi": "エン",
        "kunyomi": "まる-い",
        "english": "round, yen"
    },
    {
        "kanji": "延",
        "onyomi": "エン",
        "kunyomi": "の-びる, の-べる, の-ばす",
        "english": "prolong"
    },
    {
        "kanji": "沿",
        "onyomi": "エン",
        "kunyomi": "そ-う",
        "english": "run alongside"
    },
    {
        "kanji": "炎",
        "onyomi": "エン",
        "kunyomi": "ほのお",
        "english": "inflammation"
    },
    {
        "kanji": "怨",
        "onyomi": "エン, オン",
        "kunyomi": "",
        "english": "grudge"
    },
    {
        "kanji": "宴",
        "onyomi": "エン",
        "kunyomi": "",
        "english": "banquet"
    },
    {
        "kanji": "媛",
        "onyomi": "エン",
        "kunyomi": "",
        "english": "princess; beautiful woman"
    },
    {
        "kanji": "援",
        "onyomi": "エン",
        "kunyomi": "",
        "english": "aid"
    },
    {
        "kanji": "園",
        "onyomi": "エン",
        "kunyomi": "その",
        "english": "garden"
    },
    {
        "kanji": "煙",
        "onyomi": "エン",
        "kunyomi": "けむ-る, けむり, けむ-い",
        "english": "smoke"
    },
    {
        "kanji": "猿",
        "onyomi": "エン",
        "kunyomi": "さる",
        "english": "monkey"
    },
    {
        "kanji": "遠",
        "onyomi": "エン,（オン）",
        "kunyomi": "とお-い",
        "english": "far"
    },
    {
        "kanji": "鉛",
        "onyomi": "エン",
        "kunyomi": "なまり",
        "english": "lead"
    },
    {
        "kanji": "塩",
        "onyomi": "エン",
        "kunyomi": "しお",
        "english": "salt"
    },
    {
        "kanji": "演",
        "onyomi": "エン",
        "kunyomi": "",
        "english": "perform"
    },
    {
        "kanji": "縁",
        "onyomi": "エン",
        "kunyomi": "ふち",
        "english": "affinity"
    },
    {
        "kanji": "艶",
        "onyomi": "エン",
        "kunyomi": "つや",
        "english": "glossy"
    },
    {
        "kanji": "汚",
        "onyomi": "オ",
        "kunyomi": "けが-す, けが-れる, けが-らわしい, よご-す, よご-れる, きたな-い",
        "english": "dirty"
    },
    {
        "kanji": "王",
        "onyomi": "オウ",
        "kunyomi": "",
        "english": "king"
    },
    {
        "kanji": "凹",
        "onyomi": "オウ",
        "kunyomi": "",
        "english": "concave"
    },
    {
        "kanji": "央",
        "onyomi": "オウ",
        "kunyomi": "",
        "english": "center"
    },
    {
        "kanji": "応",
        "onyomi": "オウ",
        "kunyomi": "こた-える",
        "english": "respond"
    },
    {
        "kanji": "往",
        "onyomi": "オウ",
        "kunyomi": "",
        "english": "outward journey"
    },
    {
        "kanji": "押",
        "onyomi": "オウ",
        "kunyomi": "お-す, お-さえる",
        "english": "pushed"
    },
    {
        "kanji": "旺",
        "onyomi": "オウ",
        "kunyomi": "",
        "english": "flourishing"
    },
    {
        "kanji": "欧",
        "onyomi": "オウ",
        "kunyomi": "",
        "english": "Europe"
    },
    {
        "kanji": "殴",
        "onyomi": "オウ",
        "kunyomi": "なぐ-る",
        "english": "assault"
    },
    {
        "kanji": "桜",
        "onyomi": "オウ",
        "kunyomi": "さくら",
        "english": "cherry tree"
    },
    {
        "kanji": "翁",
        "onyomi": "オウ",
        "kunyomi": "",
        "english": "venerable old man"
    },
    {
        "kanji": "奥",
        "onyomi": "オウ",
        "kunyomi": "おく",
        "english": "heart"
    },
    {
        "kanji": "横",
        "onyomi": "オウ",
        "kunyomi": "よこ",
        "english": "side"
    },
    {
        "kanji": "岡",
        "onyomi": "",
        "kunyomi": "（おか）",
        "english": "hill"
    },
    {
        "kanji": "屋",
        "onyomi": "オク",
        "kunyomi": "や",
        "english": "roof"
    },
    {
        "kanji": "億",
        "onyomi": "オク",
        "kunyomi": "",
        "english": "hundred million"
    },
    {
        "kanji": "憶",
        "onyomi": "オク",
        "kunyomi": "",
        "english": "recollection"
    },
    {
        "kanji": "臆",
        "onyomi": "オク",
        "kunyomi": "",
        "english": "mind, hesitate"
    },
    {
        "kanji": "虞",
        "onyomi": "",
        "kunyomi": "おそれ",
        "english": "uneasiness"
    },
    {
        "kanji": "乙",
        "onyomi": "オツ",
        "kunyomi": "",
        "english": "the latter"
    },
    {
        "kanji": "俺",
        "onyomi": "",
        "kunyomi": "おれ",
        "english": "I, we, myself"
    },
    {
        "kanji": "卸",
        "onyomi": "",
        "kunyomi": "おろ-す, おろし",
        "english": "wholesale"
    },
    {
        "kanji": "音",
        "onyomi": "オン, イン",
        "kunyomi": "おと, ね",
        "english": "sound"
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
        "kunyomi": "あたた-か, あたた-かい, あたた-まる, あたた-める",
        "english": "warm"
    },
    {
        "kanji": "穏",
        "onyomi": "オン",
        "kunyomi": "おだ-やか",
        "english": "calm"
    },
    {
        "kanji": "下",
        "onyomi": "カ, ゲ",
        "kunyomi": "した, しも, もと, さ-げる, さ-がる, くだ-る, くだ-す, くだ-さる, お-ろす, お-りる",
        "english": "below"
    },
    {
        "kanji": "化",
        "onyomi": "カ, ケ",
        "kunyomi": "ば-ける, ば-かす",
        "english": "change"
    },
    {
        "kanji": "火",
        "onyomi": "カ",
        "kunyomi": "ひ, （ほ）",
        "english": "fire"
    },
    {
        "kanji": "加",
        "onyomi": "カ",
        "kunyomi": "くわ-える, くわ-わる",
        "english": "add"
    },
    {
        "kanji": "可",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "possible"
    },
    {
        "kanji": "仮",
        "onyomi": "カ, （ケ）",
        "kunyomi": "かり",
        "english": "temporary"
    },
    {
        "kanji": "何",
        "onyomi": "カ",
        "kunyomi": "なに, （なん）",
        "english": "what"
    },
    {
        "kanji": "花",
        "onyomi": "カ",
        "kunyomi": "はな",
        "english": "flower"
    },
    {
        "kanji": "佳",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "excellent"
    },
    {
        "kanji": "価",
        "onyomi": "カ",
        "kunyomi": "あたい",
        "english": "value"
    },
    {
        "kanji": "果",
        "onyomi": "カ",
        "kunyomi": "は-たす, は-てる, は-て",
        "english": "fruit"
    },
    {
        "kanji": "河",
        "onyomi": "カ",
        "kunyomi": "かわ",
        "english": "river"
    },
    {
        "kanji": "苛",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "torment"
    },
    {
        "kanji": "科",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "section"
    },
    {
        "kanji": "架",
        "onyomi": "カ",
        "kunyomi": "か-ける, か-かる",
        "english": "rack"
    },
    {
        "kanji": "夏",
        "onyomi": "カ,（ゲ）",
        "kunyomi": "なつ",
        "english": "summer"
    },
    {
        "kanji": "家",
        "onyomi": "カ, ケ",
        "kunyomi": "いえ, や",
        "english": "house"
    },
    {
        "kanji": "荷",
        "onyomi": "カ",
        "kunyomi": "に",
        "english": "luggage"
    },
    {
        "kanji": "華",
        "onyomi": "カ,（ケ）",
        "kunyomi": "はな",
        "english": "splendor"
    },
    {
        "kanji": "菓",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "confectionery"
    },
    {
        "kanji": "貨",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "freight"
    },
    {
        "kanji": "渦",
        "onyomi": "カ",
        "kunyomi": "うず",
        "english": "whirlpool"
    },
    {
        "kanji": "過",
        "onyomi": "カ",
        "kunyomi": "す-ぎる, す-ごす, あやま-つ, あやま-ち",
        "english": "go beyond"
    },
    {
        "kanji": "嫁",
        "onyomi": "カ",
        "kunyomi": "よめ, とつ-ぐ",
        "english": "marry into"
    },
    {
        "kanji": "暇",
        "onyomi": "カ",
        "kunyomi": "ひま",
        "english": "spare time"
    },
    {
        "kanji": "禍",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "calamity"
    },
    {
        "kanji": "靴",
        "onyomi": "カ",
        "kunyomi": "くつ",
        "english": "shoes"
    },
    {
        "kanji": "寡",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "widow"
    },
    {
        "kanji": "歌",
        "onyomi": "カ",
        "kunyomi": "うた, うた-う",
        "english": "song"
    },
    {
        "kanji": "箇",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "counters for things"
    },
    {
        "kanji": "稼",
        "onyomi": "カ",
        "kunyomi": "かせ-ぐ",
        "english": "earnings"
    },
    {
        "kanji": "課",
        "onyomi": "カ",
        "kunyomi": "",
        "english": "section"
    },
    {
        "kanji": "蚊",
        "onyomi": "",
        "kunyomi": "か",
        "english": "mosquito"
    },
    {
        "kanji": "牙",
        "onyomi": "ガ,（ゲ）",
        "kunyomi": "きば",
        "english": "tusk"
    },
    {
        "kanji": "瓦",
        "onyomi": "ガ",
        "kunyomi": "かわら",
        "english": "tile"
    },
    {
        "kanji": "我",
        "onyomi": "ガ",
        "kunyomi": "われ, わ",
        "english": "ego, I, we"
    },
    {
        "kanji": "画",
        "onyomi": "ガ, カク",
        "kunyomi": "",
        "english": "tableau"
    },
    {
        "kanji": "芽",
        "onyomi": "ガ",
        "kunyomi": "め",
        "english": "bud"
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
        "kunyomi": "",
        "english": "gracious"
    },
    {
        "kanji": "餓",
        "onyomi": "ガ",
        "kunyomi": "",
        "english": "starve"
    },
    {
        "kanji": "介",
        "onyomi": "カイ",
        "kunyomi": "",
        "english": "jammed in"
    },
    {
        "kanji": "回",
        "onyomi": "カイ,（エ）",
        "kunyomi": "まわ-る, まわ-す",
        "english": "times"
    },
    {
        "kanji": "灰",
        "onyomi": "カイ",
        "kunyomi": "はい",
        "english": "ashes"
    },
    {
        "kanji": "会",
        "onyomi": "カイ, エ",
        "kunyomi": "あ-う",
        "english": "association"
    },
    {
        "kanji": "快",
        "onyomi": "カイ",
        "kunyomi": "こころよ-い",
        "english": "cheerful"
    },
    {
        "kanji": "戒",
        "onyomi": "カイ",
        "kunyomi": "いまし-める",
        "english": "commandment"
    },
    {
        "kanji": "改",
        "onyomi": "カイ",
        "kunyomi": "あらた-める, あらた-まる",
        "english": "reformation"
    },
    {
        "kanji": "怪",
        "onyomi": "カイ",
        "kunyomi": "あや-しい, あや-しむ",
        "english": "suspicious"
    },
    {
        "kanji": "拐",
        "onyomi": "カイ",
        "kunyomi": "",
        "english": "kidnap"
    },
    {
        "kanji": "悔",
        "onyomi": "カイ",
        "kunyomi": "く-いる, く-やむ, くや-しい",
        "english": "repent"
    },
    {
        "kanji": "海",
        "onyomi": "カイ",
        "kunyomi": "うみ",
        "english": "sea"
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
        "kunyomi": "みな",
        "english": "all"
    },
    {
        "kanji": "械",
        "onyomi": "カイ",
        "kunyomi": "",
        "english": "contraption"
    },
    {
        "kanji": "絵",
        "onyomi": "カイ, エ",
        "kunyomi": "",
        "english": "picture"
    },
    {
        "kanji": "開",
        "onyomi": "カイ",
        "kunyomi": "ひら-く, ひら-ける, あ-く, あ-ける",
        "english": "open"
    },
    {
        "kanji": "階",
        "onyomi": "カイ",
        "kunyomi": "",
        "english": "floor of a building"
    },
    {
        "kanji": "塊",
        "onyomi": "カイ",
        "kunyomi": "かたまり",
        "english": "clod"
    },
    {
        "kanji": "楷",
        "onyomi": "カイ",
        "kunyomi": "",
        "english": "square character style"
    },
    {
        "kanji": "解",
        "onyomi": "カイ, ゲ",
        "kunyomi": "と-く, と-かす, と-ける",
        "english": "untie"
    },
    {
        "kanji": "潰",
        "onyomi": "カイ",
        "kunyomi": "つぶ-す, つぶ-れる",
        "english": "crush"
    },
    {
        "kanji": "壊",
        "onyomi": "カイ",
        "kunyomi": "こわ-す, こわ-れる",
        "english": "demolition"
    },
    {
        "kanji": "懐",
        "onyomi": "カイ",
        "kunyomi": "ふところ, なつ-かしい, なつ-かしむ, なつ-く, なつ-ける",
        "english": "pocket"
    },
    {
        "kanji": "諧",
        "onyomi": "カイ",
        "kunyomi": "",
        "english": "harmony"
    },
    {
        "kanji": "貝",
        "onyomi": "",
        "kunyomi": "かい",
        "english": "shellfish"
    },
    {
        "kanji": "外",
        "onyomi": "ガイ, ゲ",
        "kunyomi": "そと, ほか, はず-す, はず-れる",
        "english": "outside"
    },
    {
        "kanji": "劾",
        "onyomi": "ガイ",
        "kunyomi": "",
        "english": "censure"
    },
    {
        "kanji": "害",
        "onyomi": "ガイ",
        "kunyomi": "",
        "english": "harm"
    },
    {
        "kanji": "崖",
        "onyomi": "ガイ",
        "kunyomi": "がけ",
        "english": "cliff"
    },
    {
        "kanji": "涯",
        "onyomi": "ガイ",
        "kunyomi": "",
        "english": "horizon"
    },
    {
        "kanji": "街",
        "onyomi": "ガイ,（カイ）",
        "kunyomi": "まち",
        "english": "street"
    },
    {
        "kanji": "慨",
        "onyomi": "ガイ",
        "kunyomi": "",
        "english": "rue"
    },
    {
        "kanji": "蓋",
        "onyomi": "ガイ",
        "kunyomi": "ふた",
        "english": "cover"
    },
    {
        "kanji": "該",
        "onyomi": "ガイ",
        "kunyomi": "",
        "english": "above-stated"
    },
    {
        "kanji": "概",
        "onyomi": "ガイ",
        "kunyomi": "",
        "english": "outline"
    },
    {
        "kanji": "骸",
        "onyomi": "ガイ",
        "kunyomi": "",
        "english": "bone, dead body"
    },
    {
        "kanji": "垣",
        "onyomi": "",
        "kunyomi": "かき",
        "english": "hedge"
    },
    {
        "kanji": "柿",
        "onyomi": "",
        "kunyomi": "かき",
        "english": "persimmon"
    },
    {
        "kanji": "各",
        "onyomi": "カク",
        "kunyomi": "おのおの",
        "english": "each"
    },
    {
        "kanji": "角",
        "onyomi": "カク",
        "kunyomi": "かど, つの",
        "english": "angle"
    },
    {
        "kanji": "拡",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "broaden"
    },
    {
        "kanji": "革",
        "onyomi": "カク",
        "kunyomi": "かわ",
        "english": "leather"
    },
    {
        "kanji": "格",
        "onyomi": "カク,（コウ）",
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
        "onyomi": "カク",
        "kunyomi": "から",
        "english": "husk"
    },
    {
        "kanji": "郭",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "enclosure"
    },
    {
        "kanji": "覚",
        "onyomi": "カク",
        "kunyomi": "おぼ-える, さ-ます, さ-める",
        "english": "memorize"
    },
    {
        "kanji": "較",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "contrast"
    },
    {
        "kanji": "隔",
        "onyomi": "カク",
        "kunyomi": "へだ-てる, へだ-たる",
        "english": "isolate"
    },
    {
        "kanji": "閣",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "tall"
    },
    {
        "kanji": "確",
        "onyomi": "カク",
        "kunyomi": "たし-か, たし-かめる",
        "english": "certain"
    },
    {
        "kanji": "獲",
        "onyomi": "カク",
        "kunyomi": "え-る",
        "english": "seize"
    },
    {
        "kanji": "嚇",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "menacing"
    },
    {
        "kanji": "穫",
        "onyomi": "カク",
        "kunyomi": "",
        "english": "harvest"
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
        "onyomi": "ガク, ラク",
        "kunyomi": "たの-しい, たの-しむ",
        "english": "pleasure"
    },
    {
        "kanji": "額",
        "onyomi": "ガク",
        "kunyomi": "ひたい",
        "english": "amount"
    },
    {
        "kanji": "顎",
        "onyomi": "ガク",
        "kunyomi": "あご",
        "english": "jaw"
    },
    {
        "kanji": "掛",
        "onyomi": "",
        "kunyomi": "か-ける, か-かる, かかり",
        "english": "hang"
    },
    {
        "kanji": "潟",
        "onyomi": "",
        "kunyomi": "かた",
        "english": "lagoon"
    },
    {
        "kanji": "括",
        "onyomi": "カツ",
        "kunyomi": "",
        "english": "fasten"
    },
    {
        "kanji": "活",
        "onyomi": "カツ",
        "kunyomi": "",
        "english": "active"
    },
    {
        "kanji": "喝",
        "onyomi": "カツ",
        "kunyomi": "",
        "english": "hoarse"
    },
    {
        "kanji": "渇",
        "onyomi": "カツ",
        "kunyomi": "かわ-く",
        "english": "thirst"
    },
    {
        "kanji": "割",
        "onyomi": "カツ",
        "kunyomi": "わ-る, わり, わ-れる, さ-く",
        "english": "divide"
    },
    {
        "kanji": "葛",
        "onyomi": "カツ",
        "kunyomi": "くず",
        "english": "vine"
    },
    {
        "kanji": "滑",
        "onyomi": "カツ, コツ",
        "kunyomi": "すべ-る, なめ-らか",
        "english": "slippery"
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
        "kunyomi": "",
        "english": "control"
    },
    {
        "kanji": "且",
        "onyomi": "",
        "kunyomi": "か-つ",
        "english": "moreover"
    },
    {
        "kanji": "株",
        "onyomi": "",
        "kunyomi": "かぶ",
        "english": "stocks"
    },
    {
        "kanji": "釜",
        "onyomi": "",
        "kunyomi": "かま",
        "english": "kettle"
    },
    {
        "kanji": "鎌",
        "onyomi": "",
        "kunyomi": "かま",
        "english": "sickle"
    },
    {
        "kanji": "刈",
        "onyomi": "",
        "kunyomi": "か-る",
        "english": "reap"
    },
    {
        "kanji": "干",
        "onyomi": "カン",
        "kunyomi": "ほ-す, ひ-る",
        "english": "dry"
    },
    {
        "kanji": "刊",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "publish"
    },
    {
        "kanji": "甘",
        "onyomi": "カン",
        "kunyomi": "あま-い, あま-える, あま-やかす",
        "english": "sweet"
    },
    {
        "kanji": "汗",
        "onyomi": "カン",
        "kunyomi": "あせ",
        "english": "sweat"
    },
    {
        "kanji": "缶",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "tin can"
    },
    {
        "kanji": "完",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "perfect"
    },
    {
        "kanji": "肝",
        "onyomi": "カン",
        "kunyomi": "きも",
        "english": "liver"
    },
    {
        "kanji": "官",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "government official"
    },
    {
        "kanji": "冠",
        "onyomi": "カン",
        "kunyomi": "かんむり",
        "english": "crown"
    },
    {
        "kanji": "巻",
        "onyomi": "カン",
        "kunyomi": "ま-く, まき",
        "english": "scroll"
    },
    {
        "kanji": "看",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "watch over"
    },
    {
        "kanji": "陥",
        "onyomi": "カン",
        "kunyomi": "おちい-る, おとしい-れる",
        "english": "collapse"
    },
    {
        "kanji": "乾",
        "onyomi": "カン",
        "kunyomi": "かわ-く, かわ-かす",
        "english": "dry"
    },
    {
        "kanji": "勘",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "intuition"
    },
    {
        "kanji": "患",
        "onyomi": "カン",
        "kunyomi": "わずら-う",
        "english": "afflicted"
    },
    {
        "kanji": "貫",
        "onyomi": "カン",
        "kunyomi": "つらぬ-く",
        "english": "pierce"
    },
    {
        "kanji": "寒",
        "onyomi": "カン",
        "kunyomi": "さむ-い",
        "english": "cold"
    },
    {
        "kanji": "喚",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "yell"
    },
    {
        "kanji": "堪",
        "onyomi": "カン",
        "kunyomi": "た-える",
        "english": "withstand"
    },
    {
        "kanji": "換",
        "onyomi": "カン",
        "kunyomi": "か-える, か-わる",
        "english": "interchange"
    },
    {
        "kanji": "敢",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "daring"
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
        "kanji": "間",
        "onyomi": "カン, ケン",
        "kunyomi": "あいだ, ま",
        "english": "interval"
    },
    {
        "kanji": "閑",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "leisure"
    },
    {
        "kanji": "勧",
        "onyomi": "カン",
        "kunyomi": "すす-める",
        "english": "persuade"
    },
    {
        "kanji": "寛",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "tolerant"
    },
    {
        "kanji": "幹",
        "onyomi": "カン",
        "kunyomi": "みき",
        "english": "tree-trunk"
    },
    {
        "kanji": "感",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "feeling"
    },
    {
        "kanji": "漢",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "China"
    },
    {
        "kanji": "慣",
        "onyomi": "カン",
        "kunyomi": "な-れる, な-らす",
        "english": "accustomed"
    },
    {
        "kanji": "管",
        "onyomi": "カン",
        "kunyomi": "くだ",
        "english": "pipe"
    },
    {
        "kanji": "関",
        "onyomi": "カン",
        "kunyomi": "せき, かか-わる",
        "english": "related"
    },
    {
        "kanji": "歓",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "delight"
    },
    {
        "kanji": "監",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "oversee"
    },
    {
        "kanji": "緩",
        "onyomi": "カン",
        "kunyomi": "ゆる-い, ゆる-やか, ゆる-む, ゆる-める",
        "english": "slacken"
    },
    {
        "kanji": "憾",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "remorse"
    },
    {
        "kanji": "還",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "send back"
    },
    {
        "kanji": "館",
        "onyomi": "カン",
        "kunyomi": "やかた",
        "english": "public building"
    },
    {
        "kanji": "環",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "ring"
    },
    {
        "kanji": "簡",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "simplicity"
    },
    {
        "kanji": "観",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "observe"
    },
    {
        "kanji": "韓",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "Korea"
    },
    {
        "kanji": "艦",
        "onyomi": "カン",
        "kunyomi": "",
        "english": "warship"
    },
    {
        "kanji": "鑑",
        "onyomi": "カン",
        "kunyomi": "かんが-みる",
        "english": "specimen"
    },
    {
        "kanji": "丸",
        "onyomi": "ガン",
        "kunyomi": "まる, まる-い, まる-める",
        "english": "circle"
    },
    {
        "kanji": "含",
        "onyomi": "ガン",
        "kunyomi": "ふく-む, ふく-める",
        "english": "include"
    },
    {
        "kanji": "岸",
        "onyomi": "ガン",
        "kunyomi": "きし",
        "english": "beach"
    },
    {
        "kanji": "岩",
        "onyomi": "ガン",
        "kunyomi": "いわ",
        "english": "boulder"
    },
    {
        "kanji": "玩",
        "onyomi": "ガン",
        "kunyomi": "",
        "english": "trifle with"
    },
    {
        "kanji": "眼",
        "onyomi": "ガン,（ゲン）",
        "kunyomi": "まなこ",
        "english": "eyeball"
    },
    {
        "kanji": "頑",
        "onyomi": "ガン",
        "kunyomi": "",
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
        "kunyomi": "ねが-う",
        "english": "request"
    },
    {
        "kanji": "企",
        "onyomi": "キ",
        "kunyomi": "くわだ-てる",
        "english": "plan"
    },
    {
        "kanji": "伎",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "deed"
    },
    {
        "kanji": "危",
        "onyomi": "キ",
        "kunyomi": "あぶ-ない, あや-うい, あや-ぶむ",
        "english": "dangerous"
    },
    {
        "kanji": "机",
        "onyomi": "キ",
        "kunyomi": "つくえ",
        "english": "desk"
    },
    {
        "kanji": "気",
        "onyomi": "キ, ケ",
        "kunyomi": "",
        "english": "feeling"
    },
    {
        "kanji": "岐",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "branch off"
    },
    {
        "kanji": "希",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "hope"
    },
    {
        "kanji": "忌",
        "onyomi": "キ",
        "kunyomi": "い-む, い-まわしい",
        "english": "mourning"
    },
    {
        "kanji": "汽",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "steam"
    },
    {
        "kanji": "奇",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "strange"
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
        "kanji": "紀",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "chronicle"
    },
    {
        "kanji": "軌",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "rut"
    },
    {
        "kanji": "既",
        "onyomi": "キ",
        "kunyomi": "すで-に",
        "english": "previously"
    },
    {
        "kanji": "記",
        "onyomi": "キ",
        "kunyomi": "しる-す",
        "english": "write down"
    },
    {
        "kanji": "起",
        "onyomi": "キ",
        "kunyomi": "お-きる, お-こる, お-こす",
        "english": "wake up"
    },
    {
        "kanji": "飢",
        "onyomi": "キ",
        "kunyomi": "う-える",
        "english": "hungry"
    },
    {
        "kanji": "鬼",
        "onyomi": "キ",
        "kunyomi": "おに",
        "english": "ghost"
    },
    {
        "kanji": "帰",
        "onyomi": "キ",
        "kunyomi": "かえ-る, かえ-す",
        "english": "return"
    },
    {
        "kanji": "基",
        "onyomi": "キ",
        "kunyomi": "もと, もとい",
        "english": "foundation"
    },
    {
        "kanji": "寄",
        "onyomi": "キ",
        "kunyomi": "よ-る, よ-せる",
        "english": "approach"
    },
    {
        "kanji": "規",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "rule"
    },
    {
        "kanji": "亀",
        "onyomi": "キ",
        "kunyomi": "かめ",
        "english": "turtle"
    },
    {
        "kanji": "喜",
        "onyomi": "キ",
        "kunyomi": "よろこ-ぶ",
        "english": "rejoice"
    },
    {
        "kanji": "幾",
        "onyomi": "キ",
        "kunyomi": "いく",
        "english": "how many"
    },
    {
        "kanji": "揮",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "brandish"
    },
    {
        "kanji": "期",
        "onyomi": "キ,（ゴ）",
        "kunyomi": "",
        "english": "period of time"
    },
    {
        "kanji": "棋",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "chess piece"
    },
    {
        "kanji": "貴",
        "onyomi": "キ",
        "kunyomi": "たっと-い, とうと-い, たっと-ぶ, とうと-ぶ",
        "english": "precious"
    },
    {
        "kanji": "棄",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "abandon"
    },
    {
        "kanji": "毀",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "destroy"
    },
    {
        "kanji": "旗",
        "onyomi": "キ",
        "kunyomi": "はた",
        "english": "national flag"
    },
    {
        "kanji": "器",
        "onyomi": "キ",
        "kunyomi": "うつわ",
        "english": "container"
    },
    {
        "kanji": "畿",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "capital"
    },
    {
        "kanji": "輝",
        "onyomi": "キ",
        "kunyomi": "かがや-く",
        "english": "radiance"
    },
    {
        "kanji": "機",
        "onyomi": "キ",
        "kunyomi": "はた",
        "english": "machine"
    },
    {
        "kanji": "騎",
        "onyomi": "キ",
        "kunyomi": "",
        "english": "equestrian"
    },
    {
        "kanji": "技",
        "onyomi": "ギ",
        "kunyomi": "わざ",
        "english": "skill"
    },
    {
        "kanji": "宜",
        "onyomi": "ギ",
        "kunyomi": "",
        "english": "best regards"
    },
    {
        "kanji": "偽",
        "onyomi": "ギ",
        "kunyomi": "いつわ-る, にせ",
        "english": "falsehood"
    },
    {
        "kanji": "欺",
        "onyomi": "ギ",
        "kunyomi": "あざむ-く",
        "english": "deceit"
    },
    {
        "kanji": "義",
        "onyomi": "ギ",
        "kunyomi": "",
        "english": "righteousness"
    },
    {
        "kanji": "疑",
        "onyomi": "ギ",
        "kunyomi": "うたが-う",
        "english": "doubt"
    },
    {
        "kanji": "儀",
        "onyomi": "ギ",
        "kunyomi": "",
        "english": "ceremony"
    },
    {
        "kanji": "戯",
        "onyomi": "ギ",
        "kunyomi": "たわむ-れる",
        "english": "frolic"
    },
    {
        "kanji": "擬",
        "onyomi": "ギ",
        "kunyomi": "",
        "english": "mimic"
    },
    {
        "kanji": "犠",
        "onyomi": "ギ",
        "kunyomi": "",
        "english": "sacrifice"
    },
    {
        "kanji": "議",
        "onyomi": "ギ",
        "kunyomi": "",
        "english": "deliberation"
    },
    {
        "kanji": "菊",
        "onyomi": "キク",
        "kunyomi": "",
        "english": "chrysanthemum"
    },
    {
        "kanji": "吉",
        "onyomi": "キチ, キツ",
        "kunyomi": "",
        "english": "good luck"
    },
    {
        "kanji": "喫",
        "onyomi": "キツ",
        "kunyomi": "",
        "english": "consume"
    },
    {
        "kanji": "詰",
        "onyomi": "キツ",
        "kunyomi": "つ-める, つ-まる, つ-む",
        "english": "packed"
    },
    {
        "kanji": "却",
        "onyomi": "キャク",
        "kunyomi": "",
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
        "onyomi": "キャク,（キャ）",
        "kunyomi": "あし",
        "english": "leg"
    },
    {
        "kanji": "逆",
        "onyomi": "ギャク",
        "kunyomi": "さか, さか-らう",
        "english": "inverted"
    },
    {
        "kanji": "虐",
        "onyomi": "ギャク",
        "kunyomi": "しいた-げる",
        "english": "tyrannize"
    },
    {
        "kanji": "九",
        "onyomi": "キュウ, ク",
        "kunyomi": "ここの, ここの-つ",
        "english": "nine"
    },
    {
        "kanji": "久",
        "onyomi": "キュウ,（ク）",
        "kunyomi": "ひさ-しい",
        "english": "long time"
    },
    {
        "kanji": "及",
        "onyomi": "キュウ",
        "kunyomi": "およ-ぶ, およ-び, およ-ぼす",
        "english": "reach out"
    },
    {
        "kanji": "弓",
        "onyomi": "キュウ",
        "kunyomi": "ゆみ",
        "english": "bow (archery, violin)"
    },
    {
        "kanji": "丘",
        "onyomi": "キュウ",
        "kunyomi": "おか",
        "english": "hill"
    },
    {
        "kanji": "旧",
        "onyomi": "キュウ",
        "kunyomi": "",
        "english": "old times"
    },
    {
        "kanji": "休",
        "onyomi": "キュウ",
        "kunyomi": "やす-む, やす-まる, やす-める",
        "english": "rest"
    },
    {
        "kanji": "吸",
        "onyomi": "キュウ",
        "kunyomi": "す-う",
        "english": "suck"
    },
    {
        "kanji": "朽",
        "onyomi": "キュウ",
        "kunyomi": "く-ちる",
        "english": "decay"
    },
    {
        "kanji": "臼",
        "onyomi": "キュウ",
        "kunyomi": "うす",
        "english": "mortar"
    },
    {
        "kanji": "求",
        "onyomi": "キュウ",
        "kunyomi": "もと-める",
        "english": "request"
    },
    {
        "kanji": "究",
        "onyomi": "キュウ",
        "kunyomi": "きわ-める",
        "english": "research"
    },
    {
        "kanji": "泣",
        "onyomi": "キュウ",
        "kunyomi": "な-く",
        "english": "cry"
    },
    {
        "kanji": "急",
        "onyomi": "キュウ",
        "kunyomi": "いそ-ぐ",
        "english": "hurry"
    },
    {
        "kanji": "級",
        "onyomi": "キュウ",
        "kunyomi": "",
        "english": "rank"
    },
    {
        "kanji": "糾",
        "onyomi": "キュウ",
        "kunyomi": "",
        "english": "twist"
    },
    {
        "kanji": "宮",
        "onyomi": "キュウ, グウ,（ク）",
        "kunyomi": "みや",
        "english": "Shinto shrine"
    },
    {
        "kanji": "救",
        "onyomi": "キュウ",
        "kunyomi": "すく-う",
        "english": "salvation"
    },
    {
        "kanji": "球",
        "onyomi": "キュウ",
        "kunyomi": "たま",
        "english": "sphere"
    },
    {
        "kanji": "給",
        "onyomi": "キュウ",
        "kunyomi": "",
        "english": "salary"
    },
    {
        "kanji": "嗅",
        "onyomi": "キュウ",
        "kunyomi": "か-ぐ",
        "english": "smell"
    },
    {
        "kanji": "窮",
        "onyomi": "キュウ",
        "kunyomi": "きわ-める, きわ-まる",
        "english": "hard up"
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
        "kunyomi": "さ-る",
        "english": "leave"
    },
    {
        "kanji": "巨",
        "onyomi": "キョ",
        "kunyomi": "",
        "english": "gigantic"
    },
    {
        "kanji": "居",
        "onyomi": "キョ",
        "kunyomi": "い-る",
        "english": "reside"
    },
    {
        "kanji": "拒",
        "onyomi": "キョ",
        "kunyomi": "こば-む",
        "english": "repel"
    },
    {
        "kanji": "拠",
        "onyomi": "キョ, コ",
        "kunyomi": "",
        "english": "foothold"
    },
    {
        "kanji": "挙",
        "onyomi": "キョ",
        "kunyomi": "あ-げる, あ-がる",
        "english": "raise"
    },
    {
        "kanji": "虚",
        "onyomi": "キョ,（コ）",
        "kunyomi": "",
        "english": "void"
    },
    {
        "kanji": "許",
        "onyomi": "キョ",
        "kunyomi": "ゆる-す",
        "english": "permit"
    },
    {
        "kanji": "距",
        "onyomi": "キョ",
        "kunyomi": "",
        "english": "long-distance"
    },
    {
        "kanji": "魚",
        "onyomi": "ギョ",
        "kunyomi": "うお, さかな",
        "english": "fish"
    },
    {
        "kanji": "御",
        "onyomi": "ギョ, ゴ",
        "kunyomi": "おん",
        "english": "honorable"
    },
    {
        "kanji": "漁",
        "onyomi": "ギョ, リョウ",
        "kunyomi": "",
        "english": "fishing"
    },
    {
        "kanji": "凶",
        "onyomi": "キョウ",
        "kunyomi": "",
        "english": "villain"
    },
    {
        "kanji": "共",
        "onyomi": "キョウ",
        "kunyomi": "とも",
        "english": "together"
    },
    {
        "kanji": "叫",
        "onyomi": "キョウ",
        "kunyomi": "さけ-ぶ",
        "english": "shout"
    },
    {
        "kanji": "狂",
        "onyomi": "キョウ",
        "kunyomi": "くる-う, くる-おしい",
        "english": "lunatic"
    },
    {
        "kanji": "京",
        "onyomi": "キョウ, ケイ",
        "kunyomi": "",
        "english": "capital"
    },
    {
        "kanji": "享",
        "onyomi": "キョウ",
        "kunyomi": "",
        "english": "receive"
    },
    {
        "kanji": "供",
        "onyomi": "キョウ,（ク）",
        "kunyomi": "そな-える, とも",
        "english": "offer"
    },
    {
        "kanji": "協",
        "onyomi": "キョウ",
        "kunyomi": "",
        "english": "cooperation"
    },
    {
        "kanji": "況",
        "onyomi": "キョウ",
        "kunyomi": "",
        "english": "condition"
    },
    {
        "kanji": "峡",
        "onyomi": "キョウ",
        "kunyomi": "",
        "english": "gorge"
    },
    {
        "kanji": "挟",
        "onyomi": "キョウ",
        "kunyomi": "はさ-む, はさ-まる",
        "english": "pinch"
    },
    {
        "kanji": "狭",
        "onyomi": "キョウ",
        "kunyomi": "せま-い, せば-める, せば-まる",
        "english": "cramped"
    },
    {
        "kanji": "恐",
        "onyomi": "キョウ",
        "kunyomi": "おそ-れる, おそ-ろしい",
        "english": "fear"
    },
    {
        "kanji": "恭",
        "onyomi": "キョウ",
        "kunyomi": "うやうや-しい",
        "english": "respect"
    },
    {
        "kanji": "胸",
        "onyomi": "キョウ",
        "kunyomi": "むね, （むな）",
        "english": "bosom"
    },
    {
        "kanji": "脅",
        "onyomi": "キョウ",
        "kunyomi": "おびや-かす, おど-す, おど-かす",
        "english": "threaten"
    },
    {
        "kanji": "強",
        "onyomi": "キョウ, ゴウ",
        "kunyomi": "つよ-い, つよ-まる, つよ-める, し-いる",
        "english": "strong"
    },
    {
        "kanji": "教",
        "onyomi": "キョウ",
        "kunyomi": "おし-える, おそ-わる",
        "english": "teach"
    },
    {
        "kanji": "郷",
        "onyomi": "キョウ, ゴウ",
        "kunyomi": "",
        "english": "home town"
    },
    {
        "kanji": "境",
        "onyomi": "キョウ,（ケイ）",
        "kunyomi": "さかい",
        "english": "boundary"
    },
    {
        "kanji": "橋",
        "onyomi": "キョウ",
        "kunyomi": "はし",
        "english": "bridge"
    },
    {
        "kanji": "矯",
        "onyomi": "キョウ",
        "kunyomi": "た-める",
        "english": "rectify"
    },
    {
        "kanji": "鏡",
        "onyomi": "キョウ",
        "kunyomi": "かがみ",
        "english": "mirror"
    },
    {
        "kanji": "競",
        "onyomi": "キョウ, ケイ",
        "kunyomi": "きそ-う, せ-る",
        "english": "compete"
    },
    {
        "kanji": "響",
        "onyomi": "キョウ",
        "kunyomi": "ひび-く",
        "english": "echo"
    },
    {
        "kanji": "驚",
        "onyomi": "キョウ",
        "kunyomi": "おどろ-く, おどろ-かす",
        "english": "wonder"
    },
    {
        "kanji": "仰",
        "onyomi": "ギョウ,（コウ）",
        "kunyomi": "あお-ぐ, おお-せ",
        "english": "face-up"
    },
    {
        "kanji": "暁",
        "onyomi": "ギョウ",
        "kunyomi": "あかつき",
        "english": "daybreak"
    },
    {
        "kanji": "業",
        "onyomi": "ギョウ, ゴウ",
        "kunyomi": "わざ",
        "english": "business"
    },
    {
        "kanji": "凝",
        "onyomi": "ギョウ",
        "kunyomi": "こ-る, こ-らす",
        "english": "congeal"
    },
    {
        "kanji": "曲",
        "onyomi": "キョク",
        "kunyomi": "ま-がる, ま-げる",
        "english": "musical composition"
    },
    {
        "kanji": "局",
        "onyomi": "キョク",
        "kunyomi": "",
        "english": "office"
    },
    {
        "kanji": "極",
        "onyomi": "キョク, ゴク",
        "kunyomi": "きわ-める, きわ-まる, きわ-み",
        "english": "poles"
    },
    {
        "kanji": "玉",
        "onyomi": "ギョク",
        "kunyomi": "たま",
        "english": "ball"
    },
    {
        "kanji": "巾",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "towel"
    },
    {
        "kanji": "斤",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "axe"
    },
    {
        "kanji": "均",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "level"
    },
    {
        "kanji": "近",
        "onyomi": "キン",
        "kunyomi": "ちか-い",
        "english": "near"
    },
    {
        "kanji": "金",
        "onyomi": "キン, コン",
        "kunyomi": "かね, （かな）",
        "english": "gold"
    },
    {
        "kanji": "菌",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "germ"
    },
    {
        "kanji": "勤",
        "onyomi": "キン,（ゴン）",
        "kunyomi": "つと-める, つと-まる",
        "english": "diligence"
    },
    {
        "kanji": "琴",
        "onyomi": "キン",
        "kunyomi": "こと",
        "english": "harp"
    },
    {
        "kanji": "筋",
        "onyomi": "キン",
        "kunyomi": "すじ",
        "english": "muscle"
    },
    {
        "kanji": "僅",
        "onyomi": "キン",
        "kunyomi": "わず-か",
        "english": "little"
    },
    {
        "kanji": "禁",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "prohibition"
    },
    {
        "kanji": "緊",
        "onyomi": "キン",
        "kunyomi": "",
        "english": "tense"
    },
    {
        "kanji": "錦",
        "onyomi": "キン",
        "kunyomi": "にしき",
        "english": "brocade"
    },
    {
        "kanji": "謹",
        "onyomi": "キン",
        "kunyomi": "つつし-む",
        "english": "discreet"
    },
    {
        "kanji": "襟",
        "onyomi": "キン",
        "kunyomi": "えり",
        "english": "collar"
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
        "kunyomi": "",
        "english": "silver"
    },
    {
        "kanji": "区",
        "onyomi": "ク",
        "kunyomi": "",
        "english": "ward"
    },
    {
        "kanji": "句",
        "onyomi": "ク",
        "kunyomi": "",
        "english": "phrase"
    },
    {
        "kanji": "苦",
        "onyomi": "ク",
        "kunyomi": "くる-しい, くる-しむ, くる-しめる, にが-い, にが-る",
        "english": "suffer"
    },
    {
        "kanji": "駆",
        "onyomi": "ク",
        "kunyomi": "か-ける, か-る",
        "english": "drive"
    },
    {
        "kanji": "具",
        "onyomi": "グ",
        "kunyomi": "",
        "english": "tool"
    },
    {
        "kanji": "惧",
        "onyomi": "グ",
        "kunyomi": "",
        "english": "fear"
    },
    {
        "kanji": "愚",
        "onyomi": "グ",
        "kunyomi": "おろ-か",
        "english": "foolish"
    },
    {
        "kanji": "空",
        "onyomi": "クウ",
        "kunyomi": "そら, あ-く, あ-ける, から",
        "english": "sky"
    },
    {
        "kanji": "偶",
        "onyomi": "グウ",
        "kunyomi": "",
        "english": "accidentally"
    },
    {
        "kanji": "遇",
        "onyomi": "グウ",
        "kunyomi": "",
        "english": "interview"
    },
    {
        "kanji": "隅",
        "onyomi": "グウ",
        "kunyomi": "すみ",
        "english": "corner"
    },
    {
        "kanji": "串",
        "onyomi": "",
        "kunyomi": "くし",
        "english": "skewer"
    },
    {
        "kanji": "屈",
        "onyomi": "クツ",
        "kunyomi": "",
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
        "onyomi": "クツ",
        "kunyomi": "",
        "english": "cavern"
    },
    {
        "kanji": "熊",
        "onyomi": "",
        "kunyomi": "くま",
        "english": "bear"
    },
    {
        "kanji": "繰",
        "onyomi": "",
        "kunyomi": "く-る",
        "english": "winding"
    },
    {
        "kanji": "君",
        "onyomi": "クン",
        "kunyomi": "きみ",
        "english": "you"
    },
    {
        "kanji": "訓",
        "onyomi": "クン",
        "kunyomi": "",
        "english": "instruction"
    },
    {
        "kanji": "勲",
        "onyomi": "クン",
        "kunyomi": "",
        "english": "meritorious deed"
    },
    {
        "kanji": "薫",
        "onyomi": "クン",
        "kunyomi": "かお-る",
        "english": "fragrant"
    },
    {
        "kanji": "軍",
        "onyomi": "グン",
        "kunyomi": "",
        "english": "army"
    },
    {
        "kanji": "郡",
        "onyomi": "グン",
        "kunyomi": "",
        "english": "county"
    },
    {
        "kanji": "群",
        "onyomi": "グン",
        "kunyomi": "む-れる, む-れ, （むら）",
        "english": "flock"
    },
    {
        "kanji": "兄",
        "onyomi": "キョウ,（ケイ）",
        "kunyomi": "あに",
        "english": "older brother"
    },
    {
        "kanji": "刑",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "punish"
    },
    {
        "kanji": "形",
        "onyomi": "ケイ, ギョウ",
        "kunyomi": "かた, かたち",
        "english": "shape"
    },
    {
        "kanji": "系",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "lineage"
    },
    {
        "kanji": "径",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "diameter"
    },
    {
        "kanji": "茎",
        "onyomi": "ケイ",
        "kunyomi": "くき",
        "english": "stalk"
    },
    {
        "kanji": "係",
        "onyomi": "ケイ",
        "kunyomi": "かか-る, かかり",
        "english": "person in charge"
    },
    {
        "kanji": "型",
        "onyomi": "ケイ",
        "kunyomi": "かた",
        "english": "model"
    },
    {
        "kanji": "契",
        "onyomi": "ケイ",
        "kunyomi": "ちぎ-る",
        "english": "pledge"
    },
    {
        "kanji": "計",
        "onyomi": "ケイ",
        "kunyomi": "はか-る, はか-らう",
        "english": "measure"
    },
    {
        "kanji": "恵",
        "onyomi": "ケイ, エ",
        "kunyomi": "めぐ-む",
        "english": "favor"
    },
    {
        "kanji": "啓",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "disclose"
    },
    {
        "kanji": "掲",
        "onyomi": "ケイ",
        "kunyomi": "かか-げる",
        "english": "put up (a notice)"
    },
    {
        "kanji": "渓",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "mountain stream"
    },
    {
        "kanji": "経",
        "onyomi": "ケイ, キョウ",
        "kunyomi": "へ-る",
        "english": "manage"
    },
    {
        "kanji": "蛍",
        "onyomi": "ケイ",
        "kunyomi": "ほたる",
        "english": "lightning-bug"
    },
    {
        "kanji": "敬",
        "onyomi": "ケイ",
        "kunyomi": "うやま-う",
        "english": "respect"
    },
    {
        "kanji": "景",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "scenery"
    },
    {
        "kanji": "軽",
        "onyomi": "ケイ",
        "kunyomi": "かる-い, かろ-やか",
        "english": "lightweight"
    },
    {
        "kanji": "傾",
        "onyomi": "ケイ",
        "kunyomi": "かたむ-く, かたむ-ける",
        "english": "lean"
    },
    {
        "kanji": "携",
        "onyomi": "ケイ",
        "kunyomi": "たずさ-える, たずさ-わる",
        "english": "portable"
    },
    {
        "kanji": "継",
        "onyomi": "ケイ",
        "kunyomi": "つ-ぐ",
        "english": "inherit"
    },
    {
        "kanji": "詣",
        "onyomi": "ケイ",
        "kunyomi": "もう-でる",
        "english": "visit a temple"
    },
    {
        "kanji": "慶",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "jubilation"
    },
    {
        "kanji": "憬",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "long for"
    },
    {
        "kanji": "稽",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "think, compare"
    },
    {
        "kanji": "憩",
        "onyomi": "ケイ",
        "kunyomi": "いこ-い, いこ-う",
        "english": "recess"
    },
    {
        "kanji": "警",
        "onyomi": "ケイ",
        "kunyomi": "",
        "english": "guard against"
    },
    {
        "kanji": "鶏",
        "onyomi": "ケイ",
        "kunyomi": "にわとり",
        "english": "chicken"
    },
    {
        "kanji": "芸",
        "onyomi": "ゲイ",
        "kunyomi": "",
        "english": "art"
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
        "kanji": "隙",
        "onyomi": "ゲキ",
        "kunyomi": "すき",
        "english": "unguarded moment, hole"
    },
    {
        "kanji": "劇",
        "onyomi": "ゲキ",
        "kunyomi": "",
        "english": "drama"
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
        "kanji": "桁",
        "onyomi": "",
        "kunyomi": "けた",
        "english": "beam"
    },
    {
        "kanji": "欠",
        "onyomi": "ケツ",
        "kunyomi": "か-ける, か-く",
        "english": "lack"
    },
    {
        "kanji": "穴",
        "onyomi": "ケツ",
        "kunyomi": "あな",
        "english": "hole"
    },
    {
        "kanji": "血",
        "onyomi": "ケツ",
        "kunyomi": "ち",
        "english": "blood"
    },
    {
        "kanji": "決",
        "onyomi": "ケツ",
        "kunyomi": "き-める, き-まる",
        "english": "decide"
    },
    {
        "kanji": "結",
        "onyomi": "ケツ",
        "kunyomi": "むす-ぶ, ゆ-う, ゆ-わえる",
        "english": "tie"
    },
    {
        "kanji": "傑",
        "onyomi": "ケツ",
        "kunyomi": "",
        "english": "greatness"
    },
    {
        "kanji": "潔",
        "onyomi": "ケツ",
        "kunyomi": "いさぎよ-い",
        "english": "undefiled"
    },
    {
        "kanji": "月",
        "onyomi": "ゲツ, ガツ",
        "kunyomi": "つき",
        "english": "month, moon"
    },
    {
        "kanji": "犬",
        "onyomi": "ケン",
        "kunyomi": "いぬ",
        "english": "dog"
    },
    {
        "kanji": "件",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "affair"
    },
    {
        "kanji": "見",
        "onyomi": "ケン",
        "kunyomi": "み-る, み-える, み-せる",
        "english": "see"
    },
    {
        "kanji": "券",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "ticket"
    },
    {
        "kanji": "肩",
        "onyomi": "ケン",
        "kunyomi": "かた",
        "english": "shoulder"
    },
    {
        "kanji": "建",
        "onyomi": "ケン,（コン）",
        "kunyomi": "た-てる, た-つ",
        "english": "build"
    },
    {
        "kanji": "研",
        "onyomi": "ケン",
        "kunyomi": "と-ぐ",
        "english": "sharpen"
    },
    {
        "kanji": "県",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "prefecture"
    },
    {
        "kanji": "倹",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "frugal"
    },
    {
        "kanji": "兼",
        "onyomi": "ケン",
        "kunyomi": "か-ねる",
        "english": "concurrently"
    },
    {
        "kanji": "剣",
        "onyomi": "ケン",
        "kunyomi": "つるぎ",
        "english": "sabre"
    },
    {
        "kanji": "拳",
        "onyomi": "ケン",
        "kunyomi": "こぶし",
        "english": "fist"
    },
    {
        "kanji": "軒",
        "onyomi": "ケン",
        "kunyomi": "のき",
        "english": "flats"
    },
    {
        "kanji": "健",
        "onyomi": "ケン",
        "kunyomi": "すこ-やか",
        "english": "healthy"
    },
    {
        "kanji": "険",
        "onyomi": "ケン",
        "kunyomi": "けわ-しい",
        "english": "precipitous"
    },
    {
        "kanji": "圏",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "sphere"
    },
    {
        "kanji": "堅",
        "onyomi": "ケン",
        "kunyomi": "かた-い",
        "english": "strict"
    },
    {
        "kanji": "検",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "examine"
    },
    {
        "kanji": "嫌",
        "onyomi": "ケン,（ゲン）",
        "kunyomi": "きら-う, いや",
        "english": "dislike"
    },
    {
        "kanji": "献",
        "onyomi": "ケン,（コン）",
        "kunyomi": "",
        "english": "offering"
    },
    {
        "kanji": "絹",
        "onyomi": "ケン",
        "kunyomi": "きぬ",
        "english": "silk"
    },
    {
        "kanji": "遣",
        "onyomi": "ケン",
        "kunyomi": "つか-う, つか-わす",
        "english": "dispatch"
    },
    {
        "kanji": "権",
        "onyomi": "ケン,（ゴン）",
        "kunyomi": "",
        "english": "rights"
    },
    {
        "kanji": "憲",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "constitution"
    },
    {
        "kanji": "賢",
        "onyomi": "ケン",
        "kunyomi": "かしこ-い",
        "english": "intelligent"
    },
    {
        "kanji": "謙",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "self-effacing"
    },
    {
        "kanji": "鍵",
        "onyomi": "ケン",
        "kunyomi": "かぎ",
        "english": "key"
    },
    {
        "kanji": "繭",
        "onyomi": "ケン",
        "kunyomi": "まゆ",
        "english": "cocoon"
    },
    {
        "kanji": "顕",
        "onyomi": "ケン",
        "kunyomi": "",
        "english": "appear"
    },
    {
        "kanji": "験",
        "onyomi": "ケン,（ゲン）",
        "kunyomi": "",
        "english": "test"
    },
    {
        "kanji": "懸",
        "onyomi": "ケン,（ケ）",
        "kunyomi": "か-ける, か-かる",
        "english": "suspend"
    },
    {
        "kanji": "元",
        "onyomi": "ゲン, ガン",
        "kunyomi": "もと",
        "english": "origin"
    },
    {
        "kanji": "幻",
        "onyomi": "ゲン",
        "kunyomi": "まぼろし",
        "english": "phantasm"
    },
    {
        "kanji": "玄",
        "onyomi": "ゲン",
        "kunyomi": "",
        "english": "mysterious"
    },
    {
        "kanji": "言",
        "onyomi": "ゲン, ゴン",
        "kunyomi": "い-う, こと",
        "english": "say"
    },
    {
        "kanji": "弦",
        "onyomi": "ゲン",
        "kunyomi": "つる",
        "english": "bowstring"
    },
    {
        "kanji": "限",
        "onyomi": "ゲン",
        "kunyomi": "かぎ-る",
        "english": "limit"
    },
    {
        "kanji": "原",
        "onyomi": "ゲン",
        "kunyomi": "はら",
        "english": "field"
    },
    {
        "kanji": "現",
        "onyomi": "ゲン",
        "kunyomi": "あらわ-れる, あらわ-す",
        "english": "appear"
    },
    {
        "kanji": "舷",
        "onyomi": "ゲン",
        "kunyomi": "",
        "english": "gunwale"
    },
    {
        "kanji": "減",
        "onyomi": "ゲン",
        "kunyomi": "へ-る, へ-らす",
        "english": "decrease"
    },
    {
        "kanji": "源",
        "onyomi": "ゲン",
        "kunyomi": "みなもと",
        "english": "origin"
    },
    {
        "kanji": "厳",
        "onyomi": "ゲン,（ゴン）",
        "kunyomi": "おごそ-か, きび-しい",
        "english": "strict"
    },
    {
        "kanji": "己",
        "onyomi": "コ, キ",
        "kunyomi": "おのれ",
        "english": "self"
    },
    {
        "kanji": "戸",
        "onyomi": "コ",
        "kunyomi": "と",
        "english": "door"
    },
    {
        "kanji": "古",
        "onyomi": "コ",
        "kunyomi": "ふる-い, ふる-す",
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
        "kunyomi": "かた-める, かた-まる, かた-い",
        "english": "hard"
    },
    {
        "kanji": "股",
        "onyomi": "コ",
        "kunyomi": "また",
        "english": "crotch"
    },
    {
        "kanji": "虎",
        "onyomi": "コ",
        "kunyomi": "とら",
        "english": "tiger"
    },
    {
        "kanji": "孤",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "orphan"
    },
    {
        "kanji": "弧",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "arc"
    },
    {
        "kanji": "故",
        "onyomi": "コ",
        "kunyomi": "ゆえ",
        "english": "circumstances"
    },
    {
        "kanji": "枯",
        "onyomi": "コ",
        "kunyomi": "か-れる, か-らす",
        "english": "wither"
    },
    {
        "kanji": "個",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "individual"
    },
    {
        "kanji": "庫",
        "onyomi": "コ,（ク）",
        "kunyomi": "",
        "english": "warehouse"
    },
    {
        "kanji": "湖",
        "onyomi": "コ",
        "kunyomi": "みずうみ",
        "english": "lake"
    },
    {
        "kanji": "雇",
        "onyomi": "コ",
        "kunyomi": "やと-う",
        "english": "employ"
    },
    {
        "kanji": "誇",
        "onyomi": "コ",
        "kunyomi": "ほこ-る",
        "english": "boast"
    },
    {
        "kanji": "鼓",
        "onyomi": "コ",
        "kunyomi": "つづみ",
        "english": "drum"
    },
    {
        "kanji": "錮",
        "onyomi": "コ",
        "kunyomi": "",
        "english": "tie up"
    },
    {
        "kanji": "顧",
        "onyomi": "コ",
        "kunyomi": "かえり-みる",
        "english": "look back"
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
        "kunyomi": "たが-い",
        "english": "mutually"
    },
    {
        "kanji": "午",
        "onyomi": "ゴ",
        "kunyomi": "",
        "english": "noon"
    },
    {
        "kanji": "呉",
        "onyomi": "ゴ",
        "kunyomi": "",
        "english": "give"
    },
    {
        "kanji": "後",
        "onyomi": "ゴ, コウ",
        "kunyomi": "のち, うし-ろ, あと, おく-れる",
        "english": "behind"
    },
    {
        "kanji": "娯",
        "onyomi": "ゴ",
        "kunyomi": "",
        "english": "recreation"
    },
    {
        "kanji": "悟",
        "onyomi": "ゴ",
        "kunyomi": "さと-る",
        "english": "enlightenment"
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
        "english": "language"
    },
    {
        "kanji": "誤",
        "onyomi": "ゴ",
        "kunyomi": "あやま-る",
        "english": "mistake"
    },
    {
        "kanji": "護",
        "onyomi": "ゴ",
        "kunyomi": "",
        "english": "safeguard"
    },
    {
        "kanji": "口",
        "onyomi": "コウ, ク",
        "kunyomi": "くち",
        "english": "mouth"
    },
    {
        "kanji": "工",
        "onyomi": "コウ, ク",
        "kunyomi": "",
        "english": "craft"
    },
    {
        "kanji": "公",
        "onyomi": "コウ",
        "kunyomi": "おおやけ",
        "english": "public"
    },
    {
        "kanji": "勾",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "capture"
    },
    {
        "kanji": "孔",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "cavity"
    },
    {
        "kanji": "功",
        "onyomi": "コウ,（ク）",
        "kunyomi": "",
        "english": "achievement"
    },
    {
        "kanji": "巧",
        "onyomi": "コウ",
        "kunyomi": "たく-み",
        "english": "adroit"
    },
    {
        "kanji": "広",
        "onyomi": "コウ",
        "kunyomi": "ひろ-い, ひろ-まる, ひろ-める, ひろ-がる, ひろ-げる",
        "english": "wide"
    },
    {
        "kanji": "甲",
        "onyomi": "コウ, カン",
        "kunyomi": "",
        "english": "armor"
    },
    {
        "kanji": "交",
        "onyomi": "コウ",
        "kunyomi": "まじ-わる, まじ-える, ま-じる, ま-ざる, ま-ぜる, か-う, か-わす",
        "english": "mix"
    },
    {
        "kanji": "光",
        "onyomi": "コウ",
        "kunyomi": "ひか-る, ひかり",
        "english": "ray"
    },
    {
        "kanji": "向",
        "onyomi": "コウ",
        "kunyomi": "む-く, む-ける, む-かう, む-こう",
        "english": "over there"
    },
    {
        "kanji": "后",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "empress"
    },
    {
        "kanji": "好",
        "onyomi": "コウ",
        "kunyomi": "この-む, す-く",
        "english": "like"
    },
    {
        "kanji": "江",
        "onyomi": "コウ",
        "kunyomi": "え",
        "english": "inlet"
    },
    {
        "kanji": "考",
        "onyomi": "コウ",
        "kunyomi": "かんが-える",
        "english": "think"
    },
    {
        "kanji": "行",
        "onyomi": "コウ, ギョウ,（アン）",
        "kunyomi": "い-く, ゆ-く, おこな-う",
        "english": "go"
    },
    {
        "kanji": "坑",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "pit"
    },
    {
        "kanji": "孝",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "filial piety"
    },
    {
        "kanji": "抗",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "confront"
    },
    {
        "kanji": "攻",
        "onyomi": "コウ",
        "kunyomi": "せ-める",
        "english": "aggression"
    },
    {
        "kanji": "更",
        "onyomi": "コウ",
        "kunyomi": "さら, ふ-ける, ふ-かす",
        "english": "grow late"
    },
    {
        "kanji": "効",
        "onyomi": "コウ",
        "kunyomi": "き-く",
        "english": "effect"
    },
    {
        "kanji": "幸",
        "onyomi": "コウ",
        "kunyomi": "さいわ-い, さち, しあわ-せ",
        "english": "happiness"
    },
    {
        "kanji": "拘",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "arrest"
    },
    {
        "kanji": "肯",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "agreement"
    },
    {
        "kanji": "侯",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "marquis"
    },
    {
        "kanji": "厚",
        "onyomi": "コウ",
        "kunyomi": "あつ-い",
        "english": "thick"
    },
    {
        "kanji": "恒",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "constancy"
    },
    {
        "kanji": "洪",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "deluge"
    },
    {
        "kanji": "皇",
        "onyomi": "コウ, オウ",
        "kunyomi": "",
        "english": "emperor"
    },
    {
        "kanji": "紅",
        "onyomi": "コウ,（ク）",
        "kunyomi": "べに, くれない",
        "english": "deep red"
    },
    {
        "kanji": "荒",
        "onyomi": "コウ",
        "kunyomi": "あら-い, あ-れる, あ-らす",
        "english": "laid waste"
    },
    {
        "kanji": "郊",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "outskirts"
    },
    {
        "kanji": "香",
        "onyomi": "コウ,（キョウ）",
        "kunyomi": "か, かお-り, かお-る",
        "english": "incense"
    },
    {
        "kanji": "候",
        "onyomi": "コウ",
        "kunyomi": "そうろう",
        "english": "climate"
    },
    {
        "kanji": "校",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "school"
    },
    {
        "kanji": "耕",
        "onyomi": "コウ",
        "kunyomi": "たがや-す",
        "english": "till"
    },
    {
        "kanji": "航",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "cruise"
    },
    {
        "kanji": "貢",
        "onyomi": "コウ,（ク）",
        "kunyomi": "みつ-ぐ",
        "english": "tribute"
    },
    {
        "kanji": "降",
        "onyomi": "コウ",
        "kunyomi": "お-りる, お-ろす, ふ-る",
        "english": "descend"
    },
    {
        "kanji": "高",
        "onyomi": "コウ",
        "kunyomi": "たか-い, たか, たか-まる, たか-める",
        "english": "tall, expensive"
    },
    {
        "kanji": "康",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "health"
    },
    {
        "kanji": "控",
        "onyomi": "コウ",
        "kunyomi": "ひか-える",
        "english": "withdraw"
    },
    {
        "kanji": "梗",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "close up"
    },
    {
        "kanji": "黄",
        "onyomi": "コウ, オウ",
        "kunyomi": "き, （こ）",
        "english": "yellow"
    },
    {
        "kanji": "喉",
        "onyomi": "コウ",
        "kunyomi": "のど",
        "english": "throat"
    },
    {
        "kanji": "慌",
        "onyomi": "コウ",
        "kunyomi": "あわ-てる, あわ-ただしい",
        "english": "disconcerted"
    },
    {
        "kanji": "港",
        "onyomi": "コウ",
        "kunyomi": "みなと",
        "english": "harbor"
    },
    {
        "kanji": "硬",
        "onyomi": "コウ",
        "kunyomi": "かた-い",
        "english": "stiff"
    },
    {
        "kanji": "絞",
        "onyomi": "コウ",
        "kunyomi": "しぼ-る, し-める, し-まる",
        "english": "strangle"
    },
    {
        "kanji": "項",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "paragraph"
    },
    {
        "kanji": "溝",
        "onyomi": "コウ",
        "kunyomi": "みぞ",
        "english": "gutter"
    },
    {
        "kanji": "鉱",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "mineral"
    },
    {
        "kanji": "構",
        "onyomi": "コウ",
        "kunyomi": "かま-える, かま-う",
        "english": "construct"
    },
    {
        "kanji": "綱",
        "onyomi": "コウ",
        "kunyomi": "つな",
        "english": "hawser"
    },
    {
        "kanji": "酵",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "fermentation"
    },
    {
        "kanji": "稿",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "draft"
    },
    {
        "kanji": "興",
        "onyomi": "コウ, キョウ",
        "kunyomi": "おこ-る, おこ-す",
        "english": "entertain"
    },
    {
        "kanji": "衡",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "equilibrium"
    },
    {
        "kanji": "鋼",
        "onyomi": "コウ",
        "kunyomi": "はがね",
        "english": "steel"
    },
    {
        "kanji": "講",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "lecture"
    },
    {
        "kanji": "購",
        "onyomi": "コウ",
        "kunyomi": "",
        "english": "subscription"
    },
    {
        "kanji": "乞",
        "onyomi": "",
        "kunyomi": "こ-う",
        "english": "beg"
    },
    {
        "kanji": "号",
        "onyomi": "ゴウ",
        "kunyomi": "",
        "english": "number"
    },
    {
        "kanji": "合",
        "onyomi": "ゴウ, ガッ,（カッ）",
        "kunyomi": "あ-う, あ-わす, あ-わせる",
        "english": "fit"
    },
    {
        "kanji": "拷",
        "onyomi": "ゴウ",
        "kunyomi": "",
        "english": "torture"
    },
    {
        "kanji": "剛",
        "onyomi": "ゴウ",
        "kunyomi": "",
        "english": "sturdy"
    },
    {
        "kanji": "傲",
        "onyomi": "ゴウ",
        "kunyomi": "",
        "english": "be proud"
    },
    {
        "kanji": "豪",
        "onyomi": "ゴウ",
        "kunyomi": "",
        "english": "overpowering"
    },
    {
        "kanji": "克",
        "onyomi": "コク",
        "kunyomi": "",
        "english": "overcome"
    },
    {
        "kanji": "告",
        "onyomi": "コク",
        "kunyomi": "つ-げる",
        "english": "tell"
    },
    {
        "kanji": "谷",
        "onyomi": "コク",
        "kunyomi": "たに",
        "english": "valley"
    },
    {
        "kanji": "刻",
        "onyomi": "コク",
        "kunyomi": "きざ-む",
        "english": "engrave"
    },
    {
        "kanji": "国",
        "onyomi": "コク",
        "kunyomi": "くに",
        "english": "country"
    },
    {
        "kanji": "黒",
        "onyomi": "コク",
        "kunyomi": "くろ, くろ-い",
        "english": "black"
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
        "kunyomi": "",
        "english": "cruel"
    },
    {
        "kanji": "獄",
        "onyomi": "ゴク",
        "kunyomi": "",
        "english": "prison"
    },
    {
        "kanji": "骨",
        "onyomi": "コツ",
        "kunyomi": "ほね",
        "english": "bone"
    },
    {
        "kanji": "駒",
        "onyomi": "",
        "kunyomi": "こま",
        "english": "horse"
    },
    {
        "kanji": "込",
        "onyomi": "",
        "kunyomi": "こ-む, こ-める",
        "english": "crowded"
    },
    {
        "kanji": "頃",
        "onyomi": "",
        "kunyomi": "ころ",
        "english": "times"
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
        "english": "become distressed"
    },
    {
        "kanji": "昆",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "descendants"
    },
    {
        "kanji": "恨",
        "onyomi": "コン",
        "kunyomi": "うら-む, うら-めしい",
        "english": "rancor"
    },
    {
        "kanji": "根",
        "onyomi": "コン",
        "kunyomi": "ね",
        "english": "root"
    },
    {
        "kanji": "婚",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "marriage"
    },
    {
        "kanji": "混",
        "onyomi": "コン",
        "kunyomi": "ま-じる, ま-ざる, ま-ぜる, こ-む",
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
        "kanji": "魂",
        "onyomi": "コン",
        "kunyomi": "たましい",
        "english": "soul"
    },
    {
        "kanji": "墾",
        "onyomi": "コン",
        "kunyomi": "",
        "english": "ground-breaking"
    },
    {
        "kanji": "懇",
        "onyomi": "コン",
        "kunyomi": "ねんご-ろ",
        "english": "sociable"
    },
    {
        "kanji": "左",
        "onyomi": "サ",
        "kunyomi": "ひだり",
        "english": "left (direction)"
    },
    {
        "kanji": "佐",
        "onyomi": "サ",
        "kunyomi": "",
        "english": "help"
    },
    {
        "kanji": "沙",
        "onyomi": "サ",
        "kunyomi": "",
        "english": "sand"
    },
    {
        "kanji": "査",
        "onyomi": "サ",
        "kunyomi": "",
        "english": "investigate"
    },
    {
        "kanji": "砂",
        "onyomi": "サ, シャ",
        "kunyomi": "すな",
        "english": "sand"
    },
    {
        "kanji": "唆",
        "onyomi": "サ",
        "kunyomi": "そそのか-す",
        "english": "tempt"
    },
    {
        "kanji": "差",
        "onyomi": "サ",
        "kunyomi": "さ-す",
        "english": "distinction"
    },
    {
        "kanji": "詐",
        "onyomi": "サ",
        "kunyomi": "",
        "english": "lie"
    },
    {
        "kanji": "鎖",
        "onyomi": "サ",
        "kunyomi": "くさり",
        "english": "chain"
    },
    {
        "kanji": "座",
        "onyomi": "ザ",
        "kunyomi": "すわ-る",
        "english": "sit"
    },
    {
        "kanji": "挫",
        "onyomi": "ザ",
        "kunyomi": "",
        "english": "sprain"
    },
    {
        "kanji": "才",
        "onyomi": "サイ",
        "kunyomi": "",
        "english": "genius"
    },
    {
        "kanji": "再",
        "onyomi": "サイ,（サ）",
        "kunyomi": "ふたた-び",
        "english": "again"
    },
    {
        "kanji": "災",
        "onyomi": "サイ",
        "kunyomi": "わざわ-い",
        "english": "disaster"
    },
    {
        "kanji": "妻",
        "onyomi": "サイ",
        "kunyomi": "つま",
        "english": "wife"
    },
    {
        "kanji": "采",
        "onyomi": "サイ",
        "kunyomi": "",
        "english": "form"
    },
    {
        "kanji": "砕",
        "onyomi": "サイ",
        "kunyomi": "くだ-く, くだ-ける",
        "english": "smash"
    },
    {
        "kanji": "宰",
        "onyomi": "サイ",
        "kunyomi": "",
        "english": "superintend"
    },
    {
        "kanji": "栽",
        "onyomi": "サイ",
        "kunyomi": "",
        "english": "plantation"
    },
    {
        "kanji": "彩",
        "onyomi": "サイ",
        "kunyomi": "いろど-る",
        "english": "coloring"
    },
    {
        "kanji": "採",
        "onyomi": "サイ",
        "kunyomi": "と-る",
        "english": "pick"
    },
    {
        "kanji": "済",
        "onyomi": "サイ",
        "kunyomi": "す-む, す-ます",
        "english": "settle"
    },
    {
        "kanji": "祭",
        "onyomi": "サイ",
        "kunyomi": "まつ-る, まつ-り",
        "english": "festival"
    },
    {
        "kanji": "斎",
        "onyomi": "サイ",
        "kunyomi": "",
        "english": "purification"
    },
    {
        "kanji": "細",
        "onyomi": "サイ",
        "kunyomi": "ほそ-い, ほそ-る, こま-か, こま-かい",
        "english": "thin"
    },
    {
        "kanji": "菜",
        "onyomi": "サイ",
        "kunyomi": "な",
        "english": "vegetable"
    },
    {
        "kanji": "最",
        "onyomi": "サイ",
        "kunyomi": "もっと-も",
        "english": "most"
    },
    {
        "kanji": "裁",
        "onyomi": "サイ",
        "kunyomi": "た-つ, さば-く",
        "english": "judge"
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
        "kunyomi": "もよお-す",
        "english": "sponsor"
    },
    {
        "kanji": "塞",
        "onyomi": "サイ, ソク",
        "kunyomi": "ふさ-ぐ, ふさ-がる",
        "english": "obstruct"
    },
    {
        "kanji": "歳",
        "onyomi": "サイ,（セイ）",
        "kunyomi": "",
        "english": "year-end"
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
        "kunyomi": "きわ",
        "english": "occasion"
    },
    {
        "kanji": "埼",
        "onyomi": "サキ",
        "kunyomi": "（さい）",
        "english": "cape (geography)"
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
        "kanji": "剤",
        "onyomi": "ザイ",
        "kunyomi": "",
        "english": "dose"
    },
    {
        "kanji": "財",
        "onyomi": "ザイ,（サイ）",
        "kunyomi": "",
        "english": "wealth"
    },
    {
        "kanji": "罪",
        "onyomi": "ザイ",
        "kunyomi": "つみ",
        "english": "guilt"
    },
    {
        "kanji": "崎",
        "onyomi": "",
        "kunyomi": "さき",
        "english": "promontory"
    },
    {
        "kanji": "作",
        "onyomi": "サク, サ",
        "kunyomi": "つく-る",
        "english": "make"
    },
    {
        "kanji": "削",
        "onyomi": "サク",
        "kunyomi": "けず-る",
        "english": "plane"
    },
    {
        "kanji": "昨",
        "onyomi": "サク",
        "kunyomi": "",
        "english": "previous"
    },
    {
        "kanji": "柵",
        "onyomi": "サク",
        "kunyomi": "",
        "english": "fence"
    },
    {
        "kanji": "索",
        "onyomi": "サク",
        "kunyomi": "",
        "english": "cord"
    },
    {
        "kanji": "策",
        "onyomi": "サク",
        "kunyomi": "",
        "english": "scheme"
    },
    {
        "kanji": "酢",
        "onyomi": "サク",
        "kunyomi": "す",
        "english": "vinegar"
    },
    {
        "kanji": "搾",
        "onyomi": "サク",
        "kunyomi": "しぼ-る",
        "english": "squeeze"
    },
    {
        "kanji": "錯",
        "onyomi": "サク",
        "kunyomi": "",
        "english": "confused"
    },
    {
        "kanji": "咲",
        "onyomi": "",
        "kunyomi": "さ-く",
        "english": "blossom"
    },
    {
        "kanji": "冊",
        "onyomi": "サツ, サク",
        "kunyomi": "",
        "english": "counter for books"
    },
    {
        "kanji": "札",
        "onyomi": "サツ",
        "kunyomi": "ふだ",
        "english": "tag"
    },
    {
        "kanji": "刷",
        "onyomi": "サツ",
        "kunyomi": "す-る",
        "english": "printing"
    },
    {
        "kanji": "刹",
        "onyomi": "サツ, セツ",
        "kunyomi": "",
        "english": "temple"
    },
    {
        "kanji": "拶",
        "onyomi": "サツ",
        "kunyomi": "",
        "english": "be imminent"
    },
    {
        "kanji": "殺",
        "onyomi": "サツ,（サイ）, （セツ）",
        "kunyomi": "ころ-す",
        "english": "kill"
    },
    {
        "kanji": "察",
        "onyomi": "サツ",
        "kunyomi": "",
        "english": "guess"
    },
    {
        "kanji": "撮",
        "onyomi": "サツ",
        "kunyomi": "と-る",
        "english": "snapshot"
    },
    {
        "kanji": "擦",
        "onyomi": "サツ",
        "kunyomi": "す-る, す-れる",
        "english": "grate"
    },
    {
        "kanji": "雑",
        "onyomi": "ザツ, ゾウ",
        "kunyomi": "",
        "english": "miscellaneous"
    },
    {
        "kanji": "皿",
        "onyomi": "",
        "kunyomi": "さら",
        "english": "dish"
    },
    {
        "kanji": "三",
        "onyomi": "サン",
        "kunyomi": "み, み-つ, みっ-つ",
        "english": "three"
    },
    {
        "kanji": "山",
        "onyomi": "サン",
        "kunyomi": "やま",
        "english": "mountain"
    },
    {
        "kanji": "参",
        "onyomi": "サン",
        "kunyomi": "まい-る",
        "english": "participate"
    },
    {
        "kanji": "桟",
        "onyomi": "サン",
        "kunyomi": "",
        "english": "scaffold"
    },
    {
        "kanji": "蚕",
        "onyomi": "サン",
        "kunyomi": "かいこ",
        "english": "silkworm"
    },
    {
        "kanji": "惨",
        "onyomi": "サン, ザン",
        "kunyomi": "みじ-め",
        "english": "wretched"
    },
    {
        "kanji": "産",
        "onyomi": "サン",
        "kunyomi": "う-む, う-まれる, うぶ",
        "english": "give birth"
    },
    {
        "kanji": "傘",
        "onyomi": "サン",
        "kunyomi": "かさ",
        "english": "umbrella"
    },
    {
        "kanji": "散",
        "onyomi": "サン",
        "kunyomi": "ち-る, ち-らす, ち-らかす, ち-らかる",
        "english": "scatter"
    },
    {
        "kanji": "算",
        "onyomi": "サン",
        "kunyomi": "",
        "english": "calculate"
    },
    {
        "kanji": "酸",
        "onyomi": "サン",
        "kunyomi": "す-い",
        "english": "acid"
    },
    {
        "kanji": "賛",
        "onyomi": "サン",
        "kunyomi": "",
        "english": "approve"
    },
    {
        "kanji": "残",
        "onyomi": "ザン",
        "kunyomi": "のこ-る, のこ-す",
        "english": "remainder"
    },
    {
        "kanji": "斬",
        "onyomi": "ザン",
        "kunyomi": "き-る",
        "english": "kill by slicing"
    },
    {
        "kanji": "暫",
        "onyomi": "ザン",
        "kunyomi": "",
        "english": "temporarily"
    },
    {
        "kanji": "士",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "gentleman"
    },
    {
        "kanji": "子",
        "onyomi": "シ, ス",
        "kunyomi": "こ",
        "english": "child"
    },
    {
        "kanji": "支",
        "onyomi": "シ",
        "kunyomi": "ささ-える",
        "english": "branch"
    },
    {
        "kanji": "止",
        "onyomi": "シ",
        "kunyomi": "と-まる, と-める",
        "english": "stop"
    },
    {
        "kanji": "氏",
        "onyomi": "シ",
        "kunyomi": "うじ",
        "english": "family name"
    },
    {
        "kanji": "仕",
        "onyomi": "シ,（ジ）",
        "kunyomi": "つか-える",
        "english": "do, serve"
    },
    {
        "kanji": "史",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "history"
    },
    {
        "kanji": "司",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "director"
    },
    {
        "kanji": "四",
        "onyomi": "シ",
        "kunyomi": "よ, よ-つ, よっ-つ, よん",
        "english": "four"
    },
    {
        "kanji": "市",
        "onyomi": "シ",
        "kunyomi": "いち",
        "english": "market"
    },
    {
        "kanji": "矢",
        "onyomi": "シ",
        "kunyomi": "や",
        "english": "arrow"
    },
    {
        "kanji": "旨",
        "onyomi": "シ",
        "kunyomi": "むね",
        "english": "delicious"
    },
    {
        "kanji": "死",
        "onyomi": "シ",
        "kunyomi": "し-ぬ",
        "english": "death"
    },
    {
        "kanji": "糸",
        "onyomi": "シ",
        "kunyomi": "いと",
        "english": "thread"
    },
    {
        "kanji": "至",
        "onyomi": "シ",
        "kunyomi": "いた-る",
        "english": "climax"
    },
    {
        "kanji": "伺",
        "onyomi": "シ",
        "kunyomi": "うかが-う",
        "english": "pay respects"
    },
    {
        "kanji": "志",
        "onyomi": "シ",
        "kunyomi": "こころざ-す, こころざし",
        "english": "intention"
    },
    {
        "kanji": "私",
        "onyomi": "シ",
        "kunyomi": "わたくし, わたし",
        "english": "me"
    },
    {
        "kanji": "使",
        "onyomi": "シ",
        "kunyomi": "つか-う",
        "english": "use"
    },
    {
        "kanji": "刺",
        "onyomi": "シ",
        "kunyomi": "さ-す, さ-さる",
        "english": "thorn"
    },
    {
        "kanji": "始",
        "onyomi": "シ",
        "kunyomi": "はじ-める, はじ-まる",
        "english": "begin"
    },
    {
        "kanji": "姉",
        "onyomi": "シ",
        "kunyomi": "あね",
        "english": "older sister"
    },
    {
        "kanji": "枝",
        "onyomi": "シ",
        "kunyomi": "えだ",
        "english": "branch"
    },
    {
        "kanji": "祉",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "welfare"
    },
    {
        "kanji": "肢",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "limb"
    },
    {
        "kanji": "姿",
        "onyomi": "シ",
        "kunyomi": "すがた",
        "english": "figure"
    },
    {
        "kanji": "思",
        "onyomi": "シ",
        "kunyomi": "おも-う",
        "english": "think"
    },
    {
        "kanji": "指",
        "onyomi": "シ",
        "kunyomi": "ゆび, さ-す",
        "english": "finger"
    },
    {
        "kanji": "施",
        "onyomi": "シ, セ",
        "kunyomi": "ほどこ-す",
        "english": "carry out"
    },
    {
        "kanji": "師",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "expert"
    },
    {
        "kanji": "恣",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "arbitrary"
    },
    {
        "kanji": "紙",
        "onyomi": "シ",
        "kunyomi": "かみ",
        "english": "paper"
    },
    {
        "kanji": "脂",
        "onyomi": "シ",
        "kunyomi": "あぶら",
        "english": "fat"
    },
    {
        "kanji": "視",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "look at"
    },
    {
        "kanji": "紫",
        "onyomi": "シ",
        "kunyomi": "むらさき",
        "english": "purple"
    },
    {
        "kanji": "詞",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "poetry"
    },
    {
        "kanji": "歯",
        "onyomi": "シ",
        "kunyomi": "は",
        "english": "tooth"
    },
    {
        "kanji": "嗣",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "heir"
    },
    {
        "kanji": "試",
        "onyomi": "シ",
        "kunyomi": "こころ-みる, ため-す",
        "english": "test"
    },
    {
        "kanji": "詩",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "poem"
    },
    {
        "kanji": "資",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "resources"
    },
    {
        "kanji": "飼",
        "onyomi": "シ",
        "kunyomi": "か-う",
        "english": "domesticate"
    },
    {
        "kanji": "誌",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "document"
    },
    {
        "kanji": "雌",
        "onyomi": "シ",
        "kunyomi": "め, めす",
        "english": "feminine"
    },
    {
        "kanji": "摯",
        "onyomi": "シ",
        "kunyomi": "",
        "english": "seriousness"
    },
    {
        "kanji": "賜",
        "onyomi": "シ",
        "kunyomi": "たまわ-る",
        "english": "grant"
    },
    {
        "kanji": "諮",
        "onyomi": "シ",
        "kunyomi": "はか-る",
        "english": "consult with"
    },
    {
        "kanji": "示",
        "onyomi": "ジ, シ",
        "kunyomi": "しめ-す",
        "english": "indicate"
    },
    {
        "kanji": "字",
        "onyomi": "ジ",
        "kunyomi": "あざ",
        "english": "letter"
    },
    {
        "kanji": "寺",
        "onyomi": "ジ",
        "kunyomi": "てら",
        "english": "Buddhist temple"
    },
    {
        "kanji": "次",
        "onyomi": "ジ, シ",
        "kunyomi": "つ-ぐ, つぎ",
        "english": "next"
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
        "kunyomi": "みずか-ら",
        "english": "oneself"
    },
    {
        "kanji": "似",
        "onyomi": "ジ",
        "kunyomi": "に-る",
        "english": "becoming"
    },
    {
        "kanji": "児",
        "onyomi": "ジ,（ニ）",
        "kunyomi": "",
        "english": "child"
    },
    {
        "kanji": "事",
        "onyomi": "ジ,（ズ）",
        "kunyomi": "こと",
        "english": "abstract thing"
    },
    {
        "kanji": "侍",
        "onyomi": "ジ",
        "kunyomi": "さむらい",
        "english": "waiter"
    },
    {
        "kanji": "治",
        "onyomi": "ジ, チ",
        "kunyomi": "おさ-める, おさ-まる, なお-る, なお-す",
        "english": "govern"
    },
    {
        "kanji": "持",
        "onyomi": "ジ",
        "kunyomi": "も-つ",
        "english": "hold"
    },
    {
        "kanji": "時",
        "onyomi": "ジ",
        "kunyomi": "とき",
        "english": "time"
    },
    {
        "kanji": "滋",
        "onyomi": "ジ",
        "kunyomi": "",
        "english": "nourishing"
    },
    {
        "kanji": "慈",
        "onyomi": "ジ",
        "kunyomi": "いつく-しむ",
        "english": "mercy"
    },
    {
        "kanji": "辞",
        "onyomi": "ジ",
        "kunyomi": "や-める",
        "english": "resign"
    },
    {
        "kanji": "磁",
        "onyomi": "ジ",
        "kunyomi": "",
        "english": "magnet"
    },
    {
        "kanji": "餌",
        "onyomi": "ジ",
        "kunyomi": "えさ, え",
        "english": "fodder"
    },
    {
        "kanji": "璽",
        "onyomi": "ジ",
        "kunyomi": "",
        "english": "emperor's seal"
    },
    {
        "kanji": "鹿",
        "onyomi": "",
        "kunyomi": "しか, （か）",
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
        "kunyomi": "",
        "english": "discriminating"
    },
    {
        "kanji": "軸",
        "onyomi": "ジク",
        "kunyomi": "",
        "english": "axis"
    },
    {
        "kanji": "七",
        "onyomi": "シチ",
        "kunyomi": "なな, なな-つ, （なの）",
        "english": "seven"
    },
    {
        "kanji": "𠮟",
        "onyomi": "シツ",
        "kunyomi": "しか-る",
        "english": "scold"
    },
    {
        "kanji": "失",
        "onyomi": "シツ",
        "kunyomi": "うしな-う",
        "english": "lose"
    },
    {
        "kanji": "室",
        "onyomi": "シツ",
        "kunyomi": "むろ",
        "english": "room"
    },
    {
        "kanji": "疾",
        "onyomi": "シツ",
        "kunyomi": "",
        "english": "rapidly"
    },
    {
        "kanji": "執",
        "onyomi": "シツ, シュウ",
        "kunyomi": "と-る",
        "english": "tenacious"
    },
    {
        "kanji": "湿",
        "onyomi": "シツ",
        "kunyomi": "しめ-る, しめ-す",
        "english": "damp"
    },
    {
        "kanji": "嫉",
        "onyomi": "シツ",
        "kunyomi": "",
        "english": "envy"
    },
    {
        "kanji": "漆",
        "onyomi": "シツ",
        "kunyomi": "うるし",
        "english": "lacquer"
    },
    {
        "kanji": "質",
        "onyomi": "シツ, シチ,（チ）",
        "kunyomi": "",
        "english": "quality"
    },
    {
        "kanji": "実",
        "onyomi": "ジツ",
        "kunyomi": "み, みの-る",
        "english": "truth"
    },
    {
        "kanji": "芝",
        "onyomi": "",
        "kunyomi": "しば",
        "english": "turf"
    },
    {
        "kanji": "写",
        "onyomi": "シャ",
        "kunyomi": "うつ-す, うつ-る",
        "english": "copy"
    },
    {
        "kanji": "社",
        "onyomi": "シャ",
        "kunyomi": "やしろ",
        "english": "company"
    },
    {
        "kanji": "車",
        "onyomi": "シャ",
        "kunyomi": "くるま",
        "english": "car"
    },
    {
        "kanji": "舎",
        "onyomi": "シャ",
        "kunyomi": "",
        "english": "cottage"
    },
    {
        "kanji": "者",
        "onyomi": "シャ",
        "kunyomi": "もの",
        "english": "someone"
    },
    {
        "kanji": "射",
        "onyomi": "シャ",
        "kunyomi": "い-る",
        "english": "shoot"
    },
    {
        "kanji": "捨",
        "onyomi": "シャ",
        "kunyomi": "す-てる",
        "english": "throw away"
    },
    {
        "kanji": "赦",
        "onyomi": "シャ",
        "kunyomi": "",
        "english": "pardon"
    },
    {
        "kanji": "斜",
        "onyomi": "シャ",
        "kunyomi": "なな-め",
        "english": "diagonal"
    },
    {
        "kanji": "煮",
        "onyomi": "シャ",
        "kunyomi": "に-る, に-える, に-やす",
        "english": "boil"
    },
    {
        "kanji": "遮",
        "onyomi": "シャ",
        "kunyomi": "さえぎ-る",
        "english": "intercept"
    },
    {
        "kanji": "謝",
        "onyomi": "シャ",
        "kunyomi": "あやま-る",
        "english": "apologize"
    },
    {
        "kanji": "邪",
        "onyomi": "ジャ",
        "kunyomi": "",
        "english": "wicked"
    },
    {
        "kanji": "蛇",
        "onyomi": "ジャ, ダ",
        "kunyomi": "へび",
        "english": "snake"
    },
    {
        "kanji": "勺",
        "onyomi": "シャク",
        "kunyomi": "",
        "english": "shaku, 0.018 l"
    },
    {
        "kanji": "尺",
        "onyomi": "シャク",
        "kunyomi": "",
        "english": "shaku, 30.3 cm"
    },
    {
        "kanji": "借",
        "onyomi": "シャク",
        "kunyomi": "か-りる",
        "english": "borrow"
    },
    {
        "kanji": "酌",
        "onyomi": "シャク",
        "kunyomi": "く-む",
        "english": "bartending"
    },
    {
        "kanji": "釈",
        "onyomi": "シャク",
        "kunyomi": "",
        "english": "explanation"
    },
    {
        "kanji": "爵",
        "onyomi": "シャク",
        "kunyomi": "",
        "english": "baron"
    },
    {
        "kanji": "若",
        "onyomi": "ジャク,（ニャク）",
        "kunyomi": "わか-い, も-しくは",
        "english": "young"
    },
    {
        "kanji": "弱",
        "onyomi": "ジャク",
        "kunyomi": "よわ-い, よわ-る, よわ-まる, よわ-める",
        "english": "weak"
    },
    {
        "kanji": "寂",
        "onyomi": "ジャク,（セキ）",
        "kunyomi": "さび, さび-しい, さび-れる",
        "english": "loneliness"
    },
    {
        "kanji": "手",
        "onyomi": "シュ",
        "kunyomi": "て, （た）",
        "english": "hand"
    },
    {
        "kanji": "主",
        "onyomi": "シュ,（ス）",
        "kunyomi": "ぬし, おも",
        "english": "master"
    },
    {
        "kanji": "守",
        "onyomi": "シュ,（ス）",
        "kunyomi": "まも-る, も-り",
        "english": "protect"
    },
    {
        "kanji": "朱",
        "onyomi": "シュ",
        "kunyomi": "",
        "english": "vermilion"
    },
    {
        "kanji": "取",
        "onyomi": "シュ",
        "kunyomi": "と-る",
        "english": "take"
    },
    {
        "kanji": "狩",
        "onyomi": "シュ",
        "kunyomi": "か-る, か-り",
        "english": "hunt"
    },
    {
        "kanji": "首",
        "onyomi": "シュ",
        "kunyomi": "くび",
        "english": "neck"
    },
    {
        "kanji": "殊",
        "onyomi": "シュ",
        "kunyomi": "こと",
        "english": "particularly"
    },
    {
        "kanji": "珠",
        "onyomi": "シュ",
        "kunyomi": "",
        "english": "pearl"
    },
    {
        "kanji": "酒",
        "onyomi": "シュ",
        "kunyomi": "さけ, （さか）",
        "english": "alcoholic drink"
    },
    {
        "kanji": "腫",
        "onyomi": "シュ",
        "kunyomi": "は-れる, は-らす",
        "english": "tumor"
    },
    {
        "kanji": "種",
        "onyomi": "シュ",
        "kunyomi": "たね",
        "english": "kind"
    },
    {
        "kanji": "趣",
        "onyomi": "シュ",
        "kunyomi": "おもむき",
        "english": "gist"
    },
    {
        "kanji": "寿",
        "onyomi": "ジュ",
        "kunyomi": "ことぶき",
        "english": "longevity"
    },
    {
        "kanji": "受",
        "onyomi": "ジュ",
        "kunyomi": "う-ける, う-かる",
        "english": "accept"
    },
    {
        "kanji": "呪",
        "onyomi": "ジュ",
        "kunyomi": "のろ-う",
        "english": "curse"
    },
    {
        "kanji": "授",
        "onyomi": "ジュ",
        "kunyomi": "さず-ける, さず-かる",
        "english": "instruct"
    },
    {
        "kanji": "需",
        "onyomi": "ジュ",
        "kunyomi": "",
        "english": "demand"
    },
    {
        "kanji": "儒",
        "onyomi": "ジュ",
        "kunyomi": "",
        "english": "Confucian"
    },
    {
        "kanji": "樹",
        "onyomi": "ジュ",
        "kunyomi": "",
        "english": "trees"
    },
    {
        "kanji": "収",
        "onyomi": "シュウ",
        "kunyomi": "おさ-める, おさ-まる",
        "english": "take in"
    },
    {
        "kanji": "囚",
        "onyomi": "シュウ",
        "kunyomi": "",
        "english": "captured"
    },
    {
        "kanji": "州",
        "onyomi": "シュウ",
        "kunyomi": "す",
        "english": "state"
    },
    {
        "kanji": "舟",
        "onyomi": "シュウ",
        "kunyomi": "ふね, （ふな）",
        "english": "boat"
    },
    {
        "kanji": "秀",
        "onyomi": "シュウ",
        "kunyomi": "ひい-でる",
        "english": "excel"
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
        "kunyomi": "",
        "english": "religion"
    },
    {
        "kanji": "拾",
        "onyomi": "シュウ, ジュウ",
        "kunyomi": "ひろ-う",
        "english": "pick up"
    },
    {
        "kanji": "秋",
        "onyomi": "シュウ",
        "kunyomi": "あき",
        "english": "autumn"
    },
    {
        "kanji": "臭",
        "onyomi": "シュウ",
        "kunyomi": "くさ-い, にお-う",
        "english": "stinking"
    },
    {
        "kanji": "修",
        "onyomi": "シュウ,（シュ）",
        "kunyomi": "おさ-める, おさ-まる",
        "english": "discipline"
    },
    {
        "kanji": "袖",
        "onyomi": "シュウ",
        "kunyomi": "そで",
        "english": "sleeve"
    },
    {
        "kanji": "終",
        "onyomi": "シュウ",
        "kunyomi": "お-わる, お-える",
        "english": "end"
    },
    {
        "kanji": "羞",
        "onyomi": "シュウ",
        "kunyomi": "",
        "english": "feel ashamed"
    },
    {
        "kanji": "習",
        "onyomi": "シュウ",
        "kunyomi": "なら-う",
        "english": "learn"
    },
    {
        "kanji": "週",
        "onyomi": "シュウ",
        "kunyomi": "",
        "english": "week"
    },
    {
        "kanji": "就",
        "onyomi": "シュウ,（ジュ）",
        "kunyomi": "つ-く, つ-ける",
        "english": "concerning"
    },
    {
        "kanji": "衆",
        "onyomi": "シュウ,（シュ）",
        "kunyomi": "",
        "english": "masses"
    },
    {
        "kanji": "集",
        "onyomi": "シュウ",
        "kunyomi": "あつ-まる, あつ-める, つど-う",
        "english": "collect"
    },
    {
        "kanji": "愁",
        "onyomi": "シュウ",
        "kunyomi": "うれ-える, うれ-い",
        "english": "distress"
    },
    {
        "kanji": "酬",
        "onyomi": "シュウ",
        "kunyomi": "",
        "english": "repay"
    },
    {
        "kanji": "醜",
        "onyomi": "シュウ",
        "kunyomi": "みにく-い",
        "english": "ugly"
    },
    {
        "kanji": "蹴",
        "onyomi": "シュウ",
        "kunyomi": "け-る",
        "english": "kick"
    },
    {
        "kanji": "襲",
        "onyomi": "シュウ",
        "kunyomi": "おそ-う",
        "english": "attack"
    },
    {
        "kanji": "十",
        "onyomi": "ジュウ, ジッ",
        "kunyomi": "とお, と",
        "english": "ten"
    },
    {
        "kanji": "汁",
        "onyomi": "ジュウ",
        "kunyomi": "しる",
        "english": "soup"
    },
    {
        "kanji": "充",
        "onyomi": "ジュウ",
        "kunyomi": "あ-てる",
        "english": "allot"
    },
    {
        "kanji": "住",
        "onyomi": "ジュウ",
        "kunyomi": "す-む, す-まう",
        "english": "dwelling"
    },
    {
        "kanji": "柔",
        "onyomi": "ジュウ, ニュウ",
        "kunyomi": "やわ-らか, やわ-らかい",
        "english": "tender"
    },
    {
        "kanji": "重",
        "onyomi": "ジュウ, チョウ",
        "kunyomi": "え, おも-い, かさ-ねる, かさ-なる",
        "english": "heavy"
    },
    {
        "kanji": "従",
        "onyomi": "ジュウ,（ショウ）, （ジュ）, ",
        "kunyomi": "したが-う, したが-える",
        "english": "obey"
    },
    {
        "kanji": "渋",
        "onyomi": "ジュウ",
        "kunyomi": "しぶ, しぶ-い, しぶ-る",
        "english": "astringent"
    },
    {
        "kanji": "銃",
        "onyomi": "ジュウ",
        "kunyomi": "",
        "english": "gun"
    },
    {
        "kanji": "獣",
        "onyomi": "ジュウ",
        "kunyomi": "けもの",
        "english": "animal"
    },
    {
        "kanji": "縦",
        "onyomi": "ジュウ",
        "kunyomi": "たて",
        "english": "vertical"
    },
    {
        "kanji": "叔",
        "onyomi": "シュク",
        "kunyomi": "",
        "english": "uncle"
    },
    {
        "kanji": "祝",
        "onyomi": "シュク,（シュウ）",
        "kunyomi": "いわ-う",
        "english": "celebrate"
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
        "kunyomi": "",
        "english": "graceful"
    },
    {
        "kanji": "粛",
        "onyomi": "シュク",
        "kunyomi": "",
        "english": "solemn"
    },
    {
        "kanji": "縮",
        "onyomi": "シュク",
        "kunyomi": "ちぢ-む, ちぢ-まる, ちぢ-める, ちぢ-れる, ちぢ-らす",
        "english": "shrink"
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
        "english": "ripen"
    },
    {
        "kanji": "出",
        "onyomi": "シュツ,（スイ）",
        "kunyomi": "で-る, だ-す",
        "english": "exit"
    },
    {
        "kanji": "述",
        "onyomi": "ジュツ",
        "kunyomi": "の-べる",
        "english": "mention"
    },
    {
        "kanji": "術",
        "onyomi": "ジュツ",
        "kunyomi": "",
        "english": "art"
    },
    {
        "kanji": "俊",
        "onyomi": "シュン",
        "kunyomi": "",
        "english": "genius"
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
        "kunyomi": "またた-く",
        "english": "wink"
    },
    {
        "kanji": "旬",
        "onyomi": "ジュン,（シュン）",
        "kunyomi": "",
        "english": "10-day period (of the month)"
    },
    {
        "kanji": "巡",
        "onyomi": "ジュン",
        "kunyomi": "めぐ-る",
        "english": "patrol"
    },
    {
        "kanji": "盾",
        "onyomi": "ジュン",
        "kunyomi": "たて",
        "english": "shield"
    },
    {
        "kanji": "准",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "quasi-"
    },
    {
        "kanji": "殉",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "martyrdom"
    },
    {
        "kanji": "純",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "genuine"
    },
    {
        "kanji": "循",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "sequential"
    },
    {
        "kanji": "順",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "obey"
    },
    {
        "kanji": "準",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "standard"
    },
    {
        "kanji": "潤",
        "onyomi": "ジュン",
        "kunyomi": "うるお-う, うるお-す, うる-む",
        "english": "wet"
    },
    {
        "kanji": "遵",
        "onyomi": "ジュン",
        "kunyomi": "",
        "english": "abide by"
    },
    {
        "kanji": "処",
        "onyomi": "ショ",
        "kunyomi": "",
        "english": "dispose"
    },
    {
        "kanji": "初",
        "onyomi": "ショ",
        "kunyomi": "はじ-め, はじ-めて, はつ, うい, そ-める",
        "english": "first"
    },
    {
        "kanji": "所",
        "onyomi": "ショ",
        "kunyomi": "ところ",
        "english": "place"
    },
    {
        "kanji": "書",
        "onyomi": "ショ",
        "kunyomi": "か-く",
        "english": "write"
    },
    {
        "kanji": "庶",
        "onyomi": "ショ",
        "kunyomi": "",
        "english": "commoner"
    },
    {
        "kanji": "暑",
        "onyomi": "ショ",
        "kunyomi": "あつ-い",
        "english": "hot"
    },
    {
        "kanji": "署",
        "onyomi": "ショ",
        "kunyomi": "",
        "english": "government office"
    },
    {
        "kanji": "緒",
        "onyomi": "ショ,（チョ）",
        "kunyomi": "お",
        "english": "thong"
    },
    {
        "kanji": "諸",
        "onyomi": "ショ",
        "kunyomi": "",
        "english": "various"
    },
    {
        "kanji": "女",
        "onyomi": "ジョ, ニョ,（ニョウ）",
        "kunyomi": "おんな, め",
        "english": "woman"
    },
    {
        "kanji": "如",
        "onyomi": "ジョ, ニョ",
        "kunyomi": "",
        "english": "likeness"
    },
    {
        "kanji": "助",
        "onyomi": "ジョ",
        "kunyomi": "たす-ける, たす-かる, すけ",
        "english": "help"
    },
    {
        "kanji": "序",
        "onyomi": "ジョ",
        "kunyomi": "",
        "english": "preface"
    },
    {
        "kanji": "叙",
        "onyomi": "ジョ",
        "kunyomi": "",
        "english": "confer"
    },
    {
        "kanji": "徐",
        "onyomi": "ジョ",
        "kunyomi": "",
        "english": "gradually"
    },
    {
        "kanji": "除",
        "onyomi": "ジョ,（ジ）",
        "kunyomi": "のぞ-く",
        "english": "exclude"
    },
    {
        "kanji": "小",
        "onyomi": "ショウ",
        "kunyomi": "ちい-さい, こ, お",
        "english": "small"
    },
    {
        "kanji": "升",
        "onyomi": "ショウ",
        "kunyomi": "ます",
        "english": "measuring box"
    },
    {
        "kanji": "少",
        "onyomi": "ショウ",
        "kunyomi": "すく-ない, すこ-し",
        "english": "few"
    },
    {
        "kanji": "召",
        "onyomi": "ショウ",
        "kunyomi": "め-す",
        "english": "summon"
    },
    {
        "kanji": "匠",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "artisan"
    },
    {
        "kanji": "床",
        "onyomi": "ショウ",
        "kunyomi": "とこ, ゆか",
        "english": "bed"
    },
    {
        "kanji": "抄",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "extract"
    },
    {
        "kanji": "肖",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "resemblance"
    },
    {
        "kanji": "尚",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "esteem"
    },
    {
        "kanji": "招",
        "onyomi": "ショウ",
        "kunyomi": "まね-く",
        "english": "beckon"
    },
    {
        "kanji": "承",
        "onyomi": "ショウ",
        "kunyomi": "うけたまわ-る",
        "english": "acquiesce"
    },
    {
        "kanji": "昇",
        "onyomi": "ショウ",
        "kunyomi": "のぼ-る",
        "english": "rise up"
    },
    {
        "kanji": "松",
        "onyomi": "ショウ",
        "kunyomi": "まつ",
        "english": "pine"
    },
    {
        "kanji": "沼",
        "onyomi": "ショウ",
        "kunyomi": "ぬま",
        "english": "marsh"
    },
    {
        "kanji": "昭",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "shining"
    },
    {
        "kanji": "宵",
        "onyomi": "ショウ",
        "kunyomi": "よい",
        "english": "wee hours"
    },
    {
        "kanji": "将",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "leader"
    },
    {
        "kanji": "消",
        "onyomi": "ショウ",
        "kunyomi": "き-える, け-す",
        "english": "extinguish"
    },
    {
        "kanji": "症",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "symptoms"
    },
    {
        "kanji": "祥",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "auspicious"
    },
    {
        "kanji": "称",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "appellation"
    },
    {
        "kanji": "笑",
        "onyomi": "ショウ",
        "kunyomi": "わら-う, え-む",
        "english": "laugh"
    },
    {
        "kanji": "唱",
        "onyomi": "ショウ",
        "kunyomi": "とな-える",
        "english": "chant"
    },
    {
        "kanji": "商",
        "onyomi": "ショウ",
        "kunyomi": "あきな-う",
        "english": "sell"
    },
    {
        "kanji": "渉",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "ford"
    },
    {
        "kanji": "章",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "chapter"
    },
    {
        "kanji": "紹",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "introduce"
    },
    {
        "kanji": "訟",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "sue"
    },
    {
        "kanji": "勝",
        "onyomi": "ショウ",
        "kunyomi": "か-つ, まさ-る",
        "english": "win"
    },
    {
        "kanji": "掌",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "manipulate"
    },
    {
        "kanji": "晶",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "sparkle"
    },
    {
        "kanji": "焼",
        "onyomi": "ショウ",
        "kunyomi": "や-く, や-ける",
        "english": "bake"
    },
    {
        "kanji": "焦",
        "onyomi": "ショウ",
        "kunyomi": "こ-げる, こ-がす, こ-がれる, あせ-る",
        "english": "char"
    },
    {
        "kanji": "硝",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "nitrate"
    },
    {
        "kanji": "粧",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "cosmetics"
    },
    {
        "kanji": "詔",
        "onyomi": "ショウ",
        "kunyomi": "みことのり",
        "english": "imperial edict"
    },
    {
        "kanji": "証",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "evidence"
    },
    {
        "kanji": "象",
        "onyomi": "ショウ, ゾウ",
        "kunyomi": "",
        "english": "elephant"
    },
    {
        "kanji": "傷",
        "onyomi": "ショウ",
        "kunyomi": "きず, いた-む, いた-める",
        "english": "wound"
    },
    {
        "kanji": "奨",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "exhort"
    },
    {
        "kanji": "照",
        "onyomi": "ショウ",
        "kunyomi": "て-る, て-らす, て-れる",
        "english": "illuminate"
    },
    {
        "kanji": "詳",
        "onyomi": "ショウ",
        "kunyomi": "くわ-しい",
        "english": "detailed"
    },
    {
        "kanji": "彰",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "patent"
    },
    {
        "kanji": "障",
        "onyomi": "ショウ",
        "kunyomi": "さわ-る",
        "english": "hurt"
    },
    {
        "kanji": "憧",
        "onyomi": "ショウ",
        "kunyomi": "あこが-れる",
        "english": "desire"
    },
    {
        "kanji": "衝",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "collide"
    },
    {
        "kanji": "賞",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "prize"
    },
    {
        "kanji": "償",
        "onyomi": "ショウ",
        "kunyomi": "つぐな-う",
        "english": "reparation"
    },
    {
        "kanji": "礁",
        "onyomi": "ショウ",
        "kunyomi": "",
        "english": "reef"
    },
    {
        "kanji": "鐘",
        "onyomi": "ショウ",
        "kunyomi": "かね",
        "english": "bell"
    },
    {
        "kanji": "上",
        "onyomi": "ジョウ,（ショウ）",
        "kunyomi": "うえ, （うわ）, かみ, あ-げる, あ-がる, のぼ-る, のぼ-せる, のぼ-す",
        "english": "up"
    },
    {
        "kanji": "丈",
        "onyomi": "ジョウ",
        "kunyomi": "たけ",
        "english": "length"
    },
    {
        "kanji": "冗",
        "onyomi": "ジョウ",
        "kunyomi": "",
        "english": "superfluous"
    },
    {
        "kanji": "条",
        "onyomi": "ジョウ",
        "kunyomi": "",
        "english": "clause"
    },
    {
        "kanji": "状",
        "onyomi": "ジョウ",
        "kunyomi": "",
        "english": "form"
    },
    {
        "kanji": "乗",
        "onyomi": "ジョウ",
        "kunyomi": "の-る, の-せる",
        "english": "ride"
    },
    {
        "kanji": "城",
        "onyomi": "ジョウ",
        "kunyomi": "しろ",
        "english": "castle"
    },
    {
        "kanji": "浄",
        "onyomi": "ジョウ",
        "kunyomi": "",
        "english": "clean"
    },
    {
        "kanji": "剰",
        "onyomi": "ジョウ",
        "kunyomi": "",
        "english": "surplus"
    },
    {
        "kanji": "常",
        "onyomi": "ジョウ",
        "kunyomi": "つね, とこ",
        "english": "normal"
    },
    {
        "kanji": "情",
        "onyomi": "ジョウ,（セイ）",
        "kunyomi": "なさ-け",
        "english": "feelings"
    },
    {
        "kanji": "場",
        "onyomi": "ジョウ",
        "kunyomi": "ば",
        "english": "place"
    },
    {
        "kanji": "畳",
        "onyomi": "ジョウ",
        "kunyomi": "たた-む, たたみ",
        "english": "tatami mat"
    },
    {
        "kanji": "蒸",
        "onyomi": "ジョウ",
        "kunyomi": "む-す, む-れる, む-らす",
        "english": "steam"
    },
    {
        "kanji": "縄",
        "onyomi": "ジョウ",
        "kunyomi": "なわ",
        "english": "straw rope"
    },
    {
        "kanji": "壌",
        "onyomi": "ジョウ",
        "kunyomi": "",
        "english": "lot"
    },
    {
        "kanji": "嬢",
        "onyomi": "ジョウ",
        "kunyomi": "",
        "english": "lass"
    },
    {
        "kanji": "錠",
        "onyomi": "ジョウ",
        "kunyomi": "",
        "english": "lock"
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
        "kanji": "色",
        "onyomi": "ショク, シキ",
        "kunyomi": "いろ",
        "english": "color"
    },
    {
        "kanji": "拭",
        "onyomi": "ショク",
        "kunyomi": "ふ-く, ぬぐ-う",
        "english": "wipe"
    },
    {
        "kanji": "食",
        "onyomi": "ショク,（ジキ）",
        "kunyomi": "く-う, く-らう, た-べる",
        "english": "eat, meal"
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
        "kanji": "飾",
        "onyomi": "ショク",
        "kunyomi": "かざ-る",
        "english": "decorate"
    },
    {
        "kanji": "触",
        "onyomi": "ショク",
        "kunyomi": "ふ-れる, さわ-る",
        "english": "contact"
    },
    {
        "kanji": "嘱",
        "onyomi": "ショク",
        "kunyomi": "",
        "english": "entrust"
    },
    {
        "kanji": "織",
        "onyomi": "ショク, シキ",
        "kunyomi": "お-る",
        "english": "weave"
    },
    {
        "kanji": "職",
        "onyomi": "ショク",
        "kunyomi": "",
        "english": "employment"
    },
    {
        "kanji": "辱",
        "onyomi": "ジョク",
        "kunyomi": "はずかし-める",
        "english": "embarrass"
    },
    {
        "kanji": "尻",
        "onyomi": "",
        "kunyomi": "しり",
        "english": "buttocks"
    },
    {
        "kanji": "心",
        "onyomi": "シン",
        "kunyomi": "こころ",
        "english": "heart"
    },
    {
        "kanji": "申",
        "onyomi": "シン",
        "kunyomi": "もう-す",
        "english": "say"
    },
    {
        "kanji": "伸",
        "onyomi": "シン",
        "kunyomi": "の-びる, の-ばす, の-べる",
        "english": "lengthen"
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
        "english": "core"
    },
    {
        "kanji": "身",
        "onyomi": "シン",
        "kunyomi": "み",
        "english": "body"
    },
    {
        "kanji": "辛",
        "onyomi": "シン",
        "kunyomi": "から-い",
        "english": "spicy"
    },
    {
        "kanji": "侵",
        "onyomi": "シン",
        "kunyomi": "おか-す",
        "english": "encroach"
    },
    {
        "kanji": "信",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "trust"
    },
    {
        "kanji": "津",
        "onyomi": "シン",
        "kunyomi": "つ",
        "english": "haven"
    },
    {
        "kanji": "神",
        "onyomi": "シン, ジン",
        "kunyomi": "かみ, （かん）, （こう）",
        "english": "god"
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
        "kanji": "振",
        "onyomi": "シン",
        "kunyomi": "ふ-る, ふ-るう, ふ-れる",
        "english": "shake"
    },
    {
        "kanji": "浸",
        "onyomi": "シン",
        "kunyomi": "ひた-す, ひた-る",
        "english": "immersed"
    },
    {
        "kanji": "真",
        "onyomi": "シン",
        "kunyomi": "ま",
        "english": "true"
    },
    {
        "kanji": "針",
        "onyomi": "シン",
        "kunyomi": "はり",
        "english": "needle"
    },
    {
        "kanji": "深",
        "onyomi": "シン",
        "kunyomi": "ふか-い, ふか-まる, ふか-める",
        "english": "deep"
    },
    {
        "kanji": "紳",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "sire"
    },
    {
        "kanji": "進",
        "onyomi": "シン",
        "kunyomi": "すす-む, すす-める",
        "english": "advance"
    },
    {
        "kanji": "森",
        "onyomi": "シン",
        "kunyomi": "もり",
        "english": "forest"
    },
    {
        "kanji": "診",
        "onyomi": "シン",
        "kunyomi": "み-る",
        "english": "checkup"
    },
    {
        "kanji": "寝",
        "onyomi": "シン",
        "kunyomi": "ね-る, ね-かす",
        "english": "lie down"
    },
    {
        "kanji": "慎",
        "onyomi": "シン",
        "kunyomi": "つつし-む",
        "english": "humility"
    },
    {
        "kanji": "新",
        "onyomi": "シン",
        "kunyomi": "あたら-しい, あら-た, にい",
        "english": "new"
    },
    {
        "kanji": "審",
        "onyomi": "シン",
        "kunyomi": "",
        "english": "examine"
    },
    {
        "kanji": "震",
        "onyomi": "シン",
        "kunyomi": "ふる-う, ふる-える",
        "english": "quake"
    },
    {
        "kanji": "薪",
        "onyomi": "シン",
        "kunyomi": "たきぎ",
        "english": "fuel"
    },
    {
        "kanji": "親",
        "onyomi": "シン",
        "kunyomi": "おや, した-しい, した-しむ",
        "english": "parent"
    },
    {
        "kanji": "人",
        "onyomi": "ジン, ニン",
        "kunyomi": "ひと",
        "english": "person"
    },
    {
        "kanji": "刃",
        "onyomi": "ジン",
        "kunyomi": "は",
        "english": "blade"
    },
    {
        "kanji": "仁",
        "onyomi": "ジン,（ニ）",
        "kunyomi": "",
        "english": "humanity"
    },
    {
        "kanji": "尽",
        "onyomi": "ジン",
        "kunyomi": "つ-くす, つ-きる, つ-かす",
        "english": "exhaust"
    },
    {
        "kanji": "迅",
        "onyomi": "ジン",
        "kunyomi": "",
        "english": "swift"
    },
    {
        "kanji": "甚",
        "onyomi": "ジン",
        "kunyomi": "はなは-だ, はなは-だしい",
        "english": "tremendously"
    },
    {
        "kanji": "陣",
        "onyomi": "ジン",
        "kunyomi": "",
        "english": "camp"
    },
    {
        "kanji": "尋",
        "onyomi": "ジン",
        "kunyomi": "たず-ねる",
        "english": "inquire"
    },
    {
        "kanji": "腎",
        "onyomi": "ジン",
        "kunyomi": "",
        "english": "kidney"
    },
    {
        "kanji": "須",
        "onyomi": "ス",
        "kunyomi": "",
        "english": "by all means"
    },
    {
        "kanji": "図",
        "onyomi": "ズ, ト",
        "kunyomi": "はか-る",
        "english": "diagram"
    },
    {
        "kanji": "水",
        "onyomi": "スイ",
        "kunyomi": "みず",
        "english": "water"
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
        "kunyomi": "た-れる, た-らす",
        "english": "droop"
    },
    {
        "kanji": "炊",
        "onyomi": "スイ",
        "kunyomi": "た-く",
        "english": "cook"
    },
    {
        "kanji": "帥",
        "onyomi": "スイ",
        "kunyomi": "",
        "english": "commander"
    },
    {
        "kanji": "粋",
        "onyomi": "スイ",
        "kunyomi": "いき",
        "english": "chic"
    },
    {
        "kanji": "衰",
        "onyomi": "スイ",
        "kunyomi": "おとろ-える",
        "english": "decline"
    },
    {
        "kanji": "推",
        "onyomi": "スイ",
        "kunyomi": "お-す",
        "english": "infer"
    },
    {
        "kanji": "酔",
        "onyomi": "スイ",
        "kunyomi": "よ-う",
        "english": "drunk"
    },
    {
        "kanji": "遂",
        "onyomi": "スイ",
        "kunyomi": "と-げる",
        "english": "consummate"
    },
    {
        "kanji": "睡",
        "onyomi": "スイ",
        "kunyomi": "",
        "english": "drowsy"
    },
    {
        "kanji": "穂",
        "onyomi": "スイ",
        "kunyomi": "ほ",
        "english": "ear"
    },
    {
        "kanji": "錘",
        "onyomi": "スイ",
        "kunyomi": "つむ",
        "english": "spindle"
    },
    {
        "kanji": "随",
        "onyomi": "ズイ",
        "kunyomi": "",
        "english": "follow"
    },
    {
        "kanji": "髄",
        "onyomi": "ズイ",
        "kunyomi": "",
        "english": "marrow"
    },
    {
        "kanji": "枢",
        "onyomi": "スウ",
        "kunyomi": "",
        "english": "hinge"
    },
    {
        "kanji": "崇",
        "onyomi": "スウ",
        "kunyomi": "",
        "english": "adore"
    },
    {
        "kanji": "数",
        "onyomi": "スウ,（ス）",
        "kunyomi": " かず, かぞ-える",
        "english": "number"
    },
    {
        "kanji": "据",
        "onyomi": "",
        "kunyomi": "す-える, す-わる",
        "english": "set"
    },
    {
        "kanji": "杉",
        "onyomi": "",
        "kunyomi": "すぎ",
        "english": "cedar"
    },
    {
        "kanji": "裾",
        "onyomi": "",
        "kunyomi": "すそ",
        "english": "cuff"
    },
    {
        "kanji": "寸",
        "onyomi": "スン",
        "kunyomi": "",
        "english": "measurement"
    },
    {
        "kanji": "瀬",
        "onyomi": "",
        "kunyomi": "せ",
        "english": "rapids"
    },
    {
        "kanji": "是",
        "onyomi": "ゼ",
        "kunyomi": "",
        "english": "just so"
    },
    {
        "kanji": "井",
        "onyomi": "セイ,（ショウ）",
        "kunyomi": "い",
        "english": "well"
    },
    {
        "kanji": "世",
        "onyomi": "セイ, セ",
        "kunyomi": "よ",
        "english": "world"
    },
    {
        "kanji": "正",
        "onyomi": "セイ, ショウ",
        "kunyomi": "ただ-しい, ただ-す, まさ",
        "english": "correct"
    },
    {
        "kanji": "生",
        "onyomi": "セイ, ショウ",
        "kunyomi": "い-きる, い-かす, い-ける, う-まれる, う-む, お-う, は-える, は-やす, き, なま",
        "english": "life"
    },
    {
        "kanji": "成",
        "onyomi": "セイ,（ジョウ）",
        "kunyomi": "な-る, な-す",
        "english": "become"
    },
    {
        "kanji": "西",
        "onyomi": "セイ, サイ",
        "kunyomi": "にし",
        "english": "west"
    },
    {
        "kanji": "声",
        "onyomi": "セイ,（ショウ）",
        "kunyomi": "こえ, （こわ）",
        "english": "voice"
    },
    {
        "kanji": "制",
        "onyomi": "セイ",
        "kunyomi": "",
        "english": "control"
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
        "kunyomi": "",
        "english": "gender"
    },
    {
        "kanji": "青",
        "onyomi": "セイ,（ショウ）",
        "kunyomi": "あお, あお-い",
        "english": "blue"
    },
    {
        "kanji": "斉",
        "onyomi": "セイ",
        "kunyomi": "",
        "english": "adjusted"
    },
    {
        "kanji": "政",
        "onyomi": "セイ,（ショウ）",
        "kunyomi": "まつりごと",
        "english": "politics"
    },
    {
        "kanji": "星",
        "onyomi": "セイ,（ショウ）",
        "kunyomi": "ほし",
        "english": "star"
    },
    {
        "kanji": "牲",
        "onyomi": "セイ",
        "kunyomi": "",
        "english": "animal sacrifice"
    },
    {
        "kanji": "省",
        "onyomi": "セイ, ショウ",
        "kunyomi": "かえり-みる, はぶ-く",
        "english": "government ministry"
    },
    {
        "kanji": "凄",
        "onyomi": "セイ",
        "kunyomi": "",
        "english": "uncanny"
    },
    {
        "kanji": "逝",
        "onyomi": "セイ",
        "kunyomi": "ゆ-く, い-く",
        "english": "departed"
    },
    {
        "kanji": "清",
        "onyomi": "セイ,（ショウ）",
        "kunyomi": "きよ-い, きよ-まる, きよ-める",
        "english": "pure"
    },
    {
        "kanji": "盛",
        "onyomi": "セイ,（ジョウ）",
        "kunyomi": "も-る, さか-る, さか-ん",
        "english": "prosper"
    },
    {
        "kanji": "婿",
        "onyomi": "セイ",
        "kunyomi": "むこ",
        "english": "bridegroom"
    },
    {
        "kanji": "晴",
        "onyomi": "セイ",
        "kunyomi": "は-れる, は-らす",
        "english": "clear up"
    },
    {
        "kanji": "勢",
        "onyomi": "セイ",
        "kunyomi": "いきお-い",
        "english": "power"
    },
    {
        "kanji": "聖",
        "onyomi": "セイ",
        "kunyomi": "",
        "english": "holy"
    },
    {
        "kanji": "誠",
        "onyomi": "セイ",
        "kunyomi": "まこと",
        "english": "sincerity"
    },
    {
        "kanji": "精",
        "onyomi": "セイ,（ショウ）",
        "kunyomi": "",
        "english": "refined"
    },
    {
        "kanji": "製",
        "onyomi": "セイ",
        "kunyomi": "",
        "english": "manufacture"
    },
    {
        "kanji": "誓",
        "onyomi": "セイ",
        "kunyomi": "ちか-う",
        "english": "vow"
    },
    {
        "kanji": "静",
        "onyomi": "セイ,（ジョウ）",
        "kunyomi": "しず, しず-か, しず-まる, しず-める",
        "english": "quiet"
    },
    {
        "kanji": "請",
        "onyomi": "セイ,（シン）",
        "kunyomi": "こ-う, う-ける",
        "english": "solicit"
    },
    {
        "kanji": "整",
        "onyomi": "セイ",
        "kunyomi": "ととの-える, ととの-う",
        "english": "put in order"
    },
    {
        "kanji": "醒",
        "onyomi": "セイ",
        "kunyomi": "",
        "english": "be disillusioned"
    },
    {
        "kanji": "税",
        "onyomi": "ゼイ",
        "kunyomi": "",
        "english": "tax"
    },
    {
        "kanji": "夕",
        "onyomi": "セキ",
        "kunyomi": "ゆう",
        "english": "evening"
    },
    {
        "kanji": "斥",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "reject"
    },
    {
        "kanji": "石",
        "onyomi": "セキ,（シャク）, （コク）",
        "kunyomi": "いし",
        "english": "stone"
    },
    {
        "kanji": "赤",
        "onyomi": "セキ,（シャク）",
        "kunyomi": "あか, あか-い, あか-らむ, あか-らめる",
        "english": "red"
    },
    {
        "kanji": "昔",
        "onyomi": "セキ,（シャク）",
        "kunyomi": "むかし",
        "english": "long ago"
    },
    {
        "kanji": "析",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "chop"
    },
    {
        "kanji": "席",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "seat"
    },
    {
        "kanji": "脊",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "stature"
    },
    {
        "kanji": "隻",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "vessels"
    },
    {
        "kanji": "惜",
        "onyomi": "セキ",
        "kunyomi": "お-しい, お-しむ",
        "english": "pity"
    },
    {
        "kanji": "戚",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "grieve"
    },
    {
        "kanji": "責",
        "onyomi": "セキ",
        "kunyomi": "せ-める",
        "english": "blame"
    },
    {
        "kanji": "跡",
        "onyomi": "セキ",
        "kunyomi": "あと",
        "english": "tracks"
    },
    {
        "kanji": "積",
        "onyomi": "セキ",
        "kunyomi": "つ-む, つ-もる",
        "english": "accumulate"
    },
    {
        "kanji": "績",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "exploits"
    },
    {
        "kanji": "籍",
        "onyomi": "セキ",
        "kunyomi": "",
        "english": "enroll"
    },
    {
        "kanji": "切",
        "onyomi": "セツ,（サイ）",
        "kunyomi": "き-る, き-れる",
        "english": "cut"
    },
    {
        "kanji": "折",
        "onyomi": "セツ",
        "kunyomi": "お-る, おり, お-れる",
        "english": "fold"
    },
    {
        "kanji": "拙",
        "onyomi": "セツ",
        "kunyomi": "つたな-い",
        "english": "bungling"
    },
    {
        "kanji": "窃",
        "onyomi": "セツ",
        "kunyomi": "",
        "english": "stealth"
    },
    {
        "kanji": "接",
        "onyomi": "セツ",
        "kunyomi": "つ-ぐ",
        "english": "contact"
    },
    {
        "kanji": "設",
        "onyomi": "セツ",
        "kunyomi": "もう-ける",
        "english": "establish"
    },
    {
        "kanji": "雪",
        "onyomi": "セツ",
        "kunyomi": "ゆき",
        "english": "snow"
    },
    {
        "kanji": "摂",
        "onyomi": "セツ",
        "kunyomi": "",
        "english": "vicarious"
    },
    {
        "kanji": "節",
        "onyomi": "セツ,（セチ）",
        "kunyomi": "ふし",
        "english": "node"
    },
    {
        "kanji": "説",
        "onyomi": "セツ,（ゼイ）",
        "kunyomi": "と-く",
        "english": "theory"
    },
    {
        "kanji": "舌",
        "onyomi": "ゼツ",
        "kunyomi": "した",
        "english": "tongue"
    },
    {
        "kanji": "絶",
        "onyomi": "ゼツ",
        "kunyomi": "た-える, た-やす, た-つ",
        "english": "discontinue"
    },
    {
        "kanji": "千",
        "onyomi": "セン",
        "kunyomi": "ち",
        "english": "thousand"
    },
    {
        "kanji": "川",
        "onyomi": "セン",
        "kunyomi": "かわ",
        "english": "river"
    },
    {
        "kanji": "仙",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "hermit"
    },
    {
        "kanji": "占",
        "onyomi": "セン",
        "kunyomi": "し-める, うらな-う",
        "english": "fortune telling"
    },
    {
        "kanji": "先",
        "onyomi": "セン",
        "kunyomi": "さき",
        "english": "previous"
    },
    {
        "kanji": "宣",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "proclaim"
    },
    {
        "kanji": "専",
        "onyomi": "セン",
        "kunyomi": "もっぱ-ら",
        "english": "specialty"
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
        "kanji": "扇",
        "onyomi": "セン",
        "kunyomi": "おうぎ",
        "english": "fan"
    },
    {
        "kanji": "栓",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "plug"
    },
    {
        "kanji": "旋",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "rotation"
    },
    {
        "kanji": "船",
        "onyomi": "セン",
        "kunyomi": "ふね, （ふな）",
        "english": "boat"
    },
    {
        "kanji": "戦",
        "onyomi": "セン",
        "kunyomi": "いくさ, たたか-う",
        "english": "war"
    },
    {
        "kanji": "煎",
        "onyomi": "セン",
        "kunyomi": "い-る",
        "english": "boil down, roast"
    },
    {
        "kanji": "羨",
        "onyomi": "セン",
        "kunyomi": "うらや-む, うらや-ましい",
        "english": "envy"
    },
    {
        "kanji": "腺",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "gland"
    },
    {
        "kanji": "詮",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "examine"
    },
    {
        "kanji": "践",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "tread"
    },
    {
        "kanji": "箋",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "label, tag"
    },
    {
        "kanji": "銭",
        "onyomi": "セン",
        "kunyomi": "ぜに",
        "english": "coin"
    },
    {
        "kanji": "銑",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "pig iron"
    },
    {
        "kanji": "潜",
        "onyomi": "セン",
        "kunyomi": "ひそ-む, もぐ-る",
        "english": "submerge"
    },
    {
        "kanji": "線",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "line"
    },
    {
        "kanji": "遷",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "transition"
    },
    {
        "kanji": "選",
        "onyomi": "セン",
        "kunyomi": "えら-ぶ",
        "english": "choose"
    },
    {
        "kanji": "薦",
        "onyomi": "セン",
        "kunyomi": "すす-める",
        "english": "recommend"
    },
    {
        "kanji": "繊",
        "onyomi": "セン",
        "kunyomi": "",
        "english": "slender"
    },
    {
        "kanji": "鮮",
        "onyomi": "セン",
        "kunyomi": "あざ-やか",
        "english": "fresh"
    },
    {
        "kanji": "全",
        "onyomi": "ゼン",
        "kunyomi": "まった-く, すべ-て",
        "english": "whole"
    },
    {
        "kanji": "前",
        "onyomi": "ゼン",
        "kunyomi": "まえ",
        "english": "in front"
    },
    {
        "kanji": "善",
        "onyomi": "ゼン",
        "kunyomi": "よ-い",
        "english": "good"
    },
    {
        "kanji": "然",
        "onyomi": "ゼン, ネン",
        "kunyomi": "",
        "english": "so"
    },
    {
        "kanji": "禅",
        "onyomi": "ゼン",
        "kunyomi": "",
        "english": "Zen"
    },
    {
        "kanji": "漸",
        "onyomi": "ゼン",
        "kunyomi": "",
        "english": "steadily"
    },
    {
        "kanji": "膳",
        "onyomi": "ゼン",
        "kunyomi": "",
        "english": "tray"
    },
    {
        "kanji": "繕",
        "onyomi": "ゼン",
        "kunyomi": "つくろ-う",
        "english": "darning"
    },
    {
        "kanji": "狙",
        "onyomi": "ソ",
        "kunyomi": "ねら-う",
        "english": "aim at"
    },
    {
        "kanji": "阻",
        "onyomi": "ソ",
        "kunyomi": "はば-む",
        "english": "thwart"
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
        "kanji": "素",
        "onyomi": "ソ, ス",
        "kunyomi": "",
        "english": "elementary"
    },
    {
        "kanji": "措",
        "onyomi": "ソ",
        "kunyomi": "",
        "english": "set aside"
    },
    {
        "kanji": "粗",
        "onyomi": "ソ",
        "kunyomi": "あら-い",
        "english": "coarse"
    },
    {
        "kanji": "組",
        "onyomi": "ソ",
        "kunyomi": "く-む, くみ",
        "english": "association"
    },
    {
        "kanji": "疎",
        "onyomi": "ソ",
        "kunyomi": "うと-い, うと-む",
        "english": "alienate"
    },
    {
        "kanji": "訴",
        "onyomi": "ソ",
        "kunyomi": "うった-える",
        "english": "sue"
    },
    {
        "kanji": "塑",
        "onyomi": "ソ",
        "kunyomi": "",
        "english": "model"
    },
    {
        "kanji": "遡",
        "onyomi": "ソ",
        "kunyomi": "さかのぼ-る",
        "english": "go upstream, trace back"
    },
    {
        "kanji": "礎",
        "onyomi": "ソ",
        "kunyomi": "いしずえ",
        "english": "cornerstone"
    },
    {
        "kanji": "双",
        "onyomi": "ソウ",
        "kunyomi": "ふた",
        "english": "pair"
    },
    {
        "kanji": "壮",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "robust"
    },
    {
        "kanji": "早",
        "onyomi": "ソウ,（サッ）",
        "kunyomi": "はや-い, はや-まる, はや-める",
        "english": "early"
    },
    {
        "kanji": "争",
        "onyomi": "ソウ",
        "kunyomi": "あらそ-う",
        "english": "conflict"
    },
    {
        "kanji": "走",
        "onyomi": "ソウ",
        "kunyomi": "はし-る",
        "english": "run"
    },
    {
        "kanji": "奏",
        "onyomi": "ソウ",
        "kunyomi": "かな-でる",
        "english": "play music"
    },
    {
        "kanji": "相",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "あい",
        "english": "mutual"
    },
    {
        "kanji": "荘",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "villa"
    },
    {
        "kanji": "草",
        "onyomi": "ソウ",
        "kunyomi": "くさ",
        "english": "grass"
    },
    {
        "kanji": "送",
        "onyomi": "ソウ",
        "kunyomi": "おく-る",
        "english": "send"
    },
    {
        "kanji": "倉",
        "onyomi": "ソウ",
        "kunyomi": "くら",
        "english": "warehouse"
    },
    {
        "kanji": "捜",
        "onyomi": "ソウ",
        "kunyomi": "さが-す",
        "english": "search"
    },
    {
        "kanji": "挿",
        "onyomi": "ソウ",
        "kunyomi": "さ-す",
        "english": "insert"
    },
    {
        "kanji": "桑",
        "onyomi": "ソウ",
        "kunyomi": "くわ",
        "english": "mulberry"
    },
    {
        "kanji": "巣",
        "onyomi": "ソウ",
        "kunyomi": "す",
        "english": "nest"
    },
    {
        "kanji": "掃",
        "onyomi": "ソウ",
        "kunyomi": "は-く",
        "english": "sweep"
    },
    {
        "kanji": "曹",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "cadet"
    },
    {
        "kanji": "曽",
        "onyomi": "ソウ,（ゾ）",
        "kunyomi": "",
        "english": "formerly"
    },
    {
        "kanji": "爽",
        "onyomi": "ソウ",
        "kunyomi": "さわ-やか",
        "english": "refreshing"
    },
    {
        "kanji": "窓",
        "onyomi": "ソウ",
        "kunyomi": "まど",
        "english": "window"
    },
    {
        "kanji": "創",
        "onyomi": "ソウ",
        "kunyomi": "つく-る",
        "english": "create"
    },
    {
        "kanji": "喪",
        "onyomi": "ソウ",
        "kunyomi": "も",
        "english": "miss"
    },
    {
        "kanji": "痩",
        "onyomi": "ソウ",
        "kunyomi": "や-せる",
        "english": "get thin"
    },
    {
        "kanji": "葬",
        "onyomi": "ソウ",
        "kunyomi": "ほうむ-る",
        "english": "interment"
    },
    {
        "kanji": "装",
        "onyomi": "ソウ, ショウ",
        "kunyomi": "よそお-う",
        "english": "attire"
    },
    {
        "kanji": "僧",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "Buddhist priest"
    },
    {
        "kanji": "想",
        "onyomi": "ソウ,（ソ）",
        "kunyomi": "",
        "english": "concept"
    },
    {
        "kanji": "層",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "stratum"
    },
    {
        "kanji": "総",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "whole"
    },
    {
        "kanji": "遭",
        "onyomi": "ソウ",
        "kunyomi": "あ-う",
        "english": "encounter"
    },
    {
        "kanji": "槽",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "vat"
    },
    {
        "kanji": "踪",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "remains"
    },
    {
        "kanji": "操",
        "onyomi": "ソウ",
        "kunyomi": "みさお, あやつ-る",
        "english": "maneuver"
    },
    {
        "kanji": "燥",
        "onyomi": "ソウ",
        "kunyomi": "",
        "english": "parch"
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
        "kunyomi": "さわ-ぐ",
        "english": "boisterous"
    },
    {
        "kanji": "藻",
        "onyomi": "ソウ",
        "kunyomi": "も",
        "english": "seaweed"
    },
    {
        "kanji": "造",
        "onyomi": "ゾウ",
        "kunyomi": "つく-る",
        "english": "create"
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
        "kunyomi": "ま-す, ふ-える, ふ-やす",
        "english": "increase"
    },
    {
        "kanji": "憎",
        "onyomi": "ゾウ",
        "kunyomi": "にく-む, にく-い, にく-らしい, にく-しみ",
        "english": "hate"
    },
    {
        "kanji": "蔵",
        "onyomi": "ゾウ",
        "kunyomi": "くら",
        "english": "warehouse"
    },
    {
        "kanji": "贈",
        "onyomi": "ゾウ,（ソウ）",
        "kunyomi": "おく-る",
        "english": "presents"
    },
    {
        "kanji": "臓",
        "onyomi": "ゾウ",
        "kunyomi": "",
        "english": "entrails"
    },
    {
        "kanji": "即",
        "onyomi": "ソク",
        "kunyomi": "",
        "english": "instant"
    },
    {
        "kanji": "束",
        "onyomi": "ソク",
        "kunyomi": "たば",
        "english": "bundle"
    },
    {
        "kanji": "足",
        "onyomi": "ソク",
        "kunyomi": "あし, た-りる, た-る, た-す",
        "english": "foot"
    },
    {
        "kanji": "促",
        "onyomi": "ソク",
        "kunyomi": "うなが-す",
        "english": "stimulate"
    },
    {
        "kanji": "則",
        "onyomi": "ソク",
        "kunyomi": "",
        "english": "rule"
    },
    {
        "kanji": "息",
        "onyomi": "ソク",
        "kunyomi": "いき",
        "english": "breath"
    },
    {
        "kanji": "捉",
        "onyomi": "ソク",
        "kunyomi": "とら-える",
        "english": "capture"
    },
    {
        "kanji": "速",
        "onyomi": "ソク",
        "kunyomi": "はや-い, はや-める, はや-まる, すみ-やか",
        "english": "fast"
    },
    {
        "kanji": "側",
        "onyomi": "ソク",
        "kunyomi": "がわ",
        "english": "side"
    },
    {
        "kanji": "測",
        "onyomi": "ソク",
        "kunyomi": "はか-る",
        "english": "fathom"
    },
    {
        "kanji": "俗",
        "onyomi": "ゾク",
        "kunyomi": "",
        "english": "vulgar"
    },
    {
        "kanji": "族",
        "onyomi": "ゾク",
        "kunyomi": "",
        "english": "tribe"
    },
    {
        "kanji": "属",
        "onyomi": "ゾク",
        "kunyomi": "",
        "english": "belong"
    },
    {
        "kanji": "賊",
        "onyomi": "ゾク",
        "kunyomi": "",
        "english": "burglar"
    },
    {
        "kanji": "続",
        "onyomi": "ゾク",
        "kunyomi": "つづ-く, つづ-ける",
        "english": "continue"
    },
    {
        "kanji": "卒",
        "onyomi": "ソツ",
        "kunyomi": "",
        "english": "graduate"
    },
    {
        "kanji": "率",
        "onyomi": "ソツ, リツ",
        "kunyomi": "ひき-いる",
        "english": "rate"
    },
    {
        "kanji": "存",
        "onyomi": "ソン, ゾン",
        "kunyomi": "",
        "english": "suppose"
    },
    {
        "kanji": "村",
        "onyomi": "ソン",
        "kunyomi": "むら",
        "english": "village"
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
        "kunyomi": "そこ-なう, そこ-ねる",
        "english": "loss"
    },
    {
        "kanji": "遜",
        "onyomi": "ソン",
        "kunyomi": "",
        "english": "modest"
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
        "kunyomi": "おお-い",
        "english": "many"
    },
    {
        "kanji": "汰",
        "onyomi": "タ",
        "kunyomi": "",
        "english": "luxury"
    },
    {
        "kanji": "打",
        "onyomi": "ダ",
        "kunyomi": "う-つ",
        "english": "hit"
    },
    {
        "kanji": "妥",
        "onyomi": "ダ",
        "kunyomi": "",
        "english": "gentle"
    },
    {
        "kanji": "唾",
        "onyomi": "ダ",
        "kunyomi": "つば",
        "english": "saliva"
    },
    {
        "kanji": "堕",
        "onyomi": "ダ",
        "kunyomi": "",
        "english": "degenerate"
    },
    {
        "kanji": "惰",
        "onyomi": "ダ",
        "kunyomi": "",
        "english": "lazy"
    },
    {
        "kanji": "駄",
        "onyomi": "ダ",
        "kunyomi": "",
        "english": "burdensome"
    },
    {
        "kanji": "太",
        "onyomi": "タイ, タ",
        "kunyomi": "ふと-い, ふと-る",
        "english": "thick"
    },
    {
        "kanji": "対",
        "onyomi": "タイ, ツイ",
        "kunyomi": "",
        "english": "opposite"
    },
    {
        "kanji": "体",
        "onyomi": "タイ, テイ",
        "kunyomi": "からだ",
        "english": "body"
    },
    {
        "kanji": "耐",
        "onyomi": "タイ",
        "kunyomi": "た-える",
        "english": "resistant"
    },
    {
        "kanji": "待",
        "onyomi": "タイ",
        "kunyomi": "ま-つ",
        "english": "wait"
    },
    {
        "kanji": "怠",
        "onyomi": "タイ",
        "kunyomi": "おこた-る, なま-ける",
        "english": "neglect"
    },
    {
        "kanji": "胎",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "womb"
    },
    {
        "kanji": "退",
        "onyomi": "タイ",
        "kunyomi": "しりぞ-く, しりぞ-ける",
        "english": "retreat"
    },
    {
        "kanji": "帯",
        "onyomi": "タイ",
        "kunyomi": "お-びる, おび",
        "english": "sash"
    },
    {
        "kanji": "泰",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "peaceful"
    },
    {
        "kanji": "堆",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "piled high"
    },
    {
        "kanji": "袋",
        "onyomi": "タイ",
        "kunyomi": "ふくろ",
        "english": "sack"
    },
    {
        "kanji": "逮",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "apprehend"
    },
    {
        "kanji": "替",
        "onyomi": "タイ",
        "kunyomi": "か-える, か-わる",
        "english": "exchange"
    },
    {
        "kanji": "貸",
        "onyomi": "タイ",
        "kunyomi": "か-す",
        "english": "lend"
    },
    {
        "kanji": "隊",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "group"
    },
    {
        "kanji": "滞",
        "onyomi": "タイ",
        "kunyomi": "とどこお-る",
        "english": "stagnate"
    },
    {
        "kanji": "態",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "condition"
    },
    {
        "kanji": "戴",
        "onyomi": "タイ",
        "kunyomi": "",
        "english": "be crowned with"
    },
    {
        "kanji": "大",
        "onyomi": "ダイ, タイ",
        "kunyomi": "おお, おお-きい, おお-いに",
        "english": "large"
    },
    {
        "kanji": "代",
        "onyomi": "ダイ, タイ",
        "kunyomi": "か-わる, か-える, よ, しろ",
        "english": "substitute"
    },
    {
        "kanji": "台",
        "onyomi": "ダイ, タイ",
        "kunyomi": "",
        "english": "pedestal"
    },
    {
        "kanji": "第",
        "onyomi": "ダイ",
        "kunyomi": "",
        "english": "ordinal number prefix"
    },
    {
        "kanji": "題",
        "onyomi": "ダイ",
        "kunyomi": "",
        "english": "topic"
    },
    {
        "kanji": "滝",
        "onyomi": "",
        "kunyomi": "たき",
        "english": "waterfall"
    },
    {
        "kanji": "宅",
        "onyomi": "タク",
        "kunyomi": "",
        "english": "home"
    },
    {
        "kanji": "択",
        "onyomi": "タク",
        "kunyomi": "",
        "english": "choose"
    },
    {
        "kanji": "沢",
        "onyomi": "タク",
        "kunyomi": "さわ",
        "english": "swamp"
    },
    {
        "kanji": "卓",
        "onyomi": "タク",
        "kunyomi": "",
        "english": "eminent"
    },
    {
        "kanji": "拓",
        "onyomi": "タク",
        "kunyomi": "",
        "english": "clear (the land)"
    },
    {
        "kanji": "託",
        "onyomi": "タク",
        "kunyomi": "",
        "english": "consign"
    },
    {
        "kanji": "濯",
        "onyomi": "タク",
        "kunyomi": "",
        "english": "laundry"
    },
    {
        "kanji": "諾",
        "onyomi": "ダク",
        "kunyomi": "",
        "english": "consent"
    },
    {
        "kanji": "濁",
        "onyomi": "ダク",
        "kunyomi": "にご-る, にご-す",
        "english": "voiced"
    },
    {
        "kanji": "但",
        "onyomi": "",
        "kunyomi": "ただ-し",
        "english": "however"
    },
    {
        "kanji": "達",
        "onyomi": "タツ",
        "kunyomi": "",
        "english": "attain"
    },
    {
        "kanji": "脱",
        "onyomi": "ダツ",
        "kunyomi": "ぬ-ぐ, ぬ-げる",
        "english": "undress"
    },
    {
        "kanji": "奪",
        "onyomi": "ダツ",
        "kunyomi": "うば-う",
        "english": "rob"
    },
    {
        "kanji": "棚",
        "onyomi": "",
        "kunyomi": "たな",
        "english": "shelf"
    },
    {
        "kanji": "誰",
        "onyomi": "",
        "kunyomi": "だれ",
        "english": "who (question word)"
    },
    {
        "kanji": "丹",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "cinnabar"
    },
    {
        "kanji": "旦",
        "onyomi": "タン, ダン",
        "kunyomi": "",
        "english": "daybreak"
    },
    {
        "kanji": "担",
        "onyomi": "タン",
        "kunyomi": "かつ-ぐ, にな-う",
        "english": "shouldering"
    },
    {
        "kanji": "単",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "simple"
    },
    {
        "kanji": "炭",
        "onyomi": "タン",
        "kunyomi": "すみ",
        "english": "charcoal"
    },
    {
        "kanji": "胆",
        "onyomi": "タン",
        "kunyomi": "",
        "english": "gall bladder"
    },
    {
        "kanji": "探",
        "onyomi": "タン",
        "kunyomi": "さぐ-る, さが-す",
        "english": "grope"
    },
    {
        "kanji": "淡",
        "onyomi": "タン",
        "kunyomi": "あわ-い",
        "english": "thin"
    },
    {
        "kanji": "短",
        "onyomi": "タン",
        "kunyomi": "みじか-い",
        "english": "short"
    },
    {
        "kanji": "嘆",
        "onyomi": "タン",
        "kunyomi": "なげ-く, なげ-かわしい",
        "english": "sigh"
    },
    {
        "kanji": "端",
        "onyomi": "タン",
        "kunyomi": "はし, は, はた",
        "english": "edge"
    },
    {
        "kanji": "綻",
        "onyomi": "タン",
        "kunyomi": "ほころ-びる",
        "english": "rip"
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
        "onyomi": "ダン,（トン）",
        "kunyomi": "",
        "english": "group"
    },
    {
        "kanji": "男",
        "onyomi": "ダン, ナン",
        "kunyomi": "おとこ",
        "english": "male"
    },
    {
        "kanji": "段",
        "onyomi": "ダン",
        "kunyomi": "",
        "english": "steps"
    },
    {
        "kanji": "断",
        "onyomi": "ダン",
        "kunyomi": "た-つ, ことわ-る",
        "english": "cut off"
    },
    {
        "kanji": "弾",
        "onyomi": "ダン",
        "kunyomi": "ひ-く, はず-む, たま",
        "english": "bullet"
    },
    {
        "kanji": "暖",
        "onyomi": "ダン",
        "kunyomi": "あたた-か, あたた-かい, あたた-まる, あたた-める",
        "english": "warmth"
    },
    {
        "kanji": "談",
        "onyomi": "ダン",
        "kunyomi": "",
        "english": "discuss"
    },
    {
        "kanji": "壇",
        "onyomi": "ダン,（タン）",
        "kunyomi": "",
        "english": "podium"
    },
    {
        "kanji": "地",
        "onyomi": "チ, ジ",
        "kunyomi": "",
        "english": "ground"
    },
    {
        "kanji": "池",
        "onyomi": "チ",
        "kunyomi": "いけ",
        "english": "pond"
    },
    {
        "kanji": "知",
        "onyomi": "チ",
        "kunyomi": "し-る",
        "english": "know"
    },
    {
        "kanji": "値",
        "onyomi": "チ",
        "kunyomi": "ね, あたい",
        "english": "value"
    },
    {
        "kanji": "恥",
        "onyomi": "チ",
        "kunyomi": "は-じる, はじ, は-じらう, は-ずかしい",
        "english": "shame"
    },
    {
        "kanji": "致",
        "onyomi": "チ",
        "kunyomi": "いた-す",
        "english": "(to) do"
    },
    {
        "kanji": "遅",
        "onyomi": "チ",
        "kunyomi": "おく-れる, おく-らす, おそ-い",
        "english": "slow"
    },
    {
        "kanji": "痴",
        "onyomi": "チ",
        "kunyomi": "",
        "english": "stupid"
    },
    {
        "kanji": "稚",
        "onyomi": "チ",
        "kunyomi": "",
        "english": "immature"
    },
    {
        "kanji": "置",
        "onyomi": "チ",
        "kunyomi": "お-く",
        "english": "put"
    },
    {
        "kanji": "緻",
        "onyomi": "チ",
        "kunyomi": "",
        "english": "fine (not coarse)"
    },
    {
        "kanji": "竹",
        "onyomi": "チク",
        "kunyomi": "たけ",
        "english": "bamboo"
    },
    {
        "kanji": "畜",
        "onyomi": "チク",
        "kunyomi": "",
        "english": "livestock"
    },
    {
        "kanji": "逐",
        "onyomi": "チク",
        "kunyomi": "",
        "english": "pursue"
    },
    {
        "kanji": "蓄",
        "onyomi": "チク",
        "kunyomi": "たくわ-える",
        "english": "amass"
    },
    {
        "kanji": "築",
        "onyomi": "チク",
        "kunyomi": "きず-く",
        "english": "fabricate"
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
        "kanji": "着",
        "onyomi": "チャク,（ジャク）",
        "kunyomi": "き-る, き-せる, つ-く, つ-ける",
        "english": "wear"
    },
    {
        "kanji": "嫡",
        "onyomi": "チャク",
        "kunyomi": "",
        "english": "legitimate wife"
    },
    {
        "kanji": "中",
        "onyomi": "チュウ,（ジュウ）",
        "kunyomi": "なか",
        "english": "middle"
    },
    {
        "kanji": "仲",
        "onyomi": "チュウ",
        "kunyomi": "なか",
        "english": "relationship"
    },
    {
        "kanji": "虫",
        "onyomi": "チュウ",
        "kunyomi": "むし",
        "english": "insect"
    },
    {
        "kanji": "沖",
        "onyomi": "チュウ",
        "kunyomi": "おき",
        "english": "open sea"
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
        "kunyomi": "",
        "english": "pluck"
    },
    {
        "kanji": "注",
        "onyomi": "チュウ",
        "kunyomi": "そそ-ぐ",
        "english": "pour"
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
        "kanji": "衷",
        "onyomi": "チュウ",
        "kunyomi": "",
        "english": "inmost"
    },
    {
        "kanji": "酎",
        "onyomi": "チュウ",
        "kunyomi": "",
        "english": "sake"
    },
    {
        "kanji": "鋳",
        "onyomi": "チュウ",
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
        "kanji": "著",
        "onyomi": "チョ",
        "kunyomi": "あらわ-す, いちじる-しい",
        "english": "renowned"
    },
    {
        "kanji": "貯",
        "onyomi": "チョ",
        "kunyomi": "",
        "english": "savings"
    },
    {
        "kanji": "丁",
        "onyomi": "チョウ, テイ",
        "kunyomi": "",
        "english": "ward"
    },
    {
        "kanji": "弔",
        "onyomi": "チョウ",
        "kunyomi": "とむら-う",
        "english": "condolences"
    },
    {
        "kanji": "庁",
        "onyomi": "チョウ",
        "kunyomi": "",
        "english": "government office"
    },
    {
        "kanji": "兆",
        "onyomi": "チョウ",
        "kunyomi": "きざ-す, きざ-し",
        "english": "portent, trillion"
    },
    {
        "kanji": "町",
        "onyomi": "チョウ",
        "kunyomi": "まち",
        "english": "town"
    },
    {
        "kanji": "長",
        "onyomi": "チョウ",
        "kunyomi": "なが-い",
        "english": "long"
    },
    {
        "kanji": "挑",
        "onyomi": "チョウ",
        "kunyomi": "いど-む",
        "english": "challenge"
    },
    {
        "kanji": "帳",
        "onyomi": "チョウ",
        "kunyomi": "",
        "english": "account book"
    },
    {
        "kanji": "張",
        "onyomi": "チョウ",
        "kunyomi": "は-る",
        "english": "stretch"
    },
    {
        "kanji": "彫",
        "onyomi": "チョウ",
        "kunyomi": "ほ-る",
        "english": "carve"
    },
    {
        "kanji": "眺",
        "onyomi": "チョウ",
        "kunyomi": "なが-める",
        "english": "stare"
    },
    {
        "kanji": "釣",
        "onyomi": "チョウ",
        "kunyomi": "つ-る",
        "english": "angling"
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
        "kanji": "朝",
        "onyomi": "チョウ",
        "kunyomi": "あさ",
        "english": "morning"
    },
    {
        "kanji": "脹",
        "onyomi": "チョウ",
        "kunyomi": "",
        "english": "swell"
    },
    {
        "kanji": "貼",
        "onyomi": "チョウ",
        "kunyomi": "は-る",
        "english": "paste"
    },
    {
        "kanji": "超",
        "onyomi": "チョウ",
        "kunyomi": "こ-える, こ-す",
        "english": "transcend"
    },
    {
        "kanji": "腸",
        "onyomi": "チョウ",
        "kunyomi": "",
        "english": "intestines"
    },
    {
        "kanji": "跳",
        "onyomi": "チョウ",
        "kunyomi": "は-ねる, と-ぶ",
        "english": "hop"
    },
    {
        "kanji": "徴",
        "onyomi": "チョウ",
        "kunyomi": "",
        "english": "indications"
    },
    {
        "kanji": "嘲",
        "onyomi": "チョウ",
        "kunyomi": "あざけ-る",
        "english": "ridicule"
    },
    {
        "kanji": "潮",
        "onyomi": "チョウ",
        "kunyomi": "しお",
        "english": "tide"
    },
    {
        "kanji": "澄",
        "onyomi": "チョウ",
        "kunyomi": "す-む, す-ます",
        "english": "lucidity"
    },
    {
        "kanji": "調",
        "onyomi": "チョウ",
        "kunyomi": "しら-べる, ととの-う, ととの-える",
        "english": "investigate"
    },
    {
        "kanji": "聴",
        "onyomi": "チョウ",
        "kunyomi": "き-く",
        "english": "listen"
    },
    {
        "kanji": "懲",
        "onyomi": "チョウ",
        "kunyomi": "こ-りる, こ-らす, こ-らしめる",
        "english": "penal"
    },
    {
        "kanji": "直",
        "onyomi": "チョク, ジキ",
        "kunyomi": "ただ-ちに, なお-す, なお-る",
        "english": "straight"
    },
    {
        "kanji": "勅",
        "onyomi": "チョク",
        "kunyomi": "",
        "english": "imperial order"
    },
    {
        "kanji": "捗",
        "onyomi": "チョク",
        "kunyomi": "はかど-る",
        "english": "make progress"
    },
    {
        "kanji": "沈",
        "onyomi": "チン",
        "kunyomi": "しず-む, しず-める",
        "english": "sink"
    },
    {
        "kanji": "珍",
        "onyomi": "チン",
        "kunyomi": "めずら-しい",
        "english": "rare"
    },
    {
        "kanji": "朕",
        "onyomi": "チン",
        "kunyomi": "",
        "english": "majestic plural"
    },
    {
        "kanji": "陳",
        "onyomi": "チン",
        "kunyomi": "",
        "english": "exhibit"
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
        "kunyomi": "しず-める, しず-まる",
        "english": "tranquilize"
    },
    {
        "kanji": "追",
        "onyomi": "ツイ",
        "kunyomi": "お-う",
        "english": "follow"
    },
    {
        "kanji": "椎",
        "onyomi": "ツイ",
        "kunyomi": "",
        "english": "oak"
    },
    {
        "kanji": "墜",
        "onyomi": "ツイ",
        "kunyomi": "",
        "english": "crash"
    },
    {
        "kanji": "通",
        "onyomi": "ツウ,（ツ）",
        "kunyomi": "とお-る, とお-す, かよ-う",
        "english": "pass through"
    },
    {
        "kanji": "痛",
        "onyomi": "ツウ",
        "kunyomi": "いた-い, いた-む, いた-める",
        "english": "pain"
    },
    {
        "kanji": "塚",
        "onyomi": "",
        "kunyomi": "つか",
        "english": "hillock"
    },
    {
        "kanji": "漬",
        "onyomi": "",
        "kunyomi": "つ-ける, つ-かる",
        "english": "pickling"
    },
    {
        "kanji": "坪",
        "onyomi": "",
        "kunyomi": "つぼ",
        "english": "two-mat area"
    },
    {
        "kanji": "爪",
        "onyomi": "",
        "kunyomi": "つめ, （つま）",
        "english": "claw"
    },
    {
        "kanji": "鶴",
        "onyomi": "",
        "kunyomi": "つる",
        "english": "crane"
    },
    {
        "kanji": "低",
        "onyomi": "テイ",
        "kunyomi": "ひく-い, ひく-める, ひく-まる",
        "english": "low"
    },
    {
        "kanji": "呈",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "display"
    },
    {
        "kanji": "廷",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "courts"
    },
    {
        "kanji": "弟",
        "onyomi": "テイ,（ダイ）, （デ）",
        "kunyomi": "おとうと",
        "english": "younger brother"
    },
    {
        "kanji": "定",
        "onyomi": "テイ, ジョウ",
        "kunyomi": "さだ-める, さだ-まる, さだ-か",
        "english": "decide"
    },
    {
        "kanji": "底",
        "onyomi": "テイ",
        "kunyomi": "そこ",
        "english": "bottom"
    },
    {
        "kanji": "抵",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "resist"
    },
    {
        "kanji": "邸",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "residence"
    },
    {
        "kanji": "亭",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "pavilion"
    },
    {
        "kanji": "貞",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "upright"
    },
    {
        "kanji": "帝",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "sovereign"
    },
    {
        "kanji": "訂",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "revise"
    },
    {
        "kanji": "庭",
        "onyomi": "テイ",
        "kunyomi": "にわ",
        "english": "garden"
    },
    {
        "kanji": "逓",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "relay"
    },
    {
        "kanji": "停",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "halt"
    },
    {
        "kanji": "偵",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "spy"
    },
    {
        "kanji": "堤",
        "onyomi": "テイ",
        "kunyomi": "つつみ",
        "english": "dike"
    },
    {
        "kanji": "提",
        "onyomi": "テイ",
        "kunyomi": "さ-げる",
        "english": "present"
    },
    {
        "kanji": "程",
        "onyomi": "テイ",
        "kunyomi": "ほど",
        "english": "extent"
    },
    {
        "kanji": "艇",
        "onyomi": "テイ",
        "kunyomi": "",
        "english": "rowboat"
    },
    {
        "kanji": "締",
        "onyomi": "テイ",
        "kunyomi": "し-まる, し-める",
        "english": "tighten"
    },
    {
        "kanji": "諦",
        "onyomi": "テイ",
        "kunyomi": "あきら-める",
        "english": "give up"
    },
    {
        "kanji": "泥",
        "onyomi": "デイ",
        "kunyomi": "どろ",
        "english": "mud"
    },
    {
        "kanji": "的",
        "onyomi": "テキ",
        "kunyomi": "まと",
        "english": "target"
    },
    {
        "kanji": "笛",
        "onyomi": "テキ",
        "kunyomi": "ふえ",
        "english": "flute"
    },
    {
        "kanji": "摘",
        "onyomi": "テキ",
        "kunyomi": "つ-む",
        "english": "pinch"
    },
    {
        "kanji": "滴",
        "onyomi": "テキ",
        "kunyomi": "しずく, したた-る",
        "english": "drip"
    },
    {
        "kanji": "適",
        "onyomi": "テキ",
        "kunyomi": "",
        "english": "suitable"
    },
    {
        "kanji": "敵",
        "onyomi": "テキ",
        "kunyomi": "かたき",
        "english": "enemy"
    },
    {
        "kanji": "溺",
        "onyomi": "デキ",
        "kunyomi": "おぼ-れる",
        "english": "drowning"
    },
    {
        "kanji": "迭",
        "onyomi": "テツ",
        "kunyomi": "",
        "english": "transfer"
    },
    {
        "kanji": "哲",
        "onyomi": "テツ",
        "kunyomi": "",
        "english": "philosophy"
    },
    {
        "kanji": "鉄",
        "onyomi": "テツ",
        "kunyomi": "",
        "english": "iron"
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
        "kanji": "天",
        "onyomi": "テン",
        "kunyomi": "あめ, （あま）",
        "english": "heaven"
    },
    {
        "kanji": "典",
        "onyomi": "テン",
        "kunyomi": "",
        "english": "code"
    },
    {
        "kanji": "店",
        "onyomi": "テン",
        "kunyomi": "みせ",
        "english": "shop"
    },
    {
        "kanji": "点",
        "onyomi": "テン",
        "kunyomi": "",
        "english": "point"
    },
    {
        "kanji": "展",
        "onyomi": "テン",
        "kunyomi": "",
        "english": "expand"
    },
    {
        "kanji": "添",
        "onyomi": "テン",
        "kunyomi": "そ-える, そ-う",
        "english": "annexed"
    },
    {
        "kanji": "転",
        "onyomi": "テン",
        "kunyomi": "ころ-がる, ころ-げる, ころ-がす, ころ-ぶ",
        "english": "revolve"
    },
    {
        "kanji": "塡",
        "onyomi": "テン",
        "kunyomi": "",
        "english": "bury, fill in"
    },
    {
        "kanji": "田",
        "onyomi": "デン",
        "kunyomi": "た",
        "english": "rice paddy"
    },
    {
        "kanji": "伝",
        "onyomi": "デン",
        "kunyomi": "つた-わる, つた-える, つた-う",
        "english": "transmit"
    },
    {
        "kanji": "殿",
        "onyomi": "デン, テン",
        "kunyomi": "との, どの",
        "english": "Mr."
    },
    {
        "kanji": "電",
        "onyomi": "デン",
        "kunyomi": "",
        "english": "electricity"
    },
    {
        "kanji": "斗",
        "onyomi": "ト",
        "kunyomi": "",
        "english": "Big Dipper"
    },
    {
        "kanji": "吐",
        "onyomi": "ト",
        "kunyomi": "は-く",
        "english": "spit"
    },
    {
        "kanji": "妬",
        "onyomi": "ト",
        "kunyomi": "ねた-む",
        "english": "jealousy"
    },
    {
        "kanji": "徒",
        "onyomi": "ト",
        "kunyomi": "",
        "english": "junior"
    },
    {
        "kanji": "途",
        "onyomi": "ト",
        "kunyomi": "",
        "english": "route"
    },
    {
        "kanji": "都",
        "onyomi": "ト, ツ",
        "kunyomi": "みやこ",
        "english": "metropolis"
    },
    {
        "kanji": "渡",
        "onyomi": "ト",
        "kunyomi": "わた-る, わた-す",
        "english": "transit"
    },
    {
        "kanji": "塗",
        "onyomi": "ト",
        "kunyomi": "ぬ-る",
        "english": "paint"
    },
    {
        "kanji": "賭",
        "onyomi": "ト",
        "kunyomi": "か-ける",
        "english": "bet"
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
        "kunyomi": "",
        "english": "guy"
    },
    {
        "kanji": "努",
        "onyomi": "ド",
        "kunyomi": "つと-める",
        "english": "toil"
    },
    {
        "kanji": "度",
        "onyomi": "ド,（ト）, （タク）",
        "kunyomi": "たび",
        "english": "degrees"
    },
    {
        "kanji": "怒",
        "onyomi": "ド",
        "kunyomi": "いか-る, おこ-る",
        "english": "angry"
    },
    {
        "kanji": "刀",
        "onyomi": "トウ",
        "kunyomi": "かたな",
        "english": "sword"
    },
    {
        "kanji": "冬",
        "onyomi": "トウ",
        "kunyomi": "ふゆ",
        "english": "winter"
    },
    {
        "kanji": "灯",
        "onyomi": "トウ",
        "kunyomi": "ひ",
        "english": "lamp"
    },
    {
        "kanji": "当",
        "onyomi": "トウ",
        "kunyomi": "あ-たる, あ-てる",
        "english": "hit"
    },
    {
        "kanji": "投",
        "onyomi": "トウ",
        "kunyomi": "な-げる",
        "english": "throw"
    },
    {
        "kanji": "豆",
        "onyomi": "トウ,（ズ）",
        "kunyomi": "まめ",
        "english": "beans"
    },
    {
        "kanji": "東",
        "onyomi": "トウ",
        "kunyomi": "ひがし",
        "english": "east"
    },
    {
        "kanji": "到",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "arrival"
    },
    {
        "kanji": "逃",
        "onyomi": "トウ",
        "kunyomi": "に-げる, に-がす, のが-す, のが-れる",
        "english": "escape"
    },
    {
        "kanji": "倒",
        "onyomi": "トウ",
        "kunyomi": "たお-れる, たお-す",
        "english": "overthrow"
    },
    {
        "kanji": "凍",
        "onyomi": "トウ",
        "kunyomi": "こお-る, こご-える",
        "english": "frozen"
    },
    {
        "kanji": "唐",
        "onyomi": "トウ",
        "kunyomi": "から",
        "english": "T'ang"
    },
    {
        "kanji": "島",
        "onyomi": "トウ",
        "kunyomi": "しま",
        "english": "island"
    },
    {
        "kanji": "桃",
        "onyomi": "トウ",
        "kunyomi": "もも",
        "english": "peach tree"
    },
    {
        "kanji": "討",
        "onyomi": "トウ",
        "kunyomi": "う-つ",
        "english": "chastise"
    },
    {
        "kanji": "透",
        "onyomi": "トウ",
        "kunyomi": "す-く, す-かす, す-ける",
        "english": "transparent"
    },
    {
        "kanji": "党",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "group"
    },
    {
        "kanji": "悼",
        "onyomi": "トウ",
        "kunyomi": "いた-む",
        "english": "lament"
    },
    {
        "kanji": "盗",
        "onyomi": "トウ",
        "kunyomi": "ぬす-む",
        "english": "steal"
    },
    {
        "kanji": "陶",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "pottery"
    },
    {
        "kanji": "塔",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "pagoda"
    },
    {
        "kanji": "搭",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "board"
    },
    {
        "kanji": "棟",
        "onyomi": "トウ",
        "kunyomi": "むね, （むな）",
        "english": "ridgepole"
    },
    {
        "kanji": "湯",
        "onyomi": "トウ",
        "kunyomi": "ゆ",
        "english": "hot water"
    },
    {
        "kanji": "痘",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "pox"
    },
    {
        "kanji": "登",
        "onyomi": "トウ, ト",
        "kunyomi": "のぼ-る",
        "english": "climb"
    },
    {
        "kanji": "答",
        "onyomi": "トウ",
        "kunyomi": "こた-える, こた-え",
        "english": "answer"
    },
    {
        "kanji": "等",
        "onyomi": "トウ",
        "kunyomi": "ひと-しい",
        "english": "class"
    },
    {
        "kanji": "筒",
        "onyomi": "トウ",
        "kunyomi": "つつ",
        "english": "cylinder"
    },
    {
        "kanji": "統",
        "onyomi": "トウ",
        "kunyomi": "す-べる",
        "english": "unite"
    },
    {
        "kanji": "稲",
        "onyomi": "トウ",
        "kunyomi": "いね, （いな）",
        "english": "rice plant"
    },
    {
        "kanji": "踏",
        "onyomi": "トウ",
        "kunyomi": "ふ-む, ふ-まえる",
        "english": "step"
    },
    {
        "kanji": "糖",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "sugar"
    },
    {
        "kanji": "頭",
        "onyomi": "トウ, ズ,（ト）",
        "kunyomi": "あたま, かしら",
        "english": "head"
    },
    {
        "kanji": "謄",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "mimeograph"
    },
    {
        "kanji": "藤",
        "onyomi": "トウ",
        "kunyomi": "ふじ",
        "english": "wisteria"
    },
    {
        "kanji": "闘",
        "onyomi": "トウ",
        "kunyomi": "たたか-う",
        "english": "fight"
    },
    {
        "kanji": "騰",
        "onyomi": "トウ",
        "kunyomi": "",
        "english": "inflation"
    },
    {
        "kanji": "同",
        "onyomi": "ドウ",
        "kunyomi": "おな-じ",
        "english": "same"
    },
    {
        "kanji": "洞",
        "onyomi": "ドウ",
        "kunyomi": "ほら",
        "english": "den"
    },
    {
        "kanji": "胴",
        "onyomi": "ドウ",
        "kunyomi": "",
        "english": "trunk"
    },
    {
        "kanji": "動",
        "onyomi": "ドウ",
        "kunyomi": "うご-く, うご-かす",
        "english": "move"
    },
    {
        "kanji": "堂",
        "onyomi": "ドウ",
        "kunyomi": "",
        "english": "public chamber"
    },
    {
        "kanji": "童",
        "onyomi": "ドウ",
        "kunyomi": "わらべ",
        "english": "juvenile"
    },
    {
        "kanji": "道",
        "onyomi": "ドウ,（トウ）",
        "kunyomi": "みち",
        "english": "road"
    },
    {
        "kanji": "働",
        "onyomi": "ドウ",
        "kunyomi": "はたら-く",
        "english": "work"
    },
    {
        "kanji": "銅",
        "onyomi": "ドウ",
        "kunyomi": "",
        "english": "copper"
    },
    {
        "kanji": "導",
        "onyomi": "ドウ",
        "kunyomi": "みちび-く",
        "english": "guide"
    },
    {
        "kanji": "瞳",
        "onyomi": "ドウ",
        "kunyomi": "ひとみ",
        "english": "pupil"
    },
    {
        "kanji": "峠",
        "onyomi": "",
        "kunyomi": "とうげ",
        "english": "mountain peak"
    },
    {
        "kanji": "匿",
        "onyomi": "トク",
        "kunyomi": "",
        "english": "hide"
    },
    {
        "kanji": "特",
        "onyomi": "トク",
        "kunyomi": "",
        "english": "special"
    },
    {
        "kanji": "得",
        "onyomi": "トク",
        "kunyomi": "え-る, う-る",
        "english": "acquire"
    },
    {
        "kanji": "督",
        "onyomi": "トク",
        "kunyomi": "",
        "english": "coach"
    },
    {
        "kanji": "徳",
        "onyomi": "トク",
        "kunyomi": "",
        "english": "benevolence"
    },
    {
        "kanji": "篤",
        "onyomi": "トク",
        "kunyomi": "",
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
        "onyomi": "ドク",
        "kunyomi": "ひと-り",
        "english": "alone"
    },
    {
        "kanji": "読",
        "onyomi": "ドク, トク,（トウ）",
        "kunyomi": "よ-む",
        "english": "read"
    },
    {
        "kanji": "栃",
        "onyomi": "",
        "kunyomi": "（とち）",
        "english": "horse chestnut"
    },
    {
        "kanji": "凸",
        "onyomi": "トツ",
        "kunyomi": "",
        "english": "convex"
    },
    {
        "kanji": "突",
        "onyomi": "トツ",
        "kunyomi": "つ-く",
        "english": "stab"
    },
    {
        "kanji": "届",
        "onyomi": "",
        "kunyomi": "とど-ける, とど-く",
        "english": "deliver"
    },
    {
        "kanji": "屯",
        "onyomi": "トン",
        "kunyomi": "",
        "english": "barracks"
    },
    {
        "kanji": "豚",
        "onyomi": "トン",
        "kunyomi": "ぶた",
        "english": "pork"
    },
    {
        "kanji": "頓",
        "onyomi": "トン",
        "kunyomi": "",
        "english": "suddenly"
    },
    {
        "kanji": "貪",
        "onyomi": "ドン",
        "kunyomi": "むさぼ-る",
        "english": "covet"
    },
    {
        "kanji": "鈍",
        "onyomi": "ドン",
        "kunyomi": "にぶ-い, にぶ-る",
        "english": "dull"
    },
    {
        "kanji": "曇",
        "onyomi": "ドン",
        "kunyomi": "くも-る",
        "english": "cloudy weather"
    },
    {
        "kanji": "丼",
        "onyomi": "",
        "kunyomi": "どんぶり, （どん）",
        "english": "bowl of food"
    },
    {
        "kanji": "那",
        "onyomi": "ナ",
        "kunyomi": "",
        "english": "what"
    },
    {
        "kanji": "奈",
        "onyomi": "ナ",
        "kunyomi": "",
        "english": "what"
    },
    {
        "kanji": "内",
        "onyomi": "ナイ,（ダイ）",
        "kunyomi": "うち",
        "english": "inside"
    },
    {
        "kanji": "梨",
        "onyomi": "",
        "kunyomi": "なし",
        "english": "pear tree"
    },
    {
        "kanji": "謎",
        "onyomi": "",
        "kunyomi": "なぞ",
        "english": "mistery"
    },
    {
        "kanji": "鍋",
        "onyomi": "",
        "kunyomi": "なべ",
        "english": "pot"
    },
    {
        "kanji": "南",
        "onyomi": "ナン,（ナ）",
        "kunyomi": "みなみ",
        "english": "south"
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
        "kunyomi": "かた-い, むずか-しい",
        "english": "difficult"
    },
    {
        "kanji": "二",
        "onyomi": "ニ",
        "kunyomi": "ふた, ふた-つ",
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
        "onyomi": "ニ",
        "kunyomi": "",
        "english": "two (falsification prevention)"
    },
    {
        "kanji": "匂",
        "onyomi": "",
        "kunyomi": "にお-う",
        "english": "scent"
    },
    {
        "kanji": "肉",
        "onyomi": "ニク",
        "kunyomi": "",
        "english": "meat"
    },
    {
        "kanji": "虹",
        "onyomi": "",
        "kunyomi": "にじ",
        "english": "rainbow"
    },
    {
        "kanji": "日",
        "onyomi": "ニチ, ジツ",
        "kunyomi": "ひ, か",
        "english": "day"
    },
    {
        "kanji": "入",
        "onyomi": "ニュウ",
        "kunyomi": "い-る, い-れる, はい-る",
        "english": "enter"
    },
    {
        "kanji": "乳",
        "onyomi": "ニュウ",
        "kunyomi": "ちち, ち",
        "english": "milk"
    },
    {
        "kanji": "尿",
        "onyomi": "ニョウ",
        "kunyomi": "",
        "english": "urine"
    },
    {
        "kanji": "任",
        "onyomi": "ニン",
        "kunyomi": "まか-せる, まか-す",
        "english": "responsibility"
    },
    {
        "kanji": "妊",
        "onyomi": "ニン",
        "kunyomi": "",
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
        "kunyomi": "みと-める",
        "english": "recognize"
    },
    {
        "kanji": "寧",
        "onyomi": "ネイ",
        "kunyomi": "",
        "english": "rather"
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
        "english": "thought"
    },
    {
        "kanji": "捻",
        "onyomi": "ネン",
        "kunyomi": "",
        "english": "twist"
    },
    {
        "kanji": "粘",
        "onyomi": "ネン",
        "kunyomi": "ねば-る",
        "english": "sticky"
    },
    {
        "kanji": "燃",
        "onyomi": "ネン",
        "kunyomi": "も-える, も-やす, も-す",
        "english": "burn"
    },
    {
        "kanji": "悩",
        "onyomi": "ノウ",
        "kunyomi": "なや-む, なや-ます",
        "english": "trouble"
    },
    {
        "kanji": "納",
        "onyomi": "ノウ,（ナッ）, （ナ）, （ナン）, （トウ）",
        "kunyomi": "おさ-める, おさ-まる",
        "english": "settlement"
    },
    {
        "kanji": "能",
        "onyomi": "ノウ",
        "kunyomi": "",
        "english": "ability"
    },
    {
        "kanji": "脳",
        "onyomi": "ノウ",
        "kunyomi": "",
        "english": "brain"
    },
    {
        "kanji": "農",
        "onyomi": "ノウ",
        "kunyomi": "",
        "english": "farming"
    },
    {
        "kanji": "濃",
        "onyomi": "ノウ",
        "kunyomi": "こ-い",
        "english": "concentrated"
    },
    {
        "kanji": "把",
        "onyomi": "ハ",
        "kunyomi": "",
        "english": "grasp"
    },
    {
        "kanji": "波",
        "onyomi": "ハ",
        "kunyomi": "なみ",
        "english": "wave"
    },
    {
        "kanji": "派",
        "onyomi": "ハ",
        "kunyomi": "",
        "english": "sect"
    },
    {
        "kanji": "破",
        "onyomi": "ハ",
        "kunyomi": "やぶ-る, やぶ-れる",
        "english": "rend"
    },
    {
        "kanji": "覇",
        "onyomi": "ハ",
        "kunyomi": "",
        "english": "hegemony"
    },
    {
        "kanji": "馬",
        "onyomi": "バ",
        "kunyomi": "うま, （ま）",
        "english": "horse"
    },
    {
        "kanji": "婆",
        "onyomi": "バ",
        "kunyomi": "",
        "english": "old woman"
    },
    {
        "kanji": "罵",
        "onyomi": "バ",
        "kunyomi": "ののし-る",
        "english": "insult"
    },
    {
        "kanji": "拝",
        "onyomi": "ハイ",
        "kunyomi": "おが-む",
        "english": "worship"
    },
    {
        "kanji": "杯",
        "onyomi": "ハイ",
        "kunyomi": "さかずき",
        "english": "counter for cupfuls"
    },
    {
        "kanji": "背",
        "onyomi": "ハイ",
        "kunyomi": "せ, せい, そむ-く, そむ-ける",
        "english": "back"
    },
    {
        "kanji": "肺",
        "onyomi": "ハイ",
        "kunyomi": "",
        "english": "lungs"
    },
    {
        "kanji": "俳",
        "onyomi": "ハイ",
        "kunyomi": "",
        "english": "haiku"
    },
    {
        "kanji": "配",
        "onyomi": "ハイ",
        "kunyomi": "くば-る",
        "english": "distribute"
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
        "kanji": "廃",
        "onyomi": "ハイ",
        "kunyomi": "すた-れる, すた-る",
        "english": "abolish"
    },
    {
        "kanji": "輩",
        "onyomi": "ハイ",
        "kunyomi": "",
        "english": "comrade"
    },
    {
        "kanji": "売",
        "onyomi": "バイ",
        "kunyomi": "う-る, う-れる",
        "english": "sell"
    },
    {
        "kanji": "倍",
        "onyomi": "バイ",
        "kunyomi": "",
        "english": "double"
    },
    {
        "kanji": "梅",
        "onyomi": "バイ",
        "kunyomi": "うめ",
        "english": "ume (Japanese apricot)"
    },
    {
        "kanji": "培",
        "onyomi": "バイ",
        "kunyomi": "つちか-う",
        "english": "cultivate"
    },
    {
        "kanji": "陪",
        "onyomi": "バイ",
        "kunyomi": "",
        "english": "obeisance"
    },
    {
        "kanji": "媒",
        "onyomi": "バイ",
        "kunyomi": "",
        "english": "mediator"
    },
    {
        "kanji": "買",
        "onyomi": "バイ",
        "kunyomi": "か-う",
        "english": "buy"
    },
    {
        "kanji": "賠",
        "onyomi": "バイ",
        "kunyomi": "",
        "english": "compensation"
    },
    {
        "kanji": "白",
        "onyomi": "ハク, ビャク",
        "kunyomi": "しろ, （しら）, しろ-い",
        "english": "white"
    },
    {
        "kanji": "伯",
        "onyomi": "ハク",
        "kunyomi": "",
        "english": "chief"
    },
    {
        "kanji": "拍",
        "onyomi": "ハク,（ヒョウ）",
        "kunyomi": "",
        "english": "clap"
    },
    {
        "kanji": "泊",
        "onyomi": "ハク",
        "kunyomi": "と-まる, と-める",
        "english": "overnight"
    },
    {
        "kanji": "迫",
        "onyomi": "ハク",
        "kunyomi": "せま-る",
        "english": "urge"
    },
    {
        "kanji": "剝",
        "onyomi": "ハク",
        "kunyomi": "は-がす, は-ぐ, は-がれる, は-げる",
        "english": "remove, tear off"
    },
    {
        "kanji": "舶",
        "onyomi": "ハク",
        "kunyomi": "",
        "english": "liner"
    },
    {
        "kanji": "博",
        "onyomi": "ハク,（バク）",
        "kunyomi": "",
        "english": "Dr."
    },
    {
        "kanji": "薄",
        "onyomi": "ハク",
        "kunyomi": "うす-い, うす-める, うす-まる, うす-らぐ, うす-れる",
        "english": "dilute"
    },
    {
        "kanji": "麦",
        "onyomi": "バク",
        "kunyomi": "むぎ",
        "english": "wheat"
    },
    {
        "kanji": "漠",
        "onyomi": "バク",
        "kunyomi": "",
        "english": "vague"
    },
    {
        "kanji": "縛",
        "onyomi": "バク",
        "kunyomi": "しば-る",
        "english": "truss"
    },
    {
        "kanji": "爆",
        "onyomi": "バク",
        "kunyomi": "",
        "english": "explode"
    },
    {
        "kanji": "箱",
        "onyomi": "",
        "kunyomi": "はこ",
        "english": "box"
    },
    {
        "kanji": "箸",
        "onyomi": "",
        "kunyomi": "はし",
        "english": "chopsticks"
    },
    {
        "kanji": "畑",
        "onyomi": "",
        "kunyomi": "はた, はたけ",
        "english": "farm"
    },
    {
        "kanji": "肌",
        "onyomi": "",
        "kunyomi": "はだ",
        "english": "texture"
    },
    {
        "kanji": "八",
        "onyomi": "ハチ",
        "kunyomi": "や, や-つ, やっ-つ, （よう）",
        "english": "eight"
    },
    {
        "kanji": "鉢",
        "onyomi": "ハチ,（ハツ）",
        "kunyomi": "",
        "english": "bowl"
    },
    {
        "kanji": "発",
        "onyomi": "ハツ, ホツ",
        "kunyomi": "",
        "english": "departure"
    },
    {
        "kanji": "髪",
        "onyomi": "ハツ",
        "kunyomi": "かみ",
        "english": "hair of the head"
    },
    {
        "kanji": "伐",
        "onyomi": "バツ",
        "kunyomi": "",
        "english": "fell"
    },
    {
        "kanji": "抜",
        "onyomi": "バツ",
        "kunyomi": "ぬ-く, ぬ-ける, ぬ-かす, ぬ-かる",
        "english": "slip out"
    },
    {
        "kanji": "罰",
        "onyomi": "バツ, バチ",
        "kunyomi": "",
        "english": "penalty"
    },
    {
        "kanji": "閥",
        "onyomi": "バツ",
        "kunyomi": "",
        "english": "clique"
    },
    {
        "kanji": "反",
        "onyomi": "ハン,（ホン）, （タン）",
        "kunyomi": "そ-る, そ-らす",
        "english": "anti-"
    },
    {
        "kanji": "半",
        "onyomi": "ハン",
        "kunyomi": "なか-ば",
        "english": "half"
    },
    {
        "kanji": "氾",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "spread out"
    },
    {
        "kanji": "犯",
        "onyomi": "ハン",
        "kunyomi": "おか-す",
        "english": "crime"
    },
    {
        "kanji": "帆",
        "onyomi": "ハン",
        "kunyomi": "ほ",
        "english": "sail"
    },
    {
        "kanji": "汎",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "general, pan-"
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
        "kunyomi": "",
        "english": "judge"
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
        "kunyomi": "",
        "english": "heights"
    },
    {
        "kanji": "板",
        "onyomi": "ハン, バン",
        "kunyomi": "いた",
        "english": "board"
    },
    {
        "kanji": "版",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "printing block"
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
        "kunyomi": "",
        "english": "paddy-ridge"
    },
    {
        "kanji": "般",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "generally"
    },
    {
        "kanji": "販",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "marketing"
    },
    {
        "kanji": "斑",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "blemish"
    },
    {
        "kanji": "飯",
        "onyomi": "ハン",
        "kunyomi": "めし",
        "english": "meal"
    },
    {
        "kanji": "搬",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "conveyor"
    },
    {
        "kanji": "煩",
        "onyomi": "ハン,（ボン）",
        "kunyomi": "わずら-う, わずら-わす",
        "english": "anxiety"
    },
    {
        "kanji": "頒",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "partition"
    },
    {
        "kanji": "範",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "pattern"
    },
    {
        "kanji": "繁",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "luxuriant"
    },
    {
        "kanji": "藩",
        "onyomi": "ハン",
        "kunyomi": "",
        "english": "clan"
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
        "kunyomi": "",
        "english": "one's turn"
    },
    {
        "kanji": "蛮",
        "onyomi": "バン",
        "kunyomi": "",
        "english": "barbarian"
    },
    {
        "kanji": "盤",
        "onyomi": "バン",
        "kunyomi": "",
        "english": "tray"
    },
    {
        "kanji": "比",
        "onyomi": "ヒ",
        "kunyomi": "くら-べる",
        "english": "compare"
    },
    {
        "kanji": "皮",
        "onyomi": "ヒ",
        "kunyomi": "かわ",
        "english": "skin"
    },
    {
        "kanji": "妃",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "queen"
    },
    {
        "kanji": "否",
        "onyomi": "ヒ",
        "kunyomi": "いな",
        "english": "negate"
    },
    {
        "kanji": "批",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "criticism"
    },
    {
        "kanji": "彼",
        "onyomi": "ヒ",
        "kunyomi": "かれ, （かの）",
        "english": "he"
    },
    {
        "kanji": "披",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "expose"
    },
    {
        "kanji": "肥",
        "onyomi": "ヒ",
        "kunyomi": "こ-える, こえ, こ-やす, こ-やし",
        "english": "fertilizer"
    },
    {
        "kanji": "非",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "negative"
    },
    {
        "kanji": "卑",
        "onyomi": "ヒ",
        "kunyomi": "いや-しい, いや-しむ, いや-しめる",
        "english": "lowly"
    },
    {
        "kanji": "飛",
        "onyomi": "ヒ",
        "kunyomi": "と-ぶ, と-ばす",
        "english": "fly"
    },
    {
        "kanji": "疲",
        "onyomi": "ヒ",
        "kunyomi": "つか-れる",
        "english": "exhausted"
    },
    {
        "kanji": "秘",
        "onyomi": "ヒ",
        "kunyomi": "ひ-める",
        "english": "secret"
    },
    {
        "kanji": "被",
        "onyomi": "ヒ",
        "kunyomi": "こうむ-る",
        "english": "incur"
    },
    {
        "kanji": "悲",
        "onyomi": "ヒ",
        "kunyomi": "かな-しい, かな-しむ",
        "english": "sad"
    },
    {
        "kanji": "扉",
        "onyomi": "ヒ",
        "kunyomi": "とびら",
        "english": "front door"
    },
    {
        "kanji": "費",
        "onyomi": "ヒ",
        "kunyomi": "つい-やす, つい-える",
        "english": "expense"
    },
    {
        "kanji": "碑",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "tombstone"
    },
    {
        "kanji": "罷",
        "onyomi": "ヒ",
        "kunyomi": "",
        "english": "quit"
    },
    {
        "kanji": "避",
        "onyomi": "ヒ",
        "kunyomi": "さ-ける",
        "english": "evade"
    },
    {
        "kanji": "尾",
        "onyomi": "ビ",
        "kunyomi": "お",
        "english": "tail"
    },
    {
        "kanji": "眉",
        "onyomi": "ビ,（ミ）",
        "kunyomi": "まゆ",
        "english": "eyebrow"
    },
    {
        "kanji": "美",
        "onyomi": "ビ",
        "kunyomi": "うつく-しい",
        "english": "beauty"
    },
    {
        "kanji": "備",
        "onyomi": "ビ",
        "kunyomi": "そな-える, そな-わる",
        "english": "provide"
    },
    {
        "kanji": "微",
        "onyomi": "ビ",
        "kunyomi": "",
        "english": "delicate"
    },
    {
        "kanji": "鼻",
        "onyomi": "ビ",
        "kunyomi": "はな",
        "english": "nose"
    },
    {
        "kanji": "膝",
        "onyomi": "",
        "kunyomi": "ひざ",
        "english": "knee"
    },
    {
        "kanji": "肘",
        "onyomi": "",
        "kunyomi": "ひじ",
        "english": "elbow"
    },
    {
        "kanji": "匹",
        "onyomi": "ヒツ",
        "kunyomi": "ひき",
        "english": "equal"
    },
    {
        "kanji": "必",
        "onyomi": "ヒツ",
        "kunyomi": "かなら-ず",
        "english": "without fail"
    },
    {
        "kanji": "泌",
        "onyomi": "ヒツ, ヒ",
        "kunyomi": "",
        "english": "ooze"
    },
    {
        "kanji": "筆",
        "onyomi": "ヒツ",
        "kunyomi": "ふで",
        "english": "writing brush"
    },
    {
        "kanji": "姫",
        "onyomi": "",
        "kunyomi": "ひめ",
        "english": "princess"
    },
    {
        "kanji": "百",
        "onyomi": "ヒャク",
        "kunyomi": "",
        "english": "hundred"
    },
    {
        "kanji": "氷",
        "onyomi": "ヒョウ",
        "kunyomi": "こおり, ひ",
        "english": "ice"
    },
    {
        "kanji": "表",
        "onyomi": "ヒョウ",
        "kunyomi": "おもて, あらわ-す, あらわ-れる",
        "english": "express"
    },
    {
        "kanji": "俵",
        "onyomi": "ヒョウ",
        "kunyomi": "たわら",
        "english": "bag"
    },
    {
        "kanji": "票",
        "onyomi": "ヒョウ",
        "kunyomi": "",
        "english": "ballot"
    },
    {
        "kanji": "評",
        "onyomi": "ヒョウ",
        "kunyomi": "",
        "english": "evaluate"
    },
    {
        "kanji": "漂",
        "onyomi": "ヒョウ",
        "kunyomi": "ただよ-う",
        "english": "drift"
    },
    {
        "kanji": "標",
        "onyomi": "ヒョウ",
        "kunyomi": "",
        "english": "signpost"
    },
    {
        "kanji": "苗",
        "onyomi": "ビョウ",
        "kunyomi": "なえ, （なわ）",
        "english": "seedling"
    },
    {
        "kanji": "秒",
        "onyomi": "ビョウ",
        "kunyomi": "",
        "english": "second (part of time)"
    },
    {
        "kanji": "病",
        "onyomi": "ビョウ,（ヘイ）",
        "kunyomi": "や-む, やまい",
        "english": "sick"
    },
    {
        "kanji": "描",
        "onyomi": "ビョウ",
        "kunyomi": "えが-く, か-く",
        "english": "sketch"
    },
    {
        "kanji": "猫",
        "onyomi": "ビョウ",
        "kunyomi": "ねこ",
        "english": "cat"
    },
    {
        "kanji": "品",
        "onyomi": "ヒン",
        "kunyomi": "しな",
        "english": "article"
    },
    {
        "kanji": "浜",
        "onyomi": "ヒン",
        "kunyomi": "はま",
        "english": "seacoast"
    },
    {
        "kanji": "貧",
        "onyomi": "ヒン, ビン",
        "kunyomi": "まず-しい",
        "english": "poor"
    },
    {
        "kanji": "賓",
        "onyomi": "ヒン",
        "kunyomi": "",
        "english": "V.I.P."
    },
    {
        "kanji": "頻",
        "onyomi": "ヒン",
        "kunyomi": "",
        "english": "repeatedly"
    },
    {
        "kanji": "敏",
        "onyomi": "ビン",
        "kunyomi": "",
        "english": "cleverness"
    },
    {
        "kanji": "瓶",
        "onyomi": "ビン",
        "kunyomi": "",
        "english": "flower pot"
    },
    {
        "kanji": "不",
        "onyomi": "フ, ブ",
        "kunyomi": "",
        "english": "non-"
    },
    {
        "kanji": "夫",
        "onyomi": "フ,（フウ）",
        "kunyomi": "おっと",
        "english": "husband"
    },
    {
        "kanji": "父",
        "onyomi": "フ",
        "kunyomi": "ちち",
        "english": "father"
    },
    {
        "kanji": "付",
        "onyomi": "フ",
        "kunyomi": "つ-ける, つ-く",
        "english": "attach"
    },
    {
        "kanji": "布",
        "onyomi": "フ",
        "kunyomi": "ぬの",
        "english": "linen"
    },
    {
        "kanji": "扶",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "aid"
    },
    {
        "kanji": "府",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "urban prefecture"
    },
    {
        "kanji": "怖",
        "onyomi": "フ",
        "kunyomi": "こわ-い",
        "english": "dreadful"
    },
    {
        "kanji": "阜",
        "onyomi": "（フ）",
        "kunyomi": "",
        "english": "mound"
    },
    {
        "kanji": "附",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "affixed"
    },
    {
        "kanji": "訃",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "obituary"
    },
    {
        "kanji": "負",
        "onyomi": "フ",
        "kunyomi": "ま-ける, ま-かす, お-う",
        "english": "lose"
    },
    {
        "kanji": "赴",
        "onyomi": "フ",
        "kunyomi": "おもむ-く",
        "english": "proceed"
    },
    {
        "kanji": "浮",
        "onyomi": "フ",
        "kunyomi": "う-く, う-かれる, う-かぶ, う-かべる",
        "english": "floating"
    },
    {
        "kanji": "婦",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "lady"
    },
    {
        "kanji": "符",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "token"
    },
    {
        "kanji": "富",
        "onyomi": "フ,（フウ）",
        "kunyomi": "と-む, とみ",
        "english": "rich"
    },
    {
        "kanji": "普",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "universal"
    },
    {
        "kanji": "腐",
        "onyomi": "フ",
        "kunyomi": "くさ-る, くさ-れる, くさ-らす",
        "english": "rot"
    },
    {
        "kanji": "敷",
        "onyomi": "フ",
        "kunyomi": "し-く",
        "english": "spread"
    },
    {
        "kanji": "膚",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "skin"
    },
    {
        "kanji": "賦",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "levy"
    },
    {
        "kanji": "譜",
        "onyomi": "フ",
        "kunyomi": "",
        "english": "musical score"
    },
    {
        "kanji": "侮",
        "onyomi": "ブ",
        "kunyomi": "あなど-る",
        "english": "scorn"
    },
    {
        "kanji": "武",
        "onyomi": "ブ, ム",
        "kunyomi": "",
        "english": "military"
    },
    {
        "kanji": "部",
        "onyomi": "ブ",
        "kunyomi": "",
        "english": "part"
    },
    {
        "kanji": "舞",
        "onyomi": "ブ",
        "kunyomi": "ま-う, まい",
        "english": "dance"
    },
    {
        "kanji": "封",
        "onyomi": "フウ, ホウ",
        "kunyomi": "",
        "english": "seal"
    },
    {
        "kanji": "風",
        "onyomi": "フウ,（フ）",
        "kunyomi": "かぜ, （かざ）",
        "english": "wind"
    },
    {
        "kanji": "伏",
        "onyomi": "フク",
        "kunyomi": "ふ-せる, ふ-す",
        "english": "prostrated"
    },
    {
        "kanji": "服",
        "onyomi": "フク",
        "kunyomi": "",
        "english": "clothes"
    },
    {
        "kanji": "副",
        "onyomi": "フク",
        "kunyomi": "",
        "english": "vice"
    },
    {
        "kanji": "幅",
        "onyomi": "フク",
        "kunyomi": "はば",
        "english": "breadth"
    },
    {
        "kanji": "復",
        "onyomi": "フク",
        "kunyomi": "",
        "english": "again"
    },
    {
        "kanji": "福",
        "onyomi": "フク",
        "kunyomi": "",
        "english": "luck"
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
        "kanji": "払",
        "onyomi": "フツ",
        "kunyomi": "はら-う",
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
        "onyomi": "ブツ",
        "kunyomi": "ほとけ",
        "english": "Buddha"
    },
    {
        "kanji": "物",
        "onyomi": "ブツ, モツ",
        "kunyomi": "もの",
        "english": "thing"
    },
    {
        "kanji": "粉",
        "onyomi": "フン",
        "kunyomi": "こ, こな",
        "english": "flour"
    },
    {
        "kanji": "紛",
        "onyomi": "フン",
        "kunyomi": "まぎ-れる, まぎ-らす, まぎ-らわす, まぎ-らわしい",
        "english": "distract"
    },
    {
        "kanji": "雰",
        "onyomi": "フン",
        "kunyomi": "",
        "english": "atmosphere"
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
        "kanji": "奮",
        "onyomi": "フン",
        "kunyomi": "ふる-う",
        "english": "stirred up"
    },
    {
        "kanji": "分",
        "onyomi": "ブン, フン, ブ",
        "kunyomi": "わ-ける, わ-かれる, わ-かる, わ-かつ",
        "english": "part, minute of time"
    },
    {
        "kanji": "文",
        "onyomi": "ブン, モン",
        "kunyomi": "ふみ",
        "english": "writing"
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
        "kunyomi": "",
        "english": "third class"
    },
    {
        "kanji": "平",
        "onyomi": "ヘイ, ビョウ",
        "kunyomi": "たい-ら, ひら",
        "english": "flat"
    },
    {
        "kanji": "兵",
        "onyomi": "ヘイ, ヒョウ",
        "kunyomi": "",
        "english": "soldier"
    },
    {
        "kanji": "併",
        "onyomi": "ヘイ",
        "kunyomi": "あわ-せる",
        "english": "join"
    },
    {
        "kanji": "並",
        "onyomi": "ヘイ",
        "kunyomi": "なみ, なら-べる, なら-ぶ, なら-びに",
        "english": "line-up"
    },
    {
        "kanji": "柄",
        "onyomi": "ヘイ",
        "kunyomi": "がら, え",
        "english": "design"
    },
    {
        "kanji": "陛",
        "onyomi": "ヘイ",
        "kunyomi": "",
        "english": "highness"
    },
    {
        "kanji": "閉",
        "onyomi": "ヘイ",
        "kunyomi": "と-じる, と-ざす, し-める, し-まる",
        "english": "closed"
    },
    {
        "kanji": "塀",
        "onyomi": "ヘイ",
        "kunyomi": "",
        "english": "fence"
    },
    {
        "kanji": "幣",
        "onyomi": "ヘイ",
        "kunyomi": "",
        "english": "cash"
    },
    {
        "kanji": "弊",
        "onyomi": "ヘイ",
        "kunyomi": "",
        "english": "abuse"
    },
    {
        "kanji": "蔽",
        "onyomi": "ヘイ",
        "kunyomi": "",
        "english": "cover, hide"
    },
    {
        "kanji": "餅",
        "onyomi": "ヘイ",
        "kunyomi": "もち",
        "english": "mochi, rice cake"
    },
    {
        "kanji": "米",
        "onyomi": "ベイ, マイ",
        "kunyomi": "こめ",
        "english": "rice"
    },
    {
        "kanji": "壁",
        "onyomi": "ヘキ",
        "kunyomi": "かべ",
        "english": "wall"
    },
    {
        "kanji": "璧",
        "onyomi": "ヘキ",
        "kunyomi": "",
        "english": "sphere"
    },
    {
        "kanji": "癖",
        "onyomi": "ヘキ",
        "kunyomi": "くせ",
        "english": "mannerism"
    },
    {
        "kanji": "別",
        "onyomi": "ベツ",
        "kunyomi": "わか-れる",
        "english": "separate"
    },
    {
        "kanji": "蔑",
        "onyomi": "ベツ",
        "kunyomi": "さげす-む",
        "english": "ignore"
    },
    {
        "kanji": "片",
        "onyomi": "ヘン",
        "kunyomi": "かた",
        "english": "one-sided"
    },
    {
        "kanji": "辺",
        "onyomi": "ヘン",
        "kunyomi": "あた-り, べ",
        "english": "environs"
    },
    {
        "kanji": "返",
        "onyomi": "ヘン",
        "kunyomi": "かえ-す, かえ-る",
        "english": "return"
    },
    {
        "kanji": "変",
        "onyomi": "ヘン",
        "kunyomi": "か-わる, か-える",
        "english": "change"
    },
    {
        "kanji": "偏",
        "onyomi": "ヘン",
        "kunyomi": "かたよ-る",
        "english": "partial"
    },
    {
        "kanji": "遍",
        "onyomi": "ヘン",
        "kunyomi": "",
        "english": "everywhere"
    },
    {
        "kanji": "編",
        "onyomi": "ヘン",
        "kunyomi": "あ-む",
        "english": "compile"
    },
    {
        "kanji": "弁",
        "onyomi": "ベン",
        "kunyomi": "",
        "english": "valve"
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
        "kunyomi": "",
        "english": "exertion"
    },
    {
        "kanji": "歩",
        "onyomi": "ホ, ブ,（フ）",
        "kunyomi": "ある-く, あゆ-む",
        "english": "walk"
    },
    {
        "kanji": "保",
        "onyomi": "ホ",
        "kunyomi": "たも-つ",
        "english": "preserve"
    },
    {
        "kanji": "哺",
        "onyomi": "ホ",
        "kunyomi": "",
        "english": "suckle"
    },
    {
        "kanji": "捕",
        "onyomi": "ホ",
        "kunyomi": "と-らえる, と-らわれる, と-る, つか-まえる, つか-まる",
        "english": "catch"
    },
    {
        "kanji": "補",
        "onyomi": "ホ",
        "kunyomi": "おぎな-う",
        "english": "supplement"
    },
    {
        "kanji": "舗",
        "onyomi": "ホ",
        "kunyomi": "",
        "english": "pavement"
    },
    {
        "kanji": "母",
        "onyomi": "ボ",
        "kunyomi": "はは",
        "english": "mother"
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
        "kanji": "暮",
        "onyomi": "ボ",
        "kunyomi": "く-れる, く-らす",
        "english": "livelihood"
    },
    {
        "kanji": "簿",
        "onyomi": "ボ",
        "kunyomi": "",
        "english": "register"
    },
    {
        "kanji": "方",
        "onyomi": "ホウ",
        "kunyomi": "かた",
        "english": "direction"
    },
    {
        "kanji": "包",
        "onyomi": "ホウ",
        "kunyomi": "つつ-む",
        "english": "wrap"
    },
    {
        "kanji": "芳",
        "onyomi": "ホウ",
        "kunyomi": "かんば-しい",
        "english": "perfume"
    },
    {
        "kanji": "邦",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "home country"
    },
    {
        "kanji": "奉",
        "onyomi": "ホウ,（ブ）",
        "kunyomi": "たてまつ-る",
        "english": "observance"
    },
    {
        "kanji": "宝",
        "onyomi": "ホウ",
        "kunyomi": "たから",
        "english": "treasure"
    },
    {
        "kanji": "抱",
        "onyomi": "ホウ",
        "kunyomi": "だ-く, いだ-く, かか-える",
        "english": "embrace"
    },
    {
        "kanji": "放",
        "onyomi": "ホウ",
        "kunyomi": "はな-す, はな-つ, はな-れる, ほう-る",
        "english": "release"
    },
    {
        "kanji": "法",
        "onyomi": "ホウ,（ハッ）, （ホッ）",
        "kunyomi": "",
        "english": "method"
    },
    {
        "kanji": "泡",
        "onyomi": "ホウ",
        "kunyomi": "あわ",
        "english": "bubbles"
    },
    {
        "kanji": "胞",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "placenta"
    },
    {
        "kanji": "俸",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "salary"
    },
    {
        "kanji": "倣",
        "onyomi": "ホウ",
        "kunyomi": "なら-う",
        "english": "emulate"
    },
    {
        "kanji": "峰",
        "onyomi": "ホウ",
        "kunyomi": "みね",
        "english": "summit"
    },
    {
        "kanji": "砲",
        "onyomi": "ホウ",
        "kunyomi": "",
        "english": "cannon"
    },
    {
        "kanji": "崩",
        "onyomi": "ホウ",
        "kunyomi": "くず-れる, くず-す",
        "english": "crumble"
    },
    {
        "kanji": "訪",
        "onyomi": "ホウ",
        "kunyomi": "おとず-れる, たず-ねる",
        "english": "visit"
    },
    {
        "kanji": "報",
        "onyomi": "ホウ",
        "kunyomi": "むく-いる",
        "english": "report"
    },
    {
        "kanji": "蜂",
        "onyomi": "ホウ",
        "kunyomi": "はち",
        "english": "bee"
    },
    {
        "kanji": "豊",
        "onyomi": "ホウ",
        "kunyomi": "ゆた-か",
        "english": "bountiful"
    },
    {
        "kanji": "飽",
        "onyomi": "ホウ",
        "kunyomi": "あ-きる, あ-かす",
        "english": "sated"
    },
    {
        "kanji": "褒",
        "onyomi": "ホウ",
        "kunyomi": "ほ-める",
        "english": "praise"
    },
    {
        "kanji": "縫",
        "onyomi": "ホウ",
        "kunyomi": "ぬ-う",
        "english": "sew"
    },
    {
        "kanji": "亡",
        "onyomi": "ボウ,（モウ）",
        "kunyomi": "な-い",
        "english": "deceased"
    },
    {
        "kanji": "乏",
        "onyomi": "ボウ",
        "kunyomi": "とぼ-しい",
        "english": "scarce"
    },
    {
        "kanji": "忙",
        "onyomi": "ボウ",
        "kunyomi": "いそが-しい",
        "english": "busy"
    },
    {
        "kanji": "坊",
        "onyomi": "ボウ,（ボッ）",
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
        "kanji": "忘",
        "onyomi": "ボウ",
        "kunyomi": "わす-れる",
        "english": "forget"
    },
    {
        "kanji": "防",
        "onyomi": "ボウ",
        "kunyomi": "ふせ-ぐ",
        "english": "prevent"
    },
    {
        "kanji": "房",
        "onyomi": "ボウ",
        "kunyomi": "ふさ",
        "english": "tassel"
    },
    {
        "kanji": "肪",
        "onyomi": "ボウ",
        "kunyomi": "",
        "english": "obese"
    },
    {
        "kanji": "某",
        "onyomi": "ボウ",
        "kunyomi": "",
        "english": "so-and-so"
    },
    {
        "kanji": "冒",
        "onyomi": "ボウ",
        "kunyomi": "おか-す",
        "english": "risk"
    },
    {
        "kanji": "剖",
        "onyomi": "ボウ",
        "kunyomi": "",
        "english": "divide"
    },
    {
        "kanji": "紡",
        "onyomi": "ボウ",
        "kunyomi": "つむ-ぐ",
        "english": "spinning"
    },
    {
        "kanji": "望",
        "onyomi": "ボウ, モウ",
        "kunyomi": "のぞ-む",
        "english": "hope"
    },
    {
        "kanji": "傍",
        "onyomi": "ボウ",
        "kunyomi": "かたわ-ら",
        "english": "bystander"
    },
    {
        "kanji": "帽",
        "onyomi": "ボウ",
        "kunyomi": "",
        "english": "cap"
    },
    {
        "kanji": "棒",
        "onyomi": "ボウ",
        "kunyomi": "",
        "english": "rod"
    },
    {
        "kanji": "貿",
        "onyomi": "ボウ",
        "kunyomi": "",
        "english": "trade"
    },
    {
        "kanji": "貌",
        "onyomi": "ボウ",
        "kunyomi": "",
        "english": "appearance"
    },
    {
        "kanji": "暴",
        "onyomi": "ボウ,（バク）",
        "kunyomi": "あば-く, あば-れる",
        "english": "outburst"
    },
    {
        "kanji": "膨",
        "onyomi": "ボウ",
        "kunyomi": "ふく-らむ, ふく-れる",
        "english": "swell"
    },
    {
        "kanji": "謀",
        "onyomi": "ボウ,（ム）, ",
        "kunyomi": "はか-る",
        "english": "conspire"
    },
    {
        "kanji": "頰",
        "onyomi": "",
        "kunyomi": "ほお",
        "english": "cheek"
    },
    {
        "kanji": "北",
        "onyomi": "ホク",
        "kunyomi": "きた",
        "english": "north"
    },
    {
        "kanji": "木",
        "onyomi": "ボク, モク",
        "kunyomi": "き, （こ）",
        "english": "tree"
    },
    {
        "kanji": "朴",
        "onyomi": "ボク",
        "kunyomi": "",
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
        "onyomi": "ボク",
        "kunyomi": "",
        "english": "harmonious"
    },
    {
        "kanji": "僕",
        "onyomi": "ボク",
        "kunyomi": "",
        "english": "me"
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
        "kanji": "没",
        "onyomi": "ボツ",
        "kunyomi": "",
        "english": "drown"
    },
    {
        "kanji": "勃",
        "onyomi": "ボツ",
        "kunyomi": "",
        "english": "rise"
    },
    {
        "kanji": "堀",
        "onyomi": "",
        "kunyomi": "ほり",
        "english": "ditch"
    },
    {
        "kanji": "本",
        "onyomi": "ホン",
        "kunyomi": "もと",
        "english": "book"
    },
    {
        "kanji": "奔",
        "onyomi": "ホン",
        "kunyomi": "",
        "english": "bustle"
    },
    {
        "kanji": "翻",
        "onyomi": "ホン",
        "kunyomi": "ひるがえ-る, ひるがえ-す",
        "english": "flip"
    },
    {
        "kanji": "凡",
        "onyomi": "ボン,（ハン）",
        "kunyomi": "",
        "english": "mediocre"
    },
    {
        "kanji": "盆",
        "onyomi": "ボン",
        "kunyomi": "",
        "english": "basin"
    },
    {
        "kanji": "麻",
        "onyomi": "マ",
        "kunyomi": "あさ",
        "english": "hemp"
    },
    {
        "kanji": "摩",
        "onyomi": "マ",
        "kunyomi": "",
        "english": "chafe"
    },
    {
        "kanji": "磨",
        "onyomi": "マ",
        "kunyomi": "みが-く",
        "english": "grind"
    },
    {
        "kanji": "魔",
        "onyomi": "マ",
        "kunyomi": "",
        "english": "witch"
    },
    {
        "kanji": "毎",
        "onyomi": "マイ",
        "kunyomi": "",
        "english": "every"
    },
    {
        "kanji": "妹",
        "onyomi": "マイ",
        "kunyomi": "いもうと",
        "english": "younger sister"
    },
    {
        "kanji": "枚",
        "onyomi": "マイ",
        "kunyomi": "",
        "english": "sheet of..."
    },
    {
        "kanji": "昧",
        "onyomi": "マイ",
        "kunyomi": "",
        "english": "foolish"
    },
    {
        "kanji": "埋",
        "onyomi": "マイ",
        "kunyomi": "う-める, う-まる, う-もれる",
        "english": "bury"
    },
    {
        "kanji": "幕",
        "onyomi": "マク, バク",
        "kunyomi": "",
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
        "onyomi": "",
        "kunyomi": "まくら",
        "english": "pillow"
    },
    {
        "kanji": "又",
        "onyomi": "",
        "kunyomi": "また",
        "english": "or again"
    },
    {
        "kanji": "末",
        "onyomi": "マツ, バツ",
        "kunyomi": "すえ",
        "english": "end"
    },
    {
        "kanji": "抹",
        "onyomi": "マツ",
        "kunyomi": "",
        "english": "rub"
    },
    {
        "kanji": "万",
        "onyomi": "マン, バン",
        "kunyomi": "",
        "english": "ten thousand"
    },
    {
        "kanji": "満",
        "onyomi": "マン",
        "kunyomi": "み-ちる, み-たす",
        "english": "full"
    },
    {
        "kanji": "慢",
        "onyomi": "マン",
        "kunyomi": "",
        "english": "ridicule"
    },
    {
        "kanji": "漫",
        "onyomi": "マン",
        "kunyomi": "",
        "english": "cartoon"
    },
    {
        "kanji": "未",
        "onyomi": "ミ",
        "kunyomi": "",
        "english": "not yet"
    },
    {
        "kanji": "味",
        "onyomi": "ミ",
        "kunyomi": "あじ, あじ-わう",
        "english": "flavor"
    },
    {
        "kanji": "魅",
        "onyomi": "ミ",
        "kunyomi": "",
        "english": "fascination"
    },
    {
        "kanji": "岬",
        "onyomi": "",
        "kunyomi": "みさき",
        "english": "headland"
    },
    {
        "kanji": "密",
        "onyomi": "ミツ",
        "kunyomi": "",
        "english": "secrecy"
    },
    {
        "kanji": "蜜",
        "onyomi": "ミツ",
        "kunyomi": "",
        "english": "honey"
    },
    {
        "kanji": "脈",
        "onyomi": "ミャク",
        "kunyomi": "",
        "english": "vein"
    },
    {
        "kanji": "妙",
        "onyomi": "ミョウ",
        "kunyomi": "",
        "english": "exquisite"
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
        "kanji": "矛",
        "onyomi": "ム",
        "kunyomi": "ほこ",
        "english": "halberd"
    },
    {
        "kanji": "務",
        "onyomi": "ム",
        "kunyomi": "つと-める, つと-まる",
        "english": "duty"
    },
    {
        "kanji": "無",
        "onyomi": "ム, ブ",
        "kunyomi": "な-い",
        "english": "nothing"
    },
    {
        "kanji": "夢",
        "onyomi": "ム",
        "kunyomi": "ゆめ",
        "english": "dream"
    },
    {
        "kanji": "霧",
        "onyomi": "ム",
        "kunyomi": "きり",
        "english": "fog"
    },
    {
        "kanji": "娘",
        "onyomi": "",
        "kunyomi": "むすめ",
        "english": "daughter"
    },
    {
        "kanji": "名",
        "onyomi": "メイ, ミョウ",
        "kunyomi": "な",
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
        "onyomi": "メイ, ミョウ",
        "kunyomi": "あ-かり, あか-るい, あか-るむ, あか-らむ, あき-らか, あ-ける, あ-く, あ-くる, あ-かす",
        "english": "bright"
    },
    {
        "kanji": "迷",
        "onyomi": "メイ",
        "kunyomi": "まよ-う",
        "english": "astray"
    },
    {
        "kanji": "冥",
        "onyomi": "メイ, ミョウ",
        "kunyomi": "",
        "english": "dark"
    },
    {
        "kanji": "盟",
        "onyomi": "メイ",
        "kunyomi": "",
        "english": "alliance"
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
        "kanji": "滅",
        "onyomi": "メツ",
        "kunyomi": "ほろ-びる, ほろ-ぼす",
        "english": "destroy"
    },
    {
        "kanji": "免",
        "onyomi": "メン",
        "kunyomi": "まぬか-れる",
        "english": "excuse"
    },
    {
        "kanji": "面",
        "onyomi": "メン",
        "kunyomi": "おも, おもて, つら",
        "english": "face"
    },
    {
        "kanji": "綿",
        "onyomi": "メン",
        "kunyomi": "わた",
        "english": "cotton"
    },
    {
        "kanji": "麺",
        "onyomi": "メン",
        "kunyomi": "",
        "english": "noodles"
    },
    {
        "kanji": "茂",
        "onyomi": "モ",
        "kunyomi": "しげ-る",
        "english": "overgrown"
    },
    {
        "kanji": "模",
        "onyomi": "モ, ボ",
        "kunyomi": "",
        "english": "imitation"
    },
    {
        "kanji": "毛",
        "onyomi": "モウ",
        "kunyomi": "け",
        "english": "hair"
    },
    {
        "kanji": "妄",
        "onyomi": "モウ, ボウ",
        "kunyomi": "",
        "english": "delusion"
    },
    {
        "kanji": "盲",
        "onyomi": "モウ",
        "kunyomi": "",
        "english": "blind"
    },
    {
        "kanji": "耗",
        "onyomi": "モウ,（コウ）",
        "kunyomi": "",
        "english": "decrease"
    },
    {
        "kanji": "猛",
        "onyomi": "モウ",
        "kunyomi": "",
        "english": "fierce"
    },
    {
        "kanji": "網",
        "onyomi": "モウ",
        "kunyomi": "あみ",
        "english": "netting"
    },
    {
        "kanji": "目",
        "onyomi": "モク,（ボク）",
        "kunyomi": "め, （ま）",
        "english": "eye"
    },
    {
        "kanji": "黙",
        "onyomi": "モク",
        "kunyomi": "だま-る",
        "english": "silence"
    },
    {
        "kanji": "門",
        "onyomi": "モン",
        "kunyomi": "かど",
        "english": "gates"
    },
    {
        "kanji": "紋",
        "onyomi": "モン",
        "kunyomi": "",
        "english": "family crest"
    },
    {
        "kanji": "問",
        "onyomi": "モン",
        "kunyomi": "と-う, と-い, （とん）",
        "english": "question"
    },
    {
        "kanji": "匁",
        "onyomi": "",
        "kunyomi": "もんめ",
        "english": "momme, 3.75 g"
    },
    {
        "kanji": "冶",
        "onyomi": "ヤ",
        "kunyomi": "",
        "english": "melting"
    },
    {
        "kanji": "夜",
        "onyomi": "ヤ",
        "kunyomi": "よ, よる",
        "english": "night"
    },
    {
        "kanji": "野",
        "onyomi": "ヤ",
        "kunyomi": "の",
        "english": "field"
    },
    {
        "kanji": "弥",
        "onyomi": "",
        "kunyomi": "や",
        "english": "all the more"
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
        "english": "service"
    },
    {
        "kanji": "約",
        "onyomi": "ヤク",
        "kunyomi": "",
        "english": "promise"
    },
    {
        "kanji": "訳",
        "onyomi": "ヤク",
        "kunyomi": "わけ",
        "english": "translate"
    },
    {
        "kanji": "薬",
        "onyomi": "ヤク",
        "kunyomi": "くすり",
        "english": "medicine"
    },
    {
        "kanji": "躍",
        "onyomi": "ヤク",
        "kunyomi": "おど-る",
        "english": "leap"
    },
    {
        "kanji": "闇",
        "onyomi": "",
        "kunyomi": "やみ",
        "english": "darkness"
    },
    {
        "kanji": "由",
        "onyomi": "ユ, ユウ,（ユイ）",
        "kunyomi": "よし",
        "english": "reason"
    },
    {
        "kanji": "油",
        "onyomi": "ユ",
        "kunyomi": "あぶら",
        "english": "oil"
    },
    {
        "kanji": "喩",
        "onyomi": "ユ",
        "kunyomi": "",
        "english": "metaphor"
    },
    {
        "kanji": "愉",
        "onyomi": "ユ",
        "kunyomi": "",
        "english": "pleasure"
    },
    {
        "kanji": "諭",
        "onyomi": "ユ",
        "kunyomi": "さと-す",
        "english": "rebuke"
    },
    {
        "kanji": "輸",
        "onyomi": "ユ",
        "kunyomi": "",
        "english": "transport"
    },
    {
        "kanji": "癒",
        "onyomi": "ユ",
        "kunyomi": "い-える, い-やす",
        "english": "healing"
    },
    {
        "kanji": "唯",
        "onyomi": "ユイ,（イ）",
        "kunyomi": "",
        "english": "solely"
    },
    {
        "kanji": "友",
        "onyomi": "ユウ",
        "kunyomi": "とも",
        "english": "friend"
    },
    {
        "kanji": "有",
        "onyomi": "ユウ, ウ",
        "kunyomi": "あ-る",
        "english": "have"
    },
    {
        "kanji": "勇",
        "onyomi": "ユウ",
        "kunyomi": "いさ-む",
        "english": "courage"
    },
    {
        "kanji": "幽",
        "onyomi": "ユウ",
        "kunyomi": "",
        "english": "seclude"
    },
    {
        "kanji": "悠",
        "onyomi": "ユウ",
        "kunyomi": "",
        "english": "permanence"
    },
    {
        "kanji": "郵",
        "onyomi": "ユウ",
        "kunyomi": "",
        "english": "mail"
    },
    {
        "kanji": "湧",
        "onyomi": "ユウ",
        "kunyomi": "わ-く",
        "english": "boil"
    },
    {
        "kanji": "猶",
        "onyomi": "ユウ",
        "kunyomi": "",
        "english": "furthermore"
    },
    {
        "kanji": "裕",
        "onyomi": "ユウ",
        "kunyomi": "",
        "english": "abundant"
    },
    {
        "kanji": "遊",
        "onyomi": "ユウ,（ユ）",
        "kunyomi": "あそ-ぶ",
        "english": "play"
    },
    {
        "kanji": "雄",
        "onyomi": "ユウ",
        "kunyomi": "お, おす",
        "english": "male"
    },
    {
        "kanji": "誘",
        "onyomi": "ユウ",
        "kunyomi": "さそ-う",
        "english": "entice"
    },
    {
        "kanji": "憂",
        "onyomi": "ユウ",
        "kunyomi": "うれ-える, うれ-い, う-い",
        "english": "melancholy"
    },
    {
        "kanji": "融",
        "onyomi": "ユウ",
        "kunyomi": "",
        "english": "dissolve"
    },
    {
        "kanji": "優",
        "onyomi": "ユウ",
        "kunyomi": "やさ-しい, すぐ-れる",
        "english": "superior"
    },
    {
        "kanji": "与",
        "onyomi": "ヨ",
        "kunyomi": "あた-える",
        "english": "give"
    },
    {
        "kanji": "予",
        "onyomi": "ヨ",
        "kunyomi": "",
        "english": "in advance"
    },
    {
        "kanji": "余",
        "onyomi": "ヨ",
        "kunyomi": "あま-る, あま-す",
        "english": "leave over"
    },
    {
        "kanji": "誉",
        "onyomi": "ヨ",
        "kunyomi": "ほま-れ",
        "english": "reputation"
    },
    {
        "kanji": "預",
        "onyomi": "ヨ",
        "kunyomi": "あず-ける, あず-かる",
        "english": "deposit"
    },
    {
        "kanji": "幼",
        "onyomi": "ヨウ",
        "kunyomi": "おさな-い",
        "english": "infancy"
    },
    {
        "kanji": "用",
        "onyomi": "ヨウ",
        "kunyomi": "もち-いる",
        "english": "use"
    },
    {
        "kanji": "羊",
        "onyomi": "ヨウ",
        "kunyomi": "ひつじ",
        "english": "sheep"
    },
    {
        "kanji": "妖",
        "onyomi": "ヨウ",
        "kunyomi": "あや-しい",
        "english": "bewitching"
    },
    {
        "kanji": "洋",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "ocean"
    },
    {
        "kanji": "要",
        "onyomi": "ヨウ",
        "kunyomi": "かなめ, い-る",
        "english": "need"
    },
    {
        "kanji": "容",
        "onyomi": "ヨウ",
        "kunyomi": "",
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
        "kunyomi": "あ-げる, あ-がる",
        "english": "hoist"
    },
    {
        "kanji": "揺",
        "onyomi": "ヨウ",
        "kunyomi": "ゆ-れる, ゆ-る, ゆ-らぐ, ゆ-るぐ, ゆ-する, ゆ-さぶる, ゆ-すぶる",
        "english": "swing"
    },
    {
        "kanji": "葉",
        "onyomi": "ヨウ",
        "kunyomi": "は",
        "english": "leaf"
    },
    {
        "kanji": "陽",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "sunshine"
    },
    {
        "kanji": "溶",
        "onyomi": "ヨウ",
        "kunyomi": "と-ける, と-かす, と-く",
        "english": "melt"
    },
    {
        "kanji": "腰",
        "onyomi": "ヨウ",
        "kunyomi": "こし",
        "english": "loins"
    },
    {
        "kanji": "様",
        "onyomi": "ヨウ",
        "kunyomi": "さま",
        "english": "formal title"
    },
    {
        "kanji": "瘍",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "boil (medical)"
    },
    {
        "kanji": "踊",
        "onyomi": "ヨウ",
        "kunyomi": "おど-る, おど-り",
        "english": "jump"
    },
    {
        "kanji": "窯",
        "onyomi": "ヨウ",
        "kunyomi": "かま",
        "english": "kiln"
    },
    {
        "kanji": "養",
        "onyomi": "ヨウ",
        "kunyomi": "やしな-う",
        "english": "foster"
    },
    {
        "kanji": "擁",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "embrace"
    },
    {
        "kanji": "謡",
        "onyomi": "ヨウ",
        "kunyomi": "うたい, うた-う",
        "english": "noh chanting"
    },
    {
        "kanji": "曜",
        "onyomi": "ヨウ",
        "kunyomi": "",
        "english": "day of the week"
    },
    {
        "kanji": "抑",
        "onyomi": "ヨク",
        "kunyomi": "おさ-える",
        "english": "repress"
    },
    {
        "kanji": "沃",
        "onyomi": "ヨク",
        "kunyomi": "",
        "english": "fertility"
    },
    {
        "kanji": "浴",
        "onyomi": "ヨク",
        "kunyomi": "あ-びる, あ-びせる",
        "english": "bathe"
    },
    {
        "kanji": "欲",
        "onyomi": "ヨク",
        "kunyomi": "ほっ-する, ほ-しい",
        "english": "longing"
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
        "kanji": "拉",
        "onyomi": "ラ",
        "kunyomi": "",
        "english": "crush"
    },
    {
        "kanji": "裸",
        "onyomi": "ラ",
        "kunyomi": "はだか",
        "english": "naked"
    },
    {
        "kanji": "羅",
        "onyomi": "ラ",
        "kunyomi": "",
        "english": "gauze"
    },
    {
        "kanji": "来",
        "onyomi": "ライ",
        "kunyomi": "く-る, きた-る, きた-す",
        "english": "come"
    },
    {
        "kanji": "雷",
        "onyomi": "ライ",
        "kunyomi": "かみなり",
        "english": "thunder"
    },
    {
        "kanji": "頼",
        "onyomi": "ライ",
        "kunyomi": "たの-む, たの-もしい, たよ-る",
        "english": "trust"
    },
    {
        "kanji": "絡",
        "onyomi": "ラク",
        "kunyomi": "から-む, から-まる, から-める",
        "english": "entwine"
    },
    {
        "kanji": "落",
        "onyomi": "ラク",
        "kunyomi": "お-ちる, お-とす",
        "english": "fall"
    },
    {
        "kanji": "酪",
        "onyomi": "ラク",
        "kunyomi": "",
        "english": "dairy products"
    },
    {
        "kanji": "辣",
        "onyomi": "ラツ",
        "kunyomi": "",
        "english": "bitter"
    },
    {
        "kanji": "乱",
        "onyomi": "ラン",
        "kunyomi": "みだ-れる, みだ-す",
        "english": "riot"
    },
    {
        "kanji": "卵",
        "onyomi": "ラン",
        "kunyomi": "たまご",
        "english": "egg"
    },
    {
        "kanji": "覧",
        "onyomi": "ラン",
        "kunyomi": "",
        "english": "perusal"
    },
    {
        "kanji": "濫",
        "onyomi": "ラン",
        "kunyomi": "",
        "english": "excessive"
    },
    {
        "kanji": "藍",
        "onyomi": "ラン",
        "kunyomi": "あい",
        "english": "indigo"
    },
    {
        "kanji": "欄",
        "onyomi": "ラン",
        "kunyomi": "",
        "english": "column"
    },
    {
        "kanji": "吏",
        "onyomi": "リ",
        "kunyomi": "",
        "english": "officer"
    },
    {
        "kanji": "利",
        "onyomi": "リ",
        "kunyomi": "き-く",
        "english": "profit"
    },
    {
        "kanji": "里",
        "onyomi": "リ",
        "kunyomi": "さと",
        "english": "village"
    },
    {
        "kanji": "理",
        "onyomi": "リ",
        "kunyomi": "",
        "english": "reason"
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
        "kanji": "履",
        "onyomi": "リ",
        "kunyomi": "は-く",
        "english": "footgear"
    },
    {
        "kanji": "璃",
        "onyomi": "リ",
        "kunyomi": "",
        "english": "glassy"
    },
    {
        "kanji": "離",
        "onyomi": "リ",
        "kunyomi": "はな-れる, はな-す",
        "english": "detach"
    },
    {
        "kanji": "陸",
        "onyomi": "リク",
        "kunyomi": "",
        "english": "land"
    },
    {
        "kanji": "立",
        "onyomi": "リツ,（リュウ）",
        "kunyomi": "た-つ, た-てる",
        "english": "stand up"
    },
    {
        "kanji": "律",
        "onyomi": "リツ,（リチ）",
        "kunyomi": "",
        "english": "law"
    },
    {
        "kanji": "慄",
        "onyomi": "リツ",
        "kunyomi": "",
        "english": "fear"
    },
    {
        "kanji": "略",
        "onyomi": "リャク",
        "kunyomi": "",
        "english": "abbreviation"
    },
    {
        "kanji": "柳",
        "onyomi": "リュウ",
        "kunyomi": "やなぎ",
        "english": "willow"
    },
    {
        "kanji": "流",
        "onyomi": "リュウ,（ル）",
        "kunyomi": "なが-れる, なが-す",
        "english": "stream"
    },
    {
        "kanji": "留",
        "onyomi": "リュウ,（ル）",
        "kunyomi": "と-める, と-まる",
        "english": "detain"
    },
    {
        "kanji": "竜",
        "onyomi": "リュウ",
        "kunyomi": "たつ",
        "english": "dragon"
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
        "kanji": "硫",
        "onyomi": "リュウ",
        "kunyomi": "",
        "english": "sulphur"
    },
    {
        "kanji": "侶",
        "onyomi": "リョ",
        "kunyomi": "",
        "english": "companion"
    },
    {
        "kanji": "旅",
        "onyomi": "リョ",
        "kunyomi": "たび",
        "english": "trip"
    },
    {
        "kanji": "虜",
        "onyomi": "リョ",
        "kunyomi": "",
        "english": "captive"
    },
    {
        "kanji": "慮",
        "onyomi": "リョ",
        "kunyomi": "",
        "english": "prudence"
    },
    {
        "kanji": "了",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "finish"
    },
    {
        "kanji": "両",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "both"
    },
    {
        "kanji": "良",
        "onyomi": "リョウ",
        "kunyomi": "よ-い",
        "english": "good"
    },
    {
        "kanji": "料",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "fee"
    },
    {
        "kanji": "涼",
        "onyomi": "リョウ",
        "kunyomi": "すず-しい, すず-む",
        "english": "refreshing"
    },
    {
        "kanji": "猟",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "game-hunting"
    },
    {
        "kanji": "陵",
        "onyomi": "リョウ",
        "kunyomi": "みささぎ",
        "english": "mausoleum"
    },
    {
        "kanji": "量",
        "onyomi": "リョウ",
        "kunyomi": "はか-る",
        "english": "quantity"
    },
    {
        "kanji": "僚",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "colleague"
    },
    {
        "kanji": "領",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "territory"
    },
    {
        "kanji": "寮",
        "onyomi": "リョウ",
        "kunyomi": "",
        "english": "dormitory"
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
        "kunyomi": "",
        "english": "clear"
    },
    {
        "kanji": "糧",
        "onyomi": "リョウ,（ロウ）",
        "kunyomi": "かて",
        "english": "provisions"
    },
    {
        "kanji": "力",
        "onyomi": "リョク, リキ",
        "kunyomi": "ちから",
        "english": "power"
    },
    {
        "kanji": "緑",
        "onyomi": "リョク,（ロク）",
        "kunyomi": "みどり",
        "english": "green"
    },
    {
        "kanji": "林",
        "onyomi": "リン",
        "kunyomi": "はやし",
        "english": "woods"
    },
    {
        "kanji": "厘",
        "onyomi": "リン",
        "kunyomi": "",
        "english": "thousandth"
    },
    {
        "kanji": "倫",
        "onyomi": "リン",
        "kunyomi": "",
        "english": "ethics"
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
        "kanji": "臨",
        "onyomi": "リン",
        "kunyomi": "のぞ-む",
        "english": "look to"
    },
    {
        "kanji": "瑠",
        "onyomi": "ル",
        "kunyomi": "",
        "english": "lapis lazuli"
    },
    {
        "kanji": "涙",
        "onyomi": "ルイ",
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
        "kanji": "塁",
        "onyomi": "ルイ",
        "kunyomi": "",
        "english": "bases"
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
        "kanji": "礼",
        "onyomi": "レイ, ライ",
        "kunyomi": "",
        "english": "thanks"
    },
    {
        "kanji": "冷",
        "onyomi": "レイ",
        "kunyomi": "つめ-たい, ひ-える, ひ-や, ひ-やす, ひ-やかす, さ-める, さ-ます",
        "english": "cool"
    },
    {
        "kanji": "励",
        "onyomi": "レイ",
        "kunyomi": "はげ-む, はげ-ます",
        "english": "encourage"
    },
    {
        "kanji": "戻",
        "onyomi": "レイ",
        "kunyomi": "もど-す, もど-る",
        "english": "re-"
    },
    {
        "kanji": "例",
        "onyomi": "レイ",
        "kunyomi": "たと-える",
        "english": "example"
    },
    {
        "kanji": "鈴",
        "onyomi": "レイ, リン",
        "kunyomi": "すず",
        "english": "small bell"
    },
    {
        "kanji": "零",
        "onyomi": "レイ",
        "kunyomi": "",
        "english": "zero"
    },
    {
        "kanji": "霊",
        "onyomi": "レイ, リョウ",
        "kunyomi": "たま",
        "english": "spirits"
    },
    {
        "kanji": "隷",
        "onyomi": "レイ",
        "kunyomi": "",
        "english": "slave"
    },
    {
        "kanji": "齢",
        "onyomi": "レイ",
        "kunyomi": "",
        "english": "age"
    },
    {
        "kanji": "麗",
        "onyomi": "レイ",
        "kunyomi": "うるわ-しい",
        "english": "lovely"
    },
    {
        "kanji": "暦",
        "onyomi": "レキ",
        "kunyomi": "こよみ",
        "english": "calendar"
    },
    {
        "kanji": "歴",
        "onyomi": "レキ",
        "kunyomi": "",
        "english": "curriculum"
    },
    {
        "kanji": "列",
        "onyomi": "レツ",
        "kunyomi": "",
        "english": "row"
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
        "kunyomi": "",
        "english": "ardent"
    },
    {
        "kanji": "裂",
        "onyomi": "レツ",
        "kunyomi": "さ-く, さ-ける",
        "english": "split"
    },
    {
        "kanji": "恋",
        "onyomi": "レン",
        "kunyomi": "こ-う, こい, こい-しい",
        "english": "romance"
    },
    {
        "kanji": "連",
        "onyomi": "レン",
        "kunyomi": "つら-なる, つら-ねる, つ-れる",
        "english": "take along"
    },
    {
        "kanji": "廉",
        "onyomi": "レン",
        "kunyomi": "",
        "english": "bargain"
    },
    {
        "kanji": "練",
        "onyomi": "レン",
        "kunyomi": "ね-る",
        "english": "practice"
    },
    {
        "kanji": "錬",
        "onyomi": "レン",
        "kunyomi": "",
        "english": "tempering"
    },
    {
        "kanji": "呂",
        "onyomi": "ロ",
        "kunyomi": "",
        "english": "spine"
    },
    {
        "kanji": "炉",
        "onyomi": "ロ",
        "kunyomi": "",
        "english": "hearth"
    },
    {
        "kanji": "賂",
        "onyomi": "ロ",
        "kunyomi": "",
        "english": "bribe"
    },
    {
        "kanji": "路",
        "onyomi": "ロ",
        "kunyomi": "じ",
        "english": "road"
    },
    {
        "kanji": "露",
        "onyomi": "ロ,（ロウ）",
        "kunyomi": "つゆ",
        "english": "dew"
    },
    {
        "kanji": "老",
        "onyomi": "ロウ",
        "kunyomi": "お-いる, ふ-ける",
        "english": "old man"
    },
    {
        "kanji": "労",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "labour"
    },
    {
        "kanji": "弄",
        "onyomi": "ロウ",
        "kunyomi": "もてあそ-ぶ",
        "english": "tamper with"
    },
    {
        "kanji": "郎",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "son"
    },
    {
        "kanji": "朗",
        "onyomi": "ロウ",
        "kunyomi": "ほが-らか",
        "english": "melodious"
    },
    {
        "kanji": "浪",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "wandering"
    },
    {
        "kanji": "廊",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "corridor"
    },
    {
        "kanji": "楼",
        "onyomi": "ロウ",
        "kunyomi": "",
        "english": "watchtower"
    },
    {
        "kanji": "漏",
        "onyomi": "ロウ",
        "kunyomi": "も-る, も-れる, も-らす",
        "english": "leak"
    },
    {
        "kanji": "籠",
        "onyomi": "ロウ",
        "kunyomi": "かご, こ-もる",
        "english": "basket"
    },
    {
        "kanji": "六",
        "onyomi": "ロク",
        "kunyomi": "む, む-つ, むっ-つ, （むい）",
        "english": "six"
    },
    {
        "kanji": "録",
        "onyomi": "ロク",
        "kunyomi": "",
        "english": "record"
    },
    {
        "kanji": "麓",
        "onyomi": "ロク",
        "kunyomi": "ふもと",
        "english": "foot of a mountain"
    },
    {
        "kanji": "論",
        "onyomi": "ロン",
        "kunyomi": "",
        "english": "theory"
    },
    {
        "kanji": "和",
        "onyomi": "ワ,（オ）",
        "kunyomi": "やわ-らぐ, やわ-らげる, なご-む, なご-やか",
        "english": "peace"
    },
    {
        "kanji": "話",
        "onyomi": "ワ",
        "kunyomi": "はな-す, はなし",
        "english": "talk"
    },
    {
        "kanji": "賄",
        "onyomi": "ワイ",
        "kunyomi": "まかな-う",
        "english": "bribe, board"
    },
    {
        "kanji": "脇",
        "onyomi": "",
        "kunyomi": "わき",
        "english": "aside"
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
        "kanji": "湾",
        "onyomi": "ワン",
        "kunyomi": "",
        "english": "gulf"
    },
    {
        "kanji": "腕",
        "onyomi": "ワン",
        "kunyomi": "うで",
        "english": "arm"
    }
];

