const LEVEL4_DATA = {
    id: 4,
    title: "語彙力強化",
    icon: "&#128209;",
    description: "接頭辞・接尾辞、語根、ビジネス頻出語彙を身につける",
    modules: [
        {
            id: 401,
            title: "語彙力強化戦略",
            duration: "20分",
            content: "<h2>語彙力は英語力の土台</h2>" +
                "<p>語彙力はリーディング、リスニング、スピーキング、ライティング全ての技能に直結します。研究によると、<strong>英語のネイティブスピーカーは約20,000〜35,000語</strong>を知っていますが、日常会話では約3,000語、ビジネスでは約5,000〜8,000語で大部分をカバーできます。効率的に語彙を増やす戦略を学びましょう。</p>" +
                "<h2>接頭辞（Prefix）で語彙を一気に拡張</h2>" +
                "<p>接頭辞は単語の先頭に付く部分で、<strong>意味を変化</strong>させます。主要な接頭辞を覚えるだけで、未知の単語の意味を推測できるようになります。</p>" +
                "<table><thead><tr><th>接頭辞</th><th>意味</th><th>例</th><th>意味</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>un-</strong></td><td>〜でない（否定）</td><td>unhappy, unlikely</td><td>不幸な、ありそうもない</td></tr>" +
                "<tr><td><strong>re-</strong></td><td>再び</td><td>review, return</td><td>見直す、戻る</td></tr>" +
                "<tr><td><strong>pre-</strong></td><td>〜の前に</td><td>preview, predict</td><td>予告、予測する</td></tr>" +
                "<tr><td><strong>post-</strong></td><td>〜の後に</td><td>postpone, postwar</td><td>延期する、戦後の</td></tr>" +
                "<tr><td><strong>mis-</strong></td><td>誤って</td><td>mistake, misunderstand</td><td>間違い、誤解する</td></tr>" +
                "<tr><td><strong>over-</strong></td><td>過度に</td><td>overwork, overcome</td><td>働き過ぎ、克服する</td></tr>" +
                "<tr><td><strong>inter-</strong></td><td>〜の間に</td><td>international, interview</td><td>国際的な、面接</td></tr>" +
                "<tr><td><strong>dis-</strong></td><td>〜でない（否定）</td><td>disagree, disappear</td><td>反対する、消える</td></tr>" +
                "</tbody></table>" +
                "<h2>接尾辞（Suffix）で品詞を変換する</h2>" +
                "<p>接尾辞は単語の末尾に付く部分で、主に<strong>品詞を変化</strong>させます。接尾辞を知ることで、1つの語根から名詞・動詞・形容詞・副詞を作れるようになります。</p>" +
                "<table><thead><tr><th>接尾辞</th><th>品詞</th><th>例</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>-tion / -sion</strong></td><td>名詞</td><td>education, decision</td></tr>" +
                "<tr><td><strong>-ment</strong></td><td>名詞</td><td>management, development</td></tr>" +
                "<tr><td><strong>-ness</strong></td><td>名詞</td><td>happiness, business</td></tr>" +
                "<tr><td><strong>-able / -ible</strong></td><td>形容詞</td><td>available, possible</td></tr>" +
                "<tr><td><strong>-ful</strong></td><td>形容詞</td><td>helpful, successful</td></tr>" +
                "<tr><td><strong>-less</strong></td><td>形容詞（〜がない）</td><td>careless, homeless</td></tr>" +
                "<tr><td><strong>-ly</strong></td><td>副詞</td><td>quickly, carefully</td></tr>" +
                "<tr><td><strong>-ize / -ise</strong></td><td>動詞</td><td>organize, realize</td></tr>" +
                "</tbody></table>" +
                "<h2>語根（Root）で語彙のネットワークを作る</h2>" +
                "<p>語根はラテン語やギリシャ語に由来する単語の核となる部分です。語根を知ると、関連語彙を芋づる式に覚えられます。</p>" +
                "<table><thead><tr><th>語根</th><th>意味</th><th>派生語</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>duct / duc</strong></td><td>導く</td><td>conduct, produce, introduce, reduce</td></tr>" +
                "<tr><td><strong>port</strong></td><td>運ぶ</td><td>import, export, transport, report</td></tr>" +
                "<tr><td><strong>spect</strong></td><td>見る</td><td>inspect, respect, prospect, spectator</td></tr>" +
                "<tr><td><strong>struct</strong></td><td>建てる</td><td>structure, construct, instruct, destroy</td></tr>" +
                "<tr><td><strong>ject</strong></td><td>投げる</td><td>project, reject, inject, subject</td></tr>" +
                "</tbody></table>" +
                "<h2>ビジネス頻出語彙 TOP 20</h2>" +
                "<table><thead><tr><th>単語</th><th>意味</th><th>例文</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>implement</td><td>実施する</td><td>We will implement the new policy next month.</td></tr>" +
                "<tr><td>allocate</td><td>割り当てる</td><td>We need to allocate more resources.</td></tr>" +
                "<tr><td>comply</td><td>遵守する</td><td>All employees must comply with the regulations.</td></tr>" +
                "<tr><td>enhance</td><td>向上させる</td><td>This tool will enhance productivity.</td></tr>" +
                "<tr><td>facilitate</td><td>促進する</td><td>The manager will facilitate the discussion.</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>学習のコツ：</strong>新しい単語を覚える際は、接頭辞＋語根＋接尾辞に分解してから覚えましょう。例: international = inter（間）+ nation（国）+ al（形容詞化）= 国際的な</p></div>",
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "接頭辞「re-」の意味として正しいものはどれですか？",
                    options: ["〜でない（否定）", "再び", "〜の前に", "過度に"],
                    answer: 1,
                    explanation: "re- は「再び」という意味の接頭辞です。review（見直す）、return（戻る）、rebuild（再建する）など多くの単語に使われます。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "接尾辞「-ness」が付いた単語の品詞はどれですか？",
                    options: ["動詞", "形容詞", "名詞", "副詞"],
                    answer: 2,
                    explanation: "-ness は形容詞を名詞に変える接尾辞です。happy → happiness、kind → kindness のように使います。"
                },
                {
                    id: "q401_3",
                    type: "choice",
                    question: "語根「port」の意味はどれですか？",
                    options: ["見る", "運ぶ", "導く", "建てる"],
                    answer: 1,
                    explanation: "port は「運ぶ」という意味の語根です。import（輸入する＝中に運ぶ）、export（輸出する＝外に運ぶ）、transport（輸送する）などに含まれます。"
                }
            ]
        }
    ]
};