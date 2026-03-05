const LEVEL10_DATA = {
    id: 10,
    title: "ビジネス英語②",
    icon: "&#128200;",
    description: "プレゼン、交渉、報告書の英語をマスター",
    modules: [
        {
            id: 1001,
            title: "プレゼン・交渉・報告書の英語",
            duration: "25分",
            content: "<h2>英語プレゼンテーションの構成</h2>" +
                "<p>英語のプレゼンテーションは<strong>Introduction → Body → Conclusion</strong>の3部構成が基本です。日本語のプレゼンと異なり、<strong>最初に結論を述べ、根拠を後から示す</strong>のが英語圏のスタイルです。</p>" +
                "<h3>Introduction（導入）のフレーズ</h3>" +
                "<table><thead><tr><th>場面</th><th>フレーズ</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>挨拶・自己紹介</strong></td><td>Good morning, everyone. My name is [名前] from [部署].</td></tr>" +
                "<tr><td><strong>テーマ提示</strong></td><td>Today, I'd like to talk about... / The topic of my presentation is...</td></tr>" +
                "<tr><td><strong>目的の明示</strong></td><td>The purpose of this presentation is to...</td></tr>" +
                "<tr><td><strong>構成の説明</strong></td><td>I've divided my presentation into three parts.</td></tr>" +
                "<tr><td><strong>時間の目安</strong></td><td>This should take about 20 minutes.</td></tr>" +
                "<tr><td><strong>質問について</strong></td><td>Please feel free to ask questions at any time. / I'll take questions at the end.</td></tr>" +
                "</tbody></table>" +
                "<h3>Body（本論）のフレーズ</h3>" +
                "<table><thead><tr><th>場面</th><th>フレーズ</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>セクション移行</strong></td><td>Let's move on to... / Now I'd like to turn to...</td></tr>" +
                "<tr><td><strong>データ提示</strong></td><td>As you can see from this chart... / This graph shows that...</td></tr>" +
                "<tr><td><strong>具体例</strong></td><td>For example... / To illustrate this point...</td></tr>" +
                "<tr><td><strong>強調</strong></td><td>I'd like to emphasize that... / The key takeaway is...</td></tr>" +
                "<tr><td><strong>比較</strong></td><td>Compared to last year... / In contrast to...</td></tr>" +
                "</tbody></table>" +
                "<h3>Conclusion（結論）のフレーズ</h3>" +
                "<ul>" +
                "<li><strong>まとめ</strong>：To summarize the main points... / In conclusion...</li>" +
                "<li><strong>次のステップ</strong>：Going forward, we plan to... / Our next step is to...</li>" +
                "<li><strong>質疑応答</strong>：Are there any questions? / I'd be happy to answer any questions.</li>" +
                "<li><strong>感謝</strong>：Thank you for your attention. / Thank you for your time today.</li>" +
                "</ul>" +
                "<h2>交渉（Negotiation）の英語</h2>" +
                "<p>ビジネス交渉では、<strong>Win-Winの関係を築く</strong>ための表現が重要です。攻撃的な表現は避け、建設的な対話を心がけましょう。</p>" +
                "<table><thead><tr><th>場面</th><th>フレーズ</th><th>日本語</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>提案する</strong></td><td>What if we...? / How about...?</td><td>〜はいかがでしょうか？</td></tr>" +
                "<tr><td><strong>条件を出す</strong></td><td>We would be willing to... if you could...</td><td>もし〜なら、〜する用意があります</td></tr>" +
                "<tr><td><strong>妥協する</strong></td><td>We could meet you halfway on...</td><td>〜については歩み寄れます</td></tr>" +
                "<tr><td><strong>断る</strong></td><td>I'm afraid that's not possible at this time.</td><td>申し訳ありませんが、現時点では難しいです</td></tr>" +
                "<tr><td><strong>確認する</strong></td><td>Just to make sure we're on the same page...</td><td>認識を合わせるために確認ですが</td></tr>" +
                "<tr><td><strong>合意する</strong></td><td>I think we have a deal. / We're in agreement.</td><td>合意に達したと思います</td></tr>" +
                "</tbody></table>" +
                "<h2>報告書（Report）の英語</h2>" +
                "<p>英語の報告書はビジネス文書の中でも最も<strong>論理的で客観的な表現</strong>が求められます。</p>" +
                "<h3>報告書の基本構成</h3>" +
                "<table><thead><tr><th>セクション</th><th>内容</th><th>定番フレーズ</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>Executive Summary</strong></td><td>要約（結論を先に）</td><td>This report examines... The key findings are...</td></tr>" +
                "<tr><td><strong>Introduction</strong></td><td>背景・目的</td><td>The purpose of this report is to... / This report was commissioned to...</td></tr>" +
                "<tr><td><strong>Findings</strong></td><td>調査結果</td><td>The data indicates that... / It was found that...</td></tr>" +
                "<tr><td><strong>Analysis</strong></td><td>分析</td><td>This suggests that... / A possible explanation is...</td></tr>" +
                "<tr><td><strong>Recommendations</strong></td><td>提言</td><td>It is recommended that... / We suggest...</td></tr>" +
                "<tr><td><strong>Conclusion</strong></td><td>結論</td><td>In conclusion... / Based on the findings...</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>報告書のコツ：</strong>受動態（was found, is recommended）を適切に使うことで客観性が増します。また、数値やデータは具体的に記述し、「many」「some」などの曖昧な表現は避けましょう。</p></div>" +
                "<div class='info-box success'><p><strong>プレゼンの黄金ルール：</strong>「Tell them what you're going to tell them（これから話すことを伝え）→ Tell them（話し）→ Tell them what you told them（話したことをまとめる）」。この3段階構成がプレゼン成功の鍵です。</p></div>",
            quiz: [
                {
                    id: "q1001_1",
                    type: "choice",
                    question: "英語のプレゼンテーションで最初に述べるべきことはどれですか？",
                    options: ["詳細なデータ", "結論と目的", "自分の経歴", "質問への回答"],
                    answer: 1,
                    explanation: "英語圏のプレゼンでは最初に結論や目的を述べます。聴衆がプレゼンの方向性を理解した上で、詳細な内容を聞く方が効果的です。"
                },
                {
                    id: "q1001_2",
                    type: "choice",
                    question: "交渉で妥協案を提示する際の適切なフレーズはどれですか？",
                    options: [
                        "You have to accept this.",
                        "Take it or leave it.",
                        "We could meet you halfway on this.",
                        "This is our final offer."
                    ],
                    answer: 2,
                    explanation: "「We could meet you halfway on this.」は「この件については歩み寄れます」という妥協を示す建設的な表現です。Win-Winの関係を築くために重要なフレーズです。"
                },
                {
                    id: "q1001_3",
                    type: "choice",
                    question: "報告書で客観性を高めるために適切な文法的技法はどれですか？",
                    options: ["命令文を使う", "感嘆文を使う", "受動態を使う", "口語表現を使う"],
                    answer: 2,
                    explanation: "受動態（It was found that... / It is recommended that...）を使うことで、主観を排除し客観的な記述ができます。報告書にふさわしい格式の高い表現になります。"
                }
            ]
        }
    ]
};