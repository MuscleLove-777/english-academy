const LEVEL6_DATA = {
    id: 6,
    title: "リーディング力",
    icon: "&#128196;",
    description: "スキミング、スキャニング、精読法をマスターする",
    modules: [
        {
            id: 601,
            title: "リーディング力強化法",
            duration: "20分",
            content: "<h2>リーディングの3つのアプローチ</h2>" +
                "<p>効果的な英語リーディングには、目的に応じた<strong>3つの読み方</strong>を使い分けることが重要です。これらを意識的に使い分けられるようになると、TOEICのリーディングパートでも時間配分が改善し、スコアアップに直結します。</p>" +
                "<table><thead><tr><th>読み方</th><th>目的</th><th>速度</th><th>使う場面</th></tr></thead>" +
                "<tbody>" +
                "<tr><td><strong>スキミング（Skimming）</strong></td><td>全体の概要を把握</td><td>高速</td><td>新聞記事の大意把握、TOEIC Part 7の初読</td></tr>" +
                "<tr><td><strong>スキャニング（Scanning）</strong></td><td>特定の情報を探す</td><td>高速</td><td>日時・数値・固有名詞の検索</td></tr>" +
                "<tr><td><strong>精読（Intensive Reading）</strong></td><td>内容を深く理解</td><td>低速</td><td>契約書、学術論文、文法学習</td></tr>" +
                "</tbody></table>" +
                "<h2>スキミング（Skimming）のテクニック</h2>" +
                "<p>スキミングは<strong>全体像をすばやく掴む</strong>ための読み方です。全ての単語を読む必要はありません。</p>" +
                "<h3>スキミングの5つのポイント</h3>" +
                "<ol>" +
                "<li><strong>タイトルと見出し</strong>を最初にチェック - 文書のテーマが分かる</li>" +
                "<li><strong>各段落の最初の1〜2文</strong>（トピックセンテンス）を読む - 段落の要旨が分かる</li>" +
                "<li><strong>最後の段落</strong>を読む - 結論やまとめが書かれていることが多い</li>" +
                "<li><strong>太字・斜体・番号付きリスト</strong>に注目 - 重要なポイントが強調されている</li>" +
                "<li><strong>接続詞</strong>（however, therefore, in addition）に注目 - 論理の流れが分かる</li>" +
                "</ol>" +
                "<h2>スキャニング（Scanning）のテクニック</h2>" +
                "<p>スキャニングは<strong>特定の情報だけを素早く見つける</strong>読み方です。目を左右に動かすのではなく、ページ全体を見渡すようにします。</p>" +
                "<ul>" +
                "<li>探したい情報のキーワードを明確にしてから読み始める</li>" +
                "<li>数字、固有名詞、大文字で始まる語は目に入りやすい</li>" +
                "<li>表、グラフ、箇条書きの部分に情報が集約されていることが多い</li>" +
                "</ul>" +
                "<h2>精読（Intensive Reading）のテクニック</h2>" +
                "<p>精読は<strong>一文一文を正確に理解する</strong>読み方です。文法構造を分析し、単語の意味を確認しながら読みます。</p>" +
                "<h3>精読の手順</h3>" +
                "<ol>" +
                "<li><strong>文の構造を把握する</strong>（主語・動詞・目的語を見つける）</li>" +
                "<li><strong>修飾関係を明確にする</strong>（形容詞句・副詞句・関係詞節がどこにかかるか）</li>" +
                "<li><strong>未知の単語は文脈から推測する</strong>（すぐ辞書を引かない）</li>" +
                "<li><strong>段落ごとに要旨をまとめる</strong></li>" +
                "</ol>" +
                "<h2>英語リーディングの速度と語彙の関係</h2>" +
                "<table><thead><tr><th>レベル</th><th>読解速度（WPM）</th><th>必要語彙数</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>初級（A1-A2）</td><td>80-120 WPM</td><td>1,000-2,000語</td></tr>" +
                "<tr><td>中級（B1-B2）</td><td>150-200 WPM</td><td>3,000-5,000語</td></tr>" +
                "<tr><td>上級（C1-C2）</td><td>250-350 WPM</td><td>8,000-15,000語</td></tr>" +
                "<tr><td>ネイティブ</td><td>200-400 WPM</td><td>20,000-35,000語</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box tip'><p><strong>WPM（Words Per Minute）</strong>を定期的に測定しましょう。TOEICでPart 7を時間内に解くには、最低でも150 WPM以上の読解速度が必要です。速度を上げるには「多読」が最も効果的です。</p></div>" +
                "<div class='info-box success'><p><strong>多読のルール：</strong>自分のレベルより少し下の簡単な本を大量に読みましょう。辞書は使わず、分からない単語は飛ばして読みます。Graded Readers（レベル別の英語学習者向け書籍）がおすすめです。</p></div>",
            quiz: [
                {
                    id: "q601_1",
                    type: "choice",
                    question: "TOEICのPart 7で問題文を初めて読む際に最適な読み方はどれですか？",
                    options: ["精読", "スキミング", "スキャニング", "音読"],
                    answer: 1,
                    explanation: "スキミングは全体の概要を素早く把握する読み方で、TOEIC Part 7の初読に最適です。まず全体像を掴んでから設問に取り組みましょう。"
                },
                {
                    id: "q601_2",
                    type: "choice",
                    question: "スキミングの際に最も注目すべき箇所はどれですか？",
                    options: ["各段落の中間部分", "各段落の最初の1〜2文", "文書の脚注", "全ての固有名詞"],
                    answer: 1,
                    explanation: "各段落の最初の1〜2文（トピックセンテンス）にはその段落の要旨が書かれていることが多く、スキミングで最も重要な注目ポイントです。"
                },
                {
                    id: "q601_3",
                    type: "choice",
                    question: "TOEICのPart 7を時間内に解くために必要な最低限の読解速度は？",
                    options: ["80 WPM", "120 WPM", "150 WPM", "250 WPM"],
                    answer: 2,
                    explanation: "TOEICのPart 7を時間内に解くには最低150 WPM以上の読解速度が必要とされています。多読を通じて速度を上げることが重要です。"
                }
            ]
        }
    ]
};