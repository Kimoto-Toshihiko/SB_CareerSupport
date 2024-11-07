function toggleCustomInput(select) {
    // 対応するテキストエリアを特定
    var textId = "comment-" + select.id.split('-').pop();
    var text = document.getElementById(textId);
    // "その他（自由記述）"が選択された場合のみ、テキストエリアを有効化
    if(select.value === "etc") {
        document.getElementById(textId).disabled = false; // テキストエリアを有効化
    } else {
        document.getElementById(textId).disabled = true; // テキストエリアを無効化
        text.value = ""; // テキストエリアをクリア
        // 入力フォームの内容を取得
        let inputForm = document.getElementById(textId).content.value;
		// 入力内容を画面に出力
        document.getElementById(textId).textContent = `${inputForm}`;
    }
}