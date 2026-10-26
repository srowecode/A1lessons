const a1Curriculum = [
    {
        id: 1,
        title: "Lesson 1: How to introduce yourself",
        goal: "Confidently introduce yourself and state your name, origin, and basic details. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(自信を持って自己紹介し、名前、出身、基本的な情報を伝える。)</span>",
        vocab: [
            { eng: "Teacher", jpn: "教師", exEng: "I am an English teacher.", exJpn: "私は英語の教師です。" },
            { eng: "Doctor", jpn: "医者", exEng: "She is a doctor.", exJpn: "彼女は医者です。" },
            { eng: "Nurse", jpn: "看護師", exEng: "The nurse is very kind.", exJpn: "その看護師はとても親切です。" },
            { eng: "Dentist", jpn: "歯科医", exEng: "I need to see a dentist.", exJpn: "私は歯科医に行く必要があります。" },
            { eng: "Farmer", jpn: "農家", exEng: "He is a farmer.", exJpn: "彼は農家です。" },
            { eng: "Chef", jpn: "料理人", exEng: "My brother is a chef.", exJpn: "私の兄は料理人です。" },
            { eng: "Pilot", jpn: "パイロット", exEng: "The pilot flies the plane.", exJpn: "パイロットは飛行機を操縦します。" },
            { eng: "Police officer", jpn: "警察官", exEng: "The police officer helped me.", exJpn: "警察官が私を助けてくれました。" },
            { eng: "Firefighter", jpn: "消防士", exEng: "He works as a firefighter.", exJpn: "彼は消防士として働いています。" },
            { eng: "Singer", jpn: "歌手", exEng: "She is a famous singer.", exJpn: "彼女は有名な歌手です。" },
            { eng: "Actor", jpn: "俳優", exEng: "He is a great actor.", exJpn: "彼は素晴らしい俳優です。" },
            { eng: "Writer", jpn: "作家", exEng: "I want to be a writer.", exJpn: "私は作家になりたいです。" },
            { eng: "Lawyer", jpn: "弁護士", exEng: "We need to speak to a lawyer.", exJpn: "私たちは弁護士と話す必要があります。" },
            { eng: "Scientist", jpn: "科学者", exEng: "The scientist works in a lab.", exJpn: "その科学者は研究所で働いています。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hello, I <i class='grammar-target'>am</i> Sarah. What <i class='grammar-target'>is</i> your name?", jpn: "こんにちは、私はサラです。あなたの名前は何ですか？" },
            { speaker: "B", eng: "Hi Sarah, my name <i class='grammar-target'>is</i> John. <span class='swappable'>Please call me Johnny.</span>", jpn: "やあサラ、私の名前はジョンです。ジョニーと呼んでください。" },
            { speaker: "A", eng: "Nice to meet you, Johnny. Where <i class='grammar-target'>are</i> you from?", jpn: "はじめまして、ジョニー。出身はどこですか？" },
            { speaker: "B", eng: "I <i class='grammar-target'>am</i> from Canada, but I live in Japan now. <span class='swappable'>What do you do?</span>", jpn: "カナダ出身ですが、今は日本に住んでいます。お仕事は何ですか？" },
            { speaker: "A", eng: "I <i class='grammar-target'>am</i> a student.", jpn: "私は学生です。" }
        ],
        dialogueStructure: [
            "Greet + State your name + Ask for name <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(挨拶 ＋ 名前を述べる ＋ 名前を尋ねる)</span>",
            "> Greet + State your name + Give nickname <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(挨拶 ＋ 名前を述べる ＋ ニックネームを教える)</span>",
            "Say nice to meet you + Ask origin <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(はじめましてと言う ＋ 出身を尋ねる)</span>",
            "> State origin + State current home + Ask about job <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(出身を述べる ＋ 現在の住まいを述べる ＋ 職業について尋ねる)</span>",
            "State your job <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(自分の職業を述べる)</span>"
        ],
        expressions: [
            { 
                category: "1. Saying your name/nickname (名前やニックネームの伝え方)", 
                options: [
                    { eng: "You can call me Ben.", jpn: "ベンと呼んでください。" }, 
                    { eng: "Everyone calls me Ben.", jpn: "みんな私をベンと呼びます。" }, 
                    { eng: "I usually go by Ben.", jpn: "普段はベンと名乗っています。" }
                ] 
            },
            { 
                category: "2. Asking about someone's job (職業の尋ね方)", 
                options: [
                    { eng: "What do you do for work?", jpn: "お仕事は何ですか？" }, 
                    { eng: "What is your job?", jpn: "あなたの職業は何ですか？" }, 
                    { eng: "What do you do for a living?", jpn: "生計を立てるために何をしていますか？" }
                ] 
            }
        ],
        grammar: {
            point: "The Verb 'To Be' (am / is / are) - be動詞",
            explanation: "The verb 'to be' connects a subject to a noun or adjective that describes it. We use it to state absolute facts like identity, locations, age, and feelings. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(be動詞（am, is, are）は、英語の文章で最も基本となる動詞で、「〜です」「〜にいます・あります」という意味を持ちます。主語（話のテーマとなる人や物）と、それを説明する名詞や形容詞をイコール（＝）で結びつける役割を果たします。自己紹介で自分の名前や年齢を伝える時、出身地や職業などの絶対的な事実を述べる時、または現在の感情や状態を表現する時に欠かせない重要な文法です。主語に合わせて am, is, are を正しく使い分けましょう。)</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the verbs in the phrases: 'I <u>am</u> Sarah', 'What <u>is</u> your name?', 'My name <u>is</u> John', 'Where <u>are</u> you from?', and 'I <u>am</u> from Canada.' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『I <u>am</u> Sarah』などのフレーズの中の動詞に注目してください。)</span>",
            examples: [
                { eng: "I am a teacher.", jpn: "私は教師です。" },
                { eng: "She is 20 years old.", jpn: "彼女は20歳です。" },
                { eng: "They are not from Brazil.", jpn: "彼らはブラジル出身ではありません。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "Simon / 45 / 192 cm / Doctor / Chicago / American", 
            target: "Simon is 45. Simon is 192 cm. Simon is a doctor. Simon is from Chicago. Simon is American." 
        },
        grammarPractice: [
            { prompt: "Sarah / 28 / 165 cm / Nurse / London / British" },
            { prompt: "Ken and Yui / 20 / Students / Tokyo / Japanese" },
            { prompt: "John / 35 / 180 cm / Teacher / Sydney / Australian" },
            { prompt: "Lisa / 40 / 160 cm / Artist / Paris / French" },
            { prompt: "Tom / 32 / 165 cm / Doctor / Spain / Spanish" }
        ],
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
            a: "You are attending your first day at a new language school. Walk up to the person sitting next to you and introduce yourself. Tell them your name, age, and where you are from. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(新しい語学学校の初日です。隣に座っている人に近づき、自己紹介をしてください。名前、年齢、出身地を伝えてください。)</span>",
            b: "You are a friendly student at the school. Reply to Student A, introduce yourself, tell them your nickname, and welcome them. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたはその学校のフレンドリーな生徒です。生徒Aに返答し、自己紹介をして、ニックネームを伝え、歓迎してください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Engineer", jpn: "エンジニア", exEng: "He is a software engineer.", exJpn: "彼はソフトウェアエンジニアです。" },
                { eng: "Musician", jpn: "音楽家", exEng: "The musician plays well.", exJpn: "その音楽家は上手に演奏します。" },
                { eng: "Artist", jpn: "芸術家", exEng: "She is a famous artist.", exJpn: "彼女は有名な芸術家です。" },
                { eng: "Baker", jpn: "パン屋", exEng: "The baker makes fresh bread.", exJpn: "パン屋は焼きたてのパンを作ります。" },
                { eng: "Clerk", jpn: "店員", exEng: "Ask the clerk for help.", exJpn: "店員に助けを求めてください。" },
                { eng: "Mechanic", jpn: "整備士", exEng: "The mechanic fixed my car.", exJpn: "整備士が私の車を直してくれました。" },
                { eng: "Driver", jpn: "運転手", exEng: "He is a bus driver.", exJpn: "彼はバスの運転手です。" },
                { eng: "Photographer", jpn: "写真家", exEng: "The photographer took a picture.", exJpn: "写真家が写真を撮りました。" },
                { eng: "Dancer", jpn: "ダンサー", exEng: "She is a ballet dancer.", exJpn: "彼女はバレエダンサーです。" },
                { eng: "Manager", jpn: "マネージャー", exEng: "The manager is in a meeting.", exJpn: "マネージャーは会議中です。" },
                { eng: "Programmer", jpn: "プログラマー", exEng: "He works as a programmer.", exJpn: "彼はプログラマーとして働いています。" },
                { eng: "Hairdresser", jpn: "美容師", exEng: "The hairdresser cut my hair.", exJpn: "美容師が私の髪を切りました。" },
                { eng: "Journalist", jpn: "ジャーナリスト", exEng: "The journalist writes news.", exJpn: "ジャーナリストはニュースを書きます。" },
                { eng: "President", jpn: "社長", exEng: "She is the president of the company.", exJpn: "彼女はその会社の社長です。" }
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
                promptEng: "Write a short self-introduction profile. Include your name, age, country, city, and job.",
                promptJpn: "短い自己紹介のプロフィールを書いてください。名前、年齢、国、都市、職業を含めてください。"
            }
        }
    },
    {
        id: 2,
        title: "Lesson 2: How to introduce your friends",
        goal: "Introduce people and talk about them naturally using subject pronouns (he, she, they, we). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(主格代名詞（he, she, they, we）を使って、人を自然に紹介し、その人たちについて話す。)</span>",
        vocab: [
            { eng: "He", jpn: "彼は / 彼が", exEng: "He is my friend.", exJpn: "彼は私の友達です。" },
            { eng: "She", jpn: "彼女は / 彼女が", exEng: "She works here.", exJpn: "彼女はここで働いています。" },
            { eng: "They", jpn: "彼らは / 彼女らは", exEng: "They are nice.", exJpn: "彼らは親切です。" },
            { eng: "We", jpn: "私たちは / 私たちが", exEng: "We study English.", exJpn: "私たちは英語を勉強します。" },
            { eng: "Friend", jpn: "友達", exEng: "This is my friend.", exJpn: "こちらは私の友達です。" },
            { eng: "Colleague", jpn: "同僚", exEng: "He is a colleague.", exJpn: "彼は同僚です。" },
            { eng: "Classmate", jpn: "クラスメイト", exEng: "She is my classmate.", exJpn: "彼女は私のクラスメイトです。" },
            { eng: "Meet", jpn: "会う / 知り合いになる", exEng: "Nice to meet you.", exJpn: "はじめまして。" },
            { eng: "Introduce", jpn: "紹介する", exEng: "Let me introduce him.", exJpn: "彼を紹介させてください。" },
            { eng: "Doctor", jpn: "医者", exEng: "She is a doctor.", exJpn: "彼女は医者です。" },
            { eng: "Work", jpn: "働く", exEng: "We work together.", exJpn: "私たちは一緒に働いています。" },
            { eng: "Live", jpn: "住んでいる", exEng: "They live in Tokyo.", exJpn: "彼らは東京に住んでいます。" },
            { eng: "Together", jpn: "一緒に", exEng: "We eat together.", exJpn: "私たちは一緒に食事をします。" },
            { eng: "Play", jpn: "遊ぶ", exEng: "I play with my friends.", exJpn: "友達と一緒に遊んでいます。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hi David. <span class='swappable'>I'd like to introduce you to my friend, Mark.</span>", jpn: "こんにちは、デビッド。私の友達のマークを紹介したいです。" },
            { speaker: "B", eng: "Nice to meet you, Mark.", jpn: "はじめまして、マーク。" },
            { speaker: "A", eng: "<i class='grammar-target'>He</i> is a doctor.</span> <i class='grammar-target'>We</i> work together.", jpn: "彼は医者です。私たちは一緒に働いています。" },
            { speaker: "B", eng: "Oh, that is great. And <span class='swappable'>who are those people over there?", jpn: "おお、それは素晴らしいですね。そして、あそこにいる人たちは誰ですか？" },
            { speaker: "A", eng: "<i class='grammar-target'>They</i> are my classmates, Lisa and Tom.", jpn: "彼らは私のクラスメイトの、リサとトムです。" },
            { speaker: "B", eng: "Where are they from?", jpn: "彼らはどこから来たのですか？" },
            { speaker: "A", eng: "<i class='grammar-target'>She</i> is from Canada, and <i class='grammar-target'>he</i> is from the UK.", jpn: "彼女はカナダ出身で、彼はイギリス出身です。" }
        ],
        dialogueStructure: [
            "Greet + Introduce friend <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(挨拶 ＋ 友達を紹介する)</span>",
            "> Say nice to meet you <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(はじめましてと言う)</span>",
            "State friend's job + State connection <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(友達の職業を述べる ＋ 関係性を述べる)</span>",
            "> React + Ask about others <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 他の人について尋ねる)</span>",
            "State relationship + Names <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(関係性を述べる ＋ 名前)</span>",
            "> Ask origin <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(出身を尋ねる)</span>",
            "State origins <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(出身を述べる)</span>"
        ],
        expressions: [
            { 
                category: "1. Introducing someone (誰かを紹介する)", 
                options: [
                    { eng: "I'd like to introduce you to my friend, Mark.", jpn: "私の友達のマークを紹介したいです。" }, 
                    { eng: "This is my colleague, Sarah.", jpn: "こちらは同僚のサラです。" }, 
                    { eng: "I want you to meet my sister, Alice.", jpn: "私の妹のアリスに会ってほしいです。" }
                ] 
            },
            { 
                category: "2. Asking about people (人について尋ねる)", 
                options: [
                    { eng: "Who's that over there?", jpn: "あそこにいるのは誰ですか？" }, 
                    { eng: "Who's that?", jpn: "あれは誰ですか？" }, 
                    { eng: "Who are they?", jpn: "彼らは誰ですか？" }
                ] 
            }
        ],
        grammar: {
            point: "Subject Pronouns (he, she, they, we) - 主格代名詞",
            explanation: "We use subject pronouns when a person is the 'doer' of the action. We use them instead of repeating the person's name. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(主格代名詞（he, she, they, we など）は、文の中で動作を行う「主語（〜は、〜が）」として働く言葉です。英語では同じ名詞や人の名前を何度も繰り返すことを避けるため、一度出た名前は次から代名詞に置き換えるのが自然なルールです。例えば、男性なら「He（彼は）」、女性なら「She（彼女は）」、自分を含む複数人なら「We（私たちは）」、自分を含まない複数人や物なら「They（彼らは・それらは）」を使います。日常会話でスムーズに人を紹介したり、その人たちについて話したりするために非常に重要です。)</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the names are replaced with pronouns: Mark becomes '<u>He</u>', Lisa and Tom become '<u>They</u>', and Lisa becomes '<u>She</u>'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：名前がどのように代名詞に置き換わっているかに注目してください：マークは『<u>He</u>』に、リサとトムは『<u>They</u>』に、リサは『<u>She</u>』になっています。)</span>",
            examples: [
                { eng: "This is my brother. He is a student.", jpn: "こちらは私の兄（弟）です。彼は学生です。" },
                { eng: "Sarah and John are married. They have a dog.", jpn: "サラとジョンは結婚しています。彼らは犬を飼っています。" },
                { eng: "My sister and I like movies. We go to the cinema.", jpn: "妹と私は映画が好きです。私たちは映画館に行きます。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "John is my friend. (John) is a doctor.", 
            target: "He is a doctor." 
        },
        grammarPractice: [
            { prompt: "Lisa and Tom are here. (Lisa and Tom) are from Canada." },
            { prompt: "My sister is a student. (My sister) is 20 years old." },
            { prompt: "David and I play tennis. (David and I) play on weekends." },
            { prompt: "The teachers are in the room. (The teachers) are eating lunch." }
        ],
        clickingGames: [
            { prompt: "彼は医者です。", target: "He is a doctor.", words: ["He", "is", "a", "doctor."] },
            { prompt: "私たちは一緒に働いています。", target: "We work together.", words: ["We", "work", "together."] },
            { prompt: "彼らは私のクラスメイトです。", target: "They are my classmates.", words: ["They", "are", "my", "classmates."] },
            { prompt: "彼女はカナダ出身です。", target: "She is from Canada.", words: ["She", "is", "from", "Canada."] },
            { prompt: "彼らはイギリス出身です。", target: "They are from the UK.", words: ["They", "are", "from", "the", "UK."] }
        ],
        dropdownGames: [
            { before: "This is John.", options: ["He", "She", "They"], answer: "He", after: " is my best friend." },
            { before: "This is Mary.", options: ["She", "He", "They"], answer: "She", after: " works in my office." },
            { before: "Tom and Lisa are here.", options: ["They", "We", "He"], answer: "They", after: " are waiting outside." },
            { before: "My brother and I are tall.", options: ["We", "They", "He"], answer: "We", after: " play basketball." }
        ],
        roleplay: {
            a: "Introduce a friend to another person. Tell them your friend's name and use 'He' or 'She' to explain what their job is. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(友達を別の人に紹介してください。友達の名前を伝え、『He』または『She』を使って彼らの職業を説明してください。)</span>",
            b: "Say 'Nice to meet you'. Then, use 'We' to explain that you and your friend play a sport together. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(『はじめまして』と言ってください。その後、『We』を使って、あなたと友達が一緒にスポーツをしていることを説明してください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Husband", jpn: "夫", exEng: "He is her husband.", exJpn: "彼は彼女の夫です。" },
                { eng: "Wife", jpn: "妻", exEng: "She is his wife.", exJpn: "彼女は彼の妻です。" },
                { eng: "Neighbor", jpn: "近所の人", exEng: "He is my neighbor.", exJpn: "彼は私の近所の人です。" },
                { eng: "Guest", jpn: "客 / ゲスト", exEng: "The guest is here.", exJpn: "ゲストが来ています。" },
                { eng: "Party", jpn: "パーティー", exEng: "We had a party.", exJpn: "私たちはパーティーをしました。" },
                { eng: "Welcome", jpn: "歓迎する / ようこそ", exEng: "Welcome to my home.", exJpn: "私の家へようこそ。" },
                { eng: "Talk", jpn: "話す", exEng: "They talk a lot.", exJpn: "彼らはよく話します。" },
                { eng: "Everyone", jpn: "みんな", exEng: "Everyone is happy.", exJpn: "みんな幸せです。" },
                { eng: "Enjoy", jpn: "楽しむ", exEng: "Enjoy the food.", exJpn: "食事を楽しんでください。" },
                { eng: "Company", jpn: "会社", exEng: "It is a good company.", exJpn: "それは良い会社です。" },	
                { eng: "Office", jpn: "オフィス", exEng: "This is my office.", exJpn: "ここは私のオフィスです。" },
                { eng: "Engineer", jpn: "エンジニア", exEng: "She is an engineer.", exJpn: "彼女はエンジニアです。" },
                { eng: "Teacher", jpn: "先生", exEng: "He is a teacher.", exJpn: "彼は先生です。" },
                { eng: "Travel", jpn: "旅行する", exEng: "We travel often.", exJpn: "私たちはよく旅行します。" }
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
                { speaker: "A", eng: "This is my colleague, Mike. He is the new manager.", jpn: "彼は私の同僚のマイクです。新しいマネージャーなんですよ。" }
            ],
            writingTask: {
                promptEng: "Imagine you are at a party. Write three sentences introducing two of your real friends. Use 'This is...', 'He / She is...', and 'They are...' to describe who they are.",
                promptJpn: "パーティーにいると想像してください。あなたの実際の友達を2人紹介する文を3つ書いてください。『This is...』『He / She is...』『They are...』を使って説明してください。"
            }
        }
    },
    {
        id: 3,
        title: "Lesson 3: How to order fast food",
        goal: "Order fast food and use 'a' to refer to a single item or portion. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(ファストフードを注文し、『a』を使って1つの品物や1人前を指定する。)</span>",
        vocab: [
            { eng: "A / An", jpn: "1つの / 1人前の", exEng: "I want an apple.", exJpn: "りんごを1つ欲しいです。" },
            { eng: "Hamburger", jpn: "ハンバーガー", exEng: "I will eat a hamburger.", exJpn: "ハンバーガーを食べます。" },
            { eng: "Cheeseburger", jpn: "チーズバーガー", exEng: "She likes cheeseburgers.", exJpn: "彼女はチーズバーガーが好きです。" },
            { eng: "Fries", jpn: "フライドポテト", exEng: "I want a medium fries.", exJpn: "Mサイズのポテトが欲しいです。" },
            { eng: "Salad", jpn: "サラダ", exEng: "This salad is fresh.", exJpn: "このサラダは新鮮です。" },
            { eng: "Cola", jpn: "コーラ", exEng: "Can I have a cola?", exJpn: "コーラをもらえますか？" },
            { eng: "Coffee", jpn: "コーヒー", exEng: "He drinks coffee.", exJpn: "彼はコーヒーを飲みます。" },
            { eng: "Meal", jpn: "セット", exEng: "I want a combo meal.", exJpn: "コンボセットが欲しいです。" },
            { eng: "Small", jpn: "Sサイズ / 小さい", exEng: "A small drink, please.", exJpn: "Sサイズの飲み物をお願いします。" },
            { eng: "Medium", jpn: "Mサイズ / 中くらい", exEng: "I want a medium shirt.", exJpn: "Mサイズのシャツが欲しいです。" },
            { eng: "Large", jpn: "Lサイズ / 大きい", exEng: "He has a large dog.", exJpn: "彼は大きな犬を飼っています。" },
            { eng: "Here", jpn: "店内で", exEng: "I will eat here.", exJpn: "ここで食べます。" },
            { eng: "To go", jpn: "持ち帰りで", exEng: "I need this to go.", exJpn: "これを持ち帰りにしたいです。" },
            { eng: "Have", jpn: "〜をいただく / 注文する", exEng: "I will have a salad.", exJpn: "サラダをいただきます。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Welcome! Are you ready to order?", jpn: "いらっしゃいませ！ご注文はお決まりですか？" },
            { speaker: "B", eng: "Yes. <span class='swappable'>I'll have <i class='grammar-target'>a</i> cheeseburger.</span>", jpn: "はい。チーズバーガーを1ついただきます。" },
            { speaker: "A", eng: "Would you like <i class='grammar-target'>a</i> meal?</span>", jpn: "セットになさいますか？" },
            { speaker: "B", eng: "Yes, please. With <i class='grammar-target'>a</i> medium fries and <i class='grammar-target'>a</i> cola.", jpn: "はい、お願いします。Mサイズのポテト1つと、コーラを1つで。" },
            { speaker: "A", eng: "Okay. For here or to go?", jpn: "かしこまりました。店内でお召し上がりですか、それともお持ち帰りですか？" },
            { speaker: "B", eng: "<span class='swappable'>To go, please.</span>", jpn: "持ち帰りでお願いします。" }
        ],
        dialogueStructure: [
            "Greet + Ask to order <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(挨拶 ＋ 注文を尋ねる)</span>",
            "> Agree + Order main item <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(承諾する ＋ メインの品を注文する)</span>",
            "Offer combo <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(セットを勧める)</span>",
            "> Agree + Order sides <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(承諾する ＋ サイドメニューを注文する)</span>",
            "Confirm + Ask location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(確認する ＋ 店内か持ち帰りか尋ねる)</span>",
            "> State location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(店内か持ち帰りかを述べる)</span>"
        ],
        expressions: [
            { 
                category: "1. Stating the main item (メインメニューを注文する)", 
                options: [
                    { eng: "I'll have a cheeseburger.", jpn: "チーズバーガーをいただきます。" }, 
                    { eng: "I'll get a hamburger.", jpn: "ハンバーガーにします。" }, 
                    { eng: "Can I have a hot dog?", jpn: "ホットドッグをもらえますか？" }
                ] 
            },
            { 
                category: "2. Stating dining preference (店内か持ち帰りか)", 
                options: [
                    { eng: "To go, please.", jpn: "持ち帰りでお願いします。" }, 
                    { eng: "For here, please.", jpn: "店内でお願いします。" }, 
                    { eng: "Takeout, please.", jpn: "テイクアウトでお願いします。" }
                ] 
            }
        ],
        grammar: {
            point: "Using 'a' for a single item - 1つのものを表す『a』",
            explanation: "When ordering a single item in English, we use <strong>a</strong> (or <strong>an</strong> before vowel sounds) before the noun. Even for drinks or food that are usually uncountable (like cola, coffee, or fries), in a restaurant setting, saying 'a cola' means 'one cup of cola', and 'a fries' means 'one portion of fries'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（英語で1つの数えられる品物を注文したり指し示したりするときは、名詞の前に「a」（母音の音で始まる単語の前では「an」）をつけます。通常、水やコーヒーなどの液体、またはポテトのように細かくて数えないものは「不可算名詞（数えられない名詞）」として扱われますが、レストランやカフェで注文する場面では例外的に「a」を使うことができます。この場合、「a cola」と言えば「コーラ1杯」、「a fries」と言えば「ポテト1人前」という具体的な注文の単位を表す便利な表現になります。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the customer uses 'a' to show they want exactly one of each item: '<u>a</u> cheeseburger', '<u>a</u> medium fries', and '<u>a</u> cola'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：客がそれぞれの品物をきっちり1つずつ欲しいことを示すために、どのように『a』を使っているかに注目してください：『<u>a</u> cheeseburger』『<u>a</u> medium fries』『<u>a</u> cola』。)</span>",
            examples: [
                { eng: "I'll have a coffee.", jpn: "コーヒーを1ついただきます。" },
                { eng: "She wants an apple pie.", jpn: "彼女はアップルパイを1つ欲しがっています。" },
                { eng: "Can I get a hamburger?", jpn: "ハンバーガーを1つもらえますか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "hamburger.", 
            target: "Can I get a hamburger?" 
        },
        grammarPractice: [
            { prompt: "apple pie" },
            { prompt: "large Coke" },
            { prompt: "glass of red wine" },
            { prompt: "iced coffee" }
        ],
        clickingGames: [
            { prompt: "チーズバーガーを1ついただきます。", target: "I'll have a cheeseburger.", words: ["I'll", "have", "a", "cheeseburger."] },
            { prompt: "Mサイズのポテト1つと", target: "With a medium fries", words: ["With", "a", "medium", "fries"] },
            { prompt: "そしてコーラを1つで。", target: "and a cola.", words: ["and", "a", "cola."] },
            { prompt: "サラダをお願いします。", target: "Can I get a salad?", words: ["Can", "I","salad?","a", "get"] },
            { prompt: "セットになさいますか？", target: "Would you like a meal?", words: ["Would", "you", "like", "a", "meal?"] }
        ],
        dropdownGames: [
            { before: "I'll have", options: ["a", "an", "the"], answer: "a", after: " hot dog, please." },
            { before: "Can I get", options: ["an", "a", "two"], answer: "an", after: " iced tea?" },
            { before: "Would you like", options: ["a", "an", "some"], answer: "a", after: " meal with that?" },
            { before: "I want", options: ["a", "an", "the"], answer: "a", after: " large fries." }
        ],
        roleplay: {
            a: "You are the cashier. Ask your partner if they are ready to order. Ask if they want it for here or to go. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたはレジ係です。パートナーに注文の準備ができているか尋ねてください。店内か持ち帰りか尋ねてください。)</span>",
            b: "You are the customer. Order 'a hamburger', 'a small fries', and 'a juice'. Tell the cashier it is to go. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたは客です。『ハンバーガー』『Sサイズのポテト』『ジュース』を注文してください。レジ係に持ち帰りだと伝えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Cashier", jpn: "レジ係 / 店員", exEng: "The cashier took my money.", exJpn: "レジ係が私のお金を受け取りました。" },
                { eng: "Customer", jpn: "客", exEng: "The customer is happy.", exJpn: "客は幸せです。" },
                { eng: "Menu", jpn: "メニュー", exEng: "Can I see the menu?", exJpn: "メニューを見てもいいですか？" },
                { eng: "Order", jpn: "注文する", exEng: "I want to order food.", exJpn: "食べ物を注文したいです。" },
                { eng: "Wait", jpn: "待つ", exEng: "Please wait here.", exJpn: "ここで待っていてください。" },
                { eng: "Total", jpn: "合計", exEng: "The total is ten dollars.", exJpn: "合計は10ドルです。" },
                { eng: "Pay", jpn: "支払う", exEng: "I will pay now.", exJpn: "今支払います。" },
                { eng: "Cash", jpn: "現金", exEng: "I have cash.", exJpn: "私は現金を持っています。" },
                { eng: "Credit card", jpn: "クレジットカード", exEng: "Can I use a credit card?", exJpn: "クレジットカードは使えますか？" },
                { eng: "Receipt", jpn: "レシート / 領収書", exEng: "Here is your receipt.", exJpn: "こちらがレシートです。" },
                { eng: "Napkin", jpn: "ナプキン / 紙ナプキン", exEng: "I need a napkin.", exJpn: "ナプキンが必要です。" },
                { eng: "Straw", jpn: "ストロー", exEng: "Please give me a straw.", exJpn: "ストローをください。" },
                { eng: "Ketchup", jpn: "ケチャップ", exEng: "I want ketchup with fries.", exJpn: "ポテトにケチャップが欲しいです。" },
                { eng: "Tray", jpn: "トレイ / お盆", exEng: "Put the food on the tray.", exJpn: "食べ物をトレイに置いてください。" }
            ],
            reading1: {
                title: "Task 2: Reading (At the Fast Food Restaurant)",
                instruction: "Read the conversation between a customer and a cashier.",
                eng: "Cashier:</strong> Hello! Can I take your order?<br>Customer:</strong> Yes. I'll have a chicken burger and a small salad.<br><strong>Cashier:</strong> Would you like a drink with that?<br><strong>Customer:</strong> Yes, I'll have an iced coffee, please.<br><strong>Cashier:</strong> That's a chicken burger, a small salad, and an iced coffee. Is that for here or to go?<br><strong>Customer:</strong> For here, please.<br><strong>Cashier:</strong> Your total is 800 yen. How would you like to pay?<br><strong>Customer:</strong> By credit card.",
                jpn: "<strong>店員：</strong> こんにちは！ご注文を伺ってもよろしいですか？<br><strong>客：</strong> はい。チキンバーガー1つと、Sサイズのサラダを1ついただきます。<br><strong>店員：</strong> ご一緒に飲み物はいかがですか？<br><strong>客：</strong> はい、アイスコーヒーを1つお願いします。<br><strong>店員：</strong> チキンバーガーが1つ、Sサイズのサラダが1つ、アイスコーヒーが1つですね。店内でお召し上がりですか、それともお持ち帰りですか？<br><strong>客：</strong> 店内でお願いします。<br><strong>店員：</strong> 合計で800円になります。お支払いはどのようになさいますか？<br><strong>客：</strong> クレジットカードで。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hi there. What would you like today?", jpn: "こんにちは。今日は何になさいますか？" },
                { speaker: "B", eng: "Hi. I'll have a double cheeseburger.", jpn: "こんにちは。ダブルチーズバーガーを1ついただきます。" },
                { speaker: "A", eng: "Okay. Do you want to make it a combo?", jpn: "かしこまりました。コンボ（セット）になさいますか？" },
                { speaker: "B", eng: "What comes with the combo?", jpn: "コンボには何がついてきますか？" },
                { speaker: "A", eng: "It comes with a medium fries and a drink.", jpn: "Mサイズのポテトと飲み物がついてきます。" }
            ],
            writingTask: {
                promptEng: "Imagine you are ordering fast food. Write three sentences using 'I'll have a...' or 'Can I get a...'. Make sure to use 'a' or 'an' before your single items.",
                promptJpn: "ファストフードを注文していると想像してください。『I'll have a...』または『Can I get a...』を使って、3つの文を書いてください。1つの品物の前には必ず『a』か『an』を使用してください。"
            }
        }
    },{
        id: 4,
        title: "Lesson 4: How to talk about things specifically",
        goal: "Refer to specific things that both the speaker and listener know about using the definite article 'the', and compare it to 'a/an'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(定冠詞の『the』を使って、話し手と聞き手の両方が知っている特定のものについて話し、『a/an』と比較する。)</span>",
        vocab: [
            { eng: "The", jpn: "その（特定のものを指す）", exEng: "Pass me the pen.", exJpn: "そのペンを渡してください。" },
            { eng: "Thing", jpn: "もの", exEng: "Can you pass me that black thing?", exJpn: "あの黒いもの、渡してもらえますか？" },
            { eng: "Look for", jpn: "〜を探す", exEng: "I am looking for my bag.", exJpn: "私は自分のカバンを探しています。" },
            { eng: "Need", jpn: "必要とする", exEng: "I need a new chair.", exJpn: "新しい椅子が必要です。" },
            { eng: "Exactly", jpn: "まさに / ぴったり", exEng: "That is exactly right.", exJpn: "それはまさにその通りです。" },
            { eng: "Pass", jpn: "渡す", exEng: "Can you pass the salt?", exJpn: "塩を渡してくれますか？" },
            { eng: "Bring", jpn: "持ってくる", exEng: "Bring your book here.", exJpn: "本をここに持ってきてください。" },
            { eng: "Give", jpn: "あげる / 与える", exEng: "Give me the key.", exJpn: "その鍵を私にください。" },
            { eng: "Table", jpn: "テーブル", exEng: "The book is on the table.", exJpn: "本はテーブルの上にあります。" },
            { eng: "Chair", jpn: "椅子", exEng: "Please sit on the chair.", exJpn: "椅子に座ってください。" },
            { eng: "Desk", jpn: "机", exEng: "I work at my desk.", exJpn: "私は机で仕事をします。" },
            { eng: "Shelf", jpn: "棚", exEng: "Put it on the shelf.", exJpn: "それを棚に置いてください。" },
            { eng: "Left", jpn: "左", exEng: "Turn left here.", exJpn: "ここで左に曲がってください。" },
            { eng: "Right", jpn: "右", exEng: "The door is on the right.", exJpn: "ドアは右側にあります。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me. <span class='swappable'>I am looking for <i class='grammar-target'>a</i> pen.</span>", jpn: "すみません。ペンを探しています。" },
            { speaker: "B", eng: "Well, there is <i class='grammar-target'>a</i> pen on the table and <i class='grammar-target'>a</i> pen on the chair.", jpn: "ええと、テーブルの上にペンがあり、椅子の上にもペンがあります。" },
            { speaker: "A", eng: "<span class='swappable'>Can you pass me <i class='grammar-target'>the</i> pen on the table?</span>", jpn: "テーブルの上のそのペンを渡してくれますか？" },
            { speaker: "B", eng: "Sure. Here is <i class='grammar-target'>the</i> pen.", jpn: "もちろんです。はい、そのペンです。" },
            { speaker: "A", eng: "Thank you.", jpn: "ありがとう。" }
        ],
        dialogueStructure: [
            "Get attention + State general need <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(声をかける ＋ 一般的に必要なものを伝える)</span>",
            "> Introduce option 1 + Introduce option 2 <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(選択肢1を提示する ＋ 選択肢2を提示する)</span>",
            "Request specific item <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(特定のアイテムをお願いする)</span>",
            "> Agree + Hand over item <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(承諾する ＋ アイテムを渡す)</span>",
            "Say thank you <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(お礼を言う)</span>"
        ],
        expressions: [
            { 
                category: "1. Stating a general need (一般的なものを探していると伝える)", 
                options: [
                    { eng: "I am looking for a pen.", jpn: "私はペンを探しています。" }, 
                    { eng: "I need a chair.", jpn: "私は椅子が必要です。" }, 
                    { eng: "I am looking for a book.", jpn: "私は本を探しています。" }
                ] 
            },
            { 
                category: "2. Requesting the specific item (特定のものをお願いする)", 
                options: [
                    { eng: "Can you pass me the pen on the table?", jpn: "テーブルの上のそのペンを渡してくれますか？" }, 
                    { eng: "Can you bring me the chair on the left?", jpn: "左側のその椅子を持ってきてくれますか？" }, 
                    { eng: "Can you give me the book on the desk?", jpn: "机の上のその本をくれますか？" }
                ] 
            }
        ],
        grammar: {
            point: "Comparing 'A/An' and 'The' - 『a/an』と『the』の比較",
            explanation: "We use <strong>a</strong> or <strong>an</strong> for general things or when we mention something for the first time. We use <strong>the</strong> for specific things, unique items, or mutually understood locations. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（『a / an』と『the』は、英語で名詞の前に置く非常に重要な言葉（冠詞）です。「a / an」は「世の中にたくさんある中の、どれでもいい1つ」や、「初めて話題に出るもの」について話す時に使います。一方で「the」は、「聞き手と話し手の両方が『どのことか』を特定できるもの」に使います。例えば、「I need <strong>a</strong> pen.（ペンが1本必要です）」はどのペンでも構いませんが、「Pass me <strong>the</strong> pen on the table.（テーブルの上の<strong>その</strong>ペンを取って）」は、お互いに見えている特定のペンを指します。また、太陽や月など「この世に1つしかないもの（the sun, the moon）」や、お互いに知っている場所（the station）にも「the」を使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how A asks for '<u>a</u> pen' (general), and B says 'there is <u>a</u> pen' (introducing it for the first time). But when A points out exactly which one they want, they switch to '<u>the</u> pen on the table' (specific). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：Aが『<u>a</u> pen（一般的なペン）』を求め、Bが『there is <u>a</u> pen（初めて言及する）』と言っていることに注目してください。しかし、Aがどれが欲しいかを正確に指し示すと、『<u>the</u> pen on the table（特定のペン）』に切り替わります。)</span>",
            examples: [
                { eng: "The sky is very clear today.", jpn: "今日は空がとても澄んでいます。（※唯一無二）" },
                { eng: "I will wait for you at the station.", jpn: "駅であなたを待っています。（※共通認識のある場所）" },
                { eng: "I bought an apple. The apple was delicious.", jpn: "私はリンゴを買いました。そのリンゴは美味しかったです。（※初めて言及するa/anと、特定のthe）" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "Buy (car) / (car) is red", 
            target: "I bought a car. The car is red." 
        },
        grammarPractice: [
            { prompt: "Read (book) / (book) is interesting" },
            { prompt: "Have (dog) / (dog) is cute" },
            { prompt: "Eat (apple) / (apple) is delicious" },
            { prompt: "See (movie) / (movie) is funny" },
            { prompt: "Meet (teacher) / (teacher) is kind" }
        ],
        clickingGames: [
            { prompt: "ペンを探しています。", target: "I am looking for a pen.", words: ["I", "am", "looking", "for", "a", "pen."] },
            { prompt: "テーブルの上にペンがあります。", target: "There is a pen on the table.", words: ["There", "is", "a", "pen", "on", "the", "table."] },
            { prompt: "テーブルの上のそのペンを渡してくれますか？", target: "Can you pass me the pen on the table?", words: ["Can", "you", "pass", "me", "the", "pen", "on", "the", "table?"] },
            { prompt: "もちろんです。はい、そのペンです。", target: "Sure. Here is the pen.", words: ["Sure.", "Here", "is", "the", "pen."] },
            { prompt: "はいどうぞ。", target: "Here you are.", words: ["Here", "you", "are."] }
        ],
        dropdownGames: [
            { before: "I don't have a pen. Do you have", options: ["a", "the", "an"], answer: "a", after: " pen I can borrow?" },
            { before: "Where is", options: ["the", "a", "an"], answer: "the", after: " pen that I gave you yesterday?" },
            { before: "It is too hot in this room. Can you open", options: ["the", "a", "an"], answer: "the", after: " window?" },
            { before: "Look at", options: ["the", "a", "an"], answer: "the", after: " moon! It is so bright tonight." },
            { before: "I want to buy", options: ["a", "the", "an"], answer: "a", after: " new car, but I don't know which one to get." }
        ],
        roleplay: {
            a: "Tell your partner you are looking for a general item (e.g., 'I am looking for a book'). When they give you options, ask them to pass you a specific one using 'the'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに一般的なアイテムを探していると伝えてください。選択肢を提示されたら、『the』を使って特定のもの（例：「机の上のその本」）を渡すよう頼んでください。)</span>",
            b: "Give your partner two options using 'a' (e.g., 'There is a book on the desk and a book on the shelf'). Then give them the item they ask for. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(『a』を使ってパートナーに2つの選択肢を提示してください。その後、頼まれたアイテムを渡してください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Sun", jpn: "太陽", exEng: "The sun is hot.", exJpn: "太陽は熱いです。" },
                { eng: "Moon", jpn: "月", exEng: "Look at the moon.", exJpn: "月を見てください。" },
                { eng: "Sky", jpn: "空", exEng: "The sky is blue.", exJpn: "空は青いです。" },
                { eng: "Earth", jpn: "地球", exEng: "We live on the earth.", exJpn: "私たちは地球に住んでいます。" },
                { eng: "World", jpn: "世界", exEng: "He travels the world.", exJpn: "彼は世界中を旅します。" },
                { eng: "Internet", jpn: "インターネット", exEng: "I use the internet.", exJpn: "私はインターネットを使います。" },
                { eng: "Front", jpn: "前", exEng: "Meet me at the front.", exJpn: "前で会いましょう。" },
                { eng: "Back", jpn: "後ろ", exEng: "Go to the back.", exJpn: "後ろに行ってください。" },
                { eng: "Top", jpn: "上 / 頂上", exEng: "It is on the top shelf.", exJpn: "それは一番上の棚にあります。" },
                { eng: "Bottom", jpn: "下 / 底", exEng: "Look at the bottom.", exJpn: "底を見てください。" },
                { eng: "Middle", jpn: "真ん中", exEng: "Sit in the middle.", exJpn: "真ん中に座ってください。" },
                { eng: "First", jpn: "最初の", exEng: "He is the first student.", exJpn: "彼が最初の生徒です。" },
                { eng: "Second", jpn: "2番目の", exEng: "Take the second door.", exJpn: "2番目のドアを入ってください。" },
                { eng: "Same", jpn: "同じ", exEng: "We have the same bag.", exJpn: "私たちは同じカバンを持っています。" }
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
                { speaker: "A", eng: "Okay, I will go to the cafe in the park. How do I get there?", jpn: "わかりました、公園の中のカフェに行きます。どうやって行けばいいですか？" }
            ],
            writingTask: {
                promptEng: "Write three sentences about things in your room using 'a/an' for new things and 'the' for specific things. (Example: I have a desk and a bed. The desk is brown.)",
                promptJpn: "あなたの部屋にあるものについて、新しい話題には『a/an』を、特定のものには『the』を使って3つの文を書いてください。（例：私には机とベッドがあります。その机は茶色です。）"
            }
        }
    },
    {
        id: 5,
        title: "Lesson 5: How to ask the price of something",
        goal: "Ask how much an item costs and complete a simple transaction in a store. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(商品の値段を尋ね、お店で簡単な買い物を完了させる。)</span>",
        vocab: [
            { eng: "Clothes", jpn: "服", exEng: "I need new clothes.", exJpn: "私は新しい服が必要です。" },
            { eng: "Shoes", jpn: "靴", exEng: "These shoes are black.", exJpn: "これらの靴は黒です。" },
            { eng: "Hat", jpn: "帽子", exEng: "He wears a hat.", exJpn: "彼は帽子をかぶっています。" },
            { eng: "Socks", jpn: "靴下", exEng: "I bought white socks.", exJpn: "私は白い靴下を買いました。" },
            { eng: "Gloves", jpn: "手袋", exEng: "My gloves are warm.", exJpn: "私の手袋は暖かいです。" },
            { eng: "Glasses", jpn: "眼鏡", exEng: "She needs glasses to read.", exJpn: "彼女は本を読むのに眼鏡が必要です。" },
            { eng: "Umbrella", jpn: "傘", exEng: "Don't forget your umbrella.", exJpn: "傘を忘れないでください。" },
            { eng: "Ring", jpn: "指輪", exEng: "That is a beautiful ring.", exJpn: "それは美しい指輪ですね。" },
            { eng: "Watch", jpn: "腕時計", exEng: "My watch is broken.", exJpn: "私の腕時計は壊れています。" },
            { eng: "Wallet", jpn: "財布", exEng: "I left my wallet at home.", exJpn: "家に財布を忘れました。" },
            { eng: "Coat", jpn: "コート", exEng: "Put on your coat.", exJpn: "コートを着てください。" },
            { eng: "Suit", jpn: "スーツ", exEng: "He wears a suit to work.", exJpn: "彼は仕事にスーツを着ていきます。" },
            { eng: "Dress", jpn: "ドレス", exEng: "She bought a red dress.", exJpn: "彼女は赤いドレスを買いました。" },
            { eng: "Skirt", jpn: "スカート", exEng: "This skirt is long.", exJpn: "このスカートは長いです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me. <span class='swappable'>How much is <i class='grammar-target'>this</i> jacket?</span>", jpn: "すみません。このジャケットはいくらですか？" },
            { speaker: "B", eng: "<i class='grammar-target'>That</i> jacket is fifty dollars.", jpn: "そのジャケットは50ドルです。" },
            { speaker: "A", eng: "It is a little expensive, but I love the color. <span class='swappable'>I will buy it.</span>", jpn: "少し高いですが、色が気に入りました。買います。" },
            { speaker: "B", eng: "Great. How would you like to pay?", jpn: "ありがとうございます。お支払い方法はどうなさいますか？" },
            { speaker: "A", eng: "Can I pay by card?", jpn: "カードで支払えますか？" }
        ],
        dialogueStructure: [
            "Get attention + Ask price (this/these) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(声をかける ＋ 値段を尋ねる)</span>",
            "> State price (that/those) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(値段を答える)</span>",
            "Comment on item + State decision <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(商品へのコメント ＋ 購入の意思を伝える)</span>",
            "> Confirm + Ask payment method <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(確認する ＋ 支払い方法を尋ねる)</span>",
            "State payment method <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(支払い方法を伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking the price (値段の尋ね方)", 
                options: [
                    { eng: "How much is this jacket?", jpn: "このジャケットはいくらですか？" }, 
                    { eng: "What does this cost?", jpn: "これはいくらしますか？" }, 
                    { eng: "What's the price of this?", jpn: "これの価格は何ですか？" }
                ] 
            },
            { 
                category: "2. Saying you will buy it (購入の意思の伝え方)", 
                options: [
                    { eng: "I will buy it.", jpn: "買います。" }, 
                    { eng: "I'll take it.", jpn: "これにします（これを買います）。" }, 
                    { eng: "I'll get it.", jpn: "これを買います。" }
                ] 
            }
        ],
        grammar: {
            point: "Demonstratives (This / That / These / Those) - 指示代名詞",
            explanation: "Demonstratives point to specific things. They change based on distance (near or far) and number (singular or plural). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（指示代名詞（これ、あれ、これら、あれら）は、特定の物や人を指し示すために使います。話し手からの「距離」と「数（単数か複数か）」によって形が変わります。自分の手が届くくらい「近い・単数」のものは <strong>This</strong>（これ）、「近い・複数」のものは <strong>These</strong>（これら）を使います。反対に、少し離れていて指をさすような「遠い・単数」のものは <strong>That</strong>（あれ/それ）、「遠い・複数」のものは <strong>Those</strong>（あれら/それら）を使います。買い物をする時や、特定のものについて質問する時に非常に便利な言葉です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the demonstratives in the phrases: 'How much is <u>this</u> jacket?' and '<u>That</u> jacket is fifty dollars.' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『How much is <u>this</u> jacket?』などのフレーズの中の指示代名詞に注目してください。)</span>",
            examples: [
                { eng: "This apple is delicious.", jpn: "このリンゴは美味しいです。（持っている場合）" },
                { eng: "That car is very fast.", jpn: "あの車はとても速いです。（遠くを見ている場合）" },
                { eng: "Are these shoes on sale?", jpn: "これらの靴はセール中ですか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "book / interesting (Near, Singular)", 
            target: "This book is interesting." 
        },
        grammarPractice: [
            { prompt: "shoes / expensive (Far, Plural)" },
            { prompt: "apples / fresh (Near, Plural)" },
            { prompt: "car / fast (Far, Singular)" },
            { prompt: "jacket / cheap (Near, Singular)" },
            { prompt: "glasses / cool (Far, Plural)" }
        ],
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
            { before: "I want to buy", options: ["this", "that", "those"], answer: "those", after: " shoes over there." }
        ],
        roleplay: {
            a: "You are shopping for a new pair of shoes. You find a pair you like but there is no price tag. Ask the shop assistant for the price and decide if you want to buy them based on the cost. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(靴を買いに来ました。値札がないので店員に値段を尋ね、買うか決めてください。)</span>",
            b: "You are a shop assistant. Greet the customer, tell them the price (make up a number), and ask how they want to pay. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(店員役です。客に挨拶し、適当な値段を伝えて支払い方法を尋ねてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Pants", jpn: "ズボン", exEng: "I need new pants.", exJpn: "私は新しいズボンが必要です。" },
                { eng: "Shirt", jpn: "シャツ", exEng: "This shirt is blue.", exJpn: "このシャツは青いです。" },
                { eng: "T-shirt", jpn: "Tシャツ", exEng: "He wears a t-shirt in summer.", exJpn: "彼は夏にTシャツを着ます。" },
                { eng: "Sweater", jpn: "セーター", exEng: "It is cold, wear a sweater.", exJpn: "寒いのでセーターを着てください。" },
                { eng: "Jacket", jpn: "ジャケット", exEng: "I like that black jacket.", exJpn: "私はあの黒いジャケットが好きです。" },
                { eng: "Bag", jpn: "鞄", exEng: "My bag is heavy.", exJpn: "私のカバンは重いです。" },
                { eng: "Uniform", jpn: "制服", exEng: "Students wear a uniform.", exJpn: "生徒たちは制服を着ます。" },
                { eng: "Underwear", jpn: "下着", exEng: "I bought new underwear.", exJpn: "私は新しい下着を買いました。" },
                { eng: "Swimsuit", jpn: "水着", exEng: "Bring your swimsuit to the beach.", exJpn: "ビーチに水着を持っていってください。" },
                { eng: "Scarf", jpn: "マフラー", exEng: "She is wearing a red scarf.", exJpn: "彼女は赤いマフラーを巻いています。" },
                { eng: "Boots", jpn: "ブーツ", exEng: "I need warm boots for winter.", exJpn: "冬用の暖かいブーツが必要です。" },
                { eng: "Sneakers", jpn: "スニーカー", exEng: "I run in my sneakers.", exJpn: "私はスニーカーで走ります。" },
                { eng: "Necklace", jpn: "ネックレス", exEng: "That is a pretty necklace.", exJpn: "それはきれいなネックレスですね。" },
                { eng: "Earrings", jpn: "イヤリング", exEng: "She lost her earrings.", exJpn: "彼女はイヤリングをなくしました。" }
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
                { speaker: "A", eng: "Oh, they are nice. What colors do you have?", jpn: "ああ、素敵ですね。何色がありますか？" }
            ],
            writingTask: {
                promptEng: "Imagine you are in a store. Write a short dialogue between you and a shop assistant about buying an item. Include the item, price, and how you will pay.",
                promptJpn: "お店にいると想像してください。あなたと店員との間の、買い物に関する短い会話を書いてください。買いたいもの、値段、支払い方法を含めてください。"
            }
        }
    },
    {
        id: 6,
        title: "Lesson 6: How to talk about your friends",
        goal: "Describe your friends and their habits using multiple verbs in the present simple tense (affirmative and negative). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(肯定形と否定形の現在形（複数の動詞）を使って、友達とその習慣について詳しく説明する。)</span>",
        vocab: [
            { eng: "Tell", jpn: "教える / 話す", exEng: "Tell me about your job.", exJpn: "あなたの仕事について教えてください。" },
            { eng: "About", jpn: "〜について", exEng: "I am reading about Japan.", exJpn: "私は日本について読んでいます。" },
            { eng: "Live", jpn: "住んでいる", exEng: "Where do you live?", exJpn: "どこに住んでいますか？" },
            { eng: "Work", jpn: "働く", exEng: "I work every day.", exJpn: "私は毎日働きます。" },
            { eng: "Company", jpn: "会社", exEng: "It is a big company.", exJpn: "それは大きな会社です。" },
            { eng: "Like", jpn: "好む / 好き", exEng: "I like sports.", exJpn: "私はスポーツが好きです。" },
            { eng: "Have", jpn: "持っている / いる", exEng: "I have two dogs.", exJpn: "私は犬を2匹飼っています。" },
            { eng: "Brother", jpn: "兄 / 弟", exEng: "My brother is tall.", exJpn: "私の兄は背が高いです。" },
            { eng: "Pizza", jpn: "ピザ", exEng: "I want to eat pizza.", exJpn: "私はピザが食べたいです。" },
            { eng: "Homework", jpn: "宿題", exEng: "I have a lot of homework.", exJpn: "私はたくさん宿題があります。" },
            { eng: "Sport", jpn: "スポーツ", exEng: "Do you play any sports?", exJpn: "何かスポーツはしますか？" },
            { eng: "More", jpn: "もっと / さらに", exEng: "Tell me more.", exJpn: "もっと教えてください。" },
            { eng: "Don't", jpn: "〜しない（I, You, We, They用）", exEng: "I don't like coffee.", exJpn: "私はコーヒーが好きではありません。" },
            { eng: "Doesn't", jpn: "〜しない（He, She, It用）", exEng: "He doesn't eat meat.", exJpn: "彼は肉を食べません。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Tell me about Sam.", jpn: "サムについて教えてください。" },
            { speaker: "B", eng: "OK. Well, <i class='grammar-target'>he lives</i> in Tokyo, and <i class='grammar-target'>he works</i> at ABC company.", jpn: "わかりました。ええと、彼は東京に住んでいて、ABC会社で働いています。" },
            { speaker: "A", eng: "<span class='swappable'>That's cool.</span> Tell me more.", jpn: "それはいいですね。もっと教えてください。" },
            { speaker: "B", eng: "<i class='grammar-target'>He likes</i> pizza</span>, and <i class='grammar-target'>he has</i> a little brother.", jpn: "彼はピザが好きで、弟がいます。" },
            { speaker: "A", eng: "What about the things he dislikes?", jpn: "彼の嫌いなものは何ですか？" },
            { speaker: "B", eng: "<span class='swappable'><i class='grammar-target'>He doesn't like</i> homework</span>, and <i class='grammar-target'>he doesn't like</i> sports.", jpn: "彼は宿題が好きではありません。そして、スポーツも好きではありません。" }
        ],
        dialogueStructure: [
            "Ask about someone <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(誰かについて尋ねる)</span>",
            "> Agree + State 2 positive facts (live/work) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(承諾する ＋ 肯定的な事実を2つ述べる)</span>",
            "React + Ask for more <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ さらに情報を求める)</span>",
            "> State 2 positive facts (like/have) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(肯定的な事実をさらに2つ述べる)</span>",
            "Ask about dislikes <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(嫌いなものについて尋ねる)</span>",
            "> State 2 negative facts (doesn't like) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(否定的な事実を2つ述べる)</span>"
        ],
        expressions: [
            { 
                category: "1. Showing that you are listening (相手の話を真剣に聞いていることを示す)", 
                options: [
                    { eng: "I see", jpn: "なるほど" }, 
                    { eng: "OK Cool", jpn: "いいね" }, 
                    { eng: "Hm mh.", jpn: "うん" }
                ] 
            },
            { 
                category: "2. Saying you don't like something (～が嫌いだ」と言うこと)", 
                options: [
                    { eng: "He dislikes dogs.", jpn: "彼は犬が嫌いだ。" }, 
                    { eng: "He hates homework.", jpn: "彼は宿題が大嫌いだ。" }, 
                    { eng: "He can't stand bugs.", jpn: "彼は虫が大の苦手だ。" }
                ] 
            }
        ],
        grammar: {
            point: "Present Simple (Positive & Negative) for Habits - 習慣を表す現在形の肯定文と否定文",
            explanation: "When we talk about someone's daily life, habits, or facts, we use the present simple tense. Remember to add an <strong>-s</strong> (or <strong>-es</strong>) to the verb for <em>he, she, and it</em>.<br>To make a negative sentence, we use <strong>doesn't</strong> (does not) for <em>he, she, it</em>, and <strong>don't</strong> (do not) for <em>I, you, we, they</em>. After doesn't/don't, the verb returns to its base form (no '-s'). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（誰かの日常生活、習慣、または事実について話すときは現在形（Present Simple）を使います。主語が「彼（he）」「彼女（she）」「それ（it）」といった三人称単数の場合は、動詞の最後に <strong>-s</strong>（または <strong>-es</strong>）を付けるという重要なルールがあります（例：live → live<strong>s</strong>）。<br>「〜しない」という否定文を作る場合、he, she, it には <strong>doesn't</strong>（does not）を、I, you, we, they には <strong>don't</strong>（do not）を使います。doesn't や don't を使った後、メインの動詞は「元の形（原形）」に戻り、-s は消えることに注意してください。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the 's' added to the verbs when talking about Sam: 'live<u>s</u>', 'work<u>s</u>', 'like<u>s</u>', and 'ha<u>s</u>'. Also notice that in the negative form, the 's' is removed from the main verb: 'he <u>doesn't like</u>'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：サムについて話すときに動詞に「s」が追加されていることに注目してください：『live<u>s</u>』『work<u>s</u>』『like<u>s</u>』『ha<u>s</u>』。また、否定形ではメインの動詞から「s」が消えることにも注目してください：『he <u>doesn't like</u>』。)</span>",
            examples: [
                { eng: "My friend speaks English.", jpn: "私の友達は英語を話します。" },
                { eng: "She doesn't eat spicy food.", jpn: "彼女は辛い食べ物を食べません。" },
                { eng: "They don't work on weekends.", jpn: "彼らは週末には働きません。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "Sam / live in Tokyo (+)", 
            target: "He lives in Tokyo." 
        },
        grammarPractice: [
            { prompt: "Sarah / work at a hospital (+)" },
            { prompt: "My brother / eat meat (-)" },
            { prompt: "They / play tennis on weekends (+)" },
            { prompt: "I / drink coffee (-)" },
            { prompt: "My sister / have a dog (+)" }
        ],
        clickingGames: [
            { prompt: "サムについて教えてください。", target: "Tell me about Sam.", words: ["Tell", "me", "about", "Sam."] },
            { prompt: "彼は東京に住んでいます。", target: "He lives in Tokyo.", words: ["He", "lives", "in", "Tokyo."] },
            { prompt: "彼はABC会社で働いています。", target: "He works at ABC company.", words: ["He", "works", "at", "ABC", "company."] },
            { prompt: "彼はピザが好きで、弟がいます。", target: "He likes pizza, and he has a little brother.", words: ["He", "likes", "pizza,", "and", "he", "has", "a", "little", "brother."] },
            { prompt: "彼は宿題が好きではありません。", target: "He doesn't like homework.", words: ["He", "doesn't", "like", "homework."] }
        ],
        dropdownGames: [
            { before: "My best friend", options: ["live", "lives", "living"], answer: "lives", after: " in a big house." },
            { before: "She", options: ["work", "works", "working"], answer: "works", after: " at a hospital." },
            { before: "Sam", options: ["has", "have", "having"], answer: "has", after: " a cute dog." },
            { before: "My sister", options: ["doesn't", "don't", "isn't"], answer: "doesn't", after: " drink coffee." },
            { before: "We", options: ["don't", "doesn't", "aren't"], answer: "don't", after: " play sports on Sunday." }
        ],
        roleplay: {
            a: "Ask your partner to tell you about their friend (e.g., 'Tell me about...'). Ask them for more information later. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに友達について教えてもらうよう頼んでください。後でさらに情報を求めてください。)</span>",
            b: "Talk about your friend. Give three positive facts (e.g., lives, works, likes) and two negative facts (e.g., doesn't like). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(友達について話してください。肯定的な事実を3つ（住んでいる、働いている、好きなど）、否定的な事実を2つ（好きではないなど）挙げてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Sister", jpn: "姉 / 妹", exEng: "She is my sister.", exJpn: "彼女は私の姉（妹）です。" },
                { eng: "Parents", jpn: "両親", exEng: "My parents live here.", exJpn: "私の両親はここに住んでいます。" },
                { eng: "Meet", jpn: "会う", exEng: "Let's meet tomorrow.", exJpn: "明日会いましょう。" },
                { eng: "Play", jpn: "する / 遊ぶ", exEng: "They play baseball.", exJpn: "彼らは野球をします。" },
                { eng: "Watch", jpn: "見る", exEng: "I watch TV every day.", exJpn: "私は毎日テレビを見ます。" },
                { eng: "Read", jpn: "読む", exEng: "She reads books.", exJpn: "彼女は本を読みます。" },
                { eng: "Cook", jpn: "料理する", exEng: "He cooks dinner.", exJpn: "彼は夕食を作ります。" },
                { eng: "Listen", jpn: "聞く", exEng: "Listen to me.", exJpn: "私の話を聞いてください。" },
                { eng: "Music", jpn: "音楽", exEng: "I like this music.", exJpn: "私はこの音楽が好きです。" },
                { eng: "Movie", jpn: "映画", exEng: "That is a good movie.", exJpn: "あれは良い映画です。" },
                { eng: "Book", jpn: "本", exEng: "This book is interesting.", exJpn: "この本は面白いです。" },
                { eng: "Food", jpn: "食べ物", exEng: "I love Italian food.", exJpn: "私はイタリアの食べ物が大好きです。" },
                { eng: "Together", jpn: "一緒に", exEng: "Let's go together.", exJpn: "一緒に行きましょう。" },
                { eng: "Often", jpn: "よく / しばしば", exEng: "I often go there.", exJpn: "私はよくそこに行きます。" }
            ],
            reading1: {
                title: "Task 2: Reading (My Best Friend)",
                instruction: "Read the paragraph about a person describing their best friend.",
                eng: "<strong>My Best Friend, Sarah</strong><br><br>My best friend is Sarah. We are very different, but we are great friends. Sarah is very smart, and she works at a big hospital. She lives in Osaka. She loves reading and she always buys new books. She also likes Italian food. However, she has some things she dislikes. She doesn't like sports, and she doesn't watch TV. I like sports, but we always have fun when we meet. I trust her a lot.",
                jpn: "<strong>私の親友、サラ</strong><br><br>私の親友はサラです。私たちはとても違いますが、素晴らしい友達です。サラはとても賢く、大きな病院で働いています。彼女は大阪に住んでいます。彼女は読書が大好きで、いつも新しい本を買います。彼女はイタリア料理も好きです。しかし、彼女には嫌いなものもあります。彼女はスポーツが好きではなく、テレビも見ません。私はスポーツが好きですが、私たちが会うときはいつも楽しいです。私は彼女をとても信頼しています。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Tell me about your friend, David.", jpn: "あなたの友達のデビッドについて教えてください。" },
                { speaker: "B", eng: "Well, he lives near the campus, and he studies history.", jpn: "ええと、彼はキャンパスの近くに住んでいて、歴史を勉強しています。" },
                { speaker: "A", eng: "That's interesting. What does he do in his free time?", jpn: "それは興味深いですね。彼は暇なとき何をしているのですか？" },
                { speaker: "B", eng: "He plays video games, and he listens to a lot of music.", jpn: "彼はビデオゲームをして、たくさんの音楽を聞いています。" },
                { speaker: "A", eng: "Does he play any sports?", jpn: "彼は何かスポーツをしますか？" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about a friend or family member. Use the present simple tense. Write three positive facts (e.g., He lives in Tokyo) and two negative facts (e.g., She doesn't like sports).",
                promptJpn: "友人や家族について短い文章を書いてください。現在形を使用してください。肯定的な事実を3つ、否定的な事実を2つ書いてください。"
            }
        }
    },{
        id: 7,
        title: "Lesson 7: How to ask basic questions",
        goal: "Ask Yes/No and Wh- questions about an event using the 'be' verb, auxiliary verbs, and Wh- question words. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(be動詞、助動詞、Wh疑問詞を使って、イベントに関するYes/No疑問文とWh疑問文を作る。)</span>",
        vocab: [
            { eng: "What", jpn: "何", exEng: "What is this?", exJpn: "これは何ですか？" },
            { eng: "Where", jpn: "どこ", exEng: "Where do you live?", exJpn: "どこに住んでいますか？" },
            { eng: "When", jpn: "いつ", exEng: "When is the meeting?", exJpn: "会議はいつですか？" },
            { eng: "Who", jpn: "誰", exEng: "Who is that man?", exJpn: "あの男性は誰ですか？" },
            { eng: "How", jpn: "どのように / どうやって", exEng: "How do you go to work?", exJpn: "どうやって仕事に行きますか？" },
            { eng: "Do / Does", jpn: "〜しますか？（一般動詞の疑問詞）", exEng: "Do you like pizza?", exJpn: "ピザは好きですか？" },
            { eng: "Am / Is / Are", jpn: "〜ですか？（be動詞の疑問詞）", exEng: "Are you a student?", exJpn: "あなたは学生ですか？" },
            { eng: "Party", jpn: "パーティー", exEng: "I will go to a party.", exJpn: "私はパーティーに行きます。" },
            { eng: "Weekend", jpn: "週末", exEng: "Have a good weekend.", exJpn: "良い週末を。" },
            { eng: "Free", jpn: "暇な / 時間がある", exEng: "I am free today.", exJpn: "今日は時間があります。" },
            { eng: "Bring", jpn: "持ってくる", exEng: "Please bring a notebook.", exJpn: "ノートを持ってきてください。" },
            { eng: "Start", jpn: "始まる", exEng: "The movie starts now.", exJpn: "映画が今始まります。" },
            { eng: "Awesome", jpn: "最高の / 素晴らしい", exEng: "That is awesome!", exJpn: "それは素晴らしいですね！" },
            { eng: "Park", jpn: "公園", exEng: "Let's walk in the park.", exJpn: "公園を散歩しましょう。" }
        ],
        dialogue: [
            { speaker: "A", eng: "I am planning a barbecue. <span class='swappable'><i class='grammar-target'>Are</i> you free this weekend?</span>", jpn: "バーベキューを計画しています。今週末は暇ですか？" },
            { speaker: "B", eng: "Yes, I am. <i class='grammar-target'>Where</i> is the party?</span>", jpn: "はい、暇です。パーティーはどこでありますか？" },
            { speaker: "A", eng: "It is at the big park near the station.", jpn: "駅の近くの大きな公園であります。" },
            { speaker: "B", eng: "That sounds fun. <i class='grammar-target'>When</i> is it?</span>", jpn: "楽しそうですね。それはいつですか？" },
            { speaker: "A", eng: "It starts on Saturday at noon.", jpn: "土曜日の正午に始まります。" },
            { speaker: "B", eng: "Awesome. Who</i>'s going?", jpn: "最高ですね。誰が行くのですか？" },
            { speaker: "A", eng: "All our friends from the office.", jpn: "オフィスの友達はみんな行きます。" },
            { speaker: "B", eng: "Perfect. <span class='swappable'><i class='grammar-target'>What</i> should I bring?</span>", jpn: "完璧です。私は何を持っていくべきですか？" },
            { speaker: "A", eng: "Just bring some snacks.", jpn: "おやつを少し持ってきてください。" }
        ],
        dialogueStructure: [
            "State plan + Ask availability <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(予定を伝える ＋ 予定が空いているか尋ねる)</span>",
            "> Agree + Ask location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(承諾する ＋ 場所を尋ねる)</span>",
            "State location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(場所を伝える)</span>",
            "> React + Ask time <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 時間を尋ねる)</span>",
            "State time <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(時間を伝える)</span>",
            "> React + Ask attendees <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 参加者を尋ねる)</span>",
            "State attendees <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(参加者を伝える)</span>",
            "> React + Ask what to bring <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 持ち物を尋ねる)</span>",
"Say what to bring to the party <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(パーティーに何を持っていけばいいか教える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about availability (予定を尋ねる 'Be' 疑問文)", 
                options: [
                    { eng: "Are you free this weekend?", jpn: "今週末は暇ですか？" }, 
                    { eng: "Are you available?", jpn: "空いていますか？" }, 
                    { eng: "Are you free on Sunday?", jpn: "日曜日は暇ですか？" }
                ] 
            },
            { 
                category: "2. Asking about what you should bring (持参すべきものについて尋ねる)", 
                options: [
                    { eng: "Should I bring anything with me?", jpn: "何か持っていくべきでしょうか？" }, 
                    { eng: "What can I bring?", jpn: "何を持って行けばいいですか？" }, 
                    { eng: "Is there anything you'd like me to bring?", jpn: "何か持ってきてほしいものはありますか？" }
                ] 
            }
        ],
        grammar: {
            point: "Basic Questions (Yes/No & Wh- questions) - 基本的な疑問文の作り方",
            explanation: "<strong>1. Yes/No Questions:</strong> Start the sentence with a 'be' verb (am/is/are) or an auxiliary verb (do/does/can) for a 'yes' or 'no' answer.<br><strong>2. Wh- Questions:</strong> Put a Wh- word (What, Where, When, Who) at the VERY BEGINNING of the question to ask for specific information.<br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（Yes/No疑問文は、be動詞（am, is, are）や助動詞（do, does, canなど）を文の先頭に置いて作ります。これは名前の通り「はい」か「いいえ」で答えられる基本的な質問です。一方、Wh疑問文は、What（何）、Where（どこ）、When（いつ）、Who（誰）などの疑問詞を文の一番最初に置いて、具体的な情報を尋ねる時に使います。イベントや予定について尋ねる際は、この2種類の疑問文を組み合わせることで、スムーズに詳細を確認することができます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the different structures: '<u>Are</u> you free?' starts with a 'be' verb. '<u>Where</u> is the party?' and '<u>When</u> is it?' start with Wh- words. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：異なる構造に注目してください。『<u>Are</u> you free?』はYes/Noで答えるためのbe動詞から始まります。『<u>Where</u> is the party?』や『<u>When</u> is it?』は具体的な情報を得るためにWh疑問詞から始まります。)</span>",
            examples: [
                { eng: "Can you help me?", jpn: "手伝ってくれますか？" },
                { eng: "Where does he work?", jpn: "彼はどこで働いていますか？" },
                { eng: "How much is this ticket?", jpn: "このチケットはいくらですか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "you / be / free / today (Yes/No Question)", 
            target: "Are you free today?" 
        },
        grammarPractice: [
            { prompt: "where / be / the party (Wh- Question)" },
            { prompt: "he / have / a car (Yes/No Question)" },
            { prompt: "when / do / they / play tennis (Wh- Question)" },
            { prompt: "who / be / that man (Wh- Question)" },
            { prompt: "you / like / pizza (Yes/No Question)" }
        ],
        clickingGames: [
            { prompt: "今週末は暇ですか？", target: "Are you free this weekend?", words: ["Are", "you", "free", "this", "weekend?"] },
            { prompt: "パーティーはどこでありますか？", target: "Where is the party?", words: ["Where", "is", "the", "party?"] },
            { prompt: "それはいつですか？", target: "When is it?", words: ["When", "is", "it?"] },
            { prompt: "誰が行くのですか？", target: "Who's going?", words: ["Who's", "going?"] },
            { prompt: "私は何を持っていくべきですか？", target: "What should I bring?", words: ["What", "should", "I", "bring?"] }
        ],
        dropdownGames: [
            { before: "", options: ["Are", "Do", "Is"], answer: "Are", after: " you free this weekend?" },
            { before: "", options: ["When", "Where", "Who"], answer: "When", after: " is the party?" },
            { before: "", options: ["Do", "Are", "Does"], answer: "Do", after: " we need to buy tickets?" },
            { before: "Where", options: ["is", "do", "are"], answer: "is", after: " the event?" },
            { before: "", options: ["What", "Who", "When"], answer: "What", after: " should I wear?" }
        ],
        roleplay: {
            a: "Invite your partner to a barbecue this weekend. Ask them if they are free. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(今週末のバーベキューにパートナーを誘ってください。予定が空いているか尋ねてください。)</span>",
            b: "Answer yes. Then, ask your partner two questions: 'Where is the party?' and 'What should I bring?' <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(「はい」と答えてください。その後、パートナーに2つ質問してください：「パーティーはどこでありますか？」「何を持っていくべきですか？」)</span>"
        },
        homework: {
            vocab: [
                { eng: "Busy", jpn: "忙しい", exEng: "I am very busy today.", exJpn: "今日はとても忙しいです。" },
                { eng: "Event", jpn: "イベント / 行事", exEng: "It is a big event.", exJpn: "それは大きなイベントです。" },
                { eng: "Drink", jpn: "飲み物", exEng: "Do you want a drink?", exJpn: "飲み物は欲しいですか？" },
                { eng: "Food", jpn: "食べ物", exEng: "This food is delicious.", exJpn: "この食べ物は美味しいです。" },
                { eng: "Money", jpn: "お金", exEng: "I don't have enough money.", exJpn: "十分なお金がありません。" },
                { eng: "Pay", jpn: "払う", exEng: "I will pay for lunch.", exJpn: "私が昼食代を払います。" },
                { eng: "Buy", jpn: "買う", exEng: "I need to buy tickets.", exJpn: "チケットを買う必要があります。" },
                { eng: "Need", jpn: "必要とする", exEng: "What do you need?", exJpn: "何が必要ですか？" },
                { eng: "Invite", jpn: "招待する", exEng: "I will invite my friends.", exJpn: "友達を招待します。" },
                { eng: "Join", jpn: "参加する", exEng: "Can I join you?", exJpn: "参加してもいいですか？" },
                { eng: "Date", jpn: "日付", exEng: "What is the date today?", exJpn: "今日の日付は何ですか？" },
                { eng: "Time", jpn: "時間", exEng: "What time is it?", exJpn: "何時ですか？" },
                { eng: "Place", jpn: "場所", exEng: "This is a nice place.", exJpn: "ここは素敵な場所ですね。" },
                { eng: "Fun", jpn: "楽しい", exEng: "The party was fun.", exJpn: "パーティーは楽しかったです。" }
            ],
            reading1: {
                title: "Task 2: Reading (A Party Invitation)",
                instruction: "Read the chat messages about planning a party.",
                eng: "<strong>Tom:</strong> Hi everyone! I am having a birthday party next week. Are you free?<br><strong>Lisa:</strong> Happy early birthday! When is it?<br><strong>Tom:</strong> It is on Friday night at 7 PM.<br><strong>Mark:</strong> Sounds great. Where is the party? Is it at your house?<br><strong>Tom:</strong> No, it is at the Italian restaurant near the station.<br><strong>Lisa:</strong> I love Italian food. Do we need to bring money?<br><strong>Tom:</strong> Yes, please bring 3,000 yen for the food. I will buy the cake!<br><strong>Mark:</strong> Perfect. Who's going?<br><strong>Tom:</strong> The whole office is going. See you there!",
                jpn: "<strong>トム：</strong> みんなこんにちは！来週、私の誕生日パーティーをします。暇ですか？<br><strong>リサ：</strong> 少し早いけど誕生日おめでとう！いつですか？<br><strong>トム：</strong> 金曜日の夜7時です。<br><strong>マーク：</strong> 素晴らしいですね。パーティーはどこでありますか？あなたの家ですか？<br><strong>トム：</strong> いいえ、駅の近くのイタリアンレストランです。<br><strong>リサ：</strong> イタリア料理大好きです。お金を持っていく必要がありますか？<br><strong>トム：</strong> はい、食事代として3000円持ってきてください。ケーキは私が買います！<br><strong>マーク：</strong> 完璧ですね。誰が行くのですか？<br><strong>トム：</strong> オフィスのみんなが行きます。そこで会いましょう！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hey, there is a music festival this weekend. Are you interested?", jpn: "ねえ、今週末に音楽フェスがあるよ。興味ある？" },
                { speaker: "B", eng: "Yes, I am! When is it exactly?", jpn: "うん、あるよ！正確にはいつなの？" },
                { speaker: "A", eng: "It is on Sunday from noon to 8 PM.", jpn: "日曜日の正午から午後8時までだよ。" },
                { speaker: "B", eng: "Awesome. Where is the festival?", jpn: "最高だね。フェスはどこであるの？" },
                { speaker: "A", eng: "It is at the beach.", jpn: "ビーチであるんだ。" }
            ],
            writingTask: {
                promptEng: "Imagine you are inviting a friend to an event. Write three questions to ask them about their plans. Write one 'Be' verb question, one 'Action verb' question, and one 'Wh-' question.",
                promptJpn: "友達をイベントに誘うと想像してください。彼らの予定について尋ねる質問を3つ書いてください。「be動詞の質問」を1つ、「一般動詞の質問」を1つ、「Wh疑問文」を1つ書いてください。"
            }
        }
    },
    {
        id: 8,
        title: "Lesson 8: How to talk about possession",
        goal: "Talk about who owns what using possessive adjectives (my, your, his, her, our, their). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(所有格の形容詞（my, your, his, her, our, their）を使って、誰の持ち物かについて話す。)</span>",
        vocab: [
            { eng: "My", jpn: "私の", exEng: "This is my bag.", exJpn: "これは私のカバンです。" },
            { eng: "Your", jpn: "あなたの", exEng: "Is this your coat?", exJpn: "これはあなたのコートですか？" },
            { eng: "His", jpn: "彼の", exEng: "His car is fast.", exJpn: "彼の車は速いです。" },
            { eng: "Her", jpn: "彼女の", exEng: "Her hair is long.", exJpn: "彼女の髪は長いです。" },
            { eng: "Our", jpn: "私たちの", exEng: "This is our house.", exJpn: "ここは私たちの家です。" },
            { eng: "Their", jpn: "彼らの", exEng: "Their dog is cute.", exJpn: "彼らの犬は可愛いです。" },
            { eng: "Bag", jpn: "カバン", exEng: "I lost my bag.", exJpn: "カバンをなくしました。" },
            { eng: "Jacket", jpn: "ジャケット / 上着", exEng: "Put on your jacket.", exJpn: "ジャケットを着てください。" },
            { eng: "Umbrella", jpn: "傘", exEng: "It is raining, take an umbrella.", exJpn: "雨が降っているので、傘を持っていってください。" },
            { eng: "Wallet", jpn: "財布", exEng: "My wallet is empty.", exJpn: "私の財布は空っぽです。" },
            { eng: "Name tag", jpn: "名札 / ネームタグ", exEng: "Please wear your name tag.", exJpn: "名札をつけてください。" },
            { eng: "Black", jpn: "黒い", exEng: "I like black coffee.", exJpn: "ブラックコーヒーが好きです。" },
            { eng: "Brown", jpn: "茶色い", exEng: "She has brown eyes.", exJpn: "彼女は茶色い目をしています。" },
            { eng: "Look", jpn: "見る", exEng: "Look at this picture.", exJpn: "この写真を見てください。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Excuse me.</span> Is this <i class='grammar-target'>your</i> bag?</span>", jpn: "すみません。これはあなたのカバンですか？" },
            { speaker: "B", eng: "No, it is not <i class='grammar-target'>my</i> bag. <i class='grammar-target'>My</i> bag is black.</span>", jpn: "いいえ、私のカバンではありません。私のカバンは黒です。" },
            { speaker: "A", eng: "Oh, I see. <span class='swappable'>Maybe it is Mike's bag.</span>", jpn: "なるほど。たぶんマイクのカバンですね。" },
            { speaker: "B", eng: "I don't think so. <i class='grammar-target'>His</i> bag is brown.</span>", jpn: "そうは思いません。彼のカバンは茶色です。" },
            { speaker: "A", eng: "Look, there is a name tag on it. Kate.", jpn: "見て、名札がついていますよ。ケイト" },
            { speaker: "B", eng: "OK, so it's <i class='grammar-target'>her</i> bag.", jpn: "じゃ、彼女のカバンですね。" }
        ],
        dialogueStructure: [
            "Get attention + Ask about ownership <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(声をかける ＋ 誰のものか尋ねる)</span>",
            "> Deny ownership + Describe your item <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(自分のものだと否定する ＋ 自分のものを説明する)</span>",
            "Suggest another owner <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(他の人のものか提案する)</span>",
            "> Disagree + Describe their item <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意しない ＋ その人のものを説明する)</span>",
            "Find clue <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(手がかりを見つける)</span>",
            "> Confirm the owner <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(持ち主を確認する)</span>"
        ],
        expressions: [
            { 
                category: "1. Getting someone's attention (誰かの注意を引く)", 
                options: [
                    { eng: "Sorry", jpn: "すみません" }, 
                    { eng: "Pardon me", jpn: "失礼します" }, 
                    { eng: "Excuse us", jpn: "恐れ入ります" }
                ] 
            },
            { 
                category: "2. Guessing (推測)", 
                options: [
                    { eng: "Perhaps, it's John's bag.", jpn: "たぶん、ジョンのかばんだよ。" }, 
                    { eng: "It might be Alex's bag.", jpn: "アレックスのかばんかもしれない。" }, 
                    { eng: "It could be Tom's bag.", jpn: "トムのかばんかもね。" }
                ] 
            }
        ],
        grammar: {
            point: "Possessive Adjectives (my, your, his, her, our, their) - 所有格の形容詞",
            explanation: "We use possessive adjectives before a noun to show who owns it. The word changes based on the <strong>owner</strong>, not the object. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（所有格の形容詞（my, your, his, her, our, their）は、その物が「誰のものか」を表すために名詞の直前に置きます。日本語の「私の」「あなたの」に当たります。注意すべきポイントは、単語の形が「所有される物」ではなく「所有する人」に合わせて変わるという点です。例えば、カバンの持ち主が男性なら「his bag（彼のカバン）」、女性なら「her bag（彼女のカバン）」となります。忘れ物をした時や、人の持ち物について話す時に必須の表現です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the words match the owner: '<u>your</u> bag' (belonging to you), '<u>his</u> bag' (belonging to a man), and '<u>her</u> bag' (belonging to a woman). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：単語がどのように所有者と一致しているかに注目してください：『<u>your</u> bag（あなたの）』『<u>his</u> bag（彼の）』『<u>her</u> bag（彼女の）』。)</span>",
            examples: [
                { eng: "My brother is tall.", jpn: "私の兄（弟）は背が高いです。" },
                { eng: "Where is your passport?", jpn: "あなたのパスポートはどこですか？" },
                { eng: "They love their new house.", jpn: "彼らは自分たちの新しい家を気に入っています。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I have a car. (car / is red)", 
            target: "My car is red." 
        },
        grammarPractice: [
            { prompt: "John has a dog. (dog / is big)" },
            { prompt: "Sarah has a jacket. (jacket / is blue)" },
            { prompt: "We have a house. (house / is new)" },
            { prompt: "They have a project. (project / is finished)" },
            { prompt: "You have an umbrella. (umbrella / is black)" }
        ],
        clickingGames: [
            { prompt: "これはあなたのカバンですか？", target: "Is this your bag?", words: ["Is", "this", "your", "bag?"] },
            { prompt: "私のカバンは黒です。", target: "My bag is black.", words: ["My", "bag", "is", "black."] },
            { prompt: "たぶんマイクのカバンですね。", target: "Maybe it is Mike's bag.", words: ["Maybe", "it", "is", "his", "bag."] },
            { prompt: "彼女のカバンです。", target: "It is her bag.", words: ["It", "is", "her", "bag."] },
            { prompt: "私たちの傘は黒です。", target: "Our umbrella is black.", words: ["Our", "umbrella", "is", "black."] }
        ],
        dropdownGames: [
            { before: "Excuse me, is this", options: ["your", "you", "yours"], answer: "your", after: " umbrella?" },
            { before: "I can't find", options: ["my", "me", "I"], answer: "my", after: " phone. Where is it?" },
            { before: "John is driving", options: ["his", "he", "him"], answer: "his", after: " new car." },
            { before: "Mary is calling", options: ["her", "she", "hers"], answer: "her", after: " mother." },
            { before: "We love", options: ["our", "us", "we"], answer: "our", after: " new house. It is very big." }
        ],
        roleplay: {
            a: "You found a wallet on the table. Ask your partner if it is their wallet. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(テーブルの上で財布を見つけました。パートナーに、彼らの財布かどうか尋ねてください。)</span>",
            b: "Say no. Say your wallet is brown. Tell them it is probably David's wallet (use 'his'). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(いいえと答えてください。あなたの財布は茶色だと伝えてください。おそらくデビッドの財布だと伝えてください（『his』を使ってください）。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Family", jpn: "家族", exEng: "My family is big.", exJpn: "私の家族は大きいです。" },
                { eng: "Parents", jpn: "両親", exEng: "I love my parents.", exJpn: "私は両親を愛しています。" },
                { eng: "Father", jpn: "父", exEng: "His father is strict.", exJpn: "彼の父親は厳しいです。" },
                { eng: "Mother", jpn: "母", exEng: "Her mother is a nurse.", exJpn: "彼女の母親は看護師です。" },
                { eng: "Brother", jpn: "兄 / 弟", exEng: "My brother likes sports.", exJpn: "私の兄弟はスポーツが好きです。" },
                { eng: "Sister", jpn: "姉 / 妹", exEng: "Do you have a sister?", exJpn: "姉妹はいますか？" },
                { eng: "Hospital", jpn: "病院", exEng: "He works at a hospital.", exJpn: "彼は病院で働いています。" },
                { eng: "School", jpn: "学校", exEng: "We go to school together.", exJpn: "私たちは一緒に学校に行きます。" },
                { eng: "Near", jpn: "近い / 近くに", exEng: "My house is near the park.", exJpn: "私の家は公園の近くです。" },
                { eng: "Far", jpn: "遠い / 遠くに", exEng: "The station is far.", exJpn: "駅は遠いです。" },
                { eng: "Company", jpn: "会社", exEng: "He started a new company.", exJpn: "彼は新しい会社を始めました。" },
                { eng: "Dog", jpn: "犬", exEng: "Their dog is sleeping.", exJpn: "彼らの犬は眠っています。" },
                { eng: "Keys", jpn: "鍵", exEng: "Where are my keys?", exJpn: "私の鍵はどこですか？" },
                { eng: "Glasses", jpn: "メガネ", exEng: "She wears glasses.", exJpn: "彼女はメガネをかけています。" }
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
                { speaker: "A", eng: "What about your brother? Maybe he took them.", jpn: "お兄さんはどう？もしかしたら彼が持って行ったのかも。" }
            ],
            writingTask: {
                promptEng: "Write three sentences about your family or friends using possessive adjectives (my, your, his, her, our, their).",
                promptJpn: "所有格の形容詞（my, your, his, her, our, their）を使って、家族や友人についての文を3つ書いてください。"
            }
        }
    },
    {
        id: 9,
        title: "Lesson 9: How to talk about belongings",
        goal: "Talk about things you and other people own using 'have' and 'has'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『have』と『has』を使って、自分や他の人が持っているものについて話す。)</span>",
        vocab: [
            { eng: "Have", jpn: "持っている / ある（I, You, We, They用）", exEng: "I have a question.", exJpn: "質問があります。" },
            { eng: "Has", jpn: "持っている / ある（He, She, It用）", exEng: "He has a meeting.", exJpn: "彼は会議があります。" },
            { eng: "Party", jpn: "パーティー", exEng: "We are having a party.", exJpn: "私たちはパーティーを開きます。" },
            { eng: "Food", jpn: "食べ物", exEng: "The food is ready.", exJpn: "食べ物の準備ができました。" },
            { eng: "Pizza", jpn: "ピザ", exEng: "I love pizza.", exJpn: "私はピザが大好きです。" },
            { eng: "Pasta", jpn: "パスタ", exEng: "She makes good pasta.", exJpn: "彼女は美味しいパスタを作ります。" },
            { eng: "Ice cream", jpn: "アイスクリーム", exEng: "Do you have ice cream?", exJpn: "アイスクリームはありますか？" },
            { eng: "Decoration", jpn: "飾り付け", exEng: "The decorations are beautiful.", exJpn: "飾り付けが美しいです。" },
            { eng: "Balloon", jpn: "風船", exEng: "He has red balloons.", exJpn: "彼は赤い風船を持っています。" },
            { eng: "Streamer", jpn: "紙テープ", exEng: "We need streamers.", exJpn: "私たちは紙テープが必要です。" },
            { eng: "Game", jpn: "ゲーム", exEng: "Does she have any games?", exJpn: "彼女は何かゲームを持っていますか？" },
            { eng: "Board game", jpn: "ボードゲーム", exEng: "This board game is fun.", exJpn: "このボードゲームは楽しいです。" },
            { eng: "Ready", jpn: "準備ができている", exEng: "Are you ready?", exJpn: "準備はいいですか？" },
            { eng: "Tomorrow", jpn: "明日", exEng: "See you tomorrow.", exJpn: "また明日。" }
        ],
        dialogue: [
            { speaker: "A", eng: "The party is tomorrow! <i class='grammar-target'>Do we have</i> the food?</span>", jpn: "パーティーは明日だね！食べ物は準備できてる（持っている）？" },
            { speaker: "B", eng: "Yes, we <i class='grammar-target'>have</i> pizza, pasta, and ice cream.</span>", jpn: "うん、ピザ、パスタ、それからアイスクリームがあるよ。" },
            { speaker: "A", eng: "What about decorations? <i class='grammar-target'>Do you have</i> any balloons?</span>", jpn: "飾り付けはどう？風船は持ってる？" },
            { speaker: "B", eng: "No, I don't. But David <i class='grammar-target'>has</i> balloons and streamers.</span>", jpn: "ううん、持っていないよ。でも、デビッドが風船と紙テープを持っているよ。" },
            { speaker: "A", eng: "<span class='swappable'>Perfect. </span><i class='grammar-target'>Does he have</i> any games?</span>", jpn: "完璧だね。彼は何かゲームを持ってる？" },
            { speaker: "B", eng: "Yes, <i class='grammar-target'>he has</i> a fun board game.</span> <span class='swappable'>We are ready!</span>", jpn: "うん、彼には楽しいボードゲームがあるよ。これで準備万端だね！" }
        ],
        dialogueStructure: [
            "State event + Ask what someone has <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(イベントを伝える ＋ 相手の持ち物を尋ねる)</span>",
            "> Agree + State what you have <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 持っているものを伝える)</span>",
            "React + Ask about other items <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 他のアイテムについて尋ねる)</span>",
            "> Deny having items + State what a third person has <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(持っていないことを伝える ＋ 第三者が持っているものを伝える)</span>",
            "React + Ask what the third person has <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 第三者の持ち物を尋ねる)</span>",
            "> Agree + State what the third person has <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 第三者が持っているものを伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Stating that an option is acceptable (ある選択肢が受け入れ可能であると述べる)", 
                options: [
                    { eng: "OK", jpn: "大丈夫です" }, 
                    { eng: "That's fine", jpn: "それで問題ありません" }, 
                    { eng: "That works", jpn: "それで構いません" }
                ] 
            },
            { 
                category: "2. Stating that you are ready (準備ができていることを伝える)", 
                options: [
                    { eng: "We are all set.", jpn: "準備完了！" }, 
                    { eng: "We are good to go.", jpn: "いつでも行けるよ / いつでもOK！" }, 
                    { eng: "We're ready to roll.", jpn: "さあ、行こう！ / 準備万端！" }
                ] 
            }
        ],
        grammar: {
            point: "Verb 'have' and 'has' for possession - 所有を表す動詞の『have』と『has』",
            explanation: "We use the verb 'have' to talk about things we own. The word changes depending on the subject (who owns the thing).<br>• <strong>I / You / We / They</strong> -> <strong>have</strong><br>• <strong>He / She / It</strong> -> <strong>has</strong><br><em>*Note: In questions and negative sentences for He/She/It, we use 'does/doesn't' + 'have' (not has).</em> <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（動詞の「have」は、物やペットを「持っている」「飼っている」という状態を表します。現在形で使う場合、主語によって形が変わるのが最大の特徴です。主語が「I, you, we, they」の時は「have」を使い、「he, she, it」などの三人称単数の時は「has」を使います。また、疑問文や否定文を作るときは、「does」や「doesn't」の後に続く動詞は必ず原形（have）に戻るため、「Does he has...?」とは言わず「Does he have...?」となることに注意しましょう。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the changes based on the person: '<u>Do we have</u>', '<u>we have</u>', '<u>Do you have</u>', '<u>David has</u>', '<u>Does he have</u>', and '<u>he has</u>'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：人による変化に注目してください：『<u>Do we have</u>』『<u>we have</u>』『<u>Do you have</u>』『<u>David has</u>』『<u>Does he have</u>』『<u>he has</u>』。)</span>",
            examples: [
                { eng: "They have a beautiful house.", jpn: "彼らは美しい家を持っています。" },
                { eng: "My brother has two dogs.", jpn: "私の兄（弟）は2匹の犬を飼っています。" },
                { eng: "Does she have a smartphone?", jpn: "彼女はスマートフォンを持っていますか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "She (____) a new car.", 
            target: "She has a new car." 
        },
        grammarPractice: [
            { prompt: "Does she (____) any balloons?" },
            { prompt: "He doesn't (____) a board game." },
            { prompt: "He (____) pizza and pasta." },
            { prompt: "Does John (____) ice cream?" },
            { prompt: "They don't (____) a computer." }
        ],
        clickingGames: [
            { prompt: "食べ物はありますか？", target: "Do we have the food?", words: ["Do", "we", "have", "the", "food?"] },
            { prompt: "私たちはピザとパスタを持っています。", target: "We have pizza and pasta.", words: ["We", "have", "pizza", "and", "pasta."] },
            { prompt: "デビッドは風船を持っています。", target: "David has balloons.", words: ["David", "has", "balloons."] },
            { prompt: "彼はゲームを持っていますか？", target: "Does he have any games?", words: ["Does", "he", "have", "any", "games?"] },
            { prompt: "彼には楽しいボードゲームがあります。", target: "He has a fun board game.", words: ["He", "has", "a", "fun", "board", "game."] }
        ],
        dropdownGames: [
            { before: "We", options: ["have", "has", "having"], answer: "have", after: " pizza and ice cream." },
            { before: "She", options: ["has", "have", "haves"], answer: "has", after: " balloons for the party." },
            { before: "Do you", options: ["have", "has", "haves"], answer: "have", after: " any games?" },
            { before: "My friend David", options: ["has", "have", "having"], answer: "has", after: " a new board game." },
            { before: "We do not", options: ["have", "has", "haves"], answer: "have", after: " decorations right now." }
        ],
        roleplay: {
            a: "You are planning a party. Ask your partner if they have food and drinks. Then ask if their brother has any games. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パーティーを計画しています。パートナーに食べ物や飲み物を持っているか尋ねてください。その後、彼らの兄弟が何かゲームを持っているか尋ねてください。)</span>",
            b: "Answer your partner. Tell them what food and drinks you have. Then tell them your brother has a fun video game. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに答えてください。どんな食べ物や飲み物を持っているか伝えてください。その後、兄弟が楽しいビデオゲームを持っていると伝えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "House", jpn: "家", exEng: "We bought a house.", exJpn: "私たちは家を買いました。" },
                { eng: "Apartment", jpn: "アパート / マンション", exEng: "I live in an apartment.", exJpn: "私はアパートに住んでいます。" },
                { eng: "Garden", jpn: "庭", exEng: "She plants flowers in the garden.", exJpn: "彼女は庭に花を植えます。" },
                { eng: "Computer", jpn: "コンピューター / パソコン", exEng: "I need a new computer.", exJpn: "私は新しいコンピューターが必要です。" },
                { eng: "Laptop", jpn: "ノートパソコン", exEng: "Bring your laptop.", exJpn: "ノートパソコンを持ってきてください。" },
                { eng: "Smartphone", jpn: "スマートフォン", exEng: "He has a new smartphone.", exJpn: "彼は新しいスマートフォンを持っています。" },
                { eng: "Camera", jpn: "カメラ", exEng: "Smile for the camera.", exJpn: "カメラに向かって笑ってください。" },
                { eng: "Watch", jpn: "腕時計", exEng: "What time is it on your watch?", exJpn: "あなたの腕時計では何時ですか？" },
                { eng: "Ticket", jpn: "チケット / 切符", exEng: "Do you have your ticket?", exJpn: "チケットを持っていますか？" },
                { eng: "Money", jpn: "お金", exEng: "I need more money.", exJpn: "もっとお金が必要です。" },
                { eng: "Time", jpn: "時間", exEng: "We don't have much time.", exJpn: "私たちにはあまり時間がありません。" },
                { eng: "Idea", jpn: "アイデア / 考え", exEng: "That is a good idea.", exJpn: "それは良い考えですね。" },
                { eng: "Bag", jpn: "カバン", exEng: "My bag is full.", exJpn: "私のカバンはいっぱいです。" },
                { eng: "Shoes", jpn: "靴", exEng: "Take off your shoes.", exJpn: "靴を脱いでください。" }
            ],
            reading1: {
                title: "Task 2: Reading (My Dream House)",
                instruction: "Read the short paragraph about someone's belongings and dream house.",
                eng: "<strong>My Dream House</strong><br><br>Right now, I live in a small apartment. I do not have a garden, and I do not have a car. I only have a bicycle. But my parents have a beautiful house in the country. They have a big garden and two dogs. My father has an old truck, and my mother has a small red car. I want to buy a house like theirs one day. I have a good job now, so I save money every month.",
                jpn: "<strong>私の夢の家</strong><br><br>今、私は小さなアパートに住んでいます。私には庭がなく、車も持っていません。自転車しか持っていません。でも、私の両親は田舎に美しい家を持っています。彼らは大きな庭と2匹の犬を持っています。父は古いトラックを持っていて、母は小さな赤い車を持っています。私はいつか彼らのような家を買いたいです。今は良い仕事に就いているので、毎月お金を貯めています。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Let's have a picnic on Sunday. Do you have a picnic blanket?", jpn: "日曜日にピクニックをしましょう。ピクニック用の毛布は持っていますか？" },
                { speaker: "B", eng: "Yes, I have a big red blanket. Do we have any food?", jpn: "はい、大きな赤い毛布を持っています。食べ物はありますか？" },
                { speaker: "A", eng: "I have sandwiches and fruit. Does Mike have any drinks?", jpn: "私がサンドイッチとフルーツを持っています。マイクは飲み物を持っていますか？" },
                { speaker: "B", eng: "Yes, he has water and iced tea.", jpn: "はい、彼は水とアイスティーを持っています。" },
                { speaker: "A", eng: "Great. Does he have a camera?", jpn: "素晴らしい。彼はカメラを持っていますか？" },
                { speaker: "B", eng: "No, he doesn't have a camera. But I have my smartphone.", jpn: "いいえ、彼はカメラを持っていません。でも私がスマートフォンを持っています。" },
                { speaker: "A", eng: "Perfect. It will be fun!", jpn: "完璧ですね。楽しいピクニックになりそうです！" }
            ],
            writingTask: {
                promptEng: "Write three sentences about things you or your family members have. Use 'have' and 'has'.",
                promptJpn: "あなたやあなたの家族が持っているものについて、3つの文を書いてください。『have』と『has』を使用してください。"
            }
        }
    },,{
        id: 10,
        title: "Lesson 10: How to talk about your family",
        goal: "Ask and answer questions about family members and describe their personality and appearance. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(家族のメンバーについて質問し答え、性格や容姿を描写する。)</span>",
        vocab: [
            { eng: "Family", jpn: "家族", exEng: "I love my family.", exJpn: "私は家族を愛しています。" },
            { eng: "Mother", jpn: "母", exEng: "My mother is kind.", exJpn: "私の母は優しいです。" },
            { eng: "Father", jpn: "父", exEng: "His father is tall.", exJpn: "彼の父は背が高いです。" },
            { eng: "Brother", jpn: "兄弟", exEng: "I have one brother.", exJpn: "私には兄弟が1人います。" },
            { eng: "Sister", jpn: "姉妹", exEng: "She is my sister.", exJpn: "彼女は私の姉（妹）です。" },
            { eng: "Husband", jpn: "夫", exEng: "Her husband is a doctor.", exJpn: "彼女の夫は医者です。" },
            { eng: "Wife", jpn: "妻", exEng: "His wife is smart.", exJpn: "彼の妻は賢いです。" },
            { eng: "Tall", jpn: "背が高い", exEng: "He is very tall.", exJpn: "彼はとても背が高いです。" },
            { eng: "Short", jpn: "背が低い", exEng: "She is short.", exJpn: "彼女は背が低いです。" },
            { eng: "Kind", jpn: "優しい / 親切な", exEng: "They are kind people.", exJpn: "彼らは親切な人たちです。" },
            { eng: "Funny", jpn: "面白い", exEng: "My uncle is funny.", exJpn: "私の叔父は面白いです。" },
            { eng: "Strict", jpn: "厳しい", exEng: "Our teacher is strict.", exJpn: "私たちの先生は厳しいです。" },
            { eng: "Quiet", jpn: "静かな", exEng: "He is a quiet boy.", exJpn: "彼は静かな男の子です。" },
            { eng: "Smart", jpn: "賢い", exEng: "She is very smart.", exJpn: "彼女はとても賢いです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Do you have any brothers or sisters?</span>", jpn: "兄弟や姉妹はいますか？" },
            { speaker: "B", eng: "Yes, I have one older brother.", jpn: "はい、私には兄が1人います。" },
            { speaker: "A", eng: "Oh, how old is he?", jpn: "ああ、彼は何歳ですか？" },
            { speaker: "B", eng: "He <i class='grammar-target'>is</i> twenty-five years old.", jpn: "彼は25歳です。" },
            { speaker: "A", eng: "<span class='swappable'>What is he like?</span>", jpn: "彼はどんな人ですか？" },
            { speaker: "B", eng: "He <i class='grammar-target'>is</i> very tall and kind.", jpn: "彼はとても背が高くて優しいです。" }
        ],
        dialogueStructure: [
            "Ask about family <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(家族構成について尋ねる)</span>",
            "> State family members <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(家族のメンバーを伝える)</span>",
            "Ask about age <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(年齢を尋ねる)</span>",
            "> State age <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(年齢を伝える)</span>",
            "Ask about personality/appearance <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(性格や外見について尋ねる)</span>",
            "> Describe personality/appearance <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(性格や外見を描写する)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about family (家族構成の尋ね方)", 
                options: [
                    { eng: "Do you have any brothers or sisters?", jpn: "兄弟や姉妹はいますか？" }, 
                    { eng: "Do you have a big family?", jpn: "大家族ですか？" }, 
                    { eng: "Do you have any children?", jpn: "お子さんはいますか？" }
                ] 
            },
            { 
                category: "2. Asking about personality/appearance (性格や容姿の尋ね方)", 
                options: [
                    { eng: "What is he like?", jpn: "彼はどんな人ですか？" }, 
                    { eng: "What does she look like?", jpn: "彼女はどんな外見ですか？" }, 
                    { eng: "Tell me about your brother.", jpn: "あなたのお兄さん（弟さん）について教えてください。" }
                ] 
            }
        ],
        grammar: {
            point: "Describing People (To Be + Adjective) - 人の描写（be動詞 ＋ 形容詞）",
            explanation: "We use the verb 'to be' (am/is/are) followed by an adjective to describe someone's appearance or personality. You must match the 'be' verb to the subject. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（誰かの外見（背が高い、低いなど）や性格（優しい、厳しいなど）を描写する時は、主語の後に「be動詞（am, is, are）」を置き、その直後に形容詞を続けます。「be動詞」は主語と形容詞をイコール（＝）で結ぶ役割を持っています。主語が「私（I）」なら am、「彼/彼女/単数の人（He/She/My father）」なら is、「私たち/彼ら/複数の人（We/They/My parents）」なら are と、主語に合わせて正しく変化させることが重要です。複数の形容詞を並べる場合は、間に「and」を入れます（例：tall and kind）。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the pattern matching the subject with the correct 'be' verb and adjective: 'He <u>is</u> very <u>tall</u> and <u>kind</u>.' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：主語と正しいbe動詞、そして形容詞を組み合わせるパターンに注目してください：『He <u>is</u> very <u>tall</u> and <u>kind</u>.』)</span>",
            examples: [
                { eng: "My mother is very kind.", jpn: "私の母はとても優しいです。" },
                { eng: "His brother is tall.", jpn: "彼の兄弟は背が高いです。" },
                { eng: "They are funny and smart.", jpn: "彼らは面白くて賢いです。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "My father / strict", 
            target: "My father is strict." 
        },
        grammarPractice: [
            { prompt: "She / funny and smart" },
            { prompt: "My brothers / tall" },
            { prompt: "They / quiet" },
            { prompt: "His wife / kind" },
            { prompt: "I / short" }
        ],
        clickingGames: [
            { prompt: "彼はとても背が高くて優しいです。", target: "He is very tall and kind.", words: ["He", "is", "very", "tall", "and", "kind."] },
            { prompt: "彼女は背が低くて面白いです。", target: "She is short and funny.", words: ["She", "is", "short", "and", "funny."] },
            { prompt: "私の父はとても厳しいです。", target: "My father is very strict.", words: ["My", "father", "is", "very", "strict."] },
            { prompt: "私の母は優しくて静かです。", target: "My mother is kind and quiet.", words: ["My", "mother", "is", "kind", "and", "quiet."] },
            { prompt: "私の兄弟たちはとても賢いです。", target: "My brothers are very smart.", words: ["My", "brothers", "are", "very", "smart."] }
        ],
        dropdownGames: [
            { before: "My father", options: ["is", "are", "am"], answer: "is", after: " very tall." },
            { before: "She", options: ["is", "are", "am"], answer: "is", after: " kind and funny." },
            { before: "My brothers", options: ["are", "is", "am"], answer: "are", after: " very smart." },
            { before: "I", options: ["am", "is", "are"], answer: "am", after: " quiet at home." },
            { before: "They", options: ["are", "is", "am"], answer: "are", after: " strict but kind." }
        ],
        roleplay: {
            a: "You are talking to a new friend. Ask them if they have any brothers or sisters, how old they are, and what they are like. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(新しい友達と話しています。兄弟や姉妹はいるか、何歳か、そしてどんな人か尋ねてください。)</span>",
            b: "You are the new friend. Answer the questions about your family. Make up the details! <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(新しい友達の役です。家族についての質問に答えてください。詳細は自由に想像して作ってください！)</span>"
        },
        homework: {
            vocab: [
                { eng: "Grandfather", jpn: "祖父", exEng: "My grandfather is old.", exJpn: "私の祖父は年をとっています。" },
                { eng: "Grandmother", jpn: "祖母", exEng: "She is my grandmother.", exJpn: "彼女は私の祖母です。" },
                { eng: "Uncle", jpn: "叔父 / 伯父", exEng: "My uncle lives in Osaka.", exJpn: "私の叔父は大阪に住んでいます。" },
                { eng: "Aunt", jpn: "叔母 / 伯母", exEng: "Her aunt is a teacher.", exJpn: "彼女の叔母は先生です。" },
                { eng: "Cousin", jpn: "いとこ", exEng: "I play with my cousin.", exJpn: "私はいとこと遊びます。" },
                { eng: "Children", jpn: "子供たち", exEng: "The children are playing.", exJpn: "子供たちが遊んでいます。" },
                { eng: "Son", jpn: "息子", exEng: "His son is smart.", exJpn: "彼の息子は賢いです。" },
                { eng: "Daughter", jpn: "娘", exEng: "She has one daughter.", exJpn: "彼女には娘が1人います。" },
                { eng: "Young", jpn: "若い", exEng: "He is very young.", exJpn: "彼はとても若いです。" },
                { eng: "Old", jpn: "年をとった / 古い", exEng: "This house is old.", exJpn: "この家は古いです。" },
                { eng: "Friendly", jpn: "フレンドリーな / 友好的な", exEng: "The dog is friendly.", exJpn: "その犬はフレンドリーです。" },
                { eng: "Shy", jpn: "恥ずかしがり屋の", exEng: "The little boy is shy.", exJpn: "その小さな男の子は恥ずかしがり屋です。" },
                { eng: "Nephew", jpn: "甥", exEng: "My nephew is cute.", exJpn: "甥っ子はかわいい。" },
    { eng: "Neice", jpn: "姪", exEng: "She is my neice.", exJpn: "彼女は私の姪です。" }
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
                { speaker: "A", eng: "That sounds nice. I have a big family. I have three brothers.", jpn: "それはいいですね。私は大家族です。兄弟が3人います。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your family. Include who is in your family, their ages, and what they are like (their personality or appearance).",
                promptJpn: "家族についての短い文章を書いてください。家族構成、それぞれの年齢、そしてどんな人か（性格や容姿）を含めてください。"
            }
        }
    },
    {
        id: 11,
        title: "Lesson 11: How to describe someone's appearance",
        goal: "Describe a person's physical appearance using 'have' and 'has' (e.g., hair, eyes, facial hair). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『have』や『has』を使って、髪や目などの外見の特徴を説明する。)</span>",
        vocab: [
            { eng: "Hair", jpn: "髪", exEng: "Her hair is beautiful.", exJpn: "彼女の髪は美しいです。" },
            { eng: "Eyes", jpn: "目", exEng: "Close your eyes.", exJpn: "目を閉じてください。" },
            { eng: "Black", jpn: "黒い", exEng: "He has black hair.", exJpn: "彼は黒髪です。" },
            { eng: "Brown", jpn: "茶色い", exEng: "She has brown eyes.", exJpn: "彼女は茶色い目をしています。" },
            { eng: "Blonde", jpn: "金髪の", exEng: "My sister is blonde.", exJpn: "私の姉は金髪です。" },
            { eng: "Long", jpn: "長い", exEng: "She has long hair.", exJpn: "彼女は長い髪をしています。" },
            { eng: "Short", jpn: "短い / 身長が低い", exEng: "He has short hair.", exJpn: "彼は短い髪をしています。" },
            { eng: "Straight", jpn: "まっすぐな / ストレートの", exEng: "I have straight hair.", exJpn: "私はストレートヘアです。" },
            { eng: "Curly", jpn: "巻き毛の / カールした", exEng: "He has curly hair.", exJpn: "彼は巻き毛です。" },
            { eng: "Glasses", jpn: "メガネ", exEng: "I wear glasses.", exJpn: "私はメガネをかけています。" },
            { eng: "Beard", jpn: "あごひげ", exEng: "He has a thick beard.", exJpn: "彼には濃いあごひげがあります。" },
            { eng: "Mustache", jpn: "口ひげ", exEng: "My father has a mustache.", exJpn: "私の父には口ひげがあります。" },
            { eng: "Scar", jpn: "傷跡", exEng: "He has a scar on his face.", exJpn: "彼の顔には傷跡がある。" },
            { eng: "Look like", jpn: "〜に似ている / どんな外見か", exEng: "What does she look like?", exJpn: "彼女はどんな外見ですか？" }
        ],
        dialogue: [
            { speaker: "A", eng: "I am looking for my new coworker, Tom. <span class='swappable'>What does he look like?</span>", jpn: "新しい同僚のトムを探しています。彼はどんな外見ですか？" },
            { speaker: "B", eng: "He is quite tall. And he <i class='grammar-target'>has</i> short black hair.", jpn: "彼はとても背が高いです。そして、彼は短い黒髪です。" },
            { speaker: "A", eng: "Okay. Does he <i class='grammar-target'>have</i> a beard?</span>", jpn: "わかりました。彼にはあごひげがありますか？" },
            { speaker: "B", eng: "No, he doesn't. But he <i class='grammar-target'>has</i> a mustache.", jpn: "いいえ、ありません。でも、口ひげがあります。" },
            { speaker: "A", eng: "I see. <span class='swappable'>What about his eyes?</span>", jpn: "なるほど。彼の目はどうですか？" },
            { speaker: "B", eng: "He <i class='grammar-target'>has</i> brown eyes. I think he is in the meeting room.", jpn: "彼は茶色い目をしています。会議室にいると思いますよ。" }
        ],
        dialogueStructure: [
            "State situation + Ask about appearance <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(状況を伝える ＋ 外見について尋ねる)</span>",
            "> State height + Describe hair <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(身長を伝える ＋ 髪型を描写する)</span>",
            "React + Ask about facial features <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 顔の特徴について尋ねる)</span>",
            "> Answer + Add other details <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(答える ＋ 他の詳細を加える)</span>",
            "React + Ask about eyes <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 目について尋ねる)</span>",
            "> Describe eyes + State location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(目を描写する ＋ 居場所を伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about appearance (外見について尋ねる)", 
                options: [
                    { eng: "Can you describe his physical appearance?", jpn: "彼の容姿を説明していただけますか？" }, 
                    { eng: "How would you describe him?", jpn: "彼をどのように表現しますか？" }, 
                    { eng: "What's his appearance like?", jpn: "彼の見た目はどんな感じですか？" }
                ] 
            },
            { 
                category: "2. Asking about eyes (特定の特徴について尋ねる)", 
                options: [
                    { eng: "What color are his eyes?", jpn: "彼の目の色は何色ですか？" }, 
                    { eng: "What color eyes does he have?", jpn: "彼の目の色は何色ですか？" }, 
                    { eng: "Can you tell me his eye color?", jpn: "彼の目の色を教えていただけますか？" }
                ] 
            }
        ],
        grammar: {
            point: "Describing appearance using 'have' and 'has' - 『have』と『has』を使った外見の説明",
            explanation: "To talk about physical features that belong to a person (like hair, eyes, or a beard), we use the verb 'have'. Remember to use <strong>has</strong> for <em>he, she, and it</em>, and <strong>have</strong> for <em>I, you, we, and they</em>. Adjectives usually go before the noun (e.g., short black hair). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「背が高い」「太っている」のような体全体の描写には be動詞 を使いますが、髪の色や長さ、目の色、ひげなど「その人が持っている身体的特徴（パーツ）」について話すときには、所有を表す動詞の『have』を使います。主語が「彼（he）」「彼女（she）」のような三人称単数の場合は、必ず <strong>has</strong> に変化させます。「短い黒髪（short black hair）」のように、長さや形を表す形容詞を色の前に置くのが自然な語順です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the structure when describing Tom: '<u>he has</u> short black hair', '<u>he has</u> a mustache', and '<u>He has</u> brown eyes'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：トムの外見を説明するときの構造に注目してください：『<u>he has</u> short black hair』『<u>he has</u> a mustache』『<u>He has</u> brown eyes』。)</span>",
            examples: [
                { eng: "She has long brown hair.", jpn: "彼女は長い茶色の髪をしています。" },
                { eng: "I have blue eyes and short hair.", jpn: "私は青い目をしていて、髪が短いです。" },
                { eng: "Does he have a beard?", jpn: "彼にはあごひげがありますか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "She / long hair (+)", 
            target: "She has long hair." 
        },
        grammarPractice: [
            { prompt: "He / blue eyes (+)" },
            { prompt: "They / curly hair (+)" },
            { prompt: "I / a beard (-)" },
            { prompt: "My father / a mustache (+)" },
            { prompt: "She / green eyes (-)" }
        ],
        clickingGames: [
            { prompt: "彼はどんな外見ですか？", target: "What does he look like?", words: ["What", "does", "he", "look", "like?"] },
            { prompt: "彼は短い黒髪です。", target: "He has short black hair.", words: ["He", "has", "short", "black", "hair."] },
            { prompt: "彼にはあごひげがありますか？", target: "Does he have a beard?", words: ["Does", "he", "have", "a", "beard?"] },
            { prompt: "彼には口ひげがあります。", target: "He has a mustache.", words: ["He", "has", "a", "mustache."] },
            { prompt: "彼は茶色い目をしています。", target: "He has brown eyes.", words: ["He", "has", "brown", "eyes."] }
        ],
        dropdownGames: [
            { before: "My sister", options: ["has", "have", "is"], answer: "has", after: " very long hair." },
            { before: "What does your brother", options: ["look", "looks", "looking"], answer: "look", after: " like?" },
            { before: "They", options: ["have", "has", "are"], answer: "have", after: " beautiful green eyes." },
            { before: "He", options: ["is", "has", "does"], answer: "is", after: " very tall and thin." },
            { before: "Does your father", options: ["have", "has", "is"], answer: "have", after: " a mustache?" }
        ],
        roleplay: {
            a: "Ask your partner what their best friend looks like. Ask about their hair and eyes. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに、彼らの親友がどんな外見か尋ねてください。髪と目について尋ねてください。)</span>",
            b: "Answer your partner. Describe your best friend using 'is' for height, and 'has' for hair and eyes. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに答えてください。身長には『is』を、髪と目には『has』を使って親友の外見を説明してください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Beautiful", jpn: "美しい", exEng: "She is beautiful.", exJpn: "彼女は美しいです。" },
                { eng: "Handsome", jpn: "ハンサムな", exEng: "He is a handsome man.", exJpn: "彼はハンサムな男性です。" },
                { eng: "Cute", jpn: "かわいい", exEng: "The baby is cute.", exJpn: "その赤ちゃんはかわいいです。" },
                { eng: "Young", jpn: "若い", exEng: "They are very young.", exJpn: "彼らはとても若いです。" },
                { eng: "Old", jpn: "古い / 年をとった", exEng: "My grandfather is old.", exJpn: "私の祖父は年をとっています。" },
                { eng: "Face", jpn: "顔", exEng: "Wash your face.", exJpn: "顔を洗ってください。" },
                { eng: "Nose", jpn: "鼻", exEng: "He has a big nose.", exJpn: "彼は大きな鼻をしています。" },
                { eng: "Mouth", jpn: "口", exEng: "Open your mouth.", exJpn: "口を開けてください。" },
                { eng: "Ear", jpn: "耳", exEng: "My ears are cold.", exJpn: "私の耳は冷たいです。" },
                { eng: "Skin", jpn: "肌", exEng: "Her skin is soft.", exJpn: "彼女の肌は柔らかいです。" },
                { eng: "Pale", jpn: "青白い / 色白の", exEng: "You look pale.", exJpn: "あなたは青白く見えます。" },
                { eng: "Dark", jpn: "暗い / 色黒の", exEng: "He has dark hair.", exJpn: "彼は暗い色の髪をしています。" },
                { eng: "Bald", jpn: "はげた", exEng: "My uncle is bald.", exJpn: "私の叔父ははげています。" },
                { eng: "Smile", jpn: "笑顔", exEng: "She has a nice smile.", exJpn: "彼女は素敵な笑顔をしています。" }
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
                { speaker: "B", eng: "Does she have blue eyes?", jpn: "彼女は青い目をしていますか？" },
                { speaker: "A", eng: "No, she doesn't. She has beautiful green eyes.", jpn: "いいえ、違います。美しい緑色の目をしています。" }
            ],
            writingTask: {
                promptEng: "Write three sentences describing the appearance of a friend or family member. Use 'is' (for height/general looks) and 'has' (for hair, eyes, etc.).",
                promptJpn: "友人や家族の外見を説明する文を3つ書いてください。身長や全体的な外見には『is』を、髪や目などには『has』を使用してください。"
            }
        }
    },
  {
        "id": 12,
        "title": "Lesson 12: How to talk about important dates",
        "goal": "Talk about birthdays, meetings, and important events using days of the week and ordinal numbers (1st, 2nd, 3rd...). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(曜日と序数（1st, 2nd, 3rd...）を使って、誕生日、会議、重要なイベントについて話す。)</span>",
        "vocab": [
            { "eng": "First", "jpn": "1日 / 1番目の", "exEng": "It is the first of May.", "exJpn": "5月の1日です。" },
            { "eng": "Second", "jpn": "2日 / 2番目の", "exEng": "Take the second door.", "exJpn": "2番目のドアを入ってください。" },
            { "eng": "Third", "jpn": "3日 / 3番目の", "exEng": "My birthday is on the third.", "exJpn": "私の誕生日は3日です。" },
            { "eng": "Fourth", "jpn": "4日 / 4番目の", "exEng": "The meeting is on the fourth.", "exJpn": "会議は4日です。" },
            { "eng": "Birthday", "jpn": "誕生日", "exEng": "Happy birthday!", "exJpn": "誕生日おめでとう！" },
            { "eng": "Date", "jpn": "日付", "exEng": "What is the date?", "exJpn": "日付は何ですか？" },
            { "eng": "Monday", "jpn": "月曜日", "exEng": "I work on Monday.", "exJpn": "私は月曜日に働きます。" },
            { "eng": "Tuesday", "jpn": "火曜日", "exEng": "See you on Tuesday.", "exJpn": "火曜日に会いましょう。" },
            { "eng": "Wednesday", "jpn": "水曜日", "exEng": "We meet on Wednesday.", "exJpn": "私たちは水曜日に会います。" },
            { "eng": "Thursday", "jpn": "木曜日", "exEng": "The test is on Thursday.", "exJpn": "テストは木曜日です。" },
            { "eng": "Friday", "jpn": "金曜日", "exEng": "I love Friday.", "exJpn": "私は金曜日が大好きです。" },
            { "eng": "Saturday", "jpn": "土曜日", "exEng": "Let's play on Saturday.", "exJpn": "土曜日に遊びましょう。" },
            { "eng": "Sunday", "jpn": "日曜日", "exEng": "I rest on Sunday.", "exJpn": "私は日曜日に休みます。" },
            { "eng": "Important", "jpn": "重要な / 大切な", "exEng": "This is very important.", "exJpn": "これはとても重要です。" }
        ],
        "dialogue": [
            { "speaker": "A", "eng": "<span class='swappable'>Are you free</span> <i class='grammar-target'>on the fourth</i>?", "jpn": "4日は暇ですか？" },
            { "speaker": "B", "eng": "No, <span class='swappable'>I am busy.</span> How about <i class='grammar-target'>the fifth</i>?", "jpn": "いいえ、忙しいです。5日はどうですか？" },
            { "speaker": "A", "eng": "I work <i class='grammar-target'>on the fifth</i>. Are you free <i class='grammar-target'>on the sixth</i>?", "jpn": "5日は仕事です。6日は暇ですか？" },
            { "speaker": "B", "eng": "I have a meeting <i class='grammar-target'>on the sixth</i>. What about <i class='grammar-target'>the seventh</i>?", "jpn": "6日は会議があります。7日はどうですか？" },
            { "speaker": "A", "eng": "Yes, I am free <i class='grammar-target'>on the seventh</i>!", "jpn": "はい、7日は暇です！" },
            { "speaker": "B", "eng": "Great! Let's have lunch together.", "jpn": "素晴らしい！一緒に昼ごはんを食べましょう。" }
        ],
        "dialogueStructure": [
            "Ask about free time (Day 1) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(空いている日を尋ねる - 1日目)</span>",
            "> Decline + Ask about free time (Day 2) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(断る ＋ 空いている日を尋ねる - 2日目)</span>",
            "Decline + Ask about free time (Day 3) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(断る ＋ 空いている日を尋ねる - 3日目)</span>",
            "> Decline + Ask about free time (Day 4) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(断る ＋ 空いている日を尋ねる - 4日目)</span>",
            "Accept (Free on Day 4) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(承諾する - 4日目は暇である)</span>",
            "> Make a plan together <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(一緒に予定を立てる)</span>"
        ],
        "expressions": [
            { 
                "category": "1. Asking about plans (予定を尋ねる)", 
                "options": [
                    { "eng": "Are you doing anything special?", "jpn": "何か特別なことをしますか？" }, 
                    { "eng": "Are you free on Friday?", "jpn": "金曜日は暇ですか？" }, 
                    { "eng": "Do you have any plans?", "jpn": "何か予定はありますか？" }
                ] 
            },
            { 
                "category": "2. Saying you are busy (「忙しい」と言うこと)", 
                "options": [
                    { "eng": "I already have plans.", "jpn": "もう予定が入っています。" }, 
                    { "eng": "That day is not good.", "jpn": "その日は都合が悪いです。" }, 
                    { "eng": "I have work.", "jpn": "仕事があります。" }
                ] 
            }
        ],
        "grammar": {
            "point": "Ordinal Numbers and Days of the Week - 序数と曜日",
            "explanation": "When we talk about dates in English, we use <strong>ordinal numbers</strong> (first, second, third, fourth...), not cardinal numbers (one, two, three). We use the preposition <strong>on</strong> before days of the week and specific dates.<br>• <strong>Days:</strong> <em>on</em> Monday, <em>on</em> Friday<br>• <strong>Dates:</strong> <em>on</em> the first, <em>on</em> the second of May <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（英語で日付（〜日）を言う時は、one, two, three などの「基数（数を数える言葉）」ではなく、first, second, third などの「序数（順序を表す言葉）」を使います。「5月1日」なら「the first of May」または「May first」となります。「〜曜日に」や「〜日に」と、特定の日にちを指定して予定を話す時には、必ず前に前置詞の <strong>on</strong> を付けます（例：on Monday、on the second）。月だけの時は in May となりますが、日付が入ると on になる点に注意しましょう。）</span>",
            "inDialogue": "<strong>Usage in Dialogue:</strong> Notice the use of ordinal numbers for the date: 'on <u>the fourth</u>' and 'on <u>the sixth</u>'. Also notice the preposition 'on' before the dates. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：日付を表す序数の使い方に注目してください：『on <u>the fourth</u>』『on <u>the sixth</u>』。また、日付の前の前置詞『on』にも注目してください。)</span>",
            "examples": [
                { "eng": "The meeting is on Wednesday.", "jpn": "会議は水曜日にあります。" },
                { "eng": "Her birthday is the third of November.", "jpn": "彼女の誕生日は11月3日です。" },
                { "eng": "I will see you on the fifth.", "jpn": "5日にお会いしましょう。" }
            ]
        },
        "grammarPracticeExample": { 
            "prompt": "The meeting / be / Monday 9", 
            "target": "The meeting is on Monday the 9th." 
        },
        "grammarPractice": [
            { "prompt": "My birthday / be / 3" },
            { "prompt": "The party / be / Saturday 12" },
            { "prompt": "The test / be / 4" },
            { "prompt": "I / need to work / 7" },
            { "prompt": "Let's / meet / 28 October" }
        ],
        "clickingGames": [
            { "prompt": "今日は何日ですか？", "target": "What is the date today?", "words": ["What", "is", "the", "date", "today?"] },
            { "prompt": "私の誕生日は2日です。", "target": "My birthday is on the second.", "words": ["My", "birthday", "is", "on", "the", "second."] },
            { "prompt": "最初の会議は月曜日にあります。", "target": "The first meeting is on Monday.", "words": ["The", "first", "meeting", "is", "on", "Monday."] },
            { "prompt": "3日にお会いしましょう。", "target": "I will see you on the third.", "words": ["I", "will", "see", "you", "on", "the", "third."] },
            { "prompt": "4日は暇ですか？", "target": "Are you free on the fourth?", "words": ["Are", "you", "free", "on", "the", "fourth?"] }
        ],
        "dropdownGames": [
            { "before": "The meeting is", "options": ["on", "in", "at"], "answer": "on", "after": " Friday morning." },
            { "before": "My birthday is", "options": ["on", "the", "in"], "answer": "the", "after": " fourth of July." },
            { "before": "Today is the", "options": ["two", "second", "three"], "answer": "second", "after": " of the month." },
            { "before": "Are you free", "options": ["on", "in", "at"], "answer": "on", "after": " Sunday?" },
            { "before": "She won", "options": ["one", "first", "once"], "answer": "first", "after": " prize in the contest." }
        ],
        "roleplay": {
            "a": "Ask your partner if they are free on the 10th. If they are busy, ask about the 11th. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに10日が暇かどうか尋ねてください。もし忙しければ、11日について尋ねてください。)</span>",
            "b": "Tell your partner you are busy on the 10th, but you are free on the 11th. Make a plan together! <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに10日は忙しいが、11日は暇だと伝えてください。一緒に予定を立てましょう！)</span>"
        },
        "homework": {
            "vocab": [
                { "eng": "January", "jpn": "1月", "exEng": "It is cold in January.", "exJpn": "1月は寒いです。" },
                { "eng": "February", "jpn": "2月", "exEng": "Valentine's Day is in February.", "exJpn": "バレンタインデーは2月にあります。" },
                { "eng": "March", "jpn": "3月", "exEng": "Spring starts in March.", "exJpn": "春は3月に始まります。" },
                { "eng": "April", "jpn": "4月", "exEng": "School starts in April.", "exJpn": "学校は4月に始まります。" },
                { "eng": "May", "jpn": "5月", "exEng": "We have holidays in May.", "exJpn": "5月には休日があります。" },
                { "eng": "June", "jpn": "6月", "exEng": "It rains a lot in June.", "exJpn": "6月は雨がたくさん降ります。" },
                { "eng": "July", "jpn": "7月", "exEng": "July is very hot.", "exJpn": "7月はとても暑いです。" },
                { "eng": "August", "jpn": "8月", "exEng": "We travel in August.", "exJpn": "私たちは8月に旅行します。" },
                { "eng": "September", "jpn": "9月", "exEng": "September is cool.", "exJpn": "9月は涼しいです。" },
                { "eng": "October", "jpn": "10月", "exEng": "Halloween is in October.", "exJpn": "ハロウィンは10月にあります。" },
                { "eng": "November", "jpn": "11月", "exEng": "My birthday is in November.", "exJpn": "私の誕生日は11月です。" },
                { "eng": "December", "jpn": "12月", "exEng": "Christmas is in December.", "exJpn": "クリスマスは12月にあります。" },
                { "eng": "Month", "jpn": "月", "exEng": "This is a busy month.", "exJpn": "今月は忙しい月です。" },
                { "eng": "Year", "jpn": "年", "exEng": "Happy New Year!", "exJpn": "あけましておめでとう！" }
            ],
            "reading1": {
                "title": "Task 2: Reading (A Busy Month)",
                "instruction": "Read the diary entry about important dates in October.",
                "eng": "<strong>A Busy October</strong><br><br>October is a very busy month for my family. My mother's birthday is on the third of October. We usually have a big dinner for her. Then, my sister has an important school test on the twelfth. She studies every day. My favorite day is Halloween. It is always on the thirty-first of October. This year, it is on a Tuesday, but I am still going to a fun party with my friends. I love the month of October!",
                "jpn": "<strong>忙しい10月</strong><br><br>10月は私の家族にとってとても忙しい月です。母の誕生日は10月3日です。私たちはいつも彼女のために豪華な夕食をとります。それから、姉（妹）は12日に重要な学校のテストがあります。彼女は毎日勉強しています。私が一番好きな日はハロウィンです。それはいつも10月31日です。今年は火曜日ですが、それでも友達と楽しいパーティーに行く予定です。私は10月という月が大好きです！"
            },
            "expandedDialogue": [
                { "speaker": "A", "eng": "Look at the calendar. We have a lot of meetings next week.", "jpn": "カレンダーを見てください。来週は会議がたくさんありますね。" },
                { "speaker": "B", "eng": "Really? When is the first meeting?", "jpn": "本当ですか？最初の会議はいつですか？" },
                { "speaker": "A", "eng": "The first meeting is on Monday, the fourth of September.", "jpn": "最初の会議は9月4日の月曜日です。" },
                { "speaker": "B", "eng": "Okay. And what about the project deadline?", "jpn": "わかりました。プロジェクトの締め切りはどうですか？" },
                { "speaker": "A", "eng": "The deadline is on Wednesday the sixth. We must finish by then.", "jpn": "締め切りは6日の水曜日です。それまでに終わらせなければなりません。" }
            ],
            "writingTask": {
                "promptEng": "Write three sentences about important dates in your life. Use days of the week and ordinal numbers (first, second, third, etc.).",
                "promptJpn": "あなたの人生における重要な日付について、3つの文を書いてください。曜日と序数（first, second, thirdなど）を使用してください。"
            }
        }
    },
{
    "id": 13,
    "title": "Lesson 13: How to talk about the weather",
    "goal": "Talk about the weather in different locations over the phone using simple adjectives. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(簡単な形容詞を使って、電話でさまざまな場所の天気について話す。)</span>",
    "vocab": [
        { "eng": "Weather", "jpn": "天気", "exEng": "The weather is good.", "exJpn": "天気が良いです。" },
        { "eng": "Sunny", "jpn": "晴れ / 晴れている", "exEng": "It is sunny today.", "exJpn": "今日は晴れています。" },
        { "eng": "Rainy", "jpn": "雨 / 雨が降っている", "exEng": "It is a rainy day.", "exJpn": "雨の日です。" },
        { "eng": "Cloudy", "jpn": "曇り / 曇っている", "exEng": "The sky is cloudy.", "exJpn": "空は曇っています。" },
        { "eng": "Snowy", "jpn": "雪 / 雪が降っている", "exEng": "It is cold and snowy.", "exJpn": "寒くて雪が降っています。" },
        { "eng": "Hot", "jpn": "暑い", "exEng": "Summer is very hot.", "exJpn": "夏はとても暑いです。" },
        { "eng": "Cold", "jpn": "寒い", "exEng": "Winter is cold.", "exJpn": "冬は寒いです。" },
        { "eng": "Warm", "jpn": "暖かい", "exEng": "Spring is warm.", "exJpn": "春は暖かいです。" },
        { "eng": "Cool", "jpn": "涼しい", "exEng": "Fall is cool.", "exJpn": "秋は涼しいです。" },
        { "eng": "Rain", "jpn": "雨が降る / 雨", "exEng": "It will rain all day.", "exJpn": "一日中雨が降る予定です。" },
        { "eng": "There", "jpn": "そこに / そちらでは", "exEng": "How is the weather there?", "exJpn": "そちらの天気はどうですか？" },
        { "eng": "Jealous", "jpn": "うらやましい", "exEng": "I am jealous!", "exJpn": "うらやましいです！" },
        { "eng": "All day", "jpn": "一日中", "exEng": "I work all day.", "exJpn": "私は一日中働きます。" },
        { "eng": "Today", "jpn": "今日", "exEng": "Today is Monday.", "exJpn": "今日は月曜日です。" }
    ],
    "dialogue": [
        { "speaker": "A", "eng": "Hello! <span class='swappable'>What's the weather like there?</span>", "jpn": "もしもし！そちらの天気はどうですか？" },
        { "speaker": "B", "eng": "It is <i class='grammar-target'>cold and rainy</i>.", "jpn": "寒くて雨が降っています。" },
        { "speaker": "A", "eng": "<span class='swappable'>Oh no.</span>", "jpn": "大変ですね。" },
        { "speaker": "B", "eng": "Yeah, it is going to rain all day. How about you? How's the weather there?</span>", "jpn": "ええ、一日中雨が降る予定です。あなたはどうですか？そちらの天気はどうですか？" },
        { "speaker": "A", "eng": "It is <i class='grammar-target'>warm and sunny</i>.", "jpn": "暖かくて晴れています。" },
        { "speaker": "B", "eng": "I'm jealous!", "jpn": "うらやましいです！" }
    ],
    "dialogueStructure": [
        "Greet + Ask about the weather <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(挨拶する ＋ 天気を尋ねる)</span>",
        "> Describe the weather <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(天気を説明する)</span>",
        "React to the bad news <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(悪い知らせに反応する)</span>",
        "> Add detail + Ask about their weather <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(詳細を加える ＋ 相手の場所の天気を尋ねる)</span>",
        "Describe the weather <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(天気を説明する)</span>",
        "> React to the good news <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(良い知らせに反応する)</span>"
    ],
    "expressions": [
        { 
            "category": "1. Asking about the weather (天気を尋ねる)", 
            "options": [
                { "eng": "What's the forecast for today?", "jpn": "今日の天気予報はどうなっていますか？" }, 
                { "eng": "How is the weather there?", "jpn": "そちらの天気はどうですか？" }, 
                { "eng": "How's it looking out there?", "jpn": "外の天気はどうですか" }
            ] 
      
        },
        { 
            "category": "2. Reacting to bad news(悪いニュースへの対応)", 
            "options": [
                { "eng": "That's too bad.", "jpn": "それは残念ですね。" }, 
                { "eng": "That sucks.", "jpn": "それは最悪ですね。" }, 
                { "eng": "That doesn't sound fun.", "jpn": "それは憂鬱ですね。" }
            ] 
        }
    ],
    "grammar": {
        "point": "Asking and answering about the weather - 天気についての質問と答え方",
        "explanation": "When we ask about the weather, we usually say <strong>\"What is the weather like?\"</strong> or <strong>\"How is the weather?\"</strong> To answer, we always use the pronoun <strong>\"It\"</strong> as the subject (It is sunny, It is cold). We do not say \"The weather is sunny\" in everyday conversation.<br>• <strong>Question:</strong> What's the weather like? / How's the weather?<br>• <strong>Answer:</strong> It is + [adjective]. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（天気について尋ねる時は「What is the weather like?」または「How is the weather?」と言います。答える時は、必ず主語に「It」を使います（例：It is sunny. / It is cold.）。日常会話では「The weather is sunny.」と言うよりも「It is...」と言うのが自然です。形容詞（hot, cold, sunny, rainy など）を組み合わせて表現しましょう。）</span>",
        "inDialogue": "<strong>Usage in Dialogue:</strong> Notice how speaker A asks '<u>What's the weather like</u> there?' and B answers with '<u>It is</u> cold and rainy.' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：Aが『<u>What's the weather like</u> there?』と尋ね、Bが『<u>It is</u> cold and rainy.』と答えている点に注目してください。)</span>",
        "examples": [
            { "eng": "How is the weather today?", "jpn": "今日の天気はどうですか？" },
            { "eng": "It is very hot and sunny.", "jpn": "とても暑くて晴れています。" },
            { "eng": "It is cloudy in London.", "jpn": "ロンドンは曇っています。" }
        ]
    },
    "grammarPracticeExample": { 
        "prompt": "Snowy", 
        "target": "It's snowy." 
    },
    "grammarPractice": [
        { "prompt": "Windy" },
        { "prompt": "Warm and sunny" },
        { "prompt": "Going to rain" },
        { "prompt": "A little cloudy" },
        { "prompt": "Rainy" }
    ],
    "clickingGames": [
        { "prompt": "そちらの天気はどうですか？", "target": "What is the weather like there?", "words": ["What", "is", "the", "weather", "like", "there?"] },
        { "prompt": "寒くて雨が降っています。", "target": "It is cold and rainy.", "words": ["It", "is", "cold", "and", "rainy."] },
        { "prompt": "一日中雨が降る予定です。", "target": "It is going to rain all day.", "words": ["It", "is", "going", "to", "rain", "all", "day."] },
        { "prompt": "暖かくて晴れています。", "target": "It is warm and sunny.", "words": ["It", "is", "warm", "and", "sunny."] },
        { "prompt": "うらやましいです！", "target": "I am jealous!", "words": ["I", "am", "jealous!"] }
    ],
    "dropdownGames": [
        { "before": "What is the weather", "options": ["like", "how", "love"], "answer": "like", "after": " today?" },
        { "before": "", "options": ["It", "He", "That"], "answer": "It", "after": " is very hot and sunny." },
        { "before": "How", "options": ["is", "are", "do"], "answer": "is", "after": " the weather there?" },
        { "before": "It is going to", "options": ["rain", "rainy", "raining"], "answer": "rain", "after": " all day." },
        { "before": "I am so", "options": ["jealous", "weather", "sunny"], "answer": "jealous", "after": " of your warm weather!" }
    ],
    "roleplay": {
        "a": "You are on the phone with your partner. Ask them what the weather is like in their city. When they tell you it is bad, react to the news. Tell them about your weather. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたはパートナーと電話をしています。パートナーの住んでいる街の天気を尋ねてください。天気が悪いと聞いたら、反応を示してください。自分の場所の天気も伝えてください。)</span>",
        "b": "You are on the phone. Tell your partner it is cold and rainy in your city, and it will rain all day. Ask them about their weather. React to their good news! <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたは電話をしています。自分の街は寒くて雨が降っており、一日中雨だと伝えてください。相手の天気を尋ね、相手の良い知らせに反応してください！)</span>"
    },
    "homework": {
        "vocab": [
  { "eng": "Spring", "jpn": "春", "exEng": "Spring is beautiful.", "exJpn": "春は美しいです。" },
  { "eng": "Summer", "jpn": "夏", "exEng": "Summer is my favorite season.", "exJpn": "夏は私の好きな季節です。" },
  { "eng": "Fall / Autumn", "jpn": "秋", "exEng": "Leaves change color in fall.", "exJpn": "秋には葉の色が変わります。" },
  { "eng": "Winter", "jpn": "冬", "exEng": "I play in the snow in winter.", "exJpn": "冬は雪で遊びます。" },
  { "eng": "Season", "jpn": "季節", "exEng": "What is your favorite season?", "exJpn": "好きな季節は何ですか？" },
  { "eng": "Umbrella", "jpn": "傘", "exEng": "I need an umbrella.", "exJpn": "傘が必要です。" },
  { "eng": "Coat", "jpn": "コート", "exEng": "Put on a heavy coat.", "exJpn": "厚手のコートを着てください。" },
  { "eng": "Beach", "jpn": "ビーチ / 海辺", "exEng": "Let's go to the beach.", "exJpn": "ビーチに行きましょう。" },
  { "eng": "Windy", "jpn": "風が強い", "exEng": "It is very windy outside.", "exJpn": "外はとても風が強いです。" },
  { "eng": "Storm", "jpn": "嵐", "exEng": "A big storm is coming.", "exJpn": "大きな嵐が来ています。" },
  { "eng": "Foggy", "jpn": "霧が濃い / 霧がかかった", "exEng": "Be careful, the road is foggy.", "exJpn": "道に霧がかかっているので気をつけてください。" },
  { "eng": "Humid", "jpn": "蒸し暑い / 湿度が高い", "exEng": "August is very humid here.", "exJpn": "ここの8月はとても蒸し暑いです。" },
  { "eng": "Temperature", "jpn": "気温", "exEng": "The temperature is dropping.", "exJpn": "気温が下がっています。" },
  { "eng": "Rainbow", "jpn": "虹", "exEng": "I saw a beautiful rainbow after the shower.", "exJpn": "にわか雨の後に美しい虹を見ました。" }
],
        "reading1": {
            "title": "Task 2: Reading (A Postcard from Hawaii)",
            "instruction": "Read the message about the weather on a vacation.",
            "eng": "<strong>A Message from Hawaii</strong><br><br>Hi Sarah! How are you? How is the weather in London today? Is it cold and rainy? I am on vacation in Hawaii right now. The weather here is amazing. It is very hot and sunny every day. I go to the beach in the morning and swim in the ocean. I do not need a coat or an umbrella! I hope you are having a good week. See you soon!",
            "jpn": "<strong>ハワイからのメッセージ</strong><br><br>サラ、こんにちは！元気ですか？今日のロンドンの天気はどうですか？寒くて雨が降っていますか？私は今、ハワイで休暇を過ごしています。ここの天気は素晴らしいです。毎日とても暑くて晴れています。朝はビーチに行き、海で泳ぎます。コートも傘も必要ありません！良い一週間を過ごしていることを願っています。またすぐにお会いしましょう！"
        },
        "expandedDialogue": [
            { "speaker": "A", "eng": "Hi! Are you ready for our trip tomorrow?", "jpn": "こんにちは！明日の旅行の準備はできましたか？" },
            { "speaker": "B", "eng": "Yes, I am. But I looked at the weather.", "jpn": "はい、できました。でも、天気予報を見ました。" },
            { "speaker": "A", "eng": "Oh? What's the weather like there tomorrow?", "jpn": "あら？明日のそこの天気はどうですか？" },
            { "speaker": "B", "eng": "It is going to be very cold and snowy.", "jpn": "とても寒くて雪が降る予定です。" },
            { "speaker": "A", "eng": "Oh no! Make sure to bring a warm coat.", "jpn": "大変！必ず暖かいコートを持ってきてくださいね。" }
        ],
        "writingTask": {
            "promptEng": "Write three sentences describing the weather in your city today. Is it hot, cold, sunny, or rainy? What do you wear in this weather?",
            "promptJpn": "今日のあなたの街の天気を説明する文を3つ書いてください。暑いですか、寒いですか、晴れていますか、それとも雨ですか？この天気では何を着ますか？"
        }
    }
},
    {
        id: 14,
        title: "Lesson 14: How to talk about your routine",
        goal: "Talk about your daily and weekly schedules using prepositions of time (in, on, at) and 'every'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(時間を表す前置詞（in, on, at）や『every』を使って、毎日・毎週のスケジュールについて話す。)</span>",
        vocab: [
            { eng: "Morning", jpn: "朝 / 午前", exEng: "I run in the morning.", exJpn: "私は朝に走ります。" },
            { eng: "Afternoon", jpn: "午後", exEng: "We meet in the afternoon.", exJpn: "私たちは午後に会います。" },
            { eng: "Evening", jpn: "夕方 / 晩", exEng: "I relax in the evening.", exJpn: "私は夕方にリラックスします。" },
            { eng: "Night", jpn: "夜", exEng: "I sleep at night.", exJpn: "私は夜に寝ます。" },
            { eng: "Weekday", jpn: "平日", exEng: "I work on weekdays.", exJpn: "私は平日に働きます。" },
            { eng: "Weekend", jpn: "週末", exEng: "I play on the weekend.", exJpn: "私は週末に遊びます。" },
            { eng: "Wake up", jpn: "目を覚ます / 起きる", exEng: "I wake up early.", exJpn: "私は早く起きます。" },
            { eng: "Go to bed", jpn: "寝る / ベッドに入る", exEng: "I go to bed late.", exJpn: "私は遅く寝ます。" },
            { eng: "Start", jpn: "始める / 始まる", exEng: "The class starts now.", exJpn: "授業が今始まります。" },
            { eng: "Finish", jpn: "終える / 終わる", exEng: "I finish work at 5.", exJpn: "私は5時に仕事を終えます。" },
            { eng: "Relax", jpn: "リラックスする", exEng: "It is time to relax.", exJpn: "リラックスする時間です。" },
            { eng: "Every", jpn: "毎〜 / すべての", exEng: "I read every day.", exJpn: "私は毎日読みます。" },
            { eng: "Late", jpn: "遅く", exEng: "Don't be late.", exJpn: "遅れないでください。" },
            { eng: "Early", jpn: "早く", exEng: "I woke up early.", exJpn: "私は早く起きました。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>What time do you wake up in the morning?</span>", jpn: "朝は何時に起きますか？" },
            { speaker: "B", eng: "I wake up <i class='grammar-target'>at 6:30 AM on weekdays</i>.", jpn: "平日は午前6時30分に起きます。" },
            { speaker: "A", eng: "That is early! <span class='swappable'>Do you work on the weekend?</span>", jpn: "早いですね！週末は働きますか？" },
            { speaker: "B", eng: "No, I don't work <i class='grammar-target'>on Saturdays</i> and Sundays.", jpn: "いいえ、土曜日と日曜日は働きません。" },
            { speaker: "A", eng: "That is good. I usually relax <i class='grammar-target'>in the evening</i>.", jpn: "それはいいですね。私はたいてい夕方にリラックスします。" },
            { speaker: "B", eng: "Me too. I read a book <i class='grammar-target'>every night</i> before bed.", jpn: "私もです。毎晩寝る前に本を読みます。" }
        ],
        dialogueStructure: [
            "Ask about daily times <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(日々の時間について尋ねる)</span>",
            "> State time using 'at' and 'on' <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(『at』や『on』を使って時間を答える)</span>",
            "React + Ask about weekend routines <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 週末の習慣について尋ねる)</span>",
            "> Answer using 'on' <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(『on』を使って答える)</span>",
            "React + State routine using 'in' <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 『in』を使って習慣を伝える)</span>",
            "> Agree + State routine using 'every' <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 『every』を使って習慣を伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about daily times (日常の時間を尋ねる)", 
                options: [
                    { eng: "What time do you wake up?", jpn: "何時に起きますか？" }, 
                    { eng: "When do you start work?", jpn: "いつ仕事を始めますか？" }, 
                    { eng: "What time do you go to bed?", jpn: "何時に寝ますか？" }
                ] 
            },
            { 
                category: "2. Asking about weekend routines (週末の習慣について尋ねる)", 
                options: [
                    { eng: "Do you work on the weekend?", jpn: "週末は働きますか？" }, 
                    { eng: "What do you do on Sundays?", jpn: "日曜日は何をしますか？" }, 
                    { eng: "Are you busy on the weekend?", jpn: "週末は忙しいですか？" }
                ] 
            }
        ],
        grammar: {
            point: "Prepositions of Time (in, on, at) - 時間を表す前置詞",
            explanation: "We use different prepositions for different types of time:<br>• <strong>at</strong> + exact time / night (at 7:00, at night)<br>• <strong>on</strong> + days / dates (on Monday, on the weekend)<br>• <strong>in</strong> + parts of the day / months (in the morning, in May)<br><em>*Note: When we use 'every' (every morning, every Sunday), we do NOT use in/on/at.</em> <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（時間や時期を表す際、英語では３つの前置詞（at, on, in）をスケールの大きさによって使い分けます。<br>・<strong>at</strong>：一番ピンポイントな狭い時間を指します。「時計の時刻（at 7:00）」や、特定の瞬間である「夜（at night）」に使います。<br>・<strong>on</strong>：1日（24時間）単位のスケールに使います。「曜日（on Monday）」や「特定の日にち（on May 5th）」、または「週末（on the weekend）」に使います。<br>・<strong>in</strong>：もっと長い期間のスケールに使います。「月（in May）」や「季節（in summer）」、または1日の中で幅のある時間帯（in the morning / in the afternoon / in the evening）に使います。<br>※「every（毎〜）」を使う時（every morning, every Sundayなど）は、これらの前置詞は一切不要になるので注意しましょう。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the different time words: '<u>in the</u> morning', '<u>at</u> 6:30 AM', '<u>on</u> weekdays', and '<u>every</u> night'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>in the</u> morning』『<u>at</u> 6:30 AM』『<u>on</u> weekdays』『<u>every</u> night』といった異なる時間を表す言葉に注目してください。)</span>",
            examples: [
                { eng: "I have a meeting at 2:00 PM.", jpn: "午後2時に会議があります。" },
                { eng: "She goes to the gym on Wednesdays.", jpn: "彼女は水曜日にジムに行きます。" },
                { eng: "We drink tea in the afternoon.", jpn: "私たちは午後に紅茶を飲みます。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I wake up (6:00 AM)", 
            target: "I wake up at 6:00 AM." 
        },
        grammarPractice: [
            { prompt: "We play tennis (Sundays)" },
            { prompt: "I drink coffee (the morning)" },
            { prompt: "He goes to bed (midnight)" },
            { prompt: "She studies (every day)" },
            { prompt: "They relax (the evening)" }
        ],
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
            { before: "Do you work", options: ["on", "in", "at"], answer: "on", after: " the weekend?" }
        ],
        roleplay: {
            a: "Ask your partner what time they wake up in the morning, and ask what they do on the weekend. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに朝何時に起きるか尋ね、週末には何をするか尋ねてください。)</span>",
            b: "Answer the questions. Tell them your wake-up time using 'at', and tell them one thing you do on the weekend using 'on' or 'every'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(質問に答えてください。『at』を使って起きる時間を伝え、『on』や『every』を使って週末にすることを1つ伝えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Breakfast", jpn: "朝食", exEng: "I eat breakfast.", exJpn: "私は朝食を食べます。" },
                { eng: "Lunch", jpn: "昼食", exEng: "Let's have lunch.", exJpn: "昼食をとりましょう。" },
                { eng: "Dinner", jpn: "夕食", exEng: "Dinner is ready.", exJpn: "夕食の準備ができました。" },
                { eng: "Shower", jpn: "シャワー", exEng: "I take a shower.", exJpn: "私はシャワーを浴びます。" },
                { eng: "Exercise", jpn: "運動する", exEng: "I exercise every day.", exJpn: "私は毎日運動します。" },
                { eng: "Cook", jpn: "料理する", exEng: "She cooks well.", exJpn: "彼女は料理が上手です。" },
                { eng: "Clean", jpn: "掃除する", exEng: "Clean your room.", exJpn: "部屋を掃除してください。" },
                { eng: "Listen to music", jpn: "音楽を聴く", exEng: "I listen to music.", exJpn: "私は音楽を聴きます。" },
                { eng: "Usually", jpn: "たいてい", exEng: "I usually walk.", exJpn: "私はたいてい歩きます。" },
                { eng: "Before", jpn: "〜の前に", exEng: "Wash before eating.", exJpn: "食べる前に洗ってください。" },
		        { eng: "Wash", jpn: "洗う", exEng: "Wash your hands.", exJpn: "手を洗ってください。" },	
		        { eng: "Dry", jpn: "乾かす", exEng: "Dry the clothes.", exJpn: "服を乾かしてください。" },
                { eng: "After", jpn: "〜の後に", exEng: "Call me after work.", exJpn: "仕事の後に電話してください。" },
                { eng: "Until", jpn: "〜まで", exEng: "Wait until tomorrow.", exJpn: "明日まで待ってください。" }
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
                { speaker: "A", eng: "That is very healthy. What time do you eat breakfast?", jpn: "それはとても健康的ですね。朝食は何時に食べますか？" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your morning or weekend routine. Write three sentences using 'in', 'on', or 'at' (e.g., 'I wake up at 7:00 AM').",
                promptJpn: "あなたの朝または週末の習慣について短い文章を書いてください。『in』『on』『at』を使った文を3つ書いてください。"
            }
        }
    },
    {
        id: 15,
        title: "Lesson 15: How to talk about routines and frequency",
        goal: "Ask and answer questions about when and how often you do daily activities. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(いつ、どのくらいの頻度で日常の活動をするかについて質問し、答える。)</span>",
        vocab: [
            { eng: "Study", jpn: "勉強する", exEng: "I study English.", exJpn: "私は英語を勉強します。" },
            { eng: "Exercise", jpn: "運動する", exEng: "You need to exercise.", exJpn: "あなたは運動する必要があります。" },
            { eng: "Cook", jpn: "料理する", exEng: "I cook dinner.", exJpn: "私は夕食を作ります。" },
            { eng: "Read", jpn: "読む", exEng: "I read a book.", exJpn: "私は本を読みます。" },
            { eng: "Always", jpn: "いつも", exEng: "I always smile.", exJpn: "私はいつも笑っています。" },
            { eng: "Usually", jpn: "たいてい", exEng: "He usually wins.", exJpn: "彼はたいてい勝ちます。" },
            { eng: "Often", jpn: "よく", exEng: "I often run.", exJpn: "私はよく走ります。" },
            { eng: "Sometimes", jpn: "時々", exEng: "We sometimes meet.", exJpn: "私たちは時々会います。" },
            { eng: "Never", jpn: "決して〜ない", exEng: "I never quit.", exJpn: "私は決して諦めません。" },
            { eng: "Every", jpn: "毎〜 / すべての", exEng: "Every day is new.", exJpn: "毎日が新しいです。" },
            { eng: "Once", jpn: "1回", exEng: "I went there once.", exJpn: "私はそこに1度行きました。" },
            { eng: "Twice", jpn: "2回", exEng: "Read it twice.", exJpn: "それを2回読んでください。" },
            { eng: "Times", jpn: "〜回", exEng: "Three times a day.", exJpn: "1日に3回。" },
            { eng: "Week", jpn: "週", exEng: "Next week is busy.", exJpn: "来週は忙しいです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>When do you study English?</span>", jpn: "いつ英語を勉強しますか？" },
            { speaker: "B", eng: "I study English in the evening. <span class='swappable'>How often do you study?</span>", jpn: "夜に英語を勉強します。あなたはどのくらいの頻度で勉強しますか？" },
            { speaker: "A", eng: "I study <i class='grammar-target'>every day</i>. I love it.", jpn: "毎日勉強します。大好きなんです。" },
            { speaker: "B", eng: "Wow. I <i class='grammar-target'>usually</i> study on weekends. I also read English books <i class='grammar-target'>once a week</i>.", jpn: "うわあ。私はたいてい週末に勉強します。それから、週に1回英語の本を読みます。" }
        ],
        dialogueStructure: [
            "Ask when someone does something <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(いつアクションをするか尋ねる)</span>",
            "> State time + Ask about frequency <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(時間を答える ＋ 頻度を尋ねる)</span>",
            "State frequency + Comment <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(頻度を答える ＋ コメントする)</span>",
            "> React + State frequency using adverbs <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 副詞を使って頻度を伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking when someone does something (いつするか尋ねる)", 
                options: [
                    { eng: "When do you study English?", jpn: "いつ英語を勉強しますか？" }, 
                    { eng: "What time do you wake up?", jpn: "何時に起きますか？" }, 
                    { eng: "When do you exercise?", jpn: "いつ運動しますか？" }
                ] 
            },
            { 
                category: "2. Asking how often someone does something (頻度を尋ねる)", 
                options: [
                    { eng: "How often do you study?", jpn: "どのくらいの頻度で勉強しますか？" }, 
                    { eng: "How often do you exercise?", jpn: "どのくらいの頻度で運動しますか？" }, 
                    { eng: "How often do you cook?", jpn: "どのくらいの頻度で料理をしますか？" }
                ] 
            }
        ],
        grammar: {
            point: "Adverbs of Frequency - 頻度の副詞",
            explanation: "Indefinite frequency adverbs (always, usually, sometimes) are placed <strong>before</strong> the main verb. Definite frequency phrases (every day, once a week) are placed at the <strong>end</strong> of the sentence. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（どれくらいの頻度で何かを行うかを表現する言葉（頻度の副詞）は、その正確さによって文中の「置く場所」が変わります。<br>・<strong>漠然とした頻度（always, usually, often, sometimes, neverなど）：</strong> 一般動詞の<strong>前</strong>に置きます（例：I <u>usually</u> study.）。ただし、be動詞と一緒に使う場合はbe動詞の後ろになります。<br>・<strong>明確な頻度（every day, once a week, twice a monthなど）：</strong> 基本的に文の<strong>一番最後</strong>に置きます（例：I study <u>every day</u>. / I read <u>once a week</u>.）。この2つのルールの違いをしっかり覚えておきましょう。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the word placement: 'I <u>usually</u> study' vs 'I read English books <u>once a week</u>.' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『I <u>usually</u> study』と『read... <u>once a week</u>』の単語の配置に注目してください。)</span>",
            examples: [
                { eng: "I always drink coffee in the morning.", jpn: "私は朝、いつもコーヒーを飲みます。" },
                { eng: "She plays tennis twice a week.", jpn: "彼女は週に2回テニスをします。" },
                { eng: "He never eats breakfast.", jpn: "彼は決して朝食を食べません。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I play tennis (sometimes)", 
            target: "I sometimes play tennis." 
        },
        grammarPractice: [
            { prompt: "She goes to the gym (twice a week)" },
            { prompt: "We eat dinner at home (always)" },
            { prompt: "He watches TV (never)" },
            { prompt: "I visit my parents (once a month)" },
            { prompt: "They cook pasta (usually)" }
        ],
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
            { before: "I go to the gym", options: ["twice", "two", "always"], answer: "twice", after: " a week." }
        ],
        roleplay: {
            a: "You are talking to a coworker. Ask them when they exercise, and ask how often they go to the gym. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(同僚と話しています。いつ運動するか、そしてどのくらいの頻度でジムに行くか尋ねてください。)</span>",
            b: "You are a coworker. Tell them you exercise in the morning, say you go to the gym twice a week, and ask how often they cook. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(同僚役です。朝に運動すること、週に2回ジムに行くことを伝え、相手がどのくらいの頻度で料理をするか尋ねてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Clean", jpn: "掃除する", exEng: "I clean my room.", exJpn: "私は部屋を掃除します。" },
                { eng: "Wash", jpn: "洗う", exEng: "Wash your face.", exJpn: "顔を洗ってください。" },
                { eng: "Relax", jpn: "リラックスする", exEng: "I want to relax.", exJpn: "リラックスしたいです。" },
                { eng: "Commute", jpn: "通勤・通学する", exEng: "I commute by train.", exJpn: "私は電車で通勤します。" },
                { eng: "Arrive", jpn: "到着する", exEng: "The train arrived.", exJpn: "電車が到着しました。" },
                { eng: "Leave", jpn: "出発する / 去る", exEng: "Leave the room.", exJpn: "部屋から出てください。" },
                { eng: "Take a bath", jpn: "お風呂に入る", exEng: "I take a bath at night.", exJpn: "私は夜にお風呂に入ります。" },
                { eng: "Do laundry", jpn: "洗濯をする", exEng: "I do laundry on Sundays.", exJpn: "私は日曜日に洗濯をします。" },
                { eng: "Listen", jpn: "聴く", exEng: "Listen carefully.", exJpn: "注意深く聴いてください。" },
                { eng: "Watch", jpn: "見る", exEng: "Watch this video.", exJpn: "このビデオを見てください。" },
                { eng: "Play", jpn: "遊ぶ / 演奏する", exEng: "Play the music.", exJpn: "音楽をかけてください。" },
                { eng: "Sing", jpn: "歌う", exEng: "She sings a song.", exJpn: "彼女は歌を歌います。" },
                { eng: "Draw", jpn: "描く", exEng: "Draw a circle.", exJpn: "円を描いてください。" },
                { eng: "Paint", jpn: "絵の具で描く", exEng: "I paint pictures.", exJpn: "私は絵の具で絵を描きます。" }
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
                { speaker: "A", eng: "I love movies! I watch them every weekend.", jpn: "私は映画が大好き！毎週末見るわ。" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your habits. Include when you do your hobbies, and how often you do chores.",
                promptJpn: "あなたの習慣について短い文章を書いてください。いつ趣味をするか、そしてどのくらいの頻度で家事をするかを含めてください。"
            }
        }
    },
    {
        id: 16,
        title: "Lesson 16: How to point out places",
        goal: "Help someone move house by giving instructions on where to put things using 'here', 'there', 'over here', and 'over there'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『here』『there』『over here』『over there』を使って、物を置く場所を指示し、引っ越しを手伝う。)</span>",
        vocab: [
            { eng: "Here", jpn: "ここ / こちら", exEng: "Come here.", exJpn: "ここに来てください。" },
            { eng: "There", jpn: "あそこ / そこ", exEng: "Look there.", exJpn: "あそこを見てください。" },
            { eng: "Over here", jpn: "こっちに / ここに", exEng: "Put it over here.", exJpn: "こっちに置いてください。" },
            { eng: "Over there", jpn: "あっちに / あそこに", exEng: "The car is over there.", exJpn: "車はあそこにあります。" },
            { eng: "Move", jpn: "引っ越す / 動かす", exEng: "Don't move.", exJpn: "動かないでください。" },
            { eng: "Box", jpn: "箱", exEng: "This box is heavy.", exJpn: "この箱は重いです。" },
            { eng: "Furniture", jpn: "家具", exEng: "We bought new furniture.", exJpn: "私たちは新しい家具を買いました。" },
            { eng: "Heavy", jpn: "重い", exEng: "This bag is heavy.", exJpn: "このカバンは重いです。" },
            { eng: "Put", jpn: "置く", exEng: "Put it on the table.", exJpn: "それをテーブルの上に置いてください。" },
            { eng: "Leave", jpn: "置いておく / そのままにする", exEng: "Leave the key here.", exJpn: "鍵をここに置いておいてください。" },
            { eng: "Bring", jpn: "持ってくる", exEng: "Bring your book.", exJpn: "本を持ってきてください。" },
            { eng: "Living room", jpn: "リビング / 居間", exEng: "We are in the living room.", exJpn: "私たちはリビングにいます。" },
            { eng: "Kitchen", jpn: "キッチン / 台所", exEng: "I cook in the kitchen.", exJpn: "私はキッチンで料理をします。" },
            { eng: "Bedroom", jpn: "寝室", exEng: "My bedroom is small.", exJpn: "私の寝室は小さいです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "This box is very heavy. <span class='swappable'>Where should I put it?</span>", jpn: "この箱はとても重いです。どこに置けばいいですか？" },
            { speaker: "B", eng: "Please put it <i class='grammar-target'>over there</i>, in the living room.", jpn: "あそこの、リビングルームに置いてください。" },
            { speaker: "A", eng: "Okay. Where does this table go?", jpn: "わかりました。このテーブルはどこに置きますか？" },
            { speaker: "B", eng: "Ah, bring it <i class='grammar-target'>over here</i>, next to the window.", jpn: "ああ、こっちの窓の隣に持ってきてください。" },
            { speaker: "A", eng: "Got it. <span class='swappable'>Should I leave these bags here?</span>", jpn: "了解です。これらのカバンはここに置いておきましょうか？" },
            { speaker: "B", eng: "Yes, leave them <i class='grammar-target'>there</i>. Thank you for your help!", jpn: "はい、そこに置いておいてください。手伝ってくれてありがとう！" }
        ],
        dialogueStructure: [
            "State problem + Ask where to put something <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(問題を伝える ＋ どこに置くべきか尋ねる)</span>",
            "> Direct to a far location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(遠くの場所を指示する)</span>",
            "Acknowledge + Ask about another item <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了解する ＋ 別のアイテムについて尋ねる)</span>",
            "> Direct to a near location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(近くの場所を指示する)</span>",
            "Acknowledge + Ask for confirmation <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了解する ＋ 確認を求める)</span>",
            "> Confirm + Say thank you <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(確認する ＋ お礼を言う)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking where things go (物の置き場を尋ねる)", 
                options: [
                    { eng: "Where should I put it?", jpn: "どこに置けばいいですか？" }, 
                    { eng: "Where does this table go?", jpn: "このテーブルはどこに置きますか？" }, 
                    { eng: "Where do you want this?", jpn: "これはどこにして欲しいですか？" }
                ] 
            },
            { 
                category: "2. Asking for confirmation (確認を求める)", 
                options: [
                    { eng: "Should I leave these bags here?", jpn: "これらのカバンはここに置いておきましょうか？" }, 
                    { eng: "Is this okay?", jpn: "これでいいですか？" }, 
                    { eng: "Right here?", jpn: "ここで合っていますか？" }
                ] 
            }
        ],
        grammar: {
            point: "Place adverbs ('here', 'there', 'over here', 'over there') - 場所を表す副詞",
            explanation: "We use 'here' for places close to us and 'there' for places far from us. We add 'over' ('over here', 'over there') to emphasize the direction or to point to a very specific spot across a room. These words usually go at the VERY END of the sentence. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（『here（ここ）』と『there（あそこ・そこ）』は場所を表す副詞です。自分の手が届くような近い場所には『here』を、少し離れた場所には『there』を使います。さらにその前に『over』を付けて『over here（こっちに）』『over there（あっちに）』とすると、「あちらの方向に向かって」という空間的な動きや、部屋の向こう側にある特定のスポットを強調して指し示す表現になります。引っ越しの手伝いや物を配置する時に大変便利です。これらの言葉は、通常「動詞＋目的語」の後の、文の一番最後に置かれます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how the place adverbs come at the end of the action: 'Bring it <u>over here</u>' and 'Please put it <u>over there</u>.' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『Bring it <u>over here</u>』や『Please put it <u>over there</u>』のように、場所を表す言葉が動作の最後に来ることに注目してください。)</span>",
            examples: [
                { eng: "Put the heavy box over there.", jpn: "その重い箱はあそこに置いてください。" },
                { eng: "Come over here and look at this.", jpn: "こっちに来て、これを見てください。" },
                { eng: "Leave your shoes here.", jpn: "靴はここに置いておいてください。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "Please put the box (far point)", 
            target: "Please put the box over there." 
        },
        grammarPractice: [
            { prompt: "Bring the chair (near point)" },
            { prompt: "Leave your bags (near general)" },
            { prompt: "The table goes (far point)" },
            { prompt: "Come (near point) and help me." },
            { prompt: "Put the TV (far general)" }
        ],
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
            { before: "Put your coat", options: ["here", "hear", "there"], answer: "here", after: " on the bed." }
        ],
        roleplay: {
            a: "You are helping your friend move into a new house. You are carrying a heavy chair. Ask your friend where to put it, and ask if you should leave a box near the door. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(友達が新しい家に引っ越すのを手伝っています。重い椅子を運んでいます。どこに置けばいいか尋ね、ドアの近くに箱を置いていいか聞いてください。)</span>",
            b: "You are the friend. Tell them to put the chair 'over there' (point to a spot!), and tell them to bring the box 'over here'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(友達役です。椅子を『あそこ（over there）』に置くように伝え（場所を指さしてください！）、箱を『こっち（over here）』に持ってくるように伝えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Apartment", jpn: "アパート", exEng: "He lives in an apartment.", exJpn: "彼はアパートに住んでいます。" },
                { eng: "Stairs", jpn: "階段", exEng: "Take the stairs.", exJpn: "階段を使ってください。" },
                { eng: "Elevator", jpn: "エレベーター", exEng: "The elevator is broken.", exJpn: "エレベーターが壊れています。" },
                { eng: "Truck", jpn: "トラック", exEng: "The truck is outside.", exJpn: "トラックは外にあります。" },
                { eng: "Carry", jpn: "運ぶ", exEng: "Can you carry this?", exJpn: "これを運んでくれますか？" },
                { eng: "Drop", jpn: "落とす", exEng: "Don't drop the box.", exJpn: "箱を落とさないでください。" },
                { eng: "Careful", jpn: "気をつけて / 慎重な", exEng: "Be careful.", exJpn: "気をつけてください。" },
                { eng: "Break", jpn: "壊す / 割る", exEng: "Don't break the glass.", exJpn: "グラスを割らないでください。" },
                { eng: "Fragile", jpn: "壊れやすい", exEng: "This box is fragile.", exJpn: "この箱は壊れやすいです。" },
                { eng: "Corner", jpn: "角 / 隅", exEng: "Put it in the corner.", exJpn: "それを角に置いてください。" },
		        { eng: "Tape", jpn: "テープ", exEng: "I need some tape.", exJpn: "テープが必要です。" },	
		        { eng: "Scissors", jpn: "はさみ", exEng: "Where are the scissors?", exJpn: "はさみはどこですか？" },
                { eng: "Next to", jpn: "〜の隣に", exEng: "Stand next to me.", exJpn: "私の隣に立ってください。" },
                { eng: "Between", jpn: "〜の間に", exEng: "It is between the chairs.", exJpn: "それは椅子の間にあります。" }
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
                { speaker: "A", eng: "Got it. What about these books?", jpn: "わかった。この本はどうする？" }
            ],
            writingTask: {
                promptEng: "Imagine you are directing someone who is helping you move furniture. Write three sentences using 'here', 'there', 'over here', or 'over there' to tell them where to put a box, a chair, and a table.",
                promptJpn: "家具の移動を手伝ってくれている人に指示を出していると想像してください。『here』『there』『over here』または『over there』を使って、箱、椅子、テーブルをどこに置くかを伝える文を3つ書いてください。"
            }
        }
    },,{
        id: 17,
        title: "Lesson 17: How to say where things are",
        goal: "Ask where everyday items are and describe their exact location using simple prepositions (in, on, under, next to). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(単純な前置詞（in, on, under, next to）を使って、日常の品物がどこにあるかを尋ね、その場所を伝える。)</span>",
        vocab: [
            { eng: "In", jpn: "〜の中に", exEng: "The book is in my bag.", exJpn: "本は私のカバンの中にあります。" },
            { eng: "On", jpn: "〜の上に", exEng: "The cup is on the table.", exJpn: "カップはテーブルの上にあります。" },
            { eng: "Under", jpn: "〜の下に", exEng: "The cat is under the bed.", exJpn: "猫はベッドの下にいます。" },
            { eng: "Next to", jpn: "〜の隣に", exEng: "I sit next to him.", exJpn: "私は彼の隣に座ります。" },
            { eng: "Behind", jpn: "〜の後ろに", exEng: "Look behind the door.", exJpn: "ドアの後ろを見てください。" },
            { eng: "In front of", jpn: "〜の前に", exEng: "Please stand in front of me.", exJpn: "私の前に立ってください。" },
            { eng: "Find", jpn: "見つける", exEng: "I can't find my keys.", exJpn: "鍵が見つかりません。" },
            { eng: "Look", jpn: "見る / 探す", exEng: "Look in the drawer.", exJpn: "引き出しの中を探してください。" },
            { eng: "Keys", jpn: "鍵（複数）", exEng: "Where are my keys?", exJpn: "私の鍵はどこですか？" },
            { eng: "Phone", jpn: "携帯電話", exEng: "I have a new phone.", exJpn: "私は新しい携帯を持っています。" },
            { eng: "Wallet", jpn: "財布", exEng: "My wallet is empty.", exJpn: "私の財布は空です。" },
            { eng: "Table", jpn: "テーブル", exEng: "Put it on the table.", exJpn: "それをテーブルの上に置いてください。" },
            { eng: "Sofa", jpn: "ソファ", exEng: "Sit on the sofa.", exJpn: "ソファに座ってください。" },
            { eng: "Bag", jpn: "カバン / 袋", exEng: "This bag is heavy.", exJpn: "このカバンは重いです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "I can't find my phone. <span class='swappable'>Where <i class='grammar-target'>is</i> it?</span>", jpn: "携帯電話が見つかりません。どこにありますか？" },
            { speaker: "B", eng: "<i class='grammar-target'>Is</i> it <i class='grammar-target'>on</i> the table?", jpn: "テーブルの上にありますか？" },
            { speaker: "A", eng: "No, it <i class='grammar-target'>is</i> not <i class='grammar-target'>on</i> the table.", jpn: "いいえ、テーブルの上にはありません。" },
            { speaker: "B", eng: "Look <i class='grammar-target'>in</i> your bag.", jpn: "カバンの中を見てください。" },
            { speaker: "A", eng: "I looked. It <i class='grammar-target'>is</i> not <i class='grammar-target'>in</i> my bag.", jpn: "見ました。カバンの中にはありません。" },
            { speaker: "B", eng: "Oh, look! <span class='swappable'>It <i class='grammar-target'>is under</i> the sofa.</span>", jpn: "あっ、見て！ソファの下にありますよ。" }
        ],
        dialogueStructure: [
            "State problem + Ask where it is <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(問題を伝える ＋ どこにあるか尋ねる)</span>",
            "> Suggest a place <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(場所を提案する)</span>",
            "Deny the place <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(その場所にないと否定する)</span>",
            "> Tell someone to check another place <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(別の場所を確認するよう言う)</span>",
            "Confirm check + Deny place <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(確認したことを伝える ＋ その場所にないと否定する)</span>",
            "> Find object + State its location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(見つける ＋ その場所を伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking where something is (物の場所を尋ねる)", 
                options: [
                    { eng: "Where is it?", jpn: "それはどこですか？" }, 
                    { eng: "Where is my phone?", jpn: "私の携帯電話はどこですか？" }, 
                    { eng: "Where are my keys?", jpn: "私の鍵はどこですか？" }
                ] 
            },
            { 
                category: "2. Stating a location (場所を伝える)", 
                options: [
                    { eng: "It is under the sofa.", jpn: "ソファの下にあります。" }, 
                    { eng: "It is in the bag.", jpn: "カバンの中にあります。" }, 
                    { eng: "They are next to the door.", jpn: "ドアの隣にあります。" }
                ] 
            }
        ],
        grammar: {
            point: "Prepositions of Place (in, on, under, next to) - 場所を表す前置詞",
            explanation: "We use simple prepositions to say exactly where things are. We combine the preposition with a noun phrase (e.g., 'the table') to make a prepositional phrase: 'on' + 'the table' = 'on the table'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（物が正確にどこにあるかを伝えるために、「前置詞」を使います。前置詞（in, on, under など）の後ろには、必ず名詞（the table, my bag など）を置いてセット（前置詞句）を作ります。<br>・<strong>in</strong>：空間の中にある状態（例：in the box / 箱の中に）<br>・<strong>on</strong>：表面に接触している状態（例：on the table / テーブルの上に）<br>・<strong>under</strong>：何かの真下にある状態（例：under the bed / ベッドの下に）<br>・<strong>next to</strong>：すぐ隣に並んでいる状態（例：next to the TV / テレビの隣に）<br>これらは、日常会話で探し物をしたり、部屋の説明をしたりするのに不可欠な表現です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the prepositional phrases: '<u>on</u> the table', '<u>in</u> your bag', and '<u>under</u> the sofa'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>on</u> the table』『<u>in</u> your bag』『<u>under</u> the sofa』といった前置詞句に注目してください。)</span>",
            examples: [
                { eng: "The cat is on the chair.", jpn: "猫は椅子の上にいます。" },
                { eng: "My shoes are under the bed.", jpn: "私の靴はベッドの下にあります。" },
                { eng: "The bank is next to the station.", jpn: "銀行は駅の隣にあります。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "The book / on / the table", 
            target: "The book is on the table." 
        },
        grammarPractice: [
            { prompt: "My phone / in / the bag" },
            { prompt: "The keys / under / the sofa" },
            { prompt: "The cat / next to / the door" },
            { prompt: "The shoes / in front of / the TV" },
            { prompt: "The wallet / behind / the chair" }
        ],
        clickingGames: [
            { prompt: "携帯電話が見つかりません。どこにありますか？", target: "I can't find my phone. Where is it?", words: ["I", "can't", "find", "my", "phone.", "Where", "is", "it?"] },
            { prompt: "テーブルの上にありますか？", target: "Is it on the table?", words: ["Is", "it", "on", "the", "table?"] },
            { prompt: "カバンの中を見てください。", target: "Look in your bag.", words: ["Look", "in", "your", "bag."] },
            { prompt: "いいえ、テーブルの上にはありません。", target: "No, it is not on the table.", words: ["No,", "it", "is", "not", "on", "the", "table."] },
            { prompt: "ソファの下にありますよ。", target: "It is under the sofa.", words: ["It", "is", "under", "the", "sofa."] }
        ],
        dropdownGames: [
            { before: "Is your phone", options: ["in", "on", "under"], answer: "in", after: " your pocket?" },
            { before: "The book is", options: ["on", "in", "next"], answer: "on", after: " the table." },
            { before: "Look", options: ["under", "in", "front"], answer: "under", after: " the bed. Are your shoes there?" },
            { before: "The cafe is next", options: ["to", "in", "on"], answer: "to", after: " the supermarket." },
            { before: "My wallet is", options: ["in", "on", "under"], answer: "in", after: " my bag." }
        ],
        roleplay: {
            a: "You lost your house keys. Ask your partner where they are, and tell them you already checked in your bag. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(家の鍵をなくしました。どこにあるか相手に尋ね、カバンの中はすでに確認したと伝えてください。)</span>",
            b: "Suggest two places the keys might be using prepositions (e.g., on the table, under the book). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(前置詞を使って、鍵があるかもしれない場所を2つ提案してください。（例：テーブルの上、本の下など）)</span>"
        },
        homework: {
            vocab: [
                { eng: "Bed", jpn: "ベッド", exEng: "Make the bed.", exJpn: "ベッドを整えてください。" },
                { eng: "Chair", jpn: "椅子", exEng: "Sit on the chair.", exJpn: "椅子に座ってください。" },
                { eng: "Floor", jpn: "床", exEng: "The floor is clean.", exJpn: "床はきれいです。" },
                { eng: "Drawer", jpn: "引き出し", exEng: "Look in the drawer.", exJpn: "引き出しの中を見てください。" },
                { eng: "Shelf", jpn: "棚", exEng: "Books are on the shelf.", exJpn: "本が棚にあります。" },
                { eng: "Desk", jpn: "机", exEng: "Study at your desk.", exJpn: "自分の机で勉強してください。" },
                { eng: "Box", jpn: "箱", exEng: "Open the box.", exJpn: "箱を開けてください。" },
                { eng: "Pocket", jpn: "ポケット", exEng: "It is in my pocket.", exJpn: "それはポケットの中にあります。" },
                { eng: "Glasses", jpn: "メガネ", exEng: "I lost my glasses.", exJpn: "メガネをなくしました。" },
                { eng: "Passport", jpn: "パスポート", exEng: "Show your passport.", exJpn: "パスポートを見せてください。" },
                { eng: "Ticket", jpn: "チケット / 切符", exEng: "Don't lose your ticket.", exJpn: "チケットをなくさないでください。" },
		        { eng: "Window", jpn: "窓", exEng: "Open the window.", exJpn: "窓を開けてください。" },	
		        { eng: "Door", jpn: "ドア", exEng: "Close the door.", exJpn: "ドアを閉めてください。" },
                { eng: "Check", jpn: "確認する / チェックする", exEng: "Check your bag.", exJpn: "カバンを確認してください。" }
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
                { speaker: "A", eng: "Look on the kitchen table, next to the newspaper.", jpn: "キッチンテーブルの上、新聞の隣を見てみて。" }
            ],
            writingTask: {
                promptEng: "Look around the room you are in right now. Write three sentences describing where things are using prepositions of place (in, on, under, next to, behind).",
                promptJpn: "今あなたが居る部屋を見回してください。場所を表す前置詞（in, on, under, next to, behind）を使って、物がどこにあるかを描写する文を3つ書いてください。"
            }
        }
    },
    {
        id: 18,
        title: "Lesson 18: How to talk about your hometown",
        goal: "Describe your hometown, including its atmosphere and what places are there. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(故郷の雰囲気やそこにある場所など、自分の出身地について描写する。)</span>",
        vocab: [
            { eng: "City", jpn: "都市 / 街", exEng: "Tokyo is a big city.", exJpn: "東京は大きな都市です。" },
            { eng: "Town", jpn: "町", exEng: "I live in a quiet town.", exJpn: "私は静かな町に住んでいます。" },
            { eng: "Village", jpn: "村", exEng: "It is a small village.", exJpn: "それは小さな村です。" },
            { eng: "Big", jpn: "大きい", exEng: "He lives in a big house.", exJpn: "彼は大きな家に住んでいます。" },
            { eng: "Small", jpn: "小さい", exEng: "My room is small.", exJpn: "私の部屋は小さいです。" },
            { eng: "Beautiful", jpn: "美しい", exEng: "Kyoto is beautiful.", exJpn: "京都は美しいです。" },
            { eng: "Noisy", jpn: "うるさい / 騒がしい", exEng: "The street is noisy.", exJpn: "その通りは騒がしいです。" },
            { eng: "Quiet", jpn: "静かな", exEng: "The library is quiet.", exJpn: "図書館は静かです。" },
            { eng: "Famous", jpn: "有名な", exEng: "It is a famous temple.", exJpn: "それは有名なお寺です。" },
            { eng: "Mountain", jpn: "山", exEng: "Fuji is a high mountain.", exJpn: "富士は高い山です。" },
            { eng: "River", jpn: "川", exEng: "We swim in the river.", exJpn: "私たちは川で泳ぎます。" },
            { eng: "Building", jpn: "建物", exEng: "Look at that building.", exJpn: "あの建物を見てください。" },
            { eng: "People", jpn: "人々", exEng: "Many people are here.", exJpn: "ここにたくさんの人がいます。" },
            { eng: "Food", jpn: "食べ物", exEng: "The food is delicious.", exJpn: "その食べ物は美味しいです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Where are you from?", jpn: "出身はどこですか？" },
            { speaker: "B", eng: "I am from Kyoto. It is a beautiful city.", jpn: "京都出身です。美しい街ですよ。" },
            { speaker: "A", eng: "<span class='swappable'>What is it like?</span>", jpn: "どんなところですか？" },
            { speaker: "B", eng: "It is very old and famous. <span class='swappable'><i class='grammar-target'>There are</i> many temples.</span>", jpn: "とても古くて有名です。お寺がたくさんあります。" },
            { speaker: "A", eng: "<i class='grammar-target'>Is there</i> a beach?", jpn: "ビーチはありますか？" },
            { speaker: "B", eng: "No, <i class='grammar-target'>there isn't</i>. But <i class='grammar-target'>there are</i> beautiful mountains.", jpn: "いいえ、ありません。でも美しい山があります。" }
        ],
        dialogueStructure: [
            "Ask origin <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(出身を尋ねる)</span>",
            "> State origin + Give basic description <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(出身を伝える ＋ 基本的な説明を加える)</span>",
            "Ask for a description <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(どんな場所か尋ねる)</span>",
            "> Describe atmosphere + State what is there <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(雰囲気を描写する ＋ 何があるかを伝える)</span>",
            "Ask if a specific place exists <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(特定の場所があるか尋ねる)</span>",
            "> Deny existence + State what exists instead <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(ないと伝える ＋ 代わりに何があるかを伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking for a description (どんな場所か尋ねる)", 
                options: [
                    { eng: "What is it like?", jpn: "どんなところですか？" }, 
                    { eng: "How is your hometown?", jpn: "あなたの故郷はどうですか？" }, 
                    { eng: "Tell me about your city.", jpn: "あなたの街について教えてください。" }
                ] 
            },
            { 
                category: "2. Stating what is there (何があるか伝える)", 
                options: [
                    { eng: "There are many temples.", jpn: "お寺がたくさんあります。" }, 
                    { eng: "There are big buildings.", jpn: "大きな建物があります。" }, 
                    { eng: "There is a beautiful park.", jpn: "美しい公園があります。" }
                ] 
            }
        ],
        grammar: {
            point: "There is / There are - 〜がある、〜がいる",
            explanation: "We use 'there is' for singular nouns (one thing) and 'there are' for plural nouns (two or more things) to say that something exists in a place. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「〜があります」「〜がいます」というように、物や人の存在を伝えるときには『There is』や『There are』を使います。この構文では、There自体には意味がなく、その後ろに来る名詞が本当の主語になります。<br>・続く名詞が単数（1つ）の場合：<strong>There is</strong> a park.（公園があります）<br>・続く名詞が複数（2つ以上）の場合：<strong>There are</strong> many temples.（たくさんのお寺があります）<br>疑問文を作る時は、be動詞を前に出して『Is there...?』や『Are there...?』とします。故郷の紹介や道案内など、街の様子を語る時に最もよく使う表現です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the difference: '<u>There are</u> many temples' (plural) and '<u>Is there</u> a beach?' (singular). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>There are</u> many temples（複数）』と『<u>Is there</u> a beach?（単数）』の違いに注目してください。)</span>",
            examples: [
                { eng: "There is a park near my house.", jpn: "私の家の近くに公園があります。" },
                { eng: "There are many people in Tokyo.", jpn: "東京にはたくさんの人がいます。" },
                { eng: "Is there a hospital in this town?", jpn: "この町に病院はありますか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "a park / near my house (+)", 
            target: "There is a park near my house." 
        },
        grammarPractice: [
            { prompt: "many tall buildings / in New York (+)" },
            { prompt: "a famous museum / in this city (?)" },
            { prompt: "any beaches / here (-)" },
            { prompt: "three good restaurants / on this street (+)" },
            { prompt: "a station / near here (?)" }
        ],
        clickingGames: [
            { prompt: "それはどんな場所ですか？", target: "What is it like?", words: ["What", "is", "it", "like?"] },
            { prompt: "たくさんのお寺があります。", target: "There are many temples.", words: ["There", "are", "many", "temples."] },
            { prompt: "大きな建物があります。", target: "There are big buildings.", words: ["There", "are", "big", "buildings."] },
            { prompt: "この街には川がありますか？", target: "Is there a river in this city?", words: ["Is", "there", "a", "river", "in", "this", "city?"] },
            { prompt: "いいえ、ありません。", target: "No, there isn't.", words: ["No,", "there", "isn't."] }
        ],
        dropdownGames: [
            { before: "", options: ["There", "Here", "It"], answer: "There", after: " is a big mountain." },
            { before: "There", options: ["are", "is", "am"], answer: "are", after: " many parks." },
            { before: "What", options: ["is", "are", "does"], answer: "is", after: " your hometown like?" },
            { before: "", options: ["Is", "Are", "Do"], answer: "Is", after: " there a beach?" },
            { before: "No, there", options: ["isn't", "aren't", "don't"], answer: "isn't", after: "." }
        ],
        roleplay: {
            a: "Ask your partner where they are from and what their hometown is like. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーの出身地と、そこがどんな場所か尋ねてください。)</span>",
            b: "Tell your partner about your hometown. Mention the size, atmosphere, and what is there. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーにあなたの故郷について話してください。規模、雰囲気、何があるかについて触れてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Supermarket", jpn: "スーパーマーケット", exEng: "I buy food at the supermarket.", exJpn: "私はスーパーで食べ物を買います。" },
                { eng: "Convenience store", jpn: "コンビニエンスストア", exEng: "The convenience store is open 24 hours.", exJpn: "そのコンビニは24時間営業です。" },
                { eng: "Post office", jpn: "郵便局", exEng: "I go to the post office.", exJpn: "私は郵便局に行きます。" },
                { eng: "Library", jpn: "図書館", exEng: "It is quiet in the library.", exJpn: "図書館の中は静かです。" },
                { eng: "Pharmacy", jpn: "薬局", exEng: "Buy medicine at the pharmacy.", exJpn: "薬局で薬を買ってください。" },
                { eng: "Bakery", jpn: "パン屋", exEng: "The bakery smells good.", exJpn: "そのパン屋はいい匂いがします。" },
                { eng: "Bookstore", jpn: "書店", exEng: "I bought a novel at the bookstore.", exJpn: "書店で小説を買いました。" },
                { eng: "Police box", jpn: "交番", exEng: "Ask the police box for directions.", exJpn: "交番で道順を尋ねてください。" },
                { eng: "Gym", jpn: "ジム", exEng: "He goes to the gym.", exJpn: "彼はジムに行きます。" },
                { eng: "Cinema", jpn: "映画館", exEng: "We watched a movie at the cinema.", exJpn: "私たちは映画館で映画を見ました。" },
                { eng: "Safe", jpn: "安全な", exEng: "This town is safe.", exJpn: "この町は安全です。" },
                { eng: "Dangerous", jpn: "危険な", exEng: "That area is dangerous.", exJpn: "あのエリアは危険です。" },
                { eng: "Crowded", jpn: "混雑した", exEng: "The train is crowded.", exJpn: "電車は混雑しています。" },
                { eng: "Clean", jpn: "清潔な / きれいな", exEng: "The streets are clean.", exJpn: "通りはきれいです。" }
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
                { speaker: "A", eng: "Are there many parks?", jpn: "公園はたくさんありますか？" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph describing your hometown. Include its size, the atmosphere (e.g., quiet, noisy, beautiful), and use 'There is / There are' to mention two things in the city.",
                promptJpn: "あなたの故郷を描写する短い文章を書いてください。その規模、雰囲気（例：静か、賑やか、美しい）、そして「There is / There are」を使って街にあるものを2つ含めてください。"
            }
        }
    },
    {
        id: 19,
        title: "Lesson 19: How to ask for directions",
        goal: "Ask for and understand basic directions to a location. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(場所への基本的な道順を尋ね、理解する。)</span>",
        vocab: [
            { eng: "Station", jpn: "駅", exEng: "Where is the station?", exJpn: "駅はどこですか？" },
            { eng: "Bus stop", jpn: "バス停", exEng: "Wait at the bus stop.", exJpn: "バス停で待っていてください。" },
            { eng: "Airport", jpn: "空港", exEng: "We go to the airport.", exJpn: "私たちは空港へ行きます。" },
            { eng: "Hotel", jpn: "ホテル", exEng: "The hotel is nice.", exJpn: "そのホテルは素敵です。" },
            { eng: "Hospital", jpn: "病院", exEng: "He is in the hospital.", exJpn: "彼は病院にいます。" },
            { eng: "Bank", jpn: "銀行", exEng: "I need to go to the bank.", exJpn: "私は銀行に行く必要があります。" },
            { eng: "Park", jpn: "公園", exEng: "Let's walk in the park.", exJpn: "公園を歩きましょう。" },
            { eng: "Left", jpn: "左", exEng: "Turn left.", exJpn: "左に曲がってください。" },
            { eng: "Right", jpn: "右", exEng: "It is on your right.", exJpn: "それはあなたの右側にあります。" },
            { eng: "Straight", jpn: "まっすぐ", exEng: "Go straight ahead.", exJpn: "まっすぐ進んでください。" },
            { eng: "Corner", jpn: "角", exEng: "Turn at the corner.", exJpn: "角で曲がってください。" },
            { eng: "Street", jpn: "通り / 道", exEng: "Cross the street.", exJpn: "通りを渡ってください。" },
            { eng: "Map", jpn: "地図", exEng: "Look at the map.", exJpn: "地図を見てください。" },
            { eng: "Near", jpn: "近く", exEng: "It is near here.", exJpn: "それはこの近くです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me. <span class='swappable'>Where is the train station?</span>", jpn: "すみません。駅はどこですか？" },
            { speaker: "B", eng: "It is near the park. <span class='swappable'><i class='grammar-target'>Go</i> straight, and <i class='grammar-target'>turn</i> left.</span>", jpn: "公園の近くです。まっすぐ進んで、左に曲がってください。" },
            { speaker: "A", eng: "Turn left?", jpn: "左に曲がるのですか？" },
            { speaker: "B", eng: "Yes. It is on your right.", jpn: "はい。あなたの右側にあります。" },
            { speaker: "A", eng: "Thank you very much!", jpn: "どうもありがとうございます！" }
        ],
        dialogueStructure: [
            "Get attention + Ask for location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(声をかける ＋ 場所を尋ねる)</span>",
            "> State general area + Give basic directions <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(大まかな場所を伝える ＋ 基本的な道順を教える)</span>",
            "Ask for clarification <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(確認する)</span>",
            "> Confirm + State final location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(肯定する ＋ 最終的な位置を伝える)</span>",
            "Say thank you <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(お礼を言う)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking for a location (場所の尋ね方)", 
                options: [
                    { eng: "Where is the train station?", jpn: "駅はどこですか？" }, 
                    { eng: "How do I get to the train station?", jpn: "駅にはどうやって行けばいいですか？" }, 
                    { eng: "Can you tell me where the train station is?", jpn: "駅がどこにあるか教えてもらえますか？" }
                ] 
            },
            { 
                category: "2. Giving basic directions (基本的な道順の教え方)", 
                options: [
                    { eng: "Go straight, and turn left.", jpn: "まっすぐ進んで、左に曲がってください。" }, 
                    { eng: "Walk down this street, and turn right.", jpn: "この道を歩いて、右に曲がってください。" }, 
                    { eng: "Go straight ahead.", jpn: "まっすぐ進んでください。" }
                ] 
            }
        ],
        grammar: {
            point: "Imperatives (Commands / Directions) - 命令形",
            explanation: "We use verbs with no subject (no 'you' or 'I') at the start of a sentence to give instructions, directions, or commands. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（人に道順を教えたり、何かを指示・命令したりする時は、「命令形」を使います。命令形は、主語（「You」や「I」）を省き、動詞の原形を文の先頭に持ってくるだけで作ることができます。例えば、「You go straight（あなたはまっすぐ行きます）」から「You」を取り除いて、「Go straight（まっすぐ行ってください）」とします。「Turn right（右に曲がって）」「Walk down this street（この道を歩いて）」など、道案内において最も重要で直接的な表現です。丁寧に言いたい場合は、文の最後や最初に Please を付けます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the verbs at the beginning of the directions: '<u>Go</u> straight' and '<u>Turn</u> left'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：道案内の最初にある動詞『<u>Go</u> straight』や『<u>Turn</u> left』に注目してください。)</span>",
            examples: [
                { eng: "Go straight.", jpn: "まっすぐ進んでください。" },
                { eng: "Turn right at the corner.", jpn: "角を右に曲がってください。" },
                { eng: "Please look at the map.", jpn: "地図を見てください。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "straight / go / ahead", 
            target: "Go straight ahead." 
        },
        grammarPractice: [
            { prompt: "turn / right / at the corner" },
            { prompt: "walk / down / this street" },
            { prompt: "left / turn / here" },
            { prompt: "cross / the / street" },
            { prompt: "look / at / the map" }
        ],
        clickingGames: [
            { prompt: "ホテルはどこですか？", target: "Where is the hotel?", words: ["Where", "is", "the", "hotel?"] },
            { prompt: "まっすぐ進んで、左に曲がってください。", target: "Go straight, and turn left.", words: ["Go", "straight,", "and", "turn", "left."] },
            { prompt: "駅にはどうやって行けばいいですか？", target: "How do I get to the train station?", words: ["How", "do", "I", "get", "to", "the", "train", "station?"] },
            { prompt: "この道を歩いて、右に曲がってください。", target: "Walk down this street, and turn right.", words: ["Walk", "down", "this", "street,", "and", "turn", "right."] },
            { prompt: "まっすぐ進んでください。", target: "Go straight ahead.", words: ["Go", "straight", "ahead."] }
        ],
        dropdownGames: [
            { before: "Where", options: ["is", "am", "are"], answer: "is", after: " the train station?" },
            { before: "", options: ["Go", "Going", "Goes"], answer: "Go", after: " straight for two blocks." },
            { before: "Turn", options: ["left", "straight", "near"], answer: "left", after: " at the corner." },
            { before: "How do I get", options: ["to", "for", "at"], answer: "to", after: " the airport?" },
            { before: "Walk", options: ["down", "under", "over"], answer: "down", after: " this street." }
        ],
        roleplay: {
            a: "You are a tourist. Ask a local person for directions to the hotel. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたは観光客です。地元の人にホテルまでの道順を尋ねてください。)</span>",
            b: "You are a local person. Give the tourist directions to the hotel. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(地元の人の役です。観光客にホテルまでの道順を教えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Train", jpn: "電車", exEng: "The train is fast.", exJpn: "電車は速いです。" },
                { eng: "Subway", jpn: "地下鉄", exEng: "Take the subway.", exJpn: "地下鉄に乗ってください。" },
                { eng: "Bus", jpn: "バス", exEng: "I missed the bus.", exJpn: "バスに乗り遅れました。" },
                { eng: "Taxi", jpn: "タクシー", exEng: "Call a taxi.", exJpn: "タクシーを呼んでください。" },
                { eng: "Ticket", jpn: "切符 / チケット", exEng: "Buy a ticket.", exJpn: "切符を買ってください。" },
                { eng: "Passenger", jpn: "乗客", exEng: "Many passengers are waiting.", exJpn: "多くの乗客が待っています。" },
                { eng: "Seat", jpn: "座席", exEng: "Take a seat.", exJpn: "席に座ってください。" },
                { eng: "Platform", jpn: "プラットホーム", exEng: "Wait on the platform.", exJpn: "プラットホームで待っていてください。" },
                { eng: "Gate", jpn: "ゲート / 改札", exEng: "Go to gate 5.", exJpn: "5番ゲートに行ってください。" },
                { eng: "Flight", jpn: "フライト / 便", exEng: "My flight is delayed.", exJpn: "私のフライトは遅れています。" },
                { eng: "Passport", jpn: "パスポート", exEng: "Show your passport.", exJpn: "パスポートを見せてください。" },
                { eng: "Baggage", jpn: "手荷物", exEng: "Where is my baggage?", exJpn: "私の手荷物はどこですか？" },
                { eng: "Schedule", jpn: "スケジュール / 時刻表", exEng: "Check the schedule.", exJpn: "時刻表を確認してください。" },
                { eng: "Delay", jpn: "遅れ", exEng: "There is a delay.", exJpn: "遅れが生じています。" }
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
                { speaker: "A", eng: "Go straight?", jpn: "まっすぐですね？" }
            ],
            writingTask: {
                promptEng: "Imagine a tourist asks you for directions to the station. Write a short dialogue. Include 'go straight', 'turn left' or 'turn right', and where it is.",
                promptJpn: "観光客から駅までの道を尋ねられたと想像してください。短い会話を書いてください。「go straight（まっすぐ進む）」、「turn left（左に曲がる）」または「turn right（右に曲がる）」、そしてそれがどこにあるかを含めてください。"
            }
        }
    },
    {
        id: 20,
        title: "Lesson 20: How to give train directions",
        goal: "Ask how to get to a station and give directions using sequencing words and linking actions. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(駅への行き方を尋ね、順序を表す言葉や動作をつなぐ言葉を使って電車での道順を教える。)</span>",
        vocab: [
            { eng: "First", jpn: "最初に / まず", exEng: "First, buy a ticket.", exJpn: "まず、切符を買ってください。" },
            { eng: "Then", jpn: "それから / 次に", exEng: "Then, go to the platform.", exJpn: "それから、プラットホームに行ってください。" },
            { eng: "Finally", jpn: "最後に", exEng: "Finally, get on the train.", exJpn: "最後に、電車に乗ってください。" },
            { eng: "And", jpn: "〜して、そして", exEng: "Go straight and turn left.", exJpn: "まっすぐ進んで、左に曲がってください。" },
            { eng: "Take", jpn: "乗る / 利用する", exEng: "Take the blue line.", exJpn: "ブルーラインに乗ってください。" },
            { eng: "Transfer", jpn: "乗り換える", exEng: "Transfer at Shinjuku.", exJpn: "新宿で乗り換えてください。" },
            { eng: "Get on", jpn: "乗車する", exEng: "Get on the bus.", exJpn: "バスに乗ってください。" },
            { eng: "Get off", jpn: "降車する", exEng: "Get off at the next stop.", exJpn: "次の駅で降りてください。" },
            { eng: "Line", jpn: "路線", exEng: "Which line is this?", exJpn: "これは何線ですか？" },
            { eng: "Stop", jpn: "停車駅", exEng: "This is my stop.", exJpn: "ここが私の降りる駅です。" },
            { eng: "Station", jpn: "駅", exEng: "I am at the station.", exJpn: "私は駅にいます。" },
            { eng: "Platform", jpn: "プラットホーム / 番線", exEng: "Go to platform 2.", exJpn: "2番線に行ってください。" },
            { eng: "Straight", jpn: "まっすぐ", exEng: "Go straight.", exJpn: "まっすぐ進んでください。" },
            { eng: "Turn", jpn: "曲がる", exEng: "Turn right.", exJpn: "右に曲がってください。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me, <span class='swappable'>how do I get to Shibuya station?</span>", jpn: "すみません、渋谷駅にはどう行けばいいですか？" },
            { speaker: "B", eng: "<span class='swappable'><i class='grammar-target'>First</i>, take the Yamanote Line</span> from platform 2.", jpn: "最初に、2番線から山手線に乗ってください。" },
            { speaker: "A", eng: "Do I need to transfer?", jpn: "乗り換えは必要ですか？" },
            { speaker: "B", eng: "Yes, <i class='grammar-target'>then</i> transfer at Shinjuku station.", jpn: "はい、それから新宿駅で乗り換えてください。" },
            { speaker: "A", eng: "Where do I get off?", jpn: "どこで降りればいいですか？" },
            { speaker: "B", eng: "<i class='grammar-target'>Finally</i>, get off at the next stop.", jpn: "最後に、次の駅で降りてください。" }
        ],
        dialogueStructure: [
            "Get attention + Ask the way <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(声をかける ＋ 行き方を尋ねる)</span>",
            "> State sequencing step 1 <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(最初の手順を伝える)</span>",
            "Ask about transfers <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(乗り換えについて尋ねる)</span>",
            "> Answer + State sequencing step 2 <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(答える ＋ 2番目の手順を伝える)</span>",
            "Ask where to get off <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(どこで降りるか尋ねる)</span>",
            "> State final step <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(最後の手順を伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking the way (行き方を尋ねる)", 
                options: [
                    { eng: "How do I get to Shibuya station?", jpn: "渋谷駅にはどう行けばいいですか？" }, 
                    { eng: "Does this train go to Tokyo?", jpn: "この電車は東京に行きますか？" }, 
                    { eng: "Which line should I take?", jpn: "どの路線に乗ればいいですか？" }
                ] 
            },
            { 
                category: "2. Sequencing steps (手順を順序立てて伝える)", 
                options: [
                    { eng: "First, take the Yamanote Line.", jpn: "最初に、山手線に乗ってください。" }, 
                    { eng: "Then, transfer at Shinjuku.", jpn: "それから、新宿で乗り換えてください。" }, 
                    { eng: "Finally, get off at the next stop.", jpn: "最後に、次の駅で降りてください。" }
                ] 
            }
        ],
        grammar: {
            point: "Sequencing and Linking Actions (First, Then, Finally / And) - 順序立てと動作の連結",
            explanation: "To give clear directions, use 'First' (最初に), 'Then' (それから), and 'Finally' (最後に) to order the steps. Use 'and' (〜して、そして) to link two related actions together in one sentence. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（道順や作業の手順を明確に伝えるためには、「順序を表す言葉」が重要です。文の先頭に『First（最初に）』、『Then（それから / 次に）』、『Finally（最後に）』を置くことで、聞き手はステップを順番に整理して理解することができます。また、1つのステップの中で「まっすぐ行って、左に曲がる」のように2つの連続した動作を指示する場合は、文と文の間に『and（そして）』を挟んで連結します（例：Go straight <strong>and</strong> turn left）。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the sequencing words: '<u>First</u>, take the Yamanote Line', '<u>then</u> transfer...', and '<u>Finally</u>, get off...'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>First</u>, take...』、『<u>then</u> transfer』、『<u>Finally</u>, get off...』といった順序を表す言葉に注目してください。)</span>",
            examples: [
                { eng: "First, buy a ticket.", jpn: "最初に、切符を買ってください。" },
                { eng: "Go straight and turn left.", jpn: "まっすぐ進んで、左に曲がってください。" },
                { eng: "Then, get off at Tokyo.", jpn: "それから、東京駅で降りてください。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "take the Yamanote Line (First)", 
            target: "First, take the Yamanote Line." 
        },
        grammarPractice: [
            { prompt: "transfer at Shinjuku (Then)" },
            { prompt: "get off at the next stop (Finally)" },
            { prompt: "buy a ticket (First)" },
            { prompt: "change to the subway (Then)" },
            { prompt: "go straight / turn left (and)" }
        ],
        clickingGames: [
            { prompt: "渋谷駅にはどう行けばいいですか？", target: "How do I get to Shibuya station?", words: ["How", "do", "I", "get", "to", "Shibuya", "station?"] },
            { prompt: "最初に、山手線に乗ってください。", target: "First, take the Yamanote Line.", words: ["First,", "take", "the", "Yamanote", "Line."] },
            { prompt: "それから、新宿で乗り換えてください。", target: "Then, transfer at Shinjuku.", words: ["Then,", "transfer", "at", "Shinjuku."] },
            { prompt: "最後に、次の駅で降りてください。", target: "Finally, get off at the next stop.", words: ["Finally,", "get", "off", "at", "the", "next", "stop."] },
            { prompt: "まっすぐ進んで、左に曲がってください。", target: "Go straight and turn left.", words: ["Go", "straight", "and", "turn", "left."] }
        ],
        dropdownGames: [
            { before: "", options: ["First", "Then", "Finally"], answer: "First", after: ", buy a ticket at the machine." },
            { before: "Go straight", options: ["and", "but", "so"], answer: "and", after: " turn left." },
            { before: "", options: ["Then", "First", "After"], answer: "Then", after: ", transfer to the blue line." },
            { before: "", options: ["Finally", "First", "And"], answer: "Finally", after: ", get off at Tokyo." },
            { before: "How do I", options: ["get", "go", "take"], answer: "get", after: " to the station?" }
        ],
        roleplay: {
            a: "You are a tourist. Ask someone at the station how to get to a famous place. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたは観光客です。駅で誰かに有名な場所への行き方を尋ねてください。)</span>",
            b: "You are a local. Give the tourist 3-step directions using 'First', 'Then', 'Finally'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(地元の人役です。観光客に『First』『Then』『Finally』を使って3段階の道順を教えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Subway", jpn: "地下鉄", exEng: "Take the subway.", exJpn: "地下鉄に乗ってください。" },
                { eng: "Bullet train", jpn: "新幹線", exEng: "The bullet train is fast.", exJpn: "新幹線は速いです。" },
                { eng: "Express", jpn: "急行", exEng: "Get on the express train.", exJpn: "急行電車に乗ってください。" },
                { eng: "Local", jpn: "各駅停車", exEng: "I take the local train.", exJpn: "私は各駅停車に乗ります。" },
                { eng: "Gate", jpn: "改札 / ゲート", exEng: "Go to the gate.", exJpn: "改札に行ってください。" },
                { eng: "Exit", jpn: "出口", exEng: "Where is the exit?", exJpn: "出口はどこですか？" },
                { eng: "Entrance", jpn: "入口", exEng: "Meet me at the entrance.", exJpn: "入り口で会いましょう。" },
                { eng: "Stairs", jpn: "階段", exEng: "Go up the stairs.", exJpn: "階段を上がってください。" },
                { eng: "Escalator", jpn: "エスカレーター", exEng: "Take the escalator.", exJpn: "エスカレーターに乗ってください。" },
                { eng: "Elevator", jpn: "エレベーター", exEng: "The elevator is broken.", exJpn: "エレベーターは壊れています。" },
                { eng: "Walk", jpn: "歩く", exEng: "Walk straight.", exJpn: "まっすぐ歩いてください。" },
                { eng: "Cross", jpn: "渡る", exEng: "Cross the street.", exJpn: "通りを渡ってください。" },
                { eng: "Direct", jpn: "直通の", exEng: "Is it a direct train?", exJpn: "それは直通の電車ですか？" },
                { eng: "Wait", jpn: "待つ", exEng: "Wait on the platform.", exJpn: "プラットホームで待っていてください。" }
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
                { speaker: "A", eng: "Okay, thank you. Do I need to transfer?", jpn: "わかりました、ありがとう。乗り換えは必要ですか？" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph explaining how to get from your nearest train station to a famous place in your city. Use sequencing words like 'First', 'Then', and 'Finally'.",
                promptJpn: "最寄りの駅からあなたの街の有名な場所への行き方を説明する短い文章を書いてください。「First」「Then」「Finally」などの順序を表す言葉を使ってください。"
            }
        }
    },
    {
        id: 21,
        title: "Lesson 21: How to describe what's in your house",
        goal: "Describe the quantity of items in your home using countable nouns and quantifiers (many, some, a few, any). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(可算名詞と数量詞（many, some, a few, anyなど）を使って、家にある物の量を説明する。)</span>",
        vocab: [
            { eng: "Many", jpn: "たくさんの（主に疑問文・否定文）", exEng: "I don't have many books.", exJpn: "本はたくさん持っていません。" },
            { eng: "Some", jpn: "いくつかの（肯定文）", exEng: "I have some plants.", exJpn: "植物をいくつか持っています。" },
            { eng: "A few", jpn: "少しの / 2〜3の", exEng: "There are a few chairs.", exJpn: "椅子が2〜3脚あります。" },
            { eng: "Any", jpn: "いくつか / 1つも（疑問文・否定文）", exEng: "Do you have any pets?", exJpn: "ペットは飼っていますか？" },
            { eng: "Room", jpn: "部屋", exEng: "This room is big.", exJpn: "この部屋は大きいです。" },
            { eng: "Plant", jpn: "植物 / 観葉植物", exEng: "Water the plant.", exJpn: "植物に水をあげてください。" },
            { eng: "Book", jpn: "本", exEng: "I read a book.", exJpn: "私は本を読みます。" },
            { eng: "Painting", jpn: "絵画", exEng: "That painting is nice.", exJpn: "その絵画は素敵ですね。" },
            { eng: "Window", jpn: "窓", exEng: "Open the window.", exJpn: "窓を開けてください。" },
            { eng: "Chair", jpn: "椅子", exEng: "Sit on the chair.", exJpn: "椅子に座ってください。" },
            { eng: "Shelf", jpn: "棚", exEng: "Put it on the shelf.", exJpn: "棚に置いてください。" },
            { eng: "Living room", jpn: "リビング / 居間", exEng: "We watch TV in the living room.", exJpn: "私たちはリビングでテレビを見ます。" },
            { eng: "Beautiful", jpn: "美しい", exEng: "She is beautiful.", exJpn: "彼女は美しいです。" },
            { eng: "Describe", jpn: "説明する / 描写する", exEng: "Describe your house.", exJpn: "あなたの家を描写してください。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Your new apartment is nice! <span class='swappable'>Do you have <i class='grammar-target'>many</i> plants?</span>", jpn: "あなたの新しいアパートは素敵ですね！観葉植物はたくさんありますか？" },
            { speaker: "B", eng: "Yes, I have <i class='grammar-target'>some</i> plants in the living room.", jpn: "はい、リビングにいくつか植物があります。" },
            { speaker: "A", eng: "That's lovely. Are there <i class='grammar-target'>any</i> paintings on the wall?", jpn: "それは素晴らしいですね。壁に絵画はありますか？" },
            { speaker: "B", eng: "<span class='swappable'>There are <i class='grammar-target'>a few</i> paintings.</span> But I want more.", jpn: "少し（2〜3枚）絵画があります。でももっと欲しいです。" },
            { speaker: "A", eng: "I see. Do you have <i class='grammar-target'>many</i> books?", jpn: "なるほど。本はたくさんありますか？" },
            { speaker: "B", eng: "No, I don't have <i class='grammar-target'>many</i> books. I usually read on my tablet.", jpn: "いいえ、本はあまり持っていません。普段はタブレットで読みます。" }
        ],
        dialogueStructure: [
            "Compliment + Ask about large quantities <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(褒める ＋ たくさんの量があるか尋ねる)</span>",
            "> Agree + Express a moderate amount <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 中くらいの量を伝える)</span>",
            "React + Ask about existence (any) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 存在するかどうか尋ねる)</span>",
            "> Express a small amount (a few) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(少しの量を伝える)</span>",
            "React + Ask about collections <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ コレクションについて尋ねる)</span>",
            "> Express a small/zero amount negatively <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(多くないことを否定形で伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about quantities (物の量を尋ねる)", 
                options: [
                    { eng: "Do you have many plants?", jpn: "植物はたくさんありますか？" }, 
                    { eng: "Do you have many books?", jpn: "本はたくさんありますか？" }, 
                    { eng: "Are there any paintings?", jpn: "絵画は（少しでも）ありますか？" }
                ] 
            },
            { 
                category: "2. Expressing amounts (物の量を伝える)", 
                options: [
                    { eng: "I have some plants.", jpn: "植物をいくつか持っています。" }, 
                    { eng: "There are a few paintings.", jpn: "絵画が2〜3枚あります。" }, 
                    { eng: "I don't have many books.", jpn: "本はあまり持っていません。" }
                ] 
            }
        ],
        grammar: {
            point: "Quantifiers for Countable Nouns - 可算名詞の数量詞",
            explanation: "We use quantifiers before countable nouns (things we can count, like apples or books) to show how many there are. Always use the plural form of the noun (e.g., book<strong>s</strong>).<br>• <strong>Many</strong> = A lot (Usually in questions/negatives: <em>Do you have many books? / I don't have many books.</em>)<br>• <strong>Some</strong> = A medium amount (Affirmative: <em>I have some plants.</em>)<br>• <strong>A few</strong> = A small amount / 2-3 (Affirmative: <em>I have a few chairs.</em>)<br>• <strong>Any</strong> = Used in questions to ask if something exists, or in negatives to mean zero (<em>Do you have any pets? / I don't have any pets.</em>) <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（1つ、2つと数えられる名詞（本、椅子など）の「大体の量」を表す時に使う言葉を数量詞と呼びます。数量詞の後ろに来る名詞は必ず複数形（〜s）になります。<br>・<strong>many（たくさんの）</strong>：主に疑問文（〜はたくさんありますか？）や否定文（たくさんはありません）で使われます。<br>・<strong>some（いくつかの）</strong>：肯定文で、中くらいの量（具体的に数えない程度の量）を表す時に使います。<br>・<strong>a few（少しの/2〜3の）</strong>：肯定文で、少ない量があることを表します。<br>・<strong>any（いくつか/1つも）</strong>：疑問文で「（少しでも）ありますか？」と存在を確認する時や、否定文で「1つもありません」とゼロを表す時に使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the match between the sentence type and the quantifier: 'Do you have <u>many</u>' (question), 'I have <u>some</u>' (affirmative), 'Are there <u>any</u>' (question), and 'I don't have <u>many</u>' (negative). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：文の種類と数量詞の対応に注目してください：『Do you have <u>many</u>（疑問文）』『I have <u>some</u>（肯定文）』『Are there <u>any</u>（疑問文）』『I don't have <u>many</u>（否定文）』。)</span>",
            examples: [
                { eng: "I have a few apples in the fridge.", jpn: "冷蔵庫にいくつか（2〜3個）のリンゴがあります。" },
                { eng: "Are there any chairs in that room?", jpn: "あの部屋に椅子はありますか？" },
                { eng: "We don't have any eggs.", jpn: "卵が1つもありません。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "Do you have (plants)? (large amount / question)", 
            target: "Do you have many plants?" 
        },
        grammarPractice: [
            { prompt: "I have (books). (moderate amount / affirmative)" },
            { prompt: "There are (paintings). (small amount / affirmative)" },
            { prompt: "Are there (chairs)? (existence / question)" },
            { prompt: "I don't have (shelves). (large amount / negative)" },
            { prompt: "We don't have (windows). (existence / negative)" }
        ],
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
            { before: "Are there", options: ["any", "a few", "some"], answer: "any", after: " windows in your bedroom?" }
        ],
        roleplay: {
            a: "Ask your partner what is in their living room. Ask if they have 'many' plants or 'any' paintings. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーのリビングに何があるか尋ねてください。『many』を使って植物について、または『any』を使って絵画について尋ねてください。)</span>",
            b: "Answer using quantifiers (some, a few, not many, not any). Then ask your partner a question about their house. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(数量詞（some, a few, not many, not any）を使って答えてください。その後、パートナーの家について質問してください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Bedroom", jpn: "寝室", exEng: "My bedroom is cozy.", exJpn: "私の寝室は居心地が良いです。" },
                { eng: "Kitchen", jpn: "キッチン / 台所", exEng: "She is in the kitchen.", exJpn: "彼女はキッチンにいます。" },
                { eng: "Bathroom", jpn: "お風呂場 / トイレ", exEng: "Where is the bathroom?", exJpn: "トイレはどこですか？" },
                { eng: "Sofa", jpn: "ソファ", exEng: "Sit on the sofa.", exJpn: "ソファに座ってください。" },
                { eng: "Desk", jpn: "机", exEng: "I study at my desk.", exJpn: "私は机で勉強します。" },
                { eng: "Lamp", jpn: "ランプ / 照明", exEng: "Turn on the lamp.", exJpn: "ランプをつけてください。" },
                { eng: "Box", jpn: "箱", exEng: "This box is heavy.", exJpn: "この箱は重いです。" },
                { eng: "Toy", jpn: "おもちゃ", exEng: "The baby plays with a toy.", exJpn: "赤ちゃんはおもちゃで遊びます。" },
                { eng: "Picture", jpn: "写真 / 絵", exEng: "Look at this picture.", exJpn: "この写真を見てください。" },
                { eng: "Cup", jpn: "カップ / コップ", exEng: "I need a cup of tea.", exJpn: "紅茶を1杯お願いします。" },
                { eng: "Plate", jpn: "皿", exEng: "Put the food on the plate.", exJpn: "食べ物をお皿にのせてください。" },
                { eng: "Glass", jpn: "グラス", exEng: "A glass of water.", exJpn: "グラス1杯の水。" },
                { eng: "Pillow", jpn: "枕 / クッション", exEng: "My pillow is soft.", exJpn: "私の枕は柔らかいです。" },
                { eng: "Blanket", jpn: "毛布", exEng: "I need a warm blanket.", exJpn: "暖かい毛布が必要です。" }
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
                { speaker: "A", eng: "What about the bedroom? Is it finished?", jpn: "寝室はどうですか？完成しましたか？" }
            ],
            writingTask: {
                promptEng: "Write three sentences describing the items in your bedroom or living room using quantifiers (some, many, a few, any).",
                promptJpn: "数量詞（some, many, a few, any）を使って、あなたの寝室やリビングにある物について3つの文を書いてください。"
            }
        }
    },
    {
        id: 22,
        title: "Lesson 22: How to describe what's in your kitchen",
        goal: "Describe the quantity of food and drinks in your kitchen using uncountable nouns and quantifiers (a lot of, some, a little, not much, not any). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(不可算名詞と数量詞（a lot of, some, a little, not much, not anyなど）を使って、キッチンにある食べ物や飲み物の量を説明する。)</span>",
        vocab: [
            { eng: "A lot of", jpn: "たくさんの", exEng: "I have a lot of water.", exJpn: "水がたくさんあります。" },
            { eng: "Some", jpn: "いくらかの", exEng: "We need some cheese.", exJpn: "チーズがいくらか必要です。" },
            { eng: "A little", jpn: "少しの", exEng: "There is a little milk.", exJpn: "牛乳が少しあります。" },
            { eng: "Not much", jpn: "あまりない", exEng: "I don't have much rice.", exJpn: "お米はあまりありません。" },
            { eng: "Any", jpn: "少しも / いくらか（疑問文・否定文）", exEng: "Do we have any soup?", exJpn: "スープはいくらかありますか？" },
            { eng: "Milk", jpn: "牛乳", exEng: "I drink milk.", exJpn: "私は牛乳を飲みます。" },
            { eng: "Rice", jpn: "米", exEng: "I eat rice every day.", exJpn: "私は毎日お米を食べます。" },
            { eng: "Cheese", jpn: "チーズ", exEng: "I like cheese.", exJpn: "私はチーズが好きです。" },
            { eng: "Water", jpn: "水", exEng: "Drink water.", exJpn: "水を飲んでください。" },
            { eng: "Bread", jpn: "パン", exEng: "I bought bread.", exJpn: "パンを買いました。" },
            { eng: "Fridge", jpn: "冷蔵庫", exEng: "Put it in the fridge.", exJpn: "それを冷蔵庫に入れてください。" },
            { eng: "Kitchen", jpn: "キッチン / 台所", exEng: "She is in the kitchen.", exJpn: "彼女はキッチンにいます。" },
            { eng: "Hungry", jpn: "お腹が空いた", exEng: "I am hungry.", exJpn: "お腹が空きました。" },
            { eng: "Buy", jpn: "買う", exEng: "I need to buy food.", exJpn: "食べ物を買う必要があります。" }
        ],
        dialogue: [
            { speaker: "A", eng: "I am hungry. <span class='swappable'>Do we have <i class='grammar-target'>much</i> rice?</span>", jpn: "お腹が空きました。お米はたくさんありますか？" },
            { speaker: "B", eng: "No, we don't have <i class='grammar-target'>much</i> rice. We need to buy more.", jpn: "いいえ、お米はあまりありません。もっと買う必要があります。" },
            { speaker: "A", eng: "Oh, okay. <span class='swappable'>Is there <i class='grammar-target'>any</i> cheese in the fridge?</span>", jpn: "ああ、わかりました。冷蔵庫にチーズはありますか？" },
            { speaker: "B", eng: "Yes, there is <i class='grammar-target'>a little</i> cheese.", jpn: "はい、少しチーズがあります。" },
            { speaker: "A", eng: "Great. Do we have <i class='grammar-target'>any</i> milk?", jpn: "素晴らしい。牛乳はありますか？" },
            { speaker: "B", eng: "Yes, we have <i class='grammar-target'>a lot of</i> milk. I bought some yesterday.", jpn: "はい、牛乳はたくさんあります。昨日いくつか買いました。" }
        ],
        dialogueStructure: [
            "State feeling + Ask about large quantities <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(気分を伝える ＋ たくさんの量があるか尋ねる)</span>",
            "> Express a small amount negatively + State action <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(多くないことを伝える ＋ アクションを述べる)</span>",
            "Acknowledge + Ask about existence (any) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了解する ＋ 存在を尋ねる)</span>",
            "> Express a small amount positively <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(少しの量があることを伝える)</span>",
            "React + Ask about other items <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 他のアイテムについて尋ねる)</span>",
            "> Express a large amount + Add detail <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(たくさんの量があることを伝える ＋ 詳細を加える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about quantities (物の量を尋ねる)", 
                options: [
                    { eng: "Do we have much rice?", jpn: "お米はたくさんありますか？" }, 
                    { eng: "Is there any cheese in the fridge?", jpn: "冷蔵庫にチーズはありますか？" }, 
                    { eng: "Do we have any milk?", jpn: "牛乳はありますか？" }
                ] 
            },
            { 
                category: "2. Expressing amounts (物の量を伝える)", 
                options: [
                    { eng: "We don't have much rice.", jpn: "お米はあまりありません。" }, 
                    { eng: "There is a little cheese.", jpn: "少しチーズがあります。" }, 
                    { eng: "We have a lot of milk.", jpn: "牛乳はたくさんあります。" }
                ] 
            }
        ],
        grammar: {
            point: "Quantifiers for Uncountable Nouns - 不可算名詞の数量詞",
            explanation: "We use these quantifiers with uncountable nouns (things we cannot easily count, like liquids, powders, or masses). Uncountable nouns are always singular, so we never add '-s', and we use 'is' instead of 'are'.<br>• <strong>A lot of</strong> = A large amount (<em>We have a lot of milk.</em>)<br>• <strong>Some</strong> = A medium amount (<em>I have some bread.</em>)<br>• <strong>A little</strong> = A small amount (<em>There is a little cheese.</em>)<br>• <strong>Much</strong> = Used in questions/negatives for a large amount (<em>Do you have much rice? / I don't have much rice.</em>)<br>• <strong>Any</strong> = Used in questions/negatives for existence (<em>Is there any water? / We don't have any water.</em>) <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（水や牛乳などの「液体」、お米や砂糖などの「粉・粒」、パンやチーズなどの「塊」など、そのままでは1つ、2つと数えられないものを「不可算名詞（数えられない名詞）」と呼びます。不可算名詞は常に「単数扱い」になるため、語尾に -s を付けることは決してなく、be動詞も are ではなく is を使います。<br>・<strong>a lot of（たくさんの）</strong>：肯定文で大容量を表します。<br>・<strong>some（いくらかの）</strong>：肯定文で中くらいの量を表します。<br>・<strong>a little（少しの）</strong>：肯定文で、少量だけあることを表します。（可算名詞に使う a few の不可算バージョンです）。<br>・<strong>much（たくさんの）</strong>：主に疑問文・否定文で「たくさんありますか？」「あまりありません」と表現する時に使います。（可算名詞に使う many の不可算バージョンです）。<br>・<strong>any（いくらか/少しも）</strong>：疑問文や否定文で使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the match with uncountable nouns: 'much <u>rice</u>', 'a little <u>cheese</u>', and 'a lot of <u>milk</u>'. We say '<u>Is</u> there any cheese?', not 'Are there'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：不可算名詞との対応に注目してください：『much <u>rice</u>』『a little <u>cheese</u>』『a lot of <u>milk</u>』。『Are there』ではなく『<u>Is</u> there any cheese?』と言います。)</span>",
            examples: [
                { eng: "We have a little time before the train arrives.", jpn: "電車が到着するまでに少し時間があります。" },
                { eng: "I don't drink much coffee.", jpn: "私はコーヒーをあまり飲みません。" },
                { eng: "Is there any soup left?", jpn: "スープは残っていますか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "We have (milk). (large amount / affirmative)", 
            target: "We have a lot of milk." 
        },
        grammarPractice: [
            { prompt: "Do we have (rice)? (large amount / question)" },
            { prompt: "There is (cheese). (small amount / affirmative)" },
            { prompt: "I have (bread). (moderate amount / affirmative)" },
            { prompt: "We don't have (water). (large amount / negative)" },
            { prompt: "Is there (soup)? (existence / question)" }
        ],
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
            { before: "Do you drink", options: ["much", "many", "a few"], answer: "much", after: " juice in the morning?" }
        ],
        roleplay: {
            a: "You are cooking dinner. Ask your partner if there is 'much' rice in the kitchen, and if there is 'any' meat in the fridge. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたは夕食を作っています。パートナーに、キッチンにお米が「たくさん」あるか、冷蔵庫に肉が「少しでも」あるか尋ねてください。)</span>",
            b: "Answer your partner. Tell them there isn't 'much' rice, but there is 'a lot of' meat. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに答えてください。お米は「あまり」ないが、肉は「たくさん」あると伝えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Meat", jpn: "肉", exEng: "We eat meat.", exJpn: "私たちは肉を食べます。" },
                { eng: "Fish", jpn: "魚", exEng: "I like fish.", exJpn: "私は魚が好きです。" },
                { eng: "Soup", jpn: "スープ", exEng: "This soup is hot.", exJpn: "このスープは熱いです。" },
                { eng: "Juice", jpn: "ジュース", exEng: "Drink some juice.", exJpn: "ジュースを飲んでください。" },
                { eng: "Coffee", jpn: "コーヒー", exEng: "I need coffee.", exJpn: "コーヒーが必要です。" },
                { eng: "Tea", jpn: "お茶 / 紅茶", exEng: "She drinks tea.", exJpn: "彼女はお茶を飲みます。" },
                { eng: "Sugar", jpn: "砂糖", exEng: "Add some sugar.", exJpn: "砂糖を加えてください。" },
                { eng: "Salt", jpn: "塩", exEng: "Pass the salt.", exJpn: "塩を取ってください。" },
                { eng: "Butter", jpn: "バター", exEng: "I need butter for bread.", exJpn: "パンに塗るバターが必要です。" },
                { eng: "Oil", jpn: "油", exEng: "Cook with oil.", exJpn: "油で料理してください。" },
                { eng: "Pasta", jpn: "パスタ", exEng: "We had pasta for dinner.", exJpn: "私たちは夕食にパスタを食べました。" },
                { eng: "Food", jpn: "食べ物", exEng: "I bought food.", exJpn: "食べ物を買いました。" },
                { eng: "Drink", jpn: "飲み物", exEng: "I want a cold drink.", exJpn: "冷たい飲み物が欲しいです。" },
                { eng: "Supermarket", jpn: "スーパーマーケット", exEng: "Go to the supermarket.", exJpn: "スーパーに行ってください。" }
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
                { speaker: "A", eng: "We have a little tomato sauce, but not much. We can use it.", jpn: "トマトソースは少しありますが、多くはありません。それを使うことはできます。" }
            ],
            writingTask: {
                promptEng: "Write three sentences describing the food or drinks in your kitchen. Use uncountable nouns (like water, rice, meat, bread) and quantifiers (a lot of, some, a little, not much, not any).",
                promptJpn: "あなたのキッチンにある食べ物や飲み物について、3つの文を書いてください。不可算名詞（water, rice, meat, breadなど）と数量詞（a lot of, some, a little, not much, not any）を使用してください。"
            }
        }
    },
    {
        id: 23,
        title: "Lesson 23: How to make a shopping list",
        goal: "Use counters and measurements (e.g., a cup of, a loaf of, 200 grams of) to specify exact amounts of uncountable nouns. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『a cup of』『a loaf of』『200 grams of』などの単位を使って、不可算名詞の正確な量を指定する。)</span>",
        vocab: [
            { eng: "Cup", jpn: "カップ", exEng: "A cup of coffee.", exJpn: "コーヒー1杯。" },
            { eng: "Loaf", jpn: "パンの塊", exEng: "A loaf of bread.", exJpn: "パン1塊。" },
            { eng: "Tub", jpn: "容器 / パック", exEng: "A tub of butter.", exJpn: "バター1パック。" },
            { eng: "Bottle", jpn: "瓶 / ボトル", exEng: "A bottle of water.", exJpn: "水1本。" },
            { eng: "Gram", jpn: "グラム", exEng: "100 grams of sugar.", exJpn: "100グラムの砂糖。" },
            { eng: "Liter", jpn: "リットル", exEng: "A liter of milk.", exJpn: "1リットルの牛乳。" },
            { eng: "Slice", jpn: "薄切り / スライス", exEng: "A slice of pizza.", exJpn: "ピザ1切れ。" },
            { eng: "Piece", jpn: "ピース / 一切れ", exEng: "A piece of cake.", exJpn: "ケーキ1切れ。" },
            { eng: "Flour", jpn: "小麦粉", exEng: "We need flour.", exJpn: "小麦粉が必要です。" },
            { eng: "Butter", jpn: "バター", exEng: "Put butter on it.", exJpn: "それにバターを塗ってください。" },
            { eng: "Ice cream", jpn: "アイスクリーム", exEng: "I love ice cream.", exJpn: "私はアイスクリームが大好きです。" },
            { eng: "Water", jpn: "水", exEng: "Drink water.", exJpn: "水を飲んでください。" },
            { eng: "Bread", jpn: "パン", exEng: "I eat bread.", exJpn: "私はパンを食べます。" },
            { eng: "Recipe", jpn: "レシピ / 作り方", exEng: "Follow the recipe.", exJpn: "レシピに従ってください。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Let's make the shopping list. What do we need first?", jpn: "買い物リストを作りましょう。まず何が必要ですか？" },
            { speaker: "B", eng: "<span class='swappable'>We need <i class='grammar-target'>200 grams of</i> flour.</span>", jpn: "小麦粉が200グラム必要です。" },
            { speaker: "A", eng: "Okay. Do we need any butter?", jpn: "わかりました。バターは必要ですか？" },
            { speaker: "B", eng: "Yes, please buy <i class='grammar-target'>a tub of</i> butter.", jpn: "はい、バターを1パック買ってください。" },
            { speaker: "A", eng: "Got it. What else do we need?", jpn: "了解しました。他には何が必要ですか？" },
            { speaker: "B", eng: "<span class='swappable'>We need <i class='grammar-target'>a bottle of</i> water.</span> Let's go!", jpn: "水を1本（1ボトル）必要です。行きましょう！" }
        ],
        dialogueStructure: [
            "Propose action + Ask for the first item <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(行動を提案する ＋ 最初のアイテムを尋ねる)</span>",
            "> State exact weights <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(正確な重さを伝える)</span>",
            "Acknowledge + Ask about specific items <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了解する ＋ 特定のアイテムについて尋ねる)</span>",
            "> Agree + Request containers/shapes <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 容器や形を指定して頼む)</span>",
            "Acknowledge + Ask for further items <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了解する ＋ 他に何が必要か尋ねる)</span>",
            "> State volumes/pieces + Say let's go <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(体積や個数を伝える ＋ 行こうと言う)</span>"
        ],
        expressions: [
            { 
                category: "1. Stating exact weights/volumes (正確な重さや体積を伝える)", 
                options: [
                    { eng: "We need 200 grams of flour.", jpn: "小麦粉が200グラム必要です。" }, 
                    { eng: "We need a bottle of water.", jpn: "ボトル1本の水が必要です。" }, 
                    { eng: "We need a cup of milk.", jpn: "カップ1杯の牛乳が必要です。" }
                ] 
            },
            { 
                category: "2. Requesting containers/shapes (容器や形を指定して頼む)", 
                options: [
                    { eng: "Please buy a tub of butter.", jpn: "バターを1パック買ってください。" }, 
                    { eng: "Please buy a loaf of bread.", jpn: "パンを1塊買ってください。" }, 
                    { eng: "Please buy a slice of pizza.", jpn: "ピザを1切れ買ってください。" }
                ] 
            }
        ],
        grammar: {
            point: "Counters for Uncountable Nouns - 不可算名詞を数える単位",
            explanation: "Uncountable nouns (like water, bread, butter, or flour) cannot be counted directly (we cannot say 'two breads'). Instead, we use 'counters' or measure words to specify the amount or container.<br>• <strong>[Number / A]</strong> + <strong>[Counter]</strong> + <strong>of</strong> + <strong>[Noun]</strong><br>• Weight/Volume: <em>200 grams of</em> flour / <em>a liter of</em> water<br>• Containers: <em>a tub of</em> butter / <em>a bottle of</em> juice<br>• Shapes: <em>a loaf of</em> bread / <em>a slice of</em> pizza<br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（水、パン、バター、小麦粉などの不可算名詞（数えられない名詞）は、直接数字をつけて「two breads（2つのパン）」のように数えることができません。代わりに、日本語の「〜杯」「〜グラム」「〜切れ」に当たる「カウンター（単位・容器）」を使って量を指定します。この時、単位と名詞を繋ぐために必ず <strong>of</strong> を使います。<br>・<strong>重さ/体積：</strong> 200 grams of flour（200グラムの小麦粉）、a liter of water（1リットルの水）<br>・<strong>容器：</strong> a tub of butter（1パックのバター）、a bottle of juice（1本のジュース）<br>・<strong>形：</strong> a loaf of bread（1塊の食パン）、a slice of pizza（1切れのピザ）<br>料理のレシピや買い物リストを作る時に必須となる表現です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the pattern: '200 grams <u>of</u> flour', 'a tub <u>of</u> butter', and 'a bottle <u>of</u> water'. The word 'of' connects the counter to the food. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『200 grams <u>of</u> flour』『a tub <u>of</u> butter』『a bottle <u>of</u> water』というパターンに注目してください。『of』という単語が、単位と食べ物を繋いでいます。)</span>",
            examples: [
                { eng: "Can I have a cup of coffee?", jpn: "コーヒーを1杯いただけますか？" },
                { eng: "She ate two slices of bread for breakfast.", jpn: "彼女は朝食にパンを2切れ食べました。" },
                { eng: "We need three liters of water for the trip.", jpn: "旅行には3リットルの水が必要です。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "Please buy (tub / butter).", 
            target: "Please buy a tub of butter." 
        },
        grammarPractice: [
            { prompt: "We need (200 grams / flour)." },
            { prompt: "Can I have (cup / coffee)?" },
            { prompt: "She bought (bottle / water)." },
            { prompt: "He ate (slice / pizza)." },
            { prompt: "They need (loaf / bread)." }
        ],
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
            { before: "Can you pass me that", options: ["bottle", "slice", "loaf"], answer: "bottle", after: " of olive oil?" }
        ],
        roleplay: {
            a: "You are making a cake. Ask your partner to go to the store. Tell them to buy '200 grams of sugar' and 'a carton of milk'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたはケーキを作っています。パートナーに買い物に行くよう頼んでください。『200グラムの砂糖』と『1パックの牛乳』を買うように伝えてください。)</span>",
            b: "Agree to go. Ask if you should also buy 'a tub of butter' or 'a bottle of water'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(行くことに同意してください。『1パックのバター』や『1ボトルの水』も買うべきか尋ねてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Carton", jpn: "紙パック / カートン", exEng: "A carton of milk.", exJpn: "1パックの牛乳。" },
                { eng: "Can", jpn: "缶", exEng: "A can of soup.", exJpn: "スープ1缶。" },
                { eng: "Jar", jpn: "瓶 / ジャー", exEng: "A jar of jam.", exJpn: "ジャムの瓶。" },
                { eng: "Bag", jpn: "袋", exEng: "A bag of chips.", exJpn: "チップス1袋。" },
                { eng: "Box", jpn: "箱", exEng: "A box of cookies.", exJpn: "クッキー1箱。" },
                { eng: "Bowl", jpn: "ボウル / どんぶり", exEng: "A bowl of rice.", exJpn: "ご飯1杯。" },
                { eng: "Glass", jpn: "グラス", exEng: "A glass of wine.", exJpn: "ワイン1杯。" },
                { eng: "Sugar", jpn: "砂糖", exEng: "Add sugar.", exJpn: "砂糖を加えてください。" },
                { eng: "Salt", jpn: "塩", exEng: "Pass the salt.", exJpn: "塩を取ってください。" },
                { eng: "Tea", jpn: "お茶", exEng: "I drink tea.", exJpn: "私はお茶を飲みます。" },
                { eng: "Coffee", jpn: "コーヒー", exEng: "Hot coffee.", exJpn: "ホットコーヒー。" },
                { eng: "Cake", jpn: "ケーキ", exEng: "Bake a cake.", exJpn: "ケーキを焼いてください。" },
                { eng: "List", jpn: "リスト", exEng: "Make a list.", exJpn: "リストを作ってください。" },
                { eng: "Shop", jpn: "買い物をする / 店", exEng: "Let's shop.", exJpn: "買い物をしましょう。" }
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
                { speaker: "A", eng: "Yes, please grab a loaf of white bread. Oh, and a jar of strawberry jam.", jpn: "はい、白いパンを1塊取ってください。あ、あとイチゴジャムの瓶も1つ。" }
            ],
            writingTask: {
                promptEng: "Imagine you are making a shopping list or a recipe. Write three sentences using counters (like a cup of, a loaf of, 200 grams of, a bottle of).",
                promptJpn: "買い物リストやレシピを作っていると想像してください。単位（a cup of, a loaf of, 200 grams of, a bottle of など）を使って3つの文を書いてください。"
            }
        }
    },,{
        id: 24,
        title: "Lesson 24: How to talk about general facts",
        goal: "Talk about general truths, concepts, and categories using plural and uncountable nouns without articles. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(冠詞（a, an, the）を使わずに、複数形や不可算名詞を用いて、一般的な事実や概念、カテゴリーについて話す。)</span>",
        vocab: [
            { eng: "Dogs", jpn: "犬（全般）", exEng: "Dogs are friendly.", exJpn: "犬は人懐っこいです。" },
            { eng: "Cats", jpn: "猫（全般）", exEng: "Cats sleep a lot.", exJpn: "猫はよく眠ります。" },
            { eng: "Animals", jpn: "動物（全般）", exEng: "Animals need water.", exJpn: "動物は水を必要とします。" },
            { eng: "People", jpn: "人々", exEng: "People are busy.", exJpn: "人々は忙しいです。" },
            { eng: "Water", jpn: "水", exEng: "Water is important.", exJpn: "水は重要です。" },
            { eng: "Coffee", jpn: "コーヒー", exEng: "Coffee is bitter.", exJpn: "コーヒーは苦いです。" },
            { eng: "Time", jpn: "時間", exEng: "Time is money.", exJpn: "時は金なり。" },
            { eng: "Money", jpn: "お金", exEng: "Money is necessary.", exJpn: "お金は必要です。" },
            { eng: "Information", jpn: "情報", exEng: "Information is free.", exJpn: "情報は無料です。" },
            { eng: "Important", jpn: "重要な / 大切な", exEng: "This is important.", exJpn: "これは重要です。" },
            { eng: "Dangerous", jpn: "危険な", exEng: "That is dangerous.", exJpn: "それは危険です。" },
            { eng: "Need", jpn: "必要とする", exEng: "I need help.", exJpn: "助けが必要です。" },
            { eng: "Love", jpn: "愛している / 大好き", exEng: "I love music.", exJpn: "私は音楽が大好きです。" },
            { eng: "Hate", jpn: "嫌い", exEng: "I hate spiders.", exJpn: "私はクモが嫌いです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>Do you like <i class='grammar-target'>dogs</i>?</span>", jpn: "犬は好きですか？" },
            { speaker: "B", eng: "Yes, I love <i class='grammar-target'>dogs</i>. But <i class='grammar-target'>cats</i> are my favorite animals.", jpn: "はい、犬は大好きです。でも、猫が私の一番好きな動物です。" },
            { speaker: "A", eng: "I agree. <span class='swappable'><i class='grammar-target'>Animals</i> are very important for people.</span>", jpn: "同感です。動物は人々にとってとても大切です。" },
            { speaker: "B", eng: "That is true. By the way, do you drink <i class='grammar-target'>coffee</i>?", jpn: "その通りですね。ところで、コーヒーは飲みますか？" },
            { speaker: "A", eng: "Yes, I drink it every morning. <i class='grammar-target'>Water</i> and <i class='grammar-target'>coffee</i> are my favorite drinks.", jpn: "はい、毎朝飲みます。水とコーヒーが私の好きな飲み物です。" }
        ],
        dialogueStructure: [
            "Ask about general preferences <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(一般的な好みについて尋ねる)</span>",
            "> Answer + State favorite category <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(答える ＋ 一番好きなカテゴリーを伝える)</span>",
            "Agree + State general fact <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 一般的な事実を述べる)</span>",
            "> Agree + Ask about a general habit <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 一般的な習慣について尋ねる)</span>",
            "Answer + State favorites <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(答える ＋ お気に入りのものを伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about general preferences (一般的な好みを尋ねる)", 
                options: [
                    { eng: "Do you like dogs?", jpn: "犬は好きですか？" }, 
                    { eng: "Do you eat meat?", jpn: "肉は食べますか？" }, 
                    { eng: "Do you drink coffee?", jpn: "コーヒーは飲みますか？" }
                ] 
            },
            { 
                category: "2. Making general statements (一般的な事実を伝える)", 
                options: [
                    { eng: "Animals are very important for people.", jpn: "動物は人々にとってとても重要です。" }, 
                    { eng: "Cats are my favorite animals.", jpn: "猫が私の一番好きな動物です。" }, 
                    { eng: "Water is good for you.", jpn: "水は体に良いです。" }
                ] 
            }
        ],
        grammar: {
            point: "No article for general things (Zero Article) - 一般的な事柄を表す無冠詞（ゼロ冠詞）",
            explanation: "When we talk about things in general (all dogs, all water in the world), we do NOT use 'the', 'a', or 'an'. We just use the plural noun (dogs, cars) or the uncountable noun (water, money, time). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「犬が好きです」「水は大切です」のように、特定の1つではなく「世の中のすべてのそれ」という一般的な事柄やカテゴリーについて話すときは、『a/an』や『the』などの冠詞を一切つけない「ゼロ冠詞」のルールを使います。数えられる名詞の場合は必ず複数形にして「dogs」「cats」とし、数えられない名詞の場合はそのまま「water」「coffee」として使います。もしここで「I like the dogs」と言ってしまうと、「（目の前にいる特定の）その犬たちが好きです」という意味になってしまうので注意しましょう。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how there are no articles before the general nouns: 'I love <u>dogs</u>' (not <em>the</em> dogs) and '<u>Water</u> and <u>coffee</u> are my favorite' (not <em>the</em> water). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：一般的な名詞の前に冠詞がないことに注目してください：『I love <u>dogs</u>（<em>the</em> dogs ではない）』や『<u>Water</u> and <u>coffee</u> are my favorite（<em>the</em> water ではない）』。)</span>",
            examples: [
                { eng: "People need sleep.", jpn: "人は睡眠を必要とします。" },
                { eng: "Cars are expensive.", jpn: "車（という乗り物全般）は高いです。" },
                { eng: "I listen to music every day.", jpn: "私は毎日音楽（全般）を聴きます。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I like (dog).", 
            target: "I like dogs." 
        },
        grammarPractice: [
            { prompt: "(People) need (water)." },
            { prompt: "I love (cat)." },
            { prompt: "(Time) is (money)." },
            { prompt: "Do you drink (coffee)?" },
            { prompt: "(Car) are expensive." }
        ],
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
            { before: "", options: ["People", "The people", "A people"], answer: "People", after: " need food to live." }
        ],
        roleplay: {
            a: "Ask your partner about their general preferences. Ask them if they like a certain animal, and if they like a certain type of food or drink. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーの一般的な好みについて尋ねてください。特定の動物が好きか、また特定の食べ物や飲み物が好きか聞いてください。)</span>",
            b: "Answer your partner's questions using nouns without articles (e.g., 'I like dogs', 'I drink tea'). Add one more general fact (e.g., 'Tea is healthy'). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(冠詞をつけない名詞を使って質問に答えてください（例：「犬が好きです」「お茶を飲みます」）。さらに、一般的な事実をもう1つ付け加えてください（例：「お茶は健康的です」）。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Health", jpn: "健康", exEng: "Health is important.", exJpn: "健康は大切です。" },
                { eng: "Healthy", jpn: "健康的な", exEng: "Eat healthy food.", exJpn: "健康的な食べ物を食べてください。" },
                { eng: "Fruit", jpn: "果物（全般）", exEng: "I love fruit.", exJpn: "私は果物が大好きです。" },
                { eng: "Vegetables", jpn: "野菜（全般）", exEng: "Eat your vegetables.", exJpn: "野菜を食べてください。" },
                { eng: "Sugar", jpn: "砂糖", exEng: "Sugar is sweet.", exJpn: "砂糖は甘いです。" },
                { eng: "Salt", jpn: "塩", exEng: "Don't use much salt.", exJpn: "塩をあまり使わないでください。" },
                { eng: "Sleep", jpn: "睡眠", exEng: "I need sleep.", exJpn: "私は睡眠が必要です。" },
                { eng: "Exercise", jpn: "運動", exEng: "Exercise is good.", exJpn: "運動は体に良いです。" },
                { eng: "Science", jpn: "科学", exEng: "Science is interesting.", exJpn: "科学は面白いです。" },
                { eng: "Nature", jpn: "自然", exEng: "Nature is beautiful.", exJpn: "自然は美しいです。" },
		        { eng: "Meat", jpn: "肉", exEng: "I eat meat.", exJpn: "私は肉を食べます。" },	
		        { eng: "Fish", jpn: "魚", exEng: "Fish swim.", exJpn: "魚は泳ぎます。" },
                { eng: "Plants", jpn: "植物", exEng: "Plants need water.", exJpn: "植物は水を必要とします。" },
                { eng: "Grow", jpn: "育つ / 成長する", exEng: "Trees grow tall.", exJpn: "木は高く成長します。" }
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
                { speaker: "A", eng: "No. I like animals, but I don't have time.", jpn: "いいえ。動物は好きですが、時間がありません。" }
            ],
            writingTask: {
                promptEng: "Write three sentences stating general facts about the world or your preferences. Do NOT use 'the' or 'a' before the general nouns.",
                promptJpn: "世の中の一般的な事実やあなたの好みについて、3つの文を書いてください。一般的な名詞の前には『the』や『a』を使用しないでください。"
            }
        }
    },
    {
        id: 25,
        title: "Lesson 25: How to shop for clothes",
        goal: "Ask to try on clothes and ask for a different size or color in a store. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(服の試着をお願いし、お店で違うサイズや色があるか尋ねる。)</span>",
        vocab: [
            { eng: "Shirt", jpn: "シャツ", exEng: "I like this shirt.", exJpn: "私はこのシャツが好きです。" },
            { eng: "Pants", jpn: "ズボン", exEng: "These pants are long.", exJpn: "これらのズボンは長いです。" },
            { eng: "Dress", jpn: "ドレス / ワンピース", exEng: "She wears a dress.", exJpn: "彼女はドレスを着ています。" },
            { eng: "Jacket", jpn: "ジャケット", exEng: "Take your jacket.", exJpn: "ジャケットを持っていってください。" },
            { eng: "Shoes", jpn: "靴", exEng: "My shoes are dirty.", exJpn: "私の靴は汚れています。" },
            { eng: "Size", jpn: "サイズ", exEng: "What is your size?", exJpn: "あなたのサイズは何ですか？" },
            { eng: "Small", jpn: "Sサイズ / 小さい", exEng: "It is too small.", exJpn: "それは小さすぎます。" },
            { eng: "Medium", jpn: "Mサイズ / 中くらい", exEng: "I need a medium.", exJpn: "Mサイズが必要です。" },
            { eng: "Large", jpn: "Lサイズ / 大きい", exEng: "This shirt is large.", exJpn: "このシャツはLサイズです。" },
            { eng: "Color", jpn: "色", exEng: "What color is it?", exJpn: "それは何色ですか？" },
            { eng: "Red", jpn: "赤", exEng: "I like red cars.", exJpn: "私は赤い車が好きです。" },
            { eng: "Blue", jpn: "青", exEng: "The sky is blue.", exJpn: "空は青いです。" },
            { eng: "Black", jpn: "黒", exEng: "He wears black shoes.", exJpn: "彼は黒い靴を履いています。" },
            { eng: "White", jpn: "白", exEng: "A white shirt.", exJpn: "白いシャツ。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me, <span class='swappable'>can I try this on?</span>", jpn: "すみません、これを試着してもいいですか？" },
            { speaker: "B", eng: "Yes, the fitting rooms are right there.", jpn: "はい、試着室はあちらです。" },
            { speaker: "B", eng: "(After fitting) How is it?", jpn: "（試着後）いかがですか？" },
            { speaker: "A", eng: "It is a little <i class='grammar-target'>too small</i>. <span class='swappable'>Do you have this in a medium?</span>", jpn: "少し小さすぎます。これのMサイズはありますか？" },
            { speaker: "B", eng: "Let me check. Yes, here you go.", jpn: "確認します。はい、どうぞ。" },
            { speaker: "A", eng: "Thank you. Do you have this in blue?", jpn: "ありがとうございます。これの青色はありますか？" },
            { speaker: "B", eng: "I'm sorry, we only have black.", jpn: "申し訳ありません、黒しかありません。" }
        ],
        dialogueStructure: [
            "Get attention + Ask to try on <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(声をかける ＋ 試着をお願いする)</span>",
            "> Agree + Show fitting rooms <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(承諾する ＋ 試着室を案内する)</span>",
            "> Ask about the fit <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(サイズ感について尋ねる)</span>",
            "State problem with fit + Ask for different size <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(サイズの問題を伝える ＋ 違うサイズを尋ねる)</span>",
            "> Check + Hand over item <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(確認する ＋ 商品を渡す)</span>",
            "Say thank you + Ask for different color <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(お礼を言う ＋ 違う色があるか尋ねる)</span>",
            "> Apologize + State available color <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(謝る ＋ 在庫のある色を伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking to try on (試着のお願い)", 
                options: [
                    { eng: "Can I try this on?", jpn: "これを試着してもいいですか？" }, 
                    { eng: "Where are the fitting rooms?", jpn: "試着室はどこですか？" }, 
                    { eng: "I would like to try this.", jpn: "これを試着したいのですが。" }
                ] 
            },
            { 
                category: "2. Asking for variations (違うサイズや色を尋ねる)", 
                options: [
                    { eng: "Do you have this in a medium?", jpn: "これのMサイズはありますか？" }, 
                    { eng: "Do you have this in blue?", jpn: "これの青色はありますか？" }, 
                    { eng: "Does this come in red?", jpn: "これの赤色はありますか？" }
                ] 
            }
        ],
        grammar: {
            point: "Too + Adjective - 〜すぎる（否定的な意味）",
            explanation: "We use 'too' before an adjective to say that something is more than we want or need. It usually has a negative meaning. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（『too』を形容詞の前に置くと、「〜すぎる」という意味になります。「very（とても）」と似ていますが、「too」には「許容範囲を超えていて困る」「ネガティブである」というニュアンスが含まれます。例えば、「It is very big（とても大きい）」は単なる事実や褒め言葉にもなりますが、「It is too big（大きすぎる）」は「大きすぎて自分には合わない・着られない」という否定的な意味を持ちます。洋服のサイズが合わない時や、値段が高すぎる時にお店でよく使われる文法です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the phrase: 'It is a little <u>too small</u>.' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『It is a little <u>too small</u>.』というフレーズに注目してください。)</span>",
            examples: [
                { eng: "The shirt is too big.", jpn: "シャツが大きすぎます。" },
                { eng: "These shoes are too expensive.", jpn: "この靴は高すぎます。" },
                { eng: "The jacket is too short.", jpn: "ジャケットが短すぎます。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "The shoes / expensive", 
            target: "The shoes are too expensive." 
        },
        grammarPractice: [
            { prompt: "The shirt / big" },
            { prompt: "The jacket / short" },
            { prompt: "These pants / long" },
            { prompt: "The hat / small" },
            { prompt: "The room / cold" }
        ],
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
            { before: "Do you have this in", options: ["blue", "color", "big"], answer: "blue", after: "?" }
        ],
        roleplay: {
            a: "You are a customer. Ask to try on a jacket. After trying it on, tell the clerk it is too big, and ask if they have a smaller size. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたは客です。ジャケットの試着をお願いしてください。試着後、大きすぎることを店員に伝え、もっと小さいサイズがあるか尋ねてください。)</span>",
            b: "You are the store clerk. Show the customer where the fitting room is. After they try it on, ask how it fits, and hand them a smaller size. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(店員役です。試着室の場所を案内してください。試着後、サイズ感を聞き、小さいサイズを渡してください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Fitting room", jpn: "試着室", exEng: "The fitting room is empty.", exJpn: "試着室は空いています。" },
                { eng: "Mirror", jpn: "鏡", exEng: "Look in the mirror.", exJpn: "鏡を見てください。" },
                { eng: "Customer", jpn: "客", exEng: "The customer is waiting.", exJpn: "お客様が待っています。" },
                { eng: "Clerk", jpn: "店員", exEng: "Ask the clerk.", exJpn: "店員に聞いてください。" },
                { eng: "Cashier", jpn: "レジ", exEng: "Pay at the cashier.", exJpn: "レジで支払ってください。" },
                { eng: "Receipt", jpn: "レシート", exEng: "Here is your receipt.", exJpn: "こちらがレシートです。" },
                { eng: "Return", jpn: "返品する", exEng: "I want to return this.", exJpn: "これを返品したいです。" },
                { eng: "Exchange", jpn: "交換する", exEng: "Can I exchange this?", exJpn: "これを交換できますか？" },
                { eng: "Tight", jpn: "きつい", exEng: "The shoes are tight.", exJpn: "靴がきついです。" },
                { eng: "Loose", jpn: "ゆるい", exEng: "These pants are loose.", exJpn: "このズボンはゆるいです。" },
                { eng: "Long", jpn: "長い", exEng: "The dress is long.", exJpn: "そのドレスは長いです。" },
                { eng: "Short", jpn: "短い", exEng: "The skirt is short.", exJpn: "そのスカートは短いです。" },
                { eng: "Cotton", jpn: "綿", exEng: "It is made of cotton.", exJpn: "それは綿で作られています。" },
                { eng: "Wool", jpn: "ウール / 羊毛", exEng: "This wool sweater is warm.", exJpn: "このウールのセーターは暖かいです。" }
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
                { speaker: "A", eng: "Yes, please. By the way, what is your return policy?", jpn: "はい、お願いします。ちなみに、返品ポリシーはどうなっていますか？" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about the last piece of clothing you bought. Describe what it is, its color, and how it fits (e.g., too big, too small, fits perfectly).",
                promptJpn: "最後に買った服について短い文章を書いてください。それが何か、色、そしてサイズ感（例：大きすぎる、小さすぎる、ぴったり）を描写してください。"
            }
        }
    },
    {
        id: 26,
        title: "Lesson 26: How to talk about your abilities",
        goal: "Ask and answer questions about the skills and abilities you have. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(自分ができるスキルや能力について質問し、答える。)</span>",
        vocab: [
            { eng: "Swim", jpn: "泳ぐ", exEng: "I can swim.", exJpn: "私は泳げます。" },
            { eng: "Drive", jpn: "運転する", exEng: "He can drive a car.", exJpn: "彼は車を運転できます。" },
            { eng: "Speak", jpn: "話す", exEng: "She speaks English.", exJpn: "彼女は英語を話します。" },
            { eng: "Ride", jpn: "乗る", exEng: "Ride a bicycle.", exJpn: "自転車に乗る。" },
            { eng: "Use", jpn: "使う", exEng: "I use a computer.", exJpn: "私はコンピューターを使います。" },
            { eng: "Play", jpn: "演奏する / スポーツをする", exEng: "Play the piano.", exJpn: "ピアノを弾く。" },
            { eng: "Cook", jpn: "料理する", exEng: "He cooks well.", exJpn: "彼は料理が上手です。" },
            { eng: "Ski", jpn: "スキーをする", exEng: "We ski in winter.", exJpn: "私たちは冬にスキーをします。" },
            { eng: "Sing", jpn: "歌う", exEng: "She sings nicely.", exJpn: "彼女は上手に歌います。" },
            { eng: "Dance", jpn: "踊る", exEng: "They dance together.", exJpn: "彼らは一緒に踊ります。" },
            { eng: "Fast", jpn: "速く", exEng: "He runs fast.", exJpn: "彼は速く走ります。" },
            { eng: "Well", jpn: "上手に", exEng: "You speak well.", exJpn: "あなたは上手に話します。" },
            { eng: "A little", jpn: "少し", exEng: "I speak a little French.", exJpn: "私はフランス語を少し話します。" },
            { eng: "Language", jpn: "言語", exEng: "Learn a new language.", exJpn: "新しい言語を学ぶ。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'><i class='grammar-target'>Can you drive</i> a car?</span>", jpn: "車を運転できますか？" },
            { speaker: "B", eng: "<i class='grammar-target'>Yes, I can</i>. I drive every day. <span class='swappable'><i class='grammar-target'>Can you speak</i> Spanish?</span>", jpn: "はい、できます。毎日運転します。あなたはスペイン語を話せますか？" },
            { speaker: "A", eng: "<i class='grammar-target'>No, I can't</i>. But <i class='grammar-target'>I can speak</i> a little French.", jpn: "いいえ、話せません。でも、フランス語が少し話せます。" },
            { speaker: "B", eng: "That is cool. Can you play the piano?", jpn: "それはかっこいいですね。ピアノは弾けますか？" },
            { speaker: "A", eng: "Yes, <i class='grammar-target'>I can play</i> it very well.", jpn: "はい、とても上手に弾けます。" }
        ],
        dialogueStructure: [
            "Ask about an ability <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(能力について尋ねる)</span>",
            "> Answer affirmatively + Ask about a language <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(肯定で答える ＋ 言語について尋ねる)</span>",
            "Answer negatively + State a limited ability <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(否定で答える ＋ 限られた能力を伝える)</span>",
            "> React + Ask about a skill <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ スキルについて尋ねる)</span>",
            "Answer affirmatively with detail <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(詳細を加えて肯定で答える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about abilities (能力を尋ねる)", 
                options: [
                    { eng: "Can you drive a car?", jpn: "車を運転できますか？" }, 
                    { eng: "Can you swim?", jpn: "泳げますか？" }, 
                    { eng: "Can you speak Spanish?", jpn: "スペイン語を話せますか？" }
                ] 
            },
            { 
                category: "2. Answering about abilities (能力について答える)", 
                options: [
                    { eng: "Yes, I can.", jpn: "はい、できます。" }, 
                    { eng: "No, I can't.", jpn: "いいえ、できません。" }, 
                    { eng: "I can speak a little French.", jpn: "フランス語が少し話せます。" }
                ] 
            }
        ],
        grammar: {
            point: "Modal Verb 'Can' for Ability - 助動詞 'Can'（能力）",
            explanation: "We use 'can' followed by a base verb to talk about skills and abilities. The negative form is 'cannot' or 'can't'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「〜ができる」という能力やスキルを表す時には、助動詞の『can』を使います。使い方のルールはとても簡単で、主語（I, you, he, she など）に関係なく常に形が変わりません。また、『can』の後ろに来る動詞は、必ず「原形（元の形）」になります（例：He can <strong>swim</strong>）。否定形は『cannot』または省略形の『can't』を使います。質問を作る時は『Can you...?』と Can を文の先頭に持ってくるだけで完成します。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the structure: '<u>Can you drive</u> a car?' and '<u>I can speak</u> a little French.' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>Can you drive</u>...』や『<u>I can speak</u>...』の構造に注目してください。)</span>",
            examples: [
                { eng: "I can swim very fast.", jpn: "私はとても速く泳ぐことができます。" },
                { eng: "She can't speak English.", jpn: "彼女は英語を話せません。" },
                { eng: "Can he play the guitar?", jpn: "彼はギターを弾けますか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "He / drive a car (+)", 
            target: "He can drive a car." 
        },
        grammarPractice: [
            { prompt: "I / speak Spanish (-)" },
            { prompt: "They / play tennis (+)" },
            { prompt: "She / swim fast (?)" },
            { prompt: "We / cook Italian food (+)" },
            { prompt: "You / play the piano (-)" }
        ],
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
            { before: "He can cook very", options: ["well", "good", "nice"], answer: "well", after: "." }
        ],
        roleplay: {
            a: "You are getting to know a new coworker. Ask them if they can drive, and ask what languages they can speak. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(新しい同僚のことを知ろうとしています。運転できるか尋ね、何語が話せるか聞いてください。)</span>",
            b: "You are the new coworker. Answer the questions, and ask your partner if they can play any instruments. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(新しい同僚の役です。質問に答え、相手に何か楽器が弾けるか尋ねてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Computer", jpn: "コンピューター", exEng: "I use a computer.", exJpn: "私はコンピューターを使います。" },
                { eng: "Smartphone", jpn: "スマートフォン", exEng: "Look at the smartphone.", exJpn: "スマートフォンを見てください。" },
                { eng: "Type", jpn: "タイピングする", exEng: "I type fast.", exJpn: "私は速くタイピングします。" },
                { eng: "Code", jpn: "プログラミングする", exEng: "She can code in Python.", exJpn: "彼女はPythonでプログラミングができます。" },
                { eng: "Fix", jpn: "直す / 修理する", exEng: "He fixes cars.", exJpn: "彼は車を修理します。" },
                { eng: "Build", jpn: "建てる / 作る", exEng: "Build a house.", exJpn: "家を建てる。" },
                { eng: "Bake", jpn: "焼く", exEng: "I bake cookies.", exJpn: "私はクッキーを焼きます。" },
                { eng: "Sew", jpn: "縫う", exEng: "Can you sew a button?", exJpn: "ボタンを縫い付けられますか？" },
                { eng: "Paint", jpn: "絵の具で描く", exEng: "Paint a picture.", exJpn: "絵を描いてください。" },
                { eng: "Draw", jpn: "線で描く", exEng: "Draw a line.", exJpn: "線を引いてください。" },
                { eng: "Translate", jpn: "翻訳する", exEng: "Translate this text.", exJpn: "このテキストを翻訳してください。" },
                { eng: "Understand", jpn: "理解する", exEng: "Do you understand?", exJpn: "理解できますか？" },
                { eng: "Quickly", jpn: "速く", exEng: "Run quickly.", exJpn: "速く走ってください。" },
                { eng: "Slowly", jpn: "ゆっくり", exEng: "Speak slowly.", exJpn: "ゆっくり話してください。" }
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
                { speaker: "A", eng: "That is okay. Do you know anyone who can speak French?", jpn: "大丈夫だよ。誰かフランス語を話せる人を知ってる？" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your skills. Include two things you can do well, and one thing you cannot do.",
                promptJpn: "あなたのスキルについて短い文章を書いてください。上手にできることを2つ、できないことを1つ含めてください。"
            }
        }
    },
    {
        id: 27,
        title: "Lesson 27: How to check into a hotel",
        goal: "Check into a hotel, provide your reservation details, and ask about hotel services. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(ホテルにチェックインし、予約情報を伝え、ホテルのサービスについて尋ねる。)</span>",
        vocab: [
            { eng: "Reservation", jpn: "予約", exEng: "I have a reservation.", exJpn: "私は予約をしています。" },
            { eng: "Passport", jpn: "パスポート", exEng: "Show your passport.", exJpn: "パスポートを見せてください。" },
            { eng: "Key card", jpn: "カードキー", exEng: "Here is your key card.", exJpn: "こちらがカードキーです。" },
            { eng: "Room", jpn: "部屋", exEng: "This is a nice room.", exJpn: "ここは素敵な部屋ですね。" },
            { eng: "Breakfast", jpn: "朝食", exEng: "Breakfast is at 7.", exJpn: "朝食は7時からです。" },
            { eng: "Elevator", jpn: "エレベーター", exEng: "Take the elevator.", exJpn: "エレベーターに乗ってください。" },
            { eng: "Wi-Fi", jpn: "ワイファイ", exEng: "Does the hotel have Wi-Fi?", exJpn: "ホテルにはWi-Fiがありますか？" },
            { eng: "Password", jpn: "パスワード", exEng: "I need the password.", exJpn: "パスワードが必要です。" },
            { eng: "Sign", jpn: "署名する", exEng: "Please sign here.", exJpn: "ここに署名してください。" },
            { eng: "Check-in", jpn: "チェックイン", exEng: "Check-in is at 3 PM.", exJpn: "チェックインは午後3時です。" },
            { eng: "Check-out", jpn: "チェックアウト", exEng: "Check-out is at 11 AM.", exJpn: "チェックアウトは午前11時です。" },
            { eng: "Luggage", jpn: "手荷物", exEng: "Leave your luggage here.", exJpn: "ここに手荷物を置いてください。" },
            { eng: "Floor", jpn: "階", exEng: "My room is on the 5th floor.", exJpn: "私の部屋は5階です。" },
            { eng: "Stay", jpn: "滞在", exEng: "Enjoy your stay.", exJpn: "ご滞在をお楽しみください。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hello, <span class='swappable'>I would like to check in.</span>", jpn: "こんにちは、チェックインをお願いします。" },
            { speaker: "B", eng: "Welcome! Can I have your name, please?", jpn: "いらっしゃいませ！お名前を伺えますか？" },
            { speaker: "A", eng: "My name is John Smith. I have a reservation.", jpn: "私の名前はジョンスミスです。予約しています。" },
            { speaker: "B", eng: "Thank you. Can I see your passport?", jpn: "ありがとうございます。パスポートを拝見できますか？" },
            { speaker: "A", eng: "Here you go. <span class='swappable'><i class='grammar-target'>Can you</i> tell me the Wi-Fi password?</span>", jpn: "はい、どうぞ。Wi-Fiのパスワードを教えてもらえますか？" },
            { speaker: "B", eng: "It is on the key card. Your room is on the 5th floor.", jpn: "カードキーに記載されています。お部屋は5階です。" }
        ],
        dialogueStructure: [
            "Greet + State intention to check in <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(挨拶 ＋ チェックインしたい旨を伝える)</span>",
            "> Welcome + Ask for name <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(歓迎する ＋ 名前を尋ねる)</span>",
            "State name + State reservation <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(名前を述べる ＋ 予約があることを伝える)</span>",
            "> Acknowledge + Ask for passport <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了承する ＋ パスポートを求める)</span>",
            "Hand over item + Ask for information <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(物を渡す ＋ 情報を尋ねる)</span>",
            "> Give information + Give room number <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(情報を教える ＋ 部屋番号を伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Checking in (チェックインの申し出)", 
                options: [
                    { eng: "I would like to check in.", jpn: "チェックインをお願いします。" }, 
                    { eng: "Check-in, please.", jpn: "チェックインをお願いします。" }, 
                    { eng: "I am here to check in.", jpn: "チェックインをしに来ました。" }
                ] 
            },
            { 
                category: "2. Asking for information (情報の尋ね方)", 
                options: [
                    { eng: "Can you tell me the Wi-Fi password?", jpn: "Wi-Fiのパスワードを教えてもらえますか？" }, 
                    { eng: "What time is breakfast?", jpn: "朝食は何時ですか？" }, 
                    { eng: "Where is the elevator?", jpn: "エレベーターはどこですか？" }
                ] 
            }
        ],
        grammar: {
            point: "Making Requests (Can you) 依頼",
            explanation: "Use 'Can you + verb' to ask someone to do something for you. It is a friendly and common way to make a request. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「〜してくれますか？」「〜してもらえますか？」と、相手に何かを依頼したりお願いしたりする時には、『Can you + 動詞の原形』を使います。これは、ホテルで情報を教えてほしい時や、レストランでサービスを頼む時など、日常のあらゆる場面で使われる非常に便利でフレンドリーな表現です。「Please」を文の最後につけると、より丁寧な印象になります。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the request: '<u>Can you</u> tell me the Wi-Fi password?' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>Can you</u> tell me...』という依頼表現に注目してください。)</span>",
            examples: [
                { eng: "Can you help me with my luggage?", jpn: "荷物を手伝ってくれますか？" },
                { eng: "Can you call a taxi for me?", jpn: "私のためにタクシーを呼んでくれますか？" },
                { eng: "Can you show me on the map?", jpn: "地図上で見せてくれますか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "help me (Can you)", 
            target: "Can you help me?" 
        },
        grammarPractice: [
            { prompt: "tell me the password (Can you)" },
            { prompt: "call a taxi (Can you)" },
            { prompt: "show me the room (Can you)" },
            { prompt: "give me a towel (Can you)" },
            { prompt: "close the window (Can you)" }
        ],
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
            { before: "What", options: ["time", "hour", "clock"], answer: "time", after: " is check-out?" }
        ],
        roleplay: {
            a: "You are a hotel guest. Greet the clerk, say you want to check in, give your name, show your passport, and ask what time breakfast is. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたはホテルの客です。店員に挨拶し、チェックインしたい旨を伝え、名前を名乗り、パスポートを見せ、朝食の時間を尋ねてください。)</span>",
            b: "You are the hotel clerk. Welcome the guest, ask for their name and passport, answer their question about breakfast, and give them their room number. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(ホテルの店員役です。客を歓迎し、名前とパスポートを求め、朝食についての質問に答え、部屋番号を伝えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Towel", jpn: "タオル", exEng: "I need a clean towel.", exJpn: "清潔なタオルが必要です。" },
                { eng: "Blanket", jpn: "毛布", exEng: "This blanket is warm.", exJpn: "この毛布は暖かいです。" },
                { eng: "Pillow", jpn: "枕", exEng: "I need an extra pillow.", exJpn: "追加の枕が必要です。" },
                { eng: "Soap", jpn: "石鹸", exEng: "Wash with soap.", exJpn: "石鹸で洗ってください。" },
                { eng: "Shampoo", jpn: "シャンプー", exEng: "Use this shampoo.", exJpn: "このシャンプーを使ってください。" },
                { eng: "Toothbrush", jpn: "歯ブラシ", exEng: "I forgot my toothbrush.", exJpn: "歯ブラシを忘れました。" },
                { eng: "Air conditioner", jpn: "エアコン", exEng: "Turn on the air conditioner.", exJpn: "エアコンをつけてください。" },
                { eng: "Heater", jpn: "ヒーター / 暖房", exEng: "The heater is broken.", exJpn: "ヒーターが壊れています。" },
                { eng: "Remote control", jpn: "リモコン", exEng: "Where is the remote control?", exJpn: "リモコンはどこですか？" },
                { eng: "Wake-up call", jpn: "モーニングコール", exEng: "I want a wake-up call.", exJpn: "モーニングコールをお願いします。" },
                { eng: "Reception", jpn: "フロント / 受付", exEng: "Call the reception.", exJpn: "フロントに電話してください。" },
                { eng: "Pool", jpn: "プール", exEng: "Let's swim in the pool.", exJpn: "プールで泳ぎましょう。" },
                { eng: "Gym", jpn: "ジム", exEng: "The hotel has a gym.", exJpn: "ホテルにはジムがあります。" },
                { eng: "Stairs", jpn: "階段", exEng: "Use the stairs.", exJpn: "階段を使ってください。" }
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
                { speaker: "A", eng: "Thank you. Also, can you tell me what time check-out is?", jpn: "ありがとうございます。それから、チェックアウトは何時か教えてもらえますか？" }
            ],
            writingTask: {
                promptEng: "Imagine you are staying at a hotel. Write a short paragraph describing what you do at the hotel. Mention checking in, asking for the Wi-Fi password, and what time you eat breakfast.",
                promptJpn: "ホテルに滞在していると想像してください。ホテルで何をするかを描写する短い文章を書いてください。チェックインすること、Wi-Fiのパスワードを尋ねること、そして朝食を食べる時間を含めてください。"
            }
        }
    },
    {
        id: 28,
        title: "Lesson 28: How to ask for a favor",
        goal: "Politely ask someone to do something for you using 'Can you...'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『Can you...』を使って、誰かに何かをしてくれるよう丁寧に頼む。)</span>",
        vocab: [
            { eng: "Can", jpn: "〜してくれますか？ / できる", exEng: "Can you help me?", exJpn: "手伝ってくれますか？" },
            { eng: "Help", jpn: "手伝う / 助ける", exEng: "Please help me.", exJpn: "助けてください。" },
            { eng: "Favor", jpn: "お願い / 親切な行為", exEng: "Do me a favor.", exJpn: "お願いを聞いてください。" },
            { eng: "Open", jpn: "開ける", exEng: "Open the door.", exJpn: "ドアを開けてください。" },
            { eng: "Close", jpn: "閉める", exEng: "Close the window.", exJpn: "窓を閉めてください。" },
            { eng: "Turn on", jpn: "（電気などを）つける", exEng: "Turn on the light.", exJpn: "電気をつけてください。" },
            { eng: "Turn off", jpn: "（電気などを）消す", exEng: "Turn off the TV.", exJpn: "テレビを消してください。" },
            { eng: "Window", jpn: "窓", exEng: "Look out the window.", exJpn: "窓の外を見てください。" },
            { eng: "Door", jpn: "ドア", exEng: "Lock the door.", exJpn: "ドアに鍵をかけてください。" },
            { eng: "Heater", jpn: "ヒーター / 暖房", exEng: "Turn on the heater.", exJpn: "ヒーターをつけてください。" },
            { eng: "Blanket", jpn: "毛布 / ブランケット", exEng: "I need a blanket.", exJpn: "毛布が必要です。" },
            { eng: "Broken", jpn: "壊れている", exEng: "My phone is broken.", exJpn: "私の携帯電話は壊れています。" },
            { eng: "Sure", jpn: "もちろん", exEng: "Sure, I can help.", exJpn: "もちろん、手伝いますよ。" },
            { eng: "Sorry", jpn: "ごめんなさい", exEng: "Sorry, I can't.", exJpn: "ごめんなさい、できません。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me. <span class='swappable'><i class='grammar-target'>Can you</i> help me?</span>", jpn: "すみません。私を手伝ってくれますか？" },
            { speaker: "B", eng: "<span class='swappable'>Sure, what do you need?</span>", jpn: "もちろん、何が必要ですか？" },
            { speaker: "A", eng: "It is very cold in here. <span class='swappable'><i class='grammar-target'>Can you</i> close the window?</span>", jpn: "ここはとても寒いです。窓を閉めてくれますか？" },
            { speaker: "B", eng: "I am sorry, I can't. It is broken.", jpn: "ごめんなさい、できません。それは壊れているんです。" },
            { speaker: "A", eng: "Oh, I see. <i class='grammar-target'>Can you</i> turn on the heater?", jpn: "ああ、なるほど。ヒーターをつけてくれますか？" },
            { speaker: "B", eng: "Yes, of course. Just a minute.", jpn: "はい、もちろんです。少々お待ちください。" }
        ],
        dialogueStructure: [
            "Get attention + Ask for general help <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(声をかける ＋ 全体的な手助けを求める)</span>",
            "> Agree to help + Ask what is needed <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(手伝いに同意する ＋ 何が必要か尋ねる)</span>",
            "State problem + Make specific request <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(問題を伝える ＋ 具体的なお願いをする)</span>",
            "> Apologize + Give reason <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(謝る ＋ 理由を伝える)</span>",
            "Acknowledge + Make alternative request <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了解する ＋ 代わりのお願いをする)</span>",
            "> Agree + Tell them to wait <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 待つように言う)</span>"
        ],
        expressions: [
            { 
                category: "1. Making a request (お願いをする)", 
                options: [
                    { eng: "Can you help me?", jpn: "手伝ってくれますか？" }, 
                    { eng: "Can you close the window?", jpn: "窓を閉めてくれますか？" }, 
                    { eng: "Can you do me a favor?", jpn: "お願いを聞いてくれますか？" }
                ] 
            },
            { 
                category: "2. Responding to a request (お願いに対する返答)", 
                options: [
                    { eng: "Sure, what do you need?", jpn: "もちろん、何が必要ですか？" }, 
                    { eng: "Yes, of course.", jpn: "はい、もちろんです。" }, 
                    { eng: "I am sorry, I can't.", jpn: "ごめんなさい、できません。" }
                ] 
            }
        ],
        grammar: {
            point: "Using 'Can' for requests - お願いをする時の『Can』",
            explanation: "We use 'Can you' followed by a base verb to ask someone to do a favor for us. It is a common and friendly way to make a request.<br>• <strong>Can you</strong> + <strong>verb</strong> + <strong>object</strong>?<br>• Example: <em>Can you open the door?</em> <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（誰かに手助けをお願いする時には、『Can you...？（〜してくれますか？）』という表現を使います。『Can you』の後には必ず動詞の原形が続きます。これは、職場や日常生活で非常に頻繁に使われる、フレンドリーかつ一般的な依頼の形です。文の最後に「please」を付けると、より丁寧な響きになります。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how 'Can you' is always followed by a simple action: '<u>Can you help</u> me?', '<u>Can you close</u> the window?', and '<u>Can you turn on</u> the heater?'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『Can you』の後には常にシンプルな動作が続いていることに注目してください：『<u>Can you help</u> me?』『<u>Can you close</u> the window?』『<u>Can you turn on</u> the heater?』。)</span>",
            examples: [
                { eng: "Can you carry this bag?", jpn: "このカバンを運んでくれますか？" },
                { eng: "Can you wait here, please?", jpn: "ここで待っていてくれますか？" },
                { eng: "I am thirsty. Can you get me some water?", jpn: "喉が渇きました。私に水を持ってきてくれますか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "turn on the light (Can you)", 
            target: "Can you turn on the light?" 
        },
        grammarPractice: [
            { prompt: "help me (Can you)" },
            { prompt: "open the door (Can you)" },
            { prompt: "close the window (Can you)" },
            { prompt: "turn off the heater (Can you)" },
            { prompt: "bring me a blanket (Can you)" }
        ],
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
            { before: "Sure, I", options: ["can", "am", "do"], answer: "can", after: " do that for you." }
        ],
        roleplay: {
            a: "Ask your partner to do you a favor (e.g., turn on the light, open the door). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーにお願いをしてください（例：電気をつける、ドアを開けるなど）。)</span>",
            b: "Politely refuse. Tell them the object is broken. Ask if you can do something else for them. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(丁寧に断ってください。その物が壊れていると伝えます。代わりに何かできることがあるか尋ねてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Air conditioner", jpn: "エアコン", exEng: "The air conditioner is broken.", exJpn: "エアコンが壊れています。" },
                { eng: "Fan", jpn: "扇風機 / ファン", exEng: "Turn on the fan.", exJpn: "扇風機をつけてください。" },
                { eng: "Light", jpn: "電気 / 照明", exEng: "Turn off the light.", exJpn: "電気を消してください。" },
                { eng: "TV", jpn: "テレビ", exEng: "I am watching TV.", exJpn: "私はテレビを見ています。" },
                { eng: "Radio", jpn: "ラジオ", exEng: "Listen to the radio.", exJpn: "ラジオを聴いてください。" },
                { eng: "Use", jpn: "使う", exEng: "Can I use your pen?", exJpn: "あなたのペンを使ってもいいですか？" },
                { eng: "Borrow", jpn: "借りる", exEng: "Can I borrow a book?", exJpn: "本を借りてもいいですか？" },
                { eng: "Lend", jpn: "貸す", exEng: "Can you lend me money?", exJpn: "お金を貸してくれますか？" },
                { eng: "Carry", jpn: "運ぶ", exEng: "Carry this box.", exJpn: "この箱を運んでください。" },
                { eng: "Heavy", jpn: "重い", exEng: "The box is heavy.", exJpn: "その箱は重いです。" },
                { eng: "Push", jpn: "押す", exEng: "Push the door.", exJpn: "ドアを押してください。" },
                { eng: "Pull", jpn: "引く", exEng: "Pull the handle.", exJpn: "ハンドルを引いてください。" },
                { eng: "Hand", jpn: "手", exEng: "Wash your hands.", exJpn: "手を洗ってください。" },
                { eng: "Problem", jpn: "問題", exEng: "I have a problem.", exJpn: "問題があります。" }
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
                { speaker: "A", eng: "To the manager's office. Can you push the elevator button for me?", jpn: "マネージャーのオフィスです。私の代わりにエレベーターのボタンを押してくれますか？" }
            ],
            writingTask: {
                promptEng: "Imagine you need help from a friend or coworker. Write three questions asking for a favor using 'Can you...'.",
                promptJpn: "友人や同僚からの助けが必要だと想像してください。『Can you...』を使ってお願いをする質問を3つ書いてください。"
            }
        }
    },
    {
        id: 29,
        title: "Lesson 29: How to make an offer",
        goal: "Offer help, food, or services to other people politely using 'Can I...?'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『Can I...?』を使って、他の人に手伝いや食べ物などを丁寧に申し出る。)</span>",
        vocab: [
            { eng: "Help", jpn: "手伝う / 助ける", exEng: "I can help you.", exJpn: "お手伝いできますよ。" },
            { eng: "Carry", jpn: "運ぶ", exEng: "Let me carry this.", exJpn: "これを運ばせてください。" },
            { eng: "Open", jpn: "開ける", exEng: "Open the window.", exJpn: "窓を開けてください。" },
            { eng: "Close", jpn: "閉める", exEng: "Close the door.", exJpn: "ドアを閉めてください。" },
            { eng: "Get", jpn: "持ってくる / 取ってくる", exEng: "Can I get you water?", exJpn: "お水をお持ちしましょうか？" },
            { eng: "Take", jpn: "受け取る / 持っていく", exEng: "Take your coat.", exJpn: "コートをお持ちください。" },
            { eng: "Show", jpn: "見せる / 案内する", exEng: "I will show you.", exJpn: "ご案内します。" },
            { eng: "Bag", jpn: "カバン / 袋", exEng: "This is my bag.", exJpn: "これは私のカバンです。" },
            { eng: "Coat", jpn: "コート", exEng: "Wear a coat.", exJpn: "コートを着てください。" },
            { eng: "Water", jpn: "水", exEng: "Drink water.", exJpn: "水を飲んでください。" },
            { eng: "Drink", jpn: "飲み物 / 飲む", exEng: "Have a drink.", exJpn: "飲み物をどうぞ。" },
            { eng: "Heavy", jpn: "重い", exEng: "The box is heavy.", exJpn: "その箱は重いです。" },
            { eng: "Kind", jpn: "親切な", exEng: "You are very kind.", exJpn: "あなたはとても親切ですね。" },
            { eng: "Fine", jpn: "大丈夫な / 結構な", exEng: "I am fine, thanks.", exJpn: "大丈夫です、ありがとう。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Welcome! You look very tired. <span class='swappable'><i class='grammar-target'>Can I</i> help you with those bags?</span>", jpn: "いらっしゃい！とても疲れているようですね。そのカバンを手伝いましょうか？" },
            { speaker: "B", eng: "<span class='swappable'>Yes, please.</span> They are very heavy.", jpn: "はい、お願いします。とても重いんです。" },
            { speaker: "A", eng: "I will put them on the table. <i class='grammar-target'>Can I</i> get you some water?", jpn: "テーブルの上に置きますね。お水をお持ちしましょうか？" },
            { speaker: "B", eng: "Thank you. That is very kind.", jpn: "ありがとうございます。とてもご親切に。" },
            { speaker: "A", eng: "Here you go. <i class='grammar-target'>Can I</i> open the window?", jpn: "どうぞ。窓を開けましょうか？" },
            { speaker: "B", eng: "<span class='swappable'>No, thank you. I am fine.</span>", jpn: "いいえ、結構です。大丈夫ですよ。" }
        ],
        dialogueStructure: [
            "Greet + Offer help with items <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(挨拶 ＋ 荷物の手伝いを申し出る)</span>",
            "> Accept offer + State reason <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(申し出を受け入れる ＋ 理由を伝える)</span>",
            "State action + Offer a drink <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(アクションを伝える ＋ 飲み物を勧める)</span>",
            "> Accept offer + Thank them <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(申し出を受け入れる ＋ 感謝する)</span>",
            "Hand over item + Offer to adjust room <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(物を渡す ＋ 部屋の調整を申し出る)</span>",
            "> Decline offer politely <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(申し出を丁寧に断る)</span>"
        ],
        expressions: [
            { 
                category: "1. Making an offer (手伝いや物を申し出る)", 
                options: [
                    { eng: "Can I help you with those bags?", jpn: "そのカバンを手伝いましょうか？" }, 
                    { eng: "Can I get you some water?", jpn: "お水をお持ちしましょうか？" }, 
                    { eng: "Can I take your coat?", jpn: "コートをお預かりしましょうか？" }
                ] 
            },
            { 
                category: "2. Responding to an offer (申し出に対する返答)", 
                options: [
                    { eng: "Yes, please.", jpn: "はい、お願いします。" }, 
                    { eng: "Thank you, that is very kind.", jpn: "ありがとうございます。とてもご親切に。" }, 
                    { eng: "No, thank you. I am fine.", jpn: "いいえ、結構です。大丈夫ですよ。" }
                ] 
            }
        ],
        grammar: {
            point: "Modal verb 'can' (Making an offer) - 助動詞の 'can' (申し出・手伝い)",
            explanation: "We use 'Can I...?' followed by a base verb to offer help or offer things to other people politely. (Note: This is different from asking for permission. Here, you are volunteering to do something nice for someone). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（他の人に手助けやサービスを自分から申し出る時には、『Can I + 動詞の原形...?』を使います。直訳すると「私は〜できますか？」となりますが、この場面では「〜しましょうか？」「〜をお持ちしましょうか？」という意味になります。相手を気遣うための丁寧な表現で、接客の場面や、家にゲストを招いた時によく使われます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how A offers to do three different things for B: '<u>Can I help</u> you...?', '<u>Can I get</u> you...?', and '<u>Can I open</u>...?' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：AがBのためにどのように3つの異なる申し出をしているかに注目してください：『<u>Can I help</u> you...?』『<u>Can I get</u> you...?』『<u>Can I open</u>...?』)</span>",
            examples: [
                { eng: "Can I take your coat?", jpn: "コートをお預かりしましょうか？" },
                { eng: "Can I show you the menu?", jpn: "メニューをお見せしましょうか？" },
                { eng: "Can I get you a chair?", jpn: "椅子をお持ちしましょうか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "take your coat (Can I)", 
            target: "Can I take your coat?" 
        },
        grammarPractice: [
            { prompt: "help you with those bags (Can I)" },
            { prompt: "get you some water (Can I)" },
            { prompt: "open the window (Can I)" },
            { prompt: "show you the menu (Can I)" },
            { prompt: "carry this for you (Can I)" }
        ],
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
            { before: "No, thank you. I am", options: ["fine", "good", "kind"], answer: "fine", after: "." }
        ],
        roleplay: {
            a: "A visitor comes to your office or home. They look hot and they are holding a heavy coat. Offer to take their coat, and then offer them a drink using 'Can I...?'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(訪問者がオフィスや家にやってきました。暑そうで、重いコートを持っています。『Can I...?』を使ってコートを預かることを申し出、次に飲み物を勧めてください。)</span>",
            b: "You are the visitor. Accept the first offer, but politely decline the second offer. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(訪問者役です。最初の申し出は受け入れますが、2つ目の申し出は丁寧に断ってください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Guest", jpn: "客 / ゲスト", exEng: "The guest arrived.", exJpn: "ゲストが到着しました。" },
                { eng: "Host", jpn: "ホスト / 主人", exEng: "She is a good host.", exJpn: "彼女は良いホストです。" },
                { eng: "Customer", jpn: "客 / 顧客", exEng: "Help the customer.", exJpn: "お客様を助けてください。" },
                { eng: "Waiter", jpn: "ウェイター", exEng: "Call the waiter.", exJpn: "ウェイターを呼んでください。" },
                { eng: "Menu", jpn: "メニュー", exEng: "Can I see the menu?", exJpn: "メニューを見てもいいですか？" },
                { eng: "Order", jpn: "注文する", exEng: "I am ready to order.", exJpn: "注文する準備ができています。" },
                { eng: "Seat", jpn: "席", exEng: "Please take a seat.", exJpn: "席にお座りください。" },
                { eng: "Umbrella", jpn: "傘", exEng: "Don't forget your umbrella.", exJpn: "傘を忘れないでください。" },
                { eng: "Hold", jpn: "持つ / 握る", exEng: "Hold this bag.", exJpn: "このカバンを持ってください。" },
                { eng: "Bring", jpn: "持ってくる", exEng: "Bring some water.", exJpn: "水を持ってきてください。" },
                { eng: "Wash", jpn: "洗う", exEng: "Wash the dishes.", exJpn: "お皿を洗ってください。" },
                { eng: "Tired", jpn: "疲れた", exEng: "You look tired.", exJpn: "あなたは疲れているように見えます。" },
                { eng: "Thirsty", jpn: "喉が渇いた", exEng: "I am thirsty.", exJpn: "私は喉が渇きました。" },
                { eng: "Ready", jpn: "準備ができた", exEng: "Dinner is ready.", exJpn: "夕食の準備ができました。" }
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
                { speaker: "A", eng: "Okay. Please sit down. Can I bring you some water?", jpn: "わかりました。どうぞお座りください。お水をお持ちしましょうか？" }
            ],
            writingTask: {
                promptEng: "Imagine a friend visits your house. Write three sentences offering them help, food, or a drink using 'Can I...?'.",
                promptJpn: "友達があなたの家を訪ねてきたと想像してください。『Can I...?』を使って、手伝いや食べ物、飲み物を勧める文を3つ書いてください。"
            }
        }
    },
    {
        id: 30,
        title: "Lesson 30: How to order at a cafe",
        goal: "Order food and drinks confidently from a cafe menu. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(カフェのメニューから自信を持って食べ物や飲み物を注文する。)</span>",
        vocab: [
            { eng: "Coffee", jpn: "コーヒー", exEng: "I drink black coffee.", exJpn: "私はブラックコーヒーを飲みます。" },
            { eng: "Tea", jpn: "お茶 / 紅茶", exEng: "She prefers green tea.", exJpn: "彼女は緑茶を好みます。" },
            { eng: "Water", jpn: "水", exEng: "A glass of water, please.", exJpn: "お水を1杯お願いします。" },
            { eng: "Milk", jpn: "牛乳", exEng: "Add milk to my coffee.", exJpn: "コーヒーに牛乳を入れてください。" },
            { eng: "Juice", jpn: "ジュース", exEng: "He wants apple juice.", exJpn: "彼はリンゴジュースが欲しいです。" },
            { eng: "Bread", jpn: "パン", exEng: "This bread is warm.", exJpn: "このパンは温かいです。" },
            { eng: "Sandwich", jpn: "サンドイッチ", exEng: "I ate a sandwich.", exJpn: "私はサンドイッチを食べました。" },
            { eng: "Egg", jpn: "卵", exEng: "I had eggs for breakfast.", exJpn: "朝食に卵を食べました。" },
            { eng: "Meat", jpn: "肉", exEng: "Do you eat meat?", exJpn: "お肉は食べますか？" },
            { eng: "Fish", jpn: "魚", exEng: "We ordered fish.", exJpn: "私たちは魚を注文しました。" },
            { eng: "Rice", jpn: "ご飯", exEng: "I like rice.", exJpn: "私はご飯が好きです。" },
            { eng: "Salad", jpn: "サラダ", exEng: "This is a healthy salad.", exJpn: "これは健康的なサラダです。" },
            { eng: "Soup", jpn: "スープ", exEng: "The soup is very hot.", exJpn: "そのスープはとても熱いです。" },
            { eng: "Apple", jpn: "りんご", exEng: "I bought an apple.", exJpn: "私はリンゴを買いました。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hello, are you ready to order?", jpn: "こんにちは、ご注文はお決まりですか？" },
            { speaker: "B", eng: "Yes, please. <span class='swappable'>I <i class='grammar-target'>would like</i> a sandwich.</span>", jpn: "はい、お願いします。サンドイッチをください。" },
            { speaker: "A", eng: "Sure. Would you like a drink with that?", jpn: "かしこまりました。ご一緒に飲み物はいかがですか？" },
            { speaker: "B", eng: "Yes. <i class='grammar-target'>Can I have</i> a cup of coffee?", jpn: "はい。コーヒーを一杯いただけますか？" },
            { speaker: "A", eng: "Of course. <span class='swappable'>Is that for here or to go?</span>", jpn: "もちろんです。店内でお召し上がりですか、それともお持ち帰りですか？" },
            { speaker: "B", eng: "<span class='swappable'>For here, please.</span>", jpn: "店内でお願いします。" }
        ],
        dialogueStructure: [
            "Greet + Ask if ready to order <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(挨拶 ＋ 注文が決まったか尋ねる)</span>",
            "> Agree + Order food <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 食べ物を注文する)</span>",
            "Acknowledge + Ask about drinks <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了解する ＋ 飲み物について尋ねる)</span>",
            "> Agree + Order a drink <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 飲み物を注文する)</span>",
            "Acknowledge + Ask for here or to go <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了解する ＋ 店内か持ち帰りか尋ねる)</span>",
            "> Answer location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(場所を答える)</span>"
        ],
        expressions: [
            { 
                category: "1. Ordering food/drinks (食べ物や飲み物の注文)", 
                options: [
                    { eng: "I would like a sandwich.", jpn: "サンドイッチをください。" }, 
                    { eng: "I would like a cup of coffee.", jpn: "コーヒーを一杯ください。" }, 
                    { eng: "I'd like a salad.", jpn: "サラダをください。" }
                ] 
            },
            { 
                category: "2. Dining preference (店内か持ち帰りか)", 
                options: [
                    { eng: "Is that for here or to go?", jpn: "店内でお召し上がりですか、それともお持ち帰りですか？" }, 
                    { eng: "For here, please.", jpn: "店内でお願いします。" }, 
                    { eng: "To go, please.", jpn: "持ち帰りでお願いします。" }
                ] 
            }
        ],
        grammar: {
            point: "'Would like' for Requests - 丁寧な依頼表現 (Would like)",
            explanation: "We use 'would like' to politely ask for something or state what we want. It is much more polite than saying 'I want'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（お店で注文をする時や、自分の希望を丁寧に伝える時には、『I want（〜が欲しい）』の代わりに『I would like...』を使います。これは「〜をいただきたいのですが」という非常に丁寧で一般的な表現です。I would like を短縮して『I'd like...』と言うこともよくあります。また、店員さんが「〜はいかがですか？」と勧める時にも『Would you like...?』が使われます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the polite requests: 'I <u>would like</u> a sandwich' and '<u>Would</u> you <u>like</u> a drink with that?' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『I <u>would like</u> a sandwich』などの丁寧な依頼に注目してください。)</span>",
            examples: [
                { eng: "I would like a cup of tea, please.", jpn: "紅茶を一杯お願いします。" },
                { eng: "She would like the chicken salad.", jpn: "彼女はチキンサラダをお願いしたいそうです。" },
                { eng: "Would you like some water?", jpn: "お水はいかがですか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I / a sandwich", 
            target: "I would like a sandwich." 
        },
        grammarPractice: [
            { prompt: "We / some coffee" },
            { prompt: "He / a salad" },
            { prompt: "They / two tickets" },
            { prompt: "She / a cup of tea" },
            { prompt: "I / some water" }
        ],
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
            { before: "Is that for", options: ["here", "there", "house"], answer: "here", after: " or to go?" }
        ],
        roleplay: {
            a: "You are a customer at a cafe. Order food, order a drink, and say you want to eat in the cafe. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたはカフェの客です。食べ物と飲み物を注文し、店内で食べることを伝えてください。)</span>",
            b: "You are a cafe clerk. Ask the customer what they want, ask if they want a drink, and ask if it is for here or to go. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(カフェの店員役です。注文を伺い、飲み物がいるか聞き、店内か持ち帰りかを確認してください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Chicken", jpn: "鶏肉", exEng: "I ordered chicken.", exJpn: "私は鶏肉を注文しました。" },
                { eng: "Beef", jpn: "牛肉", exEng: "This beef is delicious.", exJpn: "この牛肉は美味しいです。" },
                { eng: "Pork", jpn: "豚肉", exEng: "We eat pork.", exJpn: "私たちは豚肉を食べます。" },
                { eng: "Potato", jpn: "じゃがいも", exEng: "I like potatoes.", exJpn: "私はじゃがいもが好きです。" },
                { eng: "Tomato", jpn: "トマト", exEng: "A red tomato.", exJpn: "赤いトマト。" },
                { eng: "Onion", jpn: "玉ねぎ", exEng: "Cut the onion.", exJpn: "玉ねぎを切ってください。" },
                { eng: "Cheese", jpn: "チーズ", exEng: "More cheese, please.", exJpn: "もっとチーズをお願いします。" },
                { eng: "Butter", jpn: "バター", exEng: "Bread and butter.", exJpn: "パンとバター。" },
                { eng: "Sugar", jpn: "砂糖", exEng: "No sugar in my tea.", exJpn: "私のお茶には砂糖を入れないでください。" },
                { eng: "Salt", jpn: "塩", exEng: "Pass the salt.", exJpn: "塩を取ってください。" },
                { eng: "Pepper", jpn: "胡椒", exEng: "I like black pepper.", exJpn: "黒胡椒が好きです。" },
                { eng: "Knife", jpn: "ナイフ", exEng: "Use a knife.", exJpn: "ナイフを使ってください。" },
                { eng: "Fork", jpn: "フォーク", exEng: "I need a fork.", exJpn: "フォークが必要です。" },
                { eng: "Spoon", jpn: "スプーン", exEng: "Eat soup with a spoon.", exJpn: "スプーンでスープを飲んでください。" }
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
                { speaker: "A", eng: "Sure. Anything else? A dessert?", jpn: "かしこまりました。他にご注文は？デザートはいかがですか？" }
            ],
            writingTask: {
                promptEng: "Imagine you are at a cafe. Write a short dialogue between you and the cafe clerk. Include a food order, a drink order, and state if it is for here or to go.",
                promptJpn: "カフェにいると想像してください。あなたと店員との間の短い会話を書いてください。食べ物の注文、飲み物の注文、そして店内か持ち帰りかを含めてください。"
            }
        }
    },,{
        id: 31,
        title: "Lesson 31: How to buy a train ticket",
        goal: "Ask for and purchase a train ticket to a specific destination. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(特定の目的地までの電車の切符を尋ねて購入する。)</span>",
        vocab: [
            { eng: "Ticket", jpn: "切符 / チケット", exEng: "I need a ticket.", exJpn: "切符が必要です。" },
            { eng: "Train", jpn: "電車", exEng: "The train is fast.", exJpn: "電車は速いです。" },
            { eng: "One-way", jpn: "片道", exEng: "A one-way ticket.", exJpn: "片道切符。" },
            { eng: "Round-trip", jpn: "往復", exEng: "A round-trip ticket.", exJpn: "往復切符。" },
            { eng: "Platform", jpn: "プラットホーム", exEng: "Go to the platform.", exJpn: "プラットホームに行ってください。" },
            { eng: "Adult", jpn: "大人", exEng: "One adult ticket.", exJpn: "大人1枚。" },
            { eng: "Child", jpn: "子供", exEng: "Two child tickets.", exJpn: "子供2枚。" },
            { eng: "Buy", jpn: "買う", exEng: "I buy a ticket.", exJpn: "私は切符を買います。" },
            { eng: "Leave", jpn: "出発する", exEng: "The train leaves at 5.", exJpn: "電車は5時に出発します。" },
            { eng: "Arrive", jpn: "到着する", exEng: "We arrive soon.", exJpn: "もうすぐ到着します。" },
            { eng: "Next", jpn: "次の", exEng: "The next train.", exJpn: "次の電車。" },
            { eng: "Express", jpn: "急行", exEng: "Take the express.", exJpn: "急行に乗ってください。" },
            { eng: "Local", jpn: "各駅停車 / 普通", exEng: "The local train is slow.", exJpn: "各駅停車は遅いです。" },
            { eng: "Seat", jpn: "座席", exEng: "This is my seat.", exJpn: "ここは私の席です。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hello, <span class='swappable'>I <i class='grammar-target'>would like to buy</i> a ticket to London, please.</span>", jpn: "こんにちは、ロンドン行きの切符を買いたいのですが。" },
            { speaker: "B", eng: "Sure. One-way or round-trip?", jpn: "かしこまりました。片道ですか、それとも往復ですか？" },
            { speaker: "A", eng: "<span class='swappable'>One-way, please.</span> How much is it?", jpn: "片道でお願いします。いくらですか？" },
            { speaker: "B", eng: "It is twenty pounds.", jpn: "20ポンドです。" },
            { speaker: "A", eng: "Here you go. What time does the train leave?", jpn: "はい、どうぞ。電車は何時に出発しますか？" },
            { speaker: "B", eng: "The next train leaves at 3 PM from platform 2.", jpn: "次の電車は午後3時に2番線から出発します。" }
        ],
        dialogueStructure: [
            "Greet + State your destination <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(挨拶 ＋ 目的地を伝える)</span>",
            "> Acknowledge + Ask ticket type <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了解する ＋ 切符の種類を尋ねる)</span>",
            "Choose ticket type + Ask price <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(切符の種類を選ぶ ＋ 値段を尋ねる)</span>",
            "> State price <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(値段を伝える)</span>",
            "Hand over money + Ask departure time <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(お金を渡す ＋ 出発時間を尋ねる)</span>",
            "> State departure time and platform <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(出発時間とプラットホームを伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Stating your destination (目的地の伝え方)", 
                options: [
                    { eng: "I would like to buy a ticket to London.", jpn: "ロンドン行きの切符を買いたいです。" }, 
                    { eng: "A ticket to Manchester, please.", jpn: "マンチェスターまでの切符をお願いします。" }, 
                    { eng: "Two tickets to York, please.", jpn: "ヨークまでの切符を2枚お願いします。" }
                ] 
            },
            { 
                category: "2. Choosing a ticket type (切符の種類の指定)", 
                options: [
                    { eng: "One-way, please.", jpn: "片道でお願いします。" }, 
                    { eng: "Round-trip, please.", jpn: "往復でお願いします。" }, 
                    { eng: "One adult and one child, please.", jpn: "大人1枚と子供1枚をお願いします。" }
                ] 
            }
        ],
        grammar: {
            point: "I would like to + Verb - 〜したいのですが（丁寧な希望）",
            explanation: "We use 'I would like to' followed by a base verb to politely say what we want to do. It is much more polite than 'I want to'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「〜したい」という自分の希望を人に伝える時、友達同士なら『I want to...』を使いますが、お店の店員さんや初対面の人に対しては、より丁寧な『I would like to...』を使います。『would like to』の後には必ず動詞の原形（buy, pay, sit など）が続きます。「I would like to buy a ticket（切符を買いたいのですが）」のように、窓口での購入やレストランでの注文など、サービスをお願いする場面で不可欠な大人の表現です。I'd like to と短縮することもできます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the polite request: 'I <u>would like to buy</u> a ticket'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：丁寧な依頼『I <u>would like to buy</u> a ticket』に注目してください。)</span>",
            examples: [
                { eng: "I would like to buy two tickets.", jpn: "切符を2枚買いたいのですが。" },
                { eng: "I would like to pay by credit card.", jpn: "クレジットカードで支払いたいのですが。" },
                { eng: "We would like to sit together.", jpn: "私たちは一緒に座りたいのですが。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I / buy / a ticket to London", 
            target: "I would like to buy a ticket to London." 
        },
        grammarPractice: [
            { prompt: "I / pay / by cash" },
            { prompt: "We / sit / near the window" },
            { prompt: "She / order / a coffee" },
            { prompt: "They / check in / to the hotel" },
            { prompt: "I / go / to the airport" }
        ],
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
            { before: "What time does the train", options: ["leave", "leaves", "leaving"], answer: "leave", after: "?" }
        ],
        roleplay: {
            a: "You are at a train station. Go to the ticket window and ask to buy a round-trip ticket to a city you choose. Ask how much it is and what platform it leaves from. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたは駅にいます。窓口に行き、自分で選んだ都市までの往復切符を買いたいと伝えてください。いくらか、そして何番線から出発するか尋ねてください。)</span>",
            b: "You are the ticket agent. Ask if they want a one-way or round-trip ticket, tell them the price, and give them the platform number. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(駅員役です。片道か往復か尋ね、値段を伝え、プラットホームの番号を教えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Subway", jpn: "地下鉄", exEng: "I take the subway.", exJpn: "私は地下鉄に乗ります。" },
                { eng: "Bus", jpn: "バス", exEng: "The bus is late.", exJpn: "バスが遅れています。" },
                { eng: "Taxi", jpn: "タクシー", exEng: "Call a taxi.", exJpn: "タクシーを呼んでください。" },
                { eng: "Airport", jpn: "空港", exEng: "Go to the airport.", exJpn: "空港に行ってください。" },
                { eng: "Passenger", jpn: "乗客", exEng: "Many passengers.", exJpn: "たくさんの乗客。" },
                { eng: "Gate", jpn: "ゲート / 改札", exEng: "Meet at the gate.", exJpn: "改札で会いましょう。" },
                { eng: "Schedule", jpn: "スケジュール / 時刻表", exEng: "Check the schedule.", exJpn: "時刻表を確認してください。" },
                { eng: "Delay", jpn: "遅れ / 遅延", exEng: "There is a delay.", exJpn: "遅延があります。" },
                { eng: "Cash", jpn: "現金", exEng: "Pay with cash.", exJpn: "現金で支払います。" },
                { eng: "Credit card", jpn: "クレジットカード", exEng: "Use a credit card.", exJpn: "クレジットカードを使います。" },
                { eng: "Receipt", jpn: "レシート / 領収書", exEng: "Keep your receipt.", exJpn: "レシートを保管してください。" },
                { eng: "Travel", jpn: "旅行する", exEng: "I love to travel.", exJpn: "私は旅行するのが大好きです。" },
                { eng: "Trip", jpn: "旅行", exEng: "Have a good trip.", exJpn: "良い旅行を。" },
                { eng: "Map", jpn: "地図", exEng: "Look at the map.", exJpn: "地図を見てください。" }
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
                { speaker: "A", eng: "Okay. One-way or round-trip?", jpn: "わかりました。片道ですか、それとも往復ですか？" }
            ],
            writingTask: {
                promptEng: "Imagine you are taking a train trip. Write a short paragraph describing where you are going, what kind of ticket you buy (one-way/round-trip), and what time the train leaves.",
                promptJpn: "列車の旅に出ると想像してください。どこへ行くか、どんな切符を買うか（片道/往復）、そして電車が何時に出発するかを描写する短い文章を書いてください。"
            }
        }
    },
    {
        id: 32,
        title: "Lesson 32: How to talk about hobbies and interests",
        goal: "Ask and answer questions about what you like to do in your free time. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(自由な時間に何をするのが好きかについて質問し、答える。)</span>",
        vocab: [
            { eng: "Hobby", jpn: "趣味", exEng: "What is your hobby?", exJpn: "あなたの趣味は何ですか？" },
            { eng: "Music", jpn: "音楽", exEng: "I love music.", exJpn: "私は音楽が大好きです。" },
            { eng: "Book", jpn: "本", exEng: "Read a book.", exJpn: "本を読む。" },
            { eng: "Movie", jpn: "映画", exEng: "Let's watch a movie.", exJpn: "映画を見ましょう。" },
            { eng: "Sports", jpn: "スポーツ", exEng: "I play sports.", exJpn: "私はスポーツをします。" },
            { eng: "Game", jpn: "ゲーム", exEng: "Play a game.", exJpn: "ゲームをする。" },
            { eng: "Picture", jpn: "絵 / 写真", exEng: "Take a picture.", exJpn: "写真を撮る。" },
            { eng: "Song", jpn: "歌", exEng: "Sing a song.", exJpn: "歌を歌う。" },
            { eng: "Listen", jpn: "聴く", exEng: "Listen to this.", exJpn: "これを聴いてください。" },
            { eng: "Watch", jpn: "見る", exEng: "Watch TV.", exJpn: "テレビを見る。" },
            { eng: "Read", jpn: "読む", exEng: "I read every day.", exJpn: "私は毎日読みます。" },
            { eng: "Play", jpn: "遊ぶ / する", exEng: "Play tennis.", exJpn: "テニスをする。" },
            { eng: "Make", jpn: "作る", exEng: "Make a cake.", exJpn: "ケーキを作る。" },
            { eng: "Like", jpn: "好き", exEng: "I like you.", exJpn: "私はあなたが好きです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>What do you do in your free time?</span>", jpn: "自由な時間には何をしていますか？" },
            { speaker: "B", eng: "I <i class='grammar-target'>like playing</i> tennis. <span class='swappable'>How about you?</span>", jpn: "私はテニスをするのが好きです。あなたはどうですか？" },
            { speaker: "A", eng: "I <i class='grammar-target'>like reading</i> books. Do you <i class='grammar-target'>like reading</i>?", jpn: "私は本を読むのが好きです。あなたは読書が好きですか？" },
            { speaker: "B", eng: "No, not really. I prefer watching movies.", jpn: "いいえ、それほどでもないです。私は映画を見る方が好きです。" }
        ],
        dialogueStructure: [
            "Ask about hobbies <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(趣味について尋ねる)</span>",
            "> State your hobby + Ask the other person <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(自分の趣味を伝える ＋ 相手に尋ねる)</span>",
            "State your hobby + Ask about specific interest <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(自分の趣味を伝える ＋ 特定の興味について尋ねる)</span>",
            "> Answer softly + State preference <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(やんわりと答える ＋ 好みを伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about hobbies (趣味の尋ね方)", 
                options: [
                    { eng: "What do you do in your free time?", jpn: "自由な時間には何をしていますか？" }, 
                    { eng: "What are your hobbies?", jpn: "あなたの趣味は何ですか？" }, 
                    { eng: "What do you like to do?", jpn: "あなたは何をするのが好きですか？" }
                ] 
            },
            { 
                category: "2. Asking the other person (相手に尋ね返す)", 
                options: [
                    { eng: "How about you?", jpn: "あなたはどうですか？" }, 
                    { eng: "And you?", jpn: "あなたは？" }, 
                    { eng: "What about you?", jpn: "あなたについてはどうですか？" }
                ] 
            }
        ],
        grammar: {
            point: "Like + Verb-ing (Gerunds) - 〜するのが好き (動名詞)",
            explanation: "When we talk about activities we enjoy, we often use 'like' followed by a verb with '-ing' (a gerund). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（趣味や普段から楽しんでいる活動について話す時、英語では「like（好き）」の直後に動詞をそのまま置くことはできません（× I like play tennis）。動詞を名詞の形に変える必要があり、一番よく使われるのが動詞に「-ing」をつけた「動名詞」です。「play（する）」を「playing（すること）」に変えることで、「I like playing tennis（私はテニスをすることが好きです）」という正しい文になります。like 以外にも、love（大好き）、enjoy（楽しむ）、hate（嫌い）といった感情を表す動詞の後には、この -ing 形がよく続きます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the '-ing' words after like: 'I like <u>playing</u> tennis' and 'I like <u>reading</u> books.' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：likeの後の『-ing』がつく単語、『like <u>playing</u>』や『like <u>reading</u>』に注目してください。)</span>",
            examples: [
                { eng: "I like cooking dinner.", jpn: "私は夕食を作るのが好きです。" },
                { eng: "Do you like listening to music?", jpn: "あなたは音楽を聴くのが好きですか？" },
                { eng: "He likes watching baseball.", jpn: "彼は野球を見るのが好きです。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I / like / play / tennis", 
            target: "I like playing tennis." 
        },
        grammarPractice: [
            { prompt: "She / like / read / books" },
            { prompt: "We / like / watch / movies" },
            { prompt: "He / like / cook / dinner" },
            { prompt: "They / enjoy / listen / to music" },
            { prompt: "I / love / take / pictures" }
        ],
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
            { before: "How", options: ["about", "for", "with"], answer: "about", after: " you?" }
        ],
        roleplay: {
            a: "You are at a party. Ask a new friend what they like to do in their free time. Ask a follow-up question about their hobby. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パーティーにいます。新しい友達に自由な時間に何をするのが好きか尋ねてください。趣味についての追加の質問もしてください。)</span>",
            b: "You are the new friend. Tell them your hobby, and then ask them what they like to do. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(新しい友達の役です。自分の趣味を伝え、相手に何をするのが好きか尋ねてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Swim", jpn: "泳ぐ", exEng: "I swim in the pool.", exJpn: "私はプールで泳ぎます。" },
                { eng: "Run", jpn: "走る", exEng: "Run fast.", exJpn: "速く走ってください。" },
                { eng: "Travel", jpn: "旅行する", exEng: "I like traveling.", exJpn: "私は旅行が好きです。" },
                { eng: "Dance", jpn: "踊る", exEng: "She dances well.", exJpn: "彼女は上手に踊ります。" },
                { eng: "Sing", jpn: "歌う", exEng: "Sing a loud song.", exJpn: "大きな声で歌ってください。" },
                { eng: "Guitar", jpn: "ギター", exEng: "Play the guitar.", exJpn: "ギターを弾いてください。" },
                { eng: "Piano", jpn: "ピアノ", exEng: "He plays piano.", exJpn: "彼はピアノを弾きます。" },
                { eng: "Photo", jpn: "写真", exEng: "Take a photo.", exJpn: "写真を撮ってください。" },
                { eng: "Bake", jpn: "焼く / お菓子作り", exEng: "I bake bread.", exJpn: "私はパンを焼きます。" },
                { eng: "Chess", jpn: "チェス", exEng: "Play chess.", exJpn: "チェスをしましょう。" },
                { eng: "Draw", jpn: "描く", exEng: "Draw a house.", exJpn: "家を描いてください。" },
                { eng: "Paint", jpn: "絵の具で描く", exEng: "Paint the wall.", exJpn: "壁を塗ってください。" },
                { eng: "Collect", jpn: "集める", exEng: "Collect stamps.", exJpn: "切手を集める。" },
                { eng: "Favorite", jpn: "お気に入りの", exEng: "My favorite book.", exJpn: "私のお気に入りの本。" }
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
                { speaker: "A", eng: "Oh, what kind of movies do you like?", jpn: "ああ、どんな映画が好きですか？" }
            ],
            writingTask: {
                promptEng: "Write a short paragraph about your hobbies. Include what you like doing in your free time, and mention one thing you do NOT like doing.",
                promptJpn: "あなたの趣味について短い文章を書いてください。自由な時間にするのが好きなことと、するのが好きではないことを1つ含めてください。"
            }
        }
    },
    {
        id: 33,
        title: "Lesson 33: How to talk about what you are doing right now",
        goal: "Ask and answer questions about actions happening at the moment of speaking using the present continuous tense. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(現在進行形を使って、今まさに起こっている行動について質問し、答える。)</span>",
        vocab: [
            { eng: "Now", jpn: "今", exEng: "I am eating now.", exJpn: "私は今食べています。" },
            { eng: "Right now", jpn: "今すぐ / たった今", exEng: "Call me right now.", exJpn: "今すぐ電話してください。" },
            { eng: "Today", jpn: "今日", exEng: "It is hot today.", exJpn: "今日は暑いです。" },
            { eng: "Wait", jpn: "待つ", exEng: "I am waiting.", exJpn: "私は待っています。" },
            { eng: "Call", jpn: "電話する / 呼ぶ", exEng: "I am calling you.", exJpn: "私はあなたに電話しています。" },
            { eng: "Work", jpn: "働く", exEng: "He is working.", exJpn: "彼は働いています。" },
            { eng: "Study", jpn: "勉強する", exEng: "We are studying.", exJpn: "私たちは勉強しています。" },
            { eng: "Eat", jpn: "食べる", exEng: "She is eating.", exJpn: "彼女は食べています。" },
            { eng: "Watch", jpn: "見る", exEng: "I am watching TV.", exJpn: "私はテレビを見ています。" },
            { eng: "Talk", jpn: "話す", exEng: "They are talking.", exJpn: "彼らは話しています。" },
            { eng: "Walk", jpn: "歩く", exEng: "I am walking.", exJpn: "私は歩いています。" },
            { eng: "Run", jpn: "走る", exEng: "He is running.", exJpn: "彼は走っています。" },
            { eng: "Sleep", jpn: "眠る", exEng: "The baby is sleeping.", exJpn: "赤ちゃんは眠っています。" },
            { eng: "Busy", jpn: "忙しい", exEng: "I am busy now.", exJpn: "私は今忙しいです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Hi David. <span class='swappable'><i class='grammar-target'>What are</i> you <i class='grammar-target'>doing</i> right now?</span>", jpn: "こんにちはデビッド。今何をしているの？" },
            { speaker: "B", eng: "Hi Sarah. <span class='swappable'>I <i class='grammar-target'>am cooking</i> dinner.</span> Are you busy?", jpn: "やあサラ。夕食を作っているところだよ。忙しい？" },
            { speaker: "A", eng: "No, I <i class='grammar-target'>am</i> not <i class='grammar-target'>doing</i> anything special. I <i class='grammar-target'>am watching</i> TV.", jpn: "ううん、特に何もしていないよ。テレビを見ているところ。" },
            { speaker: "B", eng: "Where is John? <i class='grammar-target'>Is</i> he <i class='grammar-target'>studying</i>?", jpn: "ジョンはどこ？彼は勉強しているの？" },
            { speaker: "A", eng: "No, he <i class='grammar-target'>is sleeping</i> on the sofa.", jpn: "ううん、彼はソファで寝ているよ。" }
        ],
        dialogueStructure: [
            "Greet + Ask what someone is doing <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(挨拶 ＋ 何をしているか尋ねる)</span>",
            "> State current action + Ask if busy <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(現在のアクションを伝える ＋ 忙しいか尋ねる)</span>",
            "Deny being busy + State current action <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(忙しくないと否定する ＋ 現在のアクションを伝える)</span>",
            "> Ask where a third person is + Guess action <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(第三者がどこにいるか尋ねる ＋ アクションを推測する)</span>",
            "Deny guess + State third person's actual action <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(推測を否定する ＋ 第三者の実際のアクションを伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking current actions (今何をしているか尋ねる)", 
                options: [
                    { eng: "What are you doing right now?", jpn: "今何をしているの？" }, 
                    { eng: "What are you doing today?", jpn: "今日は何をしているの？" }, 
                    { eng: "Are you busy right now?", jpn: "今忙しいですか？" }
                ] 
            },
            { 
                category: "2. Stating current actions (今していることを伝える)", 
                options: [
                    { eng: "I am cooking dinner.", jpn: "夕食を作っているところです。" }, 
                    { eng: "I am studying English.", jpn: "英語を勉強しているところです。" }, 
                    { eng: "I am working at the office.", jpn: "オフィスで働いているところです。" }
                ] 
            }
        ],
        grammar: {
            point: "Present Continuous (am/is/are + verb-ing) - 現在進行形",
            explanation: "We use the present continuous to talk about actions that are happening right now, at this exact moment. We make it by combining a 'be' verb (am, is, are) with an '-ing' verb. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「今まさに〜しているところです」と、話しているその瞬間に進行中の動作を伝えるには、「現在進行形」を使います。作り方は【主語 ＋ be動詞（am/is/are）＋ 動詞の -ing形】です。例えば、「I work（私は普段働きます）」という現在の習慣を表す文を、「I <strong>am</strong> work<strong>ing</strong>（私は今働いているところです）」という進行形に変えることができます。電話で相手が今何をしているか尋ねたり、現在の状況を説明したりする時に大活躍する文法です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the 'be' verb + '-ing' combinations: 'What <u>are</u> you <u>doing</u>', 'I <u>am cooking</u>', and 'he <u>is sleeping</u>'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『What <u>are</u> you <u>doing</u>』『I <u>am cooking</u>』『he <u>is sleeping</u>』といった、be動詞 ＋ -ing の組み合わせに注目してください。)</span>",
            examples: [
                { eng: "I am watching a movie now.", jpn: "私は今映画を見ているところです。" },
                { eng: "She is not working today.", jpn: "彼女は今日は働いていません。" },
                { eng: "Are they playing soccer?", jpn: "彼らはサッカーをしていますか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I / eat / lunch", 
            target: "I am eating lunch." 
        },
        grammarPractice: [
            { prompt: "He / watch / TV" },
            { prompt: "They / play / tennis" },
            { prompt: "She / not / sleep" },
            { prompt: "What / you / do ?" },
            { prompt: "We / study / English" }
        ],
        clickingGames: [
            { prompt: "今何をしているの？", target: "What are you doing right now?", words: ["What", "are", "you", "doing", "right", "now?"] },
            { prompt: "夕食を作っているところだよ。", target: "I am cooking dinner.", words: ["I", "am", "cooking", "dinner."] },
            { prompt: "テレビを見ているところ。", target: "I am watching TV.", words: ["I", "am", "watching", "TV."] },
            { prompt: "彼は勉強しているの？", target: "Is he studying?", words: ["Is", "he", "studying?"] },
            { prompt: "彼はソファで寝ているよ。", target: "He is sleeping on the sofa.", words: ["He", "is", "sleeping", "on", "the", "sofa."] }
        ],
        dropdownGames: [
            { before: "I", options: ["am", "is", "are"], answer: "am", after: " working right now." },
            { before: "What", options: ["are", "do", "is"], answer: "are", after: " you doing?" },
            { before: "He is", options: ["sleep", "sleeping", "sleeps"], answer: "sleeping", after: " on the bed." },
            { before: "", options: ["Is", "Are", "Do"], answer: "Is", after: " she eating lunch?" },
            { before: "They", options: ["are", "is", "am"], answer: "are", after: " playing a game." }
        ],
        roleplay: {
            a: "Call your partner. Ask what they are doing right now. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに電話をかけます。彼らが今何をしているか尋ねてください。)</span>",
            b: "Answer the phone. Tell your partner you are doing a hobby (e.g., cooking, watching TV, playing a game). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(電話に出てください。趣味（料理、テレビを見る、ゲームをするなど）をしているところだと伝えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Now", jpn: "今", exEng: "I need it now.", exJpn: "今それが必要です。" },
                { eng: "Later", jpn: "後で", exEng: "See you later.", exJpn: "また後で。" },
                { eng: "Call", jpn: "電話する", exEng: "Call me tonight.", exJpn: "今夜電話して。" },
                { eng: "Wait", jpn: "待つ", exEng: "I am waiting for you.", exJpn: "あなたを待っています。" },
                { eng: "Drive", jpn: "運転する", exEng: "I am driving.", exJpn: "運転中です。" },
                { eng: "Talk", jpn: "話す", exEng: "They are talking.", exJpn: "彼らは話しています。" },
                { eng: "Listen", jpn: "聞く", exEng: "He is listening.", exJpn: "彼は聞いています。" },
                { eng: "Write", jpn: "書く", exEng: "She is writing an email.", exJpn: "彼女はメールを書いています。" },
                { eng: "Read", jpn: "読む", exEng: "I am reading a book.", exJpn: "本を読んでいます。" },
                { eng: "Run", jpn: "走る", exEng: "We are running.", exJpn: "私たちは走っています。" },
                { eng: "Walk", jpn: "歩く", exEng: "They are walking.", exJpn: "彼らは歩いています。" },
                { eng: "Clean", jpn: "掃除する", exEng: "I am cleaning my room.", exJpn: "部屋を掃除しています。" },
                { eng: "Wash", jpn: "洗う", exEng: "He is washing the car.", exJpn: "彼は車を洗っています。" },
                { eng: "Cook", jpn: "料理する", exEng: "She is cooking.", exJpn: "彼女は料理しています。" }
            ],
            reading1: {
                title: "Task 2: Reading (A Busy Office)",
                instruction: "Read the description of what people are doing right now.",
                eng: "<strong>A Busy Monday Morning</strong><br><br>It is Monday morning, and everyone in the office is very busy right now. I am typing an email to a client. My manager, Mr. Smith, is talking on the phone. He looks serious. Sarah and David are standing near the window. They are drinking coffee and looking at some documents. The printer is making a loud noise because it is printing a big report. Everyone is working hard today!",
                jpn: "<strong>忙しい月曜日の朝</strong><br><br>月曜日の朝で、オフィスの全員が今とても忙しいです。私はクライアントへのメールを打っているところです。マネージャーのスミスさんは電話で話しています。彼は真剣な顔をしています。サラとデビッドは窓の近くに立っています。彼らはコーヒーを飲みながら書類を見ています。プリンターは大きなレポートを印刷中なので、大きな音を立てています。今日は誰もが一生懸命働いています！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hi David. What are you doing right now?", jpn: "こんにちはデビッド。今何をしているの？" },
                { speaker: "B", eng: "Hi Sarah. I am cooking dinner. Are you busy?", jpn: "やあサラ。夕食を作っているところだよ。忙しい？" },
                { speaker: "A", eng: "No, I am not doing anything special. I am watching TV.", jpn: "ううん、特に何もしていないよ。テレビを見ているところ。" },
                { speaker: "B", eng: "Where is John? Is he studying?", jpn: "ジョンはどこ？彼は勉強しているの？" },
                { speaker: "A", eng: "No, he is sleeping on the sofa.", jpn: "ううん、彼はソファで寝ているよ。" }
            ],
            writingTask: {
                promptEng: "Look around you right now. Write three sentences using the present continuous tense (am/is/are + -ing) to describe what you and other people are doing.",
                promptJpn: "今、あなたの周りを見回してください。現在進行形（am/is/are + -ing）を使って、あなたや他の人が今何をしているかを描写する文を3つ書いてください。"
            }
        }
    },
    {
        id: 34,
        title: "Lesson 34: How to talk about where you were",
        goal: "Ask and answer questions about past locations and feelings using the past tense of the 'be' verb (was/were). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(be動詞の過去形（was/were）を使って、過去の場所や感情について質問し、答える。)</span>",
        vocab: [
            { eng: "Yesterday", jpn: "昨日", exEng: "I was at home yesterday.", exJpn: "私は昨日家にいました。" },
            { eng: "Last night", jpn: "昨夜", exEng: "Where were you last night?", exJpn: "昨夜はどこにいましたか？" },
            { eng: "Last week", jpn: "先週", exEng: "She was in London last week.", exJpn: "彼女は先週ロンドンにいました。" },
            { eng: "Home", jpn: "家", exEng: "I was at home.", exJpn: "私は家にいました。" },
            { eng: "Work", jpn: "職場 / 仕事", exEng: "He was at work.", exJpn: "彼は職場にいました。" },
            { eng: "School", jpn: "学校", exEng: "They were at school.", exJpn: "彼らは学校にいました。" },
            { eng: "Tired", jpn: "疲れた", exEng: "I was very tired.", exJpn: "私はとても疲れていました。" },
            { eng: "Happy", jpn: "幸せな / 嬉しい", exEng: "We were happy.", exJpn: "私たちは幸せでした。" },
            { eng: "Sick", jpn: "病気の / 気分が悪い", exEng: "He was sick yesterday.", exJpn: "彼は昨日病気でした。" },
            { eng: "Busy", jpn: "忙しい", exEng: "She was busy.", exJpn: "彼女は忙しかったです。" },
            { eng: "Late", jpn: "遅れた", exEng: "You were late.", exJpn: "あなたは遅れました。" },
            { eng: "Fun", jpn: "楽しい", exEng: "The party was fun.", exJpn: "パーティーは楽しかったです。" },
            { eng: "Boring", jpn: "退屈な", exEng: "The movie was boring.", exJpn: "その映画は退屈でした。" },
            { eng: "Weather", jpn: "天気", exEng: "The weather was bad.", exJpn: "天気は悪かったです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'><i class='grammar-target'>Where were</i> you yesterday?</span>", jpn: "昨日はどこにいましたか？" },
            { speaker: "B", eng: "<span class='swappable'>I <i class='grammar-target'>was</i> at home all day.</span> I <i class='grammar-target'>was</i> very tired.", jpn: "一日中家にいました。とても疲れていました。" },
            { speaker: "A", eng: "Really? <i class='grammar-target'>Was</i> it a busy week?", jpn: "本当に？忙しい一週間でしたか？" },
            { speaker: "B", eng: "Yes, it <i class='grammar-target'>was</i>. <i class='grammar-target'>Where were</i> you?", jpn: "はい、そうでした。あなたはどこにいましたか？" },
            { speaker: "A", eng: "I <i class='grammar-target'>was</i> at a party with Mike. It <i class='grammar-target'>was</i> fun.", jpn: "マイクとパーティーにいました。楽しかったです。" },
            { speaker: "B", eng: "Oh, that sounds nice. <i class='grammar-target'>Were</i> there many people?", jpn: "ああ、それはいいですね。人はたくさんいましたか？" }
        ],
        dialogueStructure: [
            "Ask about past location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(過去の居場所を尋ねる)</span>",
            "> State past location + State past feeling <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(過去の居場所を伝える ＋ 過去の感情を伝える)</span>",
            "React + Ask Yes/No question about the past <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 過去についてのYes/No質問をする)</span>",
            "> Answer Yes/No + Ask about their location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(Yes/Noで答える ＋ 相手の居場所を尋ねる)</span>",
            "State past location + Describe the event <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(過去の居場所を伝える ＋ イベントの感想を伝える)</span>",
            "> React + Ask about existence (were there) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 存在（〜はいましたか）について尋ねる)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about past locations (過去の居場所を尋ねる)", 
                options: [
                    { eng: "Where were you yesterday?", jpn: "昨日はどこにいましたか？" }, 
                    { eng: "Where were you last night?", jpn: "昨夜はどこにいましたか？" }, 
                    { eng: "Were you at home?", jpn: "家にいましたか？" }
                ] 
            },
            { 
                category: "2. Stating past locations/feelings (過去の居場所や感情を伝える)", 
                options: [
                    { eng: "I was at home all day.", jpn: "一日中家にいました。" }, 
                    { eng: "I was at work.", jpn: "仕事にいました。" }, 
                    { eng: "I was very sick.", jpn: "とても具合が悪かったです。" }
                ] 
            }
        ],
        grammar: {
            point: "Past Simple 'To Be' (was / were) - be動詞の過去形",
            explanation: "To talk about the past using the 'be' verb, we change 'am/is' to <strong>was</strong>, and 'are' to <strong>were</strong>. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（過去の場所（「〜にいました」）、過去の感情や状態（「疲れました」「楽しかったです」）について話すときは、be動詞を過去形に変化させます。「am」と「is」の過去形は <strong>was</strong> に、「are」の過去形は <strong>were</strong> になります。疑問文を作る時は、現在形と同じように was や were を文の先頭に持ってきます（例：Were you busy?）。「昨日はどこにいたの？」「パーティーはどうだった？」といった過去の出来事を振り返る会話のベースとなる重要な文法です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the past forms: 'Where <u>were</u> you', 'I <u>was</u> at home', and 'It <u>was</u> fun'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『Where <u>were</u> you』『I <u>was</u> at home』『It <u>was</u> fun』といった過去形に注目してください。)</span>",
            examples: [
                { eng: "I was sick yesterday.", jpn: "私は昨日病気でした。" },
                { eng: "They were not at school.", jpn: "彼らは学校にいませんでした。" },
                { eng: "Was the movie good?", jpn: "映画は良かったですか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I / be / tired / yesterday", 
            target: "I was tired yesterday." 
        },
        grammarPractice: [
            { prompt: "Where / be / you / last night ?" },
            { prompt: "She / be / at work" },
            { prompt: "They / not / be / at home" },
            { prompt: "The party / be / fun" },
            { prompt: "We / be / very busy / last week" }
        ],
        clickingGames: [
            { prompt: "昨日はどこにいましたか？", target: "Where were you yesterday?", words: ["Where", "were", "you", "yesterday?"] },
            { prompt: "一日中家にいました。", target: "I was at home all day.", words: ["I", "was", "at", "home", "all", "day."] },
            { prompt: "とても疲れていました。", target: "I was very tired.", words: ["I", "was", "very", "tired."] },
            { prompt: "忙しい一週間でしたか？", target: "Was it a busy week?", words: ["Was", "it", "a", "busy", "week?"] },
            { prompt: "マイクとパーティーにいました。", target: "I was at a party with Mike.", words: ["I", "was", "at", "a", "party", "with", "Mike."] }
        ],
        dropdownGames: [
            { before: "Where", options: ["were", "was", "are"], answer: "were", after: " you last night?" },
            { before: "I", options: ["was", "were", "am"], answer: "was", after: " at home yesterday." },
            { before: "", options: ["Was", "Were", "Is"], answer: "Was", after: " the movie good?" },
            { before: "They", options: ["were", "was", "are"], answer: "were", after: " very late to the meeting." },
            { before: "She", options: ["was", "were", "is"], answer: "was", after: " sick last week." }
        ],
        roleplay: {
            a: "Ask your partner where they were yesterday and how they felt. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに昨日はどこにいたか、そして気分はどうだったか尋ねてください。)</span>",
            b: "Answer your partner. Say you were at a specific place and describe if it was fun, boring, or if you were tired. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに答えてください。特定の場所にいたことを伝え、それが楽しかったか、退屈だったか、あるいは疲れたかを説明してください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Yesterday", jpn: "昨日", exEng: "It rained yesterday.", exJpn: "昨日は雨が降りました。" },
                { eng: "Last night", jpn: "昨夜", exEng: "I slept well last night.", exJpn: "昨夜はよく眠れました。" },
                { eng: "Last week", jpn: "先週", exEng: "I was busy last week.", exJpn: "先週は忙しかったです。" },
                { eng: "Last year", jpn: "去年", exEng: "I went to Kyoto last year.", exJpn: "去年京都に行きました。" },
                { eng: "Weekend", jpn: "週末", exEng: "How was your weekend?", exJpn: "週末はどうでしたか？" },
                { eng: "Home", jpn: "家", exEng: "I stayed home.", exJpn: "私は家にいました。" },
                { eng: "Work", jpn: "職場 / 仕事", exEng: "I was at work.", exJpn: "私は仕事中でした。" },
                { eng: "School", jpn: "学校", exEng: "She was at school.", exJpn: "彼女は学校にいました。" },
                { eng: "Tired", jpn: "疲れた", exEng: "I was tired.", exJpn: "私は疲れていました。" },
                { eng: "Happy", jpn: "幸せな / 嬉しい", exEng: "They were happy.", exJpn: "彼らは幸せでした。" },
                { eng: "Sick", jpn: "病気の / 気分が悪い", exEng: "He was sick.", exJpn: "彼は具合が悪かったです。" },
                { eng: "Fun", jpn: "楽しい", exEng: "The game was fun.", exJpn: "ゲームは楽しかったです。" },
                { eng: "Boring", jpn: "退屈な", exEng: "The class was boring.", exJpn: "授業は退屈でした。" },
                { eng: "Weather", jpn: "天気", exEng: "The weather was nice.", exJpn: "天気は良かったです。" }
            ],
            reading1: {
                title: "Task 2: Reading (A Bad Day)",
                instruction: "Read the diary entry about a difficult day.",
                eng: "<strong>A Terrible Tuesday</strong><br><br>Yesterday was a terrible day. In the morning, I was very late for work because the train was delayed. My boss was not happy. At lunch, I was at a cafe, but the food was cold and expensive. In the afternoon, I was very tired and a little sick. I went home early. Last night, I was just on my sofa. The TV shows were boring, so I went to sleep at 9 PM. I hope today is better!",
                jpn: "<strong>ひどい火曜日</strong><br><br>昨日はひどい一日でした。朝、電車が遅れたため仕事に大遅刻しました。上司は嬉しそうではありませんでした。お昼はカフェにいましたが、食べ物は冷たくて高かったです。午後はとても疲れて、少し具合が悪かったです。私は早く家に帰りました。昨夜はただソファの上にいました。テレビ番組は退屈だったので、午後9時に寝ました。今日はもっと良い日になりますように！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Where were you yesterday?", jpn: "昨日はどこにいましたか？" },
                { speaker: "B", eng: "I was at home all day. I was very tired.", jpn: "一日中家にいました。とても疲れていました。" },
                { speaker: "A", eng: "Really? Was it a busy week?", jpn: "本当に？忙しい一週間でしたか？" },
                { speaker: "B", eng: "Yes, it was. Where were you?", jpn: "はい、そうでした。あなたはどこにいましたか？" },
                { speaker: "A", eng: "I was at a party with Mike. It was fun.", jpn: "マイクとパーティーにいました。楽しかったです。" }
            ],
            writingTask: {
                promptEng: "Write three sentences about where you were and how you felt yesterday or last weekend. Use 'was' and 'were'.",
                promptJpn: "昨日または先週末、あなたがどこにいて、どう感じたかについて3つの文を書いてください。『was』と『were』を使用してください。"
            }
        }
    },
    {
        id: 35,
        title: "Lesson 35: How to talk about your weekend",
        goal: "Ask and answer questions about past activities using regular verbs in the past simple tense. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(過去形の規則動詞を使って、過去の活動について質問し、答える。)</span>",
        vocab: [
            { eng: "Weekend", jpn: "週末", exEng: "How was your weekend?", exJpn: "週末はどうでしたか？" },
            { eng: "Play", jpn: "する / 遊ぶ", exEng: "I played tennis.", exJpn: "私はテニスをしました。" },
            { eng: "Watch", jpn: "見る", exEng: "I watched a movie.", exJpn: "私は映画を見ました。" },
            { eng: "Cook", jpn: "料理する", exEng: "She cooked dinner.", exJpn: "彼女は夕食を作りました。" },
            { eng: "Clean", jpn: "掃除する", exEng: "He cleaned the room.", exJpn: "彼は部屋を掃除しました。" },
            { eng: "Listen", jpn: "聞く", exEng: "We listened to music.", exJpn: "私たちは音楽を聴きました。" },
            { eng: "Walk", jpn: "歩く", exEng: "I walked in the park.", exJpn: "私は公園を歩きました。" },
            { eng: "Visit", jpn: "訪問する", exEng: "I visited my parents.", exJpn: "私は両親を訪ねました。" },
            { eng: "Work", jpn: "働く", exEng: "They worked hard.", exJpn: "彼らは一生懸命働きました。" },
            { eng: "Study", jpn: "勉強する", exEng: "I studied English.", exJpn: "私は英語を勉強しました。" },
            { eng: "Talk", jpn: "話す", exEng: "We talked for hours.", exJpn: "私たちは何時間も話しました。" },
            { eng: "Help", jpn: "手伝う", exEng: "She helped me.", exJpn: "彼女は私を手伝ってくれました。" },
            { eng: "Stay", jpn: "滞在する", exEng: "I stayed home.", exJpn: "私は家にいました。" },
            { eng: "Enjoy", jpn: "楽しむ", exEng: "I enjoyed the party.", exJpn: "私はパーティーを楽しみました。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'><i class='grammar-target'>What did you do</i> last weekend?</span>", jpn: "先週末は何をしましたか？" },
            { speaker: "B", eng: "<span class='swappable'>I <i class='grammar-target'>visited</i> my parents.</span> And I <i class='grammar-target'>cooked</i> dinner for them.", jpn: "両親を訪ねました。そして、彼らに夕食を作りました。" },
            { speaker: "A", eng: "That is nice. <i class='grammar-target'>Did you</i> play any games?", jpn: "それはいいですね。何かゲームはしましたか？" },
            { speaker: "B", eng: "No, we <i class='grammar-target'>didn't play</i> games. We just <i class='grammar-target'>talked</i>. How was your weekend?", jpn: "いいえ、ゲームはしませんでした。ただ話をしただけです。あなたの週末はどうでしたか？" },
            { speaker: "A", eng: "I <i class='grammar-target'>stayed</i> home. I <i class='grammar-target'>cleaned</i> my room and <i class='grammar-target'>watched</i> TV.", jpn: "私は家にいました。部屋を掃除して、テレビを見ました。" }
        ],
        dialogueStructure: [
            "Ask about past actions <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(過去のアクションについて尋ねる)</span>",
            "> State past action 1 + State past action 2 <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(過去のアクションを1つ伝える ＋ もう1つ伝える)</span>",
            "React + Ask Yes/No question about action <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ アクションについてのYes/No質問をする)</span>",
            "> Answer negatively + State what you did instead + Ask back <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(否定で答える ＋ 代わりに何をしたか伝える ＋ 相手に聞き返す)</span>",
            "State past action 1 + State past action 2 <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(自分の過去のアクションを1つ伝える ＋ もう1つ伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about past actions (過去の行動を尋ねる)", 
                options: [
                    { eng: "What did you do last weekend?", jpn: "先週末は何をしましたか？" }, 
                    { eng: "What did you do yesterday?", jpn: "昨日は何をしましたか？" }, 
                    { eng: "Did you have a good weekend?", jpn: "良い週末を過ごしましたか？" }
                ] 
            },
            { 
                category: "2. Stating past actions (過去の行動を伝える)", 
                options: [
                    { eng: "I visited my parents.", jpn: "両親を訪ねました。" }, 
                    { eng: "I watched a movie.", jpn: "映画を見ました。" }, 
                    { eng: "I stayed home.", jpn: "家にいました。" }
                ] 
            }
        ],
        grammar: {
            point: "Past Simple (Regular Verbs -ed) - 一般動詞の過去形（規則動詞）",
            explanation: "To talk about actions that happened and finished in the past, we add <strong>-ed</strong> to the end of regular verbs (e.g., play -> play<strong>ed</strong>). In questions and negative sentences, we use <strong>did</strong> or <strong>didn't</strong>, and the main verb returns to its base form. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（過去に終わった動作を話す時は、動詞の最後に <strong>-ed</strong> を付けます（規則動詞）。例えば、「play（する）」は「play<strong>ed</strong>（した）」になります。「study（勉強する）」のように y で終わる単語は、y を i に変えて -ed を付けます（studi<strong>ed</strong>）。<br>質問をする時は、Do ではなく過去形の <strong>Did</strong> を使います（例：Did you play...?）。「〜しませんでした」と否定する時は <strong>didn't</strong> を使います（例：I didn't play...）。Did や didn't を使った文では、メインの動詞には -ed を付けず、元の形（原形）に戻るという非常に重要なルールがあります。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the '-ed' endings: 'visit<u>ed</u>', 'cook<u>ed</u>', 'talk<u>ed</u>', 'stay<u>ed</u>', 'clean<u>ed</u>', and 'watch<u>ed</u>'. Also notice the question and negative forms: '<u>What did you do</u>' and 'we <u>didn't play</u>'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『visit<u>ed</u>』『cook<u>ed</u>』などの「-ed」の語尾に注目してください。また、疑問文と否定文の形『<u>What did you do</u>』『we <u>didn't play</u>』にも注目してください。)</span>",
            examples: [
                { eng: "I walked to the station yesterday.", jpn: "私は昨日駅まで歩きました。" },
                { eng: "Did you watch the game last night?", jpn: "昨夜その試合を見ましたか？" },
                { eng: "She didn't study on Sunday.", jpn: "彼女は日曜日には勉強しませんでした。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I / watch / TV / yesterday (+)", 
            target: "I watched TV yesterday." 
        },
        grammarPractice: [
            { prompt: "He / clean / his room (+)" },
            { prompt: "They / play / tennis (-)" },
            { prompt: "What / you / do / last weekend (?)" },
            { prompt: "She / visit / her friend (+)" },
            { prompt: "I / work / on Sunday (-)" }
        ],
        clickingGames: [
            { prompt: "先週末は何をしましたか？", target: "What did you do last weekend?", words: ["What", "did", "you", "do", "last", "weekend?"] },
            { prompt: "両親を訪ねました。", target: "I visited my parents.", words: ["I", "visited", "my", "parents."] },
            { prompt: "彼らに夕食を作りました。", target: "I cooked dinner for them.", words: ["I", "cooked", "dinner", "for", "them."] },
            { prompt: "いいえ、ゲームはしませんでした。", target: "No, we didn't play games.", words: ["No,", "we", "didn't", "play", "games."] },
            { prompt: "部屋を掃除して、テレビを見ました。", target: "I cleaned my room and watched TV.", words: ["I", "cleaned", "my", "room", "and", "watched", "TV."] }
        ],
        dropdownGames: [
            { before: "What", options: ["do", "did", "are"], answer: "did", after: " you do yesterday?" },
            { before: "I", options: ["play", "played", "playing"], answer: "played", after: " soccer with my friends." },
            { before: "", options: ["Do", "Did", "Are"], answer: "Did", after: " you clean your room?" },
            { before: "No, I", options: ["didn't", "don't", "wasn't"], answer: "didn't", after: " clean it." },
            { before: "She", options: ["watch", "watches", "watched"], answer: "watched", after: " a long movie." }
        ],
        roleplay: {
            a: "Ask your partner what they did last weekend. Ask a follow-up Yes/No question (e.g., 'Did you...'). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに先週末何をしたか尋ねてください。追加でYes/No質問（例：「〜しましたか？」）をしてください。)</span>",
            b: "Answer your partner using regular verbs in the past tense (e.g., watched, played, cooked). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(過去形の規則動詞（watched, played, cooked など）を使ってパートナーに答えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Weekend", jpn: "週末", exEng: "Have a great weekend.", exJpn: "素晴らしい週末を。" },
                { eng: "Play", jpn: "する / 遊ぶ", exEng: "I played a game.", exJpn: "私はゲームをしました。" },
                { eng: "Watch", jpn: "見る", exEng: "I watched the news.", exJpn: "私はニュースを見ました。" },
                { eng: "Cook", jpn: "料理する", exEng: "He cooked breakfast.", exJpn: "彼は朝食を作りました。" },
                { eng: "Clean", jpn: "掃除する", exEng: "We cleaned the house.", exJpn: "私たちは家を掃除しました。" },
                { eng: "Listen", jpn: "聞く", exEng: "I listened to the radio.", exJpn: "私はラジオを聴きました。" },
                { eng: "Walk", jpn: "歩く", exEng: "She walked to work.", exJpn: "彼女は歩いて職場に行きました。" },
                { eng: "Visit", jpn: "訪問する", exEng: "We visited a museum.", exJpn: "私たちは博物館を訪れました。" },
                { eng: "Work", jpn: "働く", exEng: "I worked late.", exJpn: "私は遅くまで働きました。" },
                { eng: "Study", jpn: "勉強する", exEng: "He studied math.", exJpn: "彼は数学を勉強しました。" },
                { eng: "Talk", jpn: "話す", exEng: "They talked a lot.", exJpn: "彼らはたくさん話しました。" },
                { eng: "Help", jpn: "手伝う", exEng: "I helped my mother.", exJpn: "私は母を手伝いました。" },
                { eng: "Stay", jpn: "滞在する", exEng: "I stayed at a hotel.", exJpn: "私はホテルに滞在しました。" },
                { eng: "Enjoy", jpn: "楽しむ", exEng: "Did you enjoy it?", exJpn: "楽しみましたか？" }
            ],
            reading1: {
                title: "Task 2: Reading (A Relaxing Weekend)",
                instruction: "Read the diary entry about someone's weekend.",
                eng: "<strong>A Relaxing Weekend</strong><br><br>Last weekend, I stayed home and relaxed. On Saturday morning, I cleaned my apartment. In the afternoon, I cooked a big lunch. After lunch, I watched two movies on TV. They were very long! On Sunday, I didn't work. I visited my friend Sarah. We walked in the park and talked about our jobs. It was a very quiet and peaceful weekend. I enjoyed it a lot.",
                jpn: "<strong>リラックスした週末</strong><br><br>先週末、私は家にいてリラックスしました。土曜日の朝、アパートの掃除をしました。午後には、ボリュームのある昼食を作りました。昼食の後、テレビで映画を2本見ました。とても長かったです！日曜日は仕事はしませんでした。友達のサラを訪ねました。私たちは公園を歩き、仕事について話しました。とても静かで平和な週末でした。大いに楽しみました。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "What did you do last weekend?", jpn: "先週末は何をしましたか？" },
                { speaker: "B", eng: "I visited my parents. And I cooked dinner for them.", jpn: "両親を訪ねました。そして、彼らに夕食を作りました。" },
                { speaker: "A", eng: "That is nice. Did you play any games?", jpn: "それはいいですね。何かゲームはしましたか？" },
                { speaker: "B", eng: "No, we didn't play games. We just talked. How was your weekend?", jpn: "いいえ、ゲームはしませんでした。ただ話をしただけです。あなたの週末はどうでしたか？" },
                { speaker: "A", eng: "I stayed home. I cleaned my room and watched TV.", jpn: "私は家にいました。部屋を掃除して、テレビを見ました。" }
            ],
            writingTask: {
                promptEng: "Write three sentences about what you did last weekend. Use regular verbs ending in '-ed' (e.g., played, watched, cooked, cleaned). Include one negative sentence (didn't).",
                promptJpn: "先週末に何をしたかについて、3つの文を書いてください。「-ed」で終わる規則動詞（played, watched, cooked, cleanedなど）を使用してください。1つは否定文（didn't）を含めてください。"
            }
        }
    },
    {
        id: 36,
        title: "Lesson 36: How to talk about a recent trip",
        goal: "Describe a trip and talk about past events using irregular verbs in the past simple tense. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(過去形の不規則動詞を使って、旅行や過去の出来事について語る。)</span>",
        vocab: [
            { eng: "Trip", jpn: "旅行", exEng: "How was your trip?", exJpn: "旅行はどうでしたか？" },
            { eng: "Vacation", jpn: "休暇", exEng: "I am on vacation.", exJpn: "私は休暇中です。" },
            { eng: "Go (went)", jpn: "行く", exEng: "I went to Tokyo.", exJpn: "私は東京に行きました。" },
            { eng: "Buy (bought)", jpn: "買う", exEng: "I bought a shirt.", exJpn: "私はシャツを買いました。" },
            { eng: "Eat (ate)", jpn: "食べる", exEng: "We ate sushi.", exJpn: "私たちは寿司を食べました。" },
            { eng: "Drink (drank)", jpn: "飲む", exEng: "I drank green tea.", exJpn: "私は緑茶を飲みました。" },
            { eng: "See (saw)", jpn: "見る / 会う", exEng: "I saw my friend.", exJpn: "私は友達に会いました。" },
            { eng: "Take (took)", jpn: "撮る / 取る / 乗る", exEng: "I took many photos.", exJpn: "私はたくさんの写真を撮りました。" },
            { eng: "Meet (met)", jpn: "会う", exEng: "I met him there.", exJpn: "私はそこで彼に会いました。" },
            { eng: "Have (had)", jpn: "持つ / 食べる / 過ごす", exEng: "We had a good time.", exJpn: "私たちは良い時間を過ごしました。" },
            { eng: "Souvenir", jpn: "お土産", exEng: "I bought a souvenir.", exJpn: "私はお土産を買いました。" },
            { eng: "Delicious", jpn: "美味しい", exEng: "The food was delicious.", exJpn: "食べ物は美味しかったです。" },
            { eng: "Exciting", jpn: "ワクワクする", exEng: "The trip was exciting.", exJpn: "旅行はワクワクしました。" },
            { eng: "Great", jpn: "素晴らしい", exEng: "It was a great day.", exJpn: "素晴らしい一日でした。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>How was your trip to Kyoto?</span>", jpn: "京都への旅行はどうでしたか？" },
            { speaker: "B", eng: "It was great! <span class='swappable'>I <i class='grammar-target'>went</i> to many temples.</span>", jpn: "素晴らしかったです！たくさんのお寺に行きました。" },
            { speaker: "A", eng: "Did you eat anything good?", jpn: "何か美味しいものは食べましたか？" },
            { speaker: "B", eng: "Yes, I <i class='grammar-target'>ate</i> delicious sushi and I <i class='grammar-target'>drank</i> green tea.", jpn: "はい、美味しい寿司を食べて、緑茶を飲みました。" },
            { speaker: "A", eng: "Wow. Did you take photos?", jpn: "わあ。写真は撮りましたか？" },
            { speaker: "B", eng: "Yes, I <i class='grammar-target'>took</i> a lot of photos. And I <i class='grammar-target'>bought</i> this souvenir for you.", jpn: "はい、たくさんの写真を撮りました。そして、あなたにこのお土産を買いました。" },
            { speaker: "A", eng: "Thank you so much! I am glad you <i class='grammar-target'>had</i> fun.", jpn: "本当にありがとう！楽しんでくれて嬉しいです。" }
        ],
        dialogueStructure: [
            "Ask about a trip <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(旅行について尋ねる)</span>",
            "> State overall feeling + State past action <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(全体的な感想を伝える ＋ 過去の行動を伝える)</span>",
            "Ask Yes/No question about food <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(食べ物についてのYes/No質問をする)</span>",
            "> Answer + Describe food and drink <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(答える ＋ 飲食したものを説明する)</span>",
            "React + Ask about photos <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 写真について尋ねる)</span>",
            "> Answer + State action about souvenir <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(答える ＋ お土産についてのアクションを伝える)</span>",
            "Say thank you + Express gladness <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(お礼を言う ＋ 喜びを表現する)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about a trip (旅行について尋ねる)", 
                options: [
                    { eng: "How was your trip to Kyoto?", jpn: "京都への旅行はどうでしたか？" }, 
                    { eng: "How was your vacation?", jpn: "休暇はどうでしたか？" }, 
                    { eng: "Did you have a good trip?", jpn: "良い旅行でしたか？" }
                ] 
            },
            { 
                category: "2. Describing past events (過去の出来事を伝える)", 
                options: [
                    { eng: "I went to many temples.", jpn: "たくさんのお寺に行きました。" }, 
                    { eng: "I ate delicious sushi.", jpn: "美味しいお寿司を食べました。" }, 
                    { eng: "I took a lot of photos.", jpn: "たくさんの写真を撮りました。" }
                ] 
            }
        ],
        grammar: {
            point: "Past Simple (Irregular Verbs) - 一般動詞の過去形（不規則動詞）",
            explanation: "Many common English verbs do not take '-ed' in the past tense. They change completely and must be memorized. For example, 'go' becomes 'went', and 'eat' becomes 'ate'. However, in questions and negatives, we still use 'did/didn't' and revert to the base form (e.g., <em>Did you go? / I didn't go.</em>) <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（動詞の中には、過去形にする時に「-ed」を付けるルールに従わず、単語の形が完全に変わってしまうものがあります。これを不規則動詞と呼びます。<br>よく使う不規則動詞の例：<br>go → <strong>went</strong>（行った）、buy → <strong>bought</strong>（買った）、eat → <strong>ate</strong>（食べた）、drink → <strong>drank</strong>（飲んだ）、see → <strong>saw</strong>（見た）、take → <strong>took</strong>（撮った/取った）、have → <strong>had</strong>（持っていた）。<br>これらは理屈ではなく暗記するしかありません。ただし、疑問文と否定文を作る時は規則動詞と同じで、<strong>Did / didn't</strong> を使い、後ろの動詞は元の形（原形）に戻ります（例：I <u>didn't go</u> / <u>Did</u> you <u>eat</u>?）。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the irregular verbs: '<u>went</u>' (go), '<u>ate</u>' (eat), '<u>drank</u>' (drink), '<u>took</u>' (take), '<u>bought</u>' (buy), and '<u>had</u>' (have). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：不規則動詞に注目してください：『<u>went</u>（go）』『<u>ate</u>（eat）』『<u>drank</u>（drink）』『<u>took</u>（take）』『<u>bought</u>（buy）』『<u>had</u>（have）』。)</span>",
            examples: [
                { eng: "I went to the supermarket yesterday.", jpn: "私は昨日スーパーに行きました。" },
                { eng: "She didn't buy the shoes.", jpn: "彼女はその靴を買いませんでした。" },
                { eng: "We had a lot of fun.", jpn: "私たちはとても楽しみました。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I / go / to Tokyo (+)", 
            target: "I went to Tokyo." 
        },
        grammarPractice: [
            { prompt: "She / buy / a souvenir (+)" },
            { prompt: "We / eat / sushi (+)" },
            { prompt: "They / not / take / photos (-)" },
            { prompt: "Did / you / have / fun (?)" },
            { prompt: "I / see / a famous temple (+)" }
        ],
        clickingGames: [
            { prompt: "京都への旅行はどうでしたか？", target: "How was your trip to Kyoto?", words: ["How", "was", "your", "trip", "to", "Kyoto?"] },
            { prompt: "たくさんのお寺に行きました。", target: "I went to many temples.", words: ["I", "went", "to", "many", "temples."] },
            { prompt: "美味しい寿司を食べて、緑茶を飲みました。", target: "I ate delicious sushi and I drank green tea.", words: ["I", "ate", "delicious", "sushi", "and", "I", "drank", "green", "tea."] },
            { prompt: "たくさんの写真を撮りました。", target: "I took a lot of photos.", words: ["I", "took", "a", "lot", "of", "photos."] },
            { prompt: "あなたにこのお土産を買いました。", target: "I bought this souvenir for you.", words: ["I", "bought", "this", "souvenir", "for", "you."] }
        ],
        dropdownGames: [
            { before: "I", options: ["go", "went", "goed"], answer: "went", after: " to Kyoto yesterday." },
            { before: "She", options: ["buyed", "buys", "bought"], answer: "bought", after: " a nice souvenir." },
            { before: "We", options: ["eated", "ate", "eat"], answer: "ate", after: " delicious fish." },
            { before: "Did you", options: ["saw", "see", "seed"], answer: "see", after: " the famous mountain?" },
            { before: "They", options: ["had", "haved", "has"], answer: "had", after: " a great time on vacation." }
        ],
        roleplay: {
            a: "Ask your partner about a recent trip or vacation they took (e.g., 'How was your trip to...?'). Ask if they bought any souvenirs. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに最近の旅行や休暇について尋ねてください。お土産を買ったかどうかも聞いてください。)</span>",
            b: "Answer your partner. Use irregular past tense verbs (went, ate, saw, bought) to describe what you did. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに答えてください。不規則動詞の過去形（went, ate, saw, bought）を使って何をしたか描写してください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Trip", jpn: "旅行", exEng: "How was your trip?", exJpn: "旅行はどうでしたか？" },
                { eng: "Vacation", jpn: "休暇", exEng: "I am on vacation.", exJpn: "私は休暇中です。" },
                { eng: "Go (went)", jpn: "行く", exEng: "I went to Tokyo.", exJpn: "私は東京に行きました。" },
                { eng: "Buy (bought)", jpn: "買う", exEng: "I bought a shirt.", exJpn: "私はシャツを買いました。" },
                { eng: "Eat (ate)", jpn: "食べる", exEng: "We ate sushi.", exJpn: "私たちは寿司を食べました。" },
                { eng: "Drink (drank)", jpn: "飲む", exEng: "I drank green tea.", exJpn: "私は緑茶を飲みました。" },
                { eng: "See (saw)", jpn: "見る / 会う", exEng: "I saw my friend.", exJpn: "私は友達に会いました。" },
                { eng: "Take (took)", jpn: "撮る / 取る / 乗る", exEng: "I took many photos.", exJpn: "私はたくさんの写真を撮りました。" },
                { eng: "Meet (met)", jpn: "会う", exEng: "I met him there.", exJpn: "私はそこで彼に会いました。" },
                { eng: "Have (had)", jpn: "持つ / 食べる / 過ごす", exEng: "We had a good time.", exJpn: "私たちは良い時間を過ごしました。" },
                { eng: "Souvenir", jpn: "お土産", exEng: "I bought a souvenir.", exJpn: "私はお土産を買いました。" },
                { eng: "Delicious", jpn: "美味しい", exEng: "The food was delicious.", exJpn: "食べ物は美味しかったです。" },
                { eng: "Exciting", jpn: "ワクワクする", exEng: "The trip was exciting.", exJpn: "旅行はワクワクしました。" },
                { eng: "Great", jpn: "素晴らしい", exEng: "It was a great day.", exJpn: "素晴らしい一日でした。" }
            ],
            reading1: {
                title: "Task 2: Reading (A Trip to Kyoto)",
                instruction: "Read the story about a vacation.",
                eng: "<strong>My Trip to Kyoto</strong><br><br>Last month, I went to Kyoto for a short vacation. The weather was beautiful. On the first day, I saw many old temples and took a lot of photos. The temples were very quiet and peaceful. In the evening, I ate dinner at a traditional restaurant. I had sushi and drank hot green tea. The food was delicious. Before I went home, I bought some sweet souvenirs for my coworkers. I had a great time in Kyoto!",
                jpn: "<strong>京都への旅行</strong><br><br>先月、私は短い休暇で京都に行きました。天気は美しかったです。初日、私はたくさんの古いお寺を見て、たくさんの写真を撮りました。お寺はとても静かで平和でした。夜は、伝統的なレストランで夕食を食べました。寿司を食べて、温かい緑茶を飲みました。食べ物は美味しかったです。家に帰る前に、同僚のために甘いお土産をいくつか買いました。京都で素晴らしい時間を過ごしました！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "How was your trip to Kyoto?", jpn: "京都への旅行はどうでしたか？" },
                { speaker: "B", eng: "It was great! I went to many temples.", jpn: "素晴らしかったです！たくさんのお寺に行きました。" },
                { speaker: "A", eng: "Did you eat anything good?", jpn: "何か美味しいものは食べましたか？" },
                { speaker: "B", eng: "Yes, I ate delicious sushi and I drank green tea.", jpn: "はい、美味しい寿司を食べて、緑茶を飲みました。" },
                { speaker: "A", eng: "Wow. Did you take photos?", jpn: "わあ。写真は撮りましたか？" },
                { speaker: "B", eng: "Yes, I took a lot of photos. And I bought this souvenir for you.", jpn: "はい、たくさんの写真を撮りました。そして、あなたにこのお土産を買いました。" },
                { speaker: "A", eng: "Thank you so much! I am glad you had fun.", jpn: "本当にありがとう！楽しんでくれて嬉しいです。" }
            ],
            writingTask: {
                promptEng: "Write three sentences about a trip you took in the past. Use irregular verbs like went, saw, ate, drank, bought, took, or had.",
                promptJpn: "過去に行った旅行について3つの文を書いてください。went, saw, ate, drank, bought, took, had などの不規則動詞を使用してください。"
            }
        }
    },
    {
        id: 37,
        title: "Lesson 37: How to talk about future plans",
        goal: "Ask and answer questions about future plans using 'be going to'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『be going to』を使って、将来の計画について質問し、答える。)</span>",
        vocab: [
            { eng: "Tomorrow", jpn: "明日", exEng: "See you tomorrow.", exJpn: "また明日。" },
            { eng: "Next week", jpn: "来週", exEng: "We meet next week.", exJpn: "来週会いましょう。" },
            { eng: "Next month", jpn: "来月", exEng: "I travel next month.", exJpn: "来月旅行します。" },
            { eng: "Next year", jpn: "来年", exEng: "I will graduate next year.", exJpn: "来年卒業します。" },
            { eng: "Soon", jpn: "もうすぐ / すぐに", exEng: "It will rain soon.", exJpn: "もうすぐ雨が降ります。" },
            { eng: "Later", jpn: "後で", exEng: "I will call you later.", exJpn: "後で電話します。" },
            { eng: "Plan", jpn: "計画", exEng: "That is a good plan.", exJpn: "それは良い計画です。" },
            { eng: "Vacation", jpn: "休暇", exEng: "I need a vacation.", exJpn: "私は休暇が必要です。" },
            { eng: "Visit", jpn: "訪問する", exEng: "I am going to visit him.", exJpn: "彼を訪ねるつもりです。" },
            { eng: "Meet", jpn: "会う", exEng: "We are going to meet.", exJpn: "私たちは会う予定です。" },
            { eng: "Buy", jpn: "買う", exEng: "I am going to buy it.", exJpn: "それを買うつもりです。" },
            { eng: "Start", jpn: "始める", exEng: "The movie is going to start.", exJpn: "映画が始まります。" },
            { eng: "Move", jpn: "引っ越す", exEng: "I am going to move.", exJpn: "引っ越す予定です。" },
            { eng: "Excited", jpn: "ワクワクしている", exEng: "I am very excited.", exJpn: "とてもワクワクしています。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'><i class='grammar-target'>What are you going to do</i> this weekend?</span>", jpn: "今週末は何をする予定ですか？" },
            { speaker: "B", eng: "<span class='swappable'><i class='grammar-target'>I am going to visit</i> my grandmother.</span>", jpn: "祖母を訪ねる予定です。" },
            { speaker: "A", eng: "That sounds nice. Is she doing well?", jpn: "それはいいですね。彼女はお元気ですか？" },
            { speaker: "B", eng: "Yes, she is. What about you? <i class='grammar-target'>Are you going to work?</i>", jpn: "はい、元気です。あなたはどうですか？仕事をする予定ですか？" },
            { speaker: "A", eng: "No, <i class='grammar-target'>I am going to buy</i> a new computer. My old one is broken.", jpn: "いいえ、新しいコンピューターを買う予定です。古いのが壊れてしまって。" },
            { speaker: "B", eng: "Oh, I see. Have a good weekend!", jpn: "ああ、なるほど。良い週末を！" }
        ],
        dialogueStructure: [
            "Ask about future plans <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(将来の予定を尋ねる)</span>",
            "> State future plan <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(将来の予定を伝える)</span>",
            "React + Ask follow-up question <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 関連する質問をする)</span>",
            "> Answer + Ask about their plans <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(答える ＋ 相手の予定を尋ねる)</span>",
            "State future plan + Give reason <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(予定を伝える ＋ 理由を添える)</span>",
            "> React + Wish them well <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 良い日になるよう願う)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about future plans (将来の予定を尋ねる)", 
                options: [
                    { eng: "What are you going to do this weekend?", jpn: "今週末は何をする予定ですか？" }, 
                    { eng: "What are you going to do tomorrow?", jpn: "明日は何をする予定ですか？" }, 
                    { eng: "Are you going to work?", jpn: "仕事をする予定ですか？" }
                ] 
            },
            { 
                category: "2. Stating future plans (将来の予定を伝える)", 
                options: [
                    { eng: "I am going to visit my grandmother.", jpn: "祖母を訪ねる予定です。" }, 
                    { eng: "I am going to buy a new computer.", jpn: "新しいコンピューターを買う予定です。" }, 
                    { eng: "I am going to stay home.", jpn: "家にいる予定です。" }
                ] 
            }
        ],
        grammar: {
            point: "Future Plans (be going to + verb) - 未来の予定（be going to）",
            explanation: "To talk about plans we have already made for the future, we use a 'be' verb + 'going to' + the base verb. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「〜する予定です」「〜するつもりです」というように、すでに自分の中で決まっている未来の計画について話す時は『be going to + 動詞の原形』を使います。作り方は【主語 ＋ be動詞（am/is/are）＋ going to ＋ メインの動詞】です。例えば、「I buy a computer（私はコンピューターを買います）」を未来の計画に変えると、「I <strong>am going to buy</strong> a computer（私はコンピューターを買う予定です）」となります。週末の予定や休暇の計画について語る時の基本となる文法です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the structure: 'What <u>are you going to do</u>', '<u>I am going to visit</u>', and '<u>I am going to buy</u>'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『What <u>are you going to do</u>』『<u>I am going to visit</u>』『<u>I am going to buy</u>』の構造に注目してください。)</span>",
            examples: [
                { eng: "She is going to start a new job.", jpn: "彼女は新しい仕事を始める予定です。" },
                { eng: "They are going to travel to Hawaii.", jpn: "彼らはハワイに旅行する予定です。" },
                { eng: "Are you going to eat dinner?", jpn: "夕食を食べる予定ですか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I / visit / a friend (+)", 
            target: "I am going to visit a friend." 
        },
        grammarPractice: [
            { prompt: "She / buy / a car (+)" },
            { prompt: "We / meet / at the station (+)" },
            { prompt: "What / you / do / tomorrow (?)" },
            { prompt: "He / not / work / this weekend (-)" },
            { prompt: "They / travel / next month (+)" }
        ],
        clickingGames: [
            { prompt: "今週末は何をする予定ですか？", target: "What are you going to do this weekend?", words: ["What", "are", "you", "going", "to", "do", "this", "weekend?"] },
            { prompt: "祖母を訪ねる予定です。", target: "I am going to visit my grandmother.", words: ["I", "am", "going", "to", "visit", "my", "grandmother."] },
            { prompt: "仕事をする予定ですか？", target: "Are you going to work?", words: ["Are", "you", "going", "to", "work?"] },
            { prompt: "新しいコンピューターを買う予定です。", target: "I am going to buy a new computer.", words: ["I", "am", "going", "to", "buy", "a", "new", "computer."] },
            { prompt: "明日は何をする予定ですか？", target: "What are you going to do tomorrow?", words: ["What", "are", "you", "going", "to", "do", "tomorrow?"] }
        ],
        dropdownGames: [
            { before: "I", options: ["am going to", "is going to", "are going to"], answer: "am going to", after: " visit my friends." },
            { before: "She", options: ["are going to", "am going to", "is going to"], answer: "is going to", after: " buy a new car." },
            { before: "What", options: ["are you going", "do you going", "you are going"], answer: "are you going", after: " to do?" },
            { before: "They", options: ["is going to", "are going to", "am going to"], answer: "are going to", after: " play tennis." },
            { before: "Are you", options: ["go to", "going to", "goes to"], answer: "going to", after: " work today?" }
        ],
        roleplay: {
            a: "Ask your partner what they are going to do next weekend or next vacation. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに、次の週末や次の休暇に何をする予定か尋ねてください。)</span>",
            b: "Answer your partner using 'I am going to...'. Share your plans! <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(『I am going to...』を使ってパートナーに答えてください。あなたの計画を共有しましょう！)</span>"
        },
        homework: {
            vocab: [
                { eng: "Tomorrow", jpn: "明日", exEng: "See you tomorrow.", exJpn: "また明日。" },
                { eng: "Next week", jpn: "来週", exEng: "We meet next week.", exJpn: "来週会いましょう。" },
                { eng: "Next month", jpn: "来月", exEng: "I travel next month.", exJpn: "来月旅行します。" },
                { eng: "Next year", jpn: "来年", exEng: "I will graduate next year.", exJpn: "来年卒業します。" },
                { eng: "Soon", jpn: "もうすぐ / すぐに", exEng: "It will rain soon.", exJpn: "もうすぐ雨が降ります。" },
                { eng: "Later", jpn: "後で", exEng: "I will call you later.", exJpn: "後で電話します。" },
                { eng: "Plan", jpn: "計画", exEng: "That is a good plan.", exJpn: "それは良い計画です。" },
                { eng: "Vacation", jpn: "休暇", exEng: "I need a vacation.", exJpn: "私は休暇が必要です。" },
                { eng: "Visit", jpn: "訪問する", exEng: "I am going to visit him.", exJpn: "彼を訪ねるつもりです。" },
                { eng: "Meet", jpn: "会う", exEng: "We are going to meet.", exJpn: "私たちは会う予定です。" },
                { eng: "Buy", jpn: "買う", exEng: "I am going to buy it.", exJpn: "それを買うつもりです。" },
                { eng: "Start", jpn: "始める", exEng: "The movie is going to start.", exJpn: "映画が始まります。" },
                { eng: "Move", jpn: "引っ越す", exEng: "I am going to move.", exJpn: "引っ越す予定です。" },
                { eng: "Excited", jpn: "ワクワクしている", exEng: "I am very excited.", exJpn: "とてもワクワクしています。" }
            ],
            reading1: {
                title: "Task 2: Reading (A Vacation Plan)",
                instruction: "Read the email about upcoming vacation plans.",
                eng: "<strong>To:</strong> Lisa<br><strong>From:</strong> Chris<br><br>Hi Lisa! I am writing to tell you about my vacation. Next month, I am going to travel to Hawaii with my family. We are going to stay at a hotel near the beach. Every morning, I am going to swim in the ocean. My father is going to play golf, and my mother is going to read by the pool. We are also going to eat a lot of delicious food. I am very excited. What are you going to do next month?",
                jpn: "<strong>宛先：</strong> リサ<br><strong>差出人：</strong> クリス<br><br>こんにちはリサ！私の休暇について伝えるために手紙を書いています。来月、私は家族と一緒にハワイへ旅行する予定です。私たちはビーチの近くのホテルに滞在する予定です。毎朝、私は海で泳ぐつもりです。父はゴルフをする予定で、母はプールサイドで読書をする予定です。また、美味しい食べ物をたくさん食べるつもりです。私はとてもワクワクしています。あなたは来月何をする予定ですか？"
            },
            expandedDialogue: [
                { speaker: "A", eng: "What are you going to do this weekend?", jpn: "今週末は何をする予定ですか？" },
                { speaker: "B", eng: "I am going to visit my grandmother.", jpn: "祖母を訪ねる予定です。" },
                { speaker: "A", eng: "That sounds nice. Is she doing well?", jpn: "それはいいですね。彼女はお元気ですか？" },
                { speaker: "B", eng: "Yes, she is. What about you? Are you going to work?", jpn: "はい、元気です。あなたはどうですか？仕事をする予定ですか？" },
                { speaker: "A", eng: "No, I am going to buy a new computer. My old one is broken.", jpn: "いいえ、新しいコンピューターを買う予定です。古いのが壊れてしまって。" },
                { speaker: "B", eng: "Oh, I see. Have a good weekend!", jpn: "ああ、なるほど。良い週末を！" }
            ],
            writingTask: {
                promptEng: "Write three sentences about your future plans (for this weekend, next month, or next year). Use 'be going to'.",
                promptJpn: "あなたの将来の計画（今週末、来月、または来年）について3つの文を書いてください。『be going to』を使用してください。"
            }
        }
    },,{
        id: 38,
        title: "Lesson 38: How to make a suggestion",
        goal: "Make suggestions and invite people to do things using 'Let's', 'Why don't we', and 'How about'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（『Let's』『Why don't we』『How about』を使って、提案をしたり人を誘ったりする。）</span>",
        vocab: [
            { eng: "Let's", jpn: "〜しましょう", exEng: "Let's go home.", exJpn: "家に帰りましょう。" },
            { eng: "How about", jpn: "〜はどうですか？", exEng: "How about pizza?", exJpn: "ピザはどうですか？" },
            { eng: "Why don't we", jpn: "〜しませんか？", exEng: "Why don't we walk?", exJpn: "歩きませんか？" },
            { eng: "Movie", jpn: "映画", exEng: "Let's watch a movie.", exJpn: "映画を見ましょう。" },
            { eng: "Dinner", jpn: "夕食", exEng: "How about dinner?", exJpn: "夕食はどうですか？" },
            { eng: "Beach", jpn: "ビーチ", exEng: "Let's go to the beach.", exJpn: "ビーチに行きましょう。" },
            { eng: "Park", jpn: "公園", exEng: "Why don't we go to the park?", exJpn: "公園に行きませんか？" },
            { eng: "Tonight", jpn: "今夜", exEng: "Are you free tonight?", exJpn: "今夜は暇ですか？" },
            { eng: "Idea", jpn: "アイデア / 考え", exEng: "That is a great idea.", exJpn: "それは素晴らしいアイデアです。" },
            { eng: "Sounds good", jpn: "いいですね", exEng: "Sounds good to me.", exJpn: "私にはいい案に思えます。" },
            { eng: "Busy", jpn: "忙しい", exEng: "I am busy today.", exJpn: "今日は忙しいです。" },
            { eng: "Maybe", jpn: "たぶん / もしかしたら", exEng: "Maybe next time.", exJpn: "たぶんまた今度。" },
            { eng: "Tired", jpn: "疲れた", exEng: "I am too tired.", exJpn: "疲れすぎています。" },
            { eng: "Meet", jpn: "会う", exEng: "Let's meet at 6.", exJpn: "6時に会いましょう。" }
        ],
        dialogue: [
            { speaker: "A", eng: "I am really hungry. <span class='swappable'><i class='grammar-target'>Let's get</i> some lunch.</span>", jpn: "本当にお腹が空きました。お昼ご飯を食べに行きましょう。" },
            { speaker: "B", eng: "<span class='swappable'>That sounds good.</span> What do you want to eat?", jpn: "それはいいですね。何を食べたいですか？" },
            { speaker: "A", eng: "<span class='swappable'><i class='grammar-target'>How about</i> Italian food?</span>", jpn: "イタリア料理はどうですか？" },
            { speaker: "B", eng: "I had pasta yesterday. <i class='grammar-target'>Why don't we</i> have Chinese food?", jpn: "昨日はパスタを食べたんです。中華料理にしませんか？" },
            { speaker: "A", eng: "Great idea! <i class='grammar-target'>Let's go</i> to the new restaurant near the station.", jpn: "素晴らしいアイデアですね！駅の近くの新しいレストランに行きましょう。" },
            { speaker: "B", eng: "Perfect. <i class='grammar-target'>Let's</i> go.", jpn: "完璧です。行きましょう。" }
        ],
        dialogueStructure: [
            "State feeling + Make a suggestion <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(気分を伝える ＋ 提案をする)</span>",
            "> Agree + Ask for preference <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 好みを尋ねる)</span>",
            "Suggest an option <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(選択肢を提案する)</span>",
            "> State reason + Suggest an alternative <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(理由を伝える ＋ 代替案を提案する)</span>",
            "Agree + Suggest a location <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 場所を提案する)</span>",
            "> Confirm and finish <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(確認して終わる)</span>"
        ],
        expressions: [
            { 
                category: "1. Making a suggestion (提案をする)", 
                options: [
                    { eng: "Let's get some lunch.", jpn: "お昼ご飯を食べに行きましょう。" }, 
                    { eng: "How about Italian food?", jpn: "イタリア料理はどうですか？" }, 
                    { eng: "Why don't we watch a movie?", jpn: "映画を見ませんか？" }
                ] 
            },
            { 
                category: "2. Responding to a suggestion (提案に答える)", 
                options: [
                    { eng: "That sounds good.", jpn: "それはいいですね。" }, 
                    { eng: "That is a great idea.", jpn: "それは素晴らしいアイデアですね。" }, 
                    { eng: "Maybe next time.", jpn: "たぶんまた今度にしましょう。" }
                ] 
            }
        ],
        grammar: {
            point: "Suggestions (Let's / How about / Why don't we) - 提案の表現",
            explanation: "To suggest doing something together, we have three common patterns. <br>1. <strong>Let's</strong> + Base Verb (Let's go) <br>2. <strong>Why don't we</strong> + Base Verb (Why don't we go?) <br>3. <strong>How about</strong> + Noun or Verb-ing (How about pizza? / How about going?) <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（誰かを誘ったり、アイデアを提案したりする時には、3つの便利な表現があります。<br>1. <strong>Let's + 動詞の原形</strong>：「〜しましょう」。最もシンプルで直接的な誘い方です。<br>2. <strong>Why don't we + 動詞の原形</strong>：「〜しませんか？」。直訳すると「なぜ私たちは〜しないのか」ですが、実際は「〜しようよ」というソフトな提案になります。<br>3. <strong>How about + 名詞（または動名詞）</strong>：「〜はどうですか？」。食べ物や場所のアイデアを出す時によく使います。後ろには動詞の原形ではなく、名詞か動詞の-ing形が来ることに注意しましょう。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the different patterns: '<u>Let's get</u>', '<u>How about</u> Italian food?', and '<u>Why don't we</u> have...'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>Let's get</u>』『<u>How about</u> Italian food?』『<u>Why don't we</u> have...』という異なるパターンに注目してください。)</span>",
            examples: [
                { eng: "Let's take a taxi.", jpn: "タクシーに乗りましょう。" },
                { eng: "Why don't we ask the teacher?", jpn: "先生に聞いてみませんか？" },
                { eng: "How about going to the beach?", jpn: "ビーチに行くのはどうですか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "watch a movie (Let's)", 
            target: "Let's watch a movie." 
        },
        grammarPractice: [
            { prompt: "go to the park (Why don't we)" },
            { prompt: "sushi for dinner (How about)" },
            { prompt: "take a break (Let's)" },
            { prompt: "meet at 6 PM (Why don't we)" },
            { prompt: "drinking coffee (How about)" }
        ],
        clickingGames: [
            { prompt: "お昼ご飯を食べに行きましょう。", target: "Let's get some lunch.", words: ["Let's", "get", "some", "lunch."] },
            { prompt: "それはいいですね。", target: "That sounds good.", words: ["That", "sounds", "good."] },
            { prompt: "イタリア料理はどうですか？", target: "How about Italian food?", words: ["How", "about", "Italian", "food?"] },
            { prompt: "中華料理にしませんか？", target: "Why don't we have Chinese food?", words: ["Why", "don't", "we", "have", "Chinese", "food?"] },
            { prompt: "素晴らしいアイデアですね！", target: "Great idea!", words: ["Great", "idea!"] }
        ],
        dropdownGames: [
            { before: "", options: ["Let's", "How about", "Why"], answer: "Let's", after: " go to the cinema tonight." },
            { before: "", options: ["Why don't we", "How about", "Let's"], answer: "Why don't we", after: " order a pizza?" },
            { before: "How", options: ["about", "around", "for"], answer: "about", after: " a cup of tea?" },
            { before: "That", options: ["sounds", "hears", "listens"], answer: "sounds", after: " like a great idea." },
            { before: "How about", options: ["going", "go", "goes"], answer: "going", after: " to the museum?" }
        ],
        roleplay: {
            a: "You are bored. Suggest doing an activity with your partner using 'Let's'. Later, suggest a place to eat using 'How about'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(退屈しています。『Let's』を使ってパートナーに何か活動を提案してください。その後、『How about』を使って食事に行く場所を提案してください。)</span>",
            b: "Say you are too tired for the first activity, and suggest something else using 'Why don't we'. Agree to the food suggestion. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(最初のアクティビティには疲れすぎていると伝え、『Why don't we』を使って別のことを提案してください。食事の提案には同意してください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Tired", jpn: "疲れた", exEng: "I am tired today.", exJpn: "今日は疲れています。" },
                { eng: "Bored", jpn: "退屈した", exEng: "I am bored.", exJpn: "退屈しています。" },
                { eng: "Hungry", jpn: "お腹が空いた", exEng: "Let's eat, I'm hungry.", exJpn: "食べましょう、お腹が空きました。" },
                { eng: "Thirsty", jpn: "喉が渇いた", exEng: "I am thirsty.", exJpn: "喉が渇きました。" },
                { eng: "Rest", jpn: "休む", exEng: "Let's rest.", exJpn: "休みましょう。" },
                { eng: "Walk", jpn: "散歩 / 歩く", exEng: "How about a walk?", exJpn: "散歩はどうですか？" },
                { eng: "Idea", jpn: "考え / アイデア", exEng: "Good idea.", exJpn: "良い考えです。" },
                { eng: "Sound", jpn: "〜に聞こえる / 思える", exEng: "It sounds fun.", exJpn: "楽しそうですね。" },
                { eng: "Restaurant", jpn: "レストラン", exEng: "Let's go to a restaurant.", exJpn: "レストランに行きましょう。" },
                { eng: "Cafe", jpn: "カフェ", exEng: "Why don't we go to a cafe?", exJpn: "カフェに行きませんか？" },
                { eng: "Movie theater", jpn: "映画館", exEng: "Meet me at the movie theater.", exJpn: "映画館で会いましょう。" },
                { eng: "Shopping", jpn: "買い物", exEng: "Let's go shopping.", exJpn: "買い物に行きましょう。" },
                { eng: "Tomorrow", jpn: "明日", exEng: "How about tomorrow?", exJpn: "明日はどうですか？" },
                { eng: "Later", jpn: "後で", exEng: "Let's do it later.", exJpn: "後でやりましょう。" }
            ],
            reading1: {
                title: "Task 2: Reading (Weekend Plans)",
                instruction: "Read the chat conversation about weekend plans.",
                eng: "<strong>Alex:</strong> Hi Sarah! I am so bored. Let's do something this weekend.<br><strong>Sarah:</strong> Hi Alex! That sounds good. Why don't we go to the beach?<br><strong>Alex:</strong> It is going to rain on Saturday. How about going to the museum instead?<br><strong>Sarah:</strong> Great idea. I love the museum. Let's meet at the station at 10 AM.<br><strong>Alex:</strong> Perfect. And after the museum, why don't we get some Italian food?<br><strong>Sarah:</strong> Sounds delicious. See you on Saturday!",
                jpn: "<strong>アレックス：</strong> やあサラ！とても退屈しているんだ。今週末何かやろうよ。<br><strong>サラ：</strong> こんにちはアレックス！それはいいわね。ビーチに行かない？<br><strong>アレックス：</strong> 土曜日は雨が降る予定なんだ。代わりに博物館に行くのはどう？<br><strong>サラ：</strong> 素晴らしいアイデア。博物館は大好きよ。午前10時に駅で待ち合わせしましょう。<br><strong>アレックス：</strong> 完璧だね。博物館の後は、イタリア料理を食べに行かない？<br><strong>サラ：</strong> 美味しそうね。土曜日に会いましょう！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "I am really stressed from work.", jpn: "仕事で本当にストレスがたまっています。" },
                { speaker: "B", eng: "Me too. Let's take a break.", jpn: "私もです。休憩しましょう。" },
                { speaker: "A", eng: "How about going to a cafe? I need coffee.", jpn: "カフェに行くのはどうですか？コーヒーが必要です。" },
                { speaker: "B", eng: "Why don't we go to the park instead? The weather is nice.", jpn: "代わりに公園に行きませんか？天気がいいですよ。" },
                { speaker: "A", eng: "Okay, sounds good. Let's buy coffee and walk in the park.", jpn: "わかりました、いいですね。コーヒーを買って公園を歩きましょう。" }
            ],
            writingTask: {
                promptEng: "Write three sentences making suggestions to a friend. Use 'Let's...', 'Why don't we...', and 'How about...'.",
                promptJpn: "友達に提案をする文を3つ書いてください。『Let's...』『Why don't we...』『How about...』を使用してください。"
            }
        }
    },
    {
        id: 39,
        title: "Lesson 39: How to compare two things",
        goal: "Compare two items, places, or people using comparative adjectives (-er than / more... than). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（比較級の形容詞（-er than / more... than）を使って、2つの物、場所、または人を比較する。）</span>",
        vocab: [
            { eng: "Big", jpn: "大きい", exEng: "A big dog.", exJpn: "大きな犬。" },
            { eng: "Bigger", jpn: "より大きい", exEng: "My dog is bigger.", exJpn: "私の犬の方が大きいです。" },
            { eng: "Small", jpn: "小さい", exEng: "A small phone.", exJpn: "小さな携帯。" },
            { eng: "Smaller", jpn: "より小さい", exEng: "This is smaller.", exJpn: "こちらの方が小さいです。" },
            { eng: "Cheap", jpn: "安い", exEng: "A cheap car.", exJpn: "安い車。" },
            { eng: "Cheaper", jpn: "より安い", exEng: "This shirt is cheaper.", exJpn: "このシャツの方が安いです。" },
            { eng: "Expensive", jpn: "高価な", exEng: "An expensive watch.", exJpn: "高価な時計。" },
            { eng: "More expensive", jpn: "より高価な", exEng: "Gold is more expensive.", exJpn: "金の方が高価です。" },
            { eng: "Good", jpn: "良い", exEng: "A good book.", exJpn: "良い本。" },
            { eng: "Better", jpn: "より良い", exEng: "This movie is better.", exJpn: "この映画の方が良いです。" },
            { eng: "Bad", jpn: "悪い", exEng: "Bad weather.", exJpn: "悪い天気。" },
            { eng: "Worse", jpn: "より悪い", exEng: "The rain is worse today.", exJpn: "今日の雨はより悪いです。" },
            { eng: "Fast", jpn: "速い", exEng: "A fast train.", exJpn: "速い電車。" },
            { eng: "Faster", jpn: "より速い", exEng: "The plane is faster.", exJpn: "飛行機の方が速いです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "I want to buy a new smartphone. <span class='swappable'>Which one is <i class='grammar-target'>better</i>?</span>", jpn: "新しいスマートフォンを買いたいです。どちらが良いですか？" },
            { speaker: "B", eng: "The X-Phone is good, but the Y-Phone is <i class='grammar-target'>faster</i>.", jpn: "X-Phoneは良いですが、Y-Phoneの方が速いです。" },
            { speaker: "A", eng: "Yes, but <span class='swappable'>the Y-Phone is <i class='grammar-target'>more expensive than</i> the X-Phone.</span>", jpn: "はい、でもY-PhoneはX-Phoneよりも高価です。" },
            { speaker: "B", eng: "That is true. But the camera is <i class='grammar-target'>much better</i>.", jpn: "その通りです。でも、カメラはずっと良いですよ。" },
            { speaker: "A", eng: "Hmm, the X-Phone is <i class='grammar-target'>smaller</i>. I like small phones.", jpn: "うーん、X-Phoneの方が小さいですね。私は小さい携帯が好きです。" },
            { speaker: "B", eng: "Then the X-Phone is <i class='grammar-target'>better</i> for you.", jpn: "それなら、あなたにはX-Phoneの方が良いですね。" }
        ],
        dialogueStructure: [
            "State goal + Ask for a comparison <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(目的を伝える ＋ 比較を尋ねる)</span>",
            "> Compare features of option A and B <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(選択肢AとBの特徴を比較する)</span>",
            "Contrast with another feature <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(別の特徴で対比する)</span>",
            "> Agree + Highlight a strong point <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 強いポイントを強調する)</span>",
            "State personal preference + Give reason <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(個人的な好みを伝える ＋ 理由を添える)</span>",
            "> Conclude which is best <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(どちらが最適か結論づける)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking for a comparison (比較を尋ねる)", 
                options: [
                    { eng: "Which one is better?", jpn: "どちらが良いですか？" }, 
                    { eng: "Which one is cheaper?", jpn: "どちらが安いですか？" }, 
                    { eng: "Which is faster?", jpn: "どちらが速いですか？" }
                ] 
            },
            { 
                category: "2. Stating a comparison (比較を述べる)", 
                options: [
                    { eng: "The Y-Phone is more expensive than the X-Phone.", jpn: "Y-PhoneはX-Phoneよりも高価です。" }, 
                    { eng: "This car is faster than that car.", jpn: "この車はあの車よりも速いです。" }, 
                    { eng: "Tokyo is bigger than Kyoto.", jpn: "東京は京都よりも大きいです。" }
                ] 
            }
        ],
        grammar: {
            point: "Comparative Adjectives (-er / more) - 比較級",
            explanation: "To compare two things, we change the adjective. <br>• For short adjectives, add <strong>-er</strong> (fast -> faster, small -> smaller). <br>• For long adjectives (3+ syllables), use <strong>more</strong> before the word (expensive -> more expensive). <br>• To say what you are comparing it to, use <strong>than</strong> (e.g., faster <em>than</em> a car). <br>• <em>Note: Good becomes 'better' and Bad becomes 'worse'.</em> <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（AとBの2つのものを比べて「〜よりも…だ」と言いたい時は、形容詞の「比較級」を使います。<br>・短い単語（1〜2音節）：語尾に <strong>-er</strong> を付けます（例：fast → fast<strong>er</strong>、cheap → cheap<strong>er</strong>）。<br>・長い単語（3音節以上）：語尾を変えず、前に <strong>more</strong> を付けます（例：more expensive、more beautiful）。<br>・「〜よりも」と対象を示す時には <strong>than</strong> を使います（例：This is bigger <strong>than</strong> that）。<br>※ <strong>good</strong> は better に、<strong>bad</strong> は worse に全く形が変わる（不規則変化）ので暗記しましょう。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the forms: '<u>better</u>' (good), '<u>faster</u>' (fast), '<u>smaller</u>' (small), and '<u>more expensive than</u>'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>better</u>』『<u>faster</u>』『<u>smaller</u>』『<u>more expensive than</u>』の形に注目してください。)</span>",
            examples: [
                { eng: "A train is faster than a bus.", jpn: "電車はバスよりも速いです。" },
                { eng: "This restaurant is more famous than that one.", jpn: "このレストランはあのレストランよりも有名です。" },
                { eng: "My score was better than yours.", jpn: "私の点数はあなたの点数よりも良かったです。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "A car / fast / a bicycle", 
            target: "A car is faster than a bicycle." 
        },
        grammarPractice: [
            { prompt: "Tokyo / big / Kyoto" },
            { prompt: "A computer / expensive / a TV" },
            { prompt: "Today's weather / good / yesterday's weather" },
            { prompt: "My bag / small / your bag" },
            { prompt: "English / difficult / Spanish" }
        ],
        clickingGames: [
            { prompt: "どちらが良いですか？", target: "Which one is better?", words: ["Which", "one", "is", "better?"] },
            { prompt: "Y-Phoneの方が速いです。", target: "The Y-Phone is faster.", words: ["The", "Y-Phone", "is", "faster."] },
            { prompt: "Y-PhoneはX-Phoneよりも高価です。", target: "The Y-Phone is more expensive than the X-Phone.", words: ["The", "Y-Phone", "is", "more", "expensive", "than", "the", "X-Phone."] },
            { prompt: "カメラはずっと良いですよ。", target: "The camera is much better.", words: ["The", "camera", "is", "much", "better."] },
            { prompt: "X-Phoneの方が小さいです。", target: "The X-Phone is smaller.", words: ["The", "X-Phone", "is", "smaller."] }
        ],
        dropdownGames: [
            { before: "This car is", options: ["faster", "fastest", "more fast"], answer: "faster", after: " than that car." },
            { before: "My house is", options: ["bigger", "more big", "big"], answer: "bigger", after: " than yours." },
            { before: "This ring is", options: ["expensiver", "more expensive", "expensive"], answer: "more expensive", after: " than the watch." },
            { before: "His English is", options: ["gooder", "more good", "better"], answer: "better", after: " than mine." },
            { before: "A cat is smaller", options: ["then", "than", "that"], answer: "than", after: " a dog." }
        ],
        roleplay: {
            a: "You want to buy a new laptop. Ask your partner which one is better, Laptop A or Laptop B. Ask which one is cheaper. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(新しいノートパソコンを買いたいです。ノートパソコンAとBのどちらが良いかパートナーに尋ねてください。どちらが安いかも尋ねてください。)</span>",
            b: "Tell your partner Laptop A is faster, but Laptop B is cheaper. Help them decide! <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに、パソコンAの方が速いが、パソコンBの方が安いと伝えてください。決定を手伝ってください！)</span>"
        },
        homework: {
            vocab: [
                { eng: "Old", jpn: "古い / 年をとった", exEng: "This building is old.", exJpn: "この建物は古いです。" },
                { eng: "Older", jpn: "より古い", exEng: "My car is older.", exJpn: "私の車の方が古いです。" },
                { eng: "New", jpn: "新しい", exEng: "I have a new phone.", exJpn: "私は新しい携帯を持っています。" },
                { eng: "Newer", jpn: "より新しい", exEng: "This phone is newer.", exJpn: "この携帯の方が新しいです。" },
                { eng: "Hot", jpn: "暑い", exEng: "It is hot today.", exJpn: "今日は暑いです。" },
                { eng: "Hotter", jpn: "より暑い", exEng: "Summer is hotter than spring.", exJpn: "夏は春よりも暑いです。" },
                { eng: "Cold", jpn: "寒い", exEng: "It is cold.", exJpn: "寒いです。" },
                { eng: "Colder", jpn: "より寒い", exEng: "Winter is colder.", exJpn: "冬の方が寒いです。" },
                { eng: "Heavy", jpn: "重い", exEng: "This bag is heavy.", exJpn: "このカバンは重いです。" },
                { eng: "Heavier", jpn: "より重い", exEng: "The box is heavier.", exJpn: "箱の方が重いです。" },
                { eng: "Difficult", jpn: "難しい", exEng: "The test was difficult.", exJpn: "テストは難しかったです。" },
                { eng: "More difficult", jpn: "より難しい", exEng: "Math is more difficult.", exJpn: "数学の方が難しいです。" },
                { eng: "Beautiful", jpn: "美しい", exEng: "She is beautiful.", exJpn: "彼女は美しいです。" },
                { eng: "More beautiful", jpn: "より美しい", exEng: "This flower is more beautiful.", exJpn: "この花の方が美しいです。" }
            ],
            reading1: {
                title: "Task 2: Reading (Choosing a Pet)",
                instruction: "Read the story about comparing two pets.",
                eng: "<strong>Cats or Dogs?</strong><br><br>My sister and I want a pet, but we cannot agree. I want a dog, and my sister wants a cat. I think dogs are better than cats because they are friendlier. Dogs are also more active. We can play in the park together. However, my sister says cats are cleaner than dogs. She also says that cats are smaller and cheaper than dogs. They do not eat a lot of food. We are still thinking about it. Which animal is better?",
                jpn: "<strong>猫か犬か？</strong><br><br>姉と私はペットを飼いたいのですが、意見が合いません。私は犬が欲しくて、姉は猫が欲しいのです。犬は人懐っこいので、私は犬の方が猫より良いと思います。犬はまた、より活動的です。一緒に公園で遊べます。しかし、姉は猫の方が犬よりきれい好きだと言います。彼女はまた、猫の方が犬より小さくて費用がかからないとも言います。彼らは食べ物をたくさん食べません。私たちはまだ考えています。どちらの動物が良いでしょうか？"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Let's go out for dinner tonight. Should we go to the Italian restaurant or the Chinese restaurant?", jpn: "今夜は夕食に出かけましょう。イタリアンのレストランと中華のレストラン、どちらに行くべきですか？" },
                { speaker: "B", eng: "I think the Italian restaurant is better. The pasta is delicious.", jpn: "イタリアンのレストランの方が良いと思います。パスタが美味しいです。" },
                { speaker: "A", eng: "Yes, but the Italian restaurant is more expensive than the Chinese restaurant.", jpn: "はい、でもイタリアンのレストランは中華のレストランよりも高いですよ。" },
                { speaker: "B", eng: "That's true. The Chinese restaurant is cheaper, and it is closer to our house.", jpn: "それは事実ですね。中華のレストランの方が安いですし、家からも近いです。" },
                { speaker: "A", eng: "Let's go to the Chinese restaurant then!", jpn: "それなら中華のレストランに行きましょう！" }
            ],
            writingTask: {
                promptEng: "Write three sentences comparing two things you know well (like two cities, two cars, or two types of food). Use comparative adjectives (-er or more).",
                promptJpn: "あなたがよく知っている2つのもの（2つの都市、2つの車、2つの食べ物など）を比較する文を3つ書いてください。比較級の形容詞（-er または more）を使用してください。"
            }
        }
    },
    {
        id: 40,
        title: "Lesson 40: How to talk about the best or worst",
        goal: "Talk about extremes in a group using superlative adjectives (the -est / the most). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（最上級の形容詞（the -est / the most）を使って、グループの中で「一番」のものについて話す。）</span>",
        vocab: [
            { eng: "Tallest", jpn: "一番背が高い", exEng: "He is the tallest.", exJpn: "彼が一番背が高いです。" },
            { eng: "Shortest", jpn: "一番背が低い / 短い", exEng: "She is the shortest.", exJpn: "彼女が一番背が低いです。" },
            { eng: "Fastest", jpn: "一番速い", exEng: "The cheetah is the fastest.", exJpn: "チーターが一番速いです。" },
            { eng: "Slowest", jpn: "一番遅い", exEng: "The turtle is the slowest.", exJpn: "カメが一番遅いです。" },
            { eng: "Best", jpn: "一番良い", exEng: "This is the best movie.", exJpn: "これは最高の映画です。" },
            { eng: "Worst", jpn: "一番悪い", exEng: "That was the worst day.", exJpn: "あれは最悪の日でした。" },
            { eng: "Most expensive", jpn: "一番高い", exEng: "The most expensive car.", exJpn: "一番高価な車。" },
            { eng: "Cheapest", jpn: "一番安い", exEng: "This is the cheapest bag.", exJpn: "これが一番安いカバンです。" },
            { eng: "Most famous", jpn: "一番有名な", exEng: "The most famous actor.", exJpn: "一番有名な俳優。" },
            { eng: "Most popular", jpn: "一番人気のある", exEng: "The most popular song.", exJpn: "一番人気のある歌。" },
            { eng: "Delicious", jpn: "美味しい", exEng: "The food is delicious.", exJpn: "食べ物は美味しいです。" },
            { eng: "World", jpn: "世界", exEng: "In the world.", exJpn: "世界で。" },
            { eng: "Country", jpn: "国", exEng: "My country is beautiful.", exJpn: "私の国は美しいです。" },
            { eng: "City", jpn: "都市 / 街", exEng: "In this city.", exJpn: "この街で。" }
        ],
        dialogue: [
            { speaker: "A", eng: "I am very hungry. <span class='swappable'>What is <i class='grammar-target'>the best</i> restaurant in this city?</span>", jpn: "とてもお腹が空きました。この街で一番良いレストランは何ですか？" },
            { speaker: "B", eng: "I think 'Luigi's' is <i class='grammar-target'>the best</i> restaurant. It has great pizza.", jpn: "「ルイージズ」が一番良いレストランだと思います。ピザが素晴らしいです。" },
            { speaker: "A", eng: "Is it expensive?", jpn: "高いですか？" },
            { speaker: "B", eng: "Yes, it is <span class='swappable'><i class='grammar-target'>the most expensive</i> restaurant in town.</span>", jpn: "はい、町で一番高いレストランです。" },
            { speaker: "A", eng: "Oh. What is <i class='grammar-target'>the cheapest</i> place?", jpn: "ああ。一番安い場所はどこですか？" },
            { speaker: "B", eng: "'Burger King' is <i class='grammar-target'>the cheapest</i>. Let's go there.", jpn: "「バーガーキング」が一番安いです。そこに行きましょう。" }
        ],
        dialogueStructure: [
            "State feeling + Ask for the top choice <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(気分を伝える ＋ 一番の選択肢を尋ねる)</span>",
            "> State the top choice + Give reason <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(一番の選択肢を答える ＋ 理由を添える)</span>",
            "Ask about a specific feature <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(特定の特徴について尋ねる)</span>",
            "> Answer using a superlative <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(最上級を使って答える)</span>",
            "React + Ask for the opposite extreme <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 真逆の「一番」について尋ねる)</span>",
            "> State the opposite extreme + Make suggestion <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(真逆の「一番」を伝える ＋ 提案する)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking for the top choice (一番の選択肢を尋ねる)", 
                options: [
                    { eng: "What is the best restaurant in this city?", jpn: "この街で一番良いレストランは何ですか？" }, 
                    { eng: "What is the most famous place?", jpn: "一番有名な場所はどこですか？" }, 
                    { eng: "Who is the tallest person?", jpn: "一番背が高い人は誰ですか？" }
                ] 
            },
            { 
                category: "2. Stating extremes (一番のものを伝える)", 
                options: [
                    { eng: "It is the most expensive restaurant.", jpn: "それは一番高いレストランです。" }, 
                    { eng: "'Luigi's' is the best.", jpn: "「ルイージズ」が一番です。" }, 
                    { eng: "This is the cheapest place.", jpn: "ここが一番安い場所です。" }
                ] 
            }
        ],
        grammar: {
            point: "Superlative Adjectives (the -est / the most) - 最上級",
            explanation: "To talk about the extreme limit in a group of 3 or more things, we use the superlative form. You must always use <strong>the</strong> before it. <br>• Short adjectives: add <strong>-est</strong> (fast -> the fastest, cheap -> the cheapest). <br>• Long adjectives: use <strong>the most</strong> (expensive -> the most expensive). <br>• Irregular: good -> <strong>the best</strong>, bad -> <strong>the worst</strong>. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（3つ以上のものの中で「一番〜だ」「最も〜だ」と言いたい時は、形容詞の「最上級」を使います。特定の一つに決まるため、必ず前に <strong>the</strong> を付けます。<br>・短い単語：語尾に <strong>-est</strong> を付けます（例：the fast<strong>est</strong>、the cheap<strong>est</strong>）。<br>・長い単語：前に <strong>the most</strong> を付けます（例：the most expensive、the most beautiful）。<br>・不規則変化：good は <strong>the best</strong> に、bad は <strong>the worst</strong> になります。旅行先で一番のおすすめを聞いたり、買い物の時に一番安いものを探したりする時に大活躍します。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the forms: '<u>the best</u>' (good), '<u>the most expensive</u>', and '<u>the cheapest</u>' (cheap). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>the best</u>』『<u>the most expensive</u>』『<u>the cheapest</u>』の形に注目してください。)</span>",
            examples: [
                { eng: "Mount Everest is the highest mountain in the world.", jpn: "エベレストは世界で一番高い山です。" },
                { eng: "This is the most beautiful park in the city.", jpn: "ここは街で一番美しい公園です。" },
                { eng: "Yesterday was the worst day of my life.", jpn: "昨日は私の人生で最悪の日でした。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "Tokyo / big / city in Japan", 
            target: "Tokyo is the biggest city in Japan." 
        },
        grammarPractice: [
            { prompt: "This / cheap / bag in the store" },
            { prompt: "He / tall / student in the class" },
            { prompt: "That / expensive / car in the world" },
            { prompt: "This pizza / good / food here" },
            { prompt: "She / popular / singer in the country" }
        ],
        clickingGames: [
            { prompt: "この街で一番良いレストランは何ですか？", target: "What is the best restaurant in this city?", words: ["What", "is", "the", "best", "restaurant", "in", "this", "city?"] },
            { prompt: "「ルイージズ」が一番良いレストランだと思います。", target: "I think 'Luigi's' is the best restaurant.", words: ["I", "think", "'Luigi's'", "is", "the", "best", "restaurant."] },
            { prompt: "町で一番高いレストランです。", target: "It is the most expensive restaurant in town.", words: ["It", "is", "the", "most", "expensive", "restaurant", "in", "town."] },
            { prompt: "一番安い場所はどこですか？", target: "What is the cheapest place?", words: ["What", "is", "the", "cheapest", "place?"] },
            { prompt: "「バーガーキング」が一番安いです。", target: "'Burger King' is the cheapest.", words: ["'Burger", "King'", "is", "the", "cheapest."] }
        ],
        dropdownGames: [
            { before: "This is", options: ["the best", "better", "best"], answer: "the best", after: " coffee I have ever had." },
            { before: "He is", options: ["tallest", "the tallest", "most tall"], answer: "the tallest", after: " boy in the class." },
            { before: "That watch is", options: ["the expensivest", "most expensive", "the most expensive"], answer: "the most expensive", after: " item in the shop." },
            { before: "What is", options: ["the worst", "worse", "worst"], answer: "the worst", after: " movie you have seen?" },
            { before: "She is", options: ["the most beautiful", "the beautifulest", "more beautiful"], answer: "the most beautiful", after: " actor in the country." }
        ],
        roleplay: {
            a: "You are a tourist. Ask your partner what the most famous place in their city is. Then ask what the most delicious food is. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたは観光客です。パートナーに街で一番有名な場所はどこか尋ねてください。その後、一番美味しい食べ物は何か尋ねてください。)</span>",
            b: "Answer your partner using superlatives (the most famous, the best, the most delicious). Give them your recommendations! <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(最上級（the most famous, the best, the most delicious）を使ってパートナーに答えてください。おすすめを教えてあげましょう！)</span>"
        },
        homework: {
            vocab: [
                { eng: "Highest", jpn: "一番高い", exEng: "The highest mountain.", exJpn: "一番高い山。" },
                { eng: "Longest", jpn: "一番長い", exEng: "The longest river.", exJpn: "一番長い川。" },
                { eng: "Oldest", jpn: "一番古い / 一番年上の", exEng: "The oldest building.", exJpn: "一番古い建物。" },
                { eng: "Youngest", jpn: "一番若い / 一番年下の", exEng: "The youngest child.", exJpn: "一番年下の子供。" },
                { eng: "Most difficult", jpn: "一番難しい", exEng: "The most difficult test.", exJpn: "一番難しいテスト。" },
                { eng: "Most interesting", jpn: "一番面白い / 興味深い", exEng: "The most interesting book.", exJpn: "一番面白い本。" },
                { eng: "Class", jpn: "クラス / 授業", exEng: "In my class.", exJpn: "私のクラスで。" },
                { eng: "Family", jpn: "家族", exEng: "In my family.", exJpn: "私の家族の中で。" },
                { eng: "World", jpn: "世界", exEng: "In the world.", exJpn: "世界で。" },
                { eng: "Country", jpn: "国", exEng: "In my country.", exJpn: "私の国で。" },
                { eng: "Team", jpn: "チーム", exEng: "On the team.", exJpn: "チームの中で。" },
                { eng: "Store", jpn: "店", exEng: "In the store.", exJpn: "店の中で。" },
                { eng: "River", jpn: "川", exEng: "The Nile river.", exJpn: "ナイル川。" },
                { eng: "Mountain", jpn: "山", exEng: "Mount Fuji.", exJpn: "富士山。" }
            ],
            reading1: {
                title: "Task 2: Reading (World Records)",
                instruction: "Read the short text about records around the world.",
                eng: "<strong>World Records</strong><br><br>The world is a very big place, and it is full of amazing things. Mount Everest is the highest mountain in the world. Many people try to climb it, but it is the most difficult mountain. The Amazon River is the longest river in South America. In cities, the Burj Khalifa in Dubai is the tallest building in the world. It is much taller than other buildings. What is the most famous place in your country? Every country has something special.",
                jpn: "<strong>世界記録</strong><br><br>世界はとても大きな場所で、驚くべきものでいっぱいです。エベレストは世界で一番高い山です。多くの人が登ろうとしますが、一番難しい山です。アマゾン川は南米で一番長い川です。都市では、ドバイのブルジュ・ハリファが世界で一番高い建物です。他の建物よりもずっと高いです。あなたの国で一番有名な場所はどこですか？どの国にも特別なものがあります。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "I am buying a birthday present for my mother.", jpn: "母の誕生日プレゼントを買うところです。" },
                { speaker: "B", eng: "Oh, what are you going to buy?", jpn: "おお、何を買う予定ですか？" },
                { speaker: "A", eng: "I want to buy a bag. But this store is the most expensive store in the mall.", jpn: "カバンを買いたいです。でも、この店はショッピングモールの中で一番高い店なんです。" },
                { speaker: "B", eng: "Yes, it is very expensive. Let's go to the store next door. It is the cheapest.", jpn: "はい、とても高いですね。隣の店に行きましょう。あそこが一番安いです。" },
                { speaker: "A", eng: "Okay, but is the quality good?", jpn: "わかりました、でも品質は良いですか？" },
                { speaker: "B", eng: "Yes, it is the best store for cheap and good bags.", jpn: "はい、安くて良いカバンを買うには一番の店ですよ。" }
            ],
            writingTask: {
                promptEng: "Write three sentences using superlative adjectives to describe things in your country or family. (Example: My grandfather is the oldest person in my family. Mount Fuji is the highest mountain in Japan.)",
                promptJpn: "あなたの国や家族の中の物事について描写する文を3つ書いてください。最上級の形容詞を使用してください。（例：祖父は家族の中で一番年上です。富士山は日本で一番高い山です。）"
            }
        }
    },
    {
        id: 41,
        title: "Lesson 41: How to talk about rules and obligations",
        goal: "Talk about rules and things you must do using 'must' and 'have to'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『must』や『have to』を使って、ルールやしなければならないことについて話す。)</span>",
        vocab: [
            { eng: "Must", jpn: "〜しなければならない（強い義務）", exEng: "You must stop here.", exJpn: "ここで止まらなければなりません。" },
            { eng: "Have to", jpn: "〜しなければならない（一般的な義務）", exEng: "I have to work today.", exJpn: "今日は働かなければなりません。" },
            { eng: "Must not", jpn: "〜してはいけない（禁止）", exEng: "You must not smoke here.", exJpn: "ここでタバコを吸ってはいけません。" },
            { eng: "Don't have to", jpn: "〜しなくてよい", exEng: "You don't have to pay.", exJpn: "支払う必要はありません。" },
            { eng: "Rule", jpn: "ルール / 規則", exEng: "Follow the rules.", exJpn: "ルールに従ってください。" },
            { eng: "Important", jpn: "重要な", exEng: "This rule is important.", exJpn: "このルールは重要です。" },
            { eng: "Wear", jpn: "着る / 身につける", exEng: "Wear a uniform.", exJpn: "制服を着てください。" },
            { eng: "Uniform", jpn: "制服", exEng: "I wear a uniform.", exJpn: "私は制服を着ます。" },
            { eng: "Sign", jpn: "標識 / サイン", exEng: "Look at the sign.", exJpn: "標識を見てください。" },
            { eng: "Show", jpn: "見せる", exEng: "Show your ticket.", exJpn: "チケットを見せてください。" },
            { eng: "ID", jpn: "身分証明書", exEng: "Show your ID.", exJpn: "身分証を見せてください。" },
            { eng: "Pay", jpn: "支払う", exEng: "You have to pay now.", exJpn: "今支払わなければなりません。" },
            { eng: "Leave", jpn: "出発する / 退出する", exEng: "We must leave now.", exJpn: "私たちは今すぐ出発しなければなりません。" },
            { eng: "Finish", jpn: "終える", exEng: "I have to finish this.", exJpn: "これを終わらせなければなりません。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Welcome to the museum. <span class='swappable'>You <i class='grammar-target'>have to buy</i> a ticket here.</span>", jpn: "博物館へようこそ。ここでチケットを買わなければなりません。" },
            { speaker: "B", eng: "Okay. Do I <i class='grammar-target'>have to show</i> my ID?", jpn: "わかりました。身分証明書を見せる必要はありますか？" },
            { speaker: "A", eng: "No, <span class='swappable'>you <i class='grammar-target'>don't have to</i> show your ID.</span>", jpn: "いいえ、身分証明書を見せる必要はありません。" },
            { speaker: "B", eng: "Great. Can I take pictures inside?", jpn: "良かったです。中で写真を撮ってもいいですか？" },
            { speaker: "A", eng: "No. <span class='swappable'>You <i class='grammar-target'>must not take</i> pictures.</span> That is an important rule.", jpn: "いいえ。写真を撮ってはいけません。それは重要なルールです。" },
            { speaker: "B", eng: "I understand. I <i class='grammar-target'>must put</i> my camera in my bag.", jpn: "わかりました。カメラはカバンの中にしまわなければなりませんね。" }
        ],
        dialogueStructure: [
            "Welcome + State an obligation <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(歓迎する ＋ 義務を伝える)</span>",
            "> Acknowledge + Ask about another obligation <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了解する ＋ 別の義務について尋ねる)</span>",
            "Deny the obligation (lack of obligation) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(その義務はない（〜しなくてよい）と伝える)</span>",
            "> React + Ask for permission <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 許可を求める)</span>",
            "Deny permission + State strict prohibition <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(許可を拒否する ＋ 厳格な禁止事項を伝える)</span>",
            "> Acknowledge + State personal obligation <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了解する ＋ 自分の義務を述べる)</span>"
        ],
        expressions: [
            { 
                category: "1. Stating obligations (義務を伝える)", 
                options: [
                    { eng: "You have to buy a ticket.", jpn: "チケットを買わなければなりません。" }, 
                    { eng: "You must wear a uniform.", jpn: "制服を着なければなりません。" }, 
                    { eng: "We have to finish this.", jpn: "これを終わらせなければなりません。" }
                ] 
            },
            { 
                category: "2. Stating prohibitions or lack of obligation (禁止や「しなくてよい」ことを伝える)", 
                options: [
                    { eng: "You must not take pictures.", jpn: "写真を撮ってはいけません。" }, 
                    { eng: "You don't have to show your ID.", jpn: "身分証明書を見せる必要はありません。" }, 
                    { eng: "You don't have to pay.", jpn: "支払う必要はありません。" }
                ] 
            }
        ],
        grammar: {
            point: "Must and Have to - 義務と禁止",
            explanation: "We use <strong>must</strong> and <strong>have to</strong> + base verb to say that something is necessary or obligatory. They have very similar meanings in affirmative sentences. <br>However, their negative forms are completely different!<br>• <strong>Must not (mustn't)</strong> = Prohibition (Do NOT do this. It is against the rules).<br>• <strong>Don't have to</strong> = Lack of obligation (You can do it if you want, but it is not necessary). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「〜しなければならない」というルールや義務について話す時は、助動詞の『must』や『have to』を動詞の原形の前に置きます。肯定文ではどちらもほぼ同じ意味で使われます。<br>しかし、否定文になると意味が全く異なるので注意が必要です！<br>・<strong>must not</strong>：「〜してはいけない」という強い禁止を表します（ルール違反）。<br>・<strong>don't have to</strong>：「〜しなくてもよい」「〜する必要はない」という意味で、やってもいいけれど義務ではないことを表します。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the strong rule: 'You <u>must not take</u> pictures'. Notice the lack of obligation: 'You <u>don't have to</u> show your ID'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：強いルールの『You <u>must not take</u> pictures』と、義務ではないことを表す『You <u>don't have to</u> show your ID』の違いに注目してください。)</span>",
            examples: [
                { eng: "You must wear a seatbelt in the car.", jpn: "車の中ではシートベルトを締めなければなりません。" },
                { eng: "You must not smoke in the hospital.", jpn: "病院内でタバコを吸ってはいけません。" },
                { eng: "Tomorrow is Sunday. I don't have to work.", jpn: "明日は日曜日です。働く必要はありません。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "You / buy / a ticket (obligation)", 
            target: "You have to buy a ticket." 
        },
        grammarPractice: [
            { prompt: "You / take / photos here (prohibition / must not)" },
            { prompt: "I / go / to work today (obligation / have to)" },
            { prompt: "We / pay / for the water (not necessary / don't have to)" },
            { prompt: "She / wear / a uniform (obligation / has to)" },
            { prompt: "You / touch / the art (prohibition / must not)" }
        ],
        clickingGames: [
            { prompt: "ここでチケットを買わなければなりません。", target: "You have to buy a ticket here.", words: ["You", "have", "to", "buy", "a", "ticket", "here."] },
            { prompt: "身分証明書を見せる必要はありません。", target: "You don't have to show your ID.", words: ["You", "don't", "have", "to", "show", "your", "ID."] },
            { prompt: "写真を撮ってはいけません。", target: "You must not take pictures.", words: ["You", "must", "not", "take", "pictures."] },
            { prompt: "カメラはカバンの中にしまわなければなりません。", target: "I must put my camera in my bag.", words: ["I", "must", "put", "my", "camera", "in", "my", "bag."] },
            { prompt: "今日働く必要はありますか？", target: "Do I have to work today?", words: ["Do", "I", "have", "to", "work", "today?"] }
        ],
        dropdownGames: [
            { before: "You", options: ["must not", "don't have to", "have to"], answer: "must not", after: " smoke in this building. It is the law." },
            { before: "Tomorrow is a holiday. You", options: ["don't have to", "must not", "must"], answer: "don't have to", after: " go to school." },
            { before: "I", options: ["have to", "has to", "must not"], answer: "have to", after: " wake up early tomorrow for my flight." },
            { before: "You", options: ["must not", "don't have to", "have to"], answer: "must not", after: " open this door. It is dangerous!" },
            { before: "Does he", options: ["have to", "has to", "must"], answer: "have to", after: " wear a uniform at his job?" }
        ],
        roleplay: {
            a: "You are explaining the rules of your office to a new worker. Tell them one thing they 'must' do, and one thing they 'must not' do. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたは新しい従業員にオフィスのルールを説明しています。『しなければならないこと』を1つ、『してはいけないこと』を1つ伝えてください。)</span>",
            b: "You are the new worker. Ask if you 'have to' wear a suit. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(新しい従業員役です。スーツを『着なければならないか』尋ねてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Seatbelt", jpn: "シートベルト", exEng: "Wear your seatbelt.", exJpn: "シートベルトを着用してください。" },
                { eng: "Smoke", jpn: "タバコを吸う", exEng: "Do not smoke.", exJpn: "タバコを吸わないでください。" },
                { eng: "Touch", jpn: "触る", exEng: "Do not touch the art.", exJpn: "芸術作品に触らないでください。" },
                { eng: "Drive", jpn: "運転する", exEng: "Drive safely.", exJpn: "安全に運転してください。" },
                { eng: "Law", jpn: "法律", exEng: "It is the law.", exJpn: "それは法律です。" },
                { eng: "Quiet", jpn: "静かな", exEng: "Be quiet in the library.", exJpn: "図書館では静かにしてください。" },
                { eng: "Phone", jpn: "電話", exEng: "Turn off your phone.", exJpn: "電話の電源を切ってください。" },
                { eng: "Meeting", jpn: "会議", exEng: "I have a meeting.", exJpn: "会議があります。" },
                { eng: "Late", jpn: "遅れて", exEng: "Don't be late.", exJpn: "遅刻しないでください。" },
                { eng: "Early", jpn: "早く", exEng: "Arrive early.", exJpn: "早く到着してください。" },
                { eng: "Boss", jpn: "上司", exEng: "My boss is strict.", exJpn: "私の上司は厳しいです。" },
                { eng: "Office", jpn: "オフィス / 事務所", exEng: "I am at the office.", exJpn: "私はオフィスにいます。" },
                { eng: "Homework", jpn: "宿題", exEng: "Do your homework.", exJpn: "宿題をしてください。" },
                { eng: "Clean", jpn: "掃除する", exEng: "Clean your desk.", exJpn: "机を掃除してください。" }
            ],
            reading1: {
                title: "Task 2: Reading (Library Rules)",
                instruction: "Read the rules for the city library.",
                eng: "<strong>City Library Rules</strong><br><br>Welcome to the City Library. Please follow these rules. You must be quiet in the reading areas. You must not talk on your mobile phone inside the library. If you want to take books home, you have to show your library card to the staff. You don't have to pay to borrow books, but you must return them in two weeks. Finally, you must not bring food or drinks inside. Thank you for your cooperation.",
                jpn: "<strong>市立図書館のルール</strong><br><br>市立図書館へようこそ。以下のルールに従ってください。読書エリアでは静かにしなければなりません。図書館の中で携帯電話で話してはいけません。本を家に持ち帰りたい場合は、スタッフに図書館カードを見せなければなりません。本を借りるのにお金を払う必要はありませんが、2週間以内に返却しなければなりません。最後に、館内に食べ物や飲み物を持ち込んではいけません。ご協力ありがとうございます。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Welcome to the team. Let me tell you about the office rules.", jpn: "チームへようこそ。オフィスのルールについて説明しますね。" },
                { speaker: "B", eng: "Thank you. What time do I have to arrive in the morning?", jpn: "ありがとうございます。朝は何時に到着しなければなりませんか？" },
                { speaker: "A", eng: "You have to be here at 9 AM. You must not be late for the morning meeting.", jpn: "午前9時にはここにいなければなりません。朝の会議に遅れてはいけません。" },
                { speaker: "B", eng: "Understood. Do I have to wear a suit?", jpn: "承知しました。スーツを着なければなりませんか？" },
                { speaker: "A", eng: "No, you don't have to wear a suit. Casual clothes are fine. But you must wear your ID badge at all times.", jpn: "いいえ、スーツを着る必要はありません。カジュアルな服装で大丈夫です。でも、IDバッジは常に着用しなければなりません。" }
            ],
            writingTask: {
                promptEng: "Write three sentences about the rules at your workplace or school. Use 'have to', 'don't have to', and 'must not'.",
                promptJpn: "あなたの職場や学校のルールについて3つの文を書いてください。『have to』『don't have to』『must not』を使用してください。"
            }
        }
    },
    {
        id: 42,
        title: "Lesson 42: How to give advice",
        goal: "Give advice and recommendations to someone using 'should' and 'shouldn't'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『should』や『shouldn't』を使って、人にアドバイスや推奨をする。)</span>",
        vocab: [
            { eng: "Should", jpn: "〜すべきだ / 〜した方がいい", exEng: "You should rest.", exJpn: "休んだ方がいいですよ。" },
            { eng: "Shouldn't", jpn: "〜すべきではない", exEng: "You shouldn't work late.", exJpn: "遅くまで働くべきではありません。" },
            { eng: "Sick", jpn: "病気の / 具合が悪い", exEng: "I feel sick.", exJpn: "気分が悪いです。" },
            { eng: "Tired", jpn: "疲れた", exEng: "You look tired.", exJpn: "あなたは疲れているように見えます。" },
            { eng: "Headache", jpn: "頭痛", exEng: "I have a headache.", exJpn: "頭が痛いです。" },
            { eng: "Medicine", jpn: "薬", exEng: "Take some medicine.", exJpn: "薬を飲んでください。" },
            { eng: "Doctor", jpn: "医者", exEng: "Go to the doctor.", exJpn: "医者に行ってください。" },
            { eng: "Sleep", jpn: "眠る", exEng: "You need sleep.", exJpn: "あなたは睡眠が必要です。" },
            { eng: "Rest", jpn: "休む", exEng: "Please rest well.", exJpn: "よく休んでください。" },
            { eng: "Drink", jpn: "飲む", exEng: "Drink water.", exJpn: "水を飲んでください。" },
            { eng: "Water", jpn: "水", exEng: "A glass of water.", exJpn: "グラス1杯の水。" },
            { eng: "Eat", jpn: "食べる", exEng: "Eat healthy food.", exJpn: "健康的な食べ物を食べてください。" },
            { eng: "Warm", jpn: "暖かい", exEng: "Stay warm.", exJpn: "暖かくしていてください。" },
            { eng: "Stay", jpn: "とどまる", exEng: "Stay in bed.", exJpn: "ベッドで寝ていてください。" }
        ],
        dialogue: [
            { speaker: "A", eng: "I don't feel well today. I have a headache.", jpn: "今日は気分が良くありません。頭痛がします。" },
            { speaker: "B", eng: "Oh no. <span class='swappable'><i class='grammar-target'>You should</i> go home and rest.</span>", jpn: "あらら。家に帰って休んだ方がいいですよ。" },
            { speaker: "A", eng: "I can't. I have a lot of work to do.", jpn: "できません。やらなければならない仕事がたくさんあるんです。" },
            { speaker: "B", eng: "Health is more important. <span class='swappable'><i class='grammar-target'>You shouldn't</i> work when you are sick.</span>", jpn: "健康の方が大切です。具合が悪い時は働くべきではありません。" },
            { speaker: "A", eng: "You are right. <i class='grammar-target'>Should I</i> see a doctor?", jpn: "あなたの言う通りですね。医者に診てもらうべきでしょうか？" },
            { speaker: "B", eng: "Yes, <i class='grammar-target'>you should</i>. And <i class='grammar-target'>you should</i> drink plenty of water.", jpn: "はい、そうするべきです。それから、水をたくさん飲んだ方がいいですよ。" }
        ],
        dialogueStructure: [
            "State a problem/symptom <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(問題や症状を伝える)</span>",
            "> Express sympathy + Give positive advice <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同情する ＋ 肯定的なアドバイスをする)</span>",
            "Refuse advice + Give reason <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(アドバイスを断る ＋ 理由を伝える)</span>",
            "> State opinion + Give negative advice <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(意見を言う ＋ 否定的なアドバイス（〜すべきではない）をする)</span>",
            "Agree + Ask for advice <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ アドバイスを求める)</span>",
            "> Give confirmation + Add more advice <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(肯定する ＋ さらにアドバイスを加える)</span>"
        ],
        expressions: [
            { 
                category: "1. Giving positive advice (肯定的なアドバイスをする)", 
                options: [
                    { eng: "You should go home and rest.", jpn: "家に帰って休んだ方がいいですよ。" }, 
                    { eng: "You should see a doctor.", jpn: "医者に診てもらった方がいいですよ。" }, 
                    { eng: "You should drink some water.", jpn: "水を少し飲んだ方がいいですよ。" }
                ] 
            },
            { 
                category: "2. Giving negative advice (否定的なアドバイスをする)", 
                options: [
                    { eng: "You shouldn't work when you are sick.", jpn: "具合が悪い時は働くべきではありません。" }, 
                    { eng: "You shouldn't go outside.", jpn: "外に出ない方がいいですよ。" }, 
                    { eng: "You shouldn't eat too much.", jpn: "食べすぎない方がいいですよ。" }
                ] 
            }
        ],
        grammar: {
            point: "Should and Shouldn't for advice - アドバイスの『Should』と『Shouldn't』",
            explanation: "We use 'should' and 'shouldn't' (should not) + base verb to give advice or say what we think is a good or bad idea. It is not as strong as 'must' or 'have to'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（誰かにアドバイスをしたり、「〜した方がいいよ」と提案したりする時には、助動詞の『should』を使います。否定形は『shouldn't（すべきではない・しない方がいい）』です。『must』や『have to』のような「絶対にしなきゃダメ」という強い義務のニュアンスはなく、「私の意見ではそうするのがベストだと思う」という思いやりのあるアドバイスになります。後ろには必ず動詞の原形が続きます。相手の体調が悪い時や、悩んでいる時に非常によく使われる文法です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the advice structures: '<u>You should</u> go home' and '<u>You shouldn't</u> work'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>You should</u> go home』や『<u>You shouldn't</u> work』などのアドバイスの構造に注目してください。)</span>",
            examples: [
                { eng: "It's raining. You should take an umbrella.", jpn: "雨が降っています。傘を持っていった方がいいですよ。" },
                { eng: "You look tired. You shouldn't stay up late.", jpn: "疲れているようですね。夜更かしはしない方がいいですよ。" },
                { eng: "Should I buy this shirt?", jpn: "このシャツを買うべきでしょうか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "You have a test tomorrow. (study)", 
            target: "You should study." 
        },
        grammarPractice: [
            { prompt: "He is sick. (go to the doctor)" },
            { prompt: "You are tired. (not / play video games)" },
            { prompt: "It is cold outside. (wear a coat)" },
            { prompt: "I don't understand this. (I / ask the teacher ?)" },
            { prompt: "She has a headache. (not / listen to loud music)" }
        ],
        clickingGames: [
            { prompt: "家に帰って休んだ方がいいですよ。", target: "You should go home and rest.", words: ["You", "should", "go", "home", "and", "rest."] },
            { prompt: "具合が悪い時は働くべきではありません。", target: "You shouldn't work when you are sick.", words: ["You", "shouldn't", "work", "when", "you", "are", "sick."] },
            { prompt: "医者に診てもらうべきでしょうか？", target: "Should I see a doctor?", words: ["Should", "I", "see", "a", "doctor?"] },
            { prompt: "水をたくさん飲んだ方がいいですよ。", target: "You should drink plenty of water.", words: ["You", "should", "drink", "plenty", "of", "water."] },
            { prompt: "外に出ない方がいいですよ。", target: "You shouldn't go outside.", words: ["You", "shouldn't", "go", "outside."] }
        ],
        dropdownGames: [
            { before: "You have a fever. You", options: ["should", "shouldn't", "don't"], answer: "should", after: " go to bed." },
            { before: "The movie is terrible. You", options: ["shouldn't", "should", "must"], answer: "shouldn't", after: " watch it." },
            { before: "", options: ["Should", "Do", "Are"], answer: "Should", after: " I call him now?" },
            { before: "It is raining heavily. We", options: ["should", "shouldn't", "have"], answer: "should", after: " stay inside." },
            { before: "You", options: ["shouldn't", "should", "can"], answer: "shouldn't", after: " drink too much coffee at night." }
        ],
        roleplay: {
            a: "Tell your partner that you are very tired and you have a headache. Ask them for advice (e.g., 'What should I do?'). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに、とても疲れていて頭痛がすると伝えてください。アドバイスを求めてください（例：「私はどうすべきですか？」）。)</span>",
            b: "Give your partner one positive piece of advice (You should...) and one negative piece of advice (You shouldn't...). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに肯定的なアドバイス（You should...）を1つ、否定的なアドバイス（You shouldn't...）を1つ与えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Stomachache", jpn: "腹痛", exEng: "I have a stomachache.", exJpn: "お腹が痛いです。" },
                { eng: "Toothache", jpn: "歯痛", exEng: "He has a toothache.", exJpn: "彼は歯が痛いです。" },
                { eng: "Fever", jpn: "熱", exEng: "You have a high fever.", exJpn: "高熱がありますね。" },
                { eng: "Cold", jpn: "風邪", exEng: "I caught a cold.", exJpn: "風邪をひきました。" },
                { eng: "Dentist", jpn: "歯医者", exEng: "Go to the dentist.", exJpn: "歯医者に行ってください。" },
                { eng: "Vegetables", jpn: "野菜", exEng: "Eat your vegetables.", exJpn: "野菜を食べなさい。" },
                { eng: "Junk food", jpn: "ジャンクフード", exEng: "Don't eat junk food.", exJpn: "ジャンクフードを食べないで。" },
                { eng: "Late", jpn: "遅くに", exEng: "Don't sleep late.", exJpn: "遅くまで起きていないで。" },
                { eng: "Early", jpn: "早く", exEng: "Wake up early.", exJpn: "早く起きなさい。" },
                { eng: "Healthy", jpn: "健康的な", exEng: "Be healthy.", exJpn: "健康的でいてください。" },
                { eng: "Exercise", jpn: "運動する", exEng: "You should exercise.", exJpn: "運動した方がいいですよ。" },
                { eng: "Stress", jpn: "ストレス", exEng: "I have a lot of stress.", exJpn: "ストレスがたくさんあります。" },
                { eng: "Relax", jpn: "リラックスする", exEng: "Try to relax.", exJpn: "リラックスするようにしてください。" },
                { eng: "Warm", jpn: "暖かい", exEng: "Keep warm.", exJpn: "暖かくしていてください。" }
            ],
            reading1: {
                title: "Task 2: Reading (Health Advice Column)",
                instruction: "Read the advice column from a magazine.",
                eng: "<strong>Ask the Doctor</strong><br><br><em>Question:</em> Dear Doctor, I am always tired and I often have a headache. What should I do?<br><em>Answer:</em> If you are always tired, you shouldn't work too late. You should sleep for at least eight hours every night. Also, you should drink a lot of water during the day. Sometimes headaches happen because you don't drink enough water. Finally, you shouldn't look at your computer or phone screen for too long. You should rest your eyes. If you don't feel better soon, you should see a doctor.",
                jpn: "<strong>お医者さんに聞く</strong><br><br><em>質問：</em> 先生へ、私はいつも疲れていて、よく頭痛がします。どうすればいいですか？<br><em>回答：</em> もしいつも疲れているなら、遅くまで働きすぎるべきではありません。毎晩少なくとも8時間は睡眠をとるべきです。また、日中は水をたくさん飲んだ方がいいですよ。水分不足が原因で頭痛が起こることが時々あります。最後に、コンピューターや携帯の画面を長く見すぎるべきではありません。目を休めた方がいいですよ。もしすぐに気分が良くならない場合は、医者に診てもらうべきです。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Ouch! My tooth really hurts.", jpn: "痛っ！歯が本当に痛い。" },
                { speaker: "B", eng: "That is terrible. You should go to the dentist today.", jpn: "それはひどいね。今日、歯医者に行った方がいいよ。" },
                { speaker: "A", eng: "I know, but I am scared of the dentist.", jpn: "分かってるんだけど、歯医者が怖いんだ。" },
                { speaker: "B", eng: "You shouldn't wait. If you wait, it will get worse.", jpn: "待つべきじゃないよ。もし待ったら、もっと悪くなるよ。" },
                { speaker: "A", eng: "You are right. Should I call them now?", jpn: "君の言う通りだね。今すぐ電話すべきかな？" },
                { speaker: "B", eng: "Yes, you should. I can give you the number.", jpn: "うん、そうすべきだよ。電話番号を教えるよ。" }
            ],
            writingTask: {
                promptEng: "A friend texts you: 'I have a big English test tomorrow, and I am very nervous.' Write three sentences giving them advice using 'should' and 'shouldn't'.",
                promptJpn: "友達から「明日は大きな英語のテストで、とても緊張している」とメールが来ました。『should』と『shouldn't』を使って、アドバイスをする文を3つ書いてください。"
            }
        }
    },
    {
        id: 43,
        title: "Lesson 43: How to ask for permission",
        goal: "Ask for, give, and refuse permission politely using 'Can I' and 'May I'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『Can I』や『May I』を使って、許可を求めたり、与えたり、丁寧に断ったりする。)</span>",
        vocab: [
            { eng: "Use", jpn: "使う", exEng: "Can I use this?", exJpn: "これを使ってもいいですか？" },
            { eng: "Borrow", jpn: "借りる", exEng: "May I borrow a pen?", exJpn: "ペンを借りてもよろしいですか？" },
            { eng: "Leave", jpn: "出発する / 退席する", exEng: "Can I leave early?", exJpn: "早く帰ってもいいですか？" },
            { eng: "Early", jpn: "早く", exEng: "I woke up early.", exJpn: "私は早く起きました。" },
            { eng: "Sit", jpn: "座る", exEng: "May I sit here?", exJpn: "ここに座ってもよろしいですか？" },
            { eng: "Here", jpn: "ここ", exEng: "Wait here.", exJpn: "ここで待っていてください。" },
            { eng: "Open", jpn: "開ける", exEng: "Can I open it?", exJpn: "開けてもいいですか？" },
            { eng: "Close", jpn: "閉める", exEng: "May I close the door?", exJpn: "ドアを閉めてもよろしいですか？" },
            { eng: "Window", jpn: "窓", exEng: "Open the window.", exJpn: "窓を開けてください。" },
            { eng: "Door", jpn: "ドア", exEng: "Close the door.", exJpn: "ドアを閉めてください。" },
            { eng: "Go", jpn: "行く", exEng: "Can I go now?", exJpn: "もう行ってもいいですか？" },
            { eng: "Toilet", jpn: "トイレ", exEng: "May I go to the toilet?", exJpn: "トイレに行ってもよろしいですか？" },
            { eng: "Ask", jpn: "尋ねる", exEng: "Can I ask you?", exJpn: "あなたに尋ねてもいいですか？" },
            { eng: "Question", jpn: "質問", exEng: "I have a question.", exJpn: "質問があります。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me, Mr. Smith. <span class='swappable'><i class='grammar-target'>May I ask</i> a question?</span>", jpn: "すみません、スミスさん。質問してもよろしいですか？" },
            { speaker: "B", eng: "Yes, of course. What is it?", jpn: "はい、もちろんです。何ですか？" },
            { speaker: "A", eng: "I am not feeling very well today. <span class='swappable'><i class='grammar-target'>Can I leave</i> work early?</span>", jpn: "今日はあまり体調が良くありません。仕事を早く上がってもいいですか？" },
            { speaker: "B", eng: "Oh, I am sorry to hear that. <i class='grammar-target'>Yes, you can</i>.", jpn: "ああ、それはお気の毒に。はい、いいですよ。" },
            { speaker: "A", eng: "Thank you. Also, my phone battery is dead. <i class='grammar-target'>Can I borrow</i> your charger?", jpn: "ありがとうございます。それから、携帯のバッテリーが切れてしまって。充電器を借りてもいいですか？" },
            { speaker: "B", eng: "I am sorry, <i class='grammar-target'>you can't</i>. I left it at home today.", jpn: "ごめんなさい、それはできません。今日は家に置いてきてしまったんです。" }
        ],
        dialogueStructure: [
            "Get attention + Ask permission formally <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(声をかける ＋ フォーマルに許可を求める)</span>",
            "> Grant permission + Ask for details <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(許可を与える ＋ 詳細を尋ねる)</span>",
            "State reason + Ask permission casually <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(理由を伝える ＋ カジュアルに許可を求める)</span>",
            "> Express sympathy + Grant permission <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同情する ＋ 許可を与える)</span>",
            "Say thank you + Ask to borrow an item <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(お礼を言う ＋ 物を借りる許可を求める)</span>",
            "> Refuse permission politely + Give reason <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(丁寧に許可を断る ＋ 理由を伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking for permission (許可を求める)", 
                options: [
                    { eng: "May I ask a question?", jpn: "質問してもよろしいですか？" }, 
                    { eng: "Can I leave work early?", jpn: "仕事を早く上がってもいいですか？" }, 
                    { eng: "Can I borrow your charger?", jpn: "充電器を借りてもいいですか？" }
                ] 
            },
            { 
                category: "2. Granting or refusing permission (許可を与える・断る)", 
                options: [
                    { eng: "Yes, you can.", jpn: "はい、いいですよ。" }, 
                    { eng: "Yes, of course.", jpn: "はい、もちろんです。" }, 
                    { eng: "I am sorry, you can't.", jpn: "ごめんなさい、できません（ダメです）。" }
                ] 
            }
        ],
        grammar: {
            point: "Asking Permission (Can I / May I) - 許可の求め方",
            explanation: "To ask if it is okay to do something, we use 'Can I' or 'May I' followed by a base verb. <br>• <strong>Can I...?:</strong> Common and friendly. Used with friends, coworkers, or in everyday situations.<br>• <strong>May I...?:</strong> Very polite and formal. Used with bosses, teachers, or customers.<br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「〜してもいいですか？」「〜してもよろしいでしょうか？」と相手の許可を求める時には、『Can I...?』または『May I...?』を使います。どちらも直後に動詞の原形が続きます。<br>・<strong>Can I...?</strong>：最も一般的でフレンドリーな表現です。友達や同僚、日常の買い物の場面などでよく使われます。<br>・<strong>May I...?</strong>：非常に丁寧でフォーマルな表現です。上司や先生、あるいはお客様に対してなど、礼儀正しく振る舞うべき場面で使われます。答える時は「Yes, you can / No, you can't」などを使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the formal '<u>May I ask</u>' when speaking to the boss, and the slightly more standard '<u>Can I leave</u>' and '<u>Can I borrow</u>' as the conversation continues. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：上司に話しかける時のフォーマルな『<u>May I ask</u>』と、会話が続くにつれて使われる少し標準的な『<u>Can I leave</u>』や『<u>Can I borrow</u>』に注目してください。)</span>",
            examples: [
                { eng: "Can I use your pen?", jpn: "あなたのペンを使ってもいいですか？" },
                { eng: "May I see your passport, please?", jpn: "パスポートを拝見してもよろしいでしょうか？" },
                { eng: "Can I sit here?", jpn: "ここに座ってもいいですか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "use your phone (Can I)", 
            target: "Can I use your phone?" 
        },
        grammarPractice: [
            { prompt: "open the window (May I)" },
            { prompt: "borrow this book (Can I)" },
            { prompt: "go to the toilet (May I)" },
            { prompt: "ask a question (Can I)" },
            { prompt: "sit next to you (May I)" }
        ],
        clickingGames: [
            { prompt: "質問してもよろしいですか？", target: "May I ask a question?", words: ["May", "I", "ask", "a", "question?"] },
            { prompt: "仕事を早く上がってもいいですか？", target: "Can I leave work early?", words: ["Can", "I", "leave", "work", "early?"] },
            { prompt: "充電器を借りてもいいですか？", target: "Can I borrow your charger?", words: ["Can", "I", "borrow", "your", "charger?"] },
            { prompt: "はい、いいですよ。", target: "Yes, you can.", words: ["Yes,", "you", "can."] },
            { prompt: "ごめんなさい、それはできません。", target: "I am sorry, you can't.", words: ["I", "am", "sorry,", "you", "can't."] }
        ],
        dropdownGames: [
            { before: "", options: ["May", "Do", "Are"], answer: "May", after: " I sit here? The other chairs are full." },
            { before: "Excuse me, Mr. Johnson.", options: ["Can", "May", "Do"], answer: "May", after: " I come in?" },
            { before: "", options: ["Can", "Am", "Does"], answer: "Can", after: " I borrow your eraser for a second?" },
            { before: "Yes, you", options: ["can", "do", "may to"], answer: "can", after: ". Go ahead." },
            { before: "I am sorry, you", options: ["can't", "don't", "mustn't"], answer: "can't", after: ". I am using it right now." }
        ],
        roleplay: {
            a: "You are a student. Ask your teacher (very politely) if you can go to the bathroom. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたは生徒です。先生に（とても丁寧に）トイレに行ってもいいか尋ねてください。)</span>",
            b: "You are the teacher. Give permission. Then, ask the student (normally) if you can borrow their pen. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(先生役です。許可を与えてください。その後、生徒に（普通のトーンで）ペンを借りてもいいか尋ねてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Charger", jpn: "充電器", exEng: "I need a charger.", exJpn: "充電器が必要です。" },
                { eng: "Battery", jpn: "バッテリー / 電池", exEng: "The battery is dead.", exJpn: "バッテリーが切れました。" },
                { eng: "Dead", jpn: "（電池などが）切れた", exEng: "My phone is dead.", exJpn: "私の携帯の電源が切れました。" },
                { eng: "Break", jpn: "休憩", exEng: "Let's take a break.", exJpn: "休憩しましょう。" },
                { eng: "Use", jpn: "使う", exEng: "Can I use this?", exJpn: "これを使ってもいいですか？" },
                { eng: "Dictionary", jpn: "辞書", exEng: "Look in the dictionary.", exJpn: "辞書で見てください。" },
                { eng: "Seat", jpn: "座席", exEng: "Is this seat free?", exJpn: "この席は空いていますか？" },
                { eng: "Menu", jpn: "メニュー", exEng: "May I see the menu?", exJpn: "メニューを見てもよろしいですか？" },
                { eng: "Take a picture", jpn: "写真を撮る", exEng: "Can I take a picture?", exJpn: "写真を撮ってもいいですか？" },
                { eng: "Try on", jpn: "試着する", exEng: "Can I try this on?", exJpn: "これを試着してもいいですか？" },
                { eng: "Turn up", jpn: "（音量を）上げる", exEng: "Can you turn up the volume?", exJpn: "音量を上げてくれますか？" },
                { eng: "Turn down", jpn: "（音量を）下げる", exEng: "Turn down the music.", exJpn: "音楽の音量を下げてください。" },
                { eng: "Excuse me", jpn: "すみません", exEng: "Excuse me, sir.", exJpn: "すみません、お客様。" },
                { eng: "Go ahead", jpn: "どうぞ / 構いませんよ", exEng: "Yes, go ahead.", exJpn: "はい、どうぞ。" }
            ],
            reading1: {
                title: "Task 2: Reading (Classroom Rules)",
                instruction: "Read the rules a teacher gives to their students.",
                eng: "<strong>Welcome to English Class</strong><br><br>Hello students, welcome! In this class, we have a few simple rules. If you want to ask a question, you must raise your hand. You can say, 'Teacher, may I ask a question?' If you need to go to the toilet, please ask, 'May I go to the bathroom?' You can drink water in class, but you cannot eat food. If you forget your pen, you can ask your friend, 'Can I borrow a pen?' Let's have a great year together!",
                jpn: "<strong>英語の授業へようこそ</strong><br><br>生徒の皆さん、こんにちは、ようこそ！このクラスにはいくつか簡単なルールがあります。質問をしたい場合は、手を挙げなければなりません。「先生、質問してもよろしいですか？」と言ってください。トイレに行きたい場合は、「トイレに行ってもよろしいですか？」と尋ねてください。授業中に水を飲むことはできますが、食べ物を食べることはできません。もしペンを忘れたら、友達に「ペンを借りてもいい？」と聞くことができます。素晴らしい一年にしましょう！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Excuse me. Is anyone sitting here?", jpn: "すみません。ここに誰か座っていますか？" },
                { speaker: "B", eng: "No, nobody is sitting there.", jpn: "いいえ、誰も座っていませんよ。" },
                { speaker: "A", eng: "Great. Can I sit here?", jpn: "良かったです。ここに座ってもいいですか？" },
                { speaker: "B", eng: "Yes, go ahead. The cafe is very crowded today.", jpn: "はい、どうぞ。今日はカフェがとても混んでいますね。" },
                { speaker: "A", eng: "It is. Oh, it is a little hot. May I open this window?", jpn: "そうですね。ああ、少し暑いです。この窓を開けてもよろしいですか？" },
                { speaker: "B", eng: "I'm sorry, you can't. The air conditioner is on.", jpn: "ごめんなさい、開けないでください。エアコンがついていますので。" }
            ],
            writingTask: {
                promptEng: "Write three questions asking for permission. Write one casual request to a friend ('Can I...'), and two formal requests to a teacher or boss ('May I...').",
                promptJpn: "許可を求める質問を3つ書いてください。友達へのカジュアルなお願い（『Can I...』）を1つ、先生や上司へのフォーマルなお願い（『May I...』）を2つ書いてください。"
            }
        }
    },
    {
        id: 44,
        title: "Lesson 44: How to talk about life experiences",
        goal: "Ask and answer questions about past experiences without mentioning a specific time using the Present Perfect tense. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(現在完了形を使って、特定の時間を明記せずに過去の経験について質問し、答える。)</span>",
        vocab: [
            { eng: "Ever", jpn: "今までに / かつて", exEng: "Have you ever been there?", exJpn: "今までにそこに行ったことはありますか？" },
            { eng: "Never", jpn: "一度も〜ない", exEng: "I have never seen it.", exJpn: "私はそれを一度も見たことがありません。" },
            { eng: "Be (been)", jpn: "行く / いる（過去分詞）", exEng: "I have been to Japan.", exJpn: "私は日本に行ったことがあります。" },
            { eng: "Eat (eaten)", jpn: "食べる（過去分詞）", exEng: "Have you eaten sushi?", exJpn: "寿司を食べたことはありますか？" },
            { eng: "See (seen)", jpn: "見る（過去分詞）", exEng: "I have seen that movie.", exJpn: "私はその映画を見たことがあります。" },
            { eng: "Meet (met)", jpn: "会う（過去分詞）", exEng: "I have met him.", exJpn: "私は彼に会ったことがあります。" },
            { eng: "Try (tried)", jpn: "試す（過去分詞）", exEng: "I have tried natto.", exJpn: "私は納豆を試した（食べた）ことがあります。" },
            { eng: "Travel", jpn: "旅行する", exEng: "I travel a lot.", exJpn: "私はよく旅行します。" },
            { eng: "Country", jpn: "国", exEng: "It is a beautiful country.", exJpn: "美しい国です。" },
            { eng: "Food", jpn: "食べ物", exEng: "I love Italian food.", exJpn: "私はイタリア料理が好きです。" },
            { eng: "Movie", jpn: "映画", exEng: "Let's watch a movie.", exJpn: "映画を見ましょう。" },
            { eng: "Famous", jpn: "有名な", exEng: "He is famous.", exJpn: "彼は有名です。" },
            { eng: "Person", jpn: "人", exEng: "She is a nice person.", exJpn: "彼女はいい人です。" },
            { eng: "Once", jpn: "1回 / かつて", exEng: "I met him once.", exJpn: "私は彼に1回会いました。" }
        ],
        dialogue: [
            { speaker: "A", eng: "I want to visit Tokyo next year. <span class='swappable'><i class='grammar-target'>Have you ever been</i> to Japan?</span>", jpn: "来年、東京に行きたいと思っています。あなたは今までに日本に行ったことはありますか？" },
            { speaker: "B", eng: "Yes, <span class='swappable'><i class='grammar-target'>I have been</i> to Japan twice.</span> It is a beautiful country.", jpn: "はい、私は日本に2回行ったことがあります。美しい国ですよ。" },
            { speaker: "A", eng: "That is so cool. <i class='grammar-target'>Have you ever eaten</i> authentic sushi?", jpn: "それはすごいですね。今までに本物の寿司を食べたことはありますか？" },
            { speaker: "B", eng: "Yes, <i class='grammar-target'>I have</i>. It was delicious. What about you?", jpn: "はい、あります。美味しかったです。あなたはどうですか？" },
            { speaker: "A", eng: "No, <i class='grammar-target'>I have never eaten</i> sushi. I want to try it.", jpn: "いいえ、私は一度も寿司を食べたことがありません。試してみたいです。" },
            { speaker: "B", eng: "You should! You will love it.", jpn: "ぜひ食べてみるべきですよ！きっと気に入るはずです。" }
        ],
        dialogueStructure: [
            "State future plan + Ask about an experience <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(将来の計画を伝える ＋ 経験について尋ねる)</span>",
            "> State experience + Give an opinion <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(経験を伝える ＋ 意見を述べる)</span>",
            "React + Ask about a specific experience <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 特定の経験について尋ねる)</span>",
            "> Answer affirmatively + Ask the other person <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(肯定で答える ＋ 相手に尋ね返す)</span>",
            "State lack of experience + Express desire <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(経験がないことを伝える ＋ 願望を表現する)</span>",
            "> Encourage them <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(相手を励ます)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about experiences (経験を尋ねる)", 
                options: [
                    { eng: "Have you ever been to Japan?", jpn: "今までに日本に行ったことはありますか？" }, 
                    { eng: "Have you ever eaten sushi?", jpn: "今までに寿司を食べたことはありますか？" }, 
                    { eng: "Have you ever seen this movie?", jpn: "今までにこの映画を見たことはありますか？" }
                ] 
            },
            { 
                category: "2. Stating experiences (経験を伝える)", 
                options: [
                    { eng: "I have been to Japan twice.", jpn: "日本に2回行ったことがあります。" }, 
                    { eng: "I have never eaten sushi.", jpn: "寿司を一度も食べたことがありません。" }, 
                    { eng: "I have seen it.", jpn: "それを見たことがあります。" }
                ] 
            }
        ],
        grammar: {
            point: "Present Perfect (have + past participle) - 現在完了形（経験）",
            explanation: "To talk about life experiences—things you did at some point in your life, but you don't say exactly WHEN—we use the Present Perfect tense. <br>• <strong>Structure:</strong> have/has + Past Participle (the 3rd form of the verb, e.g., be -> was -> <strong>been</strong>).<br>• <strong>Questions:</strong> <em>Have you ever... ?</em> ('ever' means 'at any time in your life').<br>• <strong>Negatives:</strong> <em>I have never...</em> ('never' means 'zero times in my life'). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「過去から現在までの間に〜したことがある」という人生の「経験」について話す時は、現在完了形を使います。いつ起きたかという「具体的な時期」は重要ではなく、経験そのものに焦点を当てます。<br>・<strong>作り方：</strong> have（または has）＋ 動詞の過去分詞形（例：eat → ate → <strong>eaten</strong>）。<br>・<strong>質問：</strong> 『Have you ever...?（今までに〜したことがありますか？）』と聞きます。「ever」は「今までに」という意味です。旅行や食べ物の話題で定番のフレーズです。<br>・<strong>否定：</strong> 一度も経験がない場合は、『I have never...（一度も〜したことがない）』を使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the structures: '<u>Have you ever been</u>', '<u>I have been</u>', and '<u>I have never eaten</u>'. The verb 'go' changes to 'been' to mean 'went and came back'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>Have you ever been</u>』『<u>I have been</u>』『<u>I have never eaten</u>』の構造に注目してください。「行ったことがある」という経験には、goneではなく been が使われます。)</span>",
            examples: [
                { eng: "Have you ever met a famous person?", jpn: "今までに有名人に会ったことはありますか？" },
                { eng: "I have tried Spanish food.", jpn: "私はスペイン料理を試した（食べた）ことがあります。" },
                { eng: "She has never been to Europe.", jpn: "彼女は一度もヨーロッパに行ったことがありません。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "you / go / to America (ever / ?)", 
            target: "Have you ever been to America?" 
        },
        grammarPractice: [
            { prompt: "I / eat / French food (never / -)" },
            { prompt: "you / see / the new movie (ever / ?)" },
            { prompt: "She / meet / the president (never / -)" },
            { prompt: "I / try / surfing (+)" },
            { prompt: "he / travel / alone (ever / ?)" }
        ],
        clickingGames: [
            { prompt: "今までに日本に行ったことはありますか？", target: "Have you ever been to Japan?", words: ["Have", "you", "ever", "been", "to", "Japan?"] },
            { prompt: "私は日本に2回行ったことがあります。", target: "I have been to Japan twice.", words: ["I", "have", "been", "to", "Japan", "twice."] },
            { prompt: "今までに本物の寿司を食べたことはありますか？", target: "Have you ever eaten authentic sushi?", words: ["Have", "you", "ever", "eaten", "authentic", "sushi?"] },
            { prompt: "はい、あります。", target: "Yes, I have.", words: ["Yes,", "I", "have."] },
            { prompt: "私は一度も寿司を食べたことがありません。", target: "I have never eaten sushi.", words: ["I", "have", "never", "eaten", "sushi."] }
        ],
        dropdownGames: [
            { before: "Have you", options: ["ever", "never", "always"], answer: "ever", after: " been to New York?" },
            { before: "I have", options: ["never", "ever", "don't"], answer: "never", after: " eaten Thai food. Is it spicy?" },
            { before: "She", options: ["has", "have", "is"], answer: "has", after: " seen that movie three times." },
            { before: "Have they ever", options: ["met", "meet", "meets"], answer: "met", after: " your parents?" },
            { before: "I have", options: ["been", "go", "went"], answer: "been", after: " to Hawaii once." }
        ],
        roleplay: {
            a: "Ask your partner if they have ever been to a specific country (e.g., 'Have you ever been to...?'). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに特定の国に行ったことがあるか尋ねてください（例：「今までに〜に行ったことはありますか？」）。)</span>",
            b: "Answer your partner (Yes, I have / No, I have never been there). Then ask them if they have ever eaten a specific food. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに答えてください（はい、あります / いいえ、一度も行ったことがありません）。その後、特定の食べ物を食べたことがあるか相手に尋ねてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Travel", jpn: "旅行する", exEng: "I love to travel.", exJpn: "私は旅行するのが大好きです。" },
                { eng: "Abroad", jpn: "海外へ / 海外で", exEng: "Have you been abroad?", exJpn: "海外に行ったことはありますか？" },
                { eng: "Flight", jpn: "フライト / 便", exEng: "The flight was long.", exJpn: "フライトは長かったです。" },
                { eng: "Hotel", jpn: "ホテル", exEng: "We stayed at a hotel.", exJpn: "私たちはホテルに滞在しました。" },
                { eng: "Culture", jpn: "文化", exEng: "I like learning about culture.", exJpn: "私は文化について学ぶのが好きです。" },
                { eng: "Language", jpn: "言語", exEng: "Speak a new language.", exJpn: "新しい言語を話す。" },
                { eng: "Experience", jpn: "経験", exEng: "It was a good experience.", exJpn: "それは良い経験でした。" },
                { eng: "Try", jpn: "試す", exEng: "Try this food.", exJpn: "この食べ物を試してみてください。" },
                { eng: "Scary", jpn: "怖い", exEng: "The movie was scary.", exJpn: "その映画は怖かったです。" },
                { eng: "Exciting", jpn: "ワクワクする", exEng: "It is an exciting city.", exJpn: "それはワクワクする街です。" },
                { eng: "Famous", jpn: "有名な", exEng: "He is famous.", exJpn: "彼は有名です。" },
                { eng: "Person", jpn: "人", exEng: "A nice person.", exJpn: "いい人。" },
                { eng: "Always", jpn: "いつも", exEng: "I always go there.", exJpn: "私はいつもそこに行きます。" },
                { eng: "Dream", jpn: "夢", exEng: "It is my dream.", exJpn: "それは私の夢です。" }
            ],
            reading1: {
                title: "Task 2: Reading (A Traveler's Blog)",
                instruction: "Read the blog post about a person's life experiences.",
                eng: "<strong>My Travel Experiences</strong><br><br>I love traveling and trying new things. I have been to five different countries. Last year, I went to Italy. It was beautiful. I have eaten authentic pizza in Rome, and I have seen the Colosseum. However, I have never been to Asia. It is my dream to visit Japan. I want to see the temples in Kyoto. I have never eaten real sushi, but I want to try it. Traveling gives you so many wonderful experiences!",
                jpn: "<strong>私の旅行体験</strong><br><br>私は旅行をして新しいことに挑戦するのが大好きです。これまでに5つの異なる国に行ったことがあります。昨年はイタリアに行きました。美しかったです。私はローマで本物のピザを食べたことがありますし、コロッセオを見たこともあります。しかし、アジアには一度も行ったことがありません。日本を訪れるのが私の夢です。京都のお寺を見たいです。本物の寿司は一度も食べたことがありませんが、試してみたいです。旅行はあなたにとても多くの素晴らしい経験を与えてくれます！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "We are watching a horror movie tonight. Have you ever seen 'The Ring'?", jpn: "今夜ホラー映画を見る予定なんだ。『リング』を見たことはある？" },
                { speaker: "B", eng: "No, I have never seen it. Is it scary?", jpn: "ううん、一度も見たことがないよ。怖いの？" },
                { speaker: "A", eng: "Yes, it is very scary! Have you ever watched a Japanese horror movie?", jpn: "うん、すごく怖いよ！日本のホラー映画を見たことはある？" },
                { speaker: "B", eng: "Yes, I have. I watched one last year with my brother.", jpn: "うん、あるよ。去年、兄（弟）と一緒に一つ見たんだ。" },
                { speaker: "A", eng: "Okay, then you will be fine. Let's watch it together.", jpn: "わかった、それなら大丈夫だね。一緒に見よう。" }
            ],
            writingTask: {
                promptEng: "Write three sentences about your life experiences. Write two things you have done ('I have been to...' or 'I have eaten...'), and one thing you have NEVER done ('I have never...').",
                promptJpn: "あなたの人生の経験について3つの文を書いてください。今までにやったことがあることを2つ（『私は〜に行ったことがあります』や『私は〜を食べたことがあります』）、一度もやったことがないことを1つ（『私は一度も〜したことがありません』）書いてください。"
            }
        }
    },,{
        id: 45,
        title: "Lesson 45: How to talk about other people",
        goal: "Use object pronouns (me, you, him, her, us, them) to refer to people who receive an action. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(目的格の代名詞（me, you, him, her, us, them）を使って、動作を受ける人について話す。)</span>",
        vocab: [
            { eng: "Me", jpn: "私を / 私に", exEng: "Can you help me?", exJpn: "私を手伝ってくれますか？" },
            { eng: "You", jpn: "あなたを / あなたに", exEng: "I will call you.", exJpn: "あなたに電話します。" },
            { eng: "Him", jpn: "彼を / 彼に", exEng: "I know him.", exJpn: "私は彼を知っています。" },
            { eng: "Her", jpn: "彼女を / 彼女に", exEng: "Tell her the truth.", exJpn: "彼女に真実を話して。" },
            { eng: "Us", jpn: "私たちを / 私たちに", exEng: "Come with us.", exJpn: "私たちと一緒に来て。" },
            { eng: "Them", jpn: "彼らを / 彼らに", exEng: "I invited them.", exJpn: "私は彼らを招待しました。" },
            { eng: "Know", jpn: "知っている", exEng: "Do you know John?", exJpn: "ジョンを知っていますか？" },
            { eng: "Call", jpn: "電話する / 呼ぶ", exEng: "Please call me.", exJpn: "私に電話してください。" },
            { eng: "Tell", jpn: "伝える / 話す", exEng: "Tell him to come.", exJpn: "彼に来るよう伝えてください。" },
            { eng: "Ask", jpn: "尋ねる / 頼む", exEng: "Ask her a question.", exJpn: "彼女に質問してください。" },
            { eng: "Help", jpn: "手伝う", exEng: "Help them move.", exJpn: "彼らの引っ越しを手伝って。" },
            { eng: "Meet", jpn: "会う", exEng: "I want to meet him.", exJpn: "彼に会いたいです。" },
            { eng: "Give", jpn: "与える", exEng: "Give it to us.", exJpn: "それを私たちにください。" },
            { eng: "Invite", jpn: "招待する", exEng: "Let's invite her.", exJpn: "彼女を招待しましょう。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Excuse me. <span class='swappable'>Do you know Sarah?</span>", jpn: "すみません。サラを知っていますか？" },
            { speaker: "B", eng: "Yes, I know <i class='grammar-target'>her</i>. She is my coworker.", jpn: "はい、彼女を知っています。彼女は私の同僚です。" },
            { speaker: "A", eng: "<span class='swappable'>Can you call <i class='grammar-target'>her</i> for me?</span>", jpn: "私のために彼女に電話してくれませんか？" },
            { speaker: "B", eng: "Sure. I will call <i class='grammar-target'>her</i> right now.", jpn: "もちろんです。今すぐ彼女に電話します。" },
            { speaker: "A", eng: "Thank you. Please tell <i class='grammar-target'>her</i> that I am waiting.", jpn: "ありがとうございます。私が待っていると彼女に伝えてください。" },
            { speaker: "B", eng: "No problem. I will tell <i class='grammar-target'>her</i>.", jpn: "問題ありません。彼女に伝えます。" }
        ],
        dialogueStructure: [
            "Get attention + Ask if they know someone <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(声をかける ＋ 誰かを知っているか尋ねる)</span>",
            "> Affirm + State relationship using object pronoun <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(肯定する ＋ 目的格を使って関係性を伝える)</span>",
            "Ask them to perform an action on the person <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(その人に対するアクションをお願いする)</span>",
            "> Agree + Confirm the action <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ アクションを確認する)</span>",
            "Thank them + Give a message <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(感謝する ＋ メッセージを伝える)</span>",
            "> Acknowledge and finish <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了承して終わる)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking if someone knows a person (人を知っているか尋ねる)", 
                options: [
                    { eng: "Do you know Sarah?", jpn: "サラを知っていますか？" }, 
                    { eng: "Do you know him?", jpn: "彼を知っていますか？" }, 
                    { eng: "Have you met them?", jpn: "彼らに会ったことはありますか？" }
                ] 
            },
            { 
                category: "2. Asking for an action toward a person (人へのアクションをお願いする)", 
                options: [
                    { eng: "Can you call her for me?", jpn: "私のために彼女に電話してくれませんか？" }, 
                    { eng: "Please tell him I am here.", jpn: "私がここにいると彼に伝えてください。" }, 
                    { eng: "Could you help them?", jpn: "彼らを手伝っていただけますか？" }
                ] 
            }
        ],
        grammar: {
            point: "Object Pronouns (me, you, him, her, us, them) - 目的格の代名詞",
            explanation: "We use object pronouns after a verb (or preposition) to show who receives the action. We do NOT use subject pronouns (I, he, she) after verbs. <br>• Subject (doer) -> Verb -> Object (receiver). <br>• Example: <em>I</em> (subject) <em>know</em> (verb) <em>her</em> (object). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「私は彼を知っている」「彼女を手伝う」など、動詞の動作を「受ける」対象として人を使う時は、目的格の代名詞を使います。日本語の「〜を」「〜に」にあたる言葉です。英語では動詞の後ろや前置詞の後ろには、必ずこの目的格（me, you, him, her, us, them）を置かなければなりません。「I know she」や「Call he」のように主格（I, he, she）を動詞の後ろに置くのは間違いです。一度出た人の名前を繰り返さずにスムーズに会話を進めるために必須の文法です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the pronouns after the verbs: 'know <u>her</u>', 'call <u>her</u>', and 'tell <u>her</u>'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：動詞の後の代名詞に注目してください：『know <u>her</u>』『call <u>her</u>』『tell <u>her</u>』。)</span>",
            examples: [
                { eng: "Can you help me?", jpn: "私を手伝ってくれますか？" },
                { eng: "I invited them to the party.", jpn: "私は彼らをパーティーに招待しました。" },
                { eng: "She doesn't like him.", jpn: "彼女は彼が好きではありません。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I know John. -> I know ( )", 
            target: "I know him." 
        },
        grammarPractice: [
            { prompt: "Can you help Sarah? -> Can you help ( )" },
            { prompt: "Tell my brother and me. -> Tell ( )" },
            { prompt: "I saw the students. -> I saw ( )" },
            { prompt: "Please call David. -> Please call ( )" },
            { prompt: "She likes you and me. -> She likes ( )" }
        ],
        clickingGames: [
            { prompt: "サラを知っていますか？", target: "Do you know Sarah?", words: ["Do", "you", "know", "Sarah?"] },
            { prompt: "はい、彼女を知っています。", target: "Yes, I know her.", words: ["Yes,", "I", "know", "her."] },
            { prompt: "私のために彼に電話してくれませんか？", target: "Can you call him for me?", words: ["Can", "you", "call", "him", "for", "me?"] },
            { prompt: "彼らに私が待っていると伝えてください。", target: "Please tell them that I am waiting.", words: ["Please", "tell", "them", "that", "I", "am", "waiting."] },
            { prompt: "彼を助けてくれますか？", target: "Can you help him?", words: ["Can", "you", "help", "him?"] }
        ],
        dropdownGames: [
            { before: "I don't know that man. Do you know", options: ["he", "him", "his"], answer: "him", after: "?" },
            { before: "My parents are coming. I need to meet", options: ["they", "them", "their"], answer: "them", after: " at the station." },
            { before: "Can you help", options: ["we", "our", "us"], answer: "us", after: " with this heavy box?" },
            { before: "Where is Jane? I need to ask", options: ["her", "she", "hers"], answer: "her", after: " a question." },
            { before: "I am thirsty. Can you give", options: ["I", "me", "my"], answer: "me", after: " some water?" }
        ],
        roleplay: {
            a: "You are looking for a coworker named Mike. Ask your partner if they know him, and ask them to tell him to call you. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(あなたはマイクという同僚を探しています。パートナーに彼を知っているか尋ね、彼から電話するように伝えてと頼んでください。)</span>",
            b: "Answer that you know him. Say you will tell him right away. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(彼を知っていると答えてください。すぐに彼に伝えると述べてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Manager", jpn: "マネージャー", exEng: "Talk to the manager.", exJpn: "マネージャーと話してください。" },
                { eng: "Colleague", jpn: "同僚", exEng: "She is my colleague.", exJpn: "彼女は私の同僚です。" },
                { eng: "Customer", jpn: "客 / 顧客", exEng: "Help the customer.", exJpn: "お客様を助けてください。" },
                { eng: "Boss", jpn: "上司", exEng: "My boss is busy.", exJpn: "私の上司は忙しいです。" },
                { eng: "Message", jpn: "メッセージ / 伝言", exEng: "Leave a message.", exJpn: "伝言を残してください。" },
                { eng: "Wait", jpn: "待つ", exEng: "Tell him to wait.", exJpn: "彼に待つように言ってください。" },
                { eng: "Listen", jpn: "聞く", exEng: "Listen to me.", exJpn: "私の話を聞いてください。" },
                { eng: "Show", jpn: "見せる", exEng: "Show her the map.", exJpn: "彼女に地図を見せてください。" },
                { eng: "Give", jpn: "与える / 渡す", exEng: "Give them the money.", exJpn: "彼らにお金を渡してください。" },
                { eng: "Send", jpn: "送る", exEng: "Send us an email.", exJpn: "私たちにメールを送ってください。" },
                { eng: "Email", jpn: "メール", exEng: "I sent an email.", exJpn: "私はメールを送りました。" },
                { eng: "Understand", jpn: "理解する", exEng: "I understand you.", exJpn: "私はあなたの言うことが理解できます。" },
                { eng: "Remember", jpn: "覚えている / 思い出す", exEng: "Do you remember her?", exJpn: "彼女を覚えていますか？" },
                { eng: "Forget", jpn: "忘れる", exEng: "Don't forget me.", exJpn: "私を忘れないでください。" }
            ],
            reading1: {
                title: "Task 2: Reading (A Message for the Boss)",
                instruction: "Read the office memo about leaving a message.",
                eng: "<strong>Phone Message Memo</strong><br><br>Hi Sarah. A customer called for Mr. Davis while he was in a meeting. The customer wants to buy the new software. Please find Mr. Davis and tell him the good news. Give him this paper with the customer's phone number. Ask him to call them back before 5 PM. Also, the manager wants to see us later. She told me to meet her in the conference room. Let's go see her after you find Mr. Davis.",
                jpn: "<strong>電話の伝言メモ</strong><br><br>サラへ。デイビスさんが会議中に、お客様から電話がありました。そのお客様は新しいソフトウェアを買いたいそうです。デイビスさんを見つけて、この良いニュースを彼に伝えてください。お客様の電話番号が書かれたこの紙を彼に渡してください。午後5時までに折り返し電話するよう彼に頼んでください。それから、マネージャーが後で私たちに会いたいそうです。彼女は私に会議室で会うように言いました。デイビスさんを見つけた後、彼女に会いに行きましょう。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Excuse me, I am looking for Lisa.", jpn: "すみません、リサを探しているのですが。" },
                { speaker: "B", eng: "Lisa? Oh, I know her. She is in the kitchen.", jpn: "リサ？ああ、彼女なら知っていますよ。彼女はキッチンにいます。" },
                { speaker: "A", eng: "Can you give this document to her?", jpn: "この書類を彼女に渡してくれますか？" },
                { speaker: "B", eng: "Sure, I can give it to her. Does she need to read it now?", jpn: "もちろん、彼女に渡しておきます。彼女は今すぐ読む必要がありますか？" },
                { speaker: "A", eng: "Yes. Tell her to read it quickly, please. Thank you!", jpn: "はい。早く読むように彼女に伝えてください。ありがとう！" }
            ],
            writingTask: {
                promptEng: "Write three sentences about asking people to do things. Use object pronouns (me, him, her, us, them) in every sentence. (Example: Please tell her to call me.)",
                promptJpn: "人に何かを頼むことについての文を3つ書いてください。すべての文に目的格の代名詞（me, him, her, us, them）を使用してください。（例：Please tell her to call me.）"
            }
        }
    },
    {
        id: 46,
        title: "Lesson 46: How to describe actions",
        goal: "Describe how someone does something using adverbs of manner (e.g., quickly, slowly, well). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(様態の副詞（quickly, slowly, wellなど）を使って、誰かがどのように何かをするかを描写する。)</span>",
        vocab: [
            { eng: "Quickly", jpn: "速く / すぐに", exEng: "He runs quickly.", exJpn: "彼は速く走ります。" },
            { eng: "Slowly", jpn: "ゆっくり", exEng: "Speak slowly, please.", exJpn: "ゆっくり話してください。" },
            { eng: "Loudly", jpn: "うるさく / 大声で", exEng: "They talk loudly.", exJpn: "彼らは大声で話します。" },
            { eng: "Quietly", jpn: "静かに", exEng: "Read quietly.", exJpn: "静かに読んでください。" },
            { eng: "Carefully", jpn: "注意深く / 慎重に", exEng: "Drive carefully.", exJpn: "気をつけて運転してください。" },
            { eng: "Well", jpn: "上手に / よく", exEng: "You play well.", exJpn: "あなたは上手に演奏します。" },
            { eng: "Badly", jpn: "下手に / 悪く", exEng: "I sing badly.", exJpn: "私は歌が下手です。" },
            { eng: "Hard", jpn: "熱心に / 一生懸命", exEng: "Study hard.", exJpn: "一生懸命勉強しなさい。" },
            { eng: "Fast", jpn: "速く", exEng: "She drives fast.", exJpn: "彼女は速く運転します。" },
            { eng: "Speak", jpn: "話す", exEng: "He speaks English.", exJpn: "彼は英語を話します。" },
            { eng: "Drive", jpn: "運転する", exEng: "I drive a car.", exJpn: "私は車を運転します。" },
            { eng: "Run", jpn: "走る", exEng: "Run to the door.", exJpn: "ドアまで走ってください。" },
            { eng: "Learn", jpn: "学ぶ", exEng: "I learn fast.", exJpn: "私は学ぶのが速いです。" },
            { eng: "Work", jpn: "働く / 作業する", exEng: "We work hard.", exJpn: "私たちは一生懸命働きます。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Wow! <span class='swappable'>You play the guitar very <i class='grammar-target'>well</i>.</span>", jpn: "わあ！あなたはギターをとても上手に弾きますね。" },
            { speaker: "B", eng: "Thank you. I practice very <i class='grammar-target'>hard</i> every day.", jpn: "ありがとう。毎日とても一生懸命練習しています。" },
            { speaker: "A", eng: "<span class='swappable'>Can you play this song <i class='grammar-target'>slowly</i>?</span> I want to learn it.", jpn: "この曲をゆっくり弾いてくれますか？私も習いたいです。" },
            { speaker: "B", eng: "Sure. I will play it <i class='grammar-target'>slowly</i>. Watch my hands <i class='grammar-target'>carefully</i>.", jpn: "もちろん。ゆっくり弾きますよ。私の手を注意深く見ていてください。" },
            { speaker: "A", eng: "Okay. You learn songs very <i class='grammar-target'>quickly</i>.", jpn: "わかりました。あなたは曲を覚えるのがとても速いですね。" },
            { speaker: "B", eng: "Thanks. Let's practice together.", jpn: "ありがとう。一緒に練習しましょう。" }
        ],
        dialogueStructure: [
            "Compliment an action <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(アクションを褒める)</span>",
            "> Say thank you + Explain how you practice <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(お礼を言う ＋ どのように練習するか説明する)</span>",
            "Ask them to modify the action + Give reason <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(アクションのやり方を変えてもらう ＋ 理由を伝える)</span>",
            "> Agree + Give an instruction <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 指示を与える)</span>",
            "Acknowledge + Compliment another action <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(了解する ＋ 別のアクションを褒める)</span>",
            "> Say thank you + Suggest doing it together <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(お礼を言う ＋ 一緒にやることを提案する)</span>"
        ],
        expressions: [
            { 
                category: "1. Complimenting an action (アクションを褒める)", 
                options: [
                    { eng: "You play the guitar very well.", jpn: "あなたはギターをとても上手に弾きますね。" }, 
                    { eng: "You speak English perfectly.", jpn: "あなたは英語を完璧に話しますね。" }, 
                    { eng: "You learn very quickly.", jpn: "あなたは学ぶのがとても速いですね。" }
                ] 
            },
            { 
                category: "2. Asking to modify an action (アクションのやり方を変えてもらう)", 
                options: [
                    { eng: "Can you play this song slowly?", jpn: "この曲をゆっくり弾いてくれますか？" }, 
                    { eng: "Can you speak more slowly?", jpn: "もっとゆっくり話してくれますか？" }, 
                    { eng: "Please drive carefully.", jpn: "気をつけて（慎重に）運転してください。" }
                ] 
            }
        ],
        grammar: {
            point: "Adverbs of Manner (-ly) - 様態の副詞",
            explanation: "Adverbs describe HOW an action is done. We usually make them by adding <strong>-ly</strong> to an adjective (quick -> quickly). They usually go AFTER the verb or the object. <br>• <em>Irregular adverbs:</em> 'Good' becomes <strong>well</strong>, 'hard' stays <strong>hard</strong>, and 'fast' stays <strong>fast</strong>. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「速く」「静かに」「上手に」のように、動作が「どのように」行われるかを説明する言葉を副詞（様態の副詞）と呼びます。多くの場合、形容詞の最後に <strong>-ly</strong> を付けるだけで作ることができます（例：slow → slowly、quiet → quietly）。文の中では、動詞や目的語の「一番最後」に置かれます。<br>※注意すべき不規則な副詞もあります。「good（良い）」は goodly ではなく <strong>well（上手に）</strong> になります。また、「hard（熱心な/熱心に）」や「fast（速い/速く）」は、形容詞でも副詞でも形が変わらない特別な単語です。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the words describing the verbs: 'play <u>well</u>', 'practice <u>hard</u>', 'play it <u>slowly</u>', and 'watch <u>carefully</u>'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：動詞を描写している言葉に注目してください：『play <u>well</u>』『practice <u>hard</u>』『play it <u>slowly</u>』『watch <u>carefully</u>』。)</span>",
            examples: [
                { eng: "She speaks English fluently.", jpn: "彼女は英語を流暢に話します。" },
                { eng: "He drives very fast.", jpn: "彼はとても速く運転します。" },
                { eng: "They are working hard today.", jpn: "彼らは今日、一生懸命働いています。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "He runs (quick)", 
            target: "He runs quickly." 
        },
        grammarPractice: [
            { prompt: "She sings very (good)" },
            { prompt: "Please speak (slow)" },
            { prompt: "They work (hard)" },
            { prompt: "Drive (careful) in the rain." },
            { prompt: "I play soccer (bad)" }
        ],
        clickingGames: [
            { prompt: "あなたはギターをとても上手に弾きますね。", target: "You play the guitar very well.", words: ["You", "play", "the", "guitar", "very", "well."] },
            { prompt: "この曲をゆっくり弾いてくれますか？", target: "Can you play this song slowly?", words: ["Can", "you", "play", "this", "song", "slowly?"] },
            { prompt: "毎日とても一生懸命練習しています。", target: "I practice very hard every day.", words: ["I", "practice", "very", "hard", "every", "day."] },
            { prompt: "私の手を注意深く見ていてください。", target: "Watch my hands carefully.", words: ["Watch", "my", "hands", "carefully."] },
            { prompt: "もっとゆっくり話してくれますか？", target: "Can you speak more slowly?", words: ["Can", "you", "speak", "more", "slowly?"] }
        ],
        dropdownGames: [
            { before: "My brother speaks French very", options: ["good", "well", "goodly"], answer: "well", after: "." },
            { before: "Please drive", options: ["careful", "carefully", "cares"], answer: "carefully", after: " because it is raining." },
            { before: "He runs very", options: ["fastly", "fast", "fasts"], answer: "fast", after: ", so he always wins." },
            { before: "Can you walk more", options: ["slowly", "slow", "slower"], answer: "slowly", after: "? I am tired." },
            { before: "The students are studying", options: ["hardly", "hard", "harder"], answer: "hard", after: " for the test." }
        ],
        roleplay: {
            a: "Compliment your partner on how well they do a hobby (e.g., play a sport, speak a language). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(趣味（スポーツ、言語など）をどれくらい上手にやるかについてパートナーを褒めてください。)</span>",
            b: "Say thank you, and explain that you practice hard. Ask your partner to do something slowly or carefully. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(お礼を言い、一生懸命練習していると説明してください。パートナーに何かをゆっくり、または注意深くやるようにお願いしてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Perfectly", jpn: "完璧に", exEng: "He did it perfectly.", exJpn: "彼はそれを完璧にやりました。" },
                { eng: "Fluently", jpn: "流暢に", exEng: "I want to speak fluently.", exJpn: "流暢に話したいです。" },
                { eng: "Easily", jpn: "簡単に", exEng: "She won the game easily.", exJpn: "彼女は簡単に試合に勝ちました。" },
                { eng: "Safely", jpn: "安全に", exEng: "Please travel safely.", exJpn: "安全に旅行してください。" },
                { eng: "Suddenly", jpn: "突然に", exEng: "It rained suddenly.", exJpn: "突然雨が降りました。" },
                { eng: "Happily", jpn: "幸せそうに", exEng: "They played happily.", exJpn: "彼らは幸せそうに遊びました。" },
                { eng: "Quietly", jpn: "静かに", exEng: "Close the door quietly.", exJpn: "静かにドアを閉めてください。" },
                { eng: "Dance", jpn: "踊る", exEng: "They dance beautifully.", exJpn: "彼らは美しく踊ります。" },
                { eng: "Sing", jpn: "歌う", exEng: "Sing loudly.", exJpn: "大きな声で歌ってください。" },
                { eng: "Study", jpn: "勉強する", exEng: "Study hard for the test.", exJpn: "テストのために一生懸命勉強してください。" },
                { eng: "Sleep", jpn: "眠る", exEng: "Sleep well tonight.", exJpn: "今夜はよく眠ってください。" },
                { eng: "Read", jpn: "読む", exEng: "Read carefully.", exJpn: "注意深く読んでください。" },
                { eng: "Listen", jpn: "聴く", exEng: "Listen closely.", exJpn: "しっかり聴いてください。" },
                { eng: "Answer", jpn: "答える", exEng: "Answer quickly.", exJpn: "すぐに答えてください。" }
            ],
            reading1: {
                title: "Task 2: Reading (A Great Soccer Player)",
                instruction: "Read the article about a talented athlete.",
                eng: "<strong>A Star Player</strong><br><br>My friend Alex is a great soccer player. He runs very fast and he kicks the ball perfectly. During the game, he watches the other players carefully. He doesn't play selfishly; he passes the ball beautifully to his team. After the game, he is always tired, but he smiles happily. He plays well because he practices hard every day. Even when it is raining heavily, he goes to the park and trains quietly. He is amazing.",
                jpn: "<strong>スター選手</strong><br><br>私の友達のアレックスは素晴らしいサッカー選手です。彼はとても速く走り、ボールを完璧に蹴ります。試合中、彼は他の選手たちを注意深く見ています。彼は利己的にプレーせず、美しくチームにボールをパスします。試合後はいつも疲れていますが、幸せそうに微笑みます。彼は毎日一生懸命練習しているので、上手にプレーします。激しく雨が降っている時でも、彼は公園に行って静かにトレーニングをします。彼は素晴らしいです。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "I am trying to learn Japanese, but it is difficult.", jpn: "私は日本語を学ぼうとしていますが、難しいです。" },
                { speaker: "B", eng: "Really? You speak very well!", jpn: "本当に？あなたはとても上手に話しますよ！" },
                { speaker: "A", eng: "Thank you. But native speakers talk too fast.", jpn: "ありがとう。でも、ネイティブスピーカーは話すのが速すぎます。" },
                { speaker: "B", eng: "I understand. You should ask them to speak slowly.", jpn: "わかります。彼らにゆっくり話すように頼むべきですよ。" },
                { speaker: "A", eng: "That is a good idea. I need to listen more carefully.", jpn: "それは良いアイデアですね。もっと注意深く聞く必要があります。" }
            ],
            writingTask: {
                promptEng: "Write three sentences describing how you or your friends do things. Use adverbs of manner (e.g., well, hard, fast, slowly, beautifully).",
                promptJpn: "あなたや友達がどのように物事を行うかを描写する文を3つ書いてください。様態の副詞（well, hard, fast, slowly, beautifullyなど）を使用してください。"
            }
        }
    },
    {
        id: 47,
        title: "Lesson 47: How to ask about quantity",
        goal: "Ask for quantities using 'How much' (uncountable nouns) and 'How many' (countable nouns). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『How much』（不可算名詞）と『How many』（可算名詞）を使って数量を尋ねる。)</span>",
        vocab: [
            { eng: "How much", jpn: "どれくらい（量・金額）", exEng: "How much water?", exJpn: "水はどれくらいですか？" },
            { eng: "How many", jpn: "いくつ（数）", exEng: "How many apples?", exJpn: "りんごはいくつですか？" },
            { eng: "People", jpn: "人々（複数形）", exEng: "How many people?", exJpn: "何人ですか？" },
            { eng: "Time", jpn: "時間", exEng: "How much time?", exJpn: "時間はどれくらいありますか？" },
            { eng: "Money", jpn: "お金", exEng: "How much money?", exJpn: "お金はいくらですか？" },
            { eng: "Eggs", jpn: "卵", exEng: "How many eggs do you need?", exJpn: "卵はいくつ必要ですか？" },
            { eng: "Milk", jpn: "牛乳", exEng: "How much milk is left?", exJpn: "牛乳はどれくらい残っていますか？" },
            { eng: "Sugar", jpn: "砂糖", exEng: "How much sugar?", exJpn: "砂糖はどれくらいですか？" },
            { eng: "Apples", jpn: "りんご", exEng: "Buy five apples.", exJpn: "りんごを5つ買ってください。" },
            { eng: "Days", jpn: "日数 / 日", exEng: "How many days?", exJpn: "何日ですか？" },
            { eng: "Bake", jpn: "焼く", exEng: "I want to bake a cake.", exJpn: "ケーキを焼きたいです。" },
            { eng: "Need", jpn: "必要とする", exEng: "We need more flour.", exJpn: "もっと小麦粉が必要です。" },
            { eng: "Left", jpn: "残っている", exEng: "Is there any pizza left?", exJpn: "ピザは残っていますか？" },
            { eng: "Exactly", jpn: "正確に / ちょうど", exEng: "I need exactly two.", exJpn: "ちょうど2つ必要です。" }
        ],
        dialogue: [
            { speaker: "A", eng: "Let's bake a cake. <span class='swappable'><i class='grammar-target'>How many</i> eggs do we need?</span>", jpn: "ケーキを焼きましょう。卵はいくつ必要ですか？" },
            { speaker: "B", eng: "We need three eggs. Check the fridge.", jpn: "卵は3つ必要です。冷蔵庫を確認してください。" },
            { speaker: "A", eng: "Okay, we have four eggs. <span class='swappable'><i class='grammar-target'>How much</i> milk do we need?</span>", jpn: "はい、卵は4つあります。牛乳はどれくらい必要ですか？" },
            { speaker: "B", eng: "We need a lot of milk. About two cups.", jpn: "牛乳はたくさん必要です。約2カップです。" },
            { speaker: "A", eng: "We don't have enough milk. <span class='swappable'><i class='grammar-target'>How much</i> time do we have?</span>", jpn: "牛乳が足りません。時間はどれくらいありますか？" },
            { speaker: "B", eng: "We have one hour. Let's go to the store quickly.", jpn: "1時間あります。急いで店に行きましょう。" }
        ],
        dialogueStructure: [
            "Propose action + Ask for countable quantity <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(アクションを提案する ＋ 数えられるものの数を尋ねる)</span>",
            "> State exact number + Give instruction <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(正確な数を伝える ＋ 指示を出す)</span>",
            "Confirm availability + Ask for uncountable quantity <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(在庫を確認する ＋ 数えられないものの量を尋ねる)</span>",
            "> State general quantity + State exact measurement <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(大まかな量を伝える ＋ 正確な単位を伝える)</span>",
            "State shortage + Ask about time (uncountable) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(不足していることを伝える ＋ 時間（不可算）について尋ねる)</span>",
            "> State time + Propose solution <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(時間を伝える ＋ 解決策を提案する)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about countable nouns (数えられるものの数を尋ねる)", 
                options: [
                    { eng: "How many eggs do we need?", jpn: "卵はいくつ必要ですか？" }, 
                    { eng: "How many people are coming?", jpn: "何人来ますか？" }, 
                    { eng: "How many apples do you have?", jpn: "りんごをいくつ持っていますか？" }
                ] 
            },
            { 
                category: "2. Asking about uncountable nouns (数えられないものの量を尋ねる)", 
                options: [
                    { eng: "How much milk do we need?", jpn: "牛乳はどれくらい必要ですか？" }, 
                    { eng: "How much time do we have?", jpn: "時間はどれくらいありますか？" }, 
                    { eng: "How much is this?", jpn: "これはいくらですか？" }
                ] 
            }
        ],
        grammar: {
            point: "Asking about quantity (How much / How many) - 量や数の尋ね方",
            explanation: "To ask about quantities, we use 'How many' or 'How much' at the start of the question. <br>• <strong>How many + Plural Countable Noun:</strong> Used for things you can count (apples, days, people). <br>• <strong>How much + Uncountable Noun:</strong> Used for things you cannot count, like liquids, concepts, or money (water, time, money). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「いくつ？」「どのくらい？」と数や量を尋ねる時には、名詞の種類によって『How many』と『How much』を使い分けます。<br>・<strong>How many</strong>：1個、2個と数えられる名詞（可算名詞）に使います。すぐ後ろには必ず複数形（-s）の名詞を置きます（例：How many <strong>days</strong> do you need? / 何日必要ですか？）。※「people（人々）」はすでに複数形なので s はつきません。<br>・<strong>How much</strong>：水やお金、時間といった数えられない名詞（不可算名詞）の量を尋ねる時に使います（例：How much <strong>water</strong> is left? / 水はどれくらい残っていますか？）。単独で『How much is it?』と言えば、値段（いくらですか）を尋ねる表現になります。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the difference: 'How <u>many eggs</u>' (countable) vs 'How <u>much milk</u>' and 'How <u>much time</u>' (uncountable). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『How <u>many eggs</u>（数えられる）』と『How <u>much milk</u>』『How <u>much time</u>（数えられない）』の違いに注目してください。)</span>",
            examples: [
                { eng: "How many cars does he have?", jpn: "彼は車を何台持っていますか？" },
                { eng: "How much sugar do you want in your coffee?", jpn: "コーヒーに砂糖はどれくらい欲しいですか？" },
                { eng: "How many people live in your city?", jpn: "あなたの街には何人の人が住んでいますか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "( ) water do you drink?", 
            target: "How much water do you drink?" 
        },
        grammarPractice: [
            { prompt: "( ) sisters do you have?" },
            { prompt: "( ) money is in your wallet?" },
            { prompt: "( ) hours do you sleep?" },
            { prompt: "( ) time do we have before the train leaves?" },
            { prompt: "( ) tomatoes do we need for the salad?" }
        ],
        clickingGames: [
            { prompt: "卵はいくつ必要ですか？", target: "How many eggs do we need?", words: ["How", "many", "eggs", "do", "we", "need?"] },
            { prompt: "牛乳はどれくらい必要ですか？", target: "How much milk do we need?", words: ["How", "much", "milk", "do", "we", "need?"] },
            { prompt: "時間はどれくらいありますか？", target: "How much time do we have?", words: ["How", "much", "time", "do", "we", "have?"] },
            { prompt: "何人来ますか？", target: "How many people are coming?", words: ["How", "many", "people", "are", "coming?"] },
            { prompt: "これはいくらですか？", target: "How much is this?", words: ["How", "much", "is", "this?"] }
        ],
        dropdownGames: [
            { before: "How", options: ["much", "many", "often"], answer: "much", after: " rice do you want for dinner?" },
            { before: "How", options: ["many", "much", "long"], answer: "many", after: " chairs are in the meeting room?" },
            { before: "How", options: ["much", "many", "some"], answer: "much", after: " coffee is left in the pot?" },
            { before: "How", options: ["many", "much", "any"], answer: "many", after: " days are you staying in Tokyo?" },
            { before: "How", options: ["much", "many", "old"], answer: "much", after: " is this blue shirt?" }
        ],
        roleplay: {
            a: "You are making dinner. Ask your partner how many vegetables (e.g., onions, tomatoes) and how much meat or rice you need. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(夕食を作っています。パートナーに野菜（玉ねぎやトマトなど）がいくつ必要か、そして肉や米がどれくらい必要か尋ねてください。)</span>",
            b: "Answer your partner. Tell them exactly how many vegetables and how much meat/rice to use. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに答えてください。野菜をいくつ、肉や米をどれくらい使うか正確に伝えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Price", jpn: "価格 / 値段", exEng: "The price is low.", exJpn: "価格は低いです。" },
                { eng: "Cost", jpn: "費用がかかる", exEng: "How much does it cost?", exJpn: "いくらかかりますか？" },
                { eng: "Bottle", jpn: "ボトル / 瓶", exEng: "How many bottles?", exJpn: "ボトルは何本ですか？" },
                { eng: "Cup", jpn: "カップ", exEng: "Two cups of tea.", exJpn: "お茶を2杯。" },
                { eng: "Glass", jpn: "グラス", exEng: "A glass of water.", exJpn: "グラス1杯の水。" },
                { eng: "Guest", jpn: "客 / ゲスト", exEng: "How many guests?", exJpn: "ゲストは何人ですか？" },
                { eng: "Ticket", jpn: "チケット", exEng: "How many tickets do you need?", exJpn: "チケットはいくつ必要ですか？" },
                { eng: "Information", jpn: "情報", exEng: "I need more information.", exJpn: "もっと情報が必要です。" },
                { eng: "Homework", jpn: "宿題", exEng: "How much homework do you have?", exJpn: "宿題はどれくらいありますか？" },
                { eng: "Job", jpn: "仕事 / 職業", exEng: "How many jobs did you have?", exJpn: "今までにいくつの仕事をしましたか？" },
                { eng: "Language", jpn: "言語", exEng: "How many languages do you speak?", exJpn: "いくつの言語を話しますか？" },
                { eng: "Minute", jpn: "分", exEng: "Wait five minutes.", exJpn: "5分待ってください。" },
                { eng: "Hour", jpn: "時間（長さ）", exEng: "It takes one hour.", exJpn: "1時間かかります。" },
                { eng: "Enough", jpn: "十分な", exEng: "We don't have enough time.", exJpn: "十分な時間がありません。" }
            ],
            reading1: {
                title: "Task 2: Reading (Planning a Wedding)",
                instruction: "Read the email about preparing for a large event.",
                eng: "<strong>Wedding Plans</strong><br><br>Hello Maria, we need to plan the food for the wedding next month. How many people are coming? The guest list says 100 people. That is a lot! How much chicken do we need for 100 people? The chef said we need 25 kilograms. Also, how many bottles of wine should we buy? I think 50 bottles is enough. Finally, how much money do we have left in the budget? We don't have much money left, so please find a cheap bakery for the cake. Thanks!",
                jpn: "<strong>結婚式の計画</strong><br><br>こんにちはマリア、来月の結婚式のための食事を計画する必要があります。何人来ますか？ゲストリストには100人とあります。多いですね！100人分の鶏肉はどれくらい必要ですか？シェフは25キロ必要だと言っていました。それから、ワインのボトルは何本買うべきでしょうか？50本で十分だと思います。最後に、予算のお金はどれくらい残っていますか？お金はあまり残っていないので、ケーキのために安いパン屋を見つけてください。ありがとう！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "I am going to the supermarket now. Do you need anything?", jpn: "今からスーパーに行きます。何か必要なものはありますか？" },
                { speaker: "B", eng: "Yes. Can you buy some apples and some milk?", jpn: "はい。りんごと牛乳をいくらか買ってきてくれますか？" },
                { speaker: "A", eng: "Sure. How many apples do you want?", jpn: "いいですよ。りんごはいくつ欲しいですか？" },
                { speaker: "B", eng: "Get six apples, please.", jpn: "6つ買ってください。" },
                { speaker: "A", eng: "Okay. And how much milk do we need?", jpn: "わかりました。それで、牛乳はどれくらい必要ですか？" },
                { speaker: "B", eng: "Just one carton is fine. We have a little left in the fridge.", jpn: "1パックで大丈夫です。冷蔵庫に少し残っているので。" }
            ],
            writingTask: {
                promptEng: "Write three questions using 'How much' or 'How many'. Ask about time, money, and things you can count (like books or friends).",
                promptJpn: "『How much』または『How many』を使った質問を3つ書いてください。時間、お金、そして数えられるもの（本や友達など）について尋ねてください。"
            }
        }
    },
    {
        id: 48,
        title: "Lesson 48: How to make sudden decisions",
        goal: "Make spontaneous decisions, offers, or promises using 'will'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『will』を使って、その場での決断、申し出、または約束をする。)</span>",
        vocab: [
            { eng: "Will ('ll)", jpn: "〜するつもりだ / 〜します", exEng: "I will call you.", exJpn: "あなたに電話します。" },
            { eng: "Won't (will not)", jpn: "〜しないつもりだ / 決して〜しない", exEng: "I won't forget.", exJpn: "忘れません。" },
            { eng: "Pay", jpn: "支払う", exEng: "I will pay for lunch.", exJpn: "私が昼食代を払います。" },
            { eng: "Help", jpn: "手伝う", exEng: "I'll help you with that.", exJpn: "それを手伝いますよ。" },
            { eng: "Open", jpn: "開ける", exEng: "I will open the door.", exJpn: "私がドアを開けます。" },
            { eng: "Answer", jpn: "答える / （電話に）出る", exEng: "I'll answer the phone.", exJpn: "私が電話に出ます。" },
            { eng: "Forget", jpn: "忘れる", exEng: "Don't forget.", exJpn: "忘れないで。" },
            { eng: "Promise", jpn: "約束する", exEng: "I promise I will come.", exJpn: "行くことを約束します。" },
            { eng: "Wallet", jpn: "財布", exEng: "I lost my wallet.", exJpn: "財布をなくしました。" },
            { eng: "Heavy", jpn: "重い", exEng: "This box is heavy.", exJpn: "この箱は重いです。" },
            { eng: "Hot", jpn: "暑い", exEng: "It is hot in here.", exJpn: "ここは暑いです。" },
            { eng: "Cold", jpn: "寒い", exEng: "It is cold.", exJpn: "寒いです。" },
            { eng: "Worry", jpn: "心配する", exEng: "Don't worry.", exJpn: "心配しないでください。" },
            { eng: "Sure", jpn: "確信して / もちろん", exEng: "Are you sure?", exJpn: "本当ですか？（確信していますか？）" }
        ],
        dialogue: [
            { speaker: "A", eng: "Oh no! I forgot my wallet at home.", jpn: "しまった！家に財布を忘れてきちゃった。" },
            { speaker: "B", eng: "Don't worry. <span class='swappable'><i class='grammar-target'>I will pay</i> for lunch today.</span>", jpn: "心配しないで。今日の昼食代は私が払うよ。" },
            { speaker: "A", eng: "Are you sure? Thank you so much.", jpn: "本当に？どうもありがとう。" },
            { speaker: "B", eng: "No problem. It is very hot in this restaurant.", jpn: "問題ないよ。このレストラン、とても暑いね。" },
            { speaker: "A", eng: "<span class='swappable'><i class='grammar-target'>I'll ask</i> the waiter to turn on the air conditioner.</span>", jpn: "ウェイターにエアコンをつけるように頼んでくるよ。" },
            { speaker: "B", eng: "Thanks. <i class='grammar-target'>I will wait</i> here.", jpn: "ありがとう。ここで待ってるね。" }
        ],
        dialogueStructure: [
            "State a sudden problem <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(突然の問題を伝える)</span>",
            "> Reassure + Make a sudden offer to help <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(安心させる ＋ その場で手助けを申し出る)</span>",
            "Confirm + Say thank you <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(確認する ＋ お礼を言う)</span>",
            "> Say no problem + State a new situation <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(問題ないと言う ＋ 新しい状況を伝える)</span>",
            "Make a sudden decision to act <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(行動を起こすというその場での決定を伝える)</span>",
            "> Say thank you + State your own sudden decision <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(お礼を言う ＋ 自身のその場での決定を伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Making sudden offers to help (その場で手助けを申し出る)", 
                options: [
                    { eng: "I will pay for lunch today.", jpn: "今日の昼食代は私が払います。" }, 
                    { eng: "I'll help you with that.", jpn: "それを手伝いますよ。" }, 
                    { eng: "I will open the door for you.", jpn: "ドアを開けますよ。" }
                ] 
            },
            { 
                category: "2. Making sudden decisions (その場で行動を決定する)", 
                options: [
                    { eng: "I'll ask the waiter.", jpn: "ウェイターに頼んできます。" }, 
                    { eng: "I will answer the phone.", jpn: "私が電話に出ます。" }, 
                    { eng: "I'll wait here.", jpn: "ここで待っています。" }
                ] 
            }
        ],
        grammar: {
            point: "Future with 'Will' (Spontaneous Decisions) - 意志未来の『Will』",
            explanation: "We use 'will' + base verb to talk about decisions we make AT THE MOMENT of speaking. We do not use it for plans made before. It is often used to offer help, make a promise, or react to a situation instantly. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（『will + 動詞の原形』は、「今、この瞬間に決めた未来の行動」を表す時に使います。前から決まっていた予定（be going to）とは異なり、「電話が鳴っているから、私が出るよ（I will answer it）」「財布を忘れたなら、私が払うよ（I will pay）」のように、その場の状況に反応して「〜するよ」と自発的に申し出たり、決意したりする場面で使われます。日常会話ではよく『I'll（アイル）』と短縮されます。また、「絶対に忘れないよ（I won't forget）」のように、強い約束をする時にも使います。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how both speakers react to a problem right then: '<u>I will pay</u>', '<u>I'll ask</u>', and '<u>I will wait</u>'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：話し手がその場で問題にどう反応しているかに注目してください：『<u>I will pay</u>』『<u>I'll ask</u>』『<u>I will wait</u>』。)</span>",
            examples: [
                { eng: "The phone is ringing. I'll answer it.", jpn: "電話が鳴っています。私が出ます。" },
                { eng: "Are you cold? I will close the window.", jpn: "寒いですか？私が窓を閉めますよ。" },
                { eng: "I won't tell anyone your secret.", jpn: "あなたの秘密は誰にも言いません（約束します）。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "The phone is ringing. (I / answer it)", 
            target: "I will answer it." 
        },
        grammarPractice: [
            { prompt: "You look tired. (I / help / you)" },
            { prompt: "It is raining. (I / get / an umbrella)" },
            { prompt: "I don't have money. (I / pay)" },
            { prompt: "This box is heavy. (I / carry / it)" },
            { prompt: "Please don't tell anyone. (I / not / tell / anyone)" }
        ],
        clickingGames: [
            { prompt: "今日の昼食代は私が払うよ。", target: "I will pay for lunch today.", words: ["I", "will", "pay", "for", "lunch", "today."] },
            { prompt: "ウェイターに頼んでくるよ。", target: "I'll ask the waiter.", words: ["I'll", "ask", "the", "waiter."] },
            { prompt: "それを手伝いますよ。", target: "I'll help you with that.", words: ["I'll", "help", "you", "with", "that."] },
            { prompt: "ここで待ってるね。", target: "I will wait here.", words: ["I", "will", "wait", "here."] },
            { prompt: "私がドアを開けますよ。", target: "I will open the door for you.", words: ["I", "will", "open", "the", "door", "for", "you."] }
        ],
        dropdownGames: [
            { before: "That bag looks heavy. I", options: ["will", "am going to", "do"], answer: "will", after: " carry it for you." },
            { before: "Did you forget your pen? Don't worry, I", options: ["will", "won't", "am"], answer: "will", after: " lend you mine." },
            { before: "It is freezing in this room. I", options: ["will", "am going to", "must"], answer: "will", after: " close the window." },
            { before: "I promise I", options: ["won't", "will", "don't"], answer: "won't", after: " tell your secret to anybody." },
            { before: "The doorbell is ringing. I", options: ["'ll", "'m", "'ve"], answer: "'ll", after: " get it!" }
        ],
        roleplay: {
            a: "Act out a sudden problem (e.g., 'I am very thirsty', 'I dropped my pen', 'I don't understand this English'). <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(突然の問題を演じてください（例：「とても喉が渇いた」「ペンを落としてしまった」「この英語が理解できない」）。)</span>",
            b: "React instantly and offer to help your partner using 'I will' or 'I'll'. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(即座に反応し、『I will』や『I'll』を使ってパートナーを助ける申し出をしてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Promise", jpn: "約束する", exEng: "I promise to help.", exJpn: "手伝うと約束します。" },
                { eng: "Secret", jpn: "秘密", exEng: "Keep it a secret.", exJpn: "秘密にしておいてください。" },
                { eng: "Ring", jpn: "鳴る", exEng: "The phone is ringing.", exJpn: "電話が鳴っています。" },
                { eng: "Answer", jpn: "答える / （電話に）出る", exEng: "Answer the door.", exJpn: "玄関に出てください（来客に応対してください）。" },
                { eng: "Drop", jpn: "落とす", exEng: "I dropped my keys.", exJpn: "鍵を落としました。" },
                { eng: "Pick up", jpn: "拾う", exEng: "Pick up the paper.", exJpn: "紙を拾ってください。" },
                { eng: "Cold", jpn: "寒い", exEng: "I am cold.", exJpn: "寒いです。" },
                { eng: "Hot", jpn: "暑い", exEng: "It is hot today.", exJpn: "今日は暑いです。" },
                { eng: "Lend", jpn: "貸す", exEng: "I will lend you my book.", exJpn: "私の本を貸してあげます。" },
                { eng: "Borrow", jpn: "借りる", exEng: "Can I borrow money?", exJpn: "お金を借りてもいいですか？" },
                { eng: "Worry", jpn: "心配する", exEng: "Don't worry about it.", exJpn: "そのことは心配しないで。" },
                { eng: "Sure", jpn: "確信して", exEng: "I am sure.", exJpn: "確信しています。" },
                { eng: "Forget", jpn: "忘れる", exEng: "I won't forget.", exJpn: "忘れません。" },
                { eng: "Remember", jpn: "覚えている", exEng: "I will remember.", exJpn: "覚えておきます。" }
            ],
            reading1: {
                title: "Task 2: Reading (A Helpful Colleague)",
                instruction: "Read the story about coworkers helping each other.",
                eng: "<strong>A Helpful Office</strong><br><br>Today was a busy day at the office. First, Mary dropped all her papers on the floor. John saw her and said, 'Don't worry, I will help you pick them up.' Later, the phone rang, but everyone was in a meeting. Sarah stood up and said, 'I'll answer it.' At lunchtime, David forgot his wallet. He was very sad because he was hungry. Mark smiled and said, 'I'll pay for your lunch today. You can pay me back tomorrow.' David said, 'Thank you! I promise I won't forget.' It is great to have helpful coworkers.",
                jpn: "<strong>助け合いのオフィス</strong><br><br>今日はオフィスが忙しい一日でした。まず、メアリーが床にすべての書類を落としてしまいました。ジョンはそれを見て、「心配しないで、拾うのを手伝うよ」と言いました。その後、電話が鳴りましたが、みんな会議中でした。サラが立ち上がって、「私が出ます」と言いました。昼食時、デビッドは財布を忘れました。彼はお腹が空いていたのでとても悲しそうでした。マークは微笑んで、「今日の昼食代は僕が払うよ。明日返してくれればいいから」と言いました。デビッドは「ありがとう！絶対に忘れないと約束するよ」と言いました。助け合える同僚がいるのは素晴らしいことです。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Brrr, it is freezing in this room!", jpn: "ブルブル、この部屋は凍えるほど寒いね！" },
                { speaker: "B", eng: "Is it? I will turn off the air conditioner.", jpn: "そう？エアコンを消すよ。" },
                { speaker: "A", eng: "Thank you. Oh, and I spilled some water on the table.", jpn: "ありがとう。あ、それからテーブルに水をこぼしちゃった。" },
                { speaker: "B", eng: "I'll get a towel for you. Just a second.", jpn: "タオルを持ってくるね。ちょっと待ってて。" },
                { speaker: "A", eng: "You are so helpful today.", jpn: "今日はとても助かるよ。" },
                { speaker: "B", eng: "No problem. I will always help my friends.", jpn: "問題ないよ。友達はいつでも助けるよ。" }
            ],
            writingTask: {
                promptEng: "Read these three problems: 1. It is raining and I have no umbrella. 2. I don't understand this math homework. 3. I am very thirsty. Write three sentences offering to help using 'I will' or 'I'll'.",
                promptJpn: "次の3つの問題について読んでください：1. 雨が降っているのに傘がない。2. この数学の宿題がわからない。3. とても喉が渇いた。『I will』または『I'll』を使って、手助けを申し出る文を3つ書いてください。"
            }
        }
    },
    {
        id: 49,
        title: "Lesson 49: How to explain why",
        goal: "Ask for reasons using 'Why' and explain your reasons using 'because'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『Why』を使って理由を尋ね、『because』を使って理由を説明する。)</span>",
        vocab: [
            { eng: "Why", jpn: "なぜ / どうして", exEng: "Why are you late?", exJpn: "なぜ遅れたのですか？" },
            { eng: "Because", jpn: "なぜなら / 〜だから", exEng: "Because I missed the bus.", exJpn: "バスに乗り遅れたからです。" },
            { eng: "Learn", jpn: "学ぶ", exEng: "I want to learn English.", exJpn: "私は英語を学びたいです。" },
            { eng: "Study", jpn: "勉強する", exEng: "Study hard.", exJpn: "一生懸命勉強しなさい。" },
            { eng: "Travel", jpn: "旅行する", exEng: "I travel for work.", exJpn: "私は仕事で旅行します。" },
            { eng: "Culture", jpn: "文化", exEng: "Japanese culture.", exJpn: "日本の文化。" },
            { eng: "Job", jpn: "仕事", exEng: "I have a new job.", exJpn: "私は新しい仕事に就きました。" },
            { eng: "Tired", jpn: "疲れた", exEng: "I am tired because I worked.", exJpn: "働いたので疲れました。" },
            { eng: "Sleepy", jpn: "眠い", exEng: "I am sleepy.", exJpn: "私は眠いです。" },
            { eng: "Happy", jpn: "嬉しい / 幸せな", exEng: "I am happy because you are here.", exJpn: "あなたがここにいるから嬉しいです。" },
            { eng: "Late", jpn: "遅れて", exEng: "Sorry I am late.", exJpn: "遅れてごめんなさい。" },
            { eng: "Miss", jpn: "乗り遅れる / 逃す", exEng: "I missed the train.", exJpn: "電車に乗り遅れました。" },
            { eng: "Traffic", jpn: "交通 / 渋滞", exEng: "The traffic is bad.", exJpn: "渋滞がひどいです。" },
            { eng: "Idea", jpn: "考え", exEng: "Good idea.", exJpn: "良い考えです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'><i class='grammar-target'>Why</i> are you learning English?</span>", jpn: "なぜ英語を学んでいるのですか？" },
            { speaker: "B", eng: "<span class='swappable'>I am learning English <i class='grammar-target'>because</i> I want to travel.</span>", jpn: "旅行したいから英語を学んでいます。" },
            { speaker: "A", eng: "That is great. <i class='grammar-target'>Why</i> do you want to visit London?", jpn: "それは素晴らしいですね。なぜロンドンを訪れたいのですか？" },
            { speaker: "B", eng: "<i class='grammar-target'>Because</i> I love British culture.", jpn: "イギリスの文化が大好きだからです。" },
            { speaker: "A", eng: "Me too. Oh, you look very sleepy today.", jpn: "私もです。ああ、今日はとても眠そうですね。" },
            { speaker: "B", eng: "Yes, I am sleepy <i class='grammar-target'>because</i> I studied late last night.", jpn: "はい、昨夜遅くまで勉強したから眠いんです。" }
        ],
        dialogueStructure: [
            "Ask for a reason <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(理由を尋ねる)</span>",
            "> State reason using 'because' <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(『because』を使って理由を伝える)</span>",
            "React + Ask for another reason <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 別の理由を尋ねる)</span>",
            "> Give short reason using 'because' <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(『because』を使って短く理由を答える)</span>",
            "Agree + Make an observation <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 観察したことを伝える)</span>",
            "> Confirm observation + Give reason <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(観察を肯定する ＋ 理由を伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking for reasons (理由を尋ねる)", 
                options: [
                    { eng: "Why are you learning English?", jpn: "なぜ英語を学んでいるのですか？" }, 
                    { eng: "Why are you late?", jpn: "なぜ遅れたのですか？" }, 
                    { eng: "Why do you like this?", jpn: "なぜこれが好きなのですか？" }
                ] 
            },
            { 
                category: "2. Giving reasons (理由を説明する)", 
                options: [
                    { eng: "Because I want to travel.", jpn: "旅行したいからです。" }, 
                    { eng: "I am learning English because I want to travel.", jpn: "旅行したいので英語を学んでいます。" }, 
                    { eng: "Because the traffic was bad.", jpn: "渋滞がひどかったからです。" }
                ] 
            }
        ],
        grammar: {
            point: "Asking 'Why' and answering with 'Because' - 『Why』と『Because』",
            explanation: "We use the question word <strong>Why</strong> to ask for a reason. To answer, we use the conjunction <strong>because</strong> followed by a subject and a verb (a full clause). We can start a sentence with 'Because...' in spoken English, or use it in the middle of a sentence to connect two ideas: [Result] + because + [Reason]. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（行動の理由や原因を「なぜ？」「どうして？」と尋ねる時は、疑問詞の <strong>Why</strong> を文の先頭に置きます。それに対して答える時は、<strong>because（なぜなら／〜だから）</strong> を使います。because の後ろには必ず「主語＋動詞（〜が〜する）」という文の形を続けます。<br>会話では「Why...?」と聞かれて「Because I like it.（好きだからです）」といきなり because から話し始めることがよくあります。また、「I study English <strong>because</strong> I want to travel（旅行したい<strong>ので</strong>、英語を勉強します）」のように、[結果] と [理由] を1つの文の中で繋ぐ接着剤としても使われます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the question-answer pairs: '<u>Why</u> are you learning' -> '<u>because</u> I want to travel'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>Why</u> are you learning』から『<u>because</u> I want to travel』へと続く、質問と答えのペアに注目してください。)</span>",
            examples: [
                { eng: "Why is she crying?", jpn: "彼女はなぜ泣いているのですか？" },
                { eng: "Because she lost her bag.", jpn: "カバンをなくしたからです。" },
                { eng: "I am happy because I passed the test.", jpn: "テストに合格したので私は嬉しいです。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "( ) are you crying? / ( ) I am sad.", 
            target: "Why are you crying? / Because I am sad." 
        },
        grammarPractice: [
            { prompt: "( ) is he running? / ( ) he is late." },
            { prompt: "I eat vegetables ( ) they are healthy." },
            { prompt: "( ) do you study English? / ( ) I need it for my job." },
            { prompt: "She went to bed early ( ) she was tired." },
            { prompt: "( ) are they laughing? / ( ) the movie is funny." }
        ],
        clickingGames: [
            { prompt: "なぜ英語を学んでいるのですか？", target: "Why are you learning English?", words: ["Why", "are", "you", "learning", "English?"] },
            { prompt: "旅行したいから英語を学んでいます。", target: "I am learning English because I want to travel.", words: ["I", "am", "learning", "English", "because", "I", "want", "to", "travel."] },
            { prompt: "イギリスの文化が大好きだからです。", target: "Because I love British culture.", words: ["Because", "I", "love", "British", "culture."] },
            { prompt: "なぜ遅れたのですか？", target: "Why are you late?", words: ["Why", "are", "you", "late?"] },
            { prompt: "渋滞がひどかったからです。", target: "Because the traffic was bad.", words: ["Because", "the", "traffic", "was", "bad."] }
        ],
        dropdownGames: [
            { before: "", options: ["Why", "What", "When"], answer: "Why", after: " do you want to learn Spanish?" },
            { before: "I want to learn it", options: ["because", "why", "but"], answer: "because", after: " I am moving to Spain." },
            { before: "I am wearing a coat", options: ["because", "why", "so"], answer: "because", after: " it is very cold outside." },
            { before: "", options: ["Why", "Where", "Who"], answer: "Why", after: " was John angry yesterday?" },
            { before: "", options: ["Because", "Why", "And"], answer: "Because", after: " someone ate his lunch." }
        ],
        roleplay: {
            a: "Ask your partner why they are studying English. Ask another 'Why' question about their hobbies or food preferences. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーになぜ英語を勉強しているのか尋ねてください。趣味や好きな食べ物について、もう一つ『Why』を使った質問をしてください。)</span>",
            b: "Answer your partner's questions using 'because'. Give interesting reasons! <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(『because』を使ってパートナーの質問に答えてください。面白い理由を教えてあげましょう！)</span>"
        },
        homework: {
            vocab: [
                { eng: "Late", jpn: "遅れた", exEng: "I am late for class.", exJpn: "授業に遅れました。" },
                { eng: "Traffic", jpn: "交通 / 渋滞", exEng: "The traffic is heavy.", exJpn: "渋滞がひどいです。" },
                { eng: "Miss", jpn: "乗り遅れる / 逃す", exEng: "I missed the bus.", exJpn: "バスに乗り遅れました。" },
                { eng: "Train", jpn: "電車", exEng: "The train stopped.", exJpn: "電車が止まりました。" },
                { eng: "Accident", jpn: "事故", exEng: "There was an accident.", exJpn: "事故がありました。" },
                { eng: "Alarm", jpn: "目覚まし時計 / アラーム", exEng: "My alarm didn't ring.", exJpn: "目覚ましが鳴りませんでした。" },
                { eng: "Oversleep", jpn: "寝坊する", exEng: "I overslept today.", exJpn: "今日は寝坊しました。" },
                { eng: "Boss", jpn: "上司", exEng: "My boss was angry.", exJpn: "上司は怒っていました。" },
                { eng: "Angry", jpn: "怒っている", exEng: "Why are you angry?", exJpn: "なぜ怒っているのですか？" },
                { eng: "Sad", jpn: "悲しい", exEng: "She is sad because she lost it.", exJpn: "彼女はそれをなくしたので悲しんでいます。" },
                { eng: "Happy", jpn: "嬉しい / 幸せな", exEng: "I am happy because it is sunny.", exJpn: "晴れているので嬉しいです。" },
                { eng: "Tired", jpn: "疲れた", exEng: "I am tired because I ran.", exJpn: "走ったので疲れました。" },
                { eng: "Busy", jpn: "忙しい", exEng: "I am busy because of work.", exJpn: "仕事のせいで忙しいです。" },
                { eng: "Excuse", jpn: "言い訳", exEng: "That is a bad excuse.", exJpn: "それは悪い言い訳です。" }
            ],
            reading1: {
                title: "Task 2: Reading (A Bad Excuse)",
                instruction: "Read the email from an employee explaining why they are late.",
                eng: "<strong>To:</strong> Mr. Davis<br><strong>From:</strong> Kevin<br><br>Dear Mr. Davis, I am writing to tell you that I will be late for work today. Why am I late? Because I had a terrible morning. First, I overslept because my phone battery died and my alarm didn't ring. Then, I missed the 8:00 AM train because I ran slowly. Now, I am waiting for the bus, but it is delayed because there is a lot of traffic. I am very sorry. I will arrive at the office in 30 minutes.",
                jpn: "<strong>宛先：</strong> デイビスさん<br><strong>差出人：</strong> ケビン<br><br>デイビスさん、本日は仕事に遅れることをお伝えするためにメールをしています。なぜ遅れるのか？ひどい朝を過ごしたからです。まず、携帯のバッテリーが切れてアラームが鳴らなかったので寝坊しました。それから、走るのが遅かったので午前8時の電車に乗り遅れました。今はバスを待っていますが、ひどい渋滞があるためバスが遅れています。大変申し訳ありません。30分後にオフィスに到着します。"
            },
            expandedDialogue: [
                { speaker: "A", eng: "Hey, why didn't you come to the party last night?", jpn: "ねえ、どうして昨夜のパーティーに来なかったの？" },
                { speaker: "B", eng: "I am sorry. I didn't go because I was very tired.", jpn: "ごめんね。とても疲れていたから行かなかったんだ。" },
                { speaker: "A", eng: "Why were you so tired?", jpn: "どうしてそんなに疲れていたの？" },
                { speaker: "B", eng: "Because I worked for 12 hours yesterday. It was a crazy day.", jpn: "昨日は12時間も働いたからだよ。とんでもない一日だったんだ。" },
                { speaker: "A", eng: "Wow, I understand. Let's get coffee together next week.", jpn: "わあ、それならわかるよ。来週一緒にコーヒーでも飲もう。" }
            ],
            writingTask: {
                promptEng: "Read these questions: 1. Why do you study English? 2. Why do you live in your city? Write three sentences answering these questions using 'because'.",
                promptJpn: "次の質問を読んでください：1. なぜ英語を勉強するのですか？ 2. なぜ今の街に住んでいるのですか？『because』を使ってこれらの質問に答える文を3つ書いてください。"
            }
        }
    },
    {
        id: 50,
        title: "Lesson 50: How to share your opinion",
        goal: "Ask for opinions and state your own thoughts using 'What do you think about' and 'I think'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『What do you think about』や『I think』を使って、意見を求めたり、自分の考えを述べたりする。)</span>",
        vocab: [
            { eng: "Think", jpn: "思う / 考える", exEng: "I think it is good.", exJpn: "それは良いと思います。" },
            { eng: "About", jpn: "〜について", exEng: "What do you think about it?", exJpn: "それについてどう思いますか？" },
            { eng: "Opinion", jpn: "意見", exEng: "That is my opinion.", exJpn: "それが私の意見です。" },
            { eng: "Agree", jpn: "同意する / 賛成する", exEng: "I agree with you.", exJpn: "私はあなたに同意します。" },
            { eng: "Disagree", jpn: "同意しない / 反対する", exEng: "I disagree.", exJpn: "私は反対です。" },
            { eng: "Nice", jpn: "素敵な / 良い", exEng: "This shirt is nice.", exJpn: "このシャツは素敵です。" },
            { eng: "Expensive", jpn: "高価な", exEng: "It is too expensive.", exJpn: "それは高すぎます。" },
            { eng: "Better", jpn: "より良い", exEng: "This one is better.", exJpn: "こちらの方が良いです。" },
            { eng: "Color", jpn: "色", exEng: "I like this color.", exJpn: "私はこの色が好きです。" },
            { eng: "Style", jpn: "スタイル / デザイン", exEng: "The style is old.", exJpn: "デザインが古いです。" },
            { eng: "Movie", jpn: "映画", exEng: "What do you think about the movie?", exJpn: "その映画についてどう思いますか？" },
            { eng: "Idea", jpn: "アイデア / 考え", exEng: "It is a good idea.", exJpn: "良い考えです。" },
            { eng: "Sure", jpn: "確信して", exEng: "I am not sure.", exJpn: "確信が持てません（よくわかりません）。" },
            { eng: "Maybe", jpn: "たぶん", exEng: "Maybe you are right.", exJpn: "たぶんあなたの言う通りです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'><i class='grammar-target'>What do you think about</i> this shirt?</span>", jpn: "このシャツについてどう思いますか？" },
            { speaker: "B", eng: "<span class='swappable'><i class='grammar-target'>I think</i> it is very nice.</span> But it is expensive.", jpn: "とても素敵だと思います。でも高いですね。" },
            { speaker: "A", eng: "Yes, it is. <i class='grammar-target'>What do you think about</i> the blue one?", jpn: "はい、そうですね。青い方はどう思いますか？" },
            { speaker: "B", eng: "<i class='grammar-target'>I think</i> the blue one is better. The color is perfect for you.", jpn: "青い方の方が良いと思います。色があなたにぴったりです。" },
            { speaker: "A", eng: "I agree with you. I will buy the blue one.", jpn: "私もそう思います。青い方を買います。" }
        ],
        dialogueStructure: [
            "Ask for an opinion <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(意見を尋ねる)</span>",
            "> State an opinion + Add a contrasting point <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(意見を述べる ＋ 対照的なポイントを加える)</span>",
            "Agree + Ask for an opinion on a second option <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意する ＋ 2つ目の選択肢についての意見を尋ねる)</span>",
            "> State opinion on second option + Give reason <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(2つ目の選択肢への意見を述べる ＋ 理由を伝える)</span>",
            "Express agreement + State final decision <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(同意を表明する ＋ 最終決定を伝える)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking for an opinion (意見の尋ね方)", 
                options: [
                    { eng: "What do you think about this shirt?", jpn: "このシャツについてどう思いますか？" }, 
                    { eng: "What do you think of this idea?", jpn: "このアイデアについてどう思いますか？" }, 
                    { eng: "Do you think it's good?", jpn: "それは良いと思いますか？" }
                ] 
            },
            { 
                category: "2. Stating an opinion (意見の伝え方)", 
                options: [
                    { eng: "I think it is very nice.", jpn: "とても素敵だと思います。" }, 
                    { eng: "I don't think it is a good idea.", jpn: "良いアイデアだとは思いません。" }, 
                    { eng: "I think the blue one is better.", jpn: "青い方の方が良いと思います。" }
                ] 
            }
        ],
        grammar: {
            point: "Expressing Opinions (I think / What do you think) - 意見の表現",
            explanation: "To ask for someone's opinion, we use 'What do you think about + [Noun]'. To answer, we say 'I think' followed by a full sentence (Subject + Verb). To express a negative opinion, we usually make 'think' negative: 'I don't think...' (not 'I think it is not...'). <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（相手の意見や感想を尋ねる時の定番フレーズが『What do you think about...?（〜についてどう思いますか？）』です。<br>自分の意見を言う時は、文の先頭に『I think（私は〜だと思います）』を置き、その後ろに言いたいこと（主語＋動詞からなる普通の文）をそのまま繋げます。<br>※「〜ではないと思う」と否定的な意見を言う時は、「I think it is not good.」と言うよりも、「I <strong>don't</strong> think it is good.（良いとは<strong>思いません</strong>）」と、『think』の方を否定形にするのが英語の自然なルールです。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice the structures: '<u>What do you think about</u> this shirt?' and '<u>I think</u> it is very nice.' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：『<u>What do you think about</u> this shirt?』と『<u>I think</u> it is very nice.』の構造に注目してください。)</span>",
            examples: [
                { eng: "What do you think about the new teacher?", jpn: "新しい先生についてどう思いますか？" },
                { eng: "I think he is very strict.", jpn: "彼はとても厳しいと思います。" },
                { eng: "I don't think this is the right way.", jpn: "これが正しい道だとは思いません。" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "What / you / think / about this movie?", 
            target: "What do you think about this movie?" 
        },
        grammarPractice: [
            { prompt: "I / think / it / is a great idea" },
            { prompt: "I / not / think / it / is cheap" },
            { prompt: "What / you / think / about the new restaurant?" },
            { prompt: "I / think / the blue car / is faster" },
            { prompt: "I / not / think / he / is coming today" }
        ],
        clickingGames: [
            { prompt: "このシャツについてどう思いますか？", target: "What do you think about this shirt?", words: ["What", "do", "you", "think", "about", "this", "shirt?"] },
            { prompt: "とても素敵だと思います。", target: "I think it is very nice.", words: ["I", "think", "it", "is", "very", "nice."] },
            { prompt: "青い方の方が良いと思います。", target: "I think the blue one is better.", words: ["I", "think", "the", "blue", "one", "is", "better."] },
            { prompt: "それは良いアイデアだとは思いません。", target: "I don't think it is a good idea.", words: ["I", "don't", "think", "it", "is", "a", "good", "idea."] },
            { prompt: "私はあなたに同意します。", target: "I agree with you.", words: ["I", "agree", "with", "you."] }
        ],
        dropdownGames: [
            { before: "What do you think", options: ["about", "for", "to"], answer: "about", after: " this new phone?" },
            { before: "I", options: ["think", "thinks", "thinking"], answer: "think", after: " it is too expensive." },
            { before: "I", options: ["don't think", "not think", "am not think"], answer: "don't think", after: " that is a good idea." },
            { before: "Do you", options: ["agree", "agrees", "agreeing"], answer: "agree", after: " with me?" },
            { before: "Yes, I think you", options: ["are", "do", "is"], answer: "are", after: " right." }
        ],
        roleplay: {
            a: "Show your partner a picture on your phone (or imagine one). Ask them what they think about it. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(携帯電話の写真（または想像したもの）をパートナーに見せてください。それについてどう思うか尋ねてください。)</span>",
            b: "Give your honest opinion using 'I think...' or 'I don't think...'. Say if you like it or not. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(『I think...』や『I don't think...』を使って正直な意見を伝えてください。それが好きかどうかを述べてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Opinion", jpn: "意見", exEng: "In my opinion...", exJpn: "私の意見では..." },
                { eng: "Idea", jpn: "アイデア", exEng: "That is a bad idea.", exJpn: "それは悪いアイデアです。" },
                { eng: "Important", jpn: "重要な", exEng: "It is very important.", exJpn: "それはとても重要です。" },
                { eng: "Interesting", jpn: "面白い / 興味深い", exEng: "The book is interesting.", exJpn: "その本は面白いです。" },
                { eng: "Boring", jpn: "退屈な", exEng: "I think it's boring.", exJpn: "退屈だと思います。" },
                { eng: "Delicious", jpn: "美味しい", exEng: "I think it is delicious.", exJpn: "美味しいと思います。" },
                { eng: "Terrible", jpn: "ひどい", exEng: "The weather is terrible.", exJpn: "天気はひどいです。" },
                { eng: "Perfect", jpn: "完璧な", exEng: "This is perfect for you.", exJpn: "これはあなたに完璧です。" },
                { eng: "Agree", jpn: "賛成する", exEng: "I agree.", exJpn: "賛成です。" },
                { eng: "Disagree", jpn: "反対する", exEng: "I disagree.", exJpn: "反対です。" },
                { eng: "Right", jpn: "正しい", exEng: "I think you are right.", exJpn: "あなたの言う通りだと思います。" },
                { eng: "Wrong", jpn: "間違っている", exEng: "I think he is wrong.", exJpn: "彼は間違っていると思います。" },
                { eng: "Believe", jpn: "信じる / 思う", exEng: "I believe it is true.", exJpn: "それは真実だと信じています。" },
                { eng: "Sure", jpn: "確信して", exEng: "Are you sure?", exJpn: "確信していますか？" }
            ],
            reading1: {
                title: "Task 2: Reading (Movie Reviews)",
                instruction: "Read the different opinions about a new movie.",
                eng: "<strong>Movie Reviews: 'The Space Journey'</strong><br><br><strong>User A:</strong> What do you think about the new space movie? I think it is the best movie of the year. The story is very interesting, and the actors are great.<br><strong>User B:</strong> I disagree. I don't think the story is good. I think it is very boring. The movie is too long.<br><strong>User C:</strong> I agree with User A. I think the movie is amazing. The music is perfect. You should go see it!",
                jpn: "<strong>映画レビュー：「スペースジャーニー」</strong><br><br><strong>ユーザーA：</strong> 新しい宇宙の映画についてどう思いますか？私は今年最高の映画だと思います。ストーリーがとても面白く、俳優たちも素晴らしいです。<br><strong>ユーザーB：</strong> 私は反対です。ストーリーが良いとは思いません。とても退屈だと思います。映画が長すぎます。<br><strong>ユーザーC：</strong> ユーザーAに賛成です。映画は素晴らしいと思います。音楽も完璧です。見に行くべきですよ！"
            },
            expandedDialogue: [
                { speaker: "A", eng: "I am thinking about taking a trip to Hawaii next month.", jpn: "来月、ハワイへ旅行しようかと考えているんだ。" },
                { speaker: "B", eng: "Really? What do you think about the prices there?", jpn: "本当に？あそこの物価についてどう思う？" },
                { speaker: "A", eng: "I think it is a little expensive, but it is beautiful.", jpn: "少し高いと思うけど、美しい場所だよ。" },
                { speaker: "B", eng: "I don't think next month is a good idea. It is the rainy season.", jpn: "来月は良い考えだとは思わないな。雨季だよ。" },
                { speaker: "A", eng: "Oh, I didn't know that. Maybe I should wait.", jpn: "ああ、それは知らなかった。待った方がいいかもしれないね。" }
            ],
            writingTask: {
                promptEng: "Choose a famous food or movie. Write three sentences giving your opinion about it using 'I think' and 'I don't think'.",
                promptJpn: "有名な食べ物や映画を1つ選んでください。『I think』と『I don't think』を使って、それについてのあなたの意見を述べる文を3つ書いてください。"
            }
        }
    },
    {
        id: 51,
        title: "Lesson 51: How to talk about your goals",
        goal: "Express future desires, dreams, and life goals using 'want to' and 'would like to'. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(『want to』や『would like to』を使って、将来の願望、夢、人生の目標を表現する。)</span>",
        vocab: [
            { eng: "Want to", jpn: "〜したい（一般的な願望）", exEng: "I want to sleep.", exJpn: "私は眠りたいです。" },
            { eng: "Would like to", jpn: "〜したいのですが（丁寧な願望）", exEng: "I would like to go.", exJpn: "私は行きたいです。" },
            { eng: "Goal", jpn: "目標", exEng: "What is your goal?", exJpn: "あなたの目標は何ですか？" },
            { eng: "Dream", jpn: "夢", exEng: "It is my dream.", exJpn: "それは私の夢です。" },
            { eng: "Future", jpn: "未来 / 将来", exEng: "In the future.", exJpn: "将来に。" },
            { eng: "Next year", jpn: "来年", exEng: "Next year, I will travel.", exJpn: "来年、私は旅行します。" },
            { eng: "Study", jpn: "勉強する", exEng: "I want to study art.", exJpn: "私は美術を勉強したいです。" },
            { eng: "Abroad", jpn: "海外で / 海外へ", exEng: "I want to live abroad.", exJpn: "私は海外に住みたいです。" },
            { eng: "Learn", jpn: "学ぶ", exEng: "I want to learn English.", exJpn: "私は英語を学びたいです。" },
            { eng: "Speak", jpn: "話す", exEng: "I want to speak fluently.", exJpn: "私は流暢に話したいです。" },
            { eng: "Job", jpn: "仕事", exEng: "I want a new job.", exJpn: "私は新しい仕事が欲しいです。" },
            { eng: "Work", jpn: "働く", exEng: "I would like to work here.", exJpn: "私はここで働きたいです。" },
            { eng: "Become", jpn: "〜になる", exEng: "I want to become a doctor.", exJpn: "私は医者になりたいです。" },
            { eng: "Travel", jpn: "旅行する", exEng: "I want to travel the world.", exJpn: "私は世界を旅行したいです。" }
        ],
        dialogue: [
            { speaker: "A", eng: "<span class='swappable'>What do you <i class='grammar-target'>want to</i> do next year?</span>", jpn: "来年は何をしたいですか？" },
            { speaker: "B", eng: "<span class='swappable'>I <i class='grammar-target'>want to</i> study abroad.</span>", jpn: "私は留学（海外で勉強）したいです。" },
            { speaker: "A", eng: "Wow! <span class='swappable'>Where <i class='grammar-target'>would you like to</i> go?</span>", jpn: "わあ！どこに行きたいですか？" },
            { speaker: "B", eng: "I <i class='grammar-target'>would like to</i> go to Canada. I <i class='grammar-target'>want to</i> learn English and see the beautiful nature.", jpn: "カナダに行きたいです。英語を学んで、美しい自然を見たいんです。" },
            { speaker: "A", eng: "That is a great goal. I <i class='grammar-target'>want to</i> visit Canada someday, too.", jpn: "それは素晴らしい目標ですね。私もいつかカナダを訪れたいです。" },
            { speaker: "B", eng: "We should go together in the future!", jpn: "将来、一緒に行くべきですね！" }
        ],
        dialogueStructure: [
            "Ask about a future goal/desire <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(将来の目標や願望を尋ねる)</span>",
            "> State future desire <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(将来の願望を伝える)</span>",
            "React + Ask for specific details (polite) <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(反応する ＋ 丁寧な表現で詳細を尋ねる)</span>",
            "> Answer politely + Give reasons <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(丁寧に答える ＋ 理由を伝える)</span>",
            "Compliment + Share your own similar goal <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(褒める ＋ 自分の似たような目標を共有する)</span>",
            "> Make an enthusiastic suggestion <br><span class='jpn-text' style='font-size:0.85rem; color:var(--text-light); font-weight:normal;'>(熱意のある提案をする)</span>"
        ],
        expressions: [
            { 
                category: "1. Asking about goals/desires (目標や願望を尋ねる)", 
                options: [
                    { eng: "What do you want to do next year?", jpn: "来年は何をしたいですか？" }, 
                    { eng: "What do you want to be in the future?", jpn: "将来何になりたいですか？" }, 
                    { eng: "Where would you like to go?", jpn: "どこに行きたいですか？" }
                ] 
            },
            { 
                category: "2. Stating goals/desires (目標や願望を伝える)", 
                options: [
                    { eng: "I want to study abroad.", jpn: "私は留学したいです。" }, 
                    { eng: "I would like to go to Canada.", jpn: "私はカナダに行きたいです。" }, 
                    { eng: "I want to become a doctor.", jpn: "私は医者になりたいです。" }
                ] 
            }
        ],
        grammar: {
            point: "Expressing desires (want to / would like to) - 願望の表現",
            explanation: "We use 'want to' + base verb to talk about our desires, goals, and dreams. 'Would like to' + base verb means exactly the same thing, but it is more polite and formal. It is often used to show a thoughtful or serious dream. <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>（「〜したい」という自分の願望や将来の目標、夢を語る時には、『want to + 動詞の原形』を使います。「want」だけだと「〜が欲しい」という物への欲求になりますが、「to + 動詞」を付けることで「〜する行動がしたい」という意味になります。<br>これと全く同じ意味で、より丁寧で少し大人びた表現が『would like to + 動詞の原形』です。レストランでの注文だけでなく、自分の真剣な夢や将来の計画を誰かに話す時にもよく使われます（「できれば〜したいです」というニュアンス）。I'd like to と短縮できます。）</span>",
            inDialogue: "<strong>Usage in Dialogue:</strong> Notice how A asks casually: 'What do you <u>want to</u> do', but asks about the specific dream more politely: 'Where <u>would you like to</u> go?' <br><span class='jpn-text' style='font-size:0.9rem; color:var(--text-light);'>(会話での使い方：Aが『What do you <u>want to</u> do』とカジュアルに尋ねた後、具体的な夢について『Where <u>would you like to</u> go?』とより丁寧に尋ねていることに注目してください。)</span>",
            examples: [
                { eng: "I want to speak English fluently.", jpn: "私は英語を流暢に話したいです。" },
                { eng: "I would like to become a teacher.", jpn: "私は教師になりたいです。" },
                { eng: "Do you want to travel the world?", jpn: "世界を旅行したいですか？" }
            ]
        },
        grammarPracticeExample: { 
            prompt: "I / want to / learn Spanish", 
            target: "I want to learn Spanish." 
        },
        grammarPractice: [
            { prompt: "I / would like to / visit Europe" },
            { prompt: "She / wants to / find a new job" },
            { prompt: "What / do you / want to / do ?" },
            { prompt: "They / would like to / live abroad" },
            { prompt: "I / want to / become a doctor" }
        ],
        clickingGames: [
            { prompt: "来年は何をしたいですか？", target: "What do you want to do next year?", words: ["What", "do", "you", "want", "to", "do", "next", "year?"] },
            { prompt: "私は留学（海外で勉強）したいです。", target: "I want to study abroad.", words: ["I", "want", "to", "study", "abroad."] },
            { prompt: "どこに行きたいですか？", target: "Where would you like to go?", words: ["Where", "would", "you", "like", "to", "go?"] },
            { prompt: "カナダに行きたいです。", target: "I would like to go to Canada.", words: ["I", "would", "like", "to", "go", "to", "Canada."] },
            { prompt: "私は医者になりたいです。", target: "I want to become a doctor.", words: ["I", "want", "to", "become", "a", "doctor."] }
        ],
        dropdownGames: [
            { before: "I", options: ["want to", "want", "wants to"], answer: "want to", after: " learn how to play the guitar." },
            { before: "Where", options: ["do you want", "want you", "you want"], answer: "do you want", after: " to travel next?" },
            { before: "I", options: ["would like to", "would like", "like to"], answer: "would like to", after: " become a manager in my company." },
            { before: "My sister", options: ["wants to", "want to", "wants"], answer: "wants to", after: " study art in Paris." },
            { before: "What", options: ["would you like", "do you like", "are you like"], answer: "would you like", after: " to do in the future?" }
        ],
        roleplay: {
            a: "Ask your partner what they want to do next year. Ask them what their big dream for the future is. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(パートナーに来年何をしたいか尋ねてください。将来の大きな夢は何か尋ねてください。)</span>",
            b: "Answer using 'I want to...' for next year, and 'I would like to...' for your big dream. <br><span class='jpn-text' style='color:var(--text-light); font-size:0.9rem;'>(来年については『I want to...』を使い、大きな夢については『I would like to...』を使って答えてください。)</span>"
        },
        homework: {
            vocab: [
                { eng: "Future", jpn: "未来 / 将来", exEng: "Think about the future.", exJpn: "将来について考えてください。" },
                { eng: "Goal", jpn: "目標", exEng: "My goal is to win.", exJpn: "私の目標は勝つことです。" },
                { eng: "Dream", jpn: "夢", exEng: "Follow your dreams.", exJpn: "夢を追いかけてください。" },
                { eng: "Become", jpn: "〜になる", exEng: "I want to become a pilot.", exJpn: "私はパイロットになりたいです。" },
                { eng: "Start", jpn: "始める", exEng: "Start a business.", exJpn: "ビジネスを始める。" },
                { eng: "Learn", jpn: "学ぶ", exEng: "Learn a skill.", exJpn: "スキルを学ぶ。" },
                { eng: "Skill", jpn: "スキル / 技術", exEng: "This is a good skill.", exJpn: "これは良いスキルです。" },
                { eng: "Language", jpn: "言語", exEng: "I study languages.", exJpn: "私は言語を勉強します。" },
                { eng: "Abroad", jpn: "海外へ / 海外で", exEng: "Live abroad.", exJpn: "海外に住む。" },
                { eng: "Save money", jpn: "お金を貯める", exEng: "I need to save money.", exJpn: "私はお金を貯める必要があります。" },
                { eng: "House", jpn: "家", exEng: "Buy a house.", exJpn: "家を買う。" },
                { eng: "Family", jpn: "家族", exEng: "Start a family.", exJpn: "家庭を持つ。" },
                { eng: "Important", jpn: "重要な", exEng: "It is important.", exJpn: "それは重要です。" },
                { eng: "Life", jpn: "人生 / 生活", exEng: "Enjoy your life.", exJpn: "人生を楽しんでください。" }
            ],
            reading1: {
                title: "Task 2: Reading (New Year's Resolutions)",
                instruction: "Read the blog post about a person's goals for the new year.",
                eng: "<strong>My Goals for the Future</strong><br><br>This year, I have many big goals. First, I want to learn English. I study every day because I would like to live abroad in the future. Next year, I want to travel to Australia. It is my dream. To do this, I must save money. I want to save $5,000. Also, I would like to start a new job. I want to become a computer programmer. I know it is difficult, but I will work hard. What are your goals for the future?",
                jpn: "<strong>私の将来の目標</strong><br><br>今年は、私にはたくさんの大きな目標があります。まず、英語を学びたいです。将来海外に住みたいと思っているので、毎日勉強しています。来年はオーストラリアに旅行したいです。それが私の夢です。これをするためには、お金を貯めなければなりません。5000ドル貯めたいです。また、新しい仕事を始めたいです。コンピュータープログラマーになりたいのです。難しいこととはわかっていますが、一生懸命頑張るつもりです。あなたの将来の目標は何ですか？"
            },
            expandedDialogue: [
                { speaker: "A", eng: "You study Japanese every day. Why do you study so hard?", jpn: "あなたは毎日日本語を勉強していますね。なぜそんなに一生懸命勉強するのですか？" },
                { speaker: "B", eng: "Because I want to work in Tokyo.", jpn: "東京で働きたいからです。" },
                { speaker: "A", eng: "That is a great goal. What kind of job do you want to do?", jpn: "それは素晴らしい目標ですね。どんな仕事をしたいのですか？" },
                { speaker: "B", eng: "I would like to become an English teacher in Japan. I love teaching.", jpn: "日本で英語の先生になりたいです。教えることが大好きなんです。" },
                { speaker: "A", eng: "I think you will be a great teacher. Good luck!", jpn: "あなたは素晴らしい先生になると思いますよ。頑張って！" }
            ],
            writingTask: {
                promptEng: "Write three sentences about your goals or dreams. Use 'I want to...' for a short-term goal, and 'I would like to...' for a big life dream.",
                promptJpn: "あなたの目標や夢について3つの文を書いてください。短期的な目標には『I want to...』を、人生の大きな夢には『I would like to...』を使用してください。"
            }
        }
    }
];