const LEVEL11_DATA = {
    id: 11,
    title: "スピーキング力",
    icon: "&#128483;",
    description: "瞬間英作文、ディスカッション、発音矯正",
    modules: [
        {
            id: 1101,
            title: "スピーキング力強化法",
            duration: "20分",
            content: "<h2>スピーキングが苦手な3つの原因</h2>" +
                "<p>多くの日本人英語学習者がスピーキングに苦手意識を持っています。その原因は主に3つあります。</p>" +
                "<ol>" +
                "<li><strong>英作文の瞬発力不足</strong>：頭の中で日本語→英語の変換に時間がかかる</li>" +
                "<li><strong>発音への自信のなさ</strong>：通じるか不安で声が小さくなる</li>" +
                "<li><strong>アウトプット練習の絶対量不足</strong>：インプット偏重の学習歴</li>" +
                "</ol>" +
                "<p>これらは全て<strong>正しい練習法</strong>で克服できます。以下に具体的な方法を解説します。</p>" +
                "<h2>瞬間英作文トレーニング</h2>" +
                "<p>瞬間英作文は、<strong>日本語の文を見て瞬時に英語に変換する</strong>トレーニングです。「知っている英語」を「使える英語」に変えるための最も効果的な方法の一つです。</p>" +
                "<h3>瞬間英作文の3ステップ</h3>" +
                "<ol>" +
                "<li><strong>基礎レベル</strong>：中学英語の文法で瞬間英作文（SVO、時制、受動態など）</li>" +
                "<li><strong>応用レベル</strong>：高校英語の文法で瞬間英作文（関係詞、仮定法、分詞構文など）</li>" +
                "<li><strong>実践レベル</strong>：自分の仕事や生活に関する文を瞬間英作文</li>" +
                "</ol>" +
                "<h3>練習例</h3>" +
                "<table><thead><tr><th>日本語</th><th>英語</th><th>ポイント</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>私は毎朝7時に起きます。</td><td>I get up at seven every morning.</td><td>現在形・習慣</td></tr>" +
                "<tr><td>昨日の会議で何が決まりましたか？</td><td>What was decided at yesterday's meeting?</td><td>受動態・過去形</td></tr>" +
                "<tr><td>もし時間があれば、手伝いますよ。</td><td>If I have time, I'll help you.</td><td>条件文</td></tr>" +
                "<tr><td>彼女が書いた報告書を読みました。</td><td>I read the report that she wrote.</td><td>関係代名詞</td></tr>" +
                "<tr><td>この件について検討していただけますか？</td><td>Could you consider this matter?</td><td>丁寧な依頼</td></tr>" +
                "</tbody></table>" +
                "<h2>英語の発音矯正 - 日本人が苦手な音</h2>" +
                "<p>日本人が英語の発音で特に苦労するポイントを整理します。<strong>完璧な発音は不要</strong>ですが、通じる発音を身につけることは重要です。</p>" +
                "<table><thead><tr><th>音</th><th>日本語にない音</th><th>練習のコツ</th><th>例</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>L と R</strong></td><td>Lは舌先を上歯茎に、Rは舌を巻く</td><td>light/right, lead/read で練習</td><td>really, world</td></tr>" +
                "<tr><td><strong>TH</strong></td><td>舌を上下の歯の間に挟む</td><td>think（無声）/ this（有声）</td><td>three, the, that</td></tr>" +
                "<tr><td><strong>V と B</strong></td><td>Vは下唇を噛む</td><td>very/berry で練習</td><td>value, variety</td></tr>" +
                "<tr><td><strong>F</strong></td><td>下唇に上の歯を当てる</td><td>Hとの区別を意識</td><td>first, office</td></tr>" +
                "<tr><td><strong>母音の長短</strong></td><td>sit/seat, bit/beat の違い</td><td>短母音をしっかり短く</td><td>ship/sheep</td></tr>" +
                "</tbody></table>" +
                "<h2>ディスカッションで使えるフレーズ</h2>" +
                "<p>英語でのディスカッションは、<strong>自分の意見を論理的に述べる力</strong>が求められます。PREP法（Point → Reason → Example → Point）を意識しましょう。</p>" +
                "<table><thead><tr><th>機能</th><th>フレーズ</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>意見を述べる</strong></td><td>I think... / In my view... / I'd say that...</td></tr>" +
                "<tr><td><strong>理由を述べる</strong></td><td>The reason is that... / This is because...</td></tr>" +
                "<tr><td><strong>例を挙げる</strong></td><td>For instance... / A good example would be...</td></tr>" +
                "<tr><td><strong>賛成する</strong></td><td>I totally agree. / That makes sense.</td></tr>" +
                "<tr><td><strong>部分的に賛成</strong></td><td>I agree to some extent, but... / That's partly true, however...</td></tr>" +
                "<tr><td><strong>反論する</strong></td><td>I see what you mean, but... / That's one way to look at it, but...</td></tr>" +
                "<tr><td><strong>話題を変える</strong></td><td>On a different note... / Speaking of which...</td></tr>" +
                "<tr><td><strong>まとめる</strong></td><td>To sum up... / All in all...</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>スピーキング上達の秘訣：</strong>毎日10分でいいので「独り言英語」を実践しましょう。今やっていること、考えていることを英語で口に出す習慣をつけると、英作文の瞬発力が劇的に向上します。</p></div>" +
                "<div class='info-box warning'><p><strong>完璧主義を捨てる：</strong>文法ミスを恐れて話せないより、多少間違えても話す方がはるかに成長します。ネイティブも文法ミスをしています。まずは「通じる英語」を目指しましょう。</p></div>",
            quiz: [
                {
                    id: "q1101_1",
                    type: "choice",
                    question: "瞬間英作文トレーニングの目的として最も適切なものはどれですか？",
                    options: [
                        "英文法の知識を増やす",
                        "「知っている英語」を「使える英語」に変える",
                        "語彙力を増やす",
                        "リスニング力を向上させる"
                    ],
                    answer: 1,
                    explanation: "瞬間英作文の最大の目的は、頭で分かっている文法知識を、瞬時にアウトプットできる「使える知識」に変換することです。"
                },
                {
                    id: "q1101_2",
                    type: "choice",
                    question: "英語の「L」の発音で正しい舌の位置はどれですか？",
                    options: ["舌を巻く", "舌先を上歯茎につける", "舌を上下の歯の間に挟む", "下唇を上の歯に当てる"],
                    answer: 1,
                    explanation: "Lの音は舌先を上の歯茎（歯の裏の少し上）につけて発音します。Rは舌を巻く（どこにも触れない）点が異なります。"
                },
                {
                    id: "q1101_3",
                    type: "choice",
                    question: "ディスカッションで意見を述べる際に推奨される論理構成はどれですか？",
                    options: ["起承転結", "PREP法（Point-Reason-Example-Point）", "序論-本論-結論", "時系列順"],
                    answer: 1,
                    explanation: "PREP法は結論（Point）→理由（Reason）→具体例（Example）→結論（Point）の順で話す方法で、英語のディスカッションで最も効果的な論理構成です。"
                }
            ]
        }
    ]
};