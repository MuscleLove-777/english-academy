const LEVEL8_DATA = {
    id: 8,
    title: "TOEIC対策 Part5-7",
    icon: "&#128203;",
    description: "TOEICリーディングセクションの攻略法を学ぶ",
    modules: [
        {
            id: 801,
            title: "TOEICリーディング問題攻略法",
            duration: "25分",
            content: "<h2>TOEICリーディングセクションの構成</h2>" +
                "<p>リーディングセクションは<strong>75分間・100問</strong>です。時間配分が最大のポイントであり、多くの受験者がPart 7を最後まで解き切れません。戦略的な時間配分が高スコアへの鍵です。</p>" +
                "<table><thead><tr><th>Part</th><th>形式</th><th>問題数</th><th>理想的な時間配分</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>Part 5</strong></td><td>短文穴埋め</td><td>30問</td><td>10分（1問20秒）</td></tr>" +
                "<tr><td><strong>Part 6</strong></td><td>長文穴埋め</td><td>16問（4セット）</td><td>10分（1セット2.5分）</td></tr>" +
                "<tr><td><strong>Part 7</strong></td><td>読解問題</td><td>54問</td><td>55分</td></tr>" +
                "</tbody></table>" +
                "<h2>Part 5 短文穴埋めの攻略法</h2>" +
                "<p>Part 5は1文の空所に入る適切な語句を4つの選択肢から選ぶ問題です。<strong>文法問題と語彙問題</strong>の2種類に分かれます。</p>" +
                "<h3>文法問題の頻出パターン</h3>" +
                "<table><thead><tr><th>パターン</th><th>見分け方</th><th>解き方</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>品詞問題</strong></td><td>選択肢が同じ語根の異なる品詞</td><td>空所の前後の品詞から判断</td></tr>" +
                "<tr><td><strong>動詞の形</strong></td><td>選択肢が同じ動詞の異なる形</td><td>主語との一致、時制、態を確認</td></tr>" +
                "<tr><td><strong>代名詞</strong></td><td>選択肢が代名詞のバリエーション</td><td>格（主格・目的格・所有格）を確認</td></tr>" +
                "<tr><td><strong>接続詞・前置詞</strong></td><td>選択肢が接続詞や前置詞</td><td>後ろが節か句かで判断</td></tr>" +
                "<tr><td><strong>関係詞</strong></td><td>選択肢がwho/which/thatなど</td><td>先行詞と関係詞節内の役割で判断</td></tr>" +
                "</tbody></table>" +
                "<h3>品詞問題の超速解法</h3>" +
                "<ul>" +
                "<li><strong>空所の前が冠詞（a/an/the）や形容詞</strong> → 名詞が入る</li>" +
                "<li><strong>空所の後が名詞</strong> → 形容詞が入る</li>" +
                "<li><strong>空所の前がbe動詞</strong> → 形容詞 or 過去分詞 or 現在分詞</li>" +
                "<li><strong>空所の位置が動詞を修飾</strong> → 副詞が入る</li>" +
                "</ul>" +
                "<div class='info-box tip'><p><strong>時間管理：</strong>Part 5は1問20秒以内が目標です。5秒で解ける品詞問題もあれば、30秒かかる語彙問題もあります。分からない問題には固執せず、マークして先に進みましょう。</p></div>" +
                "<h2>Part 6 長文穴埋めの攻略法</h2>" +
                "<p>Part 6は文書の中の空所に適切な語句や文を入れる問題です。Part 5と似ていますが、<strong>文脈を理解する必要がある</strong>点が異なります。</p>" +
                "<h3>Part 6の特徴</h3>" +
                "<ul>" +
                "<li>4つの文書それぞれに4問（うち1問は「文挿入問題」）</li>" +
                "<li>文挿入問題は前後の文脈の流れから判断する</li>" +
                "<li>時制の問題は文書全体の時間軸を把握する必要がある</li>" +
                "</ul>" +
                "<h2>Part 7 読解問題の攻略法</h2>" +
                "<p>Part 7は最も配点が高く、最も時間がかかるPartです。<strong>シングルパッセージ（SP）</strong>と<strong>マルチプルパッセージ（DP/TP）</strong>があります。</p>" +
                "<table><thead><tr><th>種類</th><th>文書数</th><th>設問数</th><th>セット数</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>シングルパッセージ</td><td>1つ</td><td>2-4問</td><td>10セット</td></tr>" +
                "<tr><td>ダブルパッセージ</td><td>2つ</td><td>5問</td><td>2セット</td></tr>" +
                "<tr><td>トリプルパッセージ</td><td>3つ</td><td>5問</td><td>3セット</td></tr>" +
                "</tbody></table>" +
                "<h3>Part 7の設問タイプ</h3>" +
                "<ul>" +
                "<li><strong>詳細情報の読み取り</strong>：What / When / Where / Who に関する具体的な情報</li>" +
                "<li><strong>推論問題</strong>：What is suggested / implied about...?</li>" +
                "<li><strong>目的・意図</strong>：What is the purpose of...?</li>" +
                "<li><strong>NOT問題</strong>：What is NOT mentioned...?（消去法で解く）</li>" +
                "<li><strong>同義語問題</strong>：The word \"___\" is closest in meaning to...</li>" +
                "<li><strong>文挿入位置</strong>：In which position does the sentence best fit?</li>" +
                "</ul>" +
                "<div class='info-box warning'><p><strong>重要：</strong>Part 7では「設問を先に読む → 本文から答えを探す」が鉄則です。本文を全て読んでから設問に取りかかると、本文を何度も読み返すことになり時間をロスします。</p></div>",
            quiz: [
                {
                    id: "q801_1",
                    type: "choice",
                    question: "TOEIC Part 5の理想的な1問あたりの解答時間はどれくらいですか？",
                    options: ["10秒", "20秒", "40秒", "60秒"],
                    answer: 1,
                    explanation: "Part 5は1問20秒以内が理想です。30問を10分以内に解くことで、Part 7に十分な時間を確保できます。"
                },
                {
                    id: "q801_2",
                    type: "choice",
                    question: "Part 5で空所の前に冠詞（a/an/the）がある場合、空所に入る品詞は何ですか？",
                    options: ["動詞", "副詞", "名詞", "接続詞"],
                    answer: 2,
                    explanation: "冠詞（a/an/the）の後には名詞が来ます。冠詞と名詞の間に形容詞が入ることもありますが、最終的には名詞が必要です。"
                },
                {
                    id: "q801_3",
                    type: "choice",
                    question: "Part 7の効率的な解き方として正しいものはどれですか？",
                    options: [
                        "本文を全て読んでから設問に取りかかる",
                        "設問を先に読み、本文から答えを探す",
                        "選択肢だけを見て解答する",
                        "最初から順番に全て精読する"
                    ],
                    answer: 1,
                    explanation: "Part 7では「設問を先に読む→本文から答えを探す」が鉄則です。何を探すか分かった状態で本文を読むことで、効率的に正解を見つけられます。"
                }
            ]
        }
    ]
};