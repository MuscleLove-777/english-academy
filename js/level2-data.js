const LEVEL2_DATA = {
    id: 2,
    title: "基本文法①",
    icon: "&#128221;",
    description: "五文型、時制、助動詞の基礎を固める",
    modules: [
        {
            id: 201,
            title: "五文型・時制・助動詞",
            duration: "20分",
            content: "<h2>英語の五文型 - 全ての英文の骨格</h2>" +
                "<p>英語の文はすべて<strong>5つの文型</strong>のいずれかに分類できます。文型を理解することは、英語の構造を根本から理解することに等しく、リーディング・ライティング・スピーキング全てのスキルの土台となります。</p>" +
                "<table><thead><tr><th>文型</th><th>構造</th><th>例文</th><th>日本語訳</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>第1文型</strong></td><td>S + V</td><td>Birds fly.</td><td>鳥は飛ぶ。</td></tr>" +
                "<tr><td><strong>第2文型</strong></td><td>S + V + C</td><td>She is a doctor.</td><td>彼女は医者だ。</td></tr>" +
                "<tr><td><strong>第3文型</strong></td><td>S + V + O</td><td>I study English.</td><td>私は英語を勉強する。</td></tr>" +
                "<tr><td><strong>第4文型</strong></td><td>S + V + O + O</td><td>He gave me a book.</td><td>彼は私に本をくれた。</td></tr>" +
                "<tr><td><strong>第5文型</strong></td><td>S + V + O + C</td><td>They made her happy.</td><td>彼らは彼女を幸せにした。</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>S = Subject（主語）、V = Verb（動詞）、O = Object（目的語）、C = Complement（補語）</strong></p></div>" +
                "<h2>英語の時制 - 12の時制を整理する</h2>" +
                "<p>英語には<strong>12の時制</strong>があります。これは「現在・過去・未来」の3つの時間軸と、「単純・進行・完了・完了進行」の4つのアスペクトの組み合わせです。</p>" +
                "<table><thead><tr><th>時制</th><th>形</th><th>例文</th><th>用法</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>現在形</td><td>V / V-s</td><td>I work every day.</td><td>習慣・事実</td></tr>" +
                "<tr><td>現在進行形</td><td>am/is/are + V-ing</td><td>I am working now.</td><td>今進行中の動作</td></tr>" +
                "<tr><td>現在完了形</td><td>have/has + p.p.</td><td>I have finished the report.</td><td>完了・経験・継続</td></tr>" +
                "<tr><td>現在完了進行形</td><td>have/has been + V-ing</td><td>I have been studying for 3 hours.</td><td>継続中の動作を強調</td></tr>" +
                "<tr><td>過去形</td><td>V-ed / 不規則</td><td>I worked yesterday.</td><td>過去の事実・動作</td></tr>" +
                "<tr><td>過去進行形</td><td>was/were + V-ing</td><td>I was working at 9pm.</td><td>過去のある時点で進行中</td></tr>" +
                "<tr><td>過去完了形</td><td>had + p.p.</td><td>I had already left.</td><td>過去のある時点より前の完了</td></tr>" +
                "<tr><td>過去完了進行形</td><td>had been + V-ing</td><td>I had been waiting for an hour.</td><td>過去の時点まで継続していた動作</td></tr>" +
                "<tr><td>未来形</td><td>will + V</td><td>I will call you tomorrow.</td><td>未来の意志・予測</td></tr>" +
                "<tr><td>未来進行形</td><td>will be + V-ing</td><td>I will be traveling next week.</td><td>未来のある時点で進行中</td></tr>" +
                "<tr><td>未来完了形</td><td>will have + p.p.</td><td>I will have finished by Friday.</td><td>未来のある時点までの完了</td></tr>" +
                "<tr><td>未来完了進行形</td><td>will have been + V-ing</td><td>I will have been working for 10 years.</td><td>未来の時点まで継続</td></tr>" +
                "</tbody></table>" +
                "<h2>助動詞 - ニュアンスを表現する</h2>" +
                "<p>助動詞は動詞の前に置かれ、<strong>話者の気持ちや判断</strong>を加えます。ビジネスや日常会話で適切な助動詞を使い分けることが、自然な英語表現の鍵です。</p>" +
                "<table><thead><tr><th>助動詞</th><th>主な意味</th><th>例文</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>can</strong></td><td>能力・許可・可能性</td><td>I can speak English.</td></tr>" +
                "<tr><td><strong>could</strong></td><td>canの過去・丁寧な依頼</td><td>Could you help me?</td></tr>" +
                "<tr><td><strong>may</strong></td><td>許可・推量（～かもしれない）</td><td>It may rain tomorrow.</td></tr>" +
                "<tr><td><strong>might</strong></td><td>弱い推量</td><td>He might come later.</td></tr>" +
                "<tr><td><strong>must</strong></td><td>義務・強い推量</td><td>You must submit by Friday.</td></tr>" +
                "<tr><td><strong>should</strong></td><td>助言・義務（～すべき）</td><td>You should take a rest.</td></tr>" +
                "<tr><td><strong>would</strong></td><td>丁寧な依頼・仮定</td><td>Would you like some coffee?</td></tr>" +
                "<tr><td><strong>shall</strong></td><td>提案・規則</td><td>Shall we begin?</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box warning'><p><strong>注意：</strong>must と have to はほぼ同義ですが、must は話者自身の判断、have to は外的な義務やルールを表すことが多いです。ビジネスメールでは have to がより一般的に使われます。</p></div>",
            quiz: [
                {
                    id: "q201_1",
                    type: "choice",
                    question: "「He gave me a book.」は第何文型ですか？",
                    options: ["第2文型（SVC）", "第3文型（SVO）", "第4文型（SVOO）", "第5文型（SVOC）"],
                    answer: 2,
                    explanation: "「He(S) gave(V) me(O) a book(O)」で、動詞の後に目的語が2つあるため第4文型（SVOO）です。"
                },
                {
                    id: "q201_2",
                    type: "choice",
                    question: "「I have been studying for 3 hours.」の時制はどれですか？",
                    options: ["現在完了形", "現在進行形", "現在完了進行形", "過去完了進行形"],
                    answer: 2,
                    explanation: "have been + V-ingの形は現在完了進行形で、現在まで継続中の動作を強調して表現します。"
                },
                {
                    id: "q201_3",
                    type: "choice",
                    question: "丁寧に依頼する場面で最も適切な助動詞はどれですか？",
                    options: ["must", "can", "could / would", "shall"],
                    answer: 2,
                    explanation: "could や would は丁寧な依頼を表す助動詞です。ビジネスの場面では Could you...? / Would you...? が適切です。"
                }
            ]
        }
    ]
};