const LEVEL7_DATA = {
    id: 7,
    title: "TOEIC対策 Part1-4",
    icon: "&#127897;",
    description: "TOEICリスニングセクションの攻略法を学ぶ",
    modules: [
        {
            id: 701,
            title: "TOEICリスニング問題攻略法",
            duration: "25分",
            content: "<h2>TOEICリスニングセクションの構成</h2>" +
                "<p>TOEICのリスニングセクションは<strong>約45分間・100問</strong>で構成されています。各Partの特徴と攻略法を理解することが、スコアアップの第一歩です。</p>" +
                "<table><thead><tr><th>Part</th><th>形式</th><th>問題数</th><th>時間配分の目安</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>Part 1</strong></td><td>写真描写問題</td><td>6問</td><td>約3分</td></tr>" +
                "<tr><td><strong>Part 2</strong></td><td>応答問題</td><td>25問</td><td>約9分</td></tr>" +
                "<tr><td><strong>Part 3</strong></td><td>会話問題</td><td>39問（13セット）</td><td>約17分</td></tr>" +
                "<tr><td><strong>Part 4</strong></td><td>説明文問題</td><td>30問（10セット）</td><td>約16分</td></tr>" +
                "</tbody></table>" +
                "<h2>Part 1 写真描写問題の攻略法</h2>" +
                "<p>Part 1は写真を見て、4つの英文から写真を正しく描写しているものを選ぶ問題です。最も簡単なPartですが、<strong>トラップ</strong>があります。</p>" +
                "<h3>Part 1の頻出トラップ</h3>" +
                "<ul>" +
                "<li><strong>似た音のひっかけ</strong>：copying（コピーしている）と coping（対処している）、shipping（発送）と shopping（買い物）</li>" +
                "<li><strong>時制のトラップ</strong>：進行形（〜している）と完了形（〜してある）の違い → 棚に本が「並べられている」（are arranged）vs 人が「並べている」（is arranging）</li>" +
                "<li><strong>主語のすり替え</strong>：写真に映っていない人や物を主語にした選択肢</li>" +
                "</ul>" +
                "<div class='info-box tip'><p><strong>攻略のコツ：</strong>写真を見たら、まず「人が何をしているか」「物がどこにあるか」を頭の中で英語にしてみましょう。消去法で明らかに違う選択肢を消していくのが有効です。</p></div>" +
                "<h2>Part 2 応答問題の攻略法</h2>" +
                "<p>Part 2は短い質問や発言を聞いて、最も適切な応答を3つの選択肢から選ぶ問題です。<strong>最初の3語を聞き逃さない</strong>ことが最重要ポイントです。</p>" +
                "<h3>質問タイプ別の攻略法</h3>" +
                "<table><thead><tr><th>質問タイプ</th><th>聞くべき語</th><th>注意点</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>WH疑問文</strong></td><td>When, Where, Who, What, Why, How</td><td>Yes/Noで答える選択肢は不正解</td></tr>" +
                "<tr><td><strong>Yes/No疑問文</strong></td><td>Do, Does, Did, Is, Are, Can, Will</td><td>間接的な回答（提案・質問返し）に注意</td></tr>" +
                "<tr><td><strong>選択疑問文</strong></td><td>A or B?</td><td>AでもBでもない第三の回答に注意</td></tr>" +
                "<tr><td><strong>付加疑問文</strong></td><td>〜, isn't it?</td><td>内容への同意・不同意で回答</td></tr>" +
                "</tbody></table>" +
                "<h2>Part 3 会話問題の攻略法</h2>" +
                "<p>Part 3は2〜3人の会話を聞いて、設問に答える問題です。1つの会話に対して<strong>3つの設問</strong>があります。</p>" +
                "<h3>Part 3の黄金ルール</h3>" +
                "<ol>" +
                "<li><strong>先読み</strong>：音声が流れる前に設問と選択肢に目を通す（最重要）</li>" +
                "<li><strong>場面の特定</strong>：最初の2〜3文で「誰が」「どこで」「何について」話しているか把握</li>" +
                "<li><strong>言い換え（パラフレーズ）</strong>に注意：音声の表現と選択肢の表現が異なることが多い</li>" +
                "<li><strong>図表問題</strong>：先に図表の内容を把握しておく</li>" +
                "</ol>" +
                "<h2>Part 4 説明文問題の攻略法</h2>" +
                "<p>Part 4は1人のスピーカーによるトーク（アナウンス、留守番電話、スピーチなど）を聞いて設問に答える問題です。</p>" +
                "<h3>Part 4の頻出ジャンル</h3>" +
                "<ul>" +
                "<li><strong>電話メッセージ</strong>：用件、コールバックの依頼、連絡先</li>" +
                "<li><strong>会議・プレゼン</strong>：議題、決定事項、次のステップ</li>" +
                "<li><strong>広告・アナウンス</strong>：商品・サービスの特徴、特典、期限</li>" +
                "<li><strong>ニュース・天気予報</strong>：出来事、影響、予測</li>" +
                "<li><strong>ツアーガイド</strong>：場所、スケジュール、注意事項</li>" +
                "</ul>" +
                "<div class='info-box warning'><p><strong>時間管理：</strong>Part 3・4では「先読み」が命です。1つのセットが終わったら、解答をマークしたらすぐに次のセットの設問を先読みしましょう。ナレーションの指示文（Questions 41 through 43...）が読まれている間も先読みの時間として活用します。</p></div>",
            quiz: [
                {
                    id: "q701_1",
                    type: "choice",
                    question: "TOEIC Part 2で最も重要なポイントはどれですか？",
                    options: ["選択肢を全て暗記する", "最初の3語を聞き逃さない", "全文を完璧に聞き取る", "メモを取る"],
                    answer: 1,
                    explanation: "Part 2では最初の3語（特にWH語やDo/Doesなど）で質問の種類が決まります。最初の3語を聞き逃すと正解できなくなります。"
                },
                {
                    id: "q701_2",
                    type: "choice",
                    question: "TOEIC Part 3・4の攻略で「黄金ルール」とされるテクニックはどれですか？",
                    options: ["メモを取りながら聞く", "音声を2回聞く", "設問と選択肢の先読み", "消去法で解く"],
                    answer: 2,
                    explanation: "Part 3・4では音声が流れる前に設問と選択肢を先読みすることが最重要テクニックです。何を聞けばよいか分かった状態で音声を聞くことで、正答率が大幅に上がります。"
                },
                {
                    id: "q701_3",
                    type: "choice",
                    question: "Part 2のWH疑問文に対して、通常は不正解となる回答パターンはどれですか？",
                    options: ["具体的な場所を答える回答", "Yes/Noで答える回答", "理由を述べる回答", "時間を答える回答"],
                    answer: 1,
                    explanation: "WH疑問文（When, Where, Who, What, Why, How）にはYes/Noで答えることはできません。Yes/Noで始まる選択肢はWH疑問文の回答としては不正解です。"
                }
            ]
        }
    ]
};