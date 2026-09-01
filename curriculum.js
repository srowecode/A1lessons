const a1Curriculum = [
    {
        id: 1,
        title: "Lesson 1: How to introduce yourself",
        goal: "Confidently introduce yourself and state your name, origin, and basic details. <br><span style='font-size:0.9rem; color:var(--text-light);'>(自信を持って自己紹介し、名前、出身、基本的な情報を伝える。)</span>",
        vocab: [
            { eng: "Teacher", jpn: "教師" },
            { eng: "Doctor", jpn: "医者" },
            { eng: "Nurse", jpn: "看護師" },
            { eng: "Dentist", jpn: "歯科医" },
            { eng: "Farmer", jpn: "農家" },
            { eng: "Chef", jpn: "料理人" },
            { eng: "Pilot", jpn: "パイロット" },
            { eng: "Police officer", jpn: "警察官" },
            { eng: "Firefighter", jpn: "消防士" },
            { eng: "Singer", jpn: "歌手" },
            { eng: "Actor", jpn: "俳優" },
            { eng: "Writer", jpn: "作家" },
            { eng: "Lawyer", jpn: "弁護士" },
            { eng: "Scientist", jpn: "科学者" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Hello</span>, I am Sarah. What is your name?", jpn: "こんにちは、私はサラです。あなたの名前は何ですか？" },
            { speaker: "B", eng: "Hi Sarah, my name is John. <span class='swappable'>Please call me Johnny.</span>", jpn: "やあサラ、私の名前はジョンです。ジョニーと呼んでください。" },
            { speaker: "A", eng: "<span class='swappable'>Nice to meet you</span>, Johnny. Where are you from?", jpn: "はじめまして、ジョニー。出身はどこですか？" },
            { speaker: "B", eng: "<span class='swappable'>I am from Canada</span>, but <span class='swappable'>I live in Japan now.</span> <span class='swappable'>What do you do?</span>", jpn: "カナダ出身ですが、今は日本に住んでいます。お仕事は何ですか？" },
            { speaker: "A", eng: "I am a student.", jpn: "私は学生です。" }
        ],
        expressions: [
            { category: "1. Greetings (挨拶)", options: ["Hello, how are you?", "Hi there!", "Good morning / Good afternoon."] },
            { category: "2. Saying your name/nickname (名前やニックネームの伝え方)", options: ["Please call me Ben.", "Everyone calls me Ben.", "I usually go by Ben."] },
            { category: "3. Saying nice to meet you (はじめましての伝え方)", options: ["It is a pleasure to meet you.", "Glad to meet you.", "It's great to meet you."] },
            { category: "4. Saying where you are from (出身地の伝え方)", options: ["I come from Canada.", "I grew up in Canada.", "My hometown is in Canada."] },
            { category: "5. Saying where you live now (現在の居住地の伝え方)", options: ["I am currently living in Japan.", "I'm based in Japan now.", "My home is in Japan these days."] },
            { category: "6. Asking about someone's job (職業の尋ね方)", options: ["What do you do?", "What is your job?", "What do you do for a living?"] }
        ],
        grammar: {
            point: "The Verb 'To Be' (am / is / are) - be動詞",
            explanation: "The verb 'to be' connects a subject to a noun or adjective that describes it. We use it to state absolute facts like identity, locations, age, and feelings. <br><span style='font-size:0.9rem; color:var(--text-light);'>(be動詞は、主語とそれを説明する名詞や形容詞を結びつけます。名前、場所、年齢、感情などの絶対的な事実を述べるために使われます。)</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the verbs in the phrases: 'I <u>am</u> Sarah', 'What <u>is</u> your name?', 'My name <u>is</u> John', 'Where <u>are</u> you from?', and 'I <u>am</u> from Canada.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『I <u>am</u> Sarah』などのフレーズの中の動詞に注目してください。)</span>",
            examples: [
                { eng: "I am a teacher.", jpn: "私は教師です。" },
                { eng: "She is 20 years old.", jpn: "彼女は20歳です。" },
                { eng: "They are not from Brazil.", jpn: "彼らはブラジル出身ではありません。" }
            ]
        },
        clickingGames: [
            { prompt: "私はスペイン出身です。", target: "I am from Spain.", words: ["I", "am", "from", "Spain."] },
            { prompt: "彼は医者です。", target: "He is a doctor.", words: ["He", "is", "a", "doctor."] },
            { prompt: "彼らは学生です。", target: "They are students.", words: ["They", "are", "students."] },
            { prompt: "彼女は私の友達です。", target: "She is my friend.", words: ["She", "is", "my", "friend."] },
            { prompt: "それは良い本です。", target: "It is a good book.", words: ["It", "is", "a", "good", "book."] }
        ],
        dropdownGames: [
            { before: "I", options: ["am", "is", "are"], answer: "am", after: " from Canada." },
            { before: "My name", options: ["am", "is", "are"], answer: "is", after: " Sarah." },
            { before: "We", options: ["am", "is", "are"], answer: "are", after: " 30 years old." },
            { before: "He", options: ["am", "is", "are"], answer: "is", after: " my brother." },
            { before: "They", options: ["am", "is", "are"], answer: "are", after: " very kind." },
            { before: "It", options: ["am", "is", "are"], answer: "is", after: " a sunny day." },
            { before: "I", options: ["am", "is", "are"], answer: "am", after: " not a student." },
            { before: "She", options: ["am", "is", "are"], answer: "is", after: " from London." },
            { before: "You", options: ["am", "is", "are"], answer: "are", after: " late!" },
            { before: "The apples", options: ["am", "is", "are"], answer: "are", after: " red." }
        ],
        roleplay: {
            a: "You are attending your first day at a new language school. Walk up to the person sitting next to you and introduce yourself. Tell them your name, age, and where you are from. (新しい語学学校の初日です。隣の人に自己紹介し、名前、年齢、出身を伝えてください。)",
            b: "You are a friendly student at the school. Reply to Student A, introduce yourself, tell them your nickname, and welcome them. (フレンドリーな生徒役です。挨拶を返し、ニックネームを教えて歓迎してください。)"
        },
        homework: {
            vocab: [
                { eng: "Engineer", jpn: "エンジニア" },
                { eng: "Musician", jpn: "音楽家" },
                { eng: "Artist", jpn: "芸術家" },
                { eng: "Baker", jpn: "パン屋" },
                { eng: "Clerk", jpn: "店員" },
                { eng: "Mechanic", jpn: "整備士" },
                { eng: "Driver", jpn: "運転手" },
                { eng: "Photographer", jpn: "写真家" },
                { eng: "Dancer", jpn: "ダンサー" },
                { eng: "Manager", jpn: "マネージャー" },
                { eng: "Programmer", jpn: "プログラマー" },
                { eng: "Hairdresser", jpn: "美容師" },
                { eng: "Journalist", jpn: "ジャーナリスト" },
                { eng: "President", jpn: "社長" }
            ],
            reading1: {
                title: "Task 2: Reading (Personal Profile)",
                instruction: "Read the social media profile.",
                eng: "<strong>Name:</strong> Anna<br><strong>Age:</strong> 25<br><strong>From:</strong> Germany<br><strong>City:</strong> Berlin<br><strong>Job:</strong> Student<br><strong>Hobbies:</strong> Reading, watching movies, and studying English.<br><br><strong>About Me:</strong><br>Hello! I am Anna. I live in a small apartment in Berlin with my pet cat, Luna. I study at the university from Monday to Friday. In the morning, I always drink coffee and eat toast. My favorite color is blue, and my favorite food is pizza. On weekends, I like to meet my friends. We usually go to a cafe or walk in the park. I want to make new friends from different countries. Please send me a message!",
                jpn: "<strong>名前：</strong>アンナ<br><strong>年齢：</strong>25歳<br><strong>出身：</strong>ドイツ<br><strong>都市：</strong>ベルリン<br><strong>職業：</strong>学生<br><strong>趣味：</strong>読書、映画鑑賞、英語の勉強<br><br><strong>私について：</strong><br>こんにちは！私はアンナです。ベルリンの小さなアパートで、ペットの猫のルナと一緒に住んでいます。月曜日から金曜日まで大学で勉強しています。朝はいつもコーヒーを飲んでトーストを食べます。好きな色は青で、好きな食べ物はピザです。週末は友達に会うのが好きです。私たちはたいていカフェに行ったり、公園を散歩したりします。いろいろな国の新しい友達を作りたいです。メッセージを送ってください！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hello, I am Sarah. What is your name?", jpn: "こんにちは、私はサラです。あなたの名前は何ですか？" },
                { speaker: "B", eng: "Hi Sarah, my name is John. Please call me Johnny.", jpn: "やあサラ、私の名前はジョンです。ジョニーと呼んでください。" },
                { speaker: "A", eng: "Nice to meet you, Johnny. Where are you from?", jpn: "はじめまして、ジョニー。出身はどこですか？" },
                { speaker: "B", eng: "I am from Canada, but I live in Japan now.", jpn: "カナダ出身ですが、今は日本に住んでいます。" },
                { speaker: "A", eng: "Oh, Japan is beautiful. I am from the UK.", jpn: "ああ、日本は美しいですね。私はイギリス出身です。" },
                { speaker: "B", eng: "I see. Are you a student?", jpn: "なるほど。あなたは学生ですか？" },
                { speaker: "A", eng: "Yes, I am an English student. What is your job?", jpn: "はい、私は英語を勉強する学生です。あなたの仕事は何ですか？" },
                { speaker: "B", eng: "I am an English teacher at this school.", jpn: "私はこの学校の英語教師です。" },
                { speaker: "A", eng: "That is great! See you later, Johnny.", jpn: "それは素晴らしいですね！また後で、ジョニー。" },
                { speaker: "B", eng: "See you, Sarah!", jpn: "またね、サラ！" }
            ],
            writingTask: {
                promptEng: "Write a short self-introduction profile. Include your name, age, country, city, and job. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "短い自己紹介のプロフィールを書いてください。名前、年齢、国、都市、職業を含めてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },
    {
        id: 2,
        title: "Lesson 2: How to ask the price of something",
        goal: "Ask how much an item costs and complete a simple transaction in a store. <br><span style='font-size:0.9rem; color:var(--text-light);'>(商品の値段を尋ね、お店で簡単な買い物を完了させる。)</span>",
        vocab: [
            { eng: "Clothes", jpn: "服" },
            { eng: "Shoes", jpn: "靴" },
            { eng: "Hat", jpn: "帽子" },
            { eng: "Socks", jpn: "靴下" },
            { eng: "Gloves", jpn: "手袋" },
            { eng: "Glasses", jpn: "眼鏡" },
            { eng: "Umbrella", jpn: "傘" },
            { eng: "Ring", jpn: "指輪" },
            { eng: "Watch", jpn: "腕時計" },
            { eng: "Wallet", jpn: "財布" },
            { eng: "Coat", jpn: "コート" },
            { eng: "Suit", jpn: "スーツ" },
            { eng: "Dress", jpn: "ドレス" },
            { eng: "Skirt", jpn: "スカート" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Excuse me.</span> <span class='swappable'>How much is this jacket?</span>", jpn: "すみません。このジャケットはいくらですか？" },
            { speaker: "B", eng: "That jacket is fifty dollars.", jpn: "そのジャケットは50ドルです。" },
            { speaker: "A", eng: "<span class='swappable'>It is a little expensive</span>, but I love the color. <span class='swappable'>I will buy it.</span>", jpn: "少し高いですが、色が気に入りました。買います。" },
            { speaker: "B", eng: "Great. <span class='swappable'>How would you like to pay?</span>", jpn: "ありがとうございます。お支払い方法はどうなさいますか？" },
            { speaker: "A", eng: "<span class='swappable'>Can I pay by card?</span>", jpn: "カードで支払えますか？" }
        ],
        expressions: [
            { category: "1. Getting attention (店員への声のかけ方)", options: ["Hi, could you help me?", "Sorry to bother you, but...", "Pardon me..."] },
            { category: "2. Asking the price (値段の尋ね方)", options: ["How much is this?", "What does this cost?", "What's the price of this?"] },
            { category: "3. Commenting on the item/price (商品や値段に対するコメント)", options: ["It's a bit pricey.", "That's a bit high.", "That's more than I thought."] },
            { category: "4. Saying you will buy it (購入の意思の伝え方)", options: ["I'll take it.", "I will buy this one.", "I'll get it."] },
            { category: "5. Asking how to pay (店員からの支払い方法の尋ね方)", options: ["How would you like to pay?", "Will that be cash or card?", "How are you paying today?"] },
            { category: "6. Payment methods (支払い方法)", options: ["Can I pay by card?", "Do you take credit cards?", "I'll pay in cash."] }
        ],
        grammar: {
            point: "Demonstratives (This / That / These / Those) - 指示代名詞",
            explanation: "Demonstratives point to specific things. They change based on distance (near or far) and number (singular or plural). <br><span style='font-size:0.9rem; color:var(--text-light);'>(指示代名詞は特定のものを指し示します。距離（近いか遠いか）と数（単数か複数か）によって形が変わります。)</span>",
            nuance: "Use 'This/These' for things close to you that you can touch. Use 'That/Those' for things far away. <br><span style='font-size:0.9rem; color:var(--text-light);'>(触れることができる近くのものには「This/These」を使い、遠くのものには「That/Those」を使います。)</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the demonstratives in the phrases: 'How much is <u>this</u> jacket?' and '<u>That</u> jacket is fifty dollars.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『How much is <u>this</u> jacket?』などのフレーズの中の指示代名詞に注目してください。)</span>",
            examples: [
                { eng: "This apple is delicious.", jpn: "このリンゴは美味しいです。（持っている場合）" },
                { eng: "That car is very fast.", jpn: "あの車はとても速いです。（遠くを見ている場合）" },
                { eng: "Are these shoes on sale?", jpn: "これらの靴はセール中ですか？" }
            ]
        },
        clickingGames: [
            { prompt: "この本は面白いです。(Near, Singular)", target: "This book is interesting.", words: ["This", "book", "is", "interesting."] },
            { prompt: "あの靴は高すぎます。(Far, Plural)", target: "Those shoes are too expensive.", words: ["Those", "shoes", "are", "too", "expensive."] },
            { prompt: "これらのリンゴは新鮮に見えます。(Near, Plural)", target: "These apples look fresh.", words: ["These", "apples", "look", "fresh."] },
            { prompt: "あの車は速いです。(Far, Singular)", target: "That car is fast.", words: ["That", "car", "is", "fast."] },
            { prompt: "これはおいしいです。(Near, Singular)", target: "This is delicious.", words: ["This", "is", "delicious."] }
        ],
        dropdownGames: [
            { before: "How much is", options: ["this", "these", "those"], answer: "this", after: " jacket?" },
            { before: "Look at", options: ["this", "that", "these"], answer: "that", after: " tall building over there!" },
            { before: "Are", options: ["this", "that", "these"], answer: "these", after: " your keys on the table?" },
            { before: "I want to buy", options: ["this", "that", "those"], answer: "those", after: " shoes over there." },
            { before: "Is", options: ["this", "that", "those"], answer: "this", after: " coffee right here hot?" },
            { before: "Who is", options: ["this", "that", "these"], answer: "that", after: " man across the street?" },
            { before: "Please take", options: ["this", "these", "that"], answer: "these", after: " bags to the car." },
            { before: "Is", options: ["this", "these", "those"], answer: "this", after: " your pen in my hand?" },
            { before: "Look! ", options: ["This", "That", "Those"], answer: "Those", after: " birds in the sky are beautiful." },
            { before: "I don't like", options: ["this", "that", "these"], answer: "that", after: " movie we saw yesterday." }
        ],
        roleplay: {
            a: "You are shopping for a new pair of shoes. You find a pair you like but there is no price tag. Ask the shop assistant for the price and decide if you want to buy them based on the cost. (靴を買いに来ました。値札がないので店員に値段を尋ね、買うか決めてください。)",
            b: "You are a shop assistant. Greet the customer, tell them the price (make up a number), and ask how they want to pay. (店員役です。客に挨拶し、適当な値段を伝えて支払い方法を尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Pants", jpn: "ズボン" },
                { eng: "Shirt", jpn: "シャツ" },
                { eng: "T-shirt", jpn: "Tシャツ" },
                { eng: "Sweater", jpn: "セーター" },
                { eng: "Jacket", jpn: "ジャケット" },
                { eng: "Bag", jpn: "鞄" },
                { eng: "Uniform", jpn: "制服" },
                { eng: "Underwear", jpn: "下着" },
                { eng: "Swimsuit", jpn: "水着" },
                { eng: "Scarf", jpn: "マフラー" },
                { eng: "Boots", jpn: "ブーツ" },
                { eng: "Sneakers", jpn: "スニーカー" },
                { eng: "Necklace", jpn: "ネックレス" },
                { eng: "Earrings", jpn: "イヤリング" }
            ],
            reading1: {
                title: "Task 2: Reading (Store Flyer)",
                instruction: "Read the store sale flyer.",
                eng: "<strong>★ SUPER FASHION MALL: BIG WINTER SALE ★</strong><br><br><strong>Store Hours:</strong> 9:00 AM - 8:00 PM (Every day)<br><strong>Location:</strong> 123 Main Street, near the station.<br><br><strong>Today's Special Prices:</strong><br>- Blue Winter Sweater: $20 (Very cheap!)<br>- Black Running Shoes: $50<br>- Red Cotton Shirt: $15<br>- Warm Winter Coat: $85<br>- Beautiful White Dress: $40<br>- Blue Jeans: $35<br><br><strong>Special Offer:</strong><br>Buy two items and get a free hat! We have red, black, and green hats. <br><br><em>* Notice to customers: We accept cash, credit cards, and smartphone payments. We do not accept checks. Thank you for shopping with us!</em>",
                jpn: "<strong>★ スーパーファッションモール：大ウィンターセール ★</strong><br><br><strong>営業時間：</strong> 午前9:00 - 午後8:00（毎日）<br><strong>場所：</strong> メインストリート123番地、駅の近く。<br><br><strong>本日の特別価格：</strong><br>- 青い冬用セーター：20ドル（とても安い！）<br>- 黒いランニングシューズ：50ドル<br>- 赤いコットンシャツ：15ドル<br>- 暖かい冬用コート：85ドル<br>- 美しい白いドレス：40ドル<br>- ブルージーンズ：35ドル<br><br><strong>特別オファー：</strong><br>2点お買い上げで帽子を1つ無料でプレゼント！帽子は赤、黒、緑があります。<br><br><em>※ お客様へのお知らせ：現金、クレジットカード、スマートフォン決済をご利用いただけます。小切手はご利用いただけません。当店でのお買い物ありがとうございます！</em>"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Excuse me. How much is this jacket?", jpn: "すみません。このジャケットはいくらですか？" },
                { speaker: "B", eng: "That jacket is fifty dollars.", jpn: "そのジャケットは50ドルです。" },
                { speaker: "A", eng: "It is a little expensive. Do you have a cheaper one?", jpn: "少し高いです。もっと安いものはありますか？" },
                { speaker: "B", eng: "Yes, these jackets are thirty dollars.", jpn: "はい、こちらのジャケットは30ドルです。" },
                { speaker: "A", eng: "Oh, they are nice. What colors do you have?", jpn: "ああ、素敵ですね。何色がありますか？" },
                { speaker: "B", eng: "We have black, blue, and red.", jpn: "黒、青、赤があります。" },
                { speaker: "A", eng: "I love the blue color. I will buy this one.", jpn: "青色が好きです。これを買います。" },
                { speaker: "B", eng: "Great. How would you like to pay?", jpn: "ありがとうございます。お支払い方法はどうなさいますか？" },
                { speaker: "A", eng: "Can I pay by card?", jpn: "カードで支払えますか？" },
                { speaker: "B", eng: "Yes, of course. Here is your receipt.", jpn: "はい、もちろんです。こちらがレシートです。" },
                { speaker: "A", eng: "Thank you!", jpn: "ありがとうございます！" }
            ],
            writingTask: {
                promptEng: "Imagine you are in a store. Write a short dialogue between you and a shop assistant about buying an item. Include the item, color, price, and how you will pay. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "お店にいると想像してください。あなたと店員との間の、買い物に関する短い会話を書いてください。買いたいもの、色、値段、支払い方法を含めてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    }, {
        id: 3,
        title: "Lesson 3: How to order at a cafe",
        goal: "Order food and drinks confidently from a cafe menu. <br><span style='font-size:0.9rem; color:var(--text-light);'>(カフェのメニューから自信を持って食べ物や飲み物を注文する。)</span>",
        vocab: [
            { eng: "Coffee", jpn: "コーヒー" },
            { eng: "Tea", jpn: "お茶 / 紅茶" },
            { eng: "Water", jpn: "水" },
            { eng: "Milk", jpn: "牛乳" },
            { eng: "Juice", jpn: "ジュース" },
            { eng: "Bread", jpn: "パン" },
            { eng: "Sandwich", jpn: "サンドイッチ" },
            { eng: "Egg", jpn: "卵" },
            { eng: "Meat", jpn: "肉" },
            { eng: "Fish", jpn: "魚" },
            { eng: "Rice", jpn: "ご飯" },
            { eng: "Salad", jpn: "サラダ" },
            { eng: "Soup", jpn: "スープ" },
            { eng: "Apple", jpn: "りんご" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Hello, are you ready to order?</span>", jpn: "こんにちは、ご注文はお決まりですか？" },
            { speaker: "B", eng: "Yes, please. <span class='swappable'>I would like a sandwich.</span>", jpn: "はい、お願いします。サンドイッチをください。" },
            { speaker: "A", eng: "Sure. <span class='swappable'>Would you like a drink with that?</span>", jpn: "かしこまりました。ご一緒に飲み物はいかがですか？" },
            { speaker: "B", eng: "Yes. <span class='swappable'>Can I have a cup of coffee?</span>", jpn: "はい。コーヒーを一杯いただけますか？" },
            { speaker: "A", eng: "Of course. <span class='swappable'>Is that for here or to go?</span>", jpn: "もちろんです。店内でお召し上がりですか、それともお持ち帰りですか？" },
            { speaker: "B", eng: "<span class='swappable'>For here, please.</span>", jpn: "店内でお願いします。" }
        ],
        expressions: [
            { category: "1. Clerk asking to order (店員からの注文の伺い方)", options: ["Hello, are you ready to order?", "What can I get for you?", "May I take your order?"] },
            { category: "2. Ordering food (食べ物の注文)", options: ["I would like a sandwich.", "I'll have a sandwich, please.", "I'd like a sandwich."] },
            { category: "3. Clerk asking about drinks (店員からの飲み物の提案)", options: ["Would you like a drink with that?", "Anything to drink?", "What would you like to drink?"] },
            { category: "4. Ordering a drink (飲み物の注文)", options: ["Can I have a cup of coffee?", "I would like some tea.", "A glass of water, please."] },
            { category: "5. Asking for here or to go (店内か持ち帰りかの確認)", options: ["Is that for here or to go?", "For here or take away?", "Will you be eating in?"] },
            { category: "6. Answering for here or to go (店内か持ち帰りかの返答)", options: ["For here, please.", "To go, please.", "I'll take it to go."] }
        ],
        grammar: {
            point: "'Would like' for Requests - 丁寧な依頼表現 (Would like)",
            explanation: "We use 'would like' to politely ask for something or state what we want. It is much more polite than saying 'I want'. <br><span style='font-size:0.9rem; color:var(--text-light);'>（『would like』は、何かを丁寧に頼んだり、欲しいものを伝えたりするときに使います。『I want』と言うよりもずっと丁寧です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the polite requests: 'I <u>would like</u> a sandwich' and '<u>Would</u> you <u>like</u> a drink with that?' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『I <u>would like</u> a sandwich』などの丁寧な依頼に注目してください。)</span>",
            examples: [
                { eng: "I would like a cup of tea, please.", jpn: "紅茶を一杯お願いします。" },
                { eng: "She would like the chicken salad.", jpn: "彼女はチキンサラダをお願いしたいそうです。" },
                { eng: "Would you like some water?", jpn: "お水はいかがですか？" }
            ]
        },
        clickingGames: [
            { prompt: "コーヒーをお願いします。", target: "I would like a coffee.", words: ["I", "would", "like", "a", "coffee."] },
            { prompt: "メニューをいただけますか？", target: "Can I have the menu?", words: ["Can", "I", "have", "the", "menu?"] },
            { prompt: "彼らは水をいくらか欲しいです。", target: "They would like some water.", words: ["They", "would", "like", "some", "water."] },
            { prompt: "デザートはいかがですか？", target: "Would you like a dessert?", words: ["Would", "you", "like", "a", "dessert?"] },
            { prompt: "ここでお召し上がりですか、それともお持ち帰りですか？", target: "For here or to go?", words: ["For", "here", "or", "to", "go?"] }
        ],
        dropdownGames: [
            { before: "I", options: ["would", "do", "am"], answer: "would", after: " like a sandwich." },
            { before: "", options: ["Would", "Do", "Can"], answer: "Would", after: " you like some coffee?" },
            { before: "Can I", options: ["have", "has", "having"], answer: "have", after: " a glass of water?" },
            { before: "He would", options: ["like", "likes", "liking"], answer: "like", after: " a slice of cake." },
            { before: "Is that for", options: ["here", "there", "house"], answer: "here", after: " or to go?" },
            { before: "We would like", options: ["some", "a", "any"], answer: "some", after: " tea, please." },
            { before: "What", options: ["would", "are", "do"], answer: "would", after: " you like to eat?" },
            { before: "I'll have a coffee", options: ["for", "to", "on"], answer: "to", after: " go, please." },
            { before: "", options: ["Are", "Do", "Would"], answer: "Are", after: " you ready to order?" },
            { before: "I would like an", options: ["apple", "water", "milk"], answer: "apple", after: "." }
        ],
        roleplay: {
            a: "You are a customer at a cafe. Order food, order a drink, and say you want to eat in the cafe. (あなたはカフェの客です。食べ物と飲み物を注文し、店内で食べることを伝えてください。)",
            b: "You are a cafe clerk. Ask the customer what they want, ask if they want a drink, and ask if it is for here or to go. (カフェの店員役です。注文を伺い、飲み物がいるか聞き、店内か持ち帰りかを確認してください。)"
        },
        homework: {
            vocab: [
                { eng: "Chicken", jpn: "鶏肉" },
                { eng: "Beef", jpn: "牛肉" },
                { eng: "Pork", jpn: "豚肉" },
                { eng: "Potato", jpn: "じゃがいも" },
                { eng: "Tomato", jpn: "トマト" },
                { eng: "Onion", jpn: "玉ねぎ" },
                { eng: "Cheese", jpn: "チーズ" },
                { eng: "Butter", jpn: "バター" },
                { eng: "Sugar", jpn: "砂糖" },
                { eng: "Salt", jpn: "塩" },
                { eng: "Pepper", jpn: "胡椒" },
                { eng: "Knife", jpn: "ナイフ" },
                { eng: "Fork", jpn: "フォーク" },
                { eng: "Spoon", jpn: "スプーン" }
            ],
            reading1: {
                title: "Task 2: Reading (Cafe Menu)",
                instruction: "Read the cafe menu.",
                eng: "<strong>★ SUNNY CAFE MENU ★</strong><br><br><strong>Drinks:</strong><br>- Hot Coffee: $3.00<br>- Iced Tea: $2.50<br>- Orange Juice: $4.00<br>- Milk: $2.00<br><br><strong>Food:</strong><br>- Egg Sandwich: $5.50<br>- Chicken Salad: $7.00<br>- Tomato Soup: $4.50<br><br><strong>Desserts:</strong><br>- Apple Pie: $4.00<br>- Chocolate Cake: $5.00<br><br><em>* Please order at the front desk. Enjoy your meal!</em>",
                jpn: "<strong>★ サニーカフェ メニュー ★</strong><br><br><strong>飲み物：</strong><br>- ホットコーヒー：3.00ドル<br>- アイスティー：2.50ドル<br>- オレンジジュース：4.00ドル<br>- 牛乳：2.00ドル<br><br><strong>食べ物：</strong><br>- 卵サンドイッチ：5.50ドル<br>- チキンサラダ：7.00ドル<br>- トマトスープ：4.50ドル<br><br><strong>デザート：</strong><br>- アップルパイ：4.00ドル<br>- チョコレートケーキ：5.00ドル<br><br><em>※ フロントデスクでご注文ください。お食事をお楽しみください！</em>"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hello, welcome to Sunny Cafe. Are you ready to order?", jpn: "こんにちは、サニーカフェへようこそ。ご注文はお決まりですか？" },
                { speaker: "B", eng: "Yes, I am. I would like a chicken salad, please.", jpn: "はい。チキンサラダをお願いします。" },
                { speaker: "A", eng: "One chicken salad. Would you like a drink with that?", jpn: "チキンサラダがお一つですね。お飲み物はいかがですか？" },
                { speaker: "B", eng: "Can I have an iced tea?", jpn: "アイスティーをいただけますか？" },
                { speaker: "A", eng: "Sure. Anything else? A dessert?", jpn: "かしこまりました。他にご注文は？デザートはいかがですか？" },
                { speaker: "B", eng: "No, thank you. That is all.", jpn: "いいえ、結構です。以上で。" },
                { speaker: "A", eng: "Okay. Is that for here or to go?", jpn: "わかりました。店内でお召し上がりですか、それともお持ち帰りですか？" },
                { speaker: "B", eng: "For here, please.", jpn: "店内でお願いします。" },
                { speaker: "A", eng: "Your total is nine dollars and fifty cents. Here is your number.", jpn: "お会計は9ドル50セントになります。こちらが番号札です。" },
                { speaker: "B", eng: "Thank you!", jpn: "ありがとう！" }
            ],
            writingTask: {
                promptEng: "Imagine you are at a cafe. Write a short dialogue between you and the cafe clerk. Include a food order, a drink order, and state if it is for here or to go. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "カフェにいると想像してください。あなたと店員との間の短い会話を書いてください。食べ物の注文、飲み物の注文、そして店内か持ち帰りかを含めてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 4,
        title: "Lesson 4: How to ask for directions",
        goal: "Ask for and understand basic directions to a location. <br><span style='font-size:0.9rem; color:var(--text-light);'>(場所への基本的な道順を尋ね、理解する。)</span>",
        vocab: [
            { eng: "Station", jpn: "駅" },
            { eng: "Bus stop", jpn: "バス停" },
            { eng: "Airport", jpn: "空港" },
            { eng: "Hotel", jpn: "ホテル" },
            { eng: "Hospital", jpn: "病院" },
            { eng: "Bank", jpn: "銀行" },
            { eng: "Park", jpn: "公園" },
            { eng: "Left", jpn: "左" },
            { eng: "Right", jpn: "右" },
            { eng: "Straight", jpn: "まっすぐ" },
            { eng: "Corner", jpn: "角" },
            { eng: "Street", jpn: "通り / 道" },
            { eng: "Map", jpn: "地図" },
            { eng: "Near", jpn: "近く" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Excuse me.</span> <span class='swappable'>Where is the train station?</span>", jpn: "すみません。駅はどこですか？" },
            { speaker: "B", eng: "It is near the park. <span class='swappable'>Go straight</span>, and <span class='swappable'>turn left.</span>", jpn: "公園の近くです。まっすぐ進んで、左に曲がってください。" },
            { speaker: "A", eng: "<span class='swappable'>Turn left?</span>", jpn: "左に曲がるのですか？" },
            { speaker: "B", eng: "Yes. <span class='swappable'>It is on your right.</span>", jpn: "はい。あなたの右側にあります。" },
            { speaker: "A", eng: "Thank you very much!", jpn: "どうもありがとうございます！" }
        ],
        expressions: [
            { category: "1. Getting attention (声のかけ方)", options: ["Excuse me.", "Pardon me.", "Hello, sorry to bother you."] },
            { category: "2. Asking for a location (場所の尋ね方)", options: ["Where is the train station?", "How do I get to the train station?", "Can you tell me where the train station is?"] },
            { category: "3. Giving basic directions 1 (基本的な道順の教え方1)", options: ["Go straight.", "Walk down this street.", "Go straight ahead."] },
            { category: "4. Giving basic directions 2 (基本的な道順の教え方2)", options: ["Turn left.", "Turn right.", "Take the next left."] },
            { category: "5. Asking for clarification (確認の仕方)", options: ["Turn left?", "Did you say left?", "So, I go straight?"] },
            { category: "6. Stating the final location (最終的な位置の伝え方)", options: ["It is on your right.", "It is on your left.", "It is across the street."] }
        ],
        grammar: {
            point: "Imperatives (Commands / Directions) - 命令形",
            explanation: "We use verbs with no subject (no 'you' or 'I') at the start of a sentence to give instructions, directions, or commands. <br><span style='font-size:0.9rem; color:var(--text-light);'>(指示、道案内、または命令をする時は、主語（『you』や『I』）を置かずに動詞から文を始めます。)</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the verbs at the beginning of the directions: '<u>Go</u> straight' and '<u>Turn</u> left'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：道案内の最初にある動詞『<u>Go</u> straight』や『<u>Turn</u> left』に注目してください。)</span>",
            examples: [
                { eng: "Go straight.", jpn: "まっすぐ進んでください。" },
                { eng: "Turn right at the corner.", jpn: "角を右に曲がってください。" },
                { eng: "Please look at the map.", jpn: "地図を見てください。" }
            ]
        },
        clickingGames: [
            { prompt: "まっすぐ進んでください。", target: "Go straight ahead.", words: ["Go", "straight", "ahead."] },
            { prompt: "ホテルはどこですか？", target: "Where is the hotel?", words: ["Where", "is", "the", "hotel?"] },
            { prompt: "それはあなたの右側にあります。", target: "It is on your right.", words: ["It", "is", "on", "your", "right."] },
            { prompt: "角を左に曲がってください。", target: "Turn left at the corner.", words: ["Turn", "left", "at", "the", "corner."] },
            { prompt: "駅は公園の近くです。", target: "The station is near the park.", words: ["The", "station", "is", "near", "the", "park."] }
        ],
        dropdownGames: [
            { before: "Excuse", options: ["me", "I", "my"], answer: "me", after: ", where is the hospital?" },
            { before: "Where", options: ["is", "am", "are"], answer: "is", after: " the train station?" },
            { before: "", options: ["Go", "Going", "Goes"], answer: "Go", after: " straight for two blocks." },
            { before: "Turn", options: ["left", "straight", "near"], answer: "left", after: " at the corner." },
            { before: "It is", options: ["on", "in", "at"], answer: "on", after: " your right." },
            { before: "How do I get", options: ["to", "for", "at"], answer: "to", after: " the airport?" },
            { before: "The bank is", options: ["near", "next", "on"], answer: "near", after: " the hotel." },
            { before: "Can you", options: ["tell", "say", "speak"], answer: "tell", after: " me where the park is?" },
            { before: "Walk", options: ["down", "under", "over"], answer: "down", after: " this street." },
            { before: "Thank you very", options: ["much", "many", "a lot"], answer: "much", after: "." }
        ],
        roleplay: {
            a: "You are a tourist. Ask a local person for directions to the hotel. (あなたは観光客です。地元の人にホテルまでの道順を尋ねてください。)",
            b: "You are a local person. Give the tourist directions to the hotel. (地元の人の役です。観光客にホテルまでの道順を教えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Train", jpn: "電車" },
                { eng: "Subway", jpn: "地下鉄" },
                { eng: "Bus", jpn: "バス" },
                { eng: "Taxi", jpn: "タクシー" },
                { eng: "Ticket", jpn: "切符 / チケット" },
                { eng: "Passenger", jpn: "乗客" },
                { eng: "Seat", jpn: "座席" },
                { eng: "Platform", jpn: "プラットホーム" },
                { eng: "Gate", jpn: "ゲート / 改札" },
                { eng: "Flight", jpn: "フライト / 便" },
                { eng: "Passport", jpn: "パスポート" },
                { eng: "Baggage", jpn: "手荷物" },
                { eng: "Schedule", jpn: "スケジュール / 時刻表" },
                { eng: "Delay", jpn: "遅れ" }
            ],
            reading1: {
                title: "Task 2: Reading (Street Signs)",
                instruction: "Read the public signs.",
                eng: "<strong>★ CITY SIGNS ★</strong><br><br>- <strong>STOP:</strong> Do not go.<br>- <strong>NO ENTRY:</strong> You cannot go in here.<br>- <strong>BUS STOP:</strong> Wait here for the bus.<br>- <strong>HOSPITAL ➔:</strong> Turn right for the hospital.<br>- <strong>STATION 100m:</strong> Walk straight for 100 meters.",
                jpn: "<strong>★ 街の標識 ★</strong><br><br>- <strong>STOP（止まれ）：</strong> 進まないでください。<br>- <strong>NO ENTRY（進入禁止）：</strong> ここには入れません。<br>- <strong>BUS STOP（バス停）：</strong> ここでバスを待ってください。<br>- <strong>HOSPITAL ➔（病院 ➔）：</strong> 病院は右に曲がってください。<br>- <strong>STATION 100m（駅 100m）：</strong> 100メートルまっすぐ歩いてください。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Excuse me. Sorry to bother you.", jpn: "すみません。お邪魔して申し訳ありません。" },
                { speaker: "B", eng: "Hello! How can I help you?", jpn: "こんにちは！何かお手伝いしましょうか？" },
                { speaker: "A", eng: "Can you tell me where the hospital is?", jpn: "病院がどこにあるか教えていただけますか？" },
                { speaker: "B", eng: "Yes. It is not far. Go straight down this street.", jpn: "はい。遠くありませんよ。この道をまっすぐ進んでください。" },
                { speaker: "A", eng: "Go straight?", jpn: "まっすぐですね？" },
                { speaker: "B", eng: "Yes. Go straight for two blocks, then turn right at the corner.", jpn: "はい。2ブロックまっすぐ進んで、角を右に曲がってください。" },
                { speaker: "A", eng: "Okay, turn right.", jpn: "わかりました、右に曲がる。" },
                { speaker: "B", eng: "It is on your left, near the big park.", jpn: "大きな公園の近くの、あなたの左側にあります。" },
                { speaker: "A", eng: "Great! Thank you so much for your help.", jpn: "素晴らしい！助けていただいて本当にありがとうございます。" },
                { speaker: "B", eng: "You are welcome. Have a nice day!", jpn: "どういたしまして。良い一日を！" }
            ],
            writingTask: {
                promptEng: "Imagine a tourist asks you for directions to the station. Write a short dialogue. Include 'go straight', 'turn left' or 'turn right', and where it is. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "観光客から駅までの道を尋ねられたと想像してください。短い会話を書いてください。「go straight（まっすぐ進む）」、「turn left（左に曲がる）」または「turn right（右に曲がる）」、そしてそれがどこにあるかを含めてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 5,
        title: "Lesson 5: How to talk about routines and frequency",
        goal: "Ask and answer questions about when and how often you do daily activities. <br><span style='font-size:0.9rem; color:var(--text-light);'>(いつ、どのくらいの頻度で日常の活動をするかについて質問し、答える。)</span>",
        vocab: [
            { eng: "Study", jpn: "勉強する" },
            { eng: "Exercise", jpn: "運動する" },
            { eng: "Cook", jpn: "料理する" },
            { eng: "Read", jpn: "読む" },
            { eng: "Always", jpn: "いつも" },
            { eng: "Usually", jpn: "たいてい" },
            { eng: "Often", jpn: "よく" },
            { eng: "Sometimes", jpn: "時々" },
            { eng: "Never", jpn: "決して〜ない" },
            { eng: "Every", jpn: "毎〜 / すべての" },
            { eng: "Once", jpn: "1回" },
            { eng: "Twice", jpn: "2回" },
            { eng: "Times", jpn: "〜回" },
            { eng: "Week", jpn: "週" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>When do you study English?</span>", jpn: "いつ英語を勉強しますか？" },
            { speaker: "B", eng: "<span class='swappable'>I study English in the evening.</span> <span class='swappable'>How often do you study?</span>", jpn: "夜に英語を勉強します。あなたはどのくらいの頻度で勉強しますか？" },
            { speaker: "A", eng: "<span class='swappable'>I study every day.</span> I love it.", jpn: "毎日勉強します。大好きなんです。" },
            { speaker: "B", eng: "Wow. <span class='swappable'>I usually study on weekends.</span> I also <span class='swappable'>read English books once a week.</span>", jpn: "うわあ。私はたいてい週末に勉強します。それから、週に1回英語の本を読みます。" }
        ],
        expressions: [
            { category: "1. Asking when someone does something (いつするか尋ねる)", options: ["When do you study English?", "What time do you wake up?", "When do you exercise?"] },
            { category: "2. Saying when you do something (いつするか伝える)", options: ["I study English in the evening.", "I wake up at 7 AM.", "I exercise in the morning."] },
            { category: "3. Asking how often someone does something (頻度を尋ねる)", options: ["How often do you study?", "How often do you exercise?", "How often do you cook?"] },
            { category: "4. Saying how often you do something - every (頻度の伝え方 - every)", options: ["I study every day.", "I exercise every morning.", "I cook every night."] },
            { category: "5. Saying how often you do something - indefinite (頻度の伝え方 - 漠然とした頻度)", options: ["I usually study on weekends.", "I always wake up early.", "I sometimes read at night."] },
            { category: "6. Saying how often you do something - definite (頻度の伝え方 - 明確な回数)", options: ["I read English books once a week.", "I go to the gym twice a week.", "I play tennis three times a month."] }
        ],
        grammar: {
            point: "Adverbs of Frequency - 頻度の副詞",
            explanation: "Indefinite frequency adverbs (always, usually, sometimes) are placed <strong>before</strong> the main verb. Definite frequency phrases (every day, once a week) are placed at the <strong>end</strong> of the sentence. <br><span style='font-size:0.9rem; color:var(--text-light);'>（漠然とした頻度を表す副詞（always, usually, sometimes）は一般動詞の<strong>前</strong>に置きます。明確な頻度を表すフレーズ（every day, once a week）は文の<strong>最後</strong>に置きます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the word placement: 'I <u>usually</u> study' vs 'I read English books <u>once a week</u>.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『I <u>usually</u> study』と『read... <u>once a week</u>』の単語の配置に注目してください。)</span>",
            examples: [
                { eng: "I always drink coffee in the morning.", jpn: "私は朝、いつもコーヒーを飲みます。" },
                { eng: "She plays tennis twice a week.", jpn: "彼女は週に2回テニスをします。" },
                { eng: "He never eats breakfast.", jpn: "彼は決して朝食を食べません。" }
            ]
        },
        clickingGames: [
            { prompt: "いつ英語を勉強しますか？", target: "When do you study English?", words: ["When", "do", "you", "study", "English?"] },
            { prompt: "私はたいてい週末に運動します。", target: "I usually exercise on weekends.", words: ["I", "usually", "exercise", "on", "weekends."] },
            { prompt: "どのくらいの頻度で料理をしますか？", target: "How often do you cook?", words: ["How", "often", "do", "you", "cook?"] },
            { prompt: "私は毎日勉強します。", target: "I study every day.", words: ["I", "study", "every", "day."] },
            { prompt: "私は週に2回テニスをします。", target: "I play tennis twice a week.", words: ["I", "play", "tennis", "twice", "a", "week."] }
        ],
        dropdownGames: [
            { before: "When", options: ["do", "are", "have"], answer: "do", after: " you exercise?" },
            { before: "I", options: ["usually", "every", "twice"], answer: "usually", after: " read in the evening." },
            { before: "How", options: ["often", "always", "time"], answer: "often", after: " do you cook?" },
            { before: "I study", options: ["every", "always", "sometimes"], answer: "every", after: " day." },
            { before: "I go to the gym", options: ["twice", "two", "always"], answer: "twice", after: " a week." },
            { before: "I", options: ["always", "once", "every"], answer: "always", after: " eat breakfast." },
            { before: "She goes shopping once", options: ["a", "in", "the"], answer: "a", after: " month." },
            { before: "", options: ["When", "How", "What"], answer: "When", after: " do you go to bed?" },
            { before: "I cook three", options: ["times", "time", "often"], answer: "times", after: " a week." },
            { before: "He", options: ["never", "every", "once"], answer: "never", after: " watches TV." }
        ],
        roleplay: {
            a: "You are talking to a coworker. Ask them when they exercise, and ask how often they go to the gym. (同僚と話しています。いつ運動するか、そしてどのくらいの頻度でジムに行くか尋ねてください。)",
            b: "You are a coworker. Tell them you exercise in the morning, say you go to the gym twice a week, and ask how often they cook. (同僚役です。朝に運動すること、週に2回ジムに行くことを伝え、相手がどのくらいの頻度で料理をするか尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Clean", jpn: "掃除する" },
                { eng: "Wash", jpn: "洗う" },
                { eng: "Relax", jpn: "リラックスする" },
                { eng: "Commute", jpn: "通勤・通学する" },
                { eng: "Arrive", jpn: "到着する" },
                { eng: "Leave", jpn: "出発する / 去る" },
                { eng: "Take a bath", jpn: "お風呂に入る" },
                { eng: "Do laundry", jpn: "洗濯をする" },
                { eng: "Listen", jpn: "聴く" },
                { eng: "Watch", jpn: "見る" },
                { eng: "Play", jpn: "遊ぶ / 演奏する" },
                { eng: "Sing", jpn: "歌う" },
                { eng: "Draw", jpn: "描く" },
                { eng: "Paint", jpn: "絵の具で描く" }
            ],
            reading1: {
                title: "Task 2: Reading (Journal Entry)",
                instruction: "Read the diary entry about daily habits.",
                eng: "<strong>My Daily Routine</strong><br><br>I have a very busy schedule, but I always make time for my hobbies. I usually wake up at 6 AM and go for a run. I exercise every morning because it feels great. After work, I commute home and arrive at 6 PM. I sometimes cook dinner, but I order pizza once a week. In the evening, I often relax and listen to music. I never watch TV. I go to bed at 11 PM every night.",
                jpn: "<strong>私の日課</strong><br><br>私はとても忙しいスケジュールですが、いつも趣味の時間を作ります。たいてい午前6時に起きてランニングに行きます。とても気持ちがいいので、毎朝運動します。仕事の後、通勤して午後6時に家に着きます。時々夕食を作りますが、週に1回はピザを注文します。夜はよくリラックスして音楽を聴きます。テレビは決して見ません。毎晩11時に寝ます。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hey John, when do you usually relax?", jpn: "ねえジョン、いつもいつリラックスしてるの？" },
                { speaker: "B", eng: "I usually relax in the evening after work.", jpn: "たいてい仕事の後の夜にリラックスするよ。" },
                { speaker: "A", eng: "That sounds nice. How often do you watch movies?", jpn: "いいね。どのくらいの頻度で映画を見るの？" },
                { speaker: "B", eng: "I watch movies twice a month. What about you?", jpn: "月に2回映画を見るよ。君は？" },
                { speaker: "A", eng: "I love movies! I watch them every weekend.", jpn: "私は映画が大好き！毎週末見るわ。" },
                { speaker: "B", eng: "Wow. Do you ever go to the movie theater?", jpn: "うわあ。映画館には行くの？" },
                { speaker: "A", eng: "Sometimes. I go to the theater once a month.", jpn: "時々ね。月に1回映画館に行くわ。" },
                { speaker: "B", eng: "I never go to the theater. It is too expensive.", jpn: "僕は映画館には決して行かないな。高すぎるから。" },
                { speaker: "A", eng: "That is true. Well, let's watch a movie at my house next time!", jpn: "確かにね。じゃあ、今度は私の家で映画を見よう！" },
                { speaker: "B", eng: "I always like a free movie. Thanks!", jpn: "無料の映画はいつでも歓迎だよ。ありがとう！" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your habits. Include when you do your hobbies, and how often you do chores (like cleaning or cooking). Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "あなたの習慣について短い文章を書いてください。いつ趣味をするか、そしてどのくらいの頻度で家事（掃除や料理など）をするかを含めてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 6,
        title: "Lesson 6: How to make plans with a friend",
        goal: "Invite someone to do an activity, accept or decline, and decide on a time and place. <br><span style='font-size:0.9rem; color:var(--text-light);'>(誰かを遊びに誘い、承諾または断り、時間と場所を決める。)</span>",
        vocab: [
            { eng: "Movie", jpn: "映画" },
            { eng: "Concert", jpn: "コンサート" },
            { eng: "Museum", jpn: "博物館 / 美術館" },
            { eng: "Restaurant", jpn: "レストラン" },
            { eng: "Shopping", jpn: "買い物" },
            { eng: "Park", jpn: "公園" },
            { eng: "Beach", jpn: "ビーチ / 海" },
            { eng: "Free", jpn: "暇な / 空いている" },
            { eng: "Busy", jpn: "忙しい" },
            { eng: "Great", jpn: "素晴らしい" },
            { eng: "Sorry", jpn: "ごめんなさい" },
            { eng: "Tomorrow", jpn: "明日" },
            { eng: "Weekend", jpn: "週末" },
            { eng: "Tonight", jpn: "今夜" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Are you free this weekend?</span>", jpn: "今週末は空いていますか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>I am free on Saturday.</span>", jpn: "はい、土曜日は空いています。" },
            { speaker: "A", eng: "<span class='swappable'>Let's go to the movies.</span>", jpn: "映画に行きましょう。" },
            { speaker: "B", eng: "<span class='swappable'>That sounds great!</span> <span class='swappable'>What time should we meet?</span>", jpn: "それはいいですね！何時に会いましょうか？" },
            { speaker: "A", eng: "<span class='swappable'>Let's meet at 2 PM.</span>", jpn: "午後2時に会いましょう。" }
        ],
        expressions: [
            { category: "1. Asking about availability (予定の確認)", options: ["Are you free this weekend?", "Do you have time tomorrow?", "Are you busy tonight?"] },
            { category: "2. Stating availability (空いている日の伝え方)", options: ["I am free on Saturday.", "I have time tomorrow.", "I am not busy."] },
            { category: "3. Making a suggestion (提案する)", options: ["Let's go to the movies.", "Let's go shopping.", "Let's eat lunch."] },
            { category: "4. Accepting or Declining (提案に対する返答)", options: ["That sounds great!", "I would love to!", "Sorry, I am busy."] },
            { category: "5. Asking for details (時間や場所の確認)", options: ["What time should we meet?", "Where should we meet?", "When is a good time?"] },
            { category: "6. Suggesting details (時間や場所の提案)", options: ["Let's meet at 2 PM.", "Let's meet at the station.", "How about 3 o'clock?"] }
        ],
        grammar: {
            point: "Making Suggestions (Let's + Verb) - 提案の表現 (Let's)",
            explanation: "We use 'Let's' (Let us) followed by a base verb to suggest doing an activity together with someone. <br><span style='font-size:0.9rem; color:var(--text-light);'>（『Let's』の後に動詞の原形を続けて、誰かと一緒に何かをする提案をします。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the suggestions: '<u>Let's go</u> to the movies' and '<u>Let's meet</u> at 2 PM.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>Let's go</u>』や『<u>Let's meet</u>』などの提案に注目してください。)</span>",
            examples: [
                { eng: "Let's eat lunch together.", jpn: "一緒にお昼ご飯を食べましょう。" },
                { eng: "Let's go to the park.", jpn: "公園に行きましょう。" },
                { eng: "Let's play tennis tomorrow.", jpn: "明日はテニスをしましょう。" }
            ]
        },
        clickingGames: [
            { prompt: "今夜は空いていますか？", target: "Are you free tonight?", words: ["Are", "you", "free", "tonight?"] },
            { prompt: "買い物に行きましょう。", target: "Let's go shopping.", words: ["Let's", "go", "shopping."] },
            { prompt: "それはいいですね！", target: "That sounds great!", words: ["That", "sounds", "great!"] },
            { prompt: "何時に会いましょうか？", target: "What time should we meet?", words: ["What", "time", "should", "we", "meet?"] },
            { prompt: "駅で会いましょう。", target: "Let's meet at the station.", words: ["Let's", "meet", "at", "the", "station."] }
        ],
        dropdownGames: [
            { before: "Are you", options: ["free", "time", "have"], answer: "free", after: " this weekend?" },
            { before: "", options: ["Let's", "Let", "Do"], answer: "Let's", after: " go to the museum." },
            { before: "That", options: ["sounds", "hears", "listens"], answer: "sounds", after: " great!" },
            { before: "What time", options: ["should", "let's", "are"], answer: "should", after: " we meet?" },
            { before: "Let's meet", options: ["in", "on", "at"], answer: "at", after: " the cafe." },
            { before: "Do you", options: ["have", "are", "is"], answer: "have", after: " time tomorrow?" },
            { before: "Sorry, I", options: ["am", "do", "have"], answer: "am", after: " busy today." },
            { before: "Let's", options: ["eat", "eats", "eating"], answer: "eat", after: " dinner tonight." },
            { before: "Where should", options: ["we", "us", "our"], answer: "we", after: " go?" },
            { before: "I am free", options: ["in", "on", "at"], answer: "on", after: " Sunday." }
        ],
        roleplay: {
            a: "You want to hang out with your friend this weekend. Ask if they are free, suggest an activity (like going to a restaurant), and decide a time. (今週末、友達と遊びたいです。空いているか聞き、レストランに行くなどの提案をして、時間を決めてください。)",
            b: "You are a friend. You are free this weekend. Accept the invitation and ask where you should meet. (友達役です。今週末は空いています。誘いを受け入れ、どこで会うか尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Play", jpn: "遊ぶ / する" },
                { eng: "Watch", jpn: "見る" },
                { eng: "Visit", jpn: "訪れる" },
                { eng: "Meet", jpn: "会う" },
                { eng: "Walk", jpn: "歩く / 散歩" },
                { eng: "Exciting", jpn: "ワクワクする" },
                { eng: "Fun", jpn: "楽しい" },
                { eng: "Boring", jpn: "つまらない" },
                { eng: "Tired", jpn: "疲れた" },
                { eng: "Sure", jpn: "もちろん" },
                { eng: "Maybe", jpn: "たぶん" },
                { eng: "Idea", jpn: "アイデア / 考え" },
                { eng: "Place", jpn: "場所" },
                { eng: "Plan", jpn: "計画 / 予定" }
            ],
            reading1: {
                title: "Task 2: Reading (Text Messages)",
                instruction: "Read the text messages.",
                eng: "<strong>Tom:</strong> Hey Lisa! Do you have time tomorrow?<br><strong>Lisa:</strong> Hi Tom! Yes, I am free in the afternoon. Why?<br><strong>Tom:</strong> Let's go to the new art museum. It looks very fun.<br><strong>Lisa:</strong> That sounds great! I love art. What time should we meet?<br><strong>Tom:</strong> Let's meet at 1 PM at the station.<br><strong>Lisa:</strong> Sure! See you tomorrow.",
                jpn: "<strong>トム：</strong> やあリサ！明日は時間ある？<br><strong>リサ：</strong> こんにちはトム！うん、午後は空いてるよ。どうして？<br><strong>トム：</strong> 新しい美術館に行こうよ。とても楽しそうなんだ。<br><strong>リサ：</strong> それはいいね！私、アートが好きなの。何時に会おうか？<br><strong>トム：</strong> 午後1時に駅で会おう。<br><strong>リサ：</strong> もちろん！また明日ね。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hi John. Are you free this weekend?", jpn: "こんにちは、ジョン。今週末は空いてる？" },
                { speaker: "B", eng: "Sorry, I am busy on Saturday. I have work.", jpn: "ごめん、土曜日は忙しいんだ。仕事があるから。" },
                { speaker: "A", eng: "Oh, I see. What about Sunday?", jpn: "ああ、そうなんだ。日曜日はどう？" },
                { speaker: "B", eng: "I am free on Sunday. Do you want to do something?", jpn: "日曜日は空いてるよ。何かしたいの？" },
                { speaker: "A", eng: "Yes! Let's go to the beach.", jpn: "うん！ビーチに行こうよ。" },
                { speaker: "B", eng: "That is a great idea. It is very hot today.", jpn: "それはいいアイデアだね。今日はとても暑いし。" },
                { speaker: "A", eng: "Where should we meet?", jpn: "どこで会おうか？" },
                { speaker: "B", eng: "Let's meet at the bus stop near my house.", jpn: "僕の家の近くのバス停で会おう。" },
                { speaker: "A", eng: "Okay. What time should we meet?", jpn: "わかった。何時に会う？" },
                { speaker: "B", eng: "Let's meet at 10 AM. See you then!", jpn: "午前10時に会おう。じゃあその時に！" }
            ],
            writingTask: {
                promptEng: "Write a short message inviting your friend to do something. Ask if they are free, suggest an activity using 'Let's', and suggest a time and place. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "友達を遊びに誘う短いメッセージを書いてください。空いているか尋ね、「Let's」を使ってアクティビティを提案し、時間と場所を提案してください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 7,
        title: "Lesson 7: How to talk about hobbies and interests",
        goal: "Ask and answer questions about what you like to do in your free time. <br><span style='font-size:0.9rem; color:var(--text-light);'>(自由な時間に何をするのが好きかについて質問し、答える。)</span>",
        vocab: [
            { eng: "Hobby", jpn: "趣味" },
            { eng: "Music", jpn: "音楽" },
            { eng: "Book", jpn: "本" },
            { eng: "Movie", jpn: "映画" },
            { eng: "Sports", jpn: "スポーツ" },
            { eng: "Game", jpn: "ゲーム" },
            { eng: "Picture", jpn: "絵 / 写真" },
            { eng: "Song", jpn: "歌" },
            { eng: "Listen", jpn: "聴く" },
            { eng: "Watch", jpn: "見る" },
            { eng: "Read", jpn: "読む" },
            { eng: "Play", jpn: "遊ぶ / する" },
            { eng: "Make", jpn: "作る" },
            { eng: "Like", jpn: "好き" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>What do you do in your free time?</span>", jpn: "自由な時間には何をしていますか？" },
            { speaker: "B", eng: "<span class='swappable'>I like playing tennis.</span> <span class='swappable'>How about you?</span>", jpn: "私はテニスをするのが好きです。あなたはどうですか？" },
            { speaker: "A", eng: "<span class='swappable'>I like reading books.</span> <span class='swappable'>Do you like reading?</span>", jpn: "私は本を読むのが好きです。あなたは読書が好きですか？" },
            { speaker: "B", eng: "<span class='swappable'>No, not really.</span> I prefer watching movies.", jpn: "いいえ、それほどでもないです。私は映画を見る方が好きです。" }
        ],
        expressions: [
            { category: "1. Asking about hobbies (趣味の尋ね方)", options: ["What do you do in your free time?", "What are your hobbies?", "What do you like to do?"] },
            { category: "2. Stating hobbies (趣味の伝え方)", options: ["I like playing tennis.", "I enjoy listening to music.", "My hobby is taking pictures."] },
            { category: "3. Asking the other person (相手に尋ね返す)", options: ["How about you?", "And you?", "What about you?"] },
            { category: "4. Stating your hobby (自分の趣味の伝え方)", options: ["I like reading books.", "I love watching movies.", "I like playing games."] },
            { category: "5. Asking about specific interests (特定の事柄が好きか尋ねる)", options: ["Do you like reading?", "Do you enjoy playing sports?", "Are you interested in music?"] },
            { category: "6. Answering negatively/softly (否定的な・やんわりとした返答)", options: ["No, not really.", "Not very much.", "I prefer doing other things."] }
        ],
        grammar: {
            point: "Like + Verb-ing (Gerunds) - 〜するのが好き (動名詞)",
            explanation: "When we talk about activities we enjoy, we often use 'like' followed by a verb with '-ing' (a gerund). <br><span style='font-size:0.9rem; color:var(--text-light);'>（楽しんでしている活動について話すとき、多くの場合『like』の後に『-ing』のついた動詞（動名詞）を使用します。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the '-ing' words after like: 'I like <u>playing</u> tennis' and 'I like <u>reading</u> books.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：likeの後の『-ing』がつく単語、『like <u>playing</u>』や『like <u>reading</u>』に注目してください。)</span>",
            examples: [
                { eng: "I like cooking dinner.", jpn: "私は夕食を作るのが好きです。" },
                { eng: "Do you like listening to music?", jpn: "あなたは音楽を聴くのが好きですか？" },
                { eng: "He likes watching baseball.", jpn: "彼は野球を見るのが好きです。" }
            ]
        },
        clickingGames: [
            { prompt: "自由な時間には何をしますか？", target: "What do you do in your free time?", words: ["What", "do", "you", "do", "in", "your", "free", "time?"] },
            { prompt: "私は音楽を聴くのが好きです。", target: "I like listening to music.", words: ["I", "like", "listening", "to", "music."] },
            { prompt: "彼は本を読むのが好きです。", target: "He likes reading books.", words: ["He", "likes", "reading", "books."] },
            { prompt: "あなたはどうですか？", target: "How about you?", words: ["How", "about", "you?"] },
            { prompt: "スポーツは好きですか？", target: "Do you like sports?", words: ["Do", "you", "like", "sports?"] }
        ],
        dropdownGames: [
            { before: "What do you do", options: ["in", "on", "at"], answer: "in", after: " your free time?" },
            { before: "I like", options: ["play", "playing", "plays"], answer: "playing", after: " soccer." },
            { before: "Do you", options: ["like", "likes", "liking"], answer: "like", after: " reading?" },
            { before: "She", options: ["like", "likes", "liking"], answer: "likes", after: " watching movies." },
            { before: "What", options: ["do", "are", "is"], answer: "are", after: " your hobbies?" },
            { before: "I enjoy", options: ["listen", "listens", "listening"], answer: "listening", after: " to music." },
            { before: "How", options: ["about", "for", "with"], answer: "about", after: " you?" },
            { before: "No, not", options: ["really", "very", "much"], answer: "really", after: "." },
            { before: "My hobby", options: ["is", "are", "am"], answer: "is", after: " cooking." },
            { before: "What do you like", options: ["to", "for", "in"], answer: "to", after: " do?" }
        ],
        roleplay: {
            a: "You are at a party. Ask a new friend what they like to do in their free time. Ask a follow-up question about their hobby. (パーティーにいます。新しい友達に自由な時間に何をするのが好きか尋ねてください。趣味についての追加の質問もしてください。)",
            b: "You are the new friend. Tell them your hobby, and then ask them what they like to do. (新しい友達の役です。自分の趣味を伝え、相手に何をするのが好きか尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Swim", jpn: "泳ぐ" },
                { eng: "Run", jpn: "走る" },
                { eng: "Travel", jpn: "旅行する" },
                { eng: "Dance", jpn: "踊る" },
                { eng: "Sing", jpn: "歌う" },
                { eng: "Guitar", jpn: "ギター" },
                { eng: "Piano", jpn: "ピアノ" },
                { eng: "Photo", jpn: "写真" },
                { eng: "Bake", jpn: "焼く / お菓子作り" },
                { eng: "Chess", jpn: "チェス" },
                { eng: "Draw", jpn: "描く" },
                { eng: "Paint", jpn: "絵の具で描く" },
                { eng: "Collect", jpn: "集める" },
                { eng: "Favorite", jpn: "お気に入りの" }
            ],
            reading1: {
                title: "Task 2: Reading (Blog Post)",
                instruction: "Read the blog post about hobbies.",
                eng: "<strong>My Weekend Hobbies</strong><br><br>Hello everyone! Today, I want to talk about my hobbies. In my free time, I love playing the guitar. I am not very good, but it is fun. I practice playing the guitar every Saturday morning. I also really like taking photos. I often walk in the park and take pictures of flowers and birds. What are your hobbies? Do you like taking photos too? Please leave a comment below!",
                jpn: "<strong>私の週末の趣味</strong><br><br>皆さん、こんにちは！今日は私の趣味について話したいと思います。自由な時間には、ギターを弾くのが大好きです。あまり上手ではありませんが、楽しいです。毎週土曜日の朝にギターを弾く練習をしています。写真を撮るのも本当に好きです。よく公園を散歩して、花や鳥の写真を撮ります。皆さんの趣味は何ですか？皆さんも写真を撮るのが好きですか？下にコメントを残してください！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hi there! What do you do in your free time?", jpn: "こんにちは！自由な時間には何をしていますか？" },
                { speaker: "B", eng: "I like playing tennis. How about you?", jpn: "私はテニスをするのが好きです。あなたはどうですか？" },
                { speaker: "A", eng: "I like reading books. Do you like reading?", jpn: "私は本を読むのが好きです。あなたは読書が好きですか？" },
                { speaker: "B", eng: "No, not really. I prefer watching movies.", jpn: "いいえ、それほどでもないです。私は映画を見る方が好きです。" },
                { speaker: "A", eng: "Oh, what kind of movies do you like?", jpn: "ああ、どんな映画が好きですか？" },
                { speaker: "B", eng: "I like watching action movies. They are very exciting.", jpn: "アクション映画を見るのが好きです。とてもワクワクします。" },
                { speaker: "A", eng: "I see. I also enjoy baking on the weekends.", jpn: "なるほど。私は週末にお菓子を焼くのも楽しんでいます。" },
                { speaker: "B", eng: "Baking? That sounds delicious. Do you bake cakes?", jpn: "お菓子作り？美味しそうですね。ケーキを焼くのですか？" },
                { speaker: "A", eng: "Yes! I make chocolate cake once a month.", jpn: "はい！月に1回チョコレートケーキを作ります。" },
                { speaker: "B", eng: "That is great. I love eating cake!", jpn: "それは素晴らしいですね。私はケーキを食べるのが大好きです！" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your hobbies. Include what you like doing in your free time, and mention one thing you do NOT like doing. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "あなたの趣味について短い文章を書いてください。自由な時間にするのが好きなことと、するのが好きではないことを1つ含めてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 8,
        title: "Lesson 8: How to talk about your family",
        goal: "Ask and answer questions about family members and describe their personality and appearance. <br><span style='font-size:0.9rem; color:var(--text-light);'>(家族のメンバーについて質問し答え、性格や容姿を描写する。)</span>",
        vocab: [
            { eng: "Family", jpn: "家族" },
            { eng: "Mother", jpn: "母" },
            { eng: "Father", jpn: "父" },
            { eng: "Brother", jpn: "兄弟" },
            { eng: "Sister", jpn: "姉妹" },
            { eng: "Husband", jpn: "夫" },
            { eng: "Wife", jpn: "妻" },
            { eng: "Tall", jpn: "背が高い" },
            { eng: "Short", jpn: "背が低い" },
            { eng: "Kind", jpn: "優しい / 親切な" },
            { eng: "Funny", jpn: "面白い" },
            { eng: "Strict", jpn: "厳しい" },
            { eng: "Quiet", jpn: "静かな" },
            { eng: "Smart", jpn: "賢い" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Do you have any brothers or sisters?</span>", jpn: "兄弟や姉妹はいますか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>I have one older brother.</span>", jpn: "はい、私には兄が1人います。" },
            { speaker: "A", eng: "Oh, <span class='swappable'>how old is he?</span>", jpn: "ああ、彼は何歳ですか？" },
            { speaker: "B", eng: "<span class='swappable'>He is twenty-five years old.</span>", jpn: "彼は25歳です。" },
            { speaker: "A", eng: "<span class='swappable'>What is he like?</span>", jpn: "彼はどんな人ですか？" },
            { speaker: "B", eng: "<span class='swappable'>He is very tall and kind.</span>", jpn: "彼はとても背が高くて優しいです。" }
        ],
        expressions: [
            { category: "1. Asking about family (家族構成の尋ね方)", options: ["Do you have any brothers or sisters?", "Do you live with your family?", "How big is your family?"] },
            { category: "2. Stating family members (家族構成の伝え方)", options: ["I have one older brother.", "I have two younger sisters.", "I am an only child."] },
            { category: "3. Asking someone's age (年齢の尋ね方)", options: ["How old is he?", "How old is your sister?", "What is his age?"] },
            { category: "4. Stating someone's age (年齢の伝え方)", options: ["He is twenty-five years old.", "She is thirty.", "He is in his twenties."] },
            { category: "5. Asking about personality/appearance (性格や容姿の尋ね方)", options: ["What is he like?", "What does she look like?", "Tell me about your brother."] },
            { category: "6. Describing personality/appearance (性格や容姿の伝え方)", options: ["He is very tall and kind.", "She is short and funny.", "He is quiet but very smart."] }
        ],
        grammar: {
            point: "Describing People (To Be + Adjective) - 人の描写（be動詞 ＋ 形容詞）",
            explanation: "We use the verb 'to be' (am/is/are) followed by an adjective to describe someone's appearance or personality. <br><span style='font-size:0.9rem; color:var(--text-light);'>（誰かの容姿や性格を描写するときは、be動詞の後に形容詞を使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the pattern: 'He <u>is</u> very <u>tall</u> and <u>kind</u>.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『He <u>is</u> very <u>tall</u> and <u>kind</u>.』のパターンに注目してください。)</span>",
            examples: [
                { eng: "My mother is very kind.", jpn: "私の母はとても優しいです。" },
                { eng: "His brother is tall.", jpn: "彼の兄弟は背が高いです。" },
                { eng: "They are funny and smart.", jpn: "彼らは面白くて賢いです。" }
            ]
        },
        clickingGames: [
            { prompt: "兄弟や姉妹はいますか？", target: "Do you have any brothers or sisters?", words: ["Do", "you", "have", "any", "brothers", "or", "sisters?"] },
            { prompt: "私には妹が1人います。", target: "I have one younger sister.", words: ["I", "have", "one", "younger", "sister."] },
            { prompt: "彼女はどんな人ですか？", target: "What is she like?", words: ["What", "is", "she", "like?"] },
            { prompt: "私の父はとても背が高いです。", target: "My father is very tall.", words: ["My", "father", "is", "very", "tall."] },
            { prompt: "彼は30歳です。", target: "He is thirty years old.", words: ["He", "is", "thirty", "years", "old."] }
        ],
        dropdownGames: [
            { before: "Do you", options: ["have", "are", "is"], answer: "have", after: " any brothers?" },
            { before: "I", options: ["have", "am", "do"], answer: "have", after: " two sisters." },
            { before: "How old", options: ["is", "are", "am"], answer: "is", after: " your brother?" },
            { before: "He", options: ["is", "has", "does"], answer: "is", after: " twenty years old." },
            { before: "What is your mother", options: ["like", "likes", "look"], answer: "like", after: "?" },
            { before: "She", options: ["is", "has", "looks"], answer: "is", after: " very kind." },
            { before: "I am an", options: ["only", "one", "single"], answer: "only", after: " child." },
            { before: "Tell me", options: ["about", "for", "to"], answer: "about", after: " your family." },
            { before: "My sister", options: ["is", "are", "am"], answer: "is", after: " funny." },
            { before: "They", options: ["are", "is", "have"], answer: "are", after: " very smart." }
        ],
        roleplay: {
            a: "You are talking to a new friend. Ask them if they have any brothers or sisters, how old they are, and what they are like. (新しい友達と話しています。兄弟や姉妹はいるか、何歳か、そしてどんな人か尋ねてください。)",
            b: "You are the new friend. Answer the questions about your family. Make up the details! (新しい友達の役です。家族についての質問に答えてください。詳細は自由に想像して作ってください！)"
        },
        homework: {
            vocab: [
                { eng: "Grandfather", jpn: "祖父" },
                { eng: "Grandmother", jpn: "祖母" },
                { eng: "Uncle", jpn: "叔父 / 伯父" },
                { eng: "Aunt", jpn: "叔母 / 伯母" },
                { eng: "Cousin", jpn: "いとこ" },
                { eng: "Parents", jpn: "両親" },
                { eng: "Children", jpn: "子供たち" },
                { eng: "Son", jpn: "息子" },
                { eng: "Daughter", jpn: "娘" },
                { eng: "Young", jpn: "若い" },
                { eng: "Old", jpn: "年をとった / 古い" },
                { eng: "Friendly", jpn: "フレンドリーな / 友好的な" },
                { eng: "Shy", jpn: "恥ずかしがり屋の" },
                { eng: "Energetic", jpn: "元気な / エネルギッシュな" }
            ],
            reading1: {
                title: "Task 2: Reading (Blog Post)",
                instruction: "Read the blog post about a family.",
                eng: "<strong>My Family</strong><br><br>Hello! I want to introduce my family. I live with my parents and my younger sister. My father is forty-five years old. He is tall and very strict, but he is kind. My mother is forty-two. She is a nurse. She is very energetic and friendly. My sister is ten years old. She is sometimes shy, but she is very smart. I love my family very much!",
                jpn: "<strong>私の家族</strong><br><br>こんにちは！私の家族を紹介したいと思います。私は両親と妹と一緒に住んでいます。父は45歳です。背が高くてとても厳しいですが、優しいです。母は42歳です。看護師をしています。とてもエネルギッシュでフレンドリーです。妹は10歳です。時々恥ずかしがり屋ですが、とても賢いです。私は家族が大好きです！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Do you have a big family?", jpn: "大家族ですか？" },
                { speaker: "B", eng: "No, my family is small. I live with my mother and father. I am an only child.", jpn: "いいえ、私の家族は小さいです。母と父と一緒に住んでいます。私は一人っ子です。" },
                { speaker: "A", eng: "I see. What is your mother like?", jpn: "なるほど。お母さんはどんな人ですか？" },
                { speaker: "B", eng: "She is very funny and talkative. She is a teacher.", jpn: "とても面白くておしゃべりです。彼女は教師をしています。" },
                { speaker: "A", eng: "That sounds nice. I have a big family. I have three brothers.", jpn: "それはいいですね。私は大家族です。兄弟が3人います。" },
                { speaker: "B", eng: "Wow, three brothers! How old are they?", jpn: "わあ、3人の兄弟！彼らは何歳ですか？" },
                { speaker: "A", eng: "They are twelve, fifteen, and eighteen.", jpn: "12歳、15歳、そして18歳です。" },
                { speaker: "B", eng: "Are they quiet or energetic?", jpn: "彼らは静かですか、それともエネルギッシュですか？" },
                { speaker: "A", eng: "They are very energetic. Our house is always noisy!", jpn: "とてもエネルギッシュです。私たちの家はいつも賑やかです！" },
                { speaker: "B", eng: "That sounds like fun.", jpn: "それは楽しそうですね。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your family. Include who is in your family, their ages, and what they are like (their personality or appearance). Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "家族についての短い文章を書いてください。家族構成、それぞれの年齢、そしてどんな人か（性格や容姿）を含めてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 9,
        title: "Lesson 9: How to talk about the weather and seasons",
        goal: "Ask and answer questions about the weather and describe your favorite seasons. <br><span style='font-size:0.9rem; color:var(--text-light);'>(天気について質問し答え、好きな季節について描写する。)</span>",
        vocab: [
            { eng: "Weather", jpn: "天気" },
            { eng: "Sunny", jpn: "晴れ" },
            { eng: "Rainy", jpn: "雨" },
            { eng: "Cloudy", jpn: "曇り" },
            { eng: "Snowy", jpn: "雪" },
            { eng: "Hot", jpn: "暑い" },
            { eng: "Cold", jpn: "寒い" },
            { eng: "Warm", jpn: "暖かい" },
            { eng: "Cool", jpn: "涼しい" },
            { eng: "Season", jpn: "季節" },
            { eng: "Spring", jpn: "春" },
            { eng: "Summer", jpn: "夏" },
            { eng: "Autumn", jpn: "秋" },
            { eng: "Winter", jpn: "冬" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>How is the weather today?</span>", jpn: "今日は天気はどうですか？" },
            { speaker: "B", eng: "<span class='swappable'>It is sunny and warm.</span>", jpn: "晴れていて暖かいです。" },
            { speaker: "A", eng: "<span class='swappable'>That is nice.</span> <span class='swappable'>What is your favorite season?</span>", jpn: "それはいいですね。好きな季節は何ですか？" },
            { speaker: "B", eng: "<span class='swappable'>I like autumn.</span>", jpn: "秋が好きです。" },
            { speaker: "A", eng: "Why do you like autumn?", jpn: "どうして秋が好きなのですか？" },
            { speaker: "B", eng: "<span class='swappable'>Because it is cool.</span>", jpn: "涼しいからです。" }
        ],
        expressions: [
            { category: "1. Asking about the weather (天気の尋ね方)", options: ["How is the weather today?", "What's the weather like?", "Is it raining outside?"] },
            { category: "2. Describing the weather (天気の伝え方)", options: ["It is sunny and warm.", "It is very cold today.", "It is cloudy right now."] },
            { category: "3. Commenting on the weather (天気に対する相槌)", options: ["That is nice.", "It is a beautiful day.", "It is terrible weather."] },
            { category: "4. Asking about seasons (季節についての質問)", options: ["What is your favorite season?", "Which season do you like?", "Do you like winter?"] },
            { category: "5. Stating your favorite season (好きな季節の伝え方)", options: ["I like autumn.", "My favorite season is spring.", "I love summer."] },
            { category: "6. Giving a reason (理由を言う)", options: ["Because it is cool.", "Because I like the snow.", "Because it is beautiful."] }
        ],
        grammar: {
            point: "'It is' for Weather and Time - 天候や時間を表す 'It is'",
            explanation: "In English, sentences must have a subject. When talking about the weather, temperature, or time, we use 'It' as a dummy subject. <br><span style='font-size:0.9rem; color:var(--text-light);'>（英語の文には主語が必要です。天気、気温、時間について話すときは、形式的な主語として『It』を使用します。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how 'It' is used: '<u>It is</u> sunny and warm' and 'Because <u>it is</u> cool.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>It is</u> sunny...』や『<u>it is</u> cool』のように『It』がどう使われているかに注目してください。)</span>",
            examples: [
                { eng: "It is raining today.", jpn: "今日は雨が降っています。" },
                { eng: "It is very hot in summer.", jpn: "夏はとても暑いです。" },
                { eng: "Is it cold outside?", jpn: "外は寒いですか？" }
            ]
        },
        clickingGames: [
            { prompt: "今日は天気はどうですか？", target: "How is the weather today?", words: ["How", "is", "the", "weather", "today?"] },
            { prompt: "今日はとても寒いです。", target: "It is very cold today.", words: ["It", "is", "very", "cold", "today."] },
            { prompt: "好きな季節は何ですか？", target: "What is your favorite season?", words: ["What", "is", "your", "favorite", "season?"] },
            { prompt: "春は暖かくて美しいです。", target: "Spring is warm and beautiful.", words: ["Spring", "is", "warm", "and", "beautiful."] },
            { prompt: "雪が好きだからです。", target: "Because I like the snow.", words: ["Because", "I", "like", "the", "snow."] }
        ],
        dropdownGames: [
            { before: "How", options: ["is", "are", "do"], answer: "is", after: " the weather today?" },
            { before: "", options: ["It", "This", "That"], answer: "It", after: " is sunny and hot." },
            { before: "What is", options: ["you", "your", "yours"], answer: "your", after: " favorite season?" },
            { before: "I like", options: ["autumn", "weather", "cold"], answer: "autumn", after: " because it is cool." },
            { before: "It is very", options: ["cold", "snow", "rain"], answer: "cold", after: " in winter." },
            { before: "", options: ["Is", "Are", "Do"], answer: "Is", after: " it raining outside?" },
            { before: "The", options: ["weather", "season", "time"], answer: "weather", after: " is nice today." },
            { before: "I love summer", options: ["because", "why", "for"], answer: "because", after: " I like the beach." },
            { before: "It", options: ["is", "has", "does"], answer: "is", after: " cloudy right now." },
            { before: "Spring is", options: ["warm", "heat", "cools"], answer: "warm", after: " and beautiful." }
        ],
        roleplay: {
            a: "You are calling a friend in another country. Ask them about the weather there, and tell them what your favorite season is. (別の国にいる友達に電話をかけています。そちらの天気について尋ね、あなたの好きな季節を伝えてください。)",
            b: "You are the friend. Describe the weather (make it up!), and ask why they like that season. (友達の役です。天気を描写し（自由に作ってください！）、なぜその季節が好きなのか尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Rain", jpn: "雨（名詞・動詞）" },
                { eng: "Snow", jpn: "雪（名詞・動詞）" },
                { eng: "Wind", jpn: "風" },
                { eng: "Storm", jpn: "嵐" },
                { eng: "Cloud", jpn: "雲" },
                { eng: "Sky", jpn: "空" },
                { eng: "Sun", jpn: "太陽" },
                { eng: "Umbrella", jpn: "傘" },
                { eng: "Dry", jpn: "乾燥した" },
                { eng: "Wet", jpn: "濡れた / 湿った" },
                { eng: "Temperature", jpn: "気温 / 温度" },
                { eng: "High", jpn: "高い" },
                { eng: "Low", jpn: "低い" },
                { eng: "Outside", jpn: "外で / 外" }
            ],
            reading1: {
                title: "Task 2: Reading (Weather Report)",
                instruction: "Read the daily weather report.",
                eng: "<strong>Today's Weather in Tokyo</strong><br><br>Good morning! Today's weather in Tokyo is sunny and warm. The sky is blue and there are no clouds. The high temperature is 25 degrees. It is a beautiful day for a walk in the park. Tomorrow, the weather will change. It will be cloudy and cool in the morning. Please take an umbrella on Friday because it will rain. Have a great day!",
                jpn: "<strong>今日の東京の天気</strong><br><br>おはようございます！今日の東京の天気は晴れで暖かいです。空は青く、雲はありません。最高気温は25度です。公園を散歩するのに美しい日です。明日は天気が変わります。午前中は曇りで涼しくなるでしょう。金曜日は雨が降るので傘を持って行ってください。素晴らしい一日を！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hi Mark. How is the weather in London today?", jpn: "こんにちはマーク。今日のロンドンの天気はどう？" },
                { speaker: "B", eng: "It is raining and very cold. I don't like it.", jpn: "雨が降っていてとても寒いよ。好きじゃないな。" },
                { speaker: "A", eng: "Oh no. Do you have an umbrella?", jpn: "あらら。傘は持ってる？" },
                { speaker: "B", eng: "Yes, I do. How is the weather in Sydney?", jpn: "うん、持ってるよ。シドニーの天気はどう？" },
                { speaker: "A", eng: "It is sunny and hot. I am going to the beach this afternoon.", jpn: "晴れていて暑いわ。今日の午後はビーチに行く予定よ。" },
                { speaker: "B", eng: "That is nice. I love summer. It is my favorite season.", jpn: "それはいいね。僕は夏が大好きなんだ。一番好きな季節だよ。" },
                { speaker: "A", eng: "Really? Why do you like summer?", jpn: "本当に？どうして夏が好きなの？" },
                { speaker: "B", eng: "Because I like swimming in the ocean.", jpn: "海で泳ぐのが好きだからさ。" },
                { speaker: "A", eng: "I see. My favorite season is spring because the flowers are beautiful.", jpn: "なるほど。私が一番好きな季節は春よ、花が綺麗だから。" },
                { speaker: "B", eng: "Spring is great too. Enjoy the beach!", jpn: "春も素晴らしいね。ビーチを楽しんで！" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about the weather and seasons. Describe the weather today in your city, state your favorite season, and explain why you like it. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "天気と季節についての短い文章を書いてください。あなたの住んでいる都市の今日の天気を描写し、好きな季節を述べ、なぜそれが好きなのか説明してください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 10,
        title: "Lesson 10: How to talk about your hometown",
        goal: "Describe your hometown, including its atmosphere and what places are there. <br><span style='font-size:0.9rem; color:var(--text-light);'>(故郷の雰囲気やそこにある場所など、自分の出身地について描写する。)</span>",
        vocab: [
            { eng: "City", jpn: "都市 / 街" },
            { eng: "Town", jpn: "町" },
            { eng: "Village", jpn: "村" },
            { eng: "Big", jpn: "大きい" },
            { eng: "Small", jpn: "小さい" },
            { eng: "Beautiful", jpn: "美しい" },
            { eng: "Noisy", jpn: "うるさい / 騒がしい" },
            { eng: "Quiet", jpn: "静かな" },
            { eng: "Famous", jpn: "有名な" },
            { eng: "Mountain", jpn: "山" },
            { eng: "River", jpn: "川" },
            { eng: "Building", jpn: "建物" },
            { eng: "People", jpn: "人々" },
            { eng: "Food", jpn: "食べ物" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Where are you from?</span>", jpn: "出身はどこですか？" },
            { speaker: "B", eng: "I am from Kyoto. <span class='swappable'>It is a beautiful city.</span>", jpn: "京都出身です。美しい街ですよ。" },
            { speaker: "A", eng: "<span class='swappable'>What is it like?</span>", jpn: "どんなところですか？" },
            { speaker: "B", eng: "<span class='swappable'>It is very old and famous.</span> <span class='swappable'>There are many temples.</span>", jpn: "とても古くて有名です。お寺がたくさんあります。" },
            { speaker: "A", eng: "<span class='swappable'>Is there a beach?</span>", jpn: "ビーチはありますか？" },
            { speaker: "B", eng: "No, there isn't. But there are beautiful mountains.", jpn: "いいえ、ありません。でも美しい山があります。" }
        ],
        expressions: [
            { category: "1. Asking about hometowns (出身地の尋ね方)", options: ["Where are you from?", "Where is your hometown?", "Where do you live?"] },
            { category: "2. Describing the city size/type (街の規模や種類の伝え方)", options: ["It is a beautiful city.", "It is a small town.", "It is a big city."] },
            { category: "3. Asking for a description (どんな場所か尋ねる)", options: ["What is it like?", "How is your hometown?", "Tell me about your city."] },
            { category: "4. Describing the atmosphere (街の雰囲気の伝え方)", options: ["It is very old and famous.", "It is quiet and safe.", "It is noisy and busy."] },
            { category: "5. Stating what is there - plural (何があるか伝える - 複数)", options: ["There are many temples.", "There are big buildings.", "There are lots of parks."] },
            { category: "6. Asking what is there - singular (何があるか尋ねる - 単数)", options: ["Is there a beach?", "Is there a river?", "Is there a station?"] }
        ],
        grammar: {
            point: "There is / There are - 〜がある、〜がいる",
            explanation: "We use 'there is' for singular nouns (one thing) and 'there are' for plural nouns (two or more things) to say that something exists in a place. <br><span style='font-size:0.9rem; color:var(--text-light);'>（単数名詞には『there is』、複数名詞には『there are』を使って、ある場所に何かが存在することを表します。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the difference: '<u>There are</u> many temples' and '<u>Is there</u> a beach?' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>There are</u> many temples』と『<u>Is there</u> a beach?』の違いに注目してください。)</span>",
            examples: [
                { eng: "There is a park near my house.", jpn: "私の家の近くに公園があります。" },
                { eng: "There are many people in Tokyo.", jpn: "東京にはたくさんの人がいます。" },
                { eng: "Is there a hospital in this town?", jpn: "この町に病院はありますか？" }
            ]
        },
        clickingGames: [
            { prompt: "私の故郷は小さな町です。", target: "My hometown is a small town.", words: ["My", "hometown", "is", "a", "small", "town."] },
            { prompt: "それはどんな場所ですか？", target: "What is it like?", words: ["What", "is", "it", "like?"] },
            { prompt: "たくさんの有名な建物があります。", target: "There are many famous buildings.", words: ["There", "are", "many", "famous", "buildings."] },
            { prompt: "この街には川がありますか？", target: "Is there a river in this city?", words: ["Is", "there", "a", "river", "in", "this", "city?"] },
            { prompt: "京都は美しくて静かです。", target: "Kyoto is beautiful and quiet.", words: ["Kyoto", "is", "beautiful", "and", "quiet."] }
        ],
        dropdownGames: [
            { before: "Where", options: ["are", "is", "do"], answer: "are", after: " you from?" },
            { before: "", options: ["There", "Here", "It"], answer: "There", after: " is a big mountain." },
            { before: "There", options: ["are", "is", "am"], answer: "are", after: " many parks." },
            { before: "What", options: ["is", "are", "does"], answer: "is", after: " your hometown like?" },
            { before: "It is a", options: ["beautiful", "beauty", "beautifully"], answer: "beautiful", after: " city." },
            { before: "", options: ["Is", "Are", "Do"], answer: "Is", after: " there a beach?" },
            { before: "My hometown is", options: ["quiet", "quietly", "noise"], answer: "quiet", after: " and safe." },
            { before: "There are", options: ["many", "much", "any"], answer: "many", after: " people." },
            { before: "Tell me", options: ["about", "to", "for"], answer: "about", after: " your city." },
            { before: "No, there", options: ["isn't", "aren't", "don't"], answer: "isn't", after: "." }
        ],
        roleplay: {
            a: "Ask your partner where they are from and what their hometown is like. (パートナーの出身地と、そこがどんな場所か尋ねてください。)",
            b: "Tell your partner about your hometown. Mention the size, atmosphere, and what is there. (パートナーにあなたの故郷について話してください。規模、雰囲気、何があるかについて触れてください。)"
        },
        homework: {
            vocab: [
                { eng: "Supermarket", jpn: "スーパーマーケット" },
                { eng: "Convenience store", jpn: "コンビニエンスストア" },
                { eng: "Post office", jpn: "郵便局" },
                { eng: "Library", jpn: "図書館" },
                { eng: "Pharmacy", jpn: "薬局" },
                { eng: "Bakery", jpn: "パン屋" },
                { eng: "Bookstore", jpn: "書店" },
                { eng: "Police box", jpn: "交番" },
                { eng: "Gym", jpn: "ジム" },
                { eng: "Cinema", jpn: "映画館" },
                { eng: "Safe", jpn: "安全な" },
                { eng: "Dangerous", jpn: "危険な" },
                { eng: "Crowded", jpn: "混雑した" },
                { eng: "Clean", jpn: "清潔な / きれいな" }
            ],
            reading1: {
                title: "Task 2: Reading (Travel Guide)",
                instruction: "Read the travel guide about a city.",
                eng: "<strong>Welcome to Seattle</strong><br><br>Seattle is a very famous city in the United States. It is a big city, but it is also very green. There are many parks and beautiful mountains near the city. The weather is often cloudy or rainy, but the summers are warm and sunny. There are many tall buildings downtown. There is also a very famous market called Pike Place Market. The food there is delicious!",
                jpn: "<strong>シアトルへようこそ</strong><br><br>シアトルはアメリカでとても有名な都市です。大きな街ですが、とても緑豊かでもあります。街の近くにはたくさんの公園と美しい山があります。天気は曇りや雨が多いですが、夏は暖かく晴れます。ダウンタウンには高い建物がたくさんあります。パイクプレイスマーケットというとても有名な市場もあります。そこの食べ物は美味しいですよ！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Where is your hometown?", jpn: "あなたの故郷はどこですか？" },
                { speaker: "B", eng: "My hometown is Osaka. I grew up there.", jpn: "私の故郷は大阪です。そこで育ちました。" },
                { speaker: "A", eng: "Oh, I want to visit Osaka! What is it like?", jpn: "ああ、大阪に行ってみたいです！どんなところですか？" },
                { speaker: "B", eng: "It is a very big and noisy city, but the people are very friendly.", jpn: "とても大きくて賑やかな街ですが、人々はとてもフレンドリーです。" },
                { speaker: "A", eng: "Are there many parks?", jpn: "公園はたくさんありますか？" },
                { speaker: "B", eng: "Yes, there are some nice parks. There is also a famous castle.", jpn: "はい、素敵な公園がいくつかあります。有名なお城もありますよ。" },
                { speaker: "A", eng: "That sounds wonderful. How is the food?", jpn: "それは素晴らしいですね。食べ物はどうですか？" },
                { speaker: "B", eng: "The food is amazing. There are many great restaurants.", jpn: "食べ物は素晴らしいです。素晴らしいレストランがたくさんあります。" },
                { speaker: "A", eng: "Is it safe at night?", jpn: "夜は安全ですか？" },
                { speaker: "B", eng: "Yes, it is very safe. You should visit someday!", jpn: "はい、とても安全です。いつか行ってみてください！" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph describing your hometown. Include its size, the atmosphere (e.g., quiet, noisy, beautiful), and use 'There is / There are' to mention two things in the city. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "あなたの故郷を描写する短い文章を書いてください。その規模、雰囲気（例：静か、賑やか、美しい）、そして「There is / There are」を使って街にあるものを2つ含めてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 11,
        title: "Lesson 11: How to talk about your weekend",
        goal: "Ask and answer questions about what you did recently using the simple past tense. <br><span style='font-size:0.9rem; color:var(--text-light);'>(過去形を使って、最近何をしたかについて質問し、答える。)</span>",
        vocab: [
            { eng: "Played", jpn: "遊んだ / 〜をした" },
            { eng: "Watched", jpn: "見た" },
            { eng: "Studied", jpn: "勉強した" },
            { eng: "Cooked", jpn: "料理した" },
            { eng: "Cleaned", jpn: "掃除した" },
            { eng: "Went", jpn: "行った" },
            { eng: "Ate", jpn: "食べた" },
            { eng: "Saw", jpn: "見た / 会った" },
            { eng: "Bought", jpn: "買った" },
            { eng: "Met", jpn: "会った" },
            { eng: "Yesterday", jpn: "昨日" },
            { eng: "Last night", jpn: "昨夜" },
            { eng: "Last week", jpn: "先週" },
            { eng: "Relaxed", jpn: "リラックスした" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>How was your weekend?</span>", jpn: "週末はどうでしたか？" },
            { speaker: "B", eng: "<span class='swappable'>It was great.</span> <span class='swappable'>I went to the park.</span>", jpn: "素晴らしかったです。公園に行きました。" },
            { speaker: "A", eng: "Oh, nice. <span class='swappable'>What did you do there?</span>", jpn: "おお、いいね。そこで何をしましたか？" },
            { speaker: "B", eng: "<span class='swappable'>I read a book</span> and <span class='swappable'>relaxed.</span>", jpn: "本を読んで、リラックスしました。" }
        ],
        expressions: [
            { category: "1. Asking about the weekend (週末について尋ねる)", options: ["How was your weekend?", "Did you have a good weekend?", "How was your day?"] },
            { category: "2. Describing the overall experience (全体の感想を伝える)", options: ["It was great.", "It was fun.", "It was relaxing."] },
            { category: "3. Stating a past action 1 (過去の行動を伝える1)", options: ["I went to the park.", "I stayed home.", "I met my friends."] },
            { category: "4. Asking for details (詳細を尋ねる)", options: ["What did you do there?", "What did you do?", "Where did you go?"] },
            { category: "5. Stating a past action 2 (過去の行動を伝える2)", options: ["I read a book.", "I watched a movie.", "I played tennis."] },
            { category: "6. Stating a past action 3 (過去の行動を伝える3)", options: ["I relaxed.", "I ate a lot.", "I slept all day."] }
        ],
        grammar: {
            point: "Simple Past Tense - 過去形",
            explanation: "We use the simple past tense to talk about completed actions. Regular verbs add '-ed', but many common verbs are irregular (e.g., go -> went, eat -> ate). <br><span style='font-size:0.9rem; color:var(--text-light);'>（完了した行動について話すときは過去形を使います。規則動詞には「-ed」を付けますが、多くの一般的な動詞は不規則に変化します（例：go -> went、eat -> ate）。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the past tense verbs: '<u>was</u>', '<u>went</u>', '<u>read</u>', and '<u>relaxed</u>'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>was</u>』、『<u>went</u>』、『<u>read</u>』、『<u>relaxed</u>』といった過去形の動詞に注目してください。)</span>",
            examples: [
                { eng: "I cooked dinner last night.", jpn: "昨夜、夕食を作りました。" },
                { eng: "She went to Tokyo yesterday.", jpn: "彼女は昨日、東京へ行きました。" },
                { eng: "What did you do on Saturday?", jpn: "土曜日は何をしましたか？" }
            ]
        },
        clickingGames: [
            { prompt: "週末はどうでしたか？", target: "How was your weekend?", words: ["How", "was", "your", "weekend?"] },
            { prompt: "それは楽しかったです。", target: "It was fun.", words: ["It", "was", "fun."] },
            { prompt: "私は昨日、映画を見ました。", target: "I watched a movie yesterday.", words: ["I", "watched", "a", "movie", "yesterday."] },
            { prompt: "あなたは何をしましたか？", target: "What did you do?", words: ["What", "did", "you", "do?"] },
            { prompt: "私は友達に会いました。", target: "I met my friends.", words: ["I", "met", "my", "friends."] }
        ],
        dropdownGames: [
            { before: "How", options: ["was", "is", "are"], answer: "was", after: " your weekend?" },
            { before: "I", options: ["go", "went", "going"], answer: "went", after: " to the supermarket yesterday." },
            { before: "What", options: ["do", "does", "did"], answer: "did", after: " you do?" },
            { before: "I", options: ["eat", "ate", "eating"], answer: "ate", after: " pizza last night." },
            { before: "It", options: ["is", "was", "were"], answer: "was", after: " a great weekend." },
            { before: "She", options: ["study", "studies", "studied"], answer: "studied", after: " English for two hours." },
            { before: "Did you", options: ["have", "had", "has"], answer: "have", after: " a good time?" },
            { before: "We", options: ["see", "saw", "seeing"], answer: "saw", after: " a beautiful bird in the park." },
            { before: "I", options: ["buy", "bought", "buys"], answer: "bought", after: " a new shirt." },
            { before: "They", options: ["play", "played", "plays"], answer: "played", after: " tennis on Sunday." }
        ],
        roleplay: {
            a: "You are talking to your classmate on Monday morning. Ask them how their weekend was, and ask what they did. (月曜日の朝にクラスメイトと話しています。週末はどうだったか、何をしたか尋ねてください。)",
            b: "You are the classmate. Tell them your weekend was good, and name two things you did using the past tense. (クラスメイト役です。週末は良かったと伝え、過去形を使ってしたことを2つ挙げてください。)"
        },
        homework: {
            vocab: [
                { eng: "Had", jpn: "持っていた / 過ごした" },
                { eng: "Made", jpn: "作った" },
                { eng: "Took", jpn: "取った / 乗った" },
                { eng: "Drank", jpn: "飲んだ" },
                { eng: "Wrote", jpn: "書いた" },
                { eng: "Spoke", jpn: "話した" },
                { eng: "Ran", jpn: "走った" },
                { eng: "Swam", jpn: "泳いだ" },
                { eng: "Left", jpn: "出発した / 残した" },
                { eng: "Came", jpn: "来た" },
                { eng: "Last month", jpn: "先月" },
                { eng: "Last year", jpn: "昨年" },
                { eng: "Two days ago", jpn: "2日前" },
                { eng: "An hour ago", jpn: "1時間前" }
            ],
            reading1: {
                title: "Task 2: Reading (Social Media Post)",
                instruction: "Read the post about a weekend trip.",
                eng: "<strong>My Weekend Trip</strong><br><br>I had a fantastic weekend! On Saturday morning, I woke up early and took a train to the mountains. I walked for three hours and saw a beautiful river. I took many photos. For lunch, I ate a big sandwich and drank some hot coffee. In the evening, I came back home and slept very well. It was a perfect day.",
                jpn: "<strong>私の週末旅行</strong><br><br>素晴らしい週末を過ごしました！土曜日の朝、私は早く起きて電車で山に行きました。3時間歩いて、美しい川を見ました。たくさんの写真を撮りました。昼食には、大きなサンドイッチを食べて、温かいコーヒーを飲みました。夕方、家に帰ってきて、とてもよく眠りました。完璧な一日でした。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hey, how was your weekend?", jpn: "ねえ、週末はどうだった？" },
                { speaker: "B", eng: "It was really good. I had a lot of fun.", jpn: "とても良かったよ。すごく楽しかった。" },
                { speaker: "A", eng: "Nice! What did you do?", jpn: "いいね！何をしたの？" },
                { speaker: "B", eng: "On Saturday, I went shopping with my sister. I bought a new jacket.", jpn: "土曜日は姉と買い物に行ったよ。新しいジャケットを買ったんだ。" },
                { speaker: "A", eng: "That sounds nice. Did you do anything on Sunday?", jpn: "それはいいね。日曜日は何かした？" },
                { speaker: "B", eng: "Yes, I stayed home and cleaned my room. Then, I watched a movie. How was your weekend?", jpn: "うん、家にいて部屋を掃除したよ。それから、映画を見たんだ。君の週末はどうだった？" },
                { speaker: "A", eng: "It was quiet. I studied for a test and slept a lot.", jpn: "静かだったよ。テストの勉強をして、たくさん寝た。" },
                { speaker: "B", eng: "Well, sleeping is important!", jpn: "まあ、寝ることは大事だよね！" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your weekend. Use the past tense to describe at least three things you did (e.g., I went, I ate, I watched). Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "あなたの週末について短い文章を書いてください。過去形を使って、したことを少なくとも3つ描写してください（例：私は行った、私は食べた、私は見た）。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 12,
        title: "Lesson 12: How to talk about your future plans",
        goal: "Ask and answer questions about future plans using 'be going to'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『be going to』を使って、未来の予定について質問し、答える。)</span>",
        vocab: [
            { eng: "Tomorrow", jpn: "明日" },
            { eng: "Next week", jpn: "来週" },
            { eng: "Next month", jpn: "来月" },
            { eng: "Next year", jpn: "来年" },
            { eng: "Vacation", jpn: "休暇 / 休み" },
            { eng: "Trip", jpn: "旅行" },
            { eng: "Travel", jpn: "旅行する" },
            { eng: "Stay", jpn: "滞在する / とどまる" },
            { eng: "Meet", jpn: "会う" },
            { eng: "Buy", jpn: "買う" },
            { eng: "Work", jpn: "働く" },
            { eng: "Study", jpn: "勉強する" },
            { eng: "Soon", jpn: "すぐに" },
            { eng: "Plan", jpn: "計画 / 予定" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>What are you going to do this weekend?</span>", jpn: "今週末は何をする予定ですか？" },
            { speaker: "B", eng: "<span class='swappable'>I am going to visit my parents.</span>", jpn: "両親を訪ねる予定です。" },
            { speaker: "A", eng: "That sounds nice. <span class='swappable'>Are you going to drive there?</span>", jpn: "それはいいですね。そこまで車で行く予定ですか？" },
            { speaker: "B", eng: "No, <span class='swappable'>I am going to take the train.</span> <span class='swappable'>What are your plans?</span>", jpn: "いいえ、電車で行く予定です。あなたの予定は何ですか？" },
            { speaker: "A", eng: "<span class='swappable'>I am not going to do anything special.</span> I will just relax.", jpn: "特別なことは何もする予定はありません。ただリラックスします。" }
        ],
        expressions: [
            { category: "1. Asking about plans (予定の尋ね方)", options: ["What are you going to do this weekend?", "What are your plans for tomorrow?", "Are you doing anything special?"] },
            { category: "2. Stating plans (予定の伝え方)", options: ["I am going to visit my parents.", "I am going to travel to Kyoto.", "I am going to study English."] },
            { category: "3. Asking for details (詳細の尋ね方)", options: ["Are you going to drive there?", "How are you going to get there?", "Who are you going to go with?"] },
            { category: "4. Stating detailed plans (詳細な予定の伝え方)", options: ["I am going to take the train.", "I am going to go by bus.", "I am going to go with my friend."] },
            { category: "5. Asking the other person (相手の予定を尋ねる)", options: ["What are your plans?", "What about you?", "Are you going anywhere?"] },
            { category: "6. Stating you have no plans (予定がないことの伝え方)", options: ["I am not going to do anything special.", "I have no plans.", "I am going to stay home."] }
        ],
        grammar: {
            point: "Future Plans (be going to) - 未来の予定（be going to）",
            explanation: "We use 'be going to' followed by a base verb to talk about future plans and intentions that we have already decided. <br><span style='font-size:0.9rem; color:var(--text-light);'>（すでに決めている未来の予定や意図について話すときは、『be going to』の後に動詞の原形を使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the structure: 'I <u>am going to visit</u> my parents' and '<u>What are you going to do</u>?' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『I <u>am going to visit</u>...』や『<u>What are you going to do</u>?』の構造に注目してください。)</span>",
            examples: [
                { eng: "I am going to watch a movie tonight.", jpn: "今夜は映画を見る予定です。" },
                { eng: "She is going to travel next year.", jpn: "彼女は来年旅行する予定です。" },
                { eng: "Are you going to buy a new car?", jpn: "新しい車を買う予定ですか？" }
            ]
        },
        clickingGames: [
            { prompt: "週末は何をする予定ですか？", target: "What are you going to do this weekend?", words: ["What", "are", "you", "going", "to", "do", "this", "weekend?"] },
            { prompt: "私は明日、友達に会う予定です。", target: "I am going to meet my friend tomorrow.", words: ["I", "am", "going", "to", "meet", "my", "friend", "tomorrow."] },
            { prompt: "彼は新しい車を買う予定です。", target: "He is going to buy a new car.", words: ["He", "is", "going", "to", "buy", "a", "new", "car."] },
            { prompt: "来週、旅行する予定ですか？", target: "Are you going to travel next week?", words: ["Are", "you", "going", "to", "travel", "next", "week?"] },
            { prompt: "特別なことは何もする予定はありません。", target: "I am not going to do anything special.", words: ["I", "am", "not", "going", "to", "do", "anything", "special."] }
        ],
        dropdownGames: [
            { before: "I", options: ["am", "is", "are"], answer: "am", after: " going to travel to Spain." },
            { before: "She", options: ["am", "is", "are"], answer: "is", after: " going to buy a new house." },
            { before: "What", options: ["am", "is", "are"], answer: "are", after: " you going to do tomorrow?" },
            { before: "They are going", options: ["to", "for", "at"], answer: "to", after: " eat dinner at a restaurant." },
            { before: "I am going to", options: ["visit", "visits", "visiting"], answer: "visit", after: " my grandmother." },
            { before: "Are you going to", options: ["stay", "stays", "stayed"], answer: "stay", after: " at a hotel?" },
            { before: "We", options: ["am", "is", "are"], answer: "are", after: " not going to work this weekend." },
            { before: "He is going to", options: ["take", "took", "taking"], answer: "take", after: " the train." },
            { before: "What are your plans", options: ["for", "to", "in"], answer: "for", after: " the summer?" },
            { before: "I am not going to do", options: ["anything", "something", "nothing"], answer: "anything", after: " special." }
        ],
        roleplay: {
            a: "You are excited about your upcoming vacation. Tell your friend where you are going to go, what you are going to do, and ask about their plans. (今度の休暇を楽しみにしています。どこに行く予定か、何をする予定かを友達に伝え、相手の予定についても尋ねてください。)",
            b: "You are the friend. Listen to their plans, react, and tell them you are just going to stay home and relax. (友達役です。相手の予定を聞いて反応し、自分はただ家にいてリラックスする予定だと伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Ticket", jpn: "チケット / 切符" },
                { eng: "Hotel", jpn: "ホテル" },
                { eng: "Flight", jpn: "フライト / 飛行機の便" },
                { eng: "Airport", jpn: "空港" },
                { eng: "Station", jpn: "駅" },
                { eng: "Luggage", jpn: "手荷物" },
                { eng: "Souvenir", jpn: "お土産" },
                { eng: "Sightseeing", jpn: "観光" },
                { eng: "Restaurant", jpn: "レストラン" },
                { eng: "Guide", jpn: "ガイド / 案内人" },
                { eng: "Map", jpn: "地図" },
                { eng: "Camera", jpn: "カメラ" },
                { eng: "Passport", jpn: "パスポート" },
                { eng: "Money", jpn: "お金" }
            ],
            reading1: {
                title: "Task 2: Reading (Email)",
                instruction: "Read the email about an upcoming trip.",
                eng: "<strong>Subject:</strong> My trip to Hawaii!<br><br>Hi Emma,<br><br>I am so excited! Next month, I am going to travel to Hawaii for my vacation. I am going to stay there for one week. I bought my flight ticket yesterday. On the first day, I am going to relax on the beach and read a book. On the second day, I am going to go sightseeing and eat a lot of delicious food. I am going to take a lot of photos with my new camera. Are you going to go anywhere this summer?<br><br>Best,<br>Lucy",
                jpn: "<strong>件名：</strong> ハワイ旅行！<br><br>エマへ<br><br>とてもワクワクしています！来月、休暇でハワイに旅行する予定です。そこに1週間滞在する予定です。昨日、飛行機のチケットを買いました。初日は、ビーチでリラックスして本を読む予定です。2日目は、観光に行って美味しいものをたくさん食べる予定です。新しいカメラで写真をたくさん撮るつもりです。あなたはこの夏、どこかへ行く予定はありますか？<br><br>よろしく、<br>ルーシー"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hey, what are you going to do this weekend?", jpn: "ねえ、今週末は何をする予定？" },
                { speaker: "B", eng: "I am going to visit my parents in Osaka.", jpn: "大阪の両親を訪ねる予定だよ。" },
                { speaker: "A", eng: "That sounds nice. Are you going to drive there?", jpn: "それはいいね。そこまで車で行く予定？" },
                { speaker: "B", eng: "No, the traffic is too bad. I am going to take the bullet train.", jpn: "ううん、渋滞がひどいからね。新幹線で行く予定だよ。" },
                { speaker: "A", eng: "Good idea. How long are you going to stay?", jpn: "いいアイデアだね。どのくらい滞在する予定？" },
                { speaker: "B", eng: "I am going to stay for two nights. What are your plans?", jpn: "2泊する予定だよ。君の予定は？" },
                { speaker: "A", eng: "I am not going to do anything special. I am just going to stay home and clean my apartment.", jpn: "特別なことは何もする予定はないよ。ただ家にいてアパートの掃除をするつもり。" },
                { speaker: "B", eng: "That is productive! Are you going to watch the soccer game on Sunday?", jpn: "それは生産的だね！日曜日のサッカーの試合は見る予定？" },
                { speaker: "A", eng: "Yes, definitely. I am going to watch it with some friends.", jpn: "うん、絶対に。友達と一緒に出見る予定だよ。" },
                { speaker: "B", eng: "Have fun! See you next week.", jpn: "楽しんでね！また来週。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your plans for your next vacation or weekend. Use 'be going to' to describe where you will go, what you will do, and how you will travel. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "次の休暇や週末の予定について短い文章を書いてください。「be going to」を使って、どこへ行く予定か、何をする予定か、どのように移動する予定かを描写してください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 13,
        title: "Lesson 13: How to check into a hotel",
        goal: "Check into a hotel, provide your reservation details, and ask about hotel services. <br><span style='font-size:0.9rem; color:var(--text-light);'>(ホテルにチェックインし、予約情報を伝え、ホテルのサービスについて尋ねる。)</span>",
        vocab: [
            { eng: "Reservation", jpn: "予約" },
            { eng: "Passport", jpn: "パスポート" },
            { eng: "Key card", jpn: "カードキー" },
            { eng: "Room", jpn: "部屋" },
            { eng: "Breakfast", jpn: "朝食" },
            { eng: "Elevator", jpn: "エレベーター" },
            { eng: "Wi-Fi", jpn: "ワイファイ" },
            { eng: "Password", jpn: "パスワード" },
            { eng: "Sign", jpn: "署名する" },
            { eng: "Check-in", jpn: "チェックイン" },
            { eng: "Check-out", jpn: "チェックアウト" },
            { eng: "Luggage", jpn: "手荷物" },
            { eng: "Floor", jpn: "階" },
            { eng: "Stay", jpn: "滞在" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hello, <span class='swappable'>I would like to check in.</span>", jpn: "こんにちは、チェックインをお願いします。" },
            { speaker: "B", eng: "Welcome! <span class='swappable'>Can I have your name, please?</span>", jpn: "いらっしゃいませ！お名前を伺えますか？" },
            { speaker: "A", eng: "My name is John Smith. <span class='swappable'>I have a reservation.</span>", jpn: "私の名前はジョンスミスです。予約しています。" },
            { speaker: "B", eng: "Thank you. <span class='swappable'>Can I see your passport?</span>", jpn: "ありがとうございます。パスポートを拝見できますか？" },
            { speaker: "A", eng: "<span class='swappable'>Here you go.</span> <span class='swappable'>Can you tell me the Wi-Fi password?</span>", jpn: "はい、どうぞ。Wi-Fiのパスワードを教えてもらえますか？" },
            { speaker: "B", eng: "It is on the key card. Your room is on the 5th floor.", jpn: "カードキーに記載されています。お部屋は5階です。" }
        ],
        expressions: [
            { category: "1. Checking in (チェックインの申し出)", options: ["I would like to check in.", "Check-in, please.", "I am here to check in."] },
            { category: "2. Clerk asking for details (店員からの情報確認)", options: ["Can I have your name, please?", "May I have your name?", "What is the name on the reservation?"] },
            { category: "3. Stating reservation (予約の伝達)", options: ["I have a reservation.", "I booked online.", "I have a room booked."] },
            { category: "4. Clerk asking for documents (店員からの書類の提示要求)", options: ["Can I see your passport?", "May I see your ID?", "I need your passport, please."] },
            { category: "5. Handing things over (物を渡す時の表現)", options: ["Here you go.", "Here it is.", "Yes, of course."] },
            { category: "6. Asking for information (情報の尋ね方)", options: ["Can you tell me the Wi-Fi password?", "What time is breakfast?", "Where is the elevator?"] }
        ],
        grammar: {
            point: "Making Requests (Can I / Can you) - 依頼と許可 (Can I / Can you)",
            explanation: "Use 'Can I + verb' to ask for permission or request something for yourself. Use 'Can you + verb' to ask someone else to do something for you. <br><span style='font-size:0.9rem; color:var(--text-light);'>（許可を求めたり、自分が何かをもらいたい時は『Can I + 動詞』を使います。他の人に何かをしてほしいと頼む時は『Can you + 動詞』を使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the requests: '<u>Can I</u> have your name?' and '<u>Can you</u> tell me the Wi-Fi password?' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>Can I</u> have...』や『<u>Can you</u> tell me...』などの依頼表現に注目してください。)</span>",
            examples: [
                { eng: "Can I see the menu?", jpn: "メニューを見てもいいですか？" },
                { eng: "Can you help me?", jpn: "手伝ってくれますか？" },
                { eng: "Can I have some water?", jpn: "お水をもらえますか？" }
            ]
        },
        clickingGames: [
            { prompt: "パスポートを拝見できますか？", target: "Can I see your passport?", words: ["Can", "I", "see", "your", "passport?"] },
            { prompt: "Wi-Fiのパスワードを教えてもらえますか？", target: "Can you tell me the Wi-Fi password?", words: ["Can", "you", "tell", "me", "the", "Wi-Fi", "password?"] },
            { prompt: "予約しています。", target: "I have a reservation.", words: ["I", "have", "a", "reservation."] },
            { prompt: "チェックインをお願いします。", target: "I would like to check in.", words: ["I", "would", "like", "to", "check", "in."] },
            { prompt: "朝食は何時ですか？", target: "What time is breakfast?", words: ["What", "time", "is", "breakfast?"] }
        ],
        dropdownGames: [
            { before: "Can", options: ["I", "you", "me"], answer: "I", after: " have your name, please?" },
            { before: "Can", options: ["I", "you", "my"], answer: "you", after: " help me with my luggage?" },
            { before: "I", options: ["have", "am", "do"], answer: "have", after: " a reservation for two nights." },
            { before: "", options: ["Here", "There", "Where"], answer: "Here", after: " you go." },
            { before: "What", options: ["time", "hour", "clock"], answer: "time", after: " is check-out?" },
            { before: "Can I", options: ["see", "saw", "seeing"], answer: "see", after: " your passport?" },
            { before: "Where", options: ["is", "are", "am"], answer: "is", after: " the elevator?" },
            { before: "Your room is", options: ["on", "in", "at"], answer: "on", after: " the second floor." },
            { before: "Can you", options: ["tell", "say", "speak"], answer: "tell", after: " me where the restaurant is?" },
            { before: "I", options: ["would", "will", "can"], answer: "would", after: " like to check in." }
        ],
        roleplay: {
            a: "You are a hotel guest. Greet the clerk, say you want to check in, give your name, show your passport, and ask what time breakfast is. (あなたはホテルの客です。店員に挨拶し、チェックインしたい旨を伝え、名前を名乗り、パスポートを見せ、朝食の時間を尋ねてください。)",
            b: "You are the hotel clerk. Welcome the guest, ask for their name and passport, answer their question about breakfast, and give them their room number. (ホテルの店員役です。客を歓迎し、名前とパスポートを求め、朝食についての質問に答え、部屋番号を伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Towel", jpn: "タオル" },
                { eng: "Blanket", jpn: "毛布" },
                { eng: "Pillow", jpn: "枕" },
                { eng: "Soap", jpn: "石鹸" },
                { eng: "Shampoo", jpn: "シャンプー" },
                { eng: "Toothbrush", jpn: "歯ブラシ" },
                { eng: "Air conditioner", jpn: "エアコン" },
                { eng: "Heater", jpn: "ヒーター / 暖房" },
                { eng: "Remote control", jpn: "リモコン" },
                { eng: "Wake-up call", jpn: "モーニングコール" },
                { eng: "Reception", jpn: "フロント / 受付" },
                { eng: "Pool", jpn: "プール" },
                { eng: "Gym", jpn: "ジム" },
                { eng: "Stairs", jpn: "階段" }
            ],
            reading1: {
                title: "Task 2: Reading (Hotel Welcome Letter)",
                instruction: "Read the welcome letter in the hotel room.",
                eng: "<strong>Welcome to the Grand City Hotel!</strong><br><br>Dear Guest,<br><br>Thank you for choosing our hotel. We hope you enjoy your stay. Breakfast is from 7:00 AM to 10:00 AM in the restaurant on the 1st floor. The gym and pool are on the 2nd floor, and they are open until 9:00 PM. Check-out time is 11:00 AM. If you need clean towels, extra pillows, or a wake-up call, please call the reception. Our staff is always happy to help you. <br><br>Enjoy your trip!<br>Hotel Management",
                jpn: "<strong>グランドシティホテルへようこそ！</strong><br><br>お客様へ<br><br>当ホテルをお選びいただきありがとうございます。ご滞在をお楽しみください。朝食は午前7時から午前10時まで、1階のレストランでご用意しております。ジムとプールは2階にあり、午後9時まで営業しております。チェックアウト時間は午前11時です。清潔なタオル、追加の枕、またはモーニングコールが必要な場合は、フロントまでお電話ください。当ホテルのスタッフが喜んでお手伝いいたします。<br><br>ご旅行をお楽しみください！<br>ホテル経営陣"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hello, this is room 502.", jpn: "こんにちは、こちらは502号室です。" },
                { speaker: "B", eng: "Hello. This is the reception. How can I help you?", jpn: "こんにちは。フロントです。どのようなご用件でしょうか？" },
                { speaker: "A", eng: "Can I have some extra towels, please?", jpn: "追加のタオルを何枚かもらえますか？" },
                { speaker: "B", eng: "Of course. I will send them to your room right away.", jpn: "もちろんです。すぐにスタッフをお部屋に向かわせます。" },
                { speaker: "A", eng: "Thank you. Also, can you tell me what time check-out is?", jpn: "ありがとうございます。それから、チェックアウトは何時か教えてもらえますか？" },
                { speaker: "B", eng: "Check-out is at 11 AM.", jpn: "チェックアウトは午前11時です。" },
                { speaker: "A", eng: "Can I check out late? At 12 PM?", jpn: "遅くチェックアウトすることはできますか？午後12時に。" },
                { speaker: "B", eng: "Yes, that is fine. We will update your reservation.", jpn: "はい、大丈夫です。ご予約情報を更新しておきます。" },
                { speaker: "A", eng: "Great! Thank you very much for your help.", jpn: "素晴らしい！手伝っていただき本当にありがとうございます。" },
                { speaker: "B", eng: "You are welcome. Have a good night.", jpn: "どういたしまして。おやすみなさいませ。" }
            ],
            writingTask: {
                promptEng: "Imagine you are staying at a hotel. Write a short paragraph describing what you do at the hotel. Mention checking in, asking for the Wi-Fi password, and what time you eat breakfast. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "ホテルに滞在していると想像してください。ホテルで何をするかを描写する短い文章を書いてください。チェックインすること、Wi-Fiのパスワードを尋ねること、そして朝食を食べる時間を含めてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 14,
        title: "Lesson 14: How to talk about your abilities",
        goal: "Ask and answer questions about the skills and abilities you have. <br><span style='font-size:0.9rem; color:var(--text-light);'>(自分ができるスキルや能力について質問し、答える。)</span>",
        vocab: [
            { eng: "Swim", jpn: "泳ぐ" },
            { eng: "Drive", jpn: "運転する" },
            { eng: "Speak", jpn: "話す" },
            { eng: "Ride", jpn: "乗る" },
            { eng: "Use", jpn: "使う" },
            { eng: "Play", jpn: "演奏する / スポーツをする" },
            { eng: "Cook", jpn: "料理する" },
            { eng: "Ski", jpn: "スキーをする" },
            { eng: "Sing", jpn: "歌う" },
            { eng: "Dance", jpn: "踊る" },
            { eng: "Fast", jpn: "速く" },
            { eng: "Well", jpn: "上手に" },
            { eng: "A little", jpn: "少し" },
            { eng: "Language", jpn: "言語" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Can you drive a car?</span>", jpn: "車を運転できますか？" },
            { speaker: "B", eng: "<span class='swappable'>Yes, I can.</span> I drive every day. <span class='swappable'>Can you speak Spanish?</span>", jpn: "はい、できます。毎日運転します。あなたはスペイン語を話せますか？" },
            { speaker: "A", eng: "<span class='swappable'>No, I can't.</span> But <span class='swappable'>I can speak a little French.</span>", jpn: "いいえ、話せません。でも、フランス語が少し話せます。" },
            { speaker: "B", eng: "That is cool. <span class='swappable'>Can you play the piano?</span>", jpn: "それはかっこいいですね。ピアノは弾けますか？" },
            { speaker: "A", eng: "Yes, I can play it very well.", jpn: "はい、とても上手に弾けます。" }
        ],
        expressions: [
            { category: "1. Asking about abilities (能力を尋ねる)", options: ["Can you drive a car?", "Can you swim?", "Can you ski?"] },
            { category: "2. Answering affirmatively (肯定的な返答)", options: ["Yes, I can.", "Yes, I can do that.", "Yes, a little."] },
            { category: "3. Answering negatively (否定的な返答)", options: ["No, I can't.", "No, I cannot.", "I am not very good at it."] },
            { category: "4. Asking about languages (言語について尋ねる)", options: ["Can you speak Spanish?", "Can you read Chinese?", "What languages can you speak?"] },
            { category: "5. Stating limited ability (限られた能力を伝える)", options: ["I can speak a little French.", "I can understand a little.", "I can read basic words."] },
            { category: "6. Asking about instruments/skills (楽器やスキルについて尋ねる)", options: ["Can you play the piano?", "Can you use a computer?", "Can you cook well?"] }
        ],
        grammar: {
            point: "Modal Verb 'Can' for Ability - 助動詞 'Can'（能力）",
            explanation: "We use 'can' followed by a base verb to talk about skills and abilities. The negative form is 'cannot' or 'can't'. <br><span style='font-size:0.9rem; color:var(--text-light);'>（スキルや能力について話すときは、『can』の後に動詞の原形を使います。否定形は『cannot』または『can't』です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the structure: '<u>Can you drive</u> a car?' and '<u>I can speak</u> a little French.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>Can you drive</u>...』や『<u>I can speak</u>...』の構造に注目してください。)</span>",
            examples: [
                { eng: "I can swim very fast.", jpn: "私はとても速く泳ぐことができます。" },
                { eng: "She can't speak English.", jpn: "彼女は英語を話せません。" },
                { eng: "Can he play the guitar?", jpn: "彼はギターを弾けますか？" }
            ]
        },
        clickingGames: [
            { prompt: "車を運転できますか？", target: "Can you drive a car?", words: ["Can", "you", "drive", "a", "car?"] },
            { prompt: "はい、とても上手に泳げます。", target: "Yes, I can swim very well.", words: ["Yes,", "I", "can", "swim", "very", "well."] },
            { prompt: "彼女はスペイン語を話せません。", target: "She can't speak Spanish.", words: ["She", "can't", "speak", "Spanish."] },
            { prompt: "少しフランス語が話せます。", target: "I can speak a little French.", words: ["I", "can", "speak", "a", "little", "French."] },
            { prompt: "彼らはピアノを弾けますか？", target: "Can they play the piano?", words: ["Can", "they", "play", "the", "piano?"] }
        ],
        dropdownGames: [
            { before: "Can you", options: ["swim", "swims", "swimming"], answer: "swim", after: " fast?" },
            { before: "No, I", options: ["can't", "don't", "am not"], answer: "can't", after: " speak Chinese." },
            { before: "I", options: ["can", "am", "do"], answer: "can", after: " play the guitar." },
            { before: "", options: ["Can", "Do", "Are"], answer: "Can", after: " she ride a bicycle?" },
            { before: "He can cook very", options: ["well", "good", "nice"], answer: "well", after: "." },
            { before: "We can speak a", options: ["little", "few", "small"], answer: "little", after: " Japanese." },
            { before: "What languages", options: ["can", "do", "are"], answer: "can", after: " you speak?" },
            { before: "I", options: ["can't", "doesn't", "isn't"], answer: "can't", after: " use this computer." },
            { before: "Can you", options: ["drive", "drive a", "drives"], answer: "drive a", after: " car?" },
            { before: "Yes, I", options: ["can", "do", "am"], answer: "can", after: "." }
        ],
        roleplay: {
            a: "You are getting to know a new coworker. Ask them if they can drive, and ask what languages they can speak. (新しい同僚のことを知ろうとしています。運転できるか尋ね、何語が話せるか聞いてください。)",
            b: "You are the new coworker. Answer the questions, and ask your partner if they can play any instruments. (新しい同僚の役です。質問に答え、相手に何か楽器が弾けるか尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Computer", jpn: "コンピューター" },
                { eng: "Smartphone", jpn: "スマートフォン" },
                { eng: "Type", jpn: "タイピングする" },
                { eng: "Code", jpn: "プログラミングする" },
                { eng: "Fix", jpn: "直す / 修理する" },
                { eng: "Build", jpn: "建てる / 作る" },
                { eng: "Bake", jpn: "焼く" },
                { eng: "Sew", jpn: "縫う" },
                { eng: "Paint", jpn: "絵の具で描く" },
                { eng: "Draw", jpn: "線で描く" },
                { eng: "Translate", jpn: "翻訳する" },
                { eng: "Understand", jpn: "理解する" },
                { eng: "Quickly", jpn: "速く" },
                { eng: "Slowly", jpn: "ゆっくり" }
            ],
            reading1: {
                title: "Task 2: Reading (Personal Profile)",
                instruction: "Read the profile about a person's skills.",
                eng: "<strong>My Skills and Abilities</strong><br><br>My name is Ken. I am a software engineer. I can use computers very well, and I can code quickly. However, I can't fix broken computers. In my free time, I like learning languages. I can speak English fluently, and I can understand a little Spanish. I can't play any instruments, but I can sing well. My favorite sport is swimming, and I can swim very fast.",
                jpn: "<strong>私のスキルと能力</strong><br><br>私の名前はケンです。ソフトウェアエンジニアです。コンピューターをとても上手に使うことができ、プログラミングも速くできます。しかし、壊れたコンピューターを直すことはできません。自由な時間には、言語を学ぶのが好きです。英語を流暢に話すことができ、スペイン語も少し理解できます。楽器は何も弾けませんが、歌を上手に歌うことができます。好きなスポーツは水泳で、とても速く泳げます。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hi Maria. I need some help. Can you translate this email for me?", jpn: "こんにちは、マリア。少し助けてほしいんだけど。このメールを翻訳できる？" },
                { speaker: "B", eng: "Let me see. Is it in French?", jpn: "見せて。フランス語？" },
                { speaker: "A", eng: "Yes, it is. Can you speak French?", jpn: "うん、そうだよ。フランス語話せる？" },
                { speaker: "B", eng: "I can understand a little, but I can't translate business emails. Sorry.", jpn: "少しは理解できるけど、ビジネスメールの翻訳はできないわ。ごめんね。" },
                { speaker: "A", eng: "That is okay. Do you know anyone who can speak French?", jpn: "大丈夫だよ。誰かフランス語を話せる人を知ってる？" },
                { speaker: "B", eng: "Yes, Paul can speak it fluently. He lived in Paris.", jpn: "ええ、ポールが流暢に話せるわ。彼はパリに住んでいたの。" },
                { speaker: "A", eng: "Great! I will ask him. By the way, can you play tennis?", jpn: "素晴らしい！彼に聞いてみるよ。ところで、テニスはできる？" },
                { speaker: "B", eng: "Yes, I can play very well. Why do you ask?", jpn: "うん、とても上手よ。どうして聞くの？" },
                { speaker: "A", eng: "We need one more player for our game this weekend. Can you join us?", jpn: "今週末の試合にあと1人必要なんだ。参加できる？" },
                { speaker: "B", eng: "I would love to!", jpn: "ぜひ参加したいわ！" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your skills. Include two things you can do well, and one thing you cannot do. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "あなたのスキルについて短い文章を書いてください。上手にできることを2つ、できないことを1つ含めてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 15,
        title: "Lesson 15: How to talk about feeling sick",
        goal: "Explain basic symptoms of illness and ask for medicine at a pharmacy. <br><span style='font-size:0.9rem; color:var(--text-light);'>(病気の基本的な症状を説明し、薬局で薬を買う。)</span>",
        vocab: [
            { eng: "Sick", jpn: "具合が悪い" },
            { eng: "Headache", jpn: "頭痛" },
            { eng: "Stomachache", jpn: "腹痛" },
            { eng: "Fever", jpn: "熱" },
            { eng: "Cold", jpn: "風邪" },
            { eng: "Cough", jpn: "咳" },
            { eng: "Medicine", jpn: "薬" },
            { eng: "Pharmacy", jpn: "薬局" },
            { eng: "Doctor", jpn: "医者" },
            { eng: "Pain", jpn: "痛み" },
            { eng: "Hurt", jpn: "痛む" },
            { eng: "Rest", jpn: "休む / 休息" },
            { eng: "Water", jpn: "水" },
            { eng: "Sleep", jpn: "眠る" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hello, <span class='swappable'>how can I help you?</span>", jpn: "こんにちは、どうされましたか？（お手伝いしましょうか？）" },
            { speaker: "B", eng: "<span class='swappable'>I feel sick.</span> <span class='swappable'>I have a headache.</span>", jpn: "具合が悪いです。頭痛がします。" },
            { speaker: "A", eng: "<span class='swappable'>Do you have a fever?</span>", jpn: "熱はありますか？" },
            { speaker: "B", eng: "No, I don't think so. <span class='swappable'>Do you have any medicine for a headache?</span>", jpn: "いいえ、ないと思います。頭痛薬はありますか？" },
            { speaker: "A", eng: "Yes, <span class='swappable'>take this medicine twice a day.</span>", jpn: "はい、この薬を1日2回飲んでください。" }
        ],
        expressions: [
            { category: "1. Clerk offering help (店員からの声かけ)", options: ["How can I help you?", "What seems to be the matter?", "Are you okay?"] },
            { category: "2. Stating you are sick (体調不良の伝え方)", options: ["I feel sick.", "I don't feel well.", "I feel terrible."] },
            { category: "3. Stating symptoms (症状の伝え方)", options: ["I have a headache.", "I have a stomachache.", "I have a bad cold."] },
            { category: "4. Asking about symptoms (症状についての質問)", options: ["Do you have a fever?", "Do you have a cough?", "Does your head hurt?"] },
            { category: "5. Asking for medicine (薬の求め方)", options: ["Do you have any medicine for a headache?", "I need some medicine for a cold.", "Can I get some medicine?"] },
            { category: "6. Giving instructions (指示の伝え方)", options: ["Take this medicine twice a day.", "Take two pills after meals.", "Please get some rest."] }
        ],
        grammar: {
            point: "Using 'Have' for Illnesses - 病気や症状を表す 'Have'",
            explanation: "We use the verb 'have' followed by 'a' and the illness to explain how we feel (e.g., a cold, a fever, a headache). <br><span style='font-size:0.9rem; color:var(--text-light);'>（体調を説明する時は、動詞の『have』の後に『a』と病名や症状（例：a cold, a fever, a headache）を続けて使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the phrases: 'I <u>have a headache</u>' and 'Do you <u>have a fever</u>?' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『I <u>have a headache</u>』や『Do you <u>have a fever</u>?』といったフレーズに注目してください。)</span>",
            examples: [
                { eng: "I have a bad cold.", jpn: "私はひどい風邪をひいています。" },
                { eng: "She has a stomachache.", jpn: "彼女は腹痛があります。" },
                { eng: "He doesn't have a fever.", jpn: "彼に熱はありません。" }
            ]
        },
        clickingGames: [
            { prompt: "今日は気分が悪いです。", target: "I feel sick today.", words: ["I", "feel", "sick", "today."] },
            { prompt: "彼はひどい頭痛がします。", target: "He has a terrible headache.", words: ["He", "has", "a", "terrible", "headache."] },
            { prompt: "熱はありますか？", target: "Do you have a fever?", words: ["Do", "you", "have", "a", "fever?"] },
            { prompt: "風邪の薬が必要です。", target: "I need medicine for a cold.", words: ["I", "need", "medicine", "for", "a", "cold."] },
            { prompt: "この薬を1日2回飲んでください。", target: "Take this medicine twice a day.", words: ["Take", "this", "medicine", "twice", "a", "day."] }
        ],
        dropdownGames: [
            { before: "I", options: ["feel", "have", "am"], answer: "feel", after: " sick." },
            { before: "I", options: ["have", "feel", "do"], answer: "have", after: " a headache." },
            { before: "Do you", options: ["have", "feel", "has"], answer: "have", after: " a fever?" },
            { before: "", options: ["Take", "Drink", "Eat"], answer: "Take", after: " this medicine twice a day." },
            { before: "He", options: ["has", "have", "feels"], answer: "has", after: " a bad cold." },
            { before: "I need some medicine", options: ["for", "to", "at"], answer: "for", after: " a stomachache." },
            { before: "Please", options: ["get", "take", "have"], answer: "get", after: " some rest." },
            { before: "She doesn't", options: ["feel", "have", "do"], answer: "feel", after: " well today." },
            { before: "Does your head", options: ["hurt", "pain", "sick"], answer: "hurt", after: "?" },
            { before: "How", options: ["can", "do", "are"], answer: "can", after: " I help you?" }
        ],
        roleplay: {
            a: "You are feeling sick. Go to the pharmacy, explain your symptoms, and ask for medicine. (あなたは具合が悪いです。薬局に行き、症状を説明して薬を求めてください。)",
            b: "You are the pharmacist. Ask the customer what is wrong, ask if they have a fever, and give them medicine with instructions. (薬剤師の役です。客にどうしたのか尋ね、熱があるか聞き、指示を添えて薬を渡してください。)"
        },
        homework: {
            vocab: [
                { eng: "Hospital", jpn: "病院" },
                { eng: "Dentist", jpn: "歯科医" },
                { eng: "Nurse", jpn: "看護師" },
                { eng: "Patient", jpn: "患者" },
                { eng: "Sore throat", jpn: "喉の痛み" },
                { eng: "Runny nose", jpn: "鼻水" },
                { eng: "Pill", jpn: "丸薬 / ピル" },
                { eng: "Tablet", jpn: "錠剤" },
                { eng: "Bandage", jpn: "包帯 / 絆創膏" },
                { eng: "Broken", jpn: "折れた / 骨折した" },
                { eng: "Cut", jpn: "切った / 切り傷" },
                { eng: "Burn", jpn: "やけど" },
                { eng: "Healthy", jpn: "健康な" },
                { eng: "Better", jpn: "より良い / 回復して" }
            ],
            reading1: {
                title: "Task 2: Reading (Work Message)",
                instruction: "Read the message to a boss about taking sick leave.",
                eng: "<strong>To:</strong> David (Manager)<br><strong>From:</strong> Tom<br><br>Hi David,<br><br>I am sorry, but I cannot come to work today. I don't feel well at all. I have a high fever, a bad cough, and a sore throat. I am going to go to the doctor this morning to get some medicine. After that, I will stay home and rest. I hope to feel better and come back to work tomorrow. Thank you for understanding.<br><br>Best regards,<br>Tom",
                jpn: "<strong>宛先：</strong> デビッド（マネージャー）<br><strong>差出人：</strong> トム<br><br>デビッドさんへ<br><br>申し訳ありませんが、今日は仕事に行けません。全く体調が良くありません。高熱、ひどい咳、そして喉の痛みがあります。薬をもらうために、今朝医者に行く予定です。その後は家にいて休みます。体調が回復して、明日仕事に戻れることを願っています。ご理解いただきありがとうございます。<br><br>よろしくお願いします。<br>トム"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hello, what seems to be the matter today?", jpn: "こんにちは、今日はどうされましたか？" },
                { speaker: "B", eng: "I don't feel well, doctor. I have a sore throat and a runny nose.", jpn: "体調が良くないんです、先生。喉が痛くて鼻水が出ます。" },
                { speaker: "A", eng: "I see. Do you have a fever?", jpn: "なるほど。熱はありますか？" },
                { speaker: "B", eng: "Yes, I had a fever last night.", jpn: "はい、昨夜熱がありました。" },
                { speaker: "A", eng: "Let me check. Please open your mouth and say 'Ahh'.", jpn: "確認させてください。口を開けて『あー』と言ってください。" },
                { speaker: "B", eng: "Ahh.", jpn: "あー。" },
                { speaker: "A", eng: "Your throat is very red. You have a bad cold.", jpn: "喉がとても赤いですね。ひどい風邪です。" },
                { speaker: "B", eng: "Should I stay home from work?", jpn: "仕事を休んで家にいた方がいいですか？" },
                { speaker: "A", eng: "Yes. Take these pills three times a day after meals, and get lots of rest.", jpn: "はい。この錠剤を1日3回食後に飲み、たっぷり休んでください。" },
                { speaker: "B", eng: "Okay. Thank you, doctor.", jpn: "わかりました。ありがとうございます、先生。" }
            ],
            writingTask: {
                promptEng: "Write a short message to your boss or teacher. Say you are sick, explain two of your symptoms, and state that you cannot come today. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "上司または先生に短いメッセージを書いてください。具合が悪いことを伝え、症状を2つ説明し、今日は行けないと述べてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 16,
        title: "Lesson 16: How to buy a train ticket",
        goal: "Ask for and purchase a train ticket to a specific destination. <br><span style='font-size:0.9rem; color:var(--text-light);'>(特定の目的地までの電車の切符を尋ねて購入する。)</span>",
        vocab: [
            { eng: "Ticket", jpn: "切符 / チケット" },
            { eng: "Train", jpn: "電車" },
            { eng: "One-way", jpn: "片道" },
            { eng: "Round-trip", jpn: "往復" },
            { eng: "Platform", jpn: "プラットホーム" },
            { eng: "Adult", jpn: "大人" },
            { eng: "Child", jpn: "子供" },
            { eng: "Buy", jpn: "買う" },
            { eng: "Leave", jpn: "出発する" },
            { eng: "Arrive", jpn: "到着する" },
            { eng: "Next", jpn: "次の" },
            { eng: "Express", jpn: "急行" },
            { eng: "Local", jpn: "各駅停車 / 普通" },
            { eng: "Seat", jpn: "座席" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hello, <span class='swappable'>I would like to buy a ticket to London, please.</span>", jpn: "こんにちは、ロンドン行きの切符を買いたいのですが。" },
            { speaker: "B", eng: "Sure. <span class='swappable'>One-way or round-trip?</span>", jpn: "かしこまりました。片道ですか、それとも往復ですか？" },
            { speaker: "A", eng: "<span class='swappable'>One-way, please.</span> <span class='swappable'>How much is it?</span>", jpn: "片道でお願いします。いくらですか？" },
            { speaker: "B", eng: "<span class='swappable'>It is twenty pounds.</span>", jpn: "20ポンドです。" },
            { speaker: "A", eng: "Here you go. What time does the train leave?", jpn: "はい、どうぞ。電車は何時に出発しますか？" },
            { speaker: "B", eng: "<span class='swappable'>The next train leaves at 3 PM from platform 2.</span>", jpn: "次の電車は午後3時に2番線から出発します。" }
        ],
        expressions: [
            { category: "1. Stating your destination (目的地の伝え方)", options: ["I would like to buy a ticket to London, please.", "A ticket to Manchester, please.", "Two tickets to York, please."] },
            { category: "2. Ticket types (切符の種類の確認)", options: ["One-way or round-trip?", "Single or return?", "For an adult or a child?"] },
            { category: "3. Choosing a ticket type (切符の種類の指定)", options: ["One-way, please.", "Round-trip, please.", "One adult and one child, please."] },
            { category: "4. Asking the price (値段の尋ね方)", options: ["How much is it?", "How much are they?", "What is the total?"] },
            { category: "5. Stating the price (値段の伝え方)", options: ["It is twenty pounds.", "That will be fifty dollars.", "They are thirty euros."] },
            { category: "6. Giving train information (電車の情報の伝え方)", options: ["The next train leaves at 3 PM from platform 2.", "It departs from platform 4.", "The express train is at 4 PM."] }
        ],
        grammar: {
            point: "I would like to + Verb - 〜したいのですが（丁寧な希望）",
            explanation: "We use 'I would like to' followed by a base verb to politely say what we want to do. It is much more polite than 'I want to'. <br><span style='font-size:0.9rem; color:var(--text-light);'>（『I would like to』の後に動詞の原形を続けて、自分のやりたいことを丁寧に伝えます。『I want to』よりもはるかに丁寧です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the polite request: 'I <u>would like to buy</u> a ticket'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：丁寧な依頼『I <u>would like to buy</u> a ticket』に注目してください。)</span>",
            examples: [
                { eng: "I would like to buy two tickets.", jpn: "切符を2枚買いたいのですが。" },
                { eng: "I would like to pay by credit card.", jpn: "クレジットカードで支払いたいのですが。" },
                { eng: "We would like to sit together.", jpn: "私たちは一緒に座りたいのですが。" }
            ]
        },
        clickingGames: [
            { prompt: "ロンドン行きの切符を買いたいです。", target: "I would like to buy a ticket to London.", words: ["I", "would", "like", "to", "buy", "a", "ticket", "to", "London."] },
            { prompt: "片道ですか、それとも往復ですか？", target: "One-way or round-trip?", words: ["One-way", "or", "round-trip?"] },
            { prompt: "電車は何時に出発しますか？", target: "What time does the train leave?", words: ["What", "time", "does", "the", "train", "leave?"] },
            { prompt: "次の電車は2番線から出発します。", target: "The next train leaves from platform 2.", words: ["The", "next", "train", "leaves", "from", "platform", "2."] },
            { prompt: "大人1枚と子供1枚をお願いします。", target: "One adult and one child, please.", words: ["One", "adult", "and", "one", "child,", "please."] }
        ],
        dropdownGames: [
            { before: "I would like", options: ["to buy", "buy", "buying"], answer: "to buy", after: " a ticket." },
            { before: "A ticket", options: ["for", "to", "at"], answer: "to", after: " Manchester, please." },
            { before: "Is that one-way or", options: ["round-trip", "two-way", "circle"], answer: "round-trip", after: "?" },
            { before: "How", options: ["many", "much", "cost"], answer: "much", after: " is it?" },
            { before: "It", options: ["is", "are", "has"], answer: "is", after: " fifty dollars." },
            { before: "What time does the train", options: ["leave", "leaves", "leaving"], answer: "leave", after: "?" },
            { before: "The train leaves", options: ["in", "on", "from"], answer: "from", after: " platform 3." },
            { before: "I would", options: ["like", "love", "want"], answer: "like", after: " to pay in cash." },
            { before: "Two", options: ["adult", "adults", "child"], answer: "adults", after: ", please." },
            { before: "The", options: ["next", "near", "soon"], answer: "next", after: " train is at 4 PM." }
        ],
        roleplay: {
            a: "You are at a train station. Go to the ticket window and ask to buy a round-trip ticket to a city you choose. Ask how much it is and what platform it leaves from. (あなたは駅にいます。窓口に行き、自分で選んだ都市までの往復切符を買いたいと伝えてください。いくらか、そして何番線から出発するか尋ねてください。)",
            b: "You are the ticket agent. Ask if they want a one-way or round-trip ticket, tell them the price, and give them the platform number. (駅員役です。片道か往復か尋ね、値段を伝え、プラットホームの番号を教えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Subway", jpn: "地下鉄" },
                { eng: "Bus", jpn: "バス" },
                { eng: "Taxi", jpn: "タクシー" },
                { eng: "Airport", jpn: "空港" },
                { eng: "Passenger", jpn: "乗客" },
                { eng: "Gate", jpn: "ゲート / 改札" },
                { eng: "Schedule", jpn: "スケジュール / 時刻表" },
                { eng: "Delay", jpn: "遅れ / 遅延" },
                { eng: "Cash", jpn: "現金" },
                { eng: "Credit card", jpn: "クレジットカード" },
                { eng: "Receipt", jpn: "レシート / 領収書" },
                { eng: "Travel", jpn: "旅行する" },
                { eng: "Trip", jpn: "旅行" },
                { eng: "Map", jpn: "地図" }
            ],
            reading1: {
                title: "Task 2: Reading (Station Notice)",
                instruction: "Read the information board at the train station.",
                eng: "<strong>STATION ANNOUNCEMENTS</strong><br><br>Welcome to Central Station. Tickets are available at the ticket window or the ticket machines. You can pay with cash or credit card. The express train to London leaves from Platform 1 at 9:00 AM. The local train to Manchester leaves from Platform 3 at 9:15 AM. Please check your ticket before you board the train. If you have any questions, please ask the station staff. Have a safe trip!",
                jpn: "<strong>駅のお知らせ</strong><br><br>セントラル駅へようこそ。切符は窓口または券売機でお求めいただけます。現金またはクレジットカードでお支払いいただけます。ロンドン行きの急行列車は午前9時に1番線から出発します。マンチェスター行きの各駅停車は午前9時15分に3番線から出発します。ご乗車前に切符をご確認ください。ご不明な点がございましたら、駅員にお尋ねください。安全なご旅行を！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Next, please! Hello, how can I help you?", jpn: "次の方どうぞ！こんにちは、ご用件は何でしょうか？" },
                { speaker: "B", eng: "Hi. I would like to buy a ticket to Edinburgh, please.", jpn: "こんにちは。エディンバラ行きの切符を買いたいのですが。" },
                { speaker: "A", eng: "Certainly. Are you travelling today?", jpn: "かしこまりました。本日ご旅行ですか？" },
                { speaker: "B", eng: "Yes, today. I need one adult and one child ticket.", jpn: "はい、今日です。大人1枚と子供1枚をお願いします。" },
                { speaker: "A", eng: "Okay. One-way or round-trip?", jpn: "わかりました。片道ですか、それとも往復ですか？" },
                { speaker: "B", eng: "Round-trip, please. How much is the total?", jpn: "往復でお願いします。合計はいくらですか？" },
                { speaker: "A", eng: "That will be forty-five pounds. How would you like to pay?", jpn: "45ポンドになります。お支払い方法はどうなさいますか？" },
                { speaker: "B", eng: "I will pay by credit card. Here you go.", jpn: "クレジットカードで支払います。はい、どうぞ。" },
                { speaker: "A", eng: "Thank you. Here are your tickets and your receipt.", jpn: "ありがとうございます。こちらが切符とレシートです。" },
                { speaker: "B", eng: "Thank you. Which platform is it?", jpn: "ありがとう。何番線ですか？" },
                { speaker: "A", eng: "The next train leaves from platform 5 in ten minutes.", jpn: "次の電車は10分後に5番線から出発します。" },
                { speaker: "B", eng: "Great, thanks!", jpn: "わかりました、ありがとう！" }
            ],
            writingTask: {
                promptEng: "Imagine you are taking a train trip. Write a short paragraph describing where you are going, what kind of ticket you buy (one-way/round-trip), and what time the train leaves. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "列車の旅に出ると想像してください。どこへ行くか、どんな切符を買うか（片道/往復）、そして電車が何時に出発するかを描写する短い文章を書いてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 17,
        title: "Lesson 17: How to make a restaurant reservation",
        goal: "Call a restaurant to book a table for a specific number of people, date, and time. <br><span style='font-size:0.9rem; color:var(--text-light);'>(レストランに電話をかけ、人数、日付、時間を指定して席を予約する。)</span>",
        vocab: [
            { eng: "Restaurant", jpn: "レストラン" },
            { eng: "Reservation", jpn: "予約" },
            { eng: "Book", jpn: "予約する" },
            { eng: "Table", jpn: "テーブル / 席" },
            { eng: "People", jpn: "人々 / 〜名" },
            { eng: "Person", jpn: "人 / 1名" },
            { eng: "Tonight", jpn: "今夜" },
            { eng: "Tomorrow", jpn: "明日" },
            { eng: "Time", jpn: "時間" },
            { eng: "Name", jpn: "名前" },
            { eng: "Number", jpn: "番号 / 電話番号" },
            { eng: "Menu", jpn: "メニュー" },
            { eng: "Open", jpn: "開いている / 営業中の" },
            { eng: "Closed", jpn: "閉まっている / 休業の" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hello, Mario's Restaurant. <span class='swappable'>How can I help you?</span>", jpn: "こんにちは、マリオズ・レストランです。どのようなご用件でしょうか？" },
            { speaker: "B", eng: "Hello, <span class='swappable'>I would like to make a reservation for tonight.</span>", jpn: "こんにちは、今夜の予約をしたいのですが。" },
            { speaker: "A", eng: "Certainly. <span class='swappable'>For how many people?</span>", jpn: "かしこまりました。何名様ですか？" },
            { speaker: "B", eng: "<span class='swappable'>For two people, please.</span>", jpn: "2名でお願いします。" },
            { speaker: "A", eng: "<span class='swappable'>What time would you like?</span>", jpn: "何時になさいますか？" },
            { speaker: "B", eng: "<span class='swappable'>At 7 PM, please.</span> My name is Alex.", jpn: "午後7時にお願いします。私の名前はアレックスです。" }
        ],
        expressions: [
            { category: "1. Staff greeting (店員の電話の出方)", options: ["How can I help you?", "How may I help you?", "What can I do for you?"] },
            { category: "2. Stating your request (予約の申し出)", options: ["I would like to make a reservation for tonight.", "I want to book a table for tomorrow.", "Can I make a reservation?"] },
            { category: "3. Asking the party size (人数の確認)", options: ["For how many people?", "How many people are in your party?", "A table for how many?"] },
            { category: "4. Stating the party size (人数の伝え方)", options: ["For two people, please.", "A table for four, please.", "Just for one person."] },
            { category: "5. Asking the time (時間の確認)", options: ["What time would you like?", "What time?", "For what time?"] },
            { category: "6. Stating the time (時間の伝え方)", options: ["At 7 PM, please.", "For 6:30 PM, please.", "Around 8 o'clock."] }
        ],
        grammar: {
            point: "Preposition 'For' (Purpose and Duration) - 目的・対象・期間を表す 'for'",
            explanation: "We use the preposition 'for' to show purpose, who something is intended for, or duration. In reservations, it is used for dates (for tonight) and party size (for two people). <br><span style='font-size:0.9rem; color:var(--text-light);'>（前置詞の『for』は、目的、対象、または期間を表すために使います。予約の場面では、日付（今夜の予約）や人数（2名様用）を表すのに使われます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how 'for' is used: 'a reservation <u>for</u> tonight' and '<u>For</u> how many people?' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『a reservation <u>for</u> tonight』や『<u>For</u> how many people?』での『for』の使われ方に注目してください。)</span>",
            examples: [
                { eng: "I need a table for four people.", jpn: "4名用のテーブルが必要です。" },
                { eng: "I have a reservation for Friday.", jpn: "金曜日の予約をしています。" },
                { eng: "This gift is for you.", jpn: "このプレゼントはあなたのためのものです。" }
            ]
        },
        clickingGames: [
            { prompt: "今夜の予約をしたいのですが。", target: "I would like to make a reservation for tonight.", words: ["I", "would", "like", "to", "make", "a", "reservation", "for", "tonight."] },
            { prompt: "何名様ですか？", target: "For how many people?", words: ["For", "how", "many", "people?"] },
            { prompt: "2名でお願いします。", target: "For two people, please.", words: ["For", "two", "people,", "please."] },
            { prompt: "何時になさいますか？", target: "What time would you like?", words: ["What", "time", "would", "you", "like?"] },
            { prompt: "明日のテーブルを予約したいです。", target: "I want to book a table for tomorrow.", words: ["I", "want", "to", "book", "a", "table", "for", "tomorrow."] }
        ],
        dropdownGames: [
            { before: "I would like to", options: ["make", "do", "have"], answer: "make", after: " a reservation." },
            { before: "A reservation", options: ["to", "for", "at"], answer: "for", after: " tonight, please." },
            { before: "", options: ["For", "To", "At"], answer: "For", after: " how many people?" },
            { before: "A table for four", options: ["person", "peoples", "people"], answer: "people", after: ", please." },
            { before: "What time", options: ["would", "do", "are"], answer: "would", after: " you like?" },
            { before: "Can I", options: ["book", "book a", "books"], answer: "book a", after: " table?" },
            { before: "The reservation is", options: ["in", "on", "at"], answer: "at", after: " 7 PM." },
            { before: "How", options: ["can", "do", "are"], answer: "can", after: " I help you?" },
            { before: "My name", options: ["is", "am", "are"], answer: "is", after: " Sarah." },
            { before: "We are", options: ["open", "opens", "opened"], answer: "open", after: " until 10 PM." }
        ],
        roleplay: {
            a: "You want to eat at a famous restaurant tomorrow. Call the restaurant, ask to make a reservation, state it is for 3 people, and say you want to come at 6 PM. (明日、有名なレストランで食事をしたいです。レストランに電話し、予約をしたい旨を伝え、3名であること、そして午後6時に行きたいことを伝えてください。)",
            b: "You are the restaurant staff. Answer the phone, ask for the party size and time, and ask for the customer's name. (レストランのスタッフ役です。電話に出て、人数と時間を尋ね、お客様の名前を聞いてください。)"
        },
        homework: {
            vocab: [
                { eng: "Waiter", jpn: "ウェイター" },
                { eng: "Waitress", jpn: "ウェイトレス" },
                { eng: "Chef", jpn: "シェフ / 料理長" },
                { eng: "Customer", jpn: "客" },
                { eng: "Order", jpn: "注文する / 注文" },
                { eng: "Bill", jpn: "お会計 / 請求書" },
                { eng: "Check", jpn: "お会計 / 伝票" },
                { eng: "Drink", jpn: "飲み物" },
                { eng: "Appetizer", jpn: "前菜" },
                { eng: "Main course", jpn: "メイン料理" },
                { eng: "Dessert", jpn: "デザート" },
                { eng: "Delicious", jpn: "美味しい" },
                { eng: "Spicy", jpn: "辛い" },
                { eng: "Sweet", jpn: "甘い" }
            ],
            reading1: {
                title: "Task 2: Reading (Restaurant Confirmation Email)",
                instruction: "Read the reservation confirmation email.",
                eng: "<strong>Subject:</strong> Reservation Confirmation - Mario's Restaurant<br><br>Dear Alex,<br><br>Thank you for choosing Mario's Restaurant! We are happy to confirm your reservation. You have a table booked for two people tonight at 7:00 PM. If you need to change the time or cancel the reservation, please call us or reply to this email. We have a new menu this week, and our chef recommends the spicy tomato pasta. We look forward to seeing you tonight!<br><br>Best regards,<br>The Mario's Restaurant Team",
                jpn: "<strong>件名：</strong> 予約の確認 - マリオズ・レストラン<br><br>アレックス様<br><br>マリオズ・レストランをお選びいただきありがとうございます！ご予約の確認を喜んでお知らせいたします。今夜午後7時に2名様用のテーブルをご予約いただいております。時間の変更や予約のキャンセルが必要な場合は、お電話いただくか、このメールにご返信ください。今週は新しいメニューがあり、シェフのおすすめはスパイシートマトパスタです。今夜お会いできるのを楽しみにしています！<br><br>よろしくお願いいたします。<br>マリオズ・レストラン チーム"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hello, welcome to Mario's Restaurant. Do you have a reservation?", jpn: "こんにちは、マリオズ・レストランへようこそ。ご予約はされていますか？" },
                { speaker: "B", eng: "Yes, I have a reservation for two people at 7 PM. My name is Alex.", jpn: "はい、午後7時に2名で予約しています。名前はアレックスです。" },
                { speaker: "A", eng: "Ah, yes, Alex. Right this way, please. Here is your table.", jpn: "ああ、はい、アレックス様ですね。こちらへどうぞ。こちらがお客様のテーブルです。" },
                { speaker: "B", eng: "Thank you. Can we see the menu, please?", jpn: "ありがとうございます。メニューを見せてもらえますか？" },
                { speaker: "A", eng: "Of course. Here are the menus. Can I get you any drinks to start?", jpn: "もちろんです。こちらがメニューです。まずは何かお飲み物をお持ちしましょうか？" },
                { speaker: "B", eng: "Yes, I will have a glass of water, and my friend will have a cola.", jpn: "はい、私はグラス1杯のお水を、友人はコーラをお願いします。" },
                { speaker: "A", eng: "Sure. I will be right back with your drinks.", jpn: "かしこまりました。すぐにお飲み物をお持ちします。" },
                { speaker: "B", eng: "Thank you. Everything looks delicious. I don't know what to order!", jpn: "ありがとう。どれも美味しそう。何を注文するか迷うよ！" }
            ],
            writingTask: {
                promptEng: "Imagine you are planning a birthday dinner for your friend. Write a short paragraph explaining which restaurant you will call, how many people the reservation is for, and what time you want to eat. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "友達の誕生日ディナーを計画していると想像してください。どのレストランに電話するか、予約は何名か、そして何時に食事をしたいかを説明する短い文章を書いてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 18,
        title: "Lesson 18: How to shop for clothes",
        goal: "Ask to try on clothes and ask for a different size or color in a store. <br><span style='font-size:0.9rem; color:var(--text-light);'>(服の試着をお願いし、お店で違うサイズや色があるか尋ねる。)</span>",
        vocab: [
            { eng: "Shirt", jpn: "シャツ" },
            { eng: "Pants", jpn: "ズボン" },
            { eng: "Dress", jpn: "ドレス / ワンピース" },
            { eng: "Jacket", jpn: "ジャケット" },
            { eng: "Shoes", jpn: "靴" },
            { eng: "Size", jpn: "サイズ" },
            { eng: "Small", jpn: "Sサイズ / 小さい" },
            { eng: "Medium", jpn: "Mサイズ / 中くらい" },
            { eng: "Large", jpn: "Lサイズ / 大きい" },
            { eng: "Color", jpn: "色" },
            { eng: "Red", jpn: "赤" },
            { eng: "Blue", jpn: "青" },
            { eng: "Black", jpn: "黒" },
            { eng: "White", jpn: "白" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me, <span class='swappable'>can I try this on?</span>", jpn: "すみません、これを試着してもいいですか？" },
            { speaker: "B", eng: "Yes, the fitting rooms are right there.", jpn: "はい、試着室はあちらです。" },
            { speaker: "B", eng: "How is it?", jpn: "（試着後）いかがですか？" },
            { speaker: "A", eng: "<span class='swappable'>It is a little too small.</span> <span class='swappable'>Do you have this in a medium?</span>", jpn: "少し小さすぎます。これのMサイズはありますか？" },
            { speaker: "B", eng: "Let me check. Yes, <span class='swappable'>here you go.</span>", jpn: "確認します。はい、どうぞ。" },
            { speaker: "A", eng: "Thank you. <span class='swappable'>Do you have this in blue?</span>", jpn: "ありがとうございます。これの青色はありますか？" },
            { speaker: "B", eng: "<span class='swappable'>I'm sorry, we only have black.</span>", jpn: "申し訳ありません、黒しかありません。" }
        ],
        expressions: [
            { category: "1. Asking to try on (試着のお願い)", options: ["Can I try this on?", "Where are the fitting rooms?", "I would like to try this."] },
            { category: "2. Describing the fit (サイズ感の伝え方)", options: ["It is a little too small.", "It is too big.", "It fits perfectly."] },
            { category: "3. Asking for a different size (違うサイズを尋ねる)", options: ["Do you have this in a medium?", "Do you have a larger size?", "Do you have a size 8?"] },
            { category: "4. Handing items (物を渡す表現)", options: ["Here you go.", "Here it is.", "This is for you."] },
            { category: "5. Asking for a different color (違う色を尋ねる)", options: ["Do you have this in blue?", "Does this come in red?", "Do you have other colors?"] },
            { category: "6. Apologizing/Out of stock (在庫切れの謝罪)", options: ["I'm sorry, we only have black.", "Sorry, it is sold out.", "Unfortunately, we don't have that color."] }
        ],
        grammar: {
            point: "Too + Adjective - 〜すぎる（否定的な意味）",
            explanation: "We use 'too' before an adjective to say that something is more than we want or need. It usually has a negative meaning. <br><span style='font-size:0.9rem; color:var(--text-light);'>（形容詞の前に『too』を置くと、必要以上に〜であるという意味になります。通常は否定的な意味合いを持ちます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the phrase: 'It is a little <u>too small</u>.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『It is a little <u>too small</u>.』というフレーズに注目してください。)</span>",
            examples: [
                { eng: "The shirt is too big.", jpn: "シャツが大きすぎます。" },
                { eng: "These shoes are too expensive.", jpn: "この靴は高すぎます。" },
                { eng: "The jacket is too short.", jpn: "ジャケットが短すぎます。" }
            ]
        },
        clickingGames: [
            { prompt: "これを試着してもいいですか？", target: "Can I try this on?", words: ["Can", "I", "try", "this", "on?"] },
            { prompt: "少し小さすぎます。", target: "It is a little too small.", words: ["It", "is", "a", "little", "too", "small."] },
            { prompt: "これのMサイズはありますか？", target: "Do you have this in a medium?", words: ["Do", "you", "have", "this", "in", "a", "medium?"] },
            { prompt: "これの青色はありますか？", target: "Do you have this in blue?", words: ["Do", "you", "have", "this", "in", "blue?"] },
            { prompt: "申し訳ありません、黒しかありません。", target: "I'm sorry, we only have black.", words: ["I'm", "sorry,", "we", "only", "have", "black."] }
        ],
        dropdownGames: [
            { before: "Can I", options: ["try", "trying", "tries"], answer: "try", after: " this on?" },
            { before: "Where", options: ["is", "are", "do"], answer: "are", after: " the fitting rooms?" },
            { before: "It is a little", options: ["too", "to", "two"], answer: "too", after: " small." },
            { before: "Do you have this", options: ["in", "on", "at"], answer: "in", after: " a medium?" },
            { before: "Do you have this in", options: ["blue", "color", "big"], answer: "blue", after: "?" },
            { before: "It fits", options: ["perfectly", "perfect", "good"], answer: "perfectly", after: "." },
            { before: "The shirt is too", options: ["big", "much", "many"], answer: "big", after: "." },
            { before: "", options: ["Here", "There", "Where"], answer: "Here", after: " you go." },
            { before: "I'm sorry, we", options: ["only", "just", "very"], answer: "only", after: " have black." },
            { before: "Does this", options: ["come", "go", "make"], answer: "come", after: " in red?" }
        ],
        roleplay: {
            a: "You are a customer. Ask to try on a jacket. After trying it on, tell the clerk it is too big, and ask if they have a smaller size. (あなたは客です。ジャケットの試着をお願いしてください。試着後、大きすぎることを店員に伝え、もっと小さいサイズがあるか尋ねてください。)",
            b: "You are the store clerk. Show the customer where the fitting room is. After they try it on, ask how it fits, and hand them a smaller size. (店員役です。試着室の場所を案内してください。試着後、サイズ感を聞き、小さいサイズを渡してください。)"
        },
        homework: {
            vocab: [
                { eng: "Fitting room", jpn: "試着室" },
                { eng: "Mirror", jpn: "鏡" },
                { eng: "Customer", jpn: "客" },
                { eng: "Clerk", jpn: "店員" },
                { eng: "Cashier", jpn: "レジ" },
                { eng: "Receipt", jpn: "レシート" },
                { eng: "Return", jpn: "返品する" },
                { eng: "Exchange", jpn: "交換する" },
                { eng: "Tight", jpn: "きつい" },
                { eng: "Loose", jpn: "ゆるい" },
                { eng: "Long", jpn: "長い" },
                { eng: "Short", jpn: "短い" },
                { eng: "Cotton", jpn: "綿" },
                { eng: "Wool", jpn: "ウール / 羊毛" }
            ],
            reading1: {
                title: "Task 2: Reading (Store Return Policy)",
                instruction: "Read the return policy for the clothing store.",
                eng: "<strong>Store Return Policy</strong><br><br>Thank you for shopping at City Fashion. We hope you love your new clothes! If a shirt or jacket is too big or too small, you can exchange it for a different size. If you want to return an item, please bring it back within 30 days. You must show your receipt to the cashier. We cannot accept returns for shoes or underwear. Thank you for understanding.",
                jpn: "<strong>店舗の返品ポリシー</strong><br><br>シティファッションでお買い物いただきありがとうございます。新しいお洋服を気に入っていただけると嬉しいです！もしシャツやジャケットが大きすぎたり小さすぎたりした場合は、違うサイズに交換することができます。返品をご希望の場合は、30日以内にお持ちください。レジでレシートを提示する必要があります。靴や下着の返品はお受けできません。ご理解のほどよろしくお願いいたします。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Excuse me, I want to buy this white shirt. Where is the cashier?", jpn: "すみません、この白いシャツを買いたいのですが。レジはどこですか？" },
                { speaker: "B", eng: "The cashier is right over there, near the exit.", jpn: "レジはすぐあちら、出口の近くです。" },
                { speaker: "A", eng: "Thank you. Hello, I would like to buy this.", jpn: "ありがとうございます。こんにちは、これを買いたいです。" },
                { speaker: "B", eng: "Sure. That will be twenty-five dollars. Would you like a bag?", jpn: "かしこまりました。25ドルになります。袋はご利用ですか？" },
                { speaker: "A", eng: "Yes, please. By the way, what is your return policy?", jpn: "はい、お願いします。ちなみに、返品ポリシーはどうなっていますか？" },
                { speaker: "B", eng: "You can return or exchange items within 30 days. Please keep your receipt.", jpn: "30日以内であれば返品や交換が可能です。レシートを保管しておいてください。" },
                { speaker: "A", eng: "Great. I didn't try it on, so it might be too tight.", jpn: "良かったです。試着していないので、きつすぎるかもしれません。" },
                { speaker: "B", eng: "No problem. If it is too tight, just bring it back and we will give you a large.", jpn: "問題ありません。もしきつすぎたら、持ってきていただければLサイズをお渡しします。" },
                { speaker: "A", eng: "Thank you for your help!", jpn: "手伝っていただきありがとうございます！" },
                { speaker: "B", eng: "You're welcome. Have a nice day!", jpn: "どういたしまして。良い一日を！" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about the last piece of clothing you bought. Describe what it is, its color, and how it fits (e.g., too big, too small, fits perfectly). Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "最後に買った服について短い文章を書いてください。それが何か、色、そしてサイズ感（例：大きすぎる、小さすぎる、ぴったり）を描写してください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 19,
        title: "Lesson 19: How to order fast food",
        goal: "Order a meal set at a fast food restaurant, select sides and drinks, and specify dine-in or take-out. <br><span style='font-size:0.9rem; color:var(--text-light);'>(ファーストフード店でセットメニューを注文し、サイドメニューや飲み物を選び、店内か持ち帰りかを伝える。)</span>",
        vocab: [
            { eng: "Burger", jpn: "ハンバーガー" },
            { eng: "Fries", jpn: "フライドポテト" },
            { eng: "Chicken", jpn: "チキン" },
            { eng: "Soda", jpn: "炭酸飲料 / ジュース" },
            { eng: "Combo meal", jpn: "セットメニュー" },
            { eng: "Size", jpn: "サイズ" },
            { eng: "Large", jpn: "Lサイズ / 大きい" },
            { eng: "Medium", jpn: "Mサイズ / 中くらい" },
            { eng: "Small", jpn: "Sサイズ / 小さい" },
            { eng: "Side", jpn: "サイドメニュー" },
            { eng: "Drink", jpn: "飲み物" },
            { eng: "Here", jpn: "店内" },
            { eng: "To go", jpn: "持ち帰り" },
            { eng: "Order", jpn: "注文" }
        ],
        dialogue: [
            { speaker: "A", eng: "Welcome! <span class='swappable'>What can I get for you today?</span>", jpn: "いらっしゃいませ！本日は何になさいますか？" },
            { speaker: "B", eng: "Hello, <span class='swappable'>I would like a cheeseburger combo, please.</span>", jpn: "こんにちは、チーズバーガーのセットをお願いします。" },
            { speaker: "A", eng: "Sure. <span class='swappable'>What side would you like with that?</span>", jpn: "かしこまりました。サイドメニューは何になさいますか？" },
            { speaker: "B", eng: "<span class='swappable'>I'll have the fries, please.</span>", jpn: "ポテトでお願いします。" },
            { speaker: "A", eng: "<span class='swappable'>And what drink would you like?</span>", jpn: "そして、お飲み物は何になさいますか？" },
            { speaker: "B", eng: "<span class='swappable'>A medium cola, please.</span>", jpn: "Mサイズのコーラをお願いします。" },
            { speaker: "A", eng: "Great. Is that for here or to go?", jpn: "かしこまりました。店内でお召し上がりですか、持ち帰りですか？" },
            { speaker: "B", eng: "To go, please.", jpn: "持ち帰りでお願いします。" }
        ],
        expressions: [
            { category: "1. Staff greeting (店員の注文の伺い方)", options: ["What can I get for you today?", "May I take your order?", "What would you like today?"] },
            { category: "2. Ordering a main item/combo (メイン・セットの注文)", options: ["I would like a cheeseburger combo, please.", "Can I get a chicken burger set?", "I'll take the number 1 meal."] },
            { category: "3. Staff asking for sides (サイドメニューの確認)", options: ["What side would you like with that?", "Which side would you prefer?", "Fries or a salad with that?"] },
            { category: "4. Choosing a side (サイドメニューの選択)", options: ["I'll have the fries, please.", "Fries, please.", "A side salad, please."] },
            { category: "5. Staff asking for drinks (飲み物の確認)", options: ["And what drink would you like?", "What would you like to drink?", "What drink for the set?"] },
            { category: "6. Choosing a drink & size (飲み物とサイズの指定)", options: ["A medium cola, please.", "I'll have a large iced tea.", "A small orange juice, please."] }
        ],
        grammar: {
            point: "Future/Decision Marker 'I'll have...' - 注文決定の動詞 (I'll have)",
            explanation: "We use 'I'll have...' (I will have) when making a decision on the spot, especially when ordering food or drinks. <br><span style='font-size:0.9rem; color:var(--text-light);'>（注文を決めたその場で「〜にします」と意思表示をする際、特に食べ物や飲み物を注文するときに『I'll have...』を使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the decision structure: '<u>I'll have</u> the fries, please.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>I'll have</u> the fries...』という決定表現に注目してください。)</span>",
            examples: [
                { eng: "I'll have a coffee, please.", jpn: "コーヒーにします。" },
                { eng: "I'll have the chicken nuggets.", jpn: "チキンナゲットにします。" },
                { eng: "I'll take a large size.", jpn: "Lサイズにします。" }
            ]
        },
        clickingGames: [
            { prompt: "チーズバーガーのセットをお願いします。", target: "I would like a cheeseburger combo, please.", words: ["I", "would", "like", "a", "cheeseburger", "combo,", "please."] },
            { prompt: "ポテトにします。", target: "I'll have the fries, please.", words: ["I'll", "have", "the", "fries,", "please."] },
            { prompt: "飲み物は何になさいますか？", target: "What drink would you like?", words: ["What", "drink", "would", "you", "like?"] },
            { prompt: "Mサイズのコーラをお願いします。", target: "A medium cola, please.", words: ["A", "medium", "cola,", "please."] },
            { prompt: "店内でお召し上がりですか、持ち帰りですか？", target: "Is that for here or to go?", words: ["Is", "that", "for", "here", "or", "to", "go?"] }
        ],
        dropdownGames: [
            { before: "What can I get", options: ["for", "to", "at"], answer: "for", after: " you today?" },
            { before: "I would like a burger", options: ["combo", "pair", "group"], answer: "combo", after: ", please." },
            { before: "I'll", options: ["have", "has", "having"], answer: "have", after: " the fries." },
            { before: "What side would you", options: ["like", "want", "prefer"], answer: "like", after: " with that?" },
            { before: "A", options: ["medium", "middle", "half"], answer: "medium", after: " orange juice, please." },
            { before: "Is that", options: ["for", "to", "in"], answer: "for", after: " here or to go?" },
            { before: "I'll take the number two", options: ["meal", "food", "dish"], answer: "meal", after: "." },
            { before: "Can I get a large", options: ["size", "big", "long"], answer: "size", after: "?" },
            { before: "To go,", options: ["please", "thanks", "sure"], answer: "please", after: "." },
            { before: "What drink", options: ["for", "with", "to"], answer: "for", after: " the meal?" }
        ],
        roleplay: {
            a: "You are at a fast food counter. Order a burger combo meal, choose your side and drink when asked, and specify that it is for here. (ファーストフード店のレジにいます。ハンバーガーのセットを注文し、聞かれたらサイドと飲み物を選び、店内利用であることを伝えてください。)",
            b: "You are the fast food employee. Greet the customer, ask for their side and drink choices, and ask if it is for here or to go. (ファーストフード店の店員役です。挨拶をし、サイドメニューと飲み物の希望を聞き、店内か持ち帰りかを尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Ketchup", jpn: "ケチャップ" },
                { eng: "Mustard", jpn: "マスタード" },
                { eng: "Napkin", jpn: "ナプキン" },
                { eng: "Straw", jpn: "ストロー" },
                { eng: "Tray", jpn: "トレイ / 盆" },
                { eng: "Counter", jpn: "カウンター" },
                { eng: "Receipt", jpn: "レシート" },
                { eng: "Nuggets", jpn: "ナゲット" },
                { eng: "Onion rings", jpn: "オニオンリング" },
                { eng: "Ice cream", jpn: "アイスクリーム" },
                { eng: "Extra", jpn: "追加の" },
                { eng: "No ice", jpn: "氷なし" },
                { eng: "Cashier", jpn: "レジ係" },
                { eng: "Total", jpn: "合計" }
            ],
            reading1: {
                title: "Task 2: Reading (Fast Food Menu Board)",
                instruction: "Read the fast food menu board.",
                eng: "<strong>BURGER EXPRESS MENU</strong><br><br><strong>Combos (Includes Fries & Medium Drink):</strong><br>- #1 Classic Burger Combo: $8.50<br>- #2 Double Cheeseburger Combo: $9.50<br>- #3 Crispy Chicken Sandwich Combo: $8.00<br><br><strong>Sides:</strong><br>- French Fries (Small $2.00 / Medium $3.00 / Large $4.00)<br>- Chicken Nuggets (6 pcs): $4.50<br><br><strong>Drinks:</strong><br>- Cola, Iced Tea, Lemonade (S $1.50 / M $2.00 / L $2.50)<br><br><em>* Upsize your fries and drink to Large for only $1.50 extra!</em>",
                jpn: "<strong>バーガーエクスプレス メニュー</strong><br><br><strong>セットメニュー（ポテト＆Mサイズドリンク付き）：</strong><br>- #1 クラシックバーガーセット：$8.50<br>- #2 ダブルチーズバーガーセット：$9.50<br>- #3 クリスピーチキンサンドセット：$8.00<br><br><strong>サイドメニュー：</strong><br>- フライドポテト（S $2.00 / M $3.00 / L $4.00）<br>- チキンナゲット（6個）：$4.50<br><br><strong>飲み物：</strong><br>- コーラ、アイスティー、レモネード（S $1.50 / M $2.00 / L $2.50）<br><br><em>※ たったの$1.50追加でポテトとドリンクをLサイズに変更できます！</em>"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Next in line, please! Hi, what can I get for you today?", jpn: "次にお並びの方どうぞ！こんにちは、本日は何になさいますか？" },
                { speaker: "B", eng: "Hi, I would like a number 3 Crispy Chicken Sandwich Combo, please.", jpn: "こんにちは、3番のクリスピーチキンサンドセットをお願いします。" },
                { speaker: "A", eng: "Sure thing. What side would you like with your combo?", jpn: "かしこまりました。セットのサイドメニューは何になさいますか？" },
                { speaker: "B", eng: "Can I get the chicken nuggets instead of fries?", jpn: "ポテトの代わりにチキンナゲットにできますか？" },
                { speaker: "A", eng: "Yes, but that is fifty cents extra. Is that okay?", jpn: "はい、ですが50セント追加になります。よろしいですか？" },
                { speaker: "B", eng: "That's fine! I'll have the nuggets.", jpn: "大丈夫です！ナゲットにします。" },
                { speaker: "A", eng: "Great. And what drink would you like?", jpn: "わかりました。そしてお飲み物は何になさいますか？" },
                { speaker: "B", eng: "I'll have a large lemonade, please. With no ice.", jpn: "Lサイズのレモネードをお願いします。氷なしで。" },
                { speaker: "A", eng: "Got it. Is this for here or to go?", jpn: "承知いたしました。店内でお召し上がりですか、持ち帰りですか？" },
                { speaker: "B", eng: "For here, please.", jpn: "店内でお願いします。" },
                { speaker: "A", eng: "Your total is $10.00. Here is your receipt and order number.", jpn: "合計で$10.00になります。レシートと注文番号になります。" },
                { speaker: "B", eng: "Thank you very much!", jpn: "どうもありがとうございます！" }
            ],
            writingTask: {
                promptEng: "Imagine you are ordering your favorite fast food meal. Write a short dialogue ordering a combo meal, choosing a side, choosing a drink with a size, and stating whether it is for here or to go. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "お気に入りのファーストフードを注文すると想像してください。セットメニューを注文し、サイドメニューを選び、サイズ付きの飲み物を選び、店内か持ち帰りかを伝える短い会話を書いてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    },{
        id: 20,
        title: "Lesson 20: How to talk about daily chores and responsibilities",
        goal: "Talk about household chores and daily duties using 'have to'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『have to』を使って、家事や日常の義務について話す。)</span>",
        vocab: [
            { eng: "Clean", jpn: "掃除する" },
            { eng: "Wash", jpn: "洗う" },
            { eng: "Cook", jpn: "料理する" },
            { eng: "Buy", jpn: "買う" },
            { eng: "Laundry", jpn: "洗濯" },
            { eng: "Dishes", jpn: "皿 / 食器" },
            { eng: "Trash", jpn: "ゴミ" },
            { eng: "Groceries", jpn: "食料品" },
            { eng: "Room", jpn: "部屋" },
            { eng: "House", jpn: "家" },
            { eng: "Busy", jpn: "忙しい" },
            { eng: "Today", jpn: "今日" },
            { eng: "Tonight", jpn: "今夜" },
            { eng: "Weekend", jpn: "週末" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Do you want to go to the park today?</span>", jpn: "今日、公園に行きませんか？" },
            { speaker: "B", eng: "Sorry, I can't. <span class='swappable'>I have to clean my room today.</span>", jpn: "ごめんなさい、行けません。今日は部屋を掃除しなければなりません。" },
            { speaker: "A", eng: "That's too bad. <span class='swappable'>Do you have to do laundry too?</span>", jpn: "それは残念です。洗濯もしなければなりませんか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>I have to do laundry</span> and <span class='swappable'>wash the dishes.</span>", jpn: "はい、洗濯をして、お皿も洗わなければなりません。" },
            { speaker: "A", eng: "I see. <span class='swappable'>I don't have to work today</span>, so I will go alone.", jpn: "なるほど。私は今日仕事がない（働く必要がない）ので、一人で行きます。" }
        ],
        expressions: [
            { category: "1. Inviting someone (お誘い)", options: ["Do you want to go to the park today?", "Do you have time to meet?", "Would you like to hang out?"] },
            { category: "2. Stating an obligation (義務の伝え方)", options: ["I have to clean my room today.", "I have to buy groceries.", "I have to study for a test."] },
            { category: "3. Asking about someone's obligations (相手の義務を尋ねる)", options: ["Do you have to do laundry too?", "What do you have to do today?", "Do you have to work tonight?"] },
            { category: "4. Stating a chore 1 (家事の伝え方1)", options: ["I have to do laundry.", "I have to take out the trash.", "I have to cook dinner."] },
            { category: "5. Stating a chore 2 (家事の伝え方2)", options: ["wash the dishes.", "clean the bathroom.", "vacuum the floor."] },
            { category: "6. Stating lack of obligation (必要がないことを伝える)", options: ["I don't have to work today.", "I don't have to wake up early.", "I don't have to cook tonight."] }
        ],
        grammar: {
            point: "Obligation (have to / don't have to) - 〜しなければならない / 〜する必要はない",
            explanation: "We use 'have to' followed by a base verb to express something that is necessary or required. We use 'don't have to' when something is NOT necessary. <br><span style='font-size:0.9rem; color:var(--text-light);'>（『have to』＋動詞の原形で「〜しなければならない（義務）」を表します。『don't have to』を使うと「〜する必要はない（不必要）」という意味になります。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the obligation structures: 'I <u>have to clean</u> my room' and 'I <u>don't have to work</u>.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『I <u>have to clean</u>...』や『I <u>don't have to work</u>.』の構造に注目してください。)</span>",
            examples: [
                { eng: "I have to cook dinner tonight.", jpn: "今夜は夕食を作らなければなりません。" },
                { eng: "She has to study for her exam.", jpn: "彼女は試験の勉強をしなければなりません。" },
                { eng: "You don't have to come early.", jpn: "早く来る必要はありません。" }
            ]
        },
        clickingGames: [
            { prompt: "今日は部屋を掃除しなければなりません。", target: "I have to clean my room today.", words: ["I", "have", "to", "clean", "my", "room", "today."] },
            { prompt: "洗濯をしなければなりませんか？", target: "Do you have to do laundry?", words: ["Do", "you", "have", "to", "do", "laundry?"] },
            { prompt: "今夜は料理をする必要がありません。", target: "I don't have to cook tonight.", words: ["I", "don't", "have", "to", "cook", "tonight."] },
            { prompt: "彼女は食料品を買わなければなりません。", target: "She has to buy groceries.", words: ["She", "has", "to", "buy", "groceries."] },
            { prompt: "彼らはゴミを出さなければなりません。", target: "They have to take out the trash.", words: ["They", "have", "to", "take", "out", "the", "trash."] }
        ],
        dropdownGames: [
            { before: "I", options: ["have to", "has to", "having to"], answer: "have to", after: " do my homework." },
            { before: "She", options: ["has to", "have to", "does to"], answer: "has to", after: " wash the dishes." },
            { before: "Do you have to", options: ["clean", "cleans", "cleaning"], answer: "clean", after: " your room?" },
            { before: "I don't", options: ["have to", "has to", "need"], answer: "have to", after: " work on Sunday." },
            { before: "He doesn't have", options: ["to", "for", "at"], answer: "to", after: " cook tonight." },
            { before: "They have to", options: ["buy", "buys", "buying"], answer: "buy", after: " groceries." },
            { before: "What do you have", options: ["to do", "do", "doing"], answer: "to do", after: " today?" },
            { before: "I have to take", options: ["out", "off", "up"], answer: "out", after: " the trash." },
            { before: "We have to do", options: ["laundry", "dishes", "clean"], answer: "laundry", after: " this afternoon." },
            { before: "You don't have to", options: ["pay", "pays", "paid"], answer: "pay", after: " now." }
        ],
        roleplay: {
            a: "Invite your friend to go shopping this weekend. When they say they are busy with chores, ask them what they have to do. (週末に友達を買い物に誘ってください。相手が家事で忙しいと言ったら、何をしなければならないのか尋ねてください。)",
            b: "You are the friend. Decline the invitation gently, and explain two chores you have to do this weekend using 'have to'. (友達役です。丁寧に誘いを断り、『have to』を使って今週末しなければならない家事を2つ説明してください。)"
        },
        homework: {
            vocab: [
                { eng: "Mop", jpn: "モップをかける" },
                { eng: "Sweep", jpn: "掃く" },
                { eng: "Dust", jpn: "ホコリを払う" },
                { eng: "Vacuum", jpn: "掃除機をかける" },
                { eng: "Iron", jpn: "アイロンをかける" },
                { eng: "Fold", jpn: "畳む" },
                { eng: "Feed", jpn: "エサをあげる" },
                { eng: "Walk the dog", jpn: "犬の散歩をする" },
                { eng: "Water the plants", jpn: "植物に水やりをする" },
                { eng: "Tidy up", jpn: "片付ける" },
                { eng: "Chore", jpn: "家事" },
                { eng: "Duty", jpn: "義務 / 任務" },
                { eng: "Exhausted", jpn: "疲れ果てた" },
                { eng: "Free", jpn: "手の空いている / 自由な" }
            ],
            reading1: {
                title: "Task 2: Reading (To-Do List Notes)",
                instruction: "Read the family note on the refrigerator.",
                eng: "<strong>Weekend Chores List</strong><br><br>Hi Everyone,<br><br>We have a busy Saturday ahead! Here are the chores for today:<br>- <strong>Tom:</strong> You have to vacuum the living room and take out the trash.<br>- <strong>Sarah:</strong> You have to wash the dishes and water the plants in the garden.<br>- <strong>Dad:</strong> He has to go to the supermarket and buy groceries for dinner.<br><br>Note: Nobody has to cook lunch today because we are going to order pizza! Thank you everyone for helping out.<br><br>Love,<br>Mom",
                jpn: "<strong>週末の家事リスト</strong><br><br>みんなへ<br><br>忙しい土曜日になりそうです！今日の家事は以下の通りです：<br>- <strong>トム：</strong> 居間に掃除機をかけて、ゴミを出さなければなりません。<br>- <strong>サラ：</strong> 皿を洗って、庭の植物に水をやらなければなりません。<br>- <strong>お父さん：</strong> スーパーに行って、夕食の食料品を買わなければなりません。<br><br>メモ：今日はピザを注文するので、誰も昼食を作る必要はありません！手伝ってくれてみんなありがとう。<br><br>愛を込めて、<br>お母さんより"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hey Mark! Are you free to play video games this afternoon?", jpn: "ねえマーク！今日の午後、テレビゲームして遊ぶ時間ある？" },
                { speaker: "B", eng: "I wish I could, but I have a lot of chores to do.", jpn: "行けたらいいんだけど、やらなきゃいけない家事がたくさんあるんだ。" },
                { speaker: "A", eng: "Oh really? What do you have to do?", jpn: "えっ、本当？何をしなければならないの？" },
                { speaker: "B", eng: "First, I have to do laundry because I have no clean clothes.", jpn: "まず、着る服がないから洗濯をしなければならないんだ。" },
                { speaker: "A", eng: "That doesn't take too long. Anything else?", jpn: "それはそんなに時間かからないね。他には？" },
                { speaker: "B", eng: "Yes, I have to clean the bathroom and vacuum the whole house.", jpn: "うん、浴室を掃除して、家全体に掃除機をかけなければならないんだ。" },
                { speaker: "A", eng: "Wow, that sounds like a lot of work! Do you have to cook dinner too?", jpn: "うわあ、それは大変そうだね！夕食も作らなければならないの？" },
                { speaker: "B", eng: "No, luckily I don't have to cook. My sister is going to make dinner tonight.", jpn: "いいえ、幸い料理はする必要がないんだ。今夜は妹が夕食を作ることになっているから。" },
                { speaker: "A", eng: "That's good. Well, call me when you finish your chores!", jpn: "それは良かったね。じゃあ、家事が終わったら電話して！" },
                { speaker: "B", eng: "Will do! See you later.", jpn: "そうするよ！また後でね。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your daily chores. Mention two things you HAVE to do every week, and one thing you DON'T have to do. Write your answer on Google Docs and share it with your teacher. The deadline is one week from today.",
                promptJpn: "あなたの毎日の家事について短い文章を書いてください。毎週しなければならないことを2つ、する必要がないことを1つ含めてください。Googleドキュメントに書いて、先生に共有してください。締め切りは今日から1週間後です。"
            }
        }
    }
];