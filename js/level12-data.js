const LEVEL12_DATA = {
    id: 12,
    title: "英語面接と資格活用",
    icon: "&#127941;",
    description: "英語面接対策、TOEIC/英検の使い分け",
    modules: [
        {
            id: 1201,
            title: "英語面接対策と資格活用",
            duration: "20分",
            content: "<h2>英語面接の基本戦略</h2>" +
                "<p>英語面接は多くの外資系企業や国際的な企業で実施されています。<strong>流暢さよりも論理性と準備</strong>が重視されます。ペラペラ話す必要はありませんが、自分の考えを筋道立てて説明できることが求められます。</p>" +
                "<h3>英語面接の頻出質問と回答戦略</h3>" +
                "<table><thead><tr><th>質問</th><th>回答のポイント</th><th>使えるフレーズ</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>Tell me about yourself.</strong></td><td>職歴のハイライトを1-2分で</td><td>I have X years of experience in... / Currently, I am responsible for...</td></tr>" +
                "<tr><td><strong>Why do you want to work here?</strong></td><td>企業研究に基づく具体的理由</td><td>I'm particularly drawn to your company because... / What excites me most about this role is...</td></tr>" +
                "<tr><td><strong>What are your strengths?</strong></td><td>具体的なエピソードを添える</td><td>One of my key strengths is... For example, in my previous role...</td></tr>" +
                "<tr><td><strong>What are your weaknesses?</strong></td><td>改善中の弱点を正直に</td><td>I used to struggle with..., but I've been working on it by...</td></tr>" +
                "<tr><td><strong>Where do you see yourself in 5 years?</strong></td><td>成長意欲を示す</td><td>In five years, I hope to have developed expertise in... / I'd like to be in a position where I can...</td></tr>" +
                "</tbody></table>" +
                "<h2>STAR法 - 行動面接の必勝フレームワーク</h2>" +
                "<p>行動面接（Behavioral Interview）では過去の具体的な経験を問われます。<strong>STAR法</strong>で回答を構成しましょう。</p>" +
                "<table><thead><tr><th>要素</th><th>内容</th><th>フレーズ例</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>S - Situation</strong></td><td>状況の説明</td><td>In my previous role at [会社名], we faced a situation where...</td></tr>" +
                "<tr><td><strong>T - Task</strong></td><td>自分の役割・課題</td><td>My responsibility was to... / I was tasked with...</td></tr>" +
                "<tr><td><strong>A - Action</strong></td><td>取った行動</td><td>What I did was... / I decided to... / I took the initiative to...</td></tr>" +
                "<tr><td><strong>R - Result</strong></td><td>結果・成果</td><td>As a result, we achieved... / This led to a X% increase in...</td></tr>" +
                "</tbody></table>" +
                "<h3>行動面接の頻出質問</h3>" +
                "<ul>" +
                "<li>Tell me about a time when you had to deal with a difficult situation.（困難な状況にどう対処したか）</li>" +
                "<li>Give me an example of when you showed leadership.（リーダーシップを発揮した例）</li>" +
                "<li>Describe a situation where you had to work under pressure.（プレッシャー下での仕事の例）</li>" +
                "<li>Tell me about a time you made a mistake. How did you handle it?（失敗とその対処法）</li>" +
                "</ul>" +
                "<h2>TOEIC と英検の使い分け</h2>" +
                "<p>日本の英語資格試験は目的に応じて使い分けることが重要です。</p>" +
                "<table><thead><tr><th>項目</th><th>TOEIC L&R</th><th>英検</th><th>TOEIC S&W</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>測定技能</strong></td><td>リスニング・リーディング</td><td>4技能（読・聞・書・話）</td><td>スピーキング・ライティング</td></tr>" +
                "<tr><td><strong>スコア/級</strong></td><td>10-990点</td><td>1級〜5級</td><td>各200点満点</td></tr>" +
                "<tr><td><strong>有効期限</strong></td><td>公式には2年推奨</td><td>生涯有効</td><td>公式には2年推奨</td></tr>" +
                "<tr><td><strong>主な用途</strong></td><td>就職・転職・昇進</td><td>入試・就職</td><td>スピーキング力証明</td></tr>" +
                "<tr><td><strong>受験頻度</strong></td><td>年10回以上</td><td>年3回</td><td>年10回以上</td></tr>" +
                "<tr><td><strong>受験料</strong></td><td>約7,810円</td><td>級により異なる</td><td>約10,450円</td></tr>" +
                "</tbody></table>" +
                "<h3>目的別おすすめ資格</h3>" +
                "<table><thead><tr><th>目的</th><th>おすすめ</th><th>目標スコア/級</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>日系企業への就職・昇進</td><td>TOEIC L&R</td><td>600-730点</td></tr>" +
                "<tr><td>外資系企業への転職</td><td>TOEIC L&R + S&W</td><td>800点以上 + S160/W170以上</td></tr>" +
                "<tr><td>大学入試</td><td>英検</td><td>2級〜準1級</td></tr>" +
                "<tr><td>海外留学</td><td>IELTS / TOEFL</td><td>IELTS 6.0以上 / TOEFL 80以上</td></tr>" +
                "<tr><td>英語力の総合証明</td><td>英検1級</td><td>合格</td></tr>" +
                "</tbody></table>" +
                "<h2>英語学習のロードマップ</h2>" +
                "<p>この Academy で学んだ内容を活かし、以下のステップで英語力を継続的に向上させていきましょう。</p>" +
                "<ol>" +
                "<li><strong>現在地の確認</strong>：TOEIC or 英検を受験して現在のレベルを把握</li>" +
                "<li><strong>短期目標の設定</strong>：3ヶ月後のスコア/級を決める</li>" +
                "<li><strong>日々の学習習慣</strong>：毎日30分以上の学習時間を確保</li>" +
                "<li><strong>バランスの取れた学習</strong>：4技能（読・聞・書・話）をバランスよく</li>" +
                "<li><strong>定期的な振り返り</strong>：月1回は学習計画を見直す</li>" +
                "</ol>" +
                "<div class='info-box success'><p><strong>おめでとうございます！</strong>この英語 Academy の全12レベルを学習しました。ここで学んだ知識を日々の学習に活かし、実践を通じて英語力を磨いていきましょう。英語学習は終わりのない旅ですが、正しい方法で続ければ必ず成果が出ます。</p></div>" +
                "<div class='info-box tip'><p><strong>最後のアドバイス：</strong>英語学習で最も重要なのは「継続」です。完璧を目指す必要はありません。毎日少しずつ、楽しみながら続けることが最大の成功の秘訣です。</p></div>",
            quiz: [
                {
                    id: "q1201_1",
                    type: "choice",
                    question: "英語の行動面接で回答を構成する際に推奨されるフレームワークはどれですか？",
                    options: ["PREP法", "STAR法", "SWOT分析", "5W1H"],
                    answer: 1,
                    explanation: "STAR法（Situation-Task-Action-Result）は行動面接の必勝フレームワークです。状況→課題→行動→結果の順に具体的なエピソードを話します。"
                },
                {
                    id: "q1201_2",
                    type: "choice",
                    question: "外資系企業への転職で最も有効なTOEICの目標スコアはどれですか？",
                    options: ["500点以上", "600点以上", "800点以上", "満点（990点）"],
                    answer: 2,
                    explanation: "外資系企業への転職ではTOEIC L&R 800点以上が一般的な目安です。加えてS&Wのスコアも求められることが増えています。"
                },
                {
                    id: "q1201_3",
                    type: "choice",
                    question: "「Tell me about yourself.」に対する回答で最も適切なアプローチはどれですか？",
                    options: [
                        "子供時代から現在までの人生を詳しく話す",
                        "趣味や好きな食べ物について話す",
                        "職歴のハイライトを1-2分で簡潔に話す",
                        "志望動機を詳しく説明する"
                    ],
                    answer: 2,
                    explanation: "「Tell me about yourself.」は自己紹介の質問です。職歴のハイライトを1-2分で簡潔に、応募ポジションに関連する経験を中心に話しましょう。"
                }
            ]
        }
    ]
};