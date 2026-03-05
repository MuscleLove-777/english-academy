const LEVEL3_DATA = {
    id: 3,
    title: "基本文法②",
    icon: "&#128214;",
    description: "関係代名詞、仮定法、分詞構文をマスターする",
    modules: [
        {
            id: 301,
            title: "関係代名詞・仮定法・分詞構文",
            duration: "20分",
            content: "<h2>関係代名詞 - 文をつなげて情報を追加する</h2>" +
                "<p>関係代名詞は、<strong>2つの文を1つにつなぐ</strong>接着剤のような役割を果たします。先行詞（修飾される名詞）の種類によって使い分けます。</p>" +
                "<table><thead><tr><th>関係代名詞</th><th>先行詞</th><th>役割</th><th>例文</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>who</strong></td><td>人</td><td>主語</td><td>The man <strong>who</strong> called you is my boss.</td></tr>" +
                "<tr><td><strong>whom</strong></td><td>人</td><td>目的語</td><td>The person <strong>whom</strong> I met was kind.</td></tr>" +
                "<tr><td><strong>which</strong></td><td>物・事</td><td>主語・目的語</td><td>The book <strong>which</strong> I bought is interesting.</td></tr>" +
                "<tr><td><strong>that</strong></td><td>人・物</td><td>主語・目的語</td><td>This is the best movie <strong>that</strong> I have ever seen.</td></tr>" +
                "<tr><td><strong>whose</strong></td><td>人・物</td><td>所有格</td><td>The woman <strong>whose</strong> bag was stolen called the police.</td></tr>" +
                "</tbody></table>" +
                "<h3>制限用法と非制限用法</h3>" +
                "<p>関係代名詞にはカンマの有無で意味が変わる2つの用法があります。</p>" +
                "<ul>" +
                "<li><strong>制限用法（カンマなし）</strong>：先行詞を特定する → I have a friend <strong>who lives in London.</strong>（ロンドンに住んでいる友人がいる）</li>" +
                "<li><strong>非制限用法（カンマあり）</strong>：補足情報を追加する → My brother<strong>, who lives in London,</strong> is a doctor.（兄はロンドンに住んでいるが、医者だ）</li>" +
                "</ul>" +
                "<h2>仮定法 - 現実と異なることを表現する</h2>" +
                "<p>仮定法は<strong>現実ではないこと、実現の可能性が低いこと</strong>を表現する文法です。日本語の「もし～だったら」に相当しますが、英語では時制をずらすことで仮定の意味を表します。</p>" +
                "<table><thead><tr><th>種類</th><th>構文</th><th>例文</th><th>意味</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>仮定法過去</strong></td><td>If + S + 過去形, S + would/could + V</td><td>If I were rich, I would travel the world.</td><td>もしお金持ちなら（実際は違う）</td></tr>" +
                "<tr><td><strong>仮定法過去完了</strong></td><td>If + S + had p.p., S + would have + p.p.</td><td>If I had studied harder, I would have passed.</td><td>もっと勉強していたら（実際はしなかった）</td></tr>" +
                "<tr><td><strong>混合仮定法</strong></td><td>If + S + had p.p., S + would + V</td><td>If I had taken that job, I would be in Tokyo now.</td><td>あの仕事を受けていたら、今東京にいるだろう</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>ポイント：</strong>仮定法過去では、be動詞は主語に関わらず <strong>were</strong> を使うのが正式です（If I were...）。口語では was も使われますが、TOEIC・英検ではwereが正解とされます。</p></div>" +
                "<h2>分詞構文 - 文を簡潔にする上級テクニック</h2>" +
                "<p>分詞構文は、<strong>接続詞と主語を省略して文を簡潔にする</strong>表現技法です。書き言葉やフォーマルな場面でよく使われます。</p>" +
                "<table><thead><tr><th>元の文</th><th>分詞構文</th><th>意味</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>Because I was tired, I went to bed early.</td><td><strong>Being tired</strong>, I went to bed early.</td><td>理由（～なので）</td></tr>" +
                "<tr><td>When I walked along the street, I found a cafe.</td><td><strong>Walking along the street</strong>, I found a cafe.</td><td>時（～しているとき）</td></tr>" +
                "<tr><td>After I finished lunch, I went back to work.</td><td><strong>Having finished lunch</strong>, I went back to work.</td><td>完了（～した後で）</td></tr>" +
                "<tr><td>If it is seen from above, the island looks like a heart.</td><td><strong>Seen from above</strong>, the island looks like a heart.</td><td>条件（～されると）</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box warning'><p><strong>注意：</strong>分詞構文では、分詞の意味上の主語と主節の主語が一致している必要があります。一致していない場合は「独立分詞構文」（Weather permitting, we will go hiking.）となります。</p></div>",
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "「The book which I bought is interesting.」における which の先行詞はどれですか？",
                    options: ["I", "bought", "The book", "interesting"],
                    answer: 2,
                    explanation: "which の先行詞は「The book」（物）です。関係代名詞 which は物や事を先行詞に取ります。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "仮定法過去の文として正しいものはどれですか？",
                    options: [
                        "If I am rich, I will travel the world.",
                        "If I were rich, I would travel the world.",
                        "If I had been rich, I would have traveled the world.",
                        "If I will be rich, I would travel the world."
                    ],
                    answer: 1,
                    explanation: "仮定法過去は「If + S + 過去形, S + would + V」の形です。現在の事実に反する仮定を表します。be動詞はwereを使います。"
                },
                {
                    id: "q301_3",
                    type: "choice",
                    question: "分詞構文「Being tired, I went to bed early.」の分詞構文が表す意味はどれですか？",
                    options: ["時（～のとき）", "理由（～なので）", "条件（～すれば）", "譲歩（～だけれど）"],
                    answer: 1,
                    explanation: "この分詞構文は Because I was tired の接続詞と主語を省略したもので、理由（～なので）を表しています。"
                }
            ]
        }
    ]
};