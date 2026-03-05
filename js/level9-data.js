const LEVEL9_DATA = {
    id: 9,
    title: "ビジネス英語①",
    icon: "&#128188;",
    description: "メール、電話、会議の定番フレーズをマスター",
    modules: [
        {
            id: 901,
            title: "ビジネスメール・電話・会議の英語",
            duration: "20分",
            content: "<h2>ビジネスメールの基本構成</h2>" +
                "<p>ビジネスメールは<strong>簡潔・丁寧・明確</strong>が三原則です。日本語のメールとは構成が異なります。英語メールは結論を先に述べ、詳細を後から補足するのが基本です。</p>" +
                "<h3>メールの基本構成</h3>" +
                "<table><thead><tr><th>要素</th><th>内容</th><th>例</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>Subject Line</strong></td><td>件名（具体的に）</td><td>Meeting Request: Q3 Budget Review</td></tr>" +
                "<tr><td><strong>Greeting</strong></td><td>挨拶</td><td>Dear Mr. Smith, / Hi John,</td></tr>" +
                "<tr><td><strong>Opening</strong></td><td>目的の明示</td><td>I am writing to inquire about...</td></tr>" +
                "<tr><td><strong>Body</strong></td><td>本文（詳細）</td><td>（具体的な内容）</td></tr>" +
                "<tr><td><strong>Closing</strong></td><td>結びの言葉</td><td>I look forward to hearing from you.</td></tr>" +
                "<tr><td><strong>Sign-off</strong></td><td>締めの挨拶</td><td>Best regards, / Sincerely,</td></tr>" +
                "</tbody></table>" +
                "<h3>メールの定番フレーズ集</h3>" +
                "<table><thead><tr><th>場面</th><th>フレーズ</th><th>日本語</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>依頼</td><td>Could you please send me the report?</td><td>レポートを送っていただけますか？</td></tr>" +
                "<tr><td>依頼</td><td>I would appreciate it if you could...</td><td>〜していただけると幸いです</td></tr>" +
                "<tr><td>確認</td><td>I am writing to confirm that...</td><td>〜を確認するためにご連絡しています</td></tr>" +
                "<tr><td>謝罪</td><td>I apologize for the inconvenience.</td><td>ご不便をおかけして申し訳ございません</td></tr>" +
                "<tr><td>添付</td><td>Please find attached the document.</td><td>書類を添付しております</td></tr>" +
                "<tr><td>返信催促</td><td>I would appreciate a prompt reply.</td><td>早めのご返信をいただければ幸いです</td></tr>" +
                "</tbody></table>" +
                "<h2>電話対応の定番フレーズ</h2>" +
                "<p>ビジネスの電話対応は、<strong>定型フレーズを覚えておくだけ</strong>でスムーズに対応できます。</p>" +
                "<table><thead><tr><th>場面</th><th>フレーズ</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>電話を受ける</strong></td><td>Thank you for calling [会社名]. How may I help you?</td></tr>" +
                "<tr><td><strong>自己紹介</strong></td><td>This is [名前] from [部署名].</td></tr>" +
                "<tr><td><strong>取り次ぎ</strong></td><td>I'll put you through to [名前]. / Let me transfer your call.</td></tr>" +
                "<tr><td><strong>不在を伝える</strong></td><td>I'm afraid [名前] is not available at the moment.</td></tr>" +
                "<tr><td><strong>伝言を受ける</strong></td><td>Would you like to leave a message?</td></tr>" +
                "<tr><td><strong>聞き返す</strong></td><td>Could you repeat that, please? / I'm sorry, I didn't catch that.</td></tr>" +
                "<tr><td><strong>電話をかける</strong></td><td>I'm calling regarding [用件].</td></tr>" +
                "</tbody></table>" +
                "<h2>会議で使う英語フレーズ</h2>" +
                "<p>英語での会議は、<strong>発言のタイミングを掴むこと</strong>と<strong>適切なフレーズを使うこと</strong>がポイントです。</p>" +
                "<table><thead><tr><th>場面</th><th>フレーズ</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>会議の開始</strong></td><td>Let's get started. / Shall we begin?</td></tr>" +
                "<tr><td><strong>議題の提示</strong></td><td>Today's agenda is... / The purpose of this meeting is...</td></tr>" +
                "<tr><td><strong>意見を述べる</strong></td><td>In my opinion... / I believe that... / From my perspective...</td></tr>" +
                "<tr><td><strong>同意する</strong></td><td>I agree with [名前]. / That's a good point.</td></tr>" +
                "<tr><td><strong>反対する</strong></td><td>I see your point, but... / I'm not sure I agree because...</td></tr>" +
                "<tr><td><strong>質問する</strong></td><td>Could you elaborate on that? / What do you mean by...?</td></tr>" +
                "<tr><td><strong>確認する</strong></td><td>Just to clarify, are you saying that...?</td></tr>" +
                "<tr><td><strong>まとめる</strong></td><td>To summarize... / In conclusion...</td></tr>" +
                "<tr><td><strong>次のステップ</strong></td><td>The next step is... / The action items are...</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>ポイント：</strong>ビジネス英語では直接的な表現よりも、クッション言葉を使った間接的な表現が好まれます。「I think we should...」より「It might be worth considering...」の方が丁寧です。</p></div>" +
                "<div class='info-box warning'><p><strong>文化の違い：</strong>日本のビジネスでは沈黙は「考えている」「同意している」と解釈されることがありますが、英語の会議では沈黙は「意見がない」「関心がない」と取られることがあります。積極的に発言しましょう。</p></div>",
            quiz: [
                {
                    id: "q901_1",
                    type: "choice",
                    question: "ビジネスメールで依頼する際に最も丁寧な表現はどれですか？",
                    options: [
                        "Send me the report.",
                        "Please send me the report.",
                        "I would appreciate it if you could send me the report.",
                        "You should send me the report."
                    ],
                    answer: 2,
                    explanation: "「I would appreciate it if you could...」は最も丁寧な依頼表現です。仮定法を使うことで、相手への配慮を示しています。"
                },
                {
                    id: "q901_2",
                    type: "choice",
                    question: "電話で相手の言葉が聞き取れなかった場合の適切な表現はどれですか？",
                    options: [
                        "What?",
                        "Say it again.",
                        "Could you repeat that, please?",
                        "I don't understand you."
                    ],
                    answer: 2,
                    explanation: "「Could you repeat that, please?」はビジネスの電話で聞き返す際の丁寧な定番フレーズです。「What?」や「Say it again.」は失礼に当たります。"
                },
                {
                    id: "q901_3",
                    type: "choice",
                    question: "会議で相手の意見に反対する際の適切な表現はどれですか？",
                    options: [
                        "You are wrong.",
                        "That's a terrible idea.",
                        "I see your point, but...",
                        "No, I disagree."
                    ],
                    answer: 2,
                    explanation: "「I see your point, but...」は相手の意見を認めた上で反対意見を述べる丁寧な表現です。直接的な否定は避け、クッション表現を使いましょう。"
                }
            ]
        }
    ]
};