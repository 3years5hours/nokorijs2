/* <![CDATA[ */
<!--

var weeks  = new Array('日','月','火','水','木','金','土');
        var today       = new Date();                           //      日付オブジェクト取得
        var week        = weeks[today.getDay()];        //      曜日取得
        var string      = '';                                           //      文言格納用変数
        var a = "※受付終了の場合は、予約注文となり翌月曜日に発送いたします。"
        var b = "<h2>4月29日～5月7日はお休みとなります。4月28日以降のご注文は5月8日に発送いたします。</h2>"
        var c = "<h2>8月13日～20日はお休みとなります。8月11日までのご注文は通常通り翌営業日発送、8月12日以降のご注文は21日発送となります。</h2>"
        var d = "<h2>年内発送は12/28ご注文分までとなります。<br>12/29～1/4のご注文分は1/5発送となります。</h2>"
        var e = "<h2>在庫少数のため増刷中です。本日のご注文は10/24(月)の発送となります。</h2>"
        var f = "<h1>※6月1日より販売を再開いたします。</h1>"
        var g = "注文が集中しているため、10/21(水)～10/23(金)のご注文は10/24(土)発送となります。10/20(火)21：00までのご注文は翌日発送いたします。"
        var h = "<h2>8月29日～31日はお休みとなります。8月27日夜までのご注文は通常発送。以降のご注文は9月2日の発送となります。</h2>"

        switch(week) {
                case '日':
                        // 日曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'3'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;
                case '月':
                        // 月曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'15'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;
                case '火':
                        // 火曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'12'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;
                case '水':
                        // 水曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'9'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;
                case '木':
                        // 木曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'8'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;
                case '金':
                        // 金曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'6'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;
                case '土':
                        // 土曜日の場合
                        string = '今週分は残り'.fontsize(6).bold()+'5'.fontsize(7).bold().fontcolor("red")+'セットです。'.fontsize(6).bold();
                        break;

        }
        document.write( d +"<br>"  );
        //document.write( string +"<br>" );// 通常の残りセット数

-->
/*]]>*/
