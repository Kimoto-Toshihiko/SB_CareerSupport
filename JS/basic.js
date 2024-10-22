input {
    border: 1px solid #333;
    margin: 0;
    font-size: 90%;
    box-sizing: border-box;
}
   
/* 検証の要件を満たさない（:invalid を適用された）要素のスタイル */
input:invalid, textarea:invalid, select:invalid {
border-color: #900;
background-color: #FDD;
}
/* 検証の要件を満たさないラジオボタンとチェックボックスのスタイル（背景色が適用されないので） */
input[type="radio"]:invalid, input[type="checkbox"]:invalid {
box-shadow: 0 0 2px 1px red;
}
/* Safari では上記の  が反映されないので文字色を変更 */
input[type="radio"]:invalid + label, input[type="checkbox"]:invalid + label {
color: red;
}