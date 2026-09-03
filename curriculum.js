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
    }, {
        id: 2,
        title: "Lesson 2: How to introduce your friends",
        goal: "Introduce people and talk about them naturally using subject pronouns (he, she, they, we). <br><span style='font-size:0.9rem; color:var(--text-light);'>(主格代名詞（he, she, they, we）を使って、人を自然に紹介し、その人たちについて話す。)</span>",
        vocab: [
            { eng: "He", jpn: "彼は / 彼が" },
            { eng: "She", jpn: "彼女は / 彼女が" },
            { eng: "They", jpn: "彼らは / 彼女らは" },
            { eng: "We", jpn: "私たちは / 私たちが" },
            { eng: "Friend", jpn: "友達" },
            { eng: "Colleague", jpn: "同僚" },
            { eng: "Classmate", jpn: "クラスメイト" },
            { eng: "Meet", jpn: "会う / 知り合いになる" },
            { eng: "This is...", jpn: "こちらは〜です" },
            { eng: "Work", jpn: "働く" },
            { eng: "Study", jpn: "勉強する" },
            { eng: "Live", jpn: "住んでいる" },
            { eng: "Together", jpn: "一緒に" },
            { eng: "Both", jpn: "両方とも / 2人とも" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hi David. <span class='swappable'>This is my friend, Mark.</span>", jpn: "こんにちは、デビッド。こちらは私の友達のマークです。" },
            { speaker: "B", eng: "<span class='swappable'>Nice to meet you, Mark.</span>", jpn: "はじめまして、マーク。" },
            { speaker: "A", eng: "<span class='swappable'>He is a doctor.</span> <span class='swappable'>We work together.</span>", jpn: "彼は医者です。私たちは一緒に働いています。" },
            { speaker: "B", eng: "Oh, that is great. And who are those people?", jpn: "おお、それは素晴らしいですね。そして、あの人たちは誰ですか？" },
            { speaker: "A", eng: "<span class='swappable'>They are my classmates, Lisa and Tom.</span>", jpn: "彼らは私のクラスメイトの、リサとトムです。" },
            { speaker: "B", eng: "Where are they from?", jpn: "彼らはどこから来たのですか？" },
            { speaker: "A", eng: "<span class='swappable'>She is from Canada</span>, and <span class='swappable'>he is from the UK.</span>", jpn: "彼女はカナダ出身で、彼はイギリス出身です。" }
        ],
        expressions: [
            { category: "1. Introducing someone (誰かを紹介する)", options: ["This is my friend, Mark.", "This is my colleague, Sarah.", "I want you to meet my sister."] },
            { category: "2. Talking about a male (男性について話す)", options: ["He is a doctor.", "He is from the UK.", "He lives in Tokyo."] },
            { category: "3. Talking about a female (女性について話す)", options: ["She is from Canada.", "She is my classmate.", "She works here."] },
            { category: "4. Talking about a group (複数の人について話す)", options: ["They are my classmates.", "They live in London.", "They are very friendly."] },
            { category: "5. Talking about you and someone else (自分たちについて話す)", options: ["We work together.", "We are friends.", "We study English."] },
            { category: "6. Greeting a new person (初対面の挨拶)", options: ["Nice to meet you.", "Glad to meet you.", "Nice to meet you too."] }
        ],
        grammar: {
            point: "Subject Pronouns (he, she, they, we) - 主格代名詞",
            explanation: "We use subject pronouns when a person is the 'doer' of the action. We use them instead of repeating the person's name.<br>• Mark works here -> <strong>He</strong> works here.<br>• Lisa is nice -> <strong>She</strong> is nice.<br>• Lisa and Tom are friends -> <strong>They</strong> are friends.<br>• Mark and I are friends -> <strong>We</strong> are friends.<br><span style='font-size:0.9rem; color:var(--text-light);'>（人が動作の「主体（〜は、〜が）」である場合に主格代名詞を使います。人の名前を繰り返す代わりにこれらを使用します。<br>・Mark works here → <strong>He</strong> works here.（彼はここで働いています）<br>・Lisa is nice → <strong>She</strong> is nice.（彼女は優しいです）<br>・Lisa and Tom are friends → <strong>They</strong> are friends.（彼らは友達です）<br>・Mark and I are friends → <strong>We</strong> are friends.（私たちは友達です））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the names are replaced with pronouns: Mark becomes '<u>He</u>', Lisa and Tom become '<u>They</u>', and Lisa becomes '<u>She</u>'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：名前がどのように代名詞に置き換わっているかに注目してください：マークは『<u>He</u>』に、リサとトムは『<u>They</u>』に、リサは『<u>She</u>』になっています。)</span>",
            examples: [
                { eng: "This is my brother. He is a student.", jpn: "こちらは私の兄（弟）です。彼は学生です。" },
                { eng: "Sarah and John are married. They have a dog.", jpn: "サラとジョンは結婚しています。彼らは犬を飼っています。" },
                { eng: "My sister and I like movies. We go to the cinema.", jpn: "妹と私は映画が好きです。私たちは映画館に行きます。" }
            ]
        },
        clickingGames: [
            { prompt: "こちらは私の友達のマークです。", target: "This is my friend, Mark.", words: ["This", "is", "my", "friend,", "Mark."] },
            { prompt: "彼は医者です。私たちは一緒に働いています。", target: "He is a doctor. We work together.", words: ["He", "is", "a", "doctor.", "We", "work", "together."] },
            { prompt: "彼らは私のクラスメイトです。", target: "They are my classmates.", words: ["They", "are", "my", "classmates."] },
            { prompt: "彼女はカナダ出身で、彼はイギリス出身です。", target: "She is from Canada, and he is from the UK.", words: ["She", "is", "from", "Canada,", "and", "he", "is", "from", "the", "UK."] },
            { prompt: "彼らはどこから来たのですか？", target: "Where are they from?", words: ["Where", "are", "they", "from?"] }
        ],
        dropdownGames: [
            { before: "This is John.", options: ["He", "She", "They"], answer: "He", after: " is my best friend." },
            { before: "This is Mary.", options: ["She", "He", "They"], answer: "She", after: " works in my office." },
            { before: "Tom and Lisa are here.", options: ["They", "We", "He"], answer: "They", after: " are waiting outside." },
            { before: "My brother and I are tall.", options: ["We", "They", "He"], answer: "We", after: " play basketball." },
            { before: "Where is Mr. Smith?", options: ["He", "She", "They"], answer: "He", after: " is in the meeting room." },
            { before: "Look at those students.", options: ["They", "He", "We"], answer: "They", after: " are studying hard." },
            { before: "This is my sister, Anna.", options: ["She", "He", "They"], answer: "She", after: " lives in New York." },
            { before: "David and I are hungry.", options: ["We", "They", "He"], answer: "We", after: " want to eat pizza." },
            { before: "My parents are happy.", options: ["They", "We", "She"], answer: "They", after: " like this restaurant." },
            { before: "I have a new boss.", options: ["He", "They", "We"], answer: "He", after: " is very kind." }
        ],
        roleplay: {
            a: "Introduce a friend (your partner) to another person. Tell them your friend's name and use 'He' or 'She' to explain what their job is. (友達（パートナー）を別の人に紹介してください。友達の名前を伝え、『He』または『She』を使って彼らの職業を説明してください。)",
            b: "Say 'Nice to meet you'. Then, use 'We' to explain that you and your friend play a sport together (e.g., 'We play tennis together'). (『はじめまして（Nice to meet you）』と言ってください。その後、『We』を使って、あなたと友達が一緒にスポーツをしていることを説明してください（例：「私たちは一緒にテニスをします」）。)"
        },
        homework: {
            vocab: [
                { eng: "Husband", jpn: "夫" },
                { eng: "Wife", jpn: "妻" },
                { eng: "Neighbor", jpn: "近所の人" },
                { eng: "Guest", jpn: "客 / ゲスト" },
                { eng: "Party", jpn: "パーティー" },
                { eng: "Welcome", jpn: "歓迎する / ようこそ" },
                { eng: "Talk", jpn: "話す" },
                { eng: "Introduce", jpn: "紹介する" },
                { eng: "Everyone", jpn: "みんな" },
                { eng: "Enjoy", jpn: "楽しむ" },
		{ eng: "Company", jpn: "会社" },	
		{ eng: "Office", jpn: "オフィス" },
                { eng: "Engineer", jpn: "エンジニア" },
                { eng: "Teacher", jpn: "先生" }
            ],
            reading1: {
                title: "Task 2: Reading (Meeting People at a Party)",
                instruction: "Read the story about a host introducing guests at a dinner party.",
                eng: "<strong>A Dinner Party</strong><br><br>Welcome to my home! I want to introduce everyone. This is my brother, Kevin. He is an engineer. He loves computers. Next to him is his wife, Laura. She is a teacher at a high school. They live in the next town. And this is my neighbor, Mr. Tanaka. He is very kind. We play golf together on the weekends. Finally, these are my friends, Emma and Jack. They are from Australia. They are traveling in Japan right now. Please talk to them and enjoy the party!",
                jpn: "<strong>ディナーパーティー</strong><br><br>私の家へようこそ！みんなを紹介したいと思います。こちらは私の兄（弟）のケビンです。彼はエンジニアです。彼はコンピューターが大好きです。彼の隣にいるのは妻のローラです。彼女は高校の先生です。彼らは隣町に住んでいます。そしてこちらは近所の田中さんです。彼はとても親切です。私たちは週末に一緒にゴルフをします。最後に、私の友達のエマとジャックです。彼らはオーストラリア出身です。彼らは今日本を旅行中です。ぜひ彼らに話しかけて、パーティーを楽しんでください！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hi Sarah. Are you enjoying the party?", jpn: "こんにちは、サラ。パーティーを楽しんでいますか？" },
                { speaker: "B", eng: "Yes, it is great. But I don't know many people here.", jpn: "はい、素晴らしいです。でも、ここにいる人の多くを知りません。" },
                { speaker: "A", eng: "Let me introduce you! Do you see that man by the window?", jpn: "私が紹介しますよ！窓際にいるあの男性が見えますか？" },
                { speaker: "B", eng: "The tall man? Who is he?", jpn: "背の高い男性ですか？彼は誰ですか？" },
                { speaker: "A", eng: "This is my colleague, Mike. He is the new manager.", jpn: "彼は私の同僚のマイクです。新しいマネージャーなんですよ。" },
                { speaker: "B", eng: "Oh, I see. And who are the two women talking to him?", jpn: "ああ、なるほど。そして、彼と話している2人の女性は誰ですか？" },
                { speaker: "A", eng: "They are my sisters, Anna and Bella. They are visiting from London.", jpn: "私の姉妹のアナとベラです。彼女たちはロンドンから遊びに来ているんです。" },
                { speaker: "B", eng: "Wow, your sisters! Are they twins?", jpn: "わあ、あなたの姉妹ですか！彼女たちは双子ですか？" },
                { speaker: "A", eng: "No, Anna is older. She is 30, and Bella is 28.", jpn: "いいえ、アナの方が年上です。彼女は30歳で、ベラは28歳です。" },
                { speaker: "B", eng: "They look very friendly. Let's go talk to them.", jpn: "とてもフレンドリーに見えますね。話しに行きましょう。" }
            ],
            writingTask: {
                promptEng: "Imagine you are at a party. Write three sentences introducing two of your real friends. Use 'This is...', 'He / She is...', and 'They are...' to describe who they are and what they do. Example: 'This is my friend Ken. He is a chef. We like to eat together.' Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "パーティーにいると想像してください。あなたの実際の友達を2人紹介する文を3つ書いてください。『This is...』『He / She is...』『They are...』を使って、彼らが誰で、何をしているかを説明してください。例：「こちらは私の友達のケンです。彼はシェフです。私たちは一緒に食べるのが好きです。」Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 3,
        title: "Lesson 3: How to order fast food",
        goal: "Order fast food and use 'a' to refer to a single item or portion. <br><span style='font-size:0.9rem; color:var(--text-light);'>(ファストフードを注文し、『a』を使って1つの品物や1人前を指定する。)</span>",
        vocab: [
            { eng: "A / An", jpn: "1つの / 1人前の" },
            { eng: "Hamburger", jpn: "ハンバーガー" },
            { eng: "Cheeseburger", jpn: "チーズバーガー" },
            { eng: "Fries", jpn: "フライドポテト" },
            { eng: "Salad", jpn: "サラダ" },
            { eng: "Cola", jpn: "コーラ" },
            { eng: "Coffee", jpn: "コーヒー" },
            { eng: "Meal / Combo", jpn: "セット / コンボ" },
            { eng: "Small", jpn: "Sサイズ / 小さい" },
            { eng: "Medium", jpn: "Mサイズ / 中くらい" },
            { eng: "Large", jpn: "Lサイズ / 大きい" },
            { eng: "Here", jpn: "店内で" },
            { eng: "To go", jpn: "持ち帰りで" },
            { eng: "Have", jpn: "〜をいただく / 注文する" }
        ],
        dialogue: [
            { speaker: "A", eng: "Welcome! Are you ready to order?", jpn: "いらっしゃいませ！ご注文はお決まりですか？" },
            { speaker: "B", eng: "Yes. <span class='swappable'>I'll have a cheeseburger.</span>", jpn: "はい。チーズバーガーを1ついただきます。" },
            { speaker: "A", eng: "Would you like a meal?", jpn: "セットになさいますか？" },
            { speaker: "B", eng: "Yes, please. <span class='swappable'>With a medium fries</span> and <span class='swappable'>a cola.</span>", jpn: "はい、お願いします。Mサイズのポテト1つと、コーラを1つで。" },
            { speaker: "A", eng: "Okay. For here or to go?", jpn: "かしこまりました。店内でお召し上がりですか、それともお持ち帰りですか？" },
            { speaker: "B", eng: "<span class='swappable'>To go, please.</span>", jpn: "持ち帰りでお願いします。" }
        ],
        expressions: [
            { category: "1. Stating the main item (メインメニューを注文する)", options: ["I'll have a cheeseburger.", "I'll have a hamburger.", "I'll have a hot dog."] },
            { category: "2. Adding a side (サイドメニューを追加する)", options: ["With a medium fries", "With a small salad", "With a large fries"] },
            { category: "3. Adding a drink (飲み物を追加する)", options: ["and a cola.", "and a coffee.", "and a juice."] },
            { category: "4. Stating dining preference (店内か持ち帰りか)", options: ["To go, please.", "For here, please.", "Takeout, please."] },
            { category: "5. Cashier: Asking for order (店員：注文を尋ねる)", options: ["Are you ready to order?", "Can I take your order?", "What would you like?"] },
            { category: "6. Cashier: Offering a set (店員：セットを勧める)", options: ["Would you like a meal?", "Make it a combo?", "Do you want a set?"] }
        ],
        grammar: {
            point: "Using 'a' for a single item - 1つのものを表す『a』",
            explanation: "When ordering a single item in English, we use <strong>a</strong> (or <strong>an</strong> before vowel sounds) before the noun. Even for drinks or food that are usually uncountable (like cola, coffee, or fries), in a restaurant setting, saying 'a cola' means 'one cup of cola', and 'a fries' means 'one portion of fries'.<br>• <strong>A</strong> + noun (starts with consonant): <em>a</em> burger, <em>a</em> cola<br>• <strong>An</strong> + noun (starts with vowel): <em>an</em> apple pie, <em>an</em> iced tea<br><span style='font-size:0.9rem; color:var(--text-light);'>（英語で1つの品物を注文するときは、名詞の前に<strong>a</strong>（母音の前では<strong>an</strong>）を使います。コーラやコーヒー、ポテトなど通常は数えられない名詞でも、レストランの状況で『a cola』と言えば『コーラ1杯』、『a fries』と言えば『ポテト1人前』を意味します。<br>・<strong>A</strong> ＋ 子音で始まる名詞：<em>a</em> burger, <em>a</em> cola<br>・<strong>An</strong> ＋ 母音で始まる名詞：<em>an</em> apple pie, <em>an</em> iced tea）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the customer uses 'a' to show they want exactly one of each item: '<u>a</u> cheeseburger', '<u>a</u> medium fries', and '<u>a</u> cola'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：客がそれぞれの品物をきっちり1つずつ欲しいことを示すために、どのように『a』を使っているかに注目してください：『<u>a</u> cheeseburger』『<u>a</u> medium fries』『<u>a</u> cola』。)</span>",
            examples: [
                { eng: "I'll have a coffee.", jpn: "コーヒーを1ついただきます。" },
                { eng: "She wants an apple pie.", jpn: "彼女はアップルパイを1つ欲しがっています。" },
                { eng: "Can I get a hamburger?", jpn: "ハンバーガーを1つもらえますか？" }
            ]
        },
        clickingGames: [
            { prompt: "チーズバーガーを1ついただきます。", target: "I'll have a cheeseburger.", words: ["I'll", "have", "a", "cheeseburger."] },
            { prompt: "Mサイズのポテト1つと", target: "With a medium fries", words: ["With", "a", "medium", "fries"] },
            { prompt: "そしてコーラを1つで。", target: "and a cola.", words: ["and", "a", "cola."] },
            { prompt: "持ち帰りでお願いします。", target: "To go, please.", words: ["To", "go,", "please."] },
            { prompt: "セットになさいますか？", target: "Would you like a meal?", words: ["Would", "you", "like", "a", "meal?"] }
        ],
        dropdownGames: [
            { before: "I'll have", options: ["a", "an", "the"], answer: "a", after: " hot dog, please." },
            { before: "Can I get", options: ["an", "a", "two"], answer: "an", after: " iced tea?" },
            { before: "Would you like", options: ["a", "an", "some"], answer: "a", after: " meal with that?" },
            { before: "I want", options: ["a", "an", "the"], answer: "a", after: " large fries." },
            { before: "She'll have", options: ["a", "an", "the"], answer: "a", after: " small salad." },
            { before: "I'll take", options: ["an", "a", "one"], answer: "an", after: " orange juice." },
            { before: "Give me", options: ["a", "an", "the"], answer: "a", after: " cheeseburger." },
            { before: "I'll have", options: ["a", "an", "the"], answer: "a", after: " coffee." },
            { before: "With", options: ["a", "an", "the"], answer: "a", after: " medium cola." },
            { before: "Can I get", options: ["an", "a", "the"], answer: "an", after: " apple pie?" }
        ],
        roleplay: {
            a: "You are the cashier. Ask your partner if they are ready to order. Ask if they want it for here or to go. (あなたは店員です。パートナーに注文の準備ができているか尋ねてください。店内か持ち帰りか尋ねてください。)",
            b: "You are the customer. Order 'a hamburger', 'a small fries', and 'a juice'. Tell the cashier it is to go. (あなたは客です。『ハンバーガー1つ』『Sサイズのポテト1つ』『ジュース1つ』を注文してください。店員に持ち帰りだと伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Cashier", jpn: "レジ係 / 店員" },
                { eng: "Customer", jpn: "客" },
                { eng: "Menu", jpn: "メニュー" },
                { eng: "Order", jpn: "注文する" },
                { eng: "Wait", jpn: "待つ" },
                { eng: "Total", jpn: "合計" },
                { eng: "Pay", jpn: "支払う" },
                { eng: "Cash", jpn: "現金" },
                { eng: "Credit card", jpn: "クレジットカード" },
                { eng: "Receipt", jpn: "レシート / 領収書" },
                { eng: "Napkin", jpn: "ナプキン / 紙ナプキン" },
                { eng: "Straw", jpn: "ストロー" },
                { eng: "Ketchup", jpn: "ケチャップ" },
                { eng: "Tray", jpn: "トレイ / お盆" }
            ],
            reading1: {
                title: "Task 2: Reading (At the Fast Food Restaurant)",
                instruction: "Read the conversation between a customer and a cashier.",
                eng: "<strong>Cashier:</strong> Hello! Can I take your order?<br><strong>Customer:</strong> Yes. I'll have a chicken burger and a small salad.<br><strong>Cashier:</strong> Would you like a drink with that?<br><strong>Customer:</strong> Yes, I'll have an iced coffee, please.<br><strong>Cashier:</strong> That's a chicken burger, a small salad, and an iced coffee. Is that for here or to go?<br><strong>Customer:</strong> For here, please.<br><strong>Cashier:</strong> Your total is 800 yen. How would you like to pay?<br><strong>Customer:</strong> By credit card.",
                jpn: "<strong>店員：</strong> こんにちは！ご注文を伺ってもよろしいですか？<br><strong>客：</strong> はい。チキンバーガー1つと、Sサイズのサラダを1ついただきます。<br><strong>店員：</strong> ご一緒に飲み物はいかがですか？<br><strong>客：</strong> はい、アイスコーヒーを1つお願いします。<br><strong>店員：</strong> チキンバーガーが1つ、Sサイズのサラダが1つ、アイスコーヒーが1つですね。店内でお召し上がりですか、それともお持ち帰りですか？<br><strong>客：</strong> 店内でお願いします。<br><strong>店員：</strong> 合計で800円になります。お支払いはどのようになさいますか？<br><strong>客：</strong> クレジットカードで。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hi there. What would you like today?", jpn: "こんにちは。今日は何になさいますか？" },
                { speaker: "B", eng: "Hi. I'll have a double cheeseburger.", jpn: "こんにちは。ダブルチーズバーガーを1ついただきます。" },
                { speaker: "A", eng: "Okay. Do you want to make it a combo?", jpn: "かしこまりました。コンボ（セット）になさいますか？" },
                { speaker: "B", eng: "What comes with the combo?", jpn: "コンボには何がついてきますか？" },
                { speaker: "A", eng: "It comes with a medium fries and a drink.", jpn: "Mサイズのポテトと飲み物がついてきます。" },
                { speaker: "B", eng: "Okay, I'll have a combo with a cola.", jpn: "わかりました、コーラのコンボを1ついただきます。" },
                { speaker: "A", eng: "Great. Anything else?", jpn: "ありがとうございます。他にご注文はございますか？" },
                { speaker: "B", eng: "Can I also get an apple pie?", jpn: "アップルパイも1つもらえますか？" },
                { speaker: "A", eng: "Sure. For here or takeout?", jpn: "もちろんです。店内ですか、お持ち帰りですか？" },
                { speaker: "B", eng: "Takeout, please.", jpn: "持ち帰りでお願いします。" }
            ],
            writingTask: {
                promptEng: "Imagine you are ordering fast food. Write three sentences using 'I'll have a...' or 'Can I get a...'. Make sure to use 'a' or 'an' before your single items. (For example: I'll have a hamburger. Can I get a medium fries? I'll have an iced tea.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "ファストフードを注文していると想像してください。『I'll have a...』または『Can I get a...』を使って、3つの文を書いてください。1つの品物の前には必ず『a』か『an』を使用してください。（例：ハンバーガーを1ついただきます。Mサイズのポテトを1つもらえますか？アイスティーを1ついただきます。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 4,
        title: "Lesson 4: How to talk about things specifically",
        goal: "Refer to specific things that both the speaker and listener know about using the definite article 'the'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(定冠詞の『the』を使って、話し手と聞き手の両方が知っている特定のものについて話す。)</span>",
        vocab: [
            { eng: "The", jpn: "その（特定のものを指す）" },
            { eng: "A / An", jpn: "ある1つの（一般的なものを指す）" },
            { eng: "Specific", jpn: "特定の / 具体的な" },
            { eng: "General", jpn: "一般的な" },
            { eng: "Table", jpn: "テーブル" },
            { eng: "Chair", jpn: "椅子" },
            { eng: "Window", jpn: "窓" },
            { eng: "Door", jpn: "ドア" },
            { eng: "Red", jpn: "赤い" },
            { eng: "Blue", jpn: "青い" },
            { eng: "Left", jpn: "左" },
            { eng: "Right", jpn: "右" },
            { eng: "Pass", jpn: "渡す" },
            { eng: "Give", jpn: "あげる / 与える" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me. <span class='swappable'>Can you pass me the pen?</span>", jpn: "すみません。そのペンを渡してくれますか？" },
            { speaker: "B", eng: "Which one? <span class='swappable'>There is a pen on the table</span> and <span class='swappable'>a pen on the chair.</span>", jpn: "どれですか？テーブルの上にペンがあり、椅子の上にもペンがあります。" },
            { speaker: "A", eng: "I need <span class='swappable'>the pen on the table.</span>", jpn: "テーブルの上のそのペンが必要です。" },
            { speaker: "B", eng: "Okay. <span class='swappable'>Is the red one okay?</span>", jpn: "わかりました。その赤いものでいいですか？" },
            { speaker: "A", eng: "Yes. <span class='swappable'>The red one is perfect.</span>", jpn: "はい。その赤いものが完璧です。" }
        ],
        expressions: [
            { category: "1. Requesting a specific item (特定のものを要求する)", options: ["Can you pass me the pen?", "Can you give me the book?", "Can you hand me the cup?"] },
            { category: "2. Stating general locations 1 (一般的な存在を伝える 1)", options: ["There is a pen on the table", "There is a book on the desk", "There is a cup on the counter"] },
            { category: "3. Stating general locations 2 (一般的な存在を伝える 2)", options: ["a pen on the chair.", "a book on the sofa.", "a cup on the shelf."] },
            { category: "4. Clarifying the specific item (特定のものを明確にする)", options: ["the pen on the table.", "the book on the desk.", "the cup on the counter."] },
            { category: "5. Asking about a specific feature (特定の特徴について尋ねる)", options: ["Is the red one okay?", "Is the big one okay?", "Is the blue one okay?"] },
            { category: "6. Confirming the specific item (特定のものを確認する)", options: ["The red one is perfect.", "The big one is perfect.", "The blue one is perfect."] }
        ],
        grammar: {
            point: "The Definite Article 'the' - 定冠詞の『the』",
            explanation: "We use <strong>a</strong> or <strong>an</strong> when we talk about a general thing for the first time. We use <strong>the</strong> when we talk about a <em>specific</em> thing, or when both the speaker and listener already know which thing it is.<br>• General (A): <em>I bought <strong>a</strong> car.</em> (Any car, mentioned for the first time)<br>• Specific (The): <em><strong>The</strong> car is red.</em> (The specific car I just mentioned)<br>• Known context: <em>Can you open <strong>the</strong> window?</em> (The specific window in this room)<br><span style='font-size:0.9rem; color:var(--text-light);'>（初めて一般的なものについて話すときは<strong>a</strong>や<strong>an</strong>を使います。<em>特定の</em>ものについて話すとき、または話し手と聞き手の両方がどのものか既に知っているときは<strong>the</strong>を使います。<br>・一般的なもの（A）：I bought <strong>a</strong> car.（車を買いました。※初めて言及する）<br>・特定のもの（The）：<strong>The</strong> car is red.（その車は赤いです。※先ほど言及した特定の車）<br>・共通の認識：Can you open <strong>the</strong> window?（その窓を開けてくれますか？※この部屋にある特定の窓））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how B says '<u>a</u> pen' (general) when describing what is in the room, but A says '<u>the</u> pen on the table' (specific) because they are talking about one exact item. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：Bが部屋にあるものを説明するときは『<u>a</u> pen（一般的なペン）』と言っていますが、Aが特定の1つのアイテムについて話すときは『<u>the</u> pen on the table（テーブルの上のそのペン）』と言っていることに注目してください。)</span>",
            examples: [
                { eng: "I have an apple and a banana. The apple is sweet.", jpn: "私はリンゴとバナナを持っています。そのリンゴは甘いです。" },
                { eng: "Please close the door.", jpn: "（その）ドアを閉めてください。" },
                { eng: "Where is the station?", jpn: "（その）駅はどこですか？" }
            ]
        },
        clickingGames: [
            { prompt: "そのペンを渡してくれますか？", target: "Can you pass me the pen?", words: ["Can", "you", "pass", "me", "the", "pen?"] },
            { prompt: "テーブルの上にペンがあります。", target: "There is a pen on the table.", words: ["There", "is", "a", "pen", "on", "the", "table."] },
            { prompt: "テーブルの上のそのペンが必要です。", target: "I need the pen on the table.", words: ["I", "need", "the", "pen", "on", "the", "table."] },
            { prompt: "その赤いものでいいですか？", target: "Is the red one okay?", words: ["Is", "the", "red", "one", "okay?"] },
            { prompt: "その赤いものが完璧です。", target: "The red one is perfect.", words: ["The", "red", "one", "is", "perfect."] }
        ],
        dropdownGames: [
            { before: "I bought", options: ["a", "the", "an"], answer: "a", after: " new book yesterday." },
            { before: "I read", options: ["the", "a", "an"], answer: "the", after: " book last night. It was great!" },
            { before: "Can you turn on", options: ["the", "a", "an"], answer: "the", after: " TV in the living room?" },
            { before: "We need to find", options: ["a", "the", "an"], answer: "a", after: " taxi to go home." },
            { before: "Where is", options: ["the", "a", "an"], answer: "the", after: " nearest supermarket?" },
            { before: "She has", options: ["a", "the", "an"], answer: "a", after: " cat and a dog." },
            { before: "Look at", options: ["the", "a", "an"], answer: "the", after: " moon! It is so bright tonight." },
            { before: "I have", options: ["an", "the", "a"], answer: "an", after: " idea for the project." },
            { before: "Did you enjoy", options: ["the", "a", "an"], answer: "the", after: " party last weekend?" },
            { before: "Please put the plates on", options: ["the", "a", "an"], answer: "the", after: " table." }
        ],
        roleplay: {
            a: "Ask your partner to pass you a specific object in the room (e.g., the book, the bag, the remote). (部屋にある特定の物（例：本、カバン、リモコンなど）を渡してくれるようパートナーに頼んでください。)",
            b: "Ask which one they mean. Say there is one on the left and one on the right. (どれを指しているか尋ねてください。左側に1つ、右側に1つあると伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Sun", jpn: "太陽" },
                { eng: "Moon", jpn: "月" },
                { eng: "Sky", jpn: "空" },
                { eng: "Earth", jpn: "地球" },
                { eng: "World", jpn: "世界" },
                { eng: "Internet", jpn: "インターネット" },
                { eng: "Front", jpn: "前" },
                { eng: "Back", jpn: "後ろ" },
                { eng: "Top", jpn: "上 / 頂上" },
                { eng: "Bottom", jpn: "下 / 底" },
                { eng: "Middle", jpn: "真ん中" },
                { eng: "First", jpn: "最初の" },
                { eng: "Second", jpn: "2番目の" },
                { eng: "Same", jpn: "同じ" }
            ],
            reading1: {
                title: "Task 2: Reading (Using 'The' for Unique Things)",
                instruction: "Read the paragraph about unique objects.",
                eng: "<strong>One of a Kind</strong><br><br>Sometimes we use 'the' because there is only one of that thing. For example, we always say 'the sun', 'the moon', and 'the earth'. We also say 'the internet' and 'the sky'. When you visit a new country, you can visit 'the capital city'. In a room, there is usually only one 'front' door. Using 'the' correctly helps people know exactly what you are talking about.",
                jpn: "<strong>唯一無二のもの</strong><br><br>時々、それが1つしか存在しないために『the』を使います。例えば、私たちは常に『the sun（太陽）』『the moon（月）』『the earth（地球）』と言います。また、『the internet（インターネット）』や『the sky（空）』とも言います。新しい国を訪れたら、『the capital city（その首都）』を訪れることができます。部屋には通常『the front door（その正面ドア）』は1つしかありません。『the』を正しく使うことで、あなたが正確に何について話しているのかを人々に伝えることができます。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Excuse me, I am looking for a cafe.", jpn: "すみません、カフェを探しているのですが。" },
                { speaker: "B", eng: "There are two cafes near here. There is one next to the station, and one in the park.", jpn: "この近くには2つのカフェがあります。駅の隣に1つ、公園の中に1つあります。" },
                { speaker: "A", eng: "Which one is better?", jpn: "どちらのほうがいいですか？" },
                { speaker: "B", eng: "The cafe in the park is very nice. It is quiet.", jpn: "公園の中のカフェがとてもいいですよ。静かです。" },
                { speaker: "A", eng: "Okay, I will go to the cafe in the park. How do I get there?", jpn: "わかりました、公園の中のカフェに行きます。どうやって行けばいいですか？" },
                { speaker: "B", eng: "Go straight down this street, and take the first right.", jpn: "この道をまっすぐ進んで、最初の角を右に曲がってください。" },
                { speaker: "A", eng: "The first right. Got it.", jpn: "最初の角を右ですね。わかりました。" },
                { speaker: "B", eng: "Yes. You will see a large gate. The park is behind the gate.", jpn: "はい。大きな門が見えます。公園はその門の後ろにあります。" },
                { speaker: "A", eng: "Thank you for the directions!", jpn: "道順を教えてくれてありがとうございます！" },
                { speaker: "B", eng: "You are welcome. Enjoy the coffee!", jpn: "どういたしまして。コーヒーを楽しんでくださいね！" }
            ],
            writingTask: {
                promptEng: "Write three sentences about things in your room using 'a/an' for new things and 'the' for specific things. (For example: I have a desk and a bed. The desk is brown. The bed is next to the window.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "あなたの部屋にあるものについて、新しい話題には『a/an』を、特定のものには『the』を使って3つの文を書いてください。（例：私には机とベッドがあります。その机は茶色です。そのベッドは窓の隣にあります。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 5,
        title: "Lesson 5: How to ask the price of something",
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
        id: 6,
        title: "Lesson 6: How to talk about your friends",
        goal: "Describe your friends and their habits using the present simple tense in affirmative and negative forms. <br><span style='font-size:0.9rem; color:var(--text-light);'>(肯定形と否定形の現在形を使って、友達とその習慣について説明する。)</span>",
        vocab: [
            { eng: "Friend", jpn: "友達" },
            { eng: "Best friend", jpn: "親友" },
            { eng: "Live", jpn: "住んでいる" },
            { eng: "Work", jpn: "働く" },
            { eng: "Like", jpn: "好む / 好き" },
            { eng: "Play", jpn: "する / 遊ぶ" },
            { eng: "Meet", jpn: "会う" },
            { eng: "Often", jpn: "よく / しばしば" },
            { eng: "Weekend", jpn: "週末" },
            { eng: "Don't", jpn: "〜しない（I, You, We, They用）" },
            { eng: "Doesn't", jpn: "〜しない（He, She, It用）" },
            { eng: "Sport", jpn: "スポーツ" },
            { eng: "Movie", jpn: "映画" },
            { eng: "Together", jpn: "一緒に" }
        ],
        dialogue: [
            { speaker: "A", eng: "Tell me about your best friend.", jpn: "あなたの親友について教えてください。" },
            { speaker: "B", eng: "My best friend is Ken. <span class='swappable'>He lives in Tokyo.</span>", jpn: "私の親友はケンです。彼は東京に住んでいます。" },
            { speaker: "A", eng: "That's cool. <span class='swappable'>Does he play sports?</span>", jpn: "それはいいですね。彼はスポーツをしますか？" },
            { speaker: "B", eng: "No, <span class='swappable'>he doesn't like sports.</span> But <span class='swappable'>he watches movies.</span>", jpn: "いいえ、彼はスポーツが好きではありません。でも、映画を見ます。" },
            { speaker: "A", eng: "What do you do together?", jpn: "一緒に何をしますか？" },
            { speaker: "B", eng: "<span class='swappable'>We meet on weekends.</span> But <span class='swappable'>we don't meet every day.</span>", jpn: "私たちは週末に会います。でも、毎日会うわけではありません。" }
        ],
        expressions: [
            { category: "1. Stating a friend's habit/location (友達の習慣や場所を伝える)", options: ["He lives in Tokyo.", "She works in a bank.", "He plays tennis."] },
            { category: "2. Asking about their habits (習慣について尋ねる)", options: ["Does he play sports?", "Does she like movies?", "Does he work hard?"] },
            { category: "3. Negative statements about a friend (友達についての否定文)", options: ["he doesn't like sports.", "she doesn't eat meat.", "he doesn't drink coffee."] },
            { category: "4. Positive statements about a friend (友達についての肯定文)", options: ["he watches movies.", "she reads books.", "he cooks very well."] },
            { category: "5. Shared positive habits (一緒にすることを伝える)", options: ["We meet on weekends.", "We play games together.", "We go to the cafe."] },
            { category: "6. Shared negative habits (一緒にしないことを伝える)", options: ["we don't meet every day.", "we don't live close.", "we don't study together."] }
        ],
        grammar: {
            point: "Present Simple Positive & Negative - 現在形の肯定文と否定文",
            explanation: "When we talk about habits or facts, we use the present simple tense. Remember to add an <strong>-s</strong> (or <strong>-es</strong>) to the verb for <em>he, she, and it</em>.<br>To make a negative sentence, we use <strong>don't</strong> (do not) for <em>I, you, we, they</em>, and <strong>doesn't</strong> (does not) for <em>he, she, it</em>. After don't/doesn't, the verb returns to its base form (no '-s').<br>• Affirmative: He live<strong>s</strong> here. / We live here.<br>• Negative: He <strong>doesn't</strong> live here. / We <strong>don't</strong> live here.<br><span style='font-size:0.9rem; color:var(--text-light);'>（習慣や事実について話すときは現在形を使います。<em>he, she, it</em> の場合は、動詞に <strong>-s</strong>（または <strong>-es</strong>）を付けることを忘れないでください。<br>否定文を作るには、<em>I, you, we, they</em> には <strong>don't</strong>（do not）を、<em>he, she, it</em> には <strong>doesn't</strong>（does not）を使います。don't/doesn'tの後の動詞は原形（-sなし）に戻ります。<br>・肯定文：He live<strong>s</strong> here. / We live here.<br>・否定文：He <strong>doesn't</strong> live here. / We <strong>don't</strong> live here.）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the 's' in 'He live<u>s</u>' and 'he watch<u>es</u>'. Also notice how the negative forms match the subjects: 'he <u>doesn't</u> like' and 'we <u>don't</u> meet'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『He live<u>s</u>』や『he watch<u>es</u>』の「s」に注目してください。また、否定形が主語にどのように対応しているかにも注目してください：『he <u>doesn't</u> like』『we <u>don't</u> meet』。)</span>",
            examples: [
                { eng: "My friend speaks English.", jpn: "私の友達は英語を話します。" },
                { eng: "She doesn't like spicy food.", jpn: "彼女は辛い食べ物が好きではありません。" },
                { eng: "They don't work on weekends.", jpn: "彼らは週末には働きません。" }
            ]
        },
        clickingGames: [
            { prompt: "彼は東京に住んでいます。", target: "He lives in Tokyo.", words: ["He", "lives", "in", "Tokyo."] },
            { prompt: "彼はスポーツをしますか？", target: "Does he play sports?", words: ["Does", "he", "play", "sports?"] },
            { prompt: "彼はスポーツが好きではありません。", target: "He doesn't like sports.", words: ["He", "doesn't", "like", "sports."] },
            { prompt: "私たちは週末に会います。", target: "We meet on weekends.", words: ["We", "meet", "on", "weekends."] },
            { prompt: "私たちは毎日会うわけではありません。", target: "We don't meet every day.", words: ["We", "don't", "meet", "every", "day."] }
        ],
        dropdownGames: [
            { before: "My best friend", options: ["live", "lives", "living"], answer: "lives", after: " in a big house." },
            { before: "She", options: ["don't", "doesn't", "isn't"], answer: "doesn't", after: " drink coffee." },
            { before: "We", options: ["don't", "doesn't", "aren't"], answer: "don't", after: " see each other very often." },
            { before: "He", options: ["study", "studies", "studying"], answer: "studies", after: " Japanese every night." },
            { before: "", options: ["Do", "Does", "Is"], answer: "Does", after: " your friend play the guitar?" },
            { before: "They", options: ["like", "likes", "liking"], answer: "like", after: " going to the beach together." },
            { before: "My sister", options: ["don't", "doesn't", "not"], answer: "doesn't", after: " watch television." },
            { before: "John", options: ["work", "works", "working"], answer: "works", after: " at a hospital in the city." },
            { before: "We", options: ["enjoy", "enjoys", "enjoying"], answer: "enjoy", after: " talking about our hobbies." },
            { before: "She", options: ["doesn't likes", "doesn't like", "don't like"], answer: "doesn't like", after: " waking up early." }
        ],
        roleplay: {
            a: "Ask your partner about their best friend. Ask where they live, and ask if they like a specific hobby (e.g., cooking, reading). (パートナーに親友について尋ねてください。どこに住んでいるか、特定の趣味（料理、読書など）が好きか尋ねてください。)",
            b: "Answer your partner. Tell them where your friend lives. Make one positive statement and one negative statement about your friend. (パートナーに答えてください。友達がどこに住んでいるか伝えてください。友達について、肯定文を1つ、否定文を1つ作ってください。)"
        },
        homework: {
            vocab: [
                { eng: "Kind", jpn: "親切な / 優しい" },
                { eng: "Funny", jpn: "面白い / おかしい" },
                { eng: "Smart", jpn: "賢い / 頭がいい" },
                { eng: "Quiet", jpn: "静かな / 無口な" },
                { eng: "Loud", jpn: "うるさい / 賑やかな" },
                { eng: "Talk", jpn: "話す" },
                { eng: "Listen", jpn: "聞く" },
                { eng: "Help", jpn: "助ける / 手伝う" },
                { eng: "Share", jpn: "共有する / 分かち合う" },
                { eng: "Always", jpn: "いつも / 常に" },
                { eng: "Sometimes", jpn: "時々" },
                { eng: "Never", jpn: "決して〜ない" },
                { eng: "Secret", jpn: "秘密" },
                { eng: "Trust", jpn: "信頼する" }
            ],
            reading1: {
                title: "Task 2: Reading (My Best Friend)",
                instruction: "Read the paragraph about a person describing their best friend.",
                eng: "<strong>My Best Friend, Sarah</strong><br><br>My best friend is Sarah. We are very different, but we are great friends. Sarah is very smart and funny, but she is also very quiet. She doesn't talk a lot in large groups. She loves reading and always shares her favorite books with me. She doesn't like loud parties. I am very loud, and I talk a lot! But Sarah always listens to my stories. We don't live in the same city now, so we don't meet every day. However, we talk on the phone every weekend. I trust her with all my secrets.",
                jpn: "<strong>私の親友、サラ</strong><br><br>私の親友はサラです。私たちはとても違いますが、素晴らしい友達です。サラはとても賢くて面白いですが、とても静かでもあります。彼女は大人数のグループではあまり話しません。彼女は読書が大好きで、いつもお気に入りの本を私と共有してくれます。彼女は騒がしいパーティーが好きではありません。私はとても賑やかで、たくさん話します！でも、サラはいつも私の話を聞いてくれます。私たちは今同じ街に住んでいないので、毎日は会えません。しかし、毎週末電話で話します。私はすべての秘密を彼女に打ち明けて信頼しています。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Who is that in the photo?", jpn: "写真に写っているのは誰ですか？" },
                { speaker: "B", eng: "That is my friend, David. We go to the same university.", jpn: "私の友達のデビッドです。同じ大学に通っています。" },
                { speaker: "A", eng: "He looks very kind. Does he study with you?", jpn: "とても優しそうですね。彼と一緒に勉強するのですか？" },
                { speaker: "B", eng: "Yes, he helps me with my homework a lot.", jpn: "はい、彼は私の宿題をよく手伝ってくれます。" },
                { speaker: "A", eng: "That's nice. Does he live near the campus?", jpn: "それはいいですね。彼はキャンパスの近くに住んでいるのですか？" },
                { speaker: "B", eng: "No, he doesn't. He lives with his family in the suburbs.", jpn: "いいえ、住んでいません。彼は郊外で家族と一緒に住んでいます。" },
                { speaker: "A", eng: "I see. What does he do in his free time?", jpn: "なるほど。彼は暇なとき何をしているのですか？" },
                { speaker: "B", eng: "He plays video games and listens to music. He doesn't go out much.", jpn: "ビデオゲームをしたり音楽を聞いたりしています。あまり外出しません。" },
                { speaker: "A", eng: "Do you play games with him?", jpn: "彼と一緒にゲームをしますか？" },
                { speaker: "B", eng: "Sometimes, but I don't play very well!", jpn: "時々ね、でも私はあまり上手じゃないんです！" }
            ],
            writingTask: {
                promptEng: "Write three sentences about a friend or family member. Use the present simple tense. Write one positive sentence (e.g., He lives in Tokyo), one negative sentence (e.g., She doesn't like sports), and one sentence about what you do together. Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "友人や家族について、3つの文を書いてください。現在形を使用してください。肯定文を1つ（例：彼は東京に住んでいます）、否定文を1つ（例：彼女はスポーツが好きではありません）、そして一緒にすることについての文を1つ書いてください。Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 7,
        title: "Lesson 7: How to ask basic questions",
        goal: "Ask Yes/No and Wh- questions about an event using the 'be' verb and action verbs. <br><span style='font-size:0.9rem; color:var(--text-light);'>(be動詞と一般動詞を使って、イベントに関するYes/No疑問文とWh疑問文を作る。)</span>",
        vocab: [
            { eng: "What", jpn: "何" },
            { eng: "Where", jpn: "どこ" },
            { eng: "When", jpn: "いつ" },
            { eng: "Who", jpn: "誰" },
            { eng: "How", jpn: "どのように / どうやって" },
            { eng: "Do / Does", jpn: "〜しますか？（一般動詞の疑問詞）" },
            { eng: "Am / Is / Are", jpn: "〜ですか？（be動詞の疑問詞）" },
            { eng: "Event", jpn: "イベント / 行事" },
            { eng: "Party", jpn: "パーティー" },
            { eng: "Free", jpn: "暇な / 時間がある" },
            { eng: "Bring", jpn: "持ってくる" },
            { eng: "Wear", jpn: "着る" },
            { eng: "Ticket", jpn: "チケット" },
            { eng: "Park", jpn: "公園" }
        ],
        dialogue: [
            { speaker: "A", eng: "There is a big party this weekend. <span class='swappable'>Are you free?</span>", jpn: "今週末、大きなパーティーがあります。時間はありますか（暇ですか）？" },
            { speaker: "B", eng: "<span class='swappable'>Yes, I am.</span> <span class='swappable'>Where is it?</span>", jpn: "はい、空いています。それはどこでありますか？" },
            { speaker: "A", eng: "It is at the park on Saturday at 6 PM.", jpn: "土曜日の午後6時に公園であります。" },
            { speaker: "B", eng: "That sounds fun. <span class='swappable'>Do we need tickets?</span>", jpn: "楽しそうですね。チケットは必要ですか？" },
            { speaker: "A", eng: "<span class='swappable'>No, we don't.</span> Everything is free.", jpn: "いいえ、必要ありません。すべて無料です。" },
            { speaker: "B", eng: "Perfect. <span class='swappable'>What should I bring?</span>", jpn: "完璧です。私は何を持っていくべきですか？" }
        ],
        expressions: [
            { category: "1. Asking about availability (予定を尋ねる 'Be' 疑問文)", options: ["Are you free?", "Are you available?", "Are you interested?"] },
            { category: "2. Answering availability (予定の質問に答える)", options: ["Yes, I am.", "Of course, I am.", "Yes, I am free."] },
            { category: "3. Asking for event details (詳細を尋ねる 'Wh' 疑問文)", options: ["Where is it?", "When is it?", "What time is it?"] },
            { category: "4. Asking about requirements (必要なものを尋ねる一般動詞)", options: ["Do we need tickets?", "Do we bring food?", "Do we pay money?"] },
            { category: "5. Answering requirements (必要なものの質問に答える)", options: ["No, we don't.", "No, we do not.", "We don't."] },
            { category: "6. Asking final questions (その他の 'Wh' 疑問文)", options: ["What should I bring?", "Who is coming?", "How do we get there?"] }
        ],
        grammar: {
            point: "Basic Questions (Yes/No & Wh- questions) - 基本的な疑問文の作り方",
            explanation: "<strong>1. 'Be' Verb Questions:</strong> Swap the subject and the verb. (<em>You are</em> free -> <em>Are you</em> free?)<br><strong>2. Action Verb Questions:</strong> Add 'Do' or 'Does' before the subject. (<em>We need</em> tickets -> <em>Do we need</em> tickets?)<br><strong>3. Wh- Questions:</strong> Put the Wh- word (What, Where, When, Who, How) at the VERY BEGINNING of the question. (<em>Where</em> is it? / <em>What</em> should I bring?)<br><span style='font-size:0.9rem; color:var(--text-light);'>（<strong>1. be動詞：</strong>主語と動詞を入れ替えます（You are -> Are you?）。<br><strong>2. 一般動詞：</strong>主語の前に『Do』または『Does』を置きます（We need -> Do we need?）。<br><strong>3. Wh疑問文：</strong>疑問詞（What, Where, Whenなど）を文の一番最初に置きます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the different structures: '<u>Are you</u> free?' (Be - Y/N), '<u>Where is</u> it?' (Be - Wh), and '<u>Do we need</u> tickets?' (Action - Y/N). <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：異なる構造に注目してください。『<u>Are you</u> free?』『<u>Where is</u> it?』『<u>Do we need</u> tickets?』)</span>",
            examples: [
                { eng: "Are you hungry?", jpn: "お腹が空いていますか？" },
                { eng: "Where does he work?", jpn: "彼はどこで働いていますか？" },
                { eng: "Why is she late?", jpn: "なぜ彼女は遅刻しているのですか？" }
            ]
        },
        clickingGames: [
            { prompt: "時間はありますか（暇ですか）？", target: "Are you free?", words: ["Are", "you", "free?"] },
            { prompt: "それはどこでありますか？", target: "Where is it?", words: ["Where", "is", "it?"] },
            { prompt: "チケットは必要ですか？", target: "Do we need tickets?", words: ["Do", "we", "need", "tickets?"] },
            { prompt: "いいえ、必要ありません。", target: "No, we don't.", words: ["No,", "we", "don't."] },
            { prompt: "私は何を持っていくべきですか？", target: "What should I bring?", words: ["What", "should", "I", "bring?"] }
        ],
        dropdownGames: [
            { before: "", options: ["Are", "Do", "Is"], answer: "Are", after: " you free this weekend?" },
            { before: "", options: ["When", "Where", "Who"], answer: "When", after: " is the party?" },
            { before: "", options: ["Do", "Are", "Does"], answer: "Do", after: " we need to buy tickets?" },
            { before: "Where", options: ["is", "do", "are"], answer: "is", after: " the event?" },
            { before: "", options: ["What", "Who", "When"], answer: "What", after: " should I wear?" },
            { before: "", options: ["Does", "Do", "Is"], answer: "Does", after: " he want to come with us?" },
            { before: "How", options: ["do", "are", "is"], answer: "do", after: " we get to the park?" },
            { before: "", options: ["Who", "Where", "When"], answer: "Who", after: " is coming today?" },
            { before: "Why", options: ["are", "do", "is"], answer: "are", after: " you so busy?" },
            { before: "", options: ["Is", "Does", "Do"], answer: "Is", after: " the party outside?" }
        ],
        roleplay: {
            a: "Invite your partner to a barbecue this weekend. Ask them if they are free. (今週末のバーベキューにパートナーを誘ってください。暇かどうか尋ねてください。)",
            b: "Answer yes. Then, ask your partner two questions: 'Where is it?' and 'What should I bring?' (「はい」と答えてください。その後、パートナーに2つ質問してください：「どこでありますか？」「何を持っていくべきですか？」)"
        },
        homework: {
            vocab: [
                { eng: "Busy", jpn: "忙しい" },
                { eng: "Weekend", jpn: "週末" },
                { eng: "Drink", jpn: "飲み物" },
                { eng: "Food", jpn: "食べ物" },
                { eng: "Money", jpn: "お金" },
                { eng: "Pay", jpn: "払う" },
                { eng: "Buy", jpn: "買う" },
                { eng: "Need", jpn: "必要とする" },
                { eng: "Invite", jpn: "招待する" },
                { eng: "Join", jpn: "参加する" },
                { eng: "Date", jpn: "日付" },
                { eng: "Time", jpn: "時間" },
                { eng: "Place", jpn: "場所" },
                { eng: "Fun", jpn: "楽しい" }
            ],
            reading1: {
                title: "Task 2: Reading (A Party Invitation)",
                instruction: "Read the chat messages about planning a party.",
                eng: "<strong>Tom:</strong> Hi everyone! I am having a birthday party next week. Are you free?<br><strong>Lisa:</strong> Happy early birthday! When is it?<br><strong>Tom:</strong> It is on Friday night at 7 PM.<br><strong>Mark:</strong> Sounds great. Where is it? Is it at your house?<br><strong>Tom:</strong> No, it is at the Italian restaurant near the station.<br><strong>Lisa:</strong> I love Italian food. Do we need to bring money?<br><strong>Tom:</strong> Yes, please bring 3,000 yen for the food. I will buy the cake!<br><strong>Mark:</strong> Perfect. Who is coming?<br><strong>Tom:</strong> The whole office is coming. See you there!",
                jpn: "<strong>トム：</strong> みんなこんにちは！来週、私の誕生日パーティーをします。暇ですか？<br><strong>リサ：</strong> 少し早いけど誕生日おめでとう！いつですか？<br><strong>トム：</strong> 金曜日の夜7時です。<br><strong>マーク：</strong> 素晴らしいですね。どこでありますか？あなたの家ですか？<br><strong>トム：</strong> いいえ、駅の近くのイタリアンレストランです。<br><strong>リサ：</strong> イタリア料理大好きです。お金を持っていく必要がありますか？<br><strong>トム：</strong> はい、食事代として3000円持ってきてください。ケーキは私が買います！<br><strong>マーク：</strong> 完璧ですね。誰が来るのですか？<br><strong>トム：</strong> オフィスのみんなが来ます。そこで会いましょう！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hey, there is a music festival this weekend. Are you interested?", jpn: "ねえ、今週末に音楽フェスがあるよ。興味ある？" },
                { speaker: "B", eng: "Yes, I am! When is it exactly?", jpn: "うん、あるよ！正確にはいつなの？" },
                { speaker: "A", eng: "It is on Sunday from noon to 8 PM.", jpn: "日曜日の正午から午後8時までだよ。" },
                { speaker: "B", eng: "Awesome. Where is the festival?", jpn: "最高だね。フェスはどこであるの？" },
                { speaker: "A", eng: "It is at the beach.", jpn: "ビーチであるんだ。" },
                { speaker: "B", eng: "That sounds so fun. How do we get there?", jpn: "すごく楽しそう。どうやってそこへ行くの？" },
                { speaker: "A", eng: "We can take the bus. It is very easy.", jpn: "バスで行けるよ。とても簡単だよ。" },
                { speaker: "B", eng: "Okay. Do we need to buy tickets now?", jpn: "わかった。今チケットを買う必要がある？" },
                { speaker: "A", eng: "No, we don't. We can buy them at the beach.", jpn: "いや、必要ないよ。ビーチで買えるから。" },
                { speaker: "B", eng: "Great. What should I wear?", jpn: "いいね。何を着ていけばいい？" },
                { speaker: "A", eng: "Wear a t-shirt and sunglasses. It will be hot!", jpn: "Tシャツを着て、サングラスをかけてね。暑くなるよ！" }
            ],
            writingTask: {
                promptEng: "Imagine you are inviting a friend to an event (a party, a movie, a dinner). Write three questions to ask them about their plans. Write one 'Be' verb question, one 'Action verb' question, and one 'Wh-' question. (For example: Are you free on Sunday? Do you like pizza? What time is good for you?) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "友達をイベント（パーティー、映画、夕食など）に誘うと想像してください。彼らの予定について尋ねる質問を3つ書いてください。「be動詞の質問」を1つ、「一般動詞の質問」を1つ、「Wh疑問文」を1つ書いてください。（例：日曜日は暇ですか？ ピザは好きですか？ 何時がいいですか？）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 8,
        title: "Lesson 8: How to talk about possession",
        goal: "Talk about who owns what using possessive adjectives (my, your, his, her, our, their). <br><span style='font-size:0.9rem; color:var(--text-light);'>(所有格の形容詞（my, your, his, her, our, their）を使って、誰の持ち物かについて話す。)</span>",
        vocab: [
            { eng: "My", jpn: "私の" },
            { eng: "Your", jpn: "あなたの" },
            { eng: "His", jpn: "彼の" },
            { eng: "Her", jpn: "彼女の" },
            { eng: "Our", jpn: "私たちの" },
            { eng: "Their", jpn: "彼らの" },
            { eng: "Bag", jpn: "カバン" },
            { eng: "Jacket", jpn: "ジャケット / 上着" },
            { eng: "Umbrella", jpn: "傘" },
            { eng: "Wallet", jpn: "財布" },
            { eng: "Name tag", jpn: "名札 / ネームタグ" },
            { eng: "Black", jpn: "黒い" },
            { eng: "Brown", jpn: "茶色い" },
            { eng: "Look", jpn: "見る" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me. <span class='swappable'>Is this your bag?</span>", jpn: "すみません。これはあなたのカバンですか？" },
            { speaker: "B", eng: "No, <span class='swappable'>it is not my bag.</span> <span class='swappable'>My bag is black.</span>", jpn: "いいえ、私のカバンではありません。私のカバンは黒です。" },
            { speaker: "A", eng: "Oh, I see. <span class='swappable'>Maybe it is his bag.</span>", jpn: "なるほど。たぶん彼のカバンですね。" },
            { speaker: "B", eng: "I don't think so. <span class='swappable'>His bag is brown.</span>", jpn: "そうは思いません。彼のカバンは茶色です。" },
            { speaker: "A", eng: "Look, there is a name tag on it.", jpn: "見て、名札がついていますよ。" },
            { speaker: "B", eng: "Ah, yes! <span class='swappable'>It is her bag.</span>", jpn: "あっ、はい！彼女のカバンです。" }
        ],
        expressions: [
            { category: "1. Asking about ownership (誰のものか尋ねる)", options: ["Is this your bag?", "Is this your jacket?", "Is this your umbrella?"] },
            { category: "2. Denying ownership (自分のものだと否定する)", options: ["it is not my bag.", "it is not my jacket.", "it is not my umbrella."] },
            { category: "3. Describing your item (自分のものについて説明する)", options: ["My bag is black.", "My jacket is blue.", "My umbrella is red."] },
            { category: "4. Suggesting other owners (他の人のものか提案する)", options: ["Maybe it is his bag.", "Maybe it is her jacket.", "Maybe it is our umbrella."] },
            { category: "5. Describing other people's items (他の人のものについて説明する)", options: ["His bag is brown.", "Her jacket is green.", "Our umbrella is black."] },
            { category: "6. Confirming the owner (誰のものか確認する)", options: ["It is her bag.", "It is his jacket.", "It is their umbrella."] }
        ],
        grammar: {
            point: "Possessive Adjectives (my, your, his, her, our, their) - 所有格の形容詞",
            explanation: "We use possessive adjectives before a noun to show who owns it. The word changes based on the <strong>owner</strong>, not the object. <br>• I -> <strong>my</strong> bag<br>• You -> <strong>your</strong> bag<br>• He -> <strong>his</strong> bag<br>• She -> <strong>her</strong> bag<br>• We -> <strong>our</strong> bag<br>• They -> <strong>their</strong> bag<br><span style='font-size:0.9rem; color:var(--text-light);'>（誰が所有しているかを示すために、名詞の前に所有格の形容詞を置きます。単語は、物ではなく<strong>所有者</strong>に合わせて変化します。<br>・私 -> <strong>my</strong> bag（私のカバン）<br>・彼 -> <strong>his</strong> bag（彼のカバン）<br>・彼女 -> <strong>her</strong> bag（彼女のカバン）<br>・私たち -> <strong>our</strong> bag（私たちのカバン）<br>・彼ら -> <strong>their</strong> bag（彼らのカバン））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the words match the owner: '<u>your</u> bag' (belonging to you), '<u>his</u> bag' (belonging to a man), and '<u>her</u> bag' (belonging to a woman). <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：単語がどのように所有者と一致しているかに注目してください：『<u>your</u> bag（あなたの）』『<u>his</u> bag（彼の）』『<u>her</u> bag（彼女の）』。)</span>",
            examples: [
                { eng: "My brother is tall.", jpn: "私の兄（弟）は背が高いです。" },
                { eng: "Where is your passport?", jpn: "あなたのパスポートはどこですか？" },
                { eng: "They love their new house.", jpn: "彼らは自分たちの新しい家を気に入っています。" }
            ]
        },
        clickingGames: [
            { prompt: "これはあなたのカバンですか？", target: "Is this your bag?", words: ["Is", "this", "your", "bag?"] },
            { prompt: "私のカバンは黒です。", target: "My bag is black.", words: ["My", "bag", "is", "black."] },
            { prompt: "たぶん彼のカバンですね。", target: "Maybe it is his bag.", words: ["Maybe", "it", "is", "his", "bag."] },
            { prompt: "彼女のカバンです。", target: "It is her bag.", words: ["It", "is", "her", "bag."] },
            { prompt: "私たちの傘は黒です。", target: "Our umbrella is black.", words: ["Our", "umbrella", "is", "black."] }
        ],
        dropdownGames: [
            { before: "Excuse me, is this", options: ["your", "you", "yours"], answer: "your", after: " umbrella?" },
            { before: "I can't find", options: ["my", "me", "I"], answer: "my", after: " phone. Where is it?" },
            { before: "John is driving", options: ["his", "he", "him"], answer: "his", after: " new car." },
            { before: "Mary is calling", options: ["her", "she", "hers"], answer: "her", after: " mother." },
            { before: "We love", options: ["our", "us", "we"], answer: "our", after: " new house. It is very big." },
            { before: "The students are doing", options: ["their", "they", "them"], answer: "their", after: " homework." },
            { before: "Mr. Smith forgot", options: ["his", "he", "him"], answer: "his", after: " wallet." },
            { before: "Is that", options: ["her", "she", "hers"], answer: "her", after: " bag on the chair?" },
            { before: "Are these", options: ["your", "you", "yours"], answer: "your", after: " glasses?" },
            { before: "They are washing", options: ["their", "they", "them"], answer: "their", after: " car outside." }
        ],
        roleplay: {
            a: "You found a wallet on the table. Ask your partner if it is their wallet. (テーブルの上で財布を見つけました。パートナーに、彼らの財布かどうか尋ねてください。)",
            b: "Say no. Say your wallet is brown. Tell them it is probably David's wallet (use 'his'). (いいえと答えてください。あなたの財布は茶色だと伝えてください。おそらくデビッドの財布だと伝えてください（『his』を使ってください）。)"
        },
        homework: {
            vocab: [
                { eng: "Family", jpn: "家族" },
                { eng: "Parents", jpn: "両親" },
                { eng: "Father", jpn: "父" },
                { eng: "Mother", jpn: "母" },
                { eng: "Brother", jpn: "兄 / 弟" },
                { eng: "Sister", jpn: "姉 / 妹" },
                { eng: "Hospital", jpn: "病院" },
                { eng: "School", jpn: "学校" },
                { eng: "Near", jpn: "近い / 近くに" },
                { eng: "Far", jpn: "遠い / 遠くに" },
                { eng: "Company", jpn: "会社" },
                { eng: "Dog", jpn: "犬" },
                { eng: "Keys", jpn: "鍵" },
                { eng: "Glasses", jpn: "メガネ" }
            ],
            reading1: {
                title: "Task 2: Reading (My Family)",
                instruction: "Read the short introduction about a family and their lives.",
                eng: "<strong>My Family</strong><br><br>I live in Tokyo with my family. My father is a doctor. His hospital is very big. My mother is a teacher. Her school is near our house. I have two brothers. They are university students. Their university is far from our house, so they take the train. We have a dog. His name is Max. Our house is small, but we are very happy.",
                jpn: "<strong>私の家族</strong><br><br>私は家族と一緒に東京に住んでいます。私の父は医者です。彼の病院はとても大きいです。私の母は先生です。彼女の学校は私たちの家の近くにあります。私には2人の兄弟がいます。彼らは大学生です。彼らの大学は私たちの家から遠いので、彼らは電車に乗ります。私たちは犬を飼っています。彼の名前はマックスです。私たちの家は小さいですが、私たちはとても幸せです。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Is everyone ready to go?", jpn: "みんな出かける準備はできた？" },
                { speaker: "B", eng: "Almost. I can't find my car keys.", jpn: "もう少し。車の鍵が見つからないんだ。" },
                { speaker: "A", eng: "Are these your keys on the table?", jpn: "テーブルの上にあるこれはあなたの鍵？" },
                { speaker: "B", eng: "No, those are my wife's keys. Her keys have a red keychain.", jpn: "ううん、それは妻の鍵だよ。彼女の鍵には赤いキーホルダーがついてるんだ。" },
                { speaker: "A", eng: "What about your brother? Maybe he took them.", jpn: "お兄さんはどう？もしかしたら彼が持って行ったのかも。" },
                { speaker: "B", eng: "No, he is sleeping in his room. Wait, look under your bag.", jpn: "いや、彼は自分の部屋で寝てるよ。待って、君のカバンの下を見て。" },
                { speaker: "A", eng: "Oh! Here they are. I am sorry.", jpn: "あっ！ここにあった。ごめんなさい。" },
                { speaker: "B", eng: "That is okay. Do you have your phone?", jpn: "大丈夫だよ。自分の携帯電話は持ってる？" },
                { speaker: "A", eng: "Yes, my phone is in my pocket.", jpn: "うん、私の携帯電話はポケットの中にあるよ。" },
                { speaker: "B", eng: "Okay, let's take our bags and go!", jpn: "よし、自分たちのカバンを持って行こう！" }
            ],
            writingTask: {
                promptEng: "Write three sentences about your family or friends using possessive adjectives (my, your, his, her, our, their). Example: 'My sister is a student. Her school is in Tokyo. Our parents are very busy.' Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "所有格の形容詞（my, your, his, her, our, their）を使って、家族や友人についての文を3つ書いてください。例：「私の妹は学生です。彼女の学校は東京にあります。私たちの両親はとても忙しいです。」Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 9,
        title: "Lesson 9: How to talk about belongings",
        goal: "Talk about things you and other people own using 'have' and 'has'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『have』と『has』を使って、自分や他の人が持っているものについて話す。)</span>",
        vocab: [
            { eng: "Have", jpn: "持っている / ある（I, You, We, They用）" },
            { eng: "Has", jpn: "持っている / ある（He, She, It用）" },
            { eng: "Pen", jpn: "ペン" },
            { eng: "Pencil", jpn: "鉛筆" },
            { eng: "Car", jpn: "車" },
            { eng: "Bicycle", jpn: "自転車" },
            { eng: "Pet", jpn: "ペット" },
            { eng: "Dog", jpn: "犬" },
            { eng: "Red", jpn: "赤い" },
            { eng: "Blue", jpn: "青い" },
            { eng: "New", jpn: "新しい" },
            { eng: "Big", jpn: "大きい" },
            { eng: "Small", jpn: "小さい" },
            { eng: "Wait", jpn: "待つ" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me. <span class='swappable'>Do you have a pen?</span>", jpn: "すみません。あなたはペンを持っていますか？" },
            { speaker: "B", eng: "No, <span class='swappable'>I do not have a pen.</span> But <span class='swappable'>I have a pencil.</span>", jpn: "いいえ、私はペンを持っていません。でも、鉛筆は持っています。" },
            { speaker: "A", eng: "Thank you. What about David? <span class='swappable'>Does he have a pen?</span>", jpn: "ありがとうございます。デビッドはどうですか？彼はペンを持っていますか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>he has a pen.</span>", jpn: "はい、彼はペンを持っています。" },
            { speaker: "A", eng: "Great. I will ask him.", jpn: "素晴らしい。彼に聞いてみます。" },
            { speaker: "B", eng: "Wait, <span class='swappable'>he has a red pen.</span> Is that okay?", jpn: "待って、彼が持っているのは赤いペンです。それでいいですか？" }
        ],
        expressions: [
            { category: "1. Asking what someone has (相手の持ち物を尋ねる)", options: ["Do you have a pen?", "Do you have a car?", "Do you have a pet?"] },
            { category: "2. Stating what you don't have (持っていないものを伝える)", options: ["I do not have a pen.", "I do not have a car.", "I do not have a pet."] },
            { category: "3. Stating what you have (持っているものを伝える)", options: ["I have a pencil.", "I have a bicycle.", "I have a dog."] },
            { category: "4. Asking about a third person (第三者の持ち物を尋ねる)", options: ["Does he have a pen?", "Does she have a car?", "Does he have a pet?"] },
            { category: "5. Stating what a third person has (第三者が持っているものを伝える)", options: ["he has a pen.", "she has a car.", "he has a dog."] },
            { category: "6. Adding details about the item (持ち物の特徴を付け加える)", options: ["he has a red pen.", "she has a new car.", "he has a big dog."] }
        ],
        grammar: {
            point: "Verb 'have' and 'has' for possession - 所有を表す動詞の『have』と『has』",
            explanation: "We use the verb 'have' to talk about things we own. The word changes depending on the subject (who owns the thing).<br>• <strong>I / You / We / They</strong> -> <strong>have</strong> (I have a car. / Do you have a car? / I do not have a car.)<br>• <strong>He / She / It</strong> -> <strong>has</strong> (She has a car. / Does she have a car? / She does not have a car.)<br><em>*Note: In questions and negative sentences for He/She/It, we use 'does/doesn't' + 'have' (not has).</em><br><span style='font-size:0.9rem; color:var(--text-light);'>（所有しているものについて話すとき、動詞の『have』を使います。主語（誰が持っているか）によって形が変わります。<br>・<strong>I / You / We / They</strong> -> <strong>have</strong>（I have a car. / Do you have a car? / I do not have a car.）<br>・<strong>He / She / It</strong> -> <strong>has</strong>（She has a car. / Does she have a car? / She does not have a car.）<br>※注意：He/She/Itの疑問文や否定文では、『does/doesn't』＋『have』を使います（hasにはなりません）。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the changes based on the person: '<u>Do you have</u>', '<u>I have</u>', '<u>Does he have</u>', and '<u>he has</u>'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：人による変化に注目してください：『<u>Do you have</u>』『<u>I have</u>』『<u>Does he have</u>』『<u>he has</u>』。)</span>",
            examples: [
                { eng: "They have a beautiful house.", jpn: "彼らは美しい家を持っています。" },
                { eng: "My brother has two dogs.", jpn: "私の兄（弟）は2匹の犬を飼っています。" },
                { eng: "Does she have a smartphone?", jpn: "彼女はスマートフォンを持っていますか？" }
            ]
        },
        clickingGames: [
            { prompt: "あなたはペンを持っていますか？", target: "Do you have a pen?", words: ["Do", "you", "have", "a", "pen?"] },
            { prompt: "いいえ、私はペンを持っていません。", target: "No, I do not have a pen.", words: ["No,", "I", "do", "not", "have", "a", "pen."] },
            { prompt: "彼はペンを持っていますか？", target: "Does he have a pen?", words: ["Does", "he", "have", "a", "pen?"] },
            { prompt: "はい、彼はペンを持っています。", target: "Yes, he has a pen.", words: ["Yes,", "he", "has", "a", "pen."] },
            { prompt: "彼が持っているのは赤いペンです。", target: "He has a red pen.", words: ["He", "has", "a", "red", "pen."] }
        ],
        dropdownGames: [
            { before: "I", options: ["have", "has", "having"], answer: "have", after: " a new computer." },
            { before: "She", options: ["has", "have", "haves"], answer: "has", after: " a very cute cat." },
            { before: "Do you", options: ["have", "has", "haves"], answer: "have", after: " any brothers or sisters?" },
            { before: "My friend John", options: ["has", "have", "having"], answer: "has", after: " a red car." },
            { before: "We do not", options: ["have", "has", "haves"], answer: "have", after: " time right now." },
            { before: "", options: ["Does", "Do", "Is"], answer: "Does", after: " Mary have a pen?" },
            { before: "He doesn't", options: ["have", "has", "had"], answer: "have", after: " his wallet today." },
            { before: "They", options: ["have", "has", "are"], answer: "have", after: " a big house in the city." },
            { before: "The hotel", options: ["has", "have", "is"], answer: "has", after: " a swimming pool." },
            { before: "What kind of phone do you", options: ["have", "has", "had"], answer: "have", after: "?" }
        ],
        roleplay: {
            a: "Ask your partner if they have a car. If they say no, ask them if they have a bicycle. (パートナーに車を持っているか尋ねてください。もし「いいえ」と答えたら、自転車を持っているか尋ねてください。)",
            b: "Answer your partner. Tell them you do not have a car, but you have a bicycle. Tell them your bicycle is blue. (パートナーに答えてください。車は持っていないが、自転車は持っていると伝えてください。あなたの自転車は青色だと伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "House", jpn: "家" },
                { eng: "Apartment", jpn: "アパート / マンション" },
                { eng: "Garden", jpn: "庭" },
                { eng: "Computer", jpn: "コンピューター / パソコン" },
                { eng: "Laptop", jpn: "ノートパソコン" },
                { eng: "Smartphone", jpn: "スマートフォン" },
                { eng: "Camera", jpn: "カメラ" },
                { eng: "Watch", jpn: "腕時計" },
                { eng: "Ticket", jpn: "チケット / 切符" },
                { eng: "Money", jpn: "お金" },
                { eng: "Time", jpn: "時間" },
                { eng: "Idea", jpn: "アイデア / 考え" },
                { eng: "Bag", jpn: "カバン" },
                { eng: "Shoes", jpn: "靴" }
            ],
            reading1: {
                title: "Task 2: Reading (My Dream House)",
                instruction: "Read the short paragraph about someone's belongings and dream house.",
                eng: "<strong>My Dream House</strong><br><br>Right now, I live in a small apartment. I do not have a garden, and I do not have a car. I only have a bicycle. But my parents have a beautiful house in the country. They have a big garden and two dogs. My father has an old truck, and my mother has a small red car. I want to buy a house like theirs one day. I have a good job now, so I save money every month.",
                jpn: "<strong>私の夢の家</strong><br><br>今、私は小さなアパートに住んでいます。私には庭がなく、車も持っていません。自転車しか持っていません。でも、私の両親は田舎に美しい家を持っています。彼らは大きな庭と2匹の犬を持っています。父は古いトラックを持っていて、母は小さな赤い車を持っています。私はいつか彼らのような家を買いたいです。今は良い仕事に就いているので、毎月お金を貯めています。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Are you ready for the meeting?", jpn: "会議の準備はできていますか？" },
                { speaker: "B", eng: "Yes, I am. But I have a problem.", jpn: "はい、できています。でも問題があります。" },
                { speaker: "A", eng: "What is it? Do you have the report?", jpn: "何ですか？報告書は持っていますか？" },
                { speaker: "B", eng: "Yes, I have the report. But I don't have my laptop.", jpn: "はい、報告書は持っています。でもノートパソコンを持っていません。" },
                { speaker: "A", eng: "Oh no. Does Sarah have a laptop?", jpn: "あらら。サラはノートパソコンを持っていますか？" },
                { speaker: "B", eng: "No, she has a tablet. We need a computer for the presentation.", jpn: "いいえ、彼女はタブレットを持っています。プレゼンにはコンピューターが必要です。" },
                { speaker: "A", eng: "I have my laptop in my bag. You can use it.", jpn: "カバンの中に私のノートパソコンがあります。それを使っていいですよ。" },
                { speaker: "B", eng: "Really? Thank you so much! You are a lifesaver.", jpn: "本当ですか？本当にありがとうございます！あなたは命の恩人です。" },
                { speaker: "A", eng: "No problem. Do you have the HDMI cable?", jpn: "問題ありません。HDMIケーブルは持っていますか？" },
                { speaker: "B", eng: "Yes, I have it right here. Let's go.", jpn: "はい、ここに持っています。行きましょう。" }
            ],
            writingTask: {
                promptEng: "Write three sentences about things you or your family members have. Use 'have' and 'has'. (For example: I have a laptop. My brother has a car. We have a dog.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "あなたやあなたの家族が持っているものについて、3つの文を書いてください。『have』と『has』を使用してください。（例：私はノートパソコンを持っています。兄は車を持っています。私たちは犬を飼っています。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 10,
        title: "Lesson 10: How to talk about your family",
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
        id: 11,
        title: "Lesson 11: How to describe someone's appearance",
        goal: "Describe a person's physical appearance using 'have' and 'has' (e.g., hair, eyes, facial hair). <br><span style='font-size:0.9rem; color:var(--text-light);'>(『have』や『has』を使って、髪や目などの外見の特徴を説明する。)</span>",
        vocab: [
            { eng: "Hair", jpn: "髪" },
            { eng: "Eyes", jpn: "目" },
            { eng: "Black", jpn: "黒い" },
            { eng: "Brown", jpn: "茶色い" },
            { eng: "Blonde", jpn: "金髪の" },
            { eng: "Long", jpn: "長い" },
            { eng: "Short", jpn: "短い / 身長が低い" },
            { eng: "Straight", jpn: "まっすぐな / ストレートの" },
            { eng: "Curly", jpn: "巻き毛の / カールした" },
            { eng: "Glasses", jpn: "メガネ" },
            { eng: "Beard", jpn: "あごひげ" },
            { eng: "Mustache", jpn: "口ひげ" },
            { eng: "Tall", jpn: "背が高い" },
            { eng: "Look like", jpn: "〜に似ている / どんな外見か" }
        ],
        dialogue: [
            { speaker: "A", eng: "I am looking for my new coworker, Tom. <span class='swappable'>What does he look like?</span>", jpn: "新しい同僚のトムを探しています。彼はどんな外見ですか？" },
            { speaker: "B", eng: "He is quite tall. And <span class='swappable'>he has short black hair.</span>", jpn: "彼はとても背が高いです。そして、彼は短い黒髪です。" },
            { speaker: "A", eng: "Okay. <span class='swappable'>Does he wear glasses?</span>", jpn: "わかりました。彼はメガネをかけていますか？" },
            { speaker: "B", eng: "No, he doesn't. But <span class='swappable'>he has a beard.</span>", jpn: "いいえ、かけていません。でも、あごひげがあります。" },
            { speaker: "A", eng: "I see. <span class='swappable'>What about his eyes?</span>", jpn: "なるほど。彼の目はどうですか？" },
            { speaker: "B", eng: "<span class='swappable'>He has brown eyes.</span> I think he is in the meeting room.", jpn: "彼は茶色い目をしています。会議室にいると思いますよ。" }
        ],
        expressions: [
            { category: "1. Asking about appearance (外見について尋ねる)", options: ["What does he look like?", "What does she look like?", "What do they look like?"] },
            { category: "2. Describing hair (髪について説明する)", options: ["he has short black hair.", "she has long blonde hair.", "he has curly brown hair."] },
            { category: "3. Asking about accessories/features (アクセサリーや特徴について尋ねる)", options: ["Does he wear glasses?", "Does she have a tattoo?", "Does he wear a hat?"] },
            { category: "4. Describing facial hair/features (顔の特徴について説明する)", options: ["he has a beard.", "he has a mustache.", "she has a nice smile."] },
            { category: "5. Asking about specific features (特定の特徴について尋ねる)", options: ["What about his eyes?", "What color is her hair?", "What about his face?"] },
            { category: "6. Describing eyes (目について説明する)", options: ["He has brown eyes.", "She has blue eyes.", "He has green eyes."] }
        ],
        grammar: {
            point: "Describing appearance using 'have' and 'has' - 『have』と『has』を使った外見の説明",
            explanation: "To talk about physical features that belong to a person (like hair, eyes, or a beard), we use the verb 'have'. Remember to use <strong>has</strong> for <em>he, she, and it</em>, and <strong>have</strong> for <em>I, you, we, and they</em>. Adjectives usually go before the noun (e.g., short black hair). <br>• I / You / We / They -> <strong>have</strong><br>• He / She / It -> <strong>has</strong><br><span style='font-size:0.9rem; color:var(--text-light);'>（髪、目、ひげなど、人が持っている身体的特徴について話すときには、動詞の『have』を使います。<em>he, she, it</em> には <strong>has</strong> を、<em>I, you, we, they</em> には <strong>have</strong> を使うことを覚えておきましょう。形容詞は通常、名詞の前に置きます（例：短い黒髪）。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the structure when describing Tom: '<u>he has</u> short black hair', '<u>he has</u> a beard', and '<u>He has</u> brown eyes'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：トムの外見を説明するときの構造に注目してください：『<u>he has</u> short black hair』『<u>he has</u> a beard』『<u>He has</u> brown eyes』。)</span>",
            examples: [
                { eng: "She has long brown hair.", jpn: "彼女は長い茶色の髪をしています。" },
                { eng: "I have blue eyes and short hair.", jpn: "私は青い目をしていて、髪が短いです。" },
                { eng: "Does he have a beard?", jpn: "彼にはあごひげがありますか？" }
            ]
        },
        clickingGames: [
            { prompt: "彼はどんな外見ですか？", target: "What does he look like?", words: ["What", "does", "he", "look", "like?"] },
            { prompt: "彼は短い黒髪です。", target: "He has short black hair.", words: ["He", "has", "short", "black", "hair."] },
            { prompt: "彼はメガネをかけていますか？", target: "Does he wear glasses?", words: ["Does", "he", "wear", "glasses?"] },
            { prompt: "彼にはあごひげがあります。", target: "He has a beard.", words: ["He", "has", "a", "beard."] },
            { prompt: "彼は茶色い目をしています。", target: "He has brown eyes.", words: ["He", "has", "brown", "eyes."] }
        ],
        dropdownGames: [
            { before: "My sister", options: ["has", "have", "is"], answer: "has", after: " very long hair." },
            { before: "What does your brother", options: ["look", "looks", "looking"], answer: "look", after: " like?" },
            { before: "They", options: ["have", "has", "are"], answer: "have", after: " beautiful green eyes." },
            { before: "He", options: ["is", "has", "does"], answer: "is", after: " very tall and thin." },
            { before: "Does your father", options: ["have", "has", "is"], answer: "have", after: " a mustache?" },
            { before: "She", options: ["has", "have", "is"], answer: "has", after: " curly blonde hair." },
            { before: "I don't", options: ["have", "has", "am"], answer: "have", after: " a beard." },
            { before: "", options: ["Do", "Does", "Are"], answer: "Does", after: " she wear glasses for reading?" },
            { before: "My grandfather", options: ["is", "has", "does"], answer: "is", after: " quite short." },
            { before: "He", options: ["has", "have", "is"], answer: "has", after: " straight black hair." }
        ],
        roleplay: {
            a: "Ask your partner what their best friend looks like. Ask about their hair and eyes. (パートナーに、彼らの親友がどんな外見か尋ねてください。髪と目について尋ねてください。)",
            b: "Answer your partner. Describe your best friend using 'is' for height, and 'has' for hair and eyes. (パートナーに答えてください。身長には『is』を、髪と目には『has』を使って親友の外見を説明してください。)"
        },
        homework: {
            vocab: [
                { eng: "Beautiful", jpn: "美しい" },
                { eng: "Handsome", jpn: "ハンサムな" },
                { eng: "Cute", jpn: "かわいい" },
                { eng: "Young", jpn: "若い" },
                { eng: "Old", jpn: "古い / 年をとった" },
                { eng: "Face", jpn: "顔" },
                { eng: "Nose", jpn: "鼻" },
                { eng: "Mouth", jpn: "口" },
                { eng: "Ear", jpn: "耳" },
                { eng: "Skin", jpn: "肌" },
                { eng: "Pale", jpn: "青白い / 色白の" },
                { eng: "Dark", jpn: "暗い / 色黒の" },
                { eng: "Bald", jpn: "はげた" },
                { eng: "Smile", jpn: "笑顔" }
            ],
            reading1: {
                title: "Task 2: Reading (My Family)",
                instruction: "Read the description of a family's appearance.",
                eng: "<strong>My Family</strong><br><br>My family looks very different from each other. My father is tall and handsome. He has short curly hair and a thick mustache. My mother is beautiful. She is short, and she has long straight black hair. She has big brown eyes and a very warm smile. My younger brother is still young and cute. He doesn't have a beard, of course! He has blonde hair and blue eyes like our grandfather. We all look different, but we are a happy family.",
                jpn: "<strong>私の家族</strong><br><br>私の家族はそれぞれ外見が大きく異なります。父は背が高くてハンサムです。彼は短い巻き毛と濃い口ひげを持っています。母は美しいです。彼女は背が低く、長くまっすぐな黒髪をしています。彼女は大きな茶色い目をしていて、とても温かい笑顔を持っています。弟はまだ若くてかわいいです。もちろん、彼にはあごひげはありません！彼は私たちの祖父のように金髪と青い目をしています。私たちはみんな外見が違いますが、幸せな家族です。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "I want to introduce you to my cousin, Emma.", jpn: "私のいとこのエマをあなたに紹介したいです。" },
                { speaker: "B", eng: "Oh, that sounds nice. What does she look like?", jpn: "おお、それはいいですね。彼女はどんな外見ですか？" },
                { speaker: "A", eng: "She is quite tall, and she has long brown hair.", jpn: "彼女はとても背が高く、長い茶色の髪をしています。" },
                { speaker: "B", eng: "Does she wear glasses?", jpn: "彼女はメガネをかけていますか？" },
                { speaker: "A", eng: "No, she doesn't. But she has beautiful green eyes.", jpn: "いいえ、かけていません。でも、美しい緑色の目をしています。" },
                { speaker: "B", eng: "Is she here at the party now?", jpn: "彼女は今、このパーティーにいますか？" },
                { speaker: "A", eng: "Yes, I think so. Let me look around.", jpn: "はい、そう思います。周りを見させてください。" },
                { speaker: "B", eng: "Is that her over there? The woman with the blue dress?", jpn: "あそこにいるのが彼女ですか？青いドレスを着た女性ですか？" },
                { speaker: "A", eng: "Yes, that's Emma! Let's go talk to her.", jpn: "はい、それがエマです！彼女に話しに行きましょう。" },
                { speaker: "B", eng: "She looks very friendly. She has a nice smile.", jpn: "彼女はとてもフレンドリーに見えますね。素敵な笑顔をしています。" }
            ],
            writingTask: {
                promptEng: "Write three sentences describing the appearance of a friend or family member. Use 'is' (for height/general looks) and 'has' (for hair, eyes, etc.). (For example: My friend is tall. He has short black hair. He has a beard.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "友人や家族の外見を説明する文を3つ書いてください。身長や全体的な外見には『is』を、髪や目などには『has』を使用してください。（例：私の友人は背が高いです。彼は短い黒髪です。彼にはあごひげがあります。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 30,
        title: "Lesson 30: How to order at a cafe",
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
        id: 5,
        title: "Lesson 5: How to ask for directions",
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
    }, {
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
    },{
        id: 21,
        title: "Lesson 21: How to talk about what you are doing right now",
        goal: "Ask and answer questions about actions happening at this exact moment using the present continuous tense. <br><span style='font-size:0.9rem; color:var(--text-light);'>(現在進行形を使って、今この瞬間に起こっている行動について質問し、答える。)</span>",
        vocab: [
            { eng: "Working", jpn: "働いている" },
            { eng: "Studying", jpn: "勉強している" },
            { eng: "Cooking", jpn: "料理している" },
            { eng: "Eating", jpn: "食べている" },
            { eng: "Watching", jpn: "見ている" },
            { eng: "Reading", jpn: "読んでいる" },
            { eng: "Listening", jpn: "聴いている" },
            { eng: "Talking", jpn: "話している" },
            { eng: "Waiting", jpn: "待っている" },
            { eng: "Driving", jpn: "運転している" },
            { eng: "Walking", jpn: "歩いている" },
            { eng: "Sleeping", jpn: "眠っている" },
            { eng: "Now", jpn: "今" },
            { eng: "Right now", jpn: "今すぐ / たった今" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hello? <span class='swappable'>What are you doing right now?</span>", jpn: "もしもし？今何をしているの？" },
            { speaker: "B", eng: "<span class='swappable'>I am cooking dinner.</span> Are you busy?", jpn: "夕食を作っているところだよ。忙しい？" },
            { speaker: "A", eng: "Yes, <span class='swappable'>I am doing my homework.</span>", jpn: "うん、宿題をしているんだ。" },
            { speaker: "B", eng: "Oh, okay. <span class='swappable'>Is your brother helping you?</span>", jpn: "ああ、そうなんだ。お兄ちゃんは手伝ってくれているの？" },
            { speaker: "A", eng: "No, <span class='swappable'>he is taking a shower.</span> <span class='swappable'>Can I call you later?</span>", jpn: "ううん、彼はシャワーを浴びているよ。後で電話してもいい？" },
            { speaker: "B", eng: "Sure. Talk to you soon.", jpn: "もちろん。また後でね。" }
        ],
        expressions: [
            { category: "1. Asking about current actions (現在の行動を尋ねる)", options: ["What are you doing right now?", "What are you doing?", "Are you busy now?"] },
            { category: "2. Stating current actions 1 (現在の行動の伝え方1)", options: ["I am cooking dinner.", "I am reading a book.", "I am watching TV."] },
            { category: "3. Stating current actions 2 (現在の行動の伝え方2)", options: ["I am doing my homework.", "I am cleaning the house.", "I am working right now."] },
            { category: "4. Asking about someone else (他の人の行動を尋ねる)", options: ["Is your brother helping you?", "What is he doing?", "Is she sleeping?"] },
            { category: "5. Answering for others (他の人の行動を答える)", options: ["He is taking a shower.", "She is driving.", "They are eating lunch."] },
            { category: "6. Phone/Call responses (電話の応答)", options: ["Can I call you later?", "I will call you back.", "I am waiting for your call."] }
        ],
        grammar: {
            point: "Present Continuous (am/is/are + verb-ing) - 現在進行形",
            explanation: "We use the present continuous tense (be verb + a verb ending in -ing) to talk about things that are happening right now, at this exact moment. <br><span style='font-size:0.9rem; color:var(--text-light);'>（今、この瞬間に起こっていることについて話すときは、現在進行形（be動詞＋ing形の動詞）を使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the structure: 'What <u>are</u> you <u>doing</u>?' and 'I <u>am cooking</u> dinner.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『What <u>are</u> you <u>doing</u>?』や『I <u>am cooking</u>...』の構造に注目してください。)</span>",
            examples: [
                { eng: "I am waiting for the bus.", jpn: "私はバスを待っています。" },
                { eng: "She is not sleeping.", jpn: "彼女は寝ていません。" },
                { eng: "Are they watching a movie?", jpn: "彼らは映画を見ていますか？" }
            ]
        },
        clickingGames: [
            { prompt: "今何をしているの？", target: "What are you doing right now?", words: ["What", "are", "you", "doing", "right", "now?"] },
            { prompt: "私は夕食を作っています。", target: "I am cooking dinner.", words: ["I", "am", "cooking", "dinner."] },
            { prompt: "彼はシャワーを浴びています。", target: "He is taking a shower.", words: ["He", "is", "taking", "a", "shower."] },
            { prompt: "彼らはテレビを見ていますか？", target: "Are they watching TV?", words: ["Are", "they", "watching", "TV?"] },
            { prompt: "後で電話してもいいですか？", target: "Can I call you later?", words: ["Can", "I", "call", "you", "later?"] }
        ],
        dropdownGames: [
            { before: "What", options: ["are", "is", "am"], answer: "are", after: " you doing?" },
            { before: "I am", options: ["cook", "cooking", "cooks"], answer: "cooking", after: " dinner right now." },
            { before: "She", options: ["is", "are", "am"], answer: "is", after: " reading a book." },
            { before: "", options: ["Is", "Are", "Do"], answer: "Are", after: " they playing soccer?" },
            { before: "He is", options: ["take", "taking", "takes"], answer: "taking", after: " a shower." },
            { before: "We are", options: ["watch", "watching", "watches"], answer: "watching", after: " a movie." },
            { before: "I am", options: ["wait", "waits", "waiting"], answer: "waiting", after: " for the train." },
            { before: "Are you", options: ["listen", "listens", "listening"], answer: "listening", after: " to music?" },
            { before: "They", options: ["is", "are", "am"], answer: "are", after: " not sleeping." },
            { before: "I am doing my", options: ["homework", "house", "room"], answer: "homework", after: "." }
        ],
        roleplay: {
            a: "Call your friend on the phone. Ask them what they are doing right now, and ask what their family member is doing. (友達に電話をかけます。今何をしているか尋ね、彼らの家族が何をしているかも尋ねてください。)",
            b: "You are the friend. Answer the phone. Tell them you are doing a chore (like cleaning or cooking), and state what your family member is doing. (友達役です。電話に出ます。自分が家事（掃除や料理など）をしていることを伝え、家族が何をしているかも伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Calling", jpn: "電話をかけている" },
                { eng: "Texting", jpn: "メッセージを送っている" },
                { eng: "Meeting", jpn: "会っている / ミーティングをしている" },
                { eng: "Shopping", jpn: "買い物をしている" },
                { eng: "Playing", jpn: "遊んでいる / 演奏している" },
                { eng: "Running", jpn: "走っている" },
                { eng: "Crying", jpn: "泣いている" },
                { eng: "Laughing", jpn: "笑っている" },
                { eng: "Smiling", jpn: "微笑んでいる" },
                { eng: "Standing", jpn: "立っている" },
                { eng: "Sitting", jpn: "座っている" },
                { eng: "Holding", jpn: "持っている" },
                { eng: "Wearing", jpn: "着ている" },
                { eng: "Thinking", jpn: "考えている" }
            ],
            reading1: {
                title: "Task 2: Reading (Text Message Exchange)",
                instruction: "Read the text messages between two friends.",
                eng: "<strong>Emma:</strong> Hey! Are you busy right now?<br><strong>Liam:</strong> Hi! Yes, I am shopping at the supermarket. What are you doing?<br><strong>Emma:</strong> I am relaxing at home. I am watching a movie on TV.<br><strong>Liam:</strong> That sounds nice. Is your brother at home?<br><strong>Emma:</strong> Yes, he is studying in his room. He has a big test tomorrow.<br><strong>Liam:</strong> Oh, good luck to him! I am paying for my groceries now. I will text you later.<br><strong>Emma:</strong> Okay, see you!",
                jpn: "<strong>エマ：</strong> ねえ！今忙しい？<br><strong>リアム：</strong> やあ！うん、スーパーで買い物をしているところだよ。君は何をしているの？<br><strong>エマ：</strong> 家でリラックスしているわ。テレビで映画を見ているの。<br><strong>リアム：</strong> それはいいね。弟は家にいる？<br><strong>エマ：</strong> うん、自分の部屋で勉強しているわ。明日大きなテストがあるの。<br><strong>リアム：</strong> ああ、彼に頑張ってと伝えて！今、食料品の支払いをしているところなんだ。後でまたメッセージするね。<br><strong>エマ：</strong> わかった、またね！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hello, David speaking.", jpn: "もしもし、デビッドです。" },
                { speaker: "B", eng: "Hi David, it's Sarah. What are you doing?", jpn: "こんにちはデビッド、サラよ。何をしているの？" },
                { speaker: "A", eng: "Hi Sarah! I am cooking dinner for my family. We are having pasta tonight.", jpn: "やあサラ！家族の夕食を作っているところだよ。今夜はパスタを食べるんだ。" },
                { speaker: "B", eng: "That sounds delicious. Am I interrupting?", jpn: "美味しそうね。お邪魔だった？" },
                { speaker: "A", eng: "No, it's fine. The sauce is boiling right now. What are you up to?", jpn: "いや、大丈夫だよ。今ちょうどソースを煮込んでいるところなんだ。君は何をしているの？" },
                { speaker: "B", eng: "I am sitting in the park with my dog. He is running around.", jpn: "私は犬と一緒に公園に座っているの。彼は走り回っているわ。" },
                { speaker: "A", eng: "That is nice. Is it cold outside?", jpn: "それはいいね。外は寒いの？" },
                { speaker: "B", eng: "A little bit. I am wearing a thick jacket.", jpn: "少しね。厚いジャケットを着ているわ。" },
                { speaker: "A", eng: "Well, I have to go check the food. Can I call you back?", jpn: "さて、料理を確認しに行かなくちゃ。後でかけ直してもいい？" },
                { speaker: "B", eng: "Sure, no problem. Talk to you later!", jpn: "もちろん、問題ないわ。また後でね！" }
            ],
            writingTask: {
                promptEng: "Imagine you are sitting in a busy cafe or park. Write a short paragraph using the present continuous tense to describe what you are doing and what three other people around you are doing (e.g., 'I am drinking coffee. A man is reading...'). Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "混雑したカフェや公園に座っていると想像してください。現在進行形を使って、あなたが何をしているか、そして周りの他の3人が何をしているかを描写する短い文章を書いてください（例：「私はコーヒーを飲んでいます。男性が読んでいます…」）。Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 22,
        title: "Lesson 22: How to compare things",
        goal: "Compare two items or places and state your preference. <br><span style='font-size:0.9rem; color:var(--text-light);'>(2つの物や場所を比較し、自分の好みを伝える。)</span>",
        vocab: [
            { eng: "Better", jpn: "より良い" },
            { eng: "Worse", jpn: "より悪い" },
            { eng: "Bigger", jpn: "より大きい" },
            { eng: "Smaller", jpn: "より小さい" },
            { eng: "Cheaper", jpn: "より安い" },
            { eng: "More expensive", jpn: "より高い（値段が）" },
            { eng: "More convenient", jpn: "より便利な" },
            { eng: "City", jpn: "都会 / 都市" },
            { eng: "Countryside", jpn: "田舎" },
            { eng: "Train", jpn: "電車" },
            { eng: "Bus", jpn: "バス" },
            { eng: "Fast", jpn: "速い" },
            { eng: "Slow", jpn: "遅い" },
            { eng: "Prefer", jpn: "〜の方を好む" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Which is better, the city or the countryside?</span>", jpn: "都会と田舎、どちらが良いですか？" },
            { speaker: "B", eng: "<span class='swappable'>I think the city is better.</span> <span class='swappable'>It is more convenient.</span>", jpn: "都会の方が良いと思います。より便利ですから。" },
            { speaker: "A", eng: "Really? But <span class='swappable'>the countryside is quieter and cheaper.</span>", jpn: "本当に？でも、田舎の方が静かで物価も安いです。" },
            { speaker: "B", eng: "That is true. <span class='swappable'>Which do you prefer?</span>", jpn: "それは本当ですね。あなたはどちらが好きですか？" },
            { speaker: "A", eng: "<span class='swappable'>I prefer the countryside.</span>", jpn: "私は田舎が好きです。" }
        ],
        expressions: [
            { category: "1. Asking for a comparison (比較を尋ねる)", options: ["Which is better, the city or the countryside?", "Which is faster, the bus or the train?", "Which do you think is cheaper?"] },
            { category: "2. Stating an opinion (意見を述べる)", options: ["I think the city is better.", "I think the train is faster.", "In my opinion, this one is better."] },
            { category: "3. Giving a reason - Comparatives (理由を述べる - 比較級)", options: ["It is more convenient.", "It is much bigger.", "Because it is cheaper."] },
            { category: "4. Contrasting an idea (対照的な意見を述べる)", options: ["But the countryside is quieter and cheaper.", "But the bus is less crowded.", "However, that one is more expensive."] },
            { category: "5. Asking about preference (好みを尋ねる)", options: ["Which do you prefer?", "Which one do you like more?", "Do you prefer the red one or the blue one?"] },
            { category: "6. Stating a preference (好みを伝える)", options: ["I prefer the countryside.", "I prefer taking the train.", "I like the blue one more."] }
        ],
        grammar: {
            point: "Comparatives (-er / more) - 比較級 (-er / more)",
            explanation: "To compare two things, add '-er' to short adjectives (e.g., cheap -> cheaper). For long adjectives, put 'more' before the word (e.g., convenient -> more convenient). We use 'than' to connect the two things being compared. <br><span style='font-size:0.9rem; color:var(--text-light);'>（2つのものを比較するとき、短い形容詞には '-er' を付けます（例：cheap -> cheaper）。長い形容詞の場合は、単語の前に 'more' を置きます（例：convenient -> more convenient）。比較する2つのものをつなぐには 'than' を使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the forms: 'quieter', 'cheaper', and '<u>more</u> convenient'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：'quieter'、'cheaper'、'<u>more</u> convenient' といった形に注目してください。)</span>",
            examples: [
                { eng: "Tokyo is bigger than Kyoto.", jpn: "東京は京都より大きいです。" },
                { eng: "This phone is more expensive than my laptop.", jpn: "この電話は私のノートパソコンより高いです。" },
                { eng: "The train is faster than the bus.", jpn: "電車はバスより速いです。" }
            ]
        },
        clickingGames: [
            { prompt: "どちらが良いですか？", target: "Which is better?", words: ["Which", "is", "better?"] },
            { prompt: "都会の方が良いと思います。", target: "I think the city is better.", words: ["I", "think", "the", "city", "is", "better."] },
            { float: true, prompt: "電車はバスより速いです。", target: "The train is faster than the bus.", words: ["The", "train", "is", "faster", "than", "the", "bus."] },
            { prompt: "あなたはどちらが好きですか？", target: "Which do you prefer?", words: ["Which", "do", "you", "prefer?"] },
            { prompt: "これは私の古い車より便利です。", target: "This is more convenient than my old car.", words: ["This", "is", "more", "convenient", "than", "my", "old", "car."] }
        ],
        dropdownGames: [
            { before: "Which is", options: ["better", "good", "best"], answer: "better", after: ", the red one or the blue one?" },
            { before: "I think the train is", options: ["fast", "faster", "fastest"], answer: "faster", after: " than the bus." },
            { before: "The city is", options: ["more", "much", "very"], answer: "more", after: " convenient." },
            { before: "This restaurant is", options: ["cheap", "cheaper", "more cheap"], answer: "cheaper", after: " than that one." },
            { before: "Which do you", options: ["prefer", "preferable", "prefers"], answer: "prefer", after: "?" },
            { before: "I prefer the countryside", options: ["because", "but", "so"], answer: "because", after: " it is quiet." },
            { before: "My room is", options: ["smaller", "small", "more small"], answer: "smaller", after: " than your room." },
            { before: "A car is", options: ["more expensive", "expensiver", "expensive"], answer: "more expensive", after: " than a bicycle." },
            { before: "The weather today is", options: ["worse", "bad", "badder"], answer: "worse", after: " than yesterday." },
            { before: "Tokyo is bigger", options: ["than", "then", "that"], answer: "than", after: " Osaka." }
        ],
        roleplay: {
            a: "You are talking to a friend about transportation. Ask them which they think is better: taking the bus or taking the train. (友達と交通手段について話しています。バスと電車、どちらが良いと思うか尋ねてください。)",
            b: "You are the friend. State your opinion, give a reason using a comparative adjective (like faster or cheaper), and ask what they prefer. (友達役です。自分の意見を述べ、比較級（より速い、より安いなど）を使って理由を説明し、相手の好みを尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Hotter", jpn: "より暑い" },
                { eng: "Colder", jpn: "より寒い" },
                { eng: "Easier", jpn: "より簡単な" },
                { eng: "Harder", jpn: "より難しい" },
                { eng: "Heavier", jpn: "より重い" },
                { eng: "Lighter", jpn: "より軽い" },
                { eng: "More beautiful", jpn: "より美しい" },
                { eng: "More difficult", jpn: "より難しい" },
                { eng: "More interesting", jpn: "より面白い" },
                { eng: "Older", jpn: "より古い / より年上の" },
                { eng: "Younger", jpn: "より若い" },
                { eng: "Taller", jpn: "より背が高い" },
                { eng: "Shorter", jpn: "より短い / より背が低い" },
                { eng: "Than", jpn: "〜よりも" }
            ],
            reading1: {
                title: "Task 2: Reading (Review Article)",
                instruction: "Read the short review comparing two smartphones.",
                eng: "<strong>Phone A vs. Phone B</strong><br><br>Many people ask me which smartphone is better: Phone A or Phone B. I tested both phones this week. Phone A is smaller and lighter than Phone B. It is very easy to hold in one hand. However, Phone B has a much larger screen, making it better for watching videos. Phone B is also faster than Phone A. The only problem is the price. Phone B is more expensive. I prefer Phone B, but if you want something cheaper, Phone A is a great choice.",
                jpn: "<strong>スマートフォンAとBの比較</strong><br><br>多くの人が、スマートフォンAとBのどちらが良いかと私に尋ねます。今週、私は両方の電話をテストしました。スマートフォンAはBよりも小さくて軽いです。片手で持つのにとても簡単です。しかし、スマートフォンBは画面がはるかに大きく、動画を見るのにより適しています。また、スマートフォンBはAよりも速いです。唯一の問題は価格です。スマートフォンBの方が高いです。私はスマートフォンBの方が好きですが、より安いものを求めるなら、スマートフォンAも素晴らしい選択肢です。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "I am thinking about moving. Which is better, an apartment or a house?", jpn: "引っ越しを考えているんだ。アパートと一軒家、どちらが良いかな？" },
                { speaker: "B", eng: "I think a house is better because it is bigger.", jpn: "一軒家の方が大きいから良いと思うよ。" },
                { speaker: "A", eng: "That is true, but a house is more expensive than an apartment.", jpn: "それは本当だけど、一軒家はアパートよりも高いよね。" },
                { speaker: "B", eng: "Yes, but it is quieter. Apartments can be noisy.", jpn: "うん、でも一軒家の方が静かだよ。アパートはうるさくなることがあるから。" },
                { speaker: "A", eng: "Which do you prefer to clean?", jpn: "掃除するのはどちらが好き？" },
                { speaker: "B", eng: "Oh, an apartment is definitely easier to clean! A house takes too much time.", jpn: "ああ、絶対にアパートの方が掃除しやすいね！一軒家は時間がかかりすぎるよ。" },
                { speaker: "A", eng: "Right? I am very busy, so I prefer something smaller.", jpn: "だよね？僕はとても忙しいから、より小さい方が好きなんだ。" },
                { speaker: "B", eng: "Then I think an apartment is the better choice for you.", jpn: "それなら、君にとってはアパートの方が良い選択だと思うよ。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph comparing two things (for example, two cities, two types of food, or two sports). Use comparative words like 'bigger', 'cheaper', or 'more difficult'. Tell your teacher which one you prefer and why. Write your answer on Google Docs.",
                promptJpn: "2つのもの（例：2つの都市、2種類の食べ物、または2つのスポーツ）を比較する短い文章を書いてください。「bigger」「cheaper」「more difficult」などの比較級の単語を使用してください。どちらが好きかとその理由を先生に伝えてください。Googleドキュメントに書いて提出してください。"
            }
        }
    },{
        id: 23,
        title: "Lesson 23: How to talk about the best and the most",
        goal: "Compare three or more things and express the highest degree using superlative adjectives. <br><span style='font-size:0.9rem; color:var(--text-light);'>(3つ以上のものを比較し、最上級を使って最も〜なものについて話す。)</span>",
        vocab: [
            { eng: "Best", jpn: "一番良い / 最高の" },
            { eng: "Worst", jpn: "一番悪い / 最悪の" },
            { eng: "Biggest", jpn: "一番大きい" },
            { eng: "Smallest", jpn: "一番小さい" },
            { eng: "Cheapest", jpn: "一番安い" },
            { eng: "Most expensive", jpn: "一番高い（値段が）" },
            { eng: "Most popular", jpn: "一番人気のある" },
            { eng: "World", jpn: "世界" },
            { eng: "Country", jpn: "国" },
            { eng: "Class", jpn: "クラス" },
            { eng: "Family", jpn: "家族" },
            { eng: "Food", jpn: "食べ物" },
            { eng: "Movie", jpn: "映画" },
            { eng: "Animal", jpn: "動物" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>What is the best food in this city?</span>", jpn: "この街で一番美味しい食べ物は何ですか？" },
            { speaker: "B", eng: "<span class='swappable'>I think sushi is the best.</span>", jpn: "寿司が一番美味しいと思います。" },
            { speaker: "A", eng: "<span class='swappable'>Where is the most popular sushi restaurant?</span>", jpn: "一番人気のある寿司屋はどこですか？" },
            { speaker: "B", eng: "<span class='swappable'>It is near the station.</span> <span class='swappable'>It is the cheapest too.</span>", jpn: "駅の近くです。一番安くもあります。" }
        ],
        expressions: [
            { category: "1. Asking about the best (一番について尋ねる)", options: ["What is the best food in this city?", "Who is the tallest in your family?", "What is the most popular movie?"] },
            { category: "2. Stating the best (一番のものを伝える)", options: ["I think sushi is the best.", "My brother is the tallest.", "This is the most expensive watch."] },
            { category: "3. Asking about location/details (場所や詳細を尋ねる)", options: ["Where is the most popular sushi restaurant?", "Which one is the cheapest?", "Where is the biggest park?"] },
            { category: "4. Giving details with superlatives (最上級を使って詳細を伝える)", options: ["It is near the station.", "It is the cheapest too.", "That one is the smallest."] },
            { category: "5. Using scope phrases (範囲を指定する表現)", options: ["in the world (世界で)", "in my family (家族の中で)", "of all (すべての中で)"] },
            { category: "6. Agreeing and reacting (同意・反応)", options: ["I agree.", "That sounds great.", "I want to go there."] }
        ],
        grammar: {
            point: "Superlatives (-est / the most) - 最上級 (-est / the most)",
            explanation: "To compare three or more things, add '-est' to short adjectives (e.g., cheap -> cheapest). For long adjectives, put 'the most' before the word (e.g., popular -> the most popular). Always use 'the' before a superlative. <br><span style='font-size:0.9rem; color:var(--text-light);'>（3つ以上のものを比較するとき、短い形容詞には '-est' を付けます（例：cheap -> cheapest）。長い形容詞の場合は、単語の前に 'the most' を置きます（例：popular -> the most popular）。最上級の前には常に 'the' を使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the phrases: '<u>the best</u> food', '<u>the most</u> popular', and '<u>the cheapest</u>'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>the best</u> food』、『<u>the most</u> popular』、『<u>the cheapest</u>』といったフレーズに注目してください。)</span>",
            examples: [
                { eng: "Mount Fuji is the highest mountain in Japan.", jpn: "富士山は日本で一番高い山です。" },
                { eng: "This is the most beautiful flower.", jpn: "これは最も美しい花です。" },
                { eng: "He is the fastest runner.", jpn: "彼は最も速いランナーです。" }
            ]
        },
        clickingGames: [
            { prompt: "この街で一番美味しい食べ物は何ですか？", target: "What is the best food in this city?", words: ["What", "is", "the", "best", "food", "in", "this", "city?"] },
            { prompt: "彼がクラスで一番背が高いです。", target: "He is the tallest in the class.", words: ["He", "is", "the", "tallest", "in", "the", "class."] },
            { prompt: "一番人気のあるレストランはどこですか？", target: "Where is the most popular restaurant?", words: ["Where", "is", "the", "most", "popular", "restaurant?"] },
            { prompt: "これは店で一番高い時計です。", target: "This is the most expensive watch in the store.", words: ["This", "is", "the", "most", "expensive", "watch", "in", "the", "store."] },
            { prompt: "寿司が一番美味しいと思います。", target: "I think sushi is the best.", words: ["I", "think", "sushi", "is", "the", "best."] }
        ],
        dropdownGames: [
            { before: "What is", options: ["the", "a", "an"], answer: "the", after: " best food in this city?" },
            { before: "He is the", options: ["tallest", "taller", "tall"], answer: "tallest", after: " in my family." },
            { before: "This is the", options: ["most", "more", "much"], answer: "most", after: " expensive bag." },
            { before: "Where is the", options: ["nearest", "near", "nearer"], answer: "nearest", after: " station?" },
            { before: "I think this movie is the", options: ["best", "better", "good"], answer: "best", after: "." },
            { before: "She is the", options: ["fastest", "faster", "fast"], answer: "fastest", after: " runner in our school." },
            { before: "It is the", options: ["most", "more", "much"], answer: "most", after: " popular restaurant." },
            { before: "Who is the", options: ["oldest", "older", "old"], answer: "oldest", after: " in your family?" },
            { before: "That is the", options: ["worst", "worse", "bad"], answer: "worst", after: " idea." },
            { before: "This is the smallest room", options: ["in", "of", "on"], answer: "in", after: " the house." }
        ],
        roleplay: {
            a: "You are visiting a new city. Ask a local what the best food is, and where the most popular restaurant is. (新しい街を訪れています。地元の人に、一番美味しい食べ物は何か、そして一番人気のあるレストランはどこか尋ねてください。)",
            b: "You are a local. Answer the visitor's questions using superlative adjectives and give them a recommendation. (地元の人の役です。訪問者の質問に最上級を使って答え、おすすめを教えてあげてください。)"
        },
        homework: {
            vocab: [
                { eng: "Highest", jpn: "一番高い（高さが）" },
                { eng: "Lowest", jpn: "一番低い" },
                { eng: "Longest", jpn: "一番長い" },
                { eng: "Shortest", jpn: "一番短い" },
                { eng: "Smartest", jpn: "一番賢い" },
                { eng: "Funniest", jpn: "一番面白い" },
                { eng: "Nearest", jpn: "一番近い" },
                { eng: "Farthest", jpn: "一番遠い" },
                { eng: "Hardest", jpn: "一番難しい / 一番硬い" },
                { eng: "Easiest", jpn: "一番簡単な" },
                { eng: "The most beautiful", jpn: "一番美しい" },
                { eng: "The most interesting", jpn: "一番興味深い" },
                { eng: "In the world", jpn: "世界で" },
                { eng: "In Japan", jpn: "日本で" }
            ],
            reading1: {
                title: "Task 2: Reading (World Records)",
                instruction: "Read the short article about world records.",
                eng: "<strong>Amazing World Records</strong><br><br>Our world is full of amazing things. Did you know that the blue whale is the biggest animal in the world? It is much bigger than an elephant. The cheetah is the fastest land animal. It can run very quickly to catch its food. When we talk about places, Mount Everest is the highest mountain in the world, and the Nile is the longest river. Learning about the biggest, fastest, and highest things is always the most interesting topic for me!",
                jpn: "<strong>驚くべき世界記録</strong><br><br>私たちの世界は驚くべきことでいっぱいです。シロナガスクジラが世界で一番大きな動物だということを知っていましたか？ゾウよりもはるかに大きいです。チーターは陸上で一番速い動物です。獲物を捕まえるためにとても速く走ることができます。場所について言えば、エベレストは世界で一番高い山であり、ナイル川は一番長い川です。一番大きい、一番速い、一番高いものについて学ぶことは、私にとって常に一番興味深いトピックです！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "I want to travel next year. What is the best country to visit?", jpn: "来年旅行したいんだ。訪れるのに一番良い国はどこかな？" },
                { speaker: "B", eng: "That is a hard question! I think Italy is the best country for food.", jpn: "それは難しい質問だね！食べ物ならイタリアが一番の国だと思うよ。" },
                { speaker: "A", eng: "I love Italian food. What is the most famous city there?", jpn: "イタリア料理大好き。そこではどの都市が一番有名？" },
                { speaker: "B", eng: "Rome is probably the most famous. It has the oldest buildings.", jpn: "おそらくローマが一番有名だよ。一番古い建物があるんだ。" },
                { speaker: "A", eng: "Is it the most expensive city?", jpn: "そこは一番物価が高い都市？" },
                { speaker: "B", eng: "Yes, Rome is very expensive, but the countryside is the cheapest.", jpn: "うん、ローマはとても高いけど、田舎が一番安いよ。" },
                { speaker: "A", eng: "I see. Which season is the best time to go?", jpn: "なるほど。行くのに一番良い季節はいつ？" },
                { speaker: "B", eng: "Spring is the best time. The weather is the most beautiful then.", jpn: "春が一番良い時期だよ。その頃の天気が一番美しいんだ。" },
                { speaker: "A", eng: "Great! I will start saving money now.", jpn: "素晴らしい！今からお金を貯め始めるよ。" },
                { speaker: "B", eng: "Good idea. It will be the best trip ever!", jpn: "いい考えだね。これまでで最高の旅行になるよ！" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about the best things in your hometown or country. Use superlatives like 'the biggest', 'the most famous', or 'the most delicious'. Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "あなたの故郷や国で一番良いものについて、短い文章を書いてください。「the biggest」「the most famous」「the most delicious」などの最上級を使ってください。Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 24,
        title: "Lesson 24: How to give train directions",
        goal: "Ask how to get to a station and give directions using sequencing words and linking actions. <br><span style='font-size:0.9rem; color:var(--text-light);'>(駅への行き方を尋ね、順序を表す言葉や動作をつなぐ言葉を使って電車での道順を教える。)</span>",
        vocab: [
            { eng: "First", jpn: "最初に / まず" },
            { eng: "Then", jpn: "それから / 次に" },
            { eng: "Finally", jpn: "最後に" },
            { eng: "And", jpn: "〜して、そして" },
            { eng: "Take", jpn: "乗る / 利用する" },
            { eng: "Transfer", jpn: "乗り換える" },
            { eng: "Get on", jpn: "乗車する" },
            { eng: "Get off", jpn: "降車する" },
            { eng: "Line", jpn: "路線" },
            { eng: "Stop", jpn: "停車駅" },
            { eng: "Station", jpn: "駅" },
            { eng: "Platform", jpn: "プラットホーム / 番線" },
            { eng: "Straight", jpn: "まっすぐ" },
            { eng: "Turn", jpn: "曲がる" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me, <span class='swappable'>how do I get to Shibuya station?</span>", jpn: "すみません、渋谷駅にはどう行けばいいですか？" },
            { speaker: "B", eng: "<span class='swappable'>First, take the Yamanote Line</span> from platform 2.", jpn: "最初に、2番線から山手線に乗ってください。" },
            { speaker: "A", eng: "<span class='swappable'>Do I need to transfer?</span>", jpn: "乗り換えは必要ですか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>then transfer at Shinjuku station.</span>", jpn: "はい、それから新宿駅で乗り換えてください。" },
            { speaker: "A", eng: "<span class='swappable'>Where do I get off?</span>", jpn: "どこで降りればいいですか？" },
            { speaker: "B", eng: "<span class='swappable'>Finally, get off at the next stop.</span>", jpn: "最後に、次の駅で降りてください。" }
        ],
        expressions: [
            { category: "1. Asking the way (行き方を尋ねる)", options: ["How do I get to Shibuya station?", "Does this train go to Tokyo?", "Which line should I take?"] },
            { category: "2. Sequencing step 1 (手順の1つ目)", options: ["First, take the Yamanote Line.", "First, get on the blue line.", "First, buy a ticket."] },
            { category: "3. Sequencing step 2 (手順の2つ目)", options: ["Then, transfer at Shinjuku.", "Then, change to the subway.", "Then, get off at Tokyo."] },
            { category: "4. Sequencing step 3 (最後の手順)", options: ["Finally, get off at the next stop.", "Finally, walk for two minutes.", "Finally, exit the station."] },
            { category: "5. Linking actions (動作をつなぐ)", options: ["Go straight and turn left.", "Go down the stairs and turn right.", "Get off the train and exit."] },
            { category: "6. Asking about transfers (乗り換えについて尋ねる)", options: ["Do I need to transfer?", "Do I have to change trains?", "Is it a direct train?"] }
        ],
        grammar: {
            point: "Sequencing and Linking Actions (First, Then, Finally / And) - 順序立てと動作の連結",
            explanation: "To give clear directions, use 'First' (最初に), 'Then' (それから), and 'Finally' (最後に) to order the steps. Use 'and' (〜して、そして) to link two related actions together in one sentence. <br><span style='font-size:0.9rem; color:var(--text-light);'>（道順を明確に伝えるために、『First』、『Then』、『Finally』を使って手順を順序立てます。1つの文で2つの関連する動作をつなぐには『and』を使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the sequencing words: '<u>First</u>, take the Yamanote Line', '<u>then</u> transfer...', and '<u>Finally</u>, get off...'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>First</u>, take...』、『<u>then</u> transfer』、『<u>Finally</u>, get off...』といった順序を表す言葉に注目してください。)</span>",
            examples: [
                { eng: "First, buy a ticket.", jpn: "最初に、切符を買ってください。" },
                { eng: "Go straight and turn left.", jpn: "まっすぐ進んで、左に曲がってください。" },
                { eng: "Then, get off at Tokyo.", jpn: "それから、東京駅で降りてください。" }
            ]
        },
        clickingGames: [
            { prompt: "最初に、山手線に乗ってください。", target: "First, take the Yamanote Line.", words: ["First,", "take", "the", "Yamanote", "Line."] },
            { prompt: "それから、新宿駅で乗り換えてください。", target: "Then, transfer at Shinjuku station.", words: ["Then,", "transfer", "at", "Shinjuku", "station."] },
            { prompt: "まっすぐ進んで、左に曲がってください。", target: "Go straight and turn left.", words: ["Go", "straight", "and", "turn", "left."] },
            { prompt: "最後に、次の駅で降りてください。", target: "Finally, get off at the next stop.", words: ["Finally,", "get", "off", "at", "the", "next", "stop."] },
            { prompt: "渋谷駅にはどう行けばいいですか？", target: "How do I get to Shibuya station?", words: ["How", "do", "I", "get", "to", "Shibuya", "station?"] }
        ],
        dropdownGames: [
            { before: "", options: ["First", "Then", "Finally"], answer: "First", after: ", buy a ticket at the machine." },
            { before: "Go straight", options: ["and", "but", "so"], answer: "and", after: " turn left." },
            { before: "", options: ["Then", "First", "After"], answer: "Then", after: ", transfer to the blue line." },
            { before: "", options: ["Finally", "First", "And"], answer: "Finally", after: ", get off at Tokyo." },
            { before: "How do I", options: ["get", "go", "take"], answer: "get", after: " to the station?" },
            { before: "Go down the stairs", options: ["and", "then", "first"], answer: "and", after: " get on the train." },
            { before: "First, take the train bound", options: ["for", "to", "at"], answer: "for", after: " Osaka." },
            { before: "Do I need to", options: ["transfer", "take", "go"], answer: "transfer", after: "?" },
            { before: "Where do I get", options: ["off", "out", "down"], answer: "off", after: "?" },
            { before: "Then, change trains at the", options: ["next", "near", "soon"], answer: "next", after: " stop." }
        ],
        roleplay: {
            a: "You are a tourist. Ask someone at the station how to get to a famous place. (あなたは観光客です。駅で誰かに有名な場所への行き方を尋ねてください。)",
            b: "You are a local. Give the tourist 3-step directions using 'First', 'Then', 'Finally', and link two actions using 'and'. (地元の人役です。観光客に『First』『Then』『Finally』を使って3段階の道順を教え、『and』を使って2つの動作をつなげてください。)"
        },
        homework: {
            vocab: [
                { eng: "Subway", jpn: "地下鉄" },
                { eng: "Bullet train", jpn: "新幹線" },
                { eng: "Express", jpn: "急行" },
                { eng: "Local", jpn: "各駅停車" },
                { eng: "Gate", jpn: "改札 / ゲート" },
                { eng: "Exit", jpn: "出口" },
                { eng: "Entrance", jpn: "入口" },
                { eng: "Stairs", jpn: "階段" },
                { eng: "Escalator", jpn: "エスカレーター" },
                { eng: "Elevator", jpn: "エレベーター" },
                { eng: "Walk", jpn: "歩く" },
                { eng: "Cross", jpn: "渡る" },
                { eng: "Direct", jpn: "直通の" },
                { eng: "Wait", jpn: "待つ" }
            ],
            reading1: {
                title: "Task 2: Reading (Transit App Message)",
                instruction: "Read the message from a friend giving directions.",
                eng: "<strong>To:</strong> Ken<br><strong>From:</strong> Sarah<br><br>Hi Ken! Here are the directions to my house. First, take the Chuo Line from Shinjuku Station. Be careful, do not take the express train! Take the local train from platform 4. You don't need to transfer. Then, stay on the train and get off at the fifth stop. Finally, leave the station through the North Exit and turn right. My house is right across the street. See you soon!",
                jpn: "<strong>宛先：</strong> ケン<br><strong>差出人：</strong> サラ<br><br>こんにちはケン！私の家への道順だよ。最初に、新宿駅から中央線に乗ってね。気をつけて、急行には乗らないで！4番線から各駅停車に乗ってね。乗り換える必要はないよ。それから、そのまま電車に乗って5つ目の駅で降りて。最後に、北口から駅を出て右に曲がってね。私の家は通りのすぐ向かいだよ。また後で！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Excuse me. Do you speak English?", jpn: "すみません。英語を話せますか？" },
                { speaker: "B", eng: "Yes, a little. How can I help you?", jpn: "はい、少しだけ。どうしましたか？" },
                { speaker: "A", eng: "I am trying to get to the airport. How do I get there?", jpn: "空港に行きたいのですが。どう行けばいいですか？" },
                { speaker: "B", eng: "First, you should take the Airport Express Line. It is very fast.", jpn: "最初に、空港急行線に乗るべきです。とても速いですよ。" },
                { speaker: "A", eng: "Okay, thank you. Do I need to transfer?", jpn: "わかりました、ありがとう。乗り換えは必要ですか？" },
                { speaker: "B", eng: "Yes. Then, transfer to the local train at Central Station.", jpn: "はい。それから、セントラル駅で各駅停車に乗り換えてください。" },
                { speaker: "A", eng: "That is great. Where do I catch the first train?", jpn: "それは素晴らしい。最初の電車にはどこで乗れますか？" },
                { speaker: "B", eng: "Go down those stairs and get on the train at platform 1.", jpn: "あの階段を降りて、1番線で電車に乗ってください。" },
                { speaker: "A", eng: "Thank you so much! Where do I get off?", jpn: "本当にありがとうございます！どこで降りればいいですか？" },
                { speaker: "B", eng: "Finally, get off at the last stop. You can't miss it!", jpn: "最後に、終点で降りてください。見逃すことはないですよ！" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph explaining how to get from your nearest train station to a famous place in your city. Use sequencing words like 'First', 'Then', and 'Finally', and link two actions using 'and' (e.g., 'go straight and turn left'). Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "最寄りの駅からあなたの街の有名な場所への行き方を説明する短い文章を書いてください。「First」「Then」「Finally」などの順序を表す言葉を使い、「and」を使って2つの動作をつなげてください（例：「go straight and turn left」）。Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 26,
        title: "Lesson 26: How to explain why",
        goal: "Give reasons for your actions or feelings using 'because'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『because』を使って、自分の行動や感情の理由を説明する。)</span>",
        vocab: [
            { eng: "Why", jpn: "なぜ / どうして" },
            { eng: "Because", jpn: "なぜなら / 〜だから" },
            { eng: "Tired", jpn: "疲れた" },
            { eng: "Hungry", jpn: "お腹が空いた" },
            { eng: "Thirsty", jpn: "喉が渇いた" },
            { eng: "Happy", jpn: "幸せな / 嬉しい" },
            { eng: "Angry", jpn: "怒った" },
            { eng: "Sad", jpn: "悲しい" },
            { eng: "Late", jpn: "遅刻した / 遅い" },
            { eng: "Early", jpn: "早い" },
            { eng: "Sleep", jpn: "眠る" },
            { eng: "Eat", jpn: "食べる" },
            { eng: "Drink", jpn: "飲む" },
            { eng: "Study", jpn: "勉強する" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Why are you so tired today?</span>", jpn: "今日はなぜそんなに疲れているのですか？" },
            { speaker: "B", eng: "<span class='swappable'>I am tired because I worked late last night.</span>", jpn: "昨夜遅くまで働いたので疲れています。" },
            { speaker: "A", eng: "<span class='swappable'>Are you going to sleep early tonight?</span>", jpn: "今夜は早く寝ますか？" },
            { speaker: "B", eng: "No, I can't.", jpn: "いいえ、できません。" },
            { speaker: "A", eng: "<span class='swappable'>Why not?</span>", jpn: "なぜですか？" },
            { speaker: "B", eng: "<span class='swappable'>Because I have to study for a test!</span>", jpn: "テストの勉強をしなければならないからです！" }
        ],
        expressions: [
            { category: "1. Asking for a reason (理由を尋ねる)", options: ["Why are you so tired today?", "Why are you late?", "Why is he angry?"] },
            { category: "2. Giving a short reason (短い理由を答える)", options: ["Because I worked late last night.", "Because I am hungry.", "Because it is raining."] },
            { category: "3. Linking a feeling and a reason (感情と理由をつなぐ)", options: ["I am tired because I worked late.", "I am happy because it is Friday.", "She is sad because she lost her bag."] },
            { category: "4. Asking negative 'Why' (否定の理由を尋ねる)", options: ["Why not?", "Why can't you go?", "Why didn't you call?"] },
            { category: "5. Explaining actions (行動の理由を説明する)", options: ["I am eating because I am hungry.", "I am drinking water because I am thirsty.", "I have to study for a test."] },
            { category: "6. Expressing physical states (身体の状態を伝える)", options: ["I am so tired.", "I feel sleepy.", "He is very thirsty."] }
        ],
        grammar: {
            point: "Subordinate clauses with 'because' - 'because' を使った理由の説明",
            explanation: "We use the word 'why' to ask for a reason. We use 'because' to give the answer. 'Because' connects a situation (like being tired) with the reason for it (like working late). <br><span style='font-size:0.9rem; color:var(--text-light);'>（理由を尋ねる時には『why』を使い、答える時には『because』を使います。『because』は、ある状況（疲れているなど）と、その理由（遅くまで働いたなど）を1つの文につなぎます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the two ideas are connected: 'I am tired <u>because</u> I worked late.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『I am tired <u>because</u> I worked late.』のように、2つの考えがどのようにつながっているかに注目してください。)</span>",
            examples: [
                { eng: "Why are you late? Because I missed the train.", jpn: "なぜ遅刻したのですか？電車に乗り遅れたからです。" },
                { eng: "I am eating an apple because I am hungry.", jpn: "お腹が空いているので、りんごを食べています。" },
                { eng: "We stayed home because it was cold.", jpn: "寒かったので、私たちは家にいました。" }
            ]
        },
        clickingGames: [
            { prompt: "今日はなぜそんなに疲れているのですか？", target: "Why are you so tired today?", words: ["Why", "are", "you", "so", "tired", "today?"] },
            { prompt: "昨夜遅くまで働いたからです。", target: "Because I worked late last night.", words: ["Because", "I", "worked", "late", "last", "night."] },
            { prompt: "お腹が空いているので食べています。", target: "I am eating because I am hungry.", words: ["I", "am", "eating", "because", "I", "am", "hungry."] },
            { prompt: "今日は金曜日なので私は嬉しいです。", target: "I am happy because it is Friday.", words: ["I", "am", "happy", "because", "it", "is", "Friday."] },
            { prompt: "なぜ遅刻したのですか？", target: "Why are you late?", words: ["Why", "are", "you", "late?"] }
        ],
        dropdownGames: [
            { before: "", options: ["Why", "What", "When"], answer: "Why", after: " are you so tired?" },
            { before: "I am tired", options: ["because", "and", "but"], answer: "because", after: " I worked late." },
            { before: "", options: ["Why", "Who", "Where"], answer: "Why", after: " is she crying?" },
            { before: "I am drinking water because I am", options: ["thirsty", "hungry", "tired"], answer: "thirsty", after: "." },
            { before: "He is eating because he is", options: ["hungry", "happy", "sad"], answer: "hungry", after: "." },
            { before: "I am happy", options: ["because", "why", "to"], answer: "because", after: " it is my birthday." },
            { before: "Why", options: ["are", "is", "do"], answer: "are", after: " you late today?" },
            { before: "", options: ["Because", "Why", "And"], answer: "Because", after: " I missed the bus." },
            { before: "I want to sleep because I", options: ["am", "do", "have"], answer: "am", after: " tired." },
            { before: "Why", options: ["not", "no", "don't"], answer: "not", after: "?" }
        ],
        roleplay: {
            a: "You see your friend and they look very happy. Ask them why they are happy, and ask follow-up questions. (友達に会うと、とても嬉しそうにしています。なぜ嬉しいのか尋ね、さらに質問をしてください。)",
            b: "You are the friend. Explain that you are happy because of some good news (e.g., you got a new job, bought a new game). Start your answers with 'Because...'. (友達役です。良いニュース（例：新しい仕事が決まった、新しいゲームを買った）があったので嬉しいと説明してください。答えは『Because...』で始めてください。)"
        },
        homework: {
            vocab: [
                { eng: "Miss", jpn: "逃す / 乗り遅れる" },
                { eng: "Bus", jpn: "バス" },
                { eng: "Train", jpn: "電車" },
                { eng: "Rain", jpn: "雨が降る" },
                { eng: "Snow", jpn: "雪が降る" },
                { eng: "Cold", jpn: "寒い" },
                { eng: "Hot", jpn: "暑い" },
                { eng: "Sick", jpn: "具合が悪い / 病気の" },
                { eng: "Medicine", jpn: "薬" },
                { eng: "Stay", jpn: "滞在する / とどまる" },
                { eng: "Home", jpn: "家" },
                { eng: "Party", jpn: "パーティー" },
                { eng: "Cry", jpn: "泣く" },
                { eng: "Smile", jpn: "微笑む" }
            ],
            reading1: {
                title: "Task 2: Reading (A Diary Entry)",
                instruction: "Read the short diary entry about a difficult day.",
                eng: "<strong>Tuesday, October 14th</strong><br><br>Today was not a good day. I stayed home because I was sick. I didn't go to work because I had a bad headache and a fever. I slept a lot in the morning because I was very tired. In the afternoon, my friend called me to invite me to a party. I said no because I need to rest. I am drinking a lot of water and taking medicine. I hope I feel better tomorrow because I want to go outside!",
                jpn: "<strong>10月14日 火曜日</strong><br><br>今日は良い一日ではありませんでした。具合が悪かったので、家にいました。ひどい頭痛と熱があったので、仕事には行きませんでした。とても疲れていたので、午前中はたくさん寝ました。午後、友達からパーティーに誘う電話がありました。休む必要があるので、私は断りました。水をたくさん飲み、薬を飲んでいます。外に出たいので、明日には体調が良くなっていることを願っています！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Why are you wearing a thick coat?", jpn: "なぜ厚いコートを着ているのですか？" },
                { speaker: "B", eng: "Because it is very cold outside.", jpn: "外がとても寒いからです。" },
                { speaker: "A", eng: "Really? But it is sunny today.", jpn: "本当に？でも今日は晴れていますよ。" },
                { speaker: "B", eng: "Yes, it is sunny, but the wind is very strong. Why are you wearing a t-shirt?", jpn: "はい、晴れていますが、風がとても強いんです。あなたはなぜTシャツを着ているのですか？" },
                { speaker: "A", eng: "Because it is warm inside this room.", jpn: "この部屋の中は暖かいからです。" },
                { speaker: "B", eng: "That is true. Are you going to the park later?", jpn: "確かにそうですね。後で公園に行きますか？" },
                { speaker: "A", eng: "No, I am not going.", jpn: "いいえ、行きません。" },
                { speaker: "B", eng: "Why not?", jpn: "なぜ行かないのですか？" },
                { speaker: "A", eng: "Because I have a lot of homework to do.", jpn: "やらなければならない宿題がたくさんあるからです。" },
                { speaker: "B", eng: "Oh, I see. Good luck with your homework!", jpn: "ああ、なるほど。宿題頑張ってくださいね！" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about a time you were very happy, very angry, or very tired. Write three sentences explaining WHY you felt that way using 'because'. Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "とても嬉しかった時、とても怒った時、またはとても疲れた時についての短い文章を書いてください。『because』を使って、なぜそのように感じたのかを説明する文を3つ書いてください。Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 27,
        title: "Lesson 27: How to discuss options and decide",
        goal: "Discuss different options and make a decision by weighing good and bad points. <br><span style='font-size:0.9rem; color:var(--text-light);'>(良い点と悪い点を比較して選択肢について話し合い、決定を下す。)</span>",
        vocab: [
            { eng: "Hungry", jpn: "お腹が空いた" },
            { eng: "Crowded", jpn: "混雑した" },
            { eng: "Quiet", jpn: "静かな" },
            { eng: "Close", jpn: "近い" },
            { eng: "Far", jpn: "遠い" },
            { eng: "Cheap", jpn: "安い" },
            { eng: "Expensive", jpn: "高い（値段が）" },
            { eng: "Delicious", jpn: "美味しい" },
            { eng: "Restaurant", jpn: "レストラン" },
            { eng: "Lunch", jpn: "昼食" },
	{ eng: "Interesting", jpn: "面白い / 興味深い" },
	{ eng: "Boring", jpn: "つまらない" },
            { eng: "Maybe", jpn: "たぶん / もしかすると" },
            { eng: "Perfect", jpn: "完璧な" }
        ],
        dialogue: [
            { speaker: "A", eng: "I am very hungry. <span class='swappable'>Where should we eat lunch?</span>", jpn: "とてもお腹が空きました。どこで昼食を食べましょうか？" },
            { speaker: "B", eng: "<span class='swappable'>How about the Italian restaurant?</span>", jpn: "イタリアンレストランはどうですか？" },
            { speaker: "A", eng: "<span class='swappable'>The food is good, but it is always very crowded.</span>", jpn: "食べ物は美味しいですが、いつもとても混んでいます。" },
            { speaker: "B", eng: "That is true. <span class='swappable'>Do you want to try the new sandwich shop?</span>", jpn: "確かにそうですね。新しいサンドイッチ屋さんを試してみますか？" },
            { speaker: "A", eng: "<span class='swappable'>I want to, but is it expensive?</span>", jpn: "そうしたいですが、高いですか？" },
            { speaker: "B", eng: "No, <span class='swappable'>it is cheap and very close.</span>", jpn: "いいえ、安くてとても近いですよ。" },
            { speaker: "A", eng: "Perfect. Let's go there!", jpn: "完璧ですね。そこに行きましょう！" }
        ],
        expressions: [
            { category: "1. Asking for suggestions (提案を求める)", options: ["Where should we eat lunch?", "What should we do today?", "Where should we go?"] },
            { category: "2. Making a suggestion (提案する)", options: ["How about the Italian restaurant?", "Let's go to the park.", "How about pizza?"] },
            { category: "3. Pointing out a problem (問題点を指摘する)", options: ["The food is good, but it is very crowded.", "It is a nice place, but it is far.", "It is beautiful, but it is expensive."] },
            { category: "4. Showing desire with a concern (懸念があるが興味を示す)", options: ["I want to, but is it expensive?", "I want to go, but I am tired.", "It sounds good, but I have no time."] },
            { category: "5. Proposing an alternative (代案を出す)", options: ["Do you want to try the new sandwich shop?", "How about a different place?", "Let's go somewhere else."] },
            { category: "6. Agreeing to the final plan (最終決定に同意する)", options: ["Perfect. Let's go there!", "Sounds good to me.", "That is a great idea."] }
        ],
        grammar: {
            point: "Conjunction 'but' - 接続詞の 'but' (しかし / 〜ですが)",
            explanation: "We use 'but' to connect two contrasting ideas in one sentence. It is very natural to use 'but' when discussing options to show a positive point and a negative point together (e.g., cheap BUT far). <br><span style='font-size:0.9rem; color:var(--text-light);'>（『but』は、1つの文の中で2つの対照的な考えをつなぐために使います。選択肢について話し合う際に、良い点と悪い点を一緒に示す（例：安いけれど遠い）のにとても自然な表現です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how 'but' adds a problem to a good idea: 'The food is good, <u>but</u> it is always very crowded.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：良いアイデアに対して『but』がどのように問題点を付け加えているかに注目してください：『The food is good, <u>but</u> it is always very crowded.』)</span>",
            examples: [
                { eng: "I like this shirt, but it is too small.", jpn: "このシャツは好きですが、小さすぎます。" },
                { eng: "The hotel is cheap, but the room is dirty.", jpn: "そのホテルは安いですが、部屋が汚いです。" },
                { eng: "I want to play tennis, but it is raining.", jpn: "私はテニスをしたいですが、雨が降っています。" }
            ]
        },
        clickingGames: [
            { prompt: "食べ物は美味しいですが、とても混んでいます。", target: "The food is good, but it is very crowded.", words: ["The", "food", "is", "good,", "but", "it", "is", "very", "crowded."] },
            { prompt: "どこで昼食を食べましょうか？", target: "Where should we eat lunch?", words: ["Where", "should", "we", "eat", "lunch?"] },
            { prompt: "そうしたいですが、高いですか？", target: "I want to, but is it expensive?", words: ["I", "want", "to,", "but", "is", "it", "expensive?"] },
            { prompt: "そのホテルは安いですが、遠いです。", target: "The hotel is cheap, but it is far.", words: ["The", "hotel", "is", "cheap,", "but", "it", "is", "far."] },
            { prompt: "私は行きたいですが、時間がありません。", target: "I want to go, but I have no time.", words: ["I", "want", "to", "go,", "but", "I", "have", "no", "time."] }
        ],
        dropdownGames: [
            { before: "The food is delicious,", options: ["but", "and", "because"], answer: "but", after: " it is very expensive." },
            { before: "Where", options: ["should", "do", "are"], answer: "should", after: " we go today?" },
            { before: "How", options: ["about", "for", "to"], answer: "about", after: " the Italian restaurant?" },
            { before: "It is a beautiful dress,", options: ["but", "or", "and"], answer: "but", after: " I don't need it." },
            { before: "I want to buy the shoes, but I", options: ["don't", "am", "not"], answer: "don't", after: " have enough money." },
            { before: "The movie is long, but it is very", options: ["interesting", "boring", "bad"], answer: "interesting", after: "." },
            { before: "I", options: ["want", "like", "have"], answer: "want", after: " to go to the party, but I am sick." },
            { before: "This computer is cheap, but it is very", options: ["slow", "fast", "good"], answer: "slow", after: "." },
            { before: "Do you", options: ["want", "like", "how"], answer: "want", after: " to try the new cafe?" },
            { before: "Perfect. Let's", options: ["go", "going", "goes"], answer: "go", after: " there!" }
        ],
        roleplay: {
            a: "You are hungry. Ask your friend where you should eat, and suggest a place (like a pizza shop or sushi restaurant). (お腹が空いています。友達にどこで食べるべきか尋ね、お店（ピザ屋や寿司屋など）を提案してください。)",
            b: "You are the friend. Point out a problem with their suggestion using 'but' (e.g., 'I like pizza, but it is expensive'). Suggest a different place. (友達役です。相手の提案に対して『but』を使って問題点を指摘してください（例：「ピザは好きだけど、高い」）。別の場所を提案してください。)"
        },
        homework: {
            vocab: [
                { eng: "Warm", jpn: "暖かい" },
                { eng: "Cold", jpn: "冷たい / 寒い" },
                { eng: "Noisy", jpn: "うるさい / 騒がしい" },
                { eng: "Clean", jpn: "清潔な / きれいな" },
                { eng: "Dirty", jpn: "汚い" },
                { eng: "Kind", jpn: "親切な" },
                { eng: "Spicy", jpn: "辛い" },
                { eng: "Sweet", jpn: "甘い" },
                { eng: "Movie", jpn: "映画" },
                { eng: "Hotel", jpn: "ホテル" },
                { eng: "Apartment", jpn: "アパート" },
                { eng: "Rent", jpn: "家賃" },
		{ eng: "Menu", jpn: "メニュー" },
                { eng: "Review", jpn: "レビュー / 評価" }
            ],
            reading1: {
                title: "Task 2: Reading (A Restaurant Review)",
                instruction: "Read the short review of a new restaurant.",
                eng: "<strong>Mario's Pizza House - ★★★☆☆</strong><br><br>I went to Mario's Pizza House yesterday. I really like pizza, but my experience here was mixed. The food is very delicious, but the restaurant is very noisy. The pizza was big and cheap, but it was cold when it arrived. The staff is friendly, but the service is very slow. I want to go again, but maybe I will order takeout next time.",
                jpn: "<strong>マリオのピザハウス - ★★★☆☆</strong><br><br>昨日、マリオのピザハウスに行きました。私はピザがとても好きですが、ここでの体験は複雑でした。食べ物はとても美味しいですが、レストランはとてもうるさいです。ピザは大きくて安かったですが、到着した時は冷めていました。スタッフはフレンドリーですが、サービスはとても遅いです。また行きたいですが、次回はおそらくテイクアウトを注文します。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hey, look at this apartment! Do you think I should rent it?", jpn: "ねえ、このアパート見て！ここを借りるべきだと思う？" },
                { speaker: "B", eng: "Let me see. Wow, the living room is beautiful.", jpn: "見せて。わあ、リビングルームは美しいね。" },
                { speaker: "A", eng: "Yes, it is very beautiful, but the bedroom is small.", jpn: "うん、とても美しいんだけど、寝室が小さいんだ。" },
                { speaker: "B", eng: "Is the rent expensive?", jpn: "家賃は高いの？" },
                { speaker: "A", eng: "No, the rent is cheap. But it is very far from the station.", jpn: "ううん、家賃は安いよ。でも、駅からとても遠いんだ。" },
                { speaker: "B", eng: "That is a problem. You take the train every day.", jpn: "それは問題だね。毎日電車に乗るんだから。" },
                { speaker: "A", eng: "Exactly. The price is great, but the location is bad.", jpn: "その通り。価格は素晴らしいんだけど、場所が悪いんだ。" },
                { speaker: "B", eng: "I understand. Do you want to look at another apartment?", jpn: "わかるよ。別のアパートも見てみる？" },
                { speaker: "A", eng: "Yes, please. Let's check the next one on the list.", jpn: "うん、お願い。リストの次の物件をチェックしよう。" }
            ],
            writingTask: {
                promptEng: "Think about your favorite movie, book, or restaurant. Write a short paragraph reviewing it. Use 'but' to contrast a good point and a bad point (e.g., 'The food is good, but it is expensive'). Write three sentences total. Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "あなたのお気に入りの映画、本、またはレストランについて考えてください。それについてレビューする短い文章を書いてください。『but』を使って良い点と悪い点を対比させてください（例：食べ物は美味しいですが、高いです）。全部で3つの文を書いてください。Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 28,
        title: "Lesson 28: How to talk about future intentions",
        goal: "State your plans and intentions for the future using 'will' and 'won't'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『will』や『won't』を使って、将来の予定や意図を伝える。)</span>",
        vocab: [
            { eng: "Tomorrow", jpn: "明日" },
            { eng: "Next week", jpn: "来週" },
            { eng: "Next weekend", jpn: "来週末" },
            { eng: "Visit", jpn: "訪れる / 訪問する" },
            { eng: "Stay", jpn: "滞在する / とどまる" },
            { eng: "Relax", jpn: "リラックスする" },
            { eng: "Drive", jpn: "運転する" },
            { eng: "Take (a train)", jpn: "（電車に）乗る" },
            { eng: "Will", jpn: "〜するつもりだ" },
            { eng: "Won't", jpn: "〜しないつもりだ" },
            { eng: "Parents", jpn: "両親" },
            { eng: "Anything", jpn: "何か / 何も（否定文で）" },
            { eng: "Special", jpn: "特別な" },
            { eng: "Anywhere", jpn: "どこへでも / どこへも（否定文で）" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>What will you do next weekend?</span>", jpn: "来週末は何をしますか？" },
            { speaker: "B", eng: "<span class='swappable'>I will visit my parents in Tokyo.</span>", jpn: "東京の両親を訪ねるつもりです。" },
            { speaker: "A", eng: "Nice! <span class='swappable'>Will you drive there?</span>", jpn: "いいですね！そこへは運転して行きますか？" },
            { speaker: "B", eng: "No, <span class='swappable'>I won't drive.</span> <span class='swappable'>I'll take the train.</span>", jpn: "いいえ、運転はしません。電車に乗るつもりです。" },
            { speaker: "A", eng: "That sounds easy. <span class='swappable'>I will stay home and relax.</span>", jpn: "それは楽そうですね。私は家にとどまってリラックスするつもりです。" },
            { speaker: "B", eng: "Good idea. <span class='swappable'>I won't do anything special either.</span>", jpn: "いい考えですね。私も特別なことは何もするつもりはありません。" }
        ],
        expressions: [
            { category: "1. Asking about plans (予定を尋ねる)", options: ["What will you do next weekend?", "What will you do tomorrow?", "Will you work on Sunday?"] },
            { category: "2. Stating a positive intention (肯定の予定を伝える)", options: ["I will visit my parents.", "I will stay home.", "She will travel to Kyoto."] },
            { category: "3. Using the short form 'll (短縮形 'll を使う)", options: ["I'll take the train.", "We'll eat dinner at a restaurant.", "He'll call you later."] },
            { category: "4. Stating a negative intention (否定の予定を伝える)", options: ["I won't drive.", "I won't go out today.", "We will not work tomorrow."] },
            { category: "5. Asking yes/no questions (Yes/Noで答える質問)", options: ["Will you drive there?", "Will she come to the party?", "Will they take the bus?"] },
            { category: "6. Expressing lack of plans (予定がないことを伝える)", options: ["I won't do anything special.", "I won't go anywhere.", "I will just relax."] }
        ],
        grammar: {
            point: "Future intentions ('will', ''ll', 'won't') - 未来の意図（will, 'll, won't）",
            explanation: "We use 'will' + base verb to talk about plans, intentions, and things we decide to do in the future. We often use the short form ''ll' when speaking (I'll = I will). The negative form is 'will not', which usually becomes 'won't'. <br><span style='font-size:0.9rem; color:var(--text-light);'>（将来の予定や意図、これからしようと決めたことについて話すときは『will + 動詞の原形』を使います。話すときは短縮形の『'll』（I'll = I will）をよく使います。否定形は『will not』で、通常は『won't』になります。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the different forms: 'I <u>will</u> stay home', 'I<u>'ll</u> take the train', and 'I <u>won't</u> drive'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『I <u>will</u> stay...』、『I<u>'ll</u> take...』、『I <u>won't</u> drive』といった異なる形に注目してください。)</span>",
            examples: [
                { eng: "I'll see you tomorrow.", jpn: "また明日お会いしましょう。（明日会うつもりです）" },
                { eng: "She won't buy the expensive bag.", jpn: "彼女はその高いバッグを買うつもりはありません。" },
                { eng: "Will they play soccer next week?", jpn: "彼らは来週サッカーをするつもりですか？" }
            ]
        },
        clickingGames: [
            { prompt: "来週末は何をしますか？", target: "What will you do next weekend?", words: ["What", "will", "you", "do", "next", "weekend?"] },
            { prompt: "私は東京の両親を訪ねるつもりです。", target: "I will visit my parents in Tokyo.", words: ["I", "will", "visit", "my", "parents", "in", "Tokyo."] },
            { prompt: "私は運転しません。電車に乗るつもりです。", target: "I won't drive. I'll take the train.", words: ["I", "won't", "drive.", "I'll", "take", "the", "train."] },
            { prompt: "そこへは運転して行きますか？", target: "Will you drive there?", words: ["Will", "you", "drive", "there?"] },
            { prompt: "私は特別なことは何もするつもりはありません。", target: "I won't do anything special.", words: ["I", "won't", "do", "anything", "special."] }
        ],
        dropdownGames: [
            { before: "What", options: ["will", "do", "are"], answer: "will", after: " you do tomorrow?" },
            { before: "I", options: ["will", "wills", "willing"], answer: "will", after: " visit my friends next week." },
            { before: "She", options: ["'ll", "'s", "'re"], answer: "'ll", after: " stay home and relax." },
            { before: "We", options: ["won't", "doesn't", "aren't"], answer: "won't", after: " go out tonight." },
            { before: "", options: ["Will", "Do", "Are"], answer: "Will", after: " you take the train to Tokyo?" },
            { before: "No, I", options: ["won't", "will", "don't"], answer: "won't", after: ". I will drive." },
            { before: "He will", options: ["play", "plays", "playing"], answer: "play", after: " tennis on Saturday." },
            { before: "They", options: ["will not", "not will", "no will"], answer: "will not", after: " buy the car." },
            { before: "I'll", options: ["call", "calls", "calling"], answer: "call", after: " you tomorrow." },
            { before: "I won't do", options: ["anything", "something", "nothing"], answer: "anything", after: " special this weekend." }
        ],
        roleplay: {
            a: "Ask your friend what they will do for the upcoming holiday. Ask at least one follow-up 'Will you...?' question (e.g., Will you go with your family?). (今度の休日に何をする予定か友達に尋ねてください。「Will you...?」を使った追加の質問を最低1つしてください（例：家族と一緒に行きますか？）。)",
            b: "You are the friend. Answer the questions. Tell them two things you will do (using 'will' or ''ll') and one thing you won't do. (友達役です。質問に答えてください。する予定のことを2つ（『will』や『'll』を使って）、しない予定のことを1つ伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Next month", jpn: "来月" },
                { eng: "Next year", jpn: "来年" },
                { eng: "Holiday", jpn: "休日 / 祝日" },
                { eng: "Vacation", jpn: "休暇" },
                { eng: "Travel", jpn: "旅行する" },
                { eng: "Fly", jpn: "飛行機で行く / 飛ぶ" },
                { eng: "Book (a hotel)", jpn: "（ホテルを）予約する" },
                { eng: "Rent (a car)", jpn: "（車を）借りる" },
                { eng: "Pack", jpn: "荷造りする" },
                { eng: "Leave", jpn: "出発する / 去る" },
                { eng: "Arrive", jpn: "到着する" },
                { eng: "Together", jpn: "一緒に" },
                { eng: "Alone", jpn: "一人で" },
                { eng: "Wait", jpn: "待つ" }
            ],
            reading1: {
                title: "Task 2: Reading (Vacation Plans)",
                instruction: "Read the email about a friend's future vacation plans.",
                eng: "<strong>To:</strong> Emily<br><strong>From:</strong> Jake<br><br>Hi Emily,<br><br>Next month, I will have a long vacation. I'll travel to Hokkaido with my brother. We will go there for five days. We'll fly from Tokyo on Monday morning. I won't drive in Hokkaido because of the snow. We will take trains and buses instead. We'll eat a lot of delicious seafood and relax in the hot springs. We won't check our work emails at all! I will buy you a souvenir.<br><br>See you soon,<br>Jake",
                jpn: "<strong>宛先：</strong> エミリー<br><strong>差出人：</strong> ジェイク<br><br>こんにちは、エミリー。<br><br>来月、僕は長い休暇をとります。兄と一緒に北海道へ旅行するつもりです。5日間そこへ行きます。月曜日の朝に東京から飛行機で行く予定です。雪があるので、北海道では運転しないつもりです。代わりに電車とバスを利用します。美味しいシーフードをたくさん食べて、温泉でリラックスするつもりです。仕事のメールは一切チェックしないつもりです！君にお土産を買ってくるね。<br><br>またね、<br>ジェイク"
            },
            expandedDialogue: [
                { speaker: "A", eng: "What are your plans for the winter vacation?", jpn: "冬休みの予定は何ですか？" },
                { speaker: "B", eng: "I'll go back to my hometown. How about you?", jpn: "実家に帰るつもりです。あなたは？" },
                { speaker: "A", eng: "I won't go anywhere. I will stay in the city.", jpn: "私はどこへも行かないつもりです。都市にとどまります。" },
                { speaker: "B", eng: "Will you work during the vacation?", jpn: "休暇中は働くつもりですか？" },
                { speaker: "A", eng: "No, I won't work. I'll just read books and watch movies.", jpn: "いいえ、働きません。ただ本を読んだり映画を見たりするつもりです。" },
                { speaker: "B", eng: "That sounds very relaxing.", jpn: "とてもリラックスできそうですね。" },
                { speaker: "A", eng: "Yes. Will you meet your old friends in your hometown?", jpn: "はい。実家では古い友達に会うつもりですか？" },
                { speaker: "B", eng: "Yes, we will have a big dinner together.", jpn: "はい、一緒に大きな夕食会をする予定です。" },
                { speaker: "A", eng: "Have a great time! I'll text you next week.", jpn: "楽しい時間を過ごしてくださいね！来週メッセージを送るつもりです。" },
                { speaker: "B", eng: "Thanks! I'll send you some pictures.", jpn: "ありがとう！写真をいくつか送るね。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your plans for next weekend. Write three sentences. Use 'will', ''ll', and 'won't' to explain what you plan to do and what you plan not to do. Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "来週末の予定について短い文章を書いてください。3つの文を書いてください。『will』『'll』『won't』を使って、する予定のことと、しない予定のことを説明してください。Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 29,
        title: "Lesson 29: How to make an offer",
        goal: "Offer help, food, or services to other people politely using 'Can I...?'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『Can I...?』を使って、他の人に手伝いや食べ物などを丁寧に申し出る。)</span>",
        vocab: [
            { eng: "Help", jpn: "手伝う / 助ける" },
            { eng: "Carry", jpn: "運ぶ" },
            { eng: "Open", jpn: "開ける" },
            { eng: "Close", jpn: "閉める" },
            { eng: "Get", jpn: "持ってくる / 取ってくる" },
            { eng: "Take", jpn: "受け取る / 持っていく" },
            { eng: "Show", jpn: "見せる / 案内する" },
            { eng: "Bag", jpn: "カバン / 袋" },
            { eng: "Coat", jpn: "コート" },
            { eng: "Water", jpn: "水" },
            { eng: "Drink", jpn: "飲み物 / 飲む" },
            { eng: "Heavy", jpn: "重い" },
            { eng: "Kind", jpn: "親切な" },
            { eng: "Fine", jpn: "大丈夫な / 結構な" }
        ],
        dialogue: [
            { speaker: "A", eng: "Welcome! You look very tired. <span class='swappable'>Can I help you with those bags?</span>", jpn: "いらっしゃい！とても疲れているようですね。そのカバンを手伝いましょうか？" },
            { speaker: "B", eng: "<span class='swappable'>Yes, please.</span> They are very heavy.", jpn: "はい、お願いします。とても重いんです。" },
            { speaker: "A", eng: "I will put them on the table. <span class='swappable'>Can I get you some water?</span>", jpn: "テーブルの上に置きますね。お水をお持ちしましょうか？" },
            { speaker: "B", eng: "<span class='swappable'>Thank you. That is very kind.</span>", jpn: "ありがとうございます。とてもご親切に。" },
            { speaker: "A", eng: "Here you go. <span class='swappable'>Can I open the window?</span>", jpn: "どうぞ。窓を開けましょうか？" },
            { speaker: "B", eng: "<span class='swappable'>No, thank you. I am fine.</span>", jpn: "いいえ、結構です。大丈夫ですよ。" }
        ],
        expressions: [
            { category: "1. Offering help with items (物についての手伝いを申し出る)", options: ["Can I help you with those bags?", "Can I take your coat?", "Can I carry this for you?"] },
            { category: "2. Offering food or drinks (飲食物を勧める)", options: ["Can I get you some water?", "Can I get you a drink?", "Can I bring you some coffee?"] },
            { category: "3. Offering to adjust the room (部屋の調整を申し出る)", options: ["Can I open the window?", "Can I close the door?", "Can I get you a chair?"] },
            { category: "4. Accepting an offer (申し出を受け入れる)", options: ["Yes, please.", "Thank you, that is very kind.", "Yes, thank you."] },
            { category: "5. Declining an offer (申し出を断る)", options: ["No, thank you. I am fine.", "I am okay, thanks.", "No, that's okay."] },
            { category: "6. Handing something over (物を渡す)", options: ["Here you go.", "Here it is.", "Here is your water."] }
        ],
        grammar: {
            point: "Modal verb 'can' (Making an offer) - 助動詞の 'can' (申し出・手伝い)",
            explanation: "We use 'Can I...?' followed by a base verb to offer help or offer things to other people politely. (Note: This is different from asking for permission. Here, you are volunteering to do something nice for someone). <br><span style='font-size:0.9rem; color:var(--text-light);'>（『Can I + 動詞の原形...?』を使って、手伝いや物を他の人に丁寧に申し出ます。※許可を求める表現とは異なり、ここでは相手のために何か親切なことを自ら買って出ることを意味します。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how A offers to do three different things for B: '<u>Can I help</u> you...?', '<u>Can I get</u> you...?', and '<u>Can I open</u>...?' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：AがBのためにどのように3つの異なる申し出をしているかに注目してください：『<u>Can I help</u> you...?』『<u>Can I get</u> you...?』『<u>Can I open</u>...?』)</span>",
            examples: [
                { eng: "Can I take your coat?", jpn: "コートをお預かりしましょうか？" },
                { eng: "Can I show you the menu?", jpn: "メニューをお見せしましょうか？" },
                { eng: "Can I get you a chair?", jpn: "椅子をお持ちしましょうか？" }
            ]
        },
        clickingGames: [
            { prompt: "そのカバンを手伝いましょうか？", target: "Can I help you with those bags?", words: ["Can", "I", "help", "you", "with", "those", "bags?"] },
            { prompt: "お水をお持ちしましょうか？", target: "Can I get you some water?", words: ["Can", "I", "get", "you", "some", "water?"] },
            { prompt: "窓を開けましょうか？", target: "Can I open the window?", words: ["Can", "I", "open", "the", "window?"] },
            { prompt: "ありがとうございます。とてもご親切に。", target: "Thank you. That is very kind.", words: ["Thank", "you.", "That", "is", "very", "kind."] },
            { prompt: "いいえ、結構です。大丈夫ですよ。", target: "No, thank you. I am fine.", words: ["No,", "thank", "you.", "I", "am", "fine."] }
        ],
        dropdownGames: [
            { before: "", options: ["Can", "Do", "Are"], answer: "Can", after: " I help you?" },
            { before: "Can I", options: ["get", "got", "gets"], answer: "get", after: " you something to drink?" },
            { before: "Can I", options: ["carry", "carrys", "carrying"], answer: "carry", after: " your heavy bag?" },
            { before: "Yes,", options: ["please", "thank", "fine"], answer: "please", after: "." },
            { before: "No, thank you. I am", options: ["fine", "good", "kind"], answer: "fine", after: "." },
            { before: "Can I", options: ["open", "opens", "opening"], answer: "open", after: " the window for you?" },
            { before: "Thank you, that is very", options: ["kind", "fine", "heavy"], answer: "kind", after: "." },
            { before: "Can I", options: ["take", "taking", "takes"], answer: "take", after: " your coat?" },
            { before: "", options: ["Can", "Will", "Does"], answer: "Can", after: " I show you the menu?" },
            { before: "Can I", options: ["help", "helps", "helping"], answer: "help", after: " you with your homework?" }
        ],
        roleplay: {
            a: "A visitor comes to your office or home. They look hot and they are holding a heavy coat. Offer to take their coat, and then offer them a drink using 'Can I...?'. (訪問者がオフィスや家にやってきました。暑そうで、重いコートを持っています。『Can I...?』を使ってコートを預かることを申し出、次に飲み物を勧めてください。)",
            b: "You are the visitor. Accept the first offer, but politely decline the second offer. (訪問者役です。最初の申し出は受け入れますが、2つ目の申し出は丁寧に断ってください。)"
        },
        homework: {
            vocab: [
                { eng: "Guest", jpn: "客 / ゲスト" },
                { eng: "Host", jpn: "ホスト / 主人" },
                { eng: "Customer", jpn: "客 / 顧客" },
                { eng: "Waiter", jpn: "ウェイター" },
                { eng: "Menu", jpn: "メニュー" },
                { eng: "Order", jpn: "注文する" },
                { eng: "Seat", jpn: "席" },
                { eng: "Umbrella", jpn: "傘" },
                { eng: "Hold", jpn: "持つ / 握る" },
                { eng: "Bring", jpn: "持ってくる" },
                { eng: "Wash", jpn: "洗う" },
                { eng: "Tired", jpn: "疲れた" },
                { eng: "Thirsty", jpn: "喉が渇いた" },
                { eng: "Ready", jpn: "準備ができた" }
            ],
            reading1: {
                title: "Task 2: Reading (Helping a Guest)",
                instruction: "Read the short story about a host helping a friend.",
                eng: "<strong>Helping a Guest</strong><br><br>Yesterday, my friend Tom visited my house. He looked very tired because he walked from the station in the rain. I said, 'Can I take your wet umbrella?' and I put it outside. Then I said, 'Can I get you something to drink?' He wanted hot tea. He also had a big, heavy bag. I said, 'Can I carry that for you?' and I put it in the living room for him. It is always good to help your guests!",
                jpn: "<strong>ゲストをもてなす</strong><br><br>昨日、友達のトムが私の家を訪ねてきました。彼は雨の中を駅から歩いてきたので、とても疲れているようでした。私は「濡れた傘をお預かりしましょうか？」と言って、それを外に置きました。それから、「何かお飲み物をお持ちしましょうか？」と言いました。彼は温かいお茶を欲しがりました。彼はまた、大きくて重いカバンを持っていました。私は「私が運びましょうか？」と言って、彼のためにリビングに置きました。ゲストを手助けするのは常に良いことですね！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Welcome to Blue Ocean Cafe! Can I show you to your table?", jpn: "ブルーオーシャンカフェへようこそ！お席へご案内しましょうか？" },
                { speaker: "B", eng: "Yes, please. A table for two by the window, if possible.", jpn: "はい、お願いします。できれば窓際の2人用の席で。" },
                { speaker: "A", eng: "Right this way. Can I take your coats?", jpn: "こちらへどうぞ。コートをお預かりしましょうか？" },
                { speaker: "B", eng: "No, thank you. We will keep them.", jpn: "いいえ、結構です。自分たちで持っておきます。" },
                { speaker: "A", eng: "Okay. Please sit down. Can I bring you some water?", jpn: "わかりました。どうぞお座りください。お水をお持ちしましょうか？" },
                { speaker: "B", eng: "Yes, please. And can we see the menu?", jpn: "はい、お願いします。それからメニューを見せていただけますか？" },
                { speaker: "A", eng: "Of course. Here you go. Can I answer any questions about the food?", jpn: "もちろんです。どうぞ。料理について何かご質問にお答えしましょうか？" },
                { speaker: "B", eng: "Not right now, thank you. We need a minute to look.", jpn: "今は結構です、ありがとう。少し見る時間が必要です。" },
                { speaker: "A", eng: "Take your time. Can I get you some coffee while you wait?", jpn: "ごゆっくりどうぞ。お待ちの間、コーヒーをお持ちしましょうか？" },
                { speaker: "B", eng: "That sounds great. Thank you very much.", jpn: "それは素晴らしいですね。どうもありがとうございます。" }
            ],
            writingTask: {
                promptEng: "Imagine a friend visits your house. Write three sentences offering them help, food, or a drink using 'Can I...?'. (For example: 'Can I get you some tea?'). Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "友達があなたの家を訪ねてきたと想像してください。『Can I...?』を使って、手伝いや食べ物、飲み物を勧める文を3つ書いてください。（例：「お茶をお持ちしましょうか？」）。Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 30,
        title: "Lesson 30: How to point out places",
        goal: "Help someone move house by giving instructions on where to put things using 'here', 'there', 'over here', and 'over there'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『here』『there』『over here』『over there』を使って、物を置く場所を指示し、引っ越しを手伝う。)</span>",
        vocab: [
            { eng: "Here", jpn: "ここ / こちら" },
            { eng: "There", jpn: "あそこ / そこ" },
            { eng: "Over here", jpn: "こっちに / ここに" },
            { eng: "Over there", jpn: "あっちに / あそこに" },
            { eng: "Move", jpn: "引っ越す / 動かす" },
            { eng: "Box", jpn: "箱" },
            { eng: "Furniture", jpn: "家具" },
            { eng: "Heavy", jpn: "重い" },
            { eng: "Put", jpn: "置く" },
            { eng: "Leave", jpn: "置いておく / そのままにする" },
            { eng: "Bring", jpn: "持ってくる" },
            { eng: "Living room", jpn: "リビング / 居間" },
            { eng: "Kitchen", jpn: "キッチン / 台所" },
            { eng: "Bedroom", jpn: "寝室" }
        ],
        dialogue: [
            { speaker: "A", eng: "This box is very heavy. <span class='swappable'>Where should I put it?</span>", jpn: "この箱はとても重いです。どこに置けばいいですか？" },
            { speaker: "B", eng: "<span class='swappable'>Please put it over there</span>, in the living room.", jpn: "あそこの、リビングルームに置いてください。" },
            { speaker: "A", eng: "Okay. <span class='swappable'>Where does this table go?</span>", jpn: "わかりました。このテーブルはどこに置きますか？" },
            { speaker: "B", eng: "Ah, <span class='swappable'>bring it over here</span>, next to the window.", jpn: "ああ、こっちの窓の隣に持ってきてください。" },
            { speaker: "A", eng: "Got it. <span class='swappable'>Should I leave these bags here?</span>", jpn: "了解です。これらのカバンはここに置いておきましょうか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>leave them there.</span> Thank you for your help!", jpn: "はい、そこに置いておいてください。手伝ってくれてありがとう！" }
        ],
        expressions: [
            { category: "1. Asking where things go (物の置き場を尋ねる)", options: ["Where should I put it?", "Where does this table go?", "Can I leave this box here?"] },
            { category: "2. Pointing to a nearby spot (近くの場所を示す)", options: ["Bring it over here.", "Put the bags here.", "Leave the chair over here."] },
            { category: "3. Pointing to a distant spot (遠くの場所を示す)", options: ["Please put it over there.", "Leave them there.", "Take the box over there."] },
            { category: "4. Clarifying locations in a house (家の中の場所を確認する)", options: ["In the living room?", "Next to the window?", "In the kitchen?"] },
            { category: "5. Asking for confirmation (確認を求める)", options: ["Should I leave these bags here?", "Is this okay?", "Right here?"] },
            { category: "6. Thanking someone for help (手伝いに感謝する)", options: ["Thank you for your help!", "Thanks for helping me move.", "I appreciate it."] }
        ],
        grammar: {
            point: "Place adverbs ('here', 'there', 'over here', 'over there') - 場所を表す副詞",
            explanation: "We use 'here' for places close to us and 'there' for places far from us. We add 'over' ('over here', 'over there') to emphasize the direction or to point to a very specific spot across a room. These words usually go at the VERY END of the sentence. <br><span style='font-size:0.9rem; color:var(--text-light);'>（自分に近い場所には『here』を、遠い場所には『there』を使います。『over』を付けると（over here, over there）、方向を強調したり、部屋の向こう側にある特定の場所を指し示したりできます。これらの単語は通常、文の一番最後に置かれます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the place adverbs come at the end of the action: 'Bring it <u>over here</u>' and 'Please put it <u>over there</u>.' <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『Bring it <u>over here</u>』や『Please put it <u>over there</u>』のように、場所を表す言葉が動作の最後に来ることに注目してください。)</span>",
            examples: [
                { eng: "Put the heavy box over there.", jpn: "その重い箱はあそこに置いてください。" },
                { eng: "Come over here and look at this.", jpn: "こっちに来て、これを見てください。" },
                { eng: "Leave your shoes here.", jpn: "靴はここに置いておいてください。" }
            ]
        },
        clickingGames: [
            { prompt: "あそこの、リビングルームに置いてください。", target: "Please put it over there, in the living room.", words: ["Please", "put", "it", "over", "there,", "in", "the", "living", "room."] },
            { prompt: "こっちの窓の隣に持ってきてください。", target: "Bring it over here, next to the window.", words: ["Bring", "it", "over", "here,", "next", "to", "the", "window."] },
            { prompt: "これらのカバンはここに置いておきましょうか？", target: "Should I leave these bags here?", words: ["Should", "I", "leave", "these", "bags", "here?"] },
            { prompt: "この箱はとても重いです。", target: "This box is very heavy.", words: ["This", "box", "is", "very", "heavy."] },
            { prompt: "はい、そこに置いておいてください。", target: "Yes, leave them there.", words: ["Yes,", "leave", "them", "there."] }
        ],
        dropdownGames: [
            { before: "Please put the box over", options: ["there", "their", "they"], answer: "there", after: "." },
            { before: "Bring the small table over", options: ["here", "hear", "near"], answer: "here", after: ", please." },
            { before: "Should I leave the bags", options: ["here", "there", "where"], answer: "here", after: " by the door?" },
            { before: "Look over", options: ["there", "their", "here"], answer: "there", after: " at that big sofa!" },
            { before: "Put your coat", options: ["here", "hear", "there"], answer: "here", after: " on the bed." },
            { before: "Leave the furniture over", options: ["there", "their", "them"], answer: "there", after: " in the corner." },
            { before: "Where should I put", options: ["it", "here", "there"], answer: "it", after: "?" },
            { before: "Do not put the TV over", options: ["there", "their", "they"], answer: "there", after: ". It is too far." },
            { before: "Can I leave my books", options: ["here", "near", "hear"], answer: "here", after: "?" },
            { before: "She is waiting over", options: ["there", "their", "they"], answer: "there", after: " in the kitchen." }
        ],
        roleplay: {
            a: "You are helping your friend move into a new house. You are carrying a heavy chair. Ask your friend where to put it, and ask if you should leave a box near the door. (友達が新しい家に引っ越すのを手伝っています。重い椅子を運んでいます。どこに置けばいいか尋ね、ドアの近くに箱を置いていいか聞いてください。)",
            b: "You are the friend. Tell them to put the chair 'over there' (point to a spot!), and tell them to bring the box 'over here'. (友達役です。椅子を『あそこ（over there）』に置くように伝え（場所を指さしてください！）、箱を『こっち（over here）』に持ってくるように伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Apartment", jpn: "アパート" },
                { eng: "Stairs", jpn: "階段" },
                { eng: "Elevator", jpn: "エレベーター" },
                { eng: "Truck", jpn: "トラック" },
                { eng: "Carry", jpn: "運ぶ" },
                { eng: "Drop", jpn: "落とす" },
                { eng: "Careful", jpn: "気をつけて / 慎重な" },
                { eng: "Break", jpn: "壊す / 割る" },
                { eng: "Fragile", jpn: "壊れやすい" },
                { eng: "Corner", jpn: "角 / 隅" },
		{ eng: "Tape", jpn: "テープ" },	
		{ eng: "Scissors", jpn: "はさみ" },
                { eng: "Next to", jpn: "〜の隣に" },
                { eng: "Between", jpn: "〜の間に" }
            ],
            reading1: {
                title: "Task 2: Reading (A Text Message on Moving Day)",
                instruction: "Read the message from a friend giving instructions on moving day.",
                eng: "<strong>To:</strong> Sam<br><strong>From:</strong> David<br><br>Hi Sam, thank you for helping me move today! The truck is outside. The heavy boxes go over there in the living room. Please put the clothes here in the bedroom. Be careful with the small boxes. They are fragile, so don't leave them there on the floor. Put them over here on the kitchen counter. I will buy us pizza for lunch!",
                jpn: "<strong>宛先：</strong> サム<br><strong>差出人：</strong> デビッド<br><br>こんにちはサム、今日は引っ越しを手伝ってくれてありがとう！トラックは外にあります。重い箱はあそこのリビングルームに置いてください。服はここの寝室に置いてください。小さな箱には気をつけて。壊れやすいので、そこの床には置かないでください。こっちのキッチンカウンターの上に置いてください。昼食にはピザをごちそうするよ！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Wow, you have a lot of boxes! Where do we start?", jpn: "わあ、箱がたくさんあるね！どこから始めようか？" },
                { speaker: "B", eng: "Let's start with the living room. Can you carry this box?", jpn: "リビングから始めよう。この箱を運んでくれる？" },
                { speaker: "A", eng: "Sure. Where should I put it?", jpn: "もちろん。どこに置けばいい？" },
                { speaker: "B", eng: "Please put it over there, next to the TV.", jpn: "あそこの、テレビの隣に置いてください。" },
                { speaker: "A", eng: "Got it. What about these books?", jpn: "わかった。この本はどうする？" },
                { speaker: "B", eng: "Bring them over here. I will put them on the shelf.", jpn: "こっちに持ってきて。私が棚に置くよ。" },
                { speaker: "A", eng: "Okay. Oh, this sofa is very heavy. Should we move it now?", jpn: "オッケー。ああ、このソファはとても重いね。今動かそうか？" },
                { speaker: "B", eng: "No, leave it there for now. We can move it later.", jpn: "いいや、今はそこに置いておいて。後で動かせるから。" },
                { speaker: "A", eng: "Sounds good. Is there anything in the kitchen?", jpn: "わかった。キッチンには何かある？" },
                { speaker: "B", eng: "Yes, the plates are over there. Please be careful!", jpn: "うん、お皿があそこにあるよ。気をつけてね！" }
            ],
            writingTask: {
                promptEng: "Imagine you are directing someone who is helping you move furniture. Write three sentences using 'here', 'there', 'over here', or 'over there' to tell them where to put a box, a chair, and a table (e.g., 'Please put the box over there.'). Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "家具の移動を手伝ってくれている人に指示を出していると想像してください。『here』『there』『over here』または『over there』を使って、箱、椅子、テーブルをどこに置くかを伝える文を3つ書いてください（例：「箱はあそこに置いてください。」）。Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 31,
        title: "Lesson 31: How to say where things are",
        goal: "Ask where everyday items are and describe their exact location using simple prepositions (in, on, under, next to). <br><span style='font-size:0.9rem; color:var(--text-light);'>(単純な前置詞（in, on, under, next to）を使って、日常の品物がどこにあるかを尋ね、その場所を伝える。)</span>",
        vocab: [
            { eng: "In", jpn: "〜の中に" },
            { eng: "On", jpn: "〜の上に" },
            { eng: "Under", jpn: "〜の下に" },
            { eng: "Next to", jpn: "〜の隣に" },
            { eng: "Behind", jpn: "〜の後ろに" },
            { eng: "In front of", jpn: "〜の前に" },
            { eng: "Find", jpn: "見つける" },
            { eng: "Look", jpn: "見る / 探す" },
            { eng: "Keys", jpn: "鍵（複数）" },
            { eng: "Phone", jpn: "携帯電話" },
            { eng: "Wallet", jpn: "財布" },
            { eng: "Table", jpn: "テーブル" },
            { eng: "Sofa", jpn: "ソファ" },
            { eng: "Bag", jpn: "カバン / 袋" }
        ],
        dialogue: [
            { speaker: "A", eng: "I can't find my phone. <span class='swappable'>Where is it?</span>", jpn: "携帯電話が見つかりません。どこにありますか？" },
            { speaker: "B", eng: "<span class='swappable'>Is it on the table?</span>", jpn: "テーブルの上にありますか？" },
            { speaker: "A", eng: "No, <span class='swappable'>it is not on the table.</span>", jpn: "いいえ、テーブルの上にはありません。" },
            { speaker: "B", eng: "<span class='swappable'>Look in your bag.</span>", jpn: "カバンの中を見てください。" },
            { speaker: "A", eng: "I looked. <span class='swappable'>It is not in my bag.</span>", jpn: "見ました。カバンの中にはありません。" },
            { speaker: "B", eng: "Oh, look! <span class='swappable'>It is under the sofa, next to your coat.</span>", jpn: "あっ、見て！ソファの下の、あなたのコートの隣にありますよ。" }
        ],
        expressions: [
            { category: "1. Asking where something is (単数の物の場所を尋ねる)", options: ["Where is it?", "Where is my phone?", "Where is the book?"] },
            { category: "2. Asking where plural things are (複数の物の場所を尋ねる)", options: ["Where are my keys?", "Where are the glasses?", "Where are my shoes?"] },
            { category: "3. Suggesting a place (場所を提案する)", options: ["Is it on the table?", "Are they in the car?", "Is it under the desk?"] },
            { category: "4. Telling someone to check (確認するように言う)", options: ["Look in your bag.", "Check behind the TV.", "Look on the desk."] },
            { category: "5. Stating a location (場所を伝える)", options: ["It is under the sofa.", "They are next to the door.", "It is in the box."] },
            { category: "6. Expressing inability to find (見つからないことを伝える)", options: ["I can't find my phone.", "It is not on the table.", "I can't find it."] }
        ],
        grammar: {
            point: "Prepositions of Place (in, on, under, next to) - 場所を表す前置詞",
            explanation: "We use simple prepositions to say exactly where things are. We combine the preposition with a noun phrase (e.g., 'the table') to make a prepositional phrase: 'on' + 'the table' = 'on the table'.<br><br><strong>Top 15 A1 Prepositions of Place:</strong><br>1. <strong>in</strong> (〜の中に)<br>2. <strong>on</strong> (〜の上に)<br>3. <strong>at</strong> (〜に / 〜で)<br>4. <strong>under</strong> (〜の下に)<br>5. <strong>next to</strong> (〜の隣に)<br>6. <strong>near</strong> (〜の近くに)<br>7. <strong>behind</strong> (〜の後ろに)<br>8. <strong>in front of</strong> (〜の前に)<br>9. <strong>between</strong> (〜の間に)<br>10. <strong>inside</strong> (〜の内側に)<br>11. <strong>outside</strong> (〜の外側に)<br>12. <strong>above</strong> (〜の上方に)<br>13. <strong>below</strong> (〜の下方に)<br>14. <strong>by</strong> (〜のそばに)<br>15. <strong>opposite</strong> (〜の向かいに)<br><br><span style='font-size:0.9rem; color:var(--text-light);'>（物が正確にどこにあるかを伝えるために、単純な前置詞を使います。前置詞と名詞句（例：the table）を組み合わせて前置詞句を作ります：『on』＋『the table』＝『on the table（テーブルの上に）』。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the prepositional phrases: '<u>on</u> the table', '<u>in</u> your bag', '<u>under</u> the sofa', and '<u>next to</u> your coat'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>on</u> the table』『<u>in</u> your bag』『<u>under</u> the sofa』『<u>next to</u> your coat』といった前置詞句に注目してください。)</span>",
            examples: [
                { eng: "The cat is on the chair.", jpn: "猫は椅子の上にいます。" },
                { eng: "My shoes are under the bed.", jpn: "私の靴はベッドの下にあります。" },
                { eng: "The bank is next to the station.", jpn: "銀行は駅の隣にあります。" }
            ]
        },
        clickingGames: [
            { prompt: "携帯電話が見つかりません。どこにありますか？", target: "I can't find my phone. Where is it?", words: ["I", "can't", "find", "my", "phone.", "Where", "is", "it?"] },
            { prompt: "テーブルの上にありますか？", target: "Is it on the table?", words: ["Is", "it", "on", "the", "table?"] },
            { prompt: "カバンの中を見てください。", target: "Look in your bag.", words: ["Look", "in", "your", "bag."] },
            { prompt: "いいえ、テーブルの上にはありません。", target: "No, it is not on the table.", words: ["No,", "it", "is", "not", "on", "the", "table."] },
            { prompt: "ソファの下の、あなたのコートの隣にありますよ。", target: "It is under the sofa, next to your coat.", words: ["It", "is", "under", "the", "sofa,", "next", "to", "your", "coat."] }
        ],
        dropdownGames: [
            { before: "Is your phone", options: ["in", "on", "under"], answer: "in", after: " your pocket?" },
            { before: "The book is", options: ["on", "in", "next"], answer: "on", after: " the table." },
            { before: "Look", options: ["under", "in", "front"], answer: "under", after: " the bed. Are your shoes there?" },
            { before: "The cafe is next", options: ["to", "in", "on"], answer: "to", after: " the supermarket." },
            { before: "My wallet is", options: ["in", "on", "under"], answer: "in", after: " my bag." },
            { before: "The dog is sleeping", options: ["behind", "next", "front"], answer: "behind", after: " the sofa." },
            { before: "Please stand in front", options: ["of", "to", "in"], answer: "of", after: " the door." },
            { before: "Where", options: ["are", "is", "do"], answer: "are", after: " my keys?" },
            { before: "I can't find my glasses. Where", options: ["are they", "is it", "they are"], answer: "are they", after: "?" },
            { before: "Your coat is", options: ["on", "in", "next"], answer: "on", after: " the chair." }
        ],
        roleplay: {
            a: "You lost your house keys. Ask your partner where they are, and tell them you already checked in your bag. (家の鍵をなくしました。どこにあるか相手に尋ね、カバンの中はすでに確認したと伝えてください。)",
            b: "Suggest two places the keys might be using prepositions (e.g., on the table, under the book). (前置詞を使って、鍵があるかもしれない場所を2つ提案してください。（例：テーブルの上、本の下など）)"
        },
        homework: {
            vocab: [
                { eng: "Bed", jpn: "ベッド" },
                { eng: "Chair", jpn: "椅子" },
                { eng: "Floor", jpn: "床" },
                { eng: "Drawer", jpn: "引き出し" },
                { eng: "Shelf", jpn: "棚" },
                { eng: "Desk", jpn: "机" },
                { eng: "Box", jpn: "箱" },
                { eng: "Pocket", jpn: "ポケット" },
                { eng: "Glasses", jpn: "メガネ" },
                { eng: "Passport", jpn: "パスポート" },
                { eng: "Ticket", jpn: "チケット / 切符" },
		{ eng: "Window", jpn: "窓" },	
		{ eng: "Door", jpn: "ドア" },
                { eng: "Check", jpn: "確認する / チェックする" }
            ],
            reading1: {
                title: "Task 2: Reading (A Frantic Text Message)",
                instruction: "Read the message from a roommate who is looking for something important.",
                eng: "<strong>To:</strong> Alex<br><strong>From:</strong> Chris<br><br>Alex, please help me! I am at the airport, but I can't find my passport. I think I left it at home. Can you check my bedroom? Look on my desk. Is it there? If it is not on the desk, look in the top drawer. Sometimes I put it under my notebooks. If you find it, please call me immediately. The passport is in a small blue case. Thank you!!",
                jpn: "<strong>宛先：</strong> アレックス<br><strong>差出人：</strong> クリス<br><br>アレックス、お願い助けて！今空港にいるんだけど、パスポートが見つからないんだ。家に忘れてきたと思う。僕の寝室を確認してくれる？机の上を見て。そこにある？もし机の上になければ、一番上の引き出しの中を見て。時々ノートの下に置くんだ。見つけたら、すぐに電話して。パスポートは小さな青いケースに入っているよ。ありがとう！！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Are you ready to go?", jpn: "出かける準備はできた？" },
                { speaker: "B", eng: "Almost. I can't find my sunglasses. Where are they?", jpn: "もう少し。サングラスが見つからないんだ。どこにあるかな？" },
                { speaker: "A", eng: "Are they on your head?", jpn: "頭の上にあるんじゃない？" },
                { speaker: "B", eng: "No, they are not. I checked.", jpn: "いや、ないよ。確認した。" },
                { speaker: "A", eng: "Look on the kitchen table, next to the newspaper.", jpn: "キッチンテーブルの上、新聞の隣を見てみて。" },
                { speaker: "B", eng: "I am looking right now... No, they are not on the table.", jpn: "今見てるけど…いや、テーブルの上にはないよ。" },
                { speaker: "A", eng: "How about in the car? Did you leave them in the car yesterday?", jpn: "車の中はどう？昨日車の中に忘れたんじゃない？" },
                { speaker: "B", eng: "Wait, let me check my jacket pocket. Ah!", jpn: "待って、ジャケットのポケットを確認させて。あっ！" },
                { speaker: "A", eng: "Did you find them?", jpn: "見つけた？" },
                { speaker: "B", eng: "Yes, they are in my pocket. I am ready now. Let's go!", jpn: "うん、ポケットの中にあったよ。もう準備できた。行こう！" }
            ],
            writingTask: {
                promptEng: "Look around the room you are in right now. Write three sentences describing where things are using prepositions of place (in, on, under, next to, behind). Example: 'My bag is on the floor, next to the chair.' Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "今あなたが居る部屋を見回してください。場所を表す前置詞（in, on, under, next to, behind）を使って、物がどこにあるかを描写する文を3つ書いてください。例：「私のカバンは床の上で、椅子の隣にあります。」Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 32,
        title: "Lesson 32: How to talk about your routine",
        goal: "Talk about your daily and weekly schedules using prepositions of time (in, on, at) and 'every'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(時間を表す前置詞（in, on, at）や『every』を使って、毎日・毎週のスケジュールについて話す。)</span>",
        vocab: [
            { eng: "Morning", jpn: "朝 / 午前" },
            { eng: "Afternoon", jpn: "午後" },
            { eng: "Evening", jpn: "夕方 / 晩" },
            { eng: "Night", jpn: "夜" },
            { eng: "Weekday", jpn: "平日" },
            { eng: "Weekend", jpn: "週末" },
            { eng: "Wake up", jpn: "目を覚ます / 起きる" },
            { eng: "Go to bed", jpn: "寝る / ベッドに入る" },
            { eng: "Start", jpn: "始める / 始まる" },
            { eng: "Finish", jpn: "終える / 終わる" },
            { eng: "Relax", jpn: "リラックスする" },
            { eng: "Every", jpn: "毎〜 / すべての" },
            { eng: "Late", jpn: "遅く" },
            { eng: "Early", jpn: "早く" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>What time do you wake up in the morning?</span>", jpn: "朝は何時に起きますか？" },
            { speaker: "B", eng: "<span class='swappable'>I wake up at 6:30 AM on weekdays.</span>", jpn: "平日は午前6時30分に起きます。" },
            { speaker: "A", eng: "That is early! <span class='swappable'>Do you work on the weekend?</span>", jpn: "早いですね！週末は働きますか？" },
            { speaker: "B", eng: "No, <span class='swappable'>I don't work on Saturdays and Sundays.</span>", jpn: "いいえ、土曜日と日曜日は働きません。" },
            { speaker: "A", eng: "That is good. <span class='swappable'>I usually relax in the evening.</span>", jpn: "それはいいですね。私はたいてい夕方にリラックスします。" },
            { speaker: "B", eng: "Me too. <span class='swappable'>I read a book every night before bed.</span>", jpn: "私もです。毎晩寝る前に本を読みます。" }
        ],
        expressions: [
            { category: "1. Asking about daily times (日常の時間を尋ねる)", options: ["What time do you wake up?", "When do you start work?", "What time do you go to bed?"] },
            { category: "2. Using 'at' for specific times (『at』で具体的な時間を言う)", options: ["I wake up at 6:30 AM.", "My class starts at noon.", "I sleep at midnight."] },
            { category: "3. Using 'in' for parts of the day (『in』で1日の中の時間帯を言う)", options: ["I drink coffee in the morning.", "I exercise in the afternoon.", "I watch TV in the evening."] },
            { category: "4. Using 'on' for days (『on』で曜日を言う)", options: ["I play tennis on Mondays.", "I don't work on the weekend.", "We meet on Friday."] },
            { category: "5. Using 'at' for night (夜を表す特別な『at』)", options: ["I read a book at night.", "It is quiet at night.", "I work at night."] },
            { category: "6. Using 'every' for routines (『every』で習慣を伝える)", options: ["I go running every morning.", "I study every day.", "We eat pizza every Friday."] }
        ],
        grammar: {
            point: "Prepositions of Time (in, on, at) - 時間を表す前置詞",
            explanation: "We use different prepositions for different types of time:<br>• <strong>at</strong> + exact time / night (at 7:00, at night)<br>• <strong>on</strong> + days / dates (on Monday, on the weekend)<br>• <strong>in</strong> + parts of the day / months (in the morning, in May)<br><em>*Note: When we use 'every' (every morning, every Sunday), we do NOT use in/on/at.</em><br><span style='font-size:0.9rem; color:var(--text-light);'>（時間の種類によって異なる前置詞を使います：<br>・<strong>at</strong> ＋ 正確な時間や『night』（at 7:00, at night）<br>・<strong>on</strong> ＋ 曜日や日付（on Monday, on the weekend）<br>・<strong>in</strong> ＋ 1日の時間帯や月（in the morning, in May）<br>※『every』（毎朝、毎週日曜日など）を使うときは、in/on/at は使いません。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the different time words: '<u>in the</u> morning', '<u>at</u> 6:30 AM', '<u>on</u> weekdays', and '<u>every</u> night'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>in the</u> morning』『<u>at</u> 6:30 AM』『<u>on</u> weekdays』『<u>every</u> night』といった異なる時間を表す言葉に注目してください。)</span>",
            examples: [
                { eng: "I have a meeting at 2:00 PM.", jpn: "午後2時に会議があります。" },
                { eng: "She goes to the gym on Wednesdays.", jpn: "彼女は水曜日にジムに行きます。" },
                { eng: "We drink tea in the afternoon.", jpn: "私たちは午後に紅茶を飲みます。" }
            ]
        },
        clickingGames: [
            { prompt: "朝は何時に起きますか？", target: "What time do you wake up in the morning?", words: ["What", "time", "do", "you", "wake", "up", "in", "the", "morning?"] },
            { prompt: "平日は午前6時30分に起きます。", target: "I wake up at 6:30 AM on weekdays.", words: ["I", "wake", "up", "at", "6:30", "AM", "on", "weekdays."] },
            { prompt: "週末は働きますか？", target: "Do you work on the weekend?", words: ["Do", "you", "work", "on", "the", "weekend?"] },
            { prompt: "私はたいてい夕方にリラックスします。", target: "I usually relax in the evening.", words: ["I", "usually", "relax", "in", "the", "evening."] },
            { prompt: "私は毎晩寝る前に本を読みます。", target: "I read a book every night before bed.", words: ["I", "read", "a", "book", "every", "night", "before", "bed."] }
        ],
        dropdownGames: [
            { before: "I wake up", options: ["at", "in", "on"], answer: "at", after: " 7:00 AM." },
            { before: "She drinks coffee", options: ["in", "on", "at"], answer: "in", after: " the morning." },
            { before: "We play soccer", options: ["on", "in", "at"], answer: "on", after: " Saturdays." },
            { before: "I like to watch movies", options: ["at", "in", "on"], answer: "at", after: " night." },
            { before: "Do you work", options: ["on", "in", "at"], answer: "on", after: " the weekend?" },
            { before: "He studies English", options: ["every", "in", "on"], answer: "every", after: " day." },
            { before: "The class starts", options: ["at", "in", "on"], answer: "at", after: " 9:00 AM." },
            { before: "I am very busy", options: ["in", "on", "at"], answer: "in", after: " the afternoon." },
            { before: "I do not work", options: ["on", "in", "at"], answer: "on", after: " Mondays." },
            { before: "We eat dinner", options: ["every", "on", "in"], answer: "every", after: " evening at home." }
        ],
        roleplay: {
            a: "Ask your partner what time they wake up in the morning, and ask what they do on the weekend. (パートナーに朝何時に起きるか尋ね、週末には何をするか尋ねてください。)",
            b: "Answer the questions. Tell them your wake-up time using 'at', and tell them one thing you do on the weekend using 'on' or 'every'. (質問に答えてください。『at』を使って起きる時間を伝え、『on』や『every』を使って週末にすることを1つ伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Breakfast", jpn: "朝食" },
                { eng: "Lunch", jpn: "昼食" },
                { eng: "Dinner", jpn: "夕食" },
                { eng: "Shower", jpn: "シャワー" },
                { eng: "Exercise", jpn: "運動する" },
                { eng: "Cook", jpn: "料理する" },
                { eng: "Clean", jpn: "掃除する" },
                { eng: "Listen to music", jpn: "音楽を聴く" },
                { eng: "Usually", jpn: "たいてい" },
                { eng: "Before", jpn: "〜の前に" },
		{ eng: "Wash", jpn: "洗う" },	
		{ eng: "Dry", jpn: "乾かす" },
                { eng: "After", jpn: "〜の後に" },
                { eng: "Until", jpn: "〜まで" }
            ],
            reading1: {
                title: "Task 2: Reading (A Daily Schedule)",
                instruction: "Read the blog post about a person's busy daily routine.",
                eng: "<strong>My Busy Days</strong><br><br>I am a nurse, so my routine is very busy. I wake up at 5:30 AM every morning. I drink coffee and eat breakfast at 6:00 AM. I go to the hospital and start work at 7:00 AM. I work very hard in the morning and in the afternoon. I finish work at 4:00 PM. On weekdays, I go to the supermarket after work. In the evening, I cook dinner and relax. I always take a shower at night, and I go to bed at 10:00 PM. On the weekend, I sleep late!",
                jpn: "<strong>私の忙しい日々</strong><br><br>私は看護師なので、日課はとても忙しいです。毎朝5時30分に起きます。午前6時にコーヒーを飲み、朝食を食べます。病院に行き、午前7時に仕事を始めます。午前も午後も一生懸命働きます。午後4時に仕事が終わります。平日は、仕事の後にスーパーに行きます。夕方は夕食を作り、リラックスします。夜はいつもシャワーを浴びて、午後10時に寝ます。週末は遅くまで寝ています！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Do you have a strict morning routine?", jpn: "厳しいモーニングルーティン（朝の習慣）はありますか？" },
                { speaker: "B", eng: "Yes, I do. I wake up at 6:00 AM every day.", jpn: "はい、あります。毎日午前6時に起きます。" },
                { speaker: "A", eng: "What do you do after you wake up?", jpn: "起きた後は何をしますか？" },
                { speaker: "B", eng: "I exercise in the morning, and then I take a shower.", jpn: "朝に運動をして、それからシャワーを浴びます。" },
                { speaker: "A", eng: "That is very healthy. What time do you eat breakfast?", jpn: "それはとても健康的ですね。朝食は何時に食べますか？" },
                { speaker: "B", eng: "I eat breakfast at 7:30 AM. What about you?", jpn: "午前7時30分に朝食を食べます。あなたはどうですか？" },
                { speaker: "A", eng: "I am very lazy. I wake up at 8:00 AM and rush to work.", jpn: "私はとても怠け者です。午前8時に起きて、急いで仕事に行きます。" },
                { speaker: "B", eng: "Do you work on the weekend too?", jpn: "週末も働きますか？" },
                { speaker: "A", eng: "No, I rest on Saturdays. On Sundays, I clean my house.", jpn: "いいえ、土曜日は休みます。日曜日は家の掃除をします。" },
                { speaker: "B", eng: "That sounds like a nice weekend.", jpn: "良い週末のようですね。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your morning or weekend routine. Write three sentences using 'in', 'on', or 'at' (e.g., 'I wake up at 7:00 AM. I play tennis on Sunday.'). Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "あなたの朝または週末の習慣について短い文章を書いてください。『in』『on』『at』を使った文を3つ書いてください（例：「午前7時に起きます。日曜日にテニスをします。」）。Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 33,
        title: "Lesson 33: How to ask people to do things",
        goal: "Ask someone to do tasks, help you, or contact other people using object pronouns (me, him, her, them, us). <br><span style='font-size:0.9rem; color:var(--text-light);'>(目的格代名詞（me, him, her, them, us）を使って、人に仕事や手伝い、他の人への連絡を頼む。)</span>",
        vocab: [
            { eng: "Me", jpn: "私を / 私に" },
            { eng: "You", jpn: "あなたを / あなたに" },
            { eng: "Him", jpn: "彼を / 彼に" },
            { eng: "Her", jpn: "彼女を / 彼女に" },
            { eng: "Us", jpn: "私たちを / 私たちに" },
            { eng: "Them", jpn: "彼らを / それらを" },
            { eng: "Help", jpn: "手伝う / 助ける" },
            { eng: "Call", jpn: "電話する" },
            { eng: "Tell", jpn: "伝える / 言う" },
            { eng: "Ask", jpn: "尋ねる / 頼む" },
            { eng: "Meet", jpn: "会う / 迎えに行く" },
            { eng: "Bring", jpn: "連れてくる / 持ってくる" },
            { eng: "Busy", jpn: "忙しい" },
            { eng: "Right now", jpn: "今すぐに" }
        ],
        dialogue: [
            { speaker: "A", eng: "I am very busy today. <span class='swappable'>Can you help me?</span>", jpn: "今日はとても忙しいんです。私を手伝ってくれますか？" },
            { speaker: "B", eng: "Sure. <span class='swappable'>What do you need?</span>", jpn: "もちろん。何が必要ですか？" },
            { speaker: "A", eng: "Mr. Smith is at the station. <span class='swappable'>Please meet him.</span>", jpn: "スミスさんが駅にいます。彼を迎えに行ってください（彼に会ってください）。" },
            { speaker: "B", eng: "Okay, <span class='swappable'>I will meet him.</span> What about Sarah?", jpn: "わかりました、彼を迎えに行きます。サラはどうしますか？" },
            { speaker: "A", eng: "<span class='swappable'>Please call her</span> and <span class='swappable'>ask her a question.</span>", jpn: "彼女に電話して、質問をしてください。" },
            { speaker: "B", eng: "No problem. <span class='swappable'>I will call her right now.</span>", jpn: "問題ありません。今すぐ彼女に電話します。" }
        ],
        expressions: [
            { category: "1. Asking for help (自分への手伝いを頼む)", options: ["Can you help me?", "Please help us.", "Can you assist me?"] },
            { category: "2. Clarifying instructions (指示を確認する)", options: ["What do you need?", "What about Sarah?", "Who should I call?"] },
            { category: "3. Asking someone to act on a male (男性に対する行動を頼む)", options: ["Please meet him.", "Call him later.", "Tell him the time."] },
            { category: "4. Asking someone to act on a female (女性に対する行動を頼む)", options: ["Please call her.", "Ask her a question.", "Tell her the news."] },
            { category: "5. Asking someone to act on a group (複数人に対する行動を頼む)", options: ["Meet them at the station.", "Please help them.", "Bring them here."] },
            { category: "6. Confirming you will do the task (自分が行動すると答える)", options: ["I will meet him.", "I will call her right now.", "I can help them."] }
        ],
        grammar: {
            point: "Object Pronouns (me, him, her, them, us) - 目的格代名詞",
            explanation: "When you ask people to do things for you, or ask them to contact other people, use object pronouns after the action verb. We use these so we don't have to repeat names. <br>• <strong>me</strong> (Help <em>me</em>)<br>• <strong>us</strong> (Help <em>us</em>)<br>• <strong>him</strong> (Meet <em>him</em> = Meet Mr. Smith)<br>• <strong>her</strong> (Call <em>her</em> = Call Sarah)<br>• <strong>them</strong> (Tell <em>them</em> = Tell the students)<br><span style='font-size:0.9rem; color:var(--text-light);'>（人に手伝いをお願いしたり、他の人へ連絡を取るように頼むときは、動作を表す動詞の後に目的格代名詞を使います。名前を何度も繰り返さないためにこれらを使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the pronouns are the target of the verbs: 'help <u>me</u>', 'meet <u>him</u>', and 'call <u>her</u>'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：代名詞がどのように動詞のターゲット（目的語）になっているかに注目してください：『help <u>me</u>』『meet <u>him</u>』『call <u>her</u>』。)</span>",
            examples: [
                { eng: "The students are confused. Please help them.", jpn: "生徒たちが混乱しています。彼らを助けてください。" },
                { eng: "I am thirsty. Can you bring me some water?", jpn: "喉が渇きました。私に水を持ってきてくれますか？" },
                { eng: "John is waiting. Tell him to come in.", jpn: "ジョンが待っています。彼に入るように言ってください。" }
            ]
        },
        clickingGames: [
            { prompt: "私を手伝ってくれますか？", target: "Can you help me?", words: ["Can", "you", "help", "me?"] },
            { prompt: "彼を迎えに行ってください。", target: "Please meet him.", words: ["Please", "meet", "him."] },
            { prompt: "彼女に電話して、質問をしてください。", target: "Please call her and ask her a question.", words: ["Please", "call", "her", "and", "ask", "her", "a", "question."] },
            { prompt: "わかりました、彼を迎えに行きます。", target: "Okay, I will meet him.", words: ["Okay,", "I", "will", "meet", "him."] },
            { prompt: "今すぐ彼女に電話します。", target: "I will call her right now.", words: ["I", "will", "call", "her", "right", "now."] }
        ],
        dropdownGames: [
            { before: "I have a lot of bags. Can you help", options: ["me", "I", "my"], answer: "me", after: "?" },
            { before: "David is in the lobby. Please meet", options: ["him", "he", "his"], answer: "him", after: "." },
            { before: "Mary needs the report. Can you bring it to", options: ["her", "she", "hers"], answer: "her", after: "?" },
            { before: "The customers are angry. Please talk to", options: ["them", "they", "their"], answer: "them", after: "." },
            { before: "We are lost. Please help", options: ["us", "we", "our"], answer: "us", after: " find the station." },
            { before: "Where is Mr. Tanaka? Tell", options: ["him", "he", "his"], answer: "him", after: " the meeting is starting." },
            { before: "I don't know the answer. I will ask", options: ["her", "she", "hers"], answer: "her", after: "." },
            { before: "They don't have a menu. Please give it to", options: ["them", "they", "their"], answer: "them", after: "." },
            { before: "Please call", options: ["me", "I", "my"], answer: "me", after: " at 5:00 PM." },
            { before: "Sarah is not here. I will message", options: ["her", "she", "hers"], answer: "her", after: " later." }
        ],
        roleplay: {
            a: "You are a busy manager. Ask your coworker (your partner) to help you. Ask them to call a male client (e.g., Mr. Lee) and to meet a female client (e.g., Ms. Davis). Use 'him' and 'her'. (あなたは忙しいマネージャーです。同僚（パートナー）に手伝いを頼んでください。男性のクライアント（例：リーさん）に電話することと、女性のクライアント（例：デイビスさん）に会うことを頼んでください。『him』と『her』を使ってください。)",
            b: "You are the coworker. Agree to help. Confirm the instructions by saying 'I will call him' and 'I will meet her'. (同僚役です。手伝いを承諾してください。『I will call him（彼に電話します）』と『I will meet her（彼女に会います）』と言って指示を確認してください。)"
        },
        homework: {
            vocab: [
                { eng: "Client", jpn: "クライアント / 顧客" },
                { eng: "Colleague", jpn: "同僚" },
                { eng: "Report", jpn: "報告書 / レポート" },
                { eng: "Document", jpn: "書類" },
                { eng: "Email", jpn: "Eメール" },
                { eng: "Send", jpn: "送る" },
                { eng: "Give", jpn: "与える / 渡す" },
                { eng: "Show", jpn: "見せる" },
                { eng: "Meeting", jpn: "会議" },
                { eng: "Office", jpn: "オフィス / 事務所" },
		{ eng: "Schedule", jpn: "スケジュール" },	
		{ eng: "Calendar", jpn: "カレンダー" },
                { eng: "Lobby", jpn: "ロビー" },
                { eng: "Wait", jpn: "待つ" }
            ],
            reading1: {
                title: "Task 2: Reading (Instructions for an Assistant)",
                instruction: "Read the email from a boss giving instructions to their assistant.",
                eng: "<strong>To:</strong> Mark<br><strong>From:</strong> Susan (Manager)<br><br>Hi Mark, I am in a meeting all morning, so I need you to do a few things. First, Mr. Green is coming at 10:00 AM. Please meet him in the lobby and give him a cup of coffee. Next, Mary from the design team needs the new photos. Please send them to her by email. Finally, the new students are arriving at noon. Please show them the cafeteria. Thank you for helping me!",
                jpn: "<strong>宛先：</strong> マーク<br><strong>差出人：</strong> スーザン（マネージャー）<br><br>こんにちはマーク、私は午前中ずっと会議なので、いくつかお願いしたいことがあります。まず、10時にグリーンさんが来ます。ロビーで彼を出迎え、コーヒーを出してください。次に、デザインチームのメアリーが新しい写真を必要としています。彼女にメールで送ってください。最後に、正午に新しい学生たちが到着します。彼らにカフェテリアを案内してください。私を手伝ってくれてありがとう！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hi Tom. Are you busy right now?", jpn: "こんにちはトム。今忙しいですか？" },
                { speaker: "B", eng: "No, I am free. Do you need help?", jpn: "いいえ、暇ですよ。手伝いが必要ですか？" },
                { speaker: "A", eng: "Yes. Can you help me prepare for the meeting?", jpn: "はい。会議の準備を手伝ってくれますか？" },
                { speaker: "B", eng: "Of course. What should I do?", jpn: "もちろんです。何をすればいいですか？" },
                { speaker: "A", eng: "The new clients are outside. Please bring them to the meeting room.", jpn: "新しいクライアントたちが外にいます。彼らを会議室に案内してください。" },
                { speaker: "B", eng: "Okay, I will bring them. What about the manager?", jpn: "わかりました、彼らを案内します。マネージャーはどうしますか？" },
                { speaker: "A", eng: "He is in his office. Please tell him we are ready.", jpn: "彼はオフィスにいます。彼に私たちが準備できていると伝えてください。" },
                { speaker: "B", eng: "Sure. And do you need Lisa for this meeting?", jpn: "了解です。この会議にリサは必要ですか？" },
                { speaker: "A", eng: "Yes, I need her. Can you call her?", jpn: "はい、彼女が必要です。彼女に電話してくれますか？" },
                { speaker: "B", eng: "No problem. I will call her now.", jpn: "問題ありません。今彼女に電話します。" }
            ],
            writingTask: {
                promptEng: "Imagine you are a boss. Write three sentences asking your assistant to do things. Use 'him', 'her', and 'them' (e.g., 'Please call Mr. Smith and ask him a question.'). Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "あなたが上司だと想像してください。アシスタントに仕事を頼む文を3つ書いてください。『him』『her』『them』を使ってください（例：「スミスさんに電話して、彼に質問してください。」）。Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 34,
        title: "Lesson 34: How to talk about general facts",
        goal: "Talk about general truths, concepts, and categories using plural and uncountable nouns without articles. <br><span style='font-size:0.9rem; color:var(--text-light);'>(冠詞（a, an, the）を使わずに、複数形や不可算名詞を用いて、一般的な事実や概念、カテゴリーについて話す。)</span>",
        vocab: [
            { eng: "Dogs", jpn: "犬（全般）" },
            { eng: "Cats", jpn: "猫（全般）" },
            { eng: "Animals", jpn: "動物（全般）" },
            { eng: "People", jpn: "人々" },
            { eng: "Water", jpn: "水" },
            { eng: "Coffee", jpn: "コーヒー" },
            { eng: "Time", jpn: "時間" },
            { eng: "Money", jpn: "お金" },
            { eng: "Information", jpn: "情報" },
            { eng: "Important", jpn: "重要な / 大切な" },
            { eng: "Dangerous", jpn: "危険な" },
            { eng: "Need", jpn: "必要とする" },
            { eng: "Love", jpn: "愛している / 大好き" },
            { eng: "Hate", jpn: "嫌い" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Do you like dogs?</span>", jpn: "犬は好きですか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>I love dogs.</span> But <span class='swappable'>cats are my favorite animals.</span>", jpn: "はい、犬は大好きです。でも、猫が私の一番好きな動物です。" },
            { speaker: "A", eng: "I agree. <span class='swappable'>Animals are very important for people.</span>", jpn: "同感です。動物は人々にとってとても大切です。" },
            { speaker: "B", eng: "That is true. By the way, <span class='swappable'>do you drink coffee?</span>", jpn: "その通りですね。ところで、コーヒーは飲みますか？" },
            { speaker: "A", eng: "Yes, I drink it every morning. <span class='swappable'>Water and coffee are my favorite drinks.</span>", jpn: "はい、毎朝飲みます。水とコーヒーが私の好きな飲み物です。" }
        ],
        expressions: [
            { category: "1. Asking about general preferences (一般的な好みを尋ねる)", options: ["Do you like dogs?", "Do you eat meat?", "Do you drink coffee?"] },
            { category: "2. Stating general preferences (一般的な好みを伝える)", options: ["I love dogs.", "I hate spiders.", "I like cats."] },
            { category: "3. Making general statements with plurals (複数形を使った一般的な事実)", options: ["Cats are my favorite animals.", "Animals are important.", "Apples are sweet."] },
            { category: "4. Making general statements with uncountables (不可算名詞を使った一般的な事実)", options: ["Water is good for you.", "Time is money.", "Information is power."] },
            { category: "5. Stating what people need (一般的に必要なものを伝える)", options: ["People need water.", "Plants need light.", "Children need sleep."] },
            { category: "6. Agreeing with a general fact (一般的な事実に同意する)", options: ["I agree.", "That is true.", "You are right."] }
        ],
        grammar: {
            point: "No article for general things (Zero Article) - 一般的な事柄を表す無冠詞（ゼロ冠詞）",
            explanation: "When we talk about things in general (all dogs, all water in the world), we do NOT use 'the', 'a', or 'an'. We just use the plural noun (dogs, cars) or the uncountable noun (water, money, time). <br>• <em>Correct:</em> I like <strong>dogs</strong>.<br>• <em>Incorrect:</em> I like <strong>the dogs</strong>. (This means specific dogs nearby).<br><span style='font-size:0.9rem; color:var(--text-light);'>（一般的な事柄（世の中のすべての犬、すべての水など）について話すときは、『the』『a』『an』などの冠詞を使いません。ただ複数形（dogs, cars）や数えられない名詞（water, money, time）をそのまま使います。<br>・正：I like dogs.（犬全般が好き）<br>・誤：I like the dogs.（特定のその犬たちが好き、という意味になってしまいます））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how there are no articles before the general nouns: 'I love <u>dogs</u>' (not <em>the</em> dogs) and '<u>Water</u> and <u>coffee</u> are my favorite' (not <em>the</em> water). <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：一般的な名詞の前に冠詞がないことに注目してください：『I love <u>dogs</u>（<em>the</em> dogs ではない）』や『<u>Water</u> and <u>coffee</u> are my favorite（<em>the</em> water ではない）』。)</span>",
            examples: [
                { eng: "People need sleep.", jpn: "人は睡眠を必要とします。" },
                { eng: "Cars are expensive.", jpn: "車（という乗り物全般）は高いです。" },
                { eng: "I listen to music every day.", jpn: "私は毎日音楽（全般）を聴きます。" }
            ]
        },
        clickingGames: [
            { prompt: "犬は好きですか？", target: "Do you like dogs?", words: ["Do", "you", "like", "dogs?"] },
            { prompt: "猫が私の一番好きな動物です。", target: "Cats are my favorite animals.", words: ["Cats", "are", "my", "favorite", "animals."] },
            { prompt: "動物は人々にとってとても大切です。", target: "Animals are very important for people.", words: ["Animals", "are", "very", "important", "for", "people."] },
            { prompt: "ところで、コーヒーは飲みますか？", target: "By the way, do you drink coffee?", words: ["By", "the", "way,", "do", "you", "drink", "coffee?"] },
            { prompt: "水とコーヒーが私の好きな飲み物です。", target: "Water and coffee are my favorite drinks.", words: ["Water", "and", "coffee", "are", "my", "favorite", "drinks."] }
        ],
        dropdownGames: [
            { before: "I really love", options: ["dogs", "the dogs", "a dog"], answer: "dogs", after: ". They are so friendly." },
            { before: "", options: ["Water", "The water", "A water"], answer: "Water", after: " is very important for your health." },
            { before: "Do you like", options: ["cats", "the cats", "a cats"], answer: "cats", after: "?" },
            { before: "I don't have", options: ["money", "the money", "a money"], answer: "money", after: " right now." },
            { before: "", options: ["People", "The people", "A people"], answer: "People", after: " need food to live." },
            { before: "She studies", options: ["history", "the history", "a history"], answer: "history", after: " at university." },
            { before: "", options: ["Time", "The time", "A time"], answer: "Time", after: " is money." },
            { before: "I drink", options: ["tea", "the tea", "a tea"], answer: "tea", after: " every morning." },
            { before: "", options: ["Children", "The children", "A childs"], answer: "Children", after: " like to play games." },
            { before: "I am afraid of", options: ["spiders", "the spiders", "spider"], answer: "spiders", after: "." }
        ],
        roleplay: {
            a: "Ask your partner about their general preferences. Ask them if they like a certain animal, and if they like a certain type of food or drink. (パートナーの一般的な好みについて尋ねてください。特定の動物が好きか、また特定の食べ物や飲み物が好きか聞いてください。)",
            b: "Answer your partner's questions using nouns without articles (e.g., 'I like dogs', 'I drink tea'). Add one more general fact (e.g., 'Tea is healthy'). (冠詞をつけない名詞を使って質問に答えてください（例：「犬が好きです」「お茶を飲みます」）。さらに、一般的な事実をもう1つ付け加えてください（例：「お茶は健康的です」）。)"
        },
        homework: {
            vocab: [
                { eng: "Health", jpn: "健康" },
                { eng: "Healthy", jpn: "健康的な" },
                { eng: "Fruit", jpn: "果物（全般）" },
                { eng: "Vegetables", jpn: "野菜（全般）" },
                { eng: "Sugar", jpn: "砂糖" },
                { eng: "Salt", jpn: "塩" },
                { eng: "Sleep", jpn: "睡眠" },
                { eng: "Exercise", jpn: "運動" },
                { eng: "Science", jpn: "科学" },
                { eng: "Nature", jpn: "自然" },
		{ eng: "Meat", jpn: "肉" },	
		{ eng: "Fish", jpn: "魚" },
                { eng: "Plants", jpn: "植物" },
                { eng: "Grow", jpn: "育つ / 成長する" }
            ],
            reading1: {
                title: "Task 2: Reading (General Health Facts)",
                instruction: "Read the short article about healthy habits.",
                eng: "<strong>How to Stay Healthy</strong><br><br>People need good habits to stay healthy. First, water is very important. You should drink water every day. Fruit and vegetables are also good for your body. They give you energy. Sugar is delicious, but it is bad for your teeth. Next, exercise is great for people. It makes you strong. Finally, sleep is very necessary. Children need a lot of sleep, and adults need it too. Good habits make a happy life!",
                jpn: "<strong>健康を維持する方法</strong><br><br>人々が健康を維持するためには良い習慣が必要です。まず、水はとても大切です。毎日水を飲むべきです。果物や野菜も体に良いです。それらはあなたにエネルギーを与えてくれます。砂糖は美味しいですが、歯には悪いです。次に、運動は人々にとって素晴らしいものです。それはあなたを強くします。最後に、睡眠は非常に必要です。子供には多くの睡眠が必要ですし、大人にも必要です。良い習慣が幸せな人生を作ります！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Do you prefer dogs or cats?", jpn: "犬と猫、どちらが好きですか？" },
                { speaker: "B", eng: "I prefer cats. Cats are very quiet.", jpn: "猫の方が好きです。猫はとても静かですから。" },
                { speaker: "A", eng: "That is true. Dogs are sometimes loud.", jpn: "それは事実ですね。犬は時々うるさいです。" },
                { speaker: "B", eng: "Do you have any pets?", jpn: "ペットは飼っていますか？" },
                { speaker: "A", eng: "No. I like animals, but I don't have time.", jpn: "いいえ。動物は好きですが、時間がありません。" },
                { speaker: "B", eng: "Time is very important.", jpn: "時間はとても大切ですからね。" },
                { speaker: "A", eng: "Yes, I work every day. Work is hard.", jpn: "ええ、毎日働いています。仕事は大変です。" },
                { speaker: "B", eng: "You need coffee! Coffee gives you energy.", jpn: "あなたにはコーヒーが必要です！コーヒーはエネルギーをくれますよ。" },
                { speaker: "A", eng: "I know, but coffee is expensive at the cafe.", jpn: "わかっていますが、カフェのコーヒーは高いんです。" },
                { speaker: "B", eng: "You should make coffee at home. It is cheap.", jpn: "家でコーヒーを作るべきですよ。安いですよ。" }
            ],
            writingTask: {
                promptEng: "Write three sentences stating general facts about the world or your preferences. Do NOT use 'the' or 'a' before the general nouns (e.g., 'Cats are cute. Water is important. I like music.'). Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "世の中の一般的な事実やあなたの好みについて、3つの文を書いてください。一般的な名詞の前には『the』や『a』を使用しないでください（例：「猫は可愛いです。水は大切です。私は音楽が好きです。」）。Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 35,
        title: "Lesson 35: How to talk about doing things with others",
        goal: "Describe who you are with, who you talk to, or who you do favors for using prepositions followed by object pronouns (with me, for him, to us). <br><span style='font-size:0.9rem; color:var(--text-light);'>(前置詞の後に目的格代名詞（with me, for him, to usなど）を使って、誰と一緒にいるか、誰に話すか、誰のために何かをするかを伝える。)</span>",
        vocab: [
            { eng: "With", jpn: "〜と一緒に" },
            { eng: "For", jpn: "〜のために" },
            { eng: "To", jpn: "〜へ / 〜に対して" },
            { eng: "From", jpn: "〜から" },
            { eng: "Meet", jpn: "打ち合わせをする / 会う" },
            { eng: "Talk", jpn: "話す" },
            { eng: "Print", jpn: "印刷する" },
            { eng: "Report", jpn: "報告書 / レポート" },
            { eng: "Strict", jpn: "厳しい" },
            { eng: "Kind", jpn: "親切な" },
            { eng: "Nice", jpn: "優しい / 良い" },
            { eng: "Nervous", jpn: "緊張している" },
            { eng: "Worry", jpn: "心配する" },
            { eng: "Always", jpn: "いつも" }
        ],
        dialogue: [
            { speaker: "A", eng: "David is in the meeting room. <span class='swappable'>Are you meeting with him?</span>", jpn: "デビッドは会議室にいます。彼と打ち合わせですか？" },
            { speaker: "B", eng: "Yes, but I don't have the report. <span class='swappable'>Can you print it for me?</span>", jpn: "はい、でも私は報告書を持っていません。私のために印刷してくれますか？" },
            { speaker: "A", eng: "I am busy, but Sarah is free. <span class='swappable'>You can talk to her.</span>", jpn: "私は忙しいですが、サラは空いています。彼女に話しかけるといいですよ。" },
            { speaker: "B", eng: "Okay. <span class='swappable'>Can you come with me?</span> She is very strict.", jpn: "わかりました。私と一緒に来てくれますか？彼女はとても厳しいので。" },
            { speaker: "A", eng: "Don't worry. <span class='swappable'>She is always nice to us.</span> Let's go.", jpn: "心配しないで。彼女はいつも私たちに優しいですよ。行きましょう。" }
        ],
        expressions: [
            { category: "1. Doing things together (一緒に行動する)", options: ["Are you meeting with him?", "Can you come with me?", "I am going with them."] },
            { category: "2. Doing favors (誰かのために何かをする)", options: ["Can you print it for me?", "I bought a coffee for you.", "This package is for her."] },
            { category: "3. Directing communication (誰に話すかを示す)", options: ["You can talk to her.", "Listen to him.", "Speak to them."] },
            { category: "4. Describing behavior towards someone (誰かに対する態度を示す)", options: ["She is always nice to us.", "He is strict with me.", "They are kind to him."] },
            { category: "5. Stating unavailability (対応できないことを伝える)", options: ["I am busy right now.", "I don't have the report.", "I can't right now."] },
            { category: "6. Reassuring someone (相手を安心させる)", options: ["Don't worry.", "It will be fine.", "She is very nice."] }
        ],
        grammar: {
            point: "Object Pronouns after Prepositions (with me, for him, to us) - 前置詞の後の目的格代名詞",
            explanation: "We learned object pronouns (me, you, him, her, us, them) after action verbs. We also use these same pronouns after prepositions like 'with', 'for', 'to', and 'from'. <br>• <em>Correct:</em> Come with <strong>me</strong>. / Talk to <strong>her</strong>.<br>• <em>Incorrect:</em> Come with <strong>I</strong>. / Talk to <strong>she</strong>. <br><span style='font-size:0.9rem; color:var(--text-light);'>（以前、動作を表す動詞の後に目的格代名詞（me, you, him, her, us, them）を使うことを学びました。これらと同じ代名詞を、『with』『for』『to』『from』といった前置詞の後にも使います。<br>・正：Come with me. / Talk to her.<br>・誤：Come with I. / Talk to she.）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the pronouns easily connect people to the action using prepositions: 'meeting <u>with him</u>', 'print it <u>for me</u>', 'talk <u>to her</u>', 'come <u>with me</u>', and 'nice <u>to us</u>'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：前置詞を使うことで、代名詞が動作と人を自然に結びつけていることに注目してください：『meeting <u>with him</u>』『print it <u>for me</u>』『talk <u>to her</u>』『come <u>with me</u>』『nice <u>to us</u>』。)</span>",
            examples: [
                { eng: "This email is from them.", jpn: "このメールは彼らからのものです。" },
                { eng: "Are you going to lunch with us?", jpn: "私たちと一緒に昼食に行きますか？" },
                { eng: "I made this sandwich for you.", jpn: "あなたのためにこのサンドイッチを作りました。" }
            ]
        },
        clickingGames: [
            { prompt: "彼と打ち合わせですか？", target: "Are you meeting with him?", words: ["Are", "you", "meeting", "with", "him?"] },
            { prompt: "私のために印刷してくれますか？", target: "Can you print it for me?", words: ["Can", "you", "print", "it", "for", "me?"] },
            { prompt: "彼女に話しかけるといいですよ。", target: "You can talk to her.", words: ["You", "can", "talk", "to", "her."] },
            { prompt: "私と一緒に来てくれますか？", target: "Can you come with me?", words: ["Can", "you", "come", "with", "me?"] },
            { prompt: "彼女はいつも私たちに優しいですよ。", target: "She is always nice to us.", words: ["She", "is", "always", "nice", "to", "us."] }
        ],
        dropdownGames: [
            { before: "Are you meeting", options: ["with", "for", "to"], answer: "with", after: " him today?" },
            { before: "This beautiful gift is for", options: ["her", "she", "hers"], answer: "her", after: "." },
            { before: "I am going to the cafe with", options: ["them", "they", "their"], answer: "them", after: "." },
            { before: "Please give the document to", options: ["him", "he", "his"], answer: "him", after: "." },
            { before: "This email is from", options: ["us", "we", "our"], answer: "us", after: ", the sales team." },
            { before: "Are you talking to", options: ["me", "I", "my"], answer: "me", after: "?" },
            { before: "Can you buy a coffee for", options: ["me", "I", "my"], answer: "me", after: "?" },
            { before: "She is playing tennis with", options: ["him", "he", "his"], answer: "him", after: "." },
            { before: "The manager is very strict to", options: ["them", "they", "their"], answer: "them", after: "." },
            { before: "I will send a message to", options: ["her", "she", "hers"], answer: "her", after: " tonight." }
        ],
        roleplay: {
            a: "Ask your partner if they are going to the meeting room. Ask them to come with you (use 'with me'). (パートナーに会議室に行くかどうか尋ねてください。あなたと一緒に来るように頼んでください（『with me』を使ってください）。)",
            b: "Agree to go with them. Ask your partner if they can carry your laptop for you (use 'for me'). (一緒にいくことに同意してください。パートナーに、自分のノートパソコンを運んでくれるか頼んでください（『for me』を使ってください）。)"
        },
        homework: {
            vocab: [
                { eng: "Project", jpn: "プロジェクト / 企画" },
                { eng: "Team", jpn: "チーム" },
                { eng: "Explain", jpn: "説明する" },
                { eng: "Understand", jpn: "理解する / わかる" },
                { eng: "Idea", jpn: "アイデア / 考え" },
                { eng: "Helpful", jpn: "役立つ / 助けになる" },
                { eng: "Share", jpn: "共有する / 分け合う" },
                { eng: "Important", jpn: "重要な" },
                { eng: "Message", jpn: "メッセージ" },
                { eng: "Listen", jpn: "聞く / 耳を傾ける" },
		{ eng: "Notes", jpn: "メモ" },
		{ eng: "Task", jpn: "タスク / 仕事" },
                { eng: "Agree", jpn: "同意する / 賛成する" },
                { eng: "Together", jpn: "一緒に" }
            ],
            reading1: {
                title: "Task 2: Reading (A Team Message)",
                instruction: "Read the group chat message from a team leader.",
                eng: "<strong>To:</strong> Marketing Team<br><strong>From:</strong> Anna<br><br>Hi everyone! We have a big meeting with Mr. Davis tomorrow. It is very important to us. I have some new ideas for the project. I will share them with you this afternoon. Please read the documents. If you don't understand, you can talk to me. I am always happy to explain things to you. Also, John is bringing coffee for us tomorrow morning. Say thank you to him! Let's do our best.",
                jpn: "<strong>宛先：</strong> マーケティングチーム<br><strong>差出人：</strong> アナ<br><br>皆さん、こんにちは！明日はデイビス氏との大きな会議があります。それは私たちにとってとても重要です。プロジェクトについていくつか新しいアイデアがあります。今日の午後、皆さんと共有します。資料を読んでください。もしわからなければ、私に話しかけてください。私はいつでも喜んで皆さんに説明しますよ。また、明日の朝、ジョンが私たちのためにコーヒーを買ってきてくれます。彼にありがとうと伝えてくださいね！頑張りましょう。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Are you going to the cafeteria for lunch?", jpn: "昼食にカフェテリアに行きますか？" },
                { speaker: "B", eng: "Yes, I am. I am starving.", jpn: "はい、行きます。お腹がペコペコです。" },
                { speaker: "A", eng: "Can I come with you?", jpn: "あなたと一緒に行ってもいいですか？" },
                { speaker: "B", eng: "Of course! Let's go together.", jpn: "もちろんです！一緒に行きましょう。" },
                { speaker: "A", eng: "Wait, Mike asked me a favor. He wants a sandwich.", jpn: "待って、マイクにお願い事をされました。彼がサンドイッチを欲しがっています。" },
                { speaker: "B", eng: "Are you buying it for him?", jpn: "あなたが彼のために買うのですか？" },
                { speaker: "A", eng: "Yes, I have money from him right here.", jpn: "はい、彼から預かったお金がここにあります。" },
                { speaker: "B", eng: "Okay. Oh, look, there is Sarah. Should we invite her?", jpn: "わかりました。あっ、見て、サラがいます。彼女を誘いましょうか？" },
                { speaker: "A", eng: "Yes, please talk to her. She looks lonely.", jpn: "はい、彼女に話しかけてください。寂しそうに見えます。" },
                { speaker: "B", eng: "Hey Sarah! Come eat with us!", jpn: "ねえ、サラ！私たちと一緒に食べにおいでよ！" }
            ],
            writingTask: {
                promptEng: "Write three sentences about interacting with your coworkers, friends, or family. Use a preposition (with, for, to, from) and an object pronoun (me, him, her, us, them) in every sentence. Example: 'I eat lunch with him. I buy coffee for her. She is nice to me.' Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "同僚、友人、または家族との関わりについて3つの文を書いてください。すべての文で前置詞（with, for, to, from）と目的格代名詞（me, him, her, us, them）を使用してください。例：「私は彼と一緒に昼食を食べます。彼女のためにコーヒーを買います。彼女は私に優しいです。」Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 40,
        title: "Lesson 40: How to ask for a favor",
        goal: "Politely ask someone to do something for you using 'Can you...'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『Can you...』を使って、誰かに何かをしてくれるよう丁寧に頼む。)</span>",
        vocab: [
            { eng: "Can", jpn: "〜してくれますか？ / できる" },
            { eng: "Help", jpn: "手伝う / 助ける" },
            { eng: "Favor", jpn: "お願い / 親切な行為" },
            { eng: "Open", jpn: "開ける" },
            { eng: "Close", jpn: "閉める" },
            { eng: "Turn on", jpn: "（電気などを）つける" },
            { eng: "Turn off", jpn: "（電気などを）消す" },
            { eng: "Window", jpn: "窓" },
            { eng: "Door", jpn: "ドア" },
            { eng: "Heater", jpn: "ヒーター / 暖房" },
            { eng: "Blanket", jpn: "毛布 / ブランケット" },
            { eng: "Broken", jpn: "壊れている" },
            { eng: "Sure", jpn: "もちろん" },
            { eng: "Sorry", jpn: "ごめんなさい" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me. <span class='swappable'>Can you help me?</span>", jpn: "すみません。私を手伝ってくれますか？" },
            { speaker: "B", eng: "<span class='swappable'>Sure, what do you need?</span>", jpn: "もちろん、何が必要ですか？" },
            { speaker: "A", eng: "It is very cold in here. <span class='swappable'>Can you close the window?</span>", jpn: "ここはとても寒いです。窓を閉めてくれますか？" },
            { speaker: "B", eng: "<span class='swappable'>I am sorry, I can't.</span> It is broken.", jpn: "ごめんなさい、できません。それは壊れているんです。" },
            { speaker: "A", eng: "Oh, I see. <span class='swappable'>Can you turn on the heater?</span>", jpn: "ああ、なるほど。ヒーターをつけてくれますか？" },
            { speaker: "B", eng: "<span class='swappable'>Yes, of course.</span> Just a minute.", jpn: "はい、もちろんです。少々お待ちください。" }
        ],
        expressions: [
            { category: "1. Asking for general help (手伝いを求める)", options: ["Can you help me?", "Can you do me a favor?", "Can you give me a hand?"] },
            { category: "2. Responding positively to help (手伝いを快諾する)", options: ["Sure, what do you need?", "Of course, what is it?", "Yes, how can I help?"] },
            { category: "3. Making a request (お願いをする)", options: ["Can you close the window?", "Can you shut the door?", "Can you turn off the fan?"] },
            { category: "4. Refusing politely (丁寧に断る)", options: ["I am sorry, I can't.", "Sorry, I cannot do that.", "I am afraid I can't."] },
            { category: "5. Offering an alternative request (代わりのお願いをする)", options: ["Can you turn on the heater?", "Can you bring me a blanket?", "Can you close the curtains?"] },
            { category: "6. Agreeing to the request (お願いを承諾する)", options: ["Yes, of course.", "Sure, no problem.", "Yes, I can do that."] }
        ],
        grammar: {
            point: "Using 'Can' for requests - お願いをする時の『Can』",
            explanation: "We use 'Can you' followed by a base verb to ask someone to do a favor for us. It is a common and friendly way to make a request.<br>• <strong>Can you</strong> + <strong>verb</strong> + <strong>object</strong>?<br>• Example: <em>Can you open the door?</em><br><span style='font-size:0.9rem; color:var(--text-light);'>（誰かに何かをお願いするとき、『Can you』の後に動詞の原形を続けて使います。これは依頼をする際の一般的でフレンドリーな方法です。<br>・<strong>Can you</strong> ＋ <strong>動詞</strong> ＋ <strong>目的語</strong>？<br>・例：Can you open the door?（ドアを開けてくれますか？））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how 'Can you' is always followed by a simple action: 'Can you <u>help</u> me?', 'Can you <u>close</u> the window?', and 'Can you <u>turn on</u> the heater?'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『Can you』の後には常にシンプルな動作が続いていることに注目してください：『Can you <u>help</u> me?』『Can you <u>close</u> the window?』『Can you <u>turn on</u> the heater?』。)</span>",
            examples: [
                { eng: "Can you carry this bag?", jpn: "このカバンを運んでくれますか？" },
                { eng: "Can you wait here, please?", jpn: "ここで待っていてくれますか？" },
                { eng: "I am thirsty. Can you get me some water?", jpn: "喉が渇きました。私に水を持ってきてくれますか？" }
            ]
        },
        clickingGames: [
            { prompt: "私を手伝ってくれますか？", target: "Can you help me?", words: ["Can", "you", "help", "me?"] },
            { prompt: "もちろん、何が必要ですか？", target: "Sure, what do you need?", words: ["Sure,", "what", "do", "you", "need?"] },
            { prompt: "窓を閉めてくれますか？", target: "Can you close the window?", words: ["Can", "you", "close", "the", "window?"] },
            { prompt: "ごめんなさい、できません。", target: "I am sorry, I can't.", words: ["I", "am", "sorry,", "I", "can't."] },
            { prompt: "ヒーターをつけてくれますか？", target: "Can you turn on the heater?", words: ["Can", "you", "turn", "on", "the", "heater?"] }
        ],
        dropdownGames: [
            { before: "Excuse me,", options: ["Can", "Do", "Are"], answer: "Can", after: " you help me with this?" },
            { before: "It is dark. Can you", options: ["turn on", "turn off", "open"], answer: "turn on", after: " the light?" },
            { before: "Can you", options: ["close", "turn", "make"], answer: "close", after: " the door behind you?" },
            { before: "I am busy.", options: ["Can", "Do", "Is"], answer: "Can", after: " you call me later?" },
            { before: "Sure, I", options: ["can", "am", "do"], answer: "can", after: " do that for you." },
            { before: "Can you", options: ["do", "make", "have"], answer: "do", after: " me a favor?" },
            { before: "I am sorry, I", options: ["can't", "don't", "am not"], answer: "can't", after: ". I have to go." },
            { before: "Can you", options: ["give", "take", "turn"], answer: "give", after: " me a hand with this heavy box?" },
            { before: "The room is too hot. Can you turn", options: ["off", "on", "out"], answer: "off", after: " the heater?" },
            { before: "", options: ["Can", "Are", "Does"], answer: "Can", after: " you bring me a menu, please?" }
        ],
        roleplay: {
            a: "Ask your partner to do you a favor (e.g., turn on the light, open the door). (パートナーにお願いをしてください（例：電気をつける、ドアを開けるなど）。)",
            b: "Politely refuse. Tell them the object is broken. Ask if you can do something else for them. (丁寧に断ってください。その物が壊れていると伝えます。代わりに何かできることがあるか尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Air conditioner", jpn: "エアコン" },
                { eng: "Fan", jpn: "扇風機 / ファン" },
                { eng: "Light", jpn: "電気 / 照明" },
                { eng: "TV", jpn: "テレビ" },
                { eng: "Radio", jpn: "ラジオ" },
                { eng: "Use", jpn: "使う" },
                { eng: "Borrow", jpn: "借りる" },
                { eng: "Lend", jpn: "貸す" },
                { eng: "Carry", jpn: "運ぶ" },
                { eng: "Heavy", jpn: "重い" },
                { eng: "Push", jpn: "押す" },
                { eng: "Pull", jpn: "引く" },
                { eng: "Hand", jpn: "手" },
                { eng: "Problem", jpn: "問題" }
            ],
            reading1: {
                title: "Task 2: Reading (Asking for Favors at Work)",
                instruction: "Read the email from a coworker asking for some help.",
                eng: "<strong>To:</strong> John<br><strong>From:</strong> Mary<br><br>Hi John, can you do me a favor today? I have a big presentation at 2 PM, and I am very busy this morning. First, can you open the meeting room for me? Next, the air conditioner in the room is off. Can you turn it on? Finally, I have three heavy boxes. Can you help me carry them to the room? I am sorry for asking so many things! Thank you for your help.",
                jpn: "<strong>宛先：</strong> ジョン<br><strong>差出人：</strong> メアリー<br><br>こんにちはジョン、今日お願いを聞いてくれますか？私は午後2時に大きなプレゼンテーションがあり、今朝はとても忙しいのです。まず、私のために会議室を開けてくれますか？次に、部屋のエアコンが消えています。それをつけてくれますか？最後に、私には重い箱が3つあります。それらを部屋に運ぶのを手伝ってくれますか？たくさんお願いしてごめんなさい！手伝ってくれてありがとうございます。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hi Mark. Can you give me a hand?", jpn: "こんにちはマーク。手を貸してくれますか？" },
                { speaker: "B", eng: "Sure, what is the problem?", jpn: "もちろん、何が問題ですか？" },
                { speaker: "A", eng: "This box is very heavy. Can you help me carry it?", jpn: "この箱はとても重いんです。運ぶのを手伝ってくれますか？" },
                { speaker: "B", eng: "Yes, of course. Where are we taking it?", jpn: "はい、もちろんです。どこへ持っていくのですか？" },
                { speaker: "A", eng: "To the manager's office. Can you push the elevator button for me?", jpn: "マネージャーのオフィスです。私の代わりにエレベーターのボタンを押してくれますか？" },
                { speaker: "B", eng: "No problem. Oh, the elevator door is closing fast!", jpn: "問題ありません。おっと、エレベーターのドアが早く閉まろうとしています！" },
                { speaker: "A", eng: "Can you hold the door, please?", jpn: "ドアを押さえておいてくれますか？" },
                { speaker: "B", eng: "I got it. Okay, we are here. Do you want me to open the office door?", jpn: "大丈夫です。よし、着きましたよ。オフィスのドアを開けましょうか？" },
                { speaker: "A", eng: "Yes, please. Can you turn on the light, too?", jpn: "はい、お願いします。電気もつけてくれますか？" },
                { speaker: "B", eng: "Done. Just put the box on the desk.", jpn: "つけました。箱は机の上に置いてください。" }
            ],
            writingTask: {
                promptEng: "Imagine you need help from a friend or coworker. Write three questions asking for a favor using 'Can you...'. (For example: Can you lend me a pen? Can you turn off the TV? Can you carry my bag?) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "友人や同僚からの助けが必要だと想像してください。『Can you...』を使ってお願いをする質問を3つ書いてください。（例：ペンを貸してくれますか？ テレビを消してくれますか？ カバンを運んでくれますか？）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 41,
        title: "Lesson 41: How to talk about things you plan to do",
        goal: "Describe actions you intend to complete using verbs like 'plan', 'want', and 'need' followed by a 'to'-infinitive. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『plan』『want』『need』などの動詞の後に『to不定詞』を続けて、これから実行する予定の行動について話す。)</span>",
        vocab: [
            { eng: "Plan", jpn: "計画する / 予定する" },
            { eng: "Want", jpn: "〜したい / 欲しい" },
            { eng: "Need", jpn: "〜する必要がある" },
            { eng: "Hope", jpn: "〜を望む / 願う" },
            { eng: "Decide", jpn: "決める / 決断する" },
            { eng: "To", jpn: "〜すること（不定詞のto）" },
            { eng: "Travel", jpn: "旅行する" },
            { eng: "Visit", jpn: "訪問する / 訪れる" },
            { eng: "Move", jpn: "引っ越す / 動く" },
            { eng: "Study", jpn: "勉強する" },
            { eng: "Abroad", jpn: "海外へ / 外国で" },
            { eng: "Next year", jpn: "来年" },
            { eng: "Soon", jpn: "すぐに / 近いうちに" },
            { eng: "Someday", jpn: "いつか" }
        ],
        dialogue: [
            { speaker: "A", eng: "What are your plans for next year?", jpn: "来年の予定は何ですか？" },
            { speaker: "B", eng: "<span class='swappable'>I plan to travel abroad.</span>", jpn: "海外旅行をする予定です。" },
            { speaker: "A", eng: "That sounds exciting! Where <span class='swappable'>do you want to go?</span>", jpn: "それは楽しそうですね！どこに行きたいのですか？" },
            { speaker: "B", eng: "<span class='swappable'>I hope to visit Spain.</span>", jpn: "スペインを訪れたいと願っています。" },
            { speaker: "A", eng: "Spain is beautiful. <span class='swappable'>Do you need to study Spanish?</span>", jpn: "スペインは美しいですよ。スペイン語を勉強する必要がありますか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>I need to take a class.</span> Let me know when <span class='swappable'>you decide to travel!</span>", jpn: "はい、クラスを受ける必要があります。あなたが旅行することを決めたら教えてくださいね！" }
        ],
        expressions: [
            { category: "1. Stating a plan (予定を伝える)", options: ["I plan to travel abroad.", "I plan to change jobs.", "I plan to move soon."] },
            { category: "2. Asking about desires (希望を尋ねる)", options: ["do you want to go?", "do you want to do?", "do you want to see?"] },
            { category: "3. Expressing a hope (希望や願いを伝える)", options: ["I hope to visit Spain.", "I hope to see you soon.", "I hope to live there someday."] },
            { category: "4. Asking about requirements (必要なことを尋ねる)", options: ["Do you need to study Spanish?", "Do you need to save money?", "Do you need to get a visa?"] },
            { category: "5. Stating a requirement (必要なことを伝える)", options: ["I need to take a class.", "I need to buy a ticket.", "I need to work hard."] },
            { category: "6. Referring to a decision (決定について言及する)", options: ["you decide to travel!", "you decide to go!", "you decide to leave!"] }
        ],
        grammar: {
            point: "Verbs followed by a 'to'-infinitive - 『to不定詞』を伴う動詞",
            explanation: "To talk about actions we intend to do in the future, we often use two verbs together. The first verb expresses the intention (plan, want, need, hope, decide), and the second verb is the action (travel, buy, go). We connect them with the word 'to'.<br>• <strong>Subject</strong> + <strong>Verb 1</strong> + <strong>to</strong> + <strong>Verb 2 (base form)</strong><br>• Example: I <em>plan to travel</em>. / She <em>needs to study</em>.<br><span style='font-size:0.9rem; color:var(--text-light);'>（将来実行しようとしている行動について話すとき、2つの動詞を一緒に使うことがよくあります。最初の動詞は意図（plan, want, need, hope, decide）を表し、2番目の動詞は実際の行動（travel, buy, go）を表します。これらを『to』という単語で繋ぎます（to不定詞）。<br>・<strong>主語</strong> ＋ <strong>動詞1</strong> ＋ <strong>to</strong> ＋ <strong>動詞2（原形）</strong><br>・例：I plan to travel.（私は旅行する予定です） / She needs to study.（彼女は勉強する必要があります））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the Verb + to + Verb structure in the conversation: 'plan <u>to</u> travel', 'want <u>to</u> go', 'hope <u>to</u> visit', 'need <u>to</u> study', 'need <u>to</u> take', and 'decide <u>to</u> travel'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：会話の中にある「動詞＋to＋動詞」の構造に注目してください：『plan <u>to</u> travel』『want <u>to</u> go』『hope <u>to</u> visit』『need <u>to</u> study』『need <u>to</u> take』『decide <u>to</u> travel』。)</span>",
            examples: [
                { eng: "We plan to buy a new house next year.", jpn: "私たちは来年、新しい家を買う予定です。" },
                { eng: "He wants to learn English.", jpn: "彼は英語を学びたがっています。" },
                { eng: "I decided to change my job.", jpn: "私は転職することを決めました。" }
            ]
        },
        clickingGames: [
            { prompt: "海外旅行をする予定です。", target: "I plan to travel abroad.", words: ["I", "plan", "to", "travel", "abroad."] },
            { prompt: "どこに行きたいのですか？", target: "Where do you want to go?", words: ["Where", "do", "you", "want", "to", "go?"] },
            { prompt: "スペインを訪れたいと願っています。", target: "I hope to visit Spain.", words: ["I", "hope", "to", "visit", "Spain."] },
            { prompt: "スペイン語を勉強する必要がありますか？", target: "Do you need to study Spanish?", words: ["Do", "you", "need", "to", "study", "Spanish?"] },
            { prompt: "はい、クラスを受ける必要があります。", target: "Yes, I need to take a class.", words: ["Yes,", "I", "need", "to", "take", "a", "class."] }
        ],
        dropdownGames: [
            { before: "I plan", options: ["to travel", "travel", "traveling"], answer: "to travel", after: " to Kyoto next month." },
            { before: "Do you want", options: ["to eat", "eat", "eating"], answer: "to eat", after: " dinner now?" },
            { before: "She needs", options: ["to buy", "buy", "buying"], answer: "to buy", after: " a new computer for work." },
            { before: "We hope", options: ["to see", "see", "saw"], answer: "to see", after: " you again soon." },
            { before: "They decided", options: ["to move", "move", "moved"], answer: "to move", after: " to a bigger apartment." },
            { before: "I don't want", options: ["to go", "go", "going"], answer: "to go", after: " out tonight." },
            { before: "Do we need", options: ["to bring", "bring", "brings"], answer: "to bring", after: " our passports?" },
            { before: "He plans", options: ["to start", "start", "starting"], answer: "to start", after: " his own business someday." },
            { before: "I hope", options: ["to finish", "finish", "finished"], answer: "to finish", after: " this project by Friday." },
            { before: "When did you decide", options: ["to learn", "learn", "learning"], answer: "to learn", after: " the guitar?" }
        ],
        roleplay: {
            a: "Ask your partner where they want to travel next year (use 'want to'). Ask if they need to buy a ticket soon (use 'need to'). (パートナーに来年どこに旅行したいか尋ねてください（『want to』を使用）。近いうちにチケットを買う必要があるか尋ねてください（『need to』を使用）。)",
            b: "Answer your partner. Tell them where you plan to go (use 'plan to' or 'hope to'). Tell them you need to save money first! (パートナーに答えてください。どこに行く予定か伝えてください（『plan to』または『hope to』を使用）。まずはお金を貯める必要があると伝えてください！（『need to』を使用）。)"
        },
        homework: {
            vocab: [
                { eng: "Save (money)", jpn: "（お金を）貯める / 節約する" },
                { eng: "Buy", jpn: "買う" },
                { eng: "Sell", jpn: "売る" },
                { eng: "Learn", jpn: "学ぶ / 習得する" },
                { eng: "Change", jpn: "変える / 変わる" },
                { eng: "Job", jpn: "仕事" },
                { eng: "House", jpn: "家" },
                { eng: "Language", jpn: "言語 / 言葉" },
                { eng: "Skill", jpn: "スキル / 技能" },
                { eng: "Country", jpn: "国" },
                { eng: "Future", jpn: "未来 / 将来" },
                { eng: "Ticket", jpn: "チケット" },
                { eng: "Visa", jpn: "ビザ / 査証" },
                { eng: "Goal", jpn: "目標" }
            ],
            reading1: {
                title: "Task 2: Reading (Future Goals)",
                instruction: "Read the blog post about someone's goals for the next five years.",
                eng: "<strong>My Five-Year Plan</strong><br><br>I have many goals for the future. First, I want to change my job. I want to work in a foreign country. I hope to move to Canada in two years. To do this, I need to learn English very well. I plan to study every day after work. Also, I need to save money. I plan to save $10,000 before I move. It is a big challenge, but I decided to try my best. I hope to achieve my dreams someday!",
                jpn: "<strong>私の5カ年計画</strong><br><br>私には将来に向けた多くの目標があります。まず、転職したいです。外国で働きたいのです。2年後にカナダに引っ越すことを願っています。そのためには、英語をとても上手に習得する必要があります。仕事の後、毎日勉強する予定です。また、お金を貯める必要もあります。引っ越す前に1万ドル貯める予定です。大きな挑戦ですが、ベストを尽くすことに決めました。いつか夢を叶えたいと願っています！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "The weekend is almost here. Do you have any plans?", jpn: "もうすぐ週末ですね。何か予定はありますか？" },
                { speaker: "B", eng: "Yes, I plan to relax at home on Saturday.", jpn: "はい、土曜日は家でリラックスする予定です。" },
                { speaker: "A", eng: "That sounds nice. Do you want to do anything on Sunday?", jpn: "いいですね。日曜日は何かしたいですか？" },
                { speaker: "B", eng: "I need to clean my apartment. It is very messy.", jpn: "アパートを掃除する必要があります。とても散らかっているんです。" },
                { speaker: "A", eng: "I understand. I need to do laundry, too.", jpn: "わかります。私も洗濯をする必要があります。" },
                { speaker: "B", eng: "What about your next vacation? Where do you plan to go?", jpn: "次の休暇はどうですか？どこに行く予定ですか？" },
                { speaker: "A", eng: "I want to go to Hokkaido. I hope to see the snow festival.", jpn: "北海道に行きたいです。雪まつりを見たいと願っています。" },
                { speaker: "B", eng: "Wow! Do you need to buy thick winter clothes?", jpn: "わあ！厚手の冬服を買う必要がありますか？" },
                { speaker: "A", eng: "Yes, I definitely need to buy a warm jacket.", jpn: "はい、絶対に暖かいジャケットを買う必要があります。" },
                { speaker: "B", eng: "Well, let me know when you decide to book your hotel!", jpn: "ホテルを予約することに決めたら教えてくださいね！" }
            ],
            writingTask: {
                promptEng: "Write three sentences about your goals or plans for the future. Use 'plan to', 'want to', and 'need to'. (For example: I plan to travel to America. I want to learn Spanish. I need to save money.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "あなたの将来の目標や計画について、3つの文を書いてください。『plan to』『want to』『need to』を使用してください。（例：私はアメリカに旅行する予定です。スペイン語を学びたいです。お金を貯める必要があります。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 46,
        title: "Lesson 46: How to explain rules",
        goal: "Explain rules and obligations using 'must' and 'mustn't', and ask for or give permission using 'can'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『must』と『mustn't』を使ってルールや義務を説明し、『can』を使って許可を求めたり与えたりする。)</span>",
        vocab: [
            { eng: "Must", jpn: "〜しなければならない" },
            { eng: "Mustn't", jpn: "〜してはいけない" },
            { eng: "Can", jpn: "〜してもよい / できる" },
            { eng: "Rule", jpn: "ルール / 規則" },
            { eng: "Wear", jpn: "着る / 身につける" },
            { eng: "Uniform", jpn: "制服 / ユニフォーム" },
            { eng: "Eat", jpn: "食べる" },
            { eng: "Drink", jpn: "飲む" },
            { eng: "Smoke", jpn: "タバコを吸う" },
            { eng: "Park", jpn: "駐車する" },
            { eng: "Enter", jpn: "入る" },
            { eng: "Sign", jpn: "標識 / サイン" },
            { eng: "Here", jpn: "ここで" },
            { eng: "Outside", jpn: "外で" }
        ],
        dialogue: [
            { speaker: "A", eng: "Welcome to the gym. Let me explain the rules.", jpn: "ジムへようこそ。ルールを説明させてください。" },
            { speaker: "B", eng: "Okay. <span class='swappable'>Can I wear my street shoes here?</span>", jpn: "わかりました。ここで外靴（ストリートシューズ）を履いてもいいですか？" },
            { speaker: "A", eng: "No, <span class='swappable'>you mustn't wear street shoes.</span> <span class='swappable'>You must wear sports shoes.</span>", jpn: "いいえ、外靴を履いてはいけません。スポーツシューズを履かなければなりません。" },
            { speaker: "B", eng: "I understand. <span class='swappable'>Can I bring my coffee inside?</span>", jpn: "わかりました。中にコーヒーを持ち込んでもいいですか？" },
            { speaker: "A", eng: "No, <span class='swappable'>you mustn't drink coffee here.</span> But <span class='swappable'>you can drink water.</span>", jpn: "いいえ、ここでコーヒーを飲んではいけません。でもお水は飲んでもいいですよ。" },
            { speaker: "B", eng: "Got it. Thank you.", jpn: "了解しました。ありがとうございます。" }
        ],
        expressions: [
            { category: "1. Asking for permission (許可を求める)", options: ["Can I wear my street shoes here?", "Can I park my car here?", "Can I use this locker?"] },
            { category: "2. Stating prohibitions (禁止事項を伝える)", options: ["you mustn't wear street shoes.", "you mustn't park here.", "you mustn't use that locker."] },
            { category: "3. Stating obligations (義務を伝える)", options: ["You must wear sports shoes.", "You must park outside.", "You must use a padlock."] },
            { category: "4. Asking for permission (food/drink) (飲食などの許可を求める)", options: ["Can I bring my coffee inside?", "Can I eat my sandwich?", "Can I drink juice here?"] },
            { category: "5. Stating prohibitions (food/drink) (飲食などの禁止を伝える)", options: ["you mustn't drink coffee here.", "you mustn't eat food here.", "you mustn't drink juice."] },
            { category: "6. Giving permission (許可を与える)", options: ["you can drink water.", "you can eat in the lounge.", "you can drink tea."] }
        ],
        grammar: {
            point: "Must, Mustn't, and Can for Rules - ルールを表す『must』『mustn't』『can』",
            explanation: "We use <strong>must</strong> for strong obligations or rules (things you have to do). We use <strong>mustn't</strong> (must not) for prohibitions (things you are not allowed to do). We use <strong>can</strong> to ask for or give permission.<br>• <strong>Must:</strong> You must wear a uniform.<br>• <strong>Mustn't:</strong> You mustn't smoke here.<br>• <strong>Can:</strong> Can I park here? / You can park outside.<br><span style='font-size:0.9rem; color:var(--text-light);'>（強い義務やルール（しなければならないこと）には<strong>must</strong>を使います。禁止事項（してはいけないこと）には<strong>mustn't</strong>（must not）を使います。許可を求めたり与えたりする場合には<strong>can</strong>を使います。<br>・<strong>Must:</strong> 制服を着なければなりません。<br>・<strong>Mustn't:</strong> ここでタバコを吸ってはいけません。<br>・<strong>Can:</strong> ここに駐車してもいいですか？ / 外に駐車してもいいですよ。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the words change the rule: '<u>Can I</u> wear' (asking), '<u>mustn't</u> wear' (prohibited), and '<u>must</u> wear' (required). <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：単語がどのようにルールを変えているかに注目してください：『<u>Can I</u> wear（してもいいですか）』『<u>mustn't</u> wear（してはいけない）』『<u>must</u> wear（しなければならない）』。)</span>",
            examples: [
                { eng: "You must show your ID card.", jpn: "IDカードを見せなければなりません。" },
                { eng: "Staff mustn't use their phones at work.", jpn: "従業員は職場で電話を使ってはいけません。" },
                { eng: "Can I open the window?", jpn: "窓を開けてもいいですか？" }
            ]
        },
        clickingGames: [
            { prompt: "ここで外靴を履いてはいけません。", target: "You mustn't wear street shoes here.", words: ["You", "mustn't", "wear", "street", "shoes", "here."] },
            { prompt: "スポーツシューズを履かなければなりません。", target: "You must wear sports shoes.", words: ["You", "must", "wear", "sports", "shoes."] },
            { prompt: "中にコーヒーを持ち込んでもいいですか？", target: "Can I bring my coffee inside?", words: ["Can", "I", "bring", "my", "coffee", "inside?"] },
            { prompt: "ここでコーヒーを飲んではいけません。", target: "You mustn't drink coffee here.", words: ["You", "mustn't", "drink", "coffee", "here."] },
            { prompt: "お水は飲んでもいいですよ。", target: "You can drink water.", words: ["You", "can", "drink", "water."] }
        ],
        dropdownGames: [
            { before: "Look at the sign. You", options: ["mustn't", "must", "can"], answer: "mustn't", after: " smoke in this building." },
            { before: "You", options: ["must", "mustn't", "can"], answer: "must", after: " wear a seatbelt in the car. It is the law." },
            { before: "Excuse me,", options: ["can", "must", "mustn't"], answer: "can", after: " I sit here?" },
            { before: "You", options: ["can", "must", "mustn't"], answer: "can", after: " use my pen if you need one." },
            { before: "The test is starting. You", options: ["mustn't", "must", "can"], answer: "mustn't", after: " talk to your friends." },
            { before: "Employees", options: ["must", "mustn't", "can"], answer: "must", after: " wash their hands before cooking." },
            { before: "It is a secret. You", options: ["mustn't", "must", "can"], answer: "mustn't", after: " tell anyone!" },
            { before: "", options: ["Can", "Must", "Mustn't"], answer: "Can", after: " we take photos in the museum?" },
            { before: "No, you", options: ["mustn't", "must", "can"], answer: "mustn't", after: " take photos. Put your camera away." },
            { before: "You", options: ["must", "mustn't", "can"], answer: "must", after: " arrive at the airport two hours early." }
        ],
        roleplay: {
            a: "You are a librarian. Tell a visitor that they must be quiet. Tell them they mustn't eat food in the library. (あなたは図書館の司書です。訪問者に、静かにしなければならないと伝えてください。また、図書館で食べ物を食べてはいけないと伝えてください。)",
            b: "You are the visitor. Apologize. Ask if you can drink water from your bottle. (あなたは訪問者です。謝ってください。自分のボトルから水を飲んでもいいか尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Quiet", jpn: "静かな" },
                { eng: "Loud", jpn: "うるさい / 大声の" },
                { eng: "Phone", jpn: "電話" },
                { eng: "Library", jpn: "図書館" },
                { eng: "Museum", jpn: "博物館 / 美術館" },
                { eng: "Touch", jpn: "触る" },
                { eng: "Take pictures", jpn: "写真を撮る" },
                { eng: "Run", jpn: "走る" },
                { eng: "Walk", jpn: "歩く" },
                { eng: "ID card", jpn: "IDカード / 身分証明書" },
                { eng: "Show", jpn: "見せる" },
                { eng: "Staff", jpn: "スタッフ / 従業員" },
                { eng: "Only", jpn: "〜だけ / 専用" },
                { eng: "Area", jpn: "エリア / 区域" }
            ],
            reading1: {
                title: "Task 2: Reading (Swimming Pool Rules)",
                instruction: "Read the sign showing the rules for the public swimming pool.",
                eng: "<strong>Pool Rules</strong><br><br>Welcome to the City Pool! Please follow these rules to stay safe.<br>1. You must wear a swimsuit. You mustn't wear street clothes in the water.<br>2. You mustn't run next to the pool. It is very dangerous. You must walk slowly.<br>3. You can bring water bottles, but you mustn't bring glass bottles.<br>4. You must take a shower before you enter the pool.<br>Have a great time!",
                jpn: "<strong>プールのルール</strong><br><br>市民プールへようこそ！安全に過ごすためにこれらのルールを守ってください。<br>1. 水着を着用しなければなりません。水の中で普段着を着てはいけません。<br>2. プールのそばを走ってはいけません。とても危険です。ゆっくり歩かなければなりません。<br>3. 水筒は持ち込んでもいいですが、ガラスの瓶を持ち込んではいけません。<br>4. プールに入る前にシャワーを浴びなければなりません。<br>楽しい時間をお過ごしください！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Excuse me, I am a new employee. Where can I park my car?", jpn: "すみません、私は新しい従業員です。どこに車を駐車してもいいですか？" },
                { speaker: "B", eng: "You can park in the back lot. But you must show your ID card to the guard.", jpn: "裏の駐車場に停めてもいいですよ。でも、警備員にIDカードを見せなければなりません。" },
                { speaker: "A", eng: "Okay, thank you. Can I park in the front?", jpn: "わかりました、ありがとうございます。前に駐車してもいいですか？" },
                { speaker: "B", eng: "No, you mustn't park in the front. That area is for customers only.", jpn: "いいえ、前に駐車してはいけません。あのエリアはお客様専用です。" },
                { speaker: "A", eng: "I understand. What about lunch? Can I eat at my desk?", jpn: "わかりました。昼食はどうですか？自分のデスクで食べてもいいですか？" },
                { speaker: "B", eng: "No, you mustn't eat hot food at your desk because of the smell. You must eat in the cafeteria.", jpn: "いいえ、匂いがあるため、デスクで温かい食べ物を食べてはいけません。カフェテリアで食べなければなりません。" },
                { speaker: "A", eng: "Can I drink coffee at my desk?", jpn: "デスクでコーヒーを飲んでもいいですか？" },
                { speaker: "B", eng: "Yes, you can drink coffee and water. That is no problem.", jpn: "はい、コーヒーやお水は飲んでもいいですよ。それは問題ありません。" },
                { speaker: "A", eng: "Thank you for explaining the rules.", jpn: "ルールを説明してくれてありがとうございます。" },
                { speaker: "B", eng: "You are welcome. Good luck on your first day!", jpn: "どういたしまして。初日頑張ってくださいね！" }
            ],
            writingTask: {
                promptEng: "Write three rules for your house, your office, or a museum. Use 'must', 'mustn't', and 'can'. (For example: You must take off your shoes. You mustn't smoke. You can watch TV.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "あなたの家、オフィス、または博物館のルールを3つ書いてください。『must』『mustn't』『can』を使用してください。（例：靴を脱がなければなりません。タバコを吸ってはいけません。テレビを見てもいいですよ。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 47,
        title: "Lesson 47: How to talk about the previous week",
        goal: "Describe what you did last week or yesterday using regular past tense verbs (-ed). <br><span style='font-size:0.9rem; color:var(--text-light);'>(規則動詞の過去形（-ed）を使って、先週や昨日に何をしたかを説明する。)</span>",
        vocab: [
            { eng: "Yesterday", jpn: "昨日" },
            { eng: "Last week", jpn: "先週" },
            { eng: "Last night", jpn: "昨夜" },
            { eng: "Worked", jpn: "働いた" },
            { eng: "Stayed", jpn: "とどまった / 滞在した" },
            { eng: "Cooked", jpn: "料理した" },
            { eng: "Cleaned", jpn: "掃除した" },
            { eng: "Watched", jpn: "見た" },
            { eng: "Listened", jpn: "聞いた" },
            { eng: "Walked", jpn: "歩いた" },
            { eng: "Played", jpn: "した / 遊んだ" },
            { eng: "Movie", jpn: "映画" },
            { eng: "Dinner", jpn: "夕食" },
            { eng: "Room", jpn: "部屋" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hello! <span class='swappable'>What did you do yesterday?</span>", jpn: "こんにちは！昨日は何をしましたか？" },
            { speaker: "B", eng: "<span class='swappable'>I worked at the office.</span> After work, <span class='swappable'>I cooked dinner.</span>", jpn: "オフィスで働きました。仕事の後、夕食を料理しました。" },
            { speaker: "A", eng: "That sounds nice. <span class='swappable'>I stayed home.</span> And <span class='swappable'>I watched a movie.</span>", jpn: "それはいいですね。私は家にいました。そして、映画を見ました。" },
            { speaker: "B", eng: "What movie did you watch?", jpn: "何の映画を見たのですか？" },
            { speaker: "A", eng: "It was a comedy. Later, <span class='swappable'>I listened to music.</span>", jpn: "コメディでした。その後、音楽を聞きました。" },
            { speaker: "B", eng: "It sounds like a relaxing day.", jpn: "リラックスした一日のようですね。" }
        ],
        expressions: [
            { category: "1. Asking about the past (過去について尋ねる)", options: ["What did you do yesterday?", "What did you do last week?", "What did you do on Sunday?"] },
            { category: "2. Work and location (仕事や場所について話す)", options: ["I worked at the office.", "I walked in the park.", "I played tennis."] },
            { category: "3. Evening chores (夕方の家事などを話す)", options: ["I cooked dinner.", "I cleaned my room.", "I washed my car."] },
            { category: "4. Relaxing at home (家で過ごしたことを話す)", options: ["I stayed home.", "I rested all day.", "I relaxed at home."] },
            { category: "5. Screen time (画面を見た活動を話す)", options: ["I watched a movie.", "I watched TV.", "I played a video game."] },
            { category: "6. Audio and hobbies (音や趣味の活動を話す)", options: ["I listened to music.", "I practiced the guitar.", "I talked to my friend."] }
        ],
        grammar: {
            point: "Past Simple (Regular Verbs) - 過去形（規則動詞）",
            explanation: "To talk about finished actions in the past, we use the past tense. For regular verbs, we simply add <strong>-ed</strong> (or just <strong>-d</strong> if it ends in 'e') to the end of the verb. This form is the same for all subjects (I, you, he, she, we, they).<br>• work -> <strong>worked</strong> (I worked yesterday.)<br>• clean -> <strong>cleaned</strong> (She cleaned her room.)<br>• stay -> <strong>stayed</strong> (We stayed home.)<br><span style='font-size:0.9rem; color:var(--text-light);'>（過去に終わった行動について話すとき、過去形を使います。規則動詞の場合、動詞の最後に<strong>-ed</strong>（『e』で終わる場合は<strong>-d</strong>のみ）を付けます。この形はすべての主語（I, you, he, she, we, they）で同じです。<br>・work -> <strong>worked</strong>（私は昨日働いた）<br>・clean -> <strong>cleaned</strong>（彼女は部屋を掃除した）<br>・stay -> <strong>stayed</strong>（私たちは家にいた））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the '-ed' ending on all the action verbs describing the past: 'work<u>ed</u>', 'cook<u>ed</u>', 'stay<u>ed</u>', 'watch<u>ed</u>', and 'listen<u>ed</u>'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：過去を説明するすべての動作動詞の『-ed』の語尾に注目してください：『work<u>ed</u>』『cook<u>ed</u>』『stay<u>ed</u>』『watch<u>ed</u>』『listen<u>ed</u>』。)</span>",
            examples: [
                { eng: "I played soccer last week.", jpn: "私は先週サッカーをしました。" },
                { eng: "She washed her car yesterday morning.", jpn: "彼女は昨日の朝、車を洗いました。" },
                { eng: "They watched a baseball game last night.", jpn: "彼らは昨夜、野球の試合を見ました。" }
            ]
        },
        clickingGames: [
            { prompt: "オフィスで働きました。", target: "I worked at the office.", words: ["I", "worked", "at", "the", "office."] },
            { prompt: "仕事の後、夕食を料理しました。", target: "After work, I cooked dinner.", words: ["After", "work,", "I", "cooked", "dinner."] },
            { prompt: "私は家にいました。", target: "I stayed home.", words: ["I", "stayed", "home."] },
            { prompt: "そして、映画を見ました。", target: "And I watched a movie.", words: ["And", "I", "watched", "a", "movie."] },
            { prompt: "その後、音楽を聞きました。", target: "Later, I listened to music.", words: ["Later,", "I", "listened", "to", "music."] }
        ],
        dropdownGames: [
            { before: "Yesterday, I", options: ["worked", "work", "working"], answer: "worked", after: " from 9 AM to 5 PM." },
            { before: "Last night, she", options: ["watched", "watch", "watches"], answer: "watched", after: " a long movie." },
            { before: "We", options: ["cooked", "cook", "cooks"], answer: "cooked", after: " pasta for dinner last week." },
            { before: "I", options: ["stayed", "stay", "stays"], answer: "stayed", after: " at a beautiful hotel in Kyoto." },
            { before: "He", options: ["listened", "listen", "listens"], answer: "listened", after: " to a podcast on the train." },
            { before: "They", options: ["played", "play", "playing"], answer: "played", after: " tennis in the park yesterday." },
            { before: "My brother", options: ["cleaned", "clean", "cleans"], answer: "cleaned", after: " his room on Sunday." },
            { before: "I", options: ["walked", "walk", "walks"], answer: "walked", after: " to the station this morning." },
            { before: "The movie", options: ["started", "start", "starts"], answer: "started", after: " at 7 PM last night." },
            { before: "She", options: ["enjoyed", "enjoy", "enjoys"], answer: "enjoyed", after: " the party very much." }
        ],
        roleplay: {
            a: "Ask your partner what they did last weekend. (パートナーに先週末何をしたか尋ねてください。)",
            b: "Answer your partner using two regular verbs in the past tense (e.g., played, watched, cooked, cleaned). Then ask them what they did. (過去形の規則動詞（played, watched, cooked, cleanedなど）を2つ使って答えてください。その後、相手が何をしたか尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Talked", jpn: "話した" },
                { eng: "Visited", jpn: "訪れた" },
                { eng: "Waited", jpn: "待った" },
                { eng: "Arrived", jpn: "到着した" },
                { eng: "Started", jpn: "始まった / 始めた" },
                { eng: "Finished", jpn: "終わった / 終えた" },
                { eng: "Studied", jpn: "勉強した" },
                { eng: "Enjoyed", jpn: "楽しんだ" },
                { eng: "Relaxed", jpn: "リラックスした" },
                { eng: "Friend", jpn: "友達" },
                { eng: "Family", jpn: "家族" },
                { eng: "Game", jpn: "ゲーム / 試合" },
                { eng: "Morning", jpn: "朝" },
                { eng: "Night", jpn: "夜" }
            ],
            reading1: {
                title: "Task 2: Reading (A Busy Weekend)",
                instruction: "Read the diary entry about what someone did last weekend.",
                eng: "<strong>My Weekend</strong><br><br>Last weekend was very busy. On Saturday morning, I cleaned my apartment. I washed the windows and cleaned the floors. In the afternoon, I visited my parents. We talked for a long time, and my mother cooked a delicious dinner. On Sunday, I stayed home. I studied English for two hours in the morning. Then, I played video games and relaxed. The weekend finished too fast, but I really enjoyed it.",
                jpn: "<strong>私の週末</strong><br><br>先週末はとても忙しかったです。土曜日の朝、私はアパートを掃除しました。窓を洗い、床を掃除しました。午後には両親を訪ねました。私たちは長い時間話し、母は美味しい夕食を料理してくれました。日曜日は家にいました。朝は2時間英語を勉強しました。それから、ビデオゲームをしてリラックスしました。週末はあまりにも早く終わってしまいましたが、本当に楽しみました。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hi Sarah. How was your weekend?", jpn: "こんにちはサラ。週末はどうでしたか？" },
                { speaker: "B", eng: "It was great! I visited Kyoto with my family.", jpn: "素晴らしかったです！家族と京都を訪れました。" },
                { speaker: "A", eng: "Wow, Kyoto is beautiful. What did you do there?", jpn: "わあ、京都は美しいですよね。そこで何をしたのですか？" },
                { speaker: "B", eng: "We walked around the old temples. Then, we rested at a cafe.", jpn: "古いお寺の周りを歩きました。その後、カフェで休憩しました。" },
                { speaker: "A", eng: "Did you try any good food?", jpn: "何か美味しい食べ物は試しましたか？" },
                { speaker: "B", eng: "Yes, we enjoyed some traditional sweets. What did you do last weekend?", jpn: "はい、伝統的なお菓子を楽しみました。あなたは先週末何をしましたか？" },
                { speaker: "A", eng: "I just stayed in the city. I played tennis with Mark on Saturday.", jpn: "私は街にいただけです。土曜日にマークとテニスをしました。" },
                { speaker: "B", eng: "Oh, who won the game?", jpn: "おお、誰が試合に勝ったのですか？" },
                { speaker: "A", eng: "I played very hard, but Mark won. After the game, we watched a movie.", jpn: "私は一生懸命プレーしましたが、マークが勝ちました。試合の後、私たちは映画を見ました。" },
                { speaker: "B", eng: "That sounds like a perfect Saturday.", jpn: "完璧な土曜日のようですね。" }
            ],
            writingTask: {
                promptEng: "Write three sentences about what you did yesterday or last weekend. Use regular past tense verbs (like worked, played, cooked, watched, cleaned). (For example: I worked at the office yesterday. I cooked pasta for dinner. I watched TV at night.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "昨日または先週末に何をしたかについて、3つの文を書いてください。規則動詞の過去形（worked, played, cooked, watched, cleanedなど）を使用してください。（例：昨日はオフィスで働きました。夕食にパスタを料理しました。夜にテレビを見ました。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 48,
        title: "Lesson 48: How to talk about the previous weekend",
        goal: "Describe your weekend activities using common irregular past tense verbs (went, had, did, ate, saw). <br><span style='font-size:0.9rem; color:var(--text-light);'>(不規則動詞の過去形（went, had, did, ate, sawなど）を使って、週末の活動について説明する。)</span>",
        vocab: [
            { eng: "Go -> Went", jpn: "行く -> 行った" },
            { eng: "Have -> Had", jpn: "持つ -> 持った / 過ごした" },
            { eng: "Do -> Did", jpn: "する -> した" },
            { eng: "Eat -> Ate", jpn: "食べる -> 食べた" },
            { eng: "See -> Saw", jpn: "見る / 会う -> 見た / 会った" },
            { eng: "Buy -> Bought", jpn: "買う -> 買った" },
            { eng: "Meet -> Met", jpn: "会う -> 会った" },
            { eng: "Take -> Took", jpn: "取る / 乗る -> 取った / 乗った" },
            { eng: "Weekend", jpn: "週末" },
            { eng: "Shopping", jpn: "買い物" },
            { eng: "Restaurant", jpn: "レストラン" },
            { eng: "Friends", jpn: "友達" },
            { eng: "Picture / Photo", jpn: "写真" },
            { eng: "Great", jpn: "素晴らしい" }
        ],
        dialogue: [
            { speaker: "A", eng: "How was your weekend?", jpn: "週末はどうでしたか？" },
            { speaker: "B", eng: "It was great. <span class='swappable'>I went shopping.</span> What about you?", jpn: "素晴らしかったです。私は買い物に行きました。あなたはどうでしたか？" },
            { speaker: "A", eng: "<span class='swappable'>I met some friends.</span> <span class='swappable'>We had dinner</span> at a restaurant.", jpn: "私は友達に会いました。私たちはレストランで夕食をとりました。" },
            { speaker: "B", eng: "Oh, nice. <span class='swappable'>What did you eat?</span>", jpn: "おお、いいですね。何を食べたのですか？" },
            { speaker: "A", eng: "<span class='swappable'>We ate pizza.</span> It was delicious.", jpn: "ピザを食べました。美味しかったです。" },
            { speaker: "B", eng: "Sounds fun. <span class='swappable'>I took a lot of pictures</span> on Sunday.", jpn: "楽しそうですね。私は日曜日にたくさんの写真を撮りました。" }
        ],
        expressions: [
            { category: "1. Stating your activity (自分の活動を伝える)", options: ["I went shopping.", "I did my homework.", "I saw a movie."] },
            { category: "2. Stating social activities (誰かと過ごしたことを伝える)", options: ["I met some friends.", "I saw my parents.", "I went to a party."] },
            { category: "3. Describing shared actions (一緒に行動したことを伝える)", options: ["We had dinner.", "We drank coffee.", "We bought clothes."] },
            { category: "4. Asking about details (詳細を尋ねる)", options: ["What did you eat?", "Where did you go?", "What did you buy?"] },
            { category: "5. Answering details (詳細に答える)", options: ["We ate pizza.", "We went to the park.", "I bought a bag."] },
            { category: "6. Adding extra information (追加の情報を伝える)", options: ["I took a lot of pictures.", "I slept a lot.", "I had a great time."] }
        ],
        grammar: {
            point: "Past Simple (Irregular Verbs) - 過去形（不規則動詞）",
            explanation: "Many common English verbs do not take '-ed' in the past tense. They change their spelling completely. These are called irregular verbs, and you just have to memorize them.<br>• go -> <strong>went</strong> (I went shopping.)<br>• eat -> <strong>ate</strong> (We ate pizza.)<br>• have -> <strong>had</strong> (We had dinner.)<br><span style='font-size:0.9rem; color:var(--text-light);'>（一般的な英単語の多くは、過去形にする際に『-ed』を付けません。スペルが完全に変わります。これらは不規則動詞と呼ばれ、暗記する必要があります。<br>・go -> <strong>went</strong>（買い物に行った）<br>・eat -> <strong>ate</strong>（ピザを食べた）<br>・have -> <strong>had</strong>（夕食をとった/過ごした））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the verbs change completely for the past: '<u>went</u>' (go), '<u>met</u>' (meet), '<u>had</u>' (have), '<u>ate</u>' (eat), and '<u>took</u>' (take). <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：動詞が過去形で完全に変化していることに注目してください：『<u>went</u>（go）』『<u>met</u>（meet）』『<u>had</u>（have）』『<u>ate</u>（eat）』『<u>took</u>（take）』。)</span>",
            examples: [
                { eng: "I went to Tokyo last week.", jpn: "先週、東京に行きました。" },
                { eng: "She bought a new phone yesterday.", jpn: "彼女は昨日、新しい携帯電話を買いました。" },
                { eng: "We saw a great movie on Sunday.", jpn: "私たちは日曜日に素晴らしい映画を見ました。" }
            ]
        },
        clickingGames: [
            { prompt: "私は買い物に行きました。", target: "I went shopping.", words: ["I", "went", "shopping."] },
            { prompt: "私は友達に会いました。", target: "I met some friends.", words: ["I", "met", "some", "friends."] },
            { prompt: "私たちは夕食をとりました。", target: "We had dinner.", words: ["We", "had", "dinner."] },
            { prompt: "何を食べたのですか？", target: "What did you eat?", words: ["What", "did", "you", "eat?"] },
            { prompt: "ピザを食べました。", target: "We ate pizza.", words: ["We", "ate", "pizza."] }
        ],
        dropdownGames: [
            { before: "I", options: ["went", "go", "going"], answer: "went", after: " to the park on Sunday." },
            { before: "We", options: ["had", "have", "has"], answer: "had", after: " a great time at the party." },
            { before: "She", options: ["ate", "eat", "eated"], answer: "ate", after: " a sandwich for lunch." },
            { before: "I", options: ["saw", "see", "seed"], answer: "saw", after: " a really good movie yesterday." },
            { before: "He", options: ["bought", "buy", "buyed"], answer: "bought", after: " a new car last month." },
            { before: "We", options: ["met", "meet", "meeted"], answer: "met", after: " at the station at 10 AM." },
            { before: "I", options: ["took", "take", "taked"], answer: "took", after: " the bus to work today." },
            { before: "What", options: ["did", "do", "done"], answer: "did", after: " you do last weekend?" },
            { before: "They", options: ["drank", "drink", "drinked"], answer: "drank", after: " coffee at the cafe." },
            { before: "I", options: ["slept", "sleep", "sleeped"], answer: "slept", after: " for eight hours last night." }
        ],
        roleplay: {
            a: "Ask your partner how their weekend was, and ask what they did. (パートナーに週末はどうだったか、何をしたか尋ねてください。)",
            b: "Answer using irregular past tense verbs (e.g., went, ate, saw). Then ask your partner what they did. (不規則動詞の過去形（went, ate, sawなど）を使って答えてください。その後、パートナーに何をしたか尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Drink -> Drank", jpn: "飲む -> 飲んだ" },
                { eng: "Sleep -> Slept", jpn: "寝る -> 寝た" },
                { eng: "Get -> Got", jpn: "得る / 着く -> 得た / 着いた" },
                { eng: "Make -> Made", jpn: "作る -> 作った" },
                { eng: "Leave -> Left", jpn: "出発する / 離れる -> 出発した / 離れた" },
                { eng: "Drive -> Drove", jpn: "運転する -> 運転した" },
                { eng: "Read -> Read", jpn: "読む -> 読んだ（※発音はレッド）" },
                { eng: "Come -> Came", jpn: "来る -> 来た" },
                { eng: "Give -> Gave", jpn: "あげる -> あげた" },
                { eng: "Find -> Found", jpn: "見つける -> 見つけた" },
                { eng: "Think -> Thought", jpn: "思う / 考える -> 思った / 考えた" },
                { eng: "Morning", jpn: "朝" },
                { eng: "Afternoon", jpn: "午後" },
                { eng: "Yesterday", jpn: "昨日" }
            ],
            reading1: {
                title: "Task 2: Reading (A Great Weekend Trip)",
                instruction: "Read the blog post about someone's weekend trip to the beach.",
                eng: "<strong>My Weekend Trip</strong><br><br>I had a fantastic weekend! On Saturday morning, I got up early and drove to the beach with my family. The weather was beautiful. We saw many people swimming and surfing. At noon, we went to a famous restaurant near the water. We ate delicious seafood and drank cold juice. In the afternoon, I found a quiet spot and read a book. We left the beach at sunset and came home. I slept very well last night because I was so tired!",
                jpn: "<strong>私の週末旅行</strong><br><br>私は素晴らしい週末を過ごしました！土曜日の朝、早く起きて家族と一緒にビーチへ車で行きました。天気は美しかったです。多くの人が泳いだりサーフィンをしたりしているのを見ました。正午に、水辺の近くにある有名なレストランに行きました。私たちは美味しいシーフードを食べ、冷たいジュースを飲みました。午後、私は静かな場所を見つけて本を読みました。日没にビーチを出発し、家に帰ってきました。とても疲れていたので、昨夜はよく眠れました！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Good morning! Did you have a good weekend?", jpn: "おはようございます！良い週末を過ごしましたか？" },
                { speaker: "B", eng: "Yes, I did. I had a lot of fun. What about you?", jpn: "はい。とても楽しみました。あなたはどうでしたか？" },
                { speaker: "A", eng: "My weekend was very quiet. I stayed home on Saturday.", jpn: "私の週末はとても静かでした。土曜日は家にいました。" },
                { speaker: "B", eng: "Did you do anything on Sunday?", jpn: "日曜日は何かしましたか？" },
                { speaker: "A", eng: "Yes, I went to the shopping mall. I bought some new shoes.", jpn: "はい、ショッピングモールに行きました。新しい靴を買いました。" },
                { speaker: "B", eng: "Oh, nice! I met my brother on Sunday. We went to a baseball game.", jpn: "おお、いいですね！私は日曜日に兄（弟）に会いました。私たちは野球の試合に行きました。" },
                { speaker: "A", eng: "That sounds exciting! Did your team win?", jpn: "それはエキサイティングですね！あなたのチームは勝ちましたか？" },
                { speaker: "B", eng: "Yes, they did! We ate hot dogs and drank beer to celebrate.", jpn: "はい、勝ちました！お祝いにホットドッグを食べてビールを飲みました。" },
                { speaker: "A", eng: "Wow, you had a great time.", jpn: "わあ、素晴らしい時間を過ごしたんですね。" },
                { speaker: "B", eng: "I really did. But now I am very sleepy today!", jpn: "本当にそうです。でも今日はとても眠いです！" }
            ],
            writingTask: {
                promptEng: "Write three sentences about what you did last weekend. Use at least three irregular past tense verbs (like went, had, ate, saw, bought, met). (For example: I went to the park. I met my friends. We ate lunch together.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "先週末に何をしたかについて、3つの文を書いてください。少なくとも3つの不規則動詞の過去形（went, had, ate, saw, bought, metなど）を使用してください。（例：私は公園に行きました。友達に会いました。一緒に昼食を食べました。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 49,
        title: "Lesson 49: How to describe a past event",
        goal: "Describe how an event, place, or person was in the past using 'was' and 'were'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『was』と『were』を使って、過去のイベント、場所、または人の様子を説明する。)</span>",
        vocab: [
            { eng: "Was", jpn: "〜だった（I, He, She, It用）" },
            { eng: "Were", jpn: "〜だった（You, We, They用）" },
            { eng: "Event", jpn: "イベント / 行事" },
            { eng: "Party", jpn: "パーティー" },
            { eng: "Concert", jpn: "コンサート" },
            { eng: "Festival", jpn: "お祭り / フェスティバル" },
            { eng: "Fun", jpn: "楽しい" },
            { eng: "Boring", jpn: "つまらない" },
            { eng: "Crowded", jpn: "混雑した" },
            { eng: "Noisy", jpn: "うるさい" },
            { eng: "Weather", jpn: "天気" },
            { eng: "Rainy", jpn: "雨の" },
            { eng: "Sunny", jpn: "晴れの" },
            { eng: "People", jpn: "人々" }
        ],
        dialogue: [
            { speaker: "A", eng: "Welcome back! <span class='swappable'>How was the festival?</span>", jpn: "おかえりなさい！フェスティバルはどうでしたか？" },
            { speaker: "B", eng: "<span class='swappable'>It was very fun.</span> There were so many things to see.", jpn: "とても楽しかったです。見るものがたくさんありました。" },
            { speaker: "A", eng: "That is good. <span class='swappable'>How was the food?</span>", jpn: "それは良かったですね。食べ物はどうでしたか？" },
            { speaker: "B", eng: "<span class='swappable'>It was delicious.</span> I ate a lot.", jpn: "美味しかったです。たくさん食べました。" },
            { speaker: "A", eng: "And what about the other guests? <span class='swappable'>Were the people nice?</span>", jpn: "他のお客さんはどうでしたか？人々は親切でしたか？" },
            { speaker: "B", eng: "<span class='swappable'>Yes, they were great.</span> I made some new friends.", jpn: "はい、彼らは素晴らしかったです。新しい友達ができました。" }
        ],
        expressions: [
            { category: "1. Asking about a past event (過去のイベントについて尋ねる)", options: ["How was the festival?", "How was the party?", "How was the concert?"] },
            { category: "2. Describing the overall event (イベント全体の様子を伝える)", options: ["It was very fun.", "It was quite boring.", "It was really crowded."] },
            { category: "3. Asking about a specific detail (単数のものについて尋ねる)", options: ["How was the food?", "How was the music?", "How was the weather?"] },
            { category: "4. Describing a specific detail (単数のものについて伝える)", options: ["It was delicious.", "It was too loud.", "It was perfect."] },
            { category: "5. Asking about plural details (複数のものについて尋ねる)", options: ["Were the people nice?", "Were the tickets expensive?", "Were the drinks cold?"] },
            { category: "6. Describing plural details (複数のものについて伝える)", options: ["Yes, they were great.", "No, they were cheap.", "Yes, they were very cold."] }
        ],
        grammar: {
            point: "Past tense 'be' verb (Was / Were) - be動詞の過去形",
            explanation: "To describe how things were in the past, we use the past tense of the 'be' verb.<br>• Use <strong>was</strong> for singular subjects (I, he, she, it, the party, the food).<br>• Use <strong>were</strong> for plural subjects (you, we, they, the people, the tickets).<br>• Questions: Swap the subject and the verb. (<em>The food was</em> good -> <em>Was the food</em> good?)<br><span style='font-size:0.9rem; color:var(--text-light);'>（過去の様子を説明するときは、be動詞の過去形を使います。<br>・単数の主語（I, he, she, it, パーティー, 食べ物など）には <strong>was</strong> を使います。<br>・複数の主語（you, we, they, 人々, チケットなど）には <strong>were</strong> を使います。<br>・疑問文：主語と動詞を入れ替えます（The food was good -> Was the food good?）。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the match between singular and plural: 'It <u>was</u> fun' (singular), 'How <u>was</u> the food?' (singular), and '<u>Were</u> the people nice?' (plural). <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：単数と複数の対応に注目してください：『It <u>was</u> fun（単数）』『How <u>was</u> the food?（単数）』『<u>Were</u> the people nice?（複数）』。)</span>",
            examples: [
                { eng: "The meeting was very long.", jpn: "会議はとても長かったです。" },
                { eng: "Were you tired yesterday?", jpn: "昨日は疲れていましたか？" },
                { eng: "The restaurants were crowded.", jpn: "レストランは混雑していました。" }
            ]
        },
        clickingGames: [
            { prompt: "フェスティバルはどうでしたか？", target: "How was the festival?", words: ["How", "was", "the", "festival?"] },
            { prompt: "とても楽しかったです。", target: "It was very fun.", words: ["It", "was", "very", "fun."] },
            { prompt: "食べ物はどうでしたか？", target: "How was the food?", words: ["How", "was", "the", "food?"] },
            { prompt: "美味しかったです。", target: "It was delicious.", words: ["It", "was", "delicious."] },
            { prompt: "はい、彼らは素晴らしかったです。", target: "Yes, they were great.", words: ["Yes,", "they", "were", "great."] }
        ],
        dropdownGames: [
            { before: "How", options: ["was", "were", "is"], answer: "was", after: " the party last night?" },
            { before: "The people at the event", options: ["were", "was", "are"], answer: "were", after: " very friendly." },
            { before: "", options: ["Were", "Was", "Are"], answer: "Were", after: " the tickets expensive?" },
            { before: "It", options: ["was", "were", "is"], answer: "was", after: " sunny and warm yesterday." },
            { before: "We", options: ["were", "was", "are"], answer: "were", after: " at the concert on Saturday." },
            { before: "", options: ["Was", "Were", "Did"], answer: "Was", after: " the movie interesting?" },
            { before: "The food at the restaurant", options: ["was", "were", "did"], answer: "was", after: " delicious." },
            { before: "They", options: ["were", "was", "did"], answer: "were", after: " very tired after the long trip." },
            { before: "I", options: ["was", "were", "am"], answer: "was", after: " at home all day on Sunday." },
            { before: "How", options: ["were", "was", "did"], answer: "were", after: " the drinks?" }
        ],
        roleplay: {
            a: "Ask your partner how their weekend trip was. Ask about the food and the weather. (パートナーに週末の旅行はどうだったか尋ねてください。食べ物と天気についても尋ねてください。)",
            b: "Answer your partner using 'was' and 'were'. Tell them the trip was fun, the food was good, but the weather was rainy. (『was』と『were』を使って答えてください。旅行は楽しかった、食べ物は美味しかった、でも天気は雨だったと伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Trip", jpn: "旅行" },
                { eng: "Vacation", jpn: "休暇" },
                { eng: "Hotel", jpn: "ホテル" },
                { eng: "Beach", jpn: "ビーチ" },
                { eng: "Museum", jpn: "博物館 / 美術館" },
                { eng: "Expensive", jpn: "高い（値段が）" },
                { eng: "Cheap", jpn: "安い" },
                { eng: "Beautiful", jpn: "美しい" },
                { eng: "Terrible", jpn: "ひどい / 最悪な" },
                { eng: "Awesome", jpn: "最高の / 素晴らしい" },
                { eng: "Tired", jpn: "疲れた" },
                { eng: "Excited", jpn: "興奮した / ワクワクした" },
                { eng: "Flight", jpn: "フライト / 飛行機の便" },
                { eng: "Long", jpn: "長い" }
            ],
            reading1: {
                title: "Task 2: Reading (A Trip to Okinawa)",
                instruction: "Read the paragraph about a recent vacation.",
                eng: "<strong>My Trip to Okinawa</strong><br><br>Last month, I was in Okinawa for a short vacation. The trip was amazing. My hotel was near the beach, and the view was beautiful. The weather was perfect—it was sunny and hot every day. The people in Okinawa were very friendly, and the local food was cheap and delicious. The only bad thing was the flight. It was very long, and I was tired. But overall, it was a great experience!",
                jpn: "<strong>沖縄旅行</strong><br><br>先月、短い休暇で沖縄にいました。旅行は素晴らしかったです。私のホテルはビーチの近くにあり、景色が美しかったです。天気は完璧で、毎日晴れて暑かったです。沖縄の人々はとても親切で、地元の食べ物は安くて美味しかったです。唯一の悪い点はフライトでした。とても長くて、私は疲れました。でも全体的に、素晴らしい経験でした！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "I didn't see you at the office on Friday. Where were you?", jpn: "金曜日にオフィスであなたを見かけませんでした。どこにいたのですか？" },
                { speaker: "B", eng: "I was in Tokyo for a business meeting.", jpn: "ビジネスの会議で東京にいました。" },
                { speaker: "A", eng: "Oh, I see. How was the meeting?", jpn: "ああ、なるほど。会議はどうでしたか？" },
                { speaker: "B", eng: "It was good, but it was very long. I was exhausted.", jpn: "良かったですが、とても長かったです。私はクタクタでした。" },
                { speaker: "A", eng: "How was your hotel?", jpn: "ホテルはどうでしたか？" },
                { speaker: "B", eng: "The hotel was nice. The room was clean and quiet.", jpn: "ホテルは良かったです。部屋は清潔で静かでした。" },
                { speaker: "A", eng: "Were the restaurants expensive in Tokyo?", jpn: "東京のレストランは高かったですか？" },
                { speaker: "B", eng: "Yes, they were quite expensive. But the food was awesome.", jpn: "はい、かなり高かったです。でも食べ物は最高でした。" },
                { speaker: "A", eng: "Was the weather okay?", jpn: "天気は大丈夫でしたか？" },
                { speaker: "B", eng: "No, it was terrible! It was rainy and windy the whole time.", jpn: "いいえ、最悪でした！ずっと雨と風でしたよ。" }
            ],
            writingTask: {
                promptEng: "Write three sentences about a past event, trip, or party using 'was' and 'were'. (For example: The party was fun. The food was delicious. The people were friendly.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "過去のイベント、旅行、またはパーティーについて、『was』と『were』を使って3つの文を書いてください。（例：パーティーは楽しかったです。食べ物は美味しかったです。人々は親切でした。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 51,
        title: "Lesson 51: How to give advice",
        goal: "Give advice and recommendations using 'should' and 'shouldn't'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『should』と『shouldn't』を使って、アドバイスやおすすめを伝える。)</span>",
        vocab: [
            { eng: "Should", jpn: "〜すべき / 〜したほうがいい" },
            { eng: "Shouldn't", jpn: "〜すべきではない / 〜しないほうがいい" },
            { eng: "Advice", jpn: "アドバイス / 助言" },
            { eng: "Tired", jpn: "疲れた" },
            { eng: "Sick", jpn: "体調が悪い / 病気の" },
            { eng: "Doctor", jpn: "医者" },
            { eng: "Sleep", jpn: "寝る / 睡眠" },
            { eng: "Rest", jpn: "休む / 休憩" },
            { eng: "Medicine", jpn: "薬" },
            { eng: "Drink", jpn: "飲む" },
            { eng: "Water", jpn: "水" },
            { eng: "Work", jpn: "働く / 仕事" },
            { eng: "Late", jpn: "遅く / 遅れて" },
            { eng: "Early", jpn: "早く" }
        ],
        dialogue: [
            { speaker: "A", eng: "You look very tired today. <span class='swappable'>Are you okay?</span>", jpn: "今日はとても疲れているようですね。大丈夫ですか？" },
            { speaker: "B", eng: "No, I feel sick. <span class='swappable'>I have a headache.</span>", jpn: "いいえ、体調が悪いです。頭痛がします。" },
            { speaker: "A", eng: "That is terrible. <span class='swappable'>You should go home.</span>", jpn: "それはひどいですね。家に帰ったほうがいいですよ。" },
            { speaker: "B", eng: "I can't. <span class='swappable'>I have a lot of work.</span>", jpn: "できません。仕事がたくさんあるんです。" },
            { speaker: "A", eng: "Well, <span class='swappable'>you should take some medicine.</span> And <span class='swappable'>you shouldn't work late.</span>", jpn: "それなら、薬を飲んだほうがいいですよ。そして、遅くまで働かないほうがいいです。" },
            { speaker: "B", eng: "You are right. Thank you for the advice.", jpn: "その通りですね。アドバイスありがとうございます。" }
        ],
        expressions: [
            { category: "1. Asking about well-being (体調を尋ねる)", options: ["Are you okay?", "Do you feel well?", "Is everything alright?"] },
            { category: "2. Stating a problem (問題を伝える)", options: ["I have a headache.", "I have a fever.", "I have a stomachache."] },
            { category: "3. Giving strong advice (強いアドバイスをする)", options: ["You should go home.", "You should see a doctor.", "You should rest in bed."] },
            { category: "4. Stating an obligation/reason (義務や理由を伝える)", options: ["I have a lot of work.", "I have a meeting.", "I have to finish this."] },
            { category: "5. Giving practical advice (実践的なアドバイスをする)", options: ["you should take some medicine.", "you should drink warm water.", "you should sit down."] },
            { category: "6. Giving negative advice (否定のアドバイスをする)", options: ["you shouldn't work late.", "you shouldn't drink coffee.", "you shouldn't push yourself."] }
        ],
        grammar: {
            point: "Giving advice with 'should' and 'shouldn't' - 『should』と『shouldn't』を使ったアドバイス",
            explanation: "We use <strong>should</strong> to give good advice or to say that something is a good idea. We use <strong>shouldn't</strong> (should not) to say that something is a bad idea. After 'should' or 'shouldn't', we always use the base form of the verb (without 'to').<br>• <strong>Subject</strong> + <strong>should / shouldn't</strong> + <strong>verb (base form)</strong><br>• Example: You <em>should sleep</em> early. / You <em>shouldn't drink</em> too much coffee.<br><span style='font-size:0.9rem; color:var(--text-light);'>（良いアドバイスをしたり、良いアイデアであることを伝えるときは<strong>should</strong>を使います。悪いアイデアであることを伝えるときは<strong>shouldn't</strong>（should not）を使います。『should』や『shouldn't』の後には、必ず動詞の原形（toなし）を使います。<br>・<strong>主語</strong> ＋ <strong>should / shouldn't</strong> ＋ <strong>動詞（原形）</strong><br>・例：You should sleep early.（早く寝るべきです） / You shouldn't drink too much coffee.（コーヒーを飲みすぎるべきではありません））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the structure when Person A gives advice: 'You <u>should go</u> home', 'you <u>should take</u> some medicine', and 'you <u>shouldn't work</u> late'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：Aさんがアドバイスをするときの構造に注目してください：『You <u>should go</u> home』『you <u>should take</u> some medicine』『you <u>shouldn't work</u> late』。)</span>",
            examples: [
                { eng: "It is raining. You should take an umbrella.", jpn: "雨が降っています。傘を持っていくべきです。" },
                { eng: "He shouldn't eat so much fast food.", jpn: "彼はファストフードをそんなに食べるべきではありません。" },
                { eng: "Should I call a taxi?", jpn: "タクシーを呼んだほうがいいですか？" }
            ]
        },
        clickingGames: [
            { prompt: "大丈夫ですか？", target: "Are you okay?", words: ["Are", "you", "okay?"] },
            { prompt: "頭痛がします。", target: "I have a headache.", words: ["I", "have", "a", "headache."] },
            { prompt: "家に帰ったほうがいいですよ。", target: "You should go home.", words: ["You", "should", "go", "home."] },
            { prompt: "薬を飲んだほうがいいですよ。", target: "You should take some medicine.", words: ["You", "should", "take", "some", "medicine."] },
            { prompt: "遅くまで働かないほうがいいです。", target: "You shouldn't work late.", words: ["You", "shouldn't", "work", "late."] }
        ],
        dropdownGames: [
            { before: "You look tired. You", options: ["should", "shouldn't", "can"], answer: "should", after: " get some rest." },
            { before: "It is very cold outside. You", options: ["should", "shouldn't", "do"], answer: "should", after: " wear a heavy coat." },
            { before: "You", options: ["shouldn't", "should", "are"], answer: "shouldn't", after: " drink too much coffee at night." },
            { before: "He has a high fever. He", options: ["should", "shouldn't", "has"], answer: "should", after: " see a doctor." },
            { before: "You", options: ["shouldn't", "should", "must"], answer: "shouldn't", after: " eat a lot of sugar. It is bad for you." },
            { before: "I have a big test tomorrow. I", options: ["should", "shouldn't", "do"], answer: "should", after: " study tonight." },
            { before: "She", options: ["shouldn't", "should", "is"], answer: "shouldn't", after: " speak so loudly in the library." },
            { before: "What", options: ["should", "shouldn't", "does"], answer: "should", after: " I wear to the wedding?" },
            { before: "We", options: ["should", "shouldn't", "are"], answer: "should", after: " leave now, or we will miss the train." },
            { before: "You", options: ["shouldn't", "should", "have"], answer: "shouldn't", after: " forget your passport when you travel." }
        ],
        roleplay: {
            a: "Tell your partner you have a bad stomachache and ask for advice. (パートナーにひどい胃痛があることを伝え、アドバイスを求めてください。)",
            b: "Give your partner two pieces of advice. Tell them one thing they should do, and one thing they shouldn't do. (パートナーに2つのアドバイスをしてください。彼らがすべきことを1つ、すべきでないことを1つ伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Headache", jpn: "頭痛" },
                { eng: "Stomachache", jpn: "胃痛 / 腹痛" },
                { eng: "Fever", jpn: "熱" },
                { eng: "Cold", jpn: "風邪" },
                { eng: "Cough", jpn: "咳" },
                { eng: "Dentist", jpn: "歯医者" },
                { eng: "Toothache", jpn: "歯痛" },
                { eng: "Exercise", jpn: "運動する" },
                { eng: "Healthy", jpn: "健康的な" },
                { eng: "Diet", jpn: "食事 / 食生活" },
                { eng: "Vegetable", jpn: "野菜" },
                { eng: "Fruit", jpn: "果物" },
                { eng: "Sugar", jpn: "砂糖" },
                { eng: "Idea", jpn: "アイデア / 考え" }
            ],
            reading1: {
                title: "Task 2: Reading (Healthy Habits)",
                instruction: "Read the short article about staying healthy.",
                eng: "<strong>How to Stay Healthy</strong><br><br>Many people feel tired every day. If you want to feel better, you should follow some simple rules. First, you should sleep for eight hours every night. Good sleep is very important. Second, you should drink a lot of water and eat fresh vegetables. You shouldn't eat too much fast food or sugar. Finally, you should exercise for 30 minutes a day. You shouldn't sit at your desk all day. If you follow this advice, you will have more energy!",
                jpn: "<strong>健康を保つ方法</strong><br><br>多くの人が毎日疲れを感じています。気分を良くしたいなら、いくつかの簡単なルールに従うべきです。まず、毎晩8時間睡眠をとるべきです。良い睡眠はとても重要です。第二に、水をたくさん飲み、新鮮な野菜を食べるべきです。ファストフードや砂糖を食べすぎるべきではありません。最後に、1日30分は運動するべきです。一日中デスクに座っているべきではありません。このアドバイスに従えば、もっとエネルギーが湧いてきますよ！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Ouch! My tooth really hurts.", jpn: "痛い！本当に歯が痛いです。" },
                { speaker: "B", eng: "Do you have a toothache?", jpn: "歯痛ですか？" },
                { speaker: "A", eng: "Yes, it started this morning. I can't eat anything.", jpn: "はい、今朝始まりました。何も食べられません。" },
                { speaker: "B", eng: "You should go to the dentist immediately.", jpn: "すぐに歯医者に行くべきですよ。" },
                { speaker: "A", eng: "I know, but I am scared of the dentist.", jpn: "わかっていますが、歯医者が怖いんです。" },
                { speaker: "B", eng: "You shouldn't wait. It will only get worse.", jpn: "待つべきではありません。悪化するだけですよ。" },
                { speaker: "A", eng: "You are right. Should I call them now?", jpn: "あなたの言う通りですね。今電話したほうがいいですか？" },
                { speaker: "B", eng: "Yes, you should. And you shouldn't drink anything cold right now.", jpn: "はい、そうすべきです。それに、今は冷たいものを飲むべきではありません。" },
                { speaker: "A", eng: "Okay, I will drink some warm water.", jpn: "わかりました、ぬるいお水を飲みます。" },
                { speaker: "B", eng: "Good idea. Let me know if you need a ride to the clinic.", jpn: "いい考えですね。クリニックまで車で送る必要があれば教えてください。" }
            ],
            writingTask: {
                promptEng: "Your friend says: 'I am always tired in the morning, and I can't focus on my work.' Write three sentences giving them advice. Use 'should' and 'shouldn't'. (For example: You should go to bed early. You shouldn't use your smartphone at night. You should drink coffee in the morning.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "あなたの友人が「朝はいつも疲れていて、仕事に集中できない」と言っています。彼らにアドバイスをする文を3つ書いてください。『should』と『shouldn't』を使用してください。（例：早く寝るべきです。夜にスマートフォンを使うべきではありません。朝にコーヒーを飲むべきです。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 53,
        title: "Lesson 53: How to describe what's in your house",
        goal: "Describe the quantity of items in your home using countable nouns and quantifiers (many, some, a few, any). <br><span style='font-size:0.9rem; color:var(--text-light);'>(可算名詞と数量詞（many, some, a few, anyなど）を使って、家にある物の量を説明する。)</span>",
        vocab: [
            { eng: "Many", jpn: "たくさんの（主に疑問文・否定文）" },
            { eng: "Some", jpn: "いくつかの（肯定文）" },
            { eng: "A few", jpn: "少しの / 2〜3の" },
            { eng: "Any", jpn: "いくつか / 1つも（疑問文・否定文）" },
            { eng: "Room", jpn: "部屋" },
            { eng: "Plant", jpn: "植物 / 観葉植物" },
            { eng: "Book", jpn: "本" },
            { eng: "Painting", jpn: "絵画" },
            { eng: "Window", jpn: "窓" },
            { eng: "Chair", jpn: "椅子" },
            { eng: "Shelf", jpn: "棚" },
            { eng: "Living room", jpn: "リビング / 居間" },
            { eng: "Beautiful", jpn: "美しい" },
            { eng: "Describe", jpn: "説明する / 描写する" }
        ],
        dialogue: [
            { speaker: "A", eng: "Your new apartment is nice! <span class='swappable'>Do you have many plants?</span>", jpn: "あなたの新しいアパートは素敵ですね！観葉植物はたくさんありますか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>I have some plants</span> in the living room.", jpn: "はい、リビングにいくつか植物があります。" },
            { speaker: "A", eng: "That's lovely. <span class='swappable'>Are there any paintings on the wall?</span>", jpn: "それは素晴らしいですね。壁に絵画はありますか？" },
            { speaker: "B", eng: "<span class='swappable'>There are a few paintings.</span> But I want more.", jpn: "少し（2〜3枚）絵画があります。でももっと欲しいです。" },
            { speaker: "A", eng: "I see. <span class='swappable'>Do you have many books?</span>", jpn: "なるほど。本はたくさんありますか？" },
            { speaker: "B", eng: "No, <span class='swappable'>I don't have many books.</span> I usually read on my tablet.", jpn: "いいえ、本はあまり持っていません。普段はタブレットで読みます。" }
        ],
        expressions: [
            { category: "1. Asking about large quantities (たくさんの量があるか尋ねる)", options: ["Do you have many plants?", "Do you have many chairs?", "Do you have many shelves?"] },
            { category: "2. Expressing a moderate amount (中くらいの量を伝える)", options: ["I have some plants", "I have some chairs", "I have some shelves"] },
            { category: "3. Asking about existence (存在を尋ねる)", options: ["Are there any paintings on the wall?", "Are there any windows in the room?", "Are there any books on the desk?"] },
            { category: "4. Expressing a small amount (少しの量を伝える)", options: ["There are a few paintings.", "There are a few windows.", "There are a few books."] },
            { category: "5. Asking about collections (コレクションなどを尋ねる)", options: ["Do you have many books?", "Do you have many cups?", "Do you have many shoes?"] },
            { category: "6. Expressing a small/zero amount negatively (多くないことを伝える)", options: ["I don't have many books.", "I don't have many cups.", "I don't have many shoes."] }
        ],
        grammar: {
            point: "Quantifiers for Countable Nouns - 可算名詞の数量詞",
            explanation: "We use quantifiers before countable nouns (things we can count, like apples or books) to show how many there are. Always use the plural form of the noun (e.g., book<strong>s</strong>).<br>• <strong>Many</strong> = A lot (Usually in questions/negatives: <em>Do you have many books? / I don't have many books.</em>)<br>• <strong>Some</strong> = A medium amount (Affirmative: <em>I have some plants.</em>)<br>• <strong>A few</strong> = A small amount / 2-3 (Affirmative: <em>I have a few chairs.</em>)<br>• <strong>Any</strong> = Used in questions to ask if something exists, or in negatives to mean zero (<em>Do you have any pets? / I don't have any pets.</em>)<br><span style='font-size:0.9rem; color:var(--text-light);'>（数えられる名詞（リンゴや本など）の前に数量詞を置いて、その数を示します。名詞は常に複数形（例：book<strong>s</strong>）を使用します。<br>・<strong>Many</strong> = たくさん（主に疑問文/否定文：Do you have many books? / I don't have many books.）<br>・<strong>Some</strong> = いくつか（肯定文：I have some plants.）<br>・<strong>A few</strong> = 少しの / 2〜3の（肯定文：I have a few chairs.）<br>・<strong>Any</strong> = 存在を尋ねる疑問文、またはゼロを意味する否定文（Do you have any pets? / I don't have any pets.））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the match between the sentence type and the quantifier: 'Do you have <u>many</u>' (question), 'I have <u>some</u>' (affirmative), 'Are there <u>any</u>' (question), and 'I don't have <u>many</u>' (negative). <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：文の種類と数量詞の対応に注目してください：『Do you have <u>many</u>（疑問文）』『I have <u>some</u>（肯定文）』『Are there <u>any</u>（疑問文）』『I don't have <u>many</u>（否定文）』。)</span>",
            examples: [
                { eng: "I have a few apples in the fridge.", jpn: "冷蔵庫にいくつか（2〜3個）のリンゴがあります。" },
                { eng: "Are there any chairs in that room?", jpn: "あの部屋に椅子はありますか？" },
                { eng: "We don't have any eggs.", jpn: "卵が1つもありません。" }
            ]
        },
        clickingGames: [
            { prompt: "観葉植物はたくさんありますか？", target: "Do you have many plants?", words: ["Do", "you", "have", "many", "plants?"] },
            { prompt: "はい、リビングにいくつか植物があります。", target: "Yes, I have some plants in the living room.", words: ["Yes,", "I", "have", "some", "plants", "in", "the", "living", "room."] },
            { prompt: "壁に絵画はありますか？", target: "Are there any paintings on the wall?", words: ["Are", "there", "any", "paintings", "on", "the", "wall?"] },
            { prompt: "少し（2〜3枚）絵画があります。", target: "There are a few paintings.", words: ["There", "are", "a", "few", "paintings."] },
            { prompt: "本はあまり持っていません。", target: "I don't have many books.", words: ["I", "don't", "have", "many", "books."] }
        ],
        dropdownGames: [
            { before: "I need to buy", options: ["some", "any", "many"], answer: "some", after: " vegetables at the supermarket." },
            { before: "Do you have", options: ["any", "some", "a few"], answer: "any", after: " questions about the lesson?" },
            { before: "There are", options: ["a few", "any", "much"], answer: "a few", after: " students waiting outside." },
            { before: "I don't have", options: ["many", "some", "a few"], answer: "many", after: " friends in this city yet." },
            { before: "Are there", options: ["any", "a few", "some"], answer: "any", after: " windows in your bedroom?" },
            { before: "She has", options: ["many", "any", "much"], answer: "many", after: " beautiful paintings in her house." },
            { before: "I only have", options: ["a few", "many", "any"], answer: "a few", after: " coins in my wallet." },
            { before: "We don't have", options: ["any", "some", "a few"], answer: "any", after: " chairs in the new office." },
            { before: "He bought", options: ["some", "any", "many"], answer: "some", after: " new books yesterday." },
            { before: "Do you drink", options: ["many", "any", "a few"], answer: "many", after: " cups of coffee every day?" }
        ],
        roleplay: {
            a: "Ask your partner what is in their living room. Ask if they have 'many' plants or 'any' paintings. (パートナーのリビングに何があるか尋ねてください。『many』を使って植物について、または『any』を使って絵画について尋ねてください。)",
            b: "Answer using quantifiers (some, a few, not many, not any). Then ask your partner a question about their house. (数量詞（some, a few, not many, not any）を使って答えてください。その後、パートナーの家について質問してください。)"
        },
        homework: {
            vocab: [
                { eng: "Bedroom", jpn: "寝室" },
                { eng: "Kitchen", jpn: "キッチン / 台所" },
                { eng: "Bathroom", jpn: "お風呂場 / トイレ" },
                { eng: "Sofa", jpn: "ソファ" },
                { eng: "Desk", jpn: "机" },
                { eng: "Lamp", jpn: "ランプ / 照明" },
                { eng: "Box", jpn: "箱" },
                { eng: "Toy", jpn: "おもちゃ" },
                { eng: "Picture", jpn: "写真 / 絵" },
                { eng: "Cup", jpn: "カップ / コップ" },
                { eng: "Plate", jpn: "皿" },
                { eng: "Glass", jpn: "グラス" },
                { eng: "Pillow", jpn: "枕 / クッション" },
                { eng: "Blanket", jpn: "毛布" }
            ],
            reading1: {
                title: "Task 2: Reading (A Minimalist Apartment)",
                instruction: "Read the description of someone's living room.",
                eng: "<strong>My Minimalist Living Room</strong><br><br>I like clean and simple spaces. In my living room, I don't have many things. I have a gray sofa and a small glass table. There aren't any large shelves, and I don't have any heavy chairs. I only have a few books on my desk. However, I love plants. I have some green plants near the window because they make the room feel fresh. I also have a few pictures of my family on the wall. It is a very peaceful room.",
                jpn: "<strong>私のミニマリストなリビング</strong><br><br>私は清潔でシンプルな空間が好きです。私のリビングには、たくさんの物はありません。グレーのソファと小さなガラスのテーブルがあります。大きな棚は1つもありませんし、重い椅子もありません。机の上にはほんの数冊の本があるだけです。しかし、私は植物が大好きです。部屋を新鮮な気分にさせてくれるので、窓の近くにいくつかの緑の植物を置いています。壁には家族の写真も数枚飾ってあります。とても安らぐ部屋です。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Thanks for inviting me over. Your new house is beautiful!", jpn: "招待してくれてありがとう。新しい家、美しいですね！" },
                { speaker: "B", eng: "Thank you! I am still unpacking some boxes.", jpn: "ありがとう！まだいくつか箱を開けているところです。" },
                { speaker: "A", eng: "Your kitchen is very big. Do you have many plates and glasses?", jpn: "キッチンがとても大きいですね。お皿やグラスはたくさん持っていますか？" },
                { speaker: "B", eng: "I have a few plates, but I don't have any glasses yet. I need to buy some.", jpn: "お皿は少しありますが、グラスはまだ1つもありません。いくつか買う必要があります。" },
                { speaker: "A", eng: "What about the bedroom? Is it finished?", jpn: "寝室はどうですか？完成しましたか？" },
                { speaker: "B", eng: "Almost. I have a bed and some pillows. But there aren't any curtains.", jpn: "ほとんど完成しました。ベッドといくつかの枕があります。でも、カーテンが1つもありません。" },
                { speaker: "A", eng: "Ah, the morning sun will wake you up early!", jpn: "ああ、朝日で早く目が覚めてしまいますね！" },
                { speaker: "B", eng: "Yes, it is very bright. Do you want some coffee?", jpn: "はい、とても眩しいです。コーヒーはいかがですか？" },
                { speaker: "A", eng: "I would love some. But wait, you said you don't have any cups!", jpn: "ぜひいただきたいです。でも待って、カップが1つもないって言っていませんでしたっけ！" },
                { speaker: "B", eng: "Oh, you are right! We must drink from paper cups today.", jpn: "ああ、その通りですね！今日は紙コップで飲まなければなりません。" }
            ],
            writingTask: {
                promptEng: "Write three sentences describing the items in your bedroom or living room using quantifiers (some, many, a few, any). (For example: I have some plants in my room. I don't have many books. Are there any chairs in your room?) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "数量詞（some, many, a few, any）を使って、あなたの寝室やリビングにある物について3つの文を書いてください。（例：私の部屋にはいくつかの植物があります。本はあまり持っていません。あなたの部屋に椅子はありますか？）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 54,
        title: "Lesson 54: How to describe what's in your kitchen",
        goal: "Describe the quantity of food and drinks in your kitchen using uncountable nouns and quantifiers (a lot of, some, a little, not much, not any). <br><span style='font-size:0.9rem; color:var(--text-light);'>(不可算名詞と数量詞（a lot of, some, a little, not much, not anyなど）を使って、キッチンにある食べ物や飲み物の量を説明する。)</span>",
        vocab: [
            { eng: "A lot of", jpn: "たくさんの" },
            { eng: "Some", jpn: "いくらかの" },
            { eng: "A little", jpn: "少しの" },
            { eng: "Not much", jpn: "あまりない" },
            { eng: "Any", jpn: "少しも / いくらか（疑問文・否定文）" },
            { eng: "Milk", jpn: "牛乳" },
            { eng: "Rice", jpn: "米" },
            { eng: "Cheese", jpn: "チーズ" },
            { eng: "Water", jpn: "水" },
            { eng: "Bread", jpn: "パン" },
            { eng: "Fridge", jpn: "冷蔵庫" },
            { eng: "Kitchen", jpn: "キッチン / 台所" },
            { eng: "Hungry", jpn: "お腹が空いた" },
            { eng: "Buy", jpn: "買う" }
        ],
        dialogue: [
            { speaker: "A", eng: "I am hungry. <span class='swappable'>Do we have much rice?</span>", jpn: "お腹が空きました。お米はたくさんありますか？" },
            { speaker: "B", eng: "No, <span class='swappable'>we don't have much rice.</span> We need to buy more.", jpn: "いいえ、お米はあまりありません。もっと買う必要があります。" },
            { speaker: "A", eng: "Oh, okay. <span class='swappable'>Is there any cheese in the fridge?</span>", jpn: "ああ、わかりました。冷蔵庫にチーズはありますか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>there is a little cheese.</span>", jpn: "はい、少しチーズがあります。" },
            { speaker: "A", eng: "Great. <span class='swappable'>Do we have any milk?</span>", jpn: "素晴らしい。牛乳はありますか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>we have a lot of milk.</span> I bought some yesterday.", jpn: "はい、牛乳はたくさんあります。昨日いくつか買いました。" }
        ],
        expressions: [
            { category: "1. Asking about large quantities (たくさんの量があるか尋ねる)", options: ["Do we have much rice?", "Do we have much bread?", "Do we have much meat?"] },
            { category: "2. Expressing a small amount negatively (多くないことを伝える)", options: ["we don't have much rice.", "we don't have much bread.", "we don't have much meat."] },
            { category: "3. Asking about existence (存在を尋ねる)", options: ["Is there any cheese in the fridge?", "Is there any butter in the fridge?", "Is there any water in the fridge?"] },
            { category: "4. Expressing a small amount positively (少しの量を伝える)", options: ["there is a little cheese.", "there is a little butter.", "there is a little water."] },
            { category: "5. Asking about other items (他のアイテムについて尋ねる)", options: ["Do we have any milk?", "Do we have any juice?", "Do we have any soup?"] },
            { category: "6. Expressing a large amount (たくさんの量があることを伝える)", options: ["we have a lot of milk.", "we have a lot of juice.", "we have a lot of soup."] }
        ],
        grammar: {
            point: "Quantifiers for Uncountable Nouns - 不可算名詞の数量詞",
            explanation: "We use these quantifiers with uncountable nouns (things we cannot easily count, like liquids, powders, or masses). Uncountable nouns are always singular, so we never add '-s', and we use 'is' instead of 'are'.<br>• <strong>A lot of</strong> = A large amount (<em>We have a lot of milk.</em>)<br>• <strong>Some</strong> = A medium amount (<em>I have some bread.</em>)<br>• <strong>A little</strong> = A small amount (<em>There is a little cheese.</em>)<br>• <strong>Much</strong> = Used in questions/negatives for a large amount (<em>Do you have much rice? / I don't have much rice.</em>)<br>• <strong>Any</strong> = Used in questions/negatives for existence (<em>Is there any water? / We don't have any water.</em>)<br><span style='font-size:0.9rem; color:var(--text-light);'>（これらの数量詞は、不可算名詞（液体、粉末、塊など、簡単には数えられないもの）と一緒に使います。不可算名詞は常に単数形なので、『-s』は付けず、『are』の代わりに『is』を使います。<br>・<strong>A lot of</strong> = たくさんの（We have a lot of milk.）<br>・<strong>Some</strong> = いくらかの（I have some bread.）<br>・<strong>A little</strong> = 少しの（There is a little cheese.）<br>・<strong>Much</strong> = 主に疑問文/否定文で使う「たくさんの」（Do you have much rice? / I don't have much rice.）<br>・<strong>Any</strong> = 存在を尋ねる疑問文、またはゼロを意味する否定文（Is there any water? / We don't have any water.））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the match with uncountable nouns: 'much <u>rice</u>', 'a little <u>cheese</u>', and 'a lot of <u>milk</u>'. We say '<u>Is</u> there any cheese?', not 'Are there'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：不可算名詞との対応に注目してください：『much <u>rice</u>』『a little <u>cheese</u>』『a lot of <u>milk</u>』。『Are there』ではなく『<u>Is</u> there any cheese?』と言います。)</span>",
            examples: [
                { eng: "We have a little time before the train arrives.", jpn: "電車が到着するまでに少し時間があります。" },
                { eng: "I don't drink much coffee.", jpn: "私はコーヒーをあまり飲みません。" },
                { eng: "Is there any soup left?", jpn: "スープは残っていますか？" }
            ]
        },
        clickingGames: [
            { prompt: "お米はたくさんありますか？", target: "Do we have much rice?", words: ["Do", "we", "have", "much", "rice?"] },
            { prompt: "いいえ、お米はあまりありません。", target: "No, we don't have much rice.", words: ["No,", "we", "don't", "have", "much", "rice."] },
            { prompt: "冷蔵庫にチーズはありますか？", target: "Is there any cheese in the fridge?", words: ["Is", "there", "any", "cheese", "in", "the", "fridge?"] },
            { prompt: "はい、少しチーズがあります。", target: "Yes, there is a little cheese.", words: ["Yes,", "there", "is", "a", "little", "cheese."] },
            { prompt: "はい、牛乳はたくさんあります。", target: "Yes, we have a lot of milk.", words: ["Yes,", "we", "have", "a", "lot", "of", "milk."] }
        ],
        dropdownGames: [
            { before: "I am thirsty. Is there", options: ["any", "many", "a few"], answer: "any", after: " water in the fridge?" },
            { before: "We don't have", options: ["much", "many", "some"], answer: "much", after: " bread. Let's go to the bakery." },
            { before: "Can I have", options: ["a little", "a few", "many"], answer: "a little", after: " sugar in my tea, please?" },
            { before: "They have", options: ["a lot of", "much", "any"], answer: "a lot of", after: " money, so they bought a big house." },
            { before: "Do you drink", options: ["much", "many", "a few"], answer: "much", after: " juice in the morning?" },
            { before: "There is", options: ["some", "any", "many"], answer: "some", after: " soup in the pot if you are hungry." },
            { before: "I don't eat", options: ["much", "many", "a little"], answer: "much", after: " meat. I prefer vegetables." },
            { before: "Is there", options: ["any", "many", "a few"], answer: "any", after: " pasta left for dinner?" },
            { before: "We only have", options: ["a little", "a few", "many"], answer: "a little", after: " milk. It's not enough for cereal." },
            { before: "She put", options: ["a lot of", "much", "any"], answer: "a lot of", after: " cheese on the pizza." }
        ],
        roleplay: {
            a: "You are cooking dinner. Ask your partner if there is 'much' rice in the kitchen, and if there is 'any' meat in the fridge. (あなたは夕食を作っています。パートナーに、キッチンにお米が「たくさん」あるか、冷蔵庫に肉が「少しでも」あるか尋ねてください。)",
            b: "Answer your partner. Tell them there isn't 'much' rice, but there is 'a lot of' meat. (パートナーに答えてください。お米は「あまり」ないが、肉は「たくさん」あると伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "Meat", jpn: "肉" },
                { eng: "Fish", jpn: "魚" },
                { eng: "Soup", jpn: "スープ" },
                { eng: "Juice", jpn: "ジュース" },
                { eng: "Coffee", jpn: "コーヒー" },
                { eng: "Tea", jpn: "お茶 / 紅茶" },
                { eng: "Sugar", jpn: "砂糖" },
                { eng: "Salt", jpn: "塩" },
                { eng: "Butter", jpn: "バター" },
                { eng: "Oil", jpn: "油" },
                { eng: "Pasta", jpn: "パスタ" },
                { eng: "Food", jpn: "食べ物" },
                { eng: "Drink", jpn: "飲み物" },
                { eng: "Supermarket", jpn: "スーパーマーケット" }
            ],
            reading1: {
                title: "Task 2: Reading (Before the Supermarket)",
                instruction: "Read the note about checking the kitchen before going shopping.",
                eng: "<strong>Grocery List Check</strong><br><br>Before we go to the supermarket, we need to check the fridge. We have a lot of vegetables and some fish for tonight. However, we don't have much rice, so we must buy a large bag. Is there any milk? No, we don't have any milk. We also need to buy butter. We have a little butter left, but it is not enough for baking tomorrow. Finally, let's buy some juice for the children.",
                jpn: "<strong>買い物リストのチェック</strong><br><br>スーパーに行く前に、冷蔵庫をチェックする必要があります。今夜のための野菜はたくさんあり、魚もいくらかあります。しかし、お米があまりないので、大きな袋を買わなければなりません。牛乳はありますか？いいえ、牛乳は全くありません。バターも買う必要があります。バターは少し残っていますが、明日のパン作りには足りません。最後に、子供たちのためにジュースをいくつか買いましょう。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Let's make pasta for dinner tonight.", jpn: "今夜の夕食はパスタを作りましょう。" },
                { speaker: "B", eng: "Good idea. Do we have much pasta in the cupboard?", jpn: "いい考えですね。戸棚にパスタはたくさんありますか？" },
                { speaker: "A", eng: "Let me check. Yes, we have a lot of pasta.", jpn: "確認してみます。はい、パスタはたくさんあります。" },
                { speaker: "B", eng: "What about the sauce? Is there any tomato sauce?", jpn: "ソースはどうですか？トマトソースはありますか？" },
                { speaker: "A", eng: "We have a little tomato sauce, but not much. We can use it.", jpn: "トマトソースは少しありますが、多くはありません。それを使うことはできます。" },
                { speaker: "B", eng: "Do we have any cheese to put on top?", jpn: "上に乗せるチーズはありますか？" },
                { speaker: "A", eng: "No, we don't have any cheese. I finished it yesterday.", jpn: "いいえ、チーズは全くありません。昨日私が食べきってしまいました。" },
                { speaker: "B", eng: "That's okay. Do we have much olive oil?", jpn: "大丈夫ですよ。オリーブオイルはたくさんありますか？" },
                { speaker: "A", eng: "Yes, we have some. We can cook a simple meal.", jpn: "はい、いくらかあります。シンプルな食事が作れそうです。" },
                { speaker: "B", eng: "Perfect. I am very hungry!", jpn: "完璧です。私はとてもお腹が空いています！" }
            ],
            writingTask: {
                promptEng: "Write three sentences describing the food or drinks in your kitchen. Use uncountable nouns (like water, rice, meat, bread) and quantifiers (a lot of, some, a little, not much, not any). (For example: I have a lot of rice. I don't have much milk. I have a little cheese.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "あなたのキッチンにある食べ物や飲み物について、3つの文を書いてください。不可算名詞（water, rice, meat, breadなど）と数量詞（a lot of, some, a little, not much, not any）を使用してください。（例：私にはたくさんのお米があります。牛乳はあまりありません。チーズが少しあります。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 55,
        title: "Lesson 55: How to make a shopping list",
        goal: "Use counters and measurements (e.g., a cup of, a loaf of, 200 grams of) to specify exact amounts of uncountable nouns. <br><span style='font-size:0.9rem; color:var(--text-light);'>(『a cup of』『a loaf of』『200 grams of』などの単位を使って、不可算名詞の正確な量を指定する。)</span>",
        vocab: [
            { eng: "Cup", jpn: "カップ" },
            { eng: "Loaf", jpn: "パンの塊" },
            { eng: "Tub", jpn: "容器 / パック" },
            { eng: "Bottle", jpn: "瓶 / ボトル" },
            { eng: "Gram", jpn: "グラム" },
            { eng: "Liter", jpn: "リットル" },
            { eng: "Slice", jpn: "薄切り / スライス" },
            { eng: "Piece", jpn: "ピース / 一切れ" },
            { eng: "Flour", jpn: "小麦粉" },
            { eng: "Butter", jpn: "バター" },
            { eng: "Ice cream", jpn: "アイスクリーム" },
            { eng: "Water", jpn: "水" },
            { eng: "Bread", jpn: "パン" },
            { eng: "Recipe", jpn: "レシピ / 作り方" }
        ],
        dialogue: [
            { speaker: "A", eng: "Let's make the shopping list. <span class='swappable'>What do we need first?</span>", jpn: "買い物リストを作りましょう。まず何が必要ですか？" },
            { speaker: "B", eng: "<span class='swappable'>We need 200 grams of flour.</span>", jpn: "小麦粉が200グラム必要です。" },
            { speaker: "A", eng: "Okay. <span class='swappable'>Do we need any butter?</span>", jpn: "わかりました。バターは必要ですか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'>please buy a tub of butter.</span>", jpn: "はい、バターを1パック買ってください。" },
            { speaker: "A", eng: "Got it. <span class='swappable'>What else do we need?</span>", jpn: "了解しました。他には何が必要ですか？" },
            { speaker: "B", eng: "<span class='swappable'>We need a bottle of water.</span> Let's go!", jpn: "水を1本（1ボトル）必要です。行きましょう！" }
        ],
        expressions: [
            { category: "1. Asking for the first item (最初のアイテムを尋ねる)", options: ["What do we need first?", "What is on the list?", "What should we buy?"] },
            { category: "2. Stating exact weights (正確な重さを伝える)", options: ["We need 200 grams of flour.", "We need 500 grams of sugar.", "We need 100 grams of cheese."] },
            { category: "3. Asking about specific items (特定のアイテムについて尋ねる)", options: ["Do we need any butter?", "Do we need any bread?", "Do we need any milk?"] },
            { category: "4. Requesting containers/shapes (容器や形を指定して頼む)", options: ["please buy a tub of butter.", "please buy a loaf of bread.", "please buy a tub of ice cream."] },
            { category: "5. Asking for further items (他に何が必要か尋ねる)", options: ["What else do we need?", "Is there anything else?", "Do we need more?"] },
            { category: "6. Stating volumes/pieces (体積や個数を伝える)", options: ["We need a bottle of water.", "We need a cup of milk.", "We need a slice of cake."] }
        ],
        grammar: {
            point: "Counters for Uncountable Nouns - 不可算名詞を数える単位",
            explanation: "Uncountable nouns (like water, bread, butter, or flour) cannot be counted directly (we cannot say 'two breads'). Instead, we use 'counters' or measure words to specify the amount or container.<br>• <strong>[Number / A]</strong> + <strong>[Counter]</strong> + <strong>of</strong> + <strong>[Noun]</strong><br>• Weight/Volume: <em>200 grams of</em> flour / <em>a liter of</em> water<br>• Containers: <em>a tub of</em> butter / <em>a bottle of</em> juice<br>• Shapes: <em>a loaf of</em> bread / <em>a slice of</em> pizza<br><span style='font-size:0.9rem; color:var(--text-light);'>（不可算名詞（水、パン、バター、小麦粉など）は直接数えることができません（『two breads』とは言えません）。代わりに、『カウンター（助数詞）』や単位を表す単語を使って量や容器を指定します。<br>・<strong>[数字 / A]</strong> ＋ <strong>[単位]</strong> ＋ <strong>of</strong> ＋ <strong>[名詞]</strong><br>・重さ/体積：200 grams of flour（200グラムの小麦粉） / a liter of water（1リットルの水）<br>・容器：a tub of butter（1パックのバター） / a bottle of juice（1本のジュース）<br>・形：a loaf of bread（1塊のパン） / a slice of pizza（1切れのピザ））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the pattern: '200 grams <u>of</u> flour', 'a tub <u>of</u> butter', and 'a bottle <u>of</u> water'. The word 'of' connects the counter to the food. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『200 grams <u>of</u> flour』『a tub <u>of</u> butter』『a bottle <u>of</u> water』というパターンに注目してください。『of』という単語が、単位と食べ物を繋いでいます。)</span>",
            examples: [
                { eng: "Can I have a cup of coffee?", jpn: "コーヒーを1杯いただけますか？" },
                { eng: "She ate two slices of bread for breakfast.", jpn: "彼女は朝食にパンを2切れ食べました。" },
                { eng: "We need three liters of water for the trip.", jpn: "旅行には3リットルの水が必要です。" }
            ]
        },
        clickingGames: [
            { prompt: "小麦粉が200グラム必要です。", target: "We need 200 grams of flour.", words: ["We", "need", "200", "grams", "of", "flour."] },
            { prompt: "バターを1パック買ってください。", target: "Please buy a tub of butter.", words: ["Please", "buy", "a", "tub", "of", "butter."] },
            { prompt: "他には何が必要ですか？", target: "What else do we need?", words: ["What", "else", "do", "we", "need?"] },
            { prompt: "水を1本（1ボトル）必要です。", target: "We need a bottle of water.", words: ["We", "need", "a", "bottle", "of", "water."] },
            { prompt: "パンを1塊買ってください。", target: "Please buy a loaf of bread.", words: ["Please", "buy", "a", "loaf", "of", "bread."] }
        ],
        dropdownGames: [
            { before: "I drank a", options: ["glass", "slice", "loaf"], answer: "glass", after: " of water after running." },
            { before: "Please buy a", options: ["loaf", "cup", "gram"], answer: "loaf", after: " of bread at the bakery." },
            { before: "We need 500", options: ["grams", "pieces", "bottles"], answer: "grams", after: " of chicken for the curry." },
            { before: "I would like a", options: ["slice", "tub", "liter"], answer: "slice", after: " of cheese on my burger." },
            { before: "Can you pass me that", options: ["bottle", "slice", "loaf"], answer: "bottle", after: " of olive oil?" },
            { before: "The recipe calls for a", options: ["cup", "piece", "loaf"], answer: "cup", after: " of sugar." },
            { before: "She bought a small", options: ["tub", "slice", "liter"], answer: "tub", after: " of ice cream for dessert." },
            { before: "He ate three", options: ["pieces", "bottles", "liters"], answer: "pieces", after: " of pizza last night." },
            { before: "My car needs 20", options: ["liters", "grams", "loaves"], answer: "liters", after: " of gas." },
            { before: "I have a", options: ["piece", "cup", "bottle"], answer: "piece", after: " of good news for you!" }
        ],
        roleplay: {
            a: "You are making a cake. Ask your partner to go to the store. Tell them to buy '200 grams of sugar' and 'a carton of milk'. (あなたはケーキを作っています。パートナーに買い物に行くよう頼んでください。『200グラムの砂糖』と『1パックの牛乳』を買うように伝えてください。)",
            b: "Agree to go. Ask if you should also buy 'a tub of butter' or 'a bottle of water'. (行くことに同意してください。『1パックのバター』や『1ボトルの水』も買うべきか尋ねてください。)"
        },
        homework: {
            vocab: [
                { eng: "Carton", jpn: "紙パック / カートン" },
                { eng: "Can", jpn: "缶" },
                { eng: "Jar", jpn: "瓶 / ジャー" },
                { eng: "Bag", jpn: "袋" },
                { eng: "Box", jpn: "箱" },
                { eng: "Bowl", jpn: "ボウル / どんぶり" },
                { eng: "Glass", jpn: "グラス" },
                { eng: "Sugar", jpn: "砂糖" },
                { eng: "Salt", jpn: "塩" },
                { eng: "Tea", jpn: "お茶" },
                { eng: "Coffee", jpn: "コーヒー" },
                { eng: "Cake", jpn: "ケーキ" },
                { eng: "List", jpn: "リスト" },
                { eng: "Shop", jpn: "買い物をする / 店" }
            ],
            reading1: {
                title: "Task 2: Reading (A Shopping Trip)",
                instruction: "Read the story about preparing for a party.",
                eng: "<strong>Getting Ready for the Party</strong><br><br>Tomorrow is my sister's birthday party. I am going to the supermarket to buy food. First, I need a large bag of flour and 500 grams of sugar to bake a cake. Next, I must buy drinks. I will get two cartons of orange juice and a bottle of sparkling water. For snacks, I need a box of cookies and a large bag of potato chips. Finally, I will buy a jar of jam and a loaf of fresh bread for tomorrow's breakfast. The shopping bags will be very heavy!",
                jpn: "<strong>パーティーの準備</strong><br><br>明日は妹の誕生日パーティーです。私は食べ物を買いにスーパーに行きます。まず、ケーキを焼くために大きな小麦粉の袋と500グラムの砂糖が必要です。次に、飲み物を買わなければなりません。オレンジジュースを2パックと炭酸水を1ボトル買います。おやつには、クッキーの箱を1つとポテトチップスの大袋を1つ必要です。最後に、明日の朝食のためにジャムの瓶を1つと焼きたてのパンを1塊買います。買い物袋はとても重くなりそうです！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Are you ready to go to the supermarket?", jpn: "スーパーに行く準備はできましたか？" },
                { speaker: "B", eng: "Yes. Do you have the shopping list?", jpn: "はい。買い物リストは持っていますか？" },
                { speaker: "A", eng: "I have it right here. First, we need two cartons of milk.", jpn: "ここに持っていますよ。まず、牛乳が2パック必要です。" },
                { speaker: "B", eng: "Okay, I will get the milk. Do we need any bread?", jpn: "わかりました、牛乳を取ってきます。パンは必要ですか？" },
                { speaker: "A", eng: "Yes, please grab a loaf of white bread. Oh, and a jar of strawberry jam.", jpn: "はい、白いパンを1塊取ってください。あ、あとイチゴジャムの瓶も1つ。" },
                { speaker: "B", eng: "Got it. What about drinks for dinner?", jpn: "了解しました。夕食の飲み物についてはどうですか？" },
                { speaker: "A", eng: "We should buy a large bottle of cola and two cans of green tea.", jpn: "大きなコーラのボトルを1本と、緑茶の缶を2つ買うべきですね。" },
                { speaker: "B", eng: "Alright. Is there anything else?", jpn: "わかりました。他には何かありますか？" },
                { speaker: "A", eng: "Just one more thing. We need 300 grams of beef for the curry.", jpn: "あと1つだけです。カレーのために牛肉が300グラム必要です。" },
                { speaker: "B", eng: "Let's go to the meat section first!", jpn: "まずお肉のコーナーに行きましょう！" }
            ],
            writingTask: {
                promptEng: "Imagine you are making a shopping list or a recipe. Write three sentences using counters (like a cup of, a loaf of, 200 grams of, a bottle of). (For example: I need to buy a loaf of bread. Please add a cup of sugar to the bowl. We have two bottles of water.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "買い物リストやレシピを作っていると想像してください。単位（a cup of, a loaf of, 200 grams of, a bottle of など）を使って3つの文を書いてください。（例：パンを1塊買う必要があります。ボウルに砂糖を1カップ加えてください。水が2ボトルあります。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },{
        id: 56,
        title: "Lesson 56: How to talk about important dates",
        goal: "Talk about birthdays, meetings, and important events using days of the week and ordinal numbers (1st, 2nd, 3rd...). <br><span style='font-size:0.9rem; color:var(--text-light);'>(曜日と序数（1st, 2nd, 3rd...）を使って、誕生日、会議、重要なイベントについて話す。)</span>",
        vocab: [
            { eng: "First", jpn: "1日 / 1番目の" },
            { eng: "Second", jpn: "2日 / 2番目の" },
            { eng: "Third", jpn: "3日 / 3番目の" },
            { eng: "Fourth", jpn: "4日 / 4番目の" },
            { eng: "Birthday", jpn: "誕生日" },
            { eng: "Date", jpn: "日付" },
            { eng: "Monday", jpn: "月曜日" },
            { eng: "Tuesday", jpn: "火曜日" },
            { eng: "Wednesday", jpn: "水曜日" },
            { eng: "Thursday", jpn: "木曜日" },
            { eng: "Friday", jpn: "金曜日" },
            { eng: "Saturday", jpn: "土曜日" },
            { eng: "Sunday", jpn: "日曜日" },
            { eng: "Important", jpn: "重要な / 大切な" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me. <span class='swappable'>What is the date today?</span>", jpn: "すみません。今日は何日ですか？" },
            { speaker: "B", eng: "Today is Monday. <span class='swappable'>It is the first of May.</span>", jpn: "今日は月曜日です。5月の1日です。" },
            { speaker: "A", eng: "Oh, wow! <span class='swappable'>My birthday is on the second.</span>", jpn: "おお、わあ！私の誕生日は2日です。" },
            { speaker: "B", eng: "Happy early birthday! <span class='swappable'>Are you doing anything special?</span>", jpn: "少し早いけど誕生日おめでとう！何か特別なことをしますか？" },
            { speaker: "A", eng: "Yes, <span class='swappable'>I am having a party on Saturday.</span>", jpn: "はい、土曜日にパーティーをします。" },
            { speaker: "B", eng: "That sounds fun. <span class='swappable'>I hope you have a great day!</span>", jpn: "楽しそうですね。素晴らしい一日になることを願っています！" }
        ],
        expressions: [
            { category: "1. Asking about dates and days (日付や曜日を尋ねる)", options: ["What is the date today?", "What day is it today?", "When is the meeting?"] },
            { category: "2. Stating the date (日付を伝える)", options: ["It is the first of May.", "It is the third of June.", "It is the tenth of April."] },
            { category: "3. Talking about personal events (個人のイベントについて話す)", options: ["My birthday is on the second.", "The party is on the fourth.", "My test is on the fifth."] },
            { category: "4. Asking about plans (予定を尋ねる)", options: ["Are you doing anything special?", "Are you busy on Friday?", "Do you have any plans?"] },
            { category: "5. Stating plans with days of the week (曜日を使って予定を伝える)", options: ["I am having a party on Saturday.", "I am meeting friends on Sunday.", "I am working on Tuesday."] },
            { category: "6. Wishing someone well (良い一日を願う)", options: ["I hope you have a great day!", "I hope it is fun!", "Enjoy your party!"] }
        ],
        grammar: {
            point: "Ordinal Numbers and Days of the Week - 序数と曜日",
            explanation: "When we talk about dates in English, we use <strong>ordinal numbers</strong> (first, second, third, fourth...), not cardinal numbers (one, two, three). We use the preposition <strong>on</strong> before days of the week and specific dates.<br>• <strong>Days:</strong> <em>on</em> Monday, <em>on</em> Friday<br>• <strong>Dates:</strong> <em>on</em> the first, <em>on</em> the second of May<br><span style='font-size:0.9rem; color:var(--text-light);'>（英語で日付について話すときは、基数（one, two, three）ではなく<strong>序数</strong>（first, second, third, fourth...）を使用します。曜日や特定の日付の前には、前置詞の <strong>on</strong> を使います。<br>・<strong>曜日：</strong> on Monday（月曜日に）, on Friday（金曜日に）<br>・<strong>日付：</strong> on the first（1日に）, on the second of May（5月2日に））</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the use of ordinal numbers for the date: 'the <u>first</u> of May' and 'on the <u>second</u>'. Also notice the preposition 'on' before the day: '<u>on</u> Saturday'. <br><span style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：日付を表す序数の使い方に注目してください：『the <u>first</u> of May』『on the <u>second</u>』。また、曜日の前の前置詞『on』にも注目してください：『<u>on</u> Saturday』。)</span>",
            examples: [
                { eng: "The meeting is on Wednesday.", jpn: "会議は水曜日にあります。" },
                { eng: "Her birthday is the third of November.", jpn: "彼女の誕生日は11月3日です。" },
                { eng: "I will see you on the fifth.", jpn: "5日にお会いしましょう。" }
            ]
        },
        clickingGames: [
            { prompt: "今日は5月の1日です。", target: "Today is the first of May.", words: ["Today", "is", "the", "first", "of", "May."] },
            { prompt: "私の誕生日は2日です。", target: "My birthday is on the second.", words: ["My", "birthday", "is", "on", "the", "second."] },
            { prompt: "最初の会議は月曜日にあります。", target: "The first meeting is on Monday.", words: ["The", "first", "meeting", "is", "on", "Monday."] },
            { prompt: "3日にお会いしましょう。", target: "I will see you on the third.", words: ["I", "will", "see", "you", "on", "the", "third."] },
            { prompt: "そのパーティーは今月の4日です。", target: "The party is on the fourth.", words: ["The", "party", "is", "on", "the", "fourth."] }
        ],
        dropdownGames: [
            { before: "The meeting is", options: ["on", "in", "at"], answer: "on", after: " Friday morning." },
            { before: "My birthday is", options: ["on", "the", "in"], answer: "the", after: " fourth of July." },
            { before: "Today is the", options: ["two", "second", "three"], answer: "second", after: " of the month." },
            { before: "Are you busy", options: ["on", "in", "at"], answer: "on", after: " Sunday?" },
            { before: "She won", options: ["one", "first", "once"], answer: "first", after: " prize in the contest." },
            { before: "We have an important event on the", options: ["three", "third", "threes"], answer: "third", after: "." },
            { before: "What are you doing", options: ["on", "in", "at"], answer: "on", after: " Tuesday?" },
            { before: "The movie comes out on the", options: ["fifth", "five", "fiveth"], answer: "fifth", after: " of August." },
            { before: "I start my new job", options: ["on", "in", "at"], answer: "on", after: " Monday." },
            { before: "Today is", options: ["the", "a", "an"], answer: "the", after: " first day of school." }
        ],
        roleplay: {
            a: "Ask your partner when their birthday is. Then ask what day of the week it is on this year. (パートナーにいつが誕生日か尋ねてください。そして、今年はそれが何曜日になるか尋ねてください。)",
            b: "Tell your partner your birthday using an ordinal number (e.g., the fifth of May). Tell them what day it is on. (序数を使って誕生日を伝えてください。それが何曜日か伝えてください。)"
        },
        homework: {
            vocab: [
                { eng: "January", jpn: "1月" },
                { eng: "February", jpn: "2月" },
                { eng: "March", jpn: "3月" },
                { eng: "April", jpn: "4月" },
                { eng: "May", jpn: "5月" },
                { eng: "June", jpn: "6月" },
                { eng: "July", jpn: "7月" },
                { eng: "August", jpn: "8月" },
                { eng: "September", jpn: "9月" },
                { eng: "October", jpn: "10月" },
                { eng: "November", jpn: "11月" },
                { eng: "December", jpn: "12月" },
                { eng: "Month", jpn: "月" },
                { eng: "Year", jpn: "年" }
            ],
            reading1: {
                title: "Task 2: Reading (A Busy Month)",
                instruction: "Read the diary entry about important dates in October.",
                eng: "<strong>A Busy October</strong><br><br>October is a very busy month for my family. My mother's birthday is on the third of October. We usually have a big dinner for her. Then, my sister has an important school test on the twelfth. She studies every day. My favorite day is Halloween. It is always on the thirty-first of October. This year, it is on a Tuesday, but I am still going to a fun party with my friends. I love the month of October!",
                jpn: "<strong>忙しい10月</strong><br><br>10月は私の家族にとってとても忙しい月です。母の誕生日は10月3日です。私たちはいつも彼女のために豪華な夕食をとります。それから、姉（妹）は12日に重要な学校のテストがあります。彼女は毎日勉強しています。私が一番好きな日はハロウィンです。それはいつも10月31日です。今年は火曜日ですが、それでも友達と楽しいパーティーに行く予定です。私は10月という月が大好きです！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Look at the calendar. We have a lot of meetings next week.", jpn: "カレンダーを見てください。来週は会議がたくさんありますね。" },
                { speaker: "B", eng: "Really? When is the first meeting?", jpn: "本当ですか？最初の会議はいつですか？" },
                { speaker: "A", eng: "The first meeting is on Monday, the fourth of September.", jpn: "最初の会議は9月4日の月曜日です。" },
                { speaker: "B", eng: "Okay. And what about the project deadline?", jpn: "わかりました。プロジェクトの締め切りはどうですか？" },
                { speaker: "A", eng: "The deadline is on Wednesday the sixth. We must finish by then.", jpn: "締め切りは6日の水曜日です。それまでに終わらせなければなりません。" },
                { speaker: "B", eng: "That is very soon! Are we working on Saturday?", jpn: "それはすぐですね！私たちは土曜日も働くのですか？" },
                { speaker: "A", eng: "No, we don't work on Saturday. But there is an office party on Friday night.", jpn: "いいえ、土曜日は働きません。でも、金曜日の夜にオフィスのパーティーがあります。" },
                { speaker: "B", eng: "Oh, that is on the eighth, right?", jpn: "ああ、それは8日ですよね？" },
                { speaker: "A", eng: "Yes, exactly. It will be fun.", jpn: "はい、その通りです。楽しいですよ。" },
                { speaker: "B", eng: "Good. I need to relax after this busy week.", jpn: "良かったです。この忙しい週の後はリラックスする必要があります。" }
            ],
            writingTask: {
                promptEng: "Write three sentences about important dates in your life. Use days of the week and ordinal numbers (first, second, third, etc.). (For example: My birthday is on the tenth of May. Our family vacation starts on Friday. The meeting is on the first of June.) Write your answer on Google Docs and share it with your teacher.",
                promptJpn: "あなたの人生における重要な日付について、3つの文を書いてください。曜日と序数（first, second, thirdなど）を使用してください。（例：私の誕生日は5月10日です。家族旅行は金曜日に始まります。会議は6月1日です。）Googleドキュメントに書いて、先生に共有してください。"
            }
        }
    },
];